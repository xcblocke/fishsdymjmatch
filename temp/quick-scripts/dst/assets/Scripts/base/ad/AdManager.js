
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ad/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtFO0FBQ2xFLGdFQUEyRDtBQUMzRCwyRUFBMEU7QUFDMUUsMkRBQXNEO0FBQ3RELDhEQUF5RDtBQUM5QyxRQUFBLE1BQU0sR0FBRztJQUNsQixXQUFXLEVBQUUsR0FBRztJQUNoQixZQUFZLEVBQUUsR0FBRztJQUNqQixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBQ1MsUUFBQSxZQUFZLEdBQUc7SUFDeEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBQ1MsUUFBQSxhQUFhLEdBQUc7SUFDekIsUUFBUSxFQUFFLEdBQUc7SUFDYixPQUFPLEVBQUUsR0FBRztDQUNiLENBQUM7QUFDRjtJQUFBO1FBQ0Usb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFxUnRDLENBQUM7SUFsUlEscUJBQVcsR0FBbEI7UUFDRSxPQUFPLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsd0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLFVBQVUsQ0FBQztZQUNULENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoQixDQUFDLENBQUMsV0FBVyxFQUFF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O3VEQVFuQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztzREFTbEM7SUFPRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7cURBS25DO0lBUUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzBEQUdqQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzswREFHakM7SUF1R0gsZ0JBQUM7Q0E5UkQsQUE4UkMsSUFBQTtrQkE5Um9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVlRfQURfU0hPV19TVEFSVCwgRVZUX0FEX1NIT1dfRU5EIH0gZnJvbSAnLi4vLi4vQ29uZmlnJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgeyBTaW5nbGV0b25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL3V0aWxzL1NpbmdsZXRvbkZhY3RvcnknO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQWRUcmFja2VyIGZyb20gJy4uLy4uL2dhbWVQbGF5L2Jhc2UvYWQvQWRUcmFja2VyJztcbmV4cG9ydCB2YXIgQWRUeXBlID0ge1xuICBSZXdhcmRWaWRlbzogXCIyXCIsXG4gIEludGVyc3RpdGlhbDogXCIxXCIsXG4gIEJhbm5lcjogXCJiYW5uZXJcIlxufTtcbmV4cG9ydCB2YXIgQWRTaG93U3RhdHVzID0ge1xuICBTaG93U3VjY2VzczogXCJzaG93c3VjY2Vzc1wiLFxuICBTaG93RmFpbDogXCJzaG93ZmFpbFwiLFxuICBDbG9zZTogXCJjbG9zZVwiXG59O1xuZXhwb3J0IHZhciBBZFJlYWNoU3RhdHVzID0ge1xuICBOb3RSZWFjaDogXCIwXCIsXG4gIFJlYWNoZWQ6IFwiMVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRNYW5hZ2VyIHtcbiAgX3ZpZGVvQ2FsbGJhY2tzID0gbnVsbDtcbiAgX3ZpZGVvQWRTY2VuZUlkID0gXCIwXCI7XG4gIF92aWRlb0V4dHJhRGF0YSA9IHt9O1xuICBfdmlkZW9BZFBvc2l0aW9uID0gbnVsbDtcbiAgX2lzQmFubmVyU2hvd2luZyA9IGZhbHNlO1xuICBfaXNTaG93aW5nQWQgPSBmYWxzZTtcbiAgX2FkTG9ja1RpbWVyID0gbnVsbDtcbiAgX3RvdWNoQmxvY2tlck5vZGUgPSBudWxsO1xuICBhZFRyYWNrZXIgPSBBZFRyYWNrZXIuZ2V0SW5zdGFuY2UoKTtcbiAgc3RhdGljIEFEX0xPQURfREVMQVkgPSA1MDA7XG4gIHN0YXRpYyBBRF9MT0NLX0RVUkFUSU9OID0gMjAwMDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBTaW5nbGV0b25GYWN0b3J5LmdldEluc3RhbmNlKHRoaXMpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdC5sb2FkVmlkZW9BZCgpO1xuICAgICAgdC5sb2FkSW50ZXJBZCgpO1xuICAgIH0sIEFkTWFuYWdlci5BRF9MT0FEX0RFTEFZKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX2xvYWRWaWRlb0FkXCIpXG4gIGxvYWRWaWRlb0FkKCkge1xuICAgIG1qLnNkay5sb2FkQWQoQWRUeXBlLlJld2FyZFZpZGVvKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX2xvYWRJbnRlckFkXCIpXG4gIGxvYWRJbnRlckFkKCkge1xuICAgIG1qLnNkay5sb2FkQWQoQWRUeXBlLkludGVyc3RpdGlhbCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZE1ncl9jaGtWaWRlb1JlYWR5XCIpXG4gIGNoZWNrVmlkZW9BZElzUmVhZHkoKSB7XG4gICAgcmV0dXJuIG1qLnNkay5nZXRBZElzUmVhZHkoQWRUeXBlLlJld2FyZFZpZGVvKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX2Noa0ludGVyUmVhZHlcIilcbiAgY2hlY2tJbnRlckFkSXNSZWFkeSgpIHtcbiAgICByZXR1cm4gbWouc2RrLmdldEFkSXNSZWFkeShBZFR5cGUuSW50ZXJzdGl0aWFsKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX3Nob3dCYW5uZXJcIilcbiAgc2hvd0Jhbm5lcigpIHtcbiAgICB0aGlzLl9pc0Jhbm5lclNob3dpbmcgPSB0cnVlO1xuICAgIG1qLnNkay5zaG93QmFubmVyKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZE1ncl9oaWRlQmFubmVyXCIpXG4gIGhpZGVCYW5uZXIoKSB7XG4gICAgdGhpcy5faXNCYW5uZXJTaG93aW5nID0gZmFsc2U7XG4gICAgbWouc2RrLmhpZGVCYW5uZXIoKTtcbiAgICB0aGlzLmFkVHJhY2tlci50cmFja0Jhbm5lclJldmVudWUoKTtcbiAgfVxuICBpc0Jhbm5lclNob3dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQmFubmVyU2hvd2luZztcbiAgfVxuICBwbGF5VmlkZW9BZChlLCB0LCBvID0gXCIwXCIsIG4gPSB7fSkge1xuICAgIHZhciBsID0gdGhpcztcbiAgICB0aGlzLnNhdmVWaWRlb0FkRGF0YShlLCB0LCBvLCBuKTtcbiAgICB2YXIgcyA9IEFkVHlwZS5SZXdhcmRWaWRlbyxcbiAgICAgIGMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcbiAgICAgIHUgPSB7XG4gICAgICAgIHN0YXJ0VGltZTogYyxcbiAgICAgICAgZW5kVGltZTogYyxcbiAgICAgICAgc2hvd1RpbWU6IDBcbiAgICAgIH07XG4gICAgaWYgKHRoaXMuY2hlY2tWaWRlb0FkQ29uZGl0aW9uKCkpIHtcbiAgICAgIGlmICghdGhpcy5faXNTaG93aW5nQWQpIHtcbiAgICAgICAgdGhpcy5sb2NrQWQoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlQnJvd3NlckRlYnVnQWQoKSkgdGhpcy5oYW5kbGVCcm93c2VyRGVidWdBZENvbW1vbihzLCBlLCB0LCBjLCBvLCBuLCB1KTtlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUFkU2hvd1N0YXJ0KFwicmV3YXJkQWRcIiwgZSk7XG4gICAgICAgICAgbWouc2RrLnNob3dBZChzLCBmdW5jdGlvbiAobywgbiwgaSwgcywgcCwgZikge1xuICAgICAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgICAgIGNhc2UgQWRTaG93U3RhdHVzLlNob3dTdWNjZXNzOlxuICAgICAgICAgICAgICAgIHUuc3RhcnRUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgQWRTaG93U3RhdHVzLlNob3dGYWlsOlxuICAgICAgICAgICAgICAgIGwudW5sb2NrQWQoKTtcbiAgICAgICAgICAgICAgICAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5vbkZhaWxlZCkgJiYgdC5vbkZhaWxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgbC5wbGF5VmlkZW9BZEZhaWxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgQWRTaG93U3RhdHVzLkNsb3NlOlxuICAgICAgICAgICAgICAgIGwudW5sb2NrQWQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IHAgPT09IEFkUmVhY2hTdGF0dXMuUmVhY2hlZDtcbiAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgbC5wbGF5VmlkZW9BZFN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm9uU3VjY2VzcykgJiYgdC5vblN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbC5wbGF5VmlkZW9BZEZhaWxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm9uRmFpbGVkKSAmJiB0Lm9uRmFpbGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1LmVuZFRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICB1LnNob3dUaW1lID0gdS5lbmRUaW1lIC0gdS5zdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgbC5hZFRyYWNrZXIudHJhY2tSZXdhcmRTaG93KGUsIGMsIG4sIGksIHUpO1xuICAgICAgICAgICAgICAgIGwuYWRUcmFja2VyLnRyYWNrUmV3YXJkQ2xvc2UoZiwgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbywgbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgdC5vbkZhaWxlZCAmJiB0Lm9uRmFpbGVkKCk7XG4gIH1cbiAgcGxheUludGVyQWQoZSwgdCwgbyA9IFwiMFwiLCBuID0ge30pIHtcbiAgICBpZiAodGhpcy5jaGVja0ludGVyQWRDb25kaXRpb24oZSwgdCwgbywgbikpIHtcbiAgICAgIHZhciByID0gQWRUeXBlLkludGVyc3RpdGlhbCxcbiAgICAgICAgYSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICBsID0ge1xuICAgICAgICAgIHN0YXJ0VGltZTogYSxcbiAgICAgICAgICBlbmRUaW1lOiBhLFxuICAgICAgICAgIHNob3dUaW1lOiAwXG4gICAgICAgIH07XG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd2luZ0FkKSB7XG4gICAgICAgIHRoaXMubG9ja0FkKCk7XG4gICAgICAgIHRoaXMuX3JlYWxseVNob3dJbnRlckFkKHIsIGUsIHQsIGEsIG8sIG4sIGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0Lm9uRmFpbGVkICYmIHQub25GYWlsZWQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX3JlYWxseVNob3dJbnRlckFkXCIpXG4gIF9yZWFsbHlTaG93SW50ZXJBZChlLCB0LCBvLCBuLCBpLCBhLCBsKSB7XG4gICAgdmFyIHMgPSB0aGlzO1xuICAgIGlmICh0aGlzLmhhbmRsZUJyb3dzZXJEZWJ1Z0FkKCkpIHRoaXMuaGFuZGxlQnJvd3NlckRlYnVnQWRDb21tb24oZSwgdCwgbywgbiwgaSwgYSwgbCk7ZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUFkU2hvd1N0YXJ0KFwiaW50ZXJBZFwiLCB0KTtcbiAgICAgIHZhciBjID0gYTtcbiAgICAgIG1qLnNkay5zaG93QWQoZSwgZnVuY3Rpb24gKGUsIGksIGEsIHUsIHAsIGYpIHtcbiAgICAgICAgc3dpdGNoICh1KSB7XG4gICAgICAgICAgY2FzZSBBZFNob3dTdGF0dXMuU2hvd1N1Y2Nlc3M6XG4gICAgICAgICAgICBsLnN0YXJ0VGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBBZFNob3dTdGF0dXMuU2hvd0ZhaWw6XG4gICAgICAgICAgICBzLnVubG9ja0FkKCk7XG4gICAgICAgICAgICBzLnBsYXlJbnRlckFkRmFpbGVkKCk7XG4gICAgICAgICAgICBvLm9uRmFpbGVkICYmIG8ub25GYWlsZWQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQWRTaG93U3RhdHVzLkNsb3NlOlxuICAgICAgICAgICAgcy51bmxvY2tBZCgpO1xuICAgICAgICAgICAgbC5lbmRUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICBsLnNob3dUaW1lID0gbC5lbmRUaW1lIC0gbC5zdGFydFRpbWU7XG4gICAgICAgICAgICBzLnBsYXlJbnRlckFkQ2xvc2UoYyk7XG4gICAgICAgICAgICBvLm9uU3VjY2VzcyAmJiBvLm9uU3VjY2VzcygpO1xuICAgICAgICAgICAgcy5hZFRyYWNrZXIudHJhY2tJbnRlclNob3codCwgbiwgaSwgYywgbCk7XG4gICAgICAgICAgICBzLmFkVHJhY2tlci50cmFja0ludGVyQ2xvc2UoZiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIGksIGEpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX3ZpZGVvU3VjY2Vzc1wiKVxuICBwbGF5VmlkZW9BZFN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5yZXNldFZpZGVvQWREYXRhKCk7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBlLnNldFRvdGFsUmV3YXJkQWRDb3VudChlLmdldFRvdGFsUmV3YXJkQWRDb3VudCgpICsgMSk7XG4gICAgdGhpcy5sb2FkVmlkZW9BZCgpO1xuICAgIHRoaXMuaGFuZGxlQWRTaG93RW5kKFwicmV3YXJkQWRcIik7XG4gICAgdGhpcy5hZFRyYWNrZXIudHJhY2tBZFN0YWdlRW5kKGZhbHNlLCB0cnVlLCBcInN1Y2Nlc3NcIiwgXCJcIik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZE1ncl92aWRlb0ZhaWxlZFwiKVxuICBwbGF5VmlkZW9BZEZhaWxlZChlLCB0ID0gZmFsc2UpIHtcbiAgICB0aGlzLmhhbmRsZUFkU2hvd0VuZChcInJld2FyZEFkXCIpO1xuICAgIGlmICghZSAmJiAhdCkge1xuICAgICAgdmFyIG8gPSBJMThOU3RyaW5ncy5nZXQoXCJNYWhqb25nVGlsZXNfQWRzTG9hZGluZ19UaXRsZV8xXCIsIFwiQWRzIFVuYXZhaWxhYmxlXCIpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJTSE9XUklDSFRJUFNcIiwgXCI8Y29sb3I9I0Y3QjU0Nj5cIiArIG8gKyBcIjwvY29sb3I+XCIsIGNjLnYyKDAsIDApKTtcbiAgICB9XG4gICAgdGhpcy5sb2FkVmlkZW9BZCgpO1xuICAgIHRoaXMuYWRUcmFja2VyLnRyYWNrQWRTdGFnZUVuZChmYWxzZSwgZmFsc2UsIFwiXCIsIGUgPyBcInJlYWNoICE9PSAxXCIgOiBcImZhaWxlZFwiKTtcbiAgfVxuICBwbGF5SW50ZXJBZEZhaWxlZCgpIHtcbiAgICB0aGlzLmhhbmRsZUFkU2hvd0VuZChcImludGVyQWRcIik7XG4gICAgdGhpcy5sb2FkSW50ZXJBZCgpO1xuICAgIHRoaXMuYWRUcmFja2VyLnRyYWNrQWRTdGFnZUVuZCh0cnVlLCBmYWxzZSwgXCJcIiwgXCJmYWlsZWRcIik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZE1ncl9pbnRlckFkQ2xvc2VcIilcbiAgcGxheUludGVyQWRDbG9zZSgpIHtcbiAgICB0aGlzLmhhbmRsZUFkU2hvd0VuZChcImludGVyQWRcIik7XG4gICAgdGhpcy5hZFRyYWNrZXIudHJhY2tBZFN0YWdlRW5kKHRydWUsIHRydWUsIFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICB0aGlzLmxvYWRJbnRlckFkKCk7XG4gIH1cbiAgcmV0cnlQbGF5VmlkZW9BZCgpIHtcbiAgICB0aGlzLnBsYXlWaWRlb0FkKHRoaXMuX3ZpZGVvQWRQb3NpdGlvbiwgdGhpcy5fdmlkZW9DYWxsYmFja3MsIHRoaXMuX3ZpZGVvQWRTY2VuZUlkLCB0aGlzLl92aWRlb0V4dHJhRGF0YSk7XG4gIH1cbiAgdHJpZ2dlclZpZGVvQWRTdWNjZXNzQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fdmlkZW9DYWxsYmFja3MgJiYgdGhpcy5fdmlkZW9DYWxsYmFja3Mub25TdWNjZXNzICYmIHRoaXMuX3ZpZGVvQ2FsbGJhY2tzLm9uU3VjY2VzcygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWRNZ3JfY2hrSW50ZXJBZFwiKVxuICBjaGVja0ludGVyQWRDb25kaXRpb24oZSwgdCwgbyA9IFwiMFwiLCBuID0ge30pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFkTWdyX2Noa1ZpZGVvQWRcIilcbiAgY2hlY2tWaWRlb0FkQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGhhbmRsZUFkU2hvd1N0YXJ0KGUsIHQpIHtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfQURfU0hPV19TVEFSVCwgZSk7XG4gICAgaWYgKFwicmV3YXJkQWRcIiA9PT0gZSkge1xuICAgICAgdGhpcy5hZFRyYWNrZXIudHJhY2tSZXdhcmRSZXF1ZXN0KHQpO1xuICAgICAgdGhpcy5hZFRyYWNrZXIudHJhY2tBZFN0YWdlU3RhcnQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkVHJhY2tlci50cmFja0ludGVyUmVxdWVzdCh0KTtcbiAgICAgIHRoaXMuYWRUcmFja2VyLnRyYWNrQWRTdGFnZVN0YXJ0KHRydWUpO1xuICAgICAgdGhpcy5hZFRyYWNrZXIudHJhY2tJbnRlclZpc2l0KHQpO1xuICAgIH1cbiAgICBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MgJiYgbWouYXVkaW9NYW5hZ2VyLnBhdXNlQkdNKCk7XG4gIH1cbiAgaGFuZGxlQWRTaG93RW5kKGUpIHtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfQURfU0hPV19FTkQsIGUpO1xuICAgIGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiBtai5hdWRpb01hbmFnZXIucmVzdW1lQkdNKCk7XG4gIH1cbiAgbG9ja0FkKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5fYWRMb2NrVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hZExvY2tUaW1lcik7XG4gICAgICB0aGlzLl9hZExvY2tUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2lzU2hvd2luZ0FkID0gdHJ1ZTtcbiAgICB0aGlzLmJsb2NrVG91Y2goKTtcbiAgICB0aGlzLl9hZExvY2tUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdC5faXNTaG93aW5nQWQgPSBmYWxzZTtcbiAgICAgIHQuX2FkTG9ja1RpbWVyID0gbnVsbDtcbiAgICAgIHQudW5ibG9ja1RvdWNoKCk7XG4gICAgfSwgQWRNYW5hZ2VyLkFEX0xPQ0tfRFVSQVRJT04pO1xuICB9XG4gIHVubG9ja0FkKCkge1xuICAgIHRoaXMuX2lzU2hvd2luZ0FkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2FkTG9ja1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWRMb2NrVGltZXIpO1xuICAgICAgdGhpcy5fYWRMb2NrVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnVuYmxvY2tUb3VjaCgpO1xuICB9XG4gIGJsb2NrVG91Y2goKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fdG91Y2hCbG9ja2VyTm9kZSB8fCAhY2MuaXNWYWxpZCh0aGlzLl90b3VjaEJsb2NrZXJOb2RlKSkge1xuICAgICAgdmFyIHQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5maW5kKFwiQ2FudmFzXCIsIHQpLFxuICAgICAgICAgIG4gPSBudWxsICE9IG8gPyBvIDogdCxcbiAgICAgICAgICBpID0gbmV3IGNjLk5vZGUoXCJfYWRUb3VjaEJsb2NrZXJcIik7XG4gICAgICAgIGkuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XG4gICAgICAgIGkuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICBpLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICBpLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpLnpJbmRleCA9IDk5OTtcbiAgICAgICAgaS5wYXJlbnQgPSBuO1xuICAgICAgICB2YXIgciA9IDA7XG4gICAgICAgIGkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgKytyID49IDUgJiYgZS51bmJsb2NrVG91Y2goKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RvdWNoQmxvY2tlck5vZGUgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1bmJsb2NrVG91Y2goKSB7XG4gICAgaWYgKHRoaXMuX3RvdWNoQmxvY2tlck5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl90b3VjaEJsb2NrZXJOb2RlKSkge1xuICAgICAgdGhpcy5fdG91Y2hCbG9ja2VyTm9kZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLl90b3VjaEJsb2NrZXJOb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgc2F2ZVZpZGVvQWREYXRhKGUsIHQsIG8sIG4pIHtcbiAgICB0aGlzLl92aWRlb0FkUG9zaXRpb24gPSBlO1xuICAgIHRoaXMuX3ZpZGVvQ2FsbGJhY2tzID0gdDtcbiAgICB0aGlzLl92aWRlb0FkU2NlbmVJZCA9IG87XG4gICAgdGhpcy5fdmlkZW9FeHRyYURhdGEgPSBuO1xuICB9XG4gIHJlc2V0VmlkZW9BZERhdGEoKSB7XG4gICAgdGhpcy5fdmlkZW9BZFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLl92aWRlb0NhbGxiYWNrcyA9IG51bGw7XG4gICAgdGhpcy5fdmlkZW9BZFNjZW5lSWQgPSBcIjBcIjtcbiAgICB0aGlzLl92aWRlb0V4dHJhRGF0YSA9IHt9O1xuICB9XG4gIGhhbmRsZUJyb3dzZXJEZWJ1Z0FkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoYW5kbGVCcm93c2VyRGVidWdBZENvbW1vbihlLCB0LCBvLCBuLCByLCBhLCBsKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlQnJvd3NlckRlYnVnQWQoKSkge1xuICAgICAgbC5zaG93VGltZSA9IGwuZW5kVGltZSAtIGwuc3RhcnRUaW1lO1xuICAgICAgaWYgKGUgPT09IEFkVHlwZS5SZXdhcmRWaWRlbykge1xuICAgICAgICB0aGlzLnVubG9ja0FkKCk7XG4gICAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KFwiU0hPV1JJQ0hUSVBTXCIsIFwiPGNvbG9yPSNmZmZmMDA+5qih5ouf6KeG6aKR5bm/5ZGK5pKt5pS+5oiQ5Yqf77yMPC9jb2xvcj48Y29sb3I9I2ZmMDAwMD7orrDlvpfmlLnlm57mnaU8L2NvbG9yPlwiLCBjYy52MigwLCAwKSk7XG4gICAgICAgIHRoaXMucGxheVZpZGVvQWRTdWNjZXNzKCk7XG4gICAgICAgIG8ub25TdWNjZXNzICYmIG8ub25TdWNjZXNzKCk7XG4gICAgICAgIHRoaXMuYWRUcmFja2VyLnRyYWNrUmV3YXJkU2hvdyh0LCBuLCByLCBhLCBsKTtcbiAgICAgICAgdGhpcy5hZFRyYWNrZXIudHJhY2tSZXdhcmRDbG9zZShcIjBcIiwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVubG9ja0FkKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQWRTaG93U3RhcnQoXCJpbnRlckFkXCIsIHQpO1xuICAgICAgICB0aGlzLnBsYXlJbnRlckFkQ2xvc2UoYSk7XG4gICAgICAgIG8ub25TdWNjZXNzICYmIG8ub25TdWNjZXNzKCk7XG4gICAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KFwiU0hPV1JJQ0hUSVBTXCIsIFwiPGNvbG9yPSNmZmZmMDA+5qih5ouf5o+S5bGP5bm/5ZGK5pKt5pS+5oiQ5Yqf77yMPC9jb2xvcj48Y29sb3I9I2ZmMDAwMD7orrDlvpfmlLnlm57mnaU8L2NvbG9yPlwiLCBjYy52MigwLCAwKSk7XG4gICAgICAgIHRoaXMuYWRUcmFja2VyLnRyYWNrSW50ZXJTaG93KHQsIG4sIHIsIGEsIGwpO1xuICAgICAgICB0aGlzLmFkVHJhY2tlci50cmFja0ludGVyQ2xvc2UoXCIwXCIsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==