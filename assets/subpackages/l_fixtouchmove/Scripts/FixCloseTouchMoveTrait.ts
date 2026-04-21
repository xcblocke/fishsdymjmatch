import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("FixCloseTouchMoveTrait")
export default class FixCloseTouchMoveTrait extends Trait {
  static traitKey = "FixCloseTouchMove";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptBTchEnd_isFixNotMove(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: true
    });
  }
}