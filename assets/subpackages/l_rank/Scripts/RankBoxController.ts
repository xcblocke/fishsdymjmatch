import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import RankBoxView from './util/RankBoxView';
@mj.class("RankBoxController")
export default class RankBoxController extends ViewController {
  viewClass = RankBoxView;
  viewMode = viewMode.ALERT;
  @mj.traitEvent("RankBoxCtrl_initRes")
  initDependRes() {}
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("RankBoxCtrl_viewShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
}