import Trait from '../../../Scripts/framework/trait/Trait';
import AgeSurveyManager from './AgeSurveyManager';
@mj.trait
@mj.class("AgeSurveyTrait")
export default class AgeSurveyTrait extends Trait {
  static traitKey = "AgeSurvey";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    var o = (null === (e = this._traitData) || void 0 === e ? void 0 : e.configs) || [],
      i = (null === (r = this._traitData) || void 0 === r ? void 0 : r.descI18nIds) || [];
    AgeSurveyManager.getInstance().setConfigs(o, i);
  }
  onGuideBhv_start(t, e) {
    this.showOnGuideStart();
    e();
  }
  onTile2GuideBhv_start(t, e) {
    this.showOnGuideStart();
    e();
  }
  @mj.traitEvent("AgeSurvey_showOnGuide")
  showOnGuideStart() {
    AgeSurveyManager.getInstance().tryShowNextSurvey(0);
  }
  onLoginM_showLoad(t, e) {
    e();
    this.showOnLoading();
  }
  @mj.traitEvent("AgeSurvey_showOnLoading")
  showOnLoading() {
    AgeSurveyManager.getInstance().tryShowNextSurvey(1);
  }
}