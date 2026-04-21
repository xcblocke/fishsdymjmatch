import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("WatchAdNoAutoUseTrait")
export default class WatchAdNoAutoUseTrait extends Trait {
  static traitKey = "WatchAdNoAutoUse";
  onWatchAdCtrl_autoUse(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}