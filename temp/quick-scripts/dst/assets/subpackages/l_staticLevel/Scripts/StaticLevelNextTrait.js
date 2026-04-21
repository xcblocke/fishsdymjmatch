
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_staticLevel/Scripts/StaticLevelNextTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f7c9URvhFDoIf3L4IbGkMr', 'StaticLevelNextTrait');
// subpackages/l_staticLevel/Scripts/StaticLevelNextTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StaticLevelNextTrait = /** @class */ (function (_super) {
    __extends(StaticLevelNextTrait, _super);
    function StaticLevelNextTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticLevelNextTrait.prototype.onStaticLvTt_isNext = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
        });
    };
    StaticLevelNextTrait.traitKey = "StaticLevelNext";
    StaticLevelNextTrait = __decorate([
        mj.trait,
        mj.class("StaticLevelNextTrait")
    ], StaticLevelNextTrait);
    return StaticLevelNextTrait;
}(Trait_1.default));
exports.default = StaticLevelNextTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0YXRpY0xldmVsL1NjcmlwdHMvU3RhdGljTGV2ZWxOZXh0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFrRCx3Q0FBSztJQUF2RDs7SUFTQSxDQUFDO0lBUEMsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVBNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQVN4QztJQUFELDJCQUFDO0NBVEQsQUFTQyxDQVRpRCxlQUFLLEdBU3REO2tCQVRvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTdGF0aWNMZXZlbE5leHRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljTGV2ZWxOZXh0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU3RhdGljTGV2ZWxOZXh0XCI7XG4gIG9uU3RhdGljTHZUdF9pc05leHQodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19