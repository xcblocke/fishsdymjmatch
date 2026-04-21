"use strict";
cc._RF.push(module, '4f94cI9eFBNEosr1ac73l9l', 'RankBonusSkipEffectTrait');
// subpackages/l_rankSkipEffect/Scripts/RankBonusSkipEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankBonusSkipEffectTrait = /** @class */ (function (_super) {
    __extends(RankBonusSkipEffectTrait, _super);
    function RankBonusSkipEffectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankBonusSkipEffectTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankBonusSkipEffectTrait.prototype.onRankBonusVw_onEnterAniEnd = function (t, e) {
        var r, n, o;
        null === (r = t.ins) || void 0 === r || r.changeTouchState(true, true);
        null === (o = null === (n = t.ins) || void 0 === n ? void 0 : n.changeMaskOrder) || void 0 === o || o.call(n);
        e();
    };
    RankBonusSkipEffectTrait.traitKey = "RankBonusSkipEffect";
    RankBonusSkipEffectTrait = __decorate([
        mj.trait,
        mj.class("RankBonusSkipEffectTrait")
    ], RankBonusSkipEffectTrait);
    return RankBonusSkipEffectTrait;
}(Trait_1.default));
exports.default = RankBonusSkipEffectTrait;

cc._RF.pop();