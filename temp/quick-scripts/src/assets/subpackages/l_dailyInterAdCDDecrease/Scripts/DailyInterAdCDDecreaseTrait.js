"use strict";
cc._RF.push(module, 'cb8797WJ4tIZ5wOrhAAgNa0', 'DailyInterAdCDDecreaseTrait');
// subpackages/l_dailyInterAdCDDecrease/Scripts/DailyInterAdCDDecreaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DailyInterAdCDDecreaseTrait = /** @class */ (function (_super) {
    __extends(DailyInterAdCDDecreaseTrait, _super);
    function DailyInterAdCDDecreaseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cdTimeList = [90000, 75000, 60000];
        return _this;
    }
    DailyInterAdCDDecreaseTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        (null === (e = this._traitData) || void 0 === e ? void 0 : e.cdTimeList) && Array.isArray(this._traitData.cdTimeList) && (this._cdTimeList = this._traitData.cdTimeList.map(function (t) {
            return 1000 * t;
        }));
        if (!this.localData.date) {
            this.localData.date = "";
            this.localData.playCount = 0;
        }
        this.checkAndResetDaily();
    };
    DailyInterAdCDDecreaseTrait.prototype.checkAndResetDaily = function () {
        var t = this.getTodayDate();
        if (this.localData.date !== t) {
            this.localData.date = t;
            this.localData.playCount = 0;
            this.localData = this.localData;
        }
    };
    DailyInterAdCDDecreaseTrait.prototype.getTodayDate = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    DailyInterAdCDDecreaseTrait.prototype.getCurrentCDTime = function () {
        var t = this.localData.playCount || 0;
        return t >= this._cdTimeList.length ? this._cdTimeList[this._cdTimeList.length - 1] : this._cdTimeList[t];
    };
    DailyInterAdCDDecreaseTrait.prototype.onInterAdCD_getCDTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.checkAndResetDaily();
            e({
                returnVal: this.getCurrentCDTime(),
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    DailyInterAdCDDecreaseTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.localData.playCount = (this.localData.playCount || 0) + 1;
            this.getCurrentCDTime();
            e();
        }
        else
            e();
    };
    DailyInterAdCDDecreaseTrait.traitKey = "DailyInterAdCDDecrease";
    DailyInterAdCDDecreaseTrait = __decorate([
        mj.trait,
        mj.class("DailyInterAdCDDecreaseTrait")
    ], DailyInterAdCDDecreaseTrait);
    return DailyInterAdCDDecreaseTrait;
}(Trait_1.default));
exports.default = DailyInterAdCDDecreaseTrait;

cc._RF.pop();