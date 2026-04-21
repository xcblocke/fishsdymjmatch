"use strict";
cc._RF.push(module, 'f89602kEBVELbWccnI4sE3G', 'LayerBatcher');
// Scripts/LayerBatcher.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerBatcher = void 0;
var property = cc._decorator.property;
var c = /** @class */ (function () {
    function c(e) {
        this.key = "";
        this.hasMask = false;
        this.nodes = [];
        this.originalOpacities = [];
        this.originalChildren = [];
        this.next = null;
        this.prev = null;
        this.key = e;
    }
    c.prototype.clear = function () {
        this.nodes.length = 0;
        this.originalOpacities.length = 0;
        this.originalChildren.length = 0;
        this.hasMask = false;
        this.next = null;
        this.prev = null;
    };
    return c;
}());
var u = /** @class */ (function () {
    function u() {
        this.items = {};
        this.head = null;
    }
    u.prototype.get = function (e) {
        return this.items[e] || null;
    };
    u.prototype.set = function (e, t) {
        this.items[t.key] = t;
        if (this.head) {
            if (e) {
                t.next = e.next;
                t.prev = e;
                e.next = t;
                t.next && (t.next.prev = t);
            }
            else {
                t.next = this.head;
                this.head.prev = t;
                this.head = t;
            }
        }
        else
            this.head = t;
    };
    u.prototype.clear = function () {
        for (var e = this.head; e;) {
            var t = e.next;
            e.clear();
            e = t;
        }
        this.items = {};
        this.head = null;
    };
    return u;
}());
var LayerBatcher = /** @class */ (function (_super) {
    __extends(LayerBatcher, _super);
    function LayerBatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queue = new u();
        _this.originalChildren = [];
        _this._renderIndexCounter = 0;
        _this.useRenderIndex = true;
        _this.cullingViewport = null;
        return _this;
    }
    LayerBatcher.prototype.onLoad = function () {
        cc.director.on(cc.Director.EVENT_BEFORE_DRAW, this.onBeforeDraw, this);
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, this.onAfterDraw, this);
    };
    LayerBatcher.prototype.onDestroy = function () {
        cc.director.targetOff(this);
        this.queue.clear();
        this.originalChildren.length = 0;
    };
    LayerBatcher.prototype.onBeforeDraw = function () {
        this.node && this.node.isValid && this.node.active && this.reorganizeNodeTree();
    };
    LayerBatcher.prototype.onAfterDraw = function () {
        this.node && this.node.isValid && this.restoreNodeTree();
    };
    LayerBatcher.prototype.reorganizeNodeTree = function () {
        for (var e, t = null === (e = this.cullingViewport) || void 0 === e ? void 0 : e.getBoundingBoxToWorld(), o = this.node.children, n = 0; n < o.length; n++) {
            var i = o[n];
            if (i.activeInHierarchy) {
                if (t) {
                    var r = i.getBoundingBoxToWorld();
                    if (!t.intersects(r))
                        continue;
                }
                this.useRenderIndex && (this._renderIndexCounter = 0);
                this.collectRenderNodes(i, null, true, 0, 1);
            }
        }
        this.originalChildren = this.node._children;
        for (var a = [], s = this.queue.head; s;) {
            var c = s.nodes, u = s.originalChildren, p = s.hasMask;
            for (n = 0; n < c.length; n++) {
                u[n] = c[n]._children;
                p || (c[n]._children = []);
            }
            a.push.apply(a, __spreadArrays(c));
            s = s.next;
        }
        this.node._children = a;
    };
    LayerBatcher.prototype.restoreNodeTree = function () {
        this.node._children.length = 0;
        this.node._children = this.originalChildren;
        for (var e = this.queue.head; e;) {
            for (var t = e.nodes, o = e.originalChildren, n = e.originalOpacities, i = 0; i < t.length; i++) {
                t[i]._children = o[i];
                t[i].opacity = n[i];
            }
            e = e.next;
        }
        this.queue.clear();
    };
    LayerBatcher.prototype.collectRenderNodes = function (e, t, o, n, i) {
        var r = e.getComponent(cc.RenderComponent), a = i * (e.opacity / 255), l = this.generateLayerKey(e, n), s = this.queue.get(l);
        if (!s) {
            s = new c(l);
            this.queue.set(t, s);
            if (r) {
                var u = e.getComponent(cc.Mask), p = e.noBatch;
                s.hasMask = null !== u || !!p;
                s.hasMask;
            }
        }
        t = s;
        if (r && o) {
            s.nodes.push(e);
            s.originalOpacities.push(e.opacity);
            e.opacity = Math.floor(255 * a);
        }
        if (s.hasMask)
            return t;
        for (var f = e.children, d = 0; d < f.length; d++) {
            var h = f[d], y = !!h.active && o;
            t = this.collectRenderNodes(h, t, y, n + 1, a);
        }
        return t;
    };
    LayerBatcher.prototype.generateLayerKey = function (e, t) {
        return this.useRenderIndex ? "" + this._renderIndexCounter++ : 0 === t ? "__root" : t + "_" + e.name;
    };
    __decorate([
        property({
            tooltip: ""
        })
    ], LayerBatcher.prototype, "useRenderIndex", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: ""
        })
    ], LayerBatcher.prototype, "cullingViewport", void 0);
    LayerBatcher = __decorate([
        mj.class
    ], LayerBatcher);
    return LayerBatcher;
}(cc.Component));
exports.LayerBatcher = LayerBatcher;

cc._RF.pop();