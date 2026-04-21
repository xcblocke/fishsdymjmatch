
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/SettingsHighLightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvU2V0dGluZ3NIaWdoTGlnaHRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFvRCwwQ0FBSztJQUF6RDs7SUFZQSxDQUFDO0lBVkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGtEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBVk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBWTFDO0lBQUQsNkJBQUM7Q0FaRCxBQVlDLENBWm1ELGVBQUssR0FZeEQ7a0JBWm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZXR0aW5nc0hpZ2hMaWdodFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nc0hpZ2hMaWdodFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNldHRpbmdzSGlnaExpZ2h0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkxvZ2luTV9zaG93TG9hZCh0LCBlKSB7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SW5pdCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNGaXJzdEluaXQgPSAxO1xuICAgICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0TG9ja0hpZ2hsaWdodEVuYWJsZWQodGhpcy5fdHJhaXREYXRhLmVuYWJsZUxvY2tIaWdobGlnaHQpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=