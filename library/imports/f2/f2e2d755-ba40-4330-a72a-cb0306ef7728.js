"use strict";
cc._RF.push(module, 'f2e2ddVukBDMKcqywMG73co', 'LanguageBtnPreloadTrait');
// subpackages/l_languageSelector/Scripts/LanguageBtnPreloadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UILanguageSwitch_1 = require("./UILanguageSwitch");
var LanguageBtnPreloadTrait = /** @class */ (function (_super) {
    __extends(LanguageBtnPreloadTrait, _super);
    function LanguageBtnPreloadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageBtnPreloadTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LanguageBtnPreloadTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        this.addPreloadRes(t);
        e();
    };
    LanguageBtnPreloadTrait.prototype.onUISetHomeCtrl_initDRes = function (t, e) {
        this.addPreloadRes(t);
        e();
    };
    LanguageBtnPreloadTrait.prototype.addPreloadRes = function (t) {
        var e = t.ins;
        e && "function" == typeof e.addPreloadRes && e.addPreloadRes("Prefab", UILanguageSwitch_1.UILanguageSwitch.getUrl());
    };
    LanguageBtnPreloadTrait.traitKey = "LanguageBtnPreload";
    LanguageBtnPreloadTrait = __decorate([
        mj.trait,
        mj.class("LanguageBtnPreloadTrait")
    ], LanguageBtnPreloadTrait);
    return LanguageBtnPreloadTrait;
}(Trait_1.default));
exports.default = LanguageBtnPreloadTrait;

cc._RF.pop();