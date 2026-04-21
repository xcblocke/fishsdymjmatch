"use strict";
cc._RF.push(module, '5e2begi2VVCaJg7KAuutdEv', 'ClassicDayScoreTrait');
// subpackages/l_classicDayScore/Scripts/ClassicDayScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ClassicDayScoreTrait = /** @class */ (function (_super) {
    __extends(ClassicDayScoreTrait, _super);
    function ClassicDayScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicDayScoreTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            batchRate: null !== (r = this._traitData.batchRate) && void 0 !== r ? r : 1,
            dayRate: null !== (e = this._traitData.dayRate) && void 0 !== e ? e : 0.5
        };
    };
    ClassicDayScoreTrait.prototype.onScoreMod_batchRate = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.batchRate
        });
    };
    ClassicDayScoreTrait.prototype.onScoreMod_dayMul = function (t, r) {
        var e = UserModel_1.default.getInstance().getGameActiveDays() || 1, a = Math.log(Math.E + e * this._config.dayRate);
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: a
        });
    };
    ClassicDayScoreTrait.traitKey = "ClassicDayScore";
    ClassicDayScoreTrait = __decorate([
        mj.trait,
        mj.class("ClassicDayScoreTrait")
    ], ClassicDayScoreTrait);
    return ClassicDayScoreTrait;
}(Trait_1.default));
exports.default = ClassicDayScoreTrait;

cc._RF.pop();