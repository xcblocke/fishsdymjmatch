"use strict";
cc._RF.push(module, 'ee423aiILlPPrWp3uuwiOg0', 'FreeTileShuffleModifier');
// subpackages/l_freeTileShuffle/Scripts/FreeTileShuffleModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeTileShuffleModifier = void 0;
var BaseCoreObject_1 = require("../../../Scripts/BaseCoreObject");
var LayoutSelector_1 = require("../../../Scripts/process/layout/LayoutSelector");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FreeTileShuffleModifier = /** @class */ (function (_super) {
    __extends(FreeTileShuffleModifier, _super);
    function FreeTileShuffleModifier(t) {
        var _this = _super.call(this, t) || this;
        _this._mapLayers = [];
        _this._shuffleOriginalPositions = new Map();
        _this._tileMapObject = null;
        _this._tileMapObject = t.getTileMapObject();
        _this._mapLayers = _this._tileMapObject.mapLayers();
        return _this;
    }
    FreeTileShuffleModifier.prototype.getShuffleOriginalPositions = function () {
        return this._shuffleOriginalPositions;
    };
    FreeTileShuffleModifier.prototype.executeFreeTileShuffle = function () {
        Date.now();
        var e, t, r, i, o = this._tileMapObject.aliveTiles();
        if (0 === o.length)
            return {
                sequence: [],
                freeTiles: []
            };
        var n = this._context.getTileMapObject(), s = n.mapLayers(), c = new Set(o);
        try {
            for (var f = __values(s), u = f.next(); !u.done; u = f.next()) {
                var h = u.value, p = __spreadArrays(h.allCards);
                try {
                    for (var d = (r = void 0, __values(p)), y = d.next(); !y.done; y = d.next()) {
                        var v = y.value;
                        if (!c.has(v)) {
                            h.removeCard(v);
                            n.tileObjectMap().delete(v.id);
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
                        y && !y.done && (i = d.return) && i.call(d);
                    }
                    finally {
                        if (r)
                            throw r.error;
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
                u && !u.done && (t = f.return) && t.call(f);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.saveOriginalPositions(o);
        var g = this.generatePairingWithFreeTiles(o);
        if (g.freeTiles.length > 0) {
            this.placeFreeTilesToNewRow(g.freeTiles);
            this.handleFloatingTiles();
        }
        this._tileMapObject.updateInitGameLayer();
        this.recalculateLayoutScale();
        Date.now();
        return g;
    };
    FreeTileShuffleModifier.prototype.executeYogaTileShuffle = function () {
        Date.now();
        var e, t, r, i, o = this._tileMapObject.aliveTiles();
        if (0 === o.length)
            return {
                sequence: [],
                freeTiles: []
            };
        var n = this._context.getTileMapObject(), s = n.mapLayers(), c = new Set(o);
        try {
            for (var u = __values(s), h = u.next(); !h.done; h = u.next()) {
                var p = h.value, d = __spreadArrays(p.allCards);
                try {
                    for (var y = (r = void 0, __values(d)), v = y.next(); !v.done; v = y.next()) {
                        var g = v.value;
                        if (!c.has(g)) {
                            p.removeCard(g);
                            n.tileObjectMap().delete(g.id);
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
                        v && !v.done && (i = y.return) && i.call(y);
                    }
                    finally {
                        if (r)
                            throw r.error;
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
                h && !h.done && (t = u.return) && t.call(u);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        o.filter(function (e) {
            return e.resId === GameTypeEnums_1.ResId.emYogaCardId;
        }).length;
        this.saveOriginalPositions(o);
        var T = this.generatePairingWithFreeTiles(o);
        Date.now();
        return T;
    };
    FreeTileShuffleModifier.prototype.hasYogaTiles = function () {
        return this._tileMapObject.aliveTiles().filter(function (e) {
            return e.resId === GameTypeEnums_1.ResId.emYogaCardId;
        }).length > 0;
    };
    FreeTileShuffleModifier.prototype.getYogaTileCount = function () {
        return this._tileMapObject.aliveTiles().filter(function (e) {
            return e.resId === GameTypeEnums_1.ResId.emYogaCardId;
        }).length;
    };
    FreeTileShuffleModifier.prototype.generatePairingWithFreeTiles = function (e) {
        for (var t, r = [], i = [], o = new Set(e), a = 0, n = 0; o.size >= 2;) {
            a++;
            var l = this.getSelectableTiles(o);
            if (l.length >= 2) {
                var s = this.findSafePair(l, o);
                if (s) {
                    r.push(s);
                    o.delete(s[0]);
                    o.delete(s[1]);
                }
                else {
                    this.extractFreeTiles(l, o, i, n);
                    n = i.length;
                }
            }
            else {
                if (1 !== l.length)
                    break;
                this.extractFreeTiles(l, o, i, n);
                n = i.length;
            }
            if (a > e.length)
                break;
        }
        1 === o.size && (t = Array.from(o)[0]);
        return {
            sequence: r,
            freeTiles: i,
            remainingTile: t
        };
    };
    FreeTileShuffleModifier.prototype.extractFreeTiles = function (e, t, r) {
        for (;;) {
            var i = this.getSelectableTiles(t);
            if (0 === i.length)
                break;
            if (i.length > 1 && this.findSafePair(i, t))
                break;
            var o = this.selectTileToExtract(i, t);
            r.push(o);
            t.delete(o);
            var a = this.getSelectableTiles(t);
            if (a.length > 1 && this.findSafePair(a, t))
                break;
            if (t.size < 2)
                break;
        }
    };
    FreeTileShuffleModifier.prototype.selectTileToExtract = function (e, t) {
        var r, i;
        if (1 === e.length)
            return e[0];
        var o = Infinity, n = e[0];
        try {
            for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
                var c = s.value, f = this.countFreedTiles(c, t);
                if (f < o) {
                    o = f;
                    n = c;
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
                s && !s.done && (i = l.return) && i.call(l);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return n;
    };
    FreeTileShuffleModifier.prototype.findSafePair = function (e, t) {
        var r = __spreadArrays(e);
        this.shuffleArray(r);
        for (var i = 0; i < r.length; i++)
            for (var o = i + 1; o < r.length; o++) {
                var a = r[i], n = r[o];
                if (this.isSafePair(a, n, t))
                    return [a, n];
            }
        return null;
    };
    FreeTileShuffleModifier.prototype.isSafePair = function (e, t, r) {
        if (r.size - 2 <= 1)
            return true;
        var i = this.getSelectableTiles(r), o = i.length, a = 0;
        i.includes(e) && a++;
        i.includes(t) && a++;
        return 1 !== o - a + this.countFreedTilesForPair(e, t, r);
    };
    FreeTileShuffleModifier.prototype.countFreedTiles = function (e, t) {
        var r, i, o = this.tileToCoord(e), n = 0;
        try {
            for (var l = __values(t), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                c !== e && (this.isTileSelectable(c, t) || this.wouldBecomeSelectable(c, o, "", t) && n++);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (i = l.return) && i.call(l);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return n;
    };
    FreeTileShuffleModifier.prototype.countFreedTilesForPair = function (e, t, r) {
        var i, o, n = this.tileToCoord(e), l = this.tileToCoord(t), s = 0;
        try {
            for (var c = __values(r), f = c.next(); !f.done; f = c.next()) {
                var u = f.value;
                u !== e && u !== t && (this.isTileSelectable(u, r) || this.wouldBecomeSelectable(u, n, l, r) && s++);
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = c.return) && o.call(c);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return s;
    };
    FreeTileShuffleModifier.prototype.getSelectableTiles = function (e) {
        var t, r, i = [];
        try {
            for (var o = __values(e), n = o.next(); !n.done; n = o.next()) {
                var l = n.value;
                this.isTileSelectable(l, e) && i.push(l);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (r = o.return) && r.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    FreeTileShuffleModifier.prototype.isTileSelectable = function (e, t) {
        if (this.hasCover(e, t))
            return false;
        var r = this.hasLeftNeighbor(e, t), i = this.hasRightNeighbor(e, t);
        return !(r && i);
    };
    FreeTileShuffleModifier.prototype.wouldBecomeSelectable = function (e, t, r, i) {
        if (this.hasCoverExcluding(e, i, t, r))
            return false;
        var o = this.hasLeftNeighborExcluding(e, i, t, r), a = this.hasRightNeighborExcluding(e, i, t, r);
        return !(o && a);
    };
    FreeTileShuffleModifier.prototype.hasCover = function (e, t) {
        var r, i, o = this.getAdjacentUpperCards(e);
        try {
            for (var n = __values(o), l = n.next(); !l.done; l = n.next()) {
                var s = l.value;
                if (t.has(s))
                    return true;
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = n.return) && i.call(n);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    FreeTileShuffleModifier.prototype.hasCoverExcluding = function (e, t, r, i) {
        var o, n, l = this.getAdjacentUpperCards(e);
        try {
            for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
                var f = c.value, u = this.tileToCoord(f);
                if (u !== r && u !== i && t.has(f))
                    return true;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    FreeTileShuffleModifier.prototype.hasLeftNeighbor = function (e, t) {
        var r, i, o = this._tileMapObject.getAdjacentLeftCards(e);
        try {
            for (var n = __values(o), l = n.next(); !l.done; l = n.next()) {
                var s = l.value;
                if (t.has(s))
                    return true;
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = n.return) && i.call(n);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    FreeTileShuffleModifier.prototype.hasRightNeighbor = function (e, t) {
        var r, i, o = this._tileMapObject.getAdjacentRightCards(e);
        try {
            for (var n = __values(o), l = n.next(); !l.done; l = n.next()) {
                var s = l.value;
                if (t.has(s))
                    return true;
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = n.return) && i.call(n);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    FreeTileShuffleModifier.prototype.hasLeftNeighborExcluding = function (e, t, r, i) {
        var o, n, l = this._tileMapObject.getAdjacentLeftCards(e);
        try {
            for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
                var f = c.value, u = this.tileToCoord(f);
                if (u !== r && u !== i && t.has(f))
                    return true;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    FreeTileShuffleModifier.prototype.hasRightNeighborExcluding = function (e, t, r, i) {
        var o, n, l = this._tileMapObject.getAdjacentRightCards(e);
        try {
            for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
                var f = c.value, u = this.tileToCoord(f);
                if (u !== r && u !== i && t.has(f))
                    return true;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    FreeTileShuffleModifier.prototype.getAdjacentUpperCards = function (e) {
        var t, r, i = [], o = e.layer + 1;
        if (o >= this._mapLayers.length)
            return i;
        try {
            for (var n = __values(e.ownerGridIds), l = n.next(); !l.done; l = n.next()) {
                var s = l.value;
                if (this._tileMapObject.isHasCard(o, s)) {
                    var c = this._mapLayers[o].getGridCard(s);
                    c && c !== e && !i.includes(c) && i.push(c);
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
                l && !l.done && (r = n.return) && r.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    FreeTileShuffleModifier.prototype.placeFreeTilesToNewRow = function (e) {
        var t, r, i, o;
        if (0 !== e.length) {
            var n = 0, l = Infinity, s = new Set(e);
            try {
                for (var c = __values(this._mapLayers), u = c.next(); !u.done; u = c.next()) {
                    var h = u.value;
                    try {
                        for (var p = (i = void 0, __values(h.allCards)), d = p.next(); !d.done; d = p.next())
                            if ((T = d.value).isValid && !s.has(T)) {
                                n = Math.max(n, T.gridPosY);
                                l = Math.min(l, T.gridPosX);
                            }
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            d && !d.done && (o = p.return) && o.call(p);
                        }
                        finally {
                            if (i)
                                throw i.error;
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
                    u && !u.done && (r = c.return) && r.call(c);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            if (Infinity === l) {
                l = 0;
                n = 0;
            }
            for (var y = Math.max(0, l), v = n + 2, g = 0; g < e.length; g++) {
                var T = e[g], m = y + g % 7 * 2, _ = v + 2 * Math.floor(g / 7);
                this._tileMapObject.moveTileToPosition(T, m, _, 0);
            }
            this._context.gameType == GameTypeEnums_1.MjGameType.Classic && this._context.getTileMapObject().applyCenterOffsetToAllTiles();
        }
    };
    FreeTileShuffleModifier.prototype.handleFloatingTiles = function () {
        for (var e, t, r = this._mapLayers.length - 1; r > 0; r--) {
            var i = this._mapLayers[r], o = __spreadArrays(i.allCards);
            try {
                for (var n = (e = void 0, __values(o)), s = n.next(); !s.done; s = n.next()) {
                    var c = s.value;
                    if (c.isValid && this.isCompletelyUnsupported(c)) {
                        var u = this.findLowestSupportLayer(c);
                        u < c.layer && this._tileMapObject.moveTileToPosition(c, c.gridPosX, c.gridPosY, u);
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
                    s && !s.done && (t = n.return) && t.call(n);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            this._context.gameType == GameTypeEnums_1.MjGameType.Classic && this._context.getTileMapObject().applyCenterOffsetToAllTiles();
        }
    };
    FreeTileShuffleModifier.prototype.isCompletelyUnsupported = function (e) {
        var t, r, i = e.layer - 1;
        if (i < 0)
            return false;
        try {
            for (var o = __values(e.ownerGridIds), n = o.next(); !n.done; n = o.next()) {
                var l = n.value;
                if (this._tileMapObject.isHasCard(i, l))
                    return false;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (r = o.return) && r.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return true;
    };
    FreeTileShuffleModifier.prototype.findLowestSupportLayer = function (e) {
        for (var t, r, i = 0; i < e.layer; i++) {
            var o = true;
            try {
                for (var n = (t = void 0, __values(e.ownerGridIds)), l = n.next(); !l.done; l = n.next()) {
                    var s = l.value;
                    if (this._tileMapObject.isHasCard(i, s)) {
                        o = false;
                        break;
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
                    l && !l.done && (r = n.return) && r.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            if (o)
                return i;
        }
        return e.layer;
    };
    FreeTileShuffleModifier.prototype.saveOriginalPositions = function (e) {
        var t, r;
        try {
            for (var i = __values(e), o = i.next(); !o.done; o = i.next()) {
                var n = o.value, l = n.getPosition();
                this._shuffleOriginalPositions.set(n, l);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (r = i.return) && r.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    FreeTileShuffleModifier.prototype.tileToCoord = function (e) {
        return e.layer + "_" + e.gridPosY + "_" + e.gridPosX;
    };
    FreeTileShuffleModifier.prototype.shuffleArray = function (e) {
        for (var t, r = e.length - 1; r > 0; r--) {
            var i = Math.floor(Math.random() * (r + 1));
            t = __read([e[i], e[r]], 2), e[r] = t[0], e[i] = t[1];
        }
    };
    FreeTileShuffleModifier.prototype.recalculateLayoutScale = function () {
        var e = this._context.getContentSize(), t = new LayoutSelector_1.LayoutSelector(this._context).chooseLayout({
            contentSize: new cc.Size(e.width, e.height)
        });
        this._context.getLayoutScale();
        this._context.gameType != GameTypeEnums_1.MjGameType.Classic && this._context.setLayoutScale(t.scale);
        this.context.getTileMapObject().updatePositonOffset();
    };
    return FreeTileShuffleModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.FreeTileShuffleModifier = FreeTileShuffleModifier;

cc._RF.pop();