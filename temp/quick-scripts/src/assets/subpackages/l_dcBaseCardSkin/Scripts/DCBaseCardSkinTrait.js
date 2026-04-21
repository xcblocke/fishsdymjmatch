"use strict";
cc._RF.push(module, '283f2kE+ZdOtqc0XCCNmG0O', 'DCBaseCardSkinTrait');
// subpackages/l_dcBaseCardSkin/Scripts/DCBaseCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DCBaseCardSkinTrait = /** @class */ (function (_super) {
    __extends(DCBaseCardSkinTrait, _super);
    function DCBaseCardSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DCBaseCardSkinTrait.prototype.onBaseCardSkin_isDCOn = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    DCBaseCardSkinTrait.traitKey = "DCBaseCardSkin";
    DCBaseCardSkinTrait = __decorate([
        mj.trait,
        mj.class("DCBaseCardSkinTrait")
    ], DCBaseCardSkinTrait);
    return DCBaseCardSkinTrait;
}(Trait_1.default));
exports.default = DCBaseCardSkinTrait;

cc._RF.pop();