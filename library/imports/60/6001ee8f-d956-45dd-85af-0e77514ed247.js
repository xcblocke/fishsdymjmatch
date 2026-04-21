"use strict";
cc._RF.push(module, '6001e6P2VZF3YWvDndRTtJH', 'ShuffleModifier');
// Scripts/process/shuffle/ShuffleModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var ShuffleModifier = /** @class */ (function (_super) {
    __extends(ShuffleModifier, _super);
    function ShuffleModifier(t) {
        var _this = _super.call(this, t) || this;
        _this._shuffledCardTiles = [];
        _this._mapLayers = [];
        _this._isYoga = false;
        return _this;
    }
    ShuffleModifier.prototype.shuffle = function () {
        var e, t;
        this._shuffledCardTiles = [];
        this._mapLayers = this._context.getTileMapObject().mapLayers();
        this._isYoga = false;
        for (var o = this._mapLayers.length - 1; o >= 0; o--)
            try {
                for (var n = (e = void 0, __values(this._mapLayers[o].allCards)), i = n.next(); !i.done; i = n.next()) {
                    var r = i.value;
                    if (r.isValid) {
                        this._shuffledCardTiles.push(r);
                        r.resId === GameTypeEnums_1.ResId.emYogaCardId && (this._isYoga = true);
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
                    i && !i.done && (t = n.return) && t.call(n);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        if (this._isYoga) {
            this.shuffleYoga();
        }
        else {
            this.shuffleUnity();
        }
    };
    ShuffleModifier.prototype.shuffleUnity = function () {
        var e, t, o = this, n = (Date.now(), []), i = __spreadArrays(this._shuffledCardTiles), r = 0, l = function l(e) {
            if (e === void 0) { e = 0; }
            var t, s;
            r = Math.max(r, e);
            if (0 === i.length)
                return true;
            var c = [];
            try {
                for (var u = __values(i), p = u.next(); !p.done; p = u.next()) {
                    var f = p.value;
                    0 === o._context.getTileMapObject().isCardLock(f) && c.push(f);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (s = u.return) && s.call(u);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            if (c.length < 2)
                return false;
            o.randomShuffleList(c);
            for (var d = 0; d < c.length; d++) {
                o.detachCard(c[d], i);
                n.push(c[d]);
                for (var h = d + 1; h < c.length; h++) {
                    o.detachCard(c[h], i);
                    n.push(c[h]);
                    if (l(e + 1))
                        return true;
                    o.attachCard(c[h], i);
                    n.pop();
                }
                o.attachCard(c[d], i);
                n.pop();
            }
            return false;
        }, c = l(0);
        Date.now();
        if (c) {
            try {
                for (var u = __values(n), p = u.next(); !p.done; p = u.next()) {
                    var f = p.value;
                    this.attachCard(f, i);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    p && !p.done && (t = u.return) && t.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            for (var d = [], h = __spreadArrays(this._shuffledCardTiles).sort(function (e, t) {
                return e.resId - t.resId;
            }), y = 0; y < h.length; y += 2)
                y + 1 < h.length && d.push([{
                        resId: h[y].resId,
                        type: h[y].type,
                        duoxiaoCount: h[y].getDuoxiaoCount()
                    }, {
                        resId: h[y + 1].resId,
                        type: h[y + 1].type,
                        duoxiaoCount: h[y + 1].getDuoxiaoCount()
                    }]);
            this.randomShuffleList(d);
            this.assignResIds(n, d);
            Date.now();
        }
        else
            this.verifySolution();
    };
    ShuffleModifier.prototype.assignResIds = function (e, t) {
        for (var o = 0; o < t.length && 2 * o + 1 < e.length; o++) {
            var n = __read(t[o], 2), i = n[0], r = n[1], a = e[2 * o], s = e[2 * o + 1];
            if (a.type !== TileTypeEnum_1.ETileType.RollCard) {
                var c = i.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : i.type;
                this._context.getTileMapObject().setTileType(a.id, c);
            }
            a.changeResId(i.resId);
            a.setDuoxiaoCount(i.duoxiaoCount || 0);
            if (s.type !== TileTypeEnum_1.ETileType.RollCard) {
                var u = r.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : r.type;
                this._context.getTileMapObject().setTileType(s.id, u);
            }
            s.changeResId(r.resId);
            s.setDuoxiaoCount(r.duoxiaoCount || 0);
        }
    };
    ShuffleModifier.prototype.shuffleYoga = function () {
        var e, t, o, n, i = [], r = [];
        try {
            for (var c = __values(this._shuffledCardTiles), f = c.next(); !f.done; f = c.next())
                (b = f.value).resId === GameTypeEnums_1.ResId.emYogaCardId && i.push(b);
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                f && !f.done && (t = c.return) && t.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        for (var d = this._shuffledCardTiles.filter(function (e) {
            return e.resId !== GameTypeEnums_1.ResId.emYogaCardId;
        }), h = __spreadArrays(d).sort(function (e, t) {
            return e.resId - t.resId;
        }), y = [], m = 0; m < h.length; m += 2)
            m + 1 < h.length && y.push([{
                    resId: h[m].resId,
                    type: h[m].type,
                    duoxiaoCount: h[m].getDuoxiaoCount()
                }, {
                    resId: h[m + 1].resId,
                    type: h[m + 1].type,
                    duoxiaoCount: h[m + 1].getDuoxiaoCount()
                }]);
        this.randomShuffleList(y);
        for (var v = [], g = 0; this._shuffledCardTiles.length !== r.length && g < 100;) {
            var _ = this.getCanFillSoloCollectPositions(i, r);
            if (_ && _.length > 0)
                try {
                    for (var T = (o = void 0, __values(_)), C = T.next(); !C.done; C = T.next()) {
                        var b = C.value;
                        r.push(b);
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        C && !C.done && (n = T.return) && n.call(T);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
            else {
                var E = this.getRandomPositionPair(i, r, false);
                if (E) {
                    if (g >= 100) {
                        this.verifySolution();
                        return;
                    }
                    var S = __read(E, 2), I = S[0], w = S[1];
                    v.push([{
                            pos: {
                                x: I.gridPosX,
                                y: I.gridPosY,
                                z: I.layer
                            },
                            cardType: I.type,
                            cardId: I.resId
                        }, {
                            pos: {
                                x: w.gridPosX,
                                y: w.gridPosY,
                                z: w.layer
                            },
                            cardType: w.type,
                            cardId: w.resId
                        }]);
                    r.push(I);
                    r.push(w);
                }
                else {
                    g++;
                    r.length = 0;
                    v.length = 0;
                }
            }
        }
        for (m = 0; m < y.length && m < v.length; m++) {
            var B = __read(y[m], 2), x = B[0], M = B[1], O = v[m][0], D = v[m][1];
            I = this.getTileAtPosition(O.pos.x, O.pos.y, O.pos.z), w = this.getTileAtPosition(D.pos.x, D.pos.y, D.pos.z);
            if (I && w) {
                var P = x.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : x.type, A = M.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : M.type;
                this._context.getTileMapObject().setTileType(I.id, P);
                this._context.getTileMapObject().setTileType(w.id, A);
                I.changeResId(x.resId);
                w.changeResId(M.resId);
                I.setDuoxiaoCount(x.duoxiaoCount || 0);
                w.setDuoxiaoCount(M.duoxiaoCount || 0);
            }
        }
        this.verifySolution();
    };
    ShuffleModifier.prototype.getCanFillSoloCollectPositions = function (e, t) {
        var o, n, i, r, l, s;
        try {
            if (0 === e.length)
                return null;
            var c = [], u = this.getLegalPositions(t, false);
            try {
                for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
                    var d = f.value;
                    if (u.includes(d)) {
                        var h = this._context.getTileMapObject().getAdjacentLeftCards(d), y = this._context.getTileMapObject().getAdjacentRightCards(d), m = false, v = false;
                        try {
                            for (var g = (i = void 0, __values(h)), _ = g.next(); !_.done; _ = g.next()) {
                                var T = _.value;
                                if (t.includes(T)) {
                                    m = true;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            i = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                _ && !_.done && (r = g.return) && r.call(g);
                            }
                            finally {
                                if (i)
                                    throw i.error;
                            }
                        }
                        if (!m)
                            try {
                                for (var C = (l = void 0, __values(y)), b = C.next(); !b.done; b = C.next()) {
                                    var E = b.value;
                                    if (t.includes(E)) {
                                        v = true;
                                        break;
                                    }
                                }
                            }
                            catch (e) {
                                l = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    b && !b.done && (s = C.return) && s.call(C);
                                }
                                finally {
                                    if (l)
                                        throw l.error;
                                }
                            }
                        (m || v || 0 === h.length && 0 === y.length) && c.push(d);
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
                    f && !f.done && (n = p.return) && n.call(p);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            return c.length > 0 ? c : null;
        }
        catch (e) {
            throw e;
        }
    };
    ShuffleModifier.prototype.getRandomPositionPair = function (e, t, o) {
        if (o === void 0) { o = false; }
        try {
            var n = this.getLegalPositions(t, o).filter(function (t) {
                return !e.includes(t);
            });
            if (n.length < 2)
                return null;
            this.randomShuffleList(n);
            return [n[0], n[1]];
        }
        catch (e) {
            throw e;
        }
    };
    ShuffleModifier.prototype.getLegalPositions = function (e, t) {
        if (t === void 0) { t = false; }
        var o, n;
        try {
            var i = [];
            try {
                for (var r = __values(this._shuffledCardTiles), l = r.next(); !l.done; l = r.next()) {
                    var s = l.value;
                    if (!e.includes(s)) {
                        var c = this.checkIfSpreadingPathLegal(s, 1, false, e, t), u = this.checkIfSpreadingPathLegal(s, 2, false, e, t), p = this.isPositionDownPositionsFilled(s, e);
                        if (t) {
                            (c || u) && p && i.push(s);
                        }
                        else {
                            c && u && p && i.push(s);
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
                    l && !l.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            return i;
        }
        catch (e) {
            throw e;
        }
    };
    ShuffleModifier.prototype.checkIfSpreadingPathLegal = function (e, t, o, n, i) {
        if (i === void 0) { i = false; }
        var r, l;
        try {
            var s = this._context.getTileMapObject(), c = 1 === t ? s.getAdjacentLeftCards(e) : s.getAdjacentRightCards(e);
            if (0 === c.length)
                return true;
            try {
                for (var u = __values(c), p = u.next(); !p.done; p = u.next()) {
                    var f = p.value;
                    if (o) {
                        if (n.includes(f))
                            return false;
                        if (!this.checkIfSpreadingPathLegal(f, t, true, n, i))
                            return false;
                    }
                    else {
                        if (i && !n.includes(f))
                            return false;
                        var d = !n.includes(f);
                        if (!this.checkIfSpreadingPathLegal(f, t, d, n, i))
                            return false;
                    }
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (l = u.return) && l.call(u);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            return true;
        }
        catch (e) {
            throw e;
        }
    };
    ShuffleModifier.prototype.isPositionDownPositionsFilled = function (e, t) {
        var o, n;
        try {
            var i = this.getAdjacentDownCards(e);
            try {
                for (var r = __values(i), l = r.next(); !l.done; l = r.next()) {
                    var s = l.value;
                    if (!t.includes(s))
                        return false;
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (n = r.return) && n.call(r);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            return true;
        }
        catch (e) {
            throw e;
        }
    };
    ShuffleModifier.prototype.getAdjacentDownCards = function (e) {
        var t, o, n = [], i = e.layer - 1;
        if (i < 0)
            return n;
        try {
            for (var r = __values(e.ownerGridIds), l = r.next(); !l.done; l = r.next()) {
                var s = l.value;
                if (this._context.getTileMapObject().isHasCard(i, s)) {
                    var c = this._mapLayers[i].getGridCard(s);
                    c && c !== e && n.push(c);
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
        return n;
    };
    ShuffleModifier.prototype.getTileAtPosition = function (e, t, o) {
        var n, i;
        try {
            for (var r = __values(this._shuffledCardTiles), l = r.next(); !l.done; l = r.next()) {
                var s = l.value;
                if (s.gridPosX === e && s.gridPosY === t && s.layer === o)
                    return s;
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = r.return) && i.call(r);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return null;
    };
    ShuffleModifier.prototype.randomShuffleList = function (e) {
        for (var t, o = e.length; o > 1;) {
            var n = Math.floor(Math.random() * o--);
            t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
        }
    };
    ShuffleModifier.prototype.verifySolution = function () {
        var e = this._context.getTileMapObject();
        e.updateCanMatchTiles();
        return e.getCanMatchCardPairNum() > 0;
    };
    ShuffleModifier.prototype.detachCard = function (e, t) {
        var o = t.indexOf(e);
        o > -1 && t.splice(o, 1);
        this._mapLayers[e.layer].refreshGridState_Remove(e);
    };
    ShuffleModifier.prototype.attachCard = function (e, t) {
        t.push(e);
        this._mapLayers[e.layer].refreshGridState_Add(e);
    };
    ShuffleModifier.prototype.clear = function () {
        this._shuffledCardTiles = [];
        this._mapLayers = [];
        this._isYoga = false;
    };
    __decorate([
        mj.traitEvent("ShuffleMod_assignResIds")
    ], ShuffleModifier.prototype, "assignResIds", null);
    __decorate([
        mj.traitEvent("ShuffleMod_verifySolu")
    ], ShuffleModifier.prototype, "verifySolution", null);
    return ShuffleModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ShuffleModifier = ShuffleModifier;

cc._RF.pop();