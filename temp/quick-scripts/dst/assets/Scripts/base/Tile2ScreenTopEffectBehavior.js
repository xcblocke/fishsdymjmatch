
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ScreenTopEffectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbeaa8A7IhAYq5Mp6cFHjCY', 'Tile2ScreenTopEffectBehavior');
// Scripts/base/Tile2ScreenTopEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScreenTopEffectBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ScreenTopEffectBehavior = /** @class */ (function (_super) {
    __extends(Tile2ScreenTopEffectBehavior, _super);
    function Tile2ScreenTopEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ScreenTopEffectBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        this.createSpineOnLayer("spine/tile2Combo/gamepaly_combo_fall", EffectLayerEnum_1.EffectLayer.Middle, "animation");
        this.createSpineOnLayer("spine/tile2Combo/gamepaly_combo_top", EffectLayerEnum_1.EffectLayer.Middle, "in");
    };
    Tile2ScreenTopEffectBehavior.prototype.createSpineOnLayer = function (e, t, o) {
        var n, i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.getEffectLayer(t);
        if (cc.isValid(i)) {
            var a = BaseSpine_1.default.create(e, o, 1, null, true);
            if (a && cc.isValid(a.node)) {
                a.node.parent = i;
                var l = i.height * (1 - i.anchorY);
                a.node.setPosition(cc.v3(0, l, 0));
                a.node.active = true;
            }
        }
    };
    return Tile2ScreenTopEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ScreenTopEffectBehavior = Tile2ScreenTopEffectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTY3JlZW5Ub3BFZmZlY3RCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxxRUFBb0U7QUFDcEUsK0RBQTBEO0FBQzFELHlEQUF3RDtBQUN4RDtJQUFrRCxnREFBaUI7SUFBbkU7O0lBbUJBLENBQUM7SUFsQkMsNENBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0NBQXNDLEVBQUUsNkJBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFDQUFxQyxFQUFFLDZCQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDRCx5REFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDSCxtQ0FBQztBQUFELENBbkJBLEFBbUJDLENBbkJpRCxxQ0FBaUIsR0FtQmxFO0FBbkJZLG9FQUE0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVmZmVjdExheWVyIH0gZnJvbSAnLi4vY29uc3RhbnQvRWZmZWN0TGF5ZXJFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJTY3JlZW5Ub3BFZmZlY3RCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB0aGlzLmNyZWF0ZVNwaW5lT25MYXllcihcInNwaW5lL3RpbGUyQ29tYm8vZ2FtZXBhbHlfY29tYm9fZmFsbFwiLCBFZmZlY3RMYXllci5NaWRkbGUsIFwiYW5pbWF0aW9uXCIpO1xuICAgIHRoaXMuY3JlYXRlU3BpbmVPbkxheWVyKFwic3BpbmUvdGlsZTJDb21iby9nYW1lcGFseV9jb21ib190b3BcIiwgRWZmZWN0TGF5ZXIuTWlkZGxlLCBcImluXCIpO1xuICB9XG4gIGNyZWF0ZVNwaW5lT25MYXllcihlLCB0LCBvKSB7XG4gICAgdmFyIG4sXG4gICAgICBpID0gbnVsbCA9PT0gKG4gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2V0RWZmZWN0TGF5ZXIodCk7XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciBhID0gQmFzZVNwaW5lLmNyZWF0ZShlLCBvLCAxLCBudWxsLCB0cnVlKTtcbiAgICAgIGlmIChhICYmIGNjLmlzVmFsaWQoYS5ub2RlKSkge1xuICAgICAgICBhLm5vZGUucGFyZW50ID0gaTtcbiAgICAgICAgdmFyIGwgPSBpLmhlaWdodCAqICgxIC0gaS5hbmNob3JZKTtcbiAgICAgICAgYS5ub2RlLnNldFBvc2l0aW9uKGNjLnYzKDAsIGwsIDApKTtcbiAgICAgICAgYS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19