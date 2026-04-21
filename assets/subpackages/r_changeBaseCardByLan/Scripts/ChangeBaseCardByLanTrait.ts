import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { BUNDLE_SKIN_ID_MAP } from '../../../Scripts/gamePlay/dot/DChangeBaseSkin';
var v = {
  en: "EN",
  "zh-cn": "CN",
  "zh-tw": "TW",
  "zh-hk": "TW",
  ko: "KO",
  ja: "JP",
  ru: "RU",
  es: "ES",
  pt: "PT",
  de: "DE",
  fr: "FR"
};
var y = /^[btW][1-9]$/;
@mj.trait
@mj.class("ChangeBaseCardByLanTrait")
export default class ChangeBaseCardByLanTrait extends Trait {
  _langSuffixMap = {};
  _gameTypes = [];
  _currentGameSkin = "l_lanCardEN";
  _skinEnabled = true;
  _changeCardNames = [];
  _lanActiveSkin = "l_lanCardEN";
  static traitKey = "ChangeBaseCardByLan";
  onLoad() {
    var e,
      r,
      n = this;
    super.onLoad.call(this);
    this._langSuffixMap = Object.assign({}, v, (null === (e = this._traitData) || void 0 === e ? void 0 : e.langBundleMap) || {});
    this._gameTypes = (null === (r = this._traitData) || void 0 === r ? void 0 : r.gameTypes) || [];
    var i = this.localData.unlockedSkins || [];
    this.localData.unlockedSkins = i;
    Promise.resolve().then(function () {
      var t;
      if (!n.localData.activeSkin) {
        n.localData.activeSkin = n.getDefaultSkin() || "l_lanCardEN";
        n.localData.activeSkin = n.localData.activeSkin;
      }
      n._currentGameSkin = n.localData.activeSkin;
      n._lanActiveSkin = n.localData.activeSkin;
      2 != (null === (t = n._traitData) || void 0 === t ? void 0 : t.autoLockSkin) && n.unlockSkin(n.localData.activeSkin);
      n.defOpenSkins();
      n._loadSkinBundle(n._currentGameSkin).catch(function (t) {
        console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] 初始化预加载皮肤失败: " + (null == t ? void 0 : t.message));
      });
      n.registerEvent([{
        event: "DGameStart_adjust"
      }, {
        event: "DGameEnd_adjust"
      }]);
    });
  }
  getMessageListeners() {
    return {
      "language-changed": this._onLanguageChanged.bind(this)
    };
  }
  onLangSelTrait_getAssLan(t, e) {
    if (this._traitData.language) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._traitData.language
      });
    } else {
      e();
    }
  }
  onMainGameCtrl_initRes(t, e) {
    try {
      var r = t.ins,
        n = null == r ? void 0 : r.gameType;
      if (!this._isGameTypeOpen(n)) {
        e();
        return;
      }
      var i = this.localData.activeSkin || "l_lanCardEN";
      i = this.getRealBundleName(i);
      r && "function" == typeof r.addPreloadRes && "l_lanCardJP" !== i && r.addPreloadRes("SpriteAtlas", i + ":atlas/cardIcon");
    } catch (t) {
      console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] initRes处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onIptSetLv_exec(t, e) {
    var r, n, i;
    try {
      var o = t.ins,
        l = null === (r = t.args) || void 0 === r ? void 0 : r[0],
        s = null === (n = null == o ? void 0 : o.gameContext) || void 0 === n ? void 0 : n.gameType;
      this._changeCardNames = [];
      this._skinEnabled = this._isGameTypeOpen(s);
      if (!this._skinEnabled) {
        e();
        return;
      }
      if (null === (i = null == l ? void 0 : l.levelData) || void 0 === i ? void 0 : i.isNewGame) this._currentGameSkin = this._resolveCurrentGameSkin({
        gameType: s
      });else {
        var c = this._getHardSkin(s);
        c && (this._currentGameSkin = c);
      }
    } catch (t) {
      console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] IptSetLv_exec处理失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onCardUtil_atlasPathBundle(t, e) {
    var r;
    try {
      var n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
      if (!this._skinEnabled) {
        e();
        return;
      }
      if (this.checkCardNumberOpen()) {
        e();
        return;
      }
      if (!n || !y.test(n)) {
        e();
        return;
      }
      if (this._isTaskCard(n)) {
        e();
        return;
      }
      var i = this._currentGameSkin || "l_lanCardEN";
      i = this.getRealBundleName(i);
      -1 === this._changeCardNames.indexOf(n) && this._changeCardNames.push(n);
      if ("l_lanCardJP" === i) {
        e();
        return;
      }
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          path: "atlas/cardIcon/" + n,
          bundleName: i,
          fromAtlas: true
        }
      });
    } catch (t) {
      console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] 劫持资源路径失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onLangSelUI_getItemCell(t, e) {
    var r;
    try {
      var n = mj.getClassByName("UILanguageLockItem");
      if (!n) {
        e();
        return;
      }
      var i = null === (r = t.ins) || void 0 === r ? void 0 : r._tableView,
        o = null == i ? void 0 : i.dequeueCellByKey("languageLockItem");
      o && cc.isValid(o) || (o = n.createCell("languageLockItem"));
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: o
      });
    } catch (t) {
      console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] getItemCell劫持失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onLangSelUI_getItemCellCmp(t, e) {
    var r;
    try {
      var n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
      if (!cc.isValid(n)) {
        e();
        return;
      }
      var i = mj.getClassByName("UILanguageLockItem");
      if (!i) {
        e();
        return;
      }
      var o = n.getComponent(i);
      if (o) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: o
        });
      } else {
        e();
      }
    } catch (t) {
      console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] getItemCellCmp劫持失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onWinCtrl_viewShow(t, e) {
    var a,
      r = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
    this.checkNextSkin(r);
    e();
  }
  onTLWinCtrl_viewShow(t, e) {
    var a,
      r = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
    this.checkNextSkin(r);
    e();
  }
  onTile2WinCtrl_viewShow(t, e) {
    var a,
      r = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
    this.checkNextSkin(r);
    e();
  }
  onDGameStart_adjust(t, e) {
    var a,
      r = __read(t.args, 2),
      n = r[0],
      i = r[1];
    this._skinEnabled && this._isGameTypeOpen(i.gameType) && (n.language_skin_id = null !== (a = BUNDLE_SKIN_ID_MAP[this._currentGameSkin]) && void 0 !== a ? a : 0);
    e();
  }
  onDGameEnd_adjust(t, e) {
    var a,
      r = __read(t.args, 2),
      n = r[0],
      i = r[1];
    this._skinEnabled && this._isGameTypeOpen(i.gameType) && (n.language_skin_id = null !== (a = BUNDLE_SKIN_ID_MAP[this._currentGameSkin]) && void 0 !== a ? a : 0);
    e();
  }
  checkNextSkin(t) {
    if (this.isHardRandom()) {
      var e = null == t ? void 0 : t.gameType,
        r = UserModel.getInstance().getGameDataByGameType(e),
        n = (null == r ? void 0 : r.getLevelId()) || 0;
      if (GameUtils.isTypeHardLevel(e, n)) {
        var i = this._randomPickSkin();
        this._saveHardSkin(e, i);
        i != "l_lanCardEN" && this._loadSkinBundle(i).catch(function (t) {
          console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] 预加载困难关皮肤失败: " + (null == t ? void 0 : t.message));
        });
      } else this._clearHardSkin(e);
    }
  }
  defOpenSkins() {
    var t,
      e = null === (t = this._traitData) || void 0 === t ? void 0 : t.openList;
    if (e && e.length > 0) for (var a = 0; a < e.length; a++) this.unlockSkin("l_lanCard" + e[a]);
  }
  @mj.traitEvent("ChCardByLanTt_isHardRd")
  isHardRandom() {
    return false;
  }
  unlockSkin(t) {
    if (!t) return false;
    if (this.localData.unlockedSkins.includes(t)) return true;
    this.localData.unlockedSkins.push(t);
    this.localData.unlockedSkins = this.localData.unlockedSkins;
    return true;
  }
  setActiveSkin(t) {
    if (!t) return false;
    if (!this.localData.unlockedSkins.includes(t)) return false;
    this.localData.activeSkin = t;
    this.localData.activeSkin = this.localData.activeSkin;
    this._currentGameSkin = t;
    this._dispatchRefreshCards();
    return true;
  }
  getActiveSkin() {
    return this.localData.activeSkin || "l_lanCardEN";
  }
  getLanActiveSkin() {
    return this._lanActiveSkin || "l_lanCardEN";
  }
  getUnlockedSkins() {
    return this.localData.unlockedSkins || ["l_lanCardEN"];
  }
  getBundleByLang(t) {
    var e,
      a = t.toLowerCase().replace(/_/g, "-"),
      r = null !== (e = this._langSuffixMap[a]) && void 0 !== e ? e : this._langSuffixMap[a.split("-")[0]];
    return r ? "l_lanCard" + r : "l_lanCardEN";
  }
  _resolveCurrentGameSkin(t) {
    var e = this.localData.activeSkin || "l_lanCardEN";
    if (!this.isHardRandom()) return e;
    var a = null == t ? void 0 : t.gameType;
    if (a !== MjGameType.Normal) return e;
    var r = UserModel.getInstance().getGameDataByGameType(MjGameType.Normal),
      n = (null == r ? void 0 : r.getLevelId()) || 0;
    if (GameUtils.isTypeHardLevel(a, n)) {
      var i = this._getHardSkin(a) || this._randomPickSkin();
      this._saveHardSkin(a, i);
      return i;
    }
    this._clearHardSkin(a);
    return e;
  }
  _saveHardSkin(t, e) {
    var a = this.localData.hardSkins || {};
    a[t] = e;
    this.localData.hardSkins = a;
  }
  _clearHardSkin(t) {
    var e = this.localData.hardSkins;
    if (e && e[t]) {
      delete e[t];
      this.localData.hardSkins = e;
    }
  }
  _getHardSkin(t) {
    var e;
    return (null === (e = this.localData.hardSkins) || void 0 === e ? void 0 : e[t]) || null;
  }
  @mj.traitEvent("ChCardByLanTt_getDSk")
  getDefaultSkin() {
    return this._getCurrentLangBundle();
  }
  _getCurrentLangBundle() {
    var t,
      e = (LoginModel.getInstance().language || "en").toLowerCase().replace(/_/g, "-"),
      a = null !== (t = this._langSuffixMap[e]) && void 0 !== t ? t : this._langSuffixMap[e.split("-")[0]];
    return a ? "l_lanCard" + a : "l_lanCardEN";
  }
  _isGameTypeOpen(t) {
    return !this._gameTypes || 0 === this._gameTypes.length || -1 !== this._gameTypes.indexOf(t);
  }
  _randomPickSkin() {
    var t = this.localData.unlockedSkins;
    return t && 0 !== t.length ? t[Math.floor(Math.random() * t.length)] : "l_lanCardEN";
  }
  _onLanguageChanged(t) {
    var e = this,
      r = this.getBundleByLang(t),
      n = this.getLanguageBundle(r);
    this._lanActiveSkin = n;
    this._loadSkinBundle(n).then(function () {
      e.unlockSkin(n);
      e.setActiveSkin(n);
    }).catch(function (t) {
      console.error("[" + ChangeBaseCardByLanTrait.traitKey + "] 皮肤加载失败: " + (null == t ? void 0 : t.message));
    });
  }
  @mj.traitEvent("ChCardByLanTt_getLBdle")
  getLanguageBundle() {
    return this._getCurrentLangBundle();
  }
  @mj.traitEvent("ChCardByLanTt_getRBName")
  getRealBundleName(t) {
    return t;
  }
  _loadSkinBundle(t) {
    if ("l_lanCardJP" === (t = this.getRealBundleName(t))) return Promise.resolve();
    var e = GameUtils.getGameControllerByType();
    return e && "function" == typeof e.loadRes ? e.loadRes("atlas/cardIcon", cc.SpriteAtlas, t).then(function () {}) : Promise.resolve();
  }
  _dispatchRefreshCards() {
    mj.EventManager.emit(EGameEvent.View_RefreshBaseCards, this._changeCardNames);
  }
  _isTaskCard(t) {
    var e,
      a = mj.getClassByName("TaskModel");
    return (null === (e = null == a ? void 0 : a.getInstance()) || void 0 === e ? void 0 : e.getTaskCardResName()) === t;
  }
  checkCardNumberOpen() {
    return this._currentGameSkin === "l_lanCardEN" && !(!this._tm.getTraitData("CardNumber") || !this._tm.getTraitData("CardNumber2"));
  }
}