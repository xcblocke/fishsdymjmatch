"use strict";
cc._RF.push(module, '1d0d2AjmM1DNpsy7EB5CM3J', 'LanguageFilterTrait');
// subpackages/l_languageFilter/Scripts/LanguageFilterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LanguageFilterTrait = /** @class */ (function (_super) {
    __extends(LanguageFilterTrait, _super);
    function LanguageFilterTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._excludedLanguageCodes = ["ja", "ko", "ru", "zh-CN", "zh-TW"];
        _this._excludedSupportedCodes = ["JA", "KO", "RU", "ZH_CN", "ZH_TW", "ZH_HK"];
        return _this;
    }
    LanguageFilterTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LanguageFilterTrait.prototype.onLangSelTrait_getLangs = function (t, e) {
        var r = this, n = (t.beforReturnVal || []).filter(function (t) {
            return !r._excludedLanguageCodes.includes(t.code);
        });
        e({
            isBreak: false,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    LanguageFilterTrait.prototype.onLangSelTrait_getSptLng = function (t, e) {
        var r = this, n = (t.beforReturnVal || []).filter(function (t) {
            return !r._excludedSupportedCodes.includes(t);
        });
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    LanguageFilterTrait.prototype.onLangSelUI_initTV = function (t, e) {
        var r = t.ins.node.getChildByName("content");
        r && (r.height = 1100);
        e();
    };
    LanguageFilterTrait.traitKey = "LanguageFilter";
    LanguageFilterTrait = __decorate([
        mj.trait,
        mj.class("LanguageFilterTrait")
    ], LanguageFilterTrait);
    return LanguageFilterTrait;
}(Trait_1.default));
exports.default = LanguageFilterTrait;

cc._RF.pop();