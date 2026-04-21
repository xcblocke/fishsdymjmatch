"use strict";
cc._RF.push(module, 'e01c6kRKHBOoYHXHKhYN6q4', 'SpiralShuffleStrategy');
// Scripts/strategy/shuffle/SpiralShuffleStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiralShuffleStrategy = void 0;
var ShuffleAnimationConfig_1 = require("../../config/ShuffleAnimationConfig");
var SpiralShuffleStrategy = /** @class */ (function () {
    function SpiralShuffleStrategy() {
        this.GATHER_DURATION = 0.6;
        this.GATHER_LAYER_DELAY = 0.06;
        this.STAY_DURATION = 0.43;
        this.EXPAND_DURATION = 0.66;
        this.EXPAND_LAYER_DELAY = 0.06;
        this.SPIRAL_ROUNDS = 1;
        this.totalDuration = 0;
    }
    SpiralShuffleStrategy.prototype.getName = function () {
        return "SpiralShuffle";
    };
    SpiralShuffleStrategy.prototype.getGatherDuration = function () {
        return this.GATHER_DURATION;
    };
    SpiralShuffleStrategy.prototype.getStayDuration = function () {
        return this.STAY_DURATION;
    };
    SpiralShuffleStrategy.prototype.getExpandDuration = function () {
        return this.EXPAND_DURATION;
    };
    SpiralShuffleStrategy.prototype.generateAnimationConfig = function (e) {
        var t = [], o = this.generateGatherPhaseConfigs(e), n = this.calculateGatherPhaseDuration(e);
        t.push({
            phase: ShuffleAnimationConfig_1.EShufflePhase.Gather,
            configs: o,
            duration: n
        });
        t.push({
            phase: ShuffleAnimationConfig_1.EShufflePhase.Stay,
            configs: [],
            onPhaseComplete: function () {
                var t = e.onRebuild(e.tileNodes);
                e.tileNodes = t;
            },
            duration: this.getStayDuration()
        });
        var r = this.generateExpandPhaseConfigs(e), a = this.calculateExpandPhaseDuration(e);
        t.push({
            phase: ShuffleAnimationConfig_1.EShufflePhase.Expand,
            configs: r,
            duration: a
        });
        this.totalDuration = t.reduce(function (e, t) {
            return e + t.duration;
        }, 0);
        return {
            phases: t,
            totalDuration: this.totalDuration
        };
    };
    SpiralShuffleStrategy.prototype.calculateGatherPhaseDuration = function (e) {
        return (this.getLayerCount(e.tileNodes) - 1) * this.GATHER_LAYER_DELAY + this.getGatherDuration();
    };
    SpiralShuffleStrategy.prototype.calculateExpandPhaseDuration = function (e) {
        return (this.getLayerCount(e.tileNodes) - 1) * this.EXPAND_LAYER_DELAY + this.getExpandDuration();
    };
    SpiralShuffleStrategy.prototype.getLayerCount = function (e) {
        var t = new Set();
        e.forEach(function (e) {
            t.add(e.info.layerIndex || 0);
        });
        return t.size;
    };
    SpiralShuffleStrategy.prototype.generateGatherPhaseConfigs = function (e) {
        var t = this, o = [], n = e.tileNodes, i = e.centerPos, r = new Map();
        n.forEach(function (e) {
            var t = e.info.layerIndex || 0;
            r.has(t) || r.set(t, []);
            r.get(t).push(e);
        });
        var a = Array.from(r.keys()).sort(function (e, t) {
            return e - t;
        }), l = this.getGatherDuration();
        a.forEach(function (e, n) {
            var a = r.get(e), s = n * t.GATHER_LAYER_DELAY;
            a.forEach(function (n) {
                o.push({
                    node: n.cardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: i,
                    delay: s,
                    duration: l,
                    animationType: "spiralToCenter",
                    easing: "cubicIn",
                    metadata: {
                        layer: e,
                        row: 0,
                        col: 0,
                        isLeft: false
                    },
                    extraParams: {
                        centerPos: i,
                        rounds: t.SPIRAL_ROUNDS,
                        clockwise: true
                    }
                });
                o.push({
                    node: n.shadowCardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: i,
                    delay: s,
                    duration: l,
                    animationType: "spiralToCenter",
                    easing: "cubicIn",
                    metadata: {
                        layer: e,
                        row: 0,
                        col: 0,
                        isLeft: false
                    },
                    extraParams: {
                        centerPos: i,
                        rounds: t.SPIRAL_ROUNDS,
                        clockwise: true,
                        fadeOut: true
                    }
                });
            });
        });
        return o;
    };
    SpiralShuffleStrategy.prototype.generateExpandPhaseConfigs = function (e) {
        var t = this, o = [], n = e.tileNodes, i = e.centerPos, r = new Map();
        n.forEach(function (e) {
            var t = e.info.layerIndex || 0;
            r.has(t) || r.set(t, []);
            r.get(t).push(e);
        });
        var a = Array.from(r.keys()).sort(function (e, t) {
            return e - t;
        }), l = this.getExpandDuration();
        a.forEach(function (e, n) {
            var a = r.get(e), s = n * t.EXPAND_LAYER_DELAY;
            a.forEach(function (n) {
                var r = n.tileObject.getPosition();
                o.push({
                    node: n.cardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: r,
                    delay: s,
                    duration: l,
                    animationType: "spiralFromCenter",
                    easing: "customBackOut",
                    metadata: {
                        layer: e,
                        row: 0,
                        col: 0,
                        isLeft: false
                    },
                    extraParams: {
                        centerPos: i,
                        rounds: t.SPIRAL_ROUNDS,
                        clockwise: true
                    }
                });
                o.push({
                    node: n.shadowCardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: r,
                    delay: s,
                    duration: l,
                    animationType: "spiralFromCenter",
                    easing: "customBackOut",
                    metadata: {
                        layer: e,
                        row: 0,
                        col: 0,
                        isLeft: false
                    },
                    extraParams: {
                        centerPos: i,
                        rounds: t.SPIRAL_ROUNDS,
                        clockwise: true,
                        fadeIn: true
                    }
                });
            });
        });
        return o;
    };
    SpiralShuffleStrategy.prototype.getTotalDuration = function () {
        return this.totalDuration;
    };
    __decorate([
        mj.traitEvent("SpiralShfStgy_gaDur")
    ], SpiralShuffleStrategy.prototype, "getGatherDuration", null);
    __decorate([
        mj.traitEvent("SpiralShfStgy_stayDur")
    ], SpiralShuffleStrategy.prototype, "getStayDuration", null);
    __decorate([
        mj.traitEvent("SpiralShfStgy_expDur")
    ], SpiralShuffleStrategy.prototype, "getExpandDuration", null);
    return SpiralShuffleStrategy;
}());
exports.SpiralShuffleStrategy = SpiralShuffleStrategy;

cc._RF.pop();