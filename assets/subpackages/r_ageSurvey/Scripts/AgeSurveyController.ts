import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import AgeSurveyView from './AgeSurveyView';
import AgeSurveyModel from './AgeSurveyModel';
import { DotGameBtnClick } from '../../../Scripts/dot/DGameBtnClick';
import { EPageShowType, DotGamePageShow } from '../../../Scripts/dot/DGamePageShow';
@mj.class("AgeSurveyController")
export default class AgeSurveyController extends ViewController {
  viewClass = AgeSurveyView;
  viewMode = viewMode.ALERT;
  bundleName = "r_ageSurvey";
  getMessageListeners() {
    return {};
  }
  getArgs() {
    return this.args;
  }
  initDependRes() {}
  @mj.traitEvent("AgeSurveyCtl_viewDidLoad")
  viewDidLoad() {
    var e;
    super.viewDidLoad.call(this);
    var r = this.getArgs(),
      o = false !== (null == r ? void 0 : r.shuffle),
      i = null !== (e = null == r ? void 0 : r.autoCloseTime) && void 0 !== e ? e : 0;
    this.viewDoAction("initData", (null == r ? void 0 : r.ageRanges) || [], o, null == r ? void 0 : r.descI18nId, i);
    this.reportShow();
  }
  onAgeSelected(t) {
    var e,
      r = this.getArgs(),
      o = null !== (e = null == r ? void 0 : r.surveyIndex) && void 0 !== e ? e : 0,
      i = AgeSurveyModel.getInstance();
    i.setSelectedAge(o, t);
    i.setCompleted(o, true);
    this.reportAgeSelect(t);
    if (null == r ? void 0 : r.rewardConfig) {
      this.showRewardView();
    } else {
      this.closeAndCallback();
    }
  }
  onCloseClick() {
    var t,
      e = this.getArgs(),
      r = null !== (t = null == e ? void 0 : e.surveyIndex) && void 0 !== t ? t : 0;
    AgeSurveyModel.getInstance().setClosed(r, true);
    this.reportClose();
    this.closeAndCallback();
  }
  showRewardView() {
    var t,
      e = this.getArgs(),
      r = null == e ? void 0 : e.onClose;
    this.close();
    ControllerManager.getInstance().pushViewByController("AgeSurveyRewardController", {
      rewardConfig: null == e ? void 0 : e.rewardConfig,
      surveyIndex: null !== (t = null == e ? void 0 : e.surveyIndex) && void 0 !== t ? t : 0,
      onClose: r
    });
  }
  closeAndCallback() {
    var t = this.getArgs(),
      e = null == t ? void 0 : t.onClose;
    this.close();
    null == e || e();
  }
  reportShow() {
    var t,
      e,
      r = null !== (e = null === (t = this.getArgs()) || void 0 === t ? void 0 : t.surveyIndex) && void 0 !== e ? e : 0;
    DotGameBtnClick.dotAgeSurveyShow(r);
    var o = 0 === r ? EPageShowType.AgeSurveyPage1 : EPageShowType.AgeSurveyPage2;
    DotGamePageShow.dot(o);
  }
  reportAgeSelect(t) {
    var e,
      r,
      o = null !== (r = null === (e = this.getArgs()) || void 0 === e ? void 0 : e.surveyIndex) && void 0 !== r ? r : 0;
    DotGameBtnClick.dotAgeSelect(o, t);
  }
  reportClose() {
    var t,
      e,
      r = null !== (e = null === (t = this.getArgs()) || void 0 === t ? void 0 : t.surveyIndex) && void 0 !== e ? e : 0;
    DotGameBtnClick.dotAgeSurveyClose(r);
  }
}