import ViewController, { viewMode } from './framework/controller/ViewController';
import TravelBoxView from './view/TravelBoxView';
@mj.class("TravelBoxController")
export default class TravelBoxController extends ViewController {
  viewClass = TravelBoxView;
  viewMode = viewMode.ALERT;
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