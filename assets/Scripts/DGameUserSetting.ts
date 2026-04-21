import { EventTrackingType } from './base/event/EventData';
import EventTrackingManager from './base/event/EventTrackingManager';
import UserModel from './gamePlay/user/UserModel';
export class DotGameUserSetting {
  static dot() {
    var e = UserModel.getInstance(),
      t = {
        vibration: e.isVibrationEnabled() ? 1 : 0,
        sound: e.isSoundEnabled() ? 1 : 0,
        music: e.isMusicEnabled() ? 1 : 0,
        highlight_free_tiles: e.isLockHighlightEnabled() ? 1 : 0
      };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.UserSetting, t);
  }
}