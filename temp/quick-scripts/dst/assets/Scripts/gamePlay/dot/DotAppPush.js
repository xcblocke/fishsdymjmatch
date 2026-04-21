
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DotAppPush.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9Eb3RBcHBQdXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQStEO0FBQy9ELDhFQUF5RTtBQUM5RCxRQUFBLFlBQVksR0FBRztJQUN4QixvQkFBb0IsRUFBRSwyQkFBMkI7SUFDakQsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QyxtQkFBbUIsRUFBRSx5QkFBeUI7SUFDOUMsNkJBQTZCLEVBQUUsb0JBQW9CO0lBQ25ELGVBQWUsRUFBRSxtQkFBbUI7SUFDcEMsb0JBQW9CLEVBQUUsd0JBQXdCO0lBQzlDLGlCQUFpQixFQUFFLHFCQUFxQjtJQUN4Qyx5QkFBeUIsRUFBRSwrQkFBK0I7SUFDMUQsdUJBQXVCLEVBQUUsNkJBQTZCO0NBQ3ZELENBQUM7QUFDRjtJQUFBO0lBb0NBLENBQUM7SUFuQ1Esd0JBQWEsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssaUJBQWlCO2dCQUNwQixDQUFDLEdBQUcsb0JBQVksQ0FBQyxvQkFBb0IsQ0FBQztnQkFDdEMsTUFBTTtZQUNSLEtBQUssZUFBZTtnQkFDbEIsQ0FBQyxHQUFHLG9CQUFZLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3BDLE1BQU07WUFDUixLQUFLLFlBQVk7Z0JBQ2YsQ0FBQyxHQUFHLG9CQUFZLENBQUMscUJBQXFCLENBQUM7Z0JBQ3ZDLE1BQU07WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLENBQUMsR0FBRyxvQkFBWSxDQUFDLG1CQUFtQixDQUFDO2dCQUNyQyxNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLENBQUMsR0FBRyxvQkFBWSxDQUFDLDZCQUE2QixDQUFDO2dCQUMvQyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLENBQUMsR0FBRyxvQkFBWSxDQUFDLGVBQWUsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssZUFBZTtnQkFDbEIsQ0FBQyxHQUFHLG9CQUFZLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3RDLE1BQU07WUFDUixLQUFLLFlBQVk7Z0JBQ2YsQ0FBQyxHQUFHLG9CQUFZLENBQUMsaUJBQWlCLENBQUM7Z0JBQ25DLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsQ0FBQyxHQUFHLG9CQUFZLENBQUMseUJBQXlCLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsQ0FBQyxHQUFHLG9CQUFZLENBQUMsdUJBQXVCLENBQUM7U0FDNUM7UUFDRCxDQUFDLElBQUksOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRUcmFja2luZ1R5cGUgfSBmcm9tICcuLi8uLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5leHBvcnQgdmFyIEVBcHBQdXNoVHlwZSA9IHtcbiAgR29sZFVubG9ja1B1c2hSZW1vdmU6IFwiZ3FfZ29sZHVubG9ja19wdXNoX3JlbW92ZVwiLFxuICBHb2xkUmFua1B1c2hSZW1vdmU6IFwiZ3FfZ29sZHJhbmtfcHVzaF9yZW1vdmVcIixcbiAgVHJhdmVsTWVkYWxQdXNoUmVtb3ZlOiBcImx4bWVkYWxfcHVzaF9yZW1vdmVcIixcbiAgRGFpbHlUYXNrUHVzaFJlbW92ZTogXCJseGRhaWx5dGFza19wdXNoX3JlbW92ZVwiLFxuICBEYWlseUNoYWxsZW5nZU1lZGFsUHVzaFJlbW92ZTogXCJ0em1lZGFfcHVzaF9yZW1vdmVcIixcbiAgQ2RxemhQdXNoUmVtb3ZlOiBcImNkcXpoX3B1c2hfcmVtb3ZlXCIsXG4gIFVuZmluaXNoZWRQdXNoUmVtb3ZlOiBcInVuZmluaXNoZWRfcHVzaF9yZW1vdmVcIixcbiAgRGFpbHlUelB1c2hSZW1vdmU6IFwiZGFpbHl0el9wdXNoX3JlbW92ZVwiLFxuICBKb3VybmV5TGVmdERheXNQdXNoUmVtb3ZlOiBcImpvdXJuZXlfbGVmdF9kYXlzX3B1c2hfcmVtb3ZlXCIsXG4gIEdxQm94VW5sb2NrZWRQdXNoUmVtb3ZlOiBcImdxX2JveF91bmxvY2tlZF9wdXNoX3JlbW92ZVwiXG59O1xuZXhwb3J0IGNsYXNzIERvdEFwcFB1c2gge1xuICBzdGF0aWMgZG90UHVzaFJlbW92ZShlKSB7XG4gICAgdmFyIHQgPSBcIlwiO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcIm1iZ3Fnb2xkdW5sb2NrMVwiOlxuICAgICAgICB0ID0gRUFwcFB1c2hUeXBlLkdvbGRVbmxvY2tQdXNoUmVtb3ZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYmdxZ29sZHJhbmsxXCI6XG4gICAgICAgIHQgPSBFQXBwUHVzaFR5cGUuR29sZFJhbmtQdXNoUmVtb3ZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYmx4bWVkYWwxXCI6XG4gICAgICAgIHQgPSBFQXBwUHVzaFR5cGUuVHJhdmVsTWVkYWxQdXNoUmVtb3ZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYmRhaWx5dGFzazFcIjpcbiAgICAgICAgdCA9IEVBcHBQdXNoVHlwZS5EYWlseVRhc2tQdXNoUmVtb3ZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYnR6bWVkYWwxXCI6XG4gICAgICAgIHQgPSBFQXBwUHVzaFR5cGUuRGFpbHlDaGFsbGVuZ2VNZWRhbFB1c2hSZW1vdmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1qY2RxemgxXCI6XG4gICAgICAgIHQgPSBFQXBwUHVzaFR5cGUuQ2RxemhQdXNoUmVtb3ZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtanVuZmluaXNoZWQxXCI6XG4gICAgICAgIHQgPSBFQXBwUHVzaFR5cGUuVW5maW5pc2hlZFB1c2hSZW1vdmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1qZGFpbHl0ejFcIjpcbiAgICAgICAgdCA9IEVBcHBQdXNoVHlwZS5EYWlseVR6UHVzaFJlbW92ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWJseGRheXMxXCI6XG4gICAgICAgIHQgPSBFQXBwUHVzaFR5cGUuSm91cm5leUxlZnREYXlzUHVzaFJlbW92ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWJncWJveDFcIjpcbiAgICAgICAgdCA9IEVBcHBQdXNoVHlwZS5HcUJveFVubG9ja2VkUHVzaFJlbW92ZTtcbiAgICB9XG4gICAgdCAmJiBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuUHVzaFJlbW92ZSwgdCk7XG4gIH1cbn0iXX0=