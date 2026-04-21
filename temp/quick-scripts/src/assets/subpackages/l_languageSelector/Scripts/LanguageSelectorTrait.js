"use strict";
cc._RF.push(module, 'ec6acN/KupCmpBxOfIrYwoT', 'LanguageSelectorTrait');
// subpackages/l_languageSelector/Scripts/LanguageSelectorTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UILanguageSwitch_1 = require("./UILanguageSwitch");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var LanguageSelectorTrait = /** @class */ (function (_super) {
    __extends(LanguageSelectorTrait, _super);
    function LanguageSelectorTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._supportedLanguages = ["EN_US", "EN_GB", "ES", "ES_419", "ZH_CN", "ZH_TW", "ZH_HK", "FR", "DE", "PT_BR", "PT_PT", "JA", "KO", "RU"];
        _this._lastSelectedLanguage = "";
        return _this;
    }
    LanguageSelectorTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LanguageSelectorTrait.prototype.onLoginM_showLoad = function (t, e) {
        this.initLanguage();
        e();
    };
    LanguageSelectorTrait.prototype.initLanguage = function () {
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            var t = LoginModel_1.default.getInstance(), e = this.getAssignLanguage();
            if (e) {
                t.language = e;
                this.changeLanguage(t.language, true, this.getSupportedLanguages(), true);
            }
            else
                this.changeLanguage(t.systemLanguage, true, this.getSupportedLanguages(), true);
        }
    };
    LanguageSelectorTrait.prototype.onUISetHome_adjustPH = function (t, e) {
        this.addLanguageSwitchButtonToList(t, function () {
            e();
        });
    };
    LanguageSelectorTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        this.addLanguageSwitchButtonToList(t, function () {
            e();
        });
    };
    LanguageSelectorTrait.prototype.addLanguageSwitchButtonToList = function (t, e) {
        this.createLanguageSwitchButton(function (o) {
            if (cc.isValid(o) && (null == t ? void 0 : t.args)) {
                var n = t.args[0] || [];
                n.push(o);
                t.args[0] = n;
            }
            e();
        });
    };
    LanguageSelectorTrait.prototype.onAdUnavailVw_ShowRetry = function (t, e) {
        var o = this;
        e();
        var n = t.ins;
        if (n && n._btnRetry) {
            var a = n._btnRetry;
            if (cc.isValid(a)) {
                var i = a.getChildByName("layout");
                cc.isValid(i) && cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
                    cc.isValid(a) && cc.isValid(i) && o.adjustRetryButtonLayout(a, i);
                });
            }
        }
    };
    LanguageSelectorTrait.prototype.adjustRetryButtonLayout = function (t, e) {
        var o = Math.min(1, t.width / e.width * 0.92);
        e.scale = o;
    };
    LanguageSelectorTrait.prototype.onGuide_chgText = function (t, e) {
        e();
    };
    LanguageSelectorTrait.prototype.createLanguageSwitchButton = function (t) {
        UILanguageSwitch_1.UILanguageSwitch.createUI("prefabs/ui/settingsDialog/UILanguageSwitch").then(function (e) {
            t(e);
        }).catch(function () {
            t(null);
        });
    };
    LanguageSelectorTrait.prototype.getLanguages = function () {
        return [{
                code: "en",
                nameKey: "Common_Settings_Language_EN_US",
                name: "English"
            }, {
                code: "fr",
                nameKey: "Common_Settings_Language_FR",
                name: "Français"
            }, {
                code: "de",
                nameKey: "Common_Settings_Language_DE",
                name: "Deutsch"
            }, {
                code: "pt",
                nameKey: "Common_Settings_Language_PT",
                name: "Português"
            }, {
                code: "es",
                nameKey: "Common_Settings_Language_ES",
                name: "Español"
            }, {
                code: "ja",
                nameKey: "Common_Settings_Language_JA",
                name: "日本語"
            }, {
                code: "ko",
                nameKey: "Common_Settings_Language_KO",
                name: "한국어"
            }, {
                code: "ru",
                nameKey: "Common_Settings_Language_RU",
                name: "Русский"
            }, {
                code: "zh-CN",
                nameKey: "Common_Settings_Language_ZH_CN",
                name: "简体中文"
            }, {
                code: "zh-TW",
                nameKey: "Common_Settings_Language_ZH_HKTW",
                name: "繁體中文"
            }];
    };
    LanguageSelectorTrait.prototype.getSupportedLanguages = function () {
        return this._supportedLanguages;
    };
    LanguageSelectorTrait.prototype.getDefaultLanguage = function () {
        return I18NStrings_1.default.defaultLanguage;
    };
    LanguageSelectorTrait.prototype.getAssignLanguage = function () {
        return this._traitData.language;
    };
    LanguageSelectorTrait.prototype.getCurrentLanguage = function () {
        var t = LoginModel_1.default.getInstance(), e = CommonUtils_1.formatLanguageCodeToString(t.language), o = this.getLanguages().find(function (t) {
            var o = CommonUtils_1.formatLanguageCodeToString(t.code);
            return e.includes(o);
        });
        return o ? o.code : this.getDefaultLanguage();
    };
    LanguageSelectorTrait.prototype.setLanguage = function (t) {
        if (this._lastSelectedLanguage != t) {
            this._lastSelectedLanguage = t;
            this.changeLanguage(t, true, this.getSupportedLanguages());
        }
    };
    LanguageSelectorTrait.prototype.showLanguageSelector = function () {
        this.pushController("UILanguageSelectorController", {});
    };
    LanguageSelectorTrait.prototype.changeLanguage = function (t, e, o, n) {
        if (t === void 0) { t = "en-US"; }
        if (e === void 0) { e = false; }
        if (o === void 0) { o = ["EN_US"]; }
        if (n === void 0) { n = false; }
        var a = this.getLanguageConfigFile(t, o, n), i = CommonUtils_1.formatLanguageStringToCode(a);
        if (n) {
            LoginModel_1.default.getInstance().language = i;
        }
        else {
            this.changeStandLanguage(i);
        }
        e && mj.EventManager.emit("language-changed", i);
    };
    LanguageSelectorTrait.prototype.changeStandLanguage = function (t) {
        LoginModel_1.default.getInstance().language = t;
    };
    LanguageSelectorTrait.prototype.getLanguageConfigFile = function (t, e, o) {
        if (o === void 0) { o = false; }
        if (!t || !e)
            return "";
        var n = CommonUtils_1.formatLanguageCodeToString(t), a = LoginModel_1.default.getInstance().systemLanguage, i = CommonUtils_1.formatLanguageCodeToString(a), r = n.split("_")[0], c = i.split("_")[0];
        if (o && r === c && e.includes(i))
            return i;
        if (e.includes(n))
            return n;
        var s = e.filter(function (t) {
            return t === r || t.startsWith(r + "_");
        });
        return s.length > 0 ? s.includes(r) ? r : s[0] : e.length > 0 ? e[0] : "EN_US";
    };
    LanguageSelectorTrait.traitKey = "LanguageSelector";
    __decorate([
        mj.traitEvent("LangSelTrait_getLangs")
    ], LanguageSelectorTrait.prototype, "getLanguages", null);
    __decorate([
        mj.traitEvent("LangSelTrait_getSptLng")
    ], LanguageSelectorTrait.prototype, "getSupportedLanguages", null);
    __decorate([
        mj.traitEvent("LangSelTrait_getAssLan")
    ], LanguageSelectorTrait.prototype, "getAssignLanguage", null);
    __decorate([
        mj.traitEvent("LangSelTrt_showLangSel")
    ], LanguageSelectorTrait.prototype, "showLanguageSelector", null);
    __decorate([
        mj.traitEvent("LangSelTrt_changeLang")
    ], LanguageSelectorTrait.prototype, "changeStandLanguage", null);
    LanguageSelectorTrait = __decorate([
        mj.trait,
        mj.class("LanguageSelectorTrait")
    ], LanguageSelectorTrait);
    return LanguageSelectorTrait;
}(Trait_1.default));
exports.default = LanguageSelectorTrait;

cc._RF.pop();