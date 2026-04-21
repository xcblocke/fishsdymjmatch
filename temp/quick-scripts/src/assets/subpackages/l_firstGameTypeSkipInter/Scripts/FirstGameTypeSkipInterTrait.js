"use strict";
cc._RF.push(module, '2ebe7ygbFdOiZswqS5G4B71', 'FirstGameTypeSkipInterTrait');
// subpackages/l_firstGameTypeSkipInter/Scripts/FirstGameTypeSkipInterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FirstGameTypeSkipInterTrait = /** @class */ (function (_super) {
    __extends(FirstGameTypeSkipInterTrait, _super);
    function FirstGameTypeSkipInterTrait() {
        var _this = _super.call(this, arguments) || this;
        _this._mode = "coldStart";
        _this._skipCount = 1;
        _this._coldStartUsageCount = null;
        var _e = {};
        _e[GameTypeEnums_1.MjGameType.Normal] = 0;
        _e[GameTypeEnums_1.MjGameType.DailyChallenge] = 0;
        _e[GameTypeEnums_1.MjGameType.Travel] = 0;
        _e[GameTypeEnums_1.MjGameType.Tile2Normal] = 0;
        _this._coldStartUsageCount = _e;
        return _this;
    }
    FirstGameTypeSkipInterTrait.prototype.onLoad = function () {
        var a, r;
        _super.prototype.onLoad.call(this);
        this._mode = (null === (a = this._traitData) || void 0 === a ? void 0 : a.mode) || "coldStart";
        this._skipCount = (null === (r = this._traitData) || void 0 === r ? void 0 : r.skipCount) || 1;
        var _e = {};
        _e[GameTypeEnums_1.MjGameType.Normal] = 0;
        _e[GameTypeEnums_1.MjGameType.DailyChallenge] = 0;
        _e[GameTypeEnums_1.MjGameType.Travel] = 0;
        _e[GameTypeEnums_1.MjGameType.Tile2Normal] = 0;
        if ("coldStart" === this._mode)
            this._coldStartUsageCount = _e;
        else {
            this.initDailyUsageData();
            this.checkAndResetDaily();
            this.getDailyUsageData();
        }
    };
    FirstGameTypeSkipInterTrait.prototype.initDailyUsageData = function () {
        var t;
        this.localData.dailyUsageData || (this.localData.dailyUsageData = {
            lastResetDate: this.getTodayDateString(),
            usageCount: (t = {}, t[GameTypeEnums_1.MjGameType.Normal] = 0, t[GameTypeEnums_1.MjGameType.DailyChallenge] = 0, t[GameTypeEnums_1.MjGameType.Travel] = 0, t[GameTypeEnums_1.MjGameType.Tile2Normal] = 0, t)
        });
    };
    FirstGameTypeSkipInterTrait.prototype.getDailyUsageData = function () {
        return this.localData.dailyUsageData;
    };
    FirstGameTypeSkipInterTrait.prototype.saveDailyUsageData = function (t) {
        this.localData.dailyUsageData = t;
    };
    FirstGameTypeSkipInterTrait.prototype.checkAndResetDaily = function () {
        var e = this.getTodayDateString(), a = this.getDailyUsageData();
        var _t = {};
        _t[GameTypeEnums_1.MjGameType.Normal] = 0;
        _t[GameTypeEnums_1.MjGameType.DailyChallenge] = 0;
        _t[GameTypeEnums_1.MjGameType.Travel] = 0;
        _t[GameTypeEnums_1.MjGameType.Tile2Normal] = 0;
        if (a.lastResetDate !== e) {
            a.lastResetDate = e;
            a.usageCount = _t;
            this.saveDailyUsageData(a);
        }
    };
    FirstGameTypeSkipInterTrait.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    FirstGameTypeSkipInterTrait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    FirstGameTypeSkipInterTrait.prototype.shouldSkipInterAd = function (t) {
        if (t !== GameTypeEnums_1.MjGameType.Normal && t !== GameTypeEnums_1.MjGameType.DailyChallenge && t !== GameTypeEnums_1.MjGameType.Travel && t !== GameTypeEnums_1.MjGameType.Tile2Normal)
            return false;
        if ("coldStart" === this._mode)
            return this._coldStartUsageCount[t] < this._skipCount;
        this.checkAndResetDaily();
        return this.getDailyUsageData().usageCount[t] < this._skipCount;
    };
    FirstGameTypeSkipInterTrait.prototype.markAsUsed = function (t) {
        if ("coldStart" === this._mode)
            this._coldStartUsageCount[t]++;
        else {
            var e = this.getDailyUsageData();
            e.usageCount[t]++;
            this.saveDailyUsageData(e);
        }
    };
    FirstGameTypeSkipInterTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var a = this.getCurrentGameType();
        if (this.shouldSkipInterAd(a)) {
            this.markAsUsed(a);
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    FirstGameTypeSkipInterTrait.traitKey = "FirstGameTypeSkipInter";
    FirstGameTypeSkipInterTrait = __decorate([
        mj.trait,
        mj.class("FirstGameTypeSkipInterTrait")
    ], FirstGameTypeSkipInterTrait);
    return FirstGameTypeSkipInterTrait;
}(Trait_1.default));
exports.default = FirstGameTypeSkipInterTrait;

cc._RF.pop();