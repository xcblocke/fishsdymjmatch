"use strict";
cc._RF.push(module, 'a03e73rxj9H4aji1y+CSB1V', 'InterAdCDTrait');
// subpackages/l_interAdCD/Scripts/InterAdCDTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var InterAdCDTrait = /** @class */ (function (_super) {
    __extends(InterAdCDTrait, _super);
    function InterAdCDTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastPlayTime = 0;
        _this._cdTime = 70000;
        return _this;
    }
    InterAdCDTrait.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this._cdTime = 1000 * this._traitData.cdTime;
        setTimeout(function () {
            e.initLastPlayTimestamp(Date.now());
        }, 0);
    };
    InterAdCDTrait.prototype.initLastPlayTimestamp = function (t) {
        this._lastPlayTime = t;
    };
    InterAdCDTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._lastPlayTime = Date.now();
            e();
        }
        else
            e();
    };
    InterAdCDTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.getCDTime();
            if (0 !== this._lastPlayTime) {
                var r = Date.now() - this._lastPlayTime, i = this.getCDTime();
                if (r < i) {
                    Math.ceil((i - r) / 1000);
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    InterAdCDTrait.prototype.getCDTime = function () {
        return this._cdTime;
    };
    InterAdCDTrait.prototype.getLastPlayTime = function () {
        return this._lastPlayTime;
    };
    InterAdCDTrait.prototype.getRemainingCD = function () {
        if (0 === this._lastPlayTime)
            return 0;
        var t = Date.now() - this._lastPlayTime, e = this.getCDTime();
        return Math.max(0, e - t);
    };
    InterAdCDTrait.prototype.adjustLastPlayTime = function (t) {
        this._lastPlayTime = t;
    };
    InterAdCDTrait.prototype.updateLastPlayTime = function (t) {
        this._lastPlayTime = t;
    };
    InterAdCDTrait.traitKey = "InterAdCD";
    __decorate([
        mj.traitEvent("InterAdCD_initPlayTime")
    ], InterAdCDTrait.prototype, "initLastPlayTimestamp", null);
    __decorate([
        mj.traitEvent("InterAdCD_getCDTime")
    ], InterAdCDTrait.prototype, "getCDTime", null);
    InterAdCDTrait = __decorate([
        mj.trait,
        mj.class("InterAdCDTrait")
    ], InterAdCDTrait);
    return InterAdCDTrait;
}(Trait_1.default));
exports.default = InterAdCDTrait;

cc._RF.pop();