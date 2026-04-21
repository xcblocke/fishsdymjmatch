"use strict";
cc._RF.push(module, '804b36TlYBPH5jD/MHCbTkN', 'TipsView');
// Scripts/view/TipsView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipsView = /** @class */ (function (_super) {
    __extends(TipsView, _super);
    function TipsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bg = null;
        _this._label1 = null;
        _this._label2 = null;
        _this._pos1 = null;
        _this._pos2 = null;
        return _this;
    }
    TipsView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._bg = this.node.getChildByName("bg1");
        this._label1 = this._bg.getChildByName("label1");
        this._label2 = this._bg.getChildByName("label2");
        this._label1.opacity = 0;
        this._label2.opacity = 0;
        this._pos1 = this._bg.position;
        this._pos2 = this._bg.position;
        this._bg.opacity = 0;
    };
    TipsView.prototype.doAction = function (e) {
        e.stopAllActions();
        e.runAction(cc.sequence(cc.delayTime(0.1), cc.spawn(cc.fadeOut(0.5), cc.moveBy(0.5, 0, 200))));
    };
    TipsView.prototype.showTips = function (e, t) {
        var o = this;
        this._label1.opacity = 255;
        this._label2.opacity = 0;
        this._bg.position = t || this._pos1;
        this._bg.opacity = 255;
        "string" != typeof e && (e += "");
        this._label1.getComponent(cc.Label).string = "" + e;
        this.scheduleOnce(function () {
            o.updateBgSize(o._label1);
        }, 0);
        this.doAction(this._bg);
    };
    TipsView.prototype.showRichTips = function (e, t) {
        var o = this;
        this._label1.opacity = 0;
        this._label2.opacity = 255;
        this._bg.position = t || this._pos2;
        this._bg.opacity = 255;
        this._label2.getComponent(cc.RichText).string = "" + e;
        this.scheduleOnce(function () {
            o.updateBgSize(o._label2);
        }, 0);
        this.doAction(this._bg);
    };
    TipsView.prototype.updateBgSize = function (e) {
        if (cc.isValid(e) && cc.isValid(this._bg)) {
            var t = e.getContentSize();
            this._bg.setContentSize(t.width + 20, t.height + 16);
        }
    };
    TipsView.prefabUrl = "prefabs/common/Tips";
    __decorate([
        mj.traitEvent("TipsView_updateBgSize")
    ], TipsView.prototype, "updateBgSize", null);
    TipsView = __decorate([
        mj.class
    ], TipsView);
    return TipsView;
}(UIView_1.default));
exports.default = TipsView;

cc._RF.pop();