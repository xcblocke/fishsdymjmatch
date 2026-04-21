"use strict";
cc._RF.push(module, '28661DAQERGvKqQ9+Pahf20', 'Adapter');
// Scripts/component/Adapter.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustTpye = void 0;
var ccclass = cc._decorator.ccclass;
var AdjustTpye;
(function (AdjustTpye) {
    AdjustTpye[AdjustTpye["LEFT"] = 1] = "LEFT";
    AdjustTpye[AdjustTpye["RIGHT"] = 2] = "RIGHT";
    AdjustTpye[AdjustTpye["TOP"] = 4] = "TOP";
    AdjustTpye[AdjustTpye["BOTTOM"] = 8] = "BOTTOM";
    AdjustTpye[AdjustTpye["ALL"] = 15] = "ALL";
})(AdjustTpye = exports.AdjustTpye || (exports.AdjustTpye = {}));
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adapter_1 = Adapter;
    Adapter.adaptBgSize = function (e) {
        if (e && e.isValid) {
            var t = cc.Canvas.instance.node.getContentSize();
            e.width = Math.max(e.width, t.width);
            e.height = Math.max(e.height, t.height);
        }
    };
    Adapter.getSafeY = function () {
        return cc.Canvas.instance.node.getChildByName("rootNode").getComponent(cc.Widget).top;
    };
    Adapter.setSafeY = function (e) {
        var t = cc.Canvas.instance.node.getChildByName("rootNode"), o = t.getComponent(cc.Widget);
        o.top = e;
        o.bottom = e;
        t.walk(function (e) {
            var t = e.getComponent(cc.Widget);
            null == t || t.updateAlignment();
        }, null);
        cc.sys.localStorage.setItem("custom_safe_y", e.toString());
    };
    Adapter.ignoreSafeRect = function (e) {
        var t = e.getComponent(cc.Widget);
        t.target = cc.Canvas.instance.node;
        t.updateAlignment();
    };
    Adapter.adjustForType = function (e, t) {
        var n = e.getComponent(cc.Widget);
        n || (n = e.addComponent(cc.Widget));
        var i = cc.Canvas.instance.node.getChildByName("rootNode"), r = e.getContentSize(), l = e.getAnchorPoint(), s = r.width, c = r.height, u = cc.rect(-l.x * s, -l.y * c, s, c);
        u.transformMat4(u, e.getWorldMatrix(cc.mat4()));
        var p = cc.Canvas.instance.node.getContentSize();
        n.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
        n.isAlignTop = (t & AdjustTpye.TOP) === AdjustTpye.TOP;
        n.isAlignBottom = (t & AdjustTpye.BOTTOM) === AdjustTpye.BOTTOM;
        n.isAlignLeft = (t & AdjustTpye.LEFT) === AdjustTpye.LEFT;
        n.isAlignRight = (t & AdjustTpye.RIGHT) === AdjustTpye.RIGHT;
        n.isAbsoluteBottom = n.isAbsoluteTop = n.isAbsoluteLeft = n.isAbsoluteRight = true;
        n.left = u.xMin - Adapter_1._offset.x;
        n.bottom = u.yMin - Adapter_1._offset.y;
        n.right = p.width - u.xMax - Adapter_1._offset.x;
        n.top = p.height - u.yMax - Adapter_1._offset.y;
        n.isAlignTop && t !== AdjustTpye.ALL && (n.top -= i.getComponent(cc.Widget).top);
        n.target = i;
        n.updateAlignment();
    };
    Adapter.adjustDesignResolutionTemporary = function (e) {
        var t = cc.Canvas.instance.node.getChildByName("rootNode"), o = t.getComponent(cc.Widget), n = t.width, i = t.height;
        o.isAlignTop = false;
        o.isAlignBottom = false;
        o.isAlignLeft = false;
        o.isAlignRight = false;
        t.width = cc.Canvas.instance.designResolution.width;
        t.height = cc.Canvas.instance.designResolution.height;
        t.walk(function (e) {
            var t = e.getComponent(cc.Widget);
            null == t || t.updateAlignment();
        }, null);
        e();
        o.isAlignTop = true;
        o.isAlignBottom = true;
        o.isAlignLeft = true;
        o.isAlignRight = true;
        t.width = n;
        t.height = i;
        t.walk(function (e) {
            var t = e.getComponent(cc.Widget);
            null == t || t.updateAlignment();
        }, null);
    };
    Adapter.prototype.onLoad = function () {
        var e = this;
        cc.view.setResizeCallback(function () {
            return e.onResize();
        });
        this.adapt();
        var t = this.getSafeAreaRect(), o = this.node.getComponent(cc.Widget), n = cc.sys.localStorage.getItem("custom_safe_y");
        n && (t = Number(n));
        o.top = t;
        o.bottom = t;
        o.updateAlignment();
    };
    Adapter.prototype.getSafeAreaRect = function () {
        var e = cc.sys.getSafeAreaRect(), t = cc.Canvas.instance.node.getContentSize(), o = t.height - e.y - e.height, n = cc.Canvas.instance.designResolution.height + 90;
        o <= 0 && cc.sys.os === cc.sys.OS_ANDROID && t.height >= n && (o = 90);
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
            var i = o - 20;
            o = i > 80 ? i : o;
        }
        return o;
    };
    Adapter.prototype.onDestroy = function () {
        cc.view.setResizeCallback(null);
    };
    Adapter.prototype.onResize = function () {
        if (cc.Canvas.instance && cc.Canvas.instance.node && cc.Canvas.instance.node.isValid && cc.Camera.main && cc.Camera.main.node && cc.Camera.main.node.isValid) {
            this.node.emit("VIEW_RESIZE");
            this.adapt();
        }
    };
    Adapter.prototype.adapt = function () {
        var e = cc.view.getFrameSize();
        if (e.height / e.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width) {
            this.setFitHeight();
            Adapter_1.blackX = (cc.Canvas.instance.designResolution.height / e.height * e.width - cc.Canvas.instance.designResolution.width) / 2;
        }
        else
            this.setFitWidth();
        var t = cc.Canvas.instance.node.getContentSize();
        Adapter_1._offset.x = (t.width - cc.Canvas.instance.designResolution.width) / 2;
        Adapter_1._offset.y = (t.height - cc.Canvas.instance.designResolution.height) / 2;
    };
    Adapter.prototype.setFitAll = function () {
        cc.Canvas.instance.fitHeight = true;
        cc.Canvas.instance.fitWidth = true;
        cc.Canvas.instance.getComponent(cc.Widget).updateAlignment();
        this.node.getComponent(cc.Widget).updateAlignment();
    };
    Adapter.prototype.setFitHeight = function () {
        cc.Canvas.instance.fitHeight = true;
        cc.Canvas.instance.fitWidth = false;
        cc.Canvas.instance.getComponent(cc.Widget).updateAlignment();
        this.node.getComponent(cc.Widget).updateAlignment();
    };
    Adapter.prototype.setFitWidth = function () {
        cc.Canvas.instance.fitHeight = false;
        cc.Canvas.instance.fitWidth = true;
        cc.Canvas.instance.getComponent(cc.Widget).updateAlignment();
        this.node.getComponent(cc.Widget).updateAlignment();
    };
    var Adapter_1;
    Adapter._offset = cc.v2(0, 0);
    Adapter.blackX = 0;
    Adapter = Adapter_1 = __decorate([
        ccclass
    ], Adapter);
    return Adapter;
}(cc.Component));
exports.default = Adapter;

cc._RF.pop();