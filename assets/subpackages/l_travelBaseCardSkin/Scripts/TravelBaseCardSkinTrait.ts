import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TravelBaseCardSkinTrait")
export default class TravelBaseCardSkinTrait extends Trait {
  static traitKey = "TravelBaseCardSkin";
  onBaseCardSkin_isTravelOn(r, t) {
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
}