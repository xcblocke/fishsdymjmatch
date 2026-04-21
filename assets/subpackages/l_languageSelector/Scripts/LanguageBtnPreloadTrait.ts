import Trait from '../../../Scripts/framework/trait/Trait';
import { UILanguageSwitch } from './UILanguageSwitch';
@mj.trait
@mj.class("LanguageBtnPreloadTrait")
export default class LanguageBtnPreloadTrait extends Trait {
  static traitKey = "LanguageBtnPreload";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlgCtrl_initDRes(t, e) {
    this.addPreloadRes(t);
    e();
  }
  onUISetHomeCtrl_initDRes(t, e) {
    this.addPreloadRes(t);
    e();
  }
  addPreloadRes(t) {
    var e = t.ins;
    e && "function" == typeof e.addPreloadRes && e.addPreloadRes("Prefab", UILanguageSwitch.getUrl());
  }
}