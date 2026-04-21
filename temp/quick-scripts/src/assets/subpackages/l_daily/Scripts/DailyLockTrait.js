"use strict";
cc._RF.push(module, '52e88MPwmZP/rx0mMczWcwl', 'DailyLockTrait');
// subpackages/l_daily/Scripts/DailyLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameUnlock_1 = require("../../../Scripts/gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DailyModel_1 = require("./DailyModel");
var HallDailyBtn_1 = require("./HallDailyBtn");
var DailyLockTrait = /** @class */ (function (_super) {
    __extends(DailyLockTrait, _super);
    function DailyLockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyLockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyLockTrait.prototype.onDaily_checkHDBtn = function (t, e) {
        1 == this.traitData.isLock && (t.args[0] = true);
        e();
    };
    DailyLockTrait.prototype.onDaily_updateBtnShow = function (t, e) {
        if (1 == this.traitData.isLock) {
            var i = this.isOpenDaily(), o = t.args[0], n = null == o ? void 0 : o.getComponent(HallDailyBtn_1.default);
            if (n) {
                var a = DailyModel_1.default.getInstance().getEnterCnt();
                if (n) {
                    n.updateDay();
                    if (1 == this.traitData.isLock) {
                        n.updateLock(i, this.getLimitLevel());
                        n.updateRed(1 == this.traitData.isRed && i && a <= 0);
                    }
                }
            }
        }
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    DailyLockTrait.prototype.onHDailyBtn_onBClick = function (t, e) {
        if (this.isOpenDaily()) {
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.DailyChallenge);
            e();
        }
        else {
            t.args[0] = false;
            e();
        }
    };
    DailyLockTrait.prototype.onDaily_isOpenDaily = function (t, e) {
        var i = this.isOpenDaily();
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: i
        });
    };
    DailyLockTrait.prototype.isOpenDaily = function () {
        var t = DailyModel_1.default.getInstance();
        if (this.isInstallDayValid() && this.isLevelValid()) {
            DGameUnlock_1.DotGameUnlock.dotByType(DGameUnlock_1.EFuncUnlockType.DailyChallenge);
            t.setOpen(true);
            return true;
        }
        t.setOpen(false);
        return false;
    };
    DailyLockTrait.prototype.getLimitLevel = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 20;
    };
    DailyLockTrait.prototype.isLevelValid = function () {
        var t = NormalGameData_1.default.getInstance().getLevelId(), e = UserModel_1.default.getInstance().getMainGameData();
        e && (t = e.getLevelId());
        return t >= this.getLimitLevel();
    };
    DailyLockTrait.prototype.isInstallDayValid = function () {
        UserModel_1.default.getInstance().getInstallTime();
        return UserModel_1.default.getInstance().getGameActiveDays() > this.traitData.installDay;
    };
    DailyLockTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var i = NormalGameData_1.default.getInstance().getLevelId(), o = UserModel_1.default.getInstance().getMainGameData();
        o && (i = o.getLevelId());
        i >= this.getLimitLevel() && 1 == this._traitData.isRed && DailyModel_1.default.getInstance().getEnterCnt() <= 0 && mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_addNotify, GameTypeEnums_1.ERedDotType.DailyChallenge);
        e();
    };
    DailyLockTrait.traitKey = "DailyLock";
    __decorate([
        mj.traitEvent("DailyLockTt_getLimitLv")
    ], DailyLockTrait.prototype, "getLimitLevel", null);
    __decorate([
        mj.traitEvent("DailyLockTt_isLvValid")
    ], DailyLockTrait.prototype, "isLevelValid", null);
    DailyLockTrait = __decorate([
        mj.trait,
        mj.class("DailyLockTrait")
    ], DailyLockTrait);
    return DailyLockTrait;
}(Trait_1.default));
exports.default = DailyLockTrait;

cc._RF.pop();