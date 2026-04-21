"use strict";
cc._RF.push(module, 'b281fjRZG1B7bEbIP5yO2C/', 'SDKManager');
// Scripts/gamePlay/base/sdk/SDKManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../../framework/utils/SingletonFactory");
var a = function a(e) {
    for (var t, o = [], n = 1; n < arguments.length; n++)
        o[n - 1] = arguments[n];
    var r = (t = jsb.invokerManager).invokeSync.apply(t, __spreadArrays([e], o));
    if (!r.error)
        return r.result;
    var a = "invokeSync:" + e + ": " + r.error.message;
    window['_reportError'] && window['_reportError'](a);
    console.error(a);
};
var l = {};
var SDKManager = /** @class */ (function () {
    function SDKManager() {
        this._isValid = false;
        var e;
        if (cc.sys.isNative && cc.sys.isMobile && (null === (e = null === jsb || void 0 === jsb ? void 0 : jsb.invokerManager) || void 0 === e ? void 0 : e.invokeSync)) {
            var t = jsb.invokerManager.invokeSync("getDeviceInfo");
            if (!t || t.error) {
                console.error("无原生接口，走纯净兼容模式");
                return;
            }
            this._isValid = true;
            this.registerEvent();
        }
    }
    SDKManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    SDKManager.prototype.registerEvent = function () {
        jsb.eventManager.on("adShowCallBack", function (e) {
            var t = ["0", "", null, "showfail", "0", ""];
            try {
                var o = JSON.parse(e);
                t = [o.adType, o.adSceneId, o.ext && JSON.parse(o.ext), o.status, o.reach, o.ecpm];
            }
            catch (e) {
                console.error("adShowCallBack parse error:" + e.message);
            }
            l.adShowCallBack && l.adShowCallBack.apply(l, __spreadArrays(t));
        });
    };
    SDKManager.prototype.canInvoke = function (e) {
        if (this._isValid)
            return jsb.invokerManager.canInvoke(e);
    };
    SDKManager.prototype.getDeviceInfo = function () {
        if (this._isValid) {
            var e = a("getDeviceInfo");
            try {
                return JSON.parse(e);
            }
            catch (e) {
                console.error("getDeviceInfo parse error:" + e.message);
                return;
            }
        }
    };
    SDKManager.prototype.loadAd = function (e) {
        if (this._isValid)
            return a("adLoad", e);
    };
    SDKManager.prototype.getAdIsReady = function (e) {
        var t = "1" === e ? "interAd" : "rewardAd";
        if (this._isValid) {
            return "true" === a("callGetAdReady", t);
        }
        return false;
    };
    SDKManager.prototype.showAd = function (e, t, o, n) {
        if (o === void 0) { o = "0"; }
        if (n === void 0) { n = {}; }
        var i = JSON.stringify({
            adType: e,
            adSceneId: o,
            extraData: n && JSON.stringify(n)
        });
        if (this._isValid) {
            l.adShowCallBack = t;
            return a("adShow", i);
        }
        setTimeout(function () {
            t(e, o, n, "showfail", "0", "");
        }, 32);
    };
    SDKManager.prototype.report = function (e, t, o, n) {
        if (o === void 0) { o = false; }
        if (n === void 0) { n = false; }
        var i = JSON.stringify({
            eventName: e,
            eventValue: JSON.stringify(t)
        });
        if (this._isValid)
            return a(o ? "hsEventTrack" : n ? "eventTrackFlush" : "eventTrack", i);
    };
    SDKManager.prototype.userDataUpload = function (e) {
        if (this._isValid)
            return a("userSet", JSON.stringify(e));
    };
    SDKManager.prototype.eventSuperProperties = function (e) {
        if (this._isValid)
            return a("eventSuperProperties", JSON.stringify(e));
    };
    SDKManager.prototype.feedback = function () {
        if (this._isValid)
            return a("feedback");
    };
    SDKManager.prototype.shake = function (e) {
        if (this._isValid)
            return a("callSystemVibration", e);
    };
    SDKManager.prototype.shakeRepeat = function (e) {
        if (this._isValid)
            return a("callVibrateRepeat", e);
    };
    SDKManager.prototype.shakeAdvence = function (e) {
        if (this._isValid)
            return a("callNativeVibrateByType", e);
    };
    SDKManager.prototype.isSupportShakeAdvence = function () {
        return this._isValid ? a("callIsVibrationAdvanced") : "";
    };
    SDKManager.prototype.getApiLevel = function () {
        return this._isValid ? a("getOsVersionInt") : "";
    };
    SDKManager.prototype.showBanner = function () {
        if (this._isValid)
            return a("showBanner");
    };
    SDKManager.prototype.hideBanner = function () {
        if (this._isValid)
            return a("hideBanner");
    };
    SDKManager.prototype.closeSplash = function () {
        if (this._isValid)
            return a("callNativeHideLoading");
    };
    SDKManager.prototype.callOpenFeedback = function (e) {
        if (this._isValid)
            return a("callOpenFeedback", e);
    };
    SDKManager.prototype.contactUs = function () {
        if (this._isValid)
            return a("callContactUs");
    };
    SDKManager.prototype.aboutUs = function () {
        if (this._isValid)
            return a("callNativeTerms");
    };
    SDKManager.prototype.privacy = function () {
        if (this._isValid)
            return a("callNativePrivacy");
    };
    SDKManager.prototype.comment = function (e) {
        if (this._isValid)
            return a("callComment", e);
    };
    SDKManager.prototype.callGetBannerRevenueSum = function () {
        if (this._isValid)
            return a("callGetBannerRevenueSum");
    };
    SDKManager.prototype.callTrackGameEndRevenue = function (e) {
        if (this._isValid)
            return a("callTrackGameEndRevenue", JSON.stringify(e));
    };
    SDKManager.prototype.setGameSoundStatus = function (e) {
        if (this._isValid && this.canInvoke("setGameSoundStatus"))
            return a("setGameSoundStatus", JSON.stringify({
                status: e
            }));
    };
    SDKManager.prototype.setGameBGMStatus = function (e) {
        if (this._isValid && this.canInvoke("setGameBGMStatus"))
            return a("setGameBGMStatus", JSON.stringify({
                status: e
            }));
    };
    SDKManager.prototype.getIsAudioBusy = function () {
        if (this._isValid) {
            var e = a("getIsAudioBusy"), t = false;
            try {
                var o = JSON.parse(e);
                t = null == o ? void 0 : o.status;
            }
            catch (e) {
                console.error("getIsAudioBusy parse error:" + e.message);
                return false;
            }
            return t;
        }
        return false;
    };
    SDKManager.prototype.sendGamePush = function (e) {
        if (this._isValid)
            return a("sendGamePush", JSON.stringify(e));
    };
    SDKManager.prototype.sendGamePushRemoved = function () {
        if (this._isValid)
            return a("sendGamePushRemoved");
    };
    SDKManager.prototype.getGamePushInfo = function (e) {
        if (this._isValid)
            return a("getGamePushInfo", e);
    };
    SDKManager.prototype.getOpenAppOpeway = function () {
        if (this._isValid)
            return a("getOpenAppOpeway");
    };
    SDKManager.prototype.getFirstInterLoadEcpm = function () {
        if (this._isValid) {
            var e = a("callNativeGetFirstEcpm");
            return Number(e);
        }
    };
    return SDKManager;
}());
exports.default = SDKManager;

cc._RF.pop();