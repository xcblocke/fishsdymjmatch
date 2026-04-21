import { EventTrackingType } from './base/event/EventData';
import EventTrackingManager from './base/event/EventTrackingManager';
export class DChampaignStart {
  static dot(e) {
    var t = e;
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.ChampaignStart, t);
  }
}