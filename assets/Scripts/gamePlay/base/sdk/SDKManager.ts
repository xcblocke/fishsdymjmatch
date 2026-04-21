import { SingletonFactory } from '../../../framework/utils/SingletonFactory';
var a = function a(e) {
  for (var t, o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
  var r = (t = jsb.invokerManager).invokeSync.apply(t, [...[e], ...o]);
  if (!r.error) return r.result;
  var a = "invokeSync:" + e + ": " + r.error.message;
  window['_reportError'] && window['_reportError'](a);
  console.error(a);
};
var l = {};
export default class SDKManager {
  _isValid = false;
  constructor() {
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
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  registerEvent() {
    jsb.eventManager.on("adShowCallBack", function (e) {
      var t = ["0", "", null, "showfail", "0", ""];
      try {
        var o = JSON.parse(e);
        t = [o.adType, o.adSceneId, o.ext && JSON.parse(o.ext), o.status, o.reach, o.ecpm];
      } catch (e) {
        console.error("adShowCallBack parse error:" + e.message);
      }
      l.adShowCallBack && l.adShowCallBack.apply(l, [...t]);
    });
  }
  canInvoke(e) {
    if (this._isValid) return jsb.invokerManager.canInvoke(e);
  }
  getDeviceInfo() {
    if (this._isValid) {
      var e = a("getDeviceInfo");
      try {
        return JSON.parse(e);
      } catch (e) {
        console.error("getDeviceInfo parse error:" + e.message);
        return;
      }
    }
  }
  loadAd(e) {
    if (this._isValid) return a("adLoad", e);
  }
  getAdIsReady(e) {
    var t = "1" === e ? "interAd" : "rewardAd";
    if (this._isValid) {
      return "true" === a("callGetAdReady", t);
    }
    return false;
  }
  showAd(e, t, o = "0", n = {}) {
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
  }
  report(e, t, o = false, n = false) {
    var i = JSON.stringify({
      eventName: e,
      eventValue: JSON.stringify(t)
    });
    if (this._isValid) return a(o ? "hsEventTrack" : n ? "eventTrackFlush" : "eventTrack", i);
  }
  userDataUpload(e) {
    if (this._isValid) return a("userSet", JSON.stringify(e));
  }
  eventSuperProperties(e) {
    if (this._isValid) return a("eventSuperProperties", JSON.stringify(e));
  }
  feedback() {
    if (this._isValid) return a("feedback");
  }
  shake(e) {
    if (this._isValid) return a("callSystemVibration", e);
  }
  shakeRepeat(e) {
    if (this._isValid) return a("callVibrateRepeat", e);
  }
  shakeAdvence(e) {
    if (this._isValid) return a("callNativeVibrateByType", e);
  }
  isSupportShakeAdvence() {
    return this._isValid ? a("callIsVibrationAdvanced") : "";
  }
  getApiLevel() {
    return this._isValid ? a("getOsVersionInt") : "";
  }
  showBanner() {
    if (this._isValid) return a("showBanner");
  }
  hideBanner() {
    if (this._isValid) return a("hideBanner");
  }
  closeSplash() {
    if (this._isValid) return a("callNativeHideLoading");
  }
  callOpenFeedback(e) {
    if (this._isValid) return a("callOpenFeedback", e);
  }
  contactUs() {
    if (this._isValid) return a("callContactUs");
  }
  aboutUs() {
    if (this._isValid) return a("callNativeTerms");
  }
  privacy() {
    if (this._isValid) return a("callNativePrivacy");
  }
  comment(e) {
    if (this._isValid) return a("callComment", e);
  }
  callGetBannerRevenueSum() {
    if (this._isValid) return a("callGetBannerRevenueSum");
  }
  callTrackGameEndRevenue(e) {
    if (this._isValid) return a("callTrackGameEndRevenue", JSON.stringify(e));
  }
  setGameSoundStatus(e) {
    if (this._isValid && this.canInvoke("setGameSoundStatus")) return a("setGameSoundStatus", JSON.stringify({
      status: e
    }));
  }
  setGameBGMStatus(e) {
    if (this._isValid && this.canInvoke("setGameBGMStatus")) return a("setGameBGMStatus", JSON.stringify({
      status: e
    }));
  }
  getIsAudioBusy() {
    if (this._isValid) {
      var e = a("getIsAudioBusy"),
        t = false;
      try {
        var o = JSON.parse(e);
        t = null == o ? void 0 : o.status;
      } catch (e) {
        console.error("getIsAudioBusy parse error:" + e.message);
        return false;
      }
      return t;
    }
    return false;
  }
  sendGamePush(e) {
    if (this._isValid) return a("sendGamePush", JSON.stringify(e));
  }
  sendGamePushRemoved() {
    if (this._isValid) return a("sendGamePushRemoved");
  }
  getGamePushInfo(e) {
    if (this._isValid) return a("getGamePushInfo", e);
  }
  getOpenAppOpeway() {
    if (this._isValid) return a("getOpenAppOpeway");
  }
  getFirstInterLoadEcpm() {
    if (this._isValid) {
      var e = a("callNativeGetFirstEcpm");
      return Number(e);
    }
  }
}