import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
export class DDebugInfo {
  static dot(e) {
    var t = {
      g_debugInfo: e
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.DebugInfo, t);
  }
}