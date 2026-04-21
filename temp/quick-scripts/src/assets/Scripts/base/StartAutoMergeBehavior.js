"use strict";
cc._RF.push(module, '554fdBErvBHWLTUHbRTjtEz', 'StartAutoMergeBehavior');
// Scripts/base/StartAutoMergeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAutoMergeBehavior = exports.AutoMergeSpeedType = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
exports.AutoMergeSpeedType = {
    Constant: "constant",
    Accelerate: "accelerate"
};
var StartAutoMergeBehavior = /** @class */ (function (_super) {
    __extends(StartAutoMergeBehavior, _super);
    function StartAutoMergeBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 100;
        return _this;
    }
    StartAutoMergeBehavior.prototype.start = function (e) {
        var t, o = this;
        (t = "travelVictory" === e.data.type ? this.getTravelVictorySkipConfig() : this.getSkipConfig()).canSkip && this.setupSkipLogic(e, t);
        var n = e.data.type, i = false, r = "travelVictory" === n ? this.getTravelSpeedConfig() : this.getMainlineSpeedConfig(), c = r.initialDelay, u = function u() {
            var e, t;
            if (!i) {
                var p = o.context.getTileMapObject().gameContext.fullComboChecker.getAllCardPair();
                if (p && 0 !== p.length) {
                    var f = p[0];
                    if (f && !(f.length < 2))
                        if (f[0].isValid && f[1].isValid) {
                            GameInteraction_1.GameInteraction.input({
                                inputType: GameInputEnum_1.EGameInputEnum.AutoMerge,
                                tileId1: f[0].id,
                                tileId2: f[1].id,
                                type: n
                            });
                            if (r.type === exports.AutoMergeSpeedType.Accelerate) {
                                var d = null !== (e = r.minDelay) && void 0 !== e ? e : 0.1, h = null !== (t = r.decreaseStep) && void 0 !== t ? t : 0.02;
                                c > d && (c = Math.max(d, c - h));
                            }
                            o.context.gameView.timerComponent.doOnce(c, u);
                        }
                        else
                            o.context.gameView.timerComponent.doOnce(0.05, u);
                }
                else {
                    i = true;
                    "travelVictory" === n && o.handleTravelVictoryComplete();
                }
            }
        };
        u();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    StartAutoMergeBehavior.prototype.setupSkipLogic = function (e, t) {
        var o = t.mode, n = t.delayTime;
        switch (o) {
            case 0:
                this.registerImmediateSkip(e);
                break;
            case 1:
                this.registerClickThenDelaySkip(e, n);
                break;
            case 2:
                this.registerDelayThenClickSkip(e, n);
        }
    };
    StartAutoMergeBehavior.prototype.registerImmediateSkip = function (e) {
        var t = this;
        this._context.gameView.registerScreenTouchEnd(function (o) {
            o.stopPropagation();
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.SkipAutoMerge,
                type: e.data.type
            });
            t._context.gameView.unregisterScreenTouchEnd();
        });
    };
    StartAutoMergeBehavior.prototype.registerClickThenDelaySkip = function (e, t) {
        var o = this, n = false;
        this._context.gameView.registerScreenTouchEnd(function (i) {
            i.stopPropagation();
            if (!n) {
                n = true;
                var r = function r() {
                    GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.SkipAutoMerge,
                        type: e.data.type
                    });
                    n = false;
                };
                o._context.gameView.unregisterScreenTouchEnd();
                o.context.gameView.timerComponent.doOnce(t, r);
                o.context.registerAutoMergeTimer(r);
            }
        });
    };
    StartAutoMergeBehavior.prototype.registerDelayThenClickSkip = function (e, t) {
        var o = this, n = function n() {
            o._context.gameView.registerScreenTouchEnd(function (t) {
                t.stopPropagation();
                GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.SkipAutoMerge,
                    type: e.data.type
                });
                o._context.gameView.unregisterScreenTouchEnd();
            });
        };
        this.context.gameView.timerComponent.doOnce(t, n);
        this.context.registerAutoMergeTimer(n);
    };
    StartAutoMergeBehavior.prototype.getSkipConfig = function () {
        return {
            canSkip: true,
            mode: 0,
            delayTime: 3
        };
    };
    StartAutoMergeBehavior.prototype.getTravelVictorySkipConfig = function () {
        return {
            canSkip: false,
            mode: 0,
            delayTime: 2
        };
    };
    StartAutoMergeBehavior.prototype.handleTravelVictoryComplete = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.TravelEnd
        });
    };
    StartAutoMergeBehavior.prototype.getMainlineSpeedConfig = function () {
        return {
            type: exports.AutoMergeSpeedType.Constant,
            initialDelay: 0.33
        };
    };
    StartAutoMergeBehavior.prototype.getTravelSpeedConfig = function () {
        return {
            type: exports.AutoMergeSpeedType.Accelerate,
            initialDelay: 0.33,
            decreaseStep: 0.02,
            minDelay: 0.1
        };
    };
    __decorate([
        mj.traitEvent("StAutoMrgBhv_skipCfg")
    ], StartAutoMergeBehavior.prototype, "getSkipConfig", null);
    __decorate([
        mj.traitEvent("StAutoMrgBhv_trvSkip")
    ], StartAutoMergeBehavior.prototype, "getTravelVictorySkipConfig", null);
    __decorate([
        mj.traitEvent("StAutoMrgBhv_mainSpd")
    ], StartAutoMergeBehavior.prototype, "getMainlineSpeedConfig", null);
    __decorate([
        mj.traitEvent("StAutoMrgBhv_trvSpd")
    ], StartAutoMergeBehavior.prototype, "getTravelSpeedConfig", null);
    return StartAutoMergeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.StartAutoMergeBehavior = StartAutoMergeBehavior;

cc._RF.pop();