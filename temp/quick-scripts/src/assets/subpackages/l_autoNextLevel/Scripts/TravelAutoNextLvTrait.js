"use strict";
cc._RF.push(module, '1f204X2QddMT6MHNB4LzNkv', 'TravelAutoNextLvTrait');
// subpackages/l_autoNextLevel/Scripts/TravelAutoNextLvTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TravelAutoNextLvTrait = /** @class */ (function (_super) {
    __extends(TravelAutoNextLvTrait, _super);
    function TravelAutoNextLvTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canAutoNextLevel = false;
        _this.triggeredAuto = false;
        return _this;
    }
    Object.defineProperty(TravelAutoNextLvTrait.prototype, "delayTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 6;
        },
        enumerable: false,
        configurable: true
    });
    TravelAutoNextLvTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelAutoNextLvTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        var r = this;
        this.canAutoNextLevel = false;
        this.triggeredAuto = false;
        cc.isValid(t.ins) && t.ins.scheduleOnce(function () {
            if (cc.isValid(t.ins) && r.canAutoNextLevel && !r.triggeredAuto) {
                r.triggeredAuto = true;
                t.ins.onBtnNextClick();
            }
        }, this.delayTime);
        e();
    };
    TravelAutoNextLvTrait.prototype.onTLWinVw_popNextView = function (t, e) {
        var r, o, i, n, a = null !== (o = null === (r = t.args[0]) || void 0 === r ? void 0 : r.hasBoxReward) && void 0 !== o && o, u = null !== (n = null === (i = t.args[0]) || void 0 === i ? void 0 : i.hasTaskReward) && void 0 !== n && n;
        this.canAutoNextLevel = !a && !u;
        e();
    };
    TravelAutoNextLvTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[3];
        if ("beforeInterAd" === (null == o ? void 0 : o.adTimeType)) {
            if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Travel) {
                if (this.triggeredAuto) {
                    this.triggeredAuto = false;
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
    TravelAutoNextLvTrait.traitKey = "TravelAutoNextLv";
    TravelAutoNextLvTrait = __decorate([
        mj.trait,
        mj.class("TravelAutoNextLvTrait")
    ], TravelAutoNextLvTrait);
    return TravelAutoNextLvTrait;
}(Trait_1.default));
exports.default = TravelAutoNextLvTrait;

cc._RF.pop();