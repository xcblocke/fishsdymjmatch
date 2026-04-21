"use strict";
cc._RF.push(module, '03e69eyu1RD64r1JL0iRKDa', 'HallRankBtnPosTrait');
// subpackages/l_hallRankBtnPos/Scripts/HallRankBtnPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallRankBtnPosTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnPosTrait, _super);
    function HallRankBtnPosTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallRankBtnPosTrait.prototype.onRankBtn_onLoad = function (t, r) {
        var e = t.ins.node;
        cc.isValid(e) && e.setPosition(e.position.x, 106);
        r();
    };
    HallRankBtnPosTrait.traitKey = "HallRankBtnPos";
    HallRankBtnPosTrait = __decorate([
        mj.trait,
        mj.class("HallRankBtnPosTrait")
    ], HallRankBtnPosTrait);
    return HallRankBtnPosTrait;
}(Trait_1.default));
exports.default = HallRankBtnPosTrait;

cc._RF.pop();