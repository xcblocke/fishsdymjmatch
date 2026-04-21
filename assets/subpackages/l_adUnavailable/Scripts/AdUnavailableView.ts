import UIView from '../../../Scripts/framework/ui/UIView';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { DotGameBtnClick, EADWindowClickType } from '../../../Scripts/dot/DGameBtnClick';
@mj.class
export default class AdUnavailableView extends UIView {
  _btnClose = null;
  _btnCancel = null;
  _btnRetry = null;
  _btnNoNetwork = null;
  _btnLoading = null;
  static prefabUrl = "prefabs/ui/AdUnavailableView";
  static bundleName = "mainRes";
  @mj.traitEvent("AdUnavailVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this._btnClose = cc.find("content_node/btn_close", this.node);
    this._btnCancel = cc.find("content_node/btn_cancel", this.node);
    this._btnRetry = cc.find("content_node/btn_retry", this.node);
    this._btnNoNetwork = cc.find("content_node/btn_noNet", this.node);
    this._btnLoading = cc.find("content_node/btn_loading", this.node);
    this.registerButtons();
    DotGameBtnClick.dotADWindow(EADWindowClickType.Show);
    this.autoClose();
  }
  @mj.traitEvent("AdUnavailVw_autoCloseTime")
  getAutoCloseTime() {
    return -1;
  }
  autoClose() {
    var t = this,
      e = this.getAutoCloseTime();
    e <= 0 || cc.tween(this.node).delay(e).call(function () {
      t.delegate && cc.isValid(t.node) && t.delegate.close();
    }).start();
  }
  registerButtons() {
    this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
    this._btnCancel && this.OnButtonClick(this._btnCancel, this.onCancelClick.bind(this));
    this._btnRetry && this.OnButtonClick(this._btnRetry, this.onRetryClick.bind(this));
  }
  onCloseClick() {
    DotAdVisit.dotAdVisitNoAd(false);
    DotGameBtnClick.dotADWindow(EADWindowClickType.Close);
    this.delegate.close();
  }
  onCancelClick() {
    DotAdVisit.dotAdVisitNoAd(false);
    DotGameBtnClick.dotADWindow(EADWindowClickType.Cancel);
    this.delegate.close();
  }
  onRetryClick() {
    DotAdVisit.dotAdVisitNoAd(true);
    DotGameBtnClick.dotADWindow(EADWindowClickType.Retry);
    this.delegate.retry();
  }
  setContent() {}
  @mj.traitEvent("AdUnavailVw_ShowNoNet")
  showNoNetwork() {
    var t = this;
    this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = false);
    this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = true);
    this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = false);
    this.scheduleOnce(function () {
      t.delegate && t.delegate.showViewByNetwork();
    }, 1);
  }
  @mj.traitEvent("AdUnavailVw_ShowRetry")
  showRetry() {
    this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = true);
    this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = false);
    this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = false);
  }
  @mj.traitEvent("AdUnavailVw_ShowLoading")
  showLoading() {
    this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = false);
    this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = false);
    this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = true);
  }
  updateShowLabelNum(t) {
    if (this._btnLoading && cc.isValid(this._btnLoading)) {
      var e = Math.max(0, t),
        o = this._btnLoading.getChildByName("nodeNum");
      if (o) {
        var i = o.getChildByName("labelNum"),
          n = null == i ? void 0 : i.getComponent(cc.Label);
        n && (n.string = e.toString());
      }
    }
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
  }
}