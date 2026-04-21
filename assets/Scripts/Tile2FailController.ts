import ViewController, { viewMode } from './framework/controller/ViewController';
import Tile2FailView from './view/Tile2FailView';
@mj.class("Tile2FailController")
export default class Tile2FailController extends ViewController {
  viewClass = Tile2FailView;
  viewMode = viewMode.PANEL;
  bundleName = "mainRes";
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