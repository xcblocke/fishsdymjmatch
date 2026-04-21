
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2UpdateComboBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a3f0x5cYhPRZRPlZlEvFnq', 'Tile2UpdateComboBehavior');
// Scripts/base/Tile2UpdateComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2ComboItem_1 = require("../items/Tile2ComboItem");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateComboBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateComboBehavior, _super);
    function Tile2UpdateComboBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateComboBehavior.prototype.start = function (e) {
        var o = this;
        Tile2UpdateComboBehavior._currentComboItem && cc.isValid(Tile2UpdateComboBehavior._currentComboItem.node) && this.stopAndRecycleCurrentCombo();
        Tile2UpdateComboBehavior._comboAnimationId++;
        var n = Tile2UpdateComboBehavior._comboAnimationId;
        Tile2ComboItem_1.default.create().then(function (i) {
            if (i)
                if (n === Tile2UpdateComboBehavior._comboAnimationId) {
                    Tile2UpdateComboBehavior._currentComboItem = i;
                    var r = o.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
                    i.node.parent = r;
                    i.node.active = true;
                    i.setComboNum(e.data.comboNum);
                    i.adjustSpinePositions();
                    i.node.scale = 1;
                    var a = o.getComboPosition();
                    a.x -= 0.5 * i.getLabelWidth();
                    a.y += o.getOffsetY();
                    i.node.position = a;
                    i.playComboAnimation(function () {
                        o.checkAndFinish(n, i);
                    });
                }
                else
                    i.node.destroy();
        });
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2UpdateComboBehavior.prototype.getComboPosition = function () {
        var e = this.context.gameView.getSlotBarNode(), t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY)), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y);
    };
    Tile2UpdateComboBehavior.prototype.getOffsetY = function () {
        return -90;
    };
    Tile2UpdateComboBehavior.prototype.stopAndRecycleCurrentCombo = function () {
        if (Tile2UpdateComboBehavior._currentComboItem && cc.isValid(Tile2UpdateComboBehavior._currentComboItem.node)) {
            Tile2UpdateComboBehavior._currentComboItem.stopAllAnimations();
            Tile2UpdateComboBehavior._currentComboItem.node.destroy();
            Tile2UpdateComboBehavior._currentComboItem = null;
        }
    };
    Tile2UpdateComboBehavior.prototype.checkAndFinish = function (e, o) {
        if (e === Tile2UpdateComboBehavior._comboAnimationId && Tile2UpdateComboBehavior._currentComboItem === o) {
            o.node.destroy();
            Tile2UpdateComboBehavior._currentComboItem = null;
        }
    };
    Tile2UpdateComboBehavior._currentComboItem = null;
    Tile2UpdateComboBehavior._comboAnimationId = 0;
    __decorate([
        mj.traitEvent("T2UpdComboBhv_getOfsY")
    ], Tile2UpdateComboBehavior.prototype, "getOffsetY", null);
    return Tile2UpdateComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateComboBehavior = Tile2UpdateComboBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLDBEQUFxRDtBQUNyRCwrREFBMEQ7QUFDMUQseURBQXdEO0FBQ3hEO0lBQThDLDRDQUFpQjtJQUEvRDs7SUFvREEsQ0FBQztJQWpEQyx3Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLHdCQUF3QixDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDL0ksd0JBQXdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCx3QkFBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdEMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxLQUFLLHdCQUF3QixDQUFDLGlCQUFpQixFQUFFO29CQUMzRCx3QkFBd0IsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyw2QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixDQUFDLENBQUMsa0JBQWtCLENBQUM7d0JBQ25CLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixDQUFDLENBQUMsQ0FBQztpQkFDSjs7b0JBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsbURBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQzVDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsNkJBQVcsQ0FBQyxHQUFHLENBQUMsRUFDekQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDMUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDZDQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDZEQUEwQixHQUExQjtRQUNFLElBQUksd0JBQXdCLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3Ryx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9ELHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxRCx3QkFBd0IsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBQ0QsaURBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLHdCQUF3QixDQUFDLGlCQUFpQixJQUFJLHdCQUF3QixDQUFDLGlCQUFpQixLQUFLLENBQUMsRUFBRTtZQUN4RyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLHdCQUF3QixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUNuRDtJQUNILENBQUM7SUFsRE0sMENBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLDBDQUFpQixHQUFHLENBQUMsQ0FBQztJQWtDN0I7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzhEQUd0QztJQWNILCtCQUFDO0NBcERELEFBb0RDLENBcEQ2QyxxQ0FBaUIsR0FvRDlEO0FBcERZLDREQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgVGlsZTJDb21ib0l0ZW0gZnJvbSAnLi4vaXRlbXMvVGlsZTJDb21ib0l0ZW0nO1xuaW1wb3J0IHsgRWZmZWN0TGF5ZXIgfSBmcm9tICcuLi9jb25zdGFudC9FZmZlY3RMYXllckVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMlVwZGF0ZUNvbWJvQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXRpYyBfY3VycmVudENvbWJvSXRlbSA9IG51bGw7XG4gIHN0YXRpYyBfY29tYm9BbmltYXRpb25JZCA9IDA7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9JdGVtICYmIGNjLmlzVmFsaWQoVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9JdGVtLm5vZGUpICYmIHRoaXMuc3RvcEFuZFJlY3ljbGVDdXJyZW50Q29tYm8oKTtcbiAgICBUaWxlMlVwZGF0ZUNvbWJvQmVoYXZpb3IuX2NvbWJvQW5pbWF0aW9uSWQrKztcbiAgICB2YXIgbiA9IFRpbGUyVXBkYXRlQ29tYm9CZWhhdmlvci5fY29tYm9BbmltYXRpb25JZDtcbiAgICBUaWxlMkNvbWJvSXRlbS5jcmVhdGUoKS50aGVuKGZ1bmN0aW9uIChpKSB7XG4gICAgICBpZiAoaSkgaWYgKG4gPT09IFRpbGUyVXBkYXRlQ29tYm9CZWhhdmlvci5fY29tYm9BbmltYXRpb25JZCkge1xuICAgICAgICBUaWxlMlVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib0l0ZW0gPSBpO1xuICAgICAgICB2YXIgciA9IG8uY29udGV4dC5nYW1lVmlldy5nZXRFZmZlY3RMYXllcihFZmZlY3RMYXllci5Ub3ApO1xuICAgICAgICBpLm5vZGUucGFyZW50ID0gcjtcbiAgICAgICAgaS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGkuc2V0Q29tYm9OdW0oZS5kYXRhLmNvbWJvTnVtKTtcbiAgICAgICAgaS5hZGp1c3RTcGluZVBvc2l0aW9ucygpO1xuICAgICAgICBpLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICB2YXIgYSA9IG8uZ2V0Q29tYm9Qb3NpdGlvbigpO1xuICAgICAgICBhLnggLT0gMC41ICogaS5nZXRMYWJlbFdpZHRoKCk7XG4gICAgICAgIGEueSArPSBvLmdldE9mZnNldFkoKTtcbiAgICAgICAgaS5ub2RlLnBvc2l0aW9uID0gYTtcbiAgICAgICAgaS5wbGF5Q29tYm9BbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG8uY2hlY2tBbmRGaW5pc2gobiwgaSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGkubm9kZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBnZXRDb21ib1Bvc2l0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdldFNsb3RCYXJOb2RlKCksXG4gICAgICB0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdldEVmZmVjdExheWVyKEVmZmVjdExheWVyLlRvcCksXG4gICAgICBvID0gZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGUueCwgZS55IC0gZS5oZWlnaHQgKiBlLmFuY2hvclkpKSxcbiAgICAgIG4gPSB0LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgIHJldHVybiBjYy52MyhuLngsIG4ueSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlVwZENvbWJvQmh2X2dldE9mc1lcIilcbiAgZ2V0T2Zmc2V0WSgpIHtcbiAgICByZXR1cm4gLTkwO1xuICB9XG4gIHN0b3BBbmRSZWN5Y2xlQ3VycmVudENvbWJvKCkge1xuICAgIGlmIChUaWxlMlVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib0l0ZW0gJiYgY2MuaXNWYWxpZChUaWxlMlVwZGF0ZUNvbWJvQmVoYXZpb3IuX2N1cnJlbnRDb21ib0l0ZW0ubm9kZSkpIHtcbiAgICAgIFRpbGUyVXBkYXRlQ29tYm9CZWhhdmlvci5fY3VycmVudENvbWJvSXRlbS5zdG9wQWxsQW5pbWF0aW9ucygpO1xuICAgICAgVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9JdGVtLm5vZGUuZGVzdHJveSgpO1xuICAgICAgVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9JdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgY2hlY2tBbmRGaW5pc2goZSwgbykge1xuICAgIGlmIChlID09PSBUaWxlMlVwZGF0ZUNvbWJvQmVoYXZpb3IuX2NvbWJvQW5pbWF0aW9uSWQgJiYgVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9JdGVtID09PSBvKSB7XG4gICAgICBvLm5vZGUuZGVzdHJveSgpO1xuICAgICAgVGlsZTJVcGRhdGVDb21ib0JlaGF2aW9yLl9jdXJyZW50Q29tYm9JdGVtID0gbnVsbDtcbiAgICB9XG4gIH1cbn0iXX0=