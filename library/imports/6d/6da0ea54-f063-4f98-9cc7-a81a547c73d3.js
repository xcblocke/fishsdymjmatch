"use strict";
cc._RF.push(module, '6da0epU8GNPmJzHqBpUfHPT', 'SpiralShuffleBehavior');
// Scripts/base/SpiralShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiralShuffleBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleAnimationManager_1 = require("../animation/manager/ShuffleAnimationManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var SpiralShuffleBehavior = /** @class */ (function (_super) {
    __extends(SpiralShuffleBehavior, _super);
    function SpiralShuffleBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpiralShuffleBehavior.prototype.playShuffleAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Refresh);
    };
    SpiralShuffleBehavior.prototype.start = function () {
        var e, t;
        this.playShuffleAudio();
        var o = ShuffleUtils_1.default.getPrePlayTime(this.context);
        if (o) {
            var n = null === (t = null === (e = this.context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.timerComponent;
            if (n) {
                n.doOnce(o, this.playShuffleAnimation, this);
            }
            else {
                this.playShuffleAnimation();
            }
        }
        else
            this.playShuffleAnimation();
    };
    SpiralShuffleBehavior.prototype.playShuffleAnimation = function () {
        var e = this, t = ShuffleAnimationManager_1.ShuffleAnimationManager.getInstance(), o = this.context.getTileNodeManager(), n = o.getTileNodes().filter(function (e) {
            var t;
            return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
        });
        if (0 !== n.length) {
            n.forEach(function (e) {
                cc.Tween.stopAllByTarget(e.cardNode);
                cc.Tween.stopAllByTarget(e.shadowCardNode);
                e.stopAllAnimation();
            });
            var i = this.getCenterPosition(n[0].cardNode.parent), r = {
                tileNodes: n,
                centerPos: i,
                onRebuild: function (t) {
                    var n = e.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal;
                    if (n) {
                        o.rebuildTileNodeInfosAfterShuffle(t);
                    }
                    else {
                        o.rebuildChangeTypeTileNodes(t);
                    }
                    var r = o.getTileNodes().filter(function (e) {
                        var t;
                        return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
                    });
                    r.forEach(function (e) {
                        e.cardNode.position = i;
                        e.shadowCardNode.position = i;
                        e.shadowCardNode.opacity = 0;
                        n || e.refreshNode(e.info);
                    });
                    return r;
                }
            };
            t.setStrategy("SpiralShuffle");
            t.play({
                context: r,
                timerComponent: this.context.gameView.timerComponent,
                callbacks: {
                    onStart: function () {
                        e.onShuffleStayStart(n);
                    },
                    onPhaseComplete: function (t) {
                        "stay" === t && e.onShuffleStayEnd(n);
                    },
                    onComplete: function () {
                        e.onShuffleAnimationEnd();
                    }
                }
            });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    SpiralShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    SpiralShuffleBehavior.prototype.onShuffleStayStart = function (e) {
        var t, o;
        this.context.gameView.setSwallowEventNodeActive(true);
        if (this.context.gameType !== GameTypeEnums_1.MjGameType.Tile2Normal)
            try {
                for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    r.cancelSelected();
                    r.hidePropHint();
                    r.stopAllAnimation();
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    i && !i.done && (o = n.return) && o.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        this.onShuffleStayStartPlay();
        ShuffleUtils_1.default.onShuffleStayStartPlay(this._context);
    };
    SpiralShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    SpiralShuffleBehavior.prototype.onShuffleStayEnd = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    SpiralShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        this.playShuffleVibrate();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    SpiralShuffleBehavior.prototype.playShuffleVibrate = function () {
        this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
    };
    SpiralShuffleBehavior.prototype.onAbort = function () {
        var e;
        ShuffleAnimationManager_1.ShuffleAnimationManager.getInstance().stop();
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    __decorate([
        mj.traitEvent("SpiralShfBhv_playAud")
    ], SpiralShuffleBehavior.prototype, "playShuffleAudio", null);
    __decorate([
        mj.traitEvent("SpiralShfBhv_vibrate")
    ], SpiralShuffleBehavior.prototype, "playShuffleVibrate", null);
    return SpiralShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SpiralShuffleBehavior = SpiralShuffleBehavior;

cc._RF.pop();