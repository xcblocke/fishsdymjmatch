import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DotUtil } from './DotUtil';
export enum EAdPosition {
  FrontInsertScreen_GameNew = 0,
  FrontInsertScreen_GameContinue = 1,
  FrontInsertScreen_ActiveRestart = 2,
  FrontInsertScreen_FailRestart = 3,
  RearInsertScreen_Success = 4,
  RearInsertScreen_TravelSuccess = 5,
  RearInsertScreen_DcSuccess = 6,
  RearInsertScreen_TravelEnter = 7,
  RearInsertScreen_DailyChallengeEnter = 8,
  RearInsertScreen_DailyTaskPlay = 9,
  RearInsertScreen_HallPlay = 10,
  RearInsertScreen_RankGo = 11,
  InGameMotivation_Reshuffle = 12,
  InGameMotivation_Hint = 13,
  InGameMotivation_Revive = 14,
  InGameInsertScreen_PauseContinue = 15,
  OutGameMotivation = 16,
  NoInterAdMotivation = 17,
  RearInsertScreen_Failure = 18,
  InGameMotivation_Revive_Classic = 19,
  InGameMotivation_GameContinue_Classic = 20,
  RearInsertScreen_CloseFreeShuffle = 21,
  OpenSkinByLanguageAd = 22,
  InGameMotivation_Revert = 23,
  RearInsertScreen_Tile2Success = 24,
  InGameMotivation_Magnet = 25,
}
export var AdCallBackType = {
  ShowSuccess: "showsuccess",
  ShowFail: "showfail",
  Close: "close"
};
export class DGameAdShow {
  static getAdPositionName(e) {
    switch (e) {
      case EAdPosition.FrontInsertScreen_GameNew:
        return "前插屏--游戏新开";
      case EAdPosition.FrontInsertScreen_GameContinue:
        return "前插屏--游戏继续";
      case EAdPosition.FrontInsertScreen_ActiveRestart:
        return "前插屏--主动重开";
      case EAdPosition.FrontInsertScreen_FailRestart:
        return "前插屏--失败重开";
      case EAdPosition.RearInsertScreen_Success:
        return "后插屏--成功";
      case EAdPosition.RearInsertScreen_TravelEnter:
        return "前插屏--旅行进入";
      case EAdPosition.RearInsertScreen_DailyTaskPlay:
        return "前插屏--任务开始游戏";
      case EAdPosition.RearInsertScreen_HallPlay:
        return "前插屏--大厅开始游戏";
      case EAdPosition.RearInsertScreen_RankGo:
        return "前插屏--排行榜开始游戏";
      case EAdPosition.InGameMotivation_Reshuffle:
        return "局中激励--重洗牌激励";
      case EAdPosition.InGameMotivation_Hint:
        return "局中激励--提示激励";
      case EAdPosition.InGameMotivation_Revive:
        return "局中激励--复活激励";
      case EAdPosition.InGameMotivation_Revive_Classic:
        return "局中激励--复活激励--无尽";
      case EAdPosition.InGameMotivation_GameContinue_Classic:
        return "局中激励--无尽-游戏继续";
      case EAdPosition.InGameInsertScreen_PauseContinue:
        return "局中插屏--暂停继续";
      case EAdPosition.OutGameMotivation:
        return "局外激励";
      case EAdPosition.NoInterAdMotivation:
        return "免广激励";
      case EAdPosition.RearInsertScreen_DailyChallengeEnter:
        return "前插屏--日常挑战进入";
      case EAdPosition.RearInsertScreen_TravelSuccess:
        return "后插屏--旅行成功";
      case EAdPosition.RearInsertScreen_DcSuccess:
        return "后插屏--日常挑战成功";
      case EAdPosition.InGameMotivation_Revert:
        return "局中激励--撤回激励";
      case EAdPosition.RearInsertScreen_Tile2Success:
        return "后插屏--Tile2成功";
      case EAdPosition.InGameMotivation_Magnet:
        return "局中激励--磁铁激励";
      default:
        return "adPosition error";
    }
  }
  static dot(t) {
    var o = UserModel.getInstance(),
      n = o.getCurrentGameData();
    if (n) {
      var c = o.getCurrentGameType(),
        u = {
          ad_type: "2" == t.adType ? DotUtil.getRewardAdPoint() : DotUtil.getInterAdPoint(),
          ad_position: DGameAdShow.getAdPositionName(t.adPosition),
          ad_start_timestamp: t.dotTime.startTime,
          ad_end_timestamp: t.dotTime.endTime,
          ad_show_time: t.dotTime.showTime,
          game_mode: c == MjGameType.Classic ? 3 : DotUtil.getGameId(c),
          game_play_method: DotUtil.getGamePlayMethod(c),
          game_mode_name: DotUtil.getGameModeName(c),
          level: n.getCurrentLevelId(),
          mode_num: n.getGameCount(),
          mode_num_all: o.getTotalGames(),
          mode_winnum: n.getWinGames(),
          mode_winnum_all: o.getTotalWinGames()
        };
      EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameAdShow, u);
    }
  }
}