"use strict";
cc._RF.push(module, '381cawBF2ZCWJgVmmKXSmQE', 'Tile2SlotBarChecker');
// Scripts/process/tile2/Tile2SlotBarChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotBarChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2Interface_1 = require("../../simulator/constant/Tile2Interface");
var Tile2SlotBarChecker = /** @class */ (function (_super) {
    __extends(Tile2SlotBarChecker, _super);
    function Tile2SlotBarChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2SlotBarChecker.prototype.checkCanClearWithIds = function (e, t) {
        if (e == t)
            return false;
        var o = this._context.getTileMapObject().getTileObject(e), n = this._context.getTileMapObject().getTileObject(t);
        if (!o || !n)
            return false;
        if (!o.isValid || !n.isValid)
            return false;
        var i = 0;
        o.getIsInSlotBar() || i++;
        n.getIsInSlotBar() || i++;
        return !(i > this.getEmptySlotBarCount()) && o.cardId === n.cardId;
    };
    Tile2SlotBarChecker.prototype.getEmptySlotBarCount = function () {
        var e = this._context.getGameData(), t = e.slotBarIds;
        return e.slotBarCount - t.length;
    };
    Tile2SlotBarChecker.prototype.checkCanClearWithTileId = function (e) {
        var t, o;
        if (!e)
            return false;
        var n = this._context.getGameData().slotBarIds, i = this._context.getTileMapObject();
        if (0 === n.length)
            return false;
        var a = i.getTileObject(e);
        if (!a)
            return false;
        if (!a.isValid)
            return false;
        try {
            for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
                var c = s.value, u = i.getTileObjectByPosId(c);
                if (u && u.isValid && e != u.id && a.cardId === u.cardId)
                    return true;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return false;
    };
    Tile2SlotBarChecker.prototype.checkCanClear = function () {
        var e, t, o = this._context.getGameData().slotBarIds, n = this._context.getTileMapObject();
        if (0 === o.length)
            return false;
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = n.getTileObjectByPosId(l);
                if (s && s.isValid)
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        if (u !== l) {
                            var p = n.getTileObject(u);
                            if (p && s.cardId === p.cardId)
                                return true;
                        }
                    }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return false;
    };
    Tile2SlotBarChecker.prototype.getSlotBarChangeList = function (e, t) {
        var o, n, i = [], a = this._context.getTileMapObject(), s = new Set(__spreadArrays(e, t).filter(function (e) {
            return !!e;
        }));
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = e.indexOf(p), d = t.indexOf(p);
                if (-1 === f || -1 !== d) {
                    var h = a.getTileObjectByPosId(p);
                    d !== f && i.push({
                        tileId: h.id,
                        index: d,
                        oldIndex: f
                    });
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
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.sort(function (e, t) {
            return t.index - e.index;
        });
        return i;
    };
    Tile2SlotBarChecker.prototype.getSlotBarChangeListFull = function (e, t) {
        var o, n, i = [], a = this._context.getTileMapObject(), s = new Set(__spreadArrays(e, t).filter(function (e) {
            return !!e;
        }));
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = e.indexOf(p), d = t.indexOf(p), h = a.getTileObjectByPosId(p);
                i.push({
                    tileId: h.id,
                    index: d,
                    oldIndex: f
                });
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.sort(function (e, t) {
            return t.index - e.index;
        });
        return i;
    };
    Tile2SlotBarChecker.prototype.getSlotBarChangeListOnce = function (e, t, o, n) {
        var i, a, l, s, u, p = [], f = new Set(), d = new Map();
        try {
            for (var h = __values(n), y = h.next(); !y.done; y = h.next()) {
                var m = y.value, v = null === (l = this._context.getTileMapObject().getTileObjectByPosId(m[0])) || void 0 === l ? void 0 : l.id, g = null === (s = this._context.getTileMapObject().getTileObjectByPosId(m[1])) || void 0 === s ? void 0 : s.id;
                f.add(v);
                f.add(g);
                d.set(v, g);
                d.set(g, v);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (a = h.return) && a.call(h);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        for (var _ = this.getSlotBarChangeListFull(e, t), T = e[e.length - 1], C = T && (null === (u = this._context.getTileMapObject().getTileObjectByPosId(T)) || void 0 === u ? void 0 : u.id), b = function b(e) {
            for (var t = 0; t < _.length; t++) {
                var o = _[t];
                if (o.tileId == e)
                    return o;
            }
            return null;
        }, E = 0; E < _.length; E++) {
            var S = _[E];
            if (f.has(S.tileId)) {
                var I, w = -1, B = void 0, x = b(d.get(S.tileId));
                if (S.tileId == C || d.get(S.tileId) == C || S.oldIndex < 0 && x && x.oldIndex < 0) {
                    B = Tile2Interface_1.ETile2ClearType.InSlotBar;
                    w = S.index;
                }
                else {
                    B = Tile2Interface_1.ETile2ClearType.OutSlotBar;
                    w = -1;
                }
                I = S.oldIndex < 0;
                S.clearInfo = {
                    clearPosIndex: w,
                    clearType: B,
                    isAddToSlotBar: I,
                    clearTildId: d.get(S.tileId) || ""
                };
            }
            p.push(S);
        }
        var M = function M(e) {
            for (var t = 0; t < _.length; t++) {
                var o = _[t];
                if (o.tileId == e)
                    return o;
            }
            return null;
        }, O = this.getSlotBarChangeListFull(t, o);
        for (E = 0; E < O.length; E++) {
            var D = O[E], P = M(D.tileId);
            if (P) {
                P.index = D.index;
            }
            else {
                p.push(D);
            }
        }
        var A = this._context.tile2ResultChecker.getMaxSlotBarCount();
        for (E = 0; E < p.length; E++)
            !(S = p[E]).clearInfo && S.oldIndex < 0 && S.index >= A - 1 && (S.isDead = true);
        return p;
    };
    return Tile2SlotBarChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2SlotBarChecker = Tile2SlotBarChecker;

cc._RF.pop();