"use strict";
cc._RF.push(module, 'ebfae48bn1EmIug9IEiDUXu', 'RewardComboChecker');
// Scripts/process/rewardCombo/RewardComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardComboChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var RewardComboChecker = /** @class */ (function (_super) {
    __extends(RewardComboChecker, _super);
    function RewardComboChecker(t) {
        return _super.call(this, t) || this;
    }
    RewardComboChecker.prototype.shouldTriggerRewardCombo = function () {
        var e = this.context.getGameData().getLevelId();
        if (1 === e)
            return false;
        var t = this.getTriggerLevelRate(e);
        return !(t <= 0) && Math.random() <= t;
    };
    RewardComboChecker.prototype.getLevelMult = function () {
        return 4;
    };
    RewardComboChecker.prototype.getTriggerLevelRate = function (e) {
        return e % this.getLevelMult() == 0 ? this.getLevelMultRate() : this.getOtherLevelRate();
    };
    RewardComboChecker.prototype.calculateTriTileCnt = function (e) {
        var t = this.getCountRates(), o = t[Math.floor(Math.random() * t.length)], n = Math.floor(e * o);
        return this.getMinEvenNumber(n);
    };
    RewardComboChecker.prototype.getMinEvenNumber = function (e) {
        return e % 2 == 0 ? e : e + 1;
    };
    RewardComboChecker.prototype.getCountRates = function () {
        return [0.2, 0.3];
    };
    RewardComboChecker.prototype.getLevelMultRate = function () {
        return 1;
    };
    RewardComboChecker.prototype.getOtherLevelRate = function () {
        return 0.3;
    };
    RewardComboChecker.prototype.shouldTriNow = function () {
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return false;
        switch (this._context.getGameData().getCurLvCanTriRewardCombo()) {
            case 0:
                var e = this.shouldTriggerRewardCombo();
                this._context.getGameData().setCurLvCanTriRewardCombo(e ? 1 : 2);
                if (!e)
                    return false;
                break;
            case 1:
                break;
            case 2:
                return false;
        }
        var t = this._context.getTileMapObject().getCurTilesCnt(), o = 2 * this._context.getGameData().getCurLevelComboMaxLimit(), n = 0, i = this._context.getGameData().getRewardComboTriTileCnt();
        if (0 !== i)
            n = i;
        else {
            n = this.calculateTriTileCnt(o);
            this._context.getGameData().setRewardComboTriTileCnt(n);
        }
        return t <= n;
    };
    __decorate([
        mj.traitEvent("RwdComboChk_lvMult")
    ], RewardComboChecker.prototype, "getLevelMult", null);
    __decorate([
        mj.traitEvent("RwdComboChk_getTrigRate")
    ], RewardComboChecker.prototype, "getTriggerLevelRate", null);
    __decorate([
        mj.traitEvent("RwdComboChk_cntRt")
    ], RewardComboChecker.prototype, "getCountRates", null);
    __decorate([
        mj.traitEvent("RwdComboChk_lvMultRt")
    ], RewardComboChecker.prototype, "getLevelMultRate", null);
    __decorate([
        mj.traitEvent("RwdComboChk_othLvRt")
    ], RewardComboChecker.prototype, "getOtherLevelRate", null);
    __decorate([
        mj.traitEvent("RwdComboChk_sTriNow")
    ], RewardComboChecker.prototype, "shouldTriNow", null);
    return RewardComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.RewardComboChecker = RewardComboChecker;

cc._RF.pop();