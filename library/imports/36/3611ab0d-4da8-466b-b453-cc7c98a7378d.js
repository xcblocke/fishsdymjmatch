"use strict";
cc._RF.push(module, '3611asNTahGa7RTzHyYpzeN', 'FixTravelCollectTrait');
// subpackages/l_fixTravelCollect/Scripts/FixTravelCollectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var InitCollectTargetEffect_1 = require("../../../Scripts/InitCollectTargetEffect");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FixTravelCollectTrait = /** @class */ (function (_super) {
    __extends(FixTravelCollectTrait, _super);
    function FixTravelCollectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixTravelCollectTrait.prototype.onIptEnterAni_pushColTag = function (t, e) {
        var r, o, i = t.ins, n = null === (o = null === (r = i.gameContext) || void 0 === r ? void 0 : r.getTileMapObject()) || void 0 === o ? void 0 : o.collectSystem;
        if (n) {
            var a = new InitCollectTargetEffect_1.InitCollectTargetEffect({
                collectDetails: n.getAllCollectDetails()
            });
            i.pushEffect(a, BehaviorsEnum_1.EInsertType.Parallel);
            e();
        }
        else
            e();
    };
    FixTravelCollectTrait.prototype.onIptEnterAniFin_pushColTag = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    FixTravelCollectTrait.traitKey = "FixTravelCollect";
    FixTravelCollectTrait = __decorate([
        mj.trait,
        mj.class("FixTravelCollectTrait")
    ], FixTravelCollectTrait);
    return FixTravelCollectTrait;
}(Trait_1.default));
exports.default = FixTravelCollectTrait;

cc._RF.pop();