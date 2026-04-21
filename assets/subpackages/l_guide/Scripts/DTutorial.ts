import { EventTrackingType } from '../../../Scripts/base/event/EventData';
import EventTrackingManager from '../../../Scripts/base/event/EventTrackingManager';
export enum ETutorialClickType {
  Show = 0,
  Clear = 1,
  Skip = 2,
  Complete = 3,
}
export default class DTutorial {
  static step = 0;
  static dot(t) {
    var e = "";
    switch (t.click_type) {
      case ETutorialClickType.Show:
        e = '新手引导6-第1关-盘面0-第' + this.step + "步-通过-对碰0";
        break;
      case ETutorialClickType.Clear:
        e = '新手引导6-第1关-盘面0-第' + this.step + "步-通过-对碰1";
        break;
      case ETutorialClickType.Skip:
        e = '新手引导6-第1关-盘面0-第' + this.step + "步-跳过-对碰0";
        break;
      case ETutorialClickType.Complete:
        e = '新手引导6-第1关-完成';
    }
    var r = {
      stage: this.step,
      stage_name: e
    };
    this.step++;
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.Tutorial, r);
  }
}