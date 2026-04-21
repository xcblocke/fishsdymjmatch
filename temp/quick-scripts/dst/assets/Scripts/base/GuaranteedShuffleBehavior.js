
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/GuaranteedShuffleBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvR3VhcmFudGVlZFNodWZmbGVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE2RDtBQUM3RCxxRUFBb0U7QUFDcEUsMEVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RCx3REFBbUQ7QUFDbkQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUM7SUFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztJQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0lBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0lBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FB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LEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELHlEQUFxQixHQUFyQjtRQUNFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHNCQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0E5VEEsQUE4VEMsQ0E5VDhDLHFDQUFpQixHQThUL0Q7QUE5VFksOERBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IFNodWZmbGVVdGlscyBmcm9tICcuLi9VaVV0aWxzL1NodWZmbGVVdGlscyc7XG52YXIgcCA9IGZ1bmN0aW9uIHAoKSB7XG4gIHRoaXMuZ2F0aGVyRXhwYW5kVGltZSA9IDAuMjtcbiAgdGhpcy5nYXRoZXJFeHBhbmREaXN0ID0gMTA7XG4gIHRoaXMuZ2F0aGVyU2hyaW5rVGltZSA9IDAuMztcbiAgdGhpcy5zaGFrZVJvdGF0aW9ucyA9IFswLCA1LCAtNSwgNSwgMF07XG4gIHRoaXMuc2hha2VUaW1lcyA9IFswLCAwLjA3LCAwLjE0LCAwLjIxLCAwLjNdO1xuICB0aGlzLnNjYWxlU3RhcnRUaW1lID0gMC4yMTtcbiAgdGhpcy5zY2FsZVRpbWUgPSAwLjA5O1xuICB0aGlzLnNjYWxlVmFsdWUgPSAwLjg7XG4gIHRoaXMuc2NhbGVCYWNrVGltZSA9IDAuMTtcbiAgdGhpcy5ib3R0b21MYXllckV4cGFuZFRpbWUgPSAwLjM7XG4gIHRoaXMuYm90dG9tTGF5ZXJFeHBhbmREaXN0ID0gMTA7XG4gIHRoaXMuYm90dG9tTGF5ZXJCYWNrVGltZSA9IDAuMTtcbiAgdGhpcy50b3BMYXllckV4cGFuZFRpbWUgPSAwLjQ7XG4gIHRoaXMudG9wTGF5ZXJFeHBhbmREaXN0ID0gMjA7XG4gIHRoaXMudG9wTGF5ZXJCYWNrVGltZSA9IDAuMjtcbiAgdGhpcy5zaGFkb3dGYWRlT3V0VGltZSA9IDAuMjtcbiAgdGhpcy5zaGFkb3dGYWRlSW5UaW1lID0gMC4zO1xufTtcbmV4cG9ydCBjbGFzcyBHdWFyYW50ZWVkU2h1ZmZsZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfb3JpZ2luYWxQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gIHN0YXRpYyBjYWxjdWxhdGVMYXllclBhcmFtKGUsIHQsIG8sIG4pIHtcbiAgICByZXR1cm4gdCA8PSAxID8gbyA6IG8gKyBlIC8gKHQgLSAxKSAqIChuIC0gbyk7XG4gIH1cbiAgc3RhdGljIHBsYXlTaW5nbGVDYXJkU2NhbGVBbmltYXRpb24oZSwgdCkge1xuICAgIGNjLnR3ZWVuKGUpLmRlbGF5KHQuc2NhbGVTdGFydFRpbWUpLnRvKHQuc2NhbGVUaW1lLCB7XG4gICAgICBzY2FsZTogdC5zY2FsZVZhbHVlXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBcInF1YWRJblwiXG4gICAgfSkudG8odC5zY2FsZUJhY2tUaW1lLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEgPSB0aGlzO1xuICAgIHRoaXMuX29yaWdpbmFsUG9zaXRpb25zID0gZS5kYXRhLm9yaWdpbmFsUG9zaXRpb25zO1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlJlZnJlc2gpO1xuICAgIHZhciBjID0gbmV3IHAoKSxcbiAgICAgIHUgPSB0aGlzLmNhbGN1bGF0ZVBoYXNlVGltaW5ncyhjKSxcbiAgICAgIGYgPSB1LnBoYXNlMVRpbWUsXG4gICAgICBkID0gKHUucGhhc2UyVGltZSwgdS5zdGF5RW5kVGltZSksXG4gICAgICBoID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLFxuICAgICAgeSA9IGguZ2V0VGlsZU5vZGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnRpbGVPYmplY3QgJiYgZS50aWxlT2JqZWN0LmlzVmFsaWQ7XG4gICAgICB9KTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbSA9IF9fdmFsdWVzKHkpLCB2ID0gbS5uZXh0KCk7ICF2LmRvbmU7IHYgPSBtLm5leHQoKSkge1xuICAgICAgICAoQyA9IHYudmFsdWUpLnN0b3BBbGxBbmltYXRpb24oKTtcbiAgICAgICAgQy5hbmltTm9kZSAmJiBDLmFuaW1Ob2RlLnNldFNjYWxlKEMuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlKTtcbiAgICAgICAgQy50aWxlTm9kZSAmJiBDLnRpbGVOb2RlLnNldFNjYWxlKDEgLyBDLmluZm8udGlsZU9iamVjdC5sYXlvdXRTY2FsZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobyA9IG0ucmV0dXJuKSAmJiBvLmNhbGwobSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vblNodWZmbGVTdGF5U3RhcnQoeSk7XG4gICAgaWYgKDAgIT0geS5sZW5ndGgpIHtcbiAgICAgIHZhciBnID0gdGhpcy5nZXRDZW50ZXJQb3NpdGlvbih5WzBdLmNhcmROb2RlLnBhcmVudCk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfID0gX192YWx1ZXMoeSksIFQgPSBfLm5leHQoKTsgIVQuZG9uZTsgVCA9IF8ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEMgPSBULnZhbHVlO1xuICAgICAgICAgIHRoaXMucGxheVNpbmdsZUNhcmRHYXRoZXJBbmltYXRpb24oQywgZywgYyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBUICYmICFULmRvbmUgJiYgKGkgPSBfLnJldHVybikgJiYgaS5jYWxsKF8pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgICBjYy50d2VlbihoLnJvb3QpLmRlbGF5KGYpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlLCB0O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBvID0gX192YWx1ZXMoeSksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gbi52YWx1ZTtcbiAgICAgICAgICAgICAgYS5wbGF5U2luZ2xlQ2FyZFNoYWtlQW5pbWF0aW9uKGkuY2FyZE5vZGUsIGMpO1xuICAgICAgICAgICAgICBhLnBsYXlTaW5nbGVDYXJkU2hha2VBbmltYXRpb24oaS5zaGFkb3dDYXJkTm9kZSwgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIG4gJiYgIW4uZG9uZSAmJiAodCA9IG8ucmV0dXJuKSAmJiB0LmNhbGwobyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLmRlbGF5KGQgLSBmKS5jYWxsKGUpLnN0YXJ0KCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGgucmVidWlsZEFsbFRpbGVOb2RlcygpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgbyA9IGguZ2V0VGlsZU5vZGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50aWxlT2JqZWN0ICYmIGUudGlsZU9iamVjdC5pc1ZhbGlkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhvKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIGkudmFsdWUuc2hhZG93Q2FyZE5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpICYmICFpLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYS5vblNodWZmbGVTdGF5RW5kKG8pO1xuICAgICAgICBhLnBsYXlMYXllckFuaW1hdGlvbihnLCBjKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHBsYXlMYXllckFuaW1hdGlvbihlLCB0KSB7XG4gICAgZm9yICh2YXIgbywgbiwgaSA9IHRoaXMsIGEgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCksIGwgPSBbXSwgcyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkubWFwTGF5ZXJzKCksIGMgPSBzLmxlbmd0aCAtIDE7IGMgPj0gMDsgYy0tKSB7XG4gICAgICB2YXIgdSA9IHtcbiAgICAgICAgbGF5ZXJJbmRleDogYyxcbiAgICAgICAgdGlsZU5vZGVPYmplY3RzOiBbXVxuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHAgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMoc1tjXS5hbGxDYXJkcykpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgIHZhciBkID0gZi52YWx1ZTtcbiAgICAgICAgICBkLmlzVmFsaWQgJiYgKF8gPSBhLmdldFRpbGVOb2RlQnlUaWxlSWQoZC5pZCkpICYmIHUudGlsZU5vZGVPYmplY3RzLnB1c2goXyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKG4gPSBwLnJldHVybikgJiYgbi5jYWxsKHApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1LnRpbGVOb2RlT2JqZWN0cy5sZW5ndGggPiAwICYmIGwucHVzaCh1KTtcbiAgICB9XG4gICAgZm9yIChjID0gMDsgYyA8IGwubGVuZ3RoOyBjKyspIHtcbiAgICAgIHUgPSBsW2NdO1xuICAgICAgZm9yICh2YXIgaCA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJBbmltYXRpb25QYXJhbXMoYywgbC5sZW5ndGgsIHQpLCB5ID0gaC5leHBhbmRUaW1lLCBtID0gaC5leHBhbmREaXN0LCB2ID0gaC5iYWNrVGltZSwgZyA9IDA7IGcgPCB1LnRpbGVOb2RlT2JqZWN0cy5sZW5ndGg7IGcrKykge1xuICAgICAgICB2YXIgXyA9IHUudGlsZU5vZGVPYmplY3RzW2ddLFxuICAgICAgICAgIFQgPSBjID09PSBsLmxlbmd0aCAtIDEgJiYgZyA9PT0gdS50aWxlTm9kZU9iamVjdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5wbGF5U2luZ2xlQ2FyZEV4cGFuZEFuaW1hdGlvbihfLCBlLCB5LCBtLCB2LCBULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaS5vblNodWZmbGVBbmltYXRpb25FbmQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGN1bGF0ZVBoYXNlVGltaW5ncyhlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBoYXNlMVRpbWU6IGUuZ2F0aGVyRXhwYW5kVGltZSArIGUuZ2F0aGVyU2hyaW5rVGltZSxcbiAgICAgIHBoYXNlMlRpbWU6IGUuc2hha2VUaW1lc1tlLnNoYWtlVGltZXMubGVuZ3RoIC0gMV0sXG4gICAgICBzdGF5RW5kVGltZTogZS5nYXRoZXJFeHBhbmRUaW1lICsgZS5nYXRoZXJTaHJpbmtUaW1lICsgZS5zY2FsZVN0YXJ0VGltZVxuICAgIH07XG4gIH1cbiAgZ2V0Q2VudGVyUG9zaXRpb24oZSkge1xuICAgIHZhciB0ID0gZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLjUgKiBjYy53aW5TaXplLndpZHRoLCAwLjUgKiBjYy53aW5TaXplLmhlaWdodCkpO1xuICAgIHJldHVybiBjYy52Myh0LngsIHQueSk7XG4gIH1cbiAgcGxheVNpbmdsZUNhcmRHYXRoZXJBbmltYXRpb24oZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcy5fb3JpZ2luYWxQb3NpdGlvbnMuZ2V0KGUudGlsZU9iamVjdCkgfHwgZS5jYXJkTm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIGUuY2FyZE5vZGUucG9zaXRpb24gPSBuO1xuICAgIGUuc2hhZG93Q2FyZE5vZGUucG9zaXRpb24gPSBuO1xuICAgIHZhciBpID0gbi5jbG9uZSgpLnN1YnRyYWN0KHQpLFxuICAgICAgciA9IGkubWFnKCk7XG4gICAgaWYgKHIgPiAwKSB7XG4gICAgICBpLm5vcm1hbGl6ZVNlbGYoKTtcbiAgICAgIHZhciBhID0gdC5hZGQoaS5tdWwociArIG8uZ2F0aGVyRXhwYW5kRGlzdCkpO1xuICAgICAgY2MudHdlZW4oZS5jYXJkTm9kZSkudG8oby5nYXRoZXJFeHBhbmRUaW1lLCB7XG4gICAgICAgIHBvc2l0aW9uOiBhXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICAgIH0pLnRvKG8uZ2F0aGVyU2hyaW5rVGltZSwge1xuICAgICAgICBwb3NpdGlvbjogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhZEluXCJcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy50d2VlbihlLnNoYWRvd0NhcmROb2RlKS50byhvLmdhdGhlckV4cGFuZFRpbWUsIHtcbiAgICAgICAgcG9zaXRpb246IGFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YWRPdXRcIlxuICAgICAgfSkudG8oby5nYXRoZXJTaHJpbmtUaW1lLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0LFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFkSW5cIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGwgPSBvLmdhdGhlckV4cGFuZFRpbWUgKyBvLmdhdGhlclNocmlua1RpbWU7XG4gICAgICBjYy50d2VlbihlLmNhcmROb2RlKS5kZWxheShsKS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4oZS5zaGFkb3dDYXJkTm9kZSkuZGVsYXkoby5nYXRoZXJFeHBhbmRUaW1lKS50byhvLmdhdGhlclNocmlua1RpbWUsIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVNpbmdsZUNhcmRTaGFrZUFuaW1hdGlvbihlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IGNjLnR3ZWVuKGUpLCBuID0gMTsgbiA8IHQuc2hha2VUaW1lcy5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIGkgPSB0LnNoYWtlVGltZXNbbl0gLSB0LnNoYWtlVGltZXNbbiAtIDFdO1xuICAgICAgby50byhpLCB7XG4gICAgICAgIGFuZ2xlOiB0LnNoYWtlUm90YXRpb25zW25dXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIG8uc3RhcnQoKTtcbiAgfVxuICBjYWxjdWxhdGVMYXllckFuaW1hdGlvblBhcmFtcyhlLCBvLCBuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGFuZFRpbWU6IEd1YXJhbnRlZWRTaHVmZmxlQmVoYXZpb3IuY2FsY3VsYXRlTGF5ZXJQYXJhbShlLCBvLCBuLnRvcExheWVyRXhwYW5kVGltZSwgbi5ib3R0b21MYXllckV4cGFuZFRpbWUpLFxuICAgICAgZXhwYW5kRGlzdDogR3VhcmFudGVlZFNodWZmbGVCZWhhdmlvci5jYWxjdWxhdGVMYXllclBhcmFtKGUsIG8sIG4udG9wTGF5ZXJFeHBhbmREaXN0LCBuLmJvdHRvbUxheWVyRXhwYW5kRGlzdCksXG4gICAgICBiYWNrVGltZTogR3VhcmFudGVlZFNodWZmbGVCZWhhdmlvci5jYWxjdWxhdGVMYXllclBhcmFtKGUsIG8sIG4udG9wTGF5ZXJCYWNrVGltZSwgbi5ib3R0b21MYXllckJhY2tUaW1lKVxuICAgIH07XG4gIH1cbiAgcGxheVNpbmdsZUNhcmRFeHBhbmRBbmltYXRpb24oZSwgdCwgbywgbiwgaSwgciwgYSkge1xuICAgIGlmIChlICYmIGUudGlsZU9iamVjdCkge1xuICAgICAgdmFyIGwgPSBlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIHZhciBzID0gbC5jbG9uZSgpLnN1YnRyYWN0KHQpLFxuICAgICAgICAgIGMgPSBzLm1hZygpO1xuICAgICAgICBpZiAoYyA+IDApIHtcbiAgICAgICAgICBzLm5vcm1hbGl6ZVNlbGYoKTtcbiAgICAgICAgICB2YXIgdSA9IHQuYWRkKHMubXVsKGMgKyBuKSk7XG4gICAgICAgICAgY2MudHdlZW4oZS5jYXJkTm9kZSkudG8obywge1xuICAgICAgICAgICAgcG9zaXRpb246IHVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIlxuICAgICAgICAgIH0pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgY2MudHdlZW4oZS5zaGFkb3dDYXJkTm9kZSkudG8obywge1xuICAgICAgICAgICAgcG9zaXRpb246IHUsXG4gICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNPdXRcIlxuICAgICAgICAgIH0pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgciAmJiAobnVsbCA9PSBhIHx8IGEoKSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYy50d2VlbihlLmNhcmROb2RlKS5kZWxheShvKS50byhpLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIGNjLnR3ZWVuKGUuc2hhZG93Q2FyZE5vZGUpLmRlbGF5KG8pLnRvKGksIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsLFxuICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgciAmJiAobnVsbCA9PSBhIHx8IGEoKSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHIgJiYgKG51bGwgPT0gYSB8fCBhKCkpO1xuICAgIH0gZWxzZSByICYmIChudWxsID09IGEgfHwgYSgpKTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoZSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBhID0gaS52YWx1ZTtcbiAgICAgICAgYS5jYW5jZWxTZWxlY3RlZCgpO1xuICAgICAgICBhLmhpZGVQcm9wSGludCgpO1xuICAgICAgICBhLnN0b3BBbGxBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChvID0gbi5yZXR1cm4pICYmIG8uY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uU2h1ZmZsZVN0YXlTdGFydFBsYXkoKTtcbiAgICBTaHVmZmxlVXRpbHMub25TaHVmZmxlU3RheVN0YXJ0UGxheSh0aGlzLl9jb250ZXh0KTtcbiAgfVxuICBvblNodWZmbGVTdGF5U3RhcnRQbGF5KCkge31cbiAgb25TaHVmZmxlU3RheUVuZFBsYXkoKSB7XG4gICAgU2h1ZmZsZVV0aWxzLnBsYXlSZWZyZXNoQW5pbWF0aW9uKHRoaXMuX2NvbnRleHQpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuQmVoYXZpb3JfU2h1ZmZsZVN0YXlFbmQsIHRoaXMpO1xuICB9XG4gIG9uU2h1ZmZsZVN0YXlFbmQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoZSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gaS52YWx1ZTtcbiAgICAgICAgbC5yZWZyZXNoTm9kZShsLmluZm8pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25TaHVmZmxlU3RheUVuZFBsYXkoKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LkJlaGF2aW9yX1NodWZmbGVTdGF5RW5kLCB0aGlzKTtcbiAgfVxuICBvblNodWZmbGVBbmltYXRpb25FbmQoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9TaHVmZmxlQmVoYXZpb3JGaW5pc2gpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19