import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("BombBrokenSpineTrait")
export default class BombBrokenSpineTrait extends Trait {
  static traitKey = "BombBrokenSpine";
  onLoad() {
    super.onLoad.call(this);
  }
  onBombBhv_spineBundleName(e, t) {
    t({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true,
      returnVal: {
        name: "spine/broken/gameplay_props",
        bundleName: "l_bombbrokenspine"
      }
    });
  }
  onBombBhv_moveTime(e, t) {
    t({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true,
      returnVal: 0.233
    });
  }
}