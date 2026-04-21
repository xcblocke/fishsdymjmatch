
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/dot/DGameBtnClick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXNFO0FBQ3RFLGtEQUE2QztBQUM3QyxxREFBNEQ7QUFDNUQsMkVBQXNFO0FBQ3RFLGlFQUE0RDtBQUM1RCx3REFBbUQ7QUFDbkQsSUFBWSxlQU1YO0FBTkQsV0FBWSxlQUFlO0lBQ3pCLDJEQUFXLENBQUE7SUFDWCwyREFBVyxDQUFBO0lBQ1gscURBQVEsQ0FBQTtJQUNSLHFEQUFRLENBQUE7SUFDUix5REFBVSxDQUFBO0FBQ1osQ0FBQyxFQU5XLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBTTFCO0FBQ0QsSUFBWSxnQkFNWDtBQU5ELFdBQVksZ0JBQWdCO0lBQzFCLHVEQUFRLENBQUE7SUFDUix5REFBUyxDQUFBO0lBQ1QscUVBQWUsQ0FBQTtJQUNmLGlFQUFhLENBQUE7SUFDYiw2REFBVyxDQUFBO0FBQ2IsQ0FBQyxFQU5XLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBTTNCO0FBQ0QsSUFBWSxxQkFXWDtBQVhELFdBQVkscUJBQXFCO0lBQy9CLG1IQUFpQyxDQUFBO0lBQ2pDLGlHQUF3QixDQUFBO0lBQ3hCLG1HQUF5QixDQUFBO0lBQ3pCLHFHQUEwQixDQUFBO0lBQzFCLHFIQUFrQyxDQUFBO0lBQ2xDLHlHQUE0QixDQUFBO0lBQzVCLHVIQUFtQyxDQUFBO0lBQ25DLHFHQUEwQixDQUFBO0lBQzFCLDZHQUE4QixDQUFBO0lBQzlCLHlIQUFvQyxDQUFBO0FBQ3RDLENBQUMsRUFYVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQVdoQztBQUNELElBQVksc0JBUVg7QUFSRCxXQUFZLHNCQUFzQjtJQUNoQyx5RkFBbUIsQ0FBQTtJQUNuQixxR0FBeUIsQ0FBQTtJQUN6QixpRkFBZSxDQUFBO0lBQ2YsNkZBQXFCLENBQUE7SUFDckIsaUhBQStCLENBQUE7SUFD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QixJQUFJLENBQUMsR0FBRztZQUNOLFVBQVUsRUFBRSxDQUFDO1lBQ2IsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDO1FBQ0YsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQTNhQSxBQTJhQyxJQUFBO0FBM2FZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4uL2Jhc2UvZXZlbnQvRXZlbnREYXRhJztcbmltcG9ydCBFdmVudFRyYWNraW5nTWFuYWdlciBmcm9tICcuLi9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5leHBvcnQgZW51bSBFQm9hcmRDbGlja1R5cGUge1xuICBTZXR0aW5nID0gMCxcbiAgU2h1ZmZsZSA9IDEsXG4gIEhpbnQgPSAyLFxuICBVbmRvID0gMyxcbiAgRXNjYXBlID0gNCxcbn1cbmV4cG9ydCBlbnVtIEVSZXZpdmVDbGlja1R5cGUge1xuICBTaG93ID0gMCxcbiAgQ2xvc2UgPSAxLFxuICBTaHVmZmxlSXRlbSA9IDIsXG4gIFNodWZmbGVBZCA9IDMsXG4gIFJlc3RhcnQgPSA0LFxufVxuZXhwb3J0IGVudW0gRUdhbWVTZXR0aW5nQ2xpY2tUeXBlIHtcbiAgSW5HYW1lU2V0dGluZ19EaWFsb2dEaXNwbGF5ZWQgPSAwLFxuICBJbkdhbWVTZXR0aW5nX0Nsb3NlZCA9IDEsXG4gIEluR2FtZVNldHRpbmdfUmVzdGFydCA9IDIsXG4gIEluR2FtZVNldHRpbmdfSG9tZVBhZ2UgPSAzLFxuICBJbkdhbWVTZXR0aW5nX1ByaXZhY3lBZ3JlZW1lbnQgPSA0LFxuICBJbkdhbWVTZXR0aW5nX1BvbGljeVRlcm0gPSA1LFxuICBIb21lUGFnZVNldHRpbmdfRGlhbG9nRGlzcGxheWVkID0gNixcbiAgSG9tZVBhZ2VTZXR0aW5nX0Nsb3NlZCA9IDcsXG4gIEhvbWVQYWdlU2V0dGluZ19Qb2xpY3lUZXJtID0gOCxcbiAgSG9tZVBhZ2VTZXR0aW5nX1ByaXZhY3lBZ3JlZW1lbnQgPSA5LFxufVxuZXhwb3J0IGVudW0gRVZpY3RvcnlDaGVzdENsaWNrVHlwZSB7XG4gIERpYWxvZ0Rpc3BsYXllZCA9IDAsXG4gIFRyYXZlbERpYWxvZ0Rpc3BsYXllZCA9IDEsXG4gIENsYWltUmV3YXJkID0gMixcbiAgVHJhdmVsQ2xhaW1SZXdhcmQgPSAzLFxuICBUcmF2ZWxDbGFpbVJld2FyZENvbGxlY3Rpb24gPSA0LFxuICBDbGFpbU11bHRpcGxlUmV3YXJkID0gNSxcbiAgVHJhdmVsQ2xhaW1NdWx0aXBsZVJld2FyZCA9IDYsXG59XG5leHBvcnQgZW51bSBFRnJlZUl0ZW1DbGlja1R5cGUge1xuICBoaW50RGlzcGxheWVkID0gMCxcbiAgaGludENsb3NlZCA9IDEsXG4gIGhpbnRHYWluID0gMixcbiAgc2h1ZmZsZURpc3BsYXllZCA9IDMsXG4gIHNodWZmbGVDbG9zZWQgPSA0LFxuICBzaHVmZmxlR2FpbiA9IDUsXG4gIHJldmVydERpc3BsYXllZCA9IDYsXG4gIHJldmVydENsb3NlZCA9IDcsXG4gIHJldmVydEdhaW4gPSA4LFxufVxuZXhwb3J0IGVudW0gRUFEV2luZG93Q2xpY2tUeXBlIHtcbiAgU2hvdyA9IDAsXG4gIENsb3NlID0gMSxcbiAgUmV0cnkgPSAyLFxuICBDYW5jZWwgPSAzLFxufVxuZXhwb3J0IGVudW0gRURhaWx5VGFza0NsaWNrVHlwZSB7XG4gIERpYWxvZ0Rpc3BsYXllZCA9IDAsXG4gIENsb3NlZCA9IDEsXG4gIFN0YXJ0R2FtZV9Ib21lID0gMixcbiAgU3RhcnRHYW1lX1Jlc3VsdCA9IDMsXG4gIFN0YWdlVHJlYXN1cmVDaGVzdCA9IDQsXG4gIENvbXBsZXRlZF9EaWFsb2dEaXNwbGF5ZWQgPSA1LFxuICBDb21wbGV0ZWRfQ2xhaW1SZXdhcmQgPSA2LFxuICBDb21wbGV0ZWRfQ2xhaW1SZXdhcmRBZCA9IDcsXG59XG5leHBvcnQgZW51bSBFQmdtT2NjdXBhdGlvbkNsaWNrVHlwZSB7XG4gIEhhbGwgPSAwLFxuICBHYW1lID0gMSxcbn1cbmV4cG9ydCBlbnVtIEVSYW5rQ2xpY2tUeXBlIHtcbiAgQXV0b1JhbmtJbnRyb2R1Y2VWaWV3ID0gMCxcbiAgQXV0b1JhbmtSZXN1bHRQYWdlMSA9IDEsXG4gIEF1dG9SYW5rUmVzdWx0UGFnZTIgPSAyLFxuICBDbGlja1JhbmtWaWV3VGlwcyA9IDMsXG4gIENsaWNrSW50cm9kdWNlQ29sbGVjdCA9IDQsXG4gIENsaWNrSW50cm9kdWNlQ2xvc2UgPSA1LFxuICBDbGlja0hhbGxSYW5rID0gNixcbiAgQ2xpY2tSYW5rVmlld0JhY2sgPSA3LFxuICBDbGlja1JhbmtWaWV3U3RhcnQgPSA4LFxuICBDbGlja1JhbmtCb251c0NvbnRpbnVlID0gOSxcbiAgQ2xpY2tSYW5rQm94Vmlld1BhZ2UxQ2xhaW0gPSAxMCxcbiAgQ2xpY2tSYW5rQm94Vmlld1BhZ2UyQ2xhaW0gPSAxMSxcbiAgQ2xpY2tSYW5rQm94Vmlld1BhZ2UyQWRDbGFpbSA9IDEyLFxufVxuZXhwb3J0IGVudW0gRURhaWx5Q2xpY2tUeXBlIHtcbiAgQ2xvc2VkID0gMCxcbiAgQ29sbGVjdCA9IDEsXG4gIE1vbnRoQ2hhbmdlID0gMixcbiAgUGxheSA9IDMsXG59XG5leHBvcnQgZW51bSBFQmFkZ2VDbGlja1R5cGUge1xuICBDbG9zZWQgPSAwLFxuICBKb3VybmV5ID0gMSxcbiAgRGFpbHkgPSAyLFxuICBKb3VybmV5QnRuID0gMyxcbiAgRGFpbHlCdG4gPSA0LFxuICBCYWRnZSA9IDUsXG4gIEJhZGdlU2hvdyA9IDYsXG4gIEJhZGdlR2V0ID0gNyxcbiAgUmV3YXJkTm90ID0gOCxcbiAgUmV3YXJkSGFzID0gOSxcbiAgUmV3YXJkU2hvdyA9IDEwLFxuICBSZXdhcmRHZXQgPSAxMSxcbn1cbmV4cG9ydCBlbnVtIEVIb21lUGFnZUNsaWNrVHlwZSB7XG4gIFNldHRpbmcgPSAwLFxuICBMZXZlbCA9IDEsXG4gIERhaWx5VGFzayA9IDIsXG4gIEV4aGliaXRpb25IYWxsID0gMyxcbiAgRGFpbHlDaGFsbGVuZ2UgPSA0LFxuICBUcmF2ZWwgPSA1LFxuICBUcmF2ZWxEaWFsb2dEaXNwbGF5ZWQgPSA2LFxuICBUcmF2ZWxEaWFsb2dDbG9zZWQgPSA3LFxuICBUcmF2ZWxHYW1lU3RhcnQgPSA4LFxuICBMZWFkZXJCb2FyZCA9IDksXG4gIERhaWx5U2lnbiA9IDEwLFxuICBDbGFzc2ljID0gMTEsXG59XG5leHBvcnQgZW51bSBFVHJhdmVsTWFwQ2xpY2tUeXBlIHtcbiAgQmFjayA9IDAsXG4gIEJhZGdlID0gMSxcbiAgUGxheSA9IDIsXG59XG5leHBvcnQgZW51bSBFUGFuZGFSZXN1bHQge1xuICBEYWlseSA9IDAsXG4gIFRyYXZlbCA9IDEsXG59XG5leHBvcnQgY2xhc3MgRG90R2FtZUJ0bkNsaWNrIHtcbiAgc3RhdGljIGRvdFNldHRpbmcoZSkge1xuICAgIHZhciB0ID0gXCJcIixcbiAgICAgIG8gPSB0aGlzLmdldE1vZGVOYW1lKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVHYW1lU2V0dGluZ0NsaWNrVHlwZS5JbkdhbWVTZXR0aW5nX0RpYWxvZ0Rpc3BsYXllZDpcbiAgICAgICAgdCA9IFwi5ri45oiP5YaF6K6+572uLVwiICsgbyArIFwiLeW8ueeql+WxleeOsFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkluR2FtZVNldHRpbmdfQ2xvc2VkOlxuICAgICAgICB0ID0gXCLmuLjmiI/lhoXorr7nva4tXCIgKyBvICsgXCIt5YWz6ZetXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFR2FtZVNldHRpbmdDbGlja1R5cGUuSW5HYW1lU2V0dGluZ19SZXN0YXJ0OlxuICAgICAgICB0ID0gXCLmuLjmiI/lhoXorr7nva4tXCIgKyBvICsgXCIt6YeN5paw5byA5aeLXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFR2FtZVNldHRpbmdDbGlja1R5cGUuSW5HYW1lU2V0dGluZ19Qb2xpY3lUZXJtOlxuICAgICAgICB0ID0gXCLmuLjmiI/lhoXorr7nva4tXCIgKyBvICsgXCIt5p2h5qy+XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFR2FtZVNldHRpbmdDbGlja1R5cGUuSW5HYW1lU2V0dGluZ19Qcml2YWN5QWdyZWVtZW50OlxuICAgICAgICB0ID0gXCLmuLjmiI/lhoXorr7nva4tXCIgKyBvICsgXCIt6ZqQ56eB5Y2P6K6uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFR2FtZVNldHRpbmdDbGlja1R5cGUuSG9tZVBhZ2VTZXR0aW5nX0RpYWxvZ0Rpc3BsYXllZDpcbiAgICAgICAgdCA9IFwi5Li76aG16K6+572uLeW8ueeql+WxleeOsFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkhvbWVQYWdlU2V0dGluZ19DbG9zZWQ6XG4gICAgICAgIHQgPSBcIuS4u+mhteiuvue9ri3lhbPpl61cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVHYW1lU2V0dGluZ0NsaWNrVHlwZS5Ib21lUGFnZVNldHRpbmdfUG9saWN5VGVybTpcbiAgICAgICAgdCA9IFwi5Li76aG16K6+572uLeadoeasvlwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkhvbWVQYWdlU2V0dGluZ19Qcml2YWN5QWdyZWVtZW50OlxuICAgICAgICB0ID0gXCLkuLvpobXorr7nva4t6ZqQ56eB5Y2P6K6uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFR2FtZVNldHRpbmdDbGlja1R5cGUuSG9tZVBhZ2VTZXR0aW5nX0Nsb3NlZDpcbiAgICAgICAgdCA9IFwi5Li76aG16K6+572uLeWFs+mXrVwiO1xuICAgIH1cbiAgICB0aGlzLmRvdCh0KTtcbiAgfVxuICBzdGF0aWMgZG90RGFpbHlUYXNrKGUsIHQgPSAwLCBvID0ge30pIHtcbiAgICB2YXIgbiA9IFwiXCIsXG4gICAgICBpID0gLTEsXG4gICAgICByID0gby5hZFNjYWxlLFxuICAgICAgYSA9IHZvaWQgMCA9PT0gciA/IDEgOiByO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFRGFpbHlUYXNrQ2xpY2tUeXBlLkRpYWxvZ0Rpc3BsYXllZDpcbiAgICAgICAgbiA9IFwi5q+P5pel5Lu75YqhLeW8ueeql+WxleeOsFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRURhaWx5VGFza0NsaWNrVHlwZS5DbG9zZWQ6XG4gICAgICAgIG4gPSBcIuavj+aXpeS7u+WKoS3lhbPpl61cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVEYWlseVRhc2tDbGlja1R5cGUuU3RhcnRHYW1lX0hvbWU6XG4gICAgICAgIG4gPSBcIuavj+aXpeS7u+WKoS3pppbpobUt5byA5aeL5ri45oiPXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFRGFpbHlUYXNrQ2xpY2tUeXBlLlN0YXJ0R2FtZV9SZXN1bHQ6XG4gICAgICAgIG4gPSBcIuavj+aXpeS7u+WKoS3nu5Pnrpct5byA5aeL5ri45oiPXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFRGFpbHlUYXNrQ2xpY2tUeXBlLlN0YWdlVHJlYXN1cmVDaGVzdDpcbiAgICAgICAgbiA9IFwi5q+P5pel5Lu75YqhLemYtuautVwiICsgdCArIFwiLeWuneeusVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRURhaWx5VGFza0NsaWNrVHlwZS5Db21wbGV0ZWRfRGlhbG9nRGlzcGxheWVkOlxuICAgICAgICBuID0gXCLmr4/ml6Xku7vliqEt5a6M5oiQ6Zi25q61XCIgKyB0ICsgXCIt6aKG5Y+W5aWW5YqxLeW8ueeql+WxleekulwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRURhaWx5VGFza0NsaWNrVHlwZS5Db21wbGV0ZWRfQ2xhaW1SZXdhcmQ6XG4gICAgICAgIG4gPSBcIuavj+aXpeS7u+WKoS3lrozmiJDpmLbmrrVcIiArIHQgKyBcIi3pooblj5blpZblirEt6aKG5Y+WXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFRGFpbHlUYXNrQ2xpY2tUeXBlLkNvbXBsZXRlZF9DbGFpbVJld2FyZEFkOlxuICAgICAgICBuID0gXCLmr4/ml6Xku7vliqEt5a6M5oiQ6Zi25q61XCIgKyB0ICsgXCIt6aKG5Y+W5aWW5YqxLemihuWPlnhcIiArIGE7XG4gICAgICAgIGkgPSBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkgPyAxIDogMDtcbiAgICB9XG4gICAgdGhpcy5kb3QobiwgaSk7XG4gIH1cbiAgc3RhdGljIGRvdFJhbmsoZSwgdCA9IDApIHtcbiAgICB2YXIgbyA9IFwiXCIsXG4gICAgICBuID0gLTE7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVSYW5rQ2xpY2tUeXBlLkF1dG9SYW5rSW50cm9kdWNlVmlldzpcbiAgICAgICAgbyA9IFwi6ZmQ5pe25o6S6KGM5qacLea0u+WKqOW8ueeqly3miZPlvIBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSYW5rQ2xpY2tUeXBlLkF1dG9SYW5rUmVzdWx0UGFnZTE6XG4gICAgICAgIG8gPSBcIuaOkuihjOamnC3nu5Pnrpct5by556qX5bGV546wXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFUmFua0NsaWNrVHlwZS5BdXRvUmFua1Jlc3VsdFBhZ2UyOlxuICAgICAgICBvID0gXCLmjpLooYzmppwt57uT566XLemihuWPluWlluWKsS3lvLnnqpflsZXnjrBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSYW5rQ2xpY2tUeXBlLkNsaWNrUmFua1ZpZXdUaXBzOlxuICAgICAgICBvID0gXCLmjpLooYzmppwt6K+05piOXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFUmFua0NsaWNrVHlwZS5DbGlja0ludHJvZHVjZUNvbGxlY3Q6XG4gICAgICAgIG8gPSBcIumZkOaXtuaOkuihjOamnC3mtLvliqjlvLnnqpct5Y+C6LWbXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFUmFua0NsaWNrVHlwZS5DbGlja0ludHJvZHVjZUNsb3NlOlxuICAgICAgICBvID0gXCLpmZDml7bmjpLooYzmppwt5rS75Yqo5by556qXLeWFs+mXrS1b5oyJ6ZKu54K55Ye7L+ezu+e7n+aTjeS9nF1cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSYW5rQ2xpY2tUeXBlLkNsaWNrSGFsbFJhbms6XG4gICAgICAgIG8gPSBcIuS4u+mhtS3mjpLooYzmppxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSYW5rQ2xpY2tUeXBlLkNsaWNrUmFua1ZpZXdCYWNrOlxuICAgICAgICBvID0gXCLmjpLooYzmppwt6L+U5ZueLVvmjInpkq7ngrnlh7sv57O757uf5pON5L2cXVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVJhbmtDbGlja1R5cGUuQ2xpY2tSYW5rVmlld1N0YXJ0OlxuICAgICAgICBvID0gXCLmjpLooYzmppwt5byA5aeLLeesrFwiICsgdCArIFwi5YWzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFUmFua0NsaWNrVHlwZS5DbGlja1JhbmtCb251c0NvbnRpbnVlOlxuICAgICAgICBvID0gXCLlsYDlhoXmjpLooYzmppznlYzpnaLngrnlh7vnu6fnu63mjInpkq5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSYW5rQ2xpY2tUeXBlLkNsaWNrUmFua0JveFZpZXdQYWdlMUNsYWltOlxuICAgICAgICBvID0gXCLmjpLooYzmppwt57uT566XLemihuWPllwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVJhbmtDbGlja1R5cGUuQ2xpY2tSYW5rQm94Vmlld1BhZ2UyQ2xhaW06XG4gICAgICAgIG8gPSBcIuaOkuihjOamnC3nu5Pnrpct6aKG5Y+W5aWW5YqxLemihuWPllwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVJhbmtDbGlja1R5cGUuQ2xpY2tSYW5rQm94Vmlld1BhZ2UyQWRDbGFpbTpcbiAgICAgICAgbyA9IFwi5o6S6KGM5qacLee7k+euly3pooblj5blpZblirEt6aKG5Y+WeFwiICsgdDtcbiAgICAgICAgbiA9IEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSA/IDEgOiAwO1xuICAgIH1cbiAgICB0aGlzLmRvdChvLCBuKTtcbiAgfVxuICBzdGF0aWMgZG90UmV2aXZlKGUpIHtcbiAgICB2YXIgdCA9IFwiXCIsXG4gICAgICBvID0gLTEsXG4gICAgICBuID0gdGhpcy5nZXRNb2RlTmFtZSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFUmV2aXZlQ2xpY2tUeXBlLlNob3c6XG4gICAgICAgIHQgPSBcIuWkjea0u+W8ueeqly1cIiArIG4gKyBcIi3lvLnnqpflsZXnjrBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSZXZpdmVDbGlja1R5cGUuQ2xvc2U6XG4gICAgICAgIHQgPSBcIuWkjea0u+W8ueeqly1cIiArIG4gKyBcIi3lhbPpl61cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSZXZpdmVDbGlja1R5cGUuU2h1ZmZsZUl0ZW06XG4gICAgICAgIHQgPSBcIuWkjea0u+W8ueeqly1cIiArIG4gKyBcIi3pgZPlhbfmtJfniYxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVSZXZpdmVDbGlja1R5cGUuU2h1ZmZsZUFkOlxuICAgICAgICBvID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpID8gMSA6IDA7XG4gICAgICAgIHQgPSBcIuWkjea0u+W8ueeqly1cIiArIG4gKyBcIi3ph43mtJfniYwt6KeG6aKRXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFUmV2aXZlQ2xpY2tUeXBlLlJlc3RhcnQ6XG4gICAgICAgIHQgPSBcIuWkjea0u+W8ueeqly1cIiArIG4gKyBcIi3ph43mlrDlvIDlp4tcIjtcbiAgICB9XG4gICAgdGhpcy5kb3QodCwgbyk7XG4gIH1cbiAgc3RhdGljIGRvdEdhbWUoZSkge1xuICAgIHRoaXMuZ2V0TW9kZU5hbWUoKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRUJvYXJkQ2xpY2tUeXBlLlNldHRpbmc6XG4gICAgICBjYXNlIEVCb2FyZENsaWNrVHlwZS5TaHVmZmxlOlxuICAgICAgY2FzZSBFQm9hcmRDbGlja1R5cGUuSGludDpcbiAgICAgIGNhc2UgRUJvYXJkQ2xpY2tUeXBlLlVuZG86XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQm9hcmRDbGlja1R5cGUuRXNjYXBlOlxuICAgIH1cbiAgfVxuICBzdGF0aWMgZG90VmljdG9yeUNoZXN0KGUsIHQgPSAyKSB7XG4gICAgdmFyIG8gPSBcIlwiLFxuICAgICAgbiA9IC0xO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLkRpYWxvZ0Rpc3BsYXllZDpcbiAgICAgICAgbyA9IFwi6IOc5Yip5a6d566xLeS4u+WFs+WNoeaooeW8jy3pooblj5blpZblirEt5by556qX5bGV546wXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLkNsYWltUmV3YXJkOlxuICAgICAgICBvID0gXCLog5zliKnlrp3nrrEt5Li75YWz5Y2h5qih5byPLemihuWPluWlluWKsVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVZpY3RvcnlDaGVzdENsaWNrVHlwZS5DbGFpbU11bHRpcGxlUmV3YXJkOlxuICAgICAgICBvID0gXCLog5zliKnlrp3nrrEt5Li75YWz5Y2h5qih5byPLemihuWPluWlluWKsS3pooblj5Z4XCIgKyB0O1xuICAgICAgICBuID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpID8gMSA6IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLlRyYXZlbERpYWxvZ0Rpc3BsYXllZDpcbiAgICAgICAgbyA9IFwi6IOc5Yip5a6d566xLeaXheihjC3pooblj5blpZblirEt5by556qX5bGV546wXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLlRyYXZlbENsYWltUmV3YXJkOlxuICAgICAgICBvID0gXCLog5zliKnlrp3nrrEt5peF6KGMLemihuWPluWlluWKsS3pooblj5ZcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUuVHJhdmVsQ2xhaW1NdWx0aXBsZVJld2FyZDpcbiAgICAgICAgbyA9IFwi6IOc5Yip5a6d566xLeaXheihjC3pooblj5blpZblirEt6aKG5Y+WeFwiICsgdDtcbiAgICAgICAgbiA9IEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSA/IDEgOiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVZpY3RvcnlDaGVzdENsaWNrVHlwZS5UcmF2ZWxDbGFpbVJld2FyZENvbGxlY3Rpb246XG4gICAgICAgIG8gPSBcIuiDnOWIqeWuneeusS3ml4XooYwt6aKG5Y+W5aWW5YqxLeaUtumbhlwiO1xuICAgIH1cbiAgICB0aGlzLmRvdChvLCBuKTtcbiAgfVxuICBzdGF0aWMgZG90RnJlZUl0ZW0oZSkge1xuICAgIHZhciB0ID0gXCJcIixcbiAgICAgIG8gPSB0aGlzLmdldE1vZGVOYW1lKCksXG4gICAgICBuID0gLTE7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVGcmVlSXRlbUNsaWNrVHlwZS5oaW50RGlzcGxheWVkOlxuICAgICAgICB0ID0gXCLlhY3otLnmj5DnpLotXCIgKyBvICsgXCIt5by556qX5bGV546wXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFRnJlZUl0ZW1DbGlja1R5cGUuaGludENsb3NlZDpcbiAgICAgICAgdCA9IFwi5YWN6LS55o+Q56S6LVwiICsgbyArIFwiLeWFs+mXrVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUZyZWVJdGVtQ2xpY2tUeXBlLmhpbnRHYWluOlxuICAgICAgICB0ID0gXCLlhY3otLnmj5DnpLotXCIgKyBvICsgXCIt6aKG5Y+WXCI7XG4gICAgICAgIG4gPSBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkgPyAxIDogMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVGcmVlSXRlbUNsaWNrVHlwZS5zaHVmZmxlRGlzcGxheWVkOlxuICAgICAgICB0ID0gXCLlhY3otLnmtJfniYwtXCIgKyBvICsgXCIt5by556qX5bGV546wXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFRnJlZUl0ZW1DbGlja1R5cGUuc2h1ZmZsZUNsb3NlZDpcbiAgICAgICAgdCA9IFwi5YWN6LS55rSX54mMLVwiICsgbyArIFwiLeWFs+mXrVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUZyZWVJdGVtQ2xpY2tUeXBlLnNodWZmbGVHYWluOlxuICAgICAgICB0ID0gXCLlhY3otLnmtJfniYwtXCIgKyBvICsgXCIt6aKG5Y+WXCI7XG4gICAgICAgIG4gPSBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkgPyAxIDogMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVGcmVlSXRlbUNsaWNrVHlwZS5yZXZlcnREaXNwbGF5ZWQ6XG4gICAgICAgIHQgPSBcIuWFjei0ueaSpOWbni1cIiArIG8gKyBcIi3lvLnnqpflsZXnjrBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVGcmVlSXRlbUNsaWNrVHlwZS5yZXZlcnRDbG9zZWQ6XG4gICAgICAgIHQgPSBcIuWFjei0ueaSpOWbni1cIiArIG8gKyBcIi3lhbPpl61cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVGcmVlSXRlbUNsaWNrVHlwZS5yZXZlcnRHYWluOlxuICAgICAgICB0ID0gXCLlhY3otLnmkqTlm54tXCIgKyBvICsgXCIt6aKG5Y+WXCI7XG4gICAgICAgIG4gPSBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkgPyAxIDogMDtcbiAgICB9XG4gICAgdGhpcy5kb3QodCwgbik7XG4gIH1cbiAgc3RhdGljIGRvdEFEV2luZG93KGUpIHtcbiAgICB2YXIgdCA9IFwiXCIsXG4gICAgICBvID0gLTE7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVBRFdpbmRvd0NsaWNrVHlwZS5TaG93OlxuICAgICAgICB0ID0gXCLlvLnnqpflsZXnjrBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVBRFdpbmRvd0NsaWNrVHlwZS5DbG9zZTpcbiAgICAgICAgdCA9IFwi5YWz6ZetXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQURXaW5kb3dDbGlja1R5cGUuUmV0cnk6XG4gICAgICAgIHQgPSBcIumHjeivlVwiO1xuICAgICAgICBvID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpID8gMSA6IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQURXaW5kb3dDbGlja1R5cGUuQ2FuY2VsOlxuICAgICAgICB0ID0gXCLlj5bmtohcIjtcbiAgICB9XG4gICAgdGhpcy5kb3QoXCLml6Dms5XliqDovb3lub/lkYotXCIgKyB0LCBvKTtcbiAgfVxuICBzdGF0aWMgZG9OZXh0TGV2ZWwoZSkge1xuICAgIHRoaXMuZG90KFwi57uT566XLeesrFwiICsgZSArIFwi5YWzXCIpO1xuICB9XG4gIHN0YXRpYyBkb3REYWlseShlLCB0ID0gXCJcIikge1xuICAgIHZhciBvID0gXCJcIjtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRURhaWx5Q2xpY2tUeXBlLkNsb3NlZDpcbiAgICAgICAgbyA9IFwi5q+P5pel5oyR5oiYLeWFs+mXrVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRURhaWx5Q2xpY2tUeXBlLkNvbGxlY3Q6XG4gICAgICAgIG8gPSBcIuavj+aXpeaMkeaImC3lsZXnpLrljoVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVEYWlseUNsaWNrVHlwZS5Nb250aENoYW5nZTpcbiAgICAgICAgbyA9IFwi5q+P5pel5oyR5oiYLeeVjOmdouWIh+aNoi1bXCIgKyB0ICsgXCJdXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFRGFpbHlDbGlja1R5cGUuUGxheTpcbiAgICAgICAgbyA9IFwi5q+P5pel5oyR5oiYLeW8gOWniy1bXCIgKyB0ICsgXCJdXCI7XG4gICAgfVxuICAgIHRoaXMuZG90KG8pO1xuICB9XG4gIHN0YXRpYyBkb3RCYWRnZShlLCB0ID0gXCJcIikge1xuICAgIHZhciBvID0gXCJcIjtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLkNsb3NlZDpcbiAgICAgICAgbyA9IFwi5bGV56S65Y6FLei/lOWbnlwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLkpvdXJuZXk6XG4gICAgICAgIG8gPSBcIuWxleekuuWOhS3ml4XooYxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCYWRnZUNsaWNrVHlwZS5EYWlseTpcbiAgICAgICAgbyA9IFwi5bGV56S65Y6FLeavj+aXpeaMkeaImFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLkpvdXJuZXlCdG46XG4gICAgICAgIG8gPSBcIuWxleekuuWOhS3ml4XooYzngrnlh7tcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCYWRnZUNsaWNrVHlwZS5EYWlseUJ0bjpcbiAgICAgICAgbyA9IFwi5bGV56S65Y6FLeavj+aXpeaMkeaImOeCueWHu1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLkJhZGdlOlxuICAgICAgICBvID0gXCLlsZXnpLrljoUt5peF6KGMLVtcIiArIHQgKyBcIl1cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCYWRnZUNsaWNrVHlwZS5CYWRnZVNob3c6XG4gICAgICAgIG8gPSBcIuWxleekuuWOhS3ml4XooYwtW1wiICsgdCArIFwiXS3lvLnnqpflsZXnjrBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCYWRnZUNsaWNrVHlwZS5CYWRnZUdldDpcbiAgICAgICAgbyA9IFwi5bGV56S65Y6FLeaXheihjC1bXCIgKyB0ICsgXCJdLemihuWPllwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLlJld2FyZE5vdDpcbiAgICAgICAgbyA9IFwi5bGV56S65Y6FLeavj+aXpeaMkeaImC1bXCIgKyB0ICsgXCJdLeacquiOt+W+l1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLlJld2FyZEhhczpcbiAgICAgICAgbyA9IFwi5bGV56S65Y6FLeavj+aXpeaMkeaImC1bXCIgKyB0ICsgXCJdLeW3suiOt+W+l1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJhZGdlQ2xpY2tUeXBlLlJld2FyZFNob3c6XG4gICAgICAgIG8gPSBcIuWxleekuuWOhS3mr4/ml6XmjJHmiJgtW1wiICsgdCArIFwiXS3lvLnnqpflsZXnjrBcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCYWRnZUNsaWNrVHlwZS5SZXdhcmRHZXQ6XG4gICAgICAgIG8gPSBcIuWxleekuuWOhS3mr4/ml6XmjJHmiJgtW1wiICsgdCArIFwiXS3pooblj5ZcIjtcbiAgICB9XG4gICAgdGhpcy5kb3Qobyk7XG4gIH1cbiAgc3RhdGljIGRvdEZpcnN0VmlicmF0aW9uKCkge1xuICAgIGlmICghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNGaXJzdFZpYnJhdGlvbigpKSB7XG4gICAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRGaXJzdFZpYnJhdGlvbih0cnVlKTtcbiAgICAgIHZhciBlID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmRldmljZU1vZGVsIHx8IFwiXCI7XG4gICAgICB0aGlzLmRvdChcIummluasoemch+WKqC0tXCIgKyBlKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGRvdEJnbU9jY3VwYXRpb24oZSkge1xuICAgIHZhciB0ID0gXCJcIixcbiAgICAgIG8gPSBtai5zZGsuZ2V0SXNBdWRpb0J1c3koKSA/IFwi5pivXCIgOiBcIuWQplwiO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFQmdtT2NjdXBhdGlvbkNsaWNrVHlwZS5IYWxsOlxuICAgICAgICB0ID0gXCLlpKfljoXpobXpnaIt6Z+z6aKR5Y2g55SoLVwiICsgbztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVCZ21PY2N1cGF0aW9uQ2xpY2tUeXBlLkdhbWU6XG4gICAgICAgIHQgPSBcIua4uOaIj+mhtemdoi3pn7PpopHljaDnlKgtXCIgKyBvO1xuICAgIH1cbiAgICB0aGlzLmRvdCh0KTtcbiAgfVxuICBzdGF0aWMgZ2V0TW9kZU5hbWUoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgIHQgPSBcIuS4u+WFs+WNoVwiO1xuICAgIGlmIChlID09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICB0ID0gXCLml4XooYzlhbPljaFcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUgPT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSkge1xuICAgICAgICB0ID0gXCLmr4/ml6XmjJHmiJhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPT0gTWpHYW1lVHlwZS5DbGFzc2ljICYmICh0ID0gXCLml6DlsL3mqKHlvI9cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBkb3RUcmF2ZWxNYXAoZSwgdCwgbyA9IDApIHtcbiAgICB2YXIgbiA9IFwiXCI7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVUcmF2ZWxNYXBDbGlja1R5cGUuQmFjazpcbiAgICAgICAgbiA9IFwi5peF6KGM5rS75YqoLVwiICsgdCArIFwiLei/lOWbni3mjInpkq7ngrnlh7tcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUcmF2ZWxNYXBDbGlja1R5cGUuQmFkZ2U6XG4gICAgICAgIG4gPSBcIuaXheihjOa0u+WKqC1cIiArIHQgKyBcIi3lsZXnpLrljoVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUcmF2ZWxNYXBDbGlja1R5cGUuUGxheTpcbiAgICAgICAgbiA9IFwi5peF6KGM5rS75YqoLVwiICsgdCArIFwiLeW8gOWni+a4uOaIjy3nrKxcIiArIG8gKyBcIuWFs1wiO1xuICAgIH1cbiAgICB0aGlzLmRvdChuKTtcbiAgfVxuICBzdGF0aWMgZG90UGFuZGFSZXN1bHQoZSkge1xuICAgIHZhciB0ID0gXCJcIjtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVBhbmRhUmVzdWx0LkRhaWx5OlxuICAgICAgICB0ID0gXCLnu5Pnrpct5q+P5pel5oyR5oiYLee7p+e7reaMkeaImFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVBhbmRhUmVzdWx0LlRyYXZlbDpcbiAgICAgICAgdCA9IFwi57uT566XLeaXheihjOa0u+WKqC3kuIvkuIDlhbNcIjtcbiAgICB9XG4gICAgdGhpcy5kb3QodCk7XG4gIH1cbiAgc3RhdGljIGRvdEhhbGwoZSwgdCA9IDApIHtcbiAgICB2YXIgbyA9IFwiXCI7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVIb21lUGFnZUNsaWNrVHlwZS5TZXR0aW5nOlxuICAgICAgICBvID0gXCLkuLvpobUt6K6+572uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFSG9tZVBhZ2VDbGlja1R5cGUuQ2xhc3NpYzpcbiAgICAgICAgbyA9IFwi5Li76aG1LeaXoOWwveaooeW8j1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUhvbWVQYWdlQ2xpY2tUeXBlLkxldmVsOlxuICAgICAgICBvID0gXCLkuLvpobUt56ysXCIgKyB0ICsgXCLlhbNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVIb21lUGFnZUNsaWNrVHlwZS5EYWlseVRhc2s6XG4gICAgICAgIG8gPSBcIuS4u+mhtS3mr4/ml6Xku7vliqFcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVIb21lUGFnZUNsaWNrVHlwZS5FeGhpYml0aW9uSGFsbDpcbiAgICAgICAgbyA9IFwi5Li76aG1LeWxleWOhVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUhvbWVQYWdlQ2xpY2tUeXBlLkRhaWx5Q2hhbGxlbmdlOlxuICAgICAgICBvID0gXCLkuLvpobUt5q+P5pel5oyR5oiYXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFSG9tZVBhZ2VDbGlja1R5cGUuVHJhdmVsOlxuICAgICAgICBvID0gXCLkuLvpobUt5peF6KGM5rS75YqoXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFSG9tZVBhZ2VDbGlja1R5cGUuVHJhdmVsRGlhbG9nRGlzcGxheWVkOlxuICAgICAgICBvID0gXCLkuLvpobUt5peF6KGM5rS75Yqo5by556qXLeW8ueeql+WxleeOsFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUhvbWVQYWdlQ2xpY2tUeXBlLlRyYXZlbERpYWxvZ0Nsb3NlZDpcbiAgICAgICAgbyA9IFwi5Li76aG1LeaXheihjOa0u+WKqOW8ueeqly3lvLnnqpflhbPpl61cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVIb21lUGFnZUNsaWNrVHlwZS5UcmF2ZWxHYW1lU3RhcnQ6XG4gICAgICAgIG8gPSBcIuS4u+mhtS3ml4XooYzmtLvliqjlvLnnqpct5byA5aeL5ri45oiPXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFSG9tZVBhZ2VDbGlja1R5cGUuTGVhZGVyQm9hcmQ6XG4gICAgICAgIG8gPSBcIuS4u+mhtS3mjpLooYzmppzmtLvliqhcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVIb21lUGFnZUNsaWNrVHlwZS5EYWlseVNpZ246XG4gICAgICAgIG8gPSBcIuS4u+mhtS3mr4/ml6Xnrb7liLBcIjtcbiAgICB9XG4gICAgdGhpcy5kb3Qobyk7XG4gIH1cbiAgc3RhdGljIGRvdEFnZVN1cnZleVNob3codCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRBZ2VTdXJ2ZXlEb3RQcmVmaXgodCk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdChvICsgXCIt5by556qX5bGV546wXCIpO1xuICB9XG4gIHN0YXRpYyBkb3RBZ2VTZWxlY3QodCwgbykge1xuICAgIHZhciBuID0gdGhpcy5nZXRBZ2VTdXJ2ZXlEb3RQcmVmaXgodCksXG4gICAgICBpID0gdGhpcy5mb3JtYXRBZ2VJZEZvckRvdChvKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90KG4gKyBcIi1cIiArIGkpO1xuICB9XG4gIHN0YXRpYyBkb3RBZ2VTdXJ2ZXlDbG9zZSh0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEFnZVN1cnZleURvdFByZWZpeCh0KTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90KG8gKyBcIi3lhbPpl63mjInpkq5cIik7XG4gIH1cbiAgc3RhdGljIGdldEFnZVN1cnZleURvdFByZWZpeChlKSB7XG4gICAgcmV0dXJuIDAgPT09IGUgPyBcIuW5tOm+hOmXruWNtzFcIiA6IFwi5bm06b6E6Zeu5Y23X1wiICsgKGUgKyAxKTtcbiAgfVxuICBzdGF0aWMgZm9ybWF0QWdlSWRGb3JEb3QoZSkge1xuICAgIHJldHVybiBlID8gZS5lbmRzV2l0aChcIitcIikgPyBlLnJlcGxhY2UoXCIrXCIsIFwi5Lul5LiKXCIpIDogZS5yZXBsYWNlKFwiLVwiLCBcIuiHs1wiKSA6IFwiXCI7XG4gIH1cbiAgc3RhdGljIGRvdFJlc2V0VGhlbWUoZSkge1xuICAgIHZhciB0O1xuICAgIGUgfHwgKGUgPSBcIkRlZmF1bHRcIik7XG4gICAgdCA9IFwi6K6+572uLVwiICsgdGhpcy5nZXRNb2RlTmFtZSgpICsgXCIt5oGi5aSN6buY6K6k55qu6IKkLVwiICsgZTtcbiAgICB0aGlzLmRvdCh0KTtcbiAgfVxuICBzdGF0aWMgZG90KGUsIHQgPSAtMSkge1xuICAgIHZhciBvID0ge1xuICAgICAgY2xpY2tfdHlwZTogZSxcbiAgICAgIGFkX2lzX3JlYWR5OiB0XG4gICAgfTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuQnRuQ2xpY2ssIG8pO1xuICB9XG59Il19