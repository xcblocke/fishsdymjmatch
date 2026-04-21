
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DAdRewardEnter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f69cbqZ4p1D7JHn51/7iDJX', 'DAdRewardEnter');
// Scripts/gamePlay/dot/DAdRewardEnter.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotAdRewardEnter = exports.EAdEnterAction = void 0;
var AdManager_1 = require("../../base/ad/AdManager");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DGameAdShow_1 = require("./DGameAdShow");
var DotUtil_1 = require("./DotUtil");
exports.EAdEnterAction = {
    Show: "show",
    Click: "click"
};
var DotAdRewardEnter = /** @class */ (function () {
    function DotAdRewardEnter() {
    }
    DotAdRewardEnter.dot = function (e, t) {
        var o = UserModel_1.default.getInstance(), u = o.getCurrentGameType(), p = o.getCurrentGameData(), f = Math.floor((Date.now() - o.getAppStartTime()) / 1000), d = Math.floor((Date.now() - p.getStartGameTime()) / 1000), h = Math.floor(p.getCurrentRoundTime()), y = {
            ad_enter_action: e ? exports.EAdEnterAction.Show : exports.EAdEnterAction.Click,
            ad_enter_scene: DGameAdShow_1.DGameAdShow.getAdPositionName(t),
            ad_is_ready: AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0,
            session_time: f,
            reward_ad_num: o.getTotalRewardAdCount(),
            game_mode: DotUtil_1.DotUtil.getGameId(u),
            game_mode_name: DotUtil_1.DotUtil.getGameModeName(u),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(u),
            level: p.getCurrentLevelId(),
            mode_num: p.getGameCount(),
            mode_num_all: o.getTotalGames(),
            mode_winnum: p.getWinGames(),
            mode_winnum_all: o.getTotalWinGames(),
            game_time: d,
            game_time_real: h
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.AdRewardEnter, y);
    };
    return DotAdRewardEnter;
}());
exports.DotAdRewardEnter = DotAdRewardEnter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyw2Q0FBNEM7QUFDNUMscUNBQW9DO0FBQ3pCLFFBQUEsY0FBYyxHQUFHO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBQ0Y7SUFBQTtJQTJCQSxDQUFDO0lBMUJRLG9CQUFHLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUMxQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDMUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUMsRUFDdkMsQ0FBQyxHQUFHO1lBQ0YsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUFjLENBQUMsS0FBSztZQUMvRCxjQUFjLEVBQUUseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDaEQsV0FBVyxFQUFFLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLFlBQVksRUFBRSxDQUFDO1lBQ2YsYUFBYSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsRUFBRTtZQUN4QyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsZ0JBQWdCLEVBQUUsaUJBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUMxQixZQUFZLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUMvQixXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUM1QixlQUFlLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1lBQ3JDLFNBQVMsRUFBRSxDQUFDO1lBQ1osY0FBYyxFQUFFLENBQUM7U0FDbEIsQ0FBQztRQUNKLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBER2FtZUFkU2hvdyB9IGZyb20gJy4vREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90VXRpbCB9IGZyb20gJy4vRG90VXRpbCc7XG5leHBvcnQgdmFyIEVBZEVudGVyQWN0aW9uID0ge1xuICBTaG93OiBcInNob3dcIixcbiAgQ2xpY2s6IFwiY2xpY2tcIlxufTtcbmV4cG9ydCBjbGFzcyBEb3RBZFJld2FyZEVudGVyIHtcbiAgc3RhdGljIGRvdChlLCB0KSB7XG4gICAgdmFyIG8gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHUgPSBvLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgcCA9IG8uZ2V0Q3VycmVudEdhbWVEYXRhKCksXG4gICAgICBmID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIG8uZ2V0QXBwU3RhcnRUaW1lKCkpIC8gMTAwMCksXG4gICAgICBkID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHAuZ2V0U3RhcnRHYW1lVGltZSgpKSAvIDEwMDApLFxuICAgICAgaCA9IE1hdGguZmxvb3IocC5nZXRDdXJyZW50Um91bmRUaW1lKCkpLFxuICAgICAgeSA9IHtcbiAgICAgICAgYWRfZW50ZXJfYWN0aW9uOiBlID8gRUFkRW50ZXJBY3Rpb24uU2hvdyA6IEVBZEVudGVyQWN0aW9uLkNsaWNrLFxuICAgICAgICBhZF9lbnRlcl9zY2VuZTogREdhbWVBZFNob3cuZ2V0QWRQb3NpdGlvbk5hbWUodCksXG4gICAgICAgIGFkX2lzX3JlYWR5OiBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkgPyAxIDogMCxcbiAgICAgICAgc2Vzc2lvbl90aW1lOiBmLFxuICAgICAgICByZXdhcmRfYWRfbnVtOiBvLmdldFRvdGFsUmV3YXJkQWRDb3VudCgpLFxuICAgICAgICBnYW1lX21vZGU6IERvdFV0aWwuZ2V0R2FtZUlkKHUpLFxuICAgICAgICBnYW1lX21vZGVfbmFtZTogRG90VXRpbC5nZXRHYW1lTW9kZU5hbWUodSksXG4gICAgICAgIGdhbWVfcGxheV9tZXRob2Q6IERvdFV0aWwuZ2V0R2FtZVBsYXlNZXRob2QodSksXG4gICAgICAgIGxldmVsOiBwLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICAgIG1vZGVfbnVtOiBwLmdldEdhbWVDb3VudCgpLFxuICAgICAgICBtb2RlX251bV9hbGw6IG8uZ2V0VG90YWxHYW1lcygpLFxuICAgICAgICBtb2RlX3dpbm51bTogcC5nZXRXaW5HYW1lcygpLFxuICAgICAgICBtb2RlX3dpbm51bV9hbGw6IG8uZ2V0VG90YWxXaW5HYW1lcygpLFxuICAgICAgICBnYW1lX3RpbWU6IGQsXG4gICAgICAgIGdhbWVfdGltZV9yZWFsOiBoXG4gICAgICB9O1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5BZFJld2FyZEVudGVyLCB5KTtcbiAgfVxufSJdfQ==