"use strict";
cc._RF.push(module, '1eec3+WmrlIcIkxj2r3e3bS', 'TileNodeManager');
// Scripts/tilenodes/TileNodeManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileNodeFactory_1 = require("./TileNodeFactory");
var TileNodeManager = /** @class */ (function () {
    function TileNodeManager(e) {
        this._tileNodeMap = new Map();
        this._scheduleComponent = null;
        this._currentZIndexBase = 0;
        this._sameLayerMap = new Map();
        this._layerIndex2NodeMap = {};
        this._layerIndex2ShadowNodeMap = {};
        this._context = null;
        this._cardLayoutConfig = null;
        this._cardConfigMap = null;
        this._tileMapObject = null;
        this._context = e;
        this._context.setTileNodeManager(this);
        var t = new cc.Node();
        t.parent = this.root;
        this._scheduleComponent = t.addComponent(cc.Component);
    }
    Object.defineProperty(TileNodeManager.prototype, "root", {
        get: function () {
            return this.context.gameView.nodeCardRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileNodeManager.prototype, "dragRoot", {
        get: function () {
            return this.context.gameView.nodeDragCardRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileNodeManager.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    TileNodeManager.prototype.getTileNodes = function () {
        var e, t = Array.from(this._tileNodeMap.values());
        if ((null === (e = this.context) || void 0 === e ? void 0 : e.gameType) != GameTypeEnums_1.MjGameType.Classic)
            return t;
        t.sort(function (e, t) {
            var o, n, i, r, a, l, s, c, u, p, f, d, h = null !== (n = null === (o = e.tileObject) || void 0 === o ? void 0 : o.gridPosX) && void 0 !== n ? n : 0, y = null !== (r = null === (i = e.tileObject) || void 0 === i ? void 0 : i.gridPosY) && void 0 !== r ? r : 0, m = null !== (l = null === (a = e.tileObject) || void 0 === a ? void 0 : a.layer) && void 0 !== l ? l : 0, v = null !== (c = null === (s = t.tileObject) || void 0 === s ? void 0 : s.gridPosX) && void 0 !== c ? c : 0, g = null !== (p = null === (u = t.tileObject) || void 0 === u ? void 0 : u.gridPosY) && void 0 !== p ? p : 0, _ = null !== (d = null === (f = t.tileObject) || void 0 === f ? void 0 : f.layer) && void 0 !== d ? d : 0;
            if (m !== _)
                return m - _;
            var T = h + 2 * y, C = v + 2 * g;
            return T === C ? h - v : T - C;
        });
        return t;
    };
    TileNodeManager.prototype.getTileNodeByTileId = function (e) {
        var t;
        return null === (t = this._tileNodeMap) || void 0 === t ? void 0 : t.get(e);
    };
    TileNodeManager.prototype.getSameLayerMap = function (e) {
        return this._sameLayerMap.get(e);
    };
    TileNodeManager.prototype.rebuildTileNodeInfosAfterShuffle = function (e) {
        var t, o, n, i, a, l, s, c = new Set();
        try {
            for (var u = __values(e), p = u.next(); !p.done; p = u.next()) {
                var f = p.value, d = null === (a = f.info) || void 0 === a ? void 0 : a.tileObject;
                if (d && d.isValid) {
                    if (d.getTypeBits() !== f.typeBits) {
                        var h = f.cardNode.position.clone(), y = f.shadowCardNode.position.clone();
                        f.onlyClear();
                        f = this.createTileNodeObject(d, f.info.index, f.info.layerIndex);
                        this._tileNodeMap.set(d.id, f);
                        f.cardNode.position = h;
                        f.shadowCardNode.position = y;
                    }
                    var m = f.info.layerIndex, v = d.layer;
                    null === (l = this._sameLayerMap.get(m)) || void 0 === l || l.delete(d.id);
                    this._sameLayerMap.has(v) || this._sameLayerMap.set(v, new Map());
                    var g = this._layerIndex2NodeMap[v], _ = this._layerIndex2ShadowNodeMap[v], T = null === (s = this._tileMapObject) || void 0 === s ? void 0 : s.mapLayers()[v], C = T ? T.allCards.indexOf(d) : -1;
                    f.info.layerIndex = v;
                    f.info.layerNode = g;
                    f.info.shadowLayerNode = _;
                    C >= 0 && (f.info.index = C);
                    g && cc.isValid(g) && f.cardNode.setParent(g);
                    _ && cc.isValid(_) && f.shadowCardNode.setParent(_);
                    this._sameLayerMap.get(v).set(d.id, f);
                    c.add(m);
                    c.add(v);
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
                p && !p.done && (o = u.return) && o.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        try {
            for (var b = __values(c), E = b.next(); !E.done; E = b.next()) {
                var S = E.value;
                this.updateLayerSiblingIndexes(S);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                E && !E.done && (i = b.return) && i.call(b);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    TileNodeManager.prototype.rebuildChangeTypeTileNodes = function (e) {
        var t, o, n, i, a, l = [];
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                l.push(u.info.tileObject.id);
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
        try {
            for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = this._tileNodeMap.get(d);
                if (h)
                    if (h.initType != h.info.tileObject.showType) {
                        var y = h.info;
                        this._sameLayerMap.has(y.layerIndex) || this._sameLayerMap.set(y.layerIndex, new Map());
                        h.onlyClear();
                        var m = this.createTileNodeObject(y.tileObject, y.index, y.layerIndex);
                        null === (a = this._sameLayerMap.get(y.layerIndex)) || void 0 === a || a.set(d, m);
                        this._tileNodeMap.set(d, m);
                        m.resetSiblingIndex();
                    }
                    else
                        h.refreshNode(h.info);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (i = p.return) && i.call(p);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    TileNodeManager.prototype.rebuildAllTileNodes = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return this._tileMapObject && this._cardLayoutConfig && this._cardConfigMap ? [4, this.createAllTileNodes({
                                tileMapObject: this._tileMapObject,
                                cardLayoutConfig: this._cardLayoutConfig,
                                cardConfigMap: this._cardConfigMap
                            })] : [2];
                    case 1:
                        e.sent();
                        return [2];
                }
            });
        });
    };
    TileNodeManager.prototype.createAllTileNodes = function (e) {
        return __awaiter(this, void 0, Promise, function () {
            var t, o, n;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        this.clearAllTileNodes();
                        this._tileMapObject = e.tileMapObject;
                        this._cardLayoutConfig = e.cardLayoutConfig;
                        this._cardConfigMap = e.cardConfigMap;
                        this._currentZIndexBase = 0;
                        if (this._context.gameType != GameTypeEnums_1.MjGameType.Classic)
                            return [3, 5];
                        o = 0;
                        i.label = 1;
                    case 1:
                        if (!(o < this._tileMapObject.mapLayers().length))
                            return [3, 4];
                        if (!(n = this._tileMapObject.mapLayers()[o]).hasValidCard())
                            return [3, 3];
                        t = n.allCards.length > 0 ? n.allCards[0].batchId : 0;
                        this.createLayer(n.layerIndex, t);
                        return [4, this.createLayerNodeObjects(n)];
                    case 2:
                        i.sent();
                        i.label = 3;
                    case 3:
                        o++;
                        return [3, 1];
                    case 4:
                        return [3, 9];
                    case 5:
                        o = 0;
                        i.label = 6;
                    case 6:
                        if (!(o <= this._tileMapObject.maxLayerIndex))
                            return [3, 9];
                        n = this._tileMapObject.mapLayers()[o];
                        this.createLayer(o, 0);
                        return [4, this.createLayerNodeObjects(n)];
                    case 7:
                        i.sent();
                        i.label = 8;
                    case 8:
                        o++;
                        return [3, 6];
                    case 9:
                        this.context.setTileNodeMap(this._tileNodeMap);
                        this._tileNodeMap.forEach(function (e) {
                            e.show();
                        });
                        return [2];
                }
            });
        });
    };
    TileNodeManager.prototype.updateExistingLayersMapping = function (e) {
        var t, o, n, i;
        if (!(e <= 0)) {
            var a = Object.keys(this._layerIndex2NodeMap).map(function (e) {
                return parseInt(e);
            }).sort(function (e, t) {
                return t - e;
            }), l = {}, s = {}, c = new Map();
            try {
                for (var u = __values(a), p = u.next(); !p.done; p = u.next()) {
                    var f = p.value, d = f + e, h = this._layerIndex2NodeMap[f];
                    if (h && cc.isValid(h)) {
                        l[d] = h;
                        h.name = h.name.replace("layer_" + f + "_", "layer_" + d + "_");
                    }
                    var y = this._layerIndex2ShadowNodeMap[f];
                    if (y && cc.isValid(y)) {
                        s[d] = y;
                        y.name = y.name.replace("shadowlayer_" + f + "_", "shadowlayer_" + d + "_");
                    }
                    var m = this._sameLayerMap.get(f);
                    if (m && h && cc.isValid(h)) {
                        c.set(d, m);
                        try {
                            for (var v = (n = void 0, __values(m.values())), g = v.next(); !g.done; g = v.next()) {
                                var _ = g.value;
                                if (_.info) {
                                    _.info.layerIndex = d;
                                    _.info.layerNode = h;
                                    _.info.shadowLayerNode = y;
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
                                g && !g.done && (i = v.return) && i.call(v);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
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
                    p && !p.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this._layerIndex2NodeMap = l;
            this._layerIndex2ShadowNodeMap = s;
            this._sameLayerMap = c;
        }
    };
    TileNodeManager.prototype.createNextLevelTileNodes = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, o, n, a, s, c, u, p, f, d, h, y, m, v, g;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        t = e.addLayers.length;
                        o = Math.max.apply(Math, __spread(e.addLayers)) + 1;
                        this.updateExistingLayersMapping(o);
                        this._currentZIndexBase -= 2 * t;
                        n = [];
                        e.openGenerateState || (n = e.failingTiles);
                        a = new Map();
                        try {
                            for (s = __values(n), c = s.next(); !c.done; c = s.next()) {
                                u = c.value;
                                a.has(u.newLayer) || a.set(u.newLayer, []);
                                a.get(u.newLayer).push(u);
                            }
                        }
                        catch (e) {
                            v = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                c && !c.done && (g = s.return) && g.call(s);
                            }
                            finally {
                                if (v)
                                    throw v.error;
                            }
                        }
                        p = 0;
                        y = 0;
                        i.label = 1;
                    case 1:
                        if (!(y < t))
                            return [3, 4];
                        m = e.addLayers[y];
                        if (!(f = this._tileMapObject.mapLayers()[m]) || !f.hasValidCard())
                            return [3, 3];
                        d = f.allCards.length > 0 ? f.allCards[0].batchId : 0;
                        this._layerIndex2NodeMap[m] && cc.isValid(this._layerIndex2NodeMap[m]) || this.createLayer(m, d);
                        p = d;
                        h = a.get(m);
                        return [4, this.createLayerNodeObjects(f, h)];
                    case 2:
                        i.sent();
                        i.label = 3;
                    case 3:
                        y++;
                        return [3, 1];
                    case 4:
                        for (y = 0; y < o; y++) {
                            m = y;
                            this._layerIndex2NodeMap[m] && cc.isValid(this._layerIndex2NodeMap[m]) || this.createLayer(m, p);
                        }
                        this._tileNodeMap.forEach(function (e) {
                            e.show();
                        });
                        return [2];
                }
            });
        });
    };
    TileNodeManager.prototype.destoryEmptyLayerNodes = function () {
        var e, t, o;
        if (cc.isValid(this.root)) {
            var n = this.root.children, i = function i(e) {
                if (cc.isValid(e) && 0 == (null === (o = e.children) || void 0 === o ? void 0 : o.length)) {
                    var t = false;
                    a._tileNodeMap.forEach(function (o) {
                        o.info.layerNode !== e && o.info.shadowLayerNode !== e || (t = true);
                    });
                    if (!t) {
                        for (var n in a._layerIndex2NodeMap)
                            if (a._layerIndex2NodeMap[n] === e) {
                                delete a._layerIndex2NodeMap[n];
                                break;
                            }
                        for (var n in a._layerIndex2ShadowNodeMap)
                            if (a._layerIndex2ShadowNodeMap[n] === e) {
                                delete a._layerIndex2ShadowNodeMap[n];
                                break;
                            }
                        e.destroy();
                    }
                }
            }, a = this;
            try {
                for (var l = __values(n), s = l.next(); !s.done; s = l.next())
                    i(s.value);
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
        }
    };
    TileNodeManager.prototype.getFirstLayer = function () {
        return this._layerIndex2NodeMap[0];
    };
    TileNodeManager.prototype.createLayer = function (e, t) {
        if (t === void 0) { t = 0; }
        var o = this._currentZIndexBase + 2 * e, n = new cc.Node();
        n.setParent(this.root);
        n.setContentSize(this.root.getContentSize());
        n.setPosition(0, 0, 0);
        n.setScale(1, 1, 1);
        n.name = "shadowlayer_" + e + "_batch" + t;
        n.zIndex = o;
        this._layerIndex2ShadowNodeMap[e] = n;
        var i = new cc.Node();
        i.setContentSize(this.root.getContentSize());
        i.setParent(this.root);
        i.setPosition(0, 0, 0);
        i.setScale(1, 1, 1);
        i.name = "layer_" + e + "_batch" + t;
        i.zIndex = o + 1;
        this._layerIndex2NodeMap[e] = i;
    };
    TileNodeManager.prototype.createLayerNodeObjects = function (e, t) {
        return __awaiter(this, void 0, Promise, function () {
            var o, n, r, a, l, s, c, u, p;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        this._sameLayerMap.has(e.layerIndex) || this._sameLayerMap.set(e.layerIndex, new Map());
                        o = this._sameLayerMap.get(e.layerIndex);
                        n = e.allCards;
                        if (0 === (r = n.length))
                            return [2];
                        a = t ? new Set(t.map(function (e) {
                            return e.tile.id;
                        })) : null;
                        l = 30;
                        s = 0;
                        i.label = 1;
                    case 1:
                        if (!(s < r))
                            return [3, 6];
                        c = Date.now();
                        i.label = 2;
                    case 2:
                        return s < r ? Date.now() - c >= l ? [4, this.waitNextFrame()] : [3, 4] : [3, 5];
                    case 3:
                        i.sent();
                        return [3, 5];
                    case 4:
                        if (!(u = n[s]).isValid) {
                            s++;
                            return [3, 2];
                        }
                        if (a && a.has(u.id) && this.handleFallingTileNode(u, e.layerIndex, s)) {
                            s++;
                            return [3, 2];
                        }
                        if (p = this.createTileNodeObject(u, s, e.layerIndex)) {
                            this._tileNodeMap.set(u.id, p);
                            o.set(u.id, p);
                            p.hide();
                        }
                        s++;
                        return [3, 2];
                    case 5:
                        return [3, 1];
                    case 6:
                        this.updateLayerSiblingIndexes(e.layerIndex);
                        return [2];
                }
            });
        });
    };
    TileNodeManager.prototype.waitNextFrame = function () {
        var e = this;
        return new Promise(function (t) {
            if (!e._scheduleComponent || !cc.isValid(e._scheduleComponent)) {
                var o = new cc.Node();
                o.parent = e.root;
                e._scheduleComponent = o.addComponent(cc.Component);
            }
            e._scheduleComponent.scheduleOnce(function () {
                t();
            }, 0);
        });
    };
    TileNodeManager.prototype.createTileNodeObject = function (e, t, o) {
        var n = this._layerIndex2ShadowNodeMap[o], i = this._layerIndex2NodeMap[o];
        if (!n || !i)
            return null;
        var r = TileNodeFactory_1.TileNodeFactory.getInstance().getTileNodeObject(e, this.context.gameType);
        r.refreshNode({
            context: this.context,
            tileObject: e,
            layerNode: this._layerIndex2NodeMap[o],
            shadowLayerNode: this._layerIndex2ShadowNodeMap[o],
            index: t,
            layerIndex: o,
            cardLayoutConfig: this._cardLayoutConfig
        });
        return r;
    };
    TileNodeManager.prototype.clearAllTileNodes = function () {
        var e, t, o;
        this._tileNodeMap.forEach(function (e) {
            e.onlyClear();
        });
        this._tileNodeMap.clear();
        this._sameLayerMap.clear();
        null === (e = this.root) || void 0 === e || e.removeAllChildren();
        null === (t = this.dragRoot) || void 0 === t || t.removeAllChildren();
        this._layerIndex2NodeMap = {};
        this._layerIndex2ShadowNodeMap = {};
        this._cardLayoutConfig = null;
        this._cardConfigMap = null;
        this._currentZIndexBase = 0;
        null === (o = this._scheduleComponent) || void 0 === o || o.unscheduleAllCallbacks();
        this._scheduleComponent = null;
    };
    TileNodeManager.prototype.destroy = function () {
        var e;
        null === (e = this._scheduleComponent) || void 0 === e || e.unscheduleAllCallbacks();
        this._scheduleComponent = null;
        this._layerIndex2NodeMap = {};
        this._layerIndex2ShadowNodeMap = {};
        this._cardLayoutConfig = null;
        this._cardConfigMap = null;
        this._tileMapObject = null;
        this._context = null;
    };
    TileNodeManager.prototype.handleFallingTileNode = function (e, t, o) {
        var n, i;
        this._sameLayerMap.has(t) || this._sameLayerMap.set(t, new Map());
        var l = this._sameLayerMap.get(t), s = this._tileNodeMap.get(e.id);
        if (!s)
            return false;
        this.updateTileNodeLayer(s, t, o);
        try {
            for (var c = __values(this._sameLayerMap.entries()), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = p[0], d = p[1];
                if (f !== t && d.has(e.id)) {
                    d.delete(e.id);
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
                u && !u.done && (i = c.return) && i.call(c);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        l.set(e.id, s);
        return true;
    };
    TileNodeManager.prototype.updateTileNodeLayer = function (e, t, o) {
        var n = this._layerIndex2NodeMap[t], i = this._layerIndex2ShadowNodeMap[t];
        if (n && i) {
            var r = e.cardNode;
            cc.isValid(r) && r.parent && (r.parent = n);
            var a = e.shadowCardNode;
            cc.isValid(a) && a.parent && (a.parent = i);
            e.info.layerNode = n;
            e.info.shadowLayerNode = i;
            e.info.layerIndex = t;
            e.info.index = o;
        }
    };
    TileNodeManager.prototype.updateLayerSiblingIndexes = function (e) {
        var t, o, n, i, a = this._sameLayerMap.get(e);
        if (a && 0 !== a.size)
            try {
                for (var l = __values(a.values()), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    null !== (i = null === (n = c.info) || void 0 === n ? void 0 : n.tileObject) && void 0 !== i && i.getIsInSlotBar() || c.resetSiblingIndex();
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
    };
    TileNodeManager.prototype.updateLayerShadowSize = function (e) {
        var t, o, n = this._sameLayerMap.get(e);
        if (n && 0 !== n.size)
            try {
                for (var i = __values(n.values()), a = i.next(); !a.done; a = i.next())
                    a.value.resetShadowSize();
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
    };
    return TileNodeManager;
}());
exports.default = TileNodeManager;

cc._RF.pop();