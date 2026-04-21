
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/animation/manager/EnterAnimationManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d15faSMyBAUZMTSlPO8X9j', 'EnterAnimationManager');
// Scripts/animation/manager/EnterAnimationManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationManager = void 0;
var NodeAnimator_1 = require("../../animator/NodeAnimator");
var CrossLayerEnterStrategy_1 = require("../../strategy/CrossLayerEnterStrategy");
var CenterRadialEnterStrategy_1 = require("../../strategy/CenterRadialEnterStrategy");
var TopDropEnterStrategy_1 = require("../../strategy/TopDropEnterStrategy");
var RowByRowEnterStrategy_1 = require("../../strategy/RowByRowEnterStrategy");
var TopMaskEnterStrategy_1 = require("../../strategy/TopMaskEnterStrategy");
var EnterAnimationManager = /** @class */ (function () {
    function EnterAnimationManager() {
        this.strategies = new Map();
        this.currentStrategyName = "CrossLayerEnter";
        this.isPlaying = false;
        NodeAnimator_1.NodeAnimator.init();
        this.registerStrategy(new CenterRadialEnterStrategy_1.CenterRadialEnterStrategy());
        this.registerStrategy(new CrossLayerEnterStrategy_1.CrossLayerEnterStrategy());
        this.registerStrategy(new TopDropEnterStrategy_1.TopDropEnterStrategy());
        this.registerStrategy(new RowByRowEnterStrategy_1.RowByRowEnterStrategy());
        this.registerStrategy(new TopMaskEnterStrategy_1.TopMaskEnterStrategy());
    }
    EnterAnimationManager.getInstance = function () {
        this.instance || (this.instance = new EnterAnimationManager());
        return this.instance;
    };
    EnterAnimationManager.prototype.registerStrategy = function (e) {
        var t = e.getName();
        this.strategies.has(t);
        this.strategies.set(t, e);
    };
    EnterAnimationManager.prototype.setStrategy = function (e) {
        this.strategies.has(e) && (this.currentStrategyName = e);
    };
    EnterAnimationManager.prototype.getCurrentStrategyName = function () {
        return this.currentStrategyName;
    };
    EnterAnimationManager.prototype.isAnimationPlaying = function () {
        return this.isPlaying;
    };
    EnterAnimationManager.prototype.play = function (e) {
        var t, o, i, r, a, l, s, c = this;
        if (this.isPlaying)
            null === (o = null === (t = e.callbacks) || void 0 === t ? void 0 : t.onComplete) || void 0 === o || o.call(t);
        else {
            var u = e.context, p = e.timerComponent, f = e.callbacks, d = this.currentStrategyName, h = this.strategies.get(d);
            if (h) {
                this.isPlaying = true;
                try {
                    var y = h.generateAnimationConfigs(u);
                    if (!y || 0 === y.length) {
                        this.isPlaying = false;
                        null === (r = null == f ? void 0 : f.onStart) || void 0 === r || r.call(f);
                        null === (a = null == f ? void 0 : f.onComplete) || void 0 === a || a.call(f);
                        return;
                    }
                    null === (l = null == f ? void 0 : f.onStart) || void 0 === l || l.call(f);
                    y.forEach(function (e) {
                        NodeAnimator_1.NodeAnimator.execute(e);
                    });
                    var m = h.getTotalDuration();
                    p.doOnce(m, function () {
                        var e;
                        c.isPlaying = false;
                        NodeAnimator_1.NodeAnimator.clearAnimatingNodes();
                        null === (e = null == f ? void 0 : f.onComplete) || void 0 === e || e.call(f);
                    });
                }
                catch (e) {
                    this.isPlaying = false;
                    console.error("[EnterAnimationManager] 播放动画时发生错误:", e);
                    null === (s = null == f ? void 0 : f.onComplete) || void 0 === s || s.call(f);
                }
            }
            else
                null === (i = null == f ? void 0 : f.onComplete) || void 0 === i || i.call(f);
        }
    };
    EnterAnimationManager.prototype.stop = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
            NodeAnimator_1.NodeAnimator.stopAllAnimations();
        }
    };
    EnterAnimationManager.prototype.getAvailableStrategies = function () {
        return Array.from(this.strategies.keys());
    };
    EnterAnimationManager.instance = null;
    return EnterAnimationManager;
}());
exports.EnterAnimationManager = EnterAnimationManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaW1hdGlvbi9tYW5hZ2VyL0VudGVyQW5pbWF0aW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUMzRCxrRkFBaUY7QUFDakYsc0ZBQXFGO0FBQ3JGLDRFQUEyRTtBQUMzRSw4RUFBNkU7QUFDN0UsNEVBQTJFO0FBQzNFO0lBS0U7UUFKQSxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2Qix3QkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztRQUN4QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2hCLDJCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUkscURBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLGlEQUF1QixFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksNkNBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLDJDQUFvQixFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ00saUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUMvRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELGdEQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMs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QUUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFDRCxzREFBc0IsR0FBdEI7UUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUEvRU0sOEJBQVEsR0FBRyxJQUFJLENBQUM7SUFnRnpCLDRCQUFDO0NBcEZELEFBb0ZDLElBQUE7QUFwRlksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZUFuaW1hdG9yIH0gZnJvbSAnLi4vLi4vYW5pbWF0b3IvTm9kZUFuaW1hdG9yJztcbmltcG9ydCB7IENyb3NzTGF5ZXJFbnRlclN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vc3RyYXRlZ3kvQ3Jvc3NMYXllckVudGVyU3RyYXRlZ3knO1xuaW1wb3J0IHsgQ2VudGVyUmFkaWFsRW50ZXJTdHJhdGVneSB9IGZyb20gJy4uLy4uL3N0cmF0ZWd5L0NlbnRlclJhZGlhbEVudGVyU3RyYXRlZ3knO1xuaW1wb3J0IHsgVG9wRHJvcEVudGVyU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zdHJhdGVneS9Ub3BEcm9wRW50ZXJTdHJhdGVneSc7XG5pbXBvcnQgeyBSb3dCeVJvd0VudGVyU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zdHJhdGVneS9Sb3dCeVJvd0VudGVyU3RyYXRlZ3knO1xuaW1wb3J0IHsgVG9wTWFza0VudGVyU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zdHJhdGVneS9Ub3BNYXNrRW50ZXJTdHJhdGVneSc7XG5leHBvcnQgY2xhc3MgRW50ZXJBbmltYXRpb25NYW5hZ2VyIHtcbiAgc3RyYXRlZ2llcyA9IG5ldyBNYXAoKTtcbiAgY3VycmVudFN0cmF0ZWd5TmFtZSA9IFwiQ3Jvc3NMYXllckVudGVyXCI7XG4gIGlzUGxheWluZyA9IGZhbHNlO1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBOb2RlQW5pbWF0b3IuaW5pdCgpO1xuICAgIHRoaXMucmVnaXN0ZXJTdHJhdGVneShuZXcgQ2VudGVyUmFkaWFsRW50ZXJTdHJhdGVneSgpKTtcbiAgICB0aGlzLnJlZ2lzdGVyU3RyYXRlZ3kobmV3IENyb3NzTGF5ZXJFbnRlclN0cmF0ZWd5KCkpO1xuICAgIHRoaXMucmVnaXN0ZXJTdHJhdGVneShuZXcgVG9wRHJvcEVudGVyU3RyYXRlZ3koKSk7XG4gICAgdGhpcy5yZWdpc3RlclN0cmF0ZWd5KG5ldyBSb3dCeVJvd0VudGVyU3RyYXRlZ3koKSk7XG4gICAgdGhpcy5yZWdpc3RlclN0cmF0ZWd5KG5ldyBUb3BNYXNrRW50ZXJTdHJhdGVneSgpKTtcbiAgfVxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSB8fCAodGhpcy5pbnN0YW5jZSA9IG5ldyBFbnRlckFuaW1hdGlvbk1hbmFnZXIoKSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbiAgcmVnaXN0ZXJTdHJhdGVneShlKSB7XG4gICAgdmFyIHQgPSBlLmdldE5hbWUoKTtcbiAgICB0aGlzLnN0cmF0ZWdpZXMuaGFzKHQpO1xuICAgIHRoaXMuc3RyYXRlZ2llcy5zZXQodCwgZSk7XG4gIH1cbiAgc2V0U3RyYXRlZ3koZSkge1xuICAgIHRoaXMuc3RyYXRlZ2llcy5oYXMoZSkgJiYgKHRoaXMuY3VycmVudFN0cmF0ZWd5TmFtZSA9IGUpO1xuICB9XG4gIGdldEN1cnJlbnRTdHJhdGVneU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0cmF0ZWd5TmFtZTtcbiAgfVxuICBpc0FuaW1hdGlvblBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQbGF5aW5nO1xuICB9XG4gIHBsYXkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSBudWxsID09PSAobyA9IG51bGwgPT09ICh0ID0gZS5jYWxsYmFja3MpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQub25Db21wbGV0ZSkgfHwgdm9pZCAwID09PSBvIHx8IG8uY2FsbCh0KTtlbHNlIHtcbiAgICAgIHZhciB1ID0gZS5jb250ZXh0LFxuICAgICAgICBwID0gZS50aW1lckNvbXBvbmVudCxcbiAgICAgICAgZiA9IGUuY2FsbGJhY2tzLFxuICAgICAgICBkID0gdGhpcy5jdXJyZW50U3RyYXRlZ3lOYW1lLFxuICAgICAgICBoID0gdGhpcy5zdHJhdGVnaWVzLmdldChkKTtcbiAgICAgIGlmIChoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgeSA9IGguZ2VuZXJhdGVBbmltYXRpb25Db25maWdzKHUpO1xuICAgICAgICAgIGlmICgheSB8fCAwID09PSB5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIG51bGwgPT09IChyID0gbnVsbCA9PSBmID8gdm9pZCAwIDogZi5vblN0YXJ0KSB8fCB2b2lkIDAgPT09IHIgfHwgci5jYWxsKGYpO1xuICAgICAgICAgICAgbnVsbCA9PT0gKGEgPSBudWxsID09IGYgPyB2b2lkIDAgOiBmLm9uQ29tcGxldGUpIHx8IHZvaWQgMCA9PT0gYSB8fCBhLmNhbGwoZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bGwgPT09IChsID0gbnVsbCA9PSBmID8gdm9pZCAwIDogZi5vblN0YXJ0KSB8fCB2b2lkIDAgPT09IGwgfHwgbC5jYWxsKGYpO1xuICAgICAgICAgIHkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgTm9kZUFuaW1hdG9yLmV4ZWN1dGUoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIG0gPSBoLmdldFRvdGFsRHVyYXRpb24oKTtcbiAgICAgICAgICBwLmRvT25jZShtLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIGMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBOb2RlQW5pbWF0b3IuY2xlYXJBbmltYXRpbmdOb2RlcygpO1xuICAgICAgICAgICAgbnVsbCA9PT0gKGUgPSBudWxsID09IGYgPyB2b2lkIDAgOiBmLm9uQ29tcGxldGUpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmNhbGwoZik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbRW50ZXJBbmltYXRpb25NYW5hZ2VyXSDmkq3mlL7liqjnlLvml7blj5HnlJ/plJnor686XCIsIGUpO1xuICAgICAgICAgIG51bGwgPT09IChzID0gbnVsbCA9PSBmID8gdm9pZCAwIDogZi5vbkNvbXBsZXRlKSB8fCB2b2lkIDAgPT09IHMgfHwgcy5jYWxsKGYpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgbnVsbCA9PT0gKGkgPSBudWxsID09IGYgPyB2b2lkIDAgOiBmLm9uQ29tcGxldGUpIHx8IHZvaWQgMCA9PT0gaSB8fCBpLmNhbGwoZik7XG4gICAgfVxuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgTm9kZUFuaW1hdG9yLnN0b3BBbGxBbmltYXRpb25zKCk7XG4gICAgfVxuICB9XG4gIGdldEF2YWlsYWJsZVN0cmF0ZWdpZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zdHJhdGVnaWVzLmtleXMoKSk7XG4gIH1cbn0iXX0=