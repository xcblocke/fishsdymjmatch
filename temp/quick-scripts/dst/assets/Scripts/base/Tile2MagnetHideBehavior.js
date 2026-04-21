
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2MagnetHideBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f1f4eU6fJAt75orJHy4m0c', 'Tile2MagnetHideBehavior');
// Scripts/base/Tile2MagnetHideBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetHideBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2MagnetItem_1 = require("../items/Tile2MagnetItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2MagnetHideBehavior = /** @class */ (function (_super) {
    __extends(Tile2MagnetHideBehavior, _super);
    function Tile2MagnetHideBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetHideBehavior.prototype.start = function (e) {
        try {
            var t = this.context.gameView, o = null == t ? void 0 : t.nodeTopEffectRoot;
            if (!o || !cc.isValid(o)) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var n = o.getChildByName("magnetNode");
            if (!n || !cc.isValid(n) || !n.active) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            if (e.data.isWin || e.data.isDead) {
                var i = n.getComponent(Tile2MagnetItem_1.default);
                null == i || i.forceExitWithoutAni();
            }
        }
        catch (e) { }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2MagnetHideBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2MagnetHideBehavior = Tile2MagnetHideBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJNYWduZXRIaWRlQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsNERBQXVEO0FBQ3ZELHlEQUF3RDtBQUN4RDtJQUE2QywyQ0FBaUI7SUFBOUQ7O0lBcUJBLENBQUM7SUFwQkMsdUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQzNCLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQy9DLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQ3RDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCw4QkFBQztBQUFELENBckJBLEFBcUJDLENBckI0QyxxQ0FBaUIsR0FxQjdEO0FBckJZLDBEQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgVGlsZTJNYWduZXRJdGVtIGZyb20gJy4uL2l0ZW1zL1RpbGUyTWFnbmV0SXRlbSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyTWFnbmV0SGlkZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LFxuICAgICAgICBvID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5ub2RlVG9wRWZmZWN0Um9vdDtcbiAgICAgIGlmICghbyB8fCAhY2MuaXNWYWxpZChvKSkge1xuICAgICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbiA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJtYWduZXROb2RlXCIpO1xuICAgICAgaWYgKCFuIHx8ICFjYy5pc1ZhbGlkKG4pIHx8ICFuLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5kYXRhLmlzV2luIHx8IGUuZGF0YS5pc0RlYWQpIHtcbiAgICAgICAgdmFyIGkgPSBuLmdldENvbXBvbmVudChUaWxlMk1hZ25ldEl0ZW0pO1xuICAgICAgICBudWxsID09IGkgfHwgaS5mb3JjZUV4aXRXaXRob3V0QW5pKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19