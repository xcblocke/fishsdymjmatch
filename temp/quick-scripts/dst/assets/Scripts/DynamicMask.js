
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DynamicMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fdf7eHBYpKVrleoTaeZ5nX', 'DynamicMask');
// Scripts/DynamicMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CustomMaskSprite_1 = require("./CustomMaskSprite");
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
function p(e, t) {
    if (!e) {
        var o = new Error(t), n = "" + (o.stack.split("\n")[1] || "");
        n = (n = n + "\n" + (o.stack.split("\n")[2] || "")) + "\n" + (o.stack.split("\n")[3] || "");
        o.message = o.message + "\n" + n;
        throw o;
    }
}
var DynamicMask = /** @class */ (function (_super) {
    __extends(DynamicMask, _super);
    function DynamicMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.srcNode = null;
        _this.maskNode = null;
        _this._maskCamera = null;
        _this._renderCamera = null;
        _this._isSrcDynamic = false;
        _this._isMaskDynamic = false;
        return _this;
    }
    Object.defineProperty(DynamicMask.prototype, "isSrcDynamic", {
        get: function () {
            return this._isSrcDynamic;
        },
        set: function (e) {
            this._isSrcDynamic = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicMask.prototype, "isMaskDynamic", {
        get: function () {
            return this._isMaskDynamic;
        },
        set: function (e) {
            this._isMaskDynamic = e;
        },
        enumerable: false,
        configurable: true
    });
    DynamicMask.prototype.start = function () {
        this.srcNode = this.node.getChildByName("src");
        p(this.srcNode, this.node.name + "此节点下需要有被遮罩节点src");
        this.srcNode.active = true;
        this.maskNode = this.node.getChildByName("mask");
        p(this.maskNode, this.node.name + "此节点下需要有被遮罩节点mask");
        this.maskNode.active = true;
        var e = this.maskNode.getBoundingBoxToWorld();
        cc.AffineTransform.transformRect(e, e, this.maskNode.parent.getWorldToNodeTransform());
        e.transformMat4(e, this.maskNode.getLocalMatrix(cc.mat4()));
        var t = cc.size(2 * Math.max(Math.abs(e.xMax), Math.abs(e.xMin)), 2 * Math.max(Math.abs(e.yMax), Math.abs(e.yMin))), o = t.width * this.maskNode.scaleX, n = t.height * this.maskNode.scaleY;
        p(o > 0 && n > 0, "mask节点boundingBox大小需要大于0");
        var i = new cc.RenderTexture();
        i.initWithSize(o, n, cc.gfx.RB_FMT_S8);
        var r = this.srcNode.getChildByName("dynamicRender");
        if (!r) {
            (r = cc.instantiate(cc.Canvas.instance.node.getChildByName("dynamicRenderTemplate"))).name = "dynamicRender";
            r.parent = this.srcNode;
        }
        this._renderCamera = r.getComponent(cc.Camera);
        this._renderCamera.targetTexture = i;
        this._renderCamera.orthoSize = 0.5 * n;
        r.active = true;
        this._renderCamera.enabled = false;
        this.refreshSrcEffect();
        var l = new cc.RenderTexture();
        l.initWithSize(o, n, cc.gfx.RB_FMT_S8);
        var s = this.maskNode.getChildByName("dynamicMask");
        if (!s) {
            (s = cc.instantiate(cc.Canvas.instance.node.getChildByName("dynamicMaskTemplate"))).name = "dynamicMask";
            s.parent = this.maskNode;
        }
        this._maskCamera = s.getComponent(cc.Camera);
        this._maskCamera.targetTexture = l;
        this._maskCamera.orthoSize = 0.5 * n;
        s.active = true;
        this._maskCamera.enabled = false;
        this.refreshMaskEffect();
        var c = new cc.SpriteFrame();
        c.setFlipY(true);
        c.setTexture(i);
        var u = this.node.getComponent(cc.Sprite);
        u || (u = this.node.addComponent(cc.Sprite));
        u.spriteFrame = c;
        u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.node.setContentSize(o, n);
        var f = this.node.getComponent(CustomMaskSprite_1.default);
        f || (f = this.node.addComponent(CustomMaskSprite_1.default));
        f.maskSpriteFrame = new cc.SpriteFrame(l);
    };
    DynamicMask.prototype.lateUpdate = function () {
        if (this.srcNode && this.maskNode && this._renderCamera && this._maskCamera) {
            this._isSrcDynamic && this.refreshSrcEffect();
            this._isMaskDynamic && this.refreshMaskEffect();
        }
    };
    DynamicMask.prototype.refreshSrcEffect = function () {
        this.srcNode.walk(function (e) {
            e.group = "dynamicRender";
        }, null);
        this._renderCamera.render();
        this.srcNode.walk(function (e) {
            e.group = "null";
        }, null);
    };
    DynamicMask.prototype.refreshMaskEffect = function () {
        this.maskNode.walk(function (e) {
            e.group = "dynamicMask";
        }, null);
        this._maskCamera.render();
        this.maskNode.walk(function (e) {
            e.group = "null";
        }, null);
    };
    DynamicMask.prototype.onDestroy = function () { };
    __decorate([
        property
    ], DynamicMask.prototype, "_isSrcDynamic", void 0);
    __decorate([
        property
    ], DynamicMask.prototype, "_isMaskDynamic", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: "被遮罩内容是否为动态的，默认静态,节省性能"
        })
    ], DynamicMask.prototype, "isSrcDynamic", null);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: "遮罩是否为动态的，默认静态,节省性能"
        })
    ], DynamicMask.prototype, "isMaskDynamic", null);
    DynamicMask = __decorate([
        ccclass,
        executeInEditMode
    ], DynamicMask);
    return DynamicMask;
}(cc.Component));
exports.default = DynamicMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0R5bmFtaWNNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDNUMsSUFBQSxLQUlGLEVBQUUsQ0FBQyxVQUFVLEVBSGYsT0FBTyxhQUFBLEVBQ1AsaUJBQWlCLHVCQUFBLEVBQ2pCLFFBQVEsY0FDTyxDQUFDO0FBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2IsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNsQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDO0tBQ1Q7QUFDSCxDQUFDO0FBR0Q7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEwR0M7UUF6R0MsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIsbUJBQWEsR0FBRyxLQUFLLENBQUM7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QUMsT0FBTztZQUNoQixPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDLENBQUM7bURBR0Q7SUFRRDtRQUpDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTztZQUNoQixPQUFPLEVBQUUsb0JBQW9CO1NBQzlCLENBQUM7b0RBR0Q7SUF6QmtCLFdBQVc7UUFGL0IsT0FBTztRQUNQLGlCQUFpQjtPQUNHLFdBQVcsQ0EwRy9CO0lBQUQsa0JBQUM7Q0ExR0QsQUEwR0MsQ0ExR3dDLEVBQUUsQ0FBQyxTQUFTLEdBMEdwRDtrQkExR29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VzdG9tTWFza1Nwcml0ZSBmcm9tICcuL0N1c3RvbU1hc2tTcHJpdGUnO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBleGVjdXRlSW5FZGl0TW9kZSxcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuZnVuY3Rpb24gcChlLCB0KSB7XG4gIGlmICghZSkge1xuICAgIHZhciBvID0gbmV3IEVycm9yKHQpLFxuICAgICAgbiA9IFwiXCIgKyAoby5zdGFjay5zcGxpdChcIlxcblwiKVsxXSB8fCBcIlwiKTtcbiAgICBuID0gKG4gPSBuICsgXCJcXG5cIiArIChvLnN0YWNrLnNwbGl0KFwiXFxuXCIpWzJdIHx8IFwiXCIpKSArIFwiXFxuXCIgKyAoby5zdGFjay5zcGxpdChcIlxcblwiKVszXSB8fCBcIlwiKTtcbiAgICBvLm1lc3NhZ2UgPSBvLm1lc3NhZ2UgKyBcIlxcblwiICsgbjtcbiAgICB0aHJvdyBvO1xuICB9XG59XG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljTWFzayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHNyY05vZGUgPSBudWxsO1xuICBtYXNrTm9kZSA9IG51bGw7XG4gIF9tYXNrQ2FtZXJhID0gbnVsbDtcbiAgX3JlbmRlckNhbWVyYSA9IG51bGw7XG4gIEBwcm9wZXJ0eVxuICBfaXNTcmNEeW5hbWljID0gZmFsc2U7XG4gIEBwcm9wZXJ0eVxuICBfaXNNYXNrRHluYW1pYyA9IGZhbHNlO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkJvb2xlYW4sXG4gICAgdG9vbHRpcDogXCLooqvpga7nvanlhoXlrrnmmK/lkKbkuLrliqjmgIHnmoTvvIzpu5jorqTpnZnmgIEs6IqC55yB5oCn6IO9XCJcbiAgfSlcbiAgZ2V0IGlzU3JjRHluYW1pYygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTcmNEeW5hbWljO1xuICB9XG4gIHNldCBpc1NyY0R5bmFtaWMoZSkge1xuICAgIHRoaXMuX2lzU3JjRHluYW1pYyA9IGU7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Cb29sZWFuLFxuICAgIHRvb2x0aXA6IFwi6YGu572p5piv5ZCm5Li65Yqo5oCB55qE77yM6buY6K6k6Z2Z5oCBLOiKguecgeaAp+iDvVwiXG4gIH0pXG4gIGdldCBpc01hc2tEeW5hbWljKCkge1xuICAgIHJldHVybiB0aGlzLl9pc01hc2tEeW5hbWljO1xuICB9XG4gIHNldCBpc01hc2tEeW5hbWljKGUpIHtcbiAgICB0aGlzLl9pc01hc2tEeW5hbWljID0gZTtcbiAgfVxuICBzdGFydCgpIHtcbiAgICB0aGlzLnNyY05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIik7XG4gICAgcCh0aGlzLnNyY05vZGUsIHRoaXMubm9kZS5uYW1lICsgXCLmraToioLngrnkuIvpnIDopoHmnInooqvpga7nvanoioLngrlzcmNcIik7XG4gICAgdGhpcy5zcmNOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5tYXNrTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XG4gICAgcCh0aGlzLm1hc2tOb2RlLCB0aGlzLm5vZGUubmFtZSArIFwi5q2k6IqC54K55LiL6ZyA6KaB5pyJ6KKr6YGu572p6IqC54K5bWFza1wiKTtcbiAgICB0aGlzLm1hc2tOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIGUgPSB0aGlzLm1hc2tOb2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuICAgIGNjLkFmZmluZVRyYW5zZm9ybS50cmFuc2Zvcm1SZWN0KGUsIGUsIHRoaXMubWFza05vZGUucGFyZW50LmdldFdvcmxkVG9Ob2RlVHJhbnNmb3JtKCkpO1xuICAgIGUudHJhbnNmb3JtTWF0NChlLCB0aGlzLm1hc2tOb2RlLmdldExvY2FsTWF0cml4KGNjLm1hdDQoKSkpO1xuICAgIHZhciB0ID0gY2Muc2l6ZSgyICogTWF0aC5tYXgoTWF0aC5hYnMoZS54TWF4KSwgTWF0aC5hYnMoZS54TWluKSksIDIgKiBNYXRoLm1heChNYXRoLmFicyhlLnlNYXgpLCBNYXRoLmFicyhlLnlNaW4pKSksXG4gICAgICBvID0gdC53aWR0aCAqIHRoaXMubWFza05vZGUuc2NhbGVYLFxuICAgICAgbiA9IHQuaGVpZ2h0ICogdGhpcy5tYXNrTm9kZS5zY2FsZVk7XG4gICAgcChvID4gMCAmJiBuID4gMCwgXCJtYXNr6IqC54K5Ym91bmRpbmdCb3jlpKflsI/pnIDopoHlpKfkuo4wXCIpO1xuICAgIHZhciBpID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICBpLmluaXRXaXRoU2l6ZShvLCBuLCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICB2YXIgciA9IHRoaXMuc3JjTm9kZS5nZXRDaGlsZEJ5TmFtZShcImR5bmFtaWNSZW5kZXJcIik7XG4gICAgaWYgKCFyKSB7XG4gICAgICAociA9IGNjLmluc3RhbnRpYXRlKGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiZHluYW1pY1JlbmRlclRlbXBsYXRlXCIpKSkubmFtZSA9IFwiZHluYW1pY1JlbmRlclwiO1xuICAgICAgci5wYXJlbnQgPSB0aGlzLnNyY05vZGU7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlckNhbWVyYSA9IHIuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgdGhpcy5fcmVuZGVyQ2FtZXJhLnRhcmdldFRleHR1cmUgPSBpO1xuICAgIHRoaXMuX3JlbmRlckNhbWVyYS5vcnRob1NpemUgPSAwLjUgKiBuO1xuICAgIHIuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9yZW5kZXJDYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFNyY0VmZmVjdCgpO1xuICAgIHZhciBsID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICBsLmluaXRXaXRoU2l6ZShvLCBuLCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICB2YXIgcyA9IHRoaXMubWFza05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkeW5hbWljTWFza1wiKTtcbiAgICBpZiAoIXMpIHtcbiAgICAgIChzID0gY2MuaW5zdGFudGlhdGUoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkeW5hbWljTWFza1RlbXBsYXRlXCIpKSkubmFtZSA9IFwiZHluYW1pY01hc2tcIjtcbiAgICAgIHMucGFyZW50ID0gdGhpcy5tYXNrTm9kZTtcbiAgICB9XG4gICAgdGhpcy5fbWFza0NhbWVyYSA9IHMuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgdGhpcy5fbWFza0NhbWVyYS50YXJnZXRUZXh0dXJlID0gbDtcbiAgICB0aGlzLl9tYXNrQ2FtZXJhLm9ydGhvU2l6ZSA9IDAuNSAqIG47XG4gICAgcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX21hc2tDYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaE1hc2tFZmZlY3QoKTtcbiAgICB2YXIgYyA9IG5ldyBjYy5TcHJpdGVGcmFtZSgpO1xuICAgIGMuc2V0RmxpcFkodHJ1ZSk7XG4gICAgYy5zZXRUZXh0dXJlKGkpO1xuICAgIHZhciB1ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHUgfHwgKHUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgIHUuc3ByaXRlRnJhbWUgPSBjO1xuICAgIHUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShvLCBuKTtcbiAgICB2YXIgZiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tTWFza1Nwcml0ZSk7XG4gICAgZiB8fCAoZiA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQ3VzdG9tTWFza1Nwcml0ZSkpO1xuICAgIGYubWFza1Nwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGwpO1xuICB9XG4gIGxhdGVVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3JjTm9kZSAmJiB0aGlzLm1hc2tOb2RlICYmIHRoaXMuX3JlbmRlckNhbWVyYSAmJiB0aGlzLl9tYXNrQ2FtZXJhKSB7XG4gICAgICB0aGlzLl9pc1NyY0R5bmFtaWMgJiYgdGhpcy5yZWZyZXNoU3JjRWZmZWN0KCk7XG4gICAgICB0aGlzLl9pc01hc2tEeW5hbWljICYmIHRoaXMucmVmcmVzaE1hc2tFZmZlY3QoKTtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFNyY0VmZmVjdCgpIHtcbiAgICB0aGlzLnNyY05vZGUud2FsayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5ncm91cCA9IFwiZHluYW1pY1JlbmRlclwiO1xuICAgIH0sIG51bGwpO1xuICAgIHRoaXMuX3JlbmRlckNhbWVyYS5yZW5kZXIoKTtcbiAgICB0aGlzLnNyY05vZGUud2FsayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5ncm91cCA9IFwibnVsbFwiO1xuICAgIH0sIG51bGwpO1xuICB9XG4gIHJlZnJlc2hNYXNrRWZmZWN0KCkge1xuICAgIHRoaXMubWFza05vZGUud2FsayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5ncm91cCA9IFwiZHluYW1pY01hc2tcIjtcbiAgICB9LCBudWxsKTtcbiAgICB0aGlzLl9tYXNrQ2FtZXJhLnJlbmRlcigpO1xuICAgIHRoaXMubWFza05vZGUud2FsayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5ncm91cCA9IFwibnVsbFwiO1xuICAgIH0sIG51bGwpO1xuICB9XG4gIG9uRGVzdHJveSgpIHt9XG59Il19