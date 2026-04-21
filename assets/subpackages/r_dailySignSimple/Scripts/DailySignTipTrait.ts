import Trait from '../../../Scripts/framework/trait/Trait';
import { EVT_MSG_KEY_EVENT_TOP_TOUCH_START } from '../../../Scripts/Config';
@mj.trait
@mj.class("DailySignTipTrait")
export default class DailySignTipTrait extends Trait {
  static traitKey = "DailySignTip";
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
    return _t;
  }
  onTopTouchStart() {
    this._traitData.clickClose && this.dispatchEvent("removeDailySignTip");
  }
}