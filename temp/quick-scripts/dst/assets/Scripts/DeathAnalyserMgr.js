
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DeathAnalyserMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17642UOQclC8ZrZ8SXb7A+5', 'DeathAnalyserMgr');
// Scripts/DeathAnalyserMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DeathReasonAnalyser_1 = require("./DeathReasonAnalyser");
var CardPairTypes_1 = require("./CardPairTypes");
var DeathAnalyserMgr = /** @class */ (function () {
    function DeathAnalyserMgr() {
        this._curAnalyser = null;
        this._badGroupMap = new Map();
        this._cachedResult = null;
        this._cachedMode = null;
    }
    Object.defineProperty(DeathAnalyserMgr, "instance", {
        get: function () {
            this._instance || (this._instance = new DeathAnalyserMgr());
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    DeathAnalyserMgr.prototype.startDeathAnalyser = function (e) {
        var t = this;
        if (e) {
            var o = e.gameType, n = e.getGameData().getLevelData(), i = e.getTileMapObject().aliveTiles();
            this.clearCache();
            if (this._curAnalyser) {
                this._curAnalyser.cancel();
                this._curAnalyser = null;
                this._curAnalyser = new DeathReasonAnalyser_1.DeathReasonAnalyser();
            }
            else
                this._curAnalyser = new DeathReasonAnalyser_1.DeathReasonAnalyser();
            this._badGroupMap.set(o, {
                status: false,
                badGroups: []
            });
            this._curAnalyser.startAnalyze(o, n, i, function (e) {
                t._badGroupMap.set(o, {
                    status: true,
                    badGroups: e
                });
                mj.EventManager.emit("DeathAnalyserComplete", e);
            }, function () { });
        }
    };
    DeathAnalyserMgr.prototype.cancelAnalyze = function () {
        if (this._curAnalyser) {
            this._curAnalyser.cancel();
            this._curAnalyser = null;
        }
    };
    DeathAnalyserMgr.prototype.getBadGroupMap = function (e) {
        if (!e)
            return [];
        var t = e.gameType, o = this._badGroupMap.get(t);
        return o && o.status ? o.badGroups : this._curAnalyser ? this._curAnalyser.getBadMahjongGroups() : [];
    };
    DeathAnalyserMgr.prototype.printBadGroups = function (e) {
        for (var t = 0; t < e.length; t++)
            e[t];
    };
    DeathAnalyserMgr.prototype.analyzeCardPair = function (e, t) {
        if (t === void 0) { t = false; }
        var o;
        if (!e)
            return this.createEmptyResult();
        var n = e.gameType;
        if (!t && this._cachedResult && this._cachedMode === n && this._cachedResult.isAnalyzeCompleted) {
            this.assembleCurrentInfo(e, this._cachedResult);
            return this._cachedResult;
        }
        var i = this.createEmptyResult(), r = this.getBadGroupMap(e);
        i.levelAllDeathPairs = CardPairTypes_1.CardPairUtils.generateDeathPairsFromBadGroups(r);
        var a = this._badGroupMap.get(n);
        i.isAnalyzeCompleted = null !== (o = null == a ? void 0 : a.status) && void 0 !== o && o;
        this.assembleCurrentInfo(e, i);
        this._cachedResult = i;
        this._cachedMode = n;
        return i;
    };
    DeathAnalyserMgr.prototype.assembleCurrentInfo = function (e, t) {
        var o, a, s, c, u, p, f, d;
        t.curDeadPairs = [];
        t.curAlivePairs = [];
        t.curAllUnlockPairs = [];
        t.curSuspiciousPairs = [];
        var h = e.getTileMapObject(), y = new Map(), m = h.getCanMatchTiles();
        try {
            for (var v = __values(m), g = v.next(); !g.done; g = v.next()) {
                var _ = __read(g.value, 2), T = _[0], C = _[1];
                if (C && C.length >= 2) {
                    var b = C.map(function (e) {
                        return {
                            id: e.id,
                            resId: e.resId,
                            cardId: e.cardId,
                            gridPosX: e.gridPosX,
                            gridPosY: e.gridPosY,
                            layer: e.layer,
                            ownerGridIds: __spreadArrays(e.ownerGridIds),
                            isValid: e.isValid
                        };
                    });
                    y.set(T, b);
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (a = v.return) && a.call(v);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        t.curAllUnlockPairs = CardPairTypes_1.CardPairUtils.generateUnlockPairs(y);
        var E = this.getGameStepPairs(e);
        try {
            for (var S = __values(t.curAllUnlockPairs), I = S.next(); !I.done; I = S.next()) {
                var w = I.value, B = false, x = false;
                try {
                    for (var M = (u = void 0, __values(t.levelAllDeathPairs)), O = M.next(); !O.done; O = M.next()) {
                        var D = O.value, P = 0, A = false, R = null;
                        try {
                            for (var N = (f = void 0, __values(D)), j = N.next(); !j.done; j = N.next()) {
                                var k = j.value;
                                switch (CardPairTypes_1.CardPairUtils.checkTileInGameSteps(k, E)) {
                                    case CardPairTypes_1.TileInGameSteps.Trigger:
                                        P++;
                                        break;
                                    case CardPairTypes_1.TileInGameSteps.Block:
                                        A = true;
                                        break;
                                    case CardPairTypes_1.TileInGameSteps.None:
                                        k.isEqual(w) && (R = w);
                                }
                                if (A)
                                    break;
                            }
                        }
                        catch (e) {
                            f = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                j && !j.done && (d = N.return) && d.call(N);
                            }
                            finally {
                                if (f)
                                    throw f.error;
                            }
                        }
                        !A && R && (x = true);
                        if (P === D.length - 1 && R) {
                            B = true;
                            break;
                        }
                    }
                }
                catch (e) {
                    u = {
                        error: e
                    };
                }
                finally {
                    try {
                        O && !O.done && (p = M.return) && p.call(M);
                    }
                    finally {
                        if (u)
                            throw u.error;
                    }
                }
                if (B) {
                    t.curDeadPairs.push(w);
                }
                else {
                    t.curAlivePairs.push(w);
                }
                x && t.curSuspiciousPairs.push(w);
            }
        }
        catch (e) {
            s = {
                error: e
            };
        }
        finally {
            try {
                I && !I.done && (c = S.return) && c.call(S);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
    };
    DeathAnalyserMgr.prototype.getGameStepPairs = function (e) {
        var t = e.getGameData();
        if (!t)
            return [];
        var o = t.getClearRecords();
        return CardPairTypes_1.CardPairUtils.fromClearRecords(o);
    };
    DeathAnalyserMgr.prototype.getCurrentBoardState = function (e) {
        var t, o, i, r;
        if (!e)
            return CardPairTypes_1.CurrentBoardState.Unknown;
        var a = this.analyzeCardPair(e, false);
        if (!a.isAnalyzeCompleted)
            return CardPairTypes_1.CurrentBoardState.Unknown;
        if (0 === a.levelAllDeathPairs.length)
            return CardPairTypes_1.CurrentBoardState.EnsuredAlive;
        var s = this.getGameStepPairs(e), c = 0;
        try {
            for (var u = __values(a.levelAllDeathPairs), p = u.next(); !p.done; p = u.next()) {
                var f = p.value, d = 0, h = false;
                try {
                    for (var y = (i = void 0, __values(f)), m = y.next(); !m.done; m = y.next()) {
                        var v = m.value;
                        switch (CardPairTypes_1.CardPairUtils.checkTileInGameSteps(v, s)) {
                            case CardPairTypes_1.TileInGameSteps.Trigger:
                                d++;
                                break;
                            case CardPairTypes_1.TileInGameSteps.Block:
                                h = true;
                        }
                        if (h)
                            break;
                    }
                }
                catch (e) {
                    i = {
                        error: e
                    };
                }
                finally {
                    try {
                        m && !m.done && (r = y.return) && r.call(y);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
                if (d === f.length)
                    return CardPairTypes_1.CurrentBoardState.TriggerDead;
                h && c++;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (o = u.return) && o.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return c === a.levelAllDeathPairs.length ? CardPairTypes_1.CurrentBoardState.BlockedDead : CardPairTypes_1.CurrentBoardState.Unknown;
    };
    DeathAnalyserMgr.prototype.getCurAllUnlockPairs = function (e) {
        return this.analyzeCardPair(e, false).curAllUnlockPairs;
    };
    DeathAnalyserMgr.prototype.getLevelAllDeathPairs = function (e) {
        return this.analyzeCardPair(e, false).levelAllDeathPairs;
    };
    DeathAnalyserMgr.prototype.getFindDeadPairs = function (e) {
        return this.analyzeCardPair(e, false).curDeadPairs;
    };
    DeathAnalyserMgr.prototype.getFindAlivePairs = function (e) {
        return this.analyzeCardPair(e, false).curAlivePairs;
    };
    DeathAnalyserMgr.prototype.getSuspiciousPairs = function (e) {
        return this.analyzeCardPair(e, false).curSuspiciousPairs;
    };
    DeathAnalyserMgr.prototype.isAnalyzeCompleted = function (e) {
        var t;
        if (!e)
            return false;
        var o = e.gameType, n = this._badGroupMap.get(o);
        return null !== (t = null == n ? void 0 : n.status) && void 0 !== t && t;
    };
    DeathAnalyserMgr.prototype.createEmptyResult = function () {
        return {
            isAnalyzeCompleted: false,
            curDeadPairs: [],
            curAlivePairs: [],
            curAllUnlockPairs: [],
            levelAllDeathPairs: [],
            curSuspiciousPairs: []
        };
    };
    DeathAnalyserMgr.prototype.clearCache = function () {
        this._cachedResult = null;
        this._cachedMode = null;
    };
    return DeathAnalyserMgr;
}());
exports.default = DeathAnalyserMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RlYXRoQW5hbHlzZXJNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCxpREFBb0Y7QUFDcEY7SUFBQTtRQUNFLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksQ0FBQztJQWlSckIsQ0FBQztJQWhSQyxzQkFBVyw0QkFBUTthQUFuQjtZQUNFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1lBQzVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELDZDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFDbEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQzthQUMvQzs7Z0JBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFD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WUFDckIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixrQkFBa0IsRUFBRSxFQUFFO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0lBQ0QscUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDSCx1QkFBQztBQUFELENBclJBLEFBcVJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWF0aFJlYXNvbkFuYWx5c2VyIH0gZnJvbSAnLi9EZWF0aFJlYXNvbkFuYWx5c2VyJztcbmltcG9ydCB7IENhcmRQYWlyVXRpbHMsIFRpbGVJbkdhbWVTdGVwcywgQ3VycmVudEJvYXJkU3RhdGUgfSBmcm9tICcuL0NhcmRQYWlyVHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhBbmFseXNlck1nciB7XG4gIF9jdXJBbmFseXNlciA9IG51bGw7XG4gIF9iYWRHcm91cE1hcCA9IG5ldyBNYXAoKTtcbiAgX2NhY2hlZFJlc3VsdCA9IG51bGw7XG4gIF9jYWNoZWRNb2RlID0gbnVsbDtcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgRGVhdGhBbmFseXNlck1ncigpKTtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cbiAgc3RhcnREZWF0aEFuYWx5c2VyKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciBvID0gZS5nYW1lVHlwZSxcbiAgICAgICAgbiA9IGUuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbERhdGEoKSxcbiAgICAgICAgaSA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLmFsaXZlVGlsZXMoKTtcbiAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgICAgaWYgKHRoaXMuX2N1ckFuYWx5c2VyKSB7XG4gICAgICAgIHRoaXMuX2N1ckFuYWx5c2VyLmNhbmNlbCgpO1xuICAgICAgICB0aGlzLl9jdXJBbmFseXNlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2N1ckFuYWx5c2VyID0gbmV3IERlYXRoUmVhc29uQW5hbHlzZXIoKTtcbiAgICAgIH0gZWxzZSB0aGlzLl9jdXJBbmFseXNlciA9IG5ldyBEZWF0aFJlYXNvbkFuYWx5c2VyKCk7XG4gICAgICB0aGlzLl9iYWRHcm91cE1hcC5zZXQobywge1xuICAgICAgICBzdGF0dXM6IGZhbHNlLFxuICAgICAgICBiYWRHcm91cHM6IFtdXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2N1ckFuYWx5c2VyLnN0YXJ0QW5hbHl6ZShvLCBuLCBpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0Ll9iYWRHcm91cE1hcC5zZXQobywge1xuICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICBiYWRHcm91cHM6IGVcbiAgICAgICAgfSk7XG4gICAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KFwiRGVhdGhBbmFseXNlckNvbXBsZXRlXCIsIGUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgfVxuICBjYW5jZWxBbmFseXplKCkge1xuICAgIGlmICh0aGlzLl9jdXJBbmFseXNlcikge1xuICAgICAgdGhpcy5fY3VyQW5hbHlzZXIuY2FuY2VsKCk7XG4gICAgICB0aGlzLl9jdXJBbmFseXNlciA9IG51bGw7XG4gICAgfVxuICB9XG4gIGdldEJhZEdyb3VwTWFwKGUpIHtcbiAgICBpZiAoIWUpIHJldHVybiBbXTtcbiAgICB2YXIgdCA9IGUuZ2FtZVR5cGUsXG4gICAgICBvID0gdGhpcy5fYmFkR3JvdXBNYXAuZ2V0KHQpO1xuICAgIHJldHVybiBvICYmIG8uc3RhdHVzID8gby5iYWRHcm91cHMgOiB0aGlzLl9jdXJBbmFseXNlciA/IHRoaXMuX2N1ckFuYWx5c2VyLmdldEJhZE1haGpvbmdHcm91cHMoKSA6IFtdO1xuICB9XG4gIHByaW50QmFkR3JvdXBzKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGUubGVuZ3RoOyB0KyspIGVbdF07XG4gIH1cbiAgYW5hbHl6ZUNhcmRQYWlyKGUsIHQgPSBmYWxzZSkge1xuICAgIHZhciBvO1xuICAgIGlmICghZSkgcmV0dXJuIHRoaXMuY3JlYXRlRW1wdHlSZXN1bHQoKTtcbiAgICB2YXIgbiA9IGUuZ2FtZVR5cGU7XG4gICAgaWYgKCF0ICYmIHRoaXMuX2NhY2hlZFJlc3VsdCAmJiB0aGlzLl9jYWNoZWRNb2RlID09PSBuICYmIHRoaXMuX2NhY2hlZFJlc3VsdC5pc0FuYWx5emVDb21wbGV0ZWQpIHtcbiAgICAgIHRoaXMuYXNzZW1ibGVDdXJyZW50SW5mbyhlLCB0aGlzLl9jYWNoZWRSZXN1bHQpO1xuICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFJlc3VsdDtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmNyZWF0ZUVtcHR5UmVzdWx0KCksXG4gICAgICByID0gdGhpcy5nZXRCYWRHcm91cE1hcChlKTtcbiAgICBpLmxldmVsQWxsRGVhdGhQYWlycyA9IENhcmRQYWlyVXRpbHMuZ2VuZXJhdGVEZWF0aFBhaXJzRnJvbUJhZEdyb3VwcyhyKTtcbiAgICB2YXIgYSA9IHRoaXMuX2JhZEdyb3VwTWFwLmdldChuKTtcbiAgICBpLmlzQW5hbHl6ZUNvbXBsZXRlZCA9IG51bGwgIT09IChvID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5zdGF0dXMpICYmIHZvaWQgMCAhPT0gbyAmJiBvO1xuICAgIHRoaXMuYXNzZW1ibGVDdXJyZW50SW5mbyhlLCBpKTtcbiAgICB0aGlzLl9jYWNoZWRSZXN1bHQgPSBpO1xuICAgIHRoaXMuX2NhY2hlZE1vZGUgPSBuO1xuICAgIHJldHVybiBpO1xuICB9XG4gIGFzc2VtYmxlQ3VycmVudEluZm8oZSwgdCkge1xuICAgIHZhciBvLCBhLCBzLCBjLCB1LCBwLCBmLCBkO1xuICAgIHQuY3VyRGVhZFBhaXJzID0gW107XG4gICAgdC5jdXJBbGl2ZVBhaXJzID0gW107XG4gICAgdC5jdXJBbGxVbmxvY2tQYWlycyA9IFtdO1xuICAgIHQuY3VyU3VzcGljaW91c1BhaXJzID0gW107XG4gICAgdmFyIGggPSBlLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHkgPSBuZXcgTWFwKCksXG4gICAgICBtID0gaC5nZXRDYW5NYXRjaFRpbGVzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHYgPSBfX3ZhbHVlcyhtKSwgZyA9IHYubmV4dCgpOyAhZy5kb25lOyBnID0gdi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIF8gPSBfX3JlYWQoZy52YWx1ZSwgMiksXG4gICAgICAgICAgVCA9IF9bMF0sXG4gICAgICAgICAgQyA9IF9bMV07XG4gICAgICAgIGlmIChDICYmIEMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICB2YXIgYiA9IEMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogZS5pZCxcbiAgICAgICAgICAgICAgcmVzSWQ6IGUucmVzSWQsXG4gICAgICAgICAgICAgIGNhcmRJZDogZS5jYXJkSWQsXG4gICAgICAgICAgICAgIGdyaWRQb3NYOiBlLmdyaWRQb3NYLFxuICAgICAgICAgICAgICBncmlkUG9zWTogZS5ncmlkUG9zWSxcbiAgICAgICAgICAgICAgbGF5ZXI6IGUubGF5ZXIsXG4gICAgICAgICAgICAgIG93bmVyR3JpZElkczogWy4uLmUub3duZXJHcmlkSWRzXSxcbiAgICAgICAgICAgICAgaXNWYWxpZDogZS5pc1ZhbGlkXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHkuc2V0KFQsIGIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAoYSA9IHYucmV0dXJuKSAmJiBhLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdC5jdXJBbGxVbmxvY2tQYWlycyA9IENhcmRQYWlyVXRpbHMuZ2VuZXJhdGVVbmxvY2tQYWlycyh5KTtcbiAgICB2YXIgRSA9IHRoaXMuZ2V0R2FtZVN0ZXBQYWlycyhlKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgUyA9IF9fdmFsdWVzKHQuY3VyQWxsVW5sb2NrUGFpcnMpLCBJID0gUy5uZXh0KCk7ICFJLmRvbmU7IEkgPSBTLm5leHQoKSkge1xuICAgICAgICB2YXIgdyA9IEkudmFsdWUsXG4gICAgICAgICAgQiA9IGZhbHNlLFxuICAgICAgICAgIHggPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBNID0gKHUgPSB2b2lkIDAsIF9fdmFsdWVzKHQubGV2ZWxBbGxEZWF0aFBhaXJzKSksIE8gPSBNLm5leHQoKTsgIU8uZG9uZTsgTyA9IE0ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgRCA9IE8udmFsdWUsXG4gICAgICAgICAgICAgIFAgPSAwLFxuICAgICAgICAgICAgICBBID0gZmFsc2UsXG4gICAgICAgICAgICAgIFIgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgTiA9IChmID0gdm9pZCAwLCBfX3ZhbHVlcyhEKSksIGogPSBOLm5leHQoKTsgIWouZG9uZTsgaiA9IE4ubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBqLnZhbHVlO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoQ2FyZFBhaXJVdGlscy5jaGVja1RpbGVJbkdhbWVTdGVwcyhrLCBFKSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBUaWxlSW5HYW1lU3RlcHMuVHJpZ2dlcjpcbiAgICAgICAgICAgICAgICAgICAgUCsrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgVGlsZUluR2FtZVN0ZXBzLkJsb2NrOlxuICAgICAgICAgICAgICAgICAgICBBID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFRpbGVJbkdhbWVTdGVwcy5Ob25lOlxuICAgICAgICAgICAgICAgICAgICBrLmlzRXF1YWwodykgJiYgKFIgPSB3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEEpIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGYgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaiAmJiAhai5kb25lICYmIChkID0gTi5yZXR1cm4pICYmIGQuY2FsbChOKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoZikgdGhyb3cgZi5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIUEgJiYgUiAmJiAoeCA9IHRydWUpO1xuICAgICAgICAgICAgaWYgKFAgPT09IEQubGVuZ3RoIC0gMSAmJiBSKSB7XG4gICAgICAgICAgICAgIEIgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPICYmICFPLmRvbmUgJiYgKHAgPSBNLnJldHVybikgJiYgcC5jYWxsKE0pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEIpIHtcbiAgICAgICAgICB0LmN1ckRlYWRQYWlycy5wdXNoKHcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQuY3VyQWxpdmVQYWlycy5wdXNoKHcpO1xuICAgICAgICB9XG4gICAgICAgIHggJiYgdC5jdXJTdXNwaWNpb3VzUGFpcnMucHVzaCh3KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgSSAmJiAhSS5kb25lICYmIChjID0gUy5yZXR1cm4pICYmIGMuY2FsbChTKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzKSB0aHJvdyBzLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRHYW1lU3RlcFBhaXJzKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAoIXQpIHJldHVybiBbXTtcbiAgICB2YXIgbyA9IHQuZ2V0Q2xlYXJSZWNvcmRzKCk7XG4gICAgcmV0dXJuIENhcmRQYWlyVXRpbHMuZnJvbUNsZWFyUmVjb3JkcyhvKTtcbiAgfVxuICBnZXRDdXJyZW50Qm9hcmRTdGF0ZShlKSB7XG4gICAgdmFyIHQsIG8sIGksIHI7XG4gICAgaWYgKCFlKSByZXR1cm4gQ3VycmVudEJvYXJkU3RhdGUuVW5rbm93bjtcbiAgICB2YXIgYSA9IHRoaXMuYW5hbHl6ZUNhcmRQYWlyKGUsIGZhbHNlKTtcbiAgICBpZiAoIWEuaXNBbmFseXplQ29tcGxldGVkKSByZXR1cm4gQ3VycmVudEJvYXJkU3RhdGUuVW5rbm93bjtcbiAgICBpZiAoMCA9PT0gYS5sZXZlbEFsbERlYXRoUGFpcnMubGVuZ3RoKSByZXR1cm4gQ3VycmVudEJvYXJkU3RhdGUuRW5zdXJlZEFsaXZlO1xuICAgIHZhciBzID0gdGhpcy5nZXRHYW1lU3RlcFBhaXJzKGUpLFxuICAgICAgYyA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhhLmxldmVsQWxsRGVhdGhQYWlycyksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gcC52YWx1ZSxcbiAgICAgICAgICBkID0gMCxcbiAgICAgICAgICBoID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeSA9IChpID0gdm9pZCAwLCBfX3ZhbHVlcyhmKSksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgdiA9IG0udmFsdWU7XG4gICAgICAgICAgICBzd2l0Y2ggKENhcmRQYWlyVXRpbHMuY2hlY2tUaWxlSW5HYW1lU3RlcHModiwgcykpIHtcbiAgICAgICAgICAgICAgY2FzZSBUaWxlSW5HYW1lU3RlcHMuVHJpZ2dlcjpcbiAgICAgICAgICAgICAgICBkKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgVGlsZUluR2FtZVN0ZXBzLkJsb2NrOlxuICAgICAgICAgICAgICAgIGggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGgpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gJiYgIW0uZG9uZSAmJiAociA9IHkucmV0dXJuKSAmJiByLmNhbGwoeSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZCA9PT0gZi5sZW5ndGgpIHJldHVybiBDdXJyZW50Qm9hcmRTdGF0ZS5UcmlnZ2VyRGVhZDtcbiAgICAgICAgaCAmJiBjKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobyA9IHUucmV0dXJuKSAmJiBvLmNhbGwodSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGMgPT09IGEubGV2ZWxBbGxEZWF0aFBhaXJzLmxlbmd0aCA/IEN1cnJlbnRCb2FyZFN0YXRlLkJsb2NrZWREZWFkIDogQ3VycmVudEJvYXJkU3RhdGUuVW5rbm93bjtcbiAgfVxuICBnZXRDdXJBbGxVbmxvY2tQYWlycyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5hbHl6ZUNhcmRQYWlyKGUsIGZhbHNlKS5jdXJBbGxVbmxvY2tQYWlycztcbiAgfVxuICBnZXRMZXZlbEFsbERlYXRoUGFpcnMoZSkge1xuICAgIHJldHVybiB0aGlzLmFuYWx5emVDYXJkUGFpcihlLCBmYWxzZSkubGV2ZWxBbGxEZWF0aFBhaXJzO1xuICB9XG4gIGdldEZpbmREZWFkUGFpcnMoZSkge1xuICAgIHJldHVybiB0aGlzLmFuYWx5emVDYXJkUGFpcihlLCBmYWxzZSkuY3VyRGVhZFBhaXJzO1xuICB9XG4gIGdldEZpbmRBbGl2ZVBhaXJzKGUpIHtcbiAgICByZXR1cm4gdGhpcy5hbmFseXplQ2FyZFBhaXIoZSwgZmFsc2UpLmN1ckFsaXZlUGFpcnM7XG4gIH1cbiAgZ2V0U3VzcGljaW91c1BhaXJzKGUpIHtcbiAgICByZXR1cm4gdGhpcy5hbmFseXplQ2FyZFBhaXIoZSwgZmFsc2UpLmN1clN1c3BpY2lvdXNQYWlycztcbiAgfVxuICBpc0FuYWx5emVDb21wbGV0ZWQoZSkge1xuICAgIHZhciB0O1xuICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gZS5nYW1lVHlwZSxcbiAgICAgIG4gPSB0aGlzLl9iYWRHcm91cE1hcC5nZXQobyk7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5zdGF0dXMpICYmIHZvaWQgMCAhPT0gdCAmJiB0O1xuICB9XG4gIGNyZWF0ZUVtcHR5UmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FuYWx5emVDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgY3VyRGVhZFBhaXJzOiBbXSxcbiAgICAgIGN1ckFsaXZlUGFpcnM6IFtdLFxuICAgICAgY3VyQWxsVW5sb2NrUGFpcnM6IFtdLFxuICAgICAgbGV2ZWxBbGxEZWF0aFBhaXJzOiBbXSxcbiAgICAgIGN1clN1c3BpY2lvdXNQYWlyczogW11cbiAgICB9O1xuICB9XG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgdGhpcy5fY2FjaGVkUmVzdWx0ID0gbnVsbDtcbiAgICB0aGlzLl9jYWNoZWRNb2RlID0gbnVsbDtcbiAgfVxufSJdfQ==