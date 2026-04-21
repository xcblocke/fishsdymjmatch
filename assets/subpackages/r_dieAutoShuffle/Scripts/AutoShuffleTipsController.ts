import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import AutoShuffleTipsView from './AutoShuffleTipsView';
@mj.class("AutoShuffleTipsController")
export default class AutoShuffleTipsController extends ViewController {
  viewClass = AutoShuffleTipsView;
  viewMode = viewMode.PANEL;
  bundleName = "mainRes";
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("show");
  }
  refreshForReuse(e) {
    super.refreshForReuse.call(this, e);
    this.viewDoAction("show");
  }
}