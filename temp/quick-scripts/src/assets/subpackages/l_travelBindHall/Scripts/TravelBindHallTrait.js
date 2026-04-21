"use strict";
cc._RF.push(module, '21e24vAd5lF0oE00s74aKWx', 'TravelBindHallTrait');
// subpackages/l_travelBindHall/Scripts/TravelBindHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var o;
(o = {})[1] = "Hall1";
o[2] = "Hall2";
o[3] = "Hall3";
o[4] = "Hall6";
o[-2] = "Hall4";
o[-1] = "Hall5";
var u = o;
var c = {
    Journey01: 1,
    Journey02: 2,
    Journey03: 3,
    Journey04: 4,
    Journey05: 5,
    Christmas25: -1,
    Valentine2026: -2
};
var TravelBindHallTrait = /** @class */ (function (_super) {
    __extends(TravelBindHallTrait, _super);
    function TravelBindHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBindHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelBindHallTrait.prototype.getHallTheme = function (e, t) {
        var r, n, o = null !== (n = null === (r = this.traitData) || void 0 === r ? void 0 : r.hallTheme) && void 0 !== n ? n : {}, i = t ? "" + c[e] : "0", a = o["" + i];
        "0" === i && void 0 === a && (a = o["" + c[e]]);
        if (void 0 === a)
            return "";
        var l = u[a];
        return void 0 === l ? "" : l;
    };
    TravelBindHallTrait.prototype.onHallVw_chgTheme = function (e, t) {
        if (e.args[1]) {
            var r = mj.getClassByName("JourneyTrait");
            if (r && r.getInstance() && r.getInstance().eventEnabled) {
                var n = r.getInstance().getCurOrNextJourney(), o = n.journey, i = (n.isNewSession, n.unlocked), a = this.getHallTheme(o, i);
                if ("" !== a && null != a) {
                    e.args[0] = a;
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelBindHallTrait.traitKey = "TravelBindHall";
    TravelBindHallTrait = __decorate([
        mj.trait,
        mj.class("TravelBindHallTrait")
    ], TravelBindHallTrait);
    return TravelBindHallTrait;
}(Trait_1.default));
exports.default = TravelBindHallTrait;

cc._RF.pop();