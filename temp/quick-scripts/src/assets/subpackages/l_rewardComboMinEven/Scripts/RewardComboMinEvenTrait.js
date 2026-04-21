"use strict";
cc._RF.push(module, '1b683cL09lNGosM46vL73LE', 'RewardComboMinEvenTrait');
// subpackages/l_rewardComboMinEven/Scripts/RewardComboMinEvenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RewardComboMinEvenTrait = /** @class */ (function (_super) {
    __extends(RewardComboMinEvenTrait, _super);
    function RewardComboMinEvenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardComboMinEvenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            cntRt: this._traitData.cntRt || [0.2, 0.3]
        };
    };
    RewardComboMinEvenTrait.prototype.onRwdComboChk_cntRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.cntRt
        });
    };
    RewardComboMinEvenTrait.traitKey = "RewardComboMinEven";
    RewardComboMinEvenTrait = __decorate([
        mj.trait,
        mj.class("RewardComboMinEvenTrait")
    ], RewardComboMinEvenTrait);
    return RewardComboMinEvenTrait;
}(Trait_1.default));
exports.default = RewardComboMinEvenTrait;

cc._RF.pop();