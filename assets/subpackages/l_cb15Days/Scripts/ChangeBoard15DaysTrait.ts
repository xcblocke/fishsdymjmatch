import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LowPriorityBundleLoader from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ChangeBoard15DaysTrait")
export default class ChangeBoard15DaysTrait extends Trait {
  installDaysThreshold = 15;
  bundleName = "r_cb15days";
  traitFolder = "trait999";
  configPath = null;
  offsetPath = null;
  levelDataPath = null;
  jsonPath = null;
  _gameTypes = [MjGameType.Normal];
  _isAble = false;
  _isChange = false;
  static traitKey = "ChangeBoard15Days";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this.installDaysThreshold = null !== (e = this._traitData.installDays) && void 0 !== e ? e : 15;
    this.configPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
    this.offsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
    this.levelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
    this.jsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
    this._gameTypes = null !== (r = this._traitData.gameType) && void 0 !== r ? r : [MjGameType.Normal];
    this.tryPreloadBundle();
  }
  tryPreloadBundle() {
    LowPriorityBundleLoader.getInstance().addTask(this.bundleName);
  }
  checkFunctionEnabled() {
    var t,
      e = UserModel.getInstance();
    if (!e) return false;
    var r = null === (t = e.getInstallTime) || void 0 === t ? void 0 : t.call(e);
    return !(!r || r <= 0) && Math.floor((Date.now() - r) / 86400000) >= this.installDaysThreshold;
  }
  isBundleLoaded() {
    return LowPriorityBundleLoader.getInstance().isBundlePreLoaded(this.bundleName);
  }
  checkCondition(t) {
    if (!this.isBundleLoaded()) return false;
    t || (t = ExtractTool.getCurrentGameType());
    return !!this._gameTypes.includes(t) && this.checkFunctionEnabled();
  }
  onExtNormLv_getConfigPath(t, e) {
    var r = ExtractTool.getCurrentGameType();
    this._isAble = this.checkCondition(r);
    if (this._isAble) {
      this._isChange = true;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.configPath
      });
    } else {
      e();
      this._isChange = false;
    }
  }
  onExtNormLv_getOffsetPath(t, e) {
    var r = ExtractTool.getCurrentGameType();
    if (this.checkCondition(r)) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.offsetPath
      });
    } else {
      e();
    }
  }
  onExtNormLv_getLevDataPath(t, e) {
    var r = ExtractTool.getCurrentGameType();
    if (this.checkCondition(r)) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.levelDataPath
      });
    } else {
      e();
    }
  }
  onExtNormLv_getJsonPath(t, e) {
    var r = ExtractTool.getCurrentGameType();
    if (this.checkCondition(r) && this._isChange) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.jsonPath
      });
    } else {
      e();
    }
  }
  onIptEnterAniFin_excute(t, e) {
    var r, a;
    e();
    if (this._isAble) {
      var n = t.ins,
        o = null === (a = null === (r = null == n ? void 0 : n.gameContext) || void 0 === r ? void 0 : r.getTileMapObject) || void 0 === a ? void 0 : a.call(r);
      o && this.countCardsByCardId(o);
    }
  }
  countCardsByCardId(t) {
    var e,
      r,
      a,
      n,
      o,
      l = new Map(),
      s = (null === (o = t.mapLayers) || void 0 === o ? void 0 : o.call(t)) || [];
    try {
      for (var u = __values(s), c = u.next(); !c.done; c = u.next()) {
        var d = c.value.allCards || [];
        try {
          for (var f = (a = void 0, __values(d)), h = f.next(); !h.done; h = f.next()) {
            var p = h.value;
            if (p && p.isValid) {
              var y = p.cardId;
              l.set(y, (l.get(y) || 0) + 1);
            }
          }
        } catch (t) {
          a = {
            error: t
          };
        } finally {
          try {
            h && !h.done && (n = f.return) && n.call(f);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (r = u.return) && r.call(u);
      } finally {
        if (e) throw e.error;
      }
    }
    return l;
  }
}