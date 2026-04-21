import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
enum l {
  RandomDiff = 1,
  IntervalRandomDiff = 2,
}
@mj.trait
@mj.class("DianZanStyleTrait")
export default class DianZanStyleTrait extends Trait {
  _currSkData = null;
  _gameType = null;
  static traitKey = "DianZanStyle";
  static DEFAULT_STYLE_DATA = {
    gameCount: 0,
    currentGameStyleIndex: 0,
    lastPlayedStyleIndex: 0
  };
  get styleCount() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.styleCount) || 5;
  }
  get switchMode() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchMode) || l.RandomDiff;
  }
  get switchInterval() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchInterval) || 5;
  }
  get animPrefix() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.animPrefix) || "in_";
  }
  get bundleName() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStyle";
  }
  get spinePath() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spinePath) || "spine/dianzan_styles";
  }
  get isMergeGameType() {
    var t;
    return !!(null === (t = this.traitData) || void 0 === t ? void 0 : t.isMergeGameType);
  }
  get gameTypes() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [];
  }
  onLoad() {
    super.onLoad.call(this);
  }
  isActiveForCurrentMode() {
    if (1 === NormalGameData.getInstance().getCurrentLevelId()) return false;
    var t = this.gameTypes;
    return !t || 0 === t.length || t.includes(String(this._gameType));
  }
  getDataKey() {
    var t;
    return this.isMergeGameType ? "all" : String(null !== (t = this._gameType) && void 0 !== t ? t : "all");
  }
  getStyleData() {
    if (!this.localData.modeData) {
      this.localData.modeData = {};
      this.localData.modeData = this.localData.modeData;
    }
    var t = this.getDataKey();
    if (!this.localData.modeData[t]) {
      this.localData.modeData[t] = Object.assign({}, DianZanStyleTrait.DEFAULT_STYLE_DATA);
      this.localData.modeData = this.localData.modeData;
    }
    return this.localData.modeData[t];
  }
  saveStyleData(t) {
    var e = this.getDataKey();
    this.localData.modeData[e] = t;
    this.localData.modeData = this.localData.modeData;
  }
  getLastGameKey() {
    var t,
      e,
      a = String(null !== (t = this._gameType) && void 0 !== t ? t : "unknown");
    return (null === (e = this.localData.lastGameKeys) || void 0 === e ? void 0 : e[a]) || "";
  }
  setLastGameKey(t) {
    var e;
    this.localData.lastGameKeys || (this.localData.lastGameKeys = {});
    this.localData.lastGameKeys[String(null !== (e = this._gameType) && void 0 !== e ? e : "unknown")] = t;
    this.localData.lastGameKeys = this.localData.lastGameKeys;
  }
  onInitViewBhv_crtTls(t, e) {
    var a, r, n, i;
    this._gameType = null === (r = null === (a = t.ins) || void 0 === a ? void 0 : a._context) || void 0 === r ? void 0 : r.gameType;
    if (this.isActiveForCurrentMode()) {
      var o = this.getStyleData(),
        l = this.getCurrentGameKey(),
        s = this.getLastGameKey();
      if (!(!l || l === s)) {
        o.gameCount += 1;
        o.currentGameStyleIndex = 0;
        this.saveStyleData(o);
        this.setLastGameKey(l);
      }
      this.loadSpine(null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr);
      e();
    } else {
      this._currSkData = null;
      e();
    }
  }
  getCurrentGameKey() {
    var t, e;
    try {
      var a = UserModel.getInstance();
      if (null != this._gameType && a) {
        var r = a.getGameDataByGameType(this._gameType);
        return ((null === (t = null == r ? void 0 : r.getLevelId) || void 0 === t ? void 0 : t.call(r)) || 0) + "_" + ((null === (e = null == r ? void 0 : r.getReplayCount) || void 0 === e ? void 0 : e.call(r)) || 0);
      }
    } catch (t) {}
    return "";
  }
  loadSpine(t) {
    var e = this;
    if (t && "function" == typeof t.loadRes) {
      this._currSkData = null;
      t.loadRes(this.spinePath, sp.SkeletonData, this.bundleName).then(function (t) {
        var a = Array.isArray(t) ? t[0] : t;
        e._currSkData = a || null;
      }).catch(function () {
        e._currSkData = null;
      });
    }
  }
  onDianZanItem_initComp(t, e) {
    var a;
    if (this.isActiveForCurrentMode()) {
      var r = null === (a = t.ins) || void 0 === a ? void 0 : a._spineAnim,
        n = this._currSkData;
      if (n && r && r.skeletonData !== n) {
        r.clearTracks();
        r.setToSetupPose();
        r.skeletonData = n;
      }
      e();
    } else e();
  }
  onDianZanBhv_getAniName(t, e) {
    if (this.isActiveForCurrentMode()) {
      if (this._currSkData) {
        this.getStyleData().lastPlayedStyleIndex;
        var a = this.getNextStyleIndex(),
          r = "" + this.animPrefix + a;
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.jump,
          returnVal: r
        });
      } else e();
    } else e();
  }
  onDianZanBhv_playAni(t, e) {
    var a;
    if (this.isActiveForCurrentMode()) {
      if (this._currSkData) {
        var r = null === (a = t.args) || void 0 === a ? void 0 : a[2];
        if (r && r.startsWith(this.animPrefix)) {
          var n = parseInt(r.substring(this.animPrefix.length), 10);
          if (!isNaN(n)) {
            var i = this.getStyleData();
            i.lastPlayedStyleIndex;
            i.lastPlayedStyleIndex = n;
            this.saveStyleData(i);
          }
        }
        e();
      } else e();
    } else e();
  }
  getNextStyleIndex() {
    var t = this.getStyleData();
    if (this.switchMode === l.RandomDiff) return this.randomStyleExcludeLast(t);
    if (t.currentGameStyleIndex > 0) return t.currentGameStyleIndex;
    var e;
    e = t.gameCount % this.switchInterval == 1 || 0 === t.lastPlayedStyleIndex ? this.randomStyleExcludeLast(t) : t.lastPlayedStyleIndex;
    t.currentGameStyleIndex = e;
    this.saveStyleData(t);
    return e;
  }
  randomStyleExcludeLast(t) {
    var e = (t || this.getStyleData()).lastPlayedStyleIndex || 0,
      a = Array.from({
        length: this.styleCount
      }, function (t, e) {
        return e + 1;
      }),
      r = a.indexOf(e);
    if (-1 !== r) {
      a.splice(r, 1);
      a.push(e);
      return a[Math.floor(Math.random() * (a.length - 1))];
    }
    return a[Math.floor(Math.random() * a.length)];
  }
}