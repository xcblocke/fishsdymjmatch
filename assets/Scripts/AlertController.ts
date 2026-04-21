import ViewController, { viewMode } from './framework/controller/ViewController';
import AlertView from './view/AlertView';
@mj.class("AlertController")
export default class AlertController extends ViewController {
  viewClass = AlertView;
  viewMode = viewMode.ALERT;
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("show", this.args);
  }
  refreshForReuse(t) {
    super.refreshForReuse.call(this, t);
    this.viewDoAction("show", t);
  }
}