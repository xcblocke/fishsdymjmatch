"use strict";
cc._RF.push(module, '4426bEDbP5KVpmfKkgGdxb7', 'RewardComboTrait');
// subpackages/l_rewardCombo/Scripts/RewardComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RewardComboTrait = /** @class */ (function (_super) {
    __extends(RewardComboTrait, _super);
    function RewardComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            lvMultRt: this._traitData.lvMultRt || 1,
            othLvRate: this._traitData.othLvRate || 0.3,
            lvMult: this._traitData.lvMult || 4
        };
    };
    RewardComboTrait.prototype.onRwdComboChk_lvMultRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.lvMultRt
        });
    };
    RewardComboTrait.prototype.onRwdComboChk_othLvRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.othLvRate
        });
    };
    RewardComboTrait.prototype.onRwdComboChk_lvMult = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.lvMult
        });
    };
    RewardComboTrait.traitKey = "RewardCombo";
    RewardComboTrait = __decorate([
        mj.trait,
        mj.class("RewardComboTrait")
    ], RewardComboTrait);
    return RewardComboTrait;
}(Trait_1.default));
exports.default = RewardComboTrait;

cc._RF.pop();