import { EventTrackingType } from './base/event/EventData';
import EventTrackingManager from './base/event/EventTrackingManager';
export enum EAvatarButtonType {
  GoToGet = 1,
  Save = 2,
  WaitReturn = 3,
}
export class DotGameUserInfo {
  static dotAvatarActive(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.UserInfoAvatarActive, e);
  }
  static dotAvatarCollect(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.UserInfoAvatarCollect, e);
  }
  static dotClickInfoPopup(e) {
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.UserInfoClickBtnClick, e);
  }
}