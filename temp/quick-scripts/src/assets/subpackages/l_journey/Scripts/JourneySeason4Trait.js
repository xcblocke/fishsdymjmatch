"use strict";
cc._RF.push(module, 'ff88dVM/oRMaaAiDbP6s/jY', 'JourneySeason4Trait');
// subpackages/l_journey/Scripts/JourneySeason4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var JourneySeasonTrait_1 = require("./JourneySeasonTrait");
var JourneySeason4Trait = /** @class */ (function (_super) {
    __extends(JourneySeason4Trait, _super);
    function JourneySeason4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneySeason4Trait.prototype.getSeasonKey = function () {
        return "Journey04";
    };
    JourneySeason4Trait.traitKey = "JourneySeason4";
    JourneySeason4Trait = __decorate([
        mj.trait,
        mj.class("JourneySeason4Trait")
    ], JourneySeason4Trait);
    return JourneySeason4Trait;
}(JourneySeasonTrait_1.default));
exports.default = JourneySeason4Trait;

cc._RF.pop();