import { EventTrackingType } from '../base/event/EventData';
import EventTrackingManager from '../base/event/EventTrackingManager';
export enum EPageShowType {
  StartupPage = 0,
  LoadingPage = 1,
  LoadingToMainPage = 2,
  LevelToMainPage = 3,
  ExhibitionHallPage = 4,
  ExhibitionHallToMainPage = 5,
  DailyChallengePage = 6,
  DailyChallengeToMainPage = 7,
  TravelPage = 8,
  TravelToMainPage = 9,
  LeaderBoard = 10,
  LeaderBoardResultPage = 11,
  LeaderBoardToMainPage = 12,
  AgeSurveyPage1 = 13,
  AgeSurveyPage2 = 14,
}
export class DotGamePageShow {
  static getPageShowName(e) {
    switch (e) {
      case EPageShowType.StartupPage:
        return "启动页";
      case EPageShowType.LoadingPage:
        return "加载页";
      case EPageShowType.LoadingToMainPage:
        return "加载页进主页";
      case EPageShowType.LevelToMainPage:
        return "关卡进主页";
      case EPageShowType.ExhibitionHallPage:
        return "展示厅页";
      case EPageShowType.ExhibitionHallToMainPage:
        return "展示厅进主页";
      case EPageShowType.DailyChallengePage:
        return "每日挑战页";
      case EPageShowType.DailyChallengeToMainPage:
        return "每日挑战进主页";
      case EPageShowType.TravelPage:
        return "旅行活动页";
      case EPageShowType.TravelToMainPage:
        return "旅行活动进主页";
      case EPageShowType.LeaderBoard:
        return "排行榜页";
      case EPageShowType.LeaderBoardResultPage:
        return "排行榜结算页";
      case EPageShowType.LeaderBoardToMainPage:
        return "排行榜进主页";
      case EPageShowType.AgeSurveyPage1:
        return "年龄问卷弹窗1";
      case EPageShowType.AgeSurveyPage2:
        return "年龄问卷弹窗2";
      default:
        return "";
    }
  }
  static dot(e) {
    var t = {
      show_type: this.getPageShowName(e)
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.PageShow, t);
  }
}