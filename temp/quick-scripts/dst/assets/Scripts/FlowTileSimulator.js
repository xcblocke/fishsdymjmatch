
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FlowTileSimulator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '085a7gDUs9IB4m+DnnbcGhy', 'FlowTileSimulator');
// Scripts/FlowTileSimulator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowTileSimulator = exports.computeDepths = exports.cloneFlowTile = exports.createFlowTile = void 0;
function l(e) {
    return e % 14;
}
var createFlowTile = function (e, t, o, n, i) {
    return {
        id: e,
        gridX: t,
        gridY: o,
        layer: n,
        cardId: i,
        isValid: true,
        ownerGridIds: (r = t, l = o, s = l * 14 + r, [s, s + 1, s + 14, s + 14 + 1])
    };
    var r, l, s;
};
exports.createFlowTile = createFlowTile;
function cloneFlowTile(e) {
    return {
        id: e.id,
        gridX: e.gridX,
        gridY: e.gridY,
        layer: e.layer,
        cardId: e.cardId,
        isValid: e.isValid,
        ownerGridIds: __spreadArrays(e.ownerGridIds),
        depth: e.depth
    };
}
exports.cloneFlowTile = cloneFlowTile;
var computeDepths = function (e) {
    for (var t, o, n, i, a, l, c, p = e.map(function (e) {
        return cloneFlowTile(e);
    }), f = new FlowTileSimulator(p), d = new Map(), h = 0; f.getRemainingCount() > 0;) {
        var y = f.getFreeTiles();
        if (0 === y.length) {
            try {
                for (var m = (t = void 0, __values(p)), v = m.next(); !v.done; v = m.next())
                    if ((T = v.value).isValid) {
                        d.set(T.id, h);
                        T.isValid = false;
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
            break;
        }
        try {
            for (var g = (n = void 0, __values(y)), _ = g.next(); !_.done; _ = g.next()) {
                var T = _.value;
                d.set(T.id, h);
                T.isValid = false;
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (i = g.return) && i.call(g);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        f._rebuildGridMap();
        h++;
    }
    try {
        for (var C = __values(e), b = C.next(); !b.done; b = C.next())
            (T = b.value).depth = null !== (c = d.get(T.id)) && void 0 !== c ? c : 0;
    }
    catch (e) {
        a = {
            error: e
        };
    }
    finally {
        try {
            b && !b.done && (l = C.return) && l.call(C);
        }
        finally {
            if (a)
                throw a.error;
        }
    }
};
exports.computeDepths = computeDepths;
function c(e, t) {
    return 10000 * e + t;
}
var FlowTileSimulator = /** @class */ (function () {
    function FlowTileSimulator(e) {
        this._gridMap = new Map();
        this._maxLayer = 0;
        this._tiles = null;
        this._tiles = e;
        this._rebuildGridMap();
    }
    Object.defineProperty(FlowTileSimulator.prototype, "tiles", {
        get: function () {
            return this._tiles;
        },
        enumerable: false,
        configurable: true
    });
    FlowTileSimulator.prototype._rebuildGridMap = function () {
        var e, t, o, n;
        this._gridMap.clear();
        this._maxLayer = 0;
        try {
            for (var i = __values(this._tiles), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                if (l.isValid) {
                    l.layer > this._maxLayer && (this._maxLayer = l.layer);
                    try {
                        for (var s = (o = void 0, __values(l.ownerGridIds)), u = s.next(); !u.done; u = s.next()) {
                            var p = u.value;
                            this._gridMap.set(c(l.layer, p), l);
                        }
                    }
                    catch (e) {
                        o = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            u && !u.done && (n = s.return) && n.call(s);
                        }
                        finally {
                            if (o)
                                throw o.error;
                        }
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
    };
    FlowTileSimulator.prototype._isHasCard = function (e, t) {
        var o = this._gridMap.get(c(e, t));
        return !(!o || !o.isValid);
    };
    FlowTileSimulator.prototype.isCovered = function (e) {
        var t, o;
        if (!e.isValid)
            return false;
        for (var n = e.layer + 1; n <= this._maxLayer; n++)
            try {
                for (var i = (t = void 0, __values(e.ownerGridIds)), a = i.next(); !a.done; a = i.next()) {
                    var l = a.value;
                    if (this._isHasCard(n, l))
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
                    a && !a.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        return false;
    };
    FlowTileSimulator.prototype.isLeftBlocked = function (e) {
        return !!e.isValid && !(l(e.ownerGridIds[0]) <= 0) && (this._isHasCard(e.layer, e.ownerGridIds[0] - 1) || this._isHasCard(e.layer, e.ownerGridIds[2] - 1));
    };
    FlowTileSimulator.prototype.isRightBlocked = function (e) {
        return !!e.isValid && !(l(e.ownerGridIds[1]) >= 13) && (this._isHasCard(e.layer, e.ownerGridIds[1] + 1) || this._isHasCard(e.layer, e.ownerGridIds[3] + 1));
    };
    FlowTileSimulator.prototype.isLocked = function (e) {
        return !e.isValid || !!this.isCovered(e) || !(!this.isLeftBlocked(e) || !this.isRightBlocked(e));
    };
    FlowTileSimulator.prototype.getFreeTiles = function () {
        var e = this;
        return this._tiles.filter(function (t) {
            return t.isValid && !e.isLocked(t);
        }).sort(function (e, t) {
            return e.layer - t.layer || e.gridY - t.gridY || e.gridX - t.gridX;
        });
    };
    FlowTileSimulator.prototype.getAvailablePairCount = function () {
        var e, t, o = this.getFreeTiles(), n = {};
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                n[l.cardId] = (n[l.cardId] || 0) + 1;
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
        var s = 0;
        for (var c in n)
            s += Math.floor(n[c] / 2);
        return s;
    };
    FlowTileSimulator.prototype.getAvailablePairs = function () {
        var e, t, o = this.getFreeTiles(), n = {};
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                (n[l.cardId] = n[l.cardId] || []).push(l);
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
        var s = [];
        for (var c in n)
            for (var u = n[c], p = 0; p < u.length - 1; p += 2)
                s.push([u[p], u[p + 1]]);
        return s;
    };
    FlowTileSimulator.prototype.clearPair = function (e, t) {
        var o, n, i, a, l, s, u, p;
        e.isValid = false;
        t.isValid = false;
        try {
            for (var f = __values(e.ownerGridIds), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                this._gridMap.delete(c(e.layer, h));
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
        try {
            for (var y = __values(t.ownerGridIds), m = y.next(); !m.done; m = y.next()) {
                h = m.value;
                this._gridMap.delete(c(t.layer, h));
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (a = y.return) && a.call(y);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        if (e.layer === this._maxLayer || t.layer === this._maxLayer) {
            this._maxLayer = 0;
            try {
                for (var v = __values(this._tiles), g = v.next(); !g.done; g = v.next())
                    (b = g.value).isValid && b.layer > this._maxLayer && (this._maxLayer = b.layer);
            }
            catch (e) {
                l = {
                    error: e
                };
            }
            finally {
                try {
                    g && !g.done && (s = v.return) && s.call(v);
                }
                finally {
                    if (l)
                        throw l.error;
                }
            }
        }
        var _ = 0;
        try {
            for (var T = __values(this._tiles), C = T.next(); !C.done; C = T.next()) {
                var b;
                (b = C.value).isValid && !this.isLocked(b) && _++;
            }
        }
        catch (e) {
            u = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (p = T.return) && p.call(T);
            }
            finally {
                if (u)
                    throw u.error;
            }
        }
        return _;
    };
    FlowTileSimulator.prototype.getRemainingCount = function () {
        var e, t, o = 0;
        try {
            for (var n = __values(this._tiles), i = n.next(); !i.done; i = n.next())
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
    };
    FlowTileSimulator.prototype.isCleared = function () {
        return 0 === this.getRemainingCount();
    };
    FlowTileSimulator.prototype.isDead = function () {
        return this.getRemainingCount() > 0 && 0 === this.getAvailablePairCount();
    };
    FlowTileSimulator.prototype.clone = function () {
        return new FlowTileSimulator(this._tiles.map(cloneFlowTile));
    };
    FlowTileSimulator.prototype.getTilesCoveredBy = function (e) {
        var t, o;
        if (!e.isValid)
            return [];
        var n = [], i = new Set();
        try {
            for (var a = __values(e.ownerGridIds), l = a.next(); !l.done; l = a.next())
                for (var s = l.value, u = e.layer - 1; u >= 0; u--) {
                    var p = this._gridMap.get(c(u, s));
                    if (p && p.isValid && !i.has(p.id)) {
                        i.add(p.id);
                        n.push(p);
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
        return n;
    };
    FlowTileSimulator.prototype.getFreedByRemoval = function (e) {
        var t, o, n, i, a = [], l = this.getTilesCoveredBy(e);
        try {
            for (var s = __values(l), u = s.next(); !u.done; u = s.next()) {
                var p = u.value;
                if (p.id !== e.id && this.isCovered(p)) {
                    for (var f = true, d = p.layer + 1; d <= this._maxLayer; d++) {
                        try {
                            for (var h = (n = void 0, __values(p.ownerGridIds)), y = h.next(); !y.done; y = h.next()) {
                                var m = y.value, v = this._gridMap.get(c(d, m));
                                if (v && v.isValid && v.id !== e.id) {
                                    f = false;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            n = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                y && !y.done && (i = h.return) && i.call(h);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
                        }
                        if (!f)
                            break;
                    }
                    f && a.push(p);
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
                u && !u.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    FlowTileSimulator.prototype.peelLayers = function () {
        for (var t, o, n, i, a, l, c = this._tiles.map(function (e) {
            return cloneFlowTile(e);
        }), u = new FlowTileSimulator(c), p = new Map(), f = 0; u.getRemainingCount() > 0;) {
            var d = u.getFreeTiles();
            if (0 === d.length) {
                var h = [];
                try {
                    for (var y = (t = void 0, __values(c)), m = y.next(); !m.done; m = y.next())
                        if ((b = m.value).isValid) {
                            h.push(b.id);
                            b.isValid = false;
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
                p.set(f, h);
                break;
            }
            p.set(f, d.map(function (e) {
                return e.id;
            }));
            try {
                for (var v = (n = void 0, __values(d)), g = v.next(); !g.done; g = v.next())
                    (b = g.value).isValid = false;
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    g && !g.done && (i = v.return) && i.call(v);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            u._rebuildGridMap();
            f++;
        }
        var _ = new Map();
        try {
            for (var T = __values(this._tiles), C = T.next(); !C.done; C = T.next()) {
                var b = C.value;
                _.set(b.id, b);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (l = T.return) && l.call(T);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var E = new Map();
        p.forEach(function (e, t) {
            var o, n, i = e.map(function (e) {
                return _.get(e);
            }).filter(Boolean);
            try {
                for (var a = __values(i), l = a.next(); !l.done; l = a.next())
                    l.value.depth = t;
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (n = a.return) && n.call(a);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            E.set(t, i);
        });
        return E;
    };
    return FlowTileSimulator;
}());
exports.FlowTileSimulator = FlowTileSimulator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0Zsb3dUaWxlU2ltdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNWLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNoQixDQUFDO0FBQ00sSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNqRCxPQUFPO1FBQ0wsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3RSxDQUFDO0lBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQztBQVhTLFFBQUEsY0FBYyxrQkFXdkI7QUFDRixTQUFnQixhQUFhLENBQUMsQ0FBQztJQUM3QixPQUFPO1FBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBQ2QsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztRQUNsQixZQUFZLGlCQUFNLENBQUMsQ0FBQyxZQUFZLENB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QUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQW5aQSxBQW1aQyxJQUFBO0FBblpZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGwoZSkge1xuICByZXR1cm4gZSAlIDE0O1xufVxuZXhwb3J0IHZhciBjcmVhdGVGbG93VGlsZSA9IGZ1bmN0aW9uIChlLCB0LCBvLCBuLCBpKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGUsXG4gICAgZ3JpZFg6IHQsXG4gICAgZ3JpZFk6IG8sXG4gICAgbGF5ZXI6IG4sXG4gICAgY2FyZElkOiBpLFxuICAgIGlzVmFsaWQ6IHRydWUsXG4gICAgb3duZXJHcmlkSWRzOiAociA9IHQsIGwgPSBvLCBzID0gbCAqIDE0ICsgciwgW3MsIHMgKyAxLCBzICsgMTQsIHMgKyAxNCArIDFdKVxuICB9O1xuICB2YXIgciwgbCwgcztcbn07XG5leHBvcnQgZnVuY3Rpb24gY2xvbmVGbG93VGlsZShlKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGUuaWQsXG4gICAgZ3JpZFg6IGUuZ3JpZFgsXG4gICAgZ3JpZFk6IGUuZ3JpZFksXG4gICAgbGF5ZXI6IGUubGF5ZXIsXG4gICAgY2FyZElkOiBlLmNhcmRJZCxcbiAgICBpc1ZhbGlkOiBlLmlzVmFsaWQsXG4gICAgb3duZXJHcmlkSWRzOiBbLi4uZS5vd25lckdyaWRJZHNdLFxuICAgIGRlcHRoOiBlLmRlcHRoXG4gIH07XG59XG5leHBvcnQgdmFyIGNvbXB1dGVEZXB0aHMgPSBmdW5jdGlvbiAoZSkge1xuICBmb3IgKHZhciB0LCBvLCBuLCBpLCBhLCBsLCBjLCBwID0gZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBjbG9uZUZsb3dUaWxlKGUpO1xuICAgIH0pLCBmID0gbmV3IEZsb3dUaWxlU2ltdWxhdG9yKHApLCBkID0gbmV3IE1hcCgpLCBoID0gMDsgZi5nZXRSZW1haW5pbmdDb3VudCgpID4gMDspIHtcbiAgICB2YXIgeSA9IGYuZ2V0RnJlZVRpbGVzKCk7XG4gICAgaWYgKDAgPT09IHkubGVuZ3RoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBtID0gKHQgPSB2b2lkIDAsIF9fdmFsdWVzKHApKSwgdiA9IG0ubmV4dCgpOyAhdi5kb25lOyB2ID0gbS5uZXh0KCkpIGlmICgoVCA9IHYudmFsdWUpLmlzVmFsaWQpIHtcbiAgICAgICAgICBkLnNldChULmlkLCBoKTtcbiAgICAgICAgICBULmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobyA9IG0ucmV0dXJuKSAmJiBvLmNhbGwobSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZyA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyh5KSksIF8gPSBnLm5leHQoKTsgIV8uZG9uZTsgXyA9IGcubmV4dCgpKSB7XG4gICAgICAgIHZhciBUID0gXy52YWx1ZTtcbiAgICAgICAgZC5zZXQoVC5pZCwgaCk7XG4gICAgICAgIFQuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBfICYmICFfLmRvbmUgJiYgKGkgPSBnLnJldHVybikgJiYgaS5jYWxsKGcpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGYuX3JlYnVpbGRHcmlkTWFwKCk7XG4gICAgaCsrO1xuICB9XG4gIHRyeSB7XG4gICAgZm9yICh2YXIgQyA9IF9fdmFsdWVzKGUpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkgKFQgPSBiLnZhbHVlKS5kZXB0aCA9IG51bGwgIT09IChjID0gZC5nZXQoVC5pZCkpICYmIHZvaWQgMCAhPT0gYyA/IGMgOiAwO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYSA9IHtcbiAgICAgIGVycm9yOiBlXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgYiAmJiAhYi5kb25lICYmIChsID0gQy5yZXR1cm4pICYmIGwuY2FsbChDKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gYyhlLCB0KSB7XG4gIHJldHVybiAxMDAwMCAqIGUgKyB0O1xufVxuZXhwb3J0IGNsYXNzIEZsb3dUaWxlU2ltdWxhdG9yIHtcbiAgX2dyaWRNYXAgPSBuZXcgTWFwKCk7XG4gIF9tYXhMYXllciA9IDA7XG4gIF90aWxlcyA9IG51bGw7XG4gIGdldCB0aWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZXM7XG4gIH1cbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMuX3RpbGVzID0gZTtcbiAgICB0aGlzLl9yZWJ1aWxkR3JpZE1hcCgpO1xuICB9XG4gIF9yZWJ1aWxkR3JpZE1hcCgpIHtcbiAgICB2YXIgZSwgdCwgbywgbjtcbiAgICB0aGlzLl9ncmlkTWFwLmNsZWFyKCk7XG4gICAgdGhpcy5fbWF4TGF5ZXIgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModGhpcy5fdGlsZXMpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IGEudmFsdWU7XG4gICAgICAgIGlmIChsLmlzVmFsaWQpIHtcbiAgICAgICAgICBsLmxheWVyID4gdGhpcy5fbWF4TGF5ZXIgJiYgKHRoaXMuX21heExheWVyID0gbC5sYXllcik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHMgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMobC5vd25lckdyaWRJZHMpKSwgdSA9IHMubmV4dCgpOyAhdS5kb25lOyB1ID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLl9ncmlkTWFwLnNldChjKGwubGF5ZXIsIHApLCBsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gcy5yZXR1cm4pICYmIG4uY2FsbChzKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKHQgPSBpLnJldHVybikgJiYgdC5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9pc0hhc0NhcmQoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fZ3JpZE1hcC5nZXQoYyhlLCB0KSk7XG4gICAgcmV0dXJuICEoIW8gfHwgIW8uaXNWYWxpZCk7XG4gIH1cbiAgaXNDb3ZlcmVkKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICBpZiAoIWUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIG4gPSBlLmxheWVyICsgMTsgbiA8PSB0aGlzLl9tYXhMYXllcjsgbisrKSB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9ICh0ID0gdm9pZCAwLCBfX3ZhbHVlcyhlLm93bmVyR3JpZElkcykpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IGEudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9pc0hhc0NhcmQobiwgbCkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpc0xlZnRCbG9ja2VkKGUpIHtcbiAgICByZXR1cm4gISFlLmlzVmFsaWQgJiYgIShsKGUub3duZXJHcmlkSWRzWzBdKSA8PSAwKSAmJiAodGhpcy5faXNIYXNDYXJkKGUubGF5ZXIsIGUub3duZXJHcmlkSWRzWzBdIC0gMSkgfHwgdGhpcy5faXNIYXNDYXJkKGUubGF5ZXIsIGUub3duZXJHcmlkSWRzWzJdIC0gMSkpO1xuICB9XG4gIGlzUmlnaHRCbG9ja2VkKGUpIHtcbiAgICByZXR1cm4gISFlLmlzVmFsaWQgJiYgIShsKGUub3duZXJHcmlkSWRzWzFdKSA+PSAxMykgJiYgKHRoaXMuX2lzSGFzQ2FyZChlLmxheWVyLCBlLm93bmVyR3JpZElkc1sxXSArIDEpIHx8IHRoaXMuX2lzSGFzQ2FyZChlLmxheWVyLCBlLm93bmVyR3JpZElkc1szXSArIDEpKTtcbiAgfVxuICBpc0xvY2tlZChlKSB7XG4gICAgcmV0dXJuICFlLmlzVmFsaWQgfHwgISF0aGlzLmlzQ292ZXJlZChlKSB8fCAhKCF0aGlzLmlzTGVmdEJsb2NrZWQoZSkgfHwgIXRoaXMuaXNSaWdodEJsb2NrZWQoZSkpO1xuICB9XG4gIGdldEZyZWVUaWxlcygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGVzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuaXNWYWxpZCAmJiAhZS5pc0xvY2tlZCh0KTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZS5sYXllciAtIHQubGF5ZXIgfHwgZS5ncmlkWSAtIHQuZ3JpZFkgfHwgZS5ncmlkWCAtIHQuZ3JpZFg7XG4gICAgfSk7XG4gIH1cbiAgZ2V0QXZhaWxhYmxlUGFpckNvdW50KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSB0aGlzLmdldEZyZWVUaWxlcygpLFxuICAgICAgbiA9IHt9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobyksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgbltsLmNhcmRJZF0gPSAobltsLmNhcmRJZF0gfHwgMCkgKyAxO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKHQgPSBpLnJldHVybikgJiYgdC5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzID0gMDtcbiAgICBmb3IgKHZhciBjIGluIG4pIHMgKz0gTWF0aC5mbG9vcihuW2NdIC8gMik7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgZ2V0QXZhaWxhYmxlUGFpcnMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuZ2V0RnJlZVRpbGVzKCksXG4gICAgICBuID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhvKSwgYSA9IGkubmV4dCgpOyAhYS5kb25lOyBhID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSBhLnZhbHVlO1xuICAgICAgICAobltsLmNhcmRJZF0gPSBuW2wuY2FyZElkXSB8fCBbXSkucHVzaChsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmICh0ID0gaS5yZXR1cm4pICYmIHQuY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcyA9IFtdO1xuICAgIGZvciAodmFyIGMgaW4gbikgZm9yICh2YXIgdSA9IG5bY10sIHAgPSAwOyBwIDwgdS5sZW5ndGggLSAxOyBwICs9IDIpIHMucHVzaChbdVtwXSwgdVtwICsgMV1dKTtcbiAgICByZXR1cm4gcztcbiAgfVxuICBjbGVhclBhaXIoZSwgdCkge1xuICAgIHZhciBvLCBuLCBpLCBhLCBsLCBzLCB1LCBwO1xuICAgIGUuaXNWYWxpZCA9IGZhbHNlO1xuICAgIHQuaXNWYWxpZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoZS5vd25lckdyaWRJZHMpLCBkID0gZi5uZXh0KCk7ICFkLmRvbmU7IGQgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgIHRoaXMuX2dyaWRNYXAuZGVsZXRlKGMoZS5sYXllciwgaCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKG4gPSBmLnJldHVybikgJiYgbi5jYWxsKGYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXModC5vd25lckdyaWRJZHMpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICBoID0gbS52YWx1ZTtcbiAgICAgICAgdGhpcy5fZ3JpZE1hcC5kZWxldGUoYyh0LmxheWVyLCBoKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG0gJiYgIW0uZG9uZSAmJiAoYSA9IHkucmV0dXJuKSAmJiBhLmNhbGwoeSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUubGF5ZXIgPT09IHRoaXMuX21heExheWVyIHx8IHQubGF5ZXIgPT09IHRoaXMuX21heExheWVyKSB7XG4gICAgICB0aGlzLl9tYXhMYXllciA9IDA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB2ID0gX192YWx1ZXModGhpcy5fdGlsZXMpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkgKGIgPSBnLnZhbHVlKS5pc1ZhbGlkICYmIGIubGF5ZXIgPiB0aGlzLl9tYXhMYXllciAmJiAodGhpcy5fbWF4TGF5ZXIgPSBiLmxheWVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBnICYmICFnLmRvbmUgJiYgKHMgPSB2LnJldHVybikgJiYgcy5jYWxsKHYpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBfID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgVCA9IF9fdmFsdWVzKHRoaXMuX3RpbGVzKSwgQyA9IFQubmV4dCgpOyAhQy5kb25lOyBDID0gVC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGI7XG4gICAgICAgIChiID0gQy52YWx1ZSkuaXNWYWxpZCAmJiAhdGhpcy5pc0xvY2tlZChiKSAmJiBfKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEMgJiYgIUMuZG9uZSAmJiAocCA9IFQucmV0dXJuKSAmJiBwLmNhbGwoVCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF87XG4gIH1cbiAgZ2V0UmVtYWluaW5nQ291bnQoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLl90aWxlcyksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSBpLnZhbHVlLmlzVmFsaWQgJiYgbysrO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIGlzQ2xlYXJlZCgpIHtcbiAgICByZXR1cm4gMCA9PT0gdGhpcy5nZXRSZW1haW5pbmdDb3VudCgpO1xuICB9XG4gIGlzRGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZW1haW5pbmdDb3VudCgpID4gMCAmJiAwID09PSB0aGlzLmdldEF2YWlsYWJsZVBhaXJDb3VudCgpO1xuICB9XG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgRmxvd1RpbGVTaW11bGF0b3IodGhpcy5fdGlsZXMubWFwKGNsb25lRmxvd1RpbGUpKTtcbiAgfVxuICBnZXRUaWxlc0NvdmVyZWRCeShlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgaWYgKCFlLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICB2YXIgbiA9IFtdLFxuICAgICAgaSA9IG5ldyBTZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKGUub3duZXJHcmlkSWRzKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIGZvciAodmFyIHMgPSBsLnZhbHVlLCB1ID0gZS5sYXllciAtIDE7IHUgPj0gMDsgdS0tKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5fZ3JpZE1hcC5nZXQoYyh1LCBzKSk7XG4gICAgICAgIGlmIChwICYmIHAuaXNWYWxpZCAmJiAhaS5oYXMocC5pZCkpIHtcbiAgICAgICAgICBpLmFkZChwLmlkKTtcbiAgICAgICAgICBuLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gYS5yZXR1cm4pICYmIG8uY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBnZXRGcmVlZEJ5UmVtb3ZhbChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICBhID0gW10sXG4gICAgICBsID0gdGhpcy5nZXRUaWxlc0NvdmVyZWRCeShlKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGwpLCB1ID0gcy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgIGlmIChwLmlkICE9PSBlLmlkICYmIHRoaXMuaXNDb3ZlcmVkKHApKSB7XG4gICAgICAgICAgZm9yICh2YXIgZiA9IHRydWUsIGQgPSBwLmxheWVyICsgMTsgZCA8PSB0aGlzLl9tYXhMYXllcjsgZCsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBoID0gKG4gPSB2b2lkIDAsIF9fdmFsdWVzKHAub3duZXJHcmlkSWRzKSksIHkgPSBoLm5leHQoKTsgIXkuZG9uZTsgeSA9IGgubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG0gPSB5LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuX2dyaWRNYXAuZ2V0KGMoZCwgbSkpO1xuICAgICAgICAgICAgICAgIGlmICh2ICYmIHYuaXNWYWxpZCAmJiB2LmlkICE9PSBlLmlkKSB7XG4gICAgICAgICAgICAgICAgICBmID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB5ICYmICF5LmRvbmUgJiYgKGkgPSBoLnJldHVybikgJiYgaS5jYWxsKGgpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWYpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmICYmIGEucHVzaChwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG8gPSBzLnJldHVybikgJiYgby5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIHBlZWxMYXllcnMoKSB7XG4gICAgZm9yICh2YXIgdCwgbywgbiwgaSwgYSwgbCwgYyA9IHRoaXMuX3RpbGVzLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gY2xvbmVGbG93VGlsZShlKTtcbiAgICAgIH0pLCB1ID0gbmV3IEZsb3dUaWxlU2ltdWxhdG9yKGMpLCBwID0gbmV3IE1hcCgpLCBmID0gMDsgdS5nZXRSZW1haW5pbmdDb3VudCgpID4gMDspIHtcbiAgICAgIHZhciBkID0gdS5nZXRGcmVlVGlsZXMoKTtcbiAgICAgIGlmICgwID09PSBkLmxlbmd0aCkge1xuICAgICAgICB2YXIgaCA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHkgPSAodCA9IHZvaWQgMCwgX192YWx1ZXMoYykpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkgaWYgKChiID0gbS52YWx1ZSkuaXNWYWxpZCkge1xuICAgICAgICAgICAgaC5wdXNoKGIuaWQpO1xuICAgICAgICAgICAgYi5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbSAmJiAhbS5kb25lICYmIChvID0geS5yZXR1cm4pICYmIG8uY2FsbCh5KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAuc2V0KGYsIGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHAuc2V0KGYsIGQubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgfSkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdiA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyhkKSksIGcgPSB2Lm5leHQoKTsgIWcuZG9uZTsgZyA9IHYubmV4dCgpKSAoYiA9IGcudmFsdWUpLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBnICYmICFnLmRvbmUgJiYgKGkgPSB2LnJldHVybikgJiYgaS5jYWxsKHYpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1Ll9yZWJ1aWxkR3JpZE1hcCgpO1xuICAgICAgZisrO1xuICAgIH1cbiAgICB2YXIgXyA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgVCA9IF9fdmFsdWVzKHRoaXMuX3RpbGVzKSwgQyA9IFQubmV4dCgpOyAhQy5kb25lOyBDID0gVC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGIgPSBDLnZhbHVlO1xuICAgICAgICBfLnNldChiLmlkLCBiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgQyAmJiAhQy5kb25lICYmIChsID0gVC5yZXR1cm4pICYmIGwuY2FsbChUKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgRSA9IG5ldyBNYXAoKTtcbiAgICBwLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBvLFxuICAgICAgICBuLFxuICAgICAgICBpID0gZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gXy5nZXQoZSk7XG4gICAgICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhpKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIGwudmFsdWUuZGVwdGggPSB0O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobiA9IGEucmV0dXJuKSAmJiBuLmNhbGwoYSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEUuc2V0KHQsIGkpO1xuICAgIH0pO1xuICAgIHJldHVybiBFO1xuICB9XG59Il19