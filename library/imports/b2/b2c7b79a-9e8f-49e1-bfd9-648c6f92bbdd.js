"use strict";
cc._RF.push(module, 'b2c7beano9J4b/ZZIxvkrvd', 'AdUnavailableController');
// subpackages/l_adUnavailable/Scripts/AdUnavailableController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AdUnavailableView_1 = require("./AdUnavailableView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var AdUnavailableController = /** @class */ (function (_super) {
    __extends(AdUnavailableController, _super);
    function AdUnavailableController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AdUnavailableView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._isRetry = false;
        _this._retryClickTime = 0;
        _this._retryTimer = null;
        return _this;
    }
    AdUnavailableController.prototype.getMessageListeners = function () {
        return {};
    };
    AdUnavailableController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.showViewByNetwork();
    };
    AdUnavailableController.prototype.showViewByNetwork = function () {
        if (CommonUtils_1.isNetworkAvailable()) {
            this.viewDoAction("showRetry");
        }
        else {
            this.viewDoAction("showNoNetwork");
        }
    };
    AdUnavailableController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        this._isRetry || this.viewDoAction("showRetry");
    };
    AdUnavailableController.prototype.getLeftTime = function () {
        var t = Date.now(), e = 9000, o = mj.getClassByName("AdUnavailableTrait");
        o && o.getInstance() && (e = 1000 * o.getInstance().retryTime);
        var i = e - (t - this._retryClickTime);
        (i = Math.round(i / 1000)) < 0 && (i = 0);
        return i;
    };
    AdUnavailableController.prototype.retry = function () {
        var t = this;
        if (!this._isRetry) {
            this._isRetry = true;
            this._retryClickTime = Date.now();
            this.viewDoAction("showLoading");
        }
        var e = this.getLeftTime();
        if (e > 0) {
            if (AdManager_1.default.getInstance().checkVideoAdIsReady())
                AdManager_1.default.getInstance().retryPlayVideoAd();
            else {
                AdManager_1.default.getInstance().loadVideoAd();
                this._retryTimer = setTimeout(function () {
                    t.retry();
                }, 1000);
            }
            this.viewDoAction("updateShowLabelNum", e);
        }
        else {
            this.viewDoAction("updateShowLabelNum", 0);
            setTimeout(function () {
                t.close();
                t.triggerVideoAdSuccessCallback();
            }, 0);
        }
    };
    AdUnavailableController.prototype.triggerVideoAdSuccessCallback = function () {
        AdManager_1.default.getInstance().triggerVideoAdSuccessCallback();
    };
    AdUnavailableController.prototype.close = function () {
        _super.prototype.close.call(this);
        if (this._retryTimer) {
            clearTimeout(this._retryTimer);
            this._retryTimer = null;
        }
        this._isRetry = false;
    };
    __decorate([
        mj.traitEvent("AdUnavailCtrl_triggerCB")
    ], AdUnavailableController.prototype, "triggerVideoAdSuccessCallback", null);
    AdUnavailableController = __decorate([
        mj.class("AdUnavailableController")
    ], AdUnavailableController);
    return AdUnavailableController;
}(ViewController_1.default));
exports.default = AdUnavailableController;

cc._RF.pop();