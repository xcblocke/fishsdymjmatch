import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import DailySignClassicView from './view/DailySignClassicView';
@mj.class("DailySignClassicController")
export default class DailySignClassicController extends ViewController {
  viewClass = DailySignClassicView;
  viewMode = viewMode.PANEL;
  bundleName = "r_dailySignClassic";
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("viewDidLoad", this.args);
  }
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    this.viewDoAction("viewDidShow", null != e ? e : this.args);
  }
}