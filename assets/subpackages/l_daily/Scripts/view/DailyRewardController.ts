import ViewController, { viewMode } from '../../../../Scripts/framework/controller/ViewController';
import DailyModel from '../DailyModel';
import DailyRewardView from './DailyRewardView';
@mj.class("DailyRewardController")
export default class DailyRewardController extends ViewController {
  viewClass = DailyRewardView;
  viewMode = viewMode.ALERT;
  _model = null;
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this._model = DailyModel.getInstance();
  }
  viewDidShow() {
    super.viewDidShow.call(this);
    this.refreshUI();
  }
  refreshUI() {
    var t,
      e,
      i = (null === (t = this.args) || void 0 === t ? void 0 : t.itemId) || 0;
    null === (e = this.args) || void 0 === e || e.isGetReward;
    this.viewDoAction("show", i);
  }
}