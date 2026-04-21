
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ShuffleBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTaHVmZmxlQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBMEc7QUFDMUcsNkRBQTZEO0FBQzdELHFFQUFvRTtBQUNwRSwwRUFBb0U7QUFDcEUsd0RBQW1EO0FBQ25ELHlEQUF3RDtBQUN4RCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDekIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLGlC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QUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDUDtTQUNGO1FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUwsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUM1RCxDQUFDLENBQUMscUJB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VSxDQUFDLHNCQUFzQixDQUFDO29FQUlyQztJQVdEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztrRUFHckM7SUFDSCwyQkFBQztDQTFSRCxBQTBSQyxDQTFSeUMscUNBQWlCLEdBMFIxRDtBQTFSWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCwgRVZpYnJhdGVQb2ludCB9IGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBTaHVmZmxlVXRpbHMgZnJvbSAnLi4vVWlVdGlscy9TaHVmZmxlVXRpbHMnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbnZhciBkID0gZnVuY3Rpb24gZCgpIHtcbiAgdGhpcy5nYXRoZXJFeHBhbmRUaW1lID0gMC4yO1xuICB0aGlzLmdhdGhlckV4cGFuZERpc3QgPSAxMDtcbiAgdGhpcy5nYXRoZXJTaHJpbmtUaW1lID0gMC4zO1xuICB0aGlzLnNoYWtlUm90YXRpb25zID0gWzAsIDUsIC01LCA1LCAwXTtcbiAgdGhpcy5zaGFrZVRpbWVzID0gWzAsIDAuMDcsIDAuMTQsIDAuMjEsIDAuM107XG4gIHRoaXMuc2NhbGVTdGFydFRpbWUgPSAwLjIxO1xuICB0aGlzLnNjYWxlVGltZSA9IDAuMDk7XG4gIHRoaXMuc2NhbGVWYWx1ZSA9IDAuODtcbiAgdGhpcy5zY2FsZUJhY2tUaW1lID0gMC4xO1xuICB0aGlzLmJvdHRvbUxheWVyRXhwYW5kVGltZSA9IDAuMztcbiAgdGhpcy5ib3R0b21MYXllckV4cGFuZERpc3QgPSAxMDtcbiAgdGhpcy5ib3R0b21MYXllckJhY2tUaW1lID0gMC4xO1xuICB0aGlzLnRvcExheWVyRXhwYW5kVGltZSA9IDAuNDtcbiAgdGhpcy50b3BMYXllckV4cGFuZERpc3QgPSAyMDtcbiAgdGhpcy50b3BMYXllckJhY2tUaW1lID0gMC4yO1xuICB0aGlzLnNoYWRvd0ZhZGVPdXRUaW1lID0gMC4yO1xuICB0aGlzLnNoYWRvd0ZhZGVJblRpbWUgPSAwLjM7XG59O1xuZXhwb3J0IGNsYXNzIFRpbGUyU2h1ZmZsZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBwbGF5U2h1ZmZsZUF1ZGlvKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlJlZnJlc2gpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSA9IHRoaXM7XG4gICAgdGhpcy5wbGF5U2h1ZmZsZUF1ZGlvKCk7XG4gICAgdmFyIHIgPSBuZXcgZCgpLFxuICAgICAgbCA9IHRoaXMuY2FsY3VsYXRlUGhhc2VUaW1pbmdzKHIpLFxuICAgICAgcyA9IGwucGhhc2UxVGltZSxcbiAgICAgIHUgPSBsLnBoYXNlMlRpbWUsXG4gICAgICBwID0gbC5zdGF5RW5kVGltZSxcbiAgICAgIGYgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCksXG4gICAgICBoID0gZi5nZXRUaWxlTm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSBlLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuaXNWYWxpZCkgJiYgIWUudGlsZU9iamVjdC5nZXRJc0luU2xvdEJhcigpO1xuICAgICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHkgPSBfX3ZhbHVlcyhoKSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIChUID0gbS52YWx1ZSkuc3RvcEFsbEFuaW1hdGlvbigpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBtICYmICFtLmRvbmUgJiYgKHQgPSB5LnJldHVybikgJiYgdC5jYWxsKHkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25TaHVmZmxlU3RheVN0YXJ0KGgpO1xuICAgIGlmICgwICE9PSBoLmxlbmd0aCkge1xuICAgICAgdmFyIHYgPSB0aGlzLmdldENlbnRlclBvc2l0aW9uKGhbMF0uY2FyZE5vZGUucGFyZW50KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGcgPSBfX3ZhbHVlcyhoKSwgXyA9IGcubmV4dCgpOyAhXy5kb25lOyBfID0gZy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgVCA9IF8udmFsdWU7XG4gICAgICAgICAgdGhpcy5wbGF5R2F0aGVyQW5pbWF0aW9uKFQsIHYsIHIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgXyAmJiAhXy5kb25lICYmIChuID0gZy5yZXR1cm4pICYmIG4uY2FsbChnKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2MudHdlZW4oZi5yb290KS5kZWxheShzKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUsIHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKGgpLCBuID0gby5uZXh0KCk7ICFuLmRvbmU7IG4gPSBvLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGwgPSBuLnZhbHVlO1xuICAgICAgICAgICAgaS5wbGF5U2hha2VBbmltYXRpb24obC5jYXJkTm9kZSwgcik7XG4gICAgICAgICAgICBpLnBsYXlTaGFrZUFuaW1hdGlvbihsLnNoYWRvd0NhcmROb2RlLCByKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuICYmICFuLmRvbmUgJiYgKHQgPSBvLnJldHVybikgJiYgdC5jYWxsKG8pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmRlbGF5KHAgLSBzKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUsXG4gICAgICAgICAgdCxcbiAgICAgICAgICBvID0gZi5nZXRUaWxlTm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgcmV0dXJuIChudWxsID09PSAodCA9IGUudGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pc1ZhbGlkKSAmJiAhZS50aWxlT2JqZWN0LmdldElzSW5TbG90QmFyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKG8pLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGwgPSByLnZhbHVlO1xuICAgICAgICAgICAgbC5jYXJkTm9kZS5wb3NpdGlvbiA9IHY7XG4gICAgICAgICAgICBsLnNoYWRvd0NhcmROb2RlLnBvc2l0aW9uID0gdjtcbiAgICAgICAgICAgIGwuc2hhZG93Q2FyZE5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgciAmJiAhci5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkub25TaHVmZmxlU3RheUVuZChvKTtcbiAgICAgIH0pLmRlbGF5KHMgKyB1IC0gKHAgLSBzKSAtIHMpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpLnBsYXlMYXllckFuaW1hdGlvbih2LCByKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgcGxheUxheWVyQW5pbWF0aW9uKGUsIHQpIHtcbiAgICBmb3IgKHZhciBvLCBuLCBpID0gdGhpcywgciA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKSwgbCA9IFtdLCBzID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5tYXBMYXllcnMoKSwgYyA9IHMubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgIHZhciB1ID0ge1xuICAgICAgICBsYXllckluZGV4OiBjLFxuICAgICAgICB0aWxlTm9kZU9iamVjdHM6IFtdXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgcCA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyhzW2NdLmFsbENhcmRzKSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGQgPSBmLnZhbHVlLFxuICAgICAgICAgICAgaCA9IHIuZ2V0VGlsZU5vZGVCeVRpbGVJZChkLmlkKTtcbiAgICAgICAgICBkLmlzVmFsaWQgJiYgaCAmJiAhaC50aWxlT2JqZWN0LmdldElzSW5TbG90QmFyKCkgJiYgdS50aWxlTm9kZU9iamVjdHMucHVzaChoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobiA9IHAucmV0dXJuKSAmJiBuLmNhbGwocCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHUudGlsZU5vZGVPYmplY3RzLmxlbmd0aCA+IDAgJiYgbC5wdXNoKHUpO1xuICAgIH1cbiAgICB2YXIgeSA9IDAsXG4gICAgICBtID0gMDtcbiAgICBmb3IgKGMgPSAwOyBjIDwgbC5sZW5ndGg7IGMrKykge1xuICAgICAgdmFyIHYgPSB0aGlzLmNhbGNMYXllclBhcmFtcyhjLCBsLmxlbmd0aCwgdCksXG4gICAgICAgIGcgPSAoVCA9IHYuZXhwYW5kVGltZSkgKyAoYiA9IHYuYmFja1RpbWUpO1xuICAgICAgaWYgKGcgPj0gbSkge1xuICAgICAgICBtID0gZztcbiAgICAgICAgeSA9IGM7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoYyA9IDA7IGMgPCBsLmxlbmd0aDsgYysrKSBmb3IgKHZhciBfID0gdGhpcy5jYWxjTGF5ZXJQYXJhbXMoYywgbC5sZW5ndGgsIHQpLCBUID0gXy5leHBhbmRUaW1lLCBDID0gXy5leHBhbmREaXN0LCBiID0gXy5iYWNrVGltZSwgRSA9ICh1ID0gbFtjXSwgMCk7IEUgPCB1LnRpbGVOb2RlT2JqZWN0cy5sZW5ndGg7IEUrKykge1xuICAgICAgdmFyIFMgPSBjID09PSB5ICYmIEUgPT09IHUudGlsZU5vZGVPYmplY3RzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLnBsYXlFeHBhbmRBbmltYXRpb24odS50aWxlTm9kZU9iamVjdHNbRV0sIGUsIFQsIEMsIGIsIFMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaS5vblNodWZmbGVBbmltYXRpb25FbmQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBjYWxjdWxhdGVQaGFzZVRpbWluZ3MoZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwaGFzZTFUaW1lOiBlLmdhdGhlckV4cGFuZFRpbWUgKyBlLmdhdGhlclNocmlua1RpbWUsXG4gICAgICBwaGFzZTJUaW1lOiBlLnNoYWtlVGltZXNbZS5zaGFrZVRpbWVzLmxlbmd0aCAtIDFdLFxuICAgICAgc3RheUVuZFRpbWU6IGUuZ2F0aGVyRXhwYW5kVGltZSArIGUuZ2F0aGVyU2hyaW5rVGltZSArIGUuc2NhbGVTdGFydFRpbWVcbiAgICB9O1xuICB9XG4gIGdldENlbnRlclBvc2l0aW9uKGUpIHtcbiAgICB2YXIgdCA9IGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoMC41ICogY2Mud2luU2l6ZS53aWR0aCwgMC41ICogY2Mud2luU2l6ZS5oZWlnaHQpKTtcbiAgICByZXR1cm4gY2MudjModC54LCB0LnkpO1xuICB9XG4gIHBsYXlHYXRoZXJBbmltYXRpb24oZSwgdCwgbykge1xuICAgIHZhciBuID0gZS5jYXJkTm9kZS5wb3NpdGlvbi5jbG9uZSgpLmNsb25lKCkuc3VidHJhY3QodCksXG4gICAgICBpID0gbi5tYWcoKTtcbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIG4ubm9ybWFsaXplU2VsZigpO1xuICAgICAgdmFyIHIgPSB0LmFkZChuLm11bChpICsgby5nYXRoZXJFeHBhbmREaXN0KSk7XG4gICAgICBjYy50d2VlbihlLmNhcmROb2RlKS50byhvLmdhdGhlckV4cGFuZFRpbWUsIHtcbiAgICAgICAgcG9zaXRpb246IHJcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkudG8oby5nYXRoZXJTaHJpbmtUaW1lLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkSW5cIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKGUuc2hhZG93Q2FyZE5vZGUpLnRvKG8uZ2F0aGVyRXhwYW5kVGltZSwge1xuICAgICAgICBwb3NpdGlvbjogclxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgICB9KS50byhvLmdhdGhlclNocmlua1RpbWUsIHtcbiAgICAgICAgcG9zaXRpb246IHQsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRJblwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYSA9IG8uZ2F0aGVyRXhwYW5kVGltZSArIG8uZ2F0aGVyU2hyaW5rVGltZTtcbiAgICAgIGNjLnR3ZWVuKGUuY2FyZE5vZGUpLmRlbGF5KGEpLnN0YXJ0KCk7XG4gICAgICBjYy50d2VlbihlLnNoYWRvd0NhcmROb2RlKS5kZWxheShvLmdhdGhlckV4cGFuZFRpbWUpLnRvKG8uZ2F0aGVyU2hyaW5rVGltZSwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5U2hha2VBbmltYXRpb24oZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSBjYy50d2VlbihlKSwgbiA9IDE7IG4gPCB0LnNoYWtlVGltZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gdC5zaGFrZVRpbWVzW25dIC0gdC5zaGFrZVRpbWVzW24gLSAxXTtcbiAgICAgIG8udG8oaSwge1xuICAgICAgICBhbmdsZTogdC5zaGFrZVJvdGF0aW9uc1tuXVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBvLnN0YXJ0KCk7XG4gIH1cbiAgY2FsY0xheWVyUGFyYW1zKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IGZ1bmN0aW9uIG4obywgbikge1xuICAgICAgcmV0dXJuIHQgPD0gMSA/IG8gOiBvICsgZSAvICh0IC0gMSkgKiAobiAtIG8pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZFRpbWU6IG4oby50b3BMYXllckV4cGFuZFRpbWUsIG8uYm90dG9tTGF5ZXJFeHBhbmRUaW1lKSxcbiAgICAgIGV4cGFuZERpc3Q6IG4oby50b3BMYXllckV4cGFuZERpc3QsIG8uYm90dG9tTGF5ZXJFeHBhbmREaXN0KSxcbiAgICAgIGJhY2tUaW1lOiBuKG8udG9wTGF5ZXJCYWNrVGltZSwgby5ib3R0b21MYXllckJhY2tUaW1lKVxuICAgIH07XG4gIH1cbiAgcGxheUV4cGFuZEFuaW1hdGlvbihlLCB0LCBvLCBuLCBpLCByLCBhKSB7XG4gICAgaWYgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUudGlsZU9iamVjdCkge1xuICAgICAgdmFyIGwgPSBlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHZhciBzID0gbC5jbG9uZSgpLnN1YnRyYWN0KHQpLFxuICAgICAgICAgIGMgPSBzLm1hZygpO1xuICAgICAgICBpZiAoYyA+IDApIHtcbiAgICAgICAgICBzLm5vcm1hbGl6ZVNlbGYoKTtcbiAgICAgICAgICB2YXIgdSA9IHQuYWRkKHMubXVsKGMgKyBuKSk7XG4gICAgICAgICAgY2MudHdlZW4oZS5jYXJkTm9kZSkudG8obywge1xuICAgICAgICAgICAgcG9zaXRpb246IHVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIlxuICAgICAgICAgIH0pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgY2MudHdlZW4oZS5zaGFkb3dDYXJkTm9kZSkudG8obywge1xuICAgICAgICAgICAgcG9zaXRpb246IHUsXG4gICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIlxuICAgICAgICAgIH0pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgciAmJiAobnVsbCA9PSBhIHx8IGEoKSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYy50d2VlbihlLmNhcmROb2RlKS5kZWxheShvKS50byhpLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIGNjLnR3ZWVuKGUuc2hhZG93Q2FyZE5vZGUpLmRlbGF5KG8pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsLFxuICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgciAmJiAobnVsbCA9PSBhIHx8IGEoKSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHIgJiYgKG51bGwgPT0gYSB8fCBhKCkpO1xuICAgIH0gZWxzZSByICYmIChudWxsID09IGEgfHwgYSgpKTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnQoKSB7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgdGhpcy5vblNodWZmbGVTdGF5U3RhcnRQbGF5KCk7XG4gICAgU2h1ZmZsZVV0aWxzLm9uU2h1ZmZsZVN0YXlTdGFydFBsYXkodGhpcy5fY29udGV4dCk7XG4gIH1cbiAgb25TaHVmZmxlU3RheVN0YXJ0UGxheSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTaHVmZmxlQmh2X3N0YXlFbmRcIilcbiAgb25TaHVmZmxlU3RheUVuZFBsYXkoKSB7XG4gICAgU2h1ZmZsZVV0aWxzLnBsYXlSZWZyZXNoQW5pbWF0aW9uKHRoaXMuX2NvbnRleHQpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuQmVoYXZpb3JfU2h1ZmZsZVN0YXlFbmQsIHRoaXMpO1xuICB9XG4gIG9uU2h1ZmZsZVN0YXlFbmQoZSkge1xuICAgIHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKS5yZWJ1aWxkVGlsZU5vZGVJbmZvc0FmdGVyU2h1ZmZsZShlKTtcbiAgICB0aGlzLm9uU2h1ZmZsZVN0YXlFbmRQbGF5KCk7XG4gIH1cbiAgb25TaHVmZmxlQW5pbWF0aW9uRW5kKCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuQmVoYXZpb3JfU2h1ZmZsZUJlaGF2aW9yRmluaXNoKTtcbiAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU2h1ZmZsZUJodl92aWJyYXRlXCIpXG4gIHBsYXlTaHVmZmxlVmlicmF0ZSgpIHtcbiAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZShFVmlicmF0ZVN0cmVuZ3RoLkRvdWJsZVdlYWssIEVWaWJyYXRlUG9pbnQuVGlsZTJTaHVmZmxlRG9uZSk7XG4gIH1cbn0iXX0=