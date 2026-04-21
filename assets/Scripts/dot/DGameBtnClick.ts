import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import AdManager from '../base/ad/AdManager';
import { EventTrackingType } from '../base/event/EventData';
import EventTrackingManager from '../base/event/EventTrackingManager';
import LoginModel from '../gamePlay/login/model/LoginModel';
import UserModel from '../gamePlay/user/UserModel';
export enum EBoardClickType {
  Setting = 0,
  Shuffle = 1,
  Hint = 2,
  Undo = 3,
  Escape = 4,
}
export enum EReviveClickType {
  Show = 0,
  Close = 1,
  ShuffleItem = 2,
  ShuffleAd = 3,
  Restart = 4,
}
export enum EGameSettingClickType {
  InGameSetting_DialogDisplayed = 0,
  InGameSetting_Closed = 1,
  InGameSetting_Restart = 2,
  InGameSetting_HomePage = 3,
  InGameSetting_PrivacyAgreement = 4,
  InGameSetting_PolicyTerm = 5,
  HomePageSetting_DialogDisplayed = 6,
  HomePageSetting_Closed = 7,
  HomePageSetting_PolicyTerm = 8,
  HomePageSetting_PrivacyAgreement = 9,
}
export enum EVictoryChestClickType {
  DialogDisplayed = 0,
  TravelDialogDisplayed = 1,
  ClaimReward = 2,
  TravelClaimReward = 3,
  TravelClaimRewardCollection = 4,
  ClaimMultipleReward = 5,
  TravelClaimMultipleReward = 6,
}
export enum EFreeItemClickType {
  hintDisplayed = 0,
  hintClosed = 1,
  hintGain = 2,
  shuffleDisplayed = 3,
  shuffleClosed = 4,
  shuffleGain = 5,
  revertDisplayed = 6,
  revertClosed = 7,
  revertGain = 8,
}
export enum EADWindowClickType {
  Show = 0,
  Close = 1,
  Retry = 2,
  Cancel = 3,
}
export enum EDailyTaskClickType {
  DialogDisplayed = 0,
  Closed = 1,
  StartGame_Home = 2,
  StartGame_Result = 3,
  StageTreasureChest = 4,
  Completed_DialogDisplayed = 5,
  Completed_ClaimReward = 6,
  Completed_ClaimRewardAd = 7,
}
export enum EBgmOccupationClickType {
  Hall = 0,
  Game = 1,
}
export enum ERankClickType {
  AutoRankIntroduceView = 0,
  AutoRankResultPage1 = 1,
  AutoRankResultPage2 = 2,
  ClickRankViewTips = 3,
  ClickIntroduceCollect = 4,
  ClickIntroduceClose = 5,
  ClickHallRank = 6,
  ClickRankViewBack = 7,
  ClickRankViewStart = 8,
  ClickRankBonusContinue = 9,
  ClickRankBoxViewPage1Claim = 10,
  ClickRankBoxViewPage2Claim = 11,
  ClickRankBoxViewPage2AdClaim = 12,
}
export enum EDailyClickType {
  Closed = 0,
  Collect = 1,
  MonthChange = 2,
  Play = 3,
}
export enum EBadgeClickType {
  Closed = 0,
  Journey = 1,
  Daily = 2,
  JourneyBtn = 3,
  DailyBtn = 4,
  Badge = 5,
  BadgeShow = 6,
  BadgeGet = 7,
  RewardNot = 8,
  RewardHas = 9,
  RewardShow = 10,
  RewardGet = 11,
}
export enum EHomePageClickType {
  Setting = 0,
  Level = 1,
  DailyTask = 2,
  ExhibitionHall = 3,
  DailyChallenge = 4,
  Travel = 5,
  TravelDialogDisplayed = 6,
  TravelDialogClosed = 7,
  TravelGameStart = 8,
  LeaderBoard = 9,
  DailySign = 10,
  Classic = 11,
}
export enum ETravelMapClickType {
  Back = 0,
  Badge = 1,
  Play = 2,
}
export enum EPandaResult {
  Daily = 0,
  Travel = 1,
}
export class DotGameBtnClick {
  static dotSetting(e) {
    var t = "",
      o = this.getModeName();
    switch (e) {
      case EGameSettingClickType.InGameSetting_DialogDisplayed:
        t = "游戏内设置-" + o + "-弹窗展现";
        break;
      case EGameSettingClickType.InGameSetting_Closed:
        t = "游戏内设置-" + o + "-关闭";
        break;
      case EGameSettingClickType.InGameSetting_Restart:
        t = "游戏内设置-" + o + "-重新开始";
        break;
      case EGameSettingClickType.InGameSetting_PolicyTerm:
        t = "游戏内设置-" + o + "-条款";
        break;
      case EGameSettingClickType.InGameSetting_PrivacyAgreement:
        t = "游戏内设置-" + o + "-隐私协议";
        break;
      case EGameSettingClickType.HomePageSetting_DialogDisplayed:
        t = "主页设置-弹窗展现";
        break;
      case EGameSettingClickType.HomePageSetting_Closed:
        t = "主页设置-关闭";
        break;
      case EGameSettingClickType.HomePageSetting_PolicyTerm:
        t = "主页设置-条款";
        break;
      case EGameSettingClickType.HomePageSetting_PrivacyAgreement:
        t = "主页设置-隐私协议";
        break;
      case EGameSettingClickType.HomePageSetting_Closed:
        t = "主页设置-关闭";
    }
    this.dot(t);
  }
  static dotDailyTask(e, t = 0, o = {}) {
    var n = "",
      i = -1,
      r = o.adScale,
      a = void 0 === r ? 1 : r;
    switch (e) {
      case EDailyTaskClickType.DialogDisplayed:
        n = "每日任务-弹窗展现";
        break;
      case EDailyTaskClickType.Closed:
        n = "每日任务-关闭";
        break;
      case EDailyTaskClickType.StartGame_Home:
        n = "每日任务-首页-开始游戏";
        break;
      case EDailyTaskClickType.StartGame_Result:
        n = "每日任务-结算-开始游戏";
        break;
      case EDailyTaskClickType.StageTreasureChest:
        n = "每日任务-阶段" + t + "-宝箱";
        break;
      case EDailyTaskClickType.Completed_DialogDisplayed:
        n = "每日任务-完成阶段" + t + "-领取奖励-弹窗展示";
        break;
      case EDailyTaskClickType.Completed_ClaimReward:
        n = "每日任务-完成阶段" + t + "-领取奖励-领取";
        break;
      case EDailyTaskClickType.Completed_ClaimRewardAd:
        n = "每日任务-完成阶段" + t + "-领取奖励-领取x" + a;
        i = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
    }
    this.dot(n, i);
  }
  static dotRank(e, t = 0) {
    var o = "",
      n = -1;
    switch (e) {
      case ERankClickType.AutoRankIntroduceView:
        o = "限时排行榜-活动弹窗-打开";
        break;
      case ERankClickType.AutoRankResultPage1:
        o = "排行榜-结算-弹窗展现";
        break;
      case ERankClickType.AutoRankResultPage2:
        o = "排行榜-结算-领取奖励-弹窗展现";
        break;
      case ERankClickType.ClickRankViewTips:
        o = "排行榜-说明";
        break;
      case ERankClickType.ClickIntroduceCollect:
        o = "限时排行榜-活动弹窗-参赛";
        break;
      case ERankClickType.ClickIntroduceClose:
        o = "限时排行榜-活动弹窗-关闭-[按钮点击/系统操作]";
        break;
      case ERankClickType.ClickHallRank:
        o = "主页-排行榜";
        break;
      case ERankClickType.ClickRankViewBack:
        o = "排行榜-返回-[按钮点击/系统操作]";
        break;
      case ERankClickType.ClickRankViewStart:
        o = "排行榜-开始-第" + t + "关";
        break;
      case ERankClickType.ClickRankBonusContinue:
        o = "局内排行榜界面点击继续按钮";
        break;
      case ERankClickType.ClickRankBoxViewPage1Claim:
        o = "排行榜-结算-领取";
        break;
      case ERankClickType.ClickRankBoxViewPage2Claim:
        o = "排行榜-结算-领取奖励-领取";
        break;
      case ERankClickType.ClickRankBoxViewPage2AdClaim:
        o = "排行榜-结算-领取奖励-领取x" + t;
        n = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
    }
    this.dot(o, n);
  }
  static dotRevive(e) {
    var t = "",
      o = -1,
      n = this.getModeName();
    switch (e) {
      case EReviveClickType.Show:
        t = "复活弹窗-" + n + "-弹窗展现";
        break;
      case EReviveClickType.Close:
        t = "复活弹窗-" + n + "-关闭";
        break;
      case EReviveClickType.ShuffleItem:
        t = "复活弹窗-" + n + "-道具洗牌";
        break;
      case EReviveClickType.ShuffleAd:
        o = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
        t = "复活弹窗-" + n + "-重洗牌-视频";
        break;
      case EReviveClickType.Restart:
        t = "复活弹窗-" + n + "-重新开始";
    }
    this.dot(t, o);
  }
  static dotGame(e) {
    this.getModeName();
    switch (e) {
      case EBoardClickType.Setting:
      case EBoardClickType.Shuffle:
      case EBoardClickType.Hint:
      case EBoardClickType.Undo:
        break;
      case EBoardClickType.Escape:
    }
  }
  static dotVictoryChest(e, t = 2) {
    var o = "",
      n = -1;
    switch (e) {
      case EVictoryChestClickType.DialogDisplayed:
        o = "胜利宝箱-主关卡模式-领取奖励-弹窗展现";
        break;
      case EVictoryChestClickType.ClaimReward:
        o = "胜利宝箱-主关卡模式-领取奖励";
        break;
      case EVictoryChestClickType.ClaimMultipleReward:
        o = "胜利宝箱-主关卡模式-领取奖励-领取x" + t;
        n = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
        break;
      case EVictoryChestClickType.TravelDialogDisplayed:
        o = "胜利宝箱-旅行-领取奖励-弹窗展现";
        break;
      case EVictoryChestClickType.TravelClaimReward:
        o = "胜利宝箱-旅行-领取奖励-领取";
        break;
      case EVictoryChestClickType.TravelClaimMultipleReward:
        o = "胜利宝箱-旅行-领取奖励-领取x" + t;
        n = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
        break;
      case EVictoryChestClickType.TravelClaimRewardCollection:
        o = "胜利宝箱-旅行-领取奖励-收集";
    }
    this.dot(o, n);
  }
  static dotFreeItem(e) {
    var t = "",
      o = this.getModeName(),
      n = -1;
    switch (e) {
      case EFreeItemClickType.hintDisplayed:
        t = "免费提示-" + o + "-弹窗展现";
        break;
      case EFreeItemClickType.hintClosed:
        t = "免费提示-" + o + "-关闭";
        break;
      case EFreeItemClickType.hintGain:
        t = "免费提示-" + o + "-领取";
        n = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
        break;
      case EFreeItemClickType.shuffleDisplayed:
        t = "免费洗牌-" + o + "-弹窗展现";
        break;
      case EFreeItemClickType.shuffleClosed:
        t = "免费洗牌-" + o + "-关闭";
        break;
      case EFreeItemClickType.shuffleGain:
        t = "免费洗牌-" + o + "-领取";
        n = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
        break;
      case EFreeItemClickType.revertDisplayed:
        t = "免费撤回-" + o + "-弹窗展现";
        break;
      case EFreeItemClickType.revertClosed:
        t = "免费撤回-" + o + "-关闭";
        break;
      case EFreeItemClickType.revertGain:
        t = "免费撤回-" + o + "-领取";
        n = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
    }
    this.dot(t, n);
  }
  static dotADWindow(e) {
    var t = "",
      o = -1;
    switch (e) {
      case EADWindowClickType.Show:
        t = "弹窗展现";
        break;
      case EADWindowClickType.Close:
        t = "关闭";
        break;
      case EADWindowClickType.Retry:
        t = "重试";
        o = AdManager.getInstance().checkVideoAdIsReady() ? 1 : 0;
        break;
      case EADWindowClickType.Cancel:
        t = "取消";
    }
    this.dot("无法加载广告-" + t, o);
  }
  static doNextLevel(e) {
    this.dot("结算-第" + e + "关");
  }
  static dotDaily(e, t = "") {
    var o = "";
    switch (e) {
      case EDailyClickType.Closed:
        o = "每日挑战-关闭";
        break;
      case EDailyClickType.Collect:
        o = "每日挑战-展示厅";
        break;
      case EDailyClickType.MonthChange:
        o = "每日挑战-界面切换-[" + t + "]";
        break;
      case EDailyClickType.Play:
        o = "每日挑战-开始-[" + t + "]";
    }
    this.dot(o);
  }
  static dotBadge(e, t = "") {
    var o = "";
    switch (e) {
      case EBadgeClickType.Closed:
        o = "展示厅-返回";
        break;
      case EBadgeClickType.Journey:
        o = "展示厅-旅行";
        break;
      case EBadgeClickType.Daily:
        o = "展示厅-每日挑战";
        break;
      case EBadgeClickType.JourneyBtn:
        o = "展示厅-旅行点击";
        break;
      case EBadgeClickType.DailyBtn:
        o = "展示厅-每日挑战点击";
        break;
      case EBadgeClickType.Badge:
        o = "展示厅-旅行-[" + t + "]";
        break;
      case EBadgeClickType.BadgeShow:
        o = "展示厅-旅行-[" + t + "]-弹窗展现";
        break;
      case EBadgeClickType.BadgeGet:
        o = "展示厅-旅行-[" + t + "]-领取";
        break;
      case EBadgeClickType.RewardNot:
        o = "展示厅-每日挑战-[" + t + "]-未获得";
        break;
      case EBadgeClickType.RewardHas:
        o = "展示厅-每日挑战-[" + t + "]-已获得";
        break;
      case EBadgeClickType.RewardShow:
        o = "展示厅-每日挑战-[" + t + "]-弹窗展现";
        break;
      case EBadgeClickType.RewardGet:
        o = "展示厅-每日挑战-[" + t + "]-领取";
    }
    this.dot(o);
  }
  static dotFirstVibration() {
    if (!UserModel.getInstance().isFirstVibration()) {
      UserModel.getInstance().setFirstVibration(true);
      var e = LoginModel.getInstance().deviceModel || "";
      this.dot("首次震动--" + e);
    }
  }
  static dotBgmOccupation(e) {
    var t = "",
      o = mj.sdk.getIsAudioBusy() ? "是" : "否";
    switch (e) {
      case EBgmOccupationClickType.Hall:
        t = "大厅页面-音频占用-" + o;
        break;
      case EBgmOccupationClickType.Game:
        t = "游戏页面-音频占用-" + o;
    }
    this.dot(t);
  }
  static getModeName() {
    var e = UserModel.getInstance().getCurrentGameType(),
      t = "主关卡";
    if (e == MjGameType.Travel) {
      t = "旅行关卡";
    } else {
      if (e == MjGameType.DailyChallenge) {
        t = "每日挑战";
      } else {
        e == MjGameType.Classic && (t = "无尽模式");
      }
    }
    return t;
  }
  static dotTravelMap(e, t, o = 0) {
    var n = "";
    switch (e) {
      case ETravelMapClickType.Back:
        n = "旅行活动-" + t + "-返回-按钮点击";
        break;
      case ETravelMapClickType.Badge:
        n = "旅行活动-" + t + "-展示厅";
        break;
      case ETravelMapClickType.Play:
        n = "旅行活动-" + t + "-开始游戏-第" + o + "关";
    }
    this.dot(n);
  }
  static dotPandaResult(e) {
    var t = "";
    switch (e) {
      case EPandaResult.Daily:
        t = "结算-每日挑战-继续挑战";
        break;
      case EPandaResult.Travel:
        t = "结算-旅行活动-下一关";
    }
    this.dot(t);
  }
  static dotHall(e, t = 0) {
    var o = "";
    switch (e) {
      case EHomePageClickType.Setting:
        o = "主页-设置";
        break;
      case EHomePageClickType.Classic:
        o = "主页-无尽模式";
        break;
      case EHomePageClickType.Level:
        o = "主页-第" + t + "关";
        break;
      case EHomePageClickType.DailyTask:
        o = "主页-每日任务";
        break;
      case EHomePageClickType.ExhibitionHall:
        o = "主页-展厅";
        break;
      case EHomePageClickType.DailyChallenge:
        o = "主页-每日挑战";
        break;
      case EHomePageClickType.Travel:
        o = "主页-旅行活动";
        break;
      case EHomePageClickType.TravelDialogDisplayed:
        o = "主页-旅行活动弹窗-弹窗展现";
        break;
      case EHomePageClickType.TravelDialogClosed:
        o = "主页-旅行活动弹窗-弹窗关闭";
        break;
      case EHomePageClickType.TravelGameStart:
        o = "主页-旅行活动弹窗-开始游戏";
        break;
      case EHomePageClickType.LeaderBoard:
        o = "主页-排行榜活动";
        break;
      case EHomePageClickType.DailySign:
        o = "主页-每日签到";
    }
    this.dot(o);
  }
  static dotAgeSurveyShow(t) {
    var o = this.getAgeSurveyDotPrefix(t);
    DotGameBtnClick.dot(o + "-弹窗展现");
  }
  static dotAgeSelect(t, o) {
    var n = this.getAgeSurveyDotPrefix(t),
      i = this.formatAgeIdForDot(o);
    DotGameBtnClick.dot(n + "-" + i);
  }
  static dotAgeSurveyClose(t) {
    var o = this.getAgeSurveyDotPrefix(t);
    DotGameBtnClick.dot(o + "-关闭按钮");
  }
  static getAgeSurveyDotPrefix(e) {
    return 0 === e ? "年龄问卷1" : "年龄问卷_" + (e + 1);
  }
  static formatAgeIdForDot(e) {
    return e ? e.endsWith("+") ? e.replace("+", "以上") : e.replace("-", "至") : "";
  }
  static dotResetTheme(e) {
    var t;
    e || (e = "Default");
    t = "设置-" + this.getModeName() + "-恢复默认皮肤-" + e;
    this.dot(t);
  }
  static dot(e, t = -1) {
    var o = {
      click_type: e,
      ad_is_ready: t
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.BtnClick, o);
  }
}