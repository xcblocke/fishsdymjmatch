"use strict";
cc._RF.push(module, 'c33040ISspEEJ9u++uGcWd5', 'TravelFirstTrait');
// subpackages/l_travelFirst/Scripts/TravelFirstTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelFirstTrait = /** @class */ (function (_super) {
    __extends(TravelFirstTrait, _super);
    function TravelFirstTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TravelFirstTrait.prototype, "firstJourney", {
        get: function () {
            return this.traitData.firstJourney;
        },
        enumerable: false,
        configurable: true
    });
    TravelFirstTrait.prototype.onJourney_Order = function (t, r) {
        var e = t.ins, n = e.getCachedJourney(), o = this.firstJourney, i = n.indexOf(o);
        if (-1 !== i) {
            n.splice(i, 1);
            n.unshift(o);
            e.cacheJourney(n);
            r();
        }
        else
            r();
    };
    TravelFirstTrait.traitKey = "TravelFirst";
    TravelFirstTrait = __decorate([
        mj.trait,
        mj.class("TravelFirstTrait")
    ], TravelFirstTrait);
    return TravelFirstTrait;
}(Trait_1.default));
exports.default = TravelFirstTrait;

cc._RF.pop();