
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_targetCollected/Scripts/TargetCollectedBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d82bJzq/BI6pPXelwGdKvm', 'TargetCollectedBehavior');
// subpackages/r_targetCollected/Scripts/TargetCollectedBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetCollectedBehavior = exports.TargetCollectedEffect = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var TargetCollectedEffect = /** @class */ (function (_super) {
    __extends(TargetCollectedEffect, _super);
    function TargetCollectedEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.TargetCollected;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(TargetCollectedEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return TargetCollectedEffect;
}(BaseEffect_1.default));
exports.TargetCollectedEffect = TargetCollectedEffect;
var TargetCollectedBehavior = /** @class */ (function (_super) {
    __extends(TargetCollectedBehavior, _super);
    function TargetCollectedBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetCollectedBehavior.prototype.start = function (e) {
        var t = this.context.gameView;
        if (cc.isValid(t) && cc.isValid(t.nodeTopEffectRoot)) {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            try {
                this.playAnimation(t.nodeTopEffectRoot, e);
            }
            catch (e) { }
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    TargetCollectedBehavior.prototype.playAnimation = function (e, t) {
        var r = e.width, o = BaseSpine_1.default.create(t.data.spinePath, "in", 1, null, true, t.data.bundleName);
        e.addChild(o.node);
        o.node.setPosition(-r / 2, 0, 0);
        var a = BaseSpine_1.default.create(t.data.spinePath, "in", 1, null, true, t.data.bundleName);
        e.addChild(a.node);
        a.node.setPosition(r / 2, 0, 0);
        a.node.scale = -1;
    };
    return TargetCollectedBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.TargetCollectedBehavior = TargetCollectedBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3RhcmdldENvbGxlY3RlZC9TY3JpcHRzL1RhcmdldENvbGxlY3RlZEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWtGO0FBQ2xGLDBEQUFxRDtBQUNyRCw4RUFBNkU7QUFDN0UsNkVBQTRFO0FBQzVFLHlFQUFvRTtBQUNwRTtJQUEyQyx5Q0FBVTtJQU1uRCwrQkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FFVDtRQVJELFdBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDekMsV0FBSyxHQUFHLElBQUksQ0FBQztRQU1YLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixDQUFDO0lBTkQsc0JBQUksdUNBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILDRCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVjBDLG9CQUFVLEdBVXBEO0FBVlksc0RBQXFCO0FBV2xDO0lBQTZDLDJDQUFpQjtJQUE5RDs7SUFvQkEsQ0FBQztJQW5CQyx1Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVDO1lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtTQUNmOztZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsK0NBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLG1CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQjRDLHFDQUFpQixHQW9CN0Q7QUFwQlksMERBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IEJhc2VFZmZlY3QgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlRWZmZWN0JztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuZXhwb3J0IGNsYXNzIFRhcmdldENvbGxlY3RlZEVmZmVjdCBleHRlbmRzIEJhc2VFZmZlY3Qge1xuICBfbmFtZSA9IEJlaGF2aW9yc01hcHBpbmcuVGFyZ2V0Q29sbGVjdGVkO1xuICBfZGF0YSA9IG51bGw7XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFRhcmdldENvbGxlY3RlZEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXc7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkgJiYgY2MuaXNWYWxpZCh0Lm5vZGVUb3BFZmZlY3RSb290KSkge1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucGxheUFuaW1hdGlvbih0Lm5vZGVUb3BFZmZlY3RSb290LCBlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgcGxheUFuaW1hdGlvbihlLCB0KSB7XG4gICAgdmFyIHIgPSBlLndpZHRoLFxuICAgICAgbyA9IEJhc2VTcGluZS5jcmVhdGUodC5kYXRhLnNwaW5lUGF0aCwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCB0LmRhdGEuYnVuZGxlTmFtZSk7XG4gICAgZS5hZGRDaGlsZChvLm5vZGUpO1xuICAgIG8ubm9kZS5zZXRQb3NpdGlvbigtciAvIDIsIDAsIDApO1xuICAgIHZhciBhID0gQmFzZVNwaW5lLmNyZWF0ZSh0LmRhdGEuc3BpbmVQYXRoLCBcImluXCIsIDEsIG51bGwsIHRydWUsIHQuZGF0YS5idW5kbGVOYW1lKTtcbiAgICBlLmFkZENoaWxkKGEubm9kZSk7XG4gICAgYS5ub2RlLnNldFBvc2l0aW9uKHIgLyAyLCAwLCAwKTtcbiAgICBhLm5vZGUuc2NhbGUgPSAtMTtcbiAgfVxufSJdfQ==