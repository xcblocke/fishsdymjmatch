
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameOpen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96489ZPOwJOvoLPdkhdrh5n', 'DGameOpen');
// Scripts/gamePlay/dot/DGameOpen.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameOpen = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var DotGameOpen = /** @class */ (function () {
    function DotGameOpen() {
    }
    DotGameOpen.isCheckCanDot = function () {
        if (this._isCanDot)
            return false;
        this._isCanDot = true;
        return true;
    };
    DotGameOpen.dot = function () {
        var e = UserModel_1.default.getInstance(), t = e.isFirstOpen, o = e.getCurrentGameType(), l = {
            is_first_open: t ? 1 : 0,
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(o),
            game_mode: DotUtil_1.DotUtil.getGameId(o),
            game_mode_name: DotUtil_1.DotUtil.getGameModeName(o)
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameOpen, l);
    };
    DotGameOpen._isCanDot = false;
    return DotGameOpen;
}());
exports.DotGameOpen = DotGameOpen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZU9wZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyxxQ0FBb0M7QUFDcEM7SUFBQTtJQW1CQSxDQUFDO0lBakJRLHlCQUFhLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLGVBQUcsR0FBVjtRQUNFLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQzFCLENBQUMsR0FBRztZQUNGLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixnQkFBZ0IsRUFBRSxpQkFBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUM5QyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDM0MsQ0FBQztRQUNKLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQWpCTSxxQkFBUyxHQUFHLEtBQUssQ0FBQztJQWtCM0Isa0JBQUM7Q0FuQkQsQUFtQkMsSUFBQTtBQW5CWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi9Eb3RVdGlsJztcbmV4cG9ydCBjbGFzcyBEb3RHYW1lT3BlbiB7XG4gIHN0YXRpYyBfaXNDYW5Eb3QgPSBmYWxzZTtcbiAgc3RhdGljIGlzQ2hlY2tDYW5Eb3QoKSB7XG4gICAgaWYgKHRoaXMuX2lzQ2FuRG90KSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5faXNDYW5Eb3QgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHN0YXRpYyBkb3QoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHQgPSBlLmlzRmlyc3RPcGVuLFxuICAgICAgbyA9IGUuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBsID0ge1xuICAgICAgICBpc19maXJzdF9vcGVuOiB0ID8gMSA6IDAsXG4gICAgICAgIGdhbWVfcGxheV9tZXRob2Q6IERvdFV0aWwuZ2V0R2FtZVBsYXlNZXRob2QobyksXG4gICAgICAgIGdhbWVfbW9kZTogRG90VXRpbC5nZXRHYW1lSWQobyksXG4gICAgICAgIGdhbWVfbW9kZV9uYW1lOiBEb3RVdGlsLmdldEdhbWVNb2RlTmFtZShvKVxuICAgICAgfTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuR2FtZU9wZW4sIGwpO1xuICB9XG59Il19