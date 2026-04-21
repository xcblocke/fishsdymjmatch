import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import PropLockTipView from './PropLockTipView';
@mj.class("PropLockTipController")
export default class PropLockTipController extends ViewController {
  viewClass = PropLockTipView;
  viewMode = viewMode.PANEL;
  bundleName = "l_propInit";
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  initDependRes() {}
  viewDidShow(e) {
    var r, o, i;
    super.viewDidShow.call(this, e);
    var n = e ? e.tips : null === (r = this.args) || void 0 === r ? void 0 : r.tips,
      a = e ? e.tipPos : null === (o = this.args) || void 0 === o ? void 0 : o.tipPos,
      p = e ? e.tipDelayTime : null === (i = this.args) || void 0 === i ? void 0 : i.tipDelayTime;
    if (n) {
      this.viewDoAction("showTips", n, a, p);
    } else {
      this.close();
    }
  }
  viewDidHide() {
    super.viewDidHide.call(this);
    this.close();
  }
}