import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
export var EAppPushType = {
  GoldUnlockPushRemove: "gq_goldunlock_push_remove",
  GoldRankPushRemove: "gq_goldrank_push_remove",
  TravelMedalPushRemove: "lxmedal_push_remove",
  DailyTaskPushRemove: "lxdailytask_push_remove",
  DailyChallengeMedalPushRemove: "tzmeda_push_remove",
  CdqzhPushRemove: "cdqzh_push_remove",
  UnfinishedPushRemove: "unfinished_push_remove",
  DailyTzPushRemove: "dailytz_push_remove",
  JourneyLeftDaysPushRemove: "journey_left_days_push_remove",
  GqBoxUnlockedPushRemove: "gq_box_unlocked_push_remove"
};
export class DotAppPush {
  static dotPushRemove(e) {
    var t = "";
    switch (e) {
      case "mbgqgoldunlock1":
        t = EAppPushType.GoldUnlockPushRemove;
        break;
      case "mbgqgoldrank1":
        t = EAppPushType.GoldRankPushRemove;
        break;
      case "mblxmedal1":
        t = EAppPushType.TravelMedalPushRemove;
        break;
      case "mbdailytask1":
        t = EAppPushType.DailyTaskPushRemove;
        break;
      case "mbtzmedal1":
        t = EAppPushType.DailyChallengeMedalPushRemove;
        break;
      case "mjcdqzh1":
        t = EAppPushType.CdqzhPushRemove;
        break;
      case "mjunfinished1":
        t = EAppPushType.UnfinishedPushRemove;
        break;
      case "mjdailytz1":
        t = EAppPushType.DailyTzPushRemove;
        break;
      case "mblxdays1":
        t = EAppPushType.JourneyLeftDaysPushRemove;
        break;
      case "mbgqbox1":
        t = EAppPushType.GqBoxUnlockedPushRemove;
    }
    t && EventTrackingManager.getInstance().trackEvent(EventTrackingType.PushRemove, t);
  }
}