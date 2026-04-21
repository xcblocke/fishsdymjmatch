import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("LanguageBtnPreloadTrait")
export default class LanguageBtnPreloadTrait extends Trait {
  static traitKey = "LanguageBtnPreload";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlgCtrl_initDRes(t, e) {
    e();
  }
  onUISetHomeCtrl_initDRes(t, e) {
    e();
  }
}