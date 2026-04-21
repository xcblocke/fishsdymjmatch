"use strict";
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