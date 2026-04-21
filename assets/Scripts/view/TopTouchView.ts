import { EVT_MSG_KEY_EVENT_TOP_TOUCH_START, EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE, EVT_MSG_KEY_EVENT_TOP_TOUCH_END, EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL } from '../Config';
import UIView from '../framework/ui/UIView';
const {
  ccclass,
  property
} = cc._decorator;
@mj.class
export default class TopTouchView extends UIView {
  static prefabUrl = "prefabs/common/TopTouch";
  onLoad() {
    super.onLoad.call(this);
    this.registerTouchEvent(this.onTouchStart.bind(this), this.onTouchMove.bind(this), this.onTouchEnd.bind(this), this.onTouchCancel.bind(this));
  }
  onTouchStart(e, t) {
    this.touchStartEvent(e, t);
    mj.EventManager.emit(EVT_MSG_KEY_EVENT_TOP_TOUCH_START, e, t);
    return false;
  }
  onTouchMove(e, t) {
    mj.EventManager.emit(EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE, e, t);
  }
  onTouchEnd(e, t) {
    mj.EventManager.emit(EVT_MSG_KEY_EVENT_TOP_TOUCH_END, e, t);
  }
  onTouchCancel(e, t) {
    mj.EventManager.emit(EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL, e, t);
  }
  @mj.traitEvent("TopTouchView_start")
  touchStartEvent() {}
}