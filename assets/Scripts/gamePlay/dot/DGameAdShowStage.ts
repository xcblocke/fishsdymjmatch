import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import { DotUtil } from './DotUtil';
export class DotGameAdShowStage {
  static dot(e, t, o, a, l) {
    var s = {
      ad_type: e ? DotUtil.getInterAdPoint() : DotUtil.getRewardAdPoint(),
      ad_stage: t,
      result: o || "",
      success: a || "",
      reason: l || ""
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameAdShowStage, s);
  }
}