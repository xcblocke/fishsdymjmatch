import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyAgeDataTrait")
export default class AgeSurveyAgeDataTrait extends Trait {
  _ageConfigs = [];
  static traitKey = "AgeSurveyAgeData";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._ageConfigs = (null === (e = this._traitData) || void 0 === e ? void 0 : e.ageConfigs) || [];
  }
  onAgeSrvMgr_getAgeRanges(t, e) {
    var r,
      o,
      i = null !== (o = null === (r = t.args) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : 0;
    if (this._ageConfigs && 0 !== this._ageConfigs.length) {
      var n = this._ageConfigs.find(function (t) {
        return t.surveyIndex === i;
      });
      if (n) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: n.ageRanges
        });
      } else {
        e();
      }
    } else e();
  }
}