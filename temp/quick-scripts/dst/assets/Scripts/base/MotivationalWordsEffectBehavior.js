
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/MotivationalWordsEffectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1331a1WdE1E16VRBo4mJHkx', 'MotivationalWordsEffectBehavior');
// Scripts/base/MotivationalWordsEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var MotivationalWordsEffectBehavior = /** @class */ (function (_super) {
    __extends(MotivationalWordsEffectBehavior, _super);
    function MotivationalWordsEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsEffectBehavior.prototype.start = function (e) {
        var t = this.context.gameView.effectNode, o = this.context.gameView.gameObjectPool.get(this.getPoolName());
        if (o && cc.isValid(t)) {
            o.parent = t;
            o.setPosition(cc.v3(0, 0, 0));
            o.active = true;
            this.playAni(o, e);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MotivationalWordsEffectBehavior.prototype.playAni = function (e) {
        var t, o, n = this, i = null === (t = cc.find("leftNode/spin", e)) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton), r = null === (o = cc.find("rightNode/spin", e)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton);
        if (i && r) {
            var s = this.getEffectAnimationName();
            GameUtils_1.default.playSpine(i, s, false, function () {
                n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                n.context.gameView.gameObjectPool.push(n.getPoolName(), e);
            });
            GameUtils_1.default.playSpine(r, s, false, function () { });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MotivationalWordsEffectBehavior.prototype.getPoolName = function () {
        return enumRes_1.PoolName.MotivationalWordsEffect;
    };
    MotivationalWordsEffectBehavior.prototype.getEffectAnimationName = function () {
        return "in";
    };
    __decorate([
        mj.traitEvent("MotivWdsEff_playAni")
    ], MotivationalWordsEffectBehavior.prototype, "playAni", null);
    __decorate([
        mj.traitEvent("MotivWdsEff_poolName")
    ], MotivationalWordsEffectBehavior.prototype, "getPoolName", null);
    __decorate([
        mj.traitEvent("MotivWdsEff_getAni")
    ], MotivationalWordsEffectBehavior.prototype, "getEffectAnimationName", null);
    return MotivationalWordsEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = MotivationalWordsEffectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvTW90aXZhdGlvbmFsV29yZHNFZmZlY3RCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLDhEQUF5RDtBQUN6RCwrQ0FBK0M7QUFDL0MseURBQXdEO0FBQ3hEO0lBQTZELG1EQUFpQjtJQUE5RTs7SUFtQ0EsQ0FBQztJQWxDQywrQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFDdEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpREFBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFDckcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDdEMsbUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7WUFDSCxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ2xEOztZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQscURBQVcsR0FBWDtRQUNFLE9BQU8sa0JBQVEsQ0FBQyx1QkFBdUIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0VBQXNCLEdBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBdEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztrRUFlcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7c0VBR3JDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2lGQUduQztJQUNILHNDQUFDO0NBbkNELEFBbUNDLENBbkM0RCxxQ0FBaUIsR0FtQzdFO2tCQW5Db0IsK0JBQStCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgUG9vbE5hbWUgfSBmcm9tICcuLi9jb25zdGFudC9lbnVtUmVzJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZWZmZWN0Tm9kZSxcbiAgICAgIG8gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2FtZU9iamVjdFBvb2wuZ2V0KHRoaXMuZ2V0UG9vbE5hbWUoKSk7XG4gICAgaWYgKG8gJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgby5wYXJlbnQgPSB0O1xuICAgICAgby5zZXRQb3NpdGlvbihjYy52MygwLCAwLCAwKSk7XG4gICAgICBvLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlBbmkobywgZSk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3Rpdldkc0VmZl9wbGF5QW5pXCIpXG4gIHBsYXlBbmkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLFxuICAgICAgaSA9IG51bGwgPT09ICh0ID0gY2MuZmluZChcImxlZnROb2RlL3NwaW5cIiwgZSkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSxcbiAgICAgIHIgPSBudWxsID09PSAobyA9IGNjLmZpbmQoXCJyaWdodE5vZGUvc3BpblwiLCBlKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIGlmIChpICYmIHIpIHtcbiAgICAgIHZhciBzID0gdGhpcy5nZXRFZmZlY3RBbmltYXRpb25OYW1lKCk7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGksIHMsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4uZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIG4uY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5wdXNoKG4uZ2V0UG9vbE5hbWUoKSwgZSk7XG4gICAgICB9KTtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUociwgcywgZmFsc2UsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1vdGl2V2RzRWZmX3Bvb2xOYW1lXCIpXG4gIGdldFBvb2xOYW1lKCkge1xuICAgIHJldHVybiBQb29sTmFtZS5Nb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1vdGl2V2RzRWZmX2dldEFuaVwiKVxuICBnZXRFZmZlY3RBbmltYXRpb25OYW1lKCkge1xuICAgIHJldHVybiBcImluXCI7XG4gIH1cbn0iXX0=