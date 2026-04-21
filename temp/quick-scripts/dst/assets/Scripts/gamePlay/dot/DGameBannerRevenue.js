
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameBannerRevenue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3dcdfsAOUZMjqmV/lOlOtSs', 'DGameBannerRevenue');
// Scripts/gamePlay/dot/DGameBannerRevenue.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DGameBannerRevenue = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var DGameBannerRevenue = /** @class */ (function () {
    function DGameBannerRevenue() {
    }
    DGameBannerRevenue.dot = function () {
        var e = mj.sdk.callGetBannerRevenueSum();
        if (!(e <= 0)) {
            var t = UserModel_1.default.getInstance().getCurrentGameData(), o = {
                revenue: e,
                game_mode_name: DotUtil_1.DotUtil.getGameModeName(t.gameType),
                game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(t.gameType),
                game_mode: DotUtil_1.DotUtil.getGameId(t.gameType)
            };
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameBannerRevenue, o);
        }
    };
    return DGameBannerRevenue;
}());
exports.DGameBannerRevenue = DGameBannerRevenue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUJhbm5lclJldmVudWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyxxQ0FBb0M7QUFDcEM7SUFBQTtJQWNBLENBQUM7SUFiUSxzQkFBRyxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDbEQsQ0FBQyxHQUFHO2dCQUNGLE9BQU8sRUFBRSxDQUFDO2dCQUNWLGNBQWMsRUFBRSxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUNuRCxnQkFBZ0IsRUFBRSxpQkFBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZELFNBQVMsRUFBRSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ3pDLENBQUM7WUFDSiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkY7SUFDSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi9Eb3RVdGlsJztcbmV4cG9ydCBjbGFzcyBER2FtZUJhbm5lclJldmVudWUge1xuICBzdGF0aWMgZG90KCkge1xuICAgIHZhciBlID0gbWouc2RrLmNhbGxHZXRCYW5uZXJSZXZlbnVlU3VtKCk7XG4gICAgaWYgKCEoZSA8PSAwKSkge1xuICAgICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKSxcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICByZXZlbnVlOiBlLFxuICAgICAgICAgIGdhbWVfbW9kZV9uYW1lOiBEb3RVdGlsLmdldEdhbWVNb2RlTmFtZSh0LmdhbWVUeXBlKSxcbiAgICAgICAgICBnYW1lX3BsYXlfbWV0aG9kOiBEb3RVdGlsLmdldEdhbWVQbGF5TWV0aG9kKHQuZ2FtZVR5cGUpLFxuICAgICAgICAgIGdhbWVfbW9kZTogRG90VXRpbC5nZXRHYW1lSWQodC5nYW1lVHlwZSlcbiAgICAgICAgfTtcbiAgICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5HYW1lQmFubmVyUmV2ZW51ZSwgbyk7XG4gICAgfVxuICB9XG59Il19