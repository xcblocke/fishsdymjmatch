"use strict";
cc._RF.push(module, 'b62b05l6eBHEJu5QsRC2GTU', 'AdManager');
// Scripts/base/ad/AdManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AdReachStatus = exports.AdShowStatus = exports.AdType = void 0;
var Config_1 = require("../../Config");
var I18NStrings_1 = require("../../framework/data/I18NStrings");
var SingletonFactory_1 = require("../../framework/utils/SingletonFactory");
var UserModel_1 = require("../../gamePlay/user/UserModel");
var AdTracker_1 = require("../../gamePlay/base/ad/AdTracker");
exports.AdType = {
    RewardVideo: "2",
    Interstitial: "1",
    Banner: "banner"
};
exports.AdShowStatus = {
    ShowSuccess: "showsuccess",
    ShowFail: "showfail",
    Close: "close"
};
exports.AdReachStatus = {
    NotReach: "0",
    Reached: "1"
};
var AdManager = /** @class */ (function () {
    function AdManager() {
        this._videoCallbacks = null;
        this._videoAdSceneId = "0";
        this._videoExtraData = {};
        this._videoAdPosition = null;
        this._isBannerShowing = false;
        this._isShowingAd = false;
        this._adLockTimer = null;
        this._touchBlockerNode = null;
        this.adTracker = AdTracker_1.default.getInstance();
    }
    AdManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    AdManager.prototype.init = function () {
        var t = this;
        setTimeout(function () {
            t.loadVideoAd();
            t.loadInterAd();
        }, AdManager.AD_LOAD_DELAY);
    };
    AdManager.prototype.loadVideoAd = function () {
        mj.sdk.loadAd(exports.AdType.RewardVideo);
    };
    AdManager.prototype.loadInterAd = function () {
        mj.sdk.loadAd(exports.AdType.Interstitial);
    };
    AdManager.prototype.checkVideoAdIsReady = function () {
        return mj.sdk.getAdIsReady(exports.AdType.RewardVideo);
    };
    AdManager.prototype.checkInterAdIsReady = function () {
        return mj.sdk.getAdIsReady(exports.AdType.Interstitial);
    };
    AdManager.prototype.showBanner = function () {
        this._isBannerShowing = true;
        mj.sdk.showBanner();
    };
    AdManager.prototype.hideBanner = function () {
        this._isBannerShowing = false;
        mj.sdk.hideBanner();
        this.adTracker.trackBannerRevenue();
    };
    AdManager.prototype.isBannerShowing = function () {
        return this._isBannerShowing;
    };
    AdManager.prototype.playVideoAd = function (e, t, o, n) {
        if (o === void 0) { o = "0"; }
        if (n === void 0) { n = {}; }
        var l = this;
        this.saveVideoAdData(e, t, o, n);
        var s = exports.AdType.RewardVideo, c = Math.floor(Date.now() / 1000), u = {
            startTime: c,
            endTime: c,
            showTime: 0
        };
        if (this.checkVideoAdCondition()) {
            if (!this._isShowingAd) {
                this.lockAd();
                if (this.handleBrowserDebugAd())
                    this.handleBrowserDebugAdCommon(s, e, t, c, o, n, u);
                else {
                    this.handleAdShowStart("rewardAd", e);
                    mj.sdk.showAd(s, function (o, n, i, s, p, f) {
                        switch (s) {
                            case exports.AdShowStatus.ShowSuccess:
                                u.startTime = Math.floor(Date.now() / 1000);
                                break;
                            case exports.AdShowStatus.ShowFail:
                                l.unlockAd();
                                (null == t ? void 0 : t.onFailed) && t.onFailed(false);
                                l.playVideoAdFailed(false);
                                break;
                            case exports.AdShowStatus.Close:
                                l.unlockAd();
                                var d = p === exports.AdReachStatus.Reached;
                                if (d) {
                                    l.playVideoAdSuccess();
                                    (null == t ? void 0 : t.onSuccess) && t.onSuccess();
                                }
                                else {
                                    l.playVideoAdFailed(true);
                                    (null == t ? void 0 : t.onFailed) && t.onFailed(true);
                                }
                                u.endTime = Math.floor(Date.now() / 1000);
                                u.showTime = u.endTime - u.startTime;
                                l.adTracker.trackRewardShow(e, c, n, i, u);
                                l.adTracker.trackRewardClose(f, d);
                        }
                    }, o, n);
                }
            }
        }
        else
            t.onFailed && t.onFailed();
    };
    AdManager.prototype.playInterAd = function (e, t, o, n) {
        if (o === void 0) { o = "0"; }
        if (n === void 0) { n = {}; }
        if (this.checkInterAdCondition(e, t, o, n)) {
            var r = exports.AdType.Interstitial, a = Math.floor(Date.now() / 1000), l = {
                startTime: a,
                endTime: a,
                showTime: 0
            };
            if (!this._isShowingAd) {
                this.lockAd();
                this._reallyShowInterAd(r, e, t, a, o, n, l);
            }
        }
        else
            t.onFailed && t.onFailed();
    };
    AdManager.prototype._reallyShowInterAd = function (e, t, o, n, i, a, l) {
        var s = this;
        if (this.handleBrowserDebugAd())
            this.handleBrowserDebugAdCommon(e, t, o, n, i, a, l);
        else {
            this.handleAdShowStart("interAd", t);
            var c = a;
            mj.sdk.showAd(e, function (e, i, a, u, p, f) {
                switch (u) {
                    case exports.AdShowStatus.ShowSuccess:
                        l.startTime = Math.floor(Date.now() / 1000);
                        break;
                    case exports.AdShowStatus.ShowFail:
                        s.unlockAd();
                        s.playInterAdFailed();
                        o.onFailed && o.onFailed();
                        break;
                    case exports.AdShowStatus.Close:
                        s.unlockAd();
                        l.endTime = Math.floor(Date.now() / 1000);
                        l.showTime = l.endTime - l.startTime;
                        s.playInterAdClose(c);
                        o.onSuccess && o.onSuccess();
                        s.adTracker.trackInterShow(t, n, i, c, l);
                        s.adTracker.trackInterClose(f, true);
                }
            }, i, a);
        }
    };
    AdManager.prototype.playVideoAdSuccess = function () {
        this.resetVideoAdData();
        var e = UserModel_1.default.getInstance();
        e.setTotalRewardAdCount(e.getTotalRewardAdCount() + 1);
        this.loadVideoAd();
        this.handleAdShowEnd("rewardAd");
        this.adTracker.trackAdStageEnd(false, true, "success", "");
    };
    AdManager.prototype.playVideoAdFailed = function (e, t) {
        if (t === void 0) { t = false; }
        this.handleAdShowEnd("rewardAd");
        if (!e && !t) {
            var o = I18NStrings_1.default.get("MahjongTiles_AdsLoading_Title_1", "Ads Unavailable");
            mj.EventManager.emit("SHOWRICHTIPS", "<color=#F7B546>" + o + "</color>", cc.v2(0, 0));
        }
        this.loadVideoAd();
        this.adTracker.trackAdStageEnd(false, false, "", e ? "reach !== 1" : "failed");
    };
    AdManager.prototype.playInterAdFailed = function () {
        this.handleAdShowEnd("interAd");
        this.loadInterAd();
        this.adTracker.trackAdStageEnd(true, false, "", "failed");
    };
    AdManager.prototype.playInterAdClose = function () {
        this.handleAdShowEnd("interAd");
        this.adTracker.trackAdStageEnd(true, true, "success", "");
        this.loadInterAd();
    };
    AdManager.prototype.retryPlayVideoAd = function () {
        this.playVideoAd(this._videoAdPosition, this._videoCallbacks, this._videoAdSceneId, this._videoExtraData);
    };
    AdManager.prototype.triggerVideoAdSuccessCallback = function () {
        this._videoCallbacks && this._videoCallbacks.onSuccess && this._videoCallbacks.onSuccess();
    };
    AdManager.prototype.checkInterAdCondition = function (e, t, o, n) {
        if (o === void 0) { o = "0"; }
        if (n === void 0) { n = {}; }
        return true;
    };
    AdManager.prototype.checkVideoAdCondition = function () {
        return true;
    };
    AdManager.prototype.handleAdShowStart = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_AD_SHOW_START, e);
        if ("rewardAd" === e) {
            this.adTracker.trackRewardRequest(t);
            this.adTracker.trackAdStageStart(false);
        }
        else {
            this.adTracker.trackInterRequest(t);
            this.adTracker.trackAdStageStart(true);
            this.adTracker.trackInterVisit(t);
        }
        cc.sys.os === cc.sys.OS_IOS && mj.audioManager.pauseBGM();
    };
    AdManager.prototype.handleAdShowEnd = function (e) {
        mj.EventManager.emit(Config_1.EVT_AD_SHOW_END, e);
        cc.sys.os === cc.sys.OS_IOS && mj.audioManager.resumeBGM();
    };
    AdManager.prototype.lockAd = function () {
        var t = this;
        if (this._adLockTimer) {
            clearTimeout(this._adLockTimer);
            this._adLockTimer = null;
        }
        this._isShowingAd = true;
        this.blockTouch();
        this._adLockTimer = setTimeout(function () {
            t._isShowingAd = false;
            t._adLockTimer = null;
            t.unblockTouch();
        }, AdManager.AD_LOCK_DURATION);
    };
    AdManager.prototype.unlockAd = function () {
        this._isShowingAd = false;
        if (this._adLockTimer) {
            clearTimeout(this._adLockTimer);
            this._adLockTimer = null;
        }
        this.unblockTouch();
    };
    AdManager.prototype.blockTouch = function () {
        var e = this;
        if (!this._touchBlockerNode || !cc.isValid(this._touchBlockerNode)) {
            var t = cc.director.getScene();
            if (t) {
                var o = cc.find("Canvas", t), n = null != o ? o : t, i = new cc.Node("_adTouchBlocker");
                i.setContentSize(cc.winSize);
                i.setAnchorPoint(0.5, 0.5);
                i.setPosition(0, 0);
                i.addComponent(cc.Button);
                i.zIndex = 999;
                i.parent = n;
                var r = 0;
                i.on(cc.Node.EventType.TOUCH_END, function () {
                    ++r >= 5 && e.unblockTouch();
                }, this);
                this._touchBlockerNode = i;
            }
        }
    };
    AdManager.prototype.unblockTouch = function () {
        if (this._touchBlockerNode && cc.isValid(this._touchBlockerNode)) {
            this._touchBlockerNode.destroy();
            this._touchBlockerNode = null;
        }
    };
    AdManager.prototype.saveVideoAdData = function (e, t, o, n) {
        this._videoAdPosition = e;
        this._videoCallbacks = t;
        this._videoAdSceneId = o;
        this._videoExtraData = n;
    };
    AdManager.prototype.resetVideoAdData = function () {
        this._videoAdPosition = null;
        this._videoCallbacks = null;
        this._videoAdSceneId = "0";
        this._videoExtraData = {};
    };
    AdManager.prototype.handleBrowserDebugAd = function () {
        return false;
    };
    AdManager.prototype.handleBrowserDebugAdCommon = function (e, t, o, n, r, a, l) {
        if (this.handleBrowserDebugAd()) {
            l.showTime = l.endTime - l.startTime;
            if (e === exports.AdType.RewardVideo) {
                this.unlockAd();
                mj.EventManager.emit("SHOWRICHTIPS", "<color=#ffff00>模拟视频广告播放成功，</color><color=#ff0000>记得改回来</color>", cc.v2(0, 0));
                this.playVideoAdSuccess();
                o.onSuccess && o.onSuccess();
                this.adTracker.trackRewardShow(t, n, r, a, l);
                this.adTracker.trackRewardClose("0", true);
            }
            else {
                this.unlockAd();
                this.handleAdShowStart("interAd", t);
                this.playInterAdClose(a);
                o.onSuccess && o.onSuccess();
                mj.EventManager.emit("SHOWRICHTIPS", "<color=#ffff00>模拟插屏广告播放成功，</color><color=#ff0000>记得改回来</color>", cc.v2(0, 0));
                this.adTracker.trackInterShow(t, n, r, a, l);
                this.adTracker.trackInterClose("0", true);
            }
        }
    };
    AdManager.AD_LOAD_DELAY = 500;
    AdManager.AD_LOCK_DURATION = 2000;
    __decorate([
        mj.traitEvent("AdMgr_loadVideoAd")
    ], AdManager.prototype, "loadVideoAd", null);
    __decorate([
        mj.traitEvent("AdMgr_loadInterAd")
    ], AdManager.prototype, "loadInterAd", null);
    __decorate([
        mj.traitEvent("AdMgr_chkVideoReady")
    ], AdManager.prototype, "checkVideoAdIsReady", null);
    __decorate([
        mj.traitEvent("AdMgr_chkInterReady")
    ], AdManager.prototype, "checkInterAdIsReady", null);
    __decorate([
        mj.traitEvent("AdMgr_showBanner")
    ], AdManager.prototype, "showBanner", null);
    __decorate([
        mj.traitEvent("AdMgr_hideBanner")
    ], AdManager.prototype, "hideBanner", null);
    __decorate([
        mj.traitEvent("AdMgr_reallyShowInterAd")
    ], AdManager.prototype, "_reallyShowInterAd", null);
    __decorate([
        mj.traitEvent("AdMgr_videoSuccess")
    ], AdManager.prototype, "playVideoAdSuccess", null);
    __decorate([
        mj.traitEvent("AdMgr_videoFailed")
    ], AdManager.prototype, "playVideoAdFailed", null);
    __decorate([
        mj.traitEvent("AdMgr_interAdClose")
    ], AdManager.prototype, "playInterAdClose", null);
    __decorate([
        mj.traitEvent("AdMgr_chkInterAd")
    ], AdManager.prototype, "checkInterAdCondition", null);
    __decorate([
        mj.traitEvent("AdMgr_chkVideoAd")
    ], AdManager.prototype, "checkVideoAdCondition", null);
    return AdManager;
}());
exports.default = AdManager;

cc._RF.pop();