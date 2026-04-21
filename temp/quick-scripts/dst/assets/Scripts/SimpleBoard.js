
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SimpleBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NpbXBsZUJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBQ2xFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDVixPQUFPO1FBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtRQUNwQixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7UUFDcEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsWUFBWSxpQkFBTSxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztLQUNuQixDQUFDO0FBQ0osQ0FBQztBQUNEO0lBQUE7UUFDRSxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxDQUFDLENBQUM7SUF1U2hCLENBQUM7SUF0U0Msc0JBQUksdUNBQWM7YUFBbEI7WUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNSLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQzFHO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtB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QUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0I7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQTNTQSxBQTJTQyxJQUFBO0FBM1NZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDb25zdGFudCBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVDb25zdGFudCc7XG5mdW5jdGlvbiBzKGUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogZS5pZCxcbiAgICByZXNJZDogZS5yZXNJZCxcbiAgICBjYXJkSWQ6IGUuY2FyZElkLFxuICAgIGdyaWRQb3NYOiBlLmdyaWRQb3NYLFxuICAgIGdyaWRQb3NZOiBlLmdyaWRQb3NZLFxuICAgIGxheWVyOiBlLmxheWVyLFxuICAgIG93bmVyR3JpZElkczogWy4uLmUub3duZXJHcmlkSWRzXSxcbiAgICBpc1ZhbGlkOiBlLmlzVmFsaWRcbiAgfTtcbn1cbmV4cG9ydCBjbGFzcyBTaW1wbGVCb2FyZCB7XG4gIF90aWxlcyA9IG5ldyBNYXAoKTtcbiAgX2xheWVycyA9IFtdO1xuICBfbW92ZUxpc3QgPSBbXTtcbiAgX21heExheWVyID0gMDtcbiAgZ2V0IGFsaXZlVGlsZUNvdW50KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModGhpcy5fdGlsZXMudmFsdWVzKCkpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkgaS52YWx1ZS5pc1ZhbGlkICYmIG8rKztcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBnZXQgYWxpdmVUaWxlcygpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLl90aWxlcy52YWx1ZXMoKSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciByID0gaS52YWx1ZTtcbiAgICAgICAgci5pc1ZhbGlkICYmIG8ucHVzaChyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBnZXQgdW5sb2NrVGlsZXMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXModGhpcy5fdGlsZXMudmFsdWVzKCkpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgciA9IGkudmFsdWU7XG4gICAgICAgIHIuaXNWYWxpZCAmJiAhdGhpcy5pc1RpbGVMb2NrZWQocikgJiYgby5wdXNoKHIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIGdldCBtb3ZlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW92ZUxpc3Q7XG4gIH1cbiAgaW5pdEZyb21UaWxlcyhlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGk7XG4gICAgdGhpcy5fdGlsZXMuY2xlYXIoKTtcbiAgICB0aGlzLl9sYXllcnMgPSBbXTtcbiAgICB0aGlzLl9tb3ZlTGlzdCA9IFtdO1xuICAgIHRoaXMuX21heExheWVyID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKGUpLCBsID0gci5uZXh0KCk7ICFsLmRvbmU7IGwgPSByLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IGwudmFsdWU7XG4gICAgICAgIGlmIChjLmlzVmFsaWQpIHtcbiAgICAgICAgICB2YXIgdSA9IHMoYyk7XG4gICAgICAgICAgdGhpcy5fdGlsZXMuc2V0KGMuaWQsIHUpO1xuICAgICAgICAgIGZvciAoOyB0aGlzLl9sYXllcnMubGVuZ3RoIDw9IGMubGF5ZXI7KSB0aGlzLl9sYXllcnMucHVzaCh7XG4gICAgICAgICAgICBsYXllckluZGV4OiB0aGlzLl9sYXllcnMubGVuZ3RoLFxuICAgICAgICAgICAgZ3JpZHM6IG5ldyBNYXAoKSxcbiAgICAgICAgICAgIHRpbGVJZHM6IG5ldyBTZXQoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBwID0gdGhpcy5fbGF5ZXJzW2MubGF5ZXJdO1xuICAgICAgICAgIHAudGlsZUlkcy5hZGQoYy5pZCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGYgPSAobiA9IHZvaWQgMCwgX192YWx1ZXMoYy5vd25lckdyaWRJZHMpKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIGggPSBkLnZhbHVlO1xuICAgICAgICAgICAgICBwLmdyaWRzLnNldChoLCBjLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZCAmJiAhZC5kb25lICYmIChpID0gZi5yZXR1cm4pICYmIGkuY2FsbChmKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjLmxheWVyID4gdGhpcy5fbWF4TGF5ZXIgJiYgKHRoaXMuX21heExheWVyID0gYy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gci5yZXR1cm4pICYmIG8uY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjbG9uZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMgPSBuZXcgU2ltcGxlQm9hcmQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHRoaXMuX3RpbGVzKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYgPSBfX3JlYWQocC52YWx1ZSwgMiksXG4gICAgICAgICAgZCA9IGZbMF0sXG4gICAgICAgICAgaCA9IGZbMV07XG4gICAgICAgIGMuX3RpbGVzLnNldChkLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGgpLCB7XG4gICAgICAgICAgb3duZXJHcmlkSWRzOiBbLi4uaC5vd25lckdyaWRJZHNdXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gdS5yZXR1cm4pICYmIG8uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKHRoaXMuX2xheWVycyksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSB7XG4gICAgICAgIHZhciB2ID0gbS52YWx1ZTtcbiAgICAgICAgYy5fbGF5ZXJzLnB1c2goe1xuICAgICAgICAgIGxheWVySW5kZXg6IHYubGF5ZXJJbmRleCxcbiAgICAgICAgICBncmlkczogbmV3IE1hcCh2LmdyaWRzKSxcbiAgICAgICAgICB0aWxlSWRzOiBuZXcgU2V0KHYudGlsZUlkcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG0gJiYgIW0uZG9uZSAmJiAocyA9IHkucmV0dXJuKSAmJiBzLmNhbGwoeSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgYy5fbW92ZUxpc3QgPSBbLi4udGhpcy5fbW92ZUxpc3RdO1xuICAgIGMuX21heExheWVyID0gdGhpcy5fbWF4TGF5ZXI7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgaXNUaWxlTG9ja2VkKGUpIHtcbiAgICBpZiAodGhpcy5oYXNDb3ZlcihlKSkgcmV0dXJuIHRydWU7XG4gICAgdmFyIHQgPSB0aGlzLmlzSGFzTGVmdChlKSxcbiAgICAgIG8gPSB0aGlzLmlzSGFzUmlnaHQoZSk7XG4gICAgcmV0dXJuIHQgJiYgbztcbiAgfVxuICBoYXNDb3ZlcihlKSB7XG4gICAgZm9yICh2YXIgdCwgbywgbiA9IGUubGF5ZXIgKyAxOyBuIDwgdGhpcy5fbGF5ZXJzLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuX2xheWVyc1tuXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHIgPSAodCA9IHZvaWQgMCwgX192YWx1ZXMoZS5vd25lckdyaWRJZHMpKSwgbCA9IHIubmV4dCgpOyAhbC5kb25lOyBsID0gci5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzQ2FyZChpLCBzKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoYXNDYXJkKGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuZ3JpZHMuZ2V0KHQpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX3RpbGVzLmdldChvKTtcbiAgICAgIGlmIChuICYmIG4uaXNWYWxpZCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpc0hhc0xlZnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fbGF5ZXJzW2UubGF5ZXJdO1xuICAgIHJldHVybiAhIXQgJiYgdGhpcy5ncmlkSW5kZXgyUG9zWChlLm93bmVyR3JpZElkc1swXSkgPiAwICYmICh0aGlzLmhhc0NhcmQodCwgZS5vd25lckdyaWRJZHNbMF0gLSAxKSB8fCB0aGlzLmhhc0NhcmQodCwgZS5vd25lckdyaWRJZHNbMl0gLSAxKSk7XG4gIH1cbiAgaXNIYXNSaWdodChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9sYXllcnNbZS5sYXllcl07XG4gICAgcmV0dXJuICEhdCAmJiB0aGlzLmdyaWRJbmRleDJQb3NYKGUub3duZXJHcmlkSWRzWzFdKSA8IDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCAtIDEgJiYgKHRoaXMuaGFzQ2FyZCh0LCBlLm93bmVyR3JpZElkc1sxXSArIDEpIHx8IHRoaXMuaGFzQ2FyZCh0LCBlLm93bmVyR3JpZElkc1szXSArIDEpKTtcbiAgfVxuICBncmlkSW5kZXgyUG9zWChlKSB7XG4gICAgcmV0dXJuIGUgJSAoMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYKTtcbiAgfVxuICBncmlkSW5kZXgyUG9zWShlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZSAvICgyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpKTtcbiAgfVxuICBtYWtlTW92ZShlKSB7XG4gICAgdGhpcy5fbW92ZUxpc3QucHVzaChlKTtcbiAgICB0aGlzLnJlbW92ZVRpbGUoZS50aWxlMSk7XG4gICAgdGhpcy5yZW1vdmVUaWxlKGUudGlsZTIpO1xuICB9XG4gIG1ha2VNb3ZlQnlTaW1wbGUoZSwgdCkge1xuICAgIHZhciBvID0ge1xuICAgICAgdGlsZTE6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZSksIHtcbiAgICAgICAgb3duZXJHcmlkSWRzOiBbLi4uZS5vd25lckdyaWRJZHNdXG4gICAgICB9KSxcbiAgICAgIHRpbGUyOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHQpLCB7XG4gICAgICAgIG93bmVyR3JpZElkczogWy4uLnQub3duZXJHcmlkSWRzXVxuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuX21vdmVMaXN0LnB1c2gobyk7XG4gICAgdGhpcy5yZW1vdmVUaWxlQnlJZChlLmlkKTtcbiAgICB0aGlzLnJlbW92ZVRpbGVCeUlkKHQuaWQpO1xuICB9XG4gIHJlbW92ZVNpbmdsZVRpbGUoZSkge1xuICAgIHRoaXMucmVtb3ZlVGlsZUJ5SWQoZS5pZCk7XG4gIH1cbiAgcmVtb3ZlVGlsZShlKSB7XG4gICAgdGhpcy5yZW1vdmVUaWxlQnlJZChlLmlkKTtcbiAgfVxuICByZW1vdmVUaWxlQnlJZChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXMuX3RpbGVzLmdldChlKTtcbiAgICBpZiAobiAmJiBuLmlzVmFsaWQpIHtcbiAgICAgIG4uaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgdmFyIGkgPSB0aGlzLl9sYXllcnNbbi5sYXllcl07XG4gICAgICBpZiAoaSkge1xuICAgICAgICBpLnRpbGVJZHMuZGVsZXRlKGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhuLm93bmVyR3JpZElkcyksIGwgPSByLm5leHQoKTsgIWwuZG9uZTsgbCA9IHIubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgICAgICBpLmdyaWRzLmdldChzKSA9PT0gZSAmJiBpLmdyaWRzLmRlbGV0ZShzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0VGlsZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGVzLmdldChlKTtcbiAgfVxuICBnZXRTdGF0ZVNpZ25hdHVyZSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLl90aWxlcy52YWx1ZXMoKSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciByID0gaS52YWx1ZTtcbiAgICAgICAgci5pc1ZhbGlkICYmIG8ucHVzaChyLmlkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBvLnNvcnQoKTtcbiAgICByZXR1cm4gby5qb2luKFwiLFwiKTtcbiAgfVxufSJdfQ==