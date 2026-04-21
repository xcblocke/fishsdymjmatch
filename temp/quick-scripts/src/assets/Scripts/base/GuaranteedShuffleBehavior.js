"use strict";
cc._RF.push(module, '7b1a0NV/H9PqomC9IuWHNiN', 'GuaranteedShuffleBehavior');
// Scripts/base/GuaranteedShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedShuffleBehavior = void 0;
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var p = function p() {
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
var GuaranteedShuffleBehavior = /** @class */ (function (_super) {
    __extends(GuaranteedShuffleBehavior, _super);
    function GuaranteedShuffleBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._originalPositions = new Map();
        return _this;
    }
    GuaranteedShuffleBehavior.calculateLayerParam = function (e, t, o, n) {
        return t <= 1 ? o : o + e / (t - 1) * (n - o);
    };
    GuaranteedShuffleBehavior.playSingleCardScaleAnimation = function (e, t) {
        cc.tween(e).delay(t.scaleStartTime).to(t.scaleTime, {
            scale: t.scaleValue
        }, {
            easing: "quadIn"
        }).to(t.scaleBackTime, {
            scale: 1
        }, {
            easing: "quadOut"
        }).start();
    };
    GuaranteedShuffleBehavior.prototype.start = function (e) {
        var t, o, n, i, a = this;
        this._originalPositions = e.data.originalPositions;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Refresh);
        var c = new p(), u = this.calculatePhaseTimings(c), f = u.phase1Time, d = (u.phase2Time, u.stayEndTime), h = this.context.getTileNodeManager(), y = h.getTileNodes().filter(function (e) {
            return e.tileObject && e.tileObject.isValid;
        });
        try {
            for (var m = __values(y), v = m.next(); !v.done; v = m.next()) {
                (C = v.value).stopAllAnimation();
                C.animNode && C.animNode.setScale(C.info.tileObject.layoutScale);
                C.tileNode && C.tileNode.setScale(1 / C.info.tileObject.layoutScale);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (o = m.return) && o.call(m);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this.onShuffleStayStart(y);
        if (0 != y.length) {
            var g = this.getCenterPosition(y[0].cardNode.parent);
            try {
                for (var _ = __values(y), T = _.next(); !T.done; T = _.next()) {
                    var C = T.value;
                    this.playSingleCardGatherAnimation(C, g, c);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    T && !T.done && (i = _.return) && i.call(_);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            new Promise(function (e) {
                cc.tween(h.root).delay(f).call(function () {
                    var e, t;
                    try {
                        for (var o = __values(y), n = o.next(); !n.done; n = o.next()) {
                            var i = n.value;
                            a.playSingleCardShakeAnimation(i.cardNode, c);
                            a.playSingleCardShakeAnimation(i.shadowCardNode, c);
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
                }).delay(d - f).call(e).start();
            }).then(function () {
                return h.rebuildAllTileNodes();
            }).then(function () {
                var e, t, o = h.getTileNodes().filter(function (e) {
                    return e.tileObject && e.tileObject.isValid;
                });
                try {
                    for (var n = __values(o), i = n.next(); !i.done; i = n.next())
                        i.value.shadowCardNode.opacity = 0;
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                a.onShuffleStayEnd(o);
                a.playLayerAnimation(g, c);
            });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    GuaranteedShuffleBehavior.prototype.playLayerAnimation = function (e, t) {
        for (var o, n, i = this, a = this.context.getTileNodeManager(), l = [], s = this.context.getTileMapObject().mapLayers(), c = s.length - 1; c >= 0; c--) {
            var u = {
                layerIndex: c,
                tileNodeObjects: []
            };
            try {
                for (var p = (o = void 0, __values(s[c].allCards)), f = p.next(); !f.done; f = p.next()) {
                    var d = f.value;
                    d.isValid && (_ = a.getTileNodeByTileId(d.id)) && u.tileNodeObjects.push(_);
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
        for (c = 0; c < l.length; c++) {
            u = l[c];
            for (var h = this.calculateLayerAnimationParams(c, l.length, t), y = h.expandTime, m = h.expandDist, v = h.backTime, g = 0; g < u.tileNodeObjects.length; g++) {
                var _ = u.tileNodeObjects[g], T = c === l.length - 1 && g === u.tileNodeObjects.length - 1;
                this.playSingleCardExpandAnimation(_, e, y, m, v, T, function () {
                    i.onShuffleAnimationEnd();
                });
            }
        }
    };
    GuaranteedShuffleBehavior.prototype.calculatePhaseTimings = function (e) {
        return {
            phase1Time: e.gatherExpandTime + e.gatherShrinkTime,
            phase2Time: e.shakeTimes[e.shakeTimes.length - 1],
            stayEndTime: e.gatherExpandTime + e.gatherShrinkTime + e.scaleStartTime
        };
    };
    GuaranteedShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    GuaranteedShuffleBehavior.prototype.playSingleCardGatherAnimation = function (e, t, o) {
        var n = this._originalPositions.get(e.tileObject) || e.cardNode.position.clone();
        e.cardNode.position = n;
        e.shadowCardNode.position = n;
        var i = n.clone().subtract(t), r = i.mag();
        if (r > 0) {
            i.normalizeSelf();
            var a = t.add(i.mul(r + o.gatherExpandDist));
            cc.tween(e.cardNode).to(o.gatherExpandTime, {
                position: a
            }, {
                easing: "quadOut"
            }).to(o.gatherShrinkTime, {
                position: t
            }, {
                easing: "quadIn"
            }).start();
            cc.tween(e.shadowCardNode).to(o.gatherExpandTime, {
                position: a
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
            var l = o.gatherExpandTime + o.gatherShrinkTime;
            cc.tween(e.cardNode).delay(l).start();
            cc.tween(e.shadowCardNode).delay(o.gatherExpandTime).to(o.gatherShrinkTime, {
                opacity: 0
            }).start();
        }
    };
    GuaranteedShuffleBehavior.prototype.playSingleCardShakeAnimation = function (e, t) {
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
    GuaranteedShuffleBehavior.prototype.calculateLayerAnimationParams = function (e, o, n) {
        return {
            expandTime: GuaranteedShuffleBehavior.calculateLayerParam(e, o, n.topLayerExpandTime, n.bottomLayerExpandTime),
            expandDist: GuaranteedShuffleBehavior.calculateLayerParam(e, o, n.topLayerExpandDist, n.bottomLayerExpandDist),
            backTime: GuaranteedShuffleBehavior.calculateLayerParam(e, o, n.topLayerBackTime, n.bottomLayerBackTime)
        };
    };
    GuaranteedShuffleBehavior.prototype.playSingleCardExpandAnimation = function (e, t, o, n, i, r, a) {
        if (e && e.tileObject) {
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
    GuaranteedShuffleBehavior.prototype.onShuffleStayStart = function (e) {
        var t, o;
        this.context.gameView.setSwallowEventNodeActive(true);
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                var a = i.value;
                a.cancelSelected();
                a.hidePropHint();
                a.stopAllAnimation();
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
    GuaranteedShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    GuaranteedShuffleBehavior.prototype.onShuffleStayEndPlay = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    GuaranteedShuffleBehavior.prototype.onShuffleStayEnd = function (e) {
        var t, o;
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                var l = i.value;
                l.refreshNode(l.info);
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
        this.onShuffleStayEndPlay();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    GuaranteedShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return GuaranteedShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.GuaranteedShuffleBehavior = GuaranteedShuffleBehavior;

cc._RF.pop();