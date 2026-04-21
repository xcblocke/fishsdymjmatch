"use strict";
cc._RF.push(module, '58f3aSY++tD/o0vsxcx3Ond', 'LowPriorityLoader3Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader3Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader3Trait, _super);
    function LowPriorityLoader3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader3Trait.prototype.isLowMemory = function () {
        return true;
    };
    LowPriorityLoader3Trait.prototype.onLowBunLoader_getDelay = function (t, r) {
        var o;
        if (!this.isLowMemory() || null !== (o = t.args[0]) && void 0 !== o && o.isHasDownloaded)
            r();
        else {
            var e = LowPriorityBundleLoader_1.default.getInstance().getLastBundleAvgProgressTime(), i = t.beforReturnVal;
            i = e < 0.1 ? 0.5 : e < 0.5 ? 1 : e < 1 ? 2 : 30;
            r({
                returnType: TraitCallbackReturnType.return,
                returnVal: i
            });
        }
    };
    LowPriorityLoader3Trait.traitKey = "LowPriorityLoader3";
    LowPriorityLoader3Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader3Trait")
    ], LowPriorityLoader3Trait);
    return LowPriorityLoader3Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader3Trait;

cc._RF.pop();