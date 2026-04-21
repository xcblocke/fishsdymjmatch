import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("HardLevelTrait")
export default class HardLevelTrait extends ExtractTrait {
  static traitKey = "HardLevel";
  onLoad() {
    var t, r, a, i, n, o, l, u, c, s, v, p, d;
    super.onLoad.call(this);
    var f = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== r ? r : 10,
      y = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 10,
      h = null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.hardMod) && void 0 !== o ? o : 0,
      _ = null !== (u = null === (l = this._traitData) || void 0 === l ? void 0 : l.expertMod) && void 0 !== u ? u : 5,
      T = null === (s = null === (c = this._traitData) || void 0 === c ? void 0 : c.useFixedLevel) || void 0 === s || s,
      k = null !== (p = null === (v = this._traitData) || void 0 === v ? void 0 : v.levelDataPath) && void 0 !== p ? p : "config/specialLevels/special_levels_travel",
      g = (null === (d = this._traitData) || void 0 === d ? void 0 : d.levelDataBundle) || "mainRes";
    this._config = {
      startLevel: f,
      interval: y,
      hardMods: Array.isArray(h) ? h : [h],
      expertMods: Array.isArray(_) ? _ : [_],
      useFixedLevel: T,
      levelDataPath: k,
      levelDataBundle: g
    };
  }
  onTravelHardLv_getDataCfg(e, t) {
    if (this.checkGameMode()) {
      var r = this._config,
        a = r.levelDataPath,
        i = r.levelDataBundle;
      if (a) {
        t({
          returnVal: {
            dataPath: a,
            bundleName: i
          },
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else {
        t();
      }
    } else t();
  }
  onExtractTool_isHardUI(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        a = this.checkIsHardLevel(r);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else t();
  }
  onExtractTool_isExpertUI(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        a = this.checkIsExpertLevel(r);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else t();
  }
  onExtractTool_isHardUseFix(e, t) {
    if (this.checkGameMode()) {
      e.args[0];
      var r = this._config.useFixedLevel;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r
      });
    } else t();
  }
  onTLGameModel_isHardLv(e, t) {
    var r = e.args[0];
    if (this.checkTravelActivity(r)) {
      var a = this.checkIsHardLevel(r) || this.checkIsExpertLevel(r);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: false
    });
  }
  checkTravelActivity(e) {
    var t,
      r,
      a = this._traitData.travelActivitys || ["Yoga", "Flip", "Color"],
      i = TravelGameModel.getInstance(),
      n = i.getCurJourney();
    if (!n) return false;
    var l = i.getLevelById(e, n);
    if (!l || !l.playType) return false;
    try {
      for (var u = __values(l.playType), s = u.next(); !s.done; s = u.next()) {
        var v = s.value,
          p = this.journeyTypeToString(v);
        if (p && a.includes(p)) return true;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (r = u.return) && r.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    return false;
  }
  onExtractTool_isTravelHard(e, t) {
    if (this.checkGameMode()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: true
      });
    } else {
      t();
    }
  }
  checkIsHardLevel(e) {
    var t = this._config,
      r = t.startLevel,
      a = t.interval,
      i = t.hardMods;
    if (e < r) return false;
    var n = e % a;
    return i.includes(n);
  }
  checkIsExpertLevel(e) {
    var t = this._config,
      r = t.startLevel,
      a = t.interval,
      i = t.expertMods;
    if (e < r) return false;
    var n = e % a;
    return i.includes(n);
  }
}