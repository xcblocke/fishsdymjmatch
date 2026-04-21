"use strict";
cc._RF.push(module, '3adf32M6hJLFoam2DoKRTFw', 'NormalBaseCardSkinTrait');
// subpackages/l_normalBaseCardSkin/Scripts/NormalBaseCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NormalBaseCardSkinTrait = /** @class */ (function (_super) {
    __extends(NormalBaseCardSkinTrait, _super);
    function NormalBaseCardSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBaseCardSkinTrait.prototype.onBaseCardSkin_isNormalOn = function (r, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    NormalBaseCardSkinTrait.traitKey = "NormalBaseCardSkin";
    NormalBaseCardSkinTrait = __decorate([
        mj.trait,
        mj.class("NormalBaseCardSkinTrait")
    ], NormalBaseCardSkinTrait);
    return NormalBaseCardSkinTrait;
}(Trait_1.default));
exports.default = NormalBaseCardSkinTrait;

cc._RF.pop();