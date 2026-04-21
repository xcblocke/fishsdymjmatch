import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import AdUnavailableView from './AdUnavailableView';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class("AdUnavailableController")
export default class AdUnavailableController extends ViewController {
  viewClass = AdUnavailableView;
  viewMode = viewMode.ALERT;
  _isRetry = false;
  _retryClickTime = 0;
  _retryTimer = null;
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.showViewByNetwork();
  }
  showViewByNetwork() {
    if (isNetworkAvailable()) {
      this.viewDoAction("showRetry");
    } else {
      this.viewDoAction("showNoNetwork");
    }
  }
  refreshForReuse(e) {
    super.refreshForReuse.call(this, e);
    this._isRetry || this.viewDoAction("showRetry");
  }
  getLeftTime() {
    var t = Date.now(),
      e = 9000,
      o = mj.getClassByName("AdUnavailableTrait");
    o && o.getInstance() && (e = 1000 * o.getInstance().retryTime);
    var i = e - (t - this._retryClickTime);
    (i = Math.round(i / 1000)) < 0 && (i = 0);
    return i;
  }
  retry() {
    var t = this;
    if (!this._isRetry) {
      this._isRetry = true;
      this._retryClickTime = Date.now();
      this.viewDoAction("showLoading");
    }
    var e = this.getLeftTime();
    if (e > 0) {
      if (AdManager.getInstance().checkVideoAdIsReady()) AdManager.getInstance().retryPlayVideoAd();else {
        AdManager.getInstance().loadVideoAd();
        this._retryTimer = setTimeout(function () {
          t.retry();
        }, 1000);
      }
      this.viewDoAction("updateShowLabelNum", e);
    } else {
      this.viewDoAction("updateShowLabelNum", 0);
      setTimeout(function () {
        t.close();
        t.triggerVideoAdSuccessCallback();
      }, 0);
    }
  }
  @mj.traitEvent("AdUnavailCtrl_triggerCB")
  triggerVideoAdSuccessCallback() {
    AdManager.getInstance().triggerVideoAdSuccessCallback();
  }
  close() {
    super.close.call(this);
    if (this._retryTimer) {
      clearTimeout(this._retryTimer);
      this._retryTimer = null;
    }
    this._isRetry = false;
  }
}