import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("FixTileTypeModifierTrait")
export default class FixTileTypeModifierTrait extends Trait {
  static traitKey = "FixTileTypeModifier";
  onLoad() {
    super.onLoad.call(this);
  }
  onTileTyModiy_isUserFix(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: true
    });
  }
}