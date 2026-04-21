
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/combo/ComboChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80768eXghVIr7rMBT06cHqO', 'ComboChecker');
// Scripts/process/combo/ComboChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ComboChecker = /** @class */ (function (_super) {
    __extends(ComboChecker, _super);
    function ComboChecker(t) {
        return _super.call(this, t) || this;
    }
    ComboChecker.prototype.getShowLimit = function () {
        return 3;
    };
    ComboChecker.prototype.canShowCombo = function () {
        var e = this.context.getGameData();
        return !!UserModel_1.default.getInstance().isGuideFinished() && e.getComboNum() >= this.getShowLimit();
    };
    ComboChecker.prototype.getBreakLimit = function () {
        return 1;
    };
    ComboChecker.prototype.canBreakCombo = function () {
        return this.context.getGameData().getLockClickCount() >= this.getBreakLimit();
    };
    __decorate([
        mj.traitEvent("ComboChk_canShowCombo")
    ], ComboChecker.prototype, "canShowCombo", null);
    __decorate([
        mj.traitEvent("ComboChk_canBreakCb")
    ], ComboChecker.prototype, "canBreakCombo", null);
    return ComboChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ComboChecker = ComboChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvY29tYm8vQ29tYm9DaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHVEQUFzRDtBQUN0RDtJQUFrQyxnQ0FBYztJQUM5QyxzQkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELG1DQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0YsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUFWRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7b0RBSXRDO0lBS0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3FEQUdwQztJQUNILG1CQUFDO0NBbkJELEFBbUJDLENBbkJpQywrQkFBYyxHQW1CL0M7QUFuQlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIENvbWJvQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGdldFNob3dMaW1pdCgpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNvbWJvQ2hrX2NhblNob3dDb21ib1wiKVxuICBjYW5TaG93Q29tYm8oKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICByZXR1cm4gISFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKSAmJiBlLmdldENvbWJvTnVtKCkgPj0gdGhpcy5nZXRTaG93TGltaXQoKTtcbiAgfVxuICBnZXRCcmVha0xpbWl0KCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ29tYm9DaGtfY2FuQnJlYWtDYlwiKVxuICBjYW5CcmVha0NvbWJvKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRMb2NrQ2xpY2tDb3VudCgpID49IHRoaXMuZ2V0QnJlYWtMaW1pdCgpO1xuICB9XG59Il19