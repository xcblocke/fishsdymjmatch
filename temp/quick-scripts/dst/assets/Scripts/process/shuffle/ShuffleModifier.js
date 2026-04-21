
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/shuffle/ShuffleModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3Mvc2h1ZmZsZS9TaHVmZmxlTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsNkVBQW9FO0FBQ3BFLHNFQUFrRTtBQUNsRTtJQUFxQyxtQ0FBYztJQUlqRCx5QkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FDVDtRQUxELHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFPLEdBQUcsS0FBSyxDQUFDOztJQUdoQixDQUFDO0lBQ0QsaUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBRSxJQUFJO2dCQUN4RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDckcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEIsSUFBSSxDQUFDLENBQUMsT0FB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ZUMsQ0EvZW9DLCtCQUFjLEdBK2VsRDtBQS9lWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgUmVzSWQgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuZXhwb3J0IGNsYXNzIFNodWZmbGVNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgX3NodWZmbGVkQ2FyZFRpbGVzID0gW107XG4gIF9tYXBMYXllcnMgPSBbXTtcbiAgX2lzWW9nYSA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gIH1cbiAgc2h1ZmZsZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICB0aGlzLl9zaHVmZmxlZENhcmRUaWxlcyA9IFtdO1xuICAgIHRoaXMuX21hcExheWVycyA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLm1hcExheWVycygpO1xuICAgIHRoaXMuX2lzWW9nYSA9IGZhbHNlO1xuICAgIGZvciAodmFyIG8gPSB0aGlzLl9tYXBMYXllcnMubGVuZ3RoIC0gMTsgbyA+PSAwOyBvLS0pIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKHRoaXMuX21hcExheWVyc1tvXS5hbGxDYXJkcykpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgciA9IGkudmFsdWU7XG4gICAgICAgIGlmIChyLmlzVmFsaWQpIHtcbiAgICAgICAgICB0aGlzLl9zaHVmZmxlZENhcmRUaWxlcy5wdXNoKHIpO1xuICAgICAgICAgIHIucmVzSWQgPT09IFJlc0lkLmVtWW9nYUNhcmRJZCAmJiAodGhpcy5faXNZb2dhID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5faXNZb2dhKSB7XG4gICAgICB0aGlzLnNodWZmbGVZb2dhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2h1ZmZsZVVuaXR5KCk7XG4gICAgfVxuICB9XG4gIHNodWZmbGVVbml0eSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gdGhpcyxcbiAgICAgIG4gPSAoRGF0ZS5ub3coKSwgW10pLFxuICAgICAgaSA9IFsuLi50aGlzLl9zaHVmZmxlZENhcmRUaWxlc10sXG4gICAgICByID0gMCxcbiAgICAgIGwgPSBmdW5jdGlvbiBsKGUgPSAwKSB7XG4gICAgICAgIHZhciB0LCBzO1xuICAgICAgICByID0gTWF0aC5tYXgociwgZSk7XG4gICAgICAgIGlmICgwID09PSBpLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBjID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGkpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGYgPSBwLnZhbHVlO1xuICAgICAgICAgICAgMCA9PT0gby5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuaXNDYXJkTG9jayhmKSAmJiBjLnB1c2goZik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcCAmJiAhcC5kb25lICYmIChzID0gdS5yZXR1cm4pICYmIHMuY2FsbCh1KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgby5yYW5kb21TaHVmZmxlTGlzdChjKTtcbiAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBjLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgby5kZXRhY2hDYXJkKGNbZF0sIGkpO1xuICAgICAgICAgIG4ucHVzaChjW2RdKTtcbiAgICAgICAgICBmb3IgKHZhciBoID0gZCArIDE7IGggPCBjLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICBvLmRldGFjaENhcmQoY1toXSwgaSk7XG4gICAgICAgICAgICBuLnB1c2goY1toXSk7XG4gICAgICAgICAgICBpZiAobChlICsgMSkpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgby5hdHRhY2hDYXJkKGNbaF0sIGkpO1xuICAgICAgICAgICAgbi5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgby5hdHRhY2hDYXJkKGNbZF0sIGkpO1xuICAgICAgICAgIG4ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGMgPSBsKDApO1xuICAgIERhdGUubm93KCk7XG4gICAgaWYgKGMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhuKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZiA9IHAudmFsdWU7XG4gICAgICAgICAgdGhpcy5hdHRhY2hDYXJkKGYsIGkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgIGUgPSB7XG4gICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcCAmJiAhcC5kb25lICYmICh0ID0gdS5yZXR1cm4pICYmIHQuY2FsbCh1KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgZCA9IFtdLCBoID0gWy4uLnRoaXMuX3NodWZmbGVkQ2FyZFRpbGVzXS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgcmV0dXJuIGUucmVzSWQgLSB0LnJlc0lkO1xuICAgICAgICB9KSwgeSA9IDA7IHkgPCBoLmxlbmd0aDsgeSArPSAyKSB5ICsgMSA8IGgubGVuZ3RoICYmIGQucHVzaChbe1xuICAgICAgICByZXNJZDogaFt5XS5yZXNJZCxcbiAgICAgICAgdHlwZTogaFt5XS50eXBlLFxuICAgICAgICBkdW94aWFvQ291bnQ6IGhbeV0uZ2V0RHVveGlhb0NvdW50KClcbiAgICAgIH0sIHtcbiAgICAgICAgcmVzSWQ6IGhbeSArIDFdLnJlc0lkLFxuICAgICAgICB0eXBlOiBoW3kgKyAxXS50eXBlLFxuICAgICAgICBkdW94aWFvQ291bnQ6IGhbeSArIDFdLmdldER1b3hpYW9Db3VudCgpXG4gICAgICB9XSk7XG4gICAgICB0aGlzLnJhbmRvbVNodWZmbGVMaXN0KGQpO1xuICAgICAgdGhpcy5hc3NpZ25SZXNJZHMobiwgZCk7XG4gICAgICBEYXRlLm5vdygpO1xuICAgIH0gZWxzZSB0aGlzLnZlcmlmeVNvbHV0aW9uKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTaHVmZmxlTW9kX2Fzc2lnblJlc0lkc1wiKVxuICBhc3NpZ25SZXNJZHMoZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5sZW5ndGggJiYgMiAqIG8gKyAxIDwgZS5sZW5ndGg7IG8rKykge1xuICAgICAgdmFyIG4gPSBfX3JlYWQodFtvXSwgMiksXG4gICAgICAgIGkgPSBuWzBdLFxuICAgICAgICByID0gblsxXSxcbiAgICAgICAgYSA9IGVbMiAqIG9dLFxuICAgICAgICBzID0gZVsyICogbyArIDFdO1xuICAgICAgaWYgKGEudHlwZSAhPT0gRVRpbGVUeXBlLlJvbGxDYXJkKSB7XG4gICAgICAgIHZhciBjID0gaS50eXBlID09PSBFVGlsZVR5cGUuUm9sbENhcmQgPyBFVGlsZVR5cGUuTm9ybWFsIDogaS50eXBlO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZXRUaWxlVHlwZShhLmlkLCBjKTtcbiAgICAgIH1cbiAgICAgIGEuY2hhbmdlUmVzSWQoaS5yZXNJZCk7XG4gICAgICBhLnNldER1b3hpYW9Db3VudChpLmR1b3hpYW9Db3VudCB8fCAwKTtcbiAgICAgIGlmIChzLnR5cGUgIT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCkge1xuICAgICAgICB2YXIgdSA9IHIudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkID8gRVRpbGVUeXBlLk5vcm1hbCA6IHIudHlwZTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuc2V0VGlsZVR5cGUocy5pZCwgdSk7XG4gICAgICB9XG4gICAgICBzLmNoYW5nZVJlc0lkKHIucmVzSWQpO1xuICAgICAgcy5zZXREdW94aWFvQ291bnQoci5kdW94aWFvQ291bnQgfHwgMCk7XG4gICAgfVxuICB9XG4gIHNodWZmbGVZb2dhKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSA9IFtdLFxuICAgICAgciA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXModGhpcy5fc2h1ZmZsZWRDYXJkVGlsZXMpLCBmID0gYy5uZXh0KCk7ICFmLmRvbmU7IGYgPSBjLm5leHQoKSkgKGIgPSBmLnZhbHVlKS5yZXNJZCA9PT0gUmVzSWQuZW1Zb2dhQ2FyZElkICYmIGkucHVzaChiKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmICh0ID0gYy5yZXR1cm4pICYmIHQuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBkID0gdGhpcy5fc2h1ZmZsZWRDYXJkVGlsZXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnJlc0lkICE9PSBSZXNJZC5lbVlvZ2FDYXJkSWQ7XG4gICAgICB9KSwgaCA9IFsuLi5kXS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlLnJlc0lkIC0gdC5yZXNJZDtcbiAgICAgIH0pLCB5ID0gW10sIG0gPSAwOyBtIDwgaC5sZW5ndGg7IG0gKz0gMikgbSArIDEgPCBoLmxlbmd0aCAmJiB5LnB1c2goW3tcbiAgICAgIHJlc0lkOiBoW21dLnJlc0lkLFxuICAgICAgdHlwZTogaFttXS50eXBlLFxuICAgICAgZHVveGlhb0NvdW50OiBoW21dLmdldER1b3hpYW9Db3VudCgpXG4gICAgfSwge1xuICAgICAgcmVzSWQ6IGhbbSArIDFdLnJlc0lkLFxuICAgICAgdHlwZTogaFttICsgMV0udHlwZSxcbiAgICAgIGR1b3hpYW9Db3VudDogaFttICsgMV0uZ2V0RHVveGlhb0NvdW50KClcbiAgICB9XSk7XG4gICAgdGhpcy5yYW5kb21TaHVmZmxlTGlzdCh5KTtcbiAgICBmb3IgKHZhciB2ID0gW10sIGcgPSAwOyB0aGlzLl9zaHVmZmxlZENhcmRUaWxlcy5sZW5ndGggIT09IHIubGVuZ3RoICYmIGcgPCAxMDA7KSB7XG4gICAgICB2YXIgXyA9IHRoaXMuZ2V0Q2FuRmlsbFNvbG9Db2xsZWN0UG9zaXRpb25zKGksIHIpO1xuICAgICAgaWYgKF8gJiYgXy5sZW5ndGggPiAwKSB0cnkge1xuICAgICAgICBmb3IgKHZhciBUID0gKG8gPSB2b2lkIDAsIF9fdmFsdWVzKF8pKSwgQyA9IFQubmV4dCgpOyAhQy5kb25lOyBDID0gVC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgYiA9IEMudmFsdWU7XG4gICAgICAgICAgci5wdXNoKGIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQyAmJiAhQy5kb25lICYmIChuID0gVC5yZXR1cm4pICYmIG4uY2FsbChUKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIEUgPSB0aGlzLmdldFJhbmRvbVBvc2l0aW9uUGFpcihpLCByLCBmYWxzZSk7XG4gICAgICAgIGlmIChFKSB7XG4gICAgICAgICAgaWYgKGcgPj0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmeVNvbHV0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBTID0gX19yZWFkKEUsIDIpLFxuICAgICAgICAgICAgSSA9IFNbMF0sXG4gICAgICAgICAgICB3ID0gU1sxXTtcbiAgICAgICAgICB2LnB1c2goW3tcbiAgICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgICB4OiBJLmdyaWRQb3NYLFxuICAgICAgICAgICAgICB5OiBJLmdyaWRQb3NZLFxuICAgICAgICAgICAgICB6OiBJLmxheWVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FyZFR5cGU6IEkudHlwZSxcbiAgICAgICAgICAgIGNhcmRJZDogSS5yZXNJZFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgICB4OiB3LmdyaWRQb3NYLFxuICAgICAgICAgICAgICB5OiB3LmdyaWRQb3NZLFxuICAgICAgICAgICAgICB6OiB3LmxheWVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FyZFR5cGU6IHcudHlwZSxcbiAgICAgICAgICAgIGNhcmRJZDogdy5yZXNJZFxuICAgICAgICAgIH1dKTtcbiAgICAgICAgICByLnB1c2goSSk7XG4gICAgICAgICAgci5wdXNoKHcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGcrKztcbiAgICAgICAgICByLmxlbmd0aCA9IDA7XG4gICAgICAgICAgdi5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobSA9IDA7IG0gPCB5Lmxlbmd0aCAmJiBtIDwgdi5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIEIgPSBfX3JlYWQoeVttXSwgMiksXG4gICAgICAgIHggPSBCWzBdLFxuICAgICAgICBNID0gQlsxXSxcbiAgICAgICAgTyA9IHZbbV1bMF0sXG4gICAgICAgIEQgPSB2W21dWzFdO1xuICAgICAgSSA9IHRoaXMuZ2V0VGlsZUF0UG9zaXRpb24oTy5wb3MueCwgTy5wb3MueSwgTy5wb3MueiksIHcgPSB0aGlzLmdldFRpbGVBdFBvc2l0aW9uKEQucG9zLngsIEQucG9zLnksIEQucG9zLnopO1xuICAgICAgaWYgKEkgJiYgdykge1xuICAgICAgICB2YXIgUCA9IHgudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkID8gRVRpbGVUeXBlLk5vcm1hbCA6IHgudHlwZSxcbiAgICAgICAgICBBID0gTS50eXBlID09PSBFVGlsZVR5cGUuUm9sbENhcmQgPyBFVGlsZVR5cGUuTm9ybWFsIDogTS50eXBlO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZXRUaWxlVHlwZShJLmlkLCBQKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuc2V0VGlsZVR5cGUody5pZCwgQSk7XG4gICAgICAgIEkuY2hhbmdlUmVzSWQoeC5yZXNJZCk7XG4gICAgICAgIHcuY2hhbmdlUmVzSWQoTS5yZXNJZCk7XG4gICAgICAgIEkuc2V0RHVveGlhb0NvdW50KHguZHVveGlhb0NvdW50IHx8IDApO1xuICAgICAgICB3LnNldER1b3hpYW9Db3VudChNLmR1b3hpYW9Db3VudCB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52ZXJpZnlTb2x1dGlvbigpO1xuICB9XG4gIGdldENhbkZpbGxTb2xvQ29sbGVjdFBvc2l0aW9ucyhlLCB0KSB7XG4gICAgdmFyIG8sIG4sIGksIHIsIGwsIHM7XG4gICAgdHJ5IHtcbiAgICAgIGlmICgwID09PSBlLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgYyA9IFtdLFxuICAgICAgICB1ID0gdGhpcy5nZXRMZWdhbFBvc2l0aW9ucyh0LCBmYWxzZSk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMoZSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGQgPSBmLnZhbHVlO1xuICAgICAgICAgIGlmICh1LmluY2x1ZGVzKGQpKSB7XG4gICAgICAgICAgICB2YXIgaCA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldEFkamFjZW50TGVmdENhcmRzKGQpLFxuICAgICAgICAgICAgICB5ID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0QWRqYWNlbnRSaWdodENhcmRzKGQpLFxuICAgICAgICAgICAgICBtID0gZmFsc2UsXG4gICAgICAgICAgICAgIHYgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGcgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoaCkpLCBfID0gZy5uZXh0KCk7ICFfLmRvbmU7IF8gPSBnLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBUID0gXy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodC5pbmNsdWRlcyhUKSkge1xuICAgICAgICAgICAgICAgICAgbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgaSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfICYmICFfLmRvbmUgJiYgKHIgPSBnLnJldHVybikgJiYgci5jYWxsKGcpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW0pIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIEMgPSAobCA9IHZvaWQgMCwgX192YWx1ZXMoeSkpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBFID0gYi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodC5pbmNsdWRlcyhFKSkge1xuICAgICAgICAgICAgICAgICAgdiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbCA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBiICYmICFiLmRvbmUgJiYgKHMgPSBDLnJldHVybikgJiYgcy5jYWxsKEMpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAobSB8fCB2IHx8IDAgPT09IGgubGVuZ3RoICYmIDAgPT09IHkubGVuZ3RoKSAmJiBjLnB1c2goZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZiAmJiAhZi5kb25lICYmIChuID0gcC5yZXR1cm4pICYmIG4uY2FsbChwKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGMubGVuZ3RoID4gMCA/IGMgOiBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIGdldFJhbmRvbVBvc2l0aW9uUGFpcihlLCB0LCBvID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSB0aGlzLmdldExlZ2FsUG9zaXRpb25zKHQsIG8pLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gIWUuaW5jbHVkZXModCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChuLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgICAgdGhpcy5yYW5kb21TaHVmZmxlTGlzdChuKTtcbiAgICAgIHJldHVybiBbblswXSwgblsxXV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgZ2V0TGVnYWxQb3NpdGlvbnMoZSwgdCA9IGZhbHNlKSB7XG4gICAgdmFyIG8sIG47XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gW107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciByID0gX192YWx1ZXModGhpcy5fc2h1ZmZsZWRDYXJkVGlsZXMpLCBsID0gci5uZXh0KCk7ICFsLmRvbmU7IGwgPSByLm5leHQoKSkge1xuICAgICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgICBpZiAoIWUuaW5jbHVkZXMocykpIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5jaGVja0lmU3ByZWFkaW5nUGF0aExlZ2FsKHMsIDEsIGZhbHNlLCBlLCB0KSxcbiAgICAgICAgICAgICAgdSA9IHRoaXMuY2hlY2tJZlNwcmVhZGluZ1BhdGhMZWdhbChzLCAyLCBmYWxzZSwgZSwgdCksXG4gICAgICAgICAgICAgIHAgPSB0aGlzLmlzUG9zaXRpb25Eb3duUG9zaXRpb25zRmlsbGVkKHMsIGUpO1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgKGMgfHwgdSkgJiYgcCAmJiBpLnB1c2gocyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjICYmIHUgJiYgcCAmJiBpLnB1c2gocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbCAmJiAhbC5kb25lICYmIChuID0gci5yZXR1cm4pICYmIG4uY2FsbChyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tJZlNwcmVhZGluZ1BhdGhMZWdhbChlLCB0LCBvLCBuLCBpID0gZmFsc2UpIHtcbiAgICB2YXIgciwgbDtcbiAgICB0cnkge1xuICAgICAgdmFyIHMgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgICAgYyA9IDEgPT09IHQgPyBzLmdldEFkamFjZW50TGVmdENhcmRzKGUpIDogcy5nZXRBZGphY2VudFJpZ2h0Q2FyZHMoZSk7XG4gICAgICBpZiAoMCA9PT0gYy5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGMpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBmID0gcC52YWx1ZTtcbiAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgaWYgKG4uaW5jbHVkZXMoZikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lmU3ByZWFkaW5nUGF0aExlZ2FsKGYsIHQsIHRydWUsIG4sIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpICYmICFuLmluY2x1ZGVzKGYpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgZCA9ICFuLmluY2x1ZGVzKGYpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSWZTcHJlYWRpbmdQYXRoTGVnYWwoZiwgdCwgZCwgbiwgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKGwgPSB1LnJldHVybikgJiYgbC5jYWxsKHUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBpc1Bvc2l0aW9uRG93blBvc2l0aW9uc0ZpbGxlZChlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRBZGphY2VudERvd25DYXJkcyhlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhpKSwgbCA9IHIubmV4dCgpOyAhbC5kb25lOyBsID0gci5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgICAgaWYgKCF0LmluY2x1ZGVzKHMpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKG4gPSByLnJldHVybikgJiYgbi5jYWxsKHIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICBnZXRBZGphY2VudERvd25DYXJkcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IFtdLFxuICAgICAgaSA9IGUubGF5ZXIgLSAxO1xuICAgIGlmIChpIDwgMCkgcmV0dXJuIG47XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhlLm93bmVyR3JpZElkcyksIGwgPSByLm5leHQoKTsgIWwuZG9uZTsgbCA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmlzSGFzQ2FyZChpLCBzKSkge1xuICAgICAgICAgIHZhciBjID0gdGhpcy5fbWFwTGF5ZXJzW2ldLmdldEdyaWRDYXJkKHMpO1xuICAgICAgICAgIGMgJiYgYyAhPT0gZSAmJiBuLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gci5yZXR1cm4pICYmIG8uY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBnZXRUaWxlQXRQb3NpdGlvbihlLCB0LCBvKSB7XG4gICAgdmFyIG4sIGk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyh0aGlzLl9zaHVmZmxlZENhcmRUaWxlcyksIGwgPSByLm5leHQoKTsgIWwuZG9uZTsgbCA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHMuZ3JpZFBvc1ggPT09IGUgJiYgcy5ncmlkUG9zWSA9PT0gdCAmJiBzLmxheWVyID09PSBvKSByZXR1cm4gcztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChpID0gci5yZXR1cm4pICYmIGkuY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByYW5kb21TaHVmZmxlTGlzdChlKSB7XG4gICAgZm9yICh2YXIgdCwgbyA9IGUubGVuZ3RoOyBvID4gMTspIHtcbiAgICAgIHZhciBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogby0tKTtcbiAgICAgIHQgPSBfX3JlYWQoW2Vbbl0sIGVbb11dLCAyKSwgZVtvXSA9IHRbMF0sIGVbbl0gPSB0WzFdO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNodWZmbGVNb2RfdmVyaWZ5U29sdVwiKVxuICB2ZXJpZnlTb2x1dGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgIGUudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHJldHVybiBlLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSA+IDA7XG4gIH1cbiAgZGV0YWNoQ2FyZChlLCB0KSB7XG4gICAgdmFyIG8gPSB0LmluZGV4T2YoZSk7XG4gICAgbyA+IC0xICYmIHQuc3BsaWNlKG8sIDEpO1xuICAgIHRoaXMuX21hcExheWVyc1tlLmxheWVyXS5yZWZyZXNoR3JpZFN0YXRlX1JlbW92ZShlKTtcbiAgfVxuICBhdHRhY2hDYXJkKGUsIHQpIHtcbiAgICB0LnB1c2goZSk7XG4gICAgdGhpcy5fbWFwTGF5ZXJzW2UubGF5ZXJdLnJlZnJlc2hHcmlkU3RhdGVfQWRkKGUpO1xuICB9XG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX3NodWZmbGVkQ2FyZFRpbGVzID0gW107XG4gICAgdGhpcy5fbWFwTGF5ZXJzID0gW107XG4gICAgdGhpcy5faXNZb2dhID0gZmFsc2U7XG4gIH1cbn0iXX0=