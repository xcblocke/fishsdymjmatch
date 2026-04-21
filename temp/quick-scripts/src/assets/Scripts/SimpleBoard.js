"use strict";
cc._RF.push(module, '33726/cL0RAc7dEkG03XhpB', 'SimpleBoard');
// Scripts/SimpleBoard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleBoard = void 0;
var GameConstant_1 = require("./core/simulator/constant/GameConstant");
function s(e) {
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
}
var SimpleBoard = /** @class */ (function () {
    function SimpleBoard() {
        this._tiles = new Map();
        this._layers = [];
        this._moveList = [];
        this._maxLayer = 0;
    }
    Object.defineProperty(SimpleBoard.prototype, "aliveTileCount", {
        get: function () {
            var e, t, o = 0;
            try {
                for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next())
                    i.value.isValid && o++;
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
            return o;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimpleBoard.prototype, "aliveTiles", {
        get: function () {
            var e, t, o = [];
            try {
                for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    r.isValid && o.push(r);
                }
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
            return o;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimpleBoard.prototype, "unlockTiles", {
        get: function () {
            var e, t, o = [];
            try {
                for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    r.isValid && !this.isTileLocked(r) && o.push(r);
                }
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
            return o;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimpleBoard.prototype, "moveList", {
        get: function () {
            return this._moveList;
        },
        enumerable: false,
        configurable: true
    });
    SimpleBoard.prototype.initFromTiles = function (e) {
        var t, o, n, i;
        this._tiles.clear();
        this._layers = [];
        this._moveList = [];
        this._maxLayer = 0;
        try {
            for (var r = __values(e), l = r.next(); !l.done; l = r.next()) {
                var c = l.value;
                if (c.isValid) {
                    var u = s(c);
                    this._tiles.set(c.id, u);
                    for (; this._layers.length <= c.layer;)
                        this._layers.push({
                            layerIndex: this._layers.length,
                            grids: new Map(),
                            tileIds: new Set()
                        });
                    var p = this._layers[c.layer];
                    p.tileIds.add(c.id);
                    try {
                        for (var f = (n = void 0, __values(c.ownerGridIds)), d = f.next(); !d.done; d = f.next()) {
                            var h = d.value;
                            p.grids.set(h, c.id);
                        }
                    }
                    catch (e) {
                        n = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            d && !d.done && (i = f.return) && i.call(f);
                        }
                        finally {
                            if (n)
                                throw n.error;
                        }
                    }
                    c.layer > this._maxLayer && (this._maxLayer = c.layer);
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
                l && !l.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    SimpleBoard.prototype.clone = function () {
        var t, o, l, s, c = new SimpleBoard();
        try {
            for (var u = __values(this._tiles), p = u.next(); !p.done; p = u.next()) {
                var f = __read(p.value, 2), d = f[0], h = f[1];
                c._tiles.set(d, Object.assign(Object.assign({}, h), {
                    ownerGridIds: __spreadArrays(h.ownerGridIds)
                }));
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
        try {
            for (var y = __values(this._layers), m = y.next(); !m.done; m = y.next()) {
                var v = m.value;
                c._layers.push({
                    layerIndex: v.layerIndex,
                    grids: new Map(v.grids),
                    tileIds: new Set(v.tileIds)
                });
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (s = y.return) && s.call(y);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        c._moveList = __spreadArrays(this._moveList);
        c._maxLayer = this._maxLayer;
        return c;
    };
    SimpleBoard.prototype.isTileLocked = function (e) {
        if (this.hasCover(e))
            return true;
        var t = this.isHasLeft(e), o = this.isHasRight(e);
        return t && o;
    };
    SimpleBoard.prototype.hasCover = function (e) {
        for (var t, o, n = e.layer + 1; n < this._layers.length; n++) {
            var i = this._layers[n];
            try {
                for (var r = (t = void 0, __values(e.ownerGridIds)), l = r.next(); !l.done; l = r.next()) {
                    var s = l.value;
                    if (this.hasCard(i, s))
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
                    l && !l.done && (o = r.return) && o.call(r);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        return false;
    };
    SimpleBoard.prototype.hasCard = function (e, t) {
        var o = e.grids.get(t);
        if (o) {
            var n = this._tiles.get(o);
            if (n && n.isValid)
                return true;
        }
        return false;
    };
    SimpleBoard.prototype.isHasLeft = function (e) {
        var t = this._layers[e.layer];
        return !!t && this.gridIndex2PosX(e.ownerGridIds[0]) > 0 && (this.hasCard(t, e.ownerGridIds[0] - 1) || this.hasCard(t, e.ownerGridIds[2] - 1));
    };
    SimpleBoard.prototype.isHasRight = function (e) {
        var t = this._layers[e.layer];
        return !!t && this.gridIndex2PosX(e.ownerGridIds[1]) < 2 * GameConstant_1.default.MaxTileCountX - 1 && (this.hasCard(t, e.ownerGridIds[1] + 1) || this.hasCard(t, e.ownerGridIds[3] + 1));
    };
    SimpleBoard.prototype.gridIndex2PosX = function (e) {
        return e % (2 * GameConstant_1.default.MaxTileCountX);
    };
    SimpleBoard.prototype.gridIndex2PosY = function (e) {
        return Math.floor(e / (2 * GameConstant_1.default.MaxTileCountX));
    };
    SimpleBoard.prototype.makeMove = function (e) {
        this._moveList.push(e);
        this.removeTile(e.tile1);
        this.removeTile(e.tile2);
    };
    SimpleBoard.prototype.makeMoveBySimple = function (e, t) {
        var o = {
            tile1: Object.assign(Object.assign({}, e), {
                ownerGridIds: __spreadArrays(e.ownerGridIds)
            }),
            tile2: Object.assign(Object.assign({}, t), {
                ownerGridIds: __spreadArrays(t.ownerGridIds)
            })
        };
        this._moveList.push(o);
        this.removeTileById(e.id);
        this.removeTileById(t.id);
    };
    SimpleBoard.prototype.removeSingleTile = function (e) {
        this.removeTileById(e.id);
    };
    SimpleBoard.prototype.removeTile = function (e) {
        this.removeTileById(e.id);
    };
    SimpleBoard.prototype.removeTileById = function (e) {
        var t, o, n = this._tiles.get(e);
        if (n && n.isValid) {
            n.isValid = false;
            var i = this._layers[n.layer];
            if (i) {
                i.tileIds.delete(e);
                try {
                    for (var r = __values(n.ownerGridIds), l = r.next(); !l.done; l = r.next()) {
                        var s = l.value;
                        i.grids.get(s) === e && i.grids.delete(s);
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        l && !l.done && (o = r.return) && o.call(r);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
            }
        }
    };
    SimpleBoard.prototype.getTile = function (e) {
        return this._tiles.get(e);
    };
    SimpleBoard.prototype.getStateSignature = function () {
        var e, t, o = [];
        try {
            for (var n = __values(this._tiles.values()), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                r.isValid && o.push(r.id);
            }
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
        o.sort();
        return o.join(",");
    };
    return SimpleBoard;
}());
exports.SimpleBoard = SimpleBoard;

cc._RF.pop();