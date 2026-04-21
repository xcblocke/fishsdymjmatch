"use strict";
cc._RF.push(module, '1eea6z8/tpKxIrKxKa2rz3d', 'FadeInAnimationConfig');
// Scripts/FadeInAnimationConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeInAnimationConfig = void 0;
var AnimationConfig_1 = require("./AnimationConfig");
var AnimationEnums_1 = require("./enums/AnimationEnums");
var FadeInAnimationConfig = /** @class */ (function (_super) {
    __extends(FadeInAnimationConfig, _super);
    function FadeInAnimationConfig(t) {
        if (t === void 0) { t = AnimationEnums_1.EAnimationConfigName.INTERLACE; }
        return _super.call(this, t) || this;
    }
    FadeInAnimationConfig.prototype.initializeConfig = function (e) {
        this.resetConfig();
        switch (e) {
            case AnimationEnums_1.EAnimationConfigName.ZIPPER:
                this.setupZipperConfig();
                break;
            case AnimationEnums_1.EAnimationConfigName.DOOR_CLOSE:
                this.setupDoorCloseConfig();
                break;
            case AnimationEnums_1.EAnimationConfigName.INTERLACE:
            default:
                this.setupInterlaceConfig();
        }
    };
    FadeInAnimationConfig.prototype.setupZipperConfig = function () {
        this.layerDurations.push(0, 0.05, 0.01, 0.005, 0);
        this.pushValues(this.lineDurations, 2, 0);
        this.pushValues(this.lineDurations, 2, 0.01);
        this.pushValues(this.lineDurations, 2, 0.02);
        this.pushValues(this.lineDurations, 2, 0.03);
        this.pushValues(this.lineDurations, 2, 0.04);
        this.pushValues(this.lineDurations, 2, 0.05);
        this.pushValues(this.lineDurations, 2, 0.06);
        this.pushValues(this.lineDurations, 2, 0.07);
        this.pushValues(this.lineDurations, 2, 0.08);
        this.pushValues(this.itemDurations, 14, 0);
        this.pushValues(this.linePositionDeviations, 18, -1);
        this.leftOutScreenPosition = cc.v2(-150, 0);
        this.leftOutScreenTime = 0.45;
        this.rightOutScreenPosition = cc.v2(150, 0);
        this.rightOutScreenTime = 0.45;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
    };
    FadeInAnimationConfig.prototype.setupDoorCloseConfig = function () {
        this.layerDurations.push(0, 0.04, 0.07, 0.1, 0);
        this.pushValues(this.lineDurations, 18, 0);
        this.pushValues(this.itemDurations, 14, 0);
        this.pushValues(this.linePositionDeviations, 18, 0);
        this.leftOutScreenPosition = cc.v2(-250, 0);
        this.leftOutScreenTime = 0.45;
        this.rightOutScreenPosition = cc.v2(250, 0);
        this.rightOutScreenTime = 0.45;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
    };
    FadeInAnimationConfig.prototype.setupInterlaceConfig = function () {
        this.layerDurations.push(0, 0.04, 0.02, 0.01, 0);
        this.pushValues(this.lineDurations, 2, 0.05);
        this.pushValues(this.lineDurations, 2, 0.03);
        this.pushValues(this.lineDurations, 4, 0.02);
        this.pushValues(this.lineDurations, 6, 0.01);
        this.pushValues(this.lineDurations, 4, 0);
        this.pushValues(this.itemDurations, 14, 0);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.leftOutScreenPosition = cc.v2(-50, 0);
        this.leftOutScreenTime = 0.44;
        this.rightOutScreenPosition = cc.v2(50, 0);
        this.rightOutScreenTime = 0.44;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
    };
    FadeInAnimationConfig.prototype.randomizeConfig = function () {
        Math.floor(Math.random() * FadeInAnimationConfig.CONFIG_NAMES.length);
        var e = FadeInAnimationConfig.CONFIG_NAMES[2];
        this.initializeConfig(e);
    };
    FadeInAnimationConfig.prototype.setConfig = function (e) {
        this.initializeConfig(e);
    };
    FadeInAnimationConfig.CONFIG_NAMES = [AnimationEnums_1.EAnimationConfigName.ZIPPER, AnimationEnums_1.EAnimationConfigName.DOOR_CLOSE, AnimationEnums_1.EAnimationConfigName.INTERLACE];
    return FadeInAnimationConfig;
}(AnimationConfig_1.AnimationConfig));
exports.FadeInAnimationConfig = FadeInAnimationConfig;

cc._RF.pop();