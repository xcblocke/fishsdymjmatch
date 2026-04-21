import ViewController, { viewMode } from './framework/controller/ViewController';
import TravelRewardView from './view/TravelRewardView';
@mj.class("TravelRewardController")
export default class TravelRewardController extends ViewController {
  viewClass = TravelRewardView;
  viewMode = viewMode.PANEL;
  bundleName = "mainRes";
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("viewDidLoad", this.args);
  }
  viewDidShow(t) {
    super.viewDidShow.call(this, t);
    this.viewDoAction("viewDidShow", null != t ? t : this.args);
  }
}