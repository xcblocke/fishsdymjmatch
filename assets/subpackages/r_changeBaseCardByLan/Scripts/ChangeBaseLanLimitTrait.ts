import Trait from '../../../Scripts/framework/trait/Trait';
import { formatLanguageCodeToString } from '../../../Scripts/framework/utils/CommonUtils';
@mj.trait
@mj.class("LanguageNotOpenTrait")
export default class ChangeBaseLanLimitTrait extends Trait {
  static traitKey = "ChangeBaseLanLimit";
  onLangSelTrt_changeLang(t, e) {
    if (1 != this._traitData.limit) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onChCardByLanTt_getLBdle(t, e) {
    var a,
      r = null === (a = t.args) || void 0 === a ? void 0 : a[0];
    if (r) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      e();
    }
  }
  onLangSelUI_checkIsSel(t, e) {
    var a,
      r,
      n = null === (a = t.args) || void 0 === a ? void 0 : a[1];
    if (n = formatLanguageCodeToString(n)) {
      var i = mj.getClassByName("ChangeBaseCardByLanTrait"),
        o = null === (r = null == i ? void 0 : i.getInstance) || void 0 === r ? void 0 : r.call(i);
      if (o) {
        var s = o.getLanActiveSkin(),
          c = o.getBundleByLang(n),
          u = !!s && s === c;
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: u
        });
      } else e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: false
    });
  }
}