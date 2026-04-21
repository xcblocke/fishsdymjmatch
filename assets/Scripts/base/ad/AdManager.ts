import { EVT_AD_SHOW_START, EVT_AD_SHOW_END } from '../../Config';
import I18NStrings from '../../framework/data/I18NStrings';
import { SingletonFactory } from '../../framework/utils/SingletonFactory';
import UserModel from '../../gamePlay/user/UserModel';
import AdTracker from '../../gamePlay/base/ad/AdTracker';
export var AdType = {
  RewardVideo: "2",
  Interstitial: "1",
  Banner: "banner"
};
export var AdShowStatus = {
  ShowSuccess: "showsuccess",
  ShowFail: "showfail",
  Close: "close"
};
export var AdReachStatus = {
  NotReach: "0",
  Reached: "1"
};
export default class AdManager {
  _videoCallbacks = null;
  _videoAdSceneId = "0";
  _videoExtraData = {};
  _videoAdPosition = null;
  _isBannerShowing = false;
  _isShowingAd = false;
  _adLockTimer = null;
  _touchBlockerNode = null;
  adTracker = AdTracker.getInstance();
  static AD_LOAD_DELAY = 500;
  static AD_LOCK_DURATION = 2000;
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  init() {
    var t = this;
    setTimeout(function () {
      t.loadVideoAd();
      t.loadInterAd();
    }, AdManager.AD_LOAD_DELAY);
  }
  @mj.traitEvent("AdMgr_loadVideoAd")
  loadVideoAd() {
    mj.sdk.loadAd(AdType.RewardVideo);
  }
  @mj.traitEvent("AdMgr_loadInterAd")
  loadInterAd() {
    mj.sdk.loadAd(AdType.Interstitial);
  }
  @mj.traitEvent("AdMgr_chkVideoReady")
  checkVideoAdIsReady() {
    return mj.sdk.getAdIsReady(AdType.RewardVideo);
  }
  @mj.traitEvent("AdMgr_chkInterReady")
  checkInterAdIsReady() {
    return mj.sdk.getAdIsReady(AdType.Interstitial);
  }
  @mj.traitEvent("AdMgr_showBanner")
  showBanner() {
    this._isBannerShowing = true;
    mj.sdk.showBanner();
  }
  @mj.traitEvent("AdMgr_hideBanner")
  hideBanner() {
    this._isBannerShowing = false;
    mj.sdk.hideBanner();
    this.adTracker.trackBannerRevenue();
  }
  isBannerShowing() {
    return this._isBannerShowing;
  }
  playVideoAd(e, t, o = "0", n = {}) {
    var l = this;
    this.saveVideoAdData(e, t, o, n);
    var s = AdType.RewardVideo,
      c = Math.floor(Date.now() / 1000),
      u = {
        startTime: c,
        endTime: c,
        showTime: 0
      };
    if (this.checkVideoAdCondition()) {
      if (!this._isShowingAd) {
        this.lockAd();
        if (this.handleBrowserDebugAd()) this.handleBrowserDebugAdCommon(s, e, t, c, o, n, u);else {
          this.handleAdShowStart("rewardAd", e);
          mj.sdk.showAd(s, function (o, n, i, s, p, f) {
            switch (s) {
              case AdShowStatus.ShowSuccess:
                u.startTime = Math.floor(Date.now() / 1000);
                break;
              case AdShowStatus.ShowFail:
                l.unlockAd();
                (null == t ? void 0 : t.onFailed) && t.onFailed(false);
                l.playVideoAdFailed(false);
                break;
              case AdShowStatus.Close:
                l.unlockAd();
                var d = p === AdReachStatus.Reached;
                if (d) {
                  l.playVideoAdSuccess();
                  (null == t ? void 0 : t.onSuccess) && t.onSuccess();
                } else {
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
    } else t.onFailed && t.onFailed();
  }
  playInterAd(e, t, o = "0", n = {}) {
    if (this.checkInterAdCondition(e, t, o, n)) {
      var r = AdType.Interstitial,
        a = Math.floor(Date.now() / 1000),
        l = {
          startTime: a,
          endTime: a,
          showTime: 0
        };
      if (!this._isShowingAd) {
        this.lockAd();
        this._reallyShowInterAd(r, e, t, a, o, n, l);
      }
    } else t.onFailed && t.onFailed();
  }
  @mj.traitEvent("AdMgr_reallyShowInterAd")
  _reallyShowInterAd(e, t, o, n, i, a, l) {
    var s = this;
    if (this.handleBrowserDebugAd()) this.handleBrowserDebugAdCommon(e, t, o, n, i, a, l);else {
      this.handleAdShowStart("interAd", t);
      var c = a;
      mj.sdk.showAd(e, function (e, i, a, u, p, f) {
        switch (u) {
          case AdShowStatus.ShowSuccess:
            l.startTime = Math.floor(Date.now() / 1000);
            break;
          case AdShowStatus.ShowFail:
            s.unlockAd();
            s.playInterAdFailed();
            o.onFailed && o.onFailed();
            break;
          case AdShowStatus.Close:
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
  }
  @mj.traitEvent("AdMgr_videoSuccess")
  playVideoAdSuccess() {
    this.resetVideoAdData();
    var e = UserModel.getInstance();
    e.setTotalRewardAdCount(e.getTotalRewardAdCount() + 1);
    this.loadVideoAd();
    this.handleAdShowEnd("rewardAd");
    this.adTracker.trackAdStageEnd(false, true, "success", "");
  }
  @mj.traitEvent("AdMgr_videoFailed")
  playVideoAdFailed(e, t = false) {
    this.handleAdShowEnd("rewardAd");
    if (!e && !t) {
      var o = I18NStrings.get("MahjongTiles_AdsLoading_Title_1", "Ads Unavailable");
      mj.EventManager.emit("SHOWRICHTIPS", "<color=#F7B546>" + o + "</color>", cc.v2(0, 0));
    }
    this.loadVideoAd();
    this.adTracker.trackAdStageEnd(false, false, "", e ? "reach !== 1" : "failed");
  }
  playInterAdFailed() {
    this.handleAdShowEnd("interAd");
    this.loadInterAd();
    this.adTracker.trackAdStageEnd(true, false, "", "failed");
  }
  @mj.traitEvent("AdMgr_interAdClose")
  playInterAdClose() {
    this.handleAdShowEnd("interAd");
    this.adTracker.trackAdStageEnd(true, true, "success", "");
    this.loadInterAd();
  }
  retryPlayVideoAd() {
    this.playVideoAd(this._videoAdPosition, this._videoCallbacks, this._videoAdSceneId, this._videoExtraData);
  }
  triggerVideoAdSuccessCallback() {
    this._videoCallbacks && this._videoCallbacks.onSuccess && this._videoCallbacks.onSuccess();
  }
  @mj.traitEvent("AdMgr_chkInterAd")
  checkInterAdCondition(e, t, o = "0", n = {}) {
    return true;
  }
  @mj.traitEvent("AdMgr_chkVideoAd")
  checkVideoAdCondition() {
    return true;
  }
  handleAdShowStart(e, t) {
    mj.EventManager.emit(EVT_AD_SHOW_START, e);
    if ("rewardAd" === e) {
      this.adTracker.trackRewardRequest(t);
      this.adTracker.trackAdStageStart(false);
    } else {
      this.adTracker.trackInterRequest(t);
      this.adTracker.trackAdStageStart(true);
      this.adTracker.trackInterVisit(t);
    }
    cc.sys.os === cc.sys.OS_IOS && mj.audioManager.pauseBGM();
  }
  handleAdShowEnd(e) {
    mj.EventManager.emit(EVT_AD_SHOW_END, e);
    cc.sys.os === cc.sys.OS_IOS && mj.audioManager.resumeBGM();
  }
  lockAd() {
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
  }
  unlockAd() {
    this._isShowingAd = false;
    if (this._adLockTimer) {
      clearTimeout(this._adLockTimer);
      this._adLockTimer = null;
    }
    this.unblockTouch();
  }
  blockTouch() {
    var e = this;
    if (!this._touchBlockerNode || !cc.isValid(this._touchBlockerNode)) {
      var t = cc.director.getScene();
      if (t) {
        var o = cc.find("Canvas", t),
          n = null != o ? o : t,
          i = new cc.Node("_adTouchBlocker");
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
  }
  unblockTouch() {
    if (this._touchBlockerNode && cc.isValid(this._touchBlockerNode)) {
      this._touchBlockerNode.destroy();
      this._touchBlockerNode = null;
    }
  }
  saveVideoAdData(e, t, o, n) {
    this._videoAdPosition = e;
    this._videoCallbacks = t;
    this._videoAdSceneId = o;
    this._videoExtraData = n;
  }
  resetVideoAdData() {
    this._videoAdPosition = null;
    this._videoCallbacks = null;
    this._videoAdSceneId = "0";
    this._videoExtraData = {};
  }
  handleBrowserDebugAd() {
    return false;
  }
  handleBrowserDebugAdCommon(e, t, o, n, r, a, l) {
    if (this.handleBrowserDebugAd()) {
      l.showTime = l.endTime - l.startTime;
      if (e === AdType.RewardVideo) {
        this.unlockAd();
        mj.EventManager.emit("SHOWRICHTIPS", "<color=#ffff00>模拟视频广告播放成功，</color><color=#ff0000>记得改回来</color>", cc.v2(0, 0));
        this.playVideoAdSuccess();
        o.onSuccess && o.onSuccess();
        this.adTracker.trackRewardShow(t, n, r, a, l);
        this.adTracker.trackRewardClose("0", true);
      } else {
        this.unlockAd();
        this.handleAdShowStart("interAd", t);
        this.playInterAdClose(a);
        o.onSuccess && o.onSuccess();
        mj.EventManager.emit("SHOWRICHTIPS", "<color=#ffff00>模拟插屏广告播放成功，</color><color=#ff0000>记得改回来</color>", cc.v2(0, 0));
        this.adTracker.trackInterShow(t, n, r, a, l);
        this.adTracker.trackInterClose("0", true);
      }
    }
  }
}