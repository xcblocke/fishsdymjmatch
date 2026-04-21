import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import FailFreeShuffleDialogView from './FailFreeShuffleDialogView';
@mj.class("FailFreeShuffleDialogController")
export default class FailFreeShuffleDialogController extends ViewController {
  viewClass = FailFreeShuffleDialogView;
  viewMode = viewMode.ALERT;
  bundleName = "l_failFreeShuffle";
  _onFreeShuffleCallback = null;
  _onCloseCallback = null;
  initDependRes() {}
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10000;
  }
  viewDidShow(t) {
    var o = this;
    t = t || this.args;
    super.viewDidShow.call(this, t);
    if (t) {
      this._onFreeShuffleCallback = t.onFreeShuffle || null;
      this._onCloseCallback = t.onClose || null;
    }
    this.viewDoAction("setCallbacks", {
      onFreeShuffle: function () {
        var e;
        return null === (e = o._onFreeShuffleCallback) || void 0 === e ? void 0 : e.call(o);
      },
      onClose: function () {
        var e;
        return null === (e = o._onCloseCallback) || void 0 === e ? void 0 : e.call(o);
      }
    });
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}