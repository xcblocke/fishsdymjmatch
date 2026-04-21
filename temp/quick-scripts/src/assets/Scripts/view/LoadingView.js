"use strict";
cc._RF.push(module, 'bf351pLz4lGiYDlQyHnQd4b', 'LoadingView');
// Scripts/view/LoadingView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../framework/ui/UIView");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var LoginModel_1 = require("../gamePlay/login/model/LoginModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._loadingBgBar = null;
        _this._loadingImgBar = null;
        _this._progressLab = null;
        _this._progressMarkers = null;
        _this._mainLoading = null;
        _this._mainLoadingScheduler = null;
        _this.progressMarkersX = 0;
        _this.delayEnterTime = 0.1;
        _this.maxLoadTime = 0.2;
        _this._isHideLoading = false;
        return _this;
    }
    LoadingView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._loadingBgBar = this.node.getChildByName("loadingBgBar").getComponent(cc.ProgressBar);
        this._loadingImgBar = this._loadingBgBar.node.getChildByName("_loadingImgBar");
        this._progressLab = this._loadingBgBar.node.getChildByName("progressLab").getComponent(cc.Label);
        this._progressMarkers = this._loadingBgBar.node.getChildByName("progressMarkers");
        this._mainLoading = cc.find("logo/loading_loading", this.node).getComponent(sp.Skeleton);
        this.progressMarkersX = this._progressMarkers.x;
        this._loadingBgBar.progress = 0;
        this._progressLab.string = "0%";
        this.node.active = false;
    };
    LoadingView.prototype.getMessageListeners = function () {
        var e = this;
        return {
            SHOWLOADING: function (t) {
                e.maxLoadTime = t + 0.1;
                e.showLoading();
            },
            HIDELOADING: function () {
                e.hideLoading();
            }
        };
    };
    LoadingView.prototype.showLoading = function () {
        this._isHideLoading = false;
        this.node.active = true;
        this.updateLoadingOtherAni();
        this.updateProgressAni({
            maxTime: this.maxLoadTime,
            minTime: this.maxLoadTime - 0.1,
            cb: function () { }
        });
    };
    LoadingView.prototype.hideLoading = function () {
        var e = this;
        if (!this._isHideLoading) {
            LoginModel_1.default.getInstance().stopSamplingFPS();
            this._isHideLoading = true;
            if (this._loadingBgBar.progress >= 1) {
                this.stopMainLoadingLoop();
                this.node.active = false;
            }
            else {
                cc.Tween.stopAllByTarget(this._loadingBgBar);
                cc.tween(this._loadingBgBar).to(0.1, {
                    progress: 1
                }, {
                    progress: function (t, o, n, i) {
                        var r = t + (o - t) * i;
                        cc.isValid(e._progressLab) && (e._progressLab.string = Math.ceil(100 * r) + "%");
                        cc.isValid(e._progressMarkers) && (e._progressMarkers.x = e.progressMarkersX + r * e._loadingBgBar.totalLength);
                        return r;
                    }
                }).delay(this.delayEnterTime).call(function () {
                    e.stopMainLoadingLoop();
                    e.node.active = false;
                }).start();
            }
        }
    };
    LoadingView.prototype.updateLoadingOtherAni = function () {
        this.updateLoadingImgBarAni();
        this.startMainLoadingLoop();
    };
    LoadingView.prototype.updateLoadingImgBarAni = function () {
        var e = this._loadingImgBar;
        if (cc.isValid(e)) {
            e.active = true;
            e.opacity = 0;
            cc.Tween.stopAllByTarget(e);
            cc.tween(e).to(0.16, {
                opacity: 255
            }).start();
        }
    };
    LoadingView.prototype.updateProgressAni = function (e) {
        var t = this, o = Math.max(0, Math.min(1, 0.8)), n = this._loadingBgBar.progress;
        cc.Tween.stopAllByTarget(this._loadingBgBar);
        var i = Math.min(e.maxTime, Math.max(e.minTime, 0.3 * Math.abs(o - n) + 0.05));
        cc.tween(this._loadingBgBar).to(i, {
            progress: o
        }, {
            progress: function (o, n, i, r) {
                var a = o + (n - o) * r;
                cc.isValid(t._progressLab) && (t._progressLab.string = Math.ceil(100 * a) + "%");
                cc.isValid(t._progressMarkers) && (t._progressMarkers.x = t.progressMarkersX + a * t._loadingBgBar.totalLength);
                a >= 1 && e.cb && e.cb();
                return a;
            }
        }).start();
    };
    LoadingView.prototype.startMainLoadingLoop = function (e, t, o) {
        if (e === void 0) { e = "logo_init"; }
        if (t === void 0) { t = false; }
        if (o === void 0) { o = 5; }
        var n = this._mainLoading;
        if (cc.isValid(n)) {
            this.stopMainLoadingLoop();
            var i = function i() {
                cc.isValid(n) && CommonUtils_1.playSpineAnim(n, t ? -1 : 1, e);
            };
            this._mainLoadingScheduler = i;
            i();
            this.schedule(this._mainLoadingScheduler, Math.max(0.016, o));
        }
    };
    LoadingView.prototype.stopMainLoadingLoop = function () {
        if (this._mainLoadingScheduler) {
            this.unschedule(this._mainLoadingScheduler);
            this._mainLoadingScheduler = null;
        }
    };
    LoadingView.prefabUrl = "prefabs/common/Loading";
    __decorate([
        mj.traitEvent("LoadingView_hideLoading")
    ], LoadingView.prototype, "hideLoading", null);
    __decorate([
        mj.traitEvent("LoadingView_updProAni")
    ], LoadingView.prototype, "updateProgressAni", null);
    LoadingView = __decorate([
        mj.class
    ], LoadingView);
    return LoadingView;
}(UIView_1.default));
exports.default = LoadingView;

cc._RF.pop();