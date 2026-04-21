
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsHome/Scripts/SettingsHomeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzSG9tZS9TY3JpcHRzL1NldHRpbmdzSG9tZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQStDLHFDQUFLO0lBQXBEOztJQWlDQSxDQUFDO0lBL0JDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxxREFBeUIsR0FBekI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xFLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0U7U0FDRjtJQUNILENBQUM7SUFDRCxnREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsOENBQWtCLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDdkUsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELDRDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELHlDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUEvQk0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFEZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBaUNyQztJQUFELHdCQUFDO0NBakNELEFBaUNDLENBakM4QyxlQUFLLEdBaUNuRDtrQkFqQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZXR0aW5nc0hvbWVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NIb21lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2V0dGluZ3NIb21lXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnNldE5ld1VzZXJEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICB0aGlzLmFwcGx5U2F2ZWRTZXR0aW5ncygpO1xuICB9XG4gIHNldE5ld1VzZXJEZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SW5pdCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNGaXJzdEluaXQgPSAxO1xuICAgICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIFwiYm9vbGVhblwiICE9IHR5cGVvZiB0LmlzTXVzaWNFbmFibGVkKCkgJiYgdC5zZXRNdXNpY0VuYWJsZWQodHJ1ZSk7XG4gICAgICAgIFwiYm9vbGVhblwiICE9IHR5cGVvZiB0LmlzU291bmRFbmFibGVkKCkgJiYgdC5zZXRTb3VuZEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIFwiYm9vbGVhblwiICE9IHR5cGVvZiB0LmlzVmlicmF0aW9uRW5hYmxlZCgpICYmIHQuc2V0VmlicmF0aW9uRW5hYmxlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25IYWxsU2V0QnRuX29uQ2xpY2sodCwgZSkge1xuICAgIHRoaXMuc2hvd1NldHRpbmdzSG9tZSgpO1xuICAgIGUoKTtcbiAgfVxuICBhcHBseVNhdmVkU2V0dGluZ3MoKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnNldEJHTU11dGVkKCFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc011c2ljRW5hYmxlZCgpKTtcbiAgICBtai5hdWRpb01hbmFnZXIuc2V0RWZmZWN0TXV0ZWQoIVVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzU291bmRFbmFibGVkKCkpO1xuICB9XG4gIHNob3dTZXR0aW5nc0hvbWUoKSB7XG4gICAgdGhpcy5wdXNoQ29udHJvbGxlcihcIlVJU2V0dGluZ3NIb21lQ29udHJvbGxlclwiLCB7fSk7XG4gIH1cbiAgaXNVc2VTaW1wbGVVSSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gIShudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0IHx8ICF0LnVzZVNpbXBsZSk7XG4gIH1cbn0iXX0=