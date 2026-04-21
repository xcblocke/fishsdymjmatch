import AdManager from '../../base/ad/AdManager';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DGameAdShow } from './DGameAdShow';
import { DotUtil } from './DotUtil';
export var EAdEnterAction = {
  Show: "show",
  Click: "click"
};
export class DotAdRewardEnter {
  static dot(e, t) {
    var o = UserModel.getInstance(),
      u = o.getCurrentGameType(),
      p = o.getCurrentGameData(),
      f = Math.floor((Date.now() - o.getAppStartTime()) / 1000),
      d = Math.floor((Date.now() - p.getStartGameTime()) / 1000),
      h = Math.floor(p.getCurrentRoundTime()),
      y = {
        ad_enter_action: e ? EAdEnterAction.Show : EAdEnterAction.Click,
        ad_enter_scene: DGameAdShow.getAdPositionName(t),
        ad_is_ready: AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0,
        session_time: f,
        reward_ad_num: o.getTotalRewardAdCount(),
        game_mode: DotUtil.getGameId(u),
        game_mode_name: DotUtil.getGameModeName(u),
        game_play_method: DotUtil.getGamePlayMethod(u),
        level: p.getCurrentLevelId(),
        mode_num: p.getGameCount(),
        mode_num_all: o.getTotalGames(),
        mode_winnum: p.getWinGames(),
        mode_winnum_all: o.getTotalWinGames(),
        game_time: d,
        game_time_real: h
      };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.AdRewardEnter, y);
  }
}