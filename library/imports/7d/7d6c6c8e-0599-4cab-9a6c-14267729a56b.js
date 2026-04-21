"use strict";
cc._RF.push(module, '7d6c6yOBZlMq5psFCZ3KaVr', 'AnimationConfig');
// Scripts/AnimationConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationConfig = void 0;
var AnimationConfig = /** @class */ (function () {
    function AnimationConfig(e) {
        this.layerDurations = [];
        this.lineDurations = [];
        this.itemDurations = [];
        this.linePositionDeviations = [];
        this.useSymmetry = true;
        this.leftOutScreenPosition = cc.v2(-100, 0);
        this.leftOutScreenTime = 1;
        this.rightOutScreenPosition = cc.v2(100, 0);
        this.rightOutScreenTime = 1;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
        this.initializeConfig(e);
    }
    AnimationConfig.prototype.resetConfig = function () {
        this.layerDurations = [];
        this.lineDurations = [];
        this.itemDurations = [];
        this.linePositionDeviations = [];
    };
    AnimationConfig.prototype.pushValues = function (e, t, o) {
        for (var n = 0; n < t; n++)
            e.push(o);
    };
    return AnimationConfig;
}());
exports.AnimationConfig = AnimationConfig;

cc._RF.pop();