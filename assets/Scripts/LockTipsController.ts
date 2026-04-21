import ViewController, { viewMode } from './framework/controller/ViewController';
import LockTipsView from './LockTipsView';
@mj.class("LockTipsController")
export default class LockTipsController extends ViewController {
  viewClass = LockTipsView;
  viewMode = viewMode.PANEL;
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  initDependRes() {}
  getMessageListeners() {
    return {};
  }
  viewDidShow(t) {
    var o, n, i;
    super.viewDidShow.call(this, t);
    var r = t ? t.tips : null === (o = this.args) || void 0 === o ? void 0 : o.tips,
      a = t ? t.tipPos : null === (n = this.args) || void 0 === n ? void 0 : n.tipPos,
      l = t ? t.tipDelayTime : null === (i = this.args) || void 0 === i ? void 0 : i.tipDelayTime;
    if (r) {
      this.viewDoAction("showTips", r, a, l);
    } else {
      this.close();
    }
  }
  viewDidHide() {
    super.viewDidHide.call(this);
    this.close();
  }
}