"use strict";
cc._RF.push(module, '9a351WUw25ETK9uin3+p+sV', 'InterAdTravelModeCDTrait');
// subpackages/l_interAdTravelModeCD/Scripts/InterAdTravelModeCDTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdTravelModeCDTrait = /** @class */ (function (_super) {
    __extends(InterAdTravelModeCDTrait, _super);
    function InterAdTravelModeCDTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._travelCDTime = 30000;
        _this._normalCDTime = 0;
        _this._isInitialized = false;
        _this._lastGameType = GameTypeEnums_1.MjGameType.None;
        return _this;
    }
    InterAdTravelModeCDTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    InterAdTravelModeCDTrait.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.travelModeCDTime) && (this._travelCDTime = 1000 * this._traitData.travelModeCDTime);
    };
    InterAdTravelModeCDTrait.prototype.ensureInitialized = function () {
        if (!this._isInitialized) {
            this.localData.travelRemainingCD = this._travelCDTime;
            this.localData.normalRemainingCD = this.getNormalCDTime();
            this.localData.hallEnterTime = 0;
            this._isInitialized = true;
        }
    };
    InterAdTravelModeCDTrait.prototype.getInterAdCDTrait = function () {
        var e = mj.getClassByName("InterAdCDTrait");
        if (e) {
            var t = e.getInstance();
            if (t && true === t.eventEnabled)
                return t;
        }
        return null;
    };
    InterAdTravelModeCDTrait.prototype.getNormalCDTime = function () {
        if (this._normalCDTime > 0)
            return this._normalCDTime;
        var e = this.getInterAdCDTrait();
        if (e && e.getCDTime) {
            this._normalCDTime = e.getCDTime();
        }
        else {
            this._normalCDTime = 70000;
        }
        return this._normalCDTime;
    };
    InterAdTravelModeCDTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.ensureInitialized();
            var a = this.getInterAdCDTrait();
            if (a) {
                var r = Date.now(), i = a.getRemainingCD();
                if (this._lastGameType === GameTypeEnums_1.MjGameType.Travel) {
                    this.localData.travelRemainingCD = i;
                }
                else {
                    this._lastGameType !== GameTypeEnums_1.MjGameType.None && (this.localData.normalRemainingCD = i);
                }
                0 === this.localData.hallEnterTime && (this.localData.hallEnterTime = r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.onHallCtl_viewDidShow = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.ensureInitialized();
            if (0 === this.localData.hallEnterTime) {
                var a = Date.now();
                this.localData.hallEnterTime = a;
            }
            t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.isHallNoCdTimeEnabled = function () {
        var e = mj.getClassByName("HallNoCdTimeTrait");
        if (e) {
            var t = e.getInstance();
            if (t && true === t.eventEnabled)
                return true;
        }
        return false;
    };
    InterAdTravelModeCDTrait.prototype.onMainGameCtrl_vwLoad = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.ensureInitialized();
            var a = this.getInterAdCDTrait();
            if (a) {
                var r = UserModel_1.default.getInstance().getCurrentGameType();
                this._lastGameType = r;
                var i, n = this.isHallNoCdTimeEnabled(), l = Date.now();
                i = n ? 0 : this.localData.hallEnterTime > 0 ? l - this.localData.hallEnterTime : 0;
                var o = 0, c = 0;
                if (r === GameTypeEnums_1.MjGameType.Travel) {
                    o = this.localData.travelRemainingCD || 0;
                    c = this._travelCDTime;
                }
                else {
                    o = this.localData.normalRemainingCD || 0;
                    c = this.getNormalCDTime();
                }
                var p = l - (c - Math.max(0, o - i));
                a.adjustLastPlayTime(p);
                this.localData.hallEnterTime = 0;
                t();
            }
            else
                t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.onInterAdCD_getCDTime = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var a = UserModel_1.default.getInstance().getCurrentGameType();
            a === GameTypeEnums_1.MjGameType.None && (a = this._lastGameType);
            if (a === GameTypeEnums_1.MjGameType.Travel) {
                t({
                    returnVal: this._travelCDTime,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.prototype.onAdMgr_interAdClose = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var a = UserModel_1.default.getInstance().getCurrentGameType();
            a === GameTypeEnums_1.MjGameType.None && (a = this._lastGameType);
            if (a === GameTypeEnums_1.MjGameType.Travel)
                this.localData.travelRemainingCD = this._travelCDTime;
            else if (a !== GameTypeEnums_1.MjGameType.None) {
                var r = this.getNormalCDTime();
                this.localData.normalRemainingCD = r;
            }
            t();
        }
        else
            t();
    };
    InterAdTravelModeCDTrait.traitKey = "InterAdTravelModeCD";
    InterAdTravelModeCDTrait = __decorate([
        mj.trait,
        mj.class("InterAdTravelModeCDTrait")
    ], InterAdTravelModeCDTrait);
    return InterAdTravelModeCDTrait;
}(Trait_1.default));
exports.default = InterAdTravelModeCDTrait;

cc._RF.pop();