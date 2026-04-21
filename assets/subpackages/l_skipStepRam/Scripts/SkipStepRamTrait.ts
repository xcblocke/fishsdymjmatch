import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("SkipStepRamTrait")
export default class SkipStepRamTrait extends Trait {
  static traitKey = "SkipStepRam";
  get ramLimit() {
    var t, r;
    return null !== (r = null === (t = this.traitData) || void 0 === t ? void 0 : t.ramLimit) && void 0 !== r ? r : 4096;
  }
  onGameTracker_recordStep(t, r) {
    var e = LoginModel.getInstance().deviceInfo.all_memory;
    if (void 0 !== e && e >= this.ramLimit) {
      r();
    } else {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
}