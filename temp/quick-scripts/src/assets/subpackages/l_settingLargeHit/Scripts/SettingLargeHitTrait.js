"use strict";
cc._RF.push(module, 'aeccf12QV1HOIKPSa0XotSa', 'SettingLargeHitTrait');
// subpackages/l_settingLargeHit/Scripts/SettingLargeHitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var SettingLargeHitTrait = /** @class */ (function (_super) {
    __extends(SettingLargeHitTrait, _super);
    function SettingLargeHitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingLargeHitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingLargeHitTrait.prototype.onUILangSwitch_isLarge = function (t, r) {
        r({
            returnVal: true,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    SettingLargeHitTrait.prototype.onUIContactUs_isLarge = function (t, r) {
        r({
            returnVal: true,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    SettingLargeHitTrait.prototype.onUISetDlg_isLarge = function (t, r) {
        r({
            returnVal: true,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    SettingLargeHitTrait.traitKey = "SettingLargeHit";
    SettingLargeHitTrait = __decorate([
        mj.trait,
        mj.class("SettingLargeHitTrait")
    ], SettingLargeHitTrait);
    return SettingLargeHitTrait;
}(Trait_1.default));
exports.default = SettingLargeHitTrait;

cc._RF.pop();