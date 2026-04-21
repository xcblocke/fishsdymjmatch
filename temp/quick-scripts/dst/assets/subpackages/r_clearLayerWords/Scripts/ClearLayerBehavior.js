
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_clearLayerWords/Scripts/ClearLayerBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8895prlFpNRYOw6A0Hk0Xg', 'ClearLayerBehavior');
// subpackages/r_clearLayerWords/Scripts/ClearLayerBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ClearLayerBehavior = /** @class */ (function (_super) {
    __extends(ClearLayerBehavior, _super);
    function ClearLayerBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearLayerBehavior.prototype.start = function () {
        this.showClearLayerWords();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ClearLayerBehavior.prototype.showClearLayerWords = function () {
        var e = BaseSpine_1.default.create("spine/gameplay_layerClear", "layerClear", 1, null, true, "r_clearLayerWords");
        e.node.setPosition(0, 180, 0);
        this.context.gameView.nodeTopEffectRoot.addChild(e.node, 999);
    };
    return ClearLayerBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = ClearLayerBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NsZWFyTGF5ZXJXb3Jkcy9TY3JpcHRzL0NsZWFyTGF5ZXJCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWtGO0FBQ2xGLDZFQUE0RTtBQUM1RSx5RUFBb0U7QUFDcEU7SUFBZ0Qsc0NBQWlCO0lBQWpFOztJQVVBLENBQUM7SUFUQyxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxnREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN4RyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDSCx5QkFBQztBQUFELENBVkEsQUFVQyxDQVYrQyxxQ0FBaUIsR0FVaEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJMYXllckJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLnNob3dDbGVhckxheWVyV29yZHMoKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHNob3dDbGVhckxheWVyV29yZHMoKSB7XG4gICAgdmFyIGUgPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvZ2FtZXBsYXlfbGF5ZXJDbGVhclwiLCBcImxheWVyQ2xlYXJcIiwgMSwgbnVsbCwgdHJ1ZSwgXCJyX2NsZWFyTGF5ZXJXb3Jkc1wiKTtcbiAgICBlLm5vZGUuc2V0UG9zaXRpb24oMCwgMTgwLCAwKTtcbiAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcubm9kZVRvcEVmZmVjdFJvb3QuYWRkQ2hpbGQoZS5ub2RlLCA5OTkpO1xuICB9XG59Il19