"use strict";
cc._RF.push(module, '98077eHuDRBf5T6ANOJyQ04', 'VibrateDragEndPatchTrait');
// subpackages/l_vibrate/Scripts/VibrateDragEndPatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateDragEndPatchTrait = /** @class */ (function (_super) {
    __extends(VibrateDragEndPatchTrait, _super);
    function VibrateDragEndPatchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrateDragEndPatchTrait.prototype.onIptTchMove_startMove = function (t, e) {
        t.extra = t.extra || {};
        t.extra.skipDragStartVibrate = true;
        e();
    };
    VibrateDragEndPatchTrait.prototype.onIptBTchEnd_moveEnd = function (t, e) {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Medium);
        e();
    };
    VibrateDragEndPatchTrait.traitKey = "VibrateDragEndPatch";
    VibrateDragEndPatchTrait = __decorate([
        mj.trait,
        mj.class("VibrateDragEndPatchTrait")
    ], VibrateDragEndPatchTrait);
    return VibrateDragEndPatchTrait;
}(Trait_1.default));
exports.default = VibrateDragEndPatchTrait;

cc._RF.pop();