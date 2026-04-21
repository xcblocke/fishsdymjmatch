"use strict";
cc._RF.push(module, '87c3erlCHFDUq5eSjK7Vx17', 'AdUnavailableBtnVisibleTrait');
// subpackages/l_adBtnVisible/Scripts/AdUnavailableBtnVisibleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdUnavailableBtnVisibleTrait = /** @class */ (function (_super) {
    __extends(AdUnavailableBtnVisibleTrait, _super);
    function AdUnavailableBtnVisibleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showCloseBtn = true;
        _this._showCancelBtn = true;
        return _this;
    }
    AdUnavailableBtnVisibleTrait.prototype.onLoad = function () {
        var e, o;
        _super.prototype.onLoad.call(this);
        this._showCloseBtn = null === (e = this._traitData.showCloseBtn) || void 0 === e || e;
        this._showCancelBtn = null === (o = this._traitData.showCancelBtn) || void 0 === o || o;
    };
    AdUnavailableBtnVisibleTrait.prototype.onAdUnavailVw_onLoad = function (t, e) {
        var o = t.ins;
        if (o && o.node) {
            var r = cc.find("content_node/btn_close", o.node), i = cc.find("content_node/btn_cancel", o.node);
            r && (r.active = this._showCloseBtn);
            i && (i.active = this._showCancelBtn);
            e();
        }
        else
            e();
    };
    AdUnavailableBtnVisibleTrait.traitKey = "AdUnavailableBtnVisible";
    AdUnavailableBtnVisibleTrait = __decorate([
        mj.trait,
        mj.class("AdUnavailableBtnVisibleTrait")
    ], AdUnavailableBtnVisibleTrait);
    return AdUnavailableBtnVisibleTrait;
}(Trait_1.default));
exports.default = AdUnavailableBtnVisibleTrait;

cc._RF.pop();