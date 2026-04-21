import { SHOWLOADING, EVT_MSG_KEY_EVENT_HIDE, EVT_MSG_KEY_EVENT_SHOW } from '../../../Config';
import Model from '../../../framework/data/Model';
import TraitManager from '../../../framework/trait/TraitManager';
import UserPropteryManager from '../../analyze/UserPropteryManager';
import AdModel from '../../base/ad/AdModel';
import { DotGamePageShow, EPageShowType } from '../../../dot/DGamePageShow';
import AdManager from '../../../base/ad/AdManager';
import UserInfoManager from '../../base/user/UserInfoManager';
import MemoryManager from '../../../framework/manager/MemoryManager';
import I18NStrings from '../../../framework/data/I18NStrings';
import { delayFrame } from '../../../framework/utils/CommonUtils';
import PushManager from '../../base/push/PushManager';
import LowPriorityBundleLoader from '../../base/ui/LowPriorityBundleLoader';
import UserModel from '../../user/UserModel';
import { MjGameType } from '../../../core/simulator/constant/GameTypeEnums';
@mj.class("LoginModel")
export default class LoginModel extends Model {
  _traitsData = null;
  _serverPlanData = null;
  _basePlanData = {};
  _version = "";
  _baseVersion = "";
  _delayFrame = cc.sys.isBrowser ? 60 : 12;
  _isLoadCachePlanData = false;
  _cachePlanVersion = "1.0.0";
  _isHighPerformance = true;
  _samplingStartTimestamp = 0;
  _samplingFrameCount = 0;
  _samplingTimer = null;
  _hideTime = 0;
  get version() {
    return this._version;
  }
  set version(e) {
    this._version = e;
  }
  get baseVersion() {
    return this._baseVersion;
  }
  set baseVersion(e) {
    this._baseVersion = e;
  }
  get appVersion() {
    return this._deviceInfo.app_version;
  }
  get installTime() {
    return this._deviceInfo.install_time;
  }
  get country() {
    return this._deviceInfo.country;
  }
  get countryIso() {
    var e;
    return ((null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.country_iso) || "").toUpperCase();
  }
  get bundleId() {
    return this._deviceInfo.bundle_id;
  }
  get deviceModel() {
    return this._deviceInfo.device_model;
  }
  get osVersion() {
    return this._deviceInfo.os_version;
  }
  get remainMemory() {
    return this._deviceInfo.remain_memory;
  }
  get remainDiskspace() {
    return this._deviceInfo.remain_diskspace;
  }
  get allMemory() {
    return this._deviceInfo.all_memory;
  }
  get opt() {
    return this._deviceInfo.opt;
  }
  get anrTimes() {
    return this._deviceInfo.anr_times;
  }
  get runningStatus() {
    return this._deviceInfo.running_status;
  }
  get timeZone() {
    return this._deviceInfo.time_zone;
  }
  get systemLanguage() {
    var e, t;
    return (null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.system_language) || (null === (t = this._deviceInfo) || void 0 === t ? void 0 : t.local_language) || I18NStrings.defaultLanguage;
  }
  get language() {
    return this.localData.language || I18NStrings.defaultLanguage;
  }
  set language(e) {
    this.localData.language = e;
  }
  get deviceInfo() {
    return this._deviceInfo;
  }
  get installDay() {
    return this._deviceInfo.install_day;
  }
  get activeDay() {
    return this._deviceInfo.active_day;
  }
  get serverPlanData() {
    return this._serverPlanData;
  }
  constructor() {
    super();
    this.initDeviceInfo();
    UserModel.getInstance();
  }
  initDeviceInfo() {
    this._deviceInfo = mj.sdk.getDeviceInfo();
    this._deviceInfo = this._deviceInfo || {};
  }
  isCompatibilityCachePlanData() {
    var e = this.localData.cacheServerData;
    return (null == e ? void 0 : e.cachePlanVersion) == this._cachePlanVersion;
  }
  loadCachePlanData() {
    var e = this.localData.cacheServerData;
    if (!this.isCompatibilityCachePlanData()) {
      this.localData.cacheServerData = "";
      return false;
    }
    if (e) {
      this._isLoadCachePlanData = true;
      this._serverPlanData = e;
      this.tryInitTraits();
      return true;
    }
    return false;
  }
  initBasePlanData(e) {
    var t = cc.sys.os;
    this._basePlanData = e[t] || e.default;
    this._basePlanData.cachePlanVersion = this._cachePlanVersion;
  }
  isPlanEqual(e, t) {
    var o, n;
    if ((null == e ? void 0 : e.length) !== (null == t ? void 0 : t.length)) return false;
    var i = new Set(e),
      r = new Set(t);
    try {
      for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        if (!r.has(c)) return false;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (n = l.return) && n.call(l);
      } finally {
        if (o) throw o.error;
      }
    }
    return true;
  }
  isSatisfyRequiredTraits(e) {
    var t,
      o = ["BannerAd", "BeforeInterAd", "Bomb", "CardLockDarken", "ChangeShadow", "CoverLockTip", "DianZan", "Fail", "FixedLevels", "FullCombo", "GameOverInterAd", "GuideTrait", "HardLevelTips", "HintAnim", "InterAdCD", "InterAdStartLevel", "LockMask", "PropNumsTrait", "RatingDialog", "RewardCombo", "SelectLoopAnim", "SelectScaleTrait", "SettingsDialog", "TileTypes", "TouchSizeTrait", "WatchAdGetProp"],
      n = (null === (t = null == e ? void 0 : e.params) || void 0 === t ? void 0 : t.features) || [],
      i = o.length;
    return n.filter(function (e) {
      return o.includes(e.key);
    }).length >= 0.5 * i;
  }
  initServerPlanData(e) {
    var t, o, n, i, r, a, l;
    1 == (null === (n = null === (o = null === (t = this.localData.cacheServerData) || void 0 === t ? void 0 : t.hits) || void 0 === o ? void 0 : o[0]) || void 0 === n ? void 0 : n.t) && (this.localData.firstPlan = this.localData.cacheServerData);
    this.isCompatibilityCachePlanData() || (this.localData.cacheServerData = "");
    if ((null == e ? void 0 : e.params) && this.isSatisfyRequiredTraits(e)) {
      e.cachePlanVersion = this._cachePlanVersion;
      if (this.localData.cacheServerData) {
        if (this.isPlanEqual(null === (i = e.hit_sample) || void 0 === i ? void 0 : i.grp_ids, null === (r = this.localData.cacheServerData.hit_sample) || void 0 === r ? void 0 : r.grp_ids) && this.isPlanEqual(null === (a = e.hit_sample) || void 0 === a ? void 0 : a.exps, null === (l = this.localData.cacheServerData.hit_sample) || void 0 === l ? void 0 : l.exps)) {
          if (this._serverPlanData) {
            this.allReady();
            return;
          }
        } else {
          this.localData.cacheServerData = e;
          if (this._serverPlanData) {
            this.setRestartTag(true);
            GameRestart();
            return;
          }
        }
      } else this.localData.cacheServerData = e;
    } else {
      this.localData.cacheServerData || (this.localData.cacheServerData = this._basePlanData);
      if (this._serverPlanData) {
        this.allReady();
        return;
      }
    }
    this._serverPlanData = this.localData.cacheServerData;
    this.tryInitTraits();
    this.allReady();
  }
  isUpdateRestart() {
    return this.localData.__restartTagKey__;
  }
  setRestartTag(e) {
    this.localData.restartTag = e;
  }
  getRestartTag() {
    return this.localData.restartTag;
  }
  setCustomLine() {}
  allReady() {
    var e,
      t,
      o = this;
    this.updateUserWayArr();
    var n = this._serverPlanData.hits;
    2 == (null === (e = null == n ? void 0 : n[0]) || void 0 === e ? void 0 : e.t) && (n = n.concat((null === (t = this.localData.firstPlan) || void 0 === t ? void 0 : t.hits) || []));
    mj.sdk.eventSuperProperties({
      install_day: this.installDay,
      active_day: this.activeDay,
      first3_inter_group: AdModel.getInstance().getFirst3InterGroup(),
      expt_period: this.exptPeriod(),
      is_formal: this.isOnline(),
      abtestResult: n,
      abtestResult_time: new Date().format("YYYY-mm-dd HH:MM:SS.FFF")
    });
    this.uploadUserData();
    DotGamePageShow.dot(EPageShowType.StartupPage);
    delayFrame(function () {
      o.showLoading();
    }, this._isLoadCachePlanData ? 1 : this._delayFrame);
  }
  @mj.traitEvent("LoginM_showLoad")
  showLoading() {
    var e = this;
    this.pushController("LoadingController", {
      noBlock: true,
      isGlobal: true,
      bgStyle: null,
      isShowAction: false
    }, function () {
      delayFrame(function () {
        mj.sdk.closeSplash();
      }, 1);
      e.dispatchEvent(SHOWLOADING, 0.5);
      UserInfoManager.getInstance().init();
      PushManager.getInstance().init();
      LowPriorityBundleLoader.getInstance().start(false);
      e.enterGame();
    });
  }
  @mj.traitEvent("LoginM_enterGame")
  enterGame() {
    var e = {
      isReplace: true
    };
    if (UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal) {
      this.pushController("Tile2GameController", e);
    } else {
      this.pushController("MainGameController", e);
    }
  }
  uploadUserData() {
    UserPropteryManager.getInstance().startupReport();
  }
  tryInitTraits() {
    var e, t;
    if (this._serverPlanData && !this._traitsData) {
      var o = [...((null === (t = null === (e = this._serverPlanData) || void 0 === e ? void 0 : e.params) || void 0 === t ? void 0 : t.features) || [])],
        n = UserModel.getInstance().getGameActiveDays() || 0;
      TraitManager.getInstance().setConditionInfo({
        country: this.country,
        activeDays: n,
        countryIso: this.countryIso
      });
      TraitManager.getInstance().parseTraitData(o);
      this._traitsData = o;
    }
  }
  syncTraitsToDevServer() {}
  getPlatformKey() {
    return cc.sys.os === cc.sys.OS_IOS ? "iOS" : cc.sys.os === cc.sys.OS_ANDROID ? "Android" : "default";
  }
  initLoginInfo(e) {
    try {
      e = e || {};
      var t = this.compatibleServerData(e);
      this.initServerPlanData(t);
    } catch (e) {
      console.error("初始化服务器数据失败:" + (null == e ? void 0 : e.message) + (null == e ? void 0 : e.stack));
      this.trySwitchToBasePlan();
    }
  }
  compatibleServerData(e) {
    var t,
      o,
      n,
      i,
      r,
      l,
      s,
      c,
      u,
      p = null === (l = null === (r = null === (i = null === (n = e.data) || void 0 === n ? void 0 : n.abtest) || void 0 === i ? void 0 : i.data) || void 0 === r ? void 0 : r.params) || void 0 === l ? void 0 : l.features;
    if (p && Array.isArray(p)) try {
      for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
        var h = d.value;
        if (h && !h.key) {
          var y = Object.keys(h).find(function (e) {
            return "key" !== e && "key" === e.toLowerCase();
          });
          if (y) {
            h.key = h[y];
            delete h[y];
            null === (s = mj.reportError) || void 0 === s || s.call(mj, "特性key字段异常已修正: " + y + " -> key, value=" + h.key + ", trace_id:" + (null == e ? void 0 : e.trace_id));
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (o = f.return) && o.call(f);
      } finally {
        if (t) throw t.error;
      }
    }
    return null === (u = null === (c = e.data) || void 0 === c ? void 0 : c.abtest) || void 0 === u ? void 0 : u.data;
  }
  trySwitchToBasePlan() {
    try {
      if (this._traitsData) {
        this.localData.cacheServerData = "";
        GameRestart();
      } else {
        this._serverPlanData = this._basePlanData;
        this.localData.cacheServerData = this._serverPlanData;
        this.allReady();
        this.tryInitTraits();
      }
    } catch (e) {
      console.error("初始化服务器数据失败尝试兜底方案失败:" + (null == e ? void 0 : e.message) + (null == e ? void 0 : e.stack));
    }
  }
  isOnline() {
    var e;
    return !((null === G_Cfg || void 0 === G_Cfg ? void 0 : G_Cfg.debug) || null === (e = null === G_Cfg || void 0 === G_Cfg ? void 0 : G_Cfg.publishPlatform) || void 0 === e || !e.includes("online"));
  }
  updateUserWayArr() {
    var e = this;
    this.localData.userWayArr = this.localData.userWayArr || {};
    this.curWayNum().forEach(function (t) {
      if (t) {
        var o = t.slice(-4).slice(0, 2);
        e.localData.userWayArr[o] = e.localData.userWayArr[o] || [];
        var n = e.localData.userWayArr[o];
        n.includes(t) || n.push(t);
      }
    });
    this.fixUserWayArr();
    this.localData.userWayArr = this.localData.userWayArr;
  }
  fixUserWayArr() {
    if (!this.localData.isFixUserWayArr) {
      this.localData.isFixUserWayArr = true;
      var e = this.localData.userWayArr;
      if (Object.keys(e).some(function (t) {
        var o = e[t];
        if (!Array.isArray(o) || 0 === o.length) return false;
        var n = o[0];
        return !("string" != typeof n || n.length < 4) && t === n.slice(-2);
      })) {
        var t = {};
        Object.keys(e).forEach(function (o) {
          var n = e[o];
          Array.isArray(n) && n.forEach(function (e) {
            if (e && "string" == typeof e && !(e.length < 4)) {
              var o = e.slice(-4).slice(0, 2);
              t[o] = t[o] || [];
              t[o].includes(e) || t[o].push(e);
            }
          });
        });
        this.localData.userWayArr = t;
      }
    }
  }
  userWayArr() {
    return this.localData.userWayArr || {};
  }
  curWayNum() {
    var e;
    return ((null === (e = this._serverPlanData) || void 0 === e ? void 0 : e.hits) || []).map(function (e) {
      return e.group_name || e.name;
    });
  }
  getFirstCachedWayNum() {
    var e = this.localData.firstPlan;
    return e ? ((null == e ? void 0 : e.hits) || []).map(function (e) {
      return e.group_name || e.name;
    }) : [];
  }
  exptPeriod() {
    var e,
      t,
      o,
      n = (null === (o = null === (t = null === (e = this._serverPlanData) || void 0 === e ? void 0 : e.hits) || void 0 === t ? void 0 : t[0]) || void 0 === o ? void 0 : o.group_name) || "",
      i = n.split("_");
    return i.length > 1 ? i[0] : n ? n.slice(0, -4) : "";
  }
  isLowEndDevice() {
    var e,
      t,
      o = "0" == this.deviceInfo.is_normal,
      n = !this._isHighPerformance,
      i = null === (t = (e = MemoryManager.getInstance()).isLowMemory) || void 0 === t ? void 0 : t.call(e);
    return o || n || i;
  }
  startSamplingFPS() {
    var e = this;
    if (!this._samplingTimer) {
      this._hideTime = Date.now();
      mj.EventManager.on(EVT_MSG_KEY_EVENT_HIDE, this.onGameHide, this);
      mj.EventManager.on(EVT_MSG_KEY_EVENT_SHOW, this.onGameShow, this);
      this._samplingStartTimestamp = Date.now();
      this._samplingFrameCount = 0;
      this._samplingTimer = setInterval(function () {
        e._samplingFrameCount++;
      }, 0);
    }
  }
  onGameHide() {
    this._hideTime = Date.now();
  }
  onGameShow() {
    var e = Date.now() - this._hideTime;
    this._samplingStartTimestamp += e;
  }
  stopSamplingFPS() {
    if (this._samplingTimer) {
      clearInterval(this._samplingTimer);
      this._samplingTimer = null;
      mj.EventManager.off(EVT_MSG_KEY_EVENT_HIDE, this.onGameHide, this);
      mj.EventManager.off(EVT_MSG_KEY_EVENT_SHOW, this.onGameShow, this);
      var e = Date.now() - this._samplingStartTimestamp,
        t = this._samplingFrameCount / (e / 1000);
      this._isHighPerformance = t > 30;
      AdManager.getInstance().init();
    }
  }
}