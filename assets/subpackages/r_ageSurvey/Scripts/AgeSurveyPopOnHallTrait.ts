import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AgeSurveyModel from './AgeSurveyModel';
import AgeSurveyManager from './AgeSurveyManager';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyPopOnHallTrait")
export default class AgeSurveyPopOnHallTrait extends Trait {
  _minGameCount = 5;
  static traitKey = "AgeSurveyPopOnHall";
  static nextTimeOut = -1;
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._minGameCount = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.minGameCount) && void 0 !== r ? r : 5;
  }
  onAgeSurvey_showOnGuide(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onAgeSurvey_showOnLoading(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onAgeSrvMgr_isNeedChkGuide(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: false,
      isBreak: true
    });
  }
  onHallVw_onPopView(t, e) {
    this.checkAndShowSurvey(function () {
      e();
    });
  }
  onAgeSurveyCtl_viewDidLoad(t, e) {
    var r, o;
    e();
    var i = null !== (o = null === (r = t.ins.args) || void 0 === r ? void 0 : r.surveyIndex) && void 0 !== o ? o : 0;
    AgeSurveyModel.getInstance().setClosed(i, true);
  }
  checkAndShowSurvey(t) {
    var e,
      r,
      o = AgeSurveyModel.getInstance();
    if (!o.isCompleted(0) && !o.isClosed(0)) {
      if (((null === (r = null === (e = UserModel.getInstance()) || void 0 === e ? void 0 : e.normalData) || void 0 === r ? void 0 : r.getLevelId()) || 0) < this._minGameCount) {
        t(false);
        return;
      }
    }
    AgeSurveyManager.getInstance().tryShowNextSurvey(0, function () {
      t(true);
    }) || t(false);
  }
}