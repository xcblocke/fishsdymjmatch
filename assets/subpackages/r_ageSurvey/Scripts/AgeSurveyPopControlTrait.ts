import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyPopControlTrait")
export default class AgeSurveyPopControlTrait extends Trait {
  _showConfig = [];
  static traitKey = "AgeSurveyPopControl";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._showConfig = (null === (e = this._traitData) || void 0 === e ? void 0 : e.showConfig) || [true, false];
  }
  onAgeSrvMgr_canShowSurvey(t, e) {
    var r,
      o,
      i = null !== (o = null === (r = t.args) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : 0;
    if (this._showConfig && 0 !== this._showConfig.length) {
      var n = Math.min(i, this._showConfig.length - 1),
        a = this._showConfig[n];
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: a
      });
    } else e();
  }
}