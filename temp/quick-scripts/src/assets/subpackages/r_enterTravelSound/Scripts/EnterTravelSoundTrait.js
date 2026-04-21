"use strict";
cc._RF.push(module, 'cd3f6Hduo9ACYK9REdKky/O', 'EnterTravelSoundTrait');
// subpackages/r_enterTravelSound/Scripts/EnterTravelSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var EnterTravelSoundTrait = /** @class */ (function (_super) {
    __extends(EnterTravelSoundTrait, _super);
    function EnterTravelSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnterTravelSoundTrait.prototype.onTLMapCtl_initRes = function (t, r) {
        r();
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.EnterTravel);
    };
    EnterTravelSoundTrait.traitKey = "EnterTravelSound";
    EnterTravelSoundTrait = __decorate([
        mj.trait,
        mj.class("EnterTravelSoundTrait")
    ], EnterTravelSoundTrait);
    return EnterTravelSoundTrait;
}(Trait_1.default));
exports.default = EnterTravelSoundTrait;

cc._RF.pop();