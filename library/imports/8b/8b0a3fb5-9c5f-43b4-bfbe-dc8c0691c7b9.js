"use strict";
cc._RF.push(module, '8b0a3+1nF9DtL++3IwGkce5', 'SeasonRepeatTrait');
// subpackages/l_journey/Scripts/SeasonRepeatTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var SeasonRepeatTrait = /** @class */ (function (_super) {
    __extends(SeasonRepeatTrait, _super);
    function SeasonRepeatTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeasonRepeatTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SeasonRepeatTrait.prototype.onJourney_NextSession = function (t, e) {
        var r = __read(this.getNextSession(t.ins), 2), o = r[0], n = r[1];
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [o, n]
        });
    };
    SeasonRepeatTrait.prototype.getCurSessionIndex = function () {
        return TravelGameModel_1.default.getInstance().getCurSessionIndex();
    };
    SeasonRepeatTrait.prototype.getNextSession = function (t) {
        var e = t.getJourneyList(), r = this.getCurSessionIndex(e);
        if (0 === e.length)
            return ["", -1];
        var o = this.getNextRepeatSession(t, r + 1, e, false);
        -1 === o && (o = this.getNextRepeatSession(t, r + 1, e, true));
        return o < 0 ? ["", -1] : [e[o], o];
    };
    SeasonRepeatTrait.prototype.getNextRepeatSession = function (t, e, r, o) {
        for (var n = TravelGameModel_1.default.getInstance(), i = r.length, a = 0; a < i; a++) {
            var s = (e + a) % i, l = r[s];
            if ((o || !n.isBadgeComplete(l)) && t.isSessionValid(s))
                return s;
        }
        return -1;
    };
    SeasonRepeatTrait.traitKey = "SeasonRepeat";
    __decorate([
        mj.traitEvent("SeasonRpt_getCurIndex")
    ], SeasonRepeatTrait.prototype, "getCurSessionIndex", null);
    SeasonRepeatTrait = __decorate([
        mj.trait,
        mj.class("SeasonRepeatTrait")
    ], SeasonRepeatTrait);
    return SeasonRepeatTrait;
}(Trait_1.default));
exports.default = SeasonRepeatTrait;

cc._RF.pop();