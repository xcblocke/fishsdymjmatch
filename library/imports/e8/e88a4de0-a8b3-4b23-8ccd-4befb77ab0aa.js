"use strict";
cc._RF.push(module, 'e88a43gqLNLI4zNS++3erCq', 'DynamicEffect');
// Scripts/DynamicEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, executeInEditMode = _a.executeInEditMode, property = _a.property;
function u(e, t) {
    if (!e) {
        var o = new Error(t), n = "" + (o.stack.split("\n")[1] || "");
        n = (n = n + "\n" + (o.stack.split("\n")[2] || "")) + "\n" + (o.stack.split("\n")[3] || "");
        o.message = o.message + "\n" + n;
        throw o;
    }
}
var DynamicEffect = /** @class */ (function (_super) {
    __extends(DynamicEffect, _super);
    function DynamicEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        _this.srcNode = null;
        _this.defaultGroup = "";
        _this._renderCamera = null;
        _this._isDynamic = false;
        return _this;
    }
    Object.defineProperty(DynamicEffect.prototype, "isDynamic", {
        get: function () {
            return this._isDynamic;
        },
        set: function (e) {
            this._isDynamic = e;
        },
        enumerable: false,
        configurable: true
    });
    DynamicEffect.prototype.start = function () {
        this.srcNode = this.node.getChildByName("src");
        u(this.srcNode, this.node.name + "此节点下需要有容器节点src,将内容放入容器节点");
        this.srcNode.active = true;
        this.targetNode && (this.defaultGroup = this.targetNode.group);
        this.targetNode = this.targetNode || this.srcNode;
        var e = this.targetNode.getContentSize(), t = e.width * this.targetNode.scaleX, o = e.height * this.targetNode.scaleY;
        u(t > 0 && o > 0, "节点boundingBox大小需要大于0");
        var n = new cc.RenderTexture();
        n.initWithSize(t, o, cc.gfx.RB_FMT_S8);
        var i = this.srcNode.getChildByName("dynamicRender");
        if (this.targetNode.getChildByName("dynamicRender")) {
            i = this.targetNode.getChildByName("dynamicRender");
        }
        else {
            (i = cc.instantiate(i)).parent = this.targetNode;
        }
        this._renderCamera = i.getComponent(cc.Camera);
        this._renderCamera.targetTexture = n;
        this._renderCamera.orthoSize = 0.5 * o;
        i.active = true;
        this._renderCamera.enabled = false;
        this.refreshSrcEffect();
        var r = new cc.SpriteFrame();
        r.setFlipY(true);
        r.setTexture(n);
        var a = this.node.getComponent(cc.Sprite);
        a || (a = this.node.addComponent(cc.Sprite));
        a.spriteFrame = r;
        a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.node.setContentSize(t, o);
    };
    DynamicEffect.prototype.lateUpdate = function () {
        this.targetNode && this._renderCamera && this._isDynamic && this.refreshSrcEffect();
    };
    DynamicEffect.prototype.refreshSrcEffect = function () {
        this.targetNode.walk(function (e) {
            e.group = "dynamicRender";
        }, null);
        this._renderCamera.render();
        this.targetNode.walk(function (e) {
            e.group = "null";
        }, null);
    };
    DynamicEffect.prototype.onDestroy = function () {
        var e = this;
        this.defaultGroup && this.targetNode.isValid && this.targetNode.walk(function (t) {
            t.group = e.defaultGroup;
        }, null);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: "指定动态效果的源节点"
        })
    ], DynamicEffect.prototype, "targetNode", void 0);
    __decorate([
        property
    ], DynamicEffect.prototype, "_isDynamic", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: "效果受体是否动态，比如播放中的spine，默认静态,节省性能"
        })
    ], DynamicEffect.prototype, "isDynamic", null);
    DynamicEffect = __decorate([
        ccclass,
        executeInEditMode
    ], DynamicEffect);
    return DynamicEffect;
}(cc.Component));
exports.default = DynamicEffect;

cc._RF.pop();