"use strict";
cc._RF.push(module, 'bf06d38K4ZBRKzvOzaEupmi', 'TravelCountryTrait');
// subpackages/l_travelCountry/Scripts/TravelCountryTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var TravelCountryTrait = /** @class */ (function (_super) {
    __extends(TravelCountryTrait, _super);
    function TravelCountryTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TravelCountryTrait.prototype, "orderList", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.orderList) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCountryTrait.prototype, "filterCountry", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.countries) && void 0 !== e ? e : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelCountryTrait.prototype, "country", {
        get: function () {
            return LoginModel_1.default.getInstance().country || "";
        },
        enumerable: false,
        configurable: true
    });
    TravelCountryTrait.prototype.onJourney_Order = function (t, e) {
        var r = t.ins;
        this.country, this.filterCountry;
        if (this.filterCountry.includes(this.country)) {
            var n = this.orderList;
            if (n.length <= 0)
                e();
            else {
                var o = r.getCachedJourney();
                o.sort(function (t, e) {
                    return n.includes(t) && n.includes(e) ? n.indexOf(t) - n.indexOf(e) : 0;
                });
                r.cacheJourney(o);
                e();
            }
        }
        else
            e();
    };
    TravelCountryTrait.traitKey = "TravelCountry";
    TravelCountryTrait = __decorate([
        mj.trait,
        mj.class("TravelCountryTrait")
    ], TravelCountryTrait);
    return TravelCountryTrait;
}(Trait_1.default));
exports.default = TravelCountryTrait;

cc._RF.pop();