import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyDescI18nTrait")
export default class AgeSurveyDescI18nTrait extends Trait {
  _descI18nIds = [];
  static traitKey = "AgeSurveyDescI18n";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._descI18nIds = (null === (e = this._traitData) || void 0 === e ? void 0 : e.descI18nIds) || [];
  }
  onAgeSrvMgr_descI18nIds(t, e) {
    if (!this._descI18nIds || "string" == typeof this._descI18nIds && !this._descI18nIds || Array.isArray(this._descI18nIds) && 0 === this._descI18nIds.length) {
      e();
    } else {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._descI18nIds
      });
    }
  }
}