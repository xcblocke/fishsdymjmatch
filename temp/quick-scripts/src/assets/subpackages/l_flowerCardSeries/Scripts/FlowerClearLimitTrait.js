"use strict";
cc._RF.push(module, 'fdb4epZDzBJDYh08YFgh6nT', 'FlowerClearLimitTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerClearLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var FlowerClearLimitTrait = /** @class */ (function (_super) {
    __extends(FlowerClearLimitTrait, _super);
    function FlowerClearLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowerClearLimitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FlowerClearLimitTrait.prototype.onFlowerCS_isOpenCEff = function (e, t) {
        var r, a, o, i, n = null !== (a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType) && void 0 !== a ? a : null === (i = null === (o = UserModel_1.default.getInstance()) || void 0 === o ? void 0 : o.getCurrentGameType) || void 0 === i ? void 0 : i.call(o);
        if (n === GameTypeEnums_1.MjGameType.Normal) {
            var c = UserModel_1.default.getInstance().normalData.getLevelId();
            if (GameUtils_1.default.isTypeHardLevel(n, c)) {
                t();
            }
            else {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
        }
        else
            t();
    };
    FlowerClearLimitTrait.traitKey = "FlowerClearLimit";
    FlowerClearLimitTrait = __decorate([
        mj.trait,
        mj.class("FlowerClearLimitTrait")
    ], FlowerClearLimitTrait);
    return FlowerClearLimitTrait;
}(Trait_1.default));
exports.default = FlowerClearLimitTrait;

cc._RF.pop();