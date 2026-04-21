"use strict";
cc._RF.push(module, 'fc43cyNxaxOQrqVCxC4lyTz', 'SettingsDialogTrait');
// subpackages/l_settingsDialog/Scripts/SettingsDialogTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsDialogTrait = /** @class */ (function (_super) {
    __extends(SettingsDialogTrait, _super);
    function SettingsDialogTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsDialogTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.setNewUserDefaultSettings();
        this.applySavedSettings();
    };
    SettingsDialogTrait.prototype.setNewUserDefaultSettings = function () {
        if (this.localData.isFirstInit) {
            mj.sdk.setGameBGMStatus(UserModel_1.default.getInstance().isMusicEnabled() ? "1" : "0");
            mj.sdk.setGameSoundStatus(UserModel_1.default.getInstance().isSoundEnabled() ? "1" : "0");
        }
        else {
            this.localData.isFirstInit = 1;
            UserModel_1.default.getInstance().setMusicEnabled(this._traitData.enableMusic);
            UserModel_1.default.getInstance().setSoundEnabled(this._traitData.enableSound);
            UserModel_1.default.getInstance().setVibrationEnabled(true);
            UserModel_1.default.getInstance().setLockHighlightEnabled(false);
        }
    };
    SettingsDialogTrait.prototype.onGameUI_onBtnSettings = function (t, e) {
        this.showSettingsDialog();
        e();
    };
    SettingsDialogTrait.prototype.applySavedSettings = function () {
        mj.audioManager.setBGMMuted(!UserModel_1.default.getInstance().isMusicEnabled());
        mj.audioManager.setEffectMuted(!UserModel_1.default.getInstance().isSoundEnabled());
    };
    SettingsDialogTrait.prototype.showSettingsDialog = function () {
        this.pushController("UISettingsDialogController", {});
    };
    SettingsDialogTrait.traitKey = "SettingsDialog";
    SettingsDialogTrait = __decorate([
        mj.trait,
        mj.class("SettingsDialogTrait")
    ], SettingsDialogTrait);
    return SettingsDialogTrait;
}(Trait_1.default));
exports.default = SettingsDialogTrait;

cc._RF.pop();