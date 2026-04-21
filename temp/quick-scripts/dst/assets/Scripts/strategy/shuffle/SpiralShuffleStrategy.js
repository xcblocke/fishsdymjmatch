
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/strategy/shuffle/SpiralShuffleStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3N0cmF0ZWd5L3NodWZmbGUvU3BpcmFsU2h1ZmZsZVN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQW9FO0FBQ3BFO0lBQUE7UUFDRSxvQkFBZSxHQUFHLEdBQUcsQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBa01wQixDQUFDO0lBak1DLHVDQUFPLEdBQVA7UUFDRSxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELHVEQUF1QixHQUF2QixVQUF3QixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxFQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLLEVBQUUsc0NBQWEsQ0FBQyxNQUFNO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0wsS0FBSyxFQUFFLHNDQUFhLENBQUMsSUFBSTtZQUN6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TUFBTSxFQUFFLGVBQWU7b0JBQ3ZCLFFBQVEsRUFBRTt3QkFDUixLQUFLLEVBQUUsQ0FBQzt3QkFDUixHQUFHLEVBQUUsQ0FBQzt3QkFDTixHQUFHLEVBQUUsQ0FBQzt3QkFDTixNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxXQUFXLEVBQUU7d0JBQ1gsU0FBUyxFQUFFLENBQUM7d0JBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhO3dCQUN2QixTQUFTLEVBQUUsSUFBSTt3QkFDZixNQUFNLEVBQUUsSUFBSTtxQkFDYjtpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsZ0RBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUE1TEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2tFQUdwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztnRUFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7a0VBR3JDO0lBbUxILDRCQUFDO0NBek1ELEFBeU1DLElBQUE7QUF6TVksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVNodWZmbGVQaGFzZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9TaHVmZmxlQW5pbWF0aW9uQ29uZmlnJztcbmV4cG9ydCBjbGFzcyBTcGlyYWxTaHVmZmxlU3RyYXRlZ3kge1xuICBHQVRIRVJfRFVSQVRJT04gPSAwLjY7XG4gIEdBVEhFUl9MQVlFUl9ERUxBWSA9IDAuMDY7XG4gIFNUQVlfRFVSQVRJT04gPSAwLjQzO1xuICBFWFBBTkRfRFVSQVRJT04gPSAwLjY2O1xuICBFWFBBTkRfTEFZRVJfREVMQVkgPSAwLjA2O1xuICBTUElSQUxfUk9VTkRTID0gMTtcbiAgdG90YWxEdXJhdGlvbiA9IDA7XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIFwiU3BpcmFsU2h1ZmZsZVwiO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU3BpcmFsU2hmU3RneV9nYUR1clwiKVxuICBnZXRHYXRoZXJEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5HQVRIRVJfRFVSQVRJT047XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTcGlyYWxTaGZTdGd5X3N0YXlEdXJcIilcbiAgZ2V0U3RheUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLlNUQVlfRFVSQVRJT047XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTcGlyYWxTaGZTdGd5X2V4cER1clwiKVxuICBnZXRFeHBhbmREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5FWFBBTkRfRFVSQVRJT047XG4gIH1cbiAgZ2VuZXJhdGVBbmltYXRpb25Db25maWcoZSkge1xuICAgIHZhciB0ID0gW10sXG4gICAgICBvID0gdGhpcy5nZW5lcmF0ZUdhdGhlclBoYXNlQ29uZmlncyhlKSxcbiAgICAgIG4gPSB0aGlzLmNhbGN1bGF0ZUdhdGhlclBoYXNlRHVyYXRpb24oZSk7XG4gICAgdC5wdXNoKHtcbiAgICAgIHBoYXNlOiBFU2h1ZmZsZVBoYXNlLkdhdGhlcixcbiAgICAgIGNvbmZpZ3M6IG8sXG4gICAgICBkdXJhdGlvbjogblxuICAgIH0pO1xuICAgIHQucHVzaCh7XG4gICAgICBwaGFzZTogRVNodWZmbGVQaGFzZS5TdGF5LFxuICAgICAgY29uZmlnczogW10sXG4gICAgICBvblBoYXNlQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBlLm9uUmVidWlsZChlLnRpbGVOb2Rlcyk7XG4gICAgICAgIGUudGlsZU5vZGVzID0gdDtcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjogdGhpcy5nZXRTdGF5RHVyYXRpb24oKVxuICAgIH0pO1xuICAgIHZhciByID0gdGhpcy5nZW5lcmF0ZUV4cGFuZFBoYXNlQ29uZmlncyhlKSxcbiAgICAgIGEgPSB0aGlzLmNhbGN1bGF0ZUV4cGFuZFBoYXNlRHVyYXRpb24oZSk7XG4gICAgdC5wdXNoKHtcbiAgICAgIHBoYXNlOiBFU2h1ZmZsZVBoYXNlLkV4cGFuZCxcbiAgICAgIGNvbmZpZ3M6IHIsXG4gICAgICBkdXJhdGlvbjogYVxuICAgIH0pO1xuICAgIHRoaXMudG90YWxEdXJhdGlvbiA9IHQucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZSArIHQuZHVyYXRpb247XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBoYXNlczogdCxcbiAgICAgIHRvdGFsRHVyYXRpb246IHRoaXMudG90YWxEdXJhdGlvblxuICAgIH07XG4gIH1cbiAgY2FsY3VsYXRlR2F0aGVyUGhhc2VEdXJhdGlvbihlKSB7XG4gICAgcmV0dXJuICh0aGlzLmdldExheWVyQ291bnQoZS50aWxlTm9kZXMpIC0gMSkgKiB0aGlzLkdBVEhFUl9MQVlFUl9ERUxBWSArIHRoaXMuZ2V0R2F0aGVyRHVyYXRpb24oKTtcbiAgfVxuICBjYWxjdWxhdGVFeHBhbmRQaGFzZUR1cmF0aW9uKGUpIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0TGF5ZXJDb3VudChlLnRpbGVOb2RlcykgLSAxKSAqIHRoaXMuRVhQQU5EX0xBWUVSX0RFTEFZICsgdGhpcy5nZXRFeHBhbmREdXJhdGlvbigpO1xuICB9XG4gIGdldExheWVyQ291bnQoZSkge1xuICAgIHZhciB0ID0gbmV3IFNldCgpO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdC5hZGQoZS5pbmZvLmxheWVySW5kZXggfHwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHQuc2l6ZTtcbiAgfVxuICBnZW5lcmF0ZUdhdGhlclBoYXNlQ29uZmlncyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IFtdLFxuICAgICAgbiA9IGUudGlsZU5vZGVzLFxuICAgICAgaSA9IGUuY2VudGVyUG9zLFxuICAgICAgciA9IG5ldyBNYXAoKTtcbiAgICBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZS5pbmZvLmxheWVySW5kZXggfHwgMDtcbiAgICAgIHIuaGFzKHQpIHx8IHIuc2V0KHQsIFtdKTtcbiAgICAgIHIuZ2V0KHQpLnB1c2goZSk7XG4gICAgfSk7XG4gICAgdmFyIGEgPSBBcnJheS5mcm9tKHIua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlIC0gdDtcbiAgICAgIH0pLFxuICAgICAgbCA9IHRoaXMuZ2V0R2F0aGVyRHVyYXRpb24oKTtcbiAgICBhLmZvckVhY2goZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgIHZhciBhID0gci5nZXQoZSksXG4gICAgICAgIHMgPSBuICogdC5HQVRIRVJfTEFZRVJfREVMQVk7XG4gICAgICBhLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgby5wdXNoKHtcbiAgICAgICAgICBub2RlOiBuLmNhcmROb2RlLFxuICAgICAgICAgIHN0YXJ0T2Zmc2V0OiBjYy52MigwLCAwKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbjogaSxcbiAgICAgICAgICBkZWxheTogcyxcbiAgICAgICAgICBkdXJhdGlvbjogbCxcbiAgICAgICAgICBhbmltYXRpb25UeXBlOiBcInNwaXJhbFRvQ2VudGVyXCIsXG4gICAgICAgICAgZWFzaW5nOiBcImN1YmljSW5cIixcbiAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgbGF5ZXI6IGUsXG4gICAgICAgICAgICByb3c6IDAsXG4gICAgICAgICAgICBjb2w6IDAsXG4gICAgICAgICAgICBpc0xlZnQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHRyYVBhcmFtczoge1xuICAgICAgICAgICAgY2VudGVyUG9zOiBpLFxuICAgICAgICAgICAgcm91bmRzOiB0LlNQSVJBTF9ST1VORFMsXG4gICAgICAgICAgICBjbG9ja3dpc2U6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvLnB1c2goe1xuICAgICAgICAgIG5vZGU6IG4uc2hhZG93Q2FyZE5vZGUsXG4gICAgICAgICAgc3RhcnRPZmZzZXQ6IGNjLnYyKDAsIDApLFxuICAgICAgICAgIGVuZFBvc2l0aW9uOiBpLFxuICAgICAgICAgIGRlbGF5OiBzLFxuICAgICAgICAgIGR1cmF0aW9uOiBsLFxuICAgICAgICAgIGFuaW1hdGlvblR5cGU6IFwic3BpcmFsVG9DZW50ZXJcIixcbiAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNJblwiLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICBsYXllcjogZSxcbiAgICAgICAgICAgIHJvdzogMCxcbiAgICAgICAgICAgIGNvbDogMCxcbiAgICAgICAgICAgIGlzTGVmdDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4dHJhUGFyYW1zOiB7XG4gICAgICAgICAgICBjZW50ZXJQb3M6IGksXG4gICAgICAgICAgICByb3VuZHM6IHQuU1BJUkFMX1JPVU5EUyxcbiAgICAgICAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgICAgICAgIGZhZGVPdXQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgZ2VuZXJhdGVFeHBhbmRQaGFzZUNvbmZpZ3MoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBbXSxcbiAgICAgIG4gPSBlLnRpbGVOb2RlcyxcbiAgICAgIGkgPSBlLmNlbnRlclBvcyxcbiAgICAgIHIgPSBuZXcgTWFwKCk7XG4gICAgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUuaW5mby5sYXllckluZGV4IHx8IDA7XG4gICAgICByLmhhcyh0KSB8fCByLnNldCh0LCBbXSk7XG4gICAgICByLmdldCh0KS5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHZhciBhID0gQXJyYXkuZnJvbShyLmtleXMoKSkuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSAtIHQ7XG4gICAgICB9KSxcbiAgICAgIGwgPSB0aGlzLmdldEV4cGFuZER1cmF0aW9uKCk7XG4gICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICB2YXIgYSA9IHIuZ2V0KGUpLFxuICAgICAgICBzID0gbiAqIHQuRVhQQU5EX0xBWUVSX0RFTEFZO1xuICAgICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciByID0gbi50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIG8ucHVzaCh7XG4gICAgICAgICAgbm9kZTogbi5jYXJkTm9kZSxcbiAgICAgICAgICBzdGFydE9mZnNldDogY2MudjIoMCwgMCksXG4gICAgICAgICAgZW5kUG9zaXRpb246IHIsXG4gICAgICAgICAgZGVsYXk6IHMsXG4gICAgICAgICAgZHVyYXRpb246IGwsXG4gICAgICAgICAgYW5pbWF0aW9uVHlwZTogXCJzcGlyYWxGcm9tQ2VudGVyXCIsXG4gICAgICAgICAgZWFzaW5nOiBcImN1c3RvbUJhY2tPdXRcIixcbiAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgbGF5ZXI6IGUsXG4gICAgICAgICAgICByb3c6IDAsXG4gICAgICAgICAgICBjb2w6IDAsXG4gICAgICAgICAgICBpc0xlZnQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHRyYVBhcmFtczoge1xuICAgICAgICAgICAgY2VudGVyUG9zOiBpLFxuICAgICAgICAgICAgcm91bmRzOiB0LlNQSVJBTF9ST1VORFMsXG4gICAgICAgICAgICBjbG9ja3dpc2U6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvLnB1c2goe1xuICAgICAgICAgIG5vZGU6IG4uc2hhZG93Q2FyZE5vZGUsXG4gICAgICAgICAgc3RhcnRPZmZzZXQ6IGNjLnYyKDAsIDApLFxuICAgICAgICAgIGVuZFBvc2l0aW9uOiByLFxuICAgICAgICAgIGRlbGF5OiBzLFxuICAgICAgICAgIGR1cmF0aW9uOiBsLFxuICAgICAgICAgIGFuaW1hdGlvblR5cGU6IFwic3BpcmFsRnJvbUNlbnRlclwiLFxuICAgICAgICAgIGVhc2luZzogXCJjdXN0b21CYWNrT3V0XCIsXG4gICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgIGxheWVyOiBlLFxuICAgICAgICAgICAgcm93OiAwLFxuICAgICAgICAgICAgY29sOiAwLFxuICAgICAgICAgICAgaXNMZWZ0OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXh0cmFQYXJhbXM6IHtcbiAgICAgICAgICAgIGNlbnRlclBvczogaSxcbiAgICAgICAgICAgIHJvdW5kczogdC5TUElSQUxfUk9VTkRTLFxuICAgICAgICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgICAgICAgZmFkZUluOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvO1xuICB9XG4gIGdldFRvdGFsRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxEdXJhdGlvbjtcbiAgfVxufSJdfQ==