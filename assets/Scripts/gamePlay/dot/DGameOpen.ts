import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DotUtil } from './DotUtil';
export class DotGameOpen {
  static _isCanDot = false;
  static isCheckCanDot() {
    if (this._isCanDot) return false;
    this._isCanDot = true;
    return true;
  }
  static dot() {
    var e = UserModel.getInstance(),
      t = e.isFirstOpen,
      o = e.getCurrentGameType(),
      l = {
        is_first_open: t ? 1 : 0,
        game_play_method: DotUtil.getGamePlayMethod(o),
        game_mode: DotUtil.getGameId(o),
        game_mode_name: DotUtil.getGameModeName(o)
      };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameOpen, l);
  }
}