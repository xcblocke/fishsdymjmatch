import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("LanguageFilterTrait")
export default class LanguageFilterTrait extends Trait {
  _excludedLanguageCodes = ["ja", "ko", "ru", "zh-CN", "zh-TW"];
  _excludedSupportedCodes = ["JA", "KO", "RU", "ZH_CN", "ZH_TW", "ZH_HK"];
  static traitKey = "LanguageFilter";
  onLoad() {
    super.onLoad.call(this);
  }
  onLangSelTrait_getLangs(t, e) {
    var r = this,
      n = (t.beforReturnVal || []).filter(function (t) {
        return !r._excludedLanguageCodes.includes(t.code);
      });
    e({
      isBreak: false,
      returnType: TraitCallbackReturnType.return,
      returnVal: n
    });
  }
  onLangSelTrait_getSptLng(t, e) {
    var r = this,
      n = (t.beforReturnVal || []).filter(function (t) {
        return !r._excludedSupportedCodes.includes(t);
      });
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: n
    });
  }
  onLangSelUI_initTV(t, e) {
    var r = t.ins.node.getChildByName("content");
    r && (r.height = 1100);
    e();
  }
}