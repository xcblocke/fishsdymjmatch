"use strict";
cc._RF.push(module, '1eab82/C+dKTIHuwfHfqiQ6', 'JourneySeason3Trait');
// subpackages/l_journey/Scripts/JourneySeason3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var JourneySeasonTrait_1 = require("./JourneySeasonTrait");
var JourneySeason3Trait = /** @class */ (function (_super) {
    __extends(JourneySeason3Trait, _super);
    function JourneySeason3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneySeason3Trait.prototype.getSeasonKey = function () {
        return "Journey03";
    };
    JourneySeason3Trait.traitKey = "JourneySeason3";
    JourneySeason3Trait = __decorate([
        mj.trait,
        mj.class("JourneySeason3Trait")
    ], JourneySeason3Trait);
    return JourneySeason3Trait;
}(JourneySeasonTrait_1.default));
exports.default = JourneySeason3Trait;

cc._RF.pop();