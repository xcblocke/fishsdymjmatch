"use strict";
cc._RF.push(module, '92a463PSBdI/Zc8YywK92tO', 'LowPriorityLoader1Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader1Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader1Trait, _super);
    function LowPriorityLoader1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityLoader1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowPriorityLoader1Trait.prototype.isLowMemory = function () {
        return true;
    };
    LowPriorityLoader1Trait.prototype.onMainGameCtrl_uiDes = function (t, r) {
        if (this.isLowMemory()) {
            LowPriorityBundleLoader_1.default.getInstance().stop();
            r();
        }
        else
            r();
    };
    LowPriorityLoader1Trait.traitKey = "LowPriorityLoader1";
    LowPriorityLoader1Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader1Trait")
    ], LowPriorityLoader1Trait);
    return LowPriorityLoader1Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader1Trait;

cc._RF.pop();