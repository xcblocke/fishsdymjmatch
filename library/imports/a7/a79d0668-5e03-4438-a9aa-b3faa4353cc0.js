"use strict";
cc._RF.push(module, 'a79d0ZoXgNEOKmqs/qkNTzA', 'PropLockTipView');
// subpackages/l_propInit/Scripts/PropLockTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PropLockTipView = /** @class */ (function (_super) {
    __extends(PropLockTipView, _super);
    function PropLockTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.tipNode = null;
        return _this;
    }
    PropLockTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.contentNode = this.node.getChildByName("Content");
        this.tipNode = this.contentNode.getChildByName("Tip");
    };
    PropLockTipView.prototype.doAction = function (t) {
        if (t === void 0) { t = 2.73; }
        var e = this;
        this.node.stopActionByTag(10000);
        cc.tween(this.node).tag(10000).set({
            opacity: 0,
            scale: 0.7
        }).to(0.17, {
            opacity: 255,
            scale: 1.05
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            scale: 1
        }).delay(t).to(0.2, {
            opacity: 0
        }).call(function () {
            e.delegate.close();
        }).start();
    };
    PropLockTipView.prototype.showTips = function (t, e, r) {
        if (r === void 0) { r = 2.73; }
        "string" != typeof t && (t += "");
        cc.isValid(this.tipNode) && (this.tipNode.getComponent(cc.Label).string = t);
        var o = e || cc.v3(0, 0, 0);
        this.contentNode.setPosition(o);
        this.doAction(r);
    };
    PropLockTipView.prefabUrl = "prefabs/PropLockTip";
    PropLockTipView = __decorate([
        mj.class
    ], PropLockTipView);
    return PropLockTipView;
}(UIView_1.default));
exports.default = PropLockTipView;

cc._RF.pop();