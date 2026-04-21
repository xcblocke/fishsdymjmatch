import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import AgeSurveyRewardView from './AgeSurveyRewardView';
@mj.class("AgeSurveyRewardController")
export default class AgeSurveyRewardController extends ViewController {
  viewClass = AgeSurveyRewardView;
  viewMode = viewMode.ALERT;
  bundleName = "r_ageSurvey";
  getMessageListeners() {
    return {};
  }
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
    var e = this.args;
    this.viewDoAction("initData", e);
  }
  closeAndCallback() {
    var t = this.args,
      e = null == t ? void 0 : t.onClose;
    this.close();
    null == e || e();
  }
}