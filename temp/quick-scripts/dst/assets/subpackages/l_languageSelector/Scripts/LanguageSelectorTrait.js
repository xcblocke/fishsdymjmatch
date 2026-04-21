
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/LanguageSelectorTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9MYW5ndWFnZVNlbGVjdG9yVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwrRUFBMEU7QUFDMUUsdURBQXNEO0FBQ3RELDJFQUFzRTtBQUN0RSw0RUFBc0g7QUFHdEg7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUE0S0M7UUEzS0MseUJBQW1CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEksMkJBQXFCLEdBQUcsRUFBRSxDQUFDOztJQTBLN0IsQ0FBQztJQXhLQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsaURBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxFQUM5QixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFD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QUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQTRLekM7SUFBRCw0QkFBQztDQTVLRCxBQTRLQyxDQTVLa0QsZUFBSyxHQTRLdkQ7a0JBNUtvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCB7IFVJTGFuZ3VhZ2VTd2l0Y2ggfSBmcm9tICcuL1VJTGFuZ3VhZ2VTd2l0Y2gnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgZm9ybWF0TGFuZ3VhZ2VDb2RlVG9TdHJpbmcsIGZvcm1hdExhbmd1YWdlU3RyaW5nVG9Db2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMYW5ndWFnZVNlbGVjdG9yVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlU2VsZWN0b3JUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3N1cHBvcnRlZExhbmd1YWdlcyA9IFtcIkVOX1VTXCIsIFwiRU5fR0JcIiwgXCJFU1wiLCBcIkVTXzQxOVwiLCBcIlpIX0NOXCIsIFwiWkhfVFdcIiwgXCJaSF9IS1wiLCBcIkZSXCIsIFwiREVcIiwgXCJQVF9CUlwiLCBcIlBUX1BUXCIsIFwiSkFcIiwgXCJLT1wiLCBcIlJVXCJdO1xuICBfbGFzdFNlbGVjdGVkTGFuZ3VhZ2UgPSBcIlwiO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxhbmd1YWdlU2VsZWN0b3JcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTG9naW5NX3Nob3dMb2FkKHQsIGUpIHtcbiAgICB0aGlzLmluaXRMYW5ndWFnZSgpO1xuICAgIGUoKTtcbiAgfVxuICBpbml0TGFuZ3VhZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SW5pdCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNGaXJzdEluaXQgPSAxO1xuICAgICAgdmFyIHQgPSBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGUgPSB0aGlzLmdldEFzc2lnbkxhbmd1YWdlKCk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB0Lmxhbmd1YWdlID0gZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZSh0Lmxhbmd1YWdlLCB0cnVlLCB0aGlzLmdldFN1cHBvcnRlZExhbmd1YWdlcygpLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB0aGlzLmNoYW5nZUxhbmd1YWdlKHQuc3lzdGVtTGFuZ3VhZ2UsIHRydWUsIHRoaXMuZ2V0U3VwcG9ydGVkTGFuZ3VhZ2VzKCksIHRydWUpO1xuICAgIH1cbiAgfVxuICBvblVJU2V0SG9tZV9hZGp1c3RQSCh0LCBlKSB7XG4gICAgdGhpcy5hZGRMYW5ndWFnZVN3aXRjaEJ1dHRvblRvTGlzdCh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICBlKCk7XG4gICAgfSk7XG4gIH1cbiAgb25VSVNldERsZ19hZGp1c3RQSCh0LCBlKSB7XG4gICAgdGhpcy5hZGRMYW5ndWFnZVN3aXRjaEJ1dHRvblRvTGlzdCh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICBlKCk7XG4gICAgfSk7XG4gIH1cbiAgYWRkTGFuZ3VhZ2VTd2l0Y2hCdXR0b25Ub0xpc3QodCwgZSkge1xuICAgIHRoaXMuY3JlYXRlTGFuZ3VhZ2VTd2l0Y2hCdXR0b24oZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pICYmIChudWxsID09IHQgPyB2b2lkIDAgOiB0LmFyZ3MpKSB7XG4gICAgICAgIHZhciBuID0gdC5hcmdzWzBdIHx8IFtdO1xuICAgICAgICBuLnB1c2gobyk7XG4gICAgICAgIHQuYXJnc1swXSA9IG47XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSk7XG4gIH1cbiAgb25BZFVuYXZhaWxWd19TaG93UmV0cnkodCwgZSkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICBlKCk7XG4gICAgdmFyIG4gPSB0LmlucztcbiAgICBpZiAobiAmJiBuLl9idG5SZXRyeSkge1xuICAgICAgdmFyIGEgPSBuLl9idG5SZXRyeTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgIHZhciBpID0gYS5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgY2MuaXNWYWxpZChpKSAmJiBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGEpICYmIGNjLmlzVmFsaWQoaSkgJiYgby5hZGp1c3RSZXRyeUJ1dHRvbkxheW91dChhLCBpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkanVzdFJldHJ5QnV0dG9uTGF5b3V0KHQsIGUpIHtcbiAgICB2YXIgbyA9IE1hdGgubWluKDEsIHQud2lkdGggLyBlLndpZHRoICogMC45Mik7XG4gICAgZS5zY2FsZSA9IG87XG4gIH1cbiAgb25HdWlkZV9jaGdUZXh0KHQsIGUpIHtcbiAgICBlKCk7XG4gIH1cbiAgY3JlYXRlTGFuZ3VhZ2VTd2l0Y2hCdXR0b24odCkge1xuICAgIFVJTGFuZ3VhZ2VTd2l0Y2guY3JlYXRlVUkoXCJwcmVmYWJzL3VpL3NldHRpbmdzRGlhbG9nL1VJTGFuZ3VhZ2VTd2l0Y2hcIikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgdChlKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICB0KG51bGwpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTGFuZ1NlbFRyYWl0X2dldExhbmdzXCIpXG4gIGdldExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIGNvZGU6IFwiZW5cIixcbiAgICAgIG5hbWVLZXk6IFwiQ29tbW9uX1NldHRpbmdzX0xhbmd1YWdlX0VOX1VTXCIsXG4gICAgICBuYW1lOiBcIkVuZ2xpc2hcIlxuICAgIH0sIHtcbiAgICAgIGNvZGU6IFwiZnJcIixcbiAgICAgIG5hbWVLZXk6IFwiQ29tbW9uX1NldHRpbmdzX0xhbmd1YWdlX0ZSXCIsXG4gICAgICBuYW1lOiBcIkZyYW7Dp2Fpc1wiXG4gICAgfSwge1xuICAgICAgY29kZTogXCJkZVwiLFxuICAgICAgbmFtZUtleTogXCJDb21tb25fU2V0dGluZ3NfTGFuZ3VhZ2VfREVcIixcbiAgICAgIG5hbWU6IFwiRGV1dHNjaFwiXG4gICAgfSwge1xuICAgICAgY29kZTogXCJwdFwiLFxuICAgICAgbmFtZUtleTogXCJDb21tb25fU2V0dGluZ3NfTGFuZ3VhZ2VfUFRcIixcbiAgICAgIG5hbWU6IFwiUG9ydHVndcOqc1wiXG4gICAgfSwge1xuICAgICAgY29kZTogXCJlc1wiLFxuICAgICAgbmFtZUtleTogXCJDb21tb25fU2V0dGluZ3NfTGFuZ3VhZ2VfRVNcIixcbiAgICAgIG5hbWU6IFwiRXNwYcOxb2xcIlxuICAgIH0sIHtcbiAgICAgIGNvZGU6IFwiamFcIixcbiAgICAgIG5hbWVLZXk6IFwiQ29tbW9uX1NldHRpbmdzX0xhbmd1YWdlX0pBXCIsXG4gICAgICBuYW1lOiBcIuaXpeacrOiqnlwiXG4gICAgfSwge1xuICAgICAgY29kZTogXCJrb1wiLFxuICAgICAgbmFtZUtleTogXCJDb21tb25fU2V0dGluZ3NfTGFuZ3VhZ2VfS09cIixcbiAgICAgIG5hbWU6IFwi7ZWc6rWt7Ja0XCJcbiAgICB9LCB7XG4gICAgICBjb2RlOiBcInJ1XCIsXG4gICAgICBuYW1lS2V5OiBcIkNvbW1vbl9TZXR0aW5nc19MYW5ndWFnZV9SVVwiLFxuICAgICAgbmFtZTogXCLQoNGD0YHRgdC60LjQuVwiXG4gICAgfSwge1xuICAgICAgY29kZTogXCJ6aC1DTlwiLFxuICAgICAgbmFtZUtleTogXCJDb21tb25fU2V0dGluZ3NfTGFuZ3VhZ2VfWkhfQ05cIixcbiAgICAgIG5hbWU6IFwi566A5L2T5Lit5paHXCJcbiAgICB9LCB7XG4gICAgICBjb2RlOiBcInpoLVRXXCIsXG4gICAgICBuYW1lS2V5OiBcIkNvbW1vbl9TZXR0aW5nc19MYW5ndWFnZV9aSF9IS1RXXCIsXG4gICAgICBuYW1lOiBcIue5gemrlOS4reaWh1wiXG4gICAgfV07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMYW5nU2VsVHJhaXRfZ2V0U3B0TG5nXCIpXG4gIGdldFN1cHBvcnRlZExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydGVkTGFuZ3VhZ2VzO1xuICB9XG4gIGdldERlZmF1bHRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gSTE4TlN0cmluZ3MuZGVmYXVsdExhbmd1YWdlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTGFuZ1NlbFRyYWl0X2dldEFzc0xhblwiKVxuICBnZXRBc3NpZ25MYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhaXREYXRhLmxhbmd1YWdlO1xuICB9XG4gIGdldEN1cnJlbnRMYW5ndWFnZSgpIHtcbiAgICB2YXIgdCA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGUgPSBmb3JtYXRMYW5ndWFnZUNvZGVUb1N0cmluZyh0Lmxhbmd1YWdlKSxcbiAgICAgIG8gPSB0aGlzLmdldExhbmd1YWdlcygpLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG8gPSBmb3JtYXRMYW5ndWFnZUNvZGVUb1N0cmluZyh0LmNvZGUpO1xuICAgICAgICByZXR1cm4gZS5pbmNsdWRlcyhvKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBvID8gby5jb2RlIDogdGhpcy5nZXREZWZhdWx0TGFuZ3VhZ2UoKTtcbiAgfVxuICBzZXRMYW5ndWFnZSh0KSB7XG4gICAgaWYgKHRoaXMuX2xhc3RTZWxlY3RlZExhbmd1YWdlICE9IHQpIHtcbiAgICAgIHRoaXMuX2xhc3RTZWxlY3RlZExhbmd1YWdlID0gdDtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UodCwgdHJ1ZSwgdGhpcy5nZXRTdXBwb3J0ZWRMYW5ndWFnZXMoKSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTGFuZ1NlbFRydF9zaG93TGFuZ1NlbFwiKVxuICBzaG93TGFuZ3VhZ2VTZWxlY3RvcigpIHtcbiAgICB0aGlzLnB1c2hDb250cm9sbGVyKFwiVUlMYW5ndWFnZVNlbGVjdG9yQ29udHJvbGxlclwiLCB7fSk7XG4gIH1cbiAgY2hhbmdlTGFuZ3VhZ2UodCA9IFwiZW4tVVNcIiwgZSA9IGZhbHNlLCBvID0gW1wiRU5fVVNcIl0sIG4gPSBmYWxzZSkge1xuICAgIHZhciBhID0gdGhpcy5nZXRMYW5ndWFnZUNvbmZpZ0ZpbGUodCwgbywgbiksXG4gICAgICBpID0gZm9ybWF0TGFuZ3VhZ2VTdHJpbmdUb0NvZGUoYSk7XG4gICAgaWYgKG4pIHtcbiAgICAgIExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5sYW5ndWFnZSA9IGk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhbmRMYW5ndWFnZShpKTtcbiAgICB9XG4gICAgZSAmJiBtai5FdmVudE1hbmFnZXIuZW1pdChcImxhbmd1YWdlLWNoYW5nZWRcIiwgaSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMYW5nU2VsVHJ0X2NoYW5nZUxhbmdcIilcbiAgY2hhbmdlU3RhbmRMYW5ndWFnZSh0KSB7XG4gICAgTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmxhbmd1YWdlID0gdDtcbiAgfVxuICBnZXRMYW5ndWFnZUNvbmZpZ0ZpbGUodCwgZSwgbyA9IGZhbHNlKSB7XG4gICAgaWYgKCF0IHx8ICFlKSByZXR1cm4gXCJcIjtcbiAgICB2YXIgbiA9IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nKHQpLFxuICAgICAgYSA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5zeXN0ZW1MYW5ndWFnZSxcbiAgICAgIGkgPSBmb3JtYXRMYW5ndWFnZUNvZGVUb1N0cmluZyhhKSxcbiAgICAgIHIgPSBuLnNwbGl0KFwiX1wiKVswXSxcbiAgICAgIGMgPSBpLnNwbGl0KFwiX1wiKVswXTtcbiAgICBpZiAobyAmJiByID09PSBjICYmIGUuaW5jbHVkZXMoaSkpIHJldHVybiBpO1xuICAgIGlmIChlLmluY2x1ZGVzKG4pKSByZXR1cm4gbjtcbiAgICB2YXIgcyA9IGUuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCA9PT0gciB8fCB0LnN0YXJ0c1dpdGgociArIFwiX1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcy5sZW5ndGggPiAwID8gcy5pbmNsdWRlcyhyKSA/IHIgOiBzWzBdIDogZS5sZW5ndGggPiAwID8gZVswXSA6IFwiRU5fVVNcIjtcbiAgfVxufSJdfQ==