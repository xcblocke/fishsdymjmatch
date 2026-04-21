import ViewController, { viewMode } from './framework/controller/ViewController';
import TipsView from './view/TipsView';
@mj.class("TipsController")
export default class TipsController extends ViewController {
  viewClass = TipsView;
  viewMode = viewMode.ALERT;
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10001;
  }
  initDependRes() {}
  getMessageListeners() {
    var e = this;
    return {
      SHOWTIPS: function (t, o) {
        e.viewDoAction("showTips", t, o);
      },
      SHOWRICHTIPS: function (t, o) {
        e.viewDoAction("showRichTips", t, o);
      }
    };
  }
}