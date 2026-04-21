"use strict";
cc._RF.push(module, '9ee49tf2KxAi6AVasK7SivF', 'AnimationTimingConfig');
// Scripts/config/AnimationTimingConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationTimingConfig = void 0;
var AnimationEnums_1 = require("../enums/AnimationEnums");
var AnimationTimingConfig = /** @class */ (function () {
    function AnimationTimingConfig() {
        this.fadeInType = AnimationEnums_1.EFadeInAnimationType.FOUR_PARTS;
        this.outScreenLayerDurations = [];
        this.outScreenLineDurations = [];
        this.leftTopOutScreenPosition = cc.v2(-400, 0);
        this.leftTopOutScreenTime = 0.334;
        this.rightTopOutScreenPosition = cc.v2(400, 0);
        this.rightTopOutScreenTime = 0.334;
        this.rightBottomOutScreenPosition = cc.v2(400, 0);
        this.rightBottomOutScreenTime = 0.334;
        this.leftBottomOutScreenPosition = cc.v2(-400, 0);
        this.leftBottomOutScreenTime = 0.3;
        this.leftOutScreenPosition = cc.v2(50, 0);
        this.leftOutScreenTime = 0.5;
        this.rightOutScreenPosition = cc.v2(500, 0);
        this.rightOutScreenTime = 0.5;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.1;
        this.initializeDefaultValues();
    }
    AnimationTimingConfig.prototype.initializeDefaultValues = function () {
        this.outScreenLayerDurations.push(0, 0.133, 0.05, 0.02);
        this.outScreenLineDurations.push(0);
        for (var e = 0; e <= 13; e++)
            this.outScreenLineDurations.push(0.06);
    };
    AnimationTimingConfig.prototype.getPositionAndTime = function (e) {
        switch (e) {
            case AnimationEnums_1.EScreenFadeType.LEFT_TOP:
                return {
                    position: this.leftTopOutScreenPosition,
                    time: this.leftTopOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.RIGHT_TOP:
                return {
                    position: this.rightTopOutScreenPosition,
                    time: this.rightTopOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.RIGHT_BOTTOM:
                return {
                    position: this.rightBottomOutScreenPosition,
                    time: this.rightBottomOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.LEFT_BOTTOM:
                return {
                    position: this.leftBottomOutScreenPosition,
                    time: this.leftBottomOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.LEFT:
                return {
                    position: this.leftOutScreenPosition,
                    time: this.leftOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.RIGHT:
                return {
                    position: this.rightOutScreenPosition,
                    time: this.rightOutScreenTime
                };
            default:
                return {
                    position: this.leftOutScreenPosition,
                    time: this.leftOutScreenTime
                };
        }
    };
    return AnimationTimingConfig;
}());
exports.AnimationTimingConfig = AnimationTimingConfig;

cc._RF.pop();