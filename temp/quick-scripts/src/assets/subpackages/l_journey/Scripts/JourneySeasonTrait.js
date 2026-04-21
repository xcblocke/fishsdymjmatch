"use strict";
cc._RF.push(module, '752da5JgmBP3ah3vXZxAysE', 'JourneySeasonTrait');
// subpackages/l_journey/Scripts/JourneySeasonTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JourneySeasonTrait = /** @class */ (function (_super) {
    __extends(JourneySeasonTrait, _super);
    function JourneySeasonTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneySeasonTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneySeasonTrait.prototype.onJourney_tryAddSeason = function (t, e) {
        var r = t.ins, o = r.getCachedJourney(), n = this.getSeasonKey();
        if (!o.includes(n)) {
            var i = {
                position: 0,
                session: n
            };
            mj.triggerInternalEvent("Journey_NewSeasonPos", this, [r, i]);
            o.splice(i.position, 0, n);
            r.cacheJourney(o);
        }
        this.localData.AddedSeason = true;
        e();
    };
    JourneySeasonTrait.traitKey = "JourneySeason";
    return JourneySeasonTrait;
}(Trait_1.default));
exports.default = JourneySeasonTrait;

cc._RF.pop();