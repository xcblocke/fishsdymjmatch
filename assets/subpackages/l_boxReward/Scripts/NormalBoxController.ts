import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import BoxOpenUI from './BoxOpenUI';
@mj.class("NormalBoxController")
export default class NormalBoxController extends ViewController {
  viewClass = BoxOpenUI;
  viewMode = viewMode.ALERT;
  bundleName = "mainRes";
  initDependRes() {}
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    this.viewDoAction("showBoxOpenUI", null != e ? e : this.args);
  }
}