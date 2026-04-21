
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/StartAutoMergeBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '554fdBErvBHWLTUHbRTjtEz', 'StartAutoMergeBehavior');
// Scripts/base/StartAutoMergeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAutoMergeBehavior = exports.AutoMergeSpeedType = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
exports.AutoMergeSpeedType = {
    Constant: "constant",
    Accelerate: "accelerate"
};
var StartAutoMergeBehavior = /** @class */ (function (_super) {
    __extends(StartAutoMergeBehavior, _super);
    function StartAutoMergeBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 100;
        return _this;
    }
    StartAutoMergeBehavior.prototype.start = function (e) {
        var t, o = this;
        (t = "travelVictory" === e.data.type ? this.getTravelVictorySkipConfig() : this.getSkipConfig()).canSkip && this.setupSkipLogic(e, t);
        var n = e.data.type, i = false, r = "travelVictory" === n ? this.getTravelSpeedConfig() : this.getMainlineSpeedConfig(), c = r.initialDelay, u = function u() {
            var e, t;
            if (!i) {
                var p = o.context.getTileMapObject().gameContext.fullComboChecker.getAllCardPair();
                if (p && 0 !== p.length) {
                    var f = p[0];
                    if (f && !(f.length < 2))
                        if (f[0].isValid && f[1].isValid) {
                            GameInteraction_1.GameInteraction.input({
                                inputType: GameInputEnum_1.EGameInputEnum.AutoMerge,
                                tileId1: f[0].id,
                                tileId2: f[1].id,
                                type: n
                            });
                            if (r.type === exports.AutoMergeSpeedType.Accelerate) {
                                var d = null !== (e = r.minDelay) && void 0 !== e ? e : 0.1, h = null !== (t = r.decreaseStep) && void 0 !== t ? t : 0.02;
                                c > d && (c = Math.max(d, c - h));
                            }
                            o.context.gameView.timerComponent.doOnce(c, u);
                        }
                        else
                            o.context.gameView.timerComponent.doOnce(0.05, u);
                }
                else {
                    i = true;
                    "travelVictory" === n && o.handleTravelVictoryComplete();
                }
            }
        };
        u();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    StartAutoMergeBehavior.prototype.setupSkipLogic = function (e, t) {
        var o = t.mode, n = t.delayTime;
        switch (o) {
            case 0:
                this.registerImmediateSkip(e);
                break;
            case 1:
                this.registerClickThenDelaySkip(e, n);
                break;
            case 2:
                this.registerDelayThenClickSkip(e, n);
        }
    };
    StartAutoMergeBehavior.prototype.registerImmediateSkip = function (e) {
        var t = this;
        this._context.gameView.registerScreenTouchEnd(function (o) {
            o.stopPropagation();
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.SkipAutoMerge,
                type: e.data.type
            });
            t._context.gameView.unregisterScreenTouchEnd();
        });
    };
    StartAutoMergeBehavior.prototype.registerClickThenDelaySkip = function (e, t) {
        var o = this, n = false;
        this._context.gameView.registerScreenTouchEnd(function (i) {
            i.stopPropagation();
            if (!n) {
                n = true;
                var r = function r() {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.SkipAutoMerge,
                        type: e.data.type
                    });
                    n = false;
                };
                o._context.gameView.unregisterScreenTouchEnd();
                o.context.gameView.timerComponent.doOnce(t, r);
                o.context.registerAutoMergeTimer(r);
            }
        });
    };
    StartAutoMergeBehavior.prototype.registerDelayThenClickSkip = function (e, t) {
        var o = this, n = function n() {
            o._context.gameView.registerScreenTouchEnd(function (t) {
                t.stopPropagation();
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.SkipAutoMerge,
                    type: e.data.type
                });
                o._context.gameView.unregisterScreenTouchEnd();
            });
        };
        this.context.gameView.timerComponent.doOnce(t, n);
        this.context.registerAutoMergeTimer(n);
    };
    StartAutoMergeBehavior.prototype.getSkipConfig = function () {
        return {
            canSkip: true,
            mode: 0,
            delayTime: 3
        };
    };
    StartAutoMergeBehavior.prototype.getTravelVictorySkipConfig = function () {
        return {
            canSkip: false,
            mode: 0,
            delayTime: 2
        };
    };
    StartAutoMergeBehavior.prototype.handleTravelVictoryComplete = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.TravelEnd
        });
    };
    StartAutoMergeBehavior.prototype.getMainlineSpeedConfig = function () {
        return {
            type: exports.AutoMergeSpeedType.Constant,
            initialDelay: 0.33
        };
    };
    StartAutoMergeBehavior.prototype.getTravelSpeedConfig = function () {
        return {
            type: exports.AutoMergeSpeedType.Accelerate,
            initialDelay: 0.33,
            decreaseStep: 0.02,
            minDelay: 0.1
        };
    };
    __decorate([
        mj.traitEvent("StAutoMrgBhv_skipCfg")
    ], StartAutoMergeBehavior.prototype, "getSkipConfig", null);
    __decorate([
        mj.traitEvent("StAutoMrgBhv_trvSkip")
    ], StartAutoMergeBehavior.prototype, "getTravelVictorySkipConfig", null);
    __decorate([
        mj.traitEvent("StAutoMrgBhv_mainSpd")
    ], StartAutoMergeBehavior.prototype, "getMainlineSpeedConfig", null);
    __decorate([
        mj.traitEvent("StAutoMrgBhv_trvSpd")
    ], StartAutoMergeBehavior.prototype, "getTravelSpeedConfig", null);
    return StartAutoMergeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.StartAutoMergeBehavior = StartAutoMergeBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU3RhcnRBdXRvTWVyZ2VCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRjtBQUNwRixzRUFBcUU7QUFDckUseURBQXdEO0FBQzdDLFFBQUEsa0JBQWtCLEdBQUc7SUFDOUIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7Q0FDekIsQ0FBQztBQUNGO0lBQTRDLDBDQUFpQjtJQUE3RDtRQUFBLHFFQXdJQztRQXZJQyxjQUFRLEdBQUcsR0FBRyxDQUFDOztJQXVJakIsQ0FBQztJQXRJQyxzQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUMsR0FBRyxlQUFlLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2pCLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLGVBQWUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFDdkYsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQ2xCLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FB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LE9BQU87WUFDTCxJQUFJLEVBQUUsMEJBQWtCLENBQUMsVUFBVTtZQUNuQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsR0FBRztTQUNkLENBQUM7SUFDSixDQUFDO0lBbkNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzsrREFPckM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7NEVBT3JDO0lBT0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3dFQU1yQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztzRUFRcEM7SUFDSCw2QkFBQztDQXhJRCxBQXdJQyxDQXhJMkMscUNBQWlCLEdBd0k1RDtBQXhJWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCB2YXIgQXV0b01lcmdlU3BlZWRUeXBlID0ge1xuICBDb25zdGFudDogXCJjb25zdGFudFwiLFxuICBBY2NlbGVyYXRlOiBcImFjY2VsZXJhdGVcIlxufTtcbmV4cG9ydCBjbGFzcyBTdGFydEF1dG9NZXJnZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdGltZW91dCA9IDEwMDtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXM7XG4gICAgKHQgPSBcInRyYXZlbFZpY3RvcnlcIiA9PT0gZS5kYXRhLnR5cGUgPyB0aGlzLmdldFRyYXZlbFZpY3RvcnlTa2lwQ29uZmlnKCkgOiB0aGlzLmdldFNraXBDb25maWcoKSkuY2FuU2tpcCAmJiB0aGlzLnNldHVwU2tpcExvZ2ljKGUsIHQpO1xuICAgIHZhciBuID0gZS5kYXRhLnR5cGUsXG4gICAgICBpID0gZmFsc2UsXG4gICAgICByID0gXCJ0cmF2ZWxWaWN0b3J5XCIgPT09IG4gPyB0aGlzLmdldFRyYXZlbFNwZWVkQ29uZmlnKCkgOiB0aGlzLmdldE1haW5saW5lU3BlZWRDb25maWcoKSxcbiAgICAgIGMgPSByLmluaXRpYWxEZWxheSxcbiAgICAgIHUgPSBmdW5jdGlvbiB1KCkge1xuICAgICAgICB2YXIgZSwgdDtcbiAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgdmFyIHAgPSBvLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdhbWVDb250ZXh0LmZ1bGxDb21ib0NoZWNrZXIuZ2V0QWxsQ2FyZFBhaXIoKTtcbiAgICAgICAgICBpZiAocCAmJiAwICE9PSBwLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGYgPSBwWzBdO1xuICAgICAgICAgICAgaWYgKGYgJiYgIShmLmxlbmd0aCA8IDIpKSBpZiAoZlswXS5pc1ZhbGlkICYmIGZbMV0uaXNWYWxpZCkge1xuICAgICAgICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQXV0b01lcmdlLFxuICAgICAgICAgICAgICAgIHRpbGVJZDE6IGZbMF0uaWQsXG4gICAgICAgICAgICAgICAgdGlsZUlkMjogZlsxXS5pZCxcbiAgICAgICAgICAgICAgICB0eXBlOiBuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoci50eXBlID09PSBBdXRvTWVyZ2VTcGVlZFR5cGUuQWNjZWxlcmF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbnVsbCAhPT0gKGUgPSByLm1pbkRlbGF5KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMC4xLFxuICAgICAgICAgICAgICAgICAgaCA9IG51bGwgIT09ICh0ID0gci5kZWNyZWFzZVN0ZXApICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwLjAyO1xuICAgICAgICAgICAgICAgIGMgPiBkICYmIChjID0gTWF0aC5tYXgoZCwgYyAtIGgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvLmNvbnRleHQuZ2FtZVZpZXcudGltZXJDb21wb25lbnQuZG9PbmNlKGMsIHUpO1xuICAgICAgICAgICAgfSBlbHNlIG8uY29udGV4dC5nYW1lVmlldy50aW1lckNvbXBvbmVudC5kb09uY2UoMC4wNSwgdSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkgPSB0cnVlO1xuICAgICAgICAgICAgXCJ0cmF2ZWxWaWN0b3J5XCIgPT09IG4gJiYgby5oYW5kbGVUcmF2ZWxWaWN0b3J5Q29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgdSgpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgc2V0dXBTa2lwTG9naWMoZSwgdCkge1xuICAgIHZhciBvID0gdC5tb2RlLFxuICAgICAgbiA9IHQuZGVsYXlUaW1lO1xuICAgIHN3aXRjaCAobykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0aGlzLnJlZ2lzdGVySW1tZWRpYXRlU2tpcChlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMucmVnaXN0ZXJDbGlja1RoZW5EZWxheVNraXAoZSwgbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLnJlZ2lzdGVyRGVsYXlUaGVuQ2xpY2tTa2lwKGUsIG4pO1xuICAgIH1cbiAgfVxuICByZWdpc3RlckltbWVkaWF0ZVNraXAoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl9jb250ZXh0LmdhbWVWaWV3LnJlZ2lzdGVyU2NyZWVuVG91Y2hFbmQoZnVuY3Rpb24gKG8pIHtcbiAgICAgIG8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlNraXBBdXRvTWVyZ2UsXG4gICAgICAgIHR5cGU6IGUuZGF0YS50eXBlXG4gICAgICB9KTtcbiAgICAgIHQuX2NvbnRleHQuZ2FtZVZpZXcudW5yZWdpc3RlclNjcmVlblRvdWNoRW5kKCk7XG4gICAgfSk7XG4gIH1cbiAgcmVnaXN0ZXJDbGlja1RoZW5EZWxheVNraXAoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcyxcbiAgICAgIG4gPSBmYWxzZTtcbiAgICB0aGlzLl9jb250ZXh0LmdhbWVWaWV3LnJlZ2lzdGVyU2NyZWVuVG91Y2hFbmQoZnVuY3Rpb24gKGkpIHtcbiAgICAgIGkuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIW4pIHtcbiAgICAgICAgbiA9IHRydWU7XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24gcigpIHtcbiAgICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ta2lwQXV0b01lcmdlLFxuICAgICAgICAgICAgdHlwZTogZS5kYXRhLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIG8uX2NvbnRleHQuZ2FtZVZpZXcudW5yZWdpc3RlclNjcmVlblRvdWNoRW5kKCk7XG4gICAgICAgIG8uY29udGV4dC5nYW1lVmlldy50aW1lckNvbXBvbmVudC5kb09uY2UodCwgcik7XG4gICAgICAgIG8uY29udGV4dC5yZWdpc3RlckF1dG9NZXJnZVRpbWVyKHIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlZ2lzdGVyRGVsYXlUaGVuQ2xpY2tTa2lwKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMsXG4gICAgICBuID0gZnVuY3Rpb24gbigpIHtcbiAgICAgICAgby5fY29udGV4dC5nYW1lVmlldy5yZWdpc3RlclNjcmVlblRvdWNoRW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5Ta2lwQXV0b01lcmdlLFxuICAgICAgICAgICAgdHlwZTogZS5kYXRhLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvLl9jb250ZXh0LmdhbWVWaWV3LnVucmVnaXN0ZXJTY3JlZW5Ub3VjaEVuZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnRpbWVyQ29tcG9uZW50LmRvT25jZSh0LCBuKTtcbiAgICB0aGlzLmNvbnRleHQucmVnaXN0ZXJBdXRvTWVyZ2VUaW1lcihuKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlN0QXV0b01yZ0Jodl9za2lwQ2ZnXCIpXG4gIGdldFNraXBDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhblNraXA6IHRydWUsXG4gICAgICBtb2RlOiAwLFxuICAgICAgZGVsYXlUaW1lOiAzXG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlN0QXV0b01yZ0Jodl90cnZTa2lwXCIpXG4gIGdldFRyYXZlbFZpY3RvcnlTa2lwQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYW5Ta2lwOiBmYWxzZSxcbiAgICAgIG1vZGU6IDAsXG4gICAgICBkZWxheVRpbWU6IDJcbiAgICB9O1xuICB9XG4gIGhhbmRsZVRyYXZlbFZpY3RvcnlDb21wbGV0ZSgpIHtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UcmF2ZWxFbmRcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlN0QXV0b01yZ0Jodl9tYWluU3BkXCIpXG4gIGdldE1haW5saW5lU3BlZWRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEF1dG9NZXJnZVNwZWVkVHlwZS5Db25zdGFudCxcbiAgICAgIGluaXRpYWxEZWxheTogMC4zM1xuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTdEF1dG9NcmdCaHZfdHJ2U3BkXCIpXG4gIGdldFRyYXZlbFNwZWVkQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBBdXRvTWVyZ2VTcGVlZFR5cGUuQWNjZWxlcmF0ZSxcbiAgICAgIGluaXRpYWxEZWxheTogMC4zMyxcbiAgICAgIGRlY3JlYXNlU3RlcDogMC4wMixcbiAgICAgIG1pbkRlbGF5OiAwLjFcbiAgICB9O1xuICB9XG59Il19