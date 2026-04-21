"use strict";
cc._RF.push(module, '44afbPs9ZtEfa+dj3boo1++', 'ColdSkipFirstInterAdTrait');
// subpackages/l_coldSkipFirstInterAd/Scripts/ColdSkipFirstInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ColdSkipFirstInterAdTrait = /** @class */ (function (_super) {
    __extends(ColdSkipFirstInterAdTrait, _super);
    function ColdSkipFirstInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._freeCount = 1;
        _this._consumedCount = 0;
        _this._checkDailyPlayed = false;
        _this._coldStartFirstAdChecked = false;
        _this._isNeedWifiOrCache = false;
        return _this;
    }
    ColdSkipFirstInterAdTrait.prototype.onLoad = function () {
        var e, a, r, i, o;
        _super.prototype.onLoad.call(this);
        this._freeCount = void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.count) ? this._traitData.count : 1;
        this._checkDailyPlayed = null !== (r = null === (a = this._traitData) || void 0 === a ? void 0 : a.checkDailyPlayed) && void 0 !== r && r;
        this._isNeedWifiOrCache = null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.isNeedWifiOrCache) && void 0 !== o && o;
        if (this._checkDailyPlayed) {
            this.localData.lastInterAdDate || (this.localData.lastInterAdDate = "");
            void 0 === this.localData.dailyInterAdPlayed && (this.localData.dailyInterAdPlayed = false);
            void 0 === this.localData.dailySkipCount && (this.localData.dailySkipCount = 0);
            this.checkAndResetDailyStatus();
            this._coldStartFirstAdChecked = false;
        }
        else
            this._consumedCount = 0;
    };
    ColdSkipFirstInterAdTrait.prototype.checkAndResetDailyStatus = function () {
        var t = this.getTodayDateString(), e = this.localData.lastInterAdDate;
        if (e && e !== t) {
            this.localData.dailyInterAdPlayed = false;
            this.localData.dailySkipCount = 0;
        }
    };
    ColdSkipFirstInterAdTrait.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    ColdSkipFirstInterAdTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._checkDailyPlayed) {
                var a = this.getTodayDateString();
                if (!this.localData.dailyInterAdPlayed) {
                    this.localData.dailyInterAdPlayed = true;
                    this.localData.lastInterAdDate = a;
                }
            }
            else
                this._consumedCount++;
            e();
        }
        else
            e();
    };
    ColdSkipFirstInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (this._checkDailyPlayed) {
            if (this._coldStartFirstAdChecked) {
                e();
                return;
            }
            this._coldStartFirstAdChecked = true;
            if (this.localData.dailyInterAdPlayed && this.localData.dailySkipCount < this._freeCount) {
                if (this._isNeedWifiOrCache) {
                    var a = CommonUtils_1.isNetworkAvailable(), r = AdManager_1.default.getInstance().checkInterAdIsReady();
                    if (!a && !r) {
                        e();
                        return;
                    }
                }
                this.localData.dailySkipCount++;
                var i = mj.getClassByName("InterAdCDTrait");
                if (i) {
                    var o = i.getInstance();
                    o && true === o.eventEnabled && o.updateLastPlayTime(Date.now());
                }
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
                return;
            }
            this.localData.dailyInterAdPlayed;
            e();
        }
        else if (this._consumedCount < this._freeCount) {
            if (this._isNeedWifiOrCache) {
                a = CommonUtils_1.isNetworkAvailable(), r = AdManager_1.default.getInstance().checkInterAdIsReady();
                if (!a && !r) {
                    e();
                    return;
                }
            }
            this._consumedCount++;
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ColdSkipFirstInterAdTrait.traitKey = "ColdSkipFirstInterAd";
    ColdSkipFirstInterAdTrait = __decorate([
        mj.trait,
        mj.class("ColdSkipFirstInterAdTrait")
    ], ColdSkipFirstInterAdTrait);
    return ColdSkipFirstInterAdTrait;
}(Trait_1.default));
exports.default = ColdSkipFirstInterAdTrait;

cc._RF.pop();