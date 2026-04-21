
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/login/model/LoginModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE4RjtBQUM5Rix1REFBa0Q7QUFDbEQsc0VBQWlFO0FBQ2pFLHlFQUFvRTtBQUNwRSxpREFBNEM7QUFDNUMsNERBQTRFO0FBQzVFLHdEQUFtRDtBQUNuRCxtRUFBOEQ7QUFDOUQsMEVBQXFFO0FBQ3JFLG1FQUE4RDtBQUM5RCxvRUFBa0U7QUFDbEUsMkRBQXNEO0FBQ3RELGlGQUE0RTtBQUM1RSxrREFBNkM7QUFDN0MsZ0ZBQTRFO0FBRTVFO0lBQXdDLDhCQUFLO0lBMkYzQztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQTlGRCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekMsMEJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHVCQUFpQixHQUFHLE9BQU8sQ0FBQztRQUM1Qix3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsNkJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBZ0ZaLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUMxQixDQUFDO0lBakZELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFD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Q3BCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN6TixJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFFLElBQUk7Z0JBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTt3QkFDZixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBTSE9XTE9BRElORywgRVZUX01TR19LRVlfRVZFTlRfSElERSwgRVZUX01TR19LRVlfRVZFTlRfU0hPVyB9IGZyb20gJy4uLy4uLy4uL0NvbmZpZyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IFRyYWl0TWFuYWdlciBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyUHJvcHRlcnlNYW5hZ2VyIGZyb20gJy4uLy4uL2FuYWx5emUvVXNlclByb3B0ZXJ5TWFuYWdlcic7XG5pbXBvcnQgQWRNb2RlbCBmcm9tICcuLi8uLi9iYXNlL2FkL0FkTW9kZWwnO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZG90L0RHYW1lUGFnZVNob3cnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgVXNlckluZm9NYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvdXNlci9Vc2VySW5mb01hbmFnZXInO1xuaW1wb3J0IE1lbW9yeU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvTWVtb3J5TWFuYWdlcic7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IHsgZGVsYXlGcmFtZSB9IGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgUHVzaE1hbmFnZXIgZnJvbSAnLi4vLi4vYmFzZS9wdXNoL1B1c2hNYW5hZ2VyJztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciBmcm9tICcuLi8uLi9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLmNsYXNzKFwiTG9naW5Nb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Nb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgX3RyYWl0c0RhdGEgPSBudWxsO1xuICBfc2VydmVyUGxhbkRhdGEgPSBudWxsO1xuICBfYmFzZVBsYW5EYXRhID0ge307XG4gIF92ZXJzaW9uID0gXCJcIjtcbiAgX2Jhc2VWZXJzaW9uID0gXCJcIjtcbiAgX2RlbGF5RnJhbWUgPSBjYy5zeXMuaXNCcm93c2VyID8gNjAgOiAxMjtcbiAgX2lzTG9hZENhY2hlUGxhbkRhdGEgPSBmYWxzZTtcbiAgX2NhY2hlUGxhblZlcnNpb24gPSBcIjEuMC4wXCI7XG4gIF9pc0hpZ2hQZXJmb3JtYW5jZSA9IHRydWU7XG4gIF9zYW1wbGluZ1N0YXJ0VGltZXN0YW1wID0gMDtcbiAgX3NhbXBsaW5nRnJhbWVDb3VudCA9IDA7XG4gIF9zYW1wbGluZ1RpbWVyID0gbnVsbDtcbiAgX2hpZGVUaW1lID0gMDtcbiAgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbiAgc2V0IHZlcnNpb24oZSkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSBlO1xuICB9XG4gIGdldCBiYXNlVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVZlcnNpb247XG4gIH1cbiAgc2V0IGJhc2VWZXJzaW9uKGUpIHtcbiAgICB0aGlzLl9iYXNlVmVyc2lvbiA9IGU7XG4gIH1cbiAgZ2V0IGFwcFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm8uYXBwX3ZlcnNpb247XG4gIH1cbiAgZ2V0IGluc3RhbGxUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VJbmZvLmluc3RhbGxfdGltZTtcbiAgfVxuICBnZXQgY291bnRyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5mby5jb3VudHJ5O1xuICB9XG4gIGdldCBjb3VudHJ5SXNvKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAoKG51bGwgPT09IChlID0gdGhpcy5fZGV2aWNlSW5mbykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jb3VudHJ5X2lzbykgfHwgXCJcIikudG9VcHBlckNhc2UoKTtcbiAgfVxuICBnZXQgYnVuZGxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm8uYnVuZGxlX2lkO1xuICB9XG4gIGdldCBkZXZpY2VNb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5mby5kZXZpY2VfbW9kZWw7XG4gIH1cbiAgZ2V0IG9zVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5mby5vc192ZXJzaW9uO1xuICB9XG4gIGdldCByZW1haW5NZW1vcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm8ucmVtYWluX21lbW9yeTtcbiAgfVxuICBnZXQgcmVtYWluRGlza3NwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VJbmZvLnJlbWFpbl9kaXNrc3BhY2U7XG4gIH1cbiAgZ2V0IGFsbE1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5mby5hbGxfbWVtb3J5O1xuICB9XG4gIGdldCBvcHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm8ub3B0O1xuICB9XG4gIGdldCBhbnJUaW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5mby5hbnJfdGltZXM7XG4gIH1cbiAgZ2V0IHJ1bm5pbmdTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm8ucnVubmluZ19zdGF0dXM7XG4gIH1cbiAgZ2V0IHRpbWVab25lKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VJbmZvLnRpbWVfem9uZTtcbiAgfVxuICBnZXQgc3lzdGVtTGFuZ3VhZ2UoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IHRoaXMuX2RldmljZUluZm8pIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3lzdGVtX2xhbmd1YWdlKSB8fCAobnVsbCA9PT0gKHQgPSB0aGlzLl9kZXZpY2VJbmZvKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmxvY2FsX2xhbmd1YWdlKSB8fCBJMThOU3RyaW5ncy5kZWZhdWx0TGFuZ3VhZ2U7XG4gIH1cbiAgZ2V0IGxhbmd1YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYW5ndWFnZSB8fCBJMThOU3RyaW5ncy5kZWZhdWx0TGFuZ3VhZ2U7XG4gIH1cbiAgc2V0IGxhbmd1YWdlKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYW5ndWFnZSA9IGU7XG4gIH1cbiAgZ2V0IGRldmljZUluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm87XG4gIH1cbiAgZ2V0IGluc3RhbGxEYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZUluZm8uaW5zdGFsbF9kYXk7XG4gIH1cbiAgZ2V0IGFjdGl2ZURheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlSW5mby5hY3RpdmVfZGF5O1xuICB9XG4gIGdldCBzZXJ2ZXJQbGFuRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyUGxhbkRhdGE7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXREZXZpY2VJbmZvKCk7XG4gICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgaW5pdERldmljZUluZm8oKSB7XG4gICAgdGhpcy5fZGV2aWNlSW5mbyA9IG1qLnNkay5nZXREZXZpY2VJbmZvKCk7XG4gICAgdGhpcy5fZGV2aWNlSW5mbyA9IHRoaXMuX2RldmljZUluZm8gfHwge307XG4gIH1cbiAgaXNDb21wYXRpYmlsaXR5Q2FjaGVQbGFuRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YTtcbiAgICByZXR1cm4gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuY2FjaGVQbGFuVmVyc2lvbikgPT0gdGhpcy5fY2FjaGVQbGFuVmVyc2lvbjtcbiAgfVxuICBsb2FkQ2FjaGVQbGFuRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YTtcbiAgICBpZiAoIXRoaXMuaXNDb21wYXRpYmlsaXR5Q2FjaGVQbGFuRGF0YSgpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jYWNoZVNlcnZlckRhdGEgPSBcIlwiO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5faXNMb2FkQ2FjaGVQbGFuRGF0YSA9IHRydWU7XG4gICAgICB0aGlzLl9zZXJ2ZXJQbGFuRGF0YSA9IGU7XG4gICAgICB0aGlzLnRyeUluaXRUcmFpdHMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaW5pdEJhc2VQbGFuRGF0YShlKSB7XG4gICAgdmFyIHQgPSBjYy5zeXMub3M7XG4gICAgdGhpcy5fYmFzZVBsYW5EYXRhID0gZVt0XSB8fCBlLmRlZmF1bHQ7XG4gICAgdGhpcy5fYmFzZVBsYW5EYXRhLmNhY2hlUGxhblZlcnNpb24gPSB0aGlzLl9jYWNoZVBsYW5WZXJzaW9uO1xuICB9XG4gIGlzUGxhbkVxdWFsKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICBpZiAoKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubGVuZ3RoKSAhPT0gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpID0gbmV3IFNldChlKSxcbiAgICAgIHIgPSBuZXcgU2V0KHQpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoaSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gcy52YWx1ZTtcbiAgICAgICAgaWYgKCFyLmhhcyhjKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKG4gPSBsLnJldHVybikgJiYgbi5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlzU2F0aXNmeVJlcXVpcmVkVHJhaXRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSBbXCJCYW5uZXJBZFwiLCBcIkJlZm9yZUludGVyQWRcIiwgXCJCb21iXCIsIFwiQ2FyZExvY2tEYXJrZW5cIiwgXCJDaGFuZ2VTaGFkb3dcIiwgXCJDb3ZlckxvY2tUaXBcIiwgXCJEaWFuWmFuXCIsIFwiRmFpbFwiLCBcIkZpeGVkTGV2ZWxzXCIsIFwiRnVsbENvbWJvXCIsIFwiR2FtZU92ZXJJbnRlckFkXCIsIFwiR3VpZGVUcmFpdFwiLCBcIkhhcmRMZXZlbFRpcHNcIiwgXCJIaW50QW5pbVwiLCBcIkludGVyQWRDRFwiLCBcIkludGVyQWRTdGFydExldmVsXCIsIFwiTG9ja01hc2tcIiwgXCJQcm9wTnVtc1RyYWl0XCIsIFwiUmF0aW5nRGlhbG9nXCIsIFwiUmV3YXJkQ29tYm9cIiwgXCJTZWxlY3RMb29wQW5pbVwiLCBcIlNlbGVjdFNjYWxlVHJhaXRcIiwgXCJTZXR0aW5nc0RpYWxvZ1wiLCBcIlRpbGVUeXBlc1wiLCBcIlRvdWNoU2l6ZVRyYWl0XCIsIFwiV2F0Y2hBZEdldFByb3BcIl0sXG4gICAgICBuID0gKG51bGwgPT09ICh0ID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5wYXJhbXMpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZmVhdHVyZXMpIHx8IFtdLFxuICAgICAgaSA9IG8ubGVuZ3RoO1xuICAgIHJldHVybiBuLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG8uaW5jbHVkZXMoZS5rZXkpO1xuICAgIH0pLmxlbmd0aCA+PSAwLjUgKiBpO1xuICB9XG4gIGluaXRTZXJ2ZXJQbGFuRGF0YShlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGksIHIsIGEsIGw7XG4gICAgMSA9PSAobnVsbCA9PT0gKG4gPSBudWxsID09PSAobyA9IG51bGwgPT09ICh0ID0gdGhpcy5sb2NhbERhdGEuY2FjaGVTZXJ2ZXJEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmhpdHMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF0pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4udCkgJiYgKHRoaXMubG9jYWxEYXRhLmZpcnN0UGxhbiA9IHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YSk7XG4gICAgdGhpcy5pc0NvbXBhdGliaWxpdHlDYWNoZVBsYW5EYXRhKCkgfHwgKHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YSA9IFwiXCIpO1xuICAgIGlmICgobnVsbCA9PSBlID8gdm9pZCAwIDogZS5wYXJhbXMpICYmIHRoaXMuaXNTYXRpc2Z5UmVxdWlyZWRUcmFpdHMoZSkpIHtcbiAgICAgIGUuY2FjaGVQbGFuVmVyc2lvbiA9IHRoaXMuX2NhY2hlUGxhblZlcnNpb247XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEuY2FjaGVTZXJ2ZXJEYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxhbkVxdWFsKG51bGwgPT09IChpID0gZS5oaXRfc2FtcGxlKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdycF9pZHMsIG51bGwgPT09IChyID0gdGhpcy5sb2NhbERhdGEuY2FjaGVTZXJ2ZXJEYXRhLmhpdF9zYW1wbGUpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ3JwX2lkcykgJiYgdGhpcy5pc1BsYW5FcXVhbChudWxsID09PSAoYSA9IGUuaGl0X3NhbXBsZSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5leHBzLCBudWxsID09PSAobCA9IHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YS5oaXRfc2FtcGxlKSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLmV4cHMpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlcnZlclBsYW5EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmFsbFJlYWR5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YSA9IGU7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlcnZlclBsYW5EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFJlc3RhcnRUYWcodHJ1ZSk7XG4gICAgICAgICAgICBHYW1lUmVzdGFydCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YSA9IGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YSB8fCAodGhpcy5sb2NhbERhdGEuY2FjaGVTZXJ2ZXJEYXRhID0gdGhpcy5fYmFzZVBsYW5EYXRhKTtcbiAgICAgIGlmICh0aGlzLl9zZXJ2ZXJQbGFuRGF0YSkge1xuICAgICAgICB0aGlzLmFsbFJlYWR5KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2VydmVyUGxhbkRhdGEgPSB0aGlzLmxvY2FsRGF0YS5jYWNoZVNlcnZlckRhdGE7XG4gICAgdGhpcy50cnlJbml0VHJhaXRzKCk7XG4gICAgdGhpcy5hbGxSZWFkeSgpO1xuICB9XG4gIGlzVXBkYXRlUmVzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuX19yZXN0YXJ0VGFnS2V5X187XG4gIH1cbiAgc2V0UmVzdGFydFRhZyhlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmVzdGFydFRhZyA9IGU7XG4gIH1cbiAgZ2V0UmVzdGFydFRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmVzdGFydFRhZztcbiAgfVxuICBzZXRDdXN0b21MaW5lKCkge31cbiAgYWxsUmVhZHkoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXM7XG4gICAgdGhpcy51cGRhdGVVc2VyV2F5QXJyKCk7XG4gICAgdmFyIG4gPSB0aGlzLl9zZXJ2ZXJQbGFuRGF0YS5oaXRzO1xuICAgIDIgPT0gKG51bGwgPT09IChlID0gbnVsbCA9PSBuID8gdm9pZCAwIDogblswXSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50KSAmJiAobiA9IG4uY29uY2F0KChudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhLmZpcnN0UGxhbikgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5oaXRzKSB8fCBbXSkpO1xuICAgIG1qLnNkay5ldmVudFN1cGVyUHJvcGVydGllcyh7XG4gICAgICBpbnN0YWxsX2RheTogdGhpcy5pbnN0YWxsRGF5LFxuICAgICAgYWN0aXZlX2RheTogdGhpcy5hY3RpdmVEYXksXG4gICAgICBmaXJzdDNfaW50ZXJfZ3JvdXA6IEFkTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRGaXJzdDNJbnRlckdyb3VwKCksXG4gICAgICBleHB0X3BlcmlvZDogdGhpcy5leHB0UGVyaW9kKCksXG4gICAgICBpc19mb3JtYWw6IHRoaXMuaXNPbmxpbmUoKSxcbiAgICAgIGFidGVzdFJlc3VsdDogbixcbiAgICAgIGFidGVzdFJlc3VsdF90aW1lOiBuZXcgRGF0ZSgpLmZvcm1hdChcIllZWVktbW0tZGQgSEg6TU06U1MuRkZGXCIpXG4gICAgfSk7XG4gICAgdGhpcy51cGxvYWRVc2VyRGF0YSgpO1xuICAgIERvdEdhbWVQYWdlU2hvdy5kb3QoRVBhZ2VTaG93VHlwZS5TdGFydHVwUGFnZSk7XG4gICAgZGVsYXlGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBvLnNob3dMb2FkaW5nKCk7XG4gICAgfSwgdGhpcy5faXNMb2FkQ2FjaGVQbGFuRGF0YSA/IDEgOiB0aGlzLl9kZWxheUZyYW1lKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxvZ2luTV9zaG93TG9hZFwiKVxuICBzaG93TG9hZGluZygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5wdXNoQ29udHJvbGxlcihcIkxvYWRpbmdDb250cm9sbGVyXCIsIHtcbiAgICAgIG5vQmxvY2s6IHRydWUsXG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGJnU3R5bGU6IG51bGwsXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsYXlGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1qLnNkay5jbG9zZVNwbGFzaCgpO1xuICAgICAgfSwgMSk7XG4gICAgICBlLmRpc3BhdGNoRXZlbnQoU0hPV0xPQURJTkcsIDAuNSk7XG4gICAgICBVc2VySW5mb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5pbml0KCk7XG4gICAgICBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmluaXQoKTtcbiAgICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuc3RhcnQoZmFsc2UpO1xuICAgICAgZS5lbnRlckdhbWUoKTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxvZ2luTV9lbnRlckdhbWVcIilcbiAgZW50ZXJHYW1lKCkge1xuICAgIHZhciBlID0ge1xuICAgICAgaXNSZXBsYWNlOiB0cnVlXG4gICAgfTtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIHRoaXMucHVzaENvbnRyb2xsZXIoXCJUaWxlMkdhbWVDb250cm9sbGVyXCIsIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1c2hDb250cm9sbGVyKFwiTWFpbkdhbWVDb250cm9sbGVyXCIsIGUpO1xuICAgIH1cbiAgfVxuICB1cGxvYWRVc2VyRGF0YSgpIHtcbiAgICBVc2VyUHJvcHRlcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkuc3RhcnR1cFJlcG9ydCgpO1xuICB9XG4gIHRyeUluaXRUcmFpdHMoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgaWYgKHRoaXMuX3NlcnZlclBsYW5EYXRhICYmICF0aGlzLl90cmFpdHNEYXRhKSB7XG4gICAgICB2YXIgbyA9IFsuLi4oKG51bGwgPT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLl9zZXJ2ZXJQbGFuRGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wYXJhbXMpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZmVhdHVyZXMpIHx8IFtdKV0sXG4gICAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQWN0aXZlRGF5cygpIHx8IDA7XG4gICAgICBUcmFpdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRDb25kaXRpb25JbmZvKHtcbiAgICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5LFxuICAgICAgICBhY3RpdmVEYXlzOiBuLFxuICAgICAgICBjb3VudHJ5SXNvOiB0aGlzLmNvdW50cnlJc29cbiAgICAgIH0pO1xuICAgICAgVHJhaXRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGFyc2VUcmFpdERhdGEobyk7XG4gICAgICB0aGlzLl90cmFpdHNEYXRhID0gbztcbiAgICB9XG4gIH1cbiAgc3luY1RyYWl0c1RvRGV2U2VydmVyKCkge31cbiAgZ2V0UGxhdGZvcm1LZXkoKSB7XG4gICAgcmV0dXJuIGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyA/IFwiaU9TXCIgOiBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEID8gXCJBbmRyb2lkXCIgOiBcImRlZmF1bHRcIjtcbiAgfVxuICBpbml0TG9naW5JbmZvKGUpIHtcbiAgICB0cnkge1xuICAgICAgZSA9IGUgfHwge307XG4gICAgICB2YXIgdCA9IHRoaXMuY29tcGF0aWJsZVNlcnZlckRhdGEoZSk7XG4gICAgICB0aGlzLmluaXRTZXJ2ZXJQbGFuRGF0YSh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi5Yid5aeL5YyW5pyN5Yqh5Zmo5pWw5o2u5aSx6LSlOlwiICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubWVzc2FnZSkgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5zdGFjaykpO1xuICAgICAgdGhpcy50cnlTd2l0Y2hUb0Jhc2VQbGFuKCk7XG4gICAgfVxuICB9XG4gIGNvbXBhdGlibGVTZXJ2ZXJEYXRhKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCA9IG51bGwgPT09IChsID0gbnVsbCA9PT0gKHIgPSBudWxsID09PSAoaSA9IG51bGwgPT09IChuID0gZS5kYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmFidGVzdCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5kYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnBhcmFtcykgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5mZWF0dXJlcztcbiAgICBpZiAocCAmJiBBcnJheS5pc0FycmF5KHApKSB0cnkge1xuICAgICAgZm9yICh2YXIgZiA9IF9fdmFsdWVzKHApLCBkID0gZi5uZXh0KCk7ICFkLmRvbmU7IGQgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgIGlmIChoICYmICFoLmtleSkge1xuICAgICAgICAgIHZhciB5ID0gT2JqZWN0LmtleXMoaCkuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwia2V5XCIgIT09IGUgJiYgXCJrZXlcIiA9PT0gZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICBoLmtleSA9IGhbeV07XG4gICAgICAgICAgICBkZWxldGUgaFt5XTtcbiAgICAgICAgICAgIG51bGwgPT09IChzID0gbWoucmVwb3J0RXJyb3IpIHx8IHZvaWQgMCA9PT0gcyB8fCBzLmNhbGwobWosIFwi54m55oCna2V55a2X5q615byC5bi45bey5L+u5q2jOiBcIiArIHkgKyBcIiAtPiBrZXksIHZhbHVlPVwiICsgaC5rZXkgKyBcIiwgdHJhY2VfaWQ6XCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS50cmFjZV9pZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBkICYmICFkLmRvbmUgJiYgKG8gPSBmLnJldHVybikgJiYgby5jYWxsKGYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsID09PSAodSA9IG51bGwgPT09IChjID0gZS5kYXRhKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLmFidGVzdCkgfHwgdm9pZCAwID09PSB1ID8gdm9pZCAwIDogdS5kYXRhO1xuICB9XG4gIHRyeVN3aXRjaFRvQmFzZVBsYW4oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl90cmFpdHNEYXRhKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YSA9IFwiXCI7XG4gICAgICAgIEdhbWVSZXN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZXJ2ZXJQbGFuRGF0YSA9IHRoaXMuX2Jhc2VQbGFuRGF0YTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2FjaGVTZXJ2ZXJEYXRhID0gdGhpcy5fc2VydmVyUGxhbkRhdGE7XG4gICAgICAgIHRoaXMuYWxsUmVhZHkoKTtcbiAgICAgICAgdGhpcy50cnlJbml0VHJhaXRzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIuWIneWni+WMluacjeWKoeWZqOaVsOaNruWksei0peWwneivleWFnOW6leaWueahiOWksei0pTpcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3RhY2spKTtcbiAgICB9XG4gIH1cbiAgaXNPbmxpbmUoKSB7XG4gICAgdmFyIGU7XG4gICAgcmV0dXJuICEoKG51bGwgPT09IEdfQ2ZnIHx8IHZvaWQgMCA9PT0gR19DZmcgPyB2b2lkIDAgOiBHX0NmZy5kZWJ1ZykgfHwgbnVsbCA9PT0gKGUgPSBudWxsID09PSBHX0NmZyB8fCB2b2lkIDAgPT09IEdfQ2ZnID8gdm9pZCAwIDogR19DZmcucHVibGlzaFBsYXRmb3JtKSB8fCB2b2lkIDAgPT09IGUgfHwgIWUuaW5jbHVkZXMoXCJvbmxpbmVcIikpO1xuICB9XG4gIHVwZGF0ZVVzZXJXYXlBcnIoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMubG9jYWxEYXRhLnVzZXJXYXlBcnIgPSB0aGlzLmxvY2FsRGF0YS51c2VyV2F5QXJyIHx8IHt9O1xuICAgIHRoaXMuY3VyV2F5TnVtKCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIG8gPSB0LnNsaWNlKC00KS5zbGljZSgwLCAyKTtcbiAgICAgICAgZS5sb2NhbERhdGEudXNlcldheUFycltvXSA9IGUubG9jYWxEYXRhLnVzZXJXYXlBcnJbb10gfHwgW107XG4gICAgICAgIHZhciBuID0gZS5sb2NhbERhdGEudXNlcldheUFycltvXTtcbiAgICAgICAgbi5pbmNsdWRlcyh0KSB8fCBuLnB1c2godCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5maXhVc2VyV2F5QXJyKCk7XG4gICAgdGhpcy5sb2NhbERhdGEudXNlcldheUFyciA9IHRoaXMubG9jYWxEYXRhLnVzZXJXYXlBcnI7XG4gIH1cbiAgZml4VXNlcldheUFycigpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmlzRml4VXNlcldheUFycikge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNGaXhVc2VyV2F5QXJyID0gdHJ1ZTtcbiAgICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEudXNlcldheUFycjtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlKS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBvID0gZVt0XTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8pIHx8IDAgPT09IG8ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBuID0gb1swXTtcbiAgICAgICAgcmV0dXJuICEoXCJzdHJpbmdcIiAhPSB0eXBlb2YgbiB8fCBuLmxlbmd0aCA8IDQpICYmIHQgPT09IG4uc2xpY2UoLTIpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICAgIHZhciBuID0gZVtvXTtcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG4pICYmIG4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAhKGUubGVuZ3RoIDwgNCkpIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSBlLnNsaWNlKC00KS5zbGljZSgwLCAyKTtcbiAgICAgICAgICAgICAgdFtvXSA9IHRbb10gfHwgW107XG4gICAgICAgICAgICAgIHRbb10uaW5jbHVkZXMoZSkgfHwgdFtvXS5wdXNoKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlcldheUFyciA9IHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVzZXJXYXlBcnIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnVzZXJXYXlBcnIgfHwge307XG4gIH1cbiAgY3VyV2F5TnVtKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAoKG51bGwgPT09IChlID0gdGhpcy5fc2VydmVyUGxhbkRhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaGl0cykgfHwgW10pLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuZ3JvdXBfbmFtZSB8fCBlLm5hbWU7XG4gICAgfSk7XG4gIH1cbiAgZ2V0Rmlyc3RDYWNoZWRXYXlOdW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5maXJzdFBsYW47XG4gICAgcmV0dXJuIGUgPyAoKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuaGl0cykgfHwgW10pLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuZ3JvdXBfbmFtZSB8fCBlLm5hbWU7XG4gICAgfSkgOiBbXTtcbiAgfVxuICBleHB0UGVyaW9kKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuID0gKG51bGwgPT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX3NlcnZlclBsYW5EYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmhpdHMpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHRbMF0pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ3JvdXBfbmFtZSkgfHwgXCJcIixcbiAgICAgIGkgPSBuLnNwbGl0KFwiX1wiKTtcbiAgICByZXR1cm4gaS5sZW5ndGggPiAxID8gaVswXSA6IG4gPyBuLnNsaWNlKDAsIC00KSA6IFwiXCI7XG4gIH1cbiAgaXNMb3dFbmREZXZpY2UoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IFwiMFwiID09IHRoaXMuZGV2aWNlSW5mby5pc19ub3JtYWwsXG4gICAgICBuID0gIXRoaXMuX2lzSGlnaFBlcmZvcm1hbmNlLFxuICAgICAgaSA9IG51bGwgPT09ICh0ID0gKGUgPSBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkpLmlzTG93TWVtb3J5KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwoZSk7XG4gICAgcmV0dXJuIG8gfHwgbiB8fCBpO1xuICB9XG4gIHN0YXJ0U2FtcGxpbmdGUFMoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fc2FtcGxpbmdUaW1lcikge1xuICAgICAgdGhpcy5faGlkZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLm9uKEVWVF9NU0dfS0VZX0VWRU5UX0hJREUsIHRoaXMub25HYW1lSGlkZSwgdGhpcyk7XG4gICAgICBtai5FdmVudE1hbmFnZXIub24oRVZUX01TR19LRVlfRVZFTlRfU0hPVywgdGhpcy5vbkdhbWVTaG93LCB0aGlzKTtcbiAgICAgIHRoaXMuX3NhbXBsaW5nU3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5fc2FtcGxpbmdGcmFtZUNvdW50ID0gMDtcbiAgICAgIHRoaXMuX3NhbXBsaW5nVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX3NhbXBsaW5nRnJhbWVDb3VudCsrO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG4gIG9uR2FtZUhpZGUoKSB7XG4gICAgdGhpcy5faGlkZVRpbWUgPSBEYXRlLm5vdygpO1xuICB9XG4gIG9uR2FtZVNob3coKSB7XG4gICAgdmFyIGUgPSBEYXRlLm5vdygpIC0gdGhpcy5faGlkZVRpbWU7XG4gICAgdGhpcy5fc2FtcGxpbmdTdGFydFRpbWVzdGFtcCArPSBlO1xuICB9XG4gIHN0b3BTYW1wbGluZ0ZQUygpIHtcbiAgICBpZiAodGhpcy5fc2FtcGxpbmdUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9zYW1wbGluZ1RpbWVyKTtcbiAgICAgIHRoaXMuX3NhbXBsaW5nVGltZXIgPSBudWxsO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLm9mZihFVlRfTVNHX0tFWV9FVkVOVF9ISURFLCB0aGlzLm9uR2FtZUhpZGUsIHRoaXMpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLm9mZihFVlRfTVNHX0tFWV9FVkVOVF9TSE9XLCB0aGlzLm9uR2FtZVNob3csIHRoaXMpO1xuICAgICAgdmFyIGUgPSBEYXRlLm5vdygpIC0gdGhpcy5fc2FtcGxpbmdTdGFydFRpbWVzdGFtcCxcbiAgICAgICAgdCA9IHRoaXMuX3NhbXBsaW5nRnJhbWVDb3VudCAvIChlIC8gMTAwMCk7XG4gICAgICB0aGlzLl9pc0hpZ2hQZXJmb3JtYW5jZSA9IHQgPiAzMDtcbiAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmluaXQoKTtcbiAgICB9XG4gIH1cbn0iXX0=