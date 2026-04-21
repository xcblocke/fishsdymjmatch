"use strict";
cc._RF.push(module, '187f2EzowFAJ4eR5y0XxWGh', 'DailyTypes');
// subpackages/l_daily/Scripts/DailyTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EDailyAudioID = exports.DailyEvents = exports.DisplayType = exports.DailyStatus = void 0;
var DailyStatus;
(function (DailyStatus) {
    DailyStatus[DailyStatus["Unopened"] = 0] = "Unopened";
    DailyStatus[DailyStatus["Unlocked"] = 1] = "Unlocked";
    DailyStatus[DailyStatus["Locked"] = 2] = "Locked";
    DailyStatus[DailyStatus["Completed"] = 3] = "Completed";
})(DailyStatus = exports.DailyStatus || (exports.DailyStatus = {}));
exports.DisplayType = {
    Journey: "journey",
    Daily: "daily"
};
exports.DailyEvents = {
    OPEN_REWARD_VIEW: "openRewardView",
    DAILY_DAY_ITEM_CLICK: "dailyDayItemClick",
    DAILY_SHOW_REWARD_ITEM: "dailyShowRewardItem",
    DAILY_DAY_EFFECT_SHOW: "dailyDayEffectShow"
};
var EDailyAudioID;
(function (EDailyAudioID) {
    EDailyAudioID[EDailyAudioID["BadgeTags"] = 34] = "BadgeTags";
    EDailyAudioID[EDailyAudioID["BadgeSite"] = 35] = "BadgeSite";
    EDailyAudioID[EDailyAudioID["DailyDay"] = 36] = "DailyDay";
    EDailyAudioID[EDailyAudioID["DailyMonthSlide"] = 37] = "DailyMonthSlide";
    EDailyAudioID[EDailyAudioID["DailyComplete"] = 38] = "DailyComplete";
})(EDailyAudioID = exports.EDailyAudioID || (exports.EDailyAudioID = {}));

cc._RF.pop();