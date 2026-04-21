
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_getMaxNoDie/Scripts/GetMaxNoDieLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc75dd/DCxPxKC2iK5xw6vn', 'GetMaxNoDieLevelTrait');
// subpackages/l_getMaxNoDie/Scripts/GetMaxNoDieLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GetMaxNoDieLevelTrait = /** @class */ (function (_super) {
    __extends(GetMaxNoDieLevelTrait, _super);
    function GetMaxNoDieLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetMaxNoDieLevelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GetMaxNoDieLevelTrait.prototype.onExtNormLv_getMaxNDieLevel = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._traitData.maxNoDieLevel;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            e();
    };
    GetMaxNoDieLevelTrait.traitKey = "GetMaxNoDieLevel";
    GetMaxNoDieLevelTrait = __decorate([
        mj.trait,
        mj.class("GetMaxNoDieLevelTrait")
    ], GetMaxNoDieLevelTrait);
    return GetMaxNoDieLevelTrait;
}(ExtractTrait_1.default));
exports.default = GetMaxNoDieLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dldE1heE5vRGllL1NjcmlwdHMvR2V0TWF4Tm9EaWVMZXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBR3hGO0lBQW1ELHlDQUFZO0lBQS9EOztJQWVBLENBQUM7SUFiQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMkRBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3RDLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFiTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FlekM7SUFBRCw0QkFBQztDQWZELEFBZUMsQ0Fma0Qsc0JBQVksR0FlOUQ7a0JBZm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHZXRNYXhOb0RpZUxldmVsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldE1heE5vRGllTGV2ZWxUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR2V0TWF4Tm9EaWVMZXZlbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0TWF4TkRpZUxldmVsKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5fdHJhaXREYXRhLm1heE5vRGllTGV2ZWw7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=