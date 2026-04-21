import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("SettingLargeHitTrait")
export default class SettingLargeHitTrait extends Trait {
  static traitKey = "SettingLargeHit";
  onLoad() {
    super.onLoad.call(this);
  }
  onUILangSwitch_isLarge(t, r) {
    r({
      returnVal: true,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onUIContactUs_isLarge(t, r) {
    r({
      returnVal: true,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onUISetDlg_isLarge(t, r) {
    r({
      returnVal: true,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
}