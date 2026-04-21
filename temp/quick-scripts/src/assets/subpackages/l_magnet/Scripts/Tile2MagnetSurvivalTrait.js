"use strict";
cc._RF.push(module, '5129eIgSbtKR7aBhPn1I6MY', 'Tile2MagnetSurvivalTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetSurvivalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetSurvivalTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetSurvivalTrait, _super);
    function Tile2MagnetSurvivalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetSurvivalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetSurvivalTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        var r, o = mj.getClassByName("Tile2MagnetTrait");
        if (o && "function" == typeof o.getInstance) {
            var n = o.getInstance();
            n && n.eventEnabled && (null === (r = n.resetPopupCount) || void 0 === r || r.call(n));
        }
        e();
    };
    Tile2MagnetSurvivalTrait.traitKey = "Tile2MagnetSurvival";
    Tile2MagnetSurvivalTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetSurvivalTrait")
    ], Tile2MagnetSurvivalTrait);
    return Tile2MagnetSurvivalTrait;
}(Trait_1.default));
exports.default = Tile2MagnetSurvivalTrait;

cc._RF.pop();