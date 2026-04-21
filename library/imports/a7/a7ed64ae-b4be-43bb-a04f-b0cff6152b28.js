"use strict";
cc._RF.push(module, 'a7ed6SutL5Du6BPsM/2FSso', 'StackShuffleBehavior');
// Scripts/base/StackShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StackShuffleBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleAnimationManager_1 = require("../animation/manager/ShuffleAnimationManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var StackShuffleBehavior = /** @class */ (function (_super) {
    __extends(StackShuffleBehavior, _super);
    function StackShuffleBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackShuffleBehavior.prototype.playShuffleAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.RefreshRoll);
    };
    StackShuffleBehavior.prototype.start = function () {
        this.playShuffleAudio();
        this.playShuffleAnimation();
    };
    StackShuffleBehavior.prototype.playShuffleAnimation = function () {
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
            if (this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
                var i = o.root, r = n.length;
                n.forEach(function (e, t) {
                    e.shadowCardNode.parent = i;
                    e.shadowCardNode.zIndex = t;
                    e.cardNode.parent = i;
                    e.cardNode.zIndex = r + t;
                });
            }
            var a = this.getCenterPosition(n[0].cardNode.parent), l = {
                tileNodes: n,
                centerPos: a,
                onRebuild: function (t) {
                    var n = e.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal, i = new Map();
                    t.forEach(function (e) {
                        e.cardNode && e.shadowCardNode && i.set(e.info.tileObject.id, {
                            cardPos: e.cardNode.position.clone(),
                            shadowPos: e.shadowCardNode.position.clone(),
                            cardOpacity: e.cardNode.opacity,
                            shadowOpacity: e.shadowCardNode.opacity
                        });
                    });
                    if (n) {
                        o.rebuildTileNodeInfosAfterShuffle(t);
                    }
                    else {
                        o.rebuildChangeTypeTileNodes(t);
                    }
                    var r = o.getTileNodes().filter(function (e) {
                        var t;
                        return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar() && e.cardNode && e.shadowCardNode;
                    });
                    r.forEach(function (e) {
                        var t = i.get(e.info.tileObject.id);
                        if (t && e.cardNode && e.shadowCardNode) {
                            e.cardNode.position = t.cardPos;
                            e.shadowCardNode.position = t.shadowPos;
                            e.cardNode.opacity = t.cardOpacity;
                            e.shadowCardNode.opacity = t.shadowOpacity;
                        }
                        n || e.refreshNode(e.info);
                    });
                    return r;
                }
            };
            t.setStrategy("StackShuffle");
            t.play({
                context: l,
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
    StackShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    StackShuffleBehavior.prototype.onShuffleStayStart = function (e) {
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
    StackShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    StackShuffleBehavior.prototype.onShuffleStayEnd = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    StackShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        this.playShuffleVibrate();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    StackShuffleBehavior.prototype.playShuffleVibrate = function () {
        this.context.gameType === GameTypeEnums_1.MjGameType.Tile2Normal && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
    };
    StackShuffleBehavior.prototype.onAbort = function () {
        var e;
        ShuffleAnimationManager_1.ShuffleAnimationManager.getInstance().stop();
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    __decorate([
        mj.traitEvent("StackShfBhv_playAud")
    ], StackShuffleBehavior.prototype, "playShuffleAudio", null);
    __decorate([
        mj.traitEvent("StackShfBhv_vibrate")
    ], StackShuffleBehavior.prototype, "playShuffleVibrate", null);
    return StackShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.StackShuffleBehavior = StackShuffleBehavior;

cc._RF.pop();