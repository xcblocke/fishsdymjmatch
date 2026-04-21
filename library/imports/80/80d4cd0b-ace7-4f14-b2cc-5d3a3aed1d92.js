"use strict";
cc._RF.push(module, '80d4c0LrOdPFLLMXTo67R2S', 'FullComboTrait');
// subpackages/l_fullCombo/Scripts/FullComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FullComboTrait = /** @class */ (function (_super) {
    __extends(FullComboTrait, _super);
    function FullComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FullComboTrait.prototype.onFullComboChk_getLim = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._traitData.fullLimit
        });
    };
    FullComboTrait.prototype.onFullComboChk_rate = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._traitData.fullRate
        });
    };
    FullComboTrait.traitKey = "FullCombo";
    FullComboTrait = __decorate([
        mj.trait,
        mj.class("FullComboTrait")
    ], FullComboTrait);
    return FullComboTrait;
}(Trait_1.default));
exports.default = FullComboTrait;

cc._RF.pop();