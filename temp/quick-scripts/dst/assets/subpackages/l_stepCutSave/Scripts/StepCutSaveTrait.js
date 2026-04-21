
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stepCutSave/Scripts/StepCutSaveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b16f2eX5wFEgoT5XNpUmb4W', 'StepCutSaveTrait');
// subpackages/l_stepCutSave/Scripts/StepCutSaveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StepCutSaveTrait = /** @class */ (function (_super) {
    __extends(StepCutSaveTrait, _super);
    function StepCutSaveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepCutSaveTrait.prototype.onTrackerUtils_cheElimPair = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.prototype.onTrackerUtils_cheGmStep = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.prototype.onTrackerUtils_upRelPos = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.prototype.onTrackerUtils_cacheStepAly = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepCutSaveTrait.traitKey = "StepCutSave";
    StepCutSaveTrait = __decorate([
        mj.trait,
        mj.class("StepCutSaveTrait")
    ], StepCutSaveTrait);
    return StepCutSaveTrait;
}(Trait_1.default));
exports.default = StepCutSaveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0ZXBDdXRTYXZlL1NjcmlwdHMvU3RlcEN1dFNhdmVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQThDLG9DQUFLO0lBQW5EOztJQXNCQSxDQUFDO0lBcEJDLHFEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBRGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQXNCcEM7SUFBRCx1QkFBQztDQXRCRCxBQXNCQyxDQXRCNkMsZUFBSyxHQXNCbEQ7a0JBdEJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTdGVwQ3V0U2F2ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwQ3V0U2F2ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlN0ZXBDdXRTYXZlXCI7XG4gIG9uVHJhY2tlclV0aWxzX2NoZUVsaW1QYWlyKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxuICBvblRyYWNrZXJVdGlsc19jaGVHbVN0ZXAodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG4gIG9uVHJhY2tlclV0aWxzX3VwUmVsUG9zKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxuICBvblRyYWNrZXJVdGlsc19jYWNoZVN0ZXBBbHkodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG59Il19