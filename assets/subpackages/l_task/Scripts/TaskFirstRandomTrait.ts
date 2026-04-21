import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TaskFirstRandomTrait")
export default class TaskFirstRandomTrait extends Trait {
  _config = {};
  static traitKey = "TaskFirstRandom";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  onTaskTrait_getFstRndFlg(t, e) {
    if (void 0 === this._config.firstRandomFlag) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._config.firstRandomFlag
      });
    }
  }
}