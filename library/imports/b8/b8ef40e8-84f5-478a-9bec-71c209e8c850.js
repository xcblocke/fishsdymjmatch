"use strict";
cc._RF.push(module, 'b8ef4DohPVHipvsccIJ6MhQ', 'LoginModel');
// Scripts/gamePlay/login/model/LoginModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Config");
var Model_1 = require("../../../framework/data/Model");
var TraitManager_1 = require("../../../framework/trait/TraitManager");
var UserPropteryManager_1 = require("../../analyze/UserPropteryManager");
var AdModel_1 = require("../../base/ad/AdModel");
var DGamePageShow_1 = require("../../../dot/DGamePageShow");
var AdManager_1 = require("../../../base/ad/AdManager");
var UserInfoManager_1 = require("../../base/user/UserInfoManager");
var MemoryManager_1 = require("../../../framework/manager/MemoryManager");
var I18NStrings_1 = require("../../../framework/data/I18NStrings");
var CommonUtils_1 = require("../../../framework/utils/CommonUtils");
var PushManager_1 = require("../../base/push/PushManager");
var LowPriorityBundleLoader_1 = require("../../base/ui/LowPriorityBundleLoader");
var UserModel_1 = require("../../user/UserModel");
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    function LoginModel() {
        var _this = _super.call(this) || this;
        _this._traitsData = null;
        _this._serverPlanData = null;
        _this._basePlanData = {};
        _this._version = "";
        _this._baseVersion = "";
        _this._delayFrame = cc.sys.isBrowser ? 60 : 12;
        _this._isLoadCachePlanData = false;
        _this._cachePlanVersion = "1.0.0";
        _this._isHighPerformance = true;
        _this._samplingStartTimestamp = 0;
        _this._samplingFrameCount = 0;
        _this._samplingTimer = null;
        _this._hideTime = 0;
        _this.initDeviceInfo();
        UserModel_1.default.getInstance();
        return _this;
    }
    Object.defineProperty(LoginModel.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (e) {
            this._version = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "baseVersion", {
        get: function () {
            return this._baseVersion;
        },
        set: function (e) {
            this._baseVersion = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "appVersion", {
        get: function () {
            return this._deviceInfo.app_version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "installTime", {
        get: function () {
            return this._deviceInfo.install_time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "country", {
        get: function () {
            return this._deviceInfo.country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "countryIso", {
        get: function () {
            var e;
            return ((null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.country_iso) || "").toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "bundleId", {
        get: function () {
            return this._deviceInfo.bundle_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "deviceModel", {
        get: function () {
            return this._deviceInfo.device_model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "osVersion", {
        get: function () {
            return this._deviceInfo.os_version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "remainMemory", {
        get: function () {
            return this._deviceInfo.remain_memory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "remainDiskspace", {
        get: function () {
            return this._deviceInfo.remain_diskspace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "allMemory", {
        get: function () {
            return this._deviceInfo.all_memory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "opt", {
        get: function () {
            return this._deviceInfo.opt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "anrTimes", {
        get: function () {
            return this._deviceInfo.anr_times;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "runningStatus", {
        get: function () {
            return this._deviceInfo.running_status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "timeZone", {
        get: function () {
            return this._deviceInfo.time_zone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "systemLanguage", {
        get: function () {
            var e, t;
            return (null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.system_language) || (null === (t = this._deviceInfo) || void 0 === t ? void 0 : t.local_language) || I18NStrings_1.default.defaultLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "language", {
        get: function () {
            return this.localData.language || I18NStrings_1.default.defaultLanguage;
        },
        set: function (e) {
            this.localData.language = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "deviceInfo", {
        get: function () {
            return this._deviceInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "installDay", {
        get: function () {
            return this._deviceInfo.install_day;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "activeDay", {
        get: function () {
            return this._deviceInfo.active_day;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "serverPlanData", {
        get: function () {
            return this._serverPlanData;
        },
        enumerable: false,
        configurable: true
    });
    LoginModel.prototype.initDeviceInfo = function () {
        this._deviceInfo = mj.sdk.getDeviceInfo();
        this._deviceInfo = this._deviceInfo || {};
    };
    LoginModel.prototype.isCompatibilityCachePlanData = function () {
        var e = this.localData.cacheServerData;
        return (null == e ? void 0 : e.cachePlanVersion) == this._cachePlanVersion;
    };
    LoginModel.prototype.loadCachePlanData = function () {
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
    };
    LoginModel.prototype.initBasePlanData = function (e) {
        var t = cc.sys.os;
        this._basePlanData = e[t] || e.default;
        this._basePlanData.cachePlanVersion = this._cachePlanVersion;
    };
    LoginModel.prototype.isPlanEqual = function (e, t) {
        var o, n;
        if ((null == e ? void 0 : e.length) !== (null == t ? void 0 : t.length))
            return false;
        var i = new Set(e), r = new Set(t);
        try {
            for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (!r.has(c))
                    return false;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return true;
    };
    LoginModel.prototype.isSatisfyRequiredTraits = function (e) {
        var t, o = ["BannerAd", "BeforeInterAd", "Bomb", "CardLockDarken", "ChangeShadow", "CoverLockTip", "DianZan", "Fail", "FixedLevels", "FullCombo", "GameOverInterAd", "GuideTrait", "HardLevelTips", "HintAnim", "InterAdCD", "InterAdStartLevel", "LockMask", "PropNumsTrait", "RatingDialog", "RewardCombo", "SelectLoopAnim", "SelectScaleTrait", "SettingsDialog", "TileTypes", "TouchSizeTrait", "WatchAdGetProp"], n = (null === (t = null == e ? void 0 : e.params) || void 0 === t ? void 0 : t.features) || [], i = o.length;
        return n.filter(function (e) {
            return o.includes(e.key);
        }).length >= 0.5 * i;
    };
    LoginModel.prototype.initServerPlanData = function (e) {
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
                }
                else {
                    this.localData.cacheServerData = e;
                    if (this._serverPlanData) {
                        this.setRestartTag(true);
                        GameRestart();
                        return;
                    }
                }
            }
            else
                this.localData.cacheServerData = e;
        }
        else {
            this.localData.cacheServerData || (this.localData.cacheServerData = this._basePlanData);
            if (this._serverPlanData) {
                this.allReady();
                return;
            }
        }
        this._serverPlanData = this.localData.cacheServerData;
        this.tryInitTraits();
        this.allReady();
    };
    LoginModel.prototype.isUpdateRestart = function () {
        return this.localData.__restartTagKey__;
    };
    LoginModel.prototype.setRestartTag = function (e) {
        this.localData.restartTag = e;
    };
    LoginModel.prototype.getRestartTag = function () {
        return this.localData.restartTag;
    };
    LoginModel.prototype.setCustomLine = function () { };
    LoginModel.prototype.allReady = function () {
        var e, t, o = this;
        this.updateUserWayArr();
        var n = this._serverPlanData.hits;
        2 == (null === (e = null == n ? void 0 : n[0]) || void 0 === e ? void 0 : e.t) && (n = n.concat((null === (t = this.localData.firstPlan) || void 0 === t ? void 0 : t.hits) || []));
        mj.sdk.eventSuperProperties({
            install_day: this.installDay,
            active_day: this.activeDay,
            first3_inter_group: AdModel_1.default.getInstance().getFirst3InterGroup(),
            expt_period: this.exptPeriod(),
            is_formal: this.isOnline(),
            abtestResult: n,
            abtestResult_time: new Date().format("YYYY-mm-dd HH:MM:SS.FFF")
        });
        this.uploadUserData();
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.StartupPage);
        CommonUtils_1.delayFrame(function () {
            o.showLoading();
        }, this._isLoadCachePlanData ? 1 : this._delayFrame);
    };
    LoginModel.prototype.showLoading = function () {
        var e = this;
        this.pushController("LoadingController", {
            noBlock: true,
            isGlobal: true,
            bgStyle: null,
            isShowAction: false
        }, function () {
            CommonUtils_1.delayFrame(function () {
                mj.sdk.closeSplash();
            }, 1);
            e.dispatchEvent(Config_1.SHOWLOADING, 0.5);
            UserInfoManager_1.default.getInstance().init();
            PushManager_1.default.getInstance().init();
            LowPriorityBundleLoader_1.default.getInstance().start(false);
            e.enterGame();
        });
    };
    LoginModel.prototype.enterGame = function () {
        var e = {
            isReplace: true
        };
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.pushController("Tile2GameController", e);
        }
        else {
            this.pushController("MainGameController", e);
        }
    };
    LoginModel.prototype.uploadUserData = function () {
        UserPropteryManager_1.default.getInstance().startupReport();
    };
    LoginModel.prototype.tryInitTraits = function () {
        var e, t;
        if (this._serverPlanData && !this._traitsData) {
            var o = __spreadArrays(((null === (t = null === (e = this._serverPlanData) || void 0 === e ? void 0 : e.params) || void 0 === t ? void 0 : t.features) || [])), n = UserModel_1.default.getInstance().getGameActiveDays() || 0;
            TraitManager_1.default.getInstance().setConditionInfo({
                country: this.country,
                activeDays: n,
                countryIso: this.countryIso
            });
            TraitManager_1.default.getInstance().parseTraitData(o);
            this._traitsData = o;
        }
    };
    LoginModel.prototype.syncTraitsToDevServer = function () { };
    LoginModel.prototype.getPlatformKey = function () {
        return cc.sys.os === cc.sys.OS_IOS ? "iOS" : cc.sys.os === cc.sys.OS_ANDROID ? "Android" : "default";
    };
    LoginModel.prototype.initLoginInfo = function (e) {
        try {
            e = e || {};
            var t = this.compatibleServerData(e);
            this.initServerPlanData(t);
        }
        catch (e) {
            console.error("初始化服务器数据失败:" + (null == e ? void 0 : e.message) + (null == e ? void 0 : e.stack));
            this.trySwitchToBasePlan();
        }
    };
    LoginModel.prototype.compatibleServerData = function (e) {
        var t, o, n, i, r, l, s, c, u, p = null === (l = null === (r = null === (i = null === (n = e.data) || void 0 === n ? void 0 : n.abtest) || void 0 === i ? void 0 : i.data) || void 0 === r ? void 0 : r.params) || void 0 === l ? void 0 : l.features;
        if (p && Array.isArray(p))
            try {
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
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        return null === (u = null === (c = e.data) || void 0 === c ? void 0 : c.abtest) || void 0 === u ? void 0 : u.data;
    };
    LoginModel.prototype.trySwitchToBasePlan = function () {
        try {
            if (this._traitsData) {
                this.localData.cacheServerData = "";
                GameRestart();
            }
            else {
                this._serverPlanData = this._basePlanData;
                this.localData.cacheServerData = this._serverPlanData;
                this.allReady();
                this.tryInitTraits();
            }
        }
        catch (e) {
            console.error("初始化服务器数据失败尝试兜底方案失败:" + (null == e ? void 0 : e.message) + (null == e ? void 0 : e.stack));
        }
    };
    LoginModel.prototype.isOnline = function () {
        var e;
        return !((null === G_Cfg || void 0 === G_Cfg ? void 0 : G_Cfg.debug) || null === (e = null === G_Cfg || void 0 === G_Cfg ? void 0 : G_Cfg.publishPlatform) || void 0 === e || !e.includes("online"));
    };
    LoginModel.prototype.updateUserWayArr = function () {
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
    };
    LoginModel.prototype.fixUserWayArr = function () {
        if (!this.localData.isFixUserWayArr) {
            this.localData.isFixUserWayArr = true;
            var e = this.localData.userWayArr;
            if (Object.keys(e).some(function (t) {
                var o = e[t];
                if (!Array.isArray(o) || 0 === o.length)
                    return false;
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
    };
    LoginModel.prototype.userWayArr = function () {
        return this.localData.userWayArr || {};
    };
    LoginModel.prototype.curWayNum = function () {
        var e;
        return ((null === (e = this._serverPlanData) || void 0 === e ? void 0 : e.hits) || []).map(function (e) {
            return e.group_name || e.name;
        });
    };
    LoginModel.prototype.getFirstCachedWayNum = function () {
        var e = this.localData.firstPlan;
        return e ? ((null == e ? void 0 : e.hits) || []).map(function (e) {
            return e.group_name || e.name;
        }) : [];
    };
    LoginModel.prototype.exptPeriod = function () {
        var e, t, o, n = (null === (o = null === (t = null === (e = this._serverPlanData) || void 0 === e ? void 0 : e.hits) || void 0 === t ? void 0 : t[0]) || void 0 === o ? void 0 : o.group_name) || "", i = n.split("_");
        return i.length > 1 ? i[0] : n ? n.slice(0, -4) : "";
    };
    LoginModel.prototype.isLowEndDevice = function () {
        var e, t, o = "0" == this.deviceInfo.is_normal, n = !this._isHighPerformance, i = null === (t = (e = MemoryManager_1.default.getInstance()).isLowMemory) || void 0 === t ? void 0 : t.call(e);
        return o || n || i;
    };
    LoginModel.prototype.startSamplingFPS = function () {
        var e = this;
        if (!this._samplingTimer) {
            this._hideTime = Date.now();
            mj.EventManager.on(Config_1.EVT_MSG_KEY_EVENT_HIDE, this.onGameHide, this);
            mj.EventManager.on(Config_1.EVT_MSG_KEY_EVENT_SHOW, this.onGameShow, this);
            this._samplingStartTimestamp = Date.now();
            this._samplingFrameCount = 0;
            this._samplingTimer = setInterval(function () {
                e._samplingFrameCount++;
            }, 0);
        }
    };
    LoginModel.prototype.onGameHide = function () {
        this._hideTime = Date.now();
    };
    LoginModel.prototype.onGameShow = function () {
        var e = Date.now() - this._hideTime;
        this._samplingStartTimestamp += e;
    };
    LoginModel.prototype.stopSamplingFPS = function () {
        if (this._samplingTimer) {
            clearInterval(this._samplingTimer);
            this._samplingTimer = null;
            mj.EventManager.off(Config_1.EVT_MSG_KEY_EVENT_HIDE, this.onGameHide, this);
            mj.EventManager.off(Config_1.EVT_MSG_KEY_EVENT_SHOW, this.onGameShow, this);
            var e = Date.now() - this._samplingStartTimestamp, t = this._samplingFrameCount / (e / 1000);
            this._isHighPerformance = t > 30;
            AdManager_1.default.getInstance().init();
        }
    };
    __decorate([
        mj.traitEvent("LoginM_showLoad")
    ], LoginModel.prototype, "showLoading", null);
    __decorate([
        mj.traitEvent("LoginM_enterGame")
    ], LoginModel.prototype, "enterGame", null);
    LoginModel = __decorate([
        mj.class("LoginModel")
    ], LoginModel);
    return LoginModel;
}(Model_1.default));
exports.default = LoginModel;

cc._RF.pop();