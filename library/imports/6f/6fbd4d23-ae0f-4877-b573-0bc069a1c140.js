"use strict";
cc._RF.push(module, '6fbd40jrg9Id7VzC8BpocFA', 'TravelBaseCardSkinTrait');
// subpackages/l_travelBaseCardSkin/Scripts/TravelBaseCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelBaseCardSkinTrait = /** @class */ (function (_super) {
    __extends(TravelBaseCardSkinTrait, _super);
    function TravelBaseCardSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBaseCardSkinTrait.prototype.onBaseCardSkin_isTravelOn = function (r, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    TravelBaseCardSkinTrait.traitKey = "TravelBaseCardSkin";
    TravelBaseCardSkinTrait = __decorate([
        mj.trait,
        mj.class("TravelBaseCardSkinTrait")
    ], TravelBaseCardSkinTrait);
    return TravelBaseCardSkinTrait;
}(Trait_1.default));
exports.default = TravelBaseCardSkinTrait;

cc._RF.pop();