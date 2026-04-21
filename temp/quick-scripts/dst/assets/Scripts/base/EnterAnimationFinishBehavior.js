
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/EnterAnimationFinishBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3a93tUbntBlpcLUylG+cN9', 'EnterAnimationFinishBehavior');
// Scripts/base/EnterAnimationFinishBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationFinishBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTouchComponent_1 = require("../component/GameTouchComponent");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var EnterAnimationFinishBehavior = /** @class */ (function (_super) {
    __extends(EnterAnimationFinishBehavior, _super);
    function EnterAnimationFinishBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnterAnimationFinishBehavior.prototype.start = function () {
        this.enableTouchEvents();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    EnterAnimationFinishBehavior.prototype.enableTouchEvents = function () {
        var e = this.context.gameView;
        if (e) {
            var t = e._gameNode;
            if (t && cc.isValid(t)) {
                var o = t.getComponent(GameTouchComponent_1.GameTouchComponent);
                o && o.registerTouchEvents(this.context.gameType);
            }
        }
    };
    __decorate([
        mj.traitEvent("EntAniFiBhv_start")
    ], EnterAnimationFinishBehavior.prototype, "start", null);
    return EnterAnimationFinishBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.EnterAnimationFinishBehavior = EnterAnimationFinishBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRW50ZXJBbmltYXRpb25GaW5pc2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSxzRUFBcUU7QUFDckUseURBQXdEO0FBQ3hEO0lBQWtELGdEQUFpQjtJQUFuRTs7SUFnQkEsQ0FBQztJQWRDLDRDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELHdEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHVDQUFrQixDQUFDLENBQUM7Z0JBQzNDLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRDtTQUNGO0lBQ0gsQ0FBQztJQWJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzs2REFJbEM7SUFXSCxtQ0FBQztDQWhCRCxBQWdCQyxDQWhCaUQscUNBQWlCLEdBZ0JsRTtBQWhCWSxvRUFBNEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZVRvdWNoQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L0dhbWVUb3VjaENvbXBvbmVudCc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIEVudGVyQW5pbWF0aW9uRmluaXNoQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiRW50QW5pRmlCaHZfc3RhcnRcIilcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaEV2ZW50cygpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgZW5hYmxlVG91Y2hFdmVudHMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXc7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciB0ID0gZS5fZ2FtZU5vZGU7XG4gICAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHZhciBvID0gdC5nZXRDb21wb25lbnQoR2FtZVRvdWNoQ29tcG9uZW50KTtcbiAgICAgICAgbyAmJiBvLnJlZ2lzdGVyVG91Y2hFdmVudHModGhpcy5jb250ZXh0LmdhbWVUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=