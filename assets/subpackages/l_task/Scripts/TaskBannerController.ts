import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import TaskBannerView from './view/TaskBannerView';
@mj.class("TaskBannerController")
export default class TaskBannerController extends ViewController {
  viewClass = TaskBannerView;
  viewMode = viewMode.ALERT;
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    var a = null == e ? void 0 : e.data;
    this.viewDoAction("show", a);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
    this.close();
  }
}