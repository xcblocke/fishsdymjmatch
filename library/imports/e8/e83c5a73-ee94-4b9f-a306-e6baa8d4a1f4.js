"use strict";
cc._RF.push(module, 'e83c5pz7pRLn6MG5rqo1KH0', 'Tile2MagnetZoneTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetZoneTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var Tile2MagnetZoneTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetZoneTrait, _super);
    function Tile2MagnetZoneTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tile2MagnetZoneTrait.prototype, "country", {
        get: function () {
            return LoginModel_1.default.getInstance().countryIso || "";
        },
        enumerable: false,
        configurable: true
    });
    Tile2MagnetZoneTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetZoneTrait.prototype.getCountryConfig = function () {
        var t;
        return null === (t = this._traitData) || void 0 === t ? void 0 : t.countries;
    };
    Tile2MagnetZoneTrait.prototype.isPreconMet = function () {
        var t = this.country;
        return this.getCountryConfig().includes(t);
    };
    Tile2MagnetZoneTrait.prototype.onT2MagSlotStep_preMet = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2MagnetZoneTrait.prototype.onT2MagSlotStep_breakCon = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: false
        });
    };
    Tile2MagnetZoneTrait.traitKey = "Tile2MagnetZone";
    Tile2MagnetZoneTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetZoneTrait")
    ], Tile2MagnetZoneTrait);
    return Tile2MagnetZoneTrait;
}(Trait_1.default));
exports.default = Tile2MagnetZoneTrait;

cc._RF.pop();