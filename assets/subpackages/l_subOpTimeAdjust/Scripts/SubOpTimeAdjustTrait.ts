import ExtractTrait from '../../../Scripts/ExtractTrait';
@mj.trait
@mj.class("SubOpTimeAdjustTrait")
export default class SubOpTimeAdjustTrait extends ExtractTrait {
  static traitKey = "SubOpTimeAdjust";
  get scaleM() {
    var t;
    return null !== (t = this.traitData.scaleM) && void 0 !== t ? t : 7;
  }
  get baseM() {
    var t;
    return null !== (t = this.traitData.baseM) && void 0 !== t ? t : 6;
  }
  onGameData_getBaseOpTime(t, e) {
    if (this.checkGameMode()) {
      var r = t.ins.localData.avgClearIntervals,
        n = 0;
      r.length > 0 && (n = Math.min.apply(Math, [...r]));
      e({
        returnType: TraitCallbackReturnType.jump,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
  onGameMod_modifyWin(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0],
        n = t.ins,
        o = n.context.getGameData().getUserBaseOpTime() * n.context.getGameData().getNonAutoStepCount();
      t.args[0] = Math.max(0, r - o);
      e();
    } else e();
  }
  onExtNormLv_getM(t, e) {
    if (this.checkGameMode()) {
      e({
        returnVal: t.beforReturnVal * this.scaleM / this.baseM
      });
    } else e();
  }
}