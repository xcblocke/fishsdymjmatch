import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2StaLvTMetricDDATrait")
export default class Tile2StaLvTMetricDDATrait extends Trait {
  _checkInterval = 5;
  _targetLevelTypes = [2, 3];
  _failThresholdUp = 3;
  _failThresholdDown = 5;
  _adjustStep = 5;
  static traitKey = "Tile2StaLvTMetricDDA";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._checkInterval = Math.max(1, Number(this._traitData.checkInterval) || 5);
    this._targetLevelTypes = this._parseIntArray(this._traitData.targetLevelTypes, [2, 3]);
    this._failThresholdUp = null !== (e = Number(this._traitData.failThresholdUp)) && void 0 !== e ? e : 3;
    this._failThresholdDown = null !== (r = Number(this._traitData.failThresholdDown)) && void 0 !== r ? r : 5;
    this._adjustStep = Number(this._traitData.adjustStep) || 5;
    if (void 0 === this.localData.ddaRound || null === this.localData.ddaRound) {
      this.localData.ddaRound = -1;
      this.localData.ddaRound = this.localData.ddaRound;
    }
    if (!this.localData.ddaFailCount) {
      this.localData.ddaFailCount = 0;
      this.localData.ddaFailCount = this.localData.ddaFailCount;
    }
    if (void 0 === this.localData.ddaOffset || null === this.localData.ddaOffset) {
      this.localData.ddaOffset = 0;
      this.localData.ddaOffset = this.localData.ddaOffset;
    }
    var a = this.localData.ddaRound;
    a >= 0 && this._getLevelRange(a);
  }
  onT2Metric_ddaOffset(t, e) {
    var r = t.args && t.args.length > 0 ? Number(t.args[0]) : 0,
      a = t.args && t.args.length > 1 ? Number(t.args[1]) : 0,
      i = t.args && t.args.length > 2 ? Number(t.args[2]) : 0,
      o = t.args && t.args.length > 3 ? Number(t.args[3]) : 0,
      n = t.args && t.args.length > 4 ? Number(t.args[4]) : 1;
    a && this._tryEvaluate(a);
    if (this._targetLevelTypes.indexOf(r) < 0) e();else {
      e({
        returnVal: (this.localData.ddaOffset || 0) * (n > 0 ? (o - i) / n : 0)
      });
    }
  }
  onIptRestart_excute(t, e) {
    var r = t.args[0];
    if (r && 0 === r.dieResult && "fail" === r.callFrom) {
      var a = UserModel.getInstance().getCurrentGameData().getLevelId(),
        i = ExtractTool.getInstance().getLevelType(a);
      if (this._targetLevelTypes.indexOf(i) < 0) e();else {
        this.localData.ddaFailCount = (this.localData.ddaFailCount || 0) + 1;
        e();
      }
    } else e();
  }
  _tryEvaluate(t) {
    var e,
      r = Math.floor((t - 1) / this._checkInterval),
      a = null !== (e = this.localData.ddaRound) && void 0 !== e ? e : -1;
    if (a >= 0 && r > a) {
      var i = this.localData.ddaFailCount || 0;
      this._evaluate(i);
      this.localData.ddaFailCount = 0;
    }
    this.localData.ddaRound = r;
  }
  _evaluate(t) {
    var e = this.localData.ddaOffset || 0;
    if (t <= this._failThresholdUp) {
      e += this._adjustStep;
    } else {
      t > this._failThresholdDown && (e -= this._adjustStep);
    }
    this.localData.ddaOffset = e;
    t <= this._failThresholdUp || this._failThresholdDown;
  }
  _getLevelRange(t) {
    return "关卡" + (t * this._checkInterval + 1) + "-" + (t + 1) * this._checkInterval;
  }
  _parseIntArray(t, e) {
    if (!t || !Array.isArray(t)) return e;
    var r = t.map(function (t) {
      return Number(t);
    }).filter(function (t) {
      return t > 0;
    });
    return r.length > 0 ? r : e;
  }
}