import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TaskAllAdTrait")
export default class TaskAllAdTrait extends Trait {
  static traitKey = "TaskAllAd";
  get getAdScale() {
    var t, r;
    return null !== (r = null === (t = this.traitData) || void 0 === t ? void 0 : t.adScale) && void 0 !== r ? r : 2;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskRwdVw_getAdScale(t, r) {
    var e = this.getAdScale;
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: e
    });
  }
}