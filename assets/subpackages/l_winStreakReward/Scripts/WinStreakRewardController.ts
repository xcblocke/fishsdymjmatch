import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import WinStreakRewardView from './WinStreakRewardView';
@mj.class("WinStreakRewardController")
export default class WinStreakRewardController extends ViewController {
  viewClass = WinStreakRewardView;
  viewMode = viewMode.ALERT;
  bundleName = "mainRes";
  initDependRes() {}
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    this.viewDoAction("showReward", null != e ? e : this.args);
  }
}