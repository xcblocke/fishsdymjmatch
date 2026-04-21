"use strict";
cc._RF.push(module, 'cbe76TELMlBxKc3GTPXBeNx', 'AgeSurveyManager');
// subpackages/r_ageSurvey/Scripts/AgeSurveyManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var SingletonFactory_1 = require("../../../Scripts/framework/utils/SingletonFactory");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AgeSurveyModel_1 = require("./AgeSurveyModel");
var i;
(function (i) {
    i[i["Show"] = 0] = "Show";
    i[i["Skip"] = 1] = "Skip";
    i[i["Stop"] = 2] = "Stop";
})(i || (i = {}));
var AgeSurveyManager = /** @class */ (function () {
    function AgeSurveyManager() {
        this._configs = [];
        this._descI18nIds = [];
        this._isShowing = false;
    }
    AgeSurveyManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    AgeSurveyManager.prototype.setConfigs = function (t, e) {
        this._configs = t || [];
        this._descI18nIds = e || [];
    };
    AgeSurveyManager.prototype.getConfigs = function () {
        return this._configs;
    };
    AgeSurveyManager.prototype.isCanReward = function (t) {
        var e = this.getConfigs()[t];
        return !!(null == e ? void 0 : e.rewardConfig);
    };
    AgeSurveyManager.prototype.canShowSurvey = function () {
        return true;
    };
    AgeSurveyManager.prototype.isNeedCheckGuide = function () {
        return true;
    };
    AgeSurveyManager.prototype.isShuffle = function () {
        return true;
    };
    AgeSurveyManager.prototype.getDescI18nIds = function () {
        return this._descI18nIds;
    };
    AgeSurveyManager.prototype.getAgeRanges = function (t) {
        var e;
        return (null === (e = this.getConfigs()[t]) || void 0 === e ? void 0 : e.ageRanges) || [];
    };
    AgeSurveyManager.prototype.getRewardConfig = function (t) {
        var e = this.getConfigs()[t];
        return e ? this.parseRewardConfig(e) : null;
    };
    AgeSurveyManager.prototype.getAutoCloseTime = function () {
        return 0;
    };
    AgeSurveyManager.prototype.tryShowNextSurvey = function (t, e) {
        if (t === void 0) { t = 0; }
        var r = this;
        if (this._isShowing)
            return false;
        for (var o = this.getConfigs(), n = t; n < o.length; n++) {
            var a = o[n];
            if (!a)
                break;
            if (!this.canShowSurvey(n))
                break;
            var s = this.shouldShowSurvey(n);
            if (s !== i.Skip) {
                if (s === i.Stop)
                    break;
                this._isShowing = true;
                this.showAgeSurvey(a, n, function () {
                    r._isShowing = false;
                    null == e || e();
                });
                break;
            }
        }
        return this._isShowing;
    };
    AgeSurveyManager.prototype.shouldShowSurvey = function (t) {
        var e, r = AgeSurveyModel_1.default.getInstance();
        if (r.isCompleted(t))
            return i.Skip;
        if (r.isClosed(t))
            return i.Skip;
        if (0 === t)
            return this.isNeedCheckGuide() && UserModel_1.default.getInstance().isGuideFinished() ? i.Skip : i.Show;
        var o = t - 1;
        if (!r.isCompleted(o))
            return i.Stop;
        var n = this.getConfigs()[t], a = null !== (e = null == n ? void 0 : n.delayHours) && void 0 !== e ? e : 24;
        return r.isPassedHoursSince(o, a) ? i.Show : i.Stop;
    };
    AgeSurveyManager.prototype.getDescI18nId = function (t) {
        var e = this.getDescI18nIds();
        if (e) {
            if ("string" == typeof e)
                return e || void 0;
            if (0 !== e.length)
                return e[Math.min(t, e.length - 1)];
        }
    };
    AgeSurveyManager.prototype.parseAgeRanges = function (t) {
        return t && 0 !== t.length ? t.map(function (t) {
            return {
                id: t,
                label: t
            };
        }) : [];
    };
    AgeSurveyManager.prototype.parseRewardConfig = function (t) {
        var e, r, o;
        return t.rewardConfig ? {
            shuffleCount: null !== (e = t.rewardConfig.shuffle) && void 0 !== e ? e : 0,
            hintCount: null !== (r = t.rewardConfig.hint) && void 0 !== r ? r : 0,
            adMultiplier: null !== (o = t.rewardConfig.adMultiplier) && void 0 !== o ? o : 1
        } : null;
    };
    AgeSurveyManager.prototype.showAgeSurvey = function (t, e, r) {
        var o = this.getAgeRanges(e), i = this.parseAgeRanges(o), a = this.isCanReward(e) ? this.getRewardConfig(e) : null, s = this.isShuffle(e), c = this.getDescI18nId(e), l = this.getAutoCloseTime(e);
        if (0 !== i.length) {
            ControllerManager_1.default.getInstance().pushViewByController("AgeSurveyController", {
                ageRanges: i,
                rewardConfig: a,
                surveyIndex: e,
                shuffle: s,
                descI18nId: c,
                autoCloseTime: l,
                onClose: r
            });
        }
        else {
            r();
        }
    };
    __decorate([
        mj.traitEvent("AgeSrvMgr_getConfigs")
    ], AgeSurveyManager.prototype, "getConfigs", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_isCanReward")
    ], AgeSurveyManager.prototype, "isCanReward", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_canShowSurvey")
    ], AgeSurveyManager.prototype, "canShowSurvey", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_isNeedChkGuide")
    ], AgeSurveyManager.prototype, "isNeedCheckGuide", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_isShuffle")
    ], AgeSurveyManager.prototype, "isShuffle", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_descI18nIds")
    ], AgeSurveyManager.prototype, "getDescI18nIds", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_getAgeRanges")
    ], AgeSurveyManager.prototype, "getAgeRanges", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_getRewardCfg")
    ], AgeSurveyManager.prototype, "getRewardConfig", null);
    __decorate([
        mj.traitEvent("AgeSrvMgr_autoCloseTime")
    ], AgeSurveyManager.prototype, "getAutoCloseTime", null);
    AgeSurveyManager = __decorate([
        mj.class("AgeSurveyManager")
    ], AgeSurveyManager);
    return AgeSurveyManager;
}());
exports.default = AgeSurveyManager;

cc._RF.pop();