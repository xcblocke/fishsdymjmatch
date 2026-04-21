
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UpdateLevelBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4afb6ERpW5IdJecl/31syZ5', 'UpdateLevelBehavior');
// Scripts/base/UpdateLevelBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLevelBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateLevelBehavior = /** @class */ (function (_super) {
    __extends(UpdateLevelBehavior, _super);
    function UpdateLevelBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateLevelBehavior.prototype.start = function (e) {
        var t = e.data.level;
        this.context.gameView.gameUI.updateLevel(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return UpdateLevelBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateLevelBehavior = UpdateLevelBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVXBkYXRlTGV2ZWxCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBeUMsdUNBQWlCO0lBQTFEOztJQU1BLENBQUM7SUFMQyxtQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCwwQkFBQztBQUFELENBTkEsQUFNQyxDQU53QyxxQ0FBaUIsR0FNekQ7QUFOWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVMZXZlbEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGEubGV2ZWw7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVVSS51cGRhdGVMZXZlbCh0KTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19