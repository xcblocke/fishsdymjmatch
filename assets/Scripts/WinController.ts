import ViewController, { viewMode } from './framework/controller/ViewController';
import WinView from './WinView';
@mj.class("WinController")
export default class WinController extends ViewController {
  viewClass = WinView;
  viewMode = viewMode.PANEL;
  @mj.traitEvent("WinCtrl_initRes")
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("WinCtrl_viewShow")
  viewDidShow(t) {
    t = t || this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("showWinView", t);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}