"use strict";
cc._RF.push(module, 'be3d0AprzxEfItqRpsGEgR2', 'DGameBtnClick');
// Scripts/dot/DGameBtnClick.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameBtnClick = exports.EPandaResult = exports.ETravelMapClickType = exports.EHomePageClickType = exports.EBadgeClickType = exports.EDailyClickType = exports.ERankClickType = exports.EBgmOccupationClickType = exports.EDailyTaskClickType = exports.EADWindowClickType = exports.EFreeItemClickType = exports.EVictoryChestClickType = exports.EGameSettingClickType = exports.EReviveClickType = exports.EBoardClickType = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var AdManager_1 = require("../base/ad/AdManager");
var EventData_1 = require("../base/event/EventData");
var EventTrackingManager_1 = require("../base/event/EventTrackingManager");
var LoginModel_1 = require("../gamePlay/login/model/LoginModel");
var UserModel_1 = require("../gamePlay/user/UserModel");
var EBoardClickType;
(function (EBoardClickType) {
    EBoardClickType[EBoardClickType["Setting"] = 0] = "Setting";
    EBoardClickType[EBoardClickType["Shuffle"] = 1] = "Shuffle";
    EBoardClickType[EBoardClickType["Hint"] = 2] = "Hint";
    EBoardClickType[EBoardClickType["Undo"] = 3] = "Undo";
    EBoardClickType[EBoardClickType["Escape"] = 4] = "Escape";
})(EBoardClickType = exports.EBoardClickType || (exports.EBoardClickType = {}));
var EReviveClickType;
(function (EReviveClickType) {
    EReviveClickType[EReviveClickType["Show"] = 0] = "Show";
    EReviveClickType[EReviveClickType["Close"] = 1] = "Close";
    EReviveClickType[EReviveClickType["ShuffleItem"] = 2] = "ShuffleItem";
    EReviveClickType[EReviveClickType["ShuffleAd"] = 3] = "ShuffleAd";
    EReviveClickType[EReviveClickType["Restart"] = 4] = "Restart";
})(EReviveClickType = exports.EReviveClickType || (exports.EReviveClickType = {}));
var EGameSettingClickType;
(function (EGameSettingClickType) {
    EGameSettingClickType[EGameSettingClickType["InGameSetting_DialogDisplayed"] = 0] = "InGameSetting_DialogDisplayed";
    EGameSettingClickType[EGameSettingClickType["InGameSetting_Closed"] = 1] = "InGameSetting_Closed";
    EGameSettingClickType[EGameSettingClickType["InGameSetting_Restart"] = 2] = "InGameSetting_Restart";
    EGameSettingClickType[EGameSettingClickType["InGameSetting_HomePage"] = 3] = "InGameSetting_HomePage";
    EGameSettingClickType[EGameSettingClickType["InGameSetting_PrivacyAgreement"] = 4] = "InGameSetting_PrivacyAgreement";
    EGameSettingClickType[EGameSettingClickType["InGameSetting_PolicyTerm"] = 5] = "InGameSetting_PolicyTerm";
    EGameSettingClickType[EGameSettingClickType["HomePageSetting_DialogDisplayed"] = 6] = "HomePageSetting_DialogDisplayed";
    EGameSettingClickType[EGameSettingClickType["HomePageSetting_Closed"] = 7] = "HomePageSetting_Closed";
    EGameSettingClickType[EGameSettingClickType["HomePageSetting_PolicyTerm"] = 8] = "HomePageSetting_PolicyTerm";
    EGameSettingClickType[EGameSettingClickType["HomePageSetting_PrivacyAgreement"] = 9] = "HomePageSetting_PrivacyAgreement";
})(EGameSettingClickType = exports.EGameSettingClickType || (exports.EGameSettingClickType = {}));
var EVictoryChestClickType;
(function (EVictoryChestClickType) {
    EVictoryChestClickType[EVictoryChestClickType["DialogDisplayed"] = 0] = "DialogDisplayed";
    EVictoryChestClickType[EVictoryChestClickType["TravelDialogDisplayed"] = 1] = "TravelDialogDisplayed";
    EVictoryChestClickType[EVictoryChestClickType["ClaimReward"] = 2] = "ClaimReward";
    EVictoryChestClickType[EVictoryChestClickType["TravelClaimReward"] = 3] = "TravelClaimReward";
    EVictoryChestClickType[EVictoryChestClickType["TravelClaimRewardCollection"] = 4] = "TravelClaimRewardCollection";
    EVictoryChestClickType[EVictoryChestClickType["ClaimMultipleReward"] = 5] = "ClaimMultipleReward";
    EVictoryChestClickType[EVictoryChestClickType["TravelClaimMultipleReward"] = 6] = "TravelClaimMultipleReward";
})(EVictoryChestClickType = exports.EVictoryChestClickType || (exports.EVictoryChestClickType = {}));
var EFreeItemClickType;
(function (EFreeItemClickType) {
    EFreeItemClickType[EFreeItemClickType["hintDisplayed"] = 0] = "hintDisplayed";
    EFreeItemClickType[EFreeItemClickType["hintClosed"] = 1] = "hintClosed";
    EFreeItemClickType[EFreeItemClickType["hintGain"] = 2] = "hintGain";
    EFreeItemClickType[EFreeItemClickType["shuffleDisplayed"] = 3] = "shuffleDisplayed";
    EFreeItemClickType[EFreeItemClickType["shuffleClosed"] = 4] = "shuffleClosed";
    EFreeItemClickType[EFreeItemClickType["shuffleGain"] = 5] = "shuffleGain";
    EFreeItemClickType[EFreeItemClickType["revertDisplayed"] = 6] = "revertDisplayed";
    EFreeItemClickType[EFreeItemClickType["revertClosed"] = 7] = "revertClosed";
    EFreeItemClickType[EFreeItemClickType["revertGain"] = 8] = "revertGain";
})(EFreeItemClickType = exports.EFreeItemClickType || (exports.EFreeItemClickType = {}));
var EADWindowClickType;
(function (EADWindowClickType) {
    EADWindowClickType[EADWindowClickType["Show"] = 0] = "Show";
    EADWindowClickType[EADWindowClickType["Close"] = 1] = "Close";
    EADWindowClickType[EADWindowClickType["Retry"] = 2] = "Retry";
    EADWindowClickType[EADWindowClickType["Cancel"] = 3] = "Cancel";
})(EADWindowClickType = exports.EADWindowClickType || (exports.EADWindowClickType = {}));
var EDailyTaskClickType;
(function (EDailyTaskClickType) {
    EDailyTaskClickType[EDailyTaskClickType["DialogDisplayed"] = 0] = "DialogDisplayed";
    EDailyTaskClickType[EDailyTaskClickType["Closed"] = 1] = "Closed";
    EDailyTaskClickType[EDailyTaskClickType["StartGame_Home"] = 2] = "StartGame_Home";
    EDailyTaskClickType[EDailyTaskClickType["StartGame_Result"] = 3] = "StartGame_Result";
    EDailyTaskClickType[EDailyTaskClickType["StageTreasureChest"] = 4] = "StageTreasureChest";
    EDailyTaskClickType[EDailyTaskClickType["Completed_DialogDisplayed"] = 5] = "Completed_DialogDisplayed";
    EDailyTaskClickType[EDailyTaskClickType["Completed_ClaimReward"] = 6] = "Completed_ClaimReward";
    EDailyTaskClickType[EDailyTaskClickType["Completed_ClaimRewardAd"] = 7] = "Completed_ClaimRewardAd";
})(EDailyTaskClickType = exports.EDailyTaskClickType || (exports.EDailyTaskClickType = {}));
var EBgmOccupationClickType;
(function (EBgmOccupationClickType) {
    EBgmOccupationClickType[EBgmOccupationClickType["Hall"] = 0] = "Hall";
    EBgmOccupationClickType[EBgmOccupationClickType["Game"] = 1] = "Game";
})(EBgmOccupationClickType = exports.EBgmOccupationClickType || (exports.EBgmOccupationClickType = {}));
var ERankClickType;
(function (ERankClickType) {
    ERankClickType[ERankClickType["AutoRankIntroduceView"] = 0] = "AutoRankIntroduceView";
    ERankClickType[ERankClickType["AutoRankResultPage1"] = 1] = "AutoRankResultPage1";
    ERankClickType[ERankClickType["AutoRankResultPage2"] = 2] = "AutoRankResultPage2";
    ERankClickType[ERankClickType["ClickRankViewTips"] = 3] = "ClickRankViewTips";
    ERankClickType[ERankClickType["ClickIntroduceCollect"] = 4] = "ClickIntroduceCollect";
    ERankClickType[ERankClickType["ClickIntroduceClose"] = 5] = "ClickIntroduceClose";
    ERankClickType[ERankClickType["ClickHallRank"] = 6] = "ClickHallRank";
    ERankClickType[ERankClickType["ClickRankViewBack"] = 7] = "ClickRankViewBack";
    ERankClickType[ERankClickType["ClickRankViewStart"] = 8] = "ClickRankViewStart";
    ERankClickType[ERankClickType["ClickRankBonusContinue"] = 9] = "ClickRankBonusContinue";
    ERankClickType[ERankClickType["ClickRankBoxViewPage1Claim"] = 10] = "ClickRankBoxViewPage1Claim";
    ERankClickType[ERankClickType["ClickRankBoxViewPage2Claim"] = 11] = "ClickRankBoxViewPage2Claim";
    ERankClickType[ERankClickType["ClickRankBoxViewPage2AdClaim"] = 12] = "ClickRankBoxViewPage2AdClaim";
})(ERankClickType = exports.ERankClickType || (exports.ERankClickType = {}));
var EDailyClickType;
(function (EDailyClickType) {
    EDailyClickType[EDailyClickType["Closed"] = 0] = "Closed";
    EDailyClickType[EDailyClickType["Collect"] = 1] = "Collect";
    EDailyClickType[EDailyClickType["MonthChange"] = 2] = "MonthChange";
    EDailyClickType[EDailyClickType["Play"] = 3] = "Play";
})(EDailyClickType = exports.EDailyClickType || (exports.EDailyClickType = {}));
var EBadgeClickType;
(function (EBadgeClickType) {
    EBadgeClickType[EBadgeClickType["Closed"] = 0] = "Closed";
    EBadgeClickType[EBadgeClickType["Journey"] = 1] = "Journey";
    EBadgeClickType[EBadgeClickType["Daily"] = 2] = "Daily";
    EBadgeClickType[EBadgeClickType["JourneyBtn"] = 3] = "JourneyBtn";
    EBadgeClickType[EBadgeClickType["DailyBtn"] = 4] = "DailyBtn";
    EBadgeClickType[EBadgeClickType["Badge"] = 5] = "Badge";
    EBadgeClickType[EBadgeClickType["BadgeShow"] = 6] = "BadgeShow";
    EBadgeClickType[EBadgeClickType["BadgeGet"] = 7] = "BadgeGet";
    EBadgeClickType[EBadgeClickType["RewardNot"] = 8] = "RewardNot";
    EBadgeClickType[EBadgeClickType["RewardHas"] = 9] = "RewardHas";
    EBadgeClickType[EBadgeClickType["RewardShow"] = 10] = "RewardShow";
    EBadgeClickType[EBadgeClickType["RewardGet"] = 11] = "RewardGet";
})(EBadgeClickType = exports.EBadgeClickType || (exports.EBadgeClickType = {}));
var EHomePageClickType;
(function (EHomePageClickType) {
    EHomePageClickType[EHomePageClickType["Setting"] = 0] = "Setting";
    EHomePageClickType[EHomePageClickType["Level"] = 1] = "Level";
    EHomePageClickType[EHomePageClickType["DailyTask"] = 2] = "DailyTask";
    EHomePageClickType[EHomePageClickType["ExhibitionHall"] = 3] = "ExhibitionHall";
    EHomePageClickType[EHomePageClickType["DailyChallenge"] = 4] = "DailyChallenge";
    EHomePageClickType[EHomePageClickType["Travel"] = 5] = "Travel";
    EHomePageClickType[EHomePageClickType["TravelDialogDisplayed"] = 6] = "TravelDialogDisplayed";
    EHomePageClickType[EHomePageClickType["TravelDialogClosed"] = 7] = "TravelDialogClosed";
    EHomePageClickType[EHomePageClickType["TravelGameStart"] = 8] = "TravelGameStart";
    EHomePageClickType[EHomePageClickType["LeaderBoard"] = 9] = "LeaderBoard";
    EHomePageClickType[EHomePageClickType["DailySign"] = 10] = "DailySign";
    EHomePageClickType[EHomePageClickType["Classic"] = 11] = "Classic";
})(EHomePageClickType = exports.EHomePageClickType || (exports.EHomePageClickType = {}));
var ETravelMapClickType;
(function (ETravelMapClickType) {
    ETravelMapClickType[ETravelMapClickType["Back"] = 0] = "Back";
    ETravelMapClickType[ETravelMapClickType["Badge"] = 1] = "Badge";
    ETravelMapClickType[ETravelMapClickType["Play"] = 2] = "Play";
})(ETravelMapClickType = exports.ETravelMapClickType || (exports.ETravelMapClickType = {}));
var EPandaResult;
(function (EPandaResult) {
    EPandaResult[EPandaResult["Daily"] = 0] = "Daily";
    EPandaResult[EPandaResult["Travel"] = 1] = "Travel";
})(EPandaResult = exports.EPandaResult || (exports.EPandaResult = {}));
var DotGameBtnClick = /** @class */ (function () {
    function DotGameBtnClick() {
    }
    DotGameBtnClick.dotSetting = function (e) {
        var t = "", o = this.getModeName();
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
    };
    DotGameBtnClick.dotDailyTask = function (e, t, o) {
        if (t === void 0) { t = 0; }
        if (o === void 0) { o = {}; }
        var n = "", i = -1, r = o.adScale, a = void 0 === r ? 1 : r;
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
                i = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
        }
        this.dot(n, i);
    };
    DotGameBtnClick.dotRank = function (e, t) {
        if (t === void 0) { t = 0; }
        var o = "", n = -1;
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
                n = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
        }
        this.dot(o, n);
    };
    DotGameBtnClick.dotRevive = function (e) {
        var t = "", o = -1, n = this.getModeName();
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
                o = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
                t = "复活弹窗-" + n + "-重洗牌-视频";
                break;
            case EReviveClickType.Restart:
                t = "复活弹窗-" + n + "-重新开始";
        }
        this.dot(t, o);
    };
    DotGameBtnClick.dotGame = function (e) {
        this.getModeName();
        switch (e) {
            case EBoardClickType.Setting:
            case EBoardClickType.Shuffle:
            case EBoardClickType.Hint:
            case EBoardClickType.Undo:
                break;
            case EBoardClickType.Escape:
        }
    };
    DotGameBtnClick.dotVictoryChest = function (e, t) {
        if (t === void 0) { t = 2; }
        var o = "", n = -1;
        switch (e) {
            case EVictoryChestClickType.DialogDisplayed:
                o = "胜利宝箱-主关卡模式-领取奖励-弹窗展现";
                break;
            case EVictoryChestClickType.ClaimReward:
                o = "胜利宝箱-主关卡模式-领取奖励";
                break;
            case EVictoryChestClickType.ClaimMultipleReward:
                o = "胜利宝箱-主关卡模式-领取奖励-领取x" + t;
                n = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
                break;
            case EVictoryChestClickType.TravelDialogDisplayed:
                o = "胜利宝箱-旅行-领取奖励-弹窗展现";
                break;
            case EVictoryChestClickType.TravelClaimReward:
                o = "胜利宝箱-旅行-领取奖励-领取";
                break;
            case EVictoryChestClickType.TravelClaimMultipleReward:
                o = "胜利宝箱-旅行-领取奖励-领取x" + t;
                n = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
                break;
            case EVictoryChestClickType.TravelClaimRewardCollection:
                o = "胜利宝箱-旅行-领取奖励-收集";
        }
        this.dot(o, n);
    };
    DotGameBtnClick.dotFreeItem = function (e) {
        var t = "", o = this.getModeName(), n = -1;
        switch (e) {
            case EFreeItemClickType.hintDisplayed:
                t = "免费提示-" + o + "-弹窗展现";
                break;
            case EFreeItemClickType.hintClosed:
                t = "免费提示-" + o + "-关闭";
                break;
            case EFreeItemClickType.hintGain:
                t = "免费提示-" + o + "-领取";
                n = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
                break;
            case EFreeItemClickType.shuffleDisplayed:
                t = "免费洗牌-" + o + "-弹窗展现";
                break;
            case EFreeItemClickType.shuffleClosed:
                t = "免费洗牌-" + o + "-关闭";
                break;
            case EFreeItemClickType.shuffleGain:
                t = "免费洗牌-" + o + "-领取";
                n = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
                break;
            case EFreeItemClickType.revertDisplayed:
                t = "免费撤回-" + o + "-弹窗展现";
                break;
            case EFreeItemClickType.revertClosed:
                t = "免费撤回-" + o + "-关闭";
                break;
            case EFreeItemClickType.revertGain:
                t = "免费撤回-" + o + "-领取";
                n = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
        }
        this.dot(t, n);
    };
    DotGameBtnClick.dotADWindow = function (e) {
        var t = "", o = -1;
        switch (e) {
            case EADWindowClickType.Show:
                t = "弹窗展现";
                break;
            case EADWindowClickType.Close:
                t = "关闭";
                break;
            case EADWindowClickType.Retry:
                t = "重试";
                o = AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0;
                break;
            case EADWindowClickType.Cancel:
                t = "取消";
        }
        this.dot("无法加载广告-" + t, o);
    };
    DotGameBtnClick.doNextLevel = function (e) {
        this.dot("结算-第" + e + "关");
    };
    DotGameBtnClick.dotDaily = function (e, t) {
        if (t === void 0) { t = ""; }
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
    };
    DotGameBtnClick.dotBadge = function (e, t) {
        if (t === void 0) { t = ""; }
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
    };
    DotGameBtnClick.dotFirstVibration = function () {
        if (!UserModel_1.default.getInstance().isFirstVibration()) {
            UserModel_1.default.getInstance().setFirstVibration(true);
            var e = LoginModel_1.default.getInstance().deviceModel || "";
            this.dot("首次震动--" + e);
        }
    };
    DotGameBtnClick.dotBgmOccupation = function (e) {
        var t = "", o = mj.sdk.getIsAudioBusy() ? "是" : "否";
        switch (e) {
            case EBgmOccupationClickType.Hall:
                t = "大厅页面-音频占用-" + o;
                break;
            case EBgmOccupationClickType.Game:
                t = "游戏页面-音频占用-" + o;
        }
        this.dot(t);
    };
    DotGameBtnClick.getModeName = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameType(), t = "主关卡";
        if (e == GameTypeEnums_1.MjGameType.Travel) {
            t = "旅行关卡";
        }
        else {
            if (e == GameTypeEnums_1.MjGameType.DailyChallenge) {
                t = "每日挑战";
            }
            else {
                e == GameTypeEnums_1.MjGameType.Classic && (t = "无尽模式");
            }
        }
        return t;
    };
    DotGameBtnClick.dotTravelMap = function (e, t, o) {
        if (o === void 0) { o = 0; }
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
    };
    DotGameBtnClick.dotPandaResult = function (e) {
        var t = "";
        switch (e) {
            case EPandaResult.Daily:
                t = "结算-每日挑战-继续挑战";
                break;
            case EPandaResult.Travel:
                t = "结算-旅行活动-下一关";
        }
        this.dot(t);
    };
    DotGameBtnClick.dotHall = function (e, t) {
        if (t === void 0) { t = 0; }
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
    };
    DotGameBtnClick.dotAgeSurveyShow = function (t) {
        var o = this.getAgeSurveyDotPrefix(t);
        DotGameBtnClick.dot(o + "-弹窗展现");
    };
    DotGameBtnClick.dotAgeSelect = function (t, o) {
        var n = this.getAgeSurveyDotPrefix(t), i = this.formatAgeIdForDot(o);
        DotGameBtnClick.dot(n + "-" + i);
    };
    DotGameBtnClick.dotAgeSurveyClose = function (t) {
        var o = this.getAgeSurveyDotPrefix(t);
        DotGameBtnClick.dot(o + "-关闭按钮");
    };
    DotGameBtnClick.getAgeSurveyDotPrefix = function (e) {
        return 0 === e ? "年龄问卷1" : "年龄问卷_" + (e + 1);
    };
    DotGameBtnClick.formatAgeIdForDot = function (e) {
        return e ? e.endsWith("+") ? e.replace("+", "以上") : e.replace("-", "至") : "";
    };
    DotGameBtnClick.dotResetTheme = function (e) {
        var t;
        e || (e = "Default");
        t = "设置-" + this.getModeName() + "-恢复默认皮肤-" + e;
        this.dot(t);
    };
    DotGameBtnClick.dot = function (e, t) {
        if (t === void 0) { t = -1; }
        var o = {
            click_type: e,
            ad_is_ready: t
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.BtnClick, o);
    };
    return DotGameBtnClick;
}());
exports.DotGameBtnClick = DotGameBtnClick;

cc._RF.pop();