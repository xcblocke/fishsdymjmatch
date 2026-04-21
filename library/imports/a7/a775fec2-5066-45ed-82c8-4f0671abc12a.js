"use strict";
cc._RF.push(module, 'a775f7CUGZF7YLITwZxq8Eq', 'LockTipsView');
// Scripts/LockTipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("./framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LockTipsView = /** @class */ (function (_super) {
    __extends(LockTipsView, _super);
    function LockTipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtContent = null;
        return _this;
    }
    LockTipsView.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._txtContent = null === (t = this.node.getChildByName("txt_content")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    };
    LockTipsView.prototype.doAction = function (e) {
        if (e === void 0) { e = 2.73; }
        var t = this;
        cc.tween(this.node).set({
            opacity: 0,
            scale: 0.7
        }).to(0.17, {
            opacity: 255,
            scale: 1.05
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            scale: 1
        }).delay(e).to(0.2, {
            opacity: 0
        }).call(function () {
            t.delegate.close();
        }).start();
    };
    LockTipsView.prototype.showTips = function (e, t, o) {
        if (o === void 0) { o = 2.73; }
        "string" != typeof e && (e += "");
        this._txtContent && (this._txtContent.string = e);
        var n = t || cc.v3(0, 0, 0);
        this.node.setPosition(n);
        this.doAction(o);
    };
    LockTipsView.prefabUrl = "prefabs/daily/LockTipsItem";
    LockTipsView = __decorate([
        mj.class
    ], LockTipsView);
    return LockTipsView;
}(UIView_1.default));
exports.default = LockTipsView;

cc._RF.pop();