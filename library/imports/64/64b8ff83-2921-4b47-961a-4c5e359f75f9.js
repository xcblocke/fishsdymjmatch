"use strict";
cc._RF.push(module, '64b8f+DKSFLR5YaTF41n3X5', 'ChestAdShowTrait');
// subpackages/l_chestAdShow/Scripts/ChestAdShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChestAdShowTrait = /** @class */ (function (_super) {
    __extends(ChestAdShowTrait, _super);
    function ChestAdShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChestAdShowTrait.prototype.onChest_AdClkShow = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ChestAdShowTrait.prototype.onChest_AdClose = function (t, e) {
        var r, o, n = t.ins;
        if (cc.isValid(n) && n.showAdRewards && "function" == typeof n.showAdRewards) {
            var i = null !== (o = null === (r = this.traitData) || void 0 === r ? void 0 : r.showAnim) && void 0 !== o && o;
            n.showAdRewards(i);
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ChestAdShowTrait.traitKey = "ChestAdShow";
    ChestAdShowTrait = __decorate([
        mj.trait,
        mj.class("ChestAdShowTrait")
    ], ChestAdShowTrait);
    return ChestAdShowTrait;
}(Trait_1.default));
exports.default = ChestAdShowTrait;

cc._RF.pop();