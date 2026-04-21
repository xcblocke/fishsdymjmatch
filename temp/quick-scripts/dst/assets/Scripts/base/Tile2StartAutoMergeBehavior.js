
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2StartAutoMergeBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64024cSny1PjJUhSYpRkHO1', 'Tile2StartAutoMergeBehavior');
// Scripts/base/Tile2StartAutoMergeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2StartAutoMergeBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var StartAutoMergeBehavior_1 = require("./StartAutoMergeBehavior");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2StartAutoMergeBehavior = /** @class */ (function (_super) {
    __extends(Tile2StartAutoMergeBehavior, _super);
    function Tile2StartAutoMergeBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 100;
        return _this;
    }
    Tile2StartAutoMergeBehavior.prototype.start = function (e) {
        var t, o = this, n = null !== (t = e.data.type) && void 0 !== t ? t : "", i = this.getSpeedConfig(n), r = i.initialDelay, c = false, u = function u() {
            var e, t;
            if (!c) {
                var p = o.context.getTileMapObject();
                p.updateCanMatchTiles();
                p.getCanMatchTilesHint();
                var f = p.getAllCardTiles();
                if (!f || f.length <= 0) {
                    c = true;
                    o._onAllPairsExhausted(n);
                }
                else {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.Tile2AutoMerge,
                        type: n
                    });
                    if (i.type === StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate) {
                        var d = null !== (e = i.minDelay) && void 0 !== e ? e : 0.1, h = null !== (t = i.decreaseStep) && void 0 !== t ? t : 0.02;
                        r > d && (r = Math.max(d, r - h));
                    }
                    o.context.gameView.timerComponent.doOnce(r, u);
                }
            }
        };
        u();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2StartAutoMergeBehavior.prototype._onAllPairsExhausted = function (e) {
        "allClear" === e && this._handleAllClearComplete();
    };
    Tile2StartAutoMergeBehavior.prototype._handleAllClearComplete = function () { };
    Tile2StartAutoMergeBehavior.prototype.getSpeedConfig = function (e) {
        return "travelVictory" === e ? this.getTravelSpeedConfig() : this.getMainlineSpeedConfig();
    };
    Tile2StartAutoMergeBehavior.prototype.getMainlineSpeedConfig = function () {
        return {
            type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Constant,
            initialDelay: 0.33
        };
    };
    Tile2StartAutoMergeBehavior.prototype.getTravelSpeedConfig = function () {
        return {
            type: StartAutoMergeBehavior_1.AutoMergeSpeedType.Accelerate,
            initialDelay: 0.33,
            decreaseStep: 0.02,
            minDelay: 0.1
        };
    };
    __decorate([
        mj.traitEvent("T2StAutoMrgBhv_mainSpd")
    ], Tile2StartAutoMergeBehavior.prototype, "getMainlineSpeedConfig", null);
    __decorate([
        mj.traitEvent("T2StAutoMrgBhv_trvSpd")
    ], Tile2StartAutoMergeBehavior.prototype, "getTravelSpeedConfig", null);
    return Tile2StartAutoMergeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2StartAutoMergeBehavior = Tile2StartAutoMergeBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTdGFydEF1dG9NZXJnZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9GO0FBQ3BGLHNFQUFxRTtBQUNyRSxtRUFBOEQ7QUFDOUQseURBQXdEO0FBQ3hEO0lBQWlELCtDQUFpQjtJQUFsRTtRQUFBLHFFQTJEQztRQTFEQyxjQUFRLEdBQUcsR0FBRyxDQUFDOztJQTBEakIsQ0FBQztJQXpEQywyQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3ZELENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFDbEIsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN4QixDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN2QixDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNULENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsaUNBQWUsQ0FBQyxLQUFLLENBQUM7d0JBQ3BCLFNBQVMsRUFBRSw4QkFBYyxDQUFDLGNBQWM7d0JBQ3hDLElBQUksRUFBRSxDQUFDO3FCQUNSLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssMkNBQWtCLENBQUMsVUFBVSxFQUFFO3dCQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ3pELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQy9ELENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25DO29CQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELDBEQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ3BCLFVBQVUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUNELDZEQUF1QixHQUF2QixjQUEyQixDQUFDO0lBQzVCLG9EQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsT0FBTyxlQUFlLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDN0YsQ0FBQztJQUVELDREQUFzQixHQUF0QjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsMkNBQWtCLENBQUMsUUFBUTtZQUNqQyxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELDBEQUFvQixHQUFwQjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsMkNBQWtCLENBQUMsVUFBVTtZQUNuQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsR0FBRztTQUNkLENBQUM7SUFDSixDQUFDO0lBZEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzZFQU12QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzsyRUFRdEM7SUFDSCxrQ0FBQztDQTNERCxBQTJEQyxDQTNEZ0QscUNBQWlCLEdBMkRqRTtBQTNEWSxrRUFBMkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgQXV0b01lcmdlU3BlZWRUeXBlIH0gZnJvbSAnLi9TdGFydEF1dG9NZXJnZUJlaGF2aW9yJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJTdGFydEF1dG9NZXJnZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdGltZW91dCA9IDEwMDtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXMsXG4gICAgICBuID0gbnVsbCAhPT0gKHQgPSBlLmRhdGEudHlwZSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IFwiXCIsXG4gICAgICBpID0gdGhpcy5nZXRTcGVlZENvbmZpZyhuKSxcbiAgICAgIHIgPSBpLmluaXRpYWxEZWxheSxcbiAgICAgIGMgPSBmYWxzZSxcbiAgICAgIHUgPSBmdW5jdGlvbiB1KCkge1xuICAgICAgICB2YXIgZSwgdDtcbiAgICAgICAgaWYgKCFjKSB7XG4gICAgICAgICAgdmFyIHAgPSBvLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgICAgICAgIHAudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgICAgICAgIHAuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICAgICAgICB2YXIgZiA9IHAuZ2V0QWxsQ2FyZFRpbGVzKCk7XG4gICAgICAgICAgaWYgKCFmIHx8IGYubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGMgPSB0cnVlO1xuICAgICAgICAgICAgby5fb25BbGxQYWlyc0V4aGF1c3RlZChuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMkF1dG9NZXJnZSxcbiAgICAgICAgICAgICAgdHlwZTogblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaS50eXBlID09PSBBdXRvTWVyZ2VTcGVlZFR5cGUuQWNjZWxlcmF0ZSkge1xuICAgICAgICAgICAgICB2YXIgZCA9IG51bGwgIT09IChlID0gaS5taW5EZWxheSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDAuMSxcbiAgICAgICAgICAgICAgICBoID0gbnVsbCAhPT0gKHQgPSBpLmRlY3JlYXNlU3RlcCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDAuMDI7XG4gICAgICAgICAgICAgIHIgPiBkICYmIChyID0gTWF0aC5tYXgoZCwgciAtIGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8uY29udGV4dC5nYW1lVmlldy50aW1lckNvbXBvbmVudC5kb09uY2UociwgdSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIHUoKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIF9vbkFsbFBhaXJzRXhoYXVzdGVkKGUpIHtcbiAgICBcImFsbENsZWFyXCIgPT09IGUgJiYgdGhpcy5faGFuZGxlQWxsQ2xlYXJDb21wbGV0ZSgpO1xuICB9XG4gIF9oYW5kbGVBbGxDbGVhckNvbXBsZXRlKCkge31cbiAgZ2V0U3BlZWRDb25maWcoZSkge1xuICAgIHJldHVybiBcInRyYXZlbFZpY3RvcnlcIiA9PT0gZSA/IHRoaXMuZ2V0VHJhdmVsU3BlZWRDb25maWcoKSA6IHRoaXMuZ2V0TWFpbmxpbmVTcGVlZENvbmZpZygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTdEF1dG9NcmdCaHZfbWFpblNwZFwiKVxuICBnZXRNYWlubGluZVNwZWVkQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBBdXRvTWVyZ2VTcGVlZFR5cGUuQ29uc3RhbnQsXG4gICAgICBpbml0aWFsRGVsYXk6IDAuMzNcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTdEF1dG9NcmdCaHZfdHJ2U3BkXCIpXG4gIGdldFRyYXZlbFNwZWVkQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBBdXRvTWVyZ2VTcGVlZFR5cGUuQWNjZWxlcmF0ZSxcbiAgICAgIGluaXRpYWxEZWxheTogMC4zMyxcbiAgICAgIGRlY3JlYXNlU3RlcDogMC4wMixcbiAgICAgIG1pbkRlbGF5OiAwLjFcbiAgICB9O1xuICB9XG59Il19