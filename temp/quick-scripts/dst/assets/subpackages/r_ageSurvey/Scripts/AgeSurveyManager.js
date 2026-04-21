
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRixzRkFBcUY7QUFDckYsc0VBQWlFO0FBQ2pFLG1EQUE4QztBQUM5QyxJQUFLLENBSUo7QUFKRCxXQUFLLENBQUM7SUFDSix5QkFBUSxDQUFBO0lBQ1IseUJBQVEsQ0FBQTtJQUNSLHlCQUFRLENBQUE7QUFDVixDQUFDLEVBSkksQ0FBQyxLQUFELENBQUMsUUFJTDtBQUVEO0lBQUE7UUFDRSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQTJIckIsQ0FBQztJQTFIUSw0QkFBVyxHQUFsQjtRQUNFLE9BQU8sbUNBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxxQ0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQztJ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VSxDQUFDLHlCQUF5QixDQUFDOzREQUd4QztJQWpEa0IsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0E4SHBDO0lBQUQsdUJBQUM7Q0E5SEQsQUE4SEMsSUFBQTtrQkE5SG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IFNpbmdsZXRvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25GYWN0b3J5JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQWdlU3VydmV5TW9kZWwgZnJvbSAnLi9BZ2VTdXJ2ZXlNb2RlbCc7XG5lbnVtIGkge1xuICBTaG93ID0gMCxcbiAgU2tpcCA9IDEsXG4gIFN0b3AgPSAyLFxufVxuQG1qLmNsYXNzKFwiQWdlU3VydmV5TWFuYWdlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlU3VydmV5TWFuYWdlciB7XG4gIF9jb25maWdzID0gW107XG4gIF9kZXNjSTE4bklkcyA9IFtdO1xuICBfaXNTaG93aW5nID0gZmFsc2U7XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gU2luZ2xldG9uRmFjdG9yeS5nZXRJbnN0YW5jZSh0aGlzKTtcbiAgfVxuICBzZXRDb25maWdzKHQsIGUpIHtcbiAgICB0aGlzLl9jb25maWdzID0gdCB8fCBbXTtcbiAgICB0aGlzLl9kZXNjSTE4bklkcyA9IGUgfHwgW107XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTcnZNZ3JfZ2V0Q29uZmlnc1wiKVxuICBnZXRDb25maWdzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdzO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWdlU3J2TWdyX2lzQ2FuUmV3YXJkXCIpXG4gIGlzQ2FuUmV3YXJkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q29uZmlncygpW3RdO1xuICAgIHJldHVybiAhIShudWxsID09IGUgPyB2b2lkIDAgOiBlLnJld2FyZENvbmZpZyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTcnZNZ3JfY2FuU2hvd1N1cnZleVwiKVxuICBjYW5TaG93U3VydmV5KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWdlU3J2TWdyX2lzTmVlZENoa0d1aWRlXCIpXG4gIGlzTmVlZENoZWNrR3VpZGUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTcnZNZ3JfaXNTaHVmZmxlXCIpXG4gIGlzU2h1ZmZsZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFnZVNydk1ncl9kZXNjSTE4bklkc1wiKVxuICBnZXREZXNjSTE4bklkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY0kxOG5JZHM7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTcnZNZ3JfZ2V0QWdlUmFuZ2VzXCIpXG4gIGdldEFnZVJhbmdlcyh0KSB7XG4gICAgdmFyIGU7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IHRoaXMuZ2V0Q29uZmlncygpW3RdKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmFnZVJhbmdlcykgfHwgW107XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTcnZNZ3JfZ2V0UmV3YXJkQ2ZnXCIpXG4gIGdldFJld2FyZENvbmZpZyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENvbmZpZ3MoKVt0XTtcbiAgICByZXR1cm4gZSA/IHRoaXMucGFyc2VSZXdhcmRDb25maWcoZSkgOiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWdlU3J2TWdyX2F1dG9DbG9zZVRpbWVcIilcbiAgZ2V0QXV0b0Nsb3NlVGltZSgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICB0cnlTaG93TmV4dFN1cnZleSh0ID0gMCwgZT8pIHtcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2lzU2hvd2luZykgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIG8gPSB0aGlzLmdldENvbmZpZ3MoKSwgbiA9IHQ7IG4gPCBvLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgYSA9IG9bbl07XG4gICAgICBpZiAoIWEpIGJyZWFrO1xuICAgICAgaWYgKCF0aGlzLmNhblNob3dTdXJ2ZXkobikpIGJyZWFrO1xuICAgICAgdmFyIHMgPSB0aGlzLnNob3VsZFNob3dTdXJ2ZXkobik7XG4gICAgICBpZiAocyAhPT0gaS5Ta2lwKSB7XG4gICAgICAgIGlmIChzID09PSBpLlN0b3ApIGJyZWFrO1xuICAgICAgICB0aGlzLl9pc1Nob3dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dBZ2VTdXJ2ZXkoYSwgbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHIuX2lzU2hvd2luZyA9IGZhbHNlO1xuICAgICAgICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd2luZztcbiAgfVxuICBzaG91bGRTaG93U3VydmV5KHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIgPSBBZ2VTdXJ2ZXlNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmIChyLmlzQ29tcGxldGVkKHQpKSByZXR1cm4gaS5Ta2lwO1xuICAgIGlmIChyLmlzQ2xvc2VkKHQpKSByZXR1cm4gaS5Ta2lwO1xuICAgIGlmICgwID09PSB0KSByZXR1cm4gdGhpcy5pc05lZWRDaGVja0d1aWRlKCkgJiYgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkgPyBpLlNraXAgOiBpLlNob3c7XG4gICAgdmFyIG8gPSB0IC0gMTtcbiAgICBpZiAoIXIuaXNDb21wbGV0ZWQobykpIHJldHVybiBpLlN0b3A7XG4gICAgdmFyIG4gPSB0aGlzLmdldENvbmZpZ3MoKVt0XSxcbiAgICAgIGEgPSBudWxsICE9PSAoZSA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uZGVsYXlIb3VycykgJiYgdm9pZCAwICE9PSBlID8gZSA6IDI0O1xuICAgIHJldHVybiByLmlzUGFzc2VkSG91cnNTaW5jZShvLCBhKSA/IGkuU2hvdyA6IGkuU3RvcDtcbiAgfVxuICBnZXREZXNjSTE4bklkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0RGVzY0kxOG5JZHMoKTtcbiAgICBpZiAoZSkge1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBlIHx8IHZvaWQgMDtcbiAgICAgIGlmICgwICE9PSBlLmxlbmd0aCkgcmV0dXJuIGVbTWF0aC5taW4odCwgZS5sZW5ndGggLSAxKV07XG4gICAgfVxuICB9XG4gIHBhcnNlQWdlUmFuZ2VzKHQpIHtcbiAgICByZXR1cm4gdCAmJiAwICE9PSB0Lmxlbmd0aCA/IHQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogdCxcbiAgICAgICAgbGFiZWw6IHRcbiAgICAgIH07XG4gICAgfSkgOiBbXTtcbiAgfVxuICBwYXJzZVJld2FyZENvbmZpZyh0KSB7XG4gICAgdmFyIGUsIHIsIG87XG4gICAgcmV0dXJuIHQucmV3YXJkQ29uZmlnID8ge1xuICAgICAgc2h1ZmZsZUNvdW50OiBudWxsICE9PSAoZSA9IHQucmV3YXJkQ29uZmlnLnNodWZmbGUpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAwLFxuICAgICAgaGludENvdW50OiBudWxsICE9PSAociA9IHQucmV3YXJkQ29uZmlnLmhpbnQpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLFxuICAgICAgYWRNdWx0aXBsaWVyOiBudWxsICE9PSAobyA9IHQucmV3YXJkQ29uZmlnLmFkTXVsdGlwbGllcikgJiYgdm9pZCAwICE9PSBvID8gbyA6IDFcbiAgICB9IDogbnVsbDtcbiAgfVxuICBzaG93QWdlU3VydmV5KHQsIGUsIHIpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0QWdlUmFuZ2VzKGUpLFxuICAgICAgaSA9IHRoaXMucGFyc2VBZ2VSYW5nZXMobyksXG4gICAgICBhID0gdGhpcy5pc0NhblJld2FyZChlKSA/IHRoaXMuZ2V0UmV3YXJkQ29uZmlnKGUpIDogbnVsbCxcbiAgICAgIHMgPSB0aGlzLmlzU2h1ZmZsZShlKSxcbiAgICAgIGMgPSB0aGlzLmdldERlc2NJMThuSWQoZSksXG4gICAgICBsID0gdGhpcy5nZXRBdXRvQ2xvc2VUaW1lKGUpO1xuICAgIGlmICgwICE9PSBpLmxlbmd0aCkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkFnZVN1cnZleUNvbnRyb2xsZXJcIiwge1xuICAgICAgICBhZ2VSYW5nZXM6IGksXG4gICAgICAgIHJld2FyZENvbmZpZzogYSxcbiAgICAgICAgc3VydmV5SW5kZXg6IGUsXG4gICAgICAgIHNodWZmbGU6IHMsXG4gICAgICAgIGRlc2NJMThuSWQ6IGMsXG4gICAgICAgIGF1dG9DbG9zZVRpbWU6IGwsXG4gICAgICAgIG9uQ2xvc2U6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19