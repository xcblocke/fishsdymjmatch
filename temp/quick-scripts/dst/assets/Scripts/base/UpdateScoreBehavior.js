
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UpdateScoreBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e884frkQ1tH4qnu6Jk+SY5f', 'UpdateScoreBehavior');
// Scripts/base/UpdateScoreBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScoreBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateScoreBehavior = /** @class */ (function (_super) {
    __extends(UpdateScoreBehavior, _super);
    function UpdateScoreBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateScoreBehavior.prototype.start = function (e) {
        var t, o = e.data.isShowCombo, n = e.data.addScore, i = e.data.targetScore, a = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.scoreItem;
        a && a.updateScore(n, i, o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return UpdateScoreBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateScoreBehavior = UpdateScoreBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVXBkYXRlU2NvcmVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBeUMsdUNBQWlCO0lBQTFEOztJQVVBLENBQUM7SUFUQyxtQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3RCLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xGLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCwwQkFBQztBQUFELENBVkEsQUFVQyxDQVZ3QyxxQ0FBaUIsR0FVekQ7QUFWWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVTY29yZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gZS5kYXRhLmlzU2hvd0NvbWJvLFxuICAgICAgbiA9IGUuZGF0YS5hZGRTY29yZSxcbiAgICAgIGkgPSBlLmRhdGEudGFyZ2V0U2NvcmUsXG4gICAgICBhID0gbnVsbCA9PT0gKHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc2NvcmVJdGVtO1xuICAgIGEgJiYgYS51cGRhdGVTY29yZShuLCBpLCBvKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19