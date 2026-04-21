"use strict";
cc._RF.push(module, 'b6c2ffnSPdH/bVnOHSpwM53', 'TravelBtnPosTrait');
// subpackages/l_travelBtnPos/Scripts/TravelBtnPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TravelBtnPosTrait = /** @class */ (function (_super) {
    __extends(TravelBtnPosTrait, _super);
    function TravelBtnPosTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelBtnPosTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        var r = t.ins.node;
        cc.isValid(r) && r.setPosition(cc.v3(r.position.x, -755, 0));
        e();
    };
    TravelBtnPosTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        var r = t.ins.node;
        cc.isValid(r) && r.setPosition(cc.v3(r.position.x, -532, 0));
        e();
    };
    TravelBtnPosTrait.traitKey = "TravelBtnPos";
    TravelBtnPosTrait = __decorate([
        mj.trait,
        mj.class("TravelBtnPosTrait")
    ], TravelBtnPosTrait);
    return TravelBtnPosTrait;
}(Trait_1.default));
exports.default = TravelBtnPosTrait;

cc._RF.pop();