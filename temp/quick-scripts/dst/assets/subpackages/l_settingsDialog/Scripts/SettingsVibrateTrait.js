
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/SettingsVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvU2V0dGluZ3NWaWJyYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBWUEsQ0FBQztJQVZDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUMvQixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUU7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFWTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FZeEM7SUFBRCwyQkFBQztDQVpELEFBWUMsQ0FaaUQsZUFBSyxHQVl0RDtrQkFab0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNldHRpbmdzVmlicmF0ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc1ZpYnJhdGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTZXR0aW5nc1ZpYnJhdGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTG9naW5NX3Nob3dMb2FkKHQsIGUpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmlzRmlyc3RJbml0KSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SW5pdCA9IDE7XG4gICAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRWaWJyYXRpb25FbmFibGVkKHRoaXMuX3RyYWl0RGF0YS5lbmFibGVWaWJyYXRpb24pO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=