
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/SettingsDialogTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvU2V0dGluZ3NEaWFsb2dUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFpRCx1Q0FBSztJQUF0RDs7SUE4QkEsQ0FBQztJQTVCQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsdURBQXlCLEdBQXpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pGO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDL0IsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFDRCxvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsZ0RBQWtCLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDdkUsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELGdEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQTVCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0E4QnZDO0lBQUQsMEJBQUM7Q0E5QkQsQUE4QkMsQ0E5QmdELGVBQUssR0E4QnJEO2tCQTlCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNldHRpbmdzRGlhbG9nVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzRGlhbG9nVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2V0dGluZ3NEaWFsb2dcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuc2V0TmV3VXNlckRlZmF1bHRTZXR0aW5ncygpO1xuICAgIHRoaXMuYXBwbHlTYXZlZFNldHRpbmdzKCk7XG4gIH1cbiAgc2V0TmV3VXNlckRlZmF1bHRTZXR0aW5ncygpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuaXNGaXJzdEluaXQpIHtcbiAgICAgIG1qLnNkay5zZXRHYW1lQkdNU3RhdHVzKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXVzaWNFbmFibGVkKCkgPyBcIjFcIiA6IFwiMFwiKTtcbiAgICAgIG1qLnNkay5zZXRHYW1lU291bmRTdGF0dXMoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNTb3VuZEVuYWJsZWQoKSA/IFwiMVwiIDogXCIwXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SW5pdCA9IDE7XG4gICAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRNdXNpY0VuYWJsZWQodGhpcy5fdHJhaXREYXRhLmVuYWJsZU11c2ljKTtcbiAgICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldFNvdW5kRW5hYmxlZCh0aGlzLl90cmFpdERhdGEuZW5hYmxlU291bmQpO1xuICAgICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0VmlicmF0aW9uRW5hYmxlZCh0cnVlKTtcbiAgICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldExvY2tIaWdobGlnaHRFbmFibGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25HYW1lVUlfb25CdG5TZXR0aW5ncyh0LCBlKSB7XG4gICAgdGhpcy5zaG93U2V0dGluZ3NEaWFsb2coKTtcbiAgICBlKCk7XG4gIH1cbiAgYXBwbHlTYXZlZFNldHRpbmdzKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5zZXRCR01NdXRlZCghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNNdXNpY0VuYWJsZWQoKSk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnNldEVmZmVjdE11dGVkKCFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1NvdW5kRW5hYmxlZCgpKTtcbiAgfVxuICBzaG93U2V0dGluZ3NEaWFsb2coKSB7XG4gICAgdGhpcy5wdXNoQ29udHJvbGxlcihcIlVJU2V0dGluZ3NEaWFsb2dDb250cm9sbGVyXCIsIHt9KTtcbiAgfVxufSJdfQ==