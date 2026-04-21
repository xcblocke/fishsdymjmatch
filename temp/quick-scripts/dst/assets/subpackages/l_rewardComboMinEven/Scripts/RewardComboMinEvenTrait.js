
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rewardComboMinEven/Scripts/RewardComboMinEvenTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b683cL09lNGosM46vL73LE', 'RewardComboMinEvenTrait');
// subpackages/l_rewardComboMinEven/Scripts/RewardComboMinEvenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RewardComboMinEvenTrait = /** @class */ (function (_super) {
    __extends(RewardComboMinEvenTrait, _super);
    function RewardComboMinEvenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardComboMinEvenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            cntRt: this._traitData.cntRt || [0.2, 0.3]
        };
    };
    RewardComboMinEvenTrait.prototype.onRwdComboChk_cntRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.cntRt
        });
    };
    RewardComboMinEvenTrait.traitKey = "RewardComboMinEven";
    RewardComboMinEvenTrait = __decorate([
        mj.trait,
        mj.class("RewardComboMinEvenTrait")
    ], RewardComboMinEvenTrait);
    return RewardComboMinEvenTrait;
}(Trait_1.default));
exports.default = RewardComboMinEvenTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Jld2FyZENvbWJvTWluRXZlbi9TY3JpcHRzL1Jld2FyZENvbWJvTWluRXZlblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEOztJQWVBLENBQUM7SUFiQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUNELHFEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWJNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFEcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQWUzQztJQUFELDhCQUFDO0NBZkQsQUFlQyxDQWZvRCxlQUFLLEdBZXpEO2tCQWZvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSZXdhcmRDb21ib01pbkV2ZW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3YXJkQ29tYm9NaW5FdmVuVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmV3YXJkQ29tYm9NaW5FdmVuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBjbnRSdDogdGhpcy5fdHJhaXREYXRhLmNudFJ0IHx8IFswLjIsIDAuM11cbiAgICB9O1xuICB9XG4gIG9uUndkQ29tYm9DaGtfY250UnQodCwgcikge1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY29uZmlnLmNudFJ0XG4gICAgfSk7XG4gIH1cbn0iXX0=