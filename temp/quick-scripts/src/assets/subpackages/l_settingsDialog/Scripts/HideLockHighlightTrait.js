"use strict";
cc._RF.push(module, 'a60254rBeRHt7TTcD2W3PiX', 'HideLockHighlightTrait');
// subpackages/l_settingsDialog/Scripts/HideLockHighlightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HideLockHighlightTrait = /** @class */ (function (_super) {
    __extends(HideLockHighlightTrait, _super);
    function HideLockHighlightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HideLockHighlightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        UserModel_1.default.getInstance().setLockHighlightEnabled(false);
    };
    HideLockHighlightTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i)) {
            var o = i.getLockHighlightSwitchNode();
            cc.isValid(o) && (o.active = false);
        }
        e();
    };
    HideLockHighlightTrait.traitKey = "HideLockHighlight";
    HideLockHighlightTrait = __decorate([
        mj.trait,
        mj.class("HideLockHighlightTrait")
    ], HideLockHighlightTrait);
    return HideLockHighlightTrait;
}(Trait_1.default));
exports.default = HideLockHighlightTrait;

cc._RF.pop();