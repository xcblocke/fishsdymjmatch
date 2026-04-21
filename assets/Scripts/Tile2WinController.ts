import ViewController, { viewMode } from './framework/controller/ViewController';
import Tile2WinView from './view/Tile2WinView';
@mj.class("Tile2WinController")
export default class Tile2WinController extends ViewController {
  viewClass = Tile2WinView;
  viewMode = viewMode.PANEL;
  bundleName = "mainRes";
  @mj.traitEvent("Tile2WinCtrl_initRes")
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("Tile2WinCtrl_viewShow")
  viewDidShow(t) {
    t = t || this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("showWinView", t);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
  refreshForReuse(t) {
    super.refreshForReuse.call(this, t);
    this.viewDoAction("showWinView", t);
  }
}