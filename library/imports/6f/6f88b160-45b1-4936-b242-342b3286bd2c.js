"use strict";
cc._RF.push(module, '6f88bFgRbFJNrJCNCsyhr0s', 'PassedLevelTrait');
// subpackages/l_journey/Scripts/PassedLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var PassedLevelTrait = /** @class */ (function (_super) {
    __extends(PassedLevelTrait, _super);
    function PassedLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PassedLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PassedLevelTrait.prototype.onJourney_IsSessionEnd = function (t, e) {
        var r = TravelGameModel_1.default.getInstance(), o = !r.isSessionActive(), n = r.isComplete(r.getCurJourney()), i = o || n;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: i
        });
    };
    PassedLevelTrait.traitKey = "PassedLevel";
    PassedLevelTrait = __decorate([
        mj.trait,
        mj.class("PassedLevelTrait")
    ], PassedLevelTrait);
    return PassedLevelTrait;
}(Trait_1.default));
exports.default = PassedLevelTrait;

cc._RF.pop();