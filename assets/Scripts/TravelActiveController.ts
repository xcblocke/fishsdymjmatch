import ViewController, { viewMode } from './framework/controller/ViewController';
import TravelActiveView from './view/TravelActiveView';
@mj.class("TravelActiveController")
export default class TravelActiveController extends ViewController {
  viewClass = TravelActiveView;
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