"use strict";
cc._RF.push(module, '9d26dJ1/A1LPapxDsiNZffp', 'SettingsHighLightTrait');
// subpackages/l_settingsDialog/Scripts/SettingsHighLightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsHighLightTrait = /** @class */ (function (_super) {
    __extends(SettingsHighLightTrait, _super);
    function SettingsHighLightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsHighLightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsHighLightTrait.prototype.onLoginM_showLoad = function (t, e) {
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            UserModel_1.default.getInstance().setLockHighlightEnabled(this._traitData.enableLockHighlight);
        }
        e();
    };
    SettingsHighLightTrait.traitKey = "SettingsHighLight";
    SettingsHighLightTrait = __decorate([
        mj.trait,
        mj.class("SettingsHighLightTrait")
    ], SettingsHighLightTrait);
    return SettingsHighLightTrait;
}(Trait_1.default));
exports.default = SettingsHighLightTrait;

cc._RF.pop();