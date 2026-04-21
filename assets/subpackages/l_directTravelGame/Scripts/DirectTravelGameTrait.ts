import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
@mj.trait
@mj.class("DirectTravelGameTrait")
export default class DirectTravelGameTrait extends Trait {
  static traitKey = "DirectTravelGame";
  onLoad() {
    super.onLoad.call(this);
  }
  onTravelVw_gotoTravelMap(t, e) {
    var r = t.ins;
    if (JumpManager.getInstance().jumpToTravelGame({}, function () {
      r && r.delegate && r.delegate.close();
    })) {
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      e();
    }
  }
  onTLValVw_gotoTravelMap(t, e) {
    var r = t.ins;
    if (JumpManager.getInstance().jumpToTravelGame({}, function () {
      r && r.delegate && r.delegate.close();
    })) {
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      e();
    }
  }
}