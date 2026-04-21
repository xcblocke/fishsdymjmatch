"use strict";
cc._RF.push(module, '49426H51gZPvIjnGXvTfF7N', 'LowPriorityLoader6Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader6Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader6Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader6Trait, _super);
    function LowPriorityLoader6Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader6Trait.prototype.onLowBunLoader_onStart = function (t, r) {
        t.ins.setAllowNonCached(true);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, 10, 8);
        LowPriorityBundleLoader_1.default.getInstance().setPriorityLimit(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 10, 4);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        t.ins.changePriority(LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        r();
    };
    LowPriorityLoader6Trait.prototype.onLowBunLoader_pNextTask = function (t, r) {
        LowPriorityBundleLoader_1.default.getInstance().getDownloadStats().totalDelayTime + LowPriorityBundleLoader_1.default.getInstance().getDownloadStats().totalDownloadTime > 12 && t.ins.stop();
        r();
    };
    LowPriorityLoader6Trait.traitKey = "LowPriorityLoader6";
    LowPriorityLoader6Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader6Trait")
    ], LowPriorityLoader6Trait);
    return LowPriorityLoader6Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader6Trait;

cc._RF.pop();