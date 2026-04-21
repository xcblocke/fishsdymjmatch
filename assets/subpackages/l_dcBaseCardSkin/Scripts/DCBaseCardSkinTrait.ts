import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DCBaseCardSkinTrait")
export default class DCBaseCardSkinTrait extends Trait {
  static traitKey = "DCBaseCardSkin";
  onBaseCardSkin_isDCOn(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
}