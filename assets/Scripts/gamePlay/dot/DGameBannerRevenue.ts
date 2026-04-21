import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DotUtil } from './DotUtil';
export class DGameBannerRevenue {
  static dot() {
    var e = mj.sdk.callGetBannerRevenueSum();
    if (!(e <= 0)) {
      var t = UserModel.getInstance().getCurrentGameData(),
        o = {
          revenue: e,
          game_mode_name: DotUtil.getGameModeName(t.gameType),
          game_play_method: DotUtil.getGamePlayMethod(t.gameType),
          game_mode: DotUtil.getGameId(t.gameType)
        };
      EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameBannerRevenue, o);
    }
  }
}