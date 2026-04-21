import { EventTrackingType } from './base/event/EventData';
import EventTrackingManager from './base/event/EventTrackingManager';
import LoginModel from './gamePlay/login/model/LoginModel';
export class DotFeedback {
  static dot(e, t) {
    var o = {
      rating: e,
      language: LoginModel.getInstance().language,
      feedback: t
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.Feedback, o);
  }
  static dotPopupShow() {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.FeedbackPopupShow, {});
  }
  static dotPopupClose() {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.FeedbackPopupClose, {});
  }
}