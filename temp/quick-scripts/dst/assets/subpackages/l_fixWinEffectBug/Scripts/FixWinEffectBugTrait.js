
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fixWinEffectBug/Scripts/FixWinEffectBugTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e067fcQtJNOKsrR1SYhX8e', 'FixWinEffectBugTrait');
// subpackages/l_fixWinEffectBug/Scripts/FixWinEffectBugTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FixWinEffectBugTrait = /** @class */ (function (_super) {
    __extends(FixWinEffectBugTrait, _super);
    function FixWinEffectBugTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FixWinEffectBugTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FixWinEffectBugTrait.prototype.onWinVw_playWiEff = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    FixWinEffectBugTrait.prototype.onWinVw_showWinVw = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Win);
        e();
    };
    FixWinEffectBugTrait.traitKey = "FixWinEffectBug";
    FixWinEffectBugTrait = __decorate([
        mj.trait,
        mj.class("FixWinEffectBugTrait")
    ], FixWinEffectBugTrait);
    return FixWinEffectBugTrait;
}(Trait_1.default));
exports.default = FixWinEffectBugTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZpeFdpbkVmZmVjdEJ1Zy9TY3JpcHRzL0ZpeFdpbkVmZmVjdEJ1Z1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQWtGO0FBR2xGO0lBQWtELHdDQUFLO0lBQXZEOztJQWVBLENBQUM7SUFiQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWJNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQWV4QztJQUFELDJCQUFDO0NBZkQsQUFlQyxDQWZpRCxlQUFLLEdBZXREO2tCQWZvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGaXhXaW5FZmZlY3RCdWdUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4V2luRWZmZWN0QnVnVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRml4V2luRWZmZWN0QnVnXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbldpblZ3X3BsYXlXaUVmZih0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbiAgb25XaW5Wd19zaG93V2luVncodCwgZSkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELldpbik7XG4gICAgZSgpO1xuICB9XG59Il19