import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("NormalBaseCardSkinTrait")
export default class NormalBaseCardSkinTrait extends Trait {
  static traitKey = "NormalBaseCardSkin";
  onBaseCardSkin_isNormalOn(r, t) {
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
}