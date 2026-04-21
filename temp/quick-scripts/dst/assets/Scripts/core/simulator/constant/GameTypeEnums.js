
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/constant/GameTypeEnums.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09817Vr0bZKO5zZNylE7Ewx', 'GameTypeEnums');
// Scripts/core/simulator/constant/GameTypeEnums.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETile2SlotType = exports.EMergeType = exports.ERedDotType = exports.ERedDotPosition = exports.EGetItemReasonId = exports.ItemType2Id = exports.EItemName = exports.EAudioID = exports.EAudioDefine = exports.JourneyType = exports.MjGameType = exports.LevelTargetType = exports.MjCardId = exports.ResId = exports.EItemId = void 0;
var IUserData_1 = require("../../../user/IUserData");
exports.EItemId = {
    Shuffle: "shuffle",
    Hint: "hint",
    Revert: "revert",
    Revive: "revive",
    Magnet: "magnet"
};
var ResId;
(function (ResId) {
    ResId[ResId["emYogaCardId"] = 42] = "emYogaCardId";
    ResId[ResId["emBombCardId"] = 43] = "emBombCardId";
    ResId[ResId["emRankId"] = 50] = "emRankId";
})(ResId = exports.ResId || (exports.ResId = {}));
var MjCardId;
(function (MjCardId) {
    MjCardId[MjCardId["emFlowCardId"] = 35] = "emFlowCardId";
    MjCardId[MjCardId["emSeasonCardId"] = 36] = "emSeasonCardId";
    MjCardId[MjCardId["emYogaCardId"] = 37] = "emYogaCardId";
    MjCardId[MjCardId["emBombCardId"] = 38] = "emBombCardId";
    MjCardId[MjCardId["emTravelEgyptId"] = 39] = "emTravelEgyptId";
    MjCardId[MjCardId["emRankId"] = 50] = "emRankId";
    MjCardId[MjCardId["emFlowCardIdMei"] = 54] = "emFlowCardIdMei";
    MjCardId[MjCardId["emFlowCardIdLan"] = 55] = "emFlowCardIdLan";
    MjCardId[MjCardId["emFlowCardIdZhu"] = 56] = "emFlowCardIdZhu";
    MjCardId[MjCardId["emFlowCardIdJu"] = 57] = "emFlowCardIdJu";
    MjCardId[MjCardId["emSeasonCardIdChun"] = 58] = "emSeasonCardIdChun";
    MjCardId[MjCardId["emSeasonCardIdXia"] = 59] = "emSeasonCardIdXia";
    MjCardId[MjCardId["emSeasonCardIdQiu"] = 60] = "emSeasonCardIdQiu";
    MjCardId[MjCardId["emSeasonCardIdDong"] = 61] = "emSeasonCardIdDong";
})(MjCardId = exports.MjCardId || (exports.MjCardId = {}));
var LevelTargetType;
(function (LevelTargetType) {
    LevelTargetType[LevelTargetType["AllKill"] = 0] = "AllKill";
    LevelTargetType[LevelTargetType["KillCollectCard"] = 1] = "KillCollectCard";
})(LevelTargetType = exports.LevelTargetType || (exports.LevelTargetType = {}));
exports.MjGameType = {
    None: "None",
    Normal: "Normal",
    Travel: "Travel",
    DailyChallenge: "DailyChallenge",
    Classic: "Classic",
    Tile2Normal: "Tile2Normal"
};
var JourneyType;
(function (JourneyType) {
    JourneyType[JourneyType["Yoga"] = 1] = "Yoga";
    JourneyType[JourneyType["Flip"] = 2] = "Flip";
    JourneyType[JourneyType["Color"] = 3] = "Color";
})(JourneyType = exports.JourneyType || (exports.JourneyType = {}));
exports.EAudioDefine = {
    Bgm: "m_bgm",
    BtnClick: "m_click",
    Birth: "m_birth",
    Check1: "m_touch",
    Hint: "m_notice",
    Uncheck: "m_put",
    FullCombo: "m_perfect",
    Bonus: "m_bonus",
    Match: "m_streak",
    Refresh: "m_refresh",
    Wrong: "m_wrong",
    Good: "m_good",
    Great: "m_great",
    Excellent: "m_excellent",
    Amazing: "m_amazing",
    Unbelievable: "m_unbelievable",
    Hammer: "m_hammer",
    Win: "m_win",
    WinCharge: "m_charge",
    Box: "m_box",
    Applause: "m_applause",
    Drag: "m_drag",
    TaskBanner: "m_blank",
    TaskComplete: "m_kind",
    Goals: "m_goals",
    CollectionShow: "m_collection",
    CollectionSpecial: "m_collect",
    SpecialTouch: "m_special",
    Special2Streak: "m_special2",
    Blank: "m_blank",
    Targetfly1: "m_targetfly1",
    Targetfly2: "m_targetfly2",
    Targetfly3: "m_targetfly3",
    Ranking1: "m_ranking1",
    Ranking2: "m_ranking2",
    Box3Show: "m_box3",
    Box2Open: "m_box2",
    Button1: "m_button1",
    BlankCom: "m_blank",
    Charge: "m_charge",
    Collect2: "m_collect2",
    ItemStart: "m_shinning",
    ItemMove: "m_rank",
    ItemEnd: "m_score",
    BonusEgyptA: "m_bonus_egypt_A",
    TravelTags: "m_tags",
    TravelBlankCommon: "m_blank",
    TravelButton1: "m_button1",
    TravelCollect: "m_collect1",
    RefreshRoll: "m_refresh_roll"
};
var EAudioID;
(function (EAudioID) {
    EAudioID[EAudioID["Bgm"] = 1] = "Bgm";
    EAudioID[EAudioID["BtnClick"] = 2] = "BtnClick";
    EAudioID[EAudioID["Birth"] = 3] = "Birth";
    EAudioID[EAudioID["Check1"] = 4] = "Check1";
    EAudioID[EAudioID["Hint"] = 5] = "Hint";
    EAudioID[EAudioID["Uncheck"] = 6] = "Uncheck";
    EAudioID[EAudioID["FullCombo"] = 7] = "FullCombo";
    EAudioID[EAudioID["Bonus"] = 8] = "Bonus";
    EAudioID[EAudioID["Match"] = 9] = "Match";
    EAudioID[EAudioID["Refresh"] = 10] = "Refresh";
    EAudioID[EAudioID["Wrong"] = 11] = "Wrong";
    EAudioID[EAudioID["Good"] = 12] = "Good";
    EAudioID[EAudioID["Great"] = 13] = "Great";
    EAudioID[EAudioID["Excellent"] = 14] = "Excellent";
    EAudioID[EAudioID["Amazing"] = 15] = "Amazing";
    EAudioID[EAudioID["Unbelievable"] = 16] = "Unbelievable";
    EAudioID[EAudioID["Hammer"] = 17] = "Hammer";
    EAudioID[EAudioID["Win"] = 18] = "Win";
    EAudioID[EAudioID["WinCharge"] = 19] = "WinCharge";
    EAudioID[EAudioID["Box"] = 20] = "Box";
    EAudioID[EAudioID["Applause"] = 21] = "Applause";
    EAudioID[EAudioID["Drag"] = 22] = "Drag";
    EAudioID[EAudioID["TaskBanner"] = 23] = "TaskBanner";
    EAudioID[EAudioID["TaskComplete"] = 24] = "TaskComplete";
    EAudioID[EAudioID["Goals"] = 25] = "Goals";
    EAudioID[EAudioID["CollectionShow"] = 26] = "CollectionShow";
    EAudioID[EAudioID["CollectionSpecial"] = 27] = "CollectionSpecial";
    EAudioID[EAudioID["SpecialTouch"] = 28] = "SpecialTouch";
    EAudioID[EAudioID["Special2Streak"] = 29] = "Special2Streak";
    EAudioID[EAudioID["Blank"] = 30] = "Blank";
    EAudioID[EAudioID["Targetfly1"] = 31] = "Targetfly1";
    EAudioID[EAudioID["Targetfly2"] = 32] = "Targetfly2";
    EAudioID[EAudioID["Targetfly3"] = 33] = "Targetfly3";
    EAudioID[EAudioID["Ranking1"] = 39] = "Ranking1";
    EAudioID[EAudioID["Ranking2"] = 40] = "Ranking2";
    EAudioID[EAudioID["Box3Show"] = 41] = "Box3Show";
    EAudioID[EAudioID["Box2Open"] = 42] = "Box2Open";
    EAudioID[EAudioID["Button1"] = 43] = "Button1";
    EAudioID[EAudioID["BlankCom"] = 44] = "BlankCom";
    EAudioID[EAudioID["Charge"] = 45] = "Charge";
    EAudioID[EAudioID["Collect2"] = 46] = "Collect2";
    EAudioID[EAudioID["ItemStart"] = 47] = "ItemStart";
    EAudioID[EAudioID["ItemMove"] = 48] = "ItemMove";
    EAudioID[EAudioID["ItemEnd"] = 49] = "ItemEnd";
    EAudioID[EAudioID["BonusEgyptA"] = 50] = "BonusEgyptA";
    EAudioID[EAudioID["TravelTags"] = 51] = "TravelTags";
    EAudioID[EAudioID["TravelBlankCommon"] = 52] = "TravelBlankCommon";
    EAudioID[EAudioID["TravelButton1"] = 53] = "TravelButton1";
    EAudioID[EAudioID["TravelCollect"] = 54] = "TravelCollect";
    EAudioID[EAudioID["GoodMan"] = 57] = "GoodMan";
    EAudioID[EAudioID["GreatMan"] = 58] = "GreatMan";
    EAudioID[EAudioID["ExcellentMan"] = 59] = "ExcellentMan";
    EAudioID[EAudioID["AmazingMan"] = 60] = "AmazingMan";
    EAudioID[EAudioID["UnbelievableMan"] = 61] = "UnbelievableMan";
    EAudioID[EAudioID["HardLevelBanner"] = 68] = "HardLevelBanner";
    EAudioID[EAudioID["ClassicBatch"] = 69] = "ClassicBatch";
    EAudioID[EAudioID["ClassicWin"] = 70] = "ClassicWin";
    EAudioID[EAudioID["ClassicLose"] = 71] = "ClassicLose";
    EAudioID[EAudioID["ClassicScoreRoll"] = 72] = "ClassicScoreRoll";
    EAudioID[EAudioID["ClassicRevive"] = 73] = "ClassicRevive";
    EAudioID[EAudioID["ClassicBreakRecord"] = 74] = "ClassicBreakRecord";
    EAudioID[EAudioID["EnterHall"] = 86] = "EnterHall";
    EAudioID[EAudioID["EnterTravel"] = 87] = "EnterTravel";
    EAudioID[EAudioID["RankClearCol1"] = 94] = "RankClearCol1";
    EAudioID[EAudioID["RankClearCol2"] = 95] = "RankClearCol2";
    EAudioID[EAudioID["RankClearTouch"] = 96] = "RankClearTouch";
    EAudioID[EAudioID["Tile2Fail"] = 97] = "Tile2Fail";
    EAudioID[EAudioID["Revert"] = 98] = "Revert";
    EAudioID[EAudioID["AllClear"] = 99] = "AllClear";
    EAudioID[EAudioID["Tile2Touch"] = 100] = "Tile2Touch";
    EAudioID[EAudioID["Tile2Overturn"] = 101] = "Tile2Overturn";
    EAudioID[EAudioID["Tile2Touch2"] = 102] = "Tile2Touch2";
    EAudioID[EAudioID["SkinUnlock"] = 103] = "SkinUnlock";
    EAudioID[EAudioID["Tile2Lucky"] = 104] = "Tile2Lucky";
    EAudioID[EAudioID["Tile2Perfect"] = 106] = "Tile2Perfect";
    EAudioID[EAudioID["RefreshRoll"] = 105] = "RefreshRoll";
    EAudioID[EAudioID["AllClearGather"] = 107] = "AllClearGather";
    EAudioID[EAudioID["MagnetMerge"] = 108] = "MagnetMerge";
    EAudioID[EAudioID["Tile2Fail3Slot"] = 109] = "Tile2Fail3Slot";
    EAudioID[EAudioID["Tile2Fit"] = 110] = "Tile2Fit";
})(EAudioID = exports.EAudioID || (exports.EAudioID = {}));
(exports.EItemName = {})[exports.EItemId.Shuffle] = "重洗牌";
exports.EItemName[exports.EItemId.Hint] = "提示";
exports.EItemName[exports.EItemId.Revert] = "撤回";
exports.EItemName[exports.EItemId.Revive] = "复活";
exports.EItemName[exports.EItemId.Magnet] = "磁铁";
exports.EItemName = exports.EItemName;
(exports.ItemType2Id = {})[IUserData_1.EItemType.Shuffle] = exports.EItemId.Shuffle;
exports.ItemType2Id[IUserData_1.EItemType.Hint] = exports.EItemId.Hint;
exports.ItemType2Id[IUserData_1.EItemType.Undo] = exports.EItemId.Revert;
exports.ItemType2Id = exports.ItemType2Id;
exports.EGetItemReasonId = {
    SystemGift: "系统赠送",
    AdReward: "广告",
    DailyTask: "每日任务奖励",
    DailyChallengeAd: "每日挑战",
    Journey: "旅行活动奖励",
    LevelBox: "主关卡宝箱奖励",
    LevelBoxAd: "主关卡宝箱奖励_看广告翻倍",
    DailyTaskAd: "每日任务奖励_看广告翻倍",
    JourneyAd: "旅行活动奖励_看广告翻倍",
    LeaderBoard: "排行榜活动奖励",
    LeaderBoardAd: "排行榜活动奖励_看广告翻倍",
    AgeSurvey: "年龄调研奖励",
    AgeSurveyAd: "年龄调研奖励_看广告翻倍",
    WinStreakReward: "连胜奖励",
    DailySign: "每日签到奖励",
    DailySignAd: "每日签到奖励_看广告翻倍",
    DailySignClassic: "经典每日登录",
    DailySignSimple: "简易每日登录"
};
exports.ERedDotPosition = {
    Left: "left",
    Right: "right",
    Special: "special"
};
exports.ERedDotType = {
    Setting: "setting",
    Journey: "journey",
    DailyChallenge: "dailyChallenge",
    Rank: "rank",
    Task: "task",
    DailySignClassic: "dailySignClassic",
    Valentine: "valentine"
};
exports.EMergeType = {
    Normal: "normal",
    Bomb: "bomb",
    FullCombo: "fullCombo",
    Duoxiao: "duoxiao",
    Daxiao: "daxiao"
};
exports.ETile2SlotType = {
    Slot3: "Slot3",
    Slot4: "Slot4"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFDekMsUUFBQSxPQUFPLEdBQUc7SUFDbkIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBQ0YsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2Ysa0RBQWlCLENBQUE7SUFDakIsa0RBQWlCLENBQUE7SUFDakIsMENBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFJaEI7QUFDRCxJQUFZLFFBZVg7QUFmRCxXQUFZLFFBQVE7SUFDbEIsd0RBQWlCLENBQUE7SUFDakIsNERBQW1CLENBQUE7SUFDbkIsd0RBQWlCLENBQUE7SUFDakIsd0RBQWlCLENBQUE7SUFDakIsOERBQW9CLENBQUE7SUFDcEIsZ0RBQWEsQ0FBQTtJQUNiLDhEQUFvQixDQUFBO0lBQ3BCLDhEQUFvQixDQUFBO0lBQ3BCLDhEQUFvQixDQUFBO0lBQ3BCLDREQUFtQixDQUFBO0lBQ25CLG9FQUF1QixDQUFBO0lBQ3ZCLGtFQUFzQixDQUFBO0lBQ3RCLGtFQUFzQixDQUFBO0lBQ3RCLG9FQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFmVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQWVuQjtBQUNELElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN6QiwyREFBVyxDQUFBO0lBQ1gsMkVBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBQ1UsUUFBQSxVQUFVLEdBQUc7SUFDdEIsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLENBQUM7QUFDRixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCO0FBQ1UsUUFBQSxZQUFZLEdBQUc7SUFDeEIsR0FBRyxFQUFFLE9BQU87SUFDWixRQUFRLEVBQUUsU0FBUztJQUNuQixLQUFLLEVBQUUsU0FBUztJQUNoQixNQUFNLEVBQUUsU0FBUztJQUNqQixJQUFJLEVBQUUsVUFBVTtJQUNoQixPQUFPLEVBQUUsT0FBTztJQUNoQixTQUFTLEVBQUUsV0FBVztJQUN0QixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsVUFBVTtJQUNqQixPQUFPLEVBQUUsV0FBVztJQUNwQixLQUFLLEVBQUUsU0FBUztJQUNoQixJQUFJLEVBQUUsUUFBUTtJQUNkLEtBQUssRUFBRSxTQUFTO0lBQ2hCLFNBQVMsRUFBRSxhQUFhO0lBQ3hCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsR0FBRyxFQUFFLE9BQU87SUFDWixTQUFTLEVBQUUsVUFBVTtJQUNyQixHQUFHLEVBQUUsT0FBTztJQUNaLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFLFNBQVM7SUFDckIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsaUJBQWlCLEVBQUUsV0FBVztJQUM5QixZQUFZLEVBQUUsV0FBVztJQUN6QixjQUFjLEVBQUUsWUFBWTtJQUM1QixLQUFLLEVBQUUsU0FBUztJQUNoQixVQUFVLEVBQUUsY0FBYztJQUMxQixVQUFVLEVBQUUsY0FBYztJQUMxQixVQUFVLEVBQUUsY0FBYztJQUMxQixRQUFRLEVBQUUsWUFBWTtJQUN0QixRQUFRLEVBQUUsWUFBWTtJQUN0QixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsU0FBUztJQUNuQixNQUFNLEVBQUUsVUFBVTtJQUNsQixRQUFRLEVBQUUsWUFBWTtJQUN0QixTQUFTLEVBQUUsWUFBWTtJQUN2QixRQUFRLEVBQUUsUUFBUTtJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsaUJBQWlCO0lBQzlCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsYUFBYSxFQUFFLFdBQVc7SUFDMUIsYUFBYSxFQUFFLFlBQVk7SUFDM0IsV0FBVyxFQUFFLGdCQUFnQjtDQUM5QixDQUFDO0FBQ0YsSUFBWSxRQWlGWDtBQWpGRCxXQUFZLFFBQVE7SUFDbEIscUNBQU8sQ0FBQTtJQUNQLCtDQUFZLENBQUE7SUFDWix5Q0FBUyxDQUFBO0lBQ1QsMkNBQVUsQ0FBQTtJQUNWLHVDQUFRLENBQUE7SUFDUiw2Q0FBVyxDQUFBO0lBQ1gsaURBQWEsQ0FBQTtJQUNiLHlDQUFTLENBQUE7SUFDVCx5Q0FBUyxDQUFBO0lBQ1QsOENBQVksQ0FBQTtJQUNaLDBDQUFVLENBQUE7SUFDVix3Q0FBUyxDQUFBO0lBQ1QsMENBQVUsQ0FBQTtJQUNWLGtEQUFjLENBQUE7SUFDZCw4Q0FBWSxDQUFBO0lBQ1osd0RBQWlCLENBQUE7SUFDakIsNENBQVcsQ0FBQTtJQUNYLHNDQUFRLENBQUE7SUFDUixrREFBYyxDQUFBO0lBQ2Qsc0NBQVEsQ0FBQTtJQUNSLGdEQUFhLENBQUE7SUFDYix3Q0FBUyxDQUFBO0lBQ1Qsb0RBQWUsQ0FBQTtJQUNmLHdEQUFpQixDQUFBO0lBQ2pCLDBDQUFVLENBQUE7SUFDViw0REFBbUIsQ0FBQTtJQUNuQixrRUFBc0IsQ0FBQTtJQUN0Qix3REFBaUIsQ0FBQTtJQUNqQiw0REFBbUIsQ0FBQTtJQUNuQiwwQ0FBVSxDQUFBO0lBQ1Ysb0RBQWUsQ0FBQTtJQUNmLG9EQUFlLENBQUE7SUFDZixvREFBZSxDQUFBO0lBQ2YsZ0RBQWEsQ0FBQTtJQUNiLGdEQUFhLENBQUE7SUFDYixnREFBYSxDQUFBO0lBQ2IsZ0RBQWEsQ0FBQTtJQUNiLDhDQUFZLENBQUE7SUFDWixnREFBYSxDQUFBO0lBQ2IsNENBQVcsQ0FBQTtJQUNYLGdEQUFhLENBQUE7SUFDYixrREFBYyxDQUFBO0lBQ2QsZ0RBQWEsQ0FBQTtJQUNiLDhDQUFZLENBQUE7SUFDWixzREFBZ0IsQ0FBQTtJQUNoQixvREFBZSxDQUFBO0lBQ2Ysa0VBQXNCLENBQUE7SUFDdEIsMERBQWtCLENBQUE7SUFDbEIsMERBQWtCLENBQUE7SUFDbEIsOENBQVksQ0FBQTtJQUNaLGdEQUFhLENBQUE7SUFDYix3REFBaUIsQ0FBQTtJQUNqQixvREFBZSxDQUFBO0lBQ2YsOERBQW9CLENBQUE7SUFDcEIsOERBQW9CLENBQUE7SUFDcEIsd0RBQWlCLENBQUE7SUFDakIsb0RBQWUsQ0FBQTtJQUNmLHNEQUFnQixDQUFBO0lBQ2hCLGdFQUFxQixDQUFBO0lBQ3JCLDBEQUFrQixDQUFBO0lBQ2xCLG9FQUF1QixDQUFBO0lBQ3ZCLGtEQUFjLENBQUE7SUFDZCxzREFBZ0IsQ0FBQTtJQUNoQiwwREFBa0IsQ0FBQTtJQUNsQiwwREFBa0IsQ0FBQTtJQUNsQiw0REFBbUIsQ0FBQTtJQUNuQixrREFBYyxDQUFBO0lBQ2QsNENBQVcsQ0FBQTtJQUNYLGdEQUFhLENBQUE7SUFDYixxREFBZ0IsQ0FBQTtJQUNoQiwyREFBbUIsQ0FBQTtJQUNuQix1REFBaUIsQ0FBQTtJQUNqQixxREFBZ0IsQ0FBQTtJQUNoQixxREFBZ0IsQ0FBQTtJQUNoQix5REFBa0IsQ0FBQTtJQUNsQix1REFBaUIsQ0FBQTtJQUNqQiw2REFBb0IsQ0FBQTtJQUNwQix1REFBaUIsQ0FBQTtJQUNqQiw2REFBb0IsQ0FBQTtJQUNwQixpREFBYyxDQUFBO0FBQ2hCLENBQUMsRUFqRlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFpRm5CO0FBQ0QsQ0FBQyxpQkFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDMUMsaUJBQVMsQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQy9CLGlCQUFTLENBQUMsZUFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNqQyxpQkFBUyxDQUFDLGVBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDakMsaUJBQVMsQ0FBQyxlQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFFBQUEsU0FBUyxHQUFHLGlCQUFTLENBQUM7QUFDakMsQ0FBQyxtQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsZUFBTyxDQUFDLE9BQU8sQ0FBQztBQUN4RCxtQkFBVyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBTyxDQUFDLElBQUksQ0FBQztBQUMzQyxtQkFBVyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBTyxDQUFDLE1BQU0sQ0FBQztBQUNsQyxRQUFBLFdBQVcsR0FBRyxtQkFBVyxDQUFDO0FBQzFCLFFBQUEsZ0JBQWdCLEdBQUc7SUFDNUIsVUFBVSxFQUFFLE1BQU07SUFDbEIsUUFBUSxFQUFFLElBQUk7SUFDZCxTQUFTLEVBQUUsUUFBUTtJQUNuQixnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFVBQVUsRUFBRSxlQUFlO0lBQzNCLFdBQVcsRUFBRSxjQUFjO0lBQzNCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsZUFBZSxFQUFFLFFBQVE7Q0FDMUIsQ0FBQztBQUNTLFFBQUEsZUFBZSxHQUFHO0lBQzNCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsU0FBUztDQUNuQixDQUFDO0FBQ1MsUUFBQSxXQUFXLEdBQUc7SUFDdkIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0lBQ1osZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7QUFDUyxRQUFBLFVBQVUsR0FBRztJQUN0QixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFDUyxRQUFBLGNBQWMsR0FBRztJQUMxQixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvSVVzZXJEYXRhJztcbmV4cG9ydCB2YXIgRUl0ZW1JZCA9IHtcbiAgU2h1ZmZsZTogXCJzaHVmZmxlXCIsXG4gIEhpbnQ6IFwiaGludFwiLFxuICBSZXZlcnQ6IFwicmV2ZXJ0XCIsXG4gIFJldml2ZTogXCJyZXZpdmVcIixcbiAgTWFnbmV0OiBcIm1hZ25ldFwiXG59O1xuZXhwb3J0IGVudW0gUmVzSWQge1xuICBlbVlvZ2FDYXJkSWQgPSA0MixcbiAgZW1Cb21iQ2FyZElkID0gNDMsXG4gIGVtUmFua0lkID0gNTAsXG59XG5leHBvcnQgZW51bSBNakNhcmRJZCB7XG4gIGVtRmxvd0NhcmRJZCA9IDM1LFxuICBlbVNlYXNvbkNhcmRJZCA9IDM2LFxuICBlbVlvZ2FDYXJkSWQgPSAzNyxcbiAgZW1Cb21iQ2FyZElkID0gMzgsXG4gIGVtVHJhdmVsRWd5cHRJZCA9IDM5LFxuICBlbVJhbmtJZCA9IDUwLFxuICBlbUZsb3dDYXJkSWRNZWkgPSA1NCxcbiAgZW1GbG93Q2FyZElkTGFuID0gNTUsXG4gIGVtRmxvd0NhcmRJZFpodSA9IDU2LFxuICBlbUZsb3dDYXJkSWRKdSA9IDU3LFxuICBlbVNlYXNvbkNhcmRJZENodW4gPSA1OCxcbiAgZW1TZWFzb25DYXJkSWRYaWEgPSA1OSxcbiAgZW1TZWFzb25DYXJkSWRRaXUgPSA2MCxcbiAgZW1TZWFzb25DYXJkSWREb25nID0gNjEsXG59XG5leHBvcnQgZW51bSBMZXZlbFRhcmdldFR5cGUge1xuICBBbGxLaWxsID0gMCxcbiAgS2lsbENvbGxlY3RDYXJkID0gMSxcbn1cbmV4cG9ydCB2YXIgTWpHYW1lVHlwZSA9IHtcbiAgTm9uZTogXCJOb25lXCIsXG4gIE5vcm1hbDogXCJOb3JtYWxcIixcbiAgVHJhdmVsOiBcIlRyYXZlbFwiLFxuICBEYWlseUNoYWxsZW5nZTogXCJEYWlseUNoYWxsZW5nZVwiLFxuICBDbGFzc2ljOiBcIkNsYXNzaWNcIixcbiAgVGlsZTJOb3JtYWw6IFwiVGlsZTJOb3JtYWxcIlxufTtcbmV4cG9ydCBlbnVtIEpvdXJuZXlUeXBlIHtcbiAgWW9nYSA9IDEsXG4gIEZsaXAgPSAyLFxuICBDb2xvciA9IDMsXG59XG5leHBvcnQgdmFyIEVBdWRpb0RlZmluZSA9IHtcbiAgQmdtOiBcIm1fYmdtXCIsXG4gIEJ0bkNsaWNrOiBcIm1fY2xpY2tcIixcbiAgQmlydGg6IFwibV9iaXJ0aFwiLFxuICBDaGVjazE6IFwibV90b3VjaFwiLFxuICBIaW50OiBcIm1fbm90aWNlXCIsXG4gIFVuY2hlY2s6IFwibV9wdXRcIixcbiAgRnVsbENvbWJvOiBcIm1fcGVyZmVjdFwiLFxuICBCb251czogXCJtX2JvbnVzXCIsXG4gIE1hdGNoOiBcIm1fc3RyZWFrXCIsXG4gIFJlZnJlc2g6IFwibV9yZWZyZXNoXCIsXG4gIFdyb25nOiBcIm1fd3JvbmdcIixcbiAgR29vZDogXCJtX2dvb2RcIixcbiAgR3JlYXQ6IFwibV9ncmVhdFwiLFxuICBFeGNlbGxlbnQ6IFwibV9leGNlbGxlbnRcIixcbiAgQW1hemluZzogXCJtX2FtYXppbmdcIixcbiAgVW5iZWxpZXZhYmxlOiBcIm1fdW5iZWxpZXZhYmxlXCIsXG4gIEhhbW1lcjogXCJtX2hhbW1lclwiLFxuICBXaW46IFwibV93aW5cIixcbiAgV2luQ2hhcmdlOiBcIm1fY2hhcmdlXCIsXG4gIEJveDogXCJtX2JveFwiLFxuICBBcHBsYXVzZTogXCJtX2FwcGxhdXNlXCIsXG4gIERyYWc6IFwibV9kcmFnXCIsXG4gIFRhc2tCYW5uZXI6IFwibV9ibGFua1wiLFxuICBUYXNrQ29tcGxldGU6IFwibV9raW5kXCIsXG4gIEdvYWxzOiBcIm1fZ29hbHNcIixcbiAgQ29sbGVjdGlvblNob3c6IFwibV9jb2xsZWN0aW9uXCIsXG4gIENvbGxlY3Rpb25TcGVjaWFsOiBcIm1fY29sbGVjdFwiLFxuICBTcGVjaWFsVG91Y2g6IFwibV9zcGVjaWFsXCIsXG4gIFNwZWNpYWwyU3RyZWFrOiBcIm1fc3BlY2lhbDJcIixcbiAgQmxhbms6IFwibV9ibGFua1wiLFxuICBUYXJnZXRmbHkxOiBcIm1fdGFyZ2V0Zmx5MVwiLFxuICBUYXJnZXRmbHkyOiBcIm1fdGFyZ2V0Zmx5MlwiLFxuICBUYXJnZXRmbHkzOiBcIm1fdGFyZ2V0Zmx5M1wiLFxuICBSYW5raW5nMTogXCJtX3JhbmtpbmcxXCIsXG4gIFJhbmtpbmcyOiBcIm1fcmFua2luZzJcIixcbiAgQm94M1Nob3c6IFwibV9ib3gzXCIsXG4gIEJveDJPcGVuOiBcIm1fYm94MlwiLFxuICBCdXR0b24xOiBcIm1fYnV0dG9uMVwiLFxuICBCbGFua0NvbTogXCJtX2JsYW5rXCIsXG4gIENoYXJnZTogXCJtX2NoYXJnZVwiLFxuICBDb2xsZWN0MjogXCJtX2NvbGxlY3QyXCIsXG4gIEl0ZW1TdGFydDogXCJtX3NoaW5uaW5nXCIsXG4gIEl0ZW1Nb3ZlOiBcIm1fcmFua1wiLFxuICBJdGVtRW5kOiBcIm1fc2NvcmVcIixcbiAgQm9udXNFZ3lwdEE6IFwibV9ib251c19lZ3lwdF9BXCIsXG4gIFRyYXZlbFRhZ3M6IFwibV90YWdzXCIsXG4gIFRyYXZlbEJsYW5rQ29tbW9uOiBcIm1fYmxhbmtcIixcbiAgVHJhdmVsQnV0dG9uMTogXCJtX2J1dHRvbjFcIixcbiAgVHJhdmVsQ29sbGVjdDogXCJtX2NvbGxlY3QxXCIsXG4gIFJlZnJlc2hSb2xsOiBcIm1fcmVmcmVzaF9yb2xsXCJcbn07XG5leHBvcnQgZW51bSBFQXVkaW9JRCB7XG4gIEJnbSA9IDEsXG4gIEJ0bkNsaWNrID0gMixcbiAgQmlydGggPSAzLFxuICBDaGVjazEgPSA0LFxuICBIaW50ID0gNSxcbiAgVW5jaGVjayA9IDYsXG4gIEZ1bGxDb21ibyA9IDcsXG4gIEJvbnVzID0gOCxcbiAgTWF0Y2ggPSA5LFxuICBSZWZyZXNoID0gMTAsXG4gIFdyb25nID0gMTEsXG4gIEdvb2QgPSAxMixcbiAgR3JlYXQgPSAxMyxcbiAgRXhjZWxsZW50ID0gMTQsXG4gIEFtYXppbmcgPSAxNSxcbiAgVW5iZWxpZXZhYmxlID0gMTYsXG4gIEhhbW1lciA9IDE3LFxuICBXaW4gPSAxOCxcbiAgV2luQ2hhcmdlID0gMTksXG4gIEJveCA9IDIwLFxuICBBcHBsYXVzZSA9IDIxLFxuICBEcmFnID0gMjIsXG4gIFRhc2tCYW5uZXIgPSAyMyxcbiAgVGFza0NvbXBsZXRlID0gMjQsXG4gIEdvYWxzID0gMjUsXG4gIENvbGxlY3Rpb25TaG93ID0gMjYsXG4gIENvbGxlY3Rpb25TcGVjaWFsID0gMjcsXG4gIFNwZWNpYWxUb3VjaCA9IDI4LFxuICBTcGVjaWFsMlN0cmVhayA9IDI5LFxuICBCbGFuayA9IDMwLFxuICBUYXJnZXRmbHkxID0gMzEsXG4gIFRhcmdldGZseTIgPSAzMixcbiAgVGFyZ2V0Zmx5MyA9IDMzLFxuICBSYW5raW5nMSA9IDM5LFxuICBSYW5raW5nMiA9IDQwLFxuICBCb3gzU2hvdyA9IDQxLFxuICBCb3gyT3BlbiA9IDQyLFxuICBCdXR0b24xID0gNDMsXG4gIEJsYW5rQ29tID0gNDQsXG4gIENoYXJnZSA9IDQ1LFxuICBDb2xsZWN0MiA9IDQ2LFxuICBJdGVtU3RhcnQgPSA0NyxcbiAgSXRlbU1vdmUgPSA0OCxcbiAgSXRlbUVuZCA9IDQ5LFxuICBCb251c0VneXB0QSA9IDUwLFxuICBUcmF2ZWxUYWdzID0gNTEsXG4gIFRyYXZlbEJsYW5rQ29tbW9uID0gNTIsXG4gIFRyYXZlbEJ1dHRvbjEgPSA1MyxcbiAgVHJhdmVsQ29sbGVjdCA9IDU0LFxuICBHb29kTWFuID0gNTcsXG4gIEdyZWF0TWFuID0gNTgsXG4gIEV4Y2VsbGVudE1hbiA9IDU5LFxuICBBbWF6aW5nTWFuID0gNjAsXG4gIFVuYmVsaWV2YWJsZU1hbiA9IDYxLFxuICBIYXJkTGV2ZWxCYW5uZXIgPSA2OCxcbiAgQ2xhc3NpY0JhdGNoID0gNjksXG4gIENsYXNzaWNXaW4gPSA3MCxcbiAgQ2xhc3NpY0xvc2UgPSA3MSxcbiAgQ2xhc3NpY1Njb3JlUm9sbCA9IDcyLFxuICBDbGFzc2ljUmV2aXZlID0gNzMsXG4gIENsYXNzaWNCcmVha1JlY29yZCA9IDc0LFxuICBFbnRlckhhbGwgPSA4NixcbiAgRW50ZXJUcmF2ZWwgPSA4NyxcbiAgUmFua0NsZWFyQ29sMSA9IDk0LFxuICBSYW5rQ2xlYXJDb2wyID0gOTUsXG4gIFJhbmtDbGVhclRvdWNoID0gOTYsXG4gIFRpbGUyRmFpbCA9IDk3LFxuICBSZXZlcnQgPSA5OCxcbiAgQWxsQ2xlYXIgPSA5OSxcbiAgVGlsZTJUb3VjaCA9IDEwMCxcbiAgVGlsZTJPdmVydHVybiA9IDEwMSxcbiAgVGlsZTJUb3VjaDIgPSAxMDIsXG4gIFNraW5VbmxvY2sgPSAxMDMsXG4gIFRpbGUyTHVja3kgPSAxMDQsXG4gIFRpbGUyUGVyZmVjdCA9IDEwNixcbiAgUmVmcmVzaFJvbGwgPSAxMDUsXG4gIEFsbENsZWFyR2F0aGVyID0gMTA3LFxuICBNYWduZXRNZXJnZSA9IDEwOCxcbiAgVGlsZTJGYWlsM1Nsb3QgPSAxMDksXG4gIFRpbGUyRml0ID0gMTEwLFxufVxuKEVJdGVtTmFtZSA9IHt9KVtFSXRlbUlkLlNodWZmbGVdID0gXCLph43mtJfniYxcIjtcbkVJdGVtTmFtZVtFSXRlbUlkLkhpbnRdID0gXCLmj5DnpLpcIjtcbkVJdGVtTmFtZVtFSXRlbUlkLlJldmVydF0gPSBcIuaSpOWbnlwiO1xuRUl0ZW1OYW1lW0VJdGVtSWQuUmV2aXZlXSA9IFwi5aSN5rS7XCI7XG5FSXRlbU5hbWVbRUl0ZW1JZC5NYWduZXRdID0gXCLno4Hpk4FcIjtcbmV4cG9ydCB2YXIgRUl0ZW1OYW1lID0gRUl0ZW1OYW1lO1xuKEl0ZW1UeXBlMklkID0ge30pW0VJdGVtVHlwZS5TaHVmZmxlXSA9IEVJdGVtSWQuU2h1ZmZsZTtcbkl0ZW1UeXBlMklkW0VJdGVtVHlwZS5IaW50XSA9IEVJdGVtSWQuSGludDtcbkl0ZW1UeXBlMklkW0VJdGVtVHlwZS5VbmRvXSA9IEVJdGVtSWQuUmV2ZXJ0O1xuZXhwb3J0IHZhciBJdGVtVHlwZTJJZCA9IEl0ZW1UeXBlMklkO1xuZXhwb3J0IHZhciBFR2V0SXRlbVJlYXNvbklkID0ge1xuICBTeXN0ZW1HaWZ0OiBcIuezu+e7n+i1oOmAgVwiLFxuICBBZFJld2FyZDogXCLlub/lkYpcIixcbiAgRGFpbHlUYXNrOiBcIuavj+aXpeS7u+WKoeWlluWKsVwiLFxuICBEYWlseUNoYWxsZW5nZUFkOiBcIuavj+aXpeaMkeaImFwiLFxuICBKb3VybmV5OiBcIuaXheihjOa0u+WKqOWlluWKsVwiLFxuICBMZXZlbEJveDogXCLkuLvlhbPljaHlrp3nrrHlpZblirFcIixcbiAgTGV2ZWxCb3hBZDogXCLkuLvlhbPljaHlrp3nrrHlpZblirFf55yL5bm/5ZGK57+75YCNXCIsXG4gIERhaWx5VGFza0FkOiBcIuavj+aXpeS7u+WKoeWlluWKsV/nnIvlub/lkYrnv7vlgI1cIixcbiAgSm91cm5leUFkOiBcIuaXheihjOa0u+WKqOWlluWKsV/nnIvlub/lkYrnv7vlgI1cIixcbiAgTGVhZGVyQm9hcmQ6IFwi5o6S6KGM5qac5rS75Yqo5aWW5YqxXCIsXG4gIExlYWRlckJvYXJkQWQ6IFwi5o6S6KGM5qac5rS75Yqo5aWW5YqxX+eci+W5v+WRiue/u+WAjVwiLFxuICBBZ2VTdXJ2ZXk6IFwi5bm06b6E6LCD56CU5aWW5YqxXCIsXG4gIEFnZVN1cnZleUFkOiBcIuW5tOm+hOiwg+eglOWlluWKsV/nnIvlub/lkYrnv7vlgI1cIixcbiAgV2luU3RyZWFrUmV3YXJkOiBcIui/nuiDnOWlluWKsVwiLFxuICBEYWlseVNpZ246IFwi5q+P5pel562+5Yiw5aWW5YqxXCIsXG4gIERhaWx5U2lnbkFkOiBcIuavj+aXpeetvuWIsOWlluWKsV/nnIvlub/lkYrnv7vlgI1cIixcbiAgRGFpbHlTaWduQ2xhc3NpYzogXCLnu4/lhbjmr4/ml6XnmbvlvZVcIixcbiAgRGFpbHlTaWduU2ltcGxlOiBcIueugOaYk+avj+aXpeeZu+W9lVwiXG59O1xuZXhwb3J0IHZhciBFUmVkRG90UG9zaXRpb24gPSB7XG4gIExlZnQ6IFwibGVmdFwiLFxuICBSaWdodDogXCJyaWdodFwiLFxuICBTcGVjaWFsOiBcInNwZWNpYWxcIlxufTtcbmV4cG9ydCB2YXIgRVJlZERvdFR5cGUgPSB7XG4gIFNldHRpbmc6IFwic2V0dGluZ1wiLFxuICBKb3VybmV5OiBcImpvdXJuZXlcIixcbiAgRGFpbHlDaGFsbGVuZ2U6IFwiZGFpbHlDaGFsbGVuZ2VcIixcbiAgUmFuazogXCJyYW5rXCIsXG4gIFRhc2s6IFwidGFza1wiLFxuICBEYWlseVNpZ25DbGFzc2ljOiBcImRhaWx5U2lnbkNsYXNzaWNcIixcbiAgVmFsZW50aW5lOiBcInZhbGVudGluZVwiXG59O1xuZXhwb3J0IHZhciBFTWVyZ2VUeXBlID0ge1xuICBOb3JtYWw6IFwibm9ybWFsXCIsXG4gIEJvbWI6IFwiYm9tYlwiLFxuICBGdWxsQ29tYm86IFwiZnVsbENvbWJvXCIsXG4gIER1b3hpYW86IFwiZHVveGlhb1wiLFxuICBEYXhpYW86IFwiZGF4aWFvXCJcbn07XG5leHBvcnQgdmFyIEVUaWxlMlNsb3RUeXBlID0ge1xuICBTbG90MzogXCJTbG90M1wiLFxuICBTbG90NDogXCJTbG90NFwiXG59OyJdfQ==