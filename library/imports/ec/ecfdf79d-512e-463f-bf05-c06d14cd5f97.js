"use strict";
cc._RF.push(module, 'ecfdfedUS5GP78FwG0UzV+X', 'RankWinStreakRateTrait');
// subpackages/l_rankWinStreakRate/Scripts/RankWinStreakRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RankWinStreakRateTrait = /** @class */ (function (_super) {
    __extends(RankWinStreakRateTrait, _super);
    function RankWinStreakRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RankWinStreakRateTrait.prototype, "winStreakRate", {
        get: function () {
            return null != this._traitData.winStreakRate ? this._traitData.winStreakRate : [1, 2, 3];
        },
        enumerable: false,
        configurable: true
    });
    RankWinStreakRateTrait.prototype.onRankRbtLgc_loadConfig = function (t, r) {
        t.ins._winStreakStrategies = __spreadArrays(this.winStreakRate);
        r();
    };
    RankWinStreakRateTrait.prototype.onRankRobotCfg_winRates = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: __spreadArrays(this.winStreakRate)
        });
    };
    RankWinStreakRateTrait.prototype.onRkBnsWinRate_show = function (t, r) {
        for (var e = t.ins._barLabelNodes, n = Math.min(e.length, this.winStreakRate.length), a = 0; a < n; a++) {
            var i = e[a];
            i[0].getComponent(cc.Label).string = "x" + this.winStreakRate[a];
            i[1].getComponent(cc.Label).string = "x" + this.winStreakRate[a];
        }
        r();
    };
    RankWinStreakRateTrait.traitKey = "RankWinStreakRate";
    RankWinStreakRateTrait = __decorate([
        mj.trait,
        mj.class("RankWinStreakRateTrait")
    ], RankWinStreakRateTrait);
    return RankWinStreakRateTrait;
}(Trait_1.default));
exports.default = RankWinStreakRateTrait;

cc._RF.pop();