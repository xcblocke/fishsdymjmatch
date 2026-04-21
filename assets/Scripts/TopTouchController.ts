import ViewController, { viewMode } from './framework/controller/ViewController';
import TopTouchView from './view/TopTouchView';
@mj.class("TopTouchController")
export default class TopTouchController extends ViewController {
  viewClass = TopTouchView;
  viewMode = viewMode.ALERT;
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10002;
  }
  initDependRes() {}
  getMessageListeners() {
    return {};
  }
}