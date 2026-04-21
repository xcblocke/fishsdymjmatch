
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/SettingsKeepHighLightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvU2V0dGluZ3NLZWVwSGlnaExpZ2h0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFHakU7SUFBd0QsOENBQUs7SUFBN0Q7O0lBaUJBLENBQUM7SUFmQywyQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEtBQUssQ0FBQzthQUNoRztTQUNGO1FBQ0QsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEYsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBZk0sbUNBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQUR2QiwwQkFBMEI7UUFGOUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO09BQ2xCLDBCQUEwQixDQWlCOUM7SUFBRCxpQ0FBQztDQWpCRCxBQWlCQyxDQWpCdUQsZUFBSyxHQWlCNUQ7a0JBakJvQiwwQkFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2V0dGluZ3NLZWVwSGlnaExpZ2h0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzS2VlcEhpZ2hMaWdodFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNldHRpbmdzS2VlcEhpZ2hMaWdodFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Mb2dpbk1fc2hvd0xvYWQodCwgZSkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEuaXNGaXJzdEluaXQpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmlzRmlyc3RJbml0ID0gMTtcbiAgICAgIGlmIChcIjFcIiA9PSB0aGlzLl90cmFpdERhdGEuZGVmYXVsdE9mZikge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5lbmFibGVMb2NrSGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5lbmFibGVMb2NrSGlnaGxpZ2h0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNMb2NrSGlnaGxpZ2h0RW5hYmxlZCgpIHx8IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRMb2NrSGlnaGxpZ2h0RW5hYmxlZCh0aGlzLmxvY2FsRGF0YS5lbmFibGVMb2NrSGlnaGxpZ2h0KTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=