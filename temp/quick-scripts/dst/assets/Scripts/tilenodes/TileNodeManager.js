
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tilenodes/TileNodeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVub2Rlcy9UaWxlTm9kZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFzRTtBQUN0RSxxREFBb0Q7QUFDcEQ7SUFvQkUseUJBQVksQ0FBQztRQW5CYixpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDhCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQVdwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQWZELHNCQUFJLGlDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksb0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQVFELHNDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUFVLENBQUMsT0FBTztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1RyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pHLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1RyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxD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SUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDbkc7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBem5CQSxBQXluQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRpbGVOb2RlRmFjdG9yeSB9IGZyb20gJy4vVGlsZU5vZGVGYWN0b3J5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVOb2RlTWFuYWdlciB7XG4gIF90aWxlTm9kZU1hcCA9IG5ldyBNYXAoKTtcbiAgX3NjaGVkdWxlQ29tcG9uZW50ID0gbnVsbDtcbiAgX2N1cnJlbnRaSW5kZXhCYXNlID0gMDtcbiAgX3NhbWVMYXllck1hcCA9IG5ldyBNYXAoKTtcbiAgX2xheWVySW5kZXgyTm9kZU1hcCA9IHt9O1xuICBfbGF5ZXJJbmRleDJTaGFkb3dOb2RlTWFwID0ge307XG4gIF9jb250ZXh0ID0gbnVsbDtcbiAgX2NhcmRMYXlvdXRDb25maWcgPSBudWxsO1xuICBfY2FyZENvbmZpZ01hcCA9IG51bGw7XG4gIF90aWxlTWFwT2JqZWN0ID0gbnVsbDtcbiAgZ2V0IHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5nYW1lVmlldy5ub2RlQ2FyZFJvb3Q7XG4gIH1cbiAgZ2V0IGRyYWdSb290KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2FtZVZpZXcubm9kZURyYWdDYXJkUm9vdDtcbiAgfVxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IGU7XG4gICAgdGhpcy5fY29udGV4dC5zZXRUaWxlTm9kZU1hbmFnZXIodGhpcyk7XG4gICAgdmFyIHQgPSBuZXcgY2MuTm9kZSgpO1xuICAgIHQucGFyZW50ID0gdGhpcy5yb290O1xuICAgIHRoaXMuX3NjaGVkdWxlQ29tcG9uZW50ID0gdC5hZGRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcbiAgfVxuICBnZXRUaWxlTm9kZXMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gQXJyYXkuZnJvbSh0aGlzLl90aWxlTm9kZU1hcC52YWx1ZXMoKSk7XG4gICAgaWYgKChudWxsID09PSAoZSA9IHRoaXMuY29udGV4dCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nYW1lVHlwZSkgIT0gTWpHYW1lVHlwZS5DbGFzc2ljKSByZXR1cm4gdDtcbiAgICB0LnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBvLFxuICAgICAgICBuLFxuICAgICAgICBpLFxuICAgICAgICByLFxuICAgICAgICBhLFxuICAgICAgICBsLFxuICAgICAgICBzLFxuICAgICAgICBjLFxuICAgICAgICB1LFxuICAgICAgICBwLFxuICAgICAgICBmLFxuICAgICAgICBkLFxuICAgICAgICBoID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAobyA9IGUudGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ncmlkUG9zWCkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDAsXG4gICAgICAgIHkgPSBudWxsICE9PSAociA9IG51bGwgPT09IChpID0gZS50aWxlT2JqZWN0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdyaWRQb3NZKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMCxcbiAgICAgICAgbSA9IG51bGwgIT09IChsID0gbnVsbCA9PT0gKGEgPSBlLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEubGF5ZXIpICYmIHZvaWQgMCAhPT0gbCA/IGwgOiAwLFxuICAgICAgICB2ID0gbnVsbCAhPT0gKGMgPSBudWxsID09PSAocyA9IHQudGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSBzID8gdm9pZCAwIDogcy5ncmlkUG9zWCkgJiYgdm9pZCAwICE9PSBjID8gYyA6IDAsXG4gICAgICAgIGcgPSBudWxsICE9PSAocCA9IG51bGwgPT09ICh1ID0gdC50aWxlT2JqZWN0KSB8fCB2b2lkIDAgPT09IHUgPyB2b2lkIDAgOiB1LmdyaWRQb3NZKSAmJiB2b2lkIDAgIT09IHAgPyBwIDogMCxcbiAgICAgICAgXyA9IG51bGwgIT09IChkID0gbnVsbCA9PT0gKGYgPSB0LnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gZiA/IHZvaWQgMCA6IGYubGF5ZXIpICYmIHZvaWQgMCAhPT0gZCA/IGQgOiAwO1xuICAgICAgaWYgKG0gIT09IF8pIHJldHVybiBtIC0gXztcbiAgICAgIHZhciBUID0gaCArIDIgKiB5LFxuICAgICAgICBDID0gdiArIDIgKiBnO1xuICAgICAgcmV0dXJuIFQgPT09IEMgPyBoIC0gdiA6IFQgLSBDO1xuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIGdldFRpbGVOb2RlQnlUaWxlSWQoZSkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBudWxsID09PSAodCA9IHRoaXMuX3RpbGVOb2RlTWFwKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldChlKTtcbiAgfVxuICBnZXRTYW1lTGF5ZXJNYXAoZSkge1xuICAgIHJldHVybiB0aGlzLl9zYW1lTGF5ZXJNYXAuZ2V0KGUpO1xuICB9XG4gIHJlYnVpbGRUaWxlTm9kZUluZm9zQWZ0ZXJTaHVmZmxlKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhlKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGYgPSBwLnZhbHVlLFxuICAgICAgICAgIGQgPSBudWxsID09PSAoYSA9IGYuaW5mbykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS50aWxlT2JqZWN0O1xuICAgICAgICBpZiAoZCAmJiBkLmlzVmFsaWQpIHtcbiAgICAgICAgICBpZiAoZC5nZXRUeXBlQml0cygpICE9PSBmLnR5cGVCaXRzKSB7XG4gICAgICAgICAgICB2YXIgaCA9IGYuY2FyZE5vZGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICAgICAgeSA9IGYuc2hhZG93Q2FyZE5vZGUucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIGYub25seUNsZWFyKCk7XG4gICAgICAgICAgICBmID0gdGhpcy5jcmVhdGVUaWxlTm9kZU9iamVjdChkLCBmLmluZm8uaW5kZXgsIGYuaW5mby5sYXllckluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuX3RpbGVOb2RlTWFwLnNldChkLmlkLCBmKTtcbiAgICAgICAgICAgIGYuY2FyZE5vZGUucG9zaXRpb24gPSBoO1xuICAgICAgICAgICAgZi5zaGFkb3dDYXJkTm9kZS5wb3NpdGlvbiA9IHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBtID0gZi5pbmZvLmxheWVySW5kZXgsXG4gICAgICAgICAgICB2ID0gZC5sYXllcjtcbiAgICAgICAgICBudWxsID09PSAobCA9IHRoaXMuX3NhbWVMYXllck1hcC5nZXQobSkpIHx8IHZvaWQgMCA9PT0gbCB8fCBsLmRlbGV0ZShkLmlkKTtcbiAgICAgICAgICB0aGlzLl9zYW1lTGF5ZXJNYXAuaGFzKHYpIHx8IHRoaXMuX3NhbWVMYXllck1hcC5zZXQodiwgbmV3IE1hcCgpKTtcbiAgICAgICAgICB2YXIgZyA9IHRoaXMuX2xheWVySW5kZXgyTm9kZU1hcFt2XSxcbiAgICAgICAgICAgIF8gPSB0aGlzLl9sYXllckluZGV4MlNoYWRvd05vZGVNYXBbdl0sXG4gICAgICAgICAgICBUID0gbnVsbCA9PT0gKHMgPSB0aGlzLl90aWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLm1hcExheWVycygpW3ZdLFxuICAgICAgICAgICAgQyA9IFQgPyBULmFsbENhcmRzLmluZGV4T2YoZCkgOiAtMTtcbiAgICAgICAgICBmLmluZm8ubGF5ZXJJbmRleCA9IHY7XG4gICAgICAgICAgZi5pbmZvLmxheWVyTm9kZSA9IGc7XG4gICAgICAgICAgZi5pbmZvLnNoYWRvd0xheWVyTm9kZSA9IF87XG4gICAgICAgICAgQyA+PSAwICYmIChmLmluZm8uaW5kZXggPSBDKTtcbiAgICAgICAgICBnICYmIGNjLmlzVmFsaWQoZykgJiYgZi5jYXJkTm9kZS5zZXRQYXJlbnQoZyk7XG4gICAgICAgICAgXyAmJiBjYy5pc1ZhbGlkKF8pICYmIGYuc2hhZG93Q2FyZE5vZGUuc2V0UGFyZW50KF8pO1xuICAgICAgICAgIHRoaXMuX3NhbWVMYXllck1hcC5nZXQodikuc2V0KGQuaWQsIGYpO1xuICAgICAgICAgIGMuYWRkKG0pO1xuICAgICAgICAgIGMuYWRkKHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobyA9IHUucmV0dXJuKSAmJiBvLmNhbGwodSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGIgPSBfX3ZhbHVlcyhjKSwgRSA9IGIubmV4dCgpOyAhRS5kb25lOyBFID0gYi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIFMgPSBFLnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyU2libGluZ0luZGV4ZXMoUyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEUgJiYgIUUuZG9uZSAmJiAoaSA9IGIucmV0dXJuKSAmJiBpLmNhbGwoYik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVidWlsZENoYW5nZVR5cGVUaWxlTm9kZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGUpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGMudmFsdWU7XG4gICAgICAgIGwucHVzaCh1LmluZm8udGlsZU9iamVjdC5pZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IHMucmV0dXJuKSAmJiBvLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhsKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBmLnZhbHVlLFxuICAgICAgICAgIGggPSB0aGlzLl90aWxlTm9kZU1hcC5nZXQoZCk7XG4gICAgICAgIGlmIChoKSBpZiAoaC5pbml0VHlwZSAhPSBoLmluZm8udGlsZU9iamVjdC5zaG93VHlwZSkge1xuICAgICAgICAgIHZhciB5ID0gaC5pbmZvO1xuICAgICAgICAgIHRoaXMuX3NhbWVMYXllck1hcC5oYXMoeS5sYXllckluZGV4KSB8fCB0aGlzLl9zYW1lTGF5ZXJNYXAuc2V0KHkubGF5ZXJJbmRleCwgbmV3IE1hcCgpKTtcbiAgICAgICAgICBoLm9ubHlDbGVhcigpO1xuICAgICAgICAgIHZhciBtID0gdGhpcy5jcmVhdGVUaWxlTm9kZU9iamVjdCh5LnRpbGVPYmplY3QsIHkuaW5kZXgsIHkubGF5ZXJJbmRleCk7XG4gICAgICAgICAgbnVsbCA9PT0gKGEgPSB0aGlzLl9zYW1lTGF5ZXJNYXAuZ2V0KHkubGF5ZXJJbmRleCkpIHx8IHZvaWQgMCA9PT0gYSB8fCBhLnNldChkLCBtKTtcbiAgICAgICAgICB0aGlzLl90aWxlTm9kZU1hcC5zZXQoZCwgbSk7XG4gICAgICAgICAgbS5yZXNldFNpYmxpbmdJbmRleCgpO1xuICAgICAgICB9IGVsc2UgaC5yZWZyZXNoTm9kZShoLmluZm8pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKGkgPSBwLnJldHVybikgJiYgaS5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlYnVpbGRBbGxUaWxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUubGFiZWwpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGlsZU1hcE9iamVjdCAmJiB0aGlzLl9jYXJkTGF5b3V0Q29uZmlnICYmIHRoaXMuX2NhcmRDb25maWdNYXAgPyBbNCwgdGhpcy5jcmVhdGVBbGxUaWxlTm9kZXMoe1xuICAgICAgICAgICAgICB0aWxlTWFwT2JqZWN0OiB0aGlzLl90aWxlTWFwT2JqZWN0LFxuICAgICAgICAgICAgICBjYXJkTGF5b3V0Q29uZmlnOiB0aGlzLl9jYXJkTGF5b3V0Q29uZmlnLFxuICAgICAgICAgICAgICBjYXJkQ29uZmlnTWFwOiB0aGlzLl9jYXJkQ29uZmlnTWFwXG4gICAgICAgICAgICB9KV0gOiBbMl07XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZS5zZW50KCk7XG4gICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGVBbGxUaWxlTm9kZXMoZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdCwgbywgbjtcbiAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICBzd2l0Y2ggKGkubGFiZWwpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLmNsZWFyQWxsVGlsZU5vZGVzKCk7XG4gICAgICAgICAgICB0aGlzLl90aWxlTWFwT2JqZWN0ID0gZS50aWxlTWFwT2JqZWN0O1xuICAgICAgICAgICAgdGhpcy5fY2FyZExheW91dENvbmZpZyA9IGUuY2FyZExheW91dENvbmZpZztcbiAgICAgICAgICAgIHRoaXMuX2NhcmRDb25maWdNYXAgPSBlLmNhcmRDb25maWdNYXA7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50WkluZGV4QmFzZSA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGV4dC5nYW1lVHlwZSAhPSBNakdhbWVUeXBlLkNsYXNzaWMpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICBvID0gMDtcbiAgICAgICAgICAgIGkubGFiZWwgPSAxO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmICghKG8gPCB0aGlzLl90aWxlTWFwT2JqZWN0Lm1hcExheWVycygpLmxlbmd0aCkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICBpZiAoIShuID0gdGhpcy5fdGlsZU1hcE9iamVjdC5tYXBMYXllcnMoKVtvXSkuaGFzVmFsaWRDYXJkKCkpIHJldHVybiBbMywgM107XG4gICAgICAgICAgICB0ID0gbi5hbGxDYXJkcy5sZW5ndGggPiAwID8gbi5hbGxDYXJkc1swXS5iYXRjaElkIDogMDtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIobi5sYXllckluZGV4LCB0KTtcbiAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jcmVhdGVMYXllck5vZGVPYmplY3RzKG4pXTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpLnNlbnQoKTtcbiAgICAgICAgICAgIGkubGFiZWwgPSAzO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIG8rKztcbiAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBvID0gMDtcbiAgICAgICAgICAgIGkubGFiZWwgPSA2O1xuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGlmICghKG8gPD0gdGhpcy5fdGlsZU1hcE9iamVjdC5tYXhMYXllckluZGV4KSkgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICAgIG4gPSB0aGlzLl90aWxlTWFwT2JqZWN0Lm1hcExheWVycygpW29dO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcihvLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5jcmVhdGVMYXllck5vZGVPYmplY3RzKG4pXTtcbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBpLnNlbnQoKTtcbiAgICAgICAgICAgIGkubGFiZWwgPSA4O1xuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIG8rKztcbiAgICAgICAgICAgIHJldHVybiBbMywgNl07XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNldFRpbGVOb2RlTWFwKHRoaXMuX3RpbGVOb2RlTWFwKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbGVOb2RlTWFwLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgZS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHVwZGF0ZUV4aXN0aW5nTGF5ZXJzTWFwcGluZyhlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGk7XG4gICAgaWYgKCEoZSA8PSAwKSkge1xuICAgICAgdmFyIGEgPSBPYmplY3Qua2V5cyh0aGlzLl9sYXllckluZGV4Mk5vZGVNYXApLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludChlKTtcbiAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiB0IC0gZTtcbiAgICAgICAgfSksXG4gICAgICAgIGwgPSB7fSxcbiAgICAgICAgcyA9IHt9LFxuICAgICAgICBjID0gbmV3IE1hcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGEpLCBwID0gdS5uZXh0KCk7ICFwLmRvbmU7IHAgPSB1Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBmID0gcC52YWx1ZSxcbiAgICAgICAgICAgIGQgPSBmICsgZSxcbiAgICAgICAgICAgIGggPSB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbZl07XG4gICAgICAgICAgaWYgKGggJiYgY2MuaXNWYWxpZChoKSkge1xuICAgICAgICAgICAgbFtkXSA9IGg7XG4gICAgICAgICAgICBoLm5hbWUgPSBoLm5hbWUucmVwbGFjZShcImxheWVyX1wiICsgZiArIFwiX1wiLCBcImxheWVyX1wiICsgZCArIFwiX1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHkgPSB0aGlzLl9sYXllckluZGV4MlNoYWRvd05vZGVNYXBbZl07XG4gICAgICAgICAgaWYgKHkgJiYgY2MuaXNWYWxpZCh5KSkge1xuICAgICAgICAgICAgc1tkXSA9IHk7XG4gICAgICAgICAgICB5Lm5hbWUgPSB5Lm5hbWUucmVwbGFjZShcInNoYWRvd2xheWVyX1wiICsgZiArIFwiX1wiLCBcInNoYWRvd2xheWVyX1wiICsgZCArIFwiX1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG0gPSB0aGlzLl9zYW1lTGF5ZXJNYXAuZ2V0KGYpO1xuICAgICAgICAgIGlmIChtICYmIGggJiYgY2MuaXNWYWxpZChoKSkge1xuICAgICAgICAgICAgYy5zZXQoZCwgbSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gKG4gPSB2b2lkIDAsIF9fdmFsdWVzKG0udmFsdWVzKCkpKSwgZyA9IHYubmV4dCgpOyAhZy5kb25lOyBnID0gdi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgXyA9IGcudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5mbykge1xuICAgICAgICAgICAgICAgICAgXy5pbmZvLmxheWVySW5kZXggPSBkO1xuICAgICAgICAgICAgICAgICAgXy5pbmZvLmxheWVyTm9kZSA9IGg7XG4gICAgICAgICAgICAgICAgICBfLmluZm8uc2hhZG93TGF5ZXJOb2RlID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBnICYmICFnLmRvbmUgJiYgKGkgPSB2LnJldHVybikgJiYgaS5jYWxsKHYpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gdS5yZXR1cm4pICYmIG8uY2FsbCh1KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fbGF5ZXJJbmRleDJOb2RlTWFwID0gbDtcbiAgICAgIHRoaXMuX2xheWVySW5kZXgyU2hhZG93Tm9kZU1hcCA9IHM7XG4gICAgICB0aGlzLl9zYW1lTGF5ZXJNYXAgPSBjO1xuICAgIH1cbiAgfVxuICBjcmVhdGVOZXh0TGV2ZWxUaWxlTm9kZXMoZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0LCBvLCBuLCBhLCBzLCBjLCB1LCBwLCBmLCBkLCBoLCB5LCBtLCB2LCBnO1xuICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHN3aXRjaCAoaS5sYWJlbCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHQgPSBlLmFkZExheWVycy5sZW5ndGg7XG4gICAgICAgICAgICBvID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgX19zcHJlYWQoZS5hZGRMYXllcnMpKSArIDE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nTGF5ZXJzTWFwcGluZyhvKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRaSW5kZXhCYXNlIC09IDIgKiB0O1xuICAgICAgICAgICAgbiA9IFtdO1xuICAgICAgICAgICAgZS5vcGVuR2VuZXJhdGVTdGF0ZSB8fCAobiA9IGUuZmFpbGluZ1RpbGVzKTtcbiAgICAgICAgICAgIGEgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHMgPSBfX3ZhbHVlcyhuKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB1ID0gYy52YWx1ZTtcbiAgICAgICAgICAgICAgICBhLmhhcyh1Lm5ld0xheWVyKSB8fCBhLnNldCh1Lm5ld0xheWVyLCBbXSk7XG4gICAgICAgICAgICAgICAgYS5nZXQodS5uZXdMYXllcikucHVzaCh1KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB2ID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGMgJiYgIWMuZG9uZSAmJiAoZyA9IHMucmV0dXJuKSAmJiBnLmNhbGwocyk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHYpIHRocm93IHYuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAgPSAwO1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICBpLmxhYmVsID0gMTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpZiAoISh5IDwgdCkpIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICBtID0gZS5hZGRMYXllcnNbeV07XG4gICAgICAgICAgICBpZiAoIShmID0gdGhpcy5fdGlsZU1hcE9iamVjdC5tYXBMYXllcnMoKVttXSkgfHwgIWYuaGFzVmFsaWRDYXJkKCkpIHJldHVybiBbMywgM107XG4gICAgICAgICAgICBkID0gZi5hbGxDYXJkcy5sZW5ndGggPiAwID8gZi5hbGxDYXJkc1swXS5iYXRjaElkIDogMDtcbiAgICAgICAgICAgIHRoaXMuX2xheWVySW5kZXgyTm9kZU1hcFttXSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2xheWVySW5kZXgyTm9kZU1hcFttXSkgfHwgdGhpcy5jcmVhdGVMYXllcihtLCBkKTtcbiAgICAgICAgICAgIHAgPSBkO1xuICAgICAgICAgICAgaCA9IGEuZ2V0KG0pO1xuICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmNyZWF0ZUxheWVyTm9kZU9iamVjdHMoZiwgaCldO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGkuc2VudCgpO1xuICAgICAgICAgICAgaS5sYWJlbCA9IDM7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgbzsgeSsrKSB7XG4gICAgICAgICAgICAgIG0gPSB5O1xuICAgICAgICAgICAgICB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbbV0gJiYgY2MuaXNWYWxpZCh0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbbV0pIHx8IHRoaXMuY3JlYXRlTGF5ZXIobSwgcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90aWxlTm9kZU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGUuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkZXN0b3J5RW1wdHlMYXllck5vZGVzKCkge1xuICAgIHZhciBlLCB0LCBvO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucm9vdCkpIHtcbiAgICAgIHZhciBuID0gdGhpcy5yb290LmNoaWxkcmVuLFxuICAgICAgICBpID0gZnVuY3Rpb24gaShlKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZSkgJiYgMCA9PSAobnVsbCA9PT0gKG8gPSBlLmNoaWxkcmVuKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZmFsc2U7XG4gICAgICAgICAgICBhLl90aWxlTm9kZU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgIG8uaW5mby5sYXllck5vZGUgIT09IGUgJiYgby5pbmZvLnNoYWRvd0xheWVyTm9kZSAhPT0gZSB8fCAodCA9IHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBhLl9sYXllckluZGV4Mk5vZGVNYXApIGlmIChhLl9sYXllckluZGV4Mk5vZGVNYXBbbl0gPT09IGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgYS5fbGF5ZXJJbmRleDJOb2RlTWFwW25dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gYS5fbGF5ZXJJbmRleDJTaGFkb3dOb2RlTWFwKSBpZiAoYS5fbGF5ZXJJbmRleDJTaGFkb3dOb2RlTWFwW25dID09PSBlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGEuX2xheWVySW5kZXgyU2hhZG93Tm9kZU1hcFtuXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGEgPSB0aGlzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKG4pLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkgaShzLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKHQgPSBsLnJldHVybikgJiYgdC5jYWxsKGwpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldEZpcnN0TGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVySW5kZXgyTm9kZU1hcFswXTtcbiAgfVxuICBjcmVhdGVMYXllcihlLCB0ID0gMCkge1xuICAgIHZhciBvID0gdGhpcy5fY3VycmVudFpJbmRleEJhc2UgKyAyICogZSxcbiAgICAgIG4gPSBuZXcgY2MuTm9kZSgpO1xuICAgIG4uc2V0UGFyZW50KHRoaXMucm9vdCk7XG4gICAgbi5zZXRDb250ZW50U2l6ZSh0aGlzLnJvb3QuZ2V0Q29udGVudFNpemUoKSk7XG4gICAgbi5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICBuLnNldFNjYWxlKDEsIDEsIDEpO1xuICAgIG4ubmFtZSA9IFwic2hhZG93bGF5ZXJfXCIgKyBlICsgXCJfYmF0Y2hcIiArIHQ7XG4gICAgbi56SW5kZXggPSBvO1xuICAgIHRoaXMuX2xheWVySW5kZXgyU2hhZG93Tm9kZU1hcFtlXSA9IG47XG4gICAgdmFyIGkgPSBuZXcgY2MuTm9kZSgpO1xuICAgIGkuc2V0Q29udGVudFNpemUodGhpcy5yb290LmdldENvbnRlbnRTaXplKCkpO1xuICAgIGkuc2V0UGFyZW50KHRoaXMucm9vdCk7XG4gICAgaS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICBpLnNldFNjYWxlKDEsIDEsIDEpO1xuICAgIGkubmFtZSA9IFwibGF5ZXJfXCIgKyBlICsgXCJfYmF0Y2hcIiArIHQ7XG4gICAgaS56SW5kZXggPSBvICsgMTtcbiAgICB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbZV0gPSBpO1xuICB9XG4gIGNyZWF0ZUxheWVyTm9kZU9iamVjdHMoZSwgdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbywgbiwgciwgYSwgbCwgcywgYywgdSwgcDtcbiAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICBzd2l0Y2ggKGkubGFiZWwpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLl9zYW1lTGF5ZXJNYXAuaGFzKGUubGF5ZXJJbmRleCkgfHwgdGhpcy5fc2FtZUxheWVyTWFwLnNldChlLmxheWVySW5kZXgsIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICBvID0gdGhpcy5fc2FtZUxheWVyTWFwLmdldChlLmxheWVySW5kZXgpO1xuICAgICAgICAgICAgbiA9IGUuYWxsQ2FyZHM7XG4gICAgICAgICAgICBpZiAoMCA9PT0gKHIgPSBuLmxlbmd0aCkpIHJldHVybiBbMl07XG4gICAgICAgICAgICBhID0gdCA/IG5ldyBTZXQodC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUudGlsZS5pZDtcbiAgICAgICAgICAgIH0pKSA6IG51bGw7XG4gICAgICAgICAgICBsID0gMzA7XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgIGkubGFiZWwgPSAxO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmICghKHMgPCByKSkgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgIGMgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaS5sYWJlbCA9IDI7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHMgPCByID8gRGF0ZS5ub3coKSAtIGMgPj0gbCA/IFs0LCB0aGlzLndhaXROZXh0RnJhbWUoKV0gOiBbMywgNF0gOiBbMywgNV07XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaS5zZW50KCk7XG4gICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGlmICghKHUgPSBuW3NdKS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIHMrKztcbiAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhICYmIGEuaGFzKHUuaWQpICYmIHRoaXMuaGFuZGxlRmFsbGluZ1RpbGVOb2RlKHUsIGUubGF5ZXJJbmRleCwgcykpIHtcbiAgICAgICAgICAgICAgcysrO1xuICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHAgPSB0aGlzLmNyZWF0ZVRpbGVOb2RlT2JqZWN0KHUsIHMsIGUubGF5ZXJJbmRleCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdGlsZU5vZGVNYXAuc2V0KHUuaWQsIHApO1xuICAgICAgICAgICAgICBvLnNldCh1LmlkLCBwKTtcbiAgICAgICAgICAgICAgcC5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzKys7XG4gICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiBbMywgMV07XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXllclNpYmxpbmdJbmRleGVzKGUubGF5ZXJJbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICB3YWl0TmV4dEZyYW1lKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICghZS5fc2NoZWR1bGVDb21wb25lbnQgfHwgIWNjLmlzVmFsaWQoZS5fc2NoZWR1bGVDb21wb25lbnQpKSB7XG4gICAgICAgIHZhciBvID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgby5wYXJlbnQgPSBlLnJvb3Q7XG4gICAgICAgIGUuX3NjaGVkdWxlQ29tcG9uZW50ID0gby5hZGRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcbiAgICAgIH1cbiAgICAgIGUuX3NjaGVkdWxlQ29tcG9uZW50LnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZVRpbGVOb2RlT2JqZWN0KGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IHRoaXMuX2xheWVySW5kZXgyU2hhZG93Tm9kZU1hcFtvXSxcbiAgICAgIGkgPSB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbb107XG4gICAgaWYgKCFuIHx8ICFpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgciA9IFRpbGVOb2RlRmFjdG9yeS5nZXRJbnN0YW5jZSgpLmdldFRpbGVOb2RlT2JqZWN0KGUsIHRoaXMuY29udGV4dC5nYW1lVHlwZSk7XG4gICAgci5yZWZyZXNoTm9kZSh7XG4gICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHQsXG4gICAgICB0aWxlT2JqZWN0OiBlLFxuICAgICAgbGF5ZXJOb2RlOiB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbb10sXG4gICAgICBzaGFkb3dMYXllck5vZGU6IHRoaXMuX2xheWVySW5kZXgyU2hhZG93Tm9kZU1hcFtvXSxcbiAgICAgIGluZGV4OiB0LFxuICAgICAgbGF5ZXJJbmRleDogbyxcbiAgICAgIGNhcmRMYXlvdXRDb25maWc6IHRoaXMuX2NhcmRMYXlvdXRDb25maWdcbiAgICB9KTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBjbGVhckFsbFRpbGVOb2RlcygpIHtcbiAgICB2YXIgZSwgdCwgbztcbiAgICB0aGlzLl90aWxlTm9kZU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLm9ubHlDbGVhcigpO1xuICAgIH0pO1xuICAgIHRoaXMuX3RpbGVOb2RlTWFwLmNsZWFyKCk7XG4gICAgdGhpcy5fc2FtZUxheWVyTWFwLmNsZWFyKCk7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLnJvb3QpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLmRyYWdSb290KSB8fCB2b2lkIDAgPT09IHQgfHwgdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIHRoaXMuX2xheWVySW5kZXgyTm9kZU1hcCA9IHt9O1xuICAgIHRoaXMuX2xheWVySW5kZXgyU2hhZG93Tm9kZU1hcCA9IHt9O1xuICAgIHRoaXMuX2NhcmRMYXlvdXRDb25maWcgPSBudWxsO1xuICAgIHRoaXMuX2NhcmRDb25maWdNYXAgPSBudWxsO1xuICAgIHRoaXMuX2N1cnJlbnRaSW5kZXhCYXNlID0gMDtcbiAgICBudWxsID09PSAobyA9IHRoaXMuX3NjaGVkdWxlQ29tcG9uZW50KSB8fCB2b2lkIDAgPT09IG8gfHwgby51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgdGhpcy5fc2NoZWR1bGVDb21wb25lbnQgPSBudWxsO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9zY2hlZHVsZUNvbXBvbmVudCkgfHwgdm9pZCAwID09PSBlIHx8IGUudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIHRoaXMuX3NjaGVkdWxlQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXAgPSB7fTtcbiAgICB0aGlzLl9sYXllckluZGV4MlNoYWRvd05vZGVNYXAgPSB7fTtcbiAgICB0aGlzLl9jYXJkTGF5b3V0Q29uZmlnID0gbnVsbDtcbiAgICB0aGlzLl9jYXJkQ29uZmlnTWFwID0gbnVsbDtcbiAgICB0aGlzLl90aWxlTWFwT2JqZWN0ID0gbnVsbDtcbiAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDtcbiAgfVxuICBoYW5kbGVGYWxsaW5nVGlsZU5vZGUoZSwgdCwgbykge1xuICAgIHZhciBuLCBpO1xuICAgIHRoaXMuX3NhbWVMYXllck1hcC5oYXModCkgfHwgdGhpcy5fc2FtZUxheWVyTWFwLnNldCh0LCBuZXcgTWFwKCkpO1xuICAgIHZhciBsID0gdGhpcy5fc2FtZUxheWVyTWFwLmdldCh0KSxcbiAgICAgIHMgPSB0aGlzLl90aWxlTm9kZU1hcC5nZXQoZS5pZCk7XG4gICAgaWYgKCFzKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVUaWxlTm9kZUxheWVyKHMsIHQsIG8pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXModGhpcy5fc2FtZUxheWVyTWFwLmVudHJpZXMoKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgIGYgPSBwWzBdLFxuICAgICAgICAgIGQgPSBwWzFdO1xuICAgICAgICBpZiAoZiAhPT0gdCAmJiBkLmhhcyhlLmlkKSkge1xuICAgICAgICAgIGQuZGVsZXRlKGUuaWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAoaSA9IGMucmV0dXJuKSAmJiBpLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgbC5zZXQoZS5pZCwgcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdXBkYXRlVGlsZU5vZGVMYXllcihlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLl9sYXllckluZGV4Mk5vZGVNYXBbdF0sXG4gICAgICBpID0gdGhpcy5fbGF5ZXJJbmRleDJTaGFkb3dOb2RlTWFwW3RdO1xuICAgIGlmIChuICYmIGkpIHtcbiAgICAgIHZhciByID0gZS5jYXJkTm9kZTtcbiAgICAgIGNjLmlzVmFsaWQocikgJiYgci5wYXJlbnQgJiYgKHIucGFyZW50ID0gbik7XG4gICAgICB2YXIgYSA9IGUuc2hhZG93Q2FyZE5vZGU7XG4gICAgICBjYy5pc1ZhbGlkKGEpICYmIGEucGFyZW50ICYmIChhLnBhcmVudCA9IGkpO1xuICAgICAgZS5pbmZvLmxheWVyTm9kZSA9IG47XG4gICAgICBlLmluZm8uc2hhZG93TGF5ZXJOb2RlID0gaTtcbiAgICAgIGUuaW5mby5sYXllckluZGV4ID0gdDtcbiAgICAgIGUuaW5mby5pbmRleCA9IG87XG4gICAgfVxuICB9XG4gIHVwZGF0ZUxheWVyU2libGluZ0luZGV4ZXMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSA9IHRoaXMuX3NhbWVMYXllck1hcC5nZXQoZSk7XG4gICAgaWYgKGEgJiYgMCAhPT0gYS5zaXplKSB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKGEudmFsdWVzKCkpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgIG51bGwgIT09IChpID0gbnVsbCA9PT0gKG4gPSBjLmluZm8pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4udGlsZU9iamVjdCkgJiYgdm9pZCAwICE9PSBpICYmIGkuZ2V0SXNJblNsb3RCYXIoKSB8fCBjLnJlc2V0U2libGluZ0luZGV4KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobyA9IGwucmV0dXJuKSAmJiBvLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlTGF5ZXJTaGFkb3dTaXplKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcy5fc2FtZUxheWVyTWFwLmdldChlKTtcbiAgICBpZiAobiAmJiAwICE9PSBuLnNpemUpIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobi52YWx1ZXMoKSksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSBhLnZhbHVlLnJlc2V0U2hhZG93U2l6ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19