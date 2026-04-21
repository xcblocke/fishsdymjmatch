"use strict";
cc._RF.push(module, '39284bWpPVM9L9SEawF9xF4', 'TileNodePool');
// Scripts/TileNodePool.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileNodePool = void 0;
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodePool = /** @class */ (function () {
    function TileNodePool() {
        this._maxPoolSize = 500;
        this._maxShadowPoolSize = 500;
        this._nodePool = new cc.NodePool();
        this._nodeShadowPool = new cc.NodePool();
        this._nameList = [BaseTileNode_1.ETileNodeNames.imgCardBg, BaseTileNode_1.ETileNodeNames.imgCard];
        this._optionalNameList = [BaseTileNode_1.ETileNodeNames.imgSelectedCardBg, BaseTileNode_1.ETileNodeNames.imgLockBg, BaseTileNode_1.ETileNodeNames.imgSelected, BaseTileNode_1.ETileNodeNames.effectPropHint, BaseTileNode_1.ETileNodeNames.effectSelected];
        this._shadowNameList = [BaseTileNode_1.ETileShadowNodeNames.imgShadow];
        this.PREFILL_COUNT = 150;
        this._nameSet = new Set(__spreadArrays(this._nameList, this._optionalNameList));
        this._shadowNameSet = new Set(this._shadowNameList);
    }
    TileNodePool.getInstance = function () {
        TileNodePool._instance || (TileNodePool._instance = new TileNodePool());
        return TileNodePool._instance;
    };
    TileNodePool.prototype.preLoadNode = function () {
        this.prefillPool(this.PREFILL_COUNT);
    };
    TileNodePool.prototype.pushCacheNode = function (e) {
        e && cc.isValid(e) && (this._nodePool.size() >= this._maxPoolSize ? e.destroy() : this.resetCacheNode(e) ? this._nodePool.put(e) : e.destroy());
    };
    TileNodePool.prototype.getCacheNode = function () {
        return this._nodePool.size() > 0 ? this._nodePool.get() : this.createNode();
    };
    TileNodePool.prototype.resetNode = function (e) {
        e.setPosition(0, 0, 0);
        e.scale = 1;
        e.angle = 0;
        e.setAnchorPoint(0.5, 0.5);
        e.setContentSize(0, 0);
        e.opacity = 255;
        e.zIndex = 0;
        e.active = true;
        e.color = new cc.Color(255, 255, 255, 255);
        var t = e.getComponent(cc.Sprite);
        if (t) {
            t.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            t.trim = false;
        }
        cc.Tween.stopAllByTarget(e);
    };
    TileNodePool.prototype.getAndCleanNode = function (e, t) {
        var o = e.getChildByName(t);
        o && this.resetNode(o);
        return o;
    };
    TileNodePool.prototype.cleanupChildren = function (e, t) {
        for (var o = "string" == typeof t ? new Set([t]) : t, n = e.children, i = n.length - 1; i >= 0; i--) {
            var r = n[i];
            o.has(r.name) || r.destroy();
        }
    };
    TileNodePool.prototype.resetCacheNode = function (e) {
        var t, o, n, i;
        this.resetNode(e);
        var l = this.getAndCleanNode(e, BaseTileNode_1.TileAnimNodeName);
        if (!l)
            return false;
        this.cleanupChildren(e, BaseTileNode_1.TileAnimNodeName);
        var s = this.getAndCleanNode(l, BaseTileNode_1.TileNodeName);
        if (!s)
            return false;
        this.cleanupChildren(l, BaseTileNode_1.TileNodeName);
        try {
            for (var c = __values(this._nameList), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = this.getAndCleanNode(s, p);
                if (!f)
                    return false;
                f.zIndex = BaseTileNode_1.TileNodeZIndexMap[p];
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
        try {
            for (var d = __values(this._optionalNameList), h = d.next(); !h.done; h = d.next()) {
                p = h.value;
                var y = this.getAndCleanNode(s, p);
                if (y) {
                    y.zIndex = BaseTileNode_1.TileNodeZIndexMap[p];
                    y.active = false;
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
                h && !h.done && (i = d.return) && i.call(d);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        this.cleanupChildren(s, this._nameSet);
        return true;
    };
    TileNodePool.prototype.createNode = function () {
        var e, t, o = new cc.Node();
        o.name = "CardNode";
        var n = new cc.Node();
        n.name = BaseTileNode_1.TileAnimNodeName;
        n.parent = o;
        n.setPosition(0, 0, 0);
        n.setScale(1);
        var i = new cc.Node();
        i.name = BaseTileNode_1.TileNodeName;
        i.parent = n;
        i.setPosition(0, 0, 0);
        i.setScale(1);
        i.setAnchorPoint(0.5, 0.5);
        try {
            for (var l = __values(this._nameList), s = l.next(); !s.done; s = l.next()) {
                var c = s.value, u = new cc.Node();
                u.name = c;
                u.parent = i;
                u.zIndex = BaseTileNode_1.TileNodeZIndexMap[c];
                u.setAnchorPoint(0.5, 0.5);
                u.setPosition(0, 0, 0);
                var p = u.addComponent(cc.Sprite);
                p.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                p.trim = false;
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
        return o;
    };
    TileNodePool.prototype.createShadowNode = function () {
        var e, t, o = new cc.Node();
        o.name = "shadowCardNode";
        o.setPosition(0, 0, 0);
        o.setScale(1, 1, 1);
        try {
            for (var n = __values(this._shadowNameList), i = n.next(); !i.done; i = n.next()) {
                var l = i.value, s = new cc.Node();
                s.name = l;
                s.parent = o;
                s.zIndex = BaseTileNode_1.TileShadowNodeZIndexMap[l];
                s.setPosition(0, 0, 0);
                s.setAnchorPoint(0.5, 0.5);
                var c = s.addComponent(cc.Sprite);
                c.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                c.trim = false;
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
    };
    TileNodePool.prototype.resetCacheShadowNode = function (e) {
        var t, o;
        this.resetNode(e);
        try {
            for (var n = __values(this._shadowNameList), i = n.next(); !i.done; i = n.next()) {
                var l = i.value, s = this.getAndCleanNode(e, l);
                if (!s)
                    return false;
                s.zIndex = BaseTileNode_1.TileShadowNodeZIndexMap[l];
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this.cleanupChildren(e, this._shadowNameSet);
        return true;
    };
    TileNodePool.prototype.pushCacheShadowNode = function (e) {
        e && cc.isValid(e) && (this._nodeShadowPool.size() >= this._maxShadowPoolSize ? e.destroy() : this.resetCacheShadowNode(e) ? this._nodeShadowPool.put(e) : e.destroy());
    };
    TileNodePool.prototype.getCacheShadowNode = function () {
        return this._nodeShadowPool.size() > 0 ? this._nodeShadowPool.get() : this.createShadowNode();
    };
    TileNodePool.prototype.prefillPool = function (e) {
        var t = this._nodePool.size(), o = this._nodeShadowPool.size();
        Date.now();
        if (t < e)
            for (var n = e - t, i = 0; i < n; i++) {
                var r = this.createNode();
                this._nodePool.put(r);
            }
        if (o < e)
            for (n = e - o, i = 0; i < n; i++) {
                r = this.createShadowNode();
                this._nodeShadowPool.put(r);
            }
    };
    TileNodePool.prototype.clean = function () {
        this._nodePool.clear();
        this._nodeShadowPool.clear();
    };
    return TileNodePool;
}());
exports.TileNodePool = TileNodePool;

cc._RF.pop();