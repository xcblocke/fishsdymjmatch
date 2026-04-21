
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LayerBatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xheWVyQmF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNFLElBQUEsUUFBUSxHQUNOLEVBQUUsQ0FBQyxVQUFVLFNBRFAsQ0FDUTtBQUNsQjtJQVFFLFdBQVksQ0FBQztRQVBiLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVYsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsaUJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0gsUUFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFDRDtJQUFBO1FBQ0UsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxJQUFJLENBQUM7SUE0QmQsQ0FBQztJQTNCQyxlQUFHLEdBQUgsVUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBQ0QsZUFBRyxHQUFILFVBQUksQ0FBQyxFQUFFLENBQUM7UUFD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QUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZHLENBQUM7SUExRkQ7UUFIQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7d0RBQ29CO0lBS3RCO1FBSkMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO3lEQUM4QjtJQVpyQixZQUFZO1FBRHhCLEVBQUUsQ0FBQyxLQUFLO09BQ0ksWUFBWSxDQWtHeEI7SUFBRCxtQkFBQztDQWxHRCxBQWtHQyxDQWxHaUMsRUFBRSxDQUFDLFNBQVMsR0FrRzdDO0FBbEdZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5jbGFzcyBjIHtcbiAga2V5ID0gXCJcIjtcbiAgaGFzTWFzayA9IGZhbHNlO1xuICBub2RlcyA9IFtdO1xuICBvcmlnaW5hbE9wYWNpdGllcyA9IFtdO1xuICBvcmlnaW5hbENoaWxkcmVuID0gW107XG4gIG5leHQgPSBudWxsO1xuICBwcmV2ID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMua2V5ID0gZTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLm5vZGVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5vcmlnaW5hbE9wYWNpdGllcy5sZW5ndGggPSAwO1xuICAgIHRoaXMub3JpZ2luYWxDaGlsZHJlbi5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzTWFzayA9IGZhbHNlO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgfVxufVxuY2xhc3MgdSB7XG4gIGl0ZW1zID0ge307XG4gIGhlYWQgPSBudWxsO1xuICBnZXQoZSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW2VdIHx8IG51bGw7XG4gIH1cbiAgc2V0KGUsIHQpIHtcbiAgICB0aGlzLml0ZW1zW3Qua2V5XSA9IHQ7XG4gICAgaWYgKHRoaXMuaGVhZCkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdC5uZXh0ID0gZS5uZXh0O1xuICAgICAgICB0LnByZXYgPSBlO1xuICAgICAgICBlLm5leHQgPSB0O1xuICAgICAgICB0Lm5leHQgJiYgKHQubmV4dC5wcmV2ID0gdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0Lm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHRoaXMuaGVhZC5wcmV2ID0gdDtcbiAgICAgICAgdGhpcy5oZWFkID0gdDtcbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5oZWFkID0gdDtcbiAgfVxuICBjbGVhcigpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcy5oZWFkOyBlOykge1xuICAgICAgdmFyIHQgPSBlLm5leHQ7XG4gICAgICBlLmNsZWFyKCk7XG4gICAgICBlID0gdDtcbiAgICB9XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gIH1cbn1cbkBtai5jbGFzc1xuZXhwb3J0IGNsYXNzIExheWVyQmF0Y2hlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHF1ZXVlID0gbmV3IHUoKTtcbiAgb3JpZ2luYWxDaGlsZHJlbiA9IFtdO1xuICBfcmVuZGVySW5kZXhDb3VudGVyID0gMDtcbiAgQHByb3BlcnR5KHtcbiAgICB0b29sdGlwOiBcIlwiXG4gIH0pXG4gIHVzZVJlbmRlckluZGV4ID0gdHJ1ZTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIHRvb2x0aXA6IFwiXCJcbiAgfSlcbiAgY3VsbGluZ1ZpZXdwb3J0OiBjYy5Ob2RlID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9EUkFXLCB0aGlzLm9uQmVmb3JlRHJhdywgdGhpcyk7XG4gICAgY2MuZGlyZWN0b3Iub24oY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfRFJBVywgdGhpcy5vbkFmdGVyRHJhdywgdGhpcyk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGNjLmRpcmVjdG9yLnRhcmdldE9mZih0aGlzKTtcbiAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgdGhpcy5vcmlnaW5hbENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIH1cbiAgb25CZWZvcmVEcmF3KCkge1xuICAgIHRoaXMubm9kZSAmJiB0aGlzLm5vZGUuaXNWYWxpZCAmJiB0aGlzLm5vZGUuYWN0aXZlICYmIHRoaXMucmVvcmdhbml6ZU5vZGVUcmVlKCk7XG4gIH1cbiAgb25BZnRlckRyYXcoKSB7XG4gICAgdGhpcy5ub2RlICYmIHRoaXMubm9kZS5pc1ZhbGlkICYmIHRoaXMucmVzdG9yZU5vZGVUcmVlKCk7XG4gIH1cbiAgcmVvcmdhbml6ZU5vZGVUcmVlKCkge1xuICAgIGZvciAodmFyIGUsIHQgPSBudWxsID09PSAoZSA9IHRoaXMuY3VsbGluZ1ZpZXdwb3J0KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLCBvID0gdGhpcy5ub2RlLmNoaWxkcmVuLCBuID0gMDsgbiA8IG8ubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBpID0gb1tuXTtcbiAgICAgIGlmIChpLmFjdGl2ZUluSGllcmFyY2h5KSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgdmFyIHIgPSBpLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuICAgICAgICAgIGlmICghdC5pbnRlcnNlY3RzKHIpKSBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVzZVJlbmRlckluZGV4ICYmICh0aGlzLl9yZW5kZXJJbmRleENvdW50ZXIgPSAwKTtcbiAgICAgICAgdGhpcy5jb2xsZWN0UmVuZGVyTm9kZXMoaSwgbnVsbCwgdHJ1ZSwgMCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub3JpZ2luYWxDaGlsZHJlbiA9IHRoaXMubm9kZS5fY2hpbGRyZW47XG4gICAgZm9yICh2YXIgYSA9IFtdLCBzID0gdGhpcy5xdWV1ZS5oZWFkOyBzOykge1xuICAgICAgdmFyIGMgPSBzLm5vZGVzLFxuICAgICAgICB1ID0gcy5vcmlnaW5hbENoaWxkcmVuLFxuICAgICAgICBwID0gcy5oYXNNYXNrO1xuICAgICAgZm9yIChuID0gMDsgbiA8IGMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdVtuXSA9IGNbbl0uX2NoaWxkcmVuO1xuICAgICAgICBwIHx8IChjW25dLl9jaGlsZHJlbiA9IFtdKTtcbiAgICAgIH1cbiAgICAgIGEucHVzaC5hcHBseShhLCBbLi4uY10pO1xuICAgICAgcyA9IHMubmV4dDtcbiAgICB9XG4gICAgdGhpcy5ub2RlLl9jaGlsZHJlbiA9IGE7XG4gIH1cbiAgcmVzdG9yZU5vZGVUcmVlKCkge1xuICAgIHRoaXMubm9kZS5fY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICB0aGlzLm5vZGUuX2NoaWxkcmVuID0gdGhpcy5vcmlnaW5hbENoaWxkcmVuO1xuICAgIGZvciAodmFyIGUgPSB0aGlzLnF1ZXVlLmhlYWQ7IGU7KSB7XG4gICAgICBmb3IgKHZhciB0ID0gZS5ub2RlcywgbyA9IGUub3JpZ2luYWxDaGlsZHJlbiwgbiA9IGUub3JpZ2luYWxPcGFjaXRpZXMsIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0W2ldLl9jaGlsZHJlbiA9IG9baV07XG4gICAgICAgIHRbaV0ub3BhY2l0eSA9IG5baV07XG4gICAgICB9XG4gICAgICBlID0gZS5uZXh0O1xuICAgIH1cbiAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gIH1cbiAgY29sbGVjdFJlbmRlck5vZGVzKGUsIHQsIG8sIG4sIGkpIHtcbiAgICB2YXIgciA9IGUuZ2V0Q29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudCksXG4gICAgICBhID0gaSAqIChlLm9wYWNpdHkgLyAyNTUpLFxuICAgICAgbCA9IHRoaXMuZ2VuZXJhdGVMYXllcktleShlLCBuKSxcbiAgICAgIHMgPSB0aGlzLnF1ZXVlLmdldChsKTtcbiAgICBpZiAoIXMpIHtcbiAgICAgIHMgPSBuZXcgYyhsKTtcbiAgICAgIHRoaXMucXVldWUuc2V0KHQsIHMpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdmFyIHUgPSBlLmdldENvbXBvbmVudChjYy5NYXNrKSxcbiAgICAgICAgICBwID0gZS5ub0JhdGNoO1xuICAgICAgICBzLmhhc01hc2sgPSBudWxsICE9PSB1IHx8ICEhcDtcbiAgICAgICAgcy5oYXNNYXNrO1xuICAgICAgfVxuICAgIH1cbiAgICB0ID0gcztcbiAgICBpZiAociAmJiBvKSB7XG4gICAgICBzLm5vZGVzLnB1c2goZSk7XG4gICAgICBzLm9yaWdpbmFsT3BhY2l0aWVzLnB1c2goZS5vcGFjaXR5KTtcbiAgICAgIGUub3BhY2l0eSA9IE1hdGguZmxvb3IoMjU1ICogYSk7XG4gICAgfVxuICAgIGlmIChzLmhhc01hc2spIHJldHVybiB0O1xuICAgIGZvciAodmFyIGYgPSBlLmNoaWxkcmVuLCBkID0gMDsgZCA8IGYubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBoID0gZltkXSxcbiAgICAgICAgeSA9ICEhaC5hY3RpdmUgJiYgbztcbiAgICAgIHQgPSB0aGlzLmNvbGxlY3RSZW5kZXJOb2RlcyhoLCB0LCB5LCBuICsgMSwgYSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIGdlbmVyYXRlTGF5ZXJLZXkoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLnVzZVJlbmRlckluZGV4ID8gXCJcIiArIHRoaXMuX3JlbmRlckluZGV4Q291bnRlcisrIDogMCA9PT0gdCA/IFwiX19yb290XCIgOiB0ICsgXCJfXCIgKyBlLm5hbWU7XG4gIH1cbn0iXX0=