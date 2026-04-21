
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coldStartAMIntr/Scripts/ColdStartAMIntrTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e752XE8zNB+Lr8Kn6pHRqp', 'ColdStartAMIntrTrait');
// subpackages/l_coldStartAMIntr/Scripts/ColdStartAMIntrTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ColdStartAMIntrTrait = /** @class */ (function (_super) {
    __extends(ColdStartAMIntrTrait, _super);
    function ColdStartAMIntrTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColdStartAMIntrTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ColdStartAMIntrTrait.prototype.onMainGameCtrl_isAMIntr = function (t, r) {
        r({
            isBreak: true,
            returnVal: false,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    ColdStartAMIntrTrait.traitKey = "ColdStartAMIntr";
    ColdStartAMIntrTrait = __decorate([
        mj.trait,
        mj.class("ColdStartAMIntrTrait")
    ], ColdStartAMIntrTrait);
    return ColdStartAMIntrTrait;
}(Trait_1.default));
exports.default = ColdStartAMIntrTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvbGRTdGFydEFNSW50ci9TY3JpcHRzL0NvbGRTdGFydEFNSW50clRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFLO0lBQXZEOztJQVlBLENBQUM7SUFWQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQVl4QztJQUFELDJCQUFDO0NBWkQsQUFZQyxDQVppRCxlQUFLLEdBWXREO2tCQVpvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDb2xkU3RhcnRBTUludHJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sZFN0YXJ0QU1JbnRyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ29sZFN0YXJ0QU1JbnRyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pc0FNSW50cih0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiBmYWxzZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG59Il19