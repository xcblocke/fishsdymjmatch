import Trait from '../../../Scripts/framework/trait/Trait';
import { EVT_MSG_KEY_EVENT_TOP_TOUCH_START } from '../../../Scripts/Config';
@mj.trait
@mj.class("TaskBoxTipTrait")
export default class TaskBoxTipTrait extends Trait {
  static traitKey = "TaskBoxTip";
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
    return _t;
  }
  onTopTouchStart() {
    this._traitData.clickClose && this.dispatchEvent("removeTaskBoxTips");
  }
}