"use strict";
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