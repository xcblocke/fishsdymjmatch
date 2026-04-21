"use strict";
cc._RF.push(module, 'c67a7CXYWJPxK2cdvYSl0mS', 'SettingsVibrateTrait');
// subpackages/l_settingsDialog/Scripts/SettingsVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsVibrateTrait = /** @class */ (function (_super) {
    __extends(SettingsVibrateTrait, _super);
    function SettingsVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsVibrateTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SettingsVibrateTrait.prototype.onLoginM_showLoad = function (t, e) {
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            UserModel_1.default.getInstance().setVibrationEnabled(this._traitData.enableVibration);
        }
        e();
    };
    SettingsVibrateTrait.traitKey = "SettingsVibrate";
    SettingsVibrateTrait = __decorate([
        mj.trait,
        mj.class("SettingsVibrateTrait")
    ], SettingsVibrateTrait);
    return SettingsVibrateTrait;
}(Trait_1.default));
exports.default = SettingsVibrateTrait;

cc._RF.pop();