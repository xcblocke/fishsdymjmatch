
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dotAtFail/Scripts/DotAtFailTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '110dbPHkVBBpaV/vK+Ep5cN', 'DotAtFailTrait');
// subpackages/l_dotAtFail/Scripts/DotAtFailTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var EventData_1 = require("../../../Scripts/base/event/EventData");
var EventTrackingManager_1 = require("../../../Scripts/base/event/EventTrackingManager");
var DotUtil_1 = require("../../../Scripts/gamePlay/dot/DotUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var i;
(function (i) {
    i[i["UseShuffle"] = 0] = "UseShuffle";
    i[i["UseAdShuffle"] = 1] = "UseAdShuffle";
    i[i["Replay"] = 2] = "Replay";
})(i || (i = {}));
var DotAtFailTrait = /** @class */ (function (_super) {
    __extends(DotAtFailTrait, _super);
    function DotAtFailTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DotAtFailTrait.prototype.onFailVw_show = function (t, e) {
        var r = this.generateData();
        this.dotPopup(r);
        e();
    };
    DotAtFailTrait.prototype.onFailVw_watchAdShuffle = function (t, e) {
        var r = this.generateData(true, i.UseAdShuffle);
        this.dotClick(r);
        e();
    };
    DotAtFailTrait.prototype.onFailVw_useShuffle = function (t, e) {
        var r = this.generateData(true, i.UseShuffle);
        this.dotClick(r);
        e();
    };
    DotAtFailTrait.prototype.onFailVw_replay = function (t, e) {
        var r = this.generateData(true, i.Replay);
        this.dotClick(r);
        e();
    };
    DotAtFailTrait.prototype.generateData = function (t, e) {
        if (t === void 0) { t = false; }
        if (e === void 0) { e = i.UseShuffle; }
        var r = UserModel_1.default.getInstance(), a = r.getCurrentGameType();
        if (a === GameTypeEnums_1.MjGameType.None)
            return null;
        var o = r.getGameDataByGameType(a), n = o.getClearTileCount() / o.getTotalTileCount(), l = o.getPopupFailCnt(), s = Math.floor(o.getCurrentRoundTime()), u = o.getShuffleNums(), d = u > 0 ? 0 : 1, y = {
            game_id: o.getGameId(),
            game_type: DotUtil_1.DotUtil.getGameId(a),
            process: n,
            deadlock_cnt: l,
            level_id: o.getCurrentLevelId(),
            game_time_real: s,
            popup_type: d
        };
        t && (e === i.UseShuffle ? y.click_target = 0 : e === i.UseAdShuffle ? y.click_target = 3 : e === i.Replay && (y.click_target = u > 0 ? 1 : 2));
        return y;
    };
    DotAtFailTrait.prototype.dotPopup = function (t) {
        t && EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameDeadLockPopup, t);
    };
    DotAtFailTrait.prototype.dotClick = function (t) {
        t && EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameDeadLockClick, t);
    };
    DotAtFailTrait.traitKey = "DotAtFail";
    DotAtFailTrait = __decorate([
        mj.trait,
        mj.class("DotAtFailTrait")
    ], DotAtFailTrait);
    return DotAtFailTrait;
}(Trait_1.default));
exports.default = DotAtFailTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RvdEF0RmFpbC9TY3JpcHRzL0RvdEF0RmFpbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELG1FQUEwRTtBQUMxRSx5RkFBb0Y7QUFDcEYsaUVBQWdFO0FBQ2hFLHNFQUFpRTtBQUNqRSxJQUFLLENBSUo7QUFKRCxXQUFLLENBQUM7SUFDSixxQ0FBYyxDQUFBO0lBQ2QseUNBQWdCLENBQUE7SUFDaEIsNkJBQVUsQ0FBQTtBQUNaLENBQUMsRUFKSSxDQUFDLEtBQUQsQ0FBQyxRQUlMO0FBR0Q7SUFBNEMsa0NBQUs7SUFBakQ7O0lBa0RBLENBQUM7SUFoREMsc0NBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGdEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsd0NBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxxQ0FBWSxHQUFaLFVBQWEsQ0FBUyxFQUFFLENBQWdCO1FBQTNCLGtCQUFBLEVBQUEsU0FBUztRQUFFLGtCQUFBLEVBQUEsSUFBSSxDQUFDLENBQUMsVUFBVTtRQUN0QyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssMEJBQVUsQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUNoQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQ2pELENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQ3RCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDakIsQ0FBQyxHQUFHO1lBQ0YsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsU0FBUyxFQUFFLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLEVBQUUsQ0FBQztZQUNWLFlBQVksRUFBRSxDQUFDO1lBQ2YsUUFBUSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvQixjQUFjLEVBQUUsQ0FBQztZQUNqQixVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFDSixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoSixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxpQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLENBQUMsSUFBSSw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUNELGlDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1IsQ0FBQyxJQUFJLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBaERNLHVCQUFRLEdBQUcsV0FBVyxDQUFDO0lBRFgsY0FBYztRQUZsQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBa0RsQztJQUFELHFCQUFDO0NBbERELEFBa0RDLENBbEQyQyxlQUFLLEdBa0RoRDtrQkFsRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvRG90VXRpbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuZW51bSBpIHtcbiAgVXNlU2h1ZmZsZSA9IDAsXG4gIFVzZUFkU2h1ZmZsZSA9IDEsXG4gIFJlcGxheSA9IDIsXG59XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRvdEF0RmFpbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3RBdEZhaWxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEb3RBdEZhaWxcIjtcbiAgb25GYWlsVndfc2hvdyh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLmdlbmVyYXRlRGF0YSgpO1xuICAgIHRoaXMuZG90UG9wdXAocik7XG4gICAgZSgpO1xuICB9XG4gIG9uRmFpbFZ3X3dhdGNoQWRTaHVmZmxlKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2VuZXJhdGVEYXRhKHRydWUsIGkuVXNlQWRTaHVmZmxlKTtcbiAgICB0aGlzLmRvdENsaWNrKHIpO1xuICAgIGUoKTtcbiAgfVxuICBvbkZhaWxWd191c2VTaHVmZmxlKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2VuZXJhdGVEYXRhKHRydWUsIGkuVXNlU2h1ZmZsZSk7XG4gICAgdGhpcy5kb3RDbGljayhyKTtcbiAgICBlKCk7XG4gIH1cbiAgb25GYWlsVndfcmVwbGF5KHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2VuZXJhdGVEYXRhKHRydWUsIGkuUmVwbGF5KTtcbiAgICB0aGlzLmRvdENsaWNrKHIpO1xuICAgIGUoKTtcbiAgfVxuICBnZW5lcmF0ZURhdGEodCA9IGZhbHNlLCBlID0gaS5Vc2VTaHVmZmxlKSB7XG4gICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGEgPSByLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmIChhID09PSBNakdhbWVUeXBlLk5vbmUpIHJldHVybiBudWxsO1xuICAgIHZhciBvID0gci5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoYSksXG4gICAgICBuID0gby5nZXRDbGVhclRpbGVDb3VudCgpIC8gby5nZXRUb3RhbFRpbGVDb3VudCgpLFxuICAgICAgbCA9IG8uZ2V0UG9wdXBGYWlsQ250KCksXG4gICAgICBzID0gTWF0aC5mbG9vcihvLmdldEN1cnJlbnRSb3VuZFRpbWUoKSksXG4gICAgICB1ID0gby5nZXRTaHVmZmxlTnVtcygpLFxuICAgICAgZCA9IHUgPiAwID8gMCA6IDEsXG4gICAgICB5ID0ge1xuICAgICAgICBnYW1lX2lkOiBvLmdldEdhbWVJZCgpLFxuICAgICAgICBnYW1lX3R5cGU6IERvdFV0aWwuZ2V0R2FtZUlkKGEpLFxuICAgICAgICBwcm9jZXNzOiBuLFxuICAgICAgICBkZWFkbG9ja19jbnQ6IGwsXG4gICAgICAgIGxldmVsX2lkOiBvLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICAgIGdhbWVfdGltZV9yZWFsOiBzLFxuICAgICAgICBwb3B1cF90eXBlOiBkXG4gICAgICB9O1xuICAgIHQgJiYgKGUgPT09IGkuVXNlU2h1ZmZsZSA/IHkuY2xpY2tfdGFyZ2V0ID0gMCA6IGUgPT09IGkuVXNlQWRTaHVmZmxlID8geS5jbGlja190YXJnZXQgPSAzIDogZSA9PT0gaS5SZXBsYXkgJiYgKHkuY2xpY2tfdGFyZ2V0ID0gdSA+IDAgPyAxIDogMikpO1xuICAgIHJldHVybiB5O1xuICB9XG4gIGRvdFBvcHVwKHQpIHtcbiAgICB0ICYmIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5HYW1lRGVhZExvY2tQb3B1cCwgdCk7XG4gIH1cbiAgZG90Q2xpY2sodCkge1xuICAgIHQgJiYgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkdhbWVEZWFkTG9ja0NsaWNrLCB0KTtcbiAgfVxufSJdfQ==