"use strict";
cc._RF.push(module, '270535WyjdKWLIhcr6t04V9', 'DotAppPush');
// Scripts/gamePlay/dot/DotAppPush.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotAppPush = exports.EAppPushType = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
exports.EAppPushType = {
    GoldUnlockPushRemove: "gq_goldunlock_push_remove",
    GoldRankPushRemove: "gq_goldrank_push_remove",
    TravelMedalPushRemove: "lxmedal_push_remove",
    DailyTaskPushRemove: "lxdailytask_push_remove",
    DailyChallengeMedalPushRemove: "tzmeda_push_remove",
    CdqzhPushRemove: "cdqzh_push_remove",
    UnfinishedPushRemove: "unfinished_push_remove",
    DailyTzPushRemove: "dailytz_push_remove",
    JourneyLeftDaysPushRemove: "journey_left_days_push_remove",
    GqBoxUnlockedPushRemove: "gq_box_unlocked_push_remove"
};
var DotAppPush = /** @class */ (function () {
    function DotAppPush() {
    }
    DotAppPush.dotPushRemove = function (e) {
        var t = "";
        switch (e) {
            case "mbgqgoldunlock1":
                t = exports.EAppPushType.GoldUnlockPushRemove;
                break;
            case "mbgqgoldrank1":
                t = exports.EAppPushType.GoldRankPushRemove;
                break;
            case "mblxmedal1":
                t = exports.EAppPushType.TravelMedalPushRemove;
                break;
            case "mbdailytask1":
                t = exports.EAppPushType.DailyTaskPushRemove;
                break;
            case "mbtzmedal1":
                t = exports.EAppPushType.DailyChallengeMedalPushRemove;
                break;
            case "mjcdqzh1":
                t = exports.EAppPushType.CdqzhPushRemove;
                break;
            case "mjunfinished1":
                t = exports.EAppPushType.UnfinishedPushRemove;
                break;
            case "mjdailytz1":
                t = exports.EAppPushType.DailyTzPushRemove;
                break;
            case "mblxdays1":
                t = exports.EAppPushType.JourneyLeftDaysPushRemove;
                break;
            case "mbgqbox1":
                t = exports.EAppPushType.GqBoxUnlockedPushRemove;
        }
        t && EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.PushRemove, t);
    };
    return DotAppPush;
}());
exports.DotAppPush = DotAppPush;

cc._RF.pop();