"use strict";
cc._RF.push(module, 'dc4e93wHqJBL7yCHpSHK6K0', 'JourneyAddNextTrait');
// subpackages/l_journey/Scripts/JourneyAddNextTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var JourneyAddNextTrait = /** @class */ (function (_super) {
    __extends(JourneyAddNextTrait, _super);
    function JourneyAddNextTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyAddNextTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyAddNextTrait.prototype.onJourney_NewSeasonPos = function (t, e) {
        var r = TravelGameModel_1.default.getInstance().getCurSessionIndex() + 1;
        t.args[1].position = r;
        e();
    };
    JourneyAddNextTrait.traitKey = "JourneyAddNext";
    JourneyAddNextTrait = __decorate([
        mj.trait,
        mj.class("JourneyAddNextTrait")
    ], JourneyAddNextTrait);
    return JourneyAddNextTrait;
}(Trait_1.default));
exports.default = JourneyAddNextTrait;

cc._RF.pop();