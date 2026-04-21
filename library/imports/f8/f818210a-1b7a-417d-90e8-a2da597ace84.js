"use strict";
cc._RF.push(module, 'f8182EKG3pBfZDootpZes6E', 'I18NAdBtnTrait');
// subpackages/l_i18NAdBtn/Scripts/I18NAdBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NAdBtnLayout_1 = require("../../../Scripts/component/I18NAdBtnLayout");
var I18NAdBtnTrait = /** @class */ (function (_super) {
    __extends(I18NAdBtnTrait, _super);
    function I18NAdBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    I18NAdBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    I18NAdBtnTrait.prototype.onLvBoxVw_initComps = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onBoxOpenUI_initComponents = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onTLBoxVw_initComponents = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.adClaimBtn, "BgBtn/layout/Ad", "BgBtn/layout/Label", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onRankBoxVw_initComps = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e._claimAdBtnNode, "bg/Ad", "bg/Claim", I18NAdBtnLayout_1.default.MAX_WIDTH_1, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onFailVw_onLoad = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e.btnUse, "ad/icon", "ad/desc", I18NAdBtnLayout_1.default.MAX_WIDTH_2, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onWatchAdVw_onLoad = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e._btnConfirm, "bg/layout/icon", "bg/layout/text", I18NAdBtnLayout_1.default.MAX_WIDTH_2, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.prototype.onAdUnavailVw_onLoad = function (t, o) {
        var e = t.ins;
        I18NAdBtnLayout_1.default.setupLayout(e._btnRetry, "layout/icon", "layout/title", I18NAdBtnLayout_1.default.MAX_WIDTH_2, I18NAdBtnLayout_1.default.MARGIN);
        o();
    };
    I18NAdBtnTrait.traitKey = "I18NAdBtn";
    I18NAdBtnTrait = __decorate([
        mj.trait,
        mj.class("I18NAdBtnTrait")
    ], I18NAdBtnTrait);
    return I18NAdBtnTrait;
}(Trait_1.default));
exports.default = I18NAdBtnTrait;

cc._RF.pop();