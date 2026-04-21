"use strict";
cc._RF.push(module, '68b5dD+49lP76bU+Hp3qyJx', 'LowPriorityLoader5Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader5Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader5Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader5Trait, _super);
    function LowPriorityLoader5Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader5Trait.prototype.onLowBunLoader_onStart = function (t, r) {
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, 1, 5);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 3, 5);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        r();
    };
    LowPriorityLoader5Trait.traitKey = "LowPriorityLoader5";
    LowPriorityLoader5Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader5Trait")
    ], LowPriorityLoader5Trait);
    return LowPriorityLoader5Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader5Trait;

cc._RF.pop();