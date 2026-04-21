"use strict";
cc._RF.push(module, '3d78cmSBLdM1pjevavY804i', 'TravelRewardAutoCloseTrait');
// subpackages/l_rewardAutoClose/Scripts/TravelRewardAutoCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelRewardAutoCloseTrait = /** @class */ (function (_super) {
    __extends(TravelRewardAutoCloseTrait, _super);
    function TravelRewardAutoCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelRewardAutoCloseTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelRewardAutoCloseTrait.prototype.onTravelRewardVv_autoClose = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    TravelRewardAutoCloseTrait.traitKey = "TravelRewardAutoClose";
    TravelRewardAutoCloseTrait = __decorate([
        mj.trait,
        mj.class("TravelRewardAutoCloseTrait")
    ], TravelRewardAutoCloseTrait);
    return TravelRewardAutoCloseTrait;
}(Trait_1.default));
exports.default = TravelRewardAutoCloseTrait;

cc._RF.pop();