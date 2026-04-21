"use strict";
cc._RF.push(module, '318abDe6N5LeYZktxem1cpb', 'BombCardType');
// Scripts/tileTypes/BombCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BombCardType = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var TileMapSimulator_1 = require("../objects/TileMapSimulator");
var BombCardType = /** @class */ (function () {
    function BombCardType() {
    }
    BombCardType.getNormalCardGroups = function (e) {
        var t, o, n = new Map(), r = e.getTileMapObject();
        try {
            for (var a = __values(r.aliveTiles()), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                if (s.checkIsNormal()) {
                    n.has(s.cardId) || n.set(s.cardId, {
                        cardId: s.cardId,
                        count: 0,
                        layerSum: 0,
                        tiles: []
                    });
                    n.get(s.cardId).count++;
                    n.get(s.cardId).layerSum += s.pos.z;
                    n.get(s.cardId).tiles.push(s);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return Array.from(n.values()).sort(function (e, t) {
            var o = t.count - e.count;
            return 0 !== o ? o : t.layerSum - e.layerSum;
        });
    };
    BombCardType.modify = function (e, t) {
        this.excuteBomb(e, t);
    };
    BombCardType.getBombCount = function (e) {
        return e || 4;
    };
    BombCardType.excuteBomb = function (e, t) {
        var o, n, r, l, s = this.getNormalCardGroups(e);
        if (0 !== s.length) {
            var c = this.getBombCount(null == t ? void 0 : t.takeCount), u = null, p = Infinity;
            try {
                for (var f = __values(s), d = f.next(); !d.done; d = f.next()) {
                    var h = d.value, y = Math.abs(h.count - c);
                    if (y < p) {
                        p = y;
                        u = h;
                    }
                    else
                        y === p && h.tiles.length > u.tiles.length && (u = h);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    d && !d.done && (n = f.return) && n.call(f);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            var m = u || s[0], v = Math.ceil(c / 2), g = Math.floor(m.tiles.length / 2), _ = 2 * Math.min(v, g);
            if (!(m.tiles.length < _)) {
                var T = m.tiles.slice(0, _);
                try {
                    for (var C = __values(T), b = C.next(); !b.done; b = C.next()) {
                        var E = b.value;
                        e.getTileMapObject().changeTileResId(E.id, GameTypeEnums_1.ResId.emBombCardId);
                    }
                }
                catch (e) {
                    r = {
                        error: e
                    };
                }
                finally {
                    try {
                        b && !b.done && (l = C.return) && l.call(C);
                    }
                    finally {
                        if (r)
                            throw r.error;
                    }
                }
            }
        }
    };
    BombCardType.getAliveNotLockTiles = function (e) {
        var t, o, n = e.getTileMapObject(), r = n.aliveTiles().filter(function (e) {
            return !n.isCardLock(e);
        }), a = new Map();
        try {
            for (var l = __values(r), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                a.has(c.cardId) || a.set(c.cardId, []);
                a.get(c.cardId).push(c);
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
        return a;
    };
    BombCardType.getFilterFuncList = function () {
        return [];
    };
    BombCardType.filterMatch = function (e, t, o, n) {
        var a, l;
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = __read(u.filter(t, o, n), 2), f = p[0], d = p[1];
                if (f)
                    return [true, d];
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (l = s.return) && l.call(s);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return [false, 999];
    };
    BombCardType.tile2GetTiles = function (e) {
        var t, o, n = this, a = TileMapSimulator_1.TileMapSimulator.createSim(e), c = this.getAliveNotLockTiles(e), u = null, p = 99, f = this.getFilterFuncList(e), d = function d(t) {
            var o, s;
            try {
                for (var c = __values(t), d = c.next(); !d.done; d = c.next()) {
                    var h = __read(d.value, 2), y = (h[0], h[1]);
                    if (!(y.length < 2))
                        for (var m = 0; m < y.length - 1; m++)
                            for (var v = m + 1; v < y.length; v++) {
                                var g = [y[m].id, y[v].id], _ = __read(n.filterMatch(f, e, y[m], y[v]), 2), T = _[0], C = _[1];
                                if (T) {
                                    if (p > C) {
                                        p = C;
                                        u = g;
                                    }
                                    if (p <= 0 && u.length > 0)
                                        return u;
                                }
                                else if (a.getTileObject(y[m].id).checkHasType(TileTypeEnum_1.ETileType.RollCard) || a.getTileObject(y[v].id).checkHasType(TileTypeEnum_1.ETileType.RollCard)) {
                                    if (p > 2) {
                                        p = 2;
                                        u = [y[m].id, y[v].id];
                                    }
                                }
                                else if (a.getTileObject(y[m].id).checkHasType(TileTypeEnum_1.ETileType.Bomb) || a.getTileObject(y[v].id).checkHasType(TileTypeEnum_1.ETileType.Bomb)) {
                                    if (p > 1) {
                                        p = 1;
                                        u = [y[m].id, y[v].id];
                                    }
                                }
                                else if (p > 0) {
                                    p = 0;
                                    return u = [y[m].id, y[v].id];
                                }
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
                    d && !d.done && (s = c.return) && s.call(c);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
        }, h = new Map();
        try {
            for (var y = __values(c), m = y.next(); !m.done; m = y.next()) {
                var v = __read(m.value, 2), g = v[0], _ = v[1].filter(function (e) {
                    return !e.getIsInSlotBar();
                });
                _.length > 0 && h.set(g, _);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (o = y.return) && o.call(y);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        d(h);
        if (u && 2 == u.length)
            return u;
        d(c);
        return u;
    };
    BombCardType.getBombClearTileIds = function (e) {
        var t, o;
        if (e.gameType !== GameTypeEnums_1.MjGameType.Tile2Normal) {
            var n = TileMapSimulator_1.TileMapSimulator.createSim(e), c = this.getAliveNotLockTiles(e), u = null, p = 99, f = this.getFilterFuncList(e);
            try {
                for (var d = __values(c), h = d.next(); !h.done; h = d.next()) {
                    var y = __read(h.value, 2), m = (y[0], y[1]);
                    if (!(m.length < 2))
                        for (var v = 0; v < m.length - 1; v++)
                            for (var g = v + 1; g < m.length; g++) {
                                var _ = [m[v].id, m[g].id], T = __read(this.filterMatch(f, e, m[v], m[g]), 2), C = T[0], b = T[1];
                                if (C) {
                                    if (p > b) {
                                        p = b;
                                        u = _;
                                    }
                                    if (p <= 0 && u.length > 0)
                                        return u;
                                }
                                else if (n.checkIsDead(_)) {
                                    if (p > 3) {
                                        p = 3;
                                        u = [m[v].id, m[g].id];
                                    }
                                }
                                else if (n.getTileObject(m[v].id).checkHasType(TileTypeEnum_1.ETileType.RollCard) || n.getTileObject(m[g].id).checkHasType(TileTypeEnum_1.ETileType.RollCard)) {
                                    if (p > 2) {
                                        p = 2;
                                        u = [m[v].id, m[g].id];
                                    }
                                }
                                else if (n.getTileObject(m[v].id).checkHasType(TileTypeEnum_1.ETileType.Bomb) || n.getTileObject(m[g].id).checkHasType(TileTypeEnum_1.ETileType.Bomb)) {
                                    if (p > 1) {
                                        p = 1;
                                        u = [m[v].id, m[g].id];
                                    }
                                }
                                else if (p > 0) {
                                    p = 0;
                                    return u = [m[v].id, m[g].id];
                                }
                            }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    h && !h.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            return u;
        }
        var E = this.tile2GetTiles(e);
        if (E && 2 == E.length)
            return E;
    };
    __decorate([
        mj.traitEvent("BombCdTp_bombCount")
    ], BombCardType, "getBombCount", null);
    __decorate([
        mj.traitEvent("BombCdTp_filterList")
    ], BombCardType, "getFilterFuncList", null);
    __decorate([
        mj.traitEvent("BombCdTp_getBombClrIds")
    ], BombCardType, "getBombClearTileIds", null);
    return BombCardType;
}());
exports.BombCardType = BombCardType;

cc._RF.pop();