"use strict";
cc._RF.push(module, 'ad516j58uZOe56/0bWT9ycG', 'TravelStartUnlockTrait');
// subpackages/l_journey/Scripts/TravelStartUnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelStartUnlockTrait = /** @class */ (function (_super) {
    __extends(TravelStartUnlockTrait, _super);
    function TravelStartUnlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelStartUnlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelStartUnlockTrait.prototype.onJourney_GetStartTime = function (t, e) {
        var r = new Date().getTime();
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: r
        });
    };
    TravelStartUnlockTrait.traitKey = "TravelStartUnlock";
    TravelStartUnlockTrait = __decorate([
        mj.trait,
        mj.class("TravelStartUnlockTrait")
    ], TravelStartUnlockTrait);
    return TravelStartUnlockTrait;
}(Trait_1.default));
exports.default = TravelStartUnlockTrait;

cc._RF.pop();