"use strict";
cc._RF.push(module, '20e75TAUOtPB5+NU8H0VOqE', 'DailyInterCDIncreaseTrait');
// subpackages/l_dailyInterCDIncrease/Scripts/DailyInterCDIncreaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DailyInterCDIncreaseTrait = /** @class */ (function (_super) {
    __extends(DailyInterCDIncreaseTrait, _super);
    function DailyInterCDIncreaseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyInterCDIncreaseTrait.prototype.onLoad = function () {
        var e, r, i, o, a, n;
        _super.prototype.onLoad.call(this);
        this._config = {
            threshold: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.threshold) && void 0 !== r ? r : 15,
            baseCDTime: null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.baseCDTime) && void 0 !== o ? o : 180,
            resetHour: null !== (n = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetHour) && void 0 !== n ? n : 5
        };
        this.isLocalEmpty(this.localData.cycleStartTime) && (this.localData.cycleStartTime = 0);
        this.isLocalEmpty(this.localData.gameEndCount) && (this.localData.gameEndCount = 0);
        this.checkAndResetCycle();
    };
    DailyInterCDIncreaseTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    DailyInterCDIncreaseTrait.prototype.getLogicCycleStart = function (t) {
        var e = new Date(t);
        e.getHours() < this._config.resetHour && e.setDate(e.getDate() - 1);
        e.setHours(this._config.resetHour, 0, 0, 0);
        return e.getTime();
    };
    DailyInterCDIncreaseTrait.prototype.checkAndResetCycle = function () {
        var t = Date.now(), e = this.getLogicCycleStart(t);
        if (e !== this.localData.cycleStartTime) {
            this.localData.cycleStartTime = e;
            this.localData.gameEndCount = 0;
            return true;
        }
        return false;
    };
    DailyInterCDIncreaseTrait.prototype.isThresholdReached = function () {
        return this.localData.gameEndCount >= this._config.threshold;
    };
    DailyInterCDIncreaseTrait.prototype.getCurrentCDTime = function () {
        return 1000 * (this._config.baseCDTime + this.localData.gameEndCount);
    };
    DailyInterCDIncreaseTrait.prototype.onDGameEnd_adjust = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.checkAndResetCycle();
            this.localData.gameEndCount += 1;
            this.isThresholdReached() && this.getCurrentCDTime();
            e();
        }
        else
            e();
    };
    DailyInterCDIncreaseTrait.prototype.onInterAdCD_getCDTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.checkAndResetCycle();
            if (this.isThresholdReached()) {
                e({
                    returnVal: this.getCurrentCDTime(),
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else
                e();
        }
        else
            e();
    };
    DailyInterCDIncreaseTrait.traitKey = "DailyInterCDIncrease";
    DailyInterCDIncreaseTrait = __decorate([
        mj.trait,
        mj.class("DailyInterCDIncreaseTrait")
    ], DailyInterCDIncreaseTrait);
    return DailyInterCDIncreaseTrait;
}(Trait_1.default));
exports.default = DailyInterCDIncreaseTrait;

cc._RF.pop();