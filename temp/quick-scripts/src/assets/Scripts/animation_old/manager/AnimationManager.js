"use strict";
cc._RF.push(module, 'e599cbBwg5BO5HBr6AdNler', 'AnimationManager');
// Scripts/animation_old/manager/AnimationManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationManager = void 0;
var AnimationEnums_1 = require("../../enums/AnimationEnums");
var AnimationUtil_1 = require("../../util/AnimationUtil");
var AnimationManager = /** @class */ (function () {
    function AnimationManager() {
        this.currentConfigName = AnimationEnums_1.EAnimationConfigName.INTERLACE;
        this.isPlaying = false;
        this.setAnimationConfig(AnimationEnums_1.EAnimationConfigName.INTERLACE);
    }
    AnimationManager.getInstance = function () {
        AnimationManager.instance || (AnimationManager.instance = new AnimationManager());
        return AnimationManager.instance;
    };
    AnimationManager.prototype.setAnimationConfig = function (e) {
        this.currentConfigName = e;
        AnimationUtil_1.AnimationUtil.setFadeInAnimation(e);
    };
    AnimationManager.prototype.getCurrentConfigName = function () {
        return this.currentConfigName;
    };
    AnimationManager.prototype.isAnimationPlaying = function () {
        return this.isPlaying;
    };
    AnimationManager.prototype.playFadeInAnimation = function (e) {
        var t = this;
        if (!this.isPlaying) {
            this.isPlaying = true;
            var o = e.endCallback;
            AnimationUtil_1.AnimationUtil.playFadeInAnimation(e.timerComponent, e.rects, e.shadows, e.halfCardWidth, e.halfMaxColNum, e.halfMaxRowNum, e.startCallback, e.beforeShadowCallback, function () {
                t.isPlaying = false;
                AnimationUtil_1.AnimationUtil.clearAnimatingNodes();
                o && o();
            }, e.refreshDuration || false);
        }
    };
    AnimationManager.prototype.stopCurrentAnimation = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
            AnimationUtil_1.AnimationUtil.stopAllAnimations();
        }
    };
    AnimationManager.prototype.resetAnimationState = function () {
        this.isPlaying = false;
    };
    AnimationManager.prototype.getAvailableConfigNames = function () {
        return [AnimationEnums_1.EAnimationConfigName.ZIPPER, AnimationEnums_1.EAnimationConfigName.DOOR_CLOSE, AnimationEnums_1.EAnimationConfigName.INTERLACE];
    };
    AnimationManager.prototype.randomizeAnimationConfig = function () {
        var e = this.getAvailableConfigNames();
        Math.floor(Math.random() * e.length);
        var t = e[2];
        this.setAnimationConfig(t);
    };
    return AnimationManager;
}());
exports.AnimationManager = AnimationManager;

cc._RF.pop();