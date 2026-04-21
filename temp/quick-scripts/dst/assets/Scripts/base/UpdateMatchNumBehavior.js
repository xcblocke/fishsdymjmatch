
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UpdateMatchNumBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a061ccYf5JJXrRAh4ZPny2k', 'UpdateMatchNumBehavior');
// Scripts/base/UpdateMatchNumBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatchNumBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateMatchNumBehavior = /** @class */ (function (_super) {
    __extends(UpdateMatchNumBehavior, _super);
    function UpdateMatchNumBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateMatchNumBehavior.prototype.start = function (e) {
        this.context.gameView.gameUI.updateMatchNum(e.data.canMatchCardPairNum);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("UpdateMatchNumBhv_start")
    ], UpdateMatchNumBehavior.prototype, "start", null);
    return UpdateMatchNumBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateMatchNumBehavior = UpdateMatchNumBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVXBkYXRlTWF0Y2hOdW1CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBNEMsMENBQWlCO0lBQTdEOztJQU1BLENBQUM7SUFKQyxzQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBSEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3VEQUl4QztJQUNILDZCQUFDO0NBTkQsQUFNQyxDQU4yQyxxQ0FBaUIsR0FNNUQ7QUFOWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVNYXRjaE51bUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIlVwZGF0ZU1hdGNoTnVtQmh2X3N0YXJ0XCIpXG4gIHN0YXJ0KGUpIHtcbiAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2FtZVVJLnVwZGF0ZU1hdGNoTnVtKGUuZGF0YS5jYW5NYXRjaENhcmRQYWlyTnVtKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19