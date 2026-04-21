"use strict";
cc._RF.push(module, '93680lHe3RBA7mTefCSy05D', 'NormalAutoNextLvTrait');
// subpackages/l_autoNextLevel/Scripts/NormalAutoNextLvTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var NormalAutoNextLvTrait = /** @class */ (function (_super) {
    __extends(NormalAutoNextLvTrait, _super);
    function NormalAutoNextLvTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canAutoNextLevel = false;
        _this.triggeredAuto = false;
        return _this;
    }
    Object.defineProperty(NormalAutoNextLvTrait.prototype, "delayTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 6;
        },
        enumerable: false,
        configurable: true
    });
    NormalAutoNextLvTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalAutoNextLvTrait.prototype.onWinVw_showWinVw = function (t, e) {
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
    NormalAutoNextLvTrait.prototype.onWinVw_popNextView = function (t, e) {
        var r, o, i, n, a, u, s = null !== (o = null === (r = t.args[0]) || void 0 === r ? void 0 : r.hasBoxReward) && void 0 !== o && o, l = null !== (n = null === (i = t.args[0]) || void 0 === i ? void 0 : i.hasTaskReward) && void 0 !== n && n, c = null !== (u = null === (a = t.args[0]) || void 0 === a ? void 0 : a.hasRating) && void 0 !== u && u;
        this.canAutoNextLevel = !(s || l || c);
        e();
    };
    NormalAutoNextLvTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[3];
        if ("beforeInterAd" === (null == o ? void 0 : o.adTimeType)) {
            if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
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
    NormalAutoNextLvTrait.traitKey = "NormalAutoNextLv";
    NormalAutoNextLvTrait = __decorate([
        mj.trait,
        mj.class("NormalAutoNextLvTrait")
    ], NormalAutoNextLvTrait);
    return NormalAutoNextLvTrait;
}(Trait_1.default));
exports.default = NormalAutoNextLvTrait;

cc._RF.pop();