"use strict";
cc._RF.push(module, 'f0fecWErVBLw5abouBUM/t4', 'ContactUsButtonTrait');
// subpackages/l_contact_us/Scripts/ContactUsButtonTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UIContactUsButton_1 = require("./UIContactUsButton");
var ContactUsButtonTrait = /** @class */ (function (_super) {
    __extends(ContactUsButtonTrait, _super);
    function ContactUsButtonTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactUsButtonTrait_1 = ContactUsButtonTrait;
    ContactUsButtonTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ContactUsButtonTrait.prototype.onUISetDlgCtrl_initDRes = function (t, o) {
        if ("1" != this._traitData.home) {
            this.addPreloadRes(t);
            o();
        }
        else
            o();
    };
    ContactUsButtonTrait.prototype.onUISetHomeCtrl_initDRes = function (t, o) {
        this.addPreloadRes(t);
        o();
    };
    ContactUsButtonTrait.prototype.addPreloadRes = function (t) {
        var o = t.ins;
        o && "function" == typeof o.addPreloadRes && o.addPreloadRes("Prefab", UIContactUsButton_1.default.getUrl());
    };
    ContactUsButtonTrait.prototype.onUISetHome_adjustPH = function (t, o) {
        this.adjustPanelHeight(t, function () {
            o();
        });
    };
    ContactUsButtonTrait.prototype.onUISetDlg_adjustPH = function (t, o) {
        if ("1" != this._traitData.home) {
            this.adjustPanelHeight(t, function () {
                o();
            });
        }
        else {
            o();
        }
    };
    ContactUsButtonTrait.prototype.adjustPanelHeight = function (t, o) {
        UIContactUsButton_1.default.createUI().then(function (e) {
            if (cc.isValid(e) && (null == t ? void 0 : t.args)) {
                var n = t.args[0] || [];
                n.push(e);
                t.args[0] = n;
            }
            o();
        }).catch(function (t) {
            console.error("[" + ContactUsButtonTrait_1.traitKey + "] 创建按钮失败:" + ((null == t ? void 0 : t.message) || "contact us 按钮加载失败"));
            o();
        });
    };
    ContactUsButtonTrait.prototype.onContactUsBtnClick = function () {
        mj.sdk.contactUs();
    };
    var ContactUsButtonTrait_1;
    ContactUsButtonTrait.traitKey = "ContactUsButton";
    ContactUsButtonTrait = ContactUsButtonTrait_1 = __decorate([
        mj.trait,
        mj.class("ContactUsButtonTrait")
    ], ContactUsButtonTrait);
    return ContactUsButtonTrait;
}(Trait_1.default));
exports.default = ContactUsButtonTrait;

cc._RF.pop();