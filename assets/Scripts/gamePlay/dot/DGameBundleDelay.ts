import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
export class DotGameBundleDelay {
  static dot(e) {
    var t = {
      bundle_type: e
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameBundleDelay, t);
  }
}