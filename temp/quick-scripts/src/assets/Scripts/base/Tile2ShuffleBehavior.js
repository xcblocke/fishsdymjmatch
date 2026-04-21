"use strict";
cc._RF.push(module, '3e4d68+FHJAz76eGLELjX/j', 'Tile2ShuffleBehavior');
// Scripts/base/Tile2ShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var d = function d() {
    this.gatherExpandTime = 0.2;
    this.gatherExpandDist = 10;
    this.gatherShrinkTime = 0.3;
    this.shakeRotations = [0, 5, -5, 5, 0];
    this.shakeTimes = [0, 0.07, 0.14, 0.21, 0.3];
    this.scaleStartTime = 0.21;
    this.scaleTime = 0.09;
    this.scaleValue = 0.8;
    this.scaleBackTime = 0.1;
    this.bottomLayerExpandTime = 0.3;
    this.bottomLayerExpandDist = 10;
    this.bottomLayerBackTime = 0.1;
    this.topLayerExpandTime = 0.4;
    this.topLayerExpandDist = 20;
    this.topLayerBackTime = 0.2;
    this.shadowFadeOutTime = 0.2;
    this.shadowFadeInTime = 0.3;
};
var Tile2ShuffleBehavior = /** @class */ (function (_super) {
    __extends(Tile2ShuffleBehavior, _super);
    function Tile2ShuffleBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ShuffleBehavior.prototype.playShuffleAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Refresh);
    };
    Tile2ShuffleBehavior.prototype.start = function () {
        var e, t, o, n, i = this;
        this.playShuffleAudio();
        var r = new d(), l = this.calculatePhaseTimings(r), s = l.phase1Time, u = l.phase2Time, p = l.stayEndTime, f = this.context.getTileNodeManager(), h = f.getTileNodes().filter(function (e) {
            var t;
            return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
        });
        try {
            for (var y = __values(h), m = y.next(); !m.done; m = y.next())
                (T = m.value).stopAllAnimation();
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                m && !m.done && (t = y.return) && t.call(y);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.onShuffleStayStart(h);
        if (0 !== h.length) {
            var v = this.getCenterPosition(h[0].cardNode.parent);
            try {
                for (var g = __values(h), _ = g.next(); !_.done; _ = g.next()) {
                    var T = _.value;
                    this.playGatherAnimation(T, v, r);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    _ && !_.done && (n = g.return) && n.call(g);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            cc.tween(f.root).delay(s).call(function () {
                var e, t;
                try {
                    for (var o = __values(h), n = o.next(); !n.done; n = o.next()) {
                        var l = n.value;
                        i.playShakeAnimation(l.cardNode, r);
                        i.playShakeAnimation(l.shadowCardNode, r);
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        n && !n.done && (t = o.return) && t.call(o);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
            }).delay(p - s).call(function () {
                var e, t, o = f.getTileNodes().filter(function (e) {
                    var t;
                    return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
                });
                try {
                    for (var n = __values(o), r = n.next(); !r.done; r = n.next()) {
                        var l = r.value;
                        l.cardNode.position = v;
                        l.shadowCardNode.position = v;
                        l.shadowCardNode.opacity = 0;
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        r && !r.done && (t = n.return) && t.call(n);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                i.onShuffleStayEnd(o);
            }).delay(s + u - (p - s) - s).call(function () {
                i.playLayerAnimation(v, r);
            }).start();
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2ShuffleBehavior.prototype.playLayerAnimation = function (e, t) {
        for (var o, n, i = this, r = this.context.getTileNodeManager(), l = [], s = this.context.getTileMapObject().mapLayers(), c = s.length - 1; c >= 0; c--) {
            var u = {
                layerIndex: c,
                tileNodeObjects: []
            };
            try {
                for (var p = (o = void 0, __values(s[c].allCards)), f = p.next(); !f.done; f = p.next()) {
                    var d = f.value, h = r.getTileNodeByTileId(d.id);
                    d.isValid && h && !h.tileObject.getIsInSlotBar() && u.tileNodeObjects.push(h);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    f && !f.done && (n = p.return) && n.call(p);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            u.tileNodeObjects.length > 0 && l.push(u);
        }
        var y = 0, m = 0;
        for (c = 0; c < l.length; c++) {
            var v = this.calcLayerParams(c, l.length, t), g = (T = v.expandTime) + (b = v.backTime);
            if (g >= m) {
                m = g;
                y = c;
            }
        }
        for (c = 0; c < l.length; c++)
            for (var _ = this.calcLayerParams(c, l.length, t), T = _.expandTime, C = _.expandDist, b = _.backTime, E = (u = l[c], 0); E < u.tileNodeObjects.length; E++) {
                var S = c === y && E === u.tileNodeObjects.length - 1;
                this.playExpandAnimation(u.tileNodeObjects[E], e, T, C, b, S, function () {
                    i.onShuffleAnimationEnd();
                });
            }
    };
    Tile2ShuffleBehavior.prototype.calculatePhaseTimings = function (e) {
        return {
            phase1Time: e.gatherExpandTime + e.gatherShrinkTime,
            phase2Time: e.shakeTimes[e.shakeTimes.length - 1],
            stayEndTime: e.gatherExpandTime + e.gatherShrinkTime + e.scaleStartTime
        };
    };
    Tile2ShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    Tile2ShuffleBehavior.prototype.playGatherAnimation = function (e, t, o) {
        var n = e.cardNode.position.clone().clone().subtract(t), i = n.mag();
        if (i > 0) {
            n.normalizeSelf();
            var r = t.add(n.mul(i + o.gatherExpandDist));
            cc.tween(e.cardNode).to(o.gatherExpandTime, {
                position: r
            }, {
                easing: "quadOut"
            }).to(o.gatherShrinkTime, {
                position: t
            }, {
                easing: "quadIn"
            }).start();
            cc.tween(e.shadowCardNode).to(o.gatherExpandTime, {
                position: r
            }, {
                easing: "quadOut"
            }).to(o.gatherShrinkTime, {
                position: t,
                opacity: 0
            }, {
                easing: "quadIn"
            }).start();
        }
        else {
            var a = o.gatherExpandTime + o.gatherShrinkTime;
            cc.tween(e.cardNode).delay(a).start();
            cc.tween(e.shadowCardNode).delay(o.gatherExpandTime).to(o.gatherShrinkTime, {
                opacity: 0
            }).start();
        }
    };
    Tile2ShuffleBehavior.prototype.playShakeAnimation = function (e, t) {
        for (var o = cc.tween(e), n = 1; n < t.shakeTimes.length; n++) {
            var i = t.shakeTimes[n] - t.shakeTimes[n - 1];
            o.to(i, {
                angle: t.shakeRotations[n]
            }, {
                easing: "sineInOut"
            });
        }
        o.start();
    };
    Tile2ShuffleBehavior.prototype.calcLayerParams = function (e, t, o) {
        var n = function n(o, n) {
            return t <= 1 ? o : o + e / (t - 1) * (n - o);
        };
        return {
            expandTime: n(o.topLayerExpandTime, o.bottomLayerExpandTime),
            expandDist: n(o.topLayerExpandDist, o.bottomLayerExpandDist),
            backTime: n(o.topLayerBackTime, o.bottomLayerBackTime)
        };
    };
    Tile2ShuffleBehavior.prototype.playExpandAnimation = function (e, t, o, n, i, r, a) {
        if (null == e ? void 0 : e.tileObject) {
            var l = e.tileObject.getPosition();
            if (l) {
                var s = l.clone().subtract(t), c = s.mag();
                if (c > 0) {
                    s.normalizeSelf();
                    var u = t.add(s.mul(c + n));
                    cc.tween(e.cardNode).to(o, {
                        position: u
                    }, {
                        easing: "cubicOut"
                    }).to(i, {
                        position: l
                    }, {
                        easing: "backOut"
                    }).start();
                    cc.tween(e.shadowCardNode).to(o, {
                        position: u,
                        opacity: 255
                    }, {
                        easing: "cubicOut"
                    }).to(i, {
                        position: l
                    }, {
                        easing: "backOut"
                    }).call(function () {
                        r && (null == a || a());
                    }).start();
                }
                else {
                    cc.tween(e.cardNode).delay(o).to(i, {
                        position: l
                    }, {
                        easing: "backOut"
                    }).start();
                    cc.tween(e.shadowCardNode).delay(o).to(i, {
                        position: l,
                        opacity: 255
                    }, {
                        easing: "backOut"
                    }).call(function () {
                        r && (null == a || a());
                    }).start();
                }
            }
            else
                r && (null == a || a());
        }
        else
            r && (null == a || a());
    };
    Tile2ShuffleBehavior.prototype.onShuffleStayStart = function () {
        this.context.gameView.setSwallowEventNodeActive(true);
        this.onShuffleStayStartPlay();
        ShuffleUtils_1.default.onShuffleStayStartPlay(this._context);
    };
    Tile2ShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    Tile2ShuffleBehavior.prototype.onShuffleStayEndPlay = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    Tile2ShuffleBehavior.prototype.onShuffleStayEnd = function (e) {
        this.context.getTileNodeManager().rebuildTileNodeInfosAfterShuffle(e);
        this.onShuffleStayEndPlay();
    };
    Tile2ShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2ShuffleBehavior.prototype.playShuffleVibrate = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.DoubleWeak, VibrateManager_1.EVibratePoint.Tile2ShuffleDone);
    };
    __decorate([
        mj.traitEvent("T2ShuffleBhv_stayEnd")
    ], Tile2ShuffleBehavior.prototype, "onShuffleStayEndPlay", null);
    __decorate([
        mj.traitEvent("T2ShuffleBhv_vibrate")
    ], Tile2ShuffleBehavior.prototype, "playShuffleVibrate", null);
    return Tile2ShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ShuffleBehavior = Tile2ShuffleBehavior;

cc._RF.pop();