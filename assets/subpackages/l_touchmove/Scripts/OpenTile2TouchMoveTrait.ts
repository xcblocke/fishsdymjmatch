import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("OpenTile2TouchMoveTrait")
export default class OpenTile2TouchMoveTrait extends Trait {
  static traitKey = "OpenTile2TouchMove";
  onLoad() {
    super.onLoad.call(this);
  }
  onCltm_IsIgnoreTile2(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: true
    });
  }
}