import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyAutoCloseTrait")
export default class AgeSurveyAutoCloseTrait extends Trait {
  _autoCloseTime = 5;
  static traitKey = "AgeSurveyAutoClose";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._autoCloseTime = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.autoCloseTime) && void 0 !== r ? r : 5;
  }
  onAgeSrvMgr_autoCloseTime(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: this._autoCloseTime
    });
  }
}