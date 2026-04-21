"use strict";
cc._RF.push(module, '55f46GBDxVDjZ+9fuwN0yxX', 'SeasonRepeatFixTrait');
// subpackages/l_journey/Scripts/SeasonRepeatFixTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var SeasonRepeatFixTrait = /** @class */ (function (_super) {
    __extends(SeasonRepeatFixTrait, _super);
    function SeasonRepeatFixTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeasonRepeatFixTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SeasonRepeatFixTrait.prototype.onSeasonRpt_getCurIndex = function (t, e) {
        var r = t.args[0], o = TravelGameModel_1.default.getInstance(), n = o.getCurJourney(), i = o.getHistoryJourneys(), a = this.getCurSessionIndex(n, r, i);
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: a
        });
    };
    SeasonRepeatFixTrait.prototype.getCurSessionIndex = function (t, e, r) {
        var o = e.indexOf(t);
        if (-1 !== o)
            return o;
        if (r.length < 1)
            return -1;
        for (var n = r.length - 1; n >= 0; n--) {
            var i = r[n], a = e.indexOf(i);
            if (-1 !== a)
                return a;
        }
        return -1;
    };
    SeasonRepeatFixTrait.traitKey = "SeasonRepeatFix";
    SeasonRepeatFixTrait = __decorate([
        mj.trait,
        mj.class("SeasonRepeatFixTrait")
    ], SeasonRepeatFixTrait);
    return SeasonRepeatFixTrait;
}(Trait_1.default));
exports.default = SeasonRepeatFixTrait;

cc._RF.pop();