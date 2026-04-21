
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/animation/manager/ShuffleAnimationManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d9b4OsimxIxKobPqMbcUSN', 'ShuffleAnimationManager');
// Scripts/animation/manager/ShuffleAnimationManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleAnimationManager = void 0;
var NodeAnimator_1 = require("../../animator/NodeAnimator");
var SpiralShuffleStrategy_1 = require("../../strategy/shuffle/SpiralShuffleStrategy");
var StackShuffleStrategy_1 = require("../../strategy/shuffle/StackShuffleStrategy");
var ShuffleAnimationManager = /** @class */ (function () {
    function ShuffleAnimationManager() {
        this.strategies = new Map();
        this.currentStrategyName = "SpiralShuffle";
        this.isPlaying = false;
        this.isStopped = false;
        this.registerStrategy(new SpiralShuffleStrategy_1.SpiralShuffleStrategy());
        this.registerStrategy(new StackShuffleStrategy_1.StackShuffleStrategy());
    }
    ShuffleAnimationManager.getInstance = function () {
        this.instance || (this.instance = new ShuffleAnimationManager());
        return this.instance;
    };
    ShuffleAnimationManager.prototype.registerStrategy = function (e) {
        var t = e.getName();
        this.strategies.has(t);
        this.strategies.set(t, e);
    };
    ShuffleAnimationManager.prototype.setStrategy = function (e) {
        this.strategies.has(e) && (this.currentStrategyName = e);
    };
    ShuffleAnimationManager.prototype.getCurrentStrategyName = function () {
        return this.currentStrategyName;
    };
    ShuffleAnimationManager.prototype.isAnimationPlaying = function () {
        return this.isPlaying;
    };
    ShuffleAnimationManager.prototype.play = function (e) {
        var t, o, i, r, a, l, s = this;
        if (this.isPlaying) {
            null === (o = null === (t = e.callbacks) || void 0 === t ? void 0 : t.onComplete) || void 0 === o || o.call(t);
            return Promise.resolve();
        }
        var c = e.context, u = e.timerComponent, p = e.callbacks, f = this.strategies.get(this.currentStrategyName);
        if (!f) {
            null === (i = null == p ? void 0 : p.onComplete) || void 0 === i || i.call(p);
            return Promise.resolve();
        }
        this.isPlaying = true;
        this.isStopped = false;
        var d = f.generateAnimationConfig(c);
        if (!d || !d.phases || 0 === d.phases.length) {
            this.isPlaying = false;
            null === (r = null == p ? void 0 : p.onStart) || void 0 === r || r.call(p);
            null === (a = null == p ? void 0 : p.onComplete) || void 0 === a || a.call(p);
            return Promise.resolve();
        }
        null === (l = null == p ? void 0 : p.onStart) || void 0 === l || l.call(p);
        return this.playPhases(d.phases, u, p).then(function () {
            var e;
            s.isPlaying = false;
            NodeAnimator_1.NodeAnimator.clearAnimatingNodes();
            null === (e = null == p ? void 0 : p.onComplete) || void 0 === e || e.call(p);
        }).catch(function (e) {
            var t;
            s.isPlaying = false;
            console.error("[ShuffleAnimationManager] 播放动画时发生错误:", e);
            NodeAnimator_1.NodeAnimator.clearAnimatingNodes();
            null === (t = null == p ? void 0 : p.onComplete) || void 0 === t || t.call(p);
        });
    };
    ShuffleAnimationManager.prototype.playPhases = function (e, t, o) {
        var n = this, i = Promise.resolve();
        e.forEach(function (e) {
            i = i.then(function () {
                return n.playPhase(e, t, o);
            });
        });
        return i;
    };
    ShuffleAnimationManager.prototype.playPhase = function (e, t, o) {
        var i = this;
        return new Promise(function (r) {
            var a;
            if (i.isStopped)
                r();
            else {
                null === (a = e.onPhaseStart) || void 0 === a || a.call(e);
                e.configs.forEach(function (e) {
                    NodeAnimator_1.NodeAnimator.execute(e);
                });
                t.doOnce(e.duration, function () {
                    var t, n;
                    if (i.isStopped)
                        r();
                    else {
                        null === (t = e.onPhaseComplete) || void 0 === t || t.call(e);
                        null === (n = null == o ? void 0 : o.onPhaseComplete) || void 0 === n || n.call(o, e.phase);
                        r();
                    }
                });
            }
        });
    };
    ShuffleAnimationManager.prototype.stop = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
            this.isStopped = true;
            NodeAnimator_1.NodeAnimator.stopAllAnimations();
        }
    };
    ShuffleAnimationManager.prototype.getAvailableStrategies = function () {
        return Array.from(this.strategies.keys());
    };
    ShuffleAnimationManager.instance = null;
    return ShuffleAnimationManager;
}());
exports.ShuffleAnimationManager = ShuffleAnimationManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaW1hdGlvbi9tYW5hZ2VyL1NodWZmbGVBbmltYXRpb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBQzNELHNGQUFxRjtBQUNyRixvRkFBbUY7QUFDbkY7SUFNRTtRQUxBLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFHLGVBQWUsQ0FBQztRQUN0QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksNkNBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLDJDQUFvQixFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ00sbUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELGtEQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELDZDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELHdEQUFzQixHQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELHNDQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0osSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUNmLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFD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QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUYsQ0FBQyxFQUFFLENBQUM7cUJBQ0w7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNDQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELHdEQUFzQixHQUF0QjtRQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXpHTSxnQ0FBUSxHQUFHLElBQUksQ0FBQztJQTBHekIsOEJBQUM7Q0EvR0QsQUErR0MsSUFBQTtBQS9HWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlQW5pbWF0b3IgfSBmcm9tICcuLi8uLi9hbmltYXRvci9Ob2RlQW5pbWF0b3InO1xuaW1wb3J0IHsgU3BpcmFsU2h1ZmZsZVN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vc3RyYXRlZ3kvc2h1ZmZsZS9TcGlyYWxTaHVmZmxlU3RyYXRlZ3knO1xuaW1wb3J0IHsgU3RhY2tTaHVmZmxlU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9zdHJhdGVneS9zaHVmZmxlL1N0YWNrU2h1ZmZsZVN0cmF0ZWd5JztcbmV4cG9ydCBjbGFzcyBTaHVmZmxlQW5pbWF0aW9uTWFuYWdlciB7XG4gIHN0cmF0ZWdpZXMgPSBuZXcgTWFwKCk7XG4gIGN1cnJlbnRTdHJhdGVneU5hbWUgPSBcIlNwaXJhbFNodWZmbGVcIjtcbiAgaXNQbGF5aW5nID0gZmFsc2U7XG4gIGlzU3RvcHBlZCA9IGZhbHNlO1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlZ2lzdGVyU3RyYXRlZ3kobmV3IFNwaXJhbFNodWZmbGVTdHJhdGVneSgpKTtcbiAgICB0aGlzLnJlZ2lzdGVyU3RyYXRlZ3kobmV3IFN0YWNrU2h1ZmZsZVN0cmF0ZWd5KCkpO1xuICB9XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICB0aGlzLmluc3RhbmNlIHx8ICh0aGlzLmluc3RhbmNlID0gbmV3IFNodWZmbGVBbmltYXRpb25NYW5hZ2VyKCkpO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG4gIHJlZ2lzdGVyU3RyYXRlZ3koZSkge1xuICAgIHZhciB0ID0gZS5nZXROYW1lKCk7XG4gICAgdGhpcy5zdHJhdGVnaWVzLmhhcyh0KTtcbiAgICB0aGlzLnN0cmF0ZWdpZXMuc2V0KHQsIGUpO1xuICB9XG4gIHNldFN0cmF0ZWd5KGUpIHtcbiAgICB0aGlzLnN0cmF0ZWdpZXMuaGFzKGUpICYmICh0aGlzLmN1cnJlbnRTdHJhdGVneU5hbWUgPSBlKTtcbiAgfVxuICBnZXRDdXJyZW50U3RyYXRlZ3lOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdHJhdGVneU5hbWU7XG4gIH1cbiAgaXNBbmltYXRpb25QbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlzUGxheWluZztcbiAgfVxuICBwbGF5KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgcixcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICBudWxsID09PSAobyA9IG51bGwgPT09ICh0ID0gZS5jYWxsYmFja3MpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQub25Db21wbGV0ZSkgfHwgdm9pZCAwID09PSBvIHx8IG8uY2FsbCh0KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgdmFyIGMgPSBlLmNvbnRleHQsXG4gICAgICB1ID0gZS50aW1lckNvbXBvbmVudCxcbiAgICAgIHAgPSBlLmNhbGxiYWNrcyxcbiAgICAgIGYgPSB0aGlzLnN0cmF0ZWdpZXMuZ2V0KHRoaXMuY3VycmVudFN0cmF0ZWd5TmFtZSk7XG4gICAgaWYgKCFmKSB7XG4gICAgICBudWxsID09PSAoaSA9IG51bGwgPT0gcCA/IHZvaWQgMCA6IHAub25Db21wbGV0ZSkgfHwgdm9pZCAwID09PSBpIHx8IGkuY2FsbChwKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgdmFyIGQgPSBmLmdlbmVyYXRlQW5pbWF0aW9uQ29uZmlnKGMpO1xuICAgIGlmICghZCB8fCAhZC5waGFzZXMgfHwgMCA9PT0gZC5waGFzZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgbnVsbCA9PT0gKHIgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLm9uU3RhcnQpIHx8IHZvaWQgMCA9PT0gciB8fCByLmNhbGwocCk7XG4gICAgICBudWxsID09PSAoYSA9IG51bGwgPT0gcCA/IHZvaWQgMCA6IHAub25Db21wbGV0ZSkgfHwgdm9pZCAwID09PSBhIHx8IGEuY2FsbChwKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgbnVsbCA9PT0gKGwgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLm9uU3RhcnQpIHx8IHZvaWQgMCA9PT0gbCB8fCBsLmNhbGwocCk7XG4gICAgcmV0dXJuIHRoaXMucGxheVBoYXNlcyhkLnBoYXNlcywgdSwgcCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZTtcbiAgICAgIHMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICBOb2RlQW5pbWF0b3IuY2xlYXJBbmltYXRpbmdOb2RlcygpO1xuICAgICAgbnVsbCA9PT0gKGUgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLm9uQ29tcGxldGUpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmNhbGwocCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0O1xuICAgICAgcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbU2h1ZmZsZUFuaW1hdGlvbk1hbmFnZXJdIOaSreaUvuWKqOeUu+aXtuWPkeeUn+mUmeivrzpcIiwgZSk7XG4gICAgICBOb2RlQW5pbWF0b3IuY2xlYXJBbmltYXRpbmdOb2RlcygpO1xuICAgICAgbnVsbCA9PT0gKHQgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLm9uQ29tcGxldGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNhbGwocCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVBoYXNlcyhlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgaSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaSA9IGkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuLnBsYXlQaGFzZShlLCB0LCBvKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBpO1xuICB9XG4gIHBsYXlQaGFzZShlLCB0LCBvKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocikge1xuICAgICAgdmFyIGE7XG4gICAgICBpZiAoaS5pc1N0b3BwZWQpIHIoKTtlbHNlIHtcbiAgICAgICAgbnVsbCA9PT0gKGEgPSBlLm9uUGhhc2VTdGFydCkgfHwgdm9pZCAwID09PSBhIHx8IGEuY2FsbChlKTtcbiAgICAgICAgZS5jb25maWdzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBOb2RlQW5pbWF0b3IuZXhlY3V0ZShlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHQuZG9PbmNlKGUuZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgdCwgbjtcbiAgICAgICAgICBpZiAoaS5pc1N0b3BwZWQpIHIoKTtlbHNlIHtcbiAgICAgICAgICAgIG51bGwgPT09ICh0ID0gZS5vblBoYXNlQ29tcGxldGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNhbGwoZSk7XG4gICAgICAgICAgICBudWxsID09PSAobiA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8ub25QaGFzZUNvbXBsZXRlKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5jYWxsKG8sIGUucGhhc2UpO1xuICAgICAgICAgICAgcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICBOb2RlQW5pbWF0b3Iuc3RvcEFsbEFuaW1hdGlvbnMoKTtcbiAgICB9XG4gIH1cbiAgZ2V0QXZhaWxhYmxlU3RyYXRlZ2llcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN0cmF0ZWdpZXMua2V5cygpKTtcbiAgfVxufSJdfQ==