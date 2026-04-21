import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("CloseMultiTouchTrait")
export default class CloseMultiTouchTrait extends Trait {
  static traitKey = "CloseMultiTouch";
  onLoad() {
    super.onLoad.call(this);
  }
  onLoginM_showLoad(t, r) {
    cc.macro.ENABLE_MULTI_TOUCH && (cc.macro.ENABLE_MULTI_TOUCH = false);
    r();
  }
}