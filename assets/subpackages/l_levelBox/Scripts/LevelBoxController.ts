import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import LevelBoxView from './LevelBoxView';
@mj.class("LevelBoxController")
export default class LevelBoxController extends ViewController {
  viewClass = LevelBoxView;
  viewMode = viewMode.ALERT;
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("viewDidLoad", this.args);
  }
  viewDidShow(e) {
    e = null != e ? e : this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("viewDidShow", e);
  }
}