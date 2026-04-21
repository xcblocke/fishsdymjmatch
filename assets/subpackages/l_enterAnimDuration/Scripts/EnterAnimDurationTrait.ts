import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("EnterAnimDurationTrait")
export default class EnterAnimDurationTrait extends Trait {
  static traitKey = "EnterAnimDuration";
  getTargetDuration() {
    return this._traitData.targetDuration || 0;
  }
  scaleAnimationConfigs(t) {
    var n = this.getTargetDuration();
    if (n && !(n <= 0)) {
      var r = t.beforReturnVal;
      if (r && 0 !== r.length) {
        var o = t.ins,
          e = o.totalDuration;
        if (e && !(e <= 0)) {
          var i = n / e;
          r.forEach(function (t) {
            t.delay *= i;
            t.duration *= i;
          });
          o.totalDuration = n;
        }
      }
    }
  }
  onCrossLayerStgy_genCfgs(t, n) {
    this.scaleAnimationConfigs(t);
    n();
  }
  onCenterRadialStgy_genCfgs(t, n) {
    this.scaleAnimationConfigs(t);
    n();
  }
  onTopDropStgy_genCfgs(t, n) {
    this.scaleAnimationConfigs(t);
    n();
  }
  onRowByRowStgy_genCfgs(t, n) {
    this.scaleAnimationConfigs(t);
    n();
  }
  onTopMaskStgy_genCfgs(t, n) {
    this.scaleAnimationConfigs(t);
    n();
  }
}