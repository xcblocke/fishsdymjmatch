import ViewController, { viewMode } from './framework/controller/ViewController';
import Tile2TipsView from './view/Tile2TipsView';
@mj.class("Tile2TipsController")
export default class Tile2TipsController extends ViewController {
  viewClass = Tile2TipsView;
  viewMode = viewMode.ALERT;
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10001;
  }
  initDependRes() {}
  getMessageListeners() {
    var _e;
    var t = this;
    return _e;
  }
}