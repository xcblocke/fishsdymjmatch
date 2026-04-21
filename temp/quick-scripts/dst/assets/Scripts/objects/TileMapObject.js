
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/objects/TileMapObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cebe3lqY2NBSLVQTPNmOxzU', 'TileMapObject');
// Scripts/objects/TileMapObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileMapObject = void 0;
var LevelDataParser_1 = require("../core/simulator/config/LevelDataParser");
var CollectInterfact_1 = require("../constant/CollectInterfact");
var GameConstant_1 = require("../core/simulator/constant/GameConstant");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var CollectSystem_1 = require("../core/simulator/objects/CollectSystem");
var TileLayerObject_1 = require("../core/simulator/objects/TileLayerObject");
var TileObject_1 = require("./TileObject");
var TileMapObject = /** @class */ (function () {
    function TileMapObject(e) {
        this._maxMapWidth = 0;
        this._mapRow = 0;
        this._mapCol = 0;
        this._layerOffsetX = 0;
        this._layerOffsetY = 0;
        this._maxLayerIndex = 0;
        this._levelStr = "";
        this._canMatchTiles = new Map();
        this._cardsCount = 0;
        this._mapLayers = [];
        this._tileObjectMap = new Map();
        this._isSimulator = false;
        this._actionIds = [];
        this._selectTildIdsMap = new Map();
        this._hasCheckBatchIdSet = new Set();
        this._gameContext = null;
        this._gameType = null;
        this._collectSystem = null;
        this._gameContext = e;
        this._gameType = e.gameType;
    }
    Object.defineProperty(TileMapObject.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "isSimulator", {
        get: function () {
            return this._isSimulator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "gameContext", {
        get: function () {
            return this._gameContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "layerOffsetX", {
        get: function () {
            return this._layerOffsetX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "layerOffsetY", {
        get: function () {
            return this._layerOffsetY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "maxLayerIndex", {
        get: function () {
            return this._maxLayerIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "maxMapWidth", {
        get: function () {
            return this._maxMapWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "mapRow", {
        get: function () {
            return this._mapRow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "mapCol", {
        get: function () {
            return this._mapCol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMapObject.prototype, "collectSystem", {
        get: function () {
            return this._collectSystem;
        },
        enumerable: false,
        configurable: true
    });
    TileMapObject.isSpecialCardId = function (e) {
        return [GameTypeEnums_1.MjCardId.emYogaCardId, GameTypeEnums_1.MjCardId.emBombCardId, GameTypeEnums_1.MjCardId.emTravelEgyptId, GameTypeEnums_1.MjCardId.emRankId].includes(e);
    };
    TileMapObject.prototype.getCanMatchTiles = function () {
        return this._canMatchTiles;
    };
    TileMapObject.prototype.getLevelData = function () {
        return this._levelStr;
    };
    TileMapObject.prototype.reset = function () {
        this._canMatchTiles.clear();
        this._tileObjectMap.clear();
        this._mapLayers.length = 0;
        this._maxMapWidth = 0;
        this._mapRow = 0;
        this._mapCol = 0;
        this._layerOffsetX = 0;
        this._layerOffsetY = 0;
        this._maxLayerIndex = 0;
        this._levelStr = "";
    };
    TileMapObject.prototype.initGameLayer = function (e, t) {
        this.reset();
        this._levelStr = e;
        var o = LevelDataParser_1.LevelDataParser.convertStringToCardTileDatasNew(e);
        this._cardsCount = o.length;
        var n = -1, i = -1, r = -1, a = -1;
        this.gameType === GameTypeEnums_1.MjGameType.Classic && t && this.applyCenterOffsetToCards(o);
        for (var s = [], c = new Map(), u = new Map(), f = 0; f < o.length; f++) {
            var d = o[f], h = this.getSpeLayer(d.pos.z);
            if (h) {
                var m = d.pos.x + "-" + d.pos.y + "-" + d.pos.z, v = new TileObject_1.TileObject(m, d, this);
                v.init(this._gameContext, this._gameContext.getCardConfigMap());
                h.addCard(v);
                s.push(v);
                this._tileObjectMap.set(m, v);
                var g = v.gridPosX, _ = v.gridPosY;
                (!c.has(v.layer) || g < c.get(v.layer)) && c.set(v.layer, g);
                (!u.has(v.layer) || _ < u.get(v.layer)) && u.set(v.layer, _);
                (-1 === n || d.pos.x < n) && (n = d.pos.x);
                d.pos.x > i && (i = d.pos.x);
                (-1 === r || d.pos.y < r) && (r = d.pos.y);
                d.pos.y > a && (a = d.pos.y);
                h.layerIndex > this._maxLayerIndex && (this._maxLayerIndex = h.layerIndex);
            }
        }
        this.fixSingleCard();
        this._layerOffsetX = 0;
        this._layerOffsetY = 0;
        for (var T = c.get(0), C = u.get(0), b = 1; b < this._mapLayers.length; b++) {
            var E = c.get(b), S = u.get(b);
            void 0 !== E && E <= T && (this._layerOffsetX = b);
            void 0 !== S && S <= C && (this._layerOffsetY = b);
        }
        this._maxMapWidth = Math.floor((i - n) / 2) + 1;
        this._mapCol = i - n;
        this._mapRow = a - r;
        this.updateTouchSizeOffsets();
        return this._mapLayers;
    };
    TileMapObject.prototype.getCenter = function (e) {
        var t, o, n = e[0].x, r = e[0].x, a = e[0].y, l = e[0].y;
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                u.x < n && (n = u.x);
                u.x > r && (r = u.x);
                u.y < a && (a = u.y);
                u.y > l && (l = u.y);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return cc.v3((n + r) / 2, (a + l) / 2, 0);
    };
    TileMapObject.prototype.updatePositonOffset = function () {
        var e = this.gameContext.getOffsetY();
        if (this.gameType !== GameTypeEnums_1.MjGameType.Classic) {
            this.updatePositonOffsetForNormal(e);
        }
        else {
            this.updatePositonOffsetForClassic(e);
        }
    };
    TileMapObject.prototype.updatePositonOffsetForClassic = function (e, t) {
        var o, n, r, a, l = [], s = null;
        try {
            for (var u = __values(this._tileObjectMap.values()), p = u.next(); !p.done; p = u.next())
                if ((I = p.value).isValid) {
                    s = I;
                    break;
                }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (n = u.return) && n.call(u);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        if (s) {
            var f = 2 * GameConstant_1.default.MaxTileCountX - 2, d = 2 * GameConstant_1.default.MaxTileCountY - 2, h = s.cardLayoutConfig, y = s.layoutScale, m = cc.v3(0 * (h.cardSize[0] + h.cardSpace[0]) * y, -0 * (h.cardSize[1] + h.cardSpace[1]) * y, 0), v = cc.v3(0.5 * f * (h.cardSize[0] + h.cardSpace[0]) * y, -0 * (h.cardSize[1] + h.cardSpace[1]) * y, 0), g = cc.v3(0 * (h.cardSize[0] + h.cardSpace[0]) * y, -0.5 * d * (h.cardSize[1] + h.cardSpace[1]) * y, 0), _ = cc.v3(0.5 * f * (h.cardSize[0] + h.cardSpace[0]) * y, -0.5 * d * (h.cardSize[1] + h.cardSpace[1]) * y, 0);
            l.push(m, v, g, _);
            var T = this.getCenter(l), C = h.cardSizeRight, b = cc.v3(-T.x + C, -T.y + e + 0, 0);
            try {
                for (var E = __values(this._tileObjectMap.values()), S = E.next(); !S.done; S = E.next()) {
                    var I = S.value;
                    null != t && I.batchId !== t || (I.positionOffset = b);
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    S && !S.done && (a = E.return) && a.call(E);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
        }
    };
    TileMapObject.prototype.updatePositonOffsetForNormal = function (e) {
        var t, o, n, r, a = [], l = [];
        try {
            for (var s = __values(this._tileObjectMap.values()), c = s.next(); !c.done; c = s.next())
                if ((d = c.value).isValid) {
                    a.push(d.getPosition(true));
                    l.push(d);
                }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (a.length > 0) {
            var u = this.getCenter(a);
            try {
                for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
                    var d;
                    (d = f.value).positionOffset = cc.v3(-u.x, -u.y + e, 0);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    f && !f.done && (r = p.return) && r.call(p);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
    };
    TileMapObject.prototype.appendCard = function (e) {
        if (!e || !e.pos)
            return null;
        var t = e.pos.x + "-" + e.pos.y + "-" + e.pos.z;
        if (this._tileObjectMap.has(t))
            return null;
        var o = this.getSpeLayer(e.pos.z);
        if (o) {
            var n = new TileObject_1.TileObject(t, e, this);
            n.init(this._gameContext, this._gameContext.getCardConfigMap());
            o.addCard(n);
            this._tileObjectMap.set(t, n);
            return n;
        }
        return null;
    };
    TileMapObject.prototype.removeCard = function (e) {
        if (e) {
            var t = this.getSpeLayer(e.layer);
            if (t) {
                t.removeCard(e);
                this._tileObjectMap.delete(e.id);
            }
        }
    };
    TileMapObject.prototype.updateInitGameLayer = function () {
        var e, t, o, n, r = -1, a = -1, l = -1, s = -1;
        this._maxLayerIndex = 0;
        var c = new Map(), u = new Map();
        try {
            for (var p = __values(this._tileObjectMap.values()), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                (!c.has(d.layer) || d.gridPosX < c.get(d.layer)) && c.set(d.layer, d.gridPosX);
                (!u.has(d.layer) || d.gridPosY < u.get(d.layer)) && u.set(d.layer, d.gridPosY);
                (-1 === r || d.pos.x < r) && (r = d.pos.x);
                d.pos.x > a && (a = d.pos.x);
                (-1 === l || d.pos.y < l) && (l = d.pos.y);
                d.pos.y > s && (s = d.pos.y);
                d.layer > this._maxLayerIndex && (this._maxLayerIndex = d.layer);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                f && !f.done && (t = p.return) && t.call(p);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this._layerOffsetX = 0;
        this._layerOffsetY = 0;
        var h = c.get(0), y = u.get(0);
        try {
            for (var m = __values(c.keys()), v = m.next(); !v.done; v = m.next()) {
                var g = v.value, _ = c.get(g), T = u.get(g);
                void 0 !== _ && _ <= h && (this._layerOffsetX = g);
                void 0 !== T && T <= y && (this._layerOffsetY = g);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (n = m.return) && n.call(m);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        this._maxMapWidth = Math.floor((a - r) / 2) + 1;
        this._mapCol = a - r;
        this._mapRow = s - l;
        this.updateTouchSizeOffsets();
    };
    TileMapObject.prototype.getRemainCount = function () {
        var e, t, o = 0;
        try {
            for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next())
                r.value.isValid && o++;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    TileMapObject.prototype.moveTileToPosition = function (e, t, o, n) {
        var i = e.layer;
        i < this._mapLayers.length && this._mapLayers[i].removeCard(e);
        e.refreshOwnerGridIds(t, o, n);
        this.getSpeLayer(n).addCard(e);
    };
    TileMapObject.prototype.swapTilePositions = function (e, t) {
        var o = this._tileObjectMap.get(e), n = this._tileObjectMap.get(t);
        if (o && n) {
            var i = {
                x: o.gridPosX,
                y: o.gridPosY,
                z: o.layer
            }, r = {
                x: n.gridPosX,
                y: n.gridPosY,
                z: n.layer
            };
            this._mapLayers[i.z].removeCard(o);
            this._mapLayers[r.z].removeCard(n);
            o.refreshOwnerGridIds(r.x, r.y, r.z);
            this.getSpeLayer(r.z).addCard(o);
            n.refreshOwnerGridIds(i.x, i.y, i.z);
            this.getSpeLayer(i.z).addCard(n);
        }
    };
    TileMapObject.prototype.applyCenterOffsetToAllTiles = function () {
        var e, t, o = this.getCurrentCenterOffset();
        try {
            for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
                var a = r.value;
                if (a.isValid) {
                    var l = a.gridPosX, s = a.gridPosY, c = a.layer, u = this.applyOffsetToPosition(l, s, o);
                    a.refreshOwnerGridIds(u.x, u.y, c);
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
                r && !r.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    TileMapObject.prototype.getCurrentCenterOffset = function () {
        var e, t, o = [];
        try {
            for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
                var a = r.value;
                a.isValid && o.push({
                    id: a.resId,
                    pos: {
                        x: a.gridPosX,
                        y: a.gridPosY,
                        z: a.layer
                    },
                    isAlive: true
                });
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return 0 === o.length ? {
            centerOffsetX: 0,
            centerOffsetY: 0,
            originalStartX: 0,
            originalStartY: 0
        } : this.calculateCenterOffset(o);
    };
    TileMapObject.prototype.fixSingleCard = function () {
        var e, t, o = this, n = this._gameContext.gameType;
        if (n === GameTypeEnums_1.MjGameType.Normal || n === GameTypeEnums_1.MjGameType.Travel || n === GameTypeEnums_1.MjGameType.DailyChallenge || n === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var l = function l(e) {
                o.changeTileResId(e.id, 0);
                n === GameTypeEnums_1.MjGameType.Tile2Normal && e.setTypeBits(0);
            }, s = new Map();
            this._tileObjectMap.forEach(function (e) {
                s.has(e.cardId) || s.set(e.cardId, []);
                s.get(e.cardId).push(e);
            });
            var c = [];
            try {
                for (var u = __values(s), f = u.next(); !f.done; f = u.next()) {
                    var d = __read(f.value, 2), h = d[0], y = d[1];
                    if (y.length % 2 != 0) {
                        if (n === GameTypeEnums_1.MjGameType.Travel && h === GameTypeEnums_1.MjCardId.emYogaCardId)
                            continue;
                        c.push.apply(c, __spreadArrays(y));
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
                    f && !f.done && (t = u.return) && t.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            c.length > 0 && c.length % 2 == 0 && c.forEach(function (e) {
                l(e);
            });
            if (n === GameTypeEnums_1.MjGameType.Normal || n === GameTypeEnums_1.MjGameType.DailyChallenge || n === GameTypeEnums_1.MjGameType.Tile2Normal) {
                var m = GameTypeEnums_1.MjCardId.emYogaCardId;
                if (s.has(m)) {
                    var v = s.get(m);
                    v && v.length > 0 && v.length % 2 == 0 && v.forEach(function (e) {
                        l(e);
                    });
                }
            }
        }
    };
    TileMapObject.prototype.fixClassicSingleCard = function (e) {
        var t, o, n = this, l = [];
        this._tileObjectMap.forEach(function (e) {
            e.isValid && l.push(e);
        });
        l.length;
        var s = new Map();
        l.forEach(function (e) {
            var t = e.cardId;
            s.has(t) || s.set(t, []);
            var o = s.get(t);
            o.push(e);
            if (o.length >= 2) {
                o.splice(0, 2);
                0 === o.length && s.delete(t);
            }
        });
        var c = [];
        try {
            for (var u = __values(s), f = u.next(); !f.done; f = u.next()) {
                var d = __read(f.value, 2), h = d[0], y = d[1];
                (e || h !== GameTypeEnums_1.MjCardId.emYogaCardId) && c.push.apply(c, __spreadArrays(y));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = u.return) && o.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 !== c.length)
            if (c.length % 2 == 0)
                c.forEach(function (e) {
                    n.changeTileResId(e.id, 0);
                });
            else {
                c[c.length - 1].isValid = false;
                for (var m = 0; m < c.length - 1; m++)
                    this.changeTileResId(c[m].id, 0);
            }
    };
    TileMapObject.prototype.getSpeLayer = function (e) {
        if (e + 1 > this._mapLayers.length)
            for (var t = e + 1 - this._mapLayers.length, o = 0; o < t; o++) {
                var n = new TileLayerObject_1.default(this._mapLayers.length);
                this._mapLayers.push(n);
            }
        return this._mapLayers[e];
    };
    TileMapObject.prototype.mapLayers = function () {
        return this._mapLayers;
    };
    TileMapObject.prototype.getTileObject = function (e) {
        return this._tileObjectMap.get(e);
    };
    TileMapObject.prototype.tileObjectMap = function () {
        return this._tileObjectMap;
    };
    TileMapObject.prototype.isHasCard = function (e, t) {
        return e < this._mapLayers.length && this._mapLayers[e].isHasCard(t);
    };
    TileMapObject.prototype.getTileObjectByGridIndex = function (e, t) {
        if (e < this._mapLayers.length) {
            var o = this._mapLayers[e].getGridCard(t);
            if (o && o.isValid)
                return o;
        }
    };
    TileMapObject.prototype.isHasCover = function (e) {
        if (this._gameContext.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var t = e.layer + 1;
            if (t == this._mapLayers.length)
                return false;
            for (var o = 0; o < e.ownerGridIds.length; o++)
                if (this.isHasCard(t, e.ownerGridIds[o]))
                    return true;
            return false;
        }
        for (var n = e.layer + 1; n < this._mapLayers.length; n++)
            for (o = 0; o < e.ownerGridIds.length; o++)
                if (this.isHasCard(n, e.ownerGridIds[o]))
                    return true;
        return false;
    };
    TileMapObject.prototype.isHasCoverWithOutTiles = function (e, t) {
        for (var o = e.layer + 1; o < this._mapLayers.length; o++)
            for (var n = 0; n < e.ownerGridIds.length; n++) {
                var i = this.getTileObjectByGridIndex(o, e.ownerGridIds[n]);
                if (i && !t.includes(i.id))
                    return true;
            }
        return false;
    };
    TileMapObject.prototype.isHasCoverWithOutTiles_tile2 = function (e, t) {
        for (var o = e.layer + 1; o < this._mapLayers.length; o++)
            for (var n = 0; n < e.ownerGridIds.length; n++) {
                var i = this.getTileObjectByGridIndex(o, e.ownerGridIds[n]);
                if (i && !t.includes(i.id) && !i.getIsInSlotBar())
                    return true;
            }
        return false;
    };
    TileMapObject.prototype.isHasVisible = function (e, t) {
        if (t === void 0) { t = false; }
        if (!e.isValid)
            return TileTypeEnum_1.ETileVisible.None;
        for (var o = TileTypeEnum_1.ETileVisible.All, n = t ? e.layer + 2 : this._mapLayers.length, i = e.layer + 1; i < n; i++) {
            this.isHasCard(i, e.ownerGridIds[0]) && (o &= ~TileTypeEnum_1.ETileVisible.LeftTop);
            this.isHasCard(i, e.ownerGridIds[1]) && (o &= ~TileTypeEnum_1.ETileVisible.RightTop);
            this.isHasCard(i, e.ownerGridIds[2]) && (o &= ~TileTypeEnum_1.ETileVisible.LeftBottom);
            this.isHasCard(i, e.ownerGridIds[3]) && (o &= ~TileTypeEnum_1.ETileVisible.RightBottom);
        }
        return o;
    };
    TileMapObject.prototype.isCardLock = function (e) {
        var t, o;
        if (this.isHasCover(e))
            return 2;
        t = this.isHasLeft(e);
        o = this.isHasRight(e);
        return t && o ? 1 : 0;
    };
    TileMapObject.prototype.isHasLeft = function (e) {
        return e.isHasLeft();
    };
    TileMapObject.prototype.isHasRight = function (e) {
        return e.isHasRight();
    };
    TileMapObject.prototype.isHasUp = function (e) {
        return e.isHasUp();
    };
    TileMapObject.prototype.isHasDown = function (e) {
        return e.isHasDown();
    };
    TileMapObject.prototype.isOnlyHasLeftRight = function (e) {
        return 1 === this.isCardLock(e);
    };
    TileMapObject.prototype.getAdjacentUpCards = function (e) {
        var t, o, n = [], r = e.layer + 1;
        if (r < this._mapLayers.length)
            try {
                for (var a = __values(e.ownerGridIds), l = a.next(); !l.done; l = a.next()) {
                    var s = l.value;
                    if (this.isHasCard(r, s)) {
                        var c = this._mapLayers[r].getGridCard(s);
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
                    l && !l.done && (o = a.return) && o.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        return n;
    };
    TileMapObject.prototype.getAdjacentLeftCards = function (e) {
        var t, o, n = [];
        try {
            for (var r = __values(e.ownerGridIds), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if (l % (2 * GameConstant_1.default.MaxTileCountX) > 0) {
                    var s = l - 1;
                    if (this.isHasCard(e.layer, s)) {
                        var u = this._mapLayers[e.layer].getGridCard(s);
                        u && u !== e && n.push(u);
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
                a && !a.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    TileMapObject.prototype.getAdjacentRightCards = function (e) {
        var t, o, n = [];
        try {
            for (var r = __values(e.ownerGridIds), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if (l % (2 * GameConstant_1.default.MaxTileCountX) < 2 * GameConstant_1.default.MaxTileCountX - 1) {
                    var s = l + 1;
                    if (this.isHasCard(e.layer, s)) {
                        var u = this._mapLayers[e.layer].getGridCard(s);
                        u && u !== e && n.push(u);
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
                a && !a.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    TileMapObject.prototype.getAdjacentLockCards = function (e) {
        var t = [], o = this.getAdjacentUpCards(e);
        if (o.length)
            t = o;
        else {
            var n = this.getAdjacentLeftCards(e), i = this.getAdjacentRightCards(e);
            t = __spreadArrays(n, i);
        }
        return t;
    };
    TileMapObject.prototype.checkIsLock = function (e) {
        var t = this.getTileObject(e);
        return !!t && 0 != this.isCardLock(t);
    };
    TileMapObject.prototype.getCanMatchCardPairNum = function () {
        var e = 0;
        this._canMatchTiles.forEach(function (t) {
            e += Math.floor(t.length / 2);
        });
        return e;
    };
    TileMapObject.prototype.updateCanMatchTiles = function () {
        var e, t;
        this._canMatchTiles.clear();
        for (var o = this._mapLayers.length - 1; o >= 0; o--)
            try {
                for (var n = (e = void 0, __values(this._mapLayers[o].allCards)), r = n.next(); !r.done; r = n.next()) {
                    var a = r.value;
                    if (!this.checkIsLock(a.id) && a.isValid && !a.generating) {
                        this._canMatchTiles.has(a.cardId) || this._canMatchTiles.set(a.cardId, []);
                        this._canMatchTiles.get(a.cardId).push(a);
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
                    r && !r.done && (t = n.return) && t.call(n);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
    };
    TileMapObject.prototype.getCanMatchTilesHint = function () {
        var e = this.getCanMatchTiles(), t = [];
        e.forEach(function (e) {
            e.length >= 2 && t.push(e);
        });
        return t;
    };
    TileMapObject.prototype.getAllCardTiles = function () {
        return Array.from(this._tileObjectMap.values()).filter(function (e) {
            return e.isValid;
        });
    };
    TileMapObject.prototype.getValidTileObjects = function () {
        var e, t, o = [];
        try {
            for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
                var a = r.value;
                a.isValid && o.push(a);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    TileMapObject.prototype.compare = function (e, t) {
        return null != e && null != t && 0 != e.isValid && 0 != t.isValid && e.cardId == t.cardId;
    };
    TileMapObject.prototype.pushActionId = function (e) {
        this._actionIds.push(e);
        this._actionIds.length > 2 && this._actionIds.shift();
    };
    TileMapObject.prototype.deleteLastActionId = function () {
        return this._actionIds.length > 0 ? this._actionIds.shift() : null;
    };
    TileMapObject.prototype.getActionIds = function () {
        return this._actionIds;
    };
    TileMapObject.prototype.selcectTileId = function (e, t) {
        var o = this._tileObjectMap.get(e);
        if (o && o.isValid) {
            o._isSelect = t;
            this._selectTildIdsMap.set(e, t);
        }
    };
    TileMapObject.prototype.getSelectTileIds = function () {
        var e = this, t = [];
        this._selectTildIdsMap.forEach(function (o, n) {
            o && e._tileObjectMap.get(n).isValid && t.push(n);
        });
        return t;
    };
    TileMapObject.prototype.unselectAllTileIds = function (e) {
        var t = this, o = [];
        this._selectTildIdsMap.forEach(function (n, i) {
            if (i !== e && n && t._tileObjectMap.get(i).isValid) {
                t.selcectTileId(i, false);
                o.push(i);
            }
        });
        return o;
    };
    TileMapObject.prototype.canClear = function (e) {
        var t = this, o = [];
        this._selectTildIdsMap.forEach(function (e, n) {
            if (e) {
                var i = t._tileObjectMap.get(n);
                i && i.isValid && o.push(n);
            }
        });
        e && o.push(e);
        if (2 === o.length && o[0] !== o[1]) {
            var n = this._tileObjectMap.get(o[0]), i = this._tileObjectMap.get(o[1]);
            if (n && i && n.isValid && i.isValid)
                return n.cardId == i.cardId;
        }
        return false;
    };
    TileMapObject.prototype.getIsSelect = function (e) {
        var t = this._tileObjectMap.get(e);
        return !(!t || !t.isValid) && t.isSelect;
    };
    TileMapObject.prototype.getMatchTileIds = function () {
        var e = this, t = [];
        this._selectTildIdsMap.forEach(function (o, n) {
            if (o) {
                var i = e._tileObjectMap.get(n);
                i && i.isValid && t.push(n);
            }
        });
        var o = [];
        if (2 === t.length && t[0] !== t[1]) {
            var n = this._tileObjectMap.get(t[0]), i = this._tileObjectMap.get(t[1]);
            if (n && i && n.isValid && i.isValid && n.cardId == i.cardId) {
                o.push(t[0]);
                o.push(t[1]);
            }
        }
        return o;
    };
    TileMapObject.prototype.onClear = function (e) {
        if (e && e.length > 0) {
            this._gameContext.getGameData().recordClear(e.map(function (e) {
                return e.toKey();
            }));
            mj.EventManager.emit(GameEvent_1.EGameEvent.TileMapObject_OnClear, e);
        }
    };
    TileMapObject.prototype.clear = function (e) {
        if (e === void 0) { e = false; }
        var t, o = this;
        var n = [];
        this._selectTildIdsMap.forEach(function (e, t) {
            if (e) {
                var i = o._tileObjectMap.get(t);
                i && i.isValid && n.push(t);
            }
        });
        var i = false;
        if (2 === n.length && n[0] !== n[1]) {
            var r = this._tileObjectMap.get(n[0]), a = this._tileObjectMap.get(n[1]);
            r && a && r.isValid && a.isValid && (i = r.cardId == a.cardId);
        }
        if (i) {
            var l = {
                tileIds: [],
                from: CollectInterfact_1.ECollectFrom.FromClear
            }, c = [];
            n.forEach(function (e) {
                var t = o._tileObjectMap.get(e);
                o.selcectTileId(e, false);
                if (t && t.isValid) {
                    t.isValid = false;
                    l.tileIds.push(e);
                    c.push(t);
                }
            });
            this.onClear(c);
            null === (t = this.collectSystem) || void 0 === t || t.addCollectTarget(l);
        }
        e || this.updateTouchSizeOffsets();
        return n;
    };
    TileMapObject.prototype.clearTile = function (e, t) {
        var o, n = this._tileObjectMap.get(e);
        if (n && n.isValid) {
            n.isValid = false;
            var i = {
                tileIds: [e],
                from: t
            };
            null === (o = this.collectSystem) || void 0 === o || o.addCollectTarget(i);
            this.onClear([n]);
        }
    };
    TileMapObject.prototype.clearSlotTile2Tiles = function (e, t) {
        var o;
        if (2 != e.length)
            return false;
        var n = this._tileObjectMap.get(e[0]), i = this._tileObjectMap.get(e[1]);
        if (n && i && n.isValid && i.isValid) {
            n.isValid = false;
            i.isValid = false;
            var r = {
                tileIds: e,
                from: t
            };
            null === (o = this.collectSystem) || void 0 === o || o.addCollectTarget(r);
            this.onClear([n, i]);
            return true;
        }
        return false;
    };
    TileMapObject.prototype.getCurAllLockCards = function () {
        for (var e = [], t = [], o = 0; o < this._mapLayers.length; o++)
            for (var n = 0; n < this._mapLayers[o].allCards.length; n++) {
                var i = this._mapLayers[o].allCards[n];
                i.isValid && (this.isCardLock(i) ? e.push(i.id) : t.push(i.id));
            }
        return {
            lockCardIds: e,
            unLockCardIds: t
        };
    };
    TileMapObject.prototype.updateTouchSizeOffsets = function () {
        for (var e = 0; e < this._mapLayers.length; e++)
            for (var t = 0; t < this._mapLayers[e].allCards.length; t++) {
                var o = this._mapLayers[e].allCards[t];
                this.updateTouchSizeOffsetsByTile(o);
            }
    };
    TileMapObject.prototype.updateTouchSizeOffsetsByTile = function (e) {
        e.updateTouchSizeOffsets([0, 0, 0, 0]);
    };
    TileMapObject.prototype.getAliveCardByPos = function (e, t, o) {
        var n = this._mapLayers[o];
        if (!n)
            return null;
        var i = e + t * GameConstant_1.default.MaxTileCountX * 2, r = n.getGridCard(i);
        return r && r.isValid ? r : null;
    };
    TileMapObject.prototype.getCurTilesCnt = function () {
        var e, t, o, n, r = 0;
        try {
            for (var a = __values(this._mapLayers), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                try {
                    for (var c = (o = void 0, __values(s.allCards)), u = c.next(); !u.done; u = c.next())
                        u.value.isValid && r++;
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
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return r;
    };
    TileMapObject.prototype.aliveTileCount = function () {
        var e, t, o, n, r = 0;
        try {
            for (var a = __values(this._mapLayers), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                try {
                    for (var c = (o = void 0, __values(s.allCards)), u = c.next(); !u.done; u = c.next())
                        u.value.isValid && r++;
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
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return r;
    };
    TileMapObject.prototype.aliveTiles = function () {
        var e, t, o, n, r = new Array();
        try {
            for (var a = __values(this._mapLayers), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                try {
                    for (var c = (o = void 0, __values(s.allCards)), u = c.next(); !u.done; u = c.next()) {
                        var p = u.value;
                        p.isValid && r.push(p);
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
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return r;
    };
    TileMapObject.prototype.getEachLayerTileCount = function () {
        for (var e = [], t = 0; t < this._mapLayers.length; t++) {
            var o = this._mapLayers[t].allCards.filter(function (e) {
                return e.isValid;
            });
            e[t] = o.length;
        }
        return e;
    };
    TileMapObject.prototype.getAliveTileByPos = function (e) {
        var t = this._mapLayers[e.z];
        if (!t)
            return null;
        var o = e.x + e.y * GameConstant_1.default.MaxTileCountX * 2;
        return t.getGridCard(o);
    };
    TileMapObject.prototype.setTileType = function (e, t) {
        var o = this._tileObjectMap.get(e);
        if (o) {
            o._type = t;
            this.gameType == GameTypeEnums_1.MjGameType.Tile2Normal && o.addTypeBit(t);
        }
    };
    TileMapObject.prototype.setTileType_removeTypes = function (e, t) {
        var o = this._tileObjectMap.get(e);
        o && this.gameType == GameTypeEnums_1.MjGameType.Tile2Normal && t.forEach(function (e) {
            return o.removeTypeBit(e);
        });
    };
    TileMapObject.prototype.setTileTypeByPos_addTypes = function (e, t) {
        var o = this.getAliveTileByPos(e);
        o && t.forEach(function (e) {
            return o.addTypeBit(e);
        });
    };
    TileMapObject.prototype.setTileTypeByPos = function (e, t) {
        var o = this.getAliveTileByPos(e);
        o && (o._type = t);
    };
    TileMapObject.prototype.setTileOriginalResId = function (e, t) {
        var o = this._tileObjectMap.get(e);
        o && o.setOriginalResId(t);
    };
    TileMapObject.prototype.setTileOriginalResIdByPos = function (e, t) {
        var o = this.getAliveTileByPos(e);
        o && o.setOriginalResId(t);
    };
    TileMapObject.prototype.changeTileResId = function (e, t) {
        var o = this._tileObjectMap.get(e);
        o && o.changeResId(t);
    };
    TileMapObject.prototype.getAllTileTypes = function () {
        var e = new Map();
        this._tileObjectMap.forEach(function (t, o) {
            e.set(o, t.type);
        });
        return e;
    };
    TileMapObject.prototype.isBoardTileHasType = function (e, t) {
        if (t === void 0) { t = true; }
        var o, n;
        var r = Array.isArray(e) ? e : [e];
        if (0 === r.length)
            return false;
        var a = new Set(r);
        try {
            for (var l = __values(this._tileObjectMap.values()), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (c && (!t || c.isValid) && a.has(c.type))
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
                s && !s.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    TileMapObject.prototype.checkIsDead = function (e) {
        if (e === void 0) { e = []; }
        var t, o;
        var n = this.aliveTiles();
        if (0 === n.length)
            return false;
        var r = new Map();
        try {
            for (var a = __values(n), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                if (!this.isCardLock(s) && !e.includes(s.id)) {
                    r.has(s.cardId) || r.set(s.cardId, []);
                    r.get(s.cardId).push(s);
                    if (r.get(s.cardId).length >= 2)
                        return false;
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
        return true;
    };
    TileMapObject.prototype.getCount = function () {
        return this._tileObjectMap.size || 0;
    };
    TileMapObject.prototype.getCardsCount = function () {
        return this._cardsCount || 0;
    };
    TileMapObject.prototype.getInitialBoardDimension = function () {
        var e, t, o, n, r = 0, a = 0;
        try {
            for (var l = __values(this._mapLayers), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                try {
                    for (var u = (o = void 0, __values(c.allCards)), p = u.next(); !p.done; p = u.next()) {
                        var f = p.value;
                        r = Math.max(r, f.gridPosX);
                        a = Math.max(a, f.gridPosY);
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (n = u.return) && n.call(u);
                    }
                    finally {
                        if (o)
                            throw o.error;
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
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return [r + 2, a + 2, this._mapLayers.length];
    };
    TileMapObject.prototype.getCurBoardDimension = function (e) {
        if (e === void 0) { e = false; }
        var t, o, n, r;
        var a = 0, l = 0, s = 0;
        try {
            for (var c = __values(this._mapLayers), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = false;
                try {
                    for (var d = (n = void 0, __values(p.allCards)), h = d.next(); !h.done; h = d.next()) {
                        var y = h.value;
                        if (y.isValid && (!e || !y.getIsInSlotBar())) {
                            a = Math.max(a, y.gridPosX);
                            l = Math.max(l, y.gridPosY);
                            f = true;
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
                        h && !h.done && (r = d.return) && r.call(d);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                f && s++;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return [a + 2, l + 2, s];
    };
    TileMapObject.prototype.getSelfDistanceArray = function (e) {
        var t, o, n, a, s = function s(t) {
            return e ? t.getPosition() : cc.v2(t.gridPosX, t.gridPosY);
        }, c = {}, u = this._tileObjectMap;
        try {
            for (var p = __values(u), f = p.next(); !f.done; f = p.next()) {
                var d = __read(f.value, 2), h = d[0];
                c[(R = d[1]).resId] || (c[R.resId] = []);
                c[R.resId].push(R);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var y = {};
        for (var m in c) {
            var v = c[m];
            if (!(v.length < 2)) {
                var g = Number.MAX_VALUE, _ = {};
                try {
                    for (var T = (n = void 0, __values(v)), C = T.next(); !C.done; C = T.next()) {
                        var b = C.value;
                        _[b.layer] || (_[b.layer] = []);
                        _[b.layer].push(b);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        C && !C.done && (a = T.return) && a.call(T);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                var E = false;
                for (var S in _) {
                    var I = _[S];
                    if (I.length >= 2)
                        for (var w = 0; w < I.length; w++)
                            for (var B = w + 1; B < I.length; B++) {
                                var x = I[w], M = I[B], O = s(x), D = s(M), P = Math.sqrt(Math.pow(D.x - O.x, 2) + Math.pow(D.y - O.y, 2));
                                g = Math.min(g, P);
                                E = true;
                            }
                }
                if (!E)
                    for (w = 0; w < v.length; w++)
                        for (B = w + 1; B < v.length; B++) {
                            x = v[w], M = v[B], O = s(x), D = s(M), P = Math.sqrt(Math.pow(D.x - O.x, 2) + Math.pow(D.y - O.y, 2));
                            g = Math.min(g, P);
                        }
                g !== Number.MAX_VALUE && (y[m] = Number(g.toFixed(2)));
            }
        }
        var A = [];
        var _l = {};
        _l[h] = R;
        for (var h in y) {
            var R = y[h];
            A.push(_l);
        }
        return A;
    };
    TileMapObject.prototype.getFlipCardPos = function () {
        var e, t, o = [];
        try {
            for (var n = __values(this._tileObjectMap), a = n.next(); !a.done; a = n.next()) {
                var l = __read(a.value, 2), s = (l[0], l[1]);
                s.type === TileTypeEnum_1.ETileType.RollCard && o.push(cc.v3(s.gridPosX, s.gridPosY, s.layer));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o.map(function (e) {
            return e.x + "," + e.y + "," + e.z;
        });
    };
    TileMapObject.prototype.initCollectSystem = function () {
        this._collectSystem || (this._collectSystem = new CollectSystem_1.default(this));
        return this._collectSystem;
    };
    TileMapObject.prototype.setDuoxiaoCount = function (e, t) {
        if (t === void 0) { t = 0; }
        var o = this._tileObjectMap.get(e);
        o && o.setDuoxiaoCount(t);
    };
    TileMapObject.prototype.setDuoxiaoCountByPos = function (e, t) {
        if (t === void 0) { t = 0; }
        var o = this.getAliveTileByPos(e);
        o && o.setDuoxiaoCount(t);
    };
    TileMapObject.prototype.insertNewLayersToFront = function (e) {
        for (var t, o, n, r, l, s = [], c = 0; c < e; c++)
            s.push(new TileLayerObject_1.default(c));
        var u = [];
        try {
            for (var p = __values(this._mapLayers), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, y = d.layerIndex + e;
                try {
                    for (var m = (n = void 0, __values(d.allCards)), v = m.next(); !v.done; v = m.next()) {
                        var g = v.value;
                        g.isValid && u.push(g);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        v && !v.done && (r = m.return) && r.call(m);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                d.updateLayerIndex(y);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        (l = this._mapLayers).unshift.apply(l, __spreadArrays(s));
        return u;
    };
    TileMapObject.prototype.setTileGenerated = function (e, t) {
        e && (e._generating = t);
    };
    TileMapObject.prototype.createTilesForNewLayers = function (e, t) {
        for (var o = [], n = new Set(), i = 0; i < e.length; i++) {
            var r = e[i], a = this._mapLayers[r.pos.z];
            if (a) {
                var l = "_b" + t, s = r.pos.x + "-" + r.pos.y + "-" + r.pos.z + l, c = new TileObject_1.TileObject(s, r, this, t);
                c.init(this._gameContext, this._gameContext.getCardConfigMap());
                a.addCard(c);
                o.push(c);
                this._tileObjectMap.set(s, c);
                n.add(a.layerIndex);
            }
        }
        return {
            tileObjects: o,
            layerSets: n
        };
    };
    TileMapObject.prototype.mergeTileMapData = function () {
        var e, t;
        this._cardsCount = this._tileObjectMap.size;
        var o = -1, n = -1, r = -1, a = -1;
        this._maxLayerIndex = 0;
        try {
            for (var l = __values(this._tileObjectMap.values()), s = l.next(); !s.done; s = l.next()) {
                var c = s.value, u = c.gridPosX, p = c.gridPosY;
                (-1 === o || u < o) && (o = u);
                u > n && (n = u);
                (-1 === r || p < r) && (r = p);
                p > a && (a = p);
                c.layer > this._maxLayerIndex && (this._maxLayerIndex = c.layer);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this._maxMapWidth = Math.floor((n - o) / 2) + 1;
        this._mapCol = n - o;
        this._mapRow = a - r;
    };
    TileMapObject.prototype.calculateCenterOffset = function (e) {
        for (var t = e[0].pos.x, o = e[0].pos.x, n = e[0].pos.y, i = e[0].pos.y, r = 1; r < e.length; r++) {
            var a = e[r].pos;
            a.x < t && (t = a.x);
            a.x > o && (o = a.x);
            a.y < n && (n = a.y);
            a.y > i && (i = a.y);
        }
        var l = o - t, s = i - n, u = 2 * GameConstant_1.default.MaxTileCountX - 2, p = 2 * GameConstant_1.default.MaxTileCountY - 2;
        return {
            centerOffsetX: Math.floor((u - l) / 2),
            centerOffsetY: Math.floor((p - s) / 2),
            originalStartX: t,
            originalStartY: n
        };
    };
    TileMapObject.prototype.applyCenterOffsetToCards = function (e) {
        for (var t = this.calculateCenterOffset(e), o = 0; o < e.length; o++) {
            var n = this.applyOffsetToPosition(e[o].pos.x, e[o].pos.y, t);
            e[o].pos.x = n.x;
            e[o].pos.y = n.y;
        }
    };
    TileMapObject.prototype.applyOffsetToPosition = function (e, t, o) {
        return {
            x: e - o.originalStartX + o.centerOffsetX,
            y: t - o.originalStartY + o.centerOffsetY
        };
    };
    TileMapObject.prototype.addGameLayer = function (e, t) {
        var o = LevelDataParser_1.LevelDataParser.convertStringToCardTileDatasNew(t);
        this.applyCenterOffsetToCards(o);
        for (var n = -1, i = 0; i < o.length; i++)
            o[i].pos.z > n && (n = o[i].pos.z);
        var r = n + 1;
        this.insertNewLayersToFront(r);
        var a = this.createTilesForNewLayers(o, e), s = a.tileObjects, c = a.layerSets;
        return {
            batchId: e,
            levelStr: t,
            cardsCount: o.length,
            tileObjects: s,
            addLayers: Array.from(c),
            openGenerateState: this._gameContext.getOpenGenerateState()
        };
    };
    TileMapObject.prototype.checkAndApplyTileFalling = function (e, t) {
        if (t === void 0) { t = true; }
        var o, n;
        var r = [];
        try {
            for (var a = __values(this._tileObjectMap.values()), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                if (s.isValid && s.batchId !== e && (t || !this.getIsSelect(s.id))) {
                    for (var c = s.layer, u = s.gridPosX, p = s.gridPosY, f = c, d = c - 1; d >= 0; d--) {
                        if (this.hasBlockingTileAtPosition(d, u, p)) {
                            f = d + 1;
                            break;
                        }
                        0 === d && (f = 0);
                    }
                    r.push({
                        tile: s,
                        oldLayer: c,
                        newLayer: f,
                        indexInLayer: 0
                    });
                    this.moveTileToPosition(s, s.gridPosX, s.gridPosY, f);
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
                l && !l.done && (n = a.return) && n.call(a);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        for (var h = 0; h < r.length; h++) {
            var y = r[h], m = this._mapLayers[y.newLayer];
            m && (y.indexInLayer = m.allCards.indexOf(y.tile));
        }
        return r;
    };
    TileMapObject.prototype.hasBlockingTileAtPosition = function (e, t, o) {
        var n, r;
        if (e < 0 || e >= this._mapLayers.length)
            return false;
        var a = this._mapLayers[e];
        if (!a)
            return false;
        try {
            for (var l = __values(a.allCards), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (c.isValid) {
                    var u = c.gridPosX, p = c.gridPosX + 1, f = c.gridPosY, d = c.gridPosY + 1;
                    if (u <= t + 1 && p >= t && f <= o + 1 && d >= o)
                        return true;
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
                s && !s.done && (r = l.return) && r.call(l);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return false;
    };
    TileMapObject.prototype.cleanupEmptyLayers = function () {
        var e, t, o, n;
        if (this._mapLayers && 0 !== this._mapLayers.length) {
            for (var r = -1, a = [], l = this._mapLayers.length - 1; l >= 0; l--) {
                if ((u = this._mapLayers[l]) && u.hasValidCard()) {
                    r = l;
                    break;
                }
                u && a.push(u);
            }
            if (0 !== a.length) {
                try {
                    for (var s = __values(a), c = s.next(); !c.done; c = s.next()) {
                        var u = c.value;
                        try {
                            for (var p = (o = void 0, __values(u.allCards)), f = p.next(); !f.done; f = p.next()) {
                                var d = f.value;
                                this._tileObjectMap.delete(d.id);
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
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        c && !c.done && (t = s.return) && t.call(s);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                this._mapLayers.splice(r + 1, a.length);
                this._maxLayerIndex = this._mapLayers.length > 0 ? this._mapLayers.length - 1 : 0;
            }
        }
    };
    TileMapObject.prototype.hasCheckBatchId = function (e) {
        return this._hasCheckBatchIdSet.has(e);
    };
    TileMapObject.prototype.addCheckBatchId = function (e) {
        this._hasCheckBatchIdSet.add(e);
    };
    TileMapObject.prototype.changeBatchId = function (e, t) {
        var o = this.getTileObject(e);
        o && (o._batchId = t || 0);
    };
    TileMapObject.prototype.getDropTiles = function (e) {
        var t, o, n = [];
        try {
            for (var r = __values(this._tileObjectMap.values()), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if (l.batchId != e) {
                    var s = l.layer, c = this._mapLayers[s];
                    c && n.push({
                        tile: l,
                        oldLayer: l.layer,
                        newLayer: s,
                        indexInLayer: c.allCards.indexOf(l) || 0
                    });
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
                a && !a.done && (o = r.return) && o.call(r);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    TileMapObject.prototype.getTileObjectByPosId = function (e) {
        var t, o;
        try {
            for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
                var a = r.value;
                if (a.saveKey() === e)
                    return a;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    TileMapObject.prototype.setTileTypeByPosExtra = function (e, t) {
        var o, n = this.getAliveTileByPos(e);
        n && (null === (o = null == n ? void 0 : n.setExtraInfo) || void 0 === o || o.call(n, t));
    };
    __decorate([
        mj.traitEvent("TileMapObj_updTchSz")
    ], TileMapObject.prototype, "updateTouchSizeOffsetsByTile", null);
    return TileMapObject;
}());
exports.TileMapObject = TileMapObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL29iamVjdHMvVGlsZU1hcE9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUEyRTtBQUMzRSxpRUFBNEQ7QUFDNUQsd0VBQW1FO0FBQ25FLDZEQUE2RDtBQUM3RCwwRUFBZ0Y7QUFDaEYsbUVBQTZFO0FBQzdFLHlFQUFvRTtBQUNwRSw2RUFBd0U7QUFDeEUsMkNBQTBDO0FBQzFDO0lBaURFLHVCQUFZLENBQUM7UUFoRGIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM5Qix3QkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFnQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBakNELHNCQUFJLG1DQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FB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Q0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM1RTtTQUNGO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFD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QyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN2RyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUNuQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUk7Z0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxF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QUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUNELDZDQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUEzdkJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztxRUFHcEM7SUEwdkJILG9CQUFDO0NBM3JERCxBQTJyREMsSUFBQTtBQTNyRFksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMZXZlbERhdGFQYXJzZXIgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25maWcvTGV2ZWxEYXRhUGFyc2VyJztcbmltcG9ydCB7IEVDb2xsZWN0RnJvbSB9IGZyb20gJy4uL2NvbnN0YW50L0NvbGxlY3RJbnRlcmZhY3QnO1xuaW1wb3J0IEdhbWVDb25zdGFudCBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lQ29uc3RhbnQnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgTWpDYXJkSWQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVmlzaWJsZSwgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgQ29sbGVjdFN5c3RlbSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9vYmplY3RzL0NvbGxlY3RTeXN0ZW0nO1xuaW1wb3J0IFRpbGVMYXllck9iamVjdCBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9vYmplY3RzL1RpbGVMYXllck9iamVjdCc7XG5pbXBvcnQgeyBUaWxlT2JqZWN0IH0gZnJvbSAnLi9UaWxlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBUaWxlTWFwT2JqZWN0IHtcbiAgX21heE1hcFdpZHRoID0gMDtcbiAgX21hcFJvdyA9IDA7XG4gIF9tYXBDb2wgPSAwO1xuICBfbGF5ZXJPZmZzZXRYID0gMDtcbiAgX2xheWVyT2Zmc2V0WSA9IDA7XG4gIF9tYXhMYXllckluZGV4ID0gMDtcbiAgX2xldmVsU3RyID0gXCJcIjtcbiAgX2Nhbk1hdGNoVGlsZXMgPSBuZXcgTWFwKCk7XG4gIF9jYXJkc0NvdW50ID0gMDtcbiAgX21hcExheWVycyA9IFtdO1xuICBfdGlsZU9iamVjdE1hcCA9IG5ldyBNYXAoKTtcbiAgX2lzU2ltdWxhdG9yID0gZmFsc2U7XG4gIF9hY3Rpb25JZHMgPSBbXTtcbiAgX3NlbGVjdFRpbGRJZHNNYXAgPSBuZXcgTWFwKCk7XG4gIF9oYXNDaGVja0JhdGNoSWRTZXQgPSBuZXcgU2V0KCk7XG4gIF9nYW1lQ29udGV4dCA9IG51bGw7XG4gIF9nYW1lVHlwZSA9IG51bGw7XG4gIF9jb2xsZWN0U3lzdGVtID0gbnVsbDtcbiAgZ2V0IGdhbWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lVHlwZTtcbiAgfVxuICBnZXQgaXNTaW11bGF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2ltdWxhdG9yO1xuICB9XG4gIGdldCBnYW1lQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbnRleHQ7XG4gIH1cbiAgZ2V0IGxheWVyT2Zmc2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5ZXJPZmZzZXRYO1xuICB9XG4gIGdldCBsYXllck9mZnNldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVyT2Zmc2V0WTtcbiAgfVxuICBnZXQgbWF4TGF5ZXJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4TGF5ZXJJbmRleDtcbiAgfVxuICBnZXQgbWF4TWFwV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heE1hcFdpZHRoO1xuICB9XG4gIGdldCBtYXBSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcFJvdztcbiAgfVxuICBnZXQgbWFwQ29sKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBDb2w7XG4gIH1cbiAgZ2V0IGNvbGxlY3RTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxlY3RTeXN0ZW07XG4gIH1cbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMuX2dhbWVDb250ZXh0ID0gZTtcbiAgICB0aGlzLl9nYW1lVHlwZSA9IGUuZ2FtZVR5cGU7XG4gIH1cbiAgc3RhdGljIGlzU3BlY2lhbENhcmRJZChlKSB7XG4gICAgcmV0dXJuIFtNakNhcmRJZC5lbVlvZ2FDYXJkSWQsIE1qQ2FyZElkLmVtQm9tYkNhcmRJZCwgTWpDYXJkSWQuZW1UcmF2ZWxFZ3lwdElkLCBNakNhcmRJZC5lbVJhbmtJZF0uaW5jbHVkZXMoZSk7XG4gIH1cbiAgZ2V0Q2FuTWF0Y2hUaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuTWF0Y2hUaWxlcztcbiAgfVxuICBnZXRMZXZlbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsU3RyO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2Nhbk1hdGNoVGlsZXMuY2xlYXIoKTtcbiAgICB0aGlzLl90aWxlT2JqZWN0TWFwLmNsZWFyKCk7XG4gICAgdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fbWF4TWFwV2lkdGggPSAwO1xuICAgIHRoaXMuX21hcFJvdyA9IDA7XG4gICAgdGhpcy5fbWFwQ29sID0gMDtcbiAgICB0aGlzLl9sYXllck9mZnNldFggPSAwO1xuICAgIHRoaXMuX2xheWVyT2Zmc2V0WSA9IDA7XG4gICAgdGhpcy5fbWF4TGF5ZXJJbmRleCA9IDA7XG4gICAgdGhpcy5fbGV2ZWxTdHIgPSBcIlwiO1xuICB9XG4gIGluaXRHYW1lTGF5ZXIoZSwgdCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLl9sZXZlbFN0ciA9IGU7XG4gICAgdmFyIG8gPSBMZXZlbERhdGFQYXJzZXIuY29udmVydFN0cmluZ1RvQ2FyZFRpbGVEYXRhc05ldyhlKTtcbiAgICB0aGlzLl9jYXJkc0NvdW50ID0gby5sZW5ndGg7XG4gICAgdmFyIG4gPSAtMSxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHIgPSAtMSxcbiAgICAgIGEgPSAtMTtcbiAgICB0aGlzLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLkNsYXNzaWMgJiYgdCAmJiB0aGlzLmFwcGx5Q2VudGVyT2Zmc2V0VG9DYXJkcyhvKTtcbiAgICBmb3IgKHZhciBzID0gW10sIGMgPSBuZXcgTWFwKCksIHUgPSBuZXcgTWFwKCksIGYgPSAwOyBmIDwgby5sZW5ndGg7IGYrKykge1xuICAgICAgdmFyIGQgPSBvW2ZdLFxuICAgICAgICBoID0gdGhpcy5nZXRTcGVMYXllcihkLnBvcy56KTtcbiAgICAgIGlmIChoKSB7XG4gICAgICAgIHZhciBtID0gZC5wb3MueCArIFwiLVwiICsgZC5wb3MueSArIFwiLVwiICsgZC5wb3MueixcbiAgICAgICAgICB2ID0gbmV3IFRpbGVPYmplY3QobSwgZCwgdGhpcyk7XG4gICAgICAgIHYuaW5pdCh0aGlzLl9nYW1lQ29udGV4dCwgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0Q2FyZENvbmZpZ01hcCgpKTtcbiAgICAgICAgaC5hZGRDYXJkKHYpO1xuICAgICAgICBzLnB1c2godik7XG4gICAgICAgIHRoaXMuX3RpbGVPYmplY3RNYXAuc2V0KG0sIHYpO1xuICAgICAgICB2YXIgZyA9IHYuZ3JpZFBvc1gsXG4gICAgICAgICAgXyA9IHYuZ3JpZFBvc1k7XG4gICAgICAgICghYy5oYXModi5sYXllcikgfHwgZyA8IGMuZ2V0KHYubGF5ZXIpKSAmJiBjLnNldCh2LmxheWVyLCBnKTtcbiAgICAgICAgKCF1Lmhhcyh2LmxheWVyKSB8fCBfIDwgdS5nZXQodi5sYXllcikpICYmIHUuc2V0KHYubGF5ZXIsIF8pO1xuICAgICAgICAoLTEgPT09IG4gfHwgZC5wb3MueCA8IG4pICYmIChuID0gZC5wb3MueCk7XG4gICAgICAgIGQucG9zLnggPiBpICYmIChpID0gZC5wb3MueCk7XG4gICAgICAgICgtMSA9PT0gciB8fCBkLnBvcy55IDwgcikgJiYgKHIgPSBkLnBvcy55KTtcbiAgICAgICAgZC5wb3MueSA+IGEgJiYgKGEgPSBkLnBvcy55KTtcbiAgICAgICAgaC5sYXllckluZGV4ID4gdGhpcy5fbWF4TGF5ZXJJbmRleCAmJiAodGhpcy5fbWF4TGF5ZXJJbmRleCA9IGgubGF5ZXJJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZml4U2luZ2xlQ2FyZCgpO1xuICAgIHRoaXMuX2xheWVyT2Zmc2V0WCA9IDA7XG4gICAgdGhpcy5fbGF5ZXJPZmZzZXRZID0gMDtcbiAgICBmb3IgKHZhciBUID0gYy5nZXQoMCksIEMgPSB1LmdldCgwKSwgYiA9IDE7IGIgPCB0aGlzLl9tYXBMYXllcnMubGVuZ3RoOyBiKyspIHtcbiAgICAgIHZhciBFID0gYy5nZXQoYiksXG4gICAgICAgIFMgPSB1LmdldChiKTtcbiAgICAgIHZvaWQgMCAhPT0gRSAmJiBFIDw9IFQgJiYgKHRoaXMuX2xheWVyT2Zmc2V0WCA9IGIpO1xuICAgICAgdm9pZCAwICE9PSBTICYmIFMgPD0gQyAmJiAodGhpcy5fbGF5ZXJPZmZzZXRZID0gYik7XG4gICAgfVxuICAgIHRoaXMuX21heE1hcFdpZHRoID0gTWF0aC5mbG9vcigoaSAtIG4pIC8gMikgKyAxO1xuICAgIHRoaXMuX21hcENvbCA9IGkgLSBuO1xuICAgIHRoaXMuX21hcFJvdyA9IGEgLSByO1xuICAgIHRoaXMudXBkYXRlVG91Y2hTaXplT2Zmc2V0cygpO1xuICAgIHJldHVybiB0aGlzLl9tYXBMYXllcnM7XG4gIH1cbiAgZ2V0Q2VudGVyKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZVswXS54LFxuICAgICAgciA9IGVbMF0ueCxcbiAgICAgIGEgPSBlWzBdLnksXG4gICAgICBsID0gZVswXS55O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMoZSksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSB7XG4gICAgICAgIHZhciB1ID0gYy52YWx1ZTtcbiAgICAgICAgdS54IDwgbiAmJiAobiA9IHUueCk7XG4gICAgICAgIHUueCA+IHIgJiYgKHIgPSB1LngpO1xuICAgICAgICB1LnkgPCBhICYmIChhID0gdS55KTtcbiAgICAgICAgdS55ID4gbCAmJiAobCA9IHUueSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNjLnYzKChuICsgcikgLyAyLCAoYSArIGwpIC8gMiwgMCk7XG4gIH1cbiAgdXBkYXRlUG9zaXRvbk9mZnNldCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0T2Zmc2V0WSgpO1xuICAgIGlmICh0aGlzLmdhbWVUeXBlICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRvbk9mZnNldEZvck5vcm1hbChlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdG9uT2Zmc2V0Rm9yQ2xhc3NpYyhlKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlUG9zaXRvbk9mZnNldEZvckNsYXNzaWMoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgbCA9IFtdLFxuICAgICAgcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyh0aGlzLl90aWxlT2JqZWN0TWFwLnZhbHVlcygpKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIGlmICgoSSA9IHAudmFsdWUpLmlzVmFsaWQpIHtcbiAgICAgICAgcyA9IEk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKG4gPSB1LnJldHVybikgJiYgbi5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzKSB7XG4gICAgICB2YXIgZiA9IDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCAtIDIsXG4gICAgICAgIGQgPSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFkgLSAyLFxuICAgICAgICBoID0gcy5jYXJkTGF5b3V0Q29uZmlnLFxuICAgICAgICB5ID0gcy5sYXlvdXRTY2FsZSxcbiAgICAgICAgbSA9IGNjLnYzKDAgKiAoaC5jYXJkU2l6ZVswXSArIGguY2FyZFNwYWNlWzBdKSAqIHksIC0wICogKGguY2FyZFNpemVbMV0gKyBoLmNhcmRTcGFjZVsxXSkgKiB5LCAwKSxcbiAgICAgICAgdiA9IGNjLnYzKDAuNSAqIGYgKiAoaC5jYXJkU2l6ZVswXSArIGguY2FyZFNwYWNlWzBdKSAqIHksIC0wICogKGguY2FyZFNpemVbMV0gKyBoLmNhcmRTcGFjZVsxXSkgKiB5LCAwKSxcbiAgICAgICAgZyA9IGNjLnYzKDAgKiAoaC5jYXJkU2l6ZVswXSArIGguY2FyZFNwYWNlWzBdKSAqIHksIC0wLjUgKiBkICogKGguY2FyZFNpemVbMV0gKyBoLmNhcmRTcGFjZVsxXSkgKiB5LCAwKSxcbiAgICAgICAgXyA9IGNjLnYzKDAuNSAqIGYgKiAoaC5jYXJkU2l6ZVswXSArIGguY2FyZFNwYWNlWzBdKSAqIHksIC0wLjUgKiBkICogKGguY2FyZFNpemVbMV0gKyBoLmNhcmRTcGFjZVsxXSkgKiB5LCAwKTtcbiAgICAgIGwucHVzaChtLCB2LCBnLCBfKTtcbiAgICAgIHZhciBUID0gdGhpcy5nZXRDZW50ZXIobCksXG4gICAgICAgIEMgPSBoLmNhcmRTaXplUmlnaHQsXG4gICAgICAgIGIgPSBjYy52MygtVC54ICsgQywgLVQueSArIGUgKyAwLCAwKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIEUgPSBfX3ZhbHVlcyh0aGlzLl90aWxlT2JqZWN0TWFwLnZhbHVlcygpKSwgUyA9IEUubmV4dCgpOyAhUy5kb25lOyBTID0gRS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgSSA9IFMudmFsdWU7XG4gICAgICAgICAgbnVsbCAhPSB0ICYmIEkuYmF0Y2hJZCAhPT0gdCB8fCAoSS5wb3NpdGlvbk9mZnNldCA9IGIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUyAmJiAhUy5kb25lICYmIChhID0gRS5yZXR1cm4pICYmIGEuY2FsbChFKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVQb3NpdG9uT2Zmc2V0Rm9yTm9ybWFsKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgcixcbiAgICAgIGEgPSBbXSxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkgaWYgKChkID0gYy52YWx1ZSkuaXNWYWxpZCkge1xuICAgICAgICBhLnB1c2goZC5nZXRQb3NpdGlvbih0cnVlKSk7XG4gICAgICAgIGwucHVzaChkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChvID0gcy5yZXR1cm4pICYmIG8uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdSA9IHRoaXMuZ2V0Q2VudGVyKGEpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGwpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgIHZhciBkO1xuICAgICAgICAgIChkID0gZi52YWx1ZSkucG9zaXRpb25PZmZzZXQgPSBjYy52MygtdS54LCAtdS55ICsgZSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmICYmICFmLmRvbmUgJiYgKHIgPSBwLnJldHVybikgJiYgci5jYWxsKHApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcGVuZENhcmQoZSkge1xuICAgIGlmICghZSB8fCAhZS5wb3MpIHJldHVybiBudWxsO1xuICAgIHZhciB0ID0gZS5wb3MueCArIFwiLVwiICsgZS5wb3MueSArIFwiLVwiICsgZS5wb3MuejtcbiAgICBpZiAodGhpcy5fdGlsZU9iamVjdE1hcC5oYXModCkpIHJldHVybiBudWxsO1xuICAgIHZhciBvID0gdGhpcy5nZXRTcGVMYXllcihlLnBvcy56KTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSBuZXcgVGlsZU9iamVjdCh0LCBlLCB0aGlzKTtcbiAgICAgIG4uaW5pdCh0aGlzLl9nYW1lQ29udGV4dCwgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0Q2FyZENvbmZpZ01hcCgpKTtcbiAgICAgIG8uYWRkQ2FyZChuKTtcbiAgICAgIHRoaXMuX3RpbGVPYmplY3RNYXAuc2V0KHQsIG4pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbW92ZUNhcmQoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0U3BlTGF5ZXIoZS5sYXllcik7XG4gICAgICBpZiAodCkge1xuICAgICAgICB0LnJlbW92ZUNhcmQoZSk7XG4gICAgICAgIHRoaXMuX3RpbGVPYmplY3RNYXAuZGVsZXRlKGUuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVJbml0R2FtZUxheWVyKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgciA9IC0xLFxuICAgICAgYSA9IC0xLFxuICAgICAgbCA9IC0xLFxuICAgICAgcyA9IC0xO1xuICAgIHRoaXMuX21heExheWVySW5kZXggPSAwO1xuICAgIHZhciBjID0gbmV3IE1hcCgpLFxuICAgICAgdSA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGYudmFsdWU7XG4gICAgICAgICghYy5oYXMoZC5sYXllcikgfHwgZC5ncmlkUG9zWCA8IGMuZ2V0KGQubGF5ZXIpKSAmJiBjLnNldChkLmxheWVyLCBkLmdyaWRQb3NYKTtcbiAgICAgICAgKCF1LmhhcyhkLmxheWVyKSB8fCBkLmdyaWRQb3NZIDwgdS5nZXQoZC5sYXllcikpICYmIHUuc2V0KGQubGF5ZXIsIGQuZ3JpZFBvc1kpO1xuICAgICAgICAoLTEgPT09IHIgfHwgZC5wb3MueCA8IHIpICYmIChyID0gZC5wb3MueCk7XG4gICAgICAgIGQucG9zLnggPiBhICYmIChhID0gZC5wb3MueCk7XG4gICAgICAgICgtMSA9PT0gbCB8fCBkLnBvcy55IDwgbCkgJiYgKGwgPSBkLnBvcy55KTtcbiAgICAgICAgZC5wb3MueSA+IHMgJiYgKHMgPSBkLnBvcy55KTtcbiAgICAgICAgZC5sYXllciA+IHRoaXMuX21heExheWVySW5kZXggJiYgKHRoaXMuX21heExheWVySW5kZXggPSBkLmxheWVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmICh0ID0gcC5yZXR1cm4pICYmIHQuY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9sYXllck9mZnNldFggPSAwO1xuICAgIHRoaXMuX2xheWVyT2Zmc2V0WSA9IDA7XG4gICAgdmFyIGggPSBjLmdldCgwKSxcbiAgICAgIHkgPSB1LmdldCgwKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbSA9IF9fdmFsdWVzKGMua2V5cygpKSwgdiA9IG0ubmV4dCgpOyAhdi5kb25lOyB2ID0gbS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGcgPSB2LnZhbHVlLFxuICAgICAgICAgIF8gPSBjLmdldChnKSxcbiAgICAgICAgICBUID0gdS5nZXQoZyk7XG4gICAgICAgIHZvaWQgMCAhPT0gXyAmJiBfIDw9IGggJiYgKHRoaXMuX2xheWVyT2Zmc2V0WCA9IGcpO1xuICAgICAgICB2b2lkIDAgIT09IFQgJiYgVCA8PSB5ICYmICh0aGlzLl9sYXllck9mZnNldFkgPSBnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiAmJiAhdi5kb25lICYmIChuID0gbS5yZXR1cm4pICYmIG4uY2FsbChtKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9tYXhNYXBXaWR0aCA9IE1hdGguZmxvb3IoKGEgLSByKSAvIDIpICsgMTtcbiAgICB0aGlzLl9tYXBDb2wgPSBhIC0gcjtcbiAgICB0aGlzLl9tYXBSb3cgPSBzIC0gbDtcbiAgICB0aGlzLnVwZGF0ZVRvdWNoU2l6ZU9mZnNldHMoKTtcbiAgfVxuICBnZXRSZW1haW5Db3VudCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkgci52YWx1ZS5pc1ZhbGlkICYmIG8rKztcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBtb3ZlVGlsZVRvUG9zaXRpb24oZSwgdCwgbywgbikge1xuICAgIHZhciBpID0gZS5sYXllcjtcbiAgICBpIDwgdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aCAmJiB0aGlzLl9tYXBMYXllcnNbaV0ucmVtb3ZlQ2FyZChlKTtcbiAgICBlLnJlZnJlc2hPd25lckdyaWRJZHModCwgbywgbik7XG4gICAgdGhpcy5nZXRTcGVMYXllcihuKS5hZGRDYXJkKGUpO1xuICB9XG4gIHN3YXBUaWxlUG9zaXRpb25zKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KGUpLFxuICAgICAgbiA9IHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KHQpO1xuICAgIGlmIChvICYmIG4pIHtcbiAgICAgIHZhciBpID0ge1xuICAgICAgICAgIHg6IG8uZ3JpZFBvc1gsXG4gICAgICAgICAgeTogby5ncmlkUG9zWSxcbiAgICAgICAgICB6OiBvLmxheWVyXG4gICAgICAgIH0sXG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgeDogbi5ncmlkUG9zWCxcbiAgICAgICAgICB5OiBuLmdyaWRQb3NZLFxuICAgICAgICAgIHo6IG4ubGF5ZXJcbiAgICAgICAgfTtcbiAgICAgIHRoaXMuX21hcExheWVyc1tpLnpdLnJlbW92ZUNhcmQobyk7XG4gICAgICB0aGlzLl9tYXBMYXllcnNbci56XS5yZW1vdmVDYXJkKG4pO1xuICAgICAgby5yZWZyZXNoT3duZXJHcmlkSWRzKHIueCwgci55LCByLnopO1xuICAgICAgdGhpcy5nZXRTcGVMYXllcihyLnopLmFkZENhcmQobyk7XG4gICAgICBuLnJlZnJlc2hPd25lckdyaWRJZHMoaS54LCBpLnksIGkueik7XG4gICAgICB0aGlzLmdldFNwZUxheWVyKGkueikuYWRkQ2FyZChuKTtcbiAgICB9XG4gIH1cbiAgYXBwbHlDZW50ZXJPZmZzZXRUb0FsbFRpbGVzKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSB0aGlzLmdldEN1cnJlbnRDZW50ZXJPZmZzZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IHIudmFsdWU7XG4gICAgICAgIGlmIChhLmlzVmFsaWQpIHtcbiAgICAgICAgICB2YXIgbCA9IGEuZ3JpZFBvc1gsXG4gICAgICAgICAgICBzID0gYS5ncmlkUG9zWSxcbiAgICAgICAgICAgIGMgPSBhLmxheWVyLFxuICAgICAgICAgICAgdSA9IHRoaXMuYXBwbHlPZmZzZXRUb1Bvc2l0aW9uKGwsIHMsIG8pO1xuICAgICAgICAgIGEucmVmcmVzaE93bmVyR3JpZElkcyh1LngsIHUueSwgYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRDdXJyZW50Q2VudGVyT2Zmc2V0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IHIudmFsdWU7XG4gICAgICAgIGEuaXNWYWxpZCAmJiBvLnB1c2goe1xuICAgICAgICAgIGlkOiBhLnJlc0lkLFxuICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgeDogYS5ncmlkUG9zWCxcbiAgICAgICAgICAgIHk6IGEuZ3JpZFBvc1ksXG4gICAgICAgICAgICB6OiBhLmxheWVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0FsaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwID09PSBvLmxlbmd0aCA/IHtcbiAgICAgIGNlbnRlck9mZnNldFg6IDAsXG4gICAgICBjZW50ZXJPZmZzZXRZOiAwLFxuICAgICAgb3JpZ2luYWxTdGFydFg6IDAsXG4gICAgICBvcmlnaW5hbFN0YXJ0WTogMFxuICAgIH0gOiB0aGlzLmNhbGN1bGF0ZUNlbnRlck9mZnNldChvKTtcbiAgfVxuICBmaXhTaW5nbGVDYXJkKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSB0aGlzLFxuICAgICAgbiA9IHRoaXMuX2dhbWVDb250ZXh0LmdhbWVUeXBlO1xuICAgIGlmIChuID09PSBNakdhbWVUeXBlLk5vcm1hbCB8fCBuID09PSBNakdhbWVUeXBlLlRyYXZlbCB8fCBuID09PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlIHx8IG4gPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIHZhciBsID0gZnVuY3Rpb24gbChlKSB7XG4gICAgICAgICAgby5jaGFuZ2VUaWxlUmVzSWQoZS5pZCwgMCk7XG4gICAgICAgICAgbiA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiBlLnNldFR5cGVCaXRzKDApO1xuICAgICAgICB9LFxuICAgICAgICBzID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fdGlsZU9iamVjdE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHMuaGFzKGUuY2FyZElkKSB8fCBzLnNldChlLmNhcmRJZCwgW10pO1xuICAgICAgICBzLmdldChlLmNhcmRJZCkucHVzaChlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGMgPSBbXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhzKSwgZiA9IHUubmV4dCgpOyAhZi5kb25lOyBmID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgZCA9IF9fcmVhZChmLnZhbHVlLCAyKSxcbiAgICAgICAgICAgIGggPSBkWzBdLFxuICAgICAgICAgICAgeSA9IGRbMV07XG4gICAgICAgICAgaWYgKHkubGVuZ3RoICUgMiAhPSAwKSB7XG4gICAgICAgICAgICBpZiAobiA9PT0gTWpHYW1lVHlwZS5UcmF2ZWwgJiYgaCA9PT0gTWpDYXJkSWQuZW1Zb2dhQ2FyZElkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGMucHVzaC5hcHBseShjLCBbLi4ueV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBlID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAodCA9IHUucmV0dXJuKSAmJiB0LmNhbGwodSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGMubGVuZ3RoID4gMCAmJiBjLmxlbmd0aCAlIDIgPT0gMCAmJiBjLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbChlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG4gPT09IE1qR2FtZVR5cGUuTm9ybWFsIHx8IG4gPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UgfHwgbiA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgICB2YXIgbSA9IE1qQ2FyZElkLmVtWW9nYUNhcmRJZDtcbiAgICAgICAgaWYgKHMuaGFzKG0pKSB7XG4gICAgICAgICAgdmFyIHYgPSBzLmdldChtKTtcbiAgICAgICAgICB2ICYmIHYubGVuZ3RoID4gMCAmJiB2Lmxlbmd0aCAlIDIgPT0gMCAmJiB2LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGwoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZml4Q2xhc3NpY1NpbmdsZUNhcmQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLFxuICAgICAgbCA9IFtdO1xuICAgIHRoaXMuX3RpbGVPYmplY3RNYXAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5pc1ZhbGlkICYmIGwucHVzaChlKTtcbiAgICB9KTtcbiAgICBsLmxlbmd0aDtcbiAgICB2YXIgcyA9IG5ldyBNYXAoKTtcbiAgICBsLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZS5jYXJkSWQ7XG4gICAgICBzLmhhcyh0KSB8fCBzLnNldCh0LCBbXSk7XG4gICAgICB2YXIgbyA9IHMuZ2V0KHQpO1xuICAgICAgby5wdXNoKGUpO1xuICAgICAgaWYgKG8ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgby5zcGxpY2UoMCwgMik7XG4gICAgICAgIDAgPT09IG8ubGVuZ3RoICYmIHMuZGVsZXRlKHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBjID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhzKSwgZiA9IHUubmV4dCgpOyAhZi5kb25lOyBmID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBfX3JlYWQoZi52YWx1ZSwgMiksXG4gICAgICAgICAgaCA9IGRbMF0sXG4gICAgICAgICAgeSA9IGRbMV07XG4gICAgICAgIChlIHx8IGggIT09IE1qQ2FyZElkLmVtWW9nYUNhcmRJZCkgJiYgYy5wdXNoLmFwcGx5KGMsIFsuLi55XSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IHUucmV0dXJuKSAmJiBvLmNhbGwodSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgIT09IGMubGVuZ3RoKSBpZiAoYy5sZW5ndGggJSAyID09IDApIGMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgbi5jaGFuZ2VUaWxlUmVzSWQoZS5pZCwgMCk7XG4gICAgfSk7ZWxzZSB7XG4gICAgICBjW2MubGVuZ3RoIC0gMV0uaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBjLmxlbmd0aCAtIDE7IG0rKykgdGhpcy5jaGFuZ2VUaWxlUmVzSWQoY1ttXS5pZCwgMCk7XG4gICAgfVxuICB9XG4gIGdldFNwZUxheWVyKGUpIHtcbiAgICBpZiAoZSArIDEgPiB0aGlzLl9tYXBMYXllcnMubGVuZ3RoKSBmb3IgKHZhciB0ID0gZSArIDEgLSB0aGlzLl9tYXBMYXllcnMubGVuZ3RoLCBvID0gMDsgbyA8IHQ7IG8rKykge1xuICAgICAgdmFyIG4gPSBuZXcgVGlsZUxheWVyT2JqZWN0KHRoaXMuX21hcExheWVycy5sZW5ndGgpO1xuICAgICAgdGhpcy5fbWFwTGF5ZXJzLnB1c2gobik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tYXBMYXllcnNbZV07XG4gIH1cbiAgbWFwTGF5ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBMYXllcnM7XG4gIH1cbiAgZ2V0VGlsZU9iamVjdChlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KGUpO1xuICB9XG4gIHRpbGVPYmplY3RNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGVPYmplY3RNYXA7XG4gIH1cbiAgaXNIYXNDYXJkKGUsIHQpIHtcbiAgICByZXR1cm4gZSA8IHRoaXMuX21hcExheWVycy5sZW5ndGggJiYgdGhpcy5fbWFwTGF5ZXJzW2VdLmlzSGFzQ2FyZCh0KTtcbiAgfVxuICBnZXRUaWxlT2JqZWN0QnlHcmlkSW5kZXgoZSwgdCkge1xuICAgIGlmIChlIDwgdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aCkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9tYXBMYXllcnNbZV0uZ2V0R3JpZENhcmQodCk7XG4gICAgICBpZiAobyAmJiBvLmlzVmFsaWQpIHJldHVybiBvO1xuICAgIH1cbiAgfVxuICBpc0hhc0NvdmVyKGUpIHtcbiAgICBpZiAodGhpcy5fZ2FtZUNvbnRleHQuZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIHZhciB0ID0gZS5sYXllciArIDE7XG4gICAgICBpZiAodCA9PSB0aGlzLl9tYXBMYXllcnMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUub3duZXJHcmlkSWRzLmxlbmd0aDsgbysrKSBpZiAodGhpcy5pc0hhc0NhcmQodCwgZS5vd25lckdyaWRJZHNbb10pKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgbiA9IGUubGF5ZXIgKyAxOyBuIDwgdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aDsgbisrKSBmb3IgKG8gPSAwOyBvIDwgZS5vd25lckdyaWRJZHMubGVuZ3RoOyBvKyspIGlmICh0aGlzLmlzSGFzQ2FyZChuLCBlLm93bmVyR3JpZElkc1tvXSkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpc0hhc0NvdmVyV2l0aE91dFRpbGVzKGUsIHQpIHtcbiAgICBmb3IgKHZhciBvID0gZS5sYXllciArIDE7IG8gPCB0aGlzLl9tYXBMYXllcnMubGVuZ3RoOyBvKyspIGZvciAodmFyIG4gPSAwOyBuIDwgZS5vd25lckdyaWRJZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRUaWxlT2JqZWN0QnlHcmlkSW5kZXgobywgZS5vd25lckdyaWRJZHNbbl0pO1xuICAgICAgaWYgKGkgJiYgIXQuaW5jbHVkZXMoaS5pZCkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNIYXNDb3ZlcldpdGhPdXRUaWxlc190aWxlMihlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IGUubGF5ZXIgKyAxOyBvIDwgdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aDsgbysrKSBmb3IgKHZhciBuID0gMDsgbiA8IGUub3duZXJHcmlkSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0VGlsZU9iamVjdEJ5R3JpZEluZGV4KG8sIGUub3duZXJHcmlkSWRzW25dKTtcbiAgICAgIGlmIChpICYmICF0LmluY2x1ZGVzKGkuaWQpICYmICFpLmdldElzSW5TbG90QmFyKCkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNIYXNWaXNpYmxlKGUsIHQgPSBmYWxzZSkge1xuICAgIGlmICghZS5pc1ZhbGlkKSByZXR1cm4gRVRpbGVWaXNpYmxlLk5vbmU7XG4gICAgZm9yICh2YXIgbyA9IEVUaWxlVmlzaWJsZS5BbGwsIG4gPSB0ID8gZS5sYXllciArIDIgOiB0aGlzLl9tYXBMYXllcnMubGVuZ3RoLCBpID0gZS5sYXllciArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgIHRoaXMuaXNIYXNDYXJkKGksIGUub3duZXJHcmlkSWRzWzBdKSAmJiAobyAmPSB+RVRpbGVWaXNpYmxlLkxlZnRUb3ApO1xuICAgICAgdGhpcy5pc0hhc0NhcmQoaSwgZS5vd25lckdyaWRJZHNbMV0pICYmIChvICY9IH5FVGlsZVZpc2libGUuUmlnaHRUb3ApO1xuICAgICAgdGhpcy5pc0hhc0NhcmQoaSwgZS5vd25lckdyaWRJZHNbMl0pICYmIChvICY9IH5FVGlsZVZpc2libGUuTGVmdEJvdHRvbSk7XG4gICAgICB0aGlzLmlzSGFzQ2FyZChpLCBlLm93bmVyR3JpZElkc1szXSkgJiYgKG8gJj0gfkVUaWxlVmlzaWJsZS5SaWdodEJvdHRvbSk7XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIGlzQ2FyZExvY2soZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGlmICh0aGlzLmlzSGFzQ292ZXIoZSkpIHJldHVybiAyO1xuICAgIHQgPSB0aGlzLmlzSGFzTGVmdChlKTtcbiAgICBvID0gdGhpcy5pc0hhc1JpZ2h0KGUpO1xuICAgIHJldHVybiB0ICYmIG8gPyAxIDogMDtcbiAgfVxuICBpc0hhc0xlZnQoZSkge1xuICAgIHJldHVybiBlLmlzSGFzTGVmdCgpO1xuICB9XG4gIGlzSGFzUmlnaHQoZSkge1xuICAgIHJldHVybiBlLmlzSGFzUmlnaHQoKTtcbiAgfVxuICBpc0hhc1VwKGUpIHtcbiAgICByZXR1cm4gZS5pc0hhc1VwKCk7XG4gIH1cbiAgaXNIYXNEb3duKGUpIHtcbiAgICByZXR1cm4gZS5pc0hhc0Rvd24oKTtcbiAgfVxuICBpc09ubHlIYXNMZWZ0UmlnaHQoZSkge1xuICAgIHJldHVybiAxID09PSB0aGlzLmlzQ2FyZExvY2soZSk7XG4gIH1cbiAgZ2V0QWRqYWNlbnRVcENhcmRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gW10sXG4gICAgICByID0gZS5sYXllciArIDE7XG4gICAgaWYgKHIgPCB0aGlzLl9tYXBMYXllcnMubGVuZ3RoKSB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKGUub3duZXJHcmlkSWRzKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5pc0hhc0NhcmQociwgcykpIHtcbiAgICAgICAgICB2YXIgYyA9IHRoaXMuX21hcExheWVyc1tyXS5nZXRHcmlkQ2FyZChzKTtcbiAgICAgICAgICBjICYmIGMgIT09IGUgJiYgbi5wdXNoKGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobyA9IGEucmV0dXJuKSAmJiBvLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgZ2V0QWRqYWNlbnRMZWZ0Q2FyZHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKGUub3duZXJHcmlkSWRzKSwgYSA9IHIubmV4dCgpOyAhYS5kb25lOyBhID0gci5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSBhLnZhbHVlO1xuICAgICAgICBpZiAobCAlICgyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpID4gMCkge1xuICAgICAgICAgIHZhciBzID0gbCAtIDE7XG4gICAgICAgICAgaWYgKHRoaXMuaXNIYXNDYXJkKGUubGF5ZXIsIHMpKSB7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMuX21hcExheWVyc1tlLmxheWVyXS5nZXRHcmlkQ2FyZChzKTtcbiAgICAgICAgICAgIHUgJiYgdSAhPT0gZSAmJiBuLnB1c2godSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAobyA9IHIucmV0dXJuKSAmJiBvLmNhbGwocik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgZ2V0QWRqYWNlbnRSaWdodENhcmRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhlLm93bmVyR3JpZElkcyksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgaWYgKGwgJSAoMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYKSA8IDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCAtIDEpIHtcbiAgICAgICAgICB2YXIgcyA9IGwgKyAxO1xuICAgICAgICAgIGlmICh0aGlzLmlzSGFzQ2FyZChlLmxheWVyLCBzKSkge1xuICAgICAgICAgICAgdmFyIHUgPSB0aGlzLl9tYXBMYXllcnNbZS5sYXllcl0uZ2V0R3JpZENhcmQocyk7XG4gICAgICAgICAgICB1ICYmIHUgIT09IGUgJiYgbi5wdXNoKHUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIGdldEFkamFjZW50TG9ja0NhcmRzKGUpIHtcbiAgICB2YXIgdCA9IFtdLFxuICAgICAgbyA9IHRoaXMuZ2V0QWRqYWNlbnRVcENhcmRzKGUpO1xuICAgIGlmIChvLmxlbmd0aCkgdCA9IG87ZWxzZSB7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2V0QWRqYWNlbnRMZWZ0Q2FyZHMoZSksXG4gICAgICAgIGkgPSB0aGlzLmdldEFkamFjZW50UmlnaHRDYXJkcyhlKTtcbiAgICAgIHQgPSBbLi4ubiwgLi4uaV07XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIGNoZWNrSXNMb2NrKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0VGlsZU9iamVjdChlKTtcbiAgICByZXR1cm4gISF0ICYmIDAgIT0gdGhpcy5pc0NhcmRMb2NrKHQpO1xuICB9XG4gIGdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSB7XG4gICAgdmFyIGUgPSAwO1xuICAgIHRoaXMuX2Nhbk1hdGNoVGlsZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgZSArPSBNYXRoLmZsb29yKHQubGVuZ3RoIC8gMik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgdXBkYXRlQ2FuTWF0Y2hUaWxlcygpIHtcbiAgICB2YXIgZSwgdDtcbiAgICB0aGlzLl9jYW5NYXRjaFRpbGVzLmNsZWFyKCk7XG4gICAgZm9yICh2YXIgbyA9IHRoaXMuX21hcExheWVycy5sZW5ndGggLSAxOyBvID49IDA7IG8tLSkgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSAoZSA9IHZvaWQgMCwgX192YWx1ZXModGhpcy5fbWFwTGF5ZXJzW29dLmFsbENhcmRzKSksIHIgPSBuLm5leHQoKTsgIXIuZG9uZTsgciA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBhID0gci52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNMb2NrKGEuaWQpICYmIGEuaXNWYWxpZCAmJiAhYS5nZW5lcmF0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fY2FuTWF0Y2hUaWxlcy5oYXMoYS5jYXJkSWQpIHx8IHRoaXMuX2Nhbk1hdGNoVGlsZXMuc2V0KGEuY2FyZElkLCBbXSk7XG4gICAgICAgICAgdGhpcy5fY2FuTWF0Y2hUaWxlcy5nZXQoYS5jYXJkSWQpLnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRDYW5NYXRjaFRpbGVzSGludCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q2FuTWF0Y2hUaWxlcygpLFxuICAgICAgdCA9IFtdO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5sZW5ndGggPj0gMiAmJiB0LnB1c2goZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgZ2V0QWxsQ2FyZFRpbGVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaXNWYWxpZDtcbiAgICB9KTtcbiAgfVxuICBnZXRWYWxpZFRpbGVPYmplY3RzKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IHIudmFsdWU7XG4gICAgICAgIGEuaXNWYWxpZCAmJiBvLnB1c2goYSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAodCA9IG4ucmV0dXJuKSAmJiB0LmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgY29tcGFyZShlLCB0KSB7XG4gICAgcmV0dXJuIG51bGwgIT0gZSAmJiBudWxsICE9IHQgJiYgMCAhPSBlLmlzVmFsaWQgJiYgMCAhPSB0LmlzVmFsaWQgJiYgZS5jYXJkSWQgPT0gdC5jYXJkSWQ7XG4gIH1cbiAgcHVzaEFjdGlvbklkKGUpIHtcbiAgICB0aGlzLl9hY3Rpb25JZHMucHVzaChlKTtcbiAgICB0aGlzLl9hY3Rpb25JZHMubGVuZ3RoID4gMiAmJiB0aGlzLl9hY3Rpb25JZHMuc2hpZnQoKTtcbiAgfVxuICBkZWxldGVMYXN0QWN0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbklkcy5sZW5ndGggPiAwID8gdGhpcy5fYWN0aW9uSWRzLnNoaWZ0KCkgOiBudWxsO1xuICB9XG4gIGdldEFjdGlvbklkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uSWRzO1xuICB9XG4gIHNlbGNlY3RUaWxlSWQoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fdGlsZU9iamVjdE1hcC5nZXQoZSk7XG4gICAgaWYgKG8gJiYgby5pc1ZhbGlkKSB7XG4gICAgICBvLl9pc1NlbGVjdCA9IHQ7XG4gICAgICB0aGlzLl9zZWxlY3RUaWxkSWRzTWFwLnNldChlLCB0KTtcbiAgICB9XG4gIH1cbiAgZ2V0U2VsZWN0VGlsZUlkcygpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gW107XG4gICAgdGhpcy5fc2VsZWN0VGlsZElkc01hcC5mb3JFYWNoKGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgICBvICYmIGUuX3RpbGVPYmplY3RNYXAuZ2V0KG4pLmlzVmFsaWQgJiYgdC5wdXNoKG4pO1xuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIHVuc2VsZWN0QWxsVGlsZUlkcyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IFtdO1xuICAgIHRoaXMuX3NlbGVjdFRpbGRJZHNNYXAuZm9yRWFjaChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgaWYgKGkgIT09IGUgJiYgbiAmJiB0Ll90aWxlT2JqZWN0TWFwLmdldChpKS5pc1ZhbGlkKSB7XG4gICAgICAgIHQuc2VsY2VjdFRpbGVJZChpLCBmYWxzZSk7XG4gICAgICAgIG8ucHVzaChpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBjYW5DbGVhcihlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IFtdO1xuICAgIHRoaXMuX3NlbGVjdFRpbGRJZHNNYXAuZm9yRWFjaChmdW5jdGlvbiAoZSwgbikge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIGkgPSB0Ll90aWxlT2JqZWN0TWFwLmdldChuKTtcbiAgICAgICAgaSAmJiBpLmlzVmFsaWQgJiYgby5wdXNoKG4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGUgJiYgby5wdXNoKGUpO1xuICAgIGlmICgyID09PSBvLmxlbmd0aCAmJiBvWzBdICE9PSBvWzFdKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KG9bMF0pLFxuICAgICAgICBpID0gdGhpcy5fdGlsZU9iamVjdE1hcC5nZXQob1sxXSk7XG4gICAgICBpZiAobiAmJiBpICYmIG4uaXNWYWxpZCAmJiBpLmlzVmFsaWQpIHJldHVybiBuLmNhcmRJZCA9PSBpLmNhcmRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldElzU2VsZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KGUpO1xuICAgIHJldHVybiAhKCF0IHx8ICF0LmlzVmFsaWQpICYmIHQuaXNTZWxlY3Q7XG4gIH1cbiAgZ2V0TWF0Y2hUaWxlSWRzKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBbXTtcbiAgICB0aGlzLl9zZWxlY3RUaWxkSWRzTWFwLmZvckVhY2goZnVuY3Rpb24gKG8sIG4pIHtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciBpID0gZS5fdGlsZU9iamVjdE1hcC5nZXQobik7XG4gICAgICAgIGkgJiYgaS5pc1ZhbGlkICYmIHQucHVzaChuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgbyA9IFtdO1xuICAgIGlmICgyID09PSB0Lmxlbmd0aCAmJiB0WzBdICE9PSB0WzFdKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KHRbMF0pLFxuICAgICAgICBpID0gdGhpcy5fdGlsZU9iamVjdE1hcC5nZXQodFsxXSk7XG4gICAgICBpZiAobiAmJiBpICYmIG4uaXNWYWxpZCAmJiBpLmlzVmFsaWQgJiYgbi5jYXJkSWQgPT0gaS5jYXJkSWQpIHtcbiAgICAgICAgby5wdXNoKHRbMF0pO1xuICAgICAgICBvLnB1c2godFsxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIG9uQ2xlYXIoZSkge1xuICAgIGlmIChlICYmIGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5yZWNvcmRDbGVhcihlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS50b0tleSgpO1xuICAgICAgfSkpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5UaWxlTWFwT2JqZWN0X09uQ2xlYXIsIGUpO1xuICAgIH1cbiAgfVxuICBjbGVhcihlID0gZmFsc2UpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSB0aGlzO1xuICAgIHZhciBuID0gW107XG4gICAgdGhpcy5fc2VsZWN0VGlsZElkc01hcC5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgaSA9IG8uX3RpbGVPYmplY3RNYXAuZ2V0KHQpO1xuICAgICAgICBpICYmIGkuaXNWYWxpZCAmJiBuLnB1c2godCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGkgPSBmYWxzZTtcbiAgICBpZiAoMiA9PT0gbi5sZW5ndGggJiYgblswXSAhPT0gblsxXSkge1xuICAgICAgdmFyIHIgPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChuWzBdKSxcbiAgICAgICAgYSA9IHRoaXMuX3RpbGVPYmplY3RNYXAuZ2V0KG5bMV0pO1xuICAgICAgciAmJiBhICYmIHIuaXNWYWxpZCAmJiBhLmlzVmFsaWQgJiYgKGkgPSByLmNhcmRJZCA9PSBhLmNhcmRJZCk7XG4gICAgfVxuICAgIGlmIChpKSB7XG4gICAgICB2YXIgbCA9IHtcbiAgICAgICAgICB0aWxlSWRzOiBbXSxcbiAgICAgICAgICBmcm9tOiBFQ29sbGVjdEZyb20uRnJvbUNsZWFyXG4gICAgICAgIH0sXG4gICAgICAgIGMgPSBbXTtcbiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IG8uX3RpbGVPYmplY3RNYXAuZ2V0KGUpO1xuICAgICAgICBvLnNlbGNlY3RUaWxlSWQoZSwgZmFsc2UpO1xuICAgICAgICBpZiAodCAmJiB0LmlzVmFsaWQpIHtcbiAgICAgICAgICB0LmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICBsLnRpbGVJZHMucHVzaChlKTtcbiAgICAgICAgICBjLnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkNsZWFyKGMpO1xuICAgICAgbnVsbCA9PT0gKHQgPSB0aGlzLmNvbGxlY3RTeXN0ZW0pIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmFkZENvbGxlY3RUYXJnZXQobCk7XG4gICAgfVxuICAgIGUgfHwgdGhpcy51cGRhdGVUb3VjaFNpemVPZmZzZXRzKCk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgY2xlYXJUaWxlKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4gPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlKTtcbiAgICBpZiAobiAmJiBuLmlzVmFsaWQpIHtcbiAgICAgIG4uaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgdmFyIGkgPSB7XG4gICAgICAgIHRpbGVJZHM6IFtlXSxcbiAgICAgICAgZnJvbTogdFxuICAgICAgfTtcbiAgICAgIG51bGwgPT09IChvID0gdGhpcy5jb2xsZWN0U3lzdGVtKSB8fCB2b2lkIDAgPT09IG8gfHwgby5hZGRDb2xsZWN0VGFyZ2V0KGkpO1xuICAgICAgdGhpcy5vbkNsZWFyKFtuXSk7XG4gICAgfVxuICB9XG4gIGNsZWFyU2xvdFRpbGUyVGlsZXMoZSwgdCkge1xuICAgIHZhciBvO1xuICAgIGlmICgyICE9IGUubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG4gPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlWzBdKSxcbiAgICAgIGkgPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlWzFdKTtcbiAgICBpZiAobiAmJiBpICYmIG4uaXNWYWxpZCAmJiBpLmlzVmFsaWQpIHtcbiAgICAgIG4uaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgaS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICB2YXIgciA9IHtcbiAgICAgICAgdGlsZUlkczogZSxcbiAgICAgICAgZnJvbTogdFxuICAgICAgfTtcbiAgICAgIG51bGwgPT09IChvID0gdGhpcy5jb2xsZWN0U3lzdGVtKSB8fCB2b2lkIDAgPT09IG8gfHwgby5hZGRDb2xsZWN0VGFyZ2V0KHIpO1xuICAgICAgdGhpcy5vbkNsZWFyKFtuLCBpXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldEN1ckFsbExvY2tDYXJkcygpIHtcbiAgICBmb3IgKHZhciBlID0gW10sIHQgPSBbXSwgbyA9IDA7IG8gPCB0aGlzLl9tYXBMYXllcnMubGVuZ3RoOyBvKyspIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy5fbWFwTGF5ZXJzW29dLmFsbENhcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuX21hcExheWVyc1tvXS5hbGxDYXJkc1tuXTtcbiAgICAgIGkuaXNWYWxpZCAmJiAodGhpcy5pc0NhcmRMb2NrKGkpID8gZS5wdXNoKGkuaWQpIDogdC5wdXNoKGkuaWQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2tDYXJkSWRzOiBlLFxuICAgICAgdW5Mb2NrQ2FyZElkczogdFxuICAgIH07XG4gIH1cbiAgdXBkYXRlVG91Y2hTaXplT2Zmc2V0cygpIHtcbiAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuX21hcExheWVycy5sZW5ndGg7IGUrKykgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLl9tYXBMYXllcnNbZV0uYWxsQ2FyZHMubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciBvID0gdGhpcy5fbWFwTGF5ZXJzW2VdLmFsbENhcmRzW3RdO1xuICAgICAgdGhpcy51cGRhdGVUb3VjaFNpemVPZmZzZXRzQnlUaWxlKG8pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGVNYXBPYmpfdXBkVGNoU3pcIilcbiAgdXBkYXRlVG91Y2hTaXplT2Zmc2V0c0J5VGlsZShlKSB7XG4gICAgZS51cGRhdGVUb3VjaFNpemVPZmZzZXRzKFswLCAwLCAwLCAwXSk7XG4gIH1cbiAgZ2V0QWxpdmVDYXJkQnlQb3MoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcy5fbWFwTGF5ZXJzW29dO1xuICAgIGlmICghbikgcmV0dXJuIG51bGw7XG4gICAgdmFyIGkgPSBlICsgdCAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYICogMixcbiAgICAgIHIgPSBuLmdldEdyaWRDYXJkKGkpO1xuICAgIHJldHVybiByICYmIHIuaXNWYWxpZCA/IHIgOiBudWxsO1xuICB9XG4gIGdldEN1clRpbGVzQ250KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgciA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyh0aGlzLl9tYXBMYXllcnMpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgYyA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyhzLmFsbENhcmRzKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB1LnZhbHVlLmlzVmFsaWQgJiYgcisrO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdSAmJiAhdS5kb25lICYmIChuID0gYy5yZXR1cm4pICYmIG4uY2FsbChjKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAodCA9IGEucmV0dXJuKSAmJiB0LmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgYWxpdmVUaWxlQ291bnQoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICByID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKHRoaXMuX21hcExheWVycyksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBjID0gKG8gPSB2b2lkIDAsIF9fdmFsdWVzKHMuYWxsQ2FyZHMpKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHUudmFsdWUuaXNWYWxpZCAmJiByKys7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG4gPSBjLnJldHVybikgJiYgbi5jYWxsKGMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmICh0ID0gYS5yZXR1cm4pICYmIHQuY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBhbGl2ZVRpbGVzKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgciA9IG5ldyBBcnJheSgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXModGhpcy5fbWFwTGF5ZXJzKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGMgPSAobyA9IHZvaWQgMCwgX192YWx1ZXMocy5hbGxDYXJkcykpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgICAgcC5pc1ZhbGlkICYmIHIucHVzaChwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG4gPSBjLnJldHVybikgJiYgbi5jYWxsKGMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmICh0ID0gYS5yZXR1cm4pICYmIHQuY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBnZXRFYWNoTGF5ZXJUaWxlQ291bnQoKSB7XG4gICAgZm9yICh2YXIgZSA9IFtdLCB0ID0gMDsgdCA8IHRoaXMuX21hcExheWVycy5sZW5ndGg7IHQrKykge1xuICAgICAgdmFyIG8gPSB0aGlzLl9tYXBMYXllcnNbdF0uYWxsQ2FyZHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlzVmFsaWQ7XG4gICAgICB9KTtcbiAgICAgIGVbdF0gPSBvLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZ2V0QWxpdmVUaWxlQnlQb3MoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fbWFwTGF5ZXJzW2Uuel07XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IGUueCArIGUueSAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYICogMjtcbiAgICByZXR1cm4gdC5nZXRHcmlkQ2FyZChvKTtcbiAgfVxuICBzZXRUaWxlVHlwZShlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlKTtcbiAgICBpZiAobykge1xuICAgICAgby5fdHlwZSA9IHQ7XG4gICAgICB0aGlzLmdhbWVUeXBlID09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwgJiYgby5hZGRUeXBlQml0KHQpO1xuICAgIH1cbiAgfVxuICBzZXRUaWxlVHlwZV9yZW1vdmVUeXBlcyhlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlKTtcbiAgICBvICYmIHRoaXMuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiB0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBvLnJlbW92ZVR5cGVCaXQoZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0VGlsZVR5cGVCeVBvc19hZGRUeXBlcyhlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEFsaXZlVGlsZUJ5UG9zKGUpO1xuICAgIG8gJiYgdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gby5hZGRUeXBlQml0KGUpO1xuICAgIH0pO1xuICB9XG4gIHNldFRpbGVUeXBlQnlQb3MoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRBbGl2ZVRpbGVCeVBvcyhlKTtcbiAgICBvICYmIChvLl90eXBlID0gdCk7XG4gIH1cbiAgc2V0VGlsZU9yaWdpbmFsUmVzSWQoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5fdGlsZU9iamVjdE1hcC5nZXQoZSk7XG4gICAgbyAmJiBvLnNldE9yaWdpbmFsUmVzSWQodCk7XG4gIH1cbiAgc2V0VGlsZU9yaWdpbmFsUmVzSWRCeVBvcyhlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEFsaXZlVGlsZUJ5UG9zKGUpO1xuICAgIG8gJiYgby5zZXRPcmlnaW5hbFJlc0lkKHQpO1xuICB9XG4gIGNoYW5nZVRpbGVSZXNJZChlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlKTtcbiAgICBvICYmIG8uY2hhbmdlUmVzSWQodCk7XG4gIH1cbiAgZ2V0QWxsVGlsZVR5cGVzKCkge1xuICAgIHZhciBlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX3RpbGVPYmplY3RNYXAuZm9yRWFjaChmdW5jdGlvbiAodCwgbykge1xuICAgICAgZS5zZXQobywgdC50eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBpc0JvYXJkVGlsZUhhc1R5cGUoZSwgdCA9IHRydWUpIHtcbiAgICB2YXIgbywgbjtcbiAgICB2YXIgciA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW2VdO1xuICAgIGlmICgwID09PSByLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBhID0gbmV3IFNldChyKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgIGlmIChjICYmICghdCB8fCBjLmlzVmFsaWQpICYmIGEuaGFzKGMudHlwZSkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKG4gPSBsLnJldHVybikgJiYgbi5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjaGVja0lzRGVhZChlID0gW10pIHtcbiAgICB2YXIgdCwgbztcbiAgICB2YXIgbiA9IHRoaXMuYWxpdmVUaWxlcygpO1xuICAgIGlmICgwID09PSBuLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXMobiksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FyZExvY2socykgJiYgIWUuaW5jbHVkZXMocy5pZCkpIHtcbiAgICAgICAgICByLmhhcyhzLmNhcmRJZCkgfHwgci5zZXQocy5jYXJkSWQsIFtdKTtcbiAgICAgICAgICByLmdldChzLmNhcmRJZCkucHVzaChzKTtcbiAgICAgICAgICBpZiAoci5nZXQocy5jYXJkSWQpLmxlbmd0aCA+PSAyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gYS5yZXR1cm4pICYmIG8uY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGlsZU9iamVjdE1hcC5zaXplIHx8IDA7XG4gIH1cbiAgZ2V0Q2FyZHNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHNDb3VudCB8fCAwO1xuICB9XG4gIGdldEluaXRpYWxCb2FyZERpbWVuc2lvbigpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIHIgPSAwLFxuICAgICAgYSA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyh0aGlzLl9tYXBMYXllcnMpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgdSA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyhjLmFsbENhcmRzKSksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgZiA9IHAudmFsdWU7XG4gICAgICAgICAgICByID0gTWF0aC5tYXgociwgZi5ncmlkUG9zWCk7XG4gICAgICAgICAgICBhID0gTWF0aC5tYXgoYSwgZi5ncmlkUG9zWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcCAmJiAhcC5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAodCA9IGwucmV0dXJuKSAmJiB0LmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtyICsgMiwgYSArIDIsIHRoaXMuX21hcExheWVycy5sZW5ndGhdO1xuICB9XG4gIGdldEN1ckJvYXJkRGltZW5zaW9uKGUgPSBmYWxzZSkge1xuICAgIHZhciB0LCBvLCBuLCByO1xuICAgIHZhciBhID0gMCxcbiAgICAgIGwgPSAwLFxuICAgICAgcyA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyh0aGlzLl9tYXBMYXllcnMpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IHUudmFsdWUsXG4gICAgICAgICAgZiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGQgPSAobiA9IHZvaWQgMCwgX192YWx1ZXMocC5hbGxDYXJkcykpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHkgPSBoLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHkuaXNWYWxpZCAmJiAoIWUgfHwgIXkuZ2V0SXNJblNsb3RCYXIoKSkpIHtcbiAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KGEsIHkuZ3JpZFBvc1gpO1xuICAgICAgICAgICAgICBsID0gTWF0aC5tYXgobCwgeS5ncmlkUG9zWSk7XG4gICAgICAgICAgICAgIGYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAociA9IGQucmV0dXJuKSAmJiByLmNhbGwoZCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmICYmIHMrKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2EgKyAyLCBsICsgMiwgc107XG4gIH1cbiAgZ2V0U2VsZkRpc3RhbmNlQXJyYXkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgcyA9IGZ1bmN0aW9uIHModCkge1xuICAgICAgICByZXR1cm4gZSA/IHQuZ2V0UG9zaXRpb24oKSA6IGNjLnYyKHQuZ3JpZFBvc1gsIHQuZ3JpZFBvc1kpO1xuICAgICAgfSxcbiAgICAgIGMgPSB7fSxcbiAgICAgIHUgPSB0aGlzLl90aWxlT2JqZWN0TWFwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXModSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gX19yZWFkKGYudmFsdWUsIDIpLFxuICAgICAgICAgIGggPSBkWzBdO1xuICAgICAgICBjWyhSID0gZFsxXSkucmVzSWRdIHx8IChjW1IucmVzSWRdID0gW10pO1xuICAgICAgICBjW1IucmVzSWRdLnB1c2goUik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IHAucmV0dXJuKSAmJiBvLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHkgPSB7fTtcbiAgICBmb3IgKHZhciBtIGluIGMpIHtcbiAgICAgIHZhciB2ID0gY1ttXTtcbiAgICAgIGlmICghKHYubGVuZ3RoIDwgMikpIHtcbiAgICAgICAgdmFyIGcgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgIF8gPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBUID0gKG4gPSB2b2lkIDAsIF9fdmFsdWVzKHYpKSwgQyA9IFQubmV4dCgpOyAhQy5kb25lOyBDID0gVC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBiID0gQy52YWx1ZTtcbiAgICAgICAgICAgIF9bYi5sYXllcl0gfHwgKF9bYi5sYXllcl0gPSBbXSk7XG4gICAgICAgICAgICBfW2IubGF5ZXJdLnB1c2goYik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgQyAmJiAhQy5kb25lICYmIChhID0gVC5yZXR1cm4pICYmIGEuY2FsbChUKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBFID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIFMgaW4gXykge1xuICAgICAgICAgIHZhciBJID0gX1tTXTtcbiAgICAgICAgICBpZiAoSS5sZW5ndGggPj0gMikgZm9yICh2YXIgdyA9IDA7IHcgPCBJLmxlbmd0aDsgdysrKSBmb3IgKHZhciBCID0gdyArIDE7IEIgPCBJLmxlbmd0aDsgQisrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IElbd10sXG4gICAgICAgICAgICAgIE0gPSBJW0JdLFxuICAgICAgICAgICAgICBPID0gcyh4KSxcbiAgICAgICAgICAgICAgRCA9IHMoTSksXG4gICAgICAgICAgICAgIFAgPSBNYXRoLnNxcnQoTWF0aC5wb3coRC54IC0gTy54LCAyKSArIE1hdGgucG93KEQueSAtIE8ueSwgMikpO1xuICAgICAgICAgICAgZyA9IE1hdGgubWluKGcsIFApO1xuICAgICAgICAgICAgRSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghRSkgZm9yICh3ID0gMDsgdyA8IHYubGVuZ3RoOyB3KyspIGZvciAoQiA9IHcgKyAxOyBCIDwgdi5sZW5ndGg7IEIrKykge1xuICAgICAgICAgIHggPSB2W3ddLCBNID0gdltCXSwgTyA9IHMoeCksIEQgPSBzKE0pLCBQID0gTWF0aC5zcXJ0KE1hdGgucG93KEQueCAtIE8ueCwgMikgKyBNYXRoLnBvdyhELnkgLSBPLnksIDIpKTtcbiAgICAgICAgICBnID0gTWF0aC5taW4oZywgUCk7XG4gICAgICAgIH1cbiAgICAgICAgZyAhPT0gTnVtYmVyLk1BWF9WQUxVRSAmJiAoeVttXSA9IE51bWJlcihnLnRvRml4ZWQoMikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIEEgPSBbXTtcbiAgICB2YXIgX2wgPSB7fTtcbiAgICBfbFtoXSA9IFI7XG4gICAgZm9yICh2YXIgaCBpbiB5KSB7XG4gICAgICB2YXIgUiA9IHlbaF07XG4gICAgICBBLnB1c2goX2wpO1xuICAgIH1cbiAgICByZXR1cm4gQTtcbiAgfVxuICBnZXRGbGlwQ2FyZFBvcygpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyh0aGlzLl90aWxlT2JqZWN0TWFwKSwgYSA9IG4ubmV4dCgpOyAhYS5kb25lOyBhID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSBfX3JlYWQoYS52YWx1ZSwgMiksXG4gICAgICAgICAgcyA9IChsWzBdLCBsWzFdKTtcbiAgICAgICAgcy50eXBlID09PSBFVGlsZVR5cGUuUm9sbENhcmQgJiYgby5wdXNoKGNjLnYzKHMuZ3JpZFBvc1gsIHMuZ3JpZFBvc1ksIHMubGF5ZXIpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gby5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnggKyBcIixcIiArIGUueSArIFwiLFwiICsgZS56O1xuICAgIH0pO1xuICB9XG4gIGluaXRDb2xsZWN0U3lzdGVtKCkge1xuICAgIHRoaXMuX2NvbGxlY3RTeXN0ZW0gfHwgKHRoaXMuX2NvbGxlY3RTeXN0ZW0gPSBuZXcgQ29sbGVjdFN5c3RlbSh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxlY3RTeXN0ZW07XG4gIH1cbiAgc2V0RHVveGlhb0NvdW50KGUsIHQgPSAwKSB7XG4gICAgdmFyIG8gPSB0aGlzLl90aWxlT2JqZWN0TWFwLmdldChlKTtcbiAgICBvICYmIG8uc2V0RHVveGlhb0NvdW50KHQpO1xuICB9XG4gIHNldER1b3hpYW9Db3VudEJ5UG9zKGUsIHQgPSAwKSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEFsaXZlVGlsZUJ5UG9zKGUpO1xuICAgIG8gJiYgby5zZXREdW94aWFvQ291bnQodCk7XG4gIH1cbiAgaW5zZXJ0TmV3TGF5ZXJzVG9Gcm9udChlKSB7XG4gICAgZm9yICh2YXIgdCwgbywgbiwgciwgbCwgcyA9IFtdLCBjID0gMDsgYyA8IGU7IGMrKykgcy5wdXNoKG5ldyBUaWxlTGF5ZXJPYmplY3QoYykpO1xuICAgIHZhciB1ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyh0aGlzLl9tYXBMYXllcnMpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGYudmFsdWUsXG4gICAgICAgICAgeSA9IGQubGF5ZXJJbmRleCArIGU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgbSA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyhkLmFsbENhcmRzKSksIHYgPSBtLm5leHQoKTsgIXYuZG9uZTsgdiA9IG0ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgZyA9IHYudmFsdWU7XG4gICAgICAgICAgICBnLmlzVmFsaWQgJiYgdS5wdXNoKGcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHYgJiYgIXYuZG9uZSAmJiAociA9IG0ucmV0dXJuKSAmJiByLmNhbGwobSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkLnVwZGF0ZUxheWVySW5kZXgoeSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobyA9IHAucmV0dXJuKSAmJiBvLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgKGwgPSB0aGlzLl9tYXBMYXllcnMpLnVuc2hpZnQuYXBwbHkobCwgWy4uLnNdKTtcbiAgICByZXR1cm4gdTtcbiAgfVxuICBzZXRUaWxlR2VuZXJhdGVkKGUsIHQpIHtcbiAgICBlICYmIChlLl9nZW5lcmF0aW5nID0gdCk7XG4gIH1cbiAgY3JlYXRlVGlsZXNGb3JOZXdMYXllcnMoZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSBbXSwgbiA9IG5ldyBTZXQoKSwgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgciA9IGVbaV0sXG4gICAgICAgIGEgPSB0aGlzLl9tYXBMYXllcnNbci5wb3Muel07XG4gICAgICBpZiAoYSkge1xuICAgICAgICB2YXIgbCA9IFwiX2JcIiArIHQsXG4gICAgICAgICAgcyA9IHIucG9zLnggKyBcIi1cIiArIHIucG9zLnkgKyBcIi1cIiArIHIucG9zLnogKyBsLFxuICAgICAgICAgIGMgPSBuZXcgVGlsZU9iamVjdChzLCByLCB0aGlzLCB0KTtcbiAgICAgICAgYy5pbml0KHRoaXMuX2dhbWVDb250ZXh0LCB0aGlzLl9nYW1lQ29udGV4dC5nZXRDYXJkQ29uZmlnTWFwKCkpO1xuICAgICAgICBhLmFkZENhcmQoYyk7XG4gICAgICAgIG8ucHVzaChjKTtcbiAgICAgICAgdGhpcy5fdGlsZU9iamVjdE1hcC5zZXQocywgYyk7XG4gICAgICAgIG4uYWRkKGEubGF5ZXJJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aWxlT2JqZWN0czogbyxcbiAgICAgIGxheWVyU2V0czogblxuICAgIH07XG4gIH1cbiAgbWVyZ2VUaWxlTWFwRGF0YSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICB0aGlzLl9jYXJkc0NvdW50ID0gdGhpcy5fdGlsZU9iamVjdE1hcC5zaXplO1xuICAgIHZhciBvID0gLTEsXG4gICAgICBuID0gLTEsXG4gICAgICByID0gLTEsXG4gICAgICBhID0gLTE7XG4gICAgdGhpcy5fbWF4TGF5ZXJJbmRleCA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyh0aGlzLl90aWxlT2JqZWN0TWFwLnZhbHVlcygpKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlLFxuICAgICAgICAgIHUgPSBjLmdyaWRQb3NYLFxuICAgICAgICAgIHAgPSBjLmdyaWRQb3NZO1xuICAgICAgICAoLTEgPT09IG8gfHwgdSA8IG8pICYmIChvID0gdSk7XG4gICAgICAgIHUgPiBuICYmIChuID0gdSk7XG4gICAgICAgICgtMSA9PT0gciB8fCBwIDwgcikgJiYgKHIgPSBwKTtcbiAgICAgICAgcCA+IGEgJiYgKGEgPSBwKTtcbiAgICAgICAgYy5sYXllciA+IHRoaXMuX21heExheWVySW5kZXggJiYgKHRoaXMuX21heExheWVySW5kZXggPSBjLmxheWVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmICh0ID0gbC5yZXR1cm4pICYmIHQuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9tYXhNYXBXaWR0aCA9IE1hdGguZmxvb3IoKG4gLSBvKSAvIDIpICsgMTtcbiAgICB0aGlzLl9tYXBDb2wgPSBuIC0gbztcbiAgICB0aGlzLl9tYXBSb3cgPSBhIC0gcjtcbiAgfVxuICBjYWxjdWxhdGVDZW50ZXJPZmZzZXQoZSkge1xuICAgIGZvciAodmFyIHQgPSBlWzBdLnBvcy54LCBvID0gZVswXS5wb3MueCwgbiA9IGVbMF0ucG9zLnksIGkgPSBlWzBdLnBvcy55LCByID0gMTsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBhID0gZVtyXS5wb3M7XG4gICAgICBhLnggPCB0ICYmICh0ID0gYS54KTtcbiAgICAgIGEueCA+IG8gJiYgKG8gPSBhLngpO1xuICAgICAgYS55IDwgbiAmJiAobiA9IGEueSk7XG4gICAgICBhLnkgPiBpICYmIChpID0gYS55KTtcbiAgICB9XG4gICAgdmFyIGwgPSBvIC0gdCxcbiAgICAgIHMgPSBpIC0gbixcbiAgICAgIHUgPSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFggLSAyLFxuICAgICAgcCA9IDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WSAtIDI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlck9mZnNldFg6IE1hdGguZmxvb3IoKHUgLSBsKSAvIDIpLFxuICAgICAgY2VudGVyT2Zmc2V0WTogTWF0aC5mbG9vcigocCAtIHMpIC8gMiksXG4gICAgICBvcmlnaW5hbFN0YXJ0WDogdCxcbiAgICAgIG9yaWdpbmFsU3RhcnRZOiBuXG4gICAgfTtcbiAgfVxuICBhcHBseUNlbnRlck9mZnNldFRvQ2FyZHMoZSkge1xuICAgIGZvciAodmFyIHQgPSB0aGlzLmNhbGN1bGF0ZUNlbnRlck9mZnNldChlKSwgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuYXBwbHlPZmZzZXRUb1Bvc2l0aW9uKGVbb10ucG9zLngsIGVbb10ucG9zLnksIHQpO1xuICAgICAgZVtvXS5wb3MueCA9IG4ueDtcbiAgICAgIGVbb10ucG9zLnkgPSBuLnk7XG4gICAgfVxuICB9XG4gIGFwcGx5T2Zmc2V0VG9Qb3NpdGlvbihlLCB0LCBvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGUgLSBvLm9yaWdpbmFsU3RhcnRYICsgby5jZW50ZXJPZmZzZXRYLFxuICAgICAgeTogdCAtIG8ub3JpZ2luYWxTdGFydFkgKyBvLmNlbnRlck9mZnNldFlcbiAgICB9O1xuICB9XG4gIGFkZEdhbWVMYXllcihlLCB0KSB7XG4gICAgdmFyIG8gPSBMZXZlbERhdGFQYXJzZXIuY29udmVydFN0cmluZ1RvQ2FyZFRpbGVEYXRhc05ldyh0KTtcbiAgICB0aGlzLmFwcGx5Q2VudGVyT2Zmc2V0VG9DYXJkcyhvKTtcbiAgICBmb3IgKHZhciBuID0gLTEsIGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykgb1tpXS5wb3MueiA+IG4gJiYgKG4gPSBvW2ldLnBvcy56KTtcbiAgICB2YXIgciA9IG4gKyAxO1xuICAgIHRoaXMuaW5zZXJ0TmV3TGF5ZXJzVG9Gcm9udChyKTtcbiAgICB2YXIgYSA9IHRoaXMuY3JlYXRlVGlsZXNGb3JOZXdMYXllcnMobywgZSksXG4gICAgICBzID0gYS50aWxlT2JqZWN0cyxcbiAgICAgIGMgPSBhLmxheWVyU2V0cztcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hJZDogZSxcbiAgICAgIGxldmVsU3RyOiB0LFxuICAgICAgY2FyZHNDb3VudDogby5sZW5ndGgsXG4gICAgICB0aWxlT2JqZWN0czogcyxcbiAgICAgIGFkZExheWVyczogQXJyYXkuZnJvbShjKSxcbiAgICAgIG9wZW5HZW5lcmF0ZVN0YXRlOiB0aGlzLl9nYW1lQ29udGV4dC5nZXRPcGVuR2VuZXJhdGVTdGF0ZSgpXG4gICAgfTtcbiAgfVxuICBjaGVja0FuZEFwcGx5VGlsZUZhbGxpbmcoZSwgdCA9IHRydWUpIHtcbiAgICB2YXIgbywgbjtcbiAgICB2YXIgciA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXModGhpcy5fdGlsZU9iamVjdE1hcC52YWx1ZXMoKSksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHMuaXNWYWxpZCAmJiBzLmJhdGNoSWQgIT09IGUgJiYgKHQgfHwgIXRoaXMuZ2V0SXNTZWxlY3Qocy5pZCkpKSB7XG4gICAgICAgICAgZm9yICh2YXIgYyA9IHMubGF5ZXIsIHUgPSBzLmdyaWRQb3NYLCBwID0gcy5ncmlkUG9zWSwgZiA9IGMsIGQgPSBjIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0Jsb2NraW5nVGlsZUF0UG9zaXRpb24oZCwgdSwgcCkpIHtcbiAgICAgICAgICAgICAgZiA9IGQgKyAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDAgPT09IGQgJiYgKGYgPSAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgci5wdXNoKHtcbiAgICAgICAgICAgIHRpbGU6IHMsXG4gICAgICAgICAgICBvbGRMYXllcjogYyxcbiAgICAgICAgICAgIG5ld0xheWVyOiBmLFxuICAgICAgICAgICAgaW5kZXhJbkxheWVyOiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5tb3ZlVGlsZVRvUG9zaXRpb24ocywgcy5ncmlkUG9zWCwgcy5ncmlkUG9zWSwgZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChuID0gYS5yZXR1cm4pICYmIG4uY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBoID0gMDsgaCA8IHIubGVuZ3RoOyBoKyspIHtcbiAgICAgIHZhciB5ID0gcltoXSxcbiAgICAgICAgbSA9IHRoaXMuX21hcExheWVyc1t5Lm5ld0xheWVyXTtcbiAgICAgIG0gJiYgKHkuaW5kZXhJbkxheWVyID0gbS5hbGxDYXJkcy5pbmRleE9mKHkudGlsZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBoYXNCbG9ja2luZ1RpbGVBdFBvc2l0aW9uKGUsIHQsIG8pIHtcbiAgICB2YXIgbiwgcjtcbiAgICBpZiAoZSA8IDAgfHwgZSA+PSB0aGlzLl9tYXBMYXllcnMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGEgPSB0aGlzLl9tYXBMYXllcnNbZV07XG4gICAgaWYgKCFhKSByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhhLmFsbENhcmRzKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICBpZiAoYy5pc1ZhbGlkKSB7XG4gICAgICAgICAgdmFyIHUgPSBjLmdyaWRQb3NYLFxuICAgICAgICAgICAgcCA9IGMuZ3JpZFBvc1ggKyAxLFxuICAgICAgICAgICAgZiA9IGMuZ3JpZFBvc1ksXG4gICAgICAgICAgICBkID0gYy5ncmlkUG9zWSArIDE7XG4gICAgICAgICAgaWYgKHUgPD0gdCArIDEgJiYgcCA+PSB0ICYmIGYgPD0gbyArIDEgJiYgZCA+PSBvKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKHIgPSBsLnJldHVybikgJiYgci5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjbGVhbnVwRW1wdHlMYXllcnMoKSB7XG4gICAgdmFyIGUsIHQsIG8sIG47XG4gICAgaWYgKHRoaXMuX21hcExheWVycyAmJiAwICE9PSB0aGlzLl9tYXBMYXllcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciByID0gLTEsIGEgPSBbXSwgbCA9IHRoaXMuX21hcExheWVycy5sZW5ndGggLSAxOyBsID49IDA7IGwtLSkge1xuICAgICAgICBpZiAoKHUgPSB0aGlzLl9tYXBMYXllcnNbbF0pICYmIHUuaGFzVmFsaWRDYXJkKCkpIHtcbiAgICAgICAgICByID0gbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB1ICYmIGEucHVzaCh1KTtcbiAgICAgIH1cbiAgICAgIGlmICgwICE9PSBhLmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhhKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciB1ID0gYy52YWx1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIHAgPSAobyA9IHZvaWQgMCwgX192YWx1ZXModS5hbGxDYXJkcykpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gZi52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aWxlT2JqZWN0TWFwLmRlbGV0ZShkLmlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobiA9IHAucmV0dXJuKSAmJiBuLmNhbGwocCk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHQgPSBzLnJldHVybikgJiYgdC5jYWxsKHMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFwTGF5ZXJzLnNwbGljZShyICsgMSwgYS5sZW5ndGgpO1xuICAgICAgICB0aGlzLl9tYXhMYXllckluZGV4ID0gdGhpcy5fbWFwTGF5ZXJzLmxlbmd0aCA+IDAgPyB0aGlzLl9tYXBMYXllcnMubGVuZ3RoIC0gMSA6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhc0NoZWNrQmF0Y2hJZChlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0NoZWNrQmF0Y2hJZFNldC5oYXMoZSk7XG4gIH1cbiAgYWRkQ2hlY2tCYXRjaElkKGUpIHtcbiAgICB0aGlzLl9oYXNDaGVja0JhdGNoSWRTZXQuYWRkKGUpO1xuICB9XG4gIGNoYW5nZUJhdGNoSWQoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRUaWxlT2JqZWN0KGUpO1xuICAgIG8gJiYgKG8uX2JhdGNoSWQgPSB0IHx8IDApO1xuICB9XG4gIGdldERyb3BUaWxlcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXModGhpcy5fdGlsZU9iamVjdE1hcC52YWx1ZXMoKSksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgaWYgKGwuYmF0Y2hJZCAhPSBlKSB7XG4gICAgICAgICAgdmFyIHMgPSBsLmxheWVyLFxuICAgICAgICAgICAgYyA9IHRoaXMuX21hcExheWVyc1tzXTtcbiAgICAgICAgICBjICYmIG4ucHVzaCh7XG4gICAgICAgICAgICB0aWxlOiBsLFxuICAgICAgICAgICAgb2xkTGF5ZXI6IGwubGF5ZXIsXG4gICAgICAgICAgICBuZXdMYXllcjogcyxcbiAgICAgICAgICAgIGluZGV4SW5MYXllcjogYy5hbGxDYXJkcy5pbmRleE9mKGwpIHx8IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIGdldFRpbGVPYmplY3RCeVBvc0lkKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX3RpbGVPYmplY3RNYXAudmFsdWVzKCkpLCByID0gbi5uZXh0KCk7ICFyLmRvbmU7IHIgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IHIudmFsdWU7XG4gICAgICAgIGlmIChhLnNhdmVLZXkoKSA9PT0gZSkgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobyA9IG4ucmV0dXJuKSAmJiBvLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0VGlsZVR5cGVCeVBvc0V4dHJhKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4gPSB0aGlzLmdldEFsaXZlVGlsZUJ5UG9zKGUpO1xuICAgIG4gJiYgKG51bGwgPT09IChvID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5zZXRFeHRyYUluZm8pIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNhbGwobiwgdCkpO1xuICB9XG59Il19