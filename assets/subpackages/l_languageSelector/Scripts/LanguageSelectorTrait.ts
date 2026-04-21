import Trait from '../../../Scripts/framework/trait/Trait';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { formatLanguageCodeToString, formatLanguageStringToCode } from '../../../Scripts/framework/utils/CommonUtils';
@mj.trait
@mj.class("LanguageSelectorTrait")
export default class LanguageSelectorTrait extends Trait {
  _supportedLanguages = ["EN_US", "EN_GB", "ES", "ES_419", "ZH_CN", "ZH_TW", "ZH_HK", "FR", "DE", "PT_BR", "PT_PT", "JA", "KO", "RU"];
  _lastSelectedLanguage = "";
  static traitKey = "LanguageSelector";
  onLoad() {
    super.onLoad.call(this);
  }
  onLoginM_showLoad(t, e) {
    this.initLanguage();
    e();
  }
  initLanguage() {
    if (!this.localData.isFirstInit) {
      this.localData.isFirstInit = 1;
      // Force English as startup default language.
      this.changeLanguage("EN_US", true, this.getSupportedLanguages(), true);
    }
  }
  onUISetHome_adjustPH(t, e) {
    // Language switch item is disabled in settings panel.
    e();
  }
  onUISetDlg_adjustPH(t, e) {
    // Language switch item is disabled in settings panel.
    e();
  }
  addLanguageSwitchButtonToList(t, e) {
    this.createLanguageSwitchButton(function (o) {
      if (cc.isValid(o) && (null == t ? void 0 : t.args)) {
        var n = t.args[0] || [];
        n.push(o);
        t.args[0] = n;
      }
      e();
    });
  }
  onAdUnavailVw_ShowRetry(t, e) {
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
  }
  adjustRetryButtonLayout(t, e) {
    var o = Math.min(1, t.width / e.width * 0.92);
    e.scale = o;
  }
  onGuide_chgText(t, e) {
    e();
  }
  createLanguageSwitchButton(t) {
    UILanguageSwitch.createUI("prefabs/ui/settingsDialog/UILanguageSwitch").then(function (e) {
      t(e);
    }).catch(function () {
      t(null);
    });
  }
  @mj.traitEvent("LangSelTrait_getLangs")
  getLanguages() {
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
  }
  @mj.traitEvent("LangSelTrait_getSptLng")
  getSupportedLanguages() {
    return this._supportedLanguages;
  }
  getDefaultLanguage() {
    return I18NStrings.defaultLanguage;
  }
  @mj.traitEvent("LangSelTrait_getAssLan")
  getAssignLanguage() {
    return this._traitData.language;
  }
  getCurrentLanguage() {
    var t = LoginModel.getInstance(),
      e = formatLanguageCodeToString(t.language),
      o = this.getLanguages().find(function (t) {
        var o = formatLanguageCodeToString(t.code);
        return e.includes(o);
      });
    return o ? o.code : this.getDefaultLanguage();
  }
  setLanguage(t) {
    if (this._lastSelectedLanguage != t) {
      this._lastSelectedLanguage = t;
      this.changeLanguage(t, true, this.getSupportedLanguages());
    }
  }
  @mj.traitEvent("LangSelTrt_showLangSel")
  showLanguageSelector() {
    this.pushController("UILanguageSelectorController", {});
  }
  changeLanguage(t = "en-US", e = false, o = ["EN_US"], n = false) {
    var a = this.getLanguageConfigFile(t, o, n),
      i = formatLanguageStringToCode(a);
    if (n) {
      LoginModel.getInstance().language = i;
    } else {
      this.changeStandLanguage(i);
    }
    e && mj.EventManager.emit("language-changed", i);
  }
  @mj.traitEvent("LangSelTrt_changeLang")
  changeStandLanguage(t) {
    LoginModel.getInstance().language = t;
  }
  getLanguageConfigFile(t, e, o = false) {
    if (!t || !e) return "";
    var n = formatLanguageCodeToString(t),
      a = LoginModel.getInstance().systemLanguage,
      i = formatLanguageCodeToString(a),
      r = n.split("_")[0],
      c = i.split("_")[0];
    if (o && r === c && e.includes(i)) return i;
    if (e.includes(n)) return n;
    var s = e.filter(function (t) {
      return t === r || t.startsWith(r + "_");
    });
    return s.length > 0 ? s.includes(r) ? r : s[0] : e.length > 0 ? e[0] : "EN_US";
  }
}