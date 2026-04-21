"use strict";
cc._RF.push(module, '33d15URH6xPSbhNonX4H12H', 'SettingsHomeTrait');
// subpackages/l_settingsHome/Scripts/SettingsHomeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsHomeTrait = /** @class */ (function (_super) {
    __extends(SettingsHomeTrait, _super);
    function SettingsHomeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsHomeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.setNewUserDefaultSettings();
        this.applySavedSettings();
    };
    SettingsHomeTrait.prototype.setNewUserDefaultSettings = function () {
        if (!this.localData.isFirstInit) {
            this.localData.isFirstInit = 1;
            var t = UserModel_1.default.getInstance();
            if (t) {
                "boolean" != typeof t.isMusicEnabled() && t.setMusicEnabled(true);
                "boolean" != typeof t.isSoundEnabled() && t.setSoundEnabled(true);
                "boolean" != typeof t.isVibrationEnabled() && t.setVibrationEnabled(true);
            }
        }
    };
    SettingsHomeTrait.prototype.onHallSetBtn_onClick = function (t, e) {
        this.showSettingsHome();
        e();
    };
    SettingsHomeTrait.prototype.applySavedSettings = function () {
        mj.audioManager.setBGMMuted(!UserModel_1.default.getInstance().isMusicEnabled());
        mj.audioManager.setEffectMuted(!UserModel_1.default.getInstance().isSoundEnabled());
    };
    SettingsHomeTrait.prototype.showSettingsHome = function () {
        this.pushController("UISettingsHomeController", {});
    };
    SettingsHomeTrait.prototype.isUseSimpleUI = function () {
        var t;
        return !(null === (t = this._traitData) || void 0 === t || !t.useSimple);
    };
    SettingsHomeTrait.traitKey = "SettingsHome";
    SettingsHomeTrait = __decorate([
        mj.trait,
        mj.class("SettingsHomeTrait")
    ], SettingsHomeTrait);
    return SettingsHomeTrait;
}(Trait_1.default));
exports.default = SettingsHomeTrait;

cc._RF.pop();