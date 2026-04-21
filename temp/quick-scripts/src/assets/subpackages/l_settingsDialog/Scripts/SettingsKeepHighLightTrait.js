"use strict";
cc._RF.push(module, '405424CEqZEXpwrbEUtgGGy', 'SettingsKeepHighLightTrait');
// subpackages/l_settingsDialog/Scripts/SettingsKeepHighLightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsKeepHighLightTrait = /** @class */ (function (_super) {
    __extends(SettingsKeepHighLightTrait, _super);
    function SettingsKeepHighLightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsKeepHighLightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsKeepHighLightTrait.prototype.onLoginM_showLoad = function (t, e) {
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            if ("1" == this._traitData.defaultOff) {
                this.localData.enableLockHighlight = false;
            }
            else {
                this.localData.enableLockHighlight = UserModel_1.default.getInstance().isLockHighlightEnabled() || false;
            }
        }
        UserModel_1.default.getInstance().setLockHighlightEnabled(this.localData.enableLockHighlight);
        e();
    };
    SettingsKeepHighLightTrait.traitKey = "SettingsKeepHighLight";
    SettingsKeepHighLightTrait = __decorate([
        mj.trait,
        mj.class("SettingsKeepHighLightTrait")
    ], SettingsKeepHighLightTrait);
    return SettingsKeepHighLightTrait;
}(Trait_1.default));
exports.default = SettingsKeepHighLightTrait;

cc._RF.pop();