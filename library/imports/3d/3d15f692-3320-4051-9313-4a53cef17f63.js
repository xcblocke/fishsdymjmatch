"use strict";
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