"use strict";
cc._RF.push(module, '75133r0z4BGNrjJhf8jZLYU', 'AdUnavailableView');
// subpackages/l_adUnavailable/Scripts/AdUnavailableView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var AdUnavailableView = /** @class */ (function (_super) {
    __extends(AdUnavailableView, _super);
    function AdUnavailableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btnClose = null;
        _this._btnCancel = null;
        _this._btnRetry = null;
        _this._btnNoNetwork = null;
        _this._btnLoading = null;
        return _this;
    }
    AdUnavailableView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._btnClose = cc.find("content_node/btn_close", this.node);
        this._btnCancel = cc.find("content_node/btn_cancel", this.node);
        this._btnRetry = cc.find("content_node/btn_retry", this.node);
        this._btnNoNetwork = cc.find("content_node/btn_noNet", this.node);
        this._btnLoading = cc.find("content_node/btn_loading", this.node);
        this.registerButtons();
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Show);
        this.autoClose();
    };
    AdUnavailableView.prototype.getAutoCloseTime = function () {
        return -1;
    };
    AdUnavailableView.prototype.autoClose = function () {
        var t = this, e = this.getAutoCloseTime();
        e <= 0 || cc.tween(this.node).delay(e).call(function () {
            t.delegate && cc.isValid(t.node) && t.delegate.close();
        }).start();
    };
    AdUnavailableView.prototype.registerButtons = function () {
        this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
        this._btnCancel && this.OnButtonClick(this._btnCancel, this.onCancelClick.bind(this));
        this._btnRetry && this.OnButtonClick(this._btnRetry, this.onRetryClick.bind(this));
    };
    AdUnavailableView.prototype.onCloseClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitNoAd(false);
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Close);
        this.delegate.close();
    };
    AdUnavailableView.prototype.onCancelClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitNoAd(false);
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Cancel);
        this.delegate.close();
    };
    AdUnavailableView.prototype.onRetryClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitNoAd(true);
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Retry);
        this.delegate.retry();
    };
    AdUnavailableView.prototype.setContent = function () { };
    AdUnavailableView.prototype.showNoNetwork = function () {
        var t = this;
        this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = false);
        this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = true);
        this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = false);
        this.scheduleOnce(function () {
            t.delegate && t.delegate.showViewByNetwork();
        }, 1);
    };
    AdUnavailableView.prototype.showRetry = function () {
        this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = true);
        this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = false);
        this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = false);
    };
    AdUnavailableView.prototype.showLoading = function () {
        this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = false);
        this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = false);
        this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = true);
    };
    AdUnavailableView.prototype.updateShowLabelNum = function (t) {
        if (this._btnLoading && cc.isValid(this._btnLoading)) {
            var e = Math.max(0, t), o = this._btnLoading.getChildByName("nodeNum");
            if (o) {
                var i = o.getChildByName("labelNum"), n = null == i ? void 0 : i.getComponent(cc.Label);
                n && (n.string = e.toString());
            }
        }
    };
    AdUnavailableView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    AdUnavailableView.prefabUrl = "prefabs/ui/AdUnavailableView";
    AdUnavailableView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("AdUnavailVw_onLoad")
    ], AdUnavailableView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_autoCloseTime")
    ], AdUnavailableView.prototype, "getAutoCloseTime", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_ShowNoNet")
    ], AdUnavailableView.prototype, "showNoNetwork", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_ShowRetry")
    ], AdUnavailableView.prototype, "showRetry", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_ShowLoading")
    ], AdUnavailableView.prototype, "showLoading", null);
    AdUnavailableView = __decorate([
        mj.class
    ], AdUnavailableView);
    return AdUnavailableView;
}(UIView_1.default));
exports.default = AdUnavailableView;

cc._RF.pop();