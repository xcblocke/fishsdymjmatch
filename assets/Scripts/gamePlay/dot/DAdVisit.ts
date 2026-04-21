import AdManager from '../../base/ad/AdManager';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DotUtil } from './DotUtil';
import { DGameAdShow, EAdPosition } from './DGameAdShow';
export var EAdVisitAction = {
  Play: "play",
  Close: "close"
};
export class DotAdVisit {
  static noAdPosition = EAdPosition.OutGameMotivation;
  static dot(e, t, o) {
    var c = UserModel.getInstance(),
      u = c.getCurrentGameType(),
      p = c.getCurrentGameData(),
      f = Math.floor((Date.now() - c.getAppStartTime()) / 1000),
      d = Math.floor((Date.now() - p.getStartGameTime()) / 1000),
      h = Math.floor(p.getCurrentRoundTime()),
      y = o ? AdManager.getInstance().checkInterAdIsReady() : AdManager.getInstance().checkVideoAdIsReady(),
      m = {
        ad_type: o ? DotUtil.getInterAdPoint() : DotUtil.getRewardAdPoint(),
        ad_visit_scene: e,
        ad_visit_action: t ? EAdVisitAction.Play : EAdVisitAction.Close,
        ad_is_ready: y ? 1 : 0,
        session_time: f,
        game_mode: DotUtil.getGameId(u),
        game_mode_name: DotUtil.getGameModeName(u),
        game_play_method: DotUtil.getGamePlayMethod(u),
        level: p.getCurrentLevelId(),
        mode_num: p.getGameCount(),
        mode_num_all: c.getTotalGames(),
        mode_winnum: p.getWinGames(),
        mode_winnum_all: c.getTotalWinGames(),
        game_time: d,
        game_time_real: h
      };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.AdVisit, m);
  }
  static dotAdVisitRewardAD(t, o) {
    DotAdVisit.noAdPosition = t;
    var n = DGameAdShow.getAdPositionName(t);
    this.dot(n, o, false);
  }
  static dotAdVisitInterAD(e) {
    var t = DGameAdShow.getAdPositionName(e);
    this.dot(t, true, true);
  }
  static dotAdVisitNoAd(t) {
    var o = DGameAdShow.getAdPositionName(DotAdVisit.noAdPosition),
      n = DotAdVisit.noAdPosition;
    if (n == EAdPosition.InGameMotivation_Hint) {
      o = "无法加载广告-提示激励";
    } else {
      if (n == EAdPosition.InGameMotivation_Reshuffle) {
        o = "无法加载广告-重洗牌激励";
      } else {
        if (n == EAdPosition.InGameMotivation_Revive) {
          o = "无法加载广告-复活激励";
        } else {
          if (n == EAdPosition.InGameMotivation_Revive_Classic) {
            o = "无法加载广告-复活激励-无尽";
          } else {
            if (n == EAdPosition.OutGameMotivation) {
              o = "无法加载广告-局外激励";
            } else {
              if (n == EAdPosition.NoInterAdMotivation) {
                o = "无法加载广告-免广激励";
              } else {
                n == EAdPosition.InGameMotivation_GameContinue_Classic && (o = "无法加载广告-无尽-游戏继续");
              }
            }
          }
        }
      }
    }
    this.dot(o, t, false);
  }
}