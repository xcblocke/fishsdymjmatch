"use strict";
cc._RF.push(module, '4b8cdIQ6pJMS6krt8Bir20v', 'LowPriorityLoader4Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader4Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader4Trait, _super);
    function LowPriorityLoader4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader4Trait.prototype.LowBunLoader_onStart = function (t, r) {
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 3, 5);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, 1, 5);
        r();
    };
    LowPriorityLoader4Trait.traitKey = "LowPriorityLoader4";
    LowPriorityLoader4Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader4Trait")
    ], LowPriorityLoader4Trait);
    return LowPriorityLoader4Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader4Trait;

cc._RF.pop();