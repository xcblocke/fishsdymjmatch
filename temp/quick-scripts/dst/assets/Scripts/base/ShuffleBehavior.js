
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ShuffleBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98b07U77WZNyY+SfnyxQRiu', 'ShuffleBehavior');
// Scripts/base/ShuffleBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleBehavior = void 0;
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleUtils_1 = require("../UiUtils/ShuffleUtils");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var f = function f() {
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
var ShuffleBehavior = /** @class */ (function (_super) {
    __extends(ShuffleBehavior, _super);
    function ShuffleBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleBehavior.calculateLayerParam = function (e, t, o, n) {
        return t <= 1 ? o : o + e / (t - 1) * (n - o);
    };
    ShuffleBehavior.playSingleCardScaleAnimation = function (e, t) {
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
    ShuffleBehavior.scheduleStayEndCallback = function (e, t) {
        t && cc.tween({}).delay(e).call(t).start();
    };
    ShuffleBehavior.prototype.playShuffleAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Refresh);
    };
    ShuffleBehavior.prototype.start = function () {
        var e, t, o, n, i = this;
        this.playShuffleAudio();
        var r = new f(), l = this.calculatePhaseTimings(r), c = l.phase1Time, u = l.phase2Time, p = l.stayEndTime, d = this.context.getTileNodeManager(), h = d.getTileNodes().filter(function (e) {
            return e.tileObject && e.tileObject.isValid;
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
        if (0 != h.length) {
            var v = this.getCenterPosition(h[0].cardNode.parent);
            try {
                for (var g = __values(h), _ = g.next(); !_.done; _ = g.next()) {
                    var T = _.value;
                    this.playSingleCardGatherAnimation(T, v, r);
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
            cc.tween(d.root).delay(c).call(function () {
                var e, t;
                try {
                    for (var o = __values(h), n = o.next(); !n.done; n = o.next()) {
                        var l = n.value;
                        i.playSingleCardShakeAnimation(l.cardNode, r);
                        i.playSingleCardShakeAnimation(l.shadowCardNode, r);
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
            }).delay(p - c).call(function () {
                var e, t;
                d.rebuildChangeTypeTileNodes(h);
                var o = d.getTileNodes().filter(function (e) {
                    return e.tileObject && e.tileObject.isValid;
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
            }).delay(c + u - (p - c) - c).call(function () {
                i.playLayerAnimation(v, r);
            }).start();
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ShuffleBehavior.prototype.playLayerAnimation = function (e, t) {
        for (var o, n, i = this, r = this.context.getTileNodeManager(), l = [], s = this.context.getTileMapObject().mapLayers(), c = s.length - 1; c >= 0; c--) {
            var u = {
                layerIndex: c,
                tileNodeObjects: []
            };
            try {
                for (var p = (o = void 0, __values(s[c].allCards)), f = p.next(); !f.done; f = p.next()) {
                    var d = f.value, h = r.getTileNodeByTileId(d.id);
                    d.isValid && h && u.tileNodeObjects.push(h);
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
            for (var y = this.calculateLayerAnimationParams(c, l.length, t), m = y.expandTime, v = y.expandDist, g = y.backTime, _ = 0; _ < u.tileNodeObjects.length; _++) {
                h = u.tileNodeObjects[_];
                var T = c === l.length - 1 && _ === u.tileNodeObjects.length - 1;
                this.playSingleCardExpandAnimation(h, e, m, v, g, T, function () {
                    i.onShuffleAnimationEnd();
                });
            }
        }
    };
    ShuffleBehavior.prototype.calculatePhaseTimings = function (e) {
        return {
            phase1Time: e.gatherExpandTime + e.gatherShrinkTime,
            phase2Time: e.shakeTimes[e.shakeTimes.length - 1],
            stayEndTime: e.gatherExpandTime + e.gatherShrinkTime + e.scaleStartTime
        };
    };
    ShuffleBehavior.prototype.getCenterPosition = function (e) {
        var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
        return cc.v3(t.x, t.y);
    };
    ShuffleBehavior.prototype.playSingleCardGatherAnimation = function (e, t, o) {
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
    ShuffleBehavior.prototype.playSingleCardShakeAnimation = function (e, t) {
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
    ShuffleBehavior.prototype.calculateLayerAnimationParams = function (e, o, n) {
        return {
            expandTime: ShuffleBehavior.calculateLayerParam(e, o, n.topLayerExpandTime, n.bottomLayerExpandTime),
            expandDist: ShuffleBehavior.calculateLayerParam(e, o, n.topLayerExpandDist, n.bottomLayerExpandDist),
            backTime: ShuffleBehavior.calculateLayerParam(e, o, n.topLayerBackTime, n.bottomLayerBackTime)
        };
    };
    ShuffleBehavior.prototype.playSingleCardExpandAnimation = function (e, t, o, n, i, r, a) {
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
    ShuffleBehavior.prototype.onShuffleStayStart = function (e) {
        var t, o;
        this.context.gameView.setSwallowEventNodeActive(true);
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
    ShuffleBehavior.prototype.onShuffleStayStartPlay = function () { };
    ShuffleBehavior.prototype.onShuffleStayEndPlay = function () {
        ShuffleUtils_1.default.playRefreshAnimation(this._context);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd, this);
    };
    ShuffleBehavior.prototype.onShuffleStayEnd = function (e) {
        var t, o;
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                r.refreshNode(r.info);
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
    ShuffleBehavior.prototype.onShuffleAnimationEnd = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ShuffleBehaviorFinish);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("ShuffleBhv_playAud")
    ], ShuffleBehavior.prototype, "playShuffleAudio", null);
    __decorate([
        mj.traitEvent("ShuffleBhv_onStayBeg")
    ], ShuffleBehavior.prototype, "onShuffleStayStart", null);
    __decorate([
        mj.traitEvent("ShuffleBhv_startPlay")
    ], ShuffleBehavior.prototype, "onShuffleStayStartPlay", null);
    __decorate([
        mj.traitEvent("ShuffleBhv_endPlay")
    ], ShuffleBehavior.prototype, "onShuffleStayEndPlay", null);
    __decorate([
        mj.traitEvent("ShuffleBhv_onStayEnd")
    ], ShuffleBehavior.prototype, "onShuffleStayEnd", null);
    __decorate([
        mj.traitEvent("ShuffleBhv_onAnimEnd")
    ], ShuffleBehavior.prototype, "onShuffleAnimationEnd", null);
    return ShuffleBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ShuffleBehavior = ShuffleBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU2h1ZmZsZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHFFQUFvRTtBQUNwRSwwRUFBb0U7QUFDcEUsd0RBQW1EO0FBQ25ELHlEQUF3RDtBQUN4RCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDekIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztJQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztJQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FB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Q0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQWpURDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7MkRBR25DO0lBcVBEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzs2REF3QnJDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2lFQUNYO0lBRTNCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzsrREFJbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7MkRBcUJyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztnRUFLckM7SUFDSCxzQkFBQztDQXJVRCxBQXFVQyxDQXJVb0MscUNBQWlCLEdBcVVyRDtBQXJVWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFNodWZmbGVVdGlscyBmcm9tICcuLi9VaVV0aWxzL1NodWZmbGVVdGlscyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xudmFyIGYgPSBmdW5jdGlvbiBmKCkge1xuICB0aGlzLmdhdGhlckV4cGFuZFRpbWUgPSAwLjI7XG4gIHRoaXMuZ2F0aGVyRXhwYW5kRGlzdCA9IDEwO1xuICB0aGlzLmdhdGhlclNocmlua1RpbWUgPSAwLjM7XG4gIHRoaXMuc2hha2VSb3RhdGlvbnMgPSBbMCwgNSwgLTUsIDUsIDBdO1xuICB0aGlzLnNoYWtlVGltZXMgPSBbMCwgMC4wNywgMC4xNCwgMC4yMSwgMC4zXTtcbiAgdGhpcy5zY2FsZVN0YXJ0VGltZSA9IDAuMjE7XG4gIHRoaXMuc2NhbGVUaW1lID0gMC4wOTtcbiAgdGhpcy5zY2FsZVZhbHVlID0gMC44O1xuICB0aGlzLnNjYWxlQmFja1RpbWUgPSAwLjE7XG4gIHRoaXMuYm90dG9tTGF5ZXJFeHBhbmRUaW1lID0gMC4zO1xuICB0aGlzLmJvdHRvbUxheWVyRXhwYW5kRGlzdCA9IDEwO1xuICB0aGlzLmJvdHRvbUxheWVyQmFja1RpbWUgPSAwLjE7XG4gIHRoaXMudG9wTGF5ZXJFeHBhbmRUaW1lID0gMC40O1xuICB0aGlzLnRvcExheWVyRXhwYW5kRGlzdCA9IDIwO1xuICB0aGlzLnRvcExheWVyQmFja1RpbWUgPSAwLjI7XG4gIHRoaXMuc2hhZG93RmFkZU91dFRpbWUgPSAwLjI7XG4gIHRoaXMuc2hhZG93RmFkZUluVGltZSA9IDAuMztcbn07XG5leHBvcnQgY2xhc3MgU2h1ZmZsZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGF0aWMgY2FsY3VsYXRlTGF5ZXJQYXJhbShlLCB0LCBvLCBuKSB7XG4gICAgcmV0dXJuIHQgPD0gMSA/IG8gOiBvICsgZSAvICh0IC0gMSkgKiAobiAtIG8pO1xuICB9XG4gIHN0YXRpYyBwbGF5U2luZ2xlQ2FyZFNjYWxlQW5pbWF0aW9uKGUsIHQpIHtcbiAgICBjYy50d2VlbihlKS5kZWxheSh0LnNjYWxlU3RhcnRUaW1lKS50byh0LnNjYWxlVGltZSwge1xuICAgICAgc2NhbGU6IHQuc2NhbGVWYWx1ZVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJxdWFkSW5cIlxuICAgIH0pLnRvKHQuc2NhbGVCYWNrVGltZSwge1xuICAgICAgc2NhbGU6IDFcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IFwicXVhZE91dFwiXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBzdGF0aWMgc2NoZWR1bGVTdGF5RW5kQ2FsbGJhY2soZSwgdCkge1xuICAgIHQgJiYgY2MudHdlZW4oe30pLmRlbGF5KGUpLmNhbGwodCkuc3RhcnQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNodWZmbGVCaHZfcGxheUF1ZFwiKVxuICBwbGF5U2h1ZmZsZUF1ZGlvKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlJlZnJlc2gpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSA9IHRoaXM7XG4gICAgdGhpcy5wbGF5U2h1ZmZsZUF1ZGlvKCk7XG4gICAgdmFyIHIgPSBuZXcgZigpLFxuICAgICAgbCA9IHRoaXMuY2FsY3VsYXRlUGhhc2VUaW1pbmdzKHIpLFxuICAgICAgYyA9IGwucGhhc2UxVGltZSxcbiAgICAgIHUgPSBsLnBoYXNlMlRpbWUsXG4gICAgICBwID0gbC5zdGF5RW5kVGltZSxcbiAgICAgIGQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCksXG4gICAgICBoID0gZC5nZXRUaWxlTm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUudGlsZU9iamVjdCAmJiBlLnRpbGVPYmplY3QuaXNWYWxpZDtcbiAgICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXMoaCksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSAoVCA9IG0udmFsdWUpLnN0b3BBbGxBbmltYXRpb24oKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbSAmJiAhbS5kb25lICYmICh0ID0geS5yZXR1cm4pICYmIHQuY2FsbCh5KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uU2h1ZmZsZVN0YXlTdGFydChoKTtcbiAgICBpZiAoMCAhPSBoLmxlbmd0aCkge1xuICAgICAgdmFyIHYgPSB0aGlzLmdldENlbnRlclBvc2l0aW9uKGhbMF0uY2FyZE5vZGUucGFyZW50KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGcgPSBfX3ZhbHVlcyhoKSwgXyA9IGcubmV4dCgpOyAhXy5kb25lOyBfID0gZy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgVCA9IF8udmFsdWU7XG4gICAgICAgICAgdGhpcy5wbGF5U2luZ2xlQ2FyZEdhdGhlckFuaW1hdGlvbihULCB2LCByKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF8gJiYgIV8uZG9uZSAmJiAobiA9IGcucmV0dXJuKSAmJiBuLmNhbGwoZyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNjLnR3ZWVuKGQucm9vdCkuZGVsYXkoYykuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlLCB0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyhoKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBsID0gbi52YWx1ZTtcbiAgICAgICAgICAgIGkucGxheVNpbmdsZUNhcmRTaGFrZUFuaW1hdGlvbihsLmNhcmROb2RlLCByKTtcbiAgICAgICAgICAgIGkucGxheVNpbmdsZUNhcmRTaGFrZUFuaW1hdGlvbihsLnNoYWRvd0NhcmROb2RlLCByKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuICYmICFuLmRvbmUgJiYgKHQgPSBvLnJldHVybikgJiYgdC5jYWxsKG8pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLmRlbGF5KHAgLSBjKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUsIHQ7XG4gICAgICAgIGQucmVidWlsZENoYW5nZVR5cGVUaWxlTm9kZXMoaCk7XG4gICAgICAgIHZhciBvID0gZC5nZXRUaWxlTm9kZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS50aWxlT2JqZWN0ICYmIGUudGlsZU9iamVjdC5pc1ZhbGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMobyksIHIgPSBuLm5leHQoKTsgIXIuZG9uZTsgciA9IG4ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgbCA9IHIudmFsdWU7XG4gICAgICAgICAgICBsLmNhcmROb2RlLnBvc2l0aW9uID0gdjtcbiAgICAgICAgICAgIGwuc2hhZG93Q2FyZE5vZGUucG9zaXRpb24gPSB2O1xuICAgICAgICAgICAgbC5zaGFkb3dDYXJkTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByICYmICFyLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaS5vblNodWZmbGVTdGF5RW5kKG8pO1xuICAgICAgfSkuZGVsYXkoYyArIHUgLSAocCAtIGMpIC0gYykuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkucGxheUxheWVyQW5pbWF0aW9uKHYsIHIpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBwbGF5TGF5ZXJBbmltYXRpb24oZSwgdCkge1xuICAgIGZvciAodmFyIG8sIG4sIGkgPSB0aGlzLCByID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLCBsID0gW10sIHMgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLm1hcExheWVycygpLCBjID0gcy5sZW5ndGggLSAxOyBjID49IDA7IGMtLSkge1xuICAgICAgdmFyIHUgPSB7XG4gICAgICAgIGxheWVySW5kZXg6IGMsXG4gICAgICAgIHRpbGVOb2RlT2JqZWN0czogW11cbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBwID0gKG8gPSB2b2lkIDAsIF9fdmFsdWVzKHNbY10uYWxsQ2FyZHMpKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZCA9IGYudmFsdWUsXG4gICAgICAgICAgICBoID0gci5nZXRUaWxlTm9kZUJ5VGlsZUlkKGQuaWQpO1xuICAgICAgICAgIGQuaXNWYWxpZCAmJiBoICYmIHUudGlsZU5vZGVPYmplY3RzLnB1c2goaCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKG4gPSBwLnJldHVybikgJiYgbi5jYWxsKHApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1LnRpbGVOb2RlT2JqZWN0cy5sZW5ndGggPiAwICYmIGwucHVzaCh1KTtcbiAgICB9XG4gICAgZm9yIChjID0gMDsgYyA8IGwubGVuZ3RoOyBjKyspIHtcbiAgICAgIHUgPSBsW2NdO1xuICAgICAgZm9yICh2YXIgeSA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJBbmltYXRpb25QYXJhbXMoYywgbC5sZW5ndGgsIHQpLCBtID0geS5leHBhbmRUaW1lLCB2ID0geS5leHBhbmREaXN0LCBnID0geS5iYWNrVGltZSwgXyA9IDA7IF8gPCB1LnRpbGVOb2RlT2JqZWN0cy5sZW5ndGg7IF8rKykge1xuICAgICAgICBoID0gdS50aWxlTm9kZU9iamVjdHNbX107XG4gICAgICAgIHZhciBUID0gYyA9PT0gbC5sZW5ndGggLSAxICYmIF8gPT09IHUudGlsZU5vZGVPYmplY3RzLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMucGxheVNpbmdsZUNhcmRFeHBhbmRBbmltYXRpb24oaCwgZSwgbSwgdiwgZywgVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGkub25TaHVmZmxlQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYWxjdWxhdGVQaGFzZVRpbWluZ3MoZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwaGFzZTFUaW1lOiBlLmdhdGhlckV4cGFuZFRpbWUgKyBlLmdhdGhlclNocmlua1RpbWUsXG4gICAgICBwaGFzZTJUaW1lOiBlLnNoYWtlVGltZXNbZS5zaGFrZVRpbWVzLmxlbmd0aCAtIDFdLFxuICAgICAgc3RheUVuZFRpbWU6IGUuZ2F0aGVyRXhwYW5kVGltZSArIGUuZ2F0aGVyU2hyaW5rVGltZSArIGUuc2NhbGVTdGFydFRpbWVcbiAgICB9O1xuICB9XG4gIGdldENlbnRlclBvc2l0aW9uKGUpIHtcbiAgICB2YXIgdCA9IGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoMC41ICogY2Mud2luU2l6ZS53aWR0aCwgMC41ICogY2Mud2luU2l6ZS5oZWlnaHQpKTtcbiAgICByZXR1cm4gY2MudjModC54LCB0LnkpO1xuICB9XG4gIHBsYXlTaW5nbGVDYXJkR2F0aGVyQW5pbWF0aW9uKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IGUuY2FyZE5vZGUucG9zaXRpb24uY2xvbmUoKS5jbG9uZSgpLnN1YnRyYWN0KHQpLFxuICAgICAgaSA9IG4ubWFnKCk7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICBuLm5vcm1hbGl6ZVNlbGYoKTtcbiAgICAgIHZhciByID0gdC5hZGQobi5tdWwoaSArIG8uZ2F0aGVyRXhwYW5kRGlzdCkpO1xuICAgICAgY2MudHdlZW4oZS5jYXJkTm9kZSkudG8oby5nYXRoZXJFeHBhbmRUaW1lLCB7XG4gICAgICAgIHBvc2l0aW9uOiByXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgIH0pLnRvKG8uZ2F0aGVyU2hyaW5rVGltZSwge1xuICAgICAgICBwb3NpdGlvbjogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZEluXCJcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy50d2VlbihlLnNoYWRvd0NhcmROb2RlKS50byhvLmdhdGhlckV4cGFuZFRpbWUsIHtcbiAgICAgICAgcG9zaXRpb246IHJcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkudG8oby5nYXRoZXJTaHJpbmtUaW1lLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0LFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkSW5cIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGEgPSBvLmdhdGhlckV4cGFuZFRpbWUgKyBvLmdhdGhlclNocmlua1RpbWU7XG4gICAgICBjYy50d2VlbihlLmNhcmROb2RlKS5kZWxheShhKS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4oZS5zaGFkb3dDYXJkTm9kZSkuZGVsYXkoby5nYXRoZXJFeHBhbmRUaW1lKS50byhvLmdhdGhlclNocmlua1RpbWUsIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVNpbmdsZUNhcmRTaGFrZUFuaW1hdGlvbihlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IGNjLnR3ZWVuKGUpLCBuID0gMTsgbiA8IHQuc2hha2VUaW1lcy5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIGkgPSB0LnNoYWtlVGltZXNbbl0gLSB0LnNoYWtlVGltZXNbbiAtIDFdO1xuICAgICAgby50byhpLCB7XG4gICAgICAgIGFuZ2xlOiB0LnNoYWtlUm90YXRpb25zW25dXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIG8uc3RhcnQoKTtcbiAgfVxuICBjYWxjdWxhdGVMYXllckFuaW1hdGlvblBhcmFtcyhlLCBvLCBuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZFRpbWU6IFNodWZmbGVCZWhhdmlvci5jYWxjdWxhdGVMYXllclBhcmFtKGUsIG8sIG4udG9wTGF5ZXJFeHBhbmRUaW1lLCBuLmJvdHRvbUxheWVyRXhwYW5kVGltZSksXG4gICAgICBleHBhbmREaXN0OiBTaHVmZmxlQmVoYXZpb3IuY2FsY3VsYXRlTGF5ZXJQYXJhbShlLCBvLCBuLnRvcExheWVyRXhwYW5kRGlzdCwgbi5ib3R0b21MYXllckV4cGFuZERpc3QpLFxuICAgICAgYmFja1RpbWU6IFNodWZmbGVCZWhhdmlvci5jYWxjdWxhdGVMYXllclBhcmFtKGUsIG8sIG4udG9wTGF5ZXJCYWNrVGltZSwgbi5ib3R0b21MYXllckJhY2tUaW1lKVxuICAgIH07XG4gIH1cbiAgcGxheVNpbmdsZUNhcmRFeHBhbmRBbmltYXRpb24oZSwgdCwgbywgbiwgaSwgciwgYSkge1xuICAgIGlmIChlICYmIGUudGlsZU9iamVjdCkge1xuICAgICAgdmFyIGwgPSBlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHZhciBzID0gbC5jbG9uZSgpLnN1YnRyYWN0KHQpLFxuICAgICAgICAgIGMgPSBzLm1hZygpO1xuICAgICAgICBpZiAoYyA+IDApIHtcbiAgICAgICAgICBzLm5vcm1hbGl6ZVNlbGYoKTtcbiAgICAgICAgICB2YXIgdSA9IHQuYWRkKHMubXVsKGMgKyBuKSk7XG4gICAgICAgICAgY2MudHdlZW4oZS5jYXJkTm9kZSkudG8obywge1xuICAgICAgICAgICAgcG9zaXRpb246IHVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIlxuICAgICAgICAgIH0pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgY2MudHdlZW4oZS5zaGFkb3dDYXJkTm9kZSkudG8obywge1xuICAgICAgICAgICAgcG9zaXRpb246IHUsXG4gICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIlxuICAgICAgICAgIH0pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgciAmJiAobnVsbCA9PSBhIHx8IGEoKSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYy50d2VlbihlLmNhcmROb2RlKS5kZWxheShvKS50byhpLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIGNjLnR3ZWVuKGUuc2hhZG93Q2FyZE5vZGUpLmRlbGF5KG8pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsLFxuICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgciAmJiAobnVsbCA9PSBhIHx8IGEoKSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHIgJiYgKG51bGwgPT0gYSB8fCBhKCkpO1xuICAgIH0gZWxzZSByICYmIChudWxsID09IGEgfHwgYSgpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNodWZmbGVCaHZfb25TdGF5QmVnXCIpXG4gIG9uU2h1ZmZsZVN0YXlTdGFydChlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhlKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBpLnZhbHVlO1xuICAgICAgICByLmNhbmNlbFNlbGVjdGVkKCk7XG4gICAgICAgIHIuaGlkZVByb3BIaW50KCk7XG4gICAgICAgIHIuc3RvcEFsbEFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25TaHVmZmxlU3RheVN0YXJ0UGxheSgpO1xuICAgIFNodWZmbGVVdGlscy5vblNodWZmbGVTdGF5U3RhcnRQbGF5KHRoaXMuX2NvbnRleHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiU2h1ZmZsZUJodl9zdGFydFBsYXlcIilcbiAgb25TaHVmZmxlU3RheVN0YXJ0UGxheSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiU2h1ZmZsZUJodl9lbmRQbGF5XCIpXG4gIG9uU2h1ZmZsZVN0YXlFbmRQbGF5KCkge1xuICAgIFNodWZmbGVVdGlscy5wbGF5UmVmcmVzaEFuaW1hdGlvbih0aGlzLl9jb250ZXh0KTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LkJlaGF2aW9yX1NodWZmbGVTdGF5RW5kLCB0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNodWZmbGVCaHZfb25TdGF5RW5kXCIpXG4gIG9uU2h1ZmZsZVN0YXlFbmQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoZSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciByID0gaS52YWx1ZTtcbiAgICAgICAgci5yZWZyZXNoTm9kZShyLmluZm8pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25TaHVmZmxlU3RheUVuZFBsYXkoKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LkJlaGF2aW9yX1NodWZmbGVTdGF5RW5kLCB0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNodWZmbGVCaHZfb25BbmltRW5kXCIpXG4gIG9uU2h1ZmZsZUFuaW1hdGlvbkVuZCgpIHtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LkJlaGF2aW9yX1NodWZmbGVCZWhhdmlvckZpbmlzaCk7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=