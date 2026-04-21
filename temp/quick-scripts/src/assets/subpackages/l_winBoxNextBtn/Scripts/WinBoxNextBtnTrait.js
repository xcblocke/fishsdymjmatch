"use strict";
cc._RF.push(module, '43701tfqxVJ+rprLcoTy5WT', 'WinBoxNextBtnTrait');
// subpackages/l_winBoxNextBtn/Scripts/WinBoxNextBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinBoxNextBtnTrait = /** @class */ (function (_super) {
    __extends(WinBoxNextBtnTrait, _super);
    function WinBoxNextBtnTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._zIndex = 2;
        return _this;
    }
    WinBoxNextBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinBoxNextBtnTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var n = t.ins;
        if (n && cc.isValid(n.rootView)) {
            n.viewDoAction("setBtnNextZIndex", this._zIndex);
            e();
        }
        else
            e();
    };
    WinBoxNextBtnTrait.prototype.onTLWinCtrl_viewShow = function (t, e) {
        var n = t.ins;
        if (n && cc.isValid(n.rootView)) {
            n.viewDoAction("setBtnNextZIndex", this._zIndex);
            e();
        }
        else
            e();
    };
    WinBoxNextBtnTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        var n = t.ins;
        if (n && cc.isValid(n.rootView)) {
            n.viewDoAction("setBtnNextZIndex", this._zIndex);
            e();
        }
        else
            e();
    };
    WinBoxNextBtnTrait.prototype.onBoxRwdUI_initCpts = function (t, e) {
        var n = t.ins;
        n && n.hideBoxBtn && cc.isValid(n.hideBoxBtn) && (n.hideBoxBtn.zIndex = -1);
        e();
    };
    WinBoxNextBtnTrait.prototype.onLvBoxPrgs_initCpts = function (t, e) {
        var n = t.ins;
        n && n.hideBoxBtn && cc.isValid(n.hideBoxBtn) && (n.hideBoxBtn.zIndex = -1);
        e();
    };
    WinBoxNextBtnTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        var n = t.ins;
        n && n.fullScreenBtn && cc.isValid(n.fullScreenBtn) && (n.fullScreenBtn.zIndex = -1);
        e();
    };
    WinBoxNextBtnTrait.traitKey = "WinBoxNextBtn";
    WinBoxNextBtnTrait = __decorate([
        mj.trait,
        mj.class("WinBoxNextBtnTrait")
    ], WinBoxNextBtnTrait);
    return WinBoxNextBtnTrait;
}(Trait_1.default));
exports.default = WinBoxNextBtnTrait;

cc._RF.pop();