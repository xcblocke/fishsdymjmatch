"use strict";
cc._RF.push(module, 'bc40fFiPRhPq7dHmzC+Zg/Y', 'ValentineOpenLvLimitTrait');
// subpackages/l_valentineOpenLvLimit/Scripts/ValentineOpenLvLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ValentineOpenLvLimitTrait = /** @class */ (function (_super) {
    __extends(ValentineOpenLvLimitTrait, _super);
    function ValentineOpenLvLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValentineOpenLvLimitTrait.prototype, "openLv", {
        get: function () {
            return null != this._traitData.openLv ? this._traitData.openLv : 3;
        },
        enumerable: false,
        configurable: true
    });
    ValentineOpenLvLimitTrait.prototype.onValModel_isActOpen = function (t, e) {
        var r = t.ins.isInActivityTime(), n = this.isValentineLvOpen();
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: r && n
        });
    };
    ValentineOpenLvLimitTrait.prototype.isValentineLvOpen = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal).getLevelId() >= this.openLv;
    };
    ValentineOpenLvLimitTrait.traitKey = "ValentineOpenLvLimit";
    ValentineOpenLvLimitTrait = __decorate([
        mj.trait,
        mj.class("ValentineOpenLvLimitTrait")
    ], ValentineOpenLvLimitTrait);
    return ValentineOpenLvLimitTrait;
}(Trait_1.default));
exports.default = ValentineOpenLvLimitTrait;

cc._RF.pop();