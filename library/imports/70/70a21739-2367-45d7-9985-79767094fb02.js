"use strict";
cc._RF.push(module, '70a21c5I2dF15mFeXZwlPsC', 'WinMaskFadeTrait');
// subpackages/l_winMaskFade/Scripts/WinMaskFadeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var WinMaskFadeTrait = /** @class */ (function (_super) {
    __extends(WinMaskFadeTrait, _super);
    function WinMaskFadeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isHideBonusView = false;
        _this._blackOpacity = 215;
        _this._maskOpacity = 255;
        return _this;
    }
    WinMaskFadeTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        this._blackOpacity = (null === (e = this.traitData.config) || void 0 === e ? void 0 : e.blackOpacity) || 215;
        this._maskOpacity = (null === (i = this.traitData.config) || void 0 === i ? void 0 : i.maskOpacity) || 255;
    };
    WinMaskFadeTrait.prototype.onRankBonusVw_destroy = function (t, e) {
        this._isHideBonusView = true;
        e();
    };
    WinMaskFadeTrait.prototype.onWinVw_onLoad = function (t, e) {
        if (this._isHideBonusView) {
            var i = t.ins;
            (null == i ? void 0 : i.maskNode) && (i.maskNode.opacity = 0);
        }
        e();
    };
    WinMaskFadeTrait.prototype.onWinBhv_pushWinView = function (t, e) {
        if (this._isHideBonusView) {
            var i = t.args[0];
            ControllerManager_1.default.getInstance().pushViewByController("WinController", {
                data: i.data,
                bgStyle: {
                    blackOpacity: this._blackOpacity
                },
                isShowAction: false
            }, null);
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    WinMaskFadeTrait.prototype.onWinVw_playMaskFadeIn = function (t, e) {
        var i, r;
        if (this._isHideBonusView) {
            this._isHideBonusView = false;
            var o = t.ins;
            if (o) {
                var a = null === (i = o.node.parent) || void 0 === i ? void 0 : i.getChildByName("BlurBg");
                a && (a.opacity = 0);
                null === (r = o.stopMaskAnimation) || void 0 === r || r.call(o);
                o.maskNode && (o.maskNode.opacity = this._maskOpacity);
            }
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    WinMaskFadeTrait.traitKey = "WinMaskFade";
    WinMaskFadeTrait = __decorate([
        mj.trait,
        mj.class("WinMaskFadeTrait")
    ], WinMaskFadeTrait);
    return WinMaskFadeTrait;
}(Trait_1.default));
exports.default = WinMaskFadeTrait;

cc._RF.pop();