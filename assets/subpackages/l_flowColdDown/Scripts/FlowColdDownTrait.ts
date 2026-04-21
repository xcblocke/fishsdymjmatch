import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FlowColdDownTrait")
export default class FlowColdDownTrait extends Trait {
  _maxDown = 0;
  _downValue = 0;
  static traitKey = "FlowColdDown";
  onLoad() {
    var e, a;
    super.onLoad.call(this);
    this._maxDown = null !== (e = this._traitData.maxDown) && void 0 !== e ? e : 1;
    this._downValue = null !== (a = this._traitData.downValue) && void 0 !== a ? a : 1;
    this.ensureLocalData();
    this.updateSession();
    this.tryDownLevel();
  }
  ensureLocalData() {
    this.isEmptyField(this.localData.fcdSession) && (this.localData.fcdSession = 0);
    this.isEmptyField(this.localData.fcdSessionTime) && (this.localData.fcdSessionTime = 0);
    this.isEmptyField(this.localData.fcdDownCount) && (this.localData.fcdDownCount = 0);
    this.isEmptyField(this.localData.fcdDownValue) && (this.localData.fcdDownValue = 0);
    this.isEmptyField(this.localData.fcdCurLevel) && (this.localData.fcdCurLevel = 0);
    this.isEmptyField(this.localData.fcdPrevLevel) && (this.localData.fcdPrevLevel = 0);
    this.isEmptyField(this.localData.fcdNeedUpdate) && (this.localData.fcdNeedUpdate = false);
  }
  updateSession() {
    var t = this.localData.fcdSessionTime,
      e = Date.now(),
      a = GameUtils.isSameDay(t, e);
    this.localData.fcdSessionTime = e;
    this.localData.fcdSession = this.localData.fcdSession + 1;
    if (!a) {
      this.localData.fcdDownCount = 0;
      this.localData.fcdDownValue = 0;
      this.localData.fcdNeedUpdate = false;
    }
  }
  tryDownLevel() {
    this.localData.fcdSession <= 1 || this.localData.fcdDownCount >= this._maxDown || (this.localData.fcdNeedUpdate = true);
  }
  isEmptyField(t) {
    return null == t || "" === t;
  }
  onFlwLv_getResolveStg(t, e) {
    var a,
      o,
      i = null === (a = t.args) || void 0 === a ? void 0 : a[0],
      l = null === (o = t.args) || void 0 === o ? void 0 : o[1];
    if (i <= 0 || !l) e();else {
      t.args[0] = this.getFixedLevel(i);
      e();
    }
  }
  getFixedLevel(t) {
    var e = t;
    this.localData.fcdCurLevel > 0 && (e = this.localData.fcdCurLevel + (t - this.localData.fcdPrevLevel));
    return e;
  }
  onFlwLv_fixLevelStage(t, e) {
    var a,
      o,
      i,
      l = null === (a = t.args) || void 0 === a ? void 0 : a[0],
      r = null === (o = t.args) || void 0 === o ? void 0 : o[1],
      n = null === (i = t.args) || void 0 === i ? void 0 : i[2];
    if (l <= 0 || !r || !n) e();else {
      var c = this.fixLevelStage(l, r, n);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: {
          stageIdx: c.stageIdx,
          levelInStage: c.levelInStage,
          posInStage: c.posInStage
        }
      });
    }
  }
  fixLevelStage(t, e, a) {
    var o;
    if (this.localData.fcdNeedUpdate) {
      var i = this.getFixedLevel(t),
        l = a.stageIdx,
        r = Math.max(0, l - this._downValue),
        n = (i - 1) % (null !== (o = e[r].levelsInStage) && void 0 !== o ? o : 10) + 1;
      i = e.slice(0, r).reduce(function (t, e) {
        var a;
        return t + (null !== (a = e.levelsInStage) && void 0 !== a ? a : 10);
      }, 0) + n;
      this.localData.fcdCurLevel = i;
      this.localData.fcdPrevLevel = t;
      this.localData.fcdNeedUpdate = false;
      this.localData.fcdDownCount = this.localData.fcdDownCount + 1;
      this.localData.fcdDownValue = this.localData.fcdDownValue + this._downValue;
      return this.resolveStage(i, e);
    }
    return a;
  }
  resolveStage(t, e) {
    for (var a, o = Math.max(0, t - 1), i = 0; i < e.length; i++) {
      var l = null !== (a = e[i].levelsInStage) && void 0 !== a ? a : 10;
      if (o < l) return {
        stageIdx: i,
        levelInStage: o + 1,
        posInStage: l > 1 ? o / (l - 1) : 0,
        overflow: 0
      };
      o -= l;
    }
    return {
      stageIdx: e.length - 1,
      levelInStage: 0,
      posInStage: 1,
      overflow: o + 1
    };
  }
}