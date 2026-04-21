import ExtractTrait from '../../../Scripts/ExtractTrait';
@mj.trait
@mj.class("SubOpTimeTrait")
export default class SubOpTimeTrait extends ExtractTrait {
  static traitKey = "SubOpTime";
  get scaleM() {
    var t;
    return null !== (t = this.traitData.scaleM) && void 0 !== t ? t : 6;
  }
  get baseM() {
    var t;
    return null !== (t = this.traitData.baseM) && void 0 !== t ? t : 6;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onGameMod_modifyWin(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0],
        o = t.ins,
        n = o.context.getGameData().getUserBaseOpTime() * o.context.getGameData().getStepCount();
      t.args[0] = Math.max(0, r - n);
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