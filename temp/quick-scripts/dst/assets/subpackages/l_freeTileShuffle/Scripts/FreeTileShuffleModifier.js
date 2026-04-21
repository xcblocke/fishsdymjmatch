
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_freeTileShuffle/Scripts/FreeTileShuffleModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZyZWVUaWxlU2h1ZmZsZS9TY3JpcHRzL0ZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQWlFO0FBQ2pFLGlGQUFnRjtBQUNoRix3RkFBMkY7QUFDM0Y7SUFBNkMsMkNBQWM7SUFJekQsaUNBQVksQ0FBQztRQUFiLFlBQ0Usa0JBQU0sQ0FBQyxDQUFDLFNBR1Q7UUFQRCxnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQiwrQkFBeUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3BCLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDM0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDOztJQUNwRCxDQUFDO0lBQ0QsNkRBQTJCLEdBQTNCO1FBQ0UsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQztJQUNELHdEQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsT0FBTztnQkFDekIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLEVBQUU7YUFDZCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUNqQixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFD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LCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBMYXlvdXRTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvcHJvY2Vzcy9sYXlvdXQvTGF5b3V0U2VsZWN0b3InO1xuaW1wb3J0IHsgUmVzSWQsIE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuZXhwb3J0IGNsYXNzIEZyZWVUaWxlU2h1ZmZsZU1vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBfbWFwTGF5ZXJzID0gW107XG4gIF9zaHVmZmxlT3JpZ2luYWxQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gIF90aWxlTWFwT2JqZWN0ID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICAgIHRoaXMuX3RpbGVNYXBPYmplY3QgPSB0LmdldFRpbGVNYXBPYmplY3QoKTtcbiAgICB0aGlzLl9tYXBMYXllcnMgPSB0aGlzLl90aWxlTWFwT2JqZWN0Lm1hcExheWVycygpO1xuICB9XG4gIGdldFNodWZmbGVPcmlnaW5hbFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2h1ZmZsZU9yaWdpbmFsUG9zaXRpb25zO1xuICB9XG4gIGV4ZWN1dGVGcmVlVGlsZVNodWZmbGUoKSB7XG4gICAgRGF0ZS5ub3coKTtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICByLFxuICAgICAgaSxcbiAgICAgIG8gPSB0aGlzLl90aWxlTWFwT2JqZWN0LmFsaXZlVGlsZXMoKTtcbiAgICBpZiAoMCA9PT0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICBzZXF1ZW5jZTogW10sXG4gICAgICBmcmVlVGlsZXM6IFtdXG4gICAgfTtcbiAgICB2YXIgbiA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgcyA9IG4ubWFwTGF5ZXJzKCksXG4gICAgICBjID0gbmV3IFNldChvKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZiA9IF9fdmFsdWVzKHMpLCB1ID0gZi5uZXh0KCk7ICF1LmRvbmU7IHUgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IHUudmFsdWUsXG4gICAgICAgICAgcCA9IFsuLi5oLmFsbENhcmRzXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBkID0gKHIgPSB2b2lkIDAsIF9fdmFsdWVzKHApKSwgeSA9IGQubmV4dCgpOyAheS5kb25lOyB5ID0gZC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciB2ID0geS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghYy5oYXModikpIHtcbiAgICAgICAgICAgICAgaC5yZW1vdmVDYXJkKHYpO1xuICAgICAgICAgICAgICBuLnRpbGVPYmplY3RNYXAoKS5kZWxldGUodi5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgciA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgeSAmJiAheS5kb25lICYmIChpID0gZC5yZXR1cm4pICYmIGkuY2FsbChkKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAodCA9IGYucmV0dXJuKSAmJiB0LmNhbGwoZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zYXZlT3JpZ2luYWxQb3NpdGlvbnMobyk7XG4gICAgdmFyIGcgPSB0aGlzLmdlbmVyYXRlUGFpcmluZ1dpdGhGcmVlVGlsZXMobyk7XG4gICAgaWYgKGcuZnJlZVRpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucGxhY2VGcmVlVGlsZXNUb05ld1JvdyhnLmZyZWVUaWxlcyk7XG4gICAgICB0aGlzLmhhbmRsZUZsb2F0aW5nVGlsZXMoKTtcbiAgICB9XG4gICAgdGhpcy5fdGlsZU1hcE9iamVjdC51cGRhdGVJbml0R2FtZUxheWVyKCk7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUxheW91dFNjYWxlKCk7XG4gICAgRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gZztcbiAgfVxuICBleGVjdXRlWW9nYVRpbGVTaHVmZmxlKCkge1xuICAgIERhdGUubm93KCk7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgcixcbiAgICAgIGksXG4gICAgICBvID0gdGhpcy5fdGlsZU1hcE9iamVjdC5hbGl2ZVRpbGVzKCk7XG4gICAgaWYgKDAgPT09IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgc2VxdWVuY2U6IFtdLFxuICAgICAgZnJlZVRpbGVzOiBbXVxuICAgIH07XG4gICAgdmFyIG4gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHMgPSBuLm1hcExheWVycygpLFxuICAgICAgYyA9IG5ldyBTZXQobyk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhzKSwgaCA9IHUubmV4dCgpOyAhaC5kb25lOyBoID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSBoLnZhbHVlLFxuICAgICAgICAgIGQgPSBbLi4ucC5hbGxDYXJkc107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeSA9IChyID0gdm9pZCAwLCBfX3ZhbHVlcyhkKSksIHYgPSB5Lm5leHQoKTsgIXYuZG9uZTsgdiA9IHkubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgZyA9IHYudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWMuaGFzKGcpKSB7XG4gICAgICAgICAgICAgIHAucmVtb3ZlQ2FyZChnKTtcbiAgICAgICAgICAgICAgbi50aWxlT2JqZWN0TWFwKCkuZGVsZXRlKGcuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHYgJiYgIXYuZG9uZSAmJiAoaSA9IHkucmV0dXJuKSAmJiBpLmNhbGwoeSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBoICYmICFoLmRvbmUgJiYgKHQgPSB1LnJldHVybikgJiYgdC5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIG8uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5yZXNJZCA9PT0gUmVzSWQuZW1Zb2dhQ2FyZElkO1xuICAgIH0pLmxlbmd0aDtcbiAgICB0aGlzLnNhdmVPcmlnaW5hbFBvc2l0aW9ucyhvKTtcbiAgICB2YXIgVCA9IHRoaXMuZ2VuZXJhdGVQYWlyaW5nV2l0aEZyZWVUaWxlcyhvKTtcbiAgICBEYXRlLm5vdygpO1xuICAgIHJldHVybiBUO1xuICB9XG4gIGhhc1lvZ2FUaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZU1hcE9iamVjdC5hbGl2ZVRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5yZXNJZCA9PT0gUmVzSWQuZW1Zb2dhQ2FyZElkO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gIH1cbiAgZ2V0WW9nYVRpbGVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZU1hcE9iamVjdC5hbGl2ZVRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5yZXNJZCA9PT0gUmVzSWQuZW1Zb2dhQ2FyZElkO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuICBnZW5lcmF0ZVBhaXJpbmdXaXRoRnJlZVRpbGVzKGUpIHtcbiAgICBmb3IgKHZhciB0LCByID0gW10sIGkgPSBbXSwgbyA9IG5ldyBTZXQoZSksIGEgPSAwLCBuID0gMDsgby5zaXplID49IDI7KSB7XG4gICAgICBhKys7XG4gICAgICB2YXIgbCA9IHRoaXMuZ2V0U2VsZWN0YWJsZVRpbGVzKG8pO1xuICAgICAgaWYgKGwubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLmZpbmRTYWZlUGFpcihsLCBvKTtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICByLnB1c2gocyk7XG4gICAgICAgICAgby5kZWxldGUoc1swXSk7XG4gICAgICAgICAgby5kZWxldGUoc1sxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5leHRyYWN0RnJlZVRpbGVzKGwsIG8sIGksIG4pO1xuICAgICAgICAgIG4gPSBpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKDEgIT09IGwubGVuZ3RoKSBicmVhaztcbiAgICAgICAgdGhpcy5leHRyYWN0RnJlZVRpbGVzKGwsIG8sIGksIG4pO1xuICAgICAgICBuID0gaS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoYSA+IGUubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgMSA9PT0gby5zaXplICYmICh0ID0gQXJyYXkuZnJvbShvKVswXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlcXVlbmNlOiByLFxuICAgICAgZnJlZVRpbGVzOiBpLFxuICAgICAgcmVtYWluaW5nVGlsZTogdFxuICAgIH07XG4gIH1cbiAgZXh0cmFjdEZyZWVUaWxlcyhlLCB0LCByKSB7XG4gICAgZm9yICg7Oykge1xuICAgICAgdmFyIGkgPSB0aGlzLmdldFNlbGVjdGFibGVUaWxlcyh0KTtcbiAgICAgIGlmICgwID09PSBpLmxlbmd0aCkgYnJlYWs7XG4gICAgICBpZiAoaS5sZW5ndGggPiAxICYmIHRoaXMuZmluZFNhZmVQYWlyKGksIHQpKSBicmVhaztcbiAgICAgIHZhciBvID0gdGhpcy5zZWxlY3RUaWxlVG9FeHRyYWN0KGksIHQpO1xuICAgICAgci5wdXNoKG8pO1xuICAgICAgdC5kZWxldGUobyk7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0U2VsZWN0YWJsZVRpbGVzKHQpO1xuICAgICAgaWYgKGEubGVuZ3RoID4gMSAmJiB0aGlzLmZpbmRTYWZlUGFpcihhLCB0KSkgYnJlYWs7XG4gICAgICBpZiAodC5zaXplIDwgMikgYnJlYWs7XG4gICAgfVxuICB9XG4gIHNlbGVjdFRpbGVUb0V4dHJhY3QoZSwgdCkge1xuICAgIHZhciByLCBpO1xuICAgIGlmICgxID09PSBlLmxlbmd0aCkgcmV0dXJuIGVbMF07XG4gICAgdmFyIG8gPSBJbmZpbml0eSxcbiAgICAgIG4gPSBlWzBdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoZSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gcy52YWx1ZSxcbiAgICAgICAgICBmID0gdGhpcy5jb3VudEZyZWVkVGlsZXMoYywgdCk7XG4gICAgICAgIGlmIChmIDwgbykge1xuICAgICAgICAgIG8gPSBmO1xuICAgICAgICAgIG4gPSBjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAoaSA9IGwucmV0dXJuKSAmJiBpLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgZmluZFNhZmVQYWlyKGUsIHQpIHtcbiAgICB2YXIgciA9IFsuLi5lXTtcbiAgICB0aGlzLnNodWZmbGVBcnJheShyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIGZvciAodmFyIG8gPSBpICsgMTsgbyA8IHIubGVuZ3RoOyBvKyspIHtcbiAgICAgIHZhciBhID0gcltpXSxcbiAgICAgICAgbiA9IHJbb107XG4gICAgICBpZiAodGhpcy5pc1NhZmVQYWlyKGEsIG4sIHQpKSByZXR1cm4gW2EsIG5dO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpc1NhZmVQYWlyKGUsIHQsIHIpIHtcbiAgICBpZiAoci5zaXplIC0gMiA8PSAxKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0U2VsZWN0YWJsZVRpbGVzKHIpLFxuICAgICAgbyA9IGkubGVuZ3RoLFxuICAgICAgYSA9IDA7XG4gICAgaS5pbmNsdWRlcyhlKSAmJiBhKys7XG4gICAgaS5pbmNsdWRlcyh0KSAmJiBhKys7XG4gICAgcmV0dXJuIDEgIT09IG8gLSBhICsgdGhpcy5jb3VudEZyZWVkVGlsZXNGb3JQYWlyKGUsIHQsIHIpO1xuICB9XG4gIGNvdW50RnJlZWRUaWxlcyhlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgbyA9IHRoaXMudGlsZVRvQ29vcmQoZSksXG4gICAgICBuID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKHQpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgIGMgIT09IGUgJiYgKHRoaXMuaXNUaWxlU2VsZWN0YWJsZShjLCB0KSB8fCB0aGlzLndvdWxkQmVjb21lU2VsZWN0YWJsZShjLCBvLCBcIlwiLCB0KSAmJiBuKyspO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKGkgPSBsLnJldHVybikgJiYgaS5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIGNvdW50RnJlZWRUaWxlc0ZvclBhaXIoZSwgdCwgcikge1xuICAgIHZhciBpLFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgbCA9IHRoaXMudGlsZVRvQ29vcmQodCksXG4gICAgICBzID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHIpLCBmID0gYy5uZXh0KCk7ICFmLmRvbmU7IGYgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGYudmFsdWU7XG4gICAgICAgIHUgIT09IGUgJiYgdSAhPT0gdCAmJiAodGhpcy5pc1RpbGVTZWxlY3RhYmxlKHUsIHIpIHx8IHRoaXMud291bGRCZWNvbWVTZWxlY3RhYmxlKHUsIG4sIGwsIHIpICYmIHMrKyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgZ2V0U2VsZWN0YWJsZVRpbGVzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIsXG4gICAgICBpID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyhlKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSBuLnZhbHVlO1xuICAgICAgICB0aGlzLmlzVGlsZVNlbGVjdGFibGUobCwgZSkgJiYgaS5wdXNoKGwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKHIgPSBvLnJldHVybikgJiYgci5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIGlzVGlsZVNlbGVjdGFibGUoZSwgdCkge1xuICAgIGlmICh0aGlzLmhhc0NvdmVyKGUsIHQpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHIgPSB0aGlzLmhhc0xlZnROZWlnaGJvcihlLCB0KSxcbiAgICAgIGkgPSB0aGlzLmhhc1JpZ2h0TmVpZ2hib3IoZSwgdCk7XG4gICAgcmV0dXJuICEociAmJiBpKTtcbiAgfVxuICB3b3VsZEJlY29tZVNlbGVjdGFibGUoZSwgdCwgciwgaSkge1xuICAgIGlmICh0aGlzLmhhc0NvdmVyRXhjbHVkaW5nKGUsIGksIHQsIHIpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLmhhc0xlZnROZWlnaGJvckV4Y2x1ZGluZyhlLCBpLCB0LCByKSxcbiAgICAgIGEgPSB0aGlzLmhhc1JpZ2h0TmVpZ2hib3JFeGNsdWRpbmcoZSwgaSwgdCwgcik7XG4gICAgcmV0dXJuICEobyAmJiBhKTtcbiAgfVxuICBoYXNDb3ZlcihlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgbyA9IHRoaXMuZ2V0QWRqYWNlbnRVcHBlckNhcmRzKGUpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMobyksIGwgPSBuLm5leHQoKTsgIWwuZG9uZTsgbCA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHQuaGFzKHMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChpID0gbi5yZXR1cm4pICYmIGkuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFzQ292ZXJFeGNsdWRpbmcoZSwgdCwgciwgaSkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIGwgPSB0aGlzLmdldEFkamFjZW50VXBwZXJDYXJkcyhlKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGwpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWUsXG4gICAgICAgICAgdSA9IHRoaXMudGlsZVRvQ29vcmQoZik7XG4gICAgICAgIGlmICh1ICE9PSByICYmIHUgIT09IGkgJiYgdC5oYXMoZikpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoYXNMZWZ0TmVpZ2hib3IoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgaSxcbiAgICAgIG8gPSB0aGlzLl90aWxlTWFwT2JqZWN0LmdldEFkamFjZW50TGVmdENhcmRzKGUpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMobyksIGwgPSBuLm5leHQoKTsgIWwuZG9uZTsgbCA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHQuaGFzKHMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChpID0gbi5yZXR1cm4pICYmIGkuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFzUmlnaHROZWlnaGJvcihlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgbyA9IHRoaXMuX3RpbGVNYXBPYmplY3QuZ2V0QWRqYWNlbnRSaWdodENhcmRzKGUpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMobyksIGwgPSBuLm5leHQoKTsgIWwuZG9uZTsgbCA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHQuaGFzKHMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChpID0gbi5yZXR1cm4pICYmIGkuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFzTGVmdE5laWdoYm9yRXhjbHVkaW5nKGUsIHQsIHIsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBsID0gdGhpcy5fdGlsZU1hcE9iamVjdC5nZXRBZGphY2VudExlZnRDYXJkcyhlKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGwpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWUsXG4gICAgICAgICAgdSA9IHRoaXMudGlsZVRvQ29vcmQoZik7XG4gICAgICAgIGlmICh1ICE9PSByICYmIHUgIT09IGkgJiYgdC5oYXMoZikpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoYXNSaWdodE5laWdoYm9yRXhjbHVkaW5nKGUsIHQsIHIsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBsID0gdGhpcy5fdGlsZU1hcE9iamVjdC5nZXRBZGphY2VudFJpZ2h0Q2FyZHMoZSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhsKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYgPSBjLnZhbHVlLFxuICAgICAgICAgIHUgPSB0aGlzLnRpbGVUb0Nvb3JkKGYpO1xuICAgICAgICBpZiAodSAhPT0gciAmJiB1ICE9PSBpICYmIHQuaGFzKGYpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gcy5yZXR1cm4pICYmIG4uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2V0QWRqYWNlbnRVcHBlckNhcmRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIsXG4gICAgICBpID0gW10sXG4gICAgICBvID0gZS5sYXllciArIDE7XG4gICAgaWYgKG8gPj0gdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aCkgcmV0dXJuIGk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhlLm93bmVyR3JpZElkcyksIGwgPSBuLm5leHQoKTsgIWwuZG9uZTsgbCA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3RpbGVNYXBPYmplY3QuaXNIYXNDYXJkKG8sIHMpKSB7XG4gICAgICAgICAgdmFyIGMgPSB0aGlzLl9tYXBMYXllcnNbb10uZ2V0R3JpZENhcmQocyk7XG4gICAgICAgICAgYyAmJiBjICE9PSBlICYmICFpLmluY2x1ZGVzKGMpICYmIGkucHVzaChjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKHIgPSBuLnJldHVybikgJiYgci5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIHBsYWNlRnJlZVRpbGVzVG9OZXdSb3coZSkge1xuICAgIHZhciB0LCByLCBpLCBvO1xuICAgIGlmICgwICE9PSBlLmxlbmd0aCkge1xuICAgICAgdmFyIG4gPSAwLFxuICAgICAgICBsID0gSW5maW5pdHksXG4gICAgICAgIHMgPSBuZXcgU2V0KGUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHRoaXMuX21hcExheWVycyksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGggPSB1LnZhbHVlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBwID0gKGkgPSB2b2lkIDAsIF9fdmFsdWVzKGguYWxsQ2FyZHMpKSwgZCA9IHAubmV4dCgpOyAhZC5kb25lOyBkID0gcC5uZXh0KCkpIGlmICgoVCA9IGQudmFsdWUpLmlzVmFsaWQgJiYgIXMuaGFzKFQpKSB7XG4gICAgICAgICAgICAgIG4gPSBNYXRoLm1heChuLCBULmdyaWRQb3NZKTtcbiAgICAgICAgICAgICAgbCA9IE1hdGgubWluKGwsIFQuZ3JpZFBvc1gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKG8gPSBwLnJldHVybikgJiYgby5jYWxsKHApO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdSAmJiAhdS5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKEluZmluaXR5ID09PSBsKSB7XG4gICAgICAgIGwgPSAwO1xuICAgICAgICBuID0gMDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHkgPSBNYXRoLm1heCgwLCBsKSwgdiA9IG4gKyAyLCBnID0gMDsgZyA8IGUubGVuZ3RoOyBnKyspIHtcbiAgICAgICAgdmFyIFQgPSBlW2ddLFxuICAgICAgICAgIG0gPSB5ICsgZyAlIDcgKiAyLFxuICAgICAgICAgIF8gPSB2ICsgMiAqIE1hdGguZmxvb3IoZyAvIDcpO1xuICAgICAgICB0aGlzLl90aWxlTWFwT2JqZWN0Lm1vdmVUaWxlVG9Qb3NpdGlvbihULCBtLCBfLCAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHQuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5DbGFzc2ljICYmIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmFwcGx5Q2VudGVyT2Zmc2V0VG9BbGxUaWxlcygpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVGbG9hdGluZ1RpbGVzKCkge1xuICAgIGZvciAodmFyIGUsIHQsIHIgPSB0aGlzLl9tYXBMYXllcnMubGVuZ3RoIC0gMTsgciA+IDA7IHItLSkge1xuICAgICAgdmFyIGkgPSB0aGlzLl9tYXBMYXllcnNbcl0sXG4gICAgICAgIG8gPSBbLi4uaS5hbGxDYXJkc107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBuID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKG8pKSwgcyA9IG4ubmV4dCgpOyAhcy5kb25lOyBzID0gbi5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgICAgaWYgKGMuaXNWYWxpZCAmJiB0aGlzLmlzQ29tcGxldGVseVVuc3VwcG9ydGVkKGMpKSB7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMuZmluZExvd2VzdFN1cHBvcnRMYXllcihjKTtcbiAgICAgICAgICAgIHUgPCBjLmxheWVyICYmIHRoaXMuX3RpbGVNYXBPYmplY3QubW92ZVRpbGVUb1Bvc2l0aW9uKGMsIGMuZ3JpZFBvc1gsIGMuZ3JpZFBvc1ksIHUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHMgJiYgIXMuZG9uZSAmJiAodCA9IG4ucmV0dXJuKSAmJiB0LmNhbGwobik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRleHQuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5DbGFzc2ljICYmIHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmFwcGx5Q2VudGVyT2Zmc2V0VG9BbGxUaWxlcygpO1xuICAgIH1cbiAgfVxuICBpc0NvbXBsZXRlbHlVbnN1cHBvcnRlZChlKSB7XG4gICAgdmFyIHQsXG4gICAgICByLFxuICAgICAgaSA9IGUubGF5ZXIgLSAxO1xuICAgIGlmIChpIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBvID0gX192YWx1ZXMoZS5vd25lckdyaWRJZHMpLCBuID0gby5uZXh0KCk7ICFuLmRvbmU7IG4gPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IG4udmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl90aWxlTWFwT2JqZWN0LmlzSGFzQ2FyZChpLCBsKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKHIgPSBvLnJldHVybikgJiYgci5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZpbmRMb3dlc3RTdXBwb3J0TGF5ZXIoZSkge1xuICAgIGZvciAodmFyIHQsIHIsIGkgPSAwOyBpIDwgZS5sYXllcjsgaSsrKSB7XG4gICAgICB2YXIgbyA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBuID0gKHQgPSB2b2lkIDAsIF9fdmFsdWVzKGUub3duZXJHcmlkSWRzKSksIGwgPSBuLm5leHQoKTsgIWwuZG9uZTsgbCA9IG4ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICAgIGlmICh0aGlzLl90aWxlTWFwT2JqZWN0LmlzSGFzQ2FyZChpLCBzKSkge1xuICAgICAgICAgICAgbyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbCAmJiAhbC5kb25lICYmIChyID0gbi5yZXR1cm4pICYmIHIuY2FsbChuKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG8pIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gZS5sYXllcjtcbiAgfVxuICBzYXZlT3JpZ2luYWxQb3NpdGlvbnMoZSkge1xuICAgIHZhciB0LCByO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIG8gPSBpLm5leHQoKTsgIW8uZG9uZTsgbyA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBuID0gby52YWx1ZSxcbiAgICAgICAgICBsID0gbi5nZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLl9zaHVmZmxlT3JpZ2luYWxQb3NpdGlvbnMuc2V0KG4sIGwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBvICYmICFvLmRvbmUgJiYgKHIgPSBpLnJldHVybikgJiYgci5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRpbGVUb0Nvb3JkKGUpIHtcbiAgICByZXR1cm4gZS5sYXllciArIFwiX1wiICsgZS5ncmlkUG9zWSArIFwiX1wiICsgZS5ncmlkUG9zWDtcbiAgfVxuICBzaHVmZmxlQXJyYXkoZSkge1xuICAgIGZvciAodmFyIHQsIHIgPSBlLmxlbmd0aCAtIDE7IHIgPiAwOyByLS0pIHtcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHIgKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtlW2ldLCBlW3JdXSwgMiksIGVbcl0gPSB0WzBdLCBlW2ldID0gdFsxXTtcbiAgICB9XG4gIH1cbiAgcmVjYWxjdWxhdGVMYXlvdXRTY2FsZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2NvbnRleHQuZ2V0Q29udGVudFNpemUoKSxcbiAgICAgIHQgPSBuZXcgTGF5b3V0U2VsZWN0b3IodGhpcy5fY29udGV4dCkuY2hvb3NlTGF5b3V0KHtcbiAgICAgICAgY29udGVudFNpemU6IG5ldyBjYy5TaXplKGUud2lkdGgsIGUuaGVpZ2h0KVxuICAgICAgfSk7XG4gICAgdGhpcy5fY29udGV4dC5nZXRMYXlvdXRTY2FsZSgpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2FtZVR5cGUgIT0gTWpHYW1lVHlwZS5DbGFzc2ljICYmIHRoaXMuX2NvbnRleHQuc2V0TGF5b3V0U2NhbGUodC5zY2FsZSk7XG4gICAgdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51cGRhdGVQb3NpdG9uT2Zmc2V0KCk7XG4gIH1cbn0iXX0=