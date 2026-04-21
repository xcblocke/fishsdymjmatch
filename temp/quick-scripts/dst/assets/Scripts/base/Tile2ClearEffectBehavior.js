
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ClearEffectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05b29B8peZLyYqZdvboNyU0', 'Tile2ClearEffectBehavior');
// Scripts/base/Tile2ClearEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearEffectBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ClearEffectBehavior = /** @class */ (function (_super) {
    __extends(Tile2ClearEffectBehavior, _super);
    function Tile2ClearEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ClearEffectBehavior.prototype.start = function (e) {
        var t = e.data.tileIds;
        if (!t || t.length < 2)
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        else {
            var o = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0), n = this.context.gameView.nodeTopEffectRoot, i = new cc.Node("Tile2ClearEffect");
            i.parent = n;
            var r = n.convertToNodeSpaceAR(o);
            i.position = cc.v3(r.x, r.y, 0);
            this.playAni(i, e, r);
        }
    };
    Tile2ClearEffectBehavior.prototype.playAni = function (e, t, o) {
        var n = this, i = this.getAniCfg(t, o), r = i.path, s = i.bundle, c = i.animName;
        BaseSpine_1.default.refreshWithNode(e, r, s).setAnimation(c, 1, function () {
            cc.isValid(e) && e.destroy();
            n.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    Tile2ClearEffectBehavior.prototype.getAniCfg = function () {
        return {
            path: "spine/clear/gameplay_elimination_a",
            animName: "in"
        };
    };
    __decorate([
        mj.traitEvent("T2ClearEffBhv_playAni")
    ], Tile2ClearEffectBehavior.prototype, "playAni", null);
    __decorate([
        mj.traitEvent("T2ClearEffBhv_getAniCfg")
    ], Tile2ClearEffectBehavior.prototype, "getAniCfg", null);
    return Tile2ClearEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ClearEffectBehavior = Tile2ClearEffectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJDbGVhckVmZmVjdEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBOEMsNENBQWlCO0lBQS9EOztJQWdDQSxDQUFDO0lBL0JDLHdDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBSztZQUM5RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQzNDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCwwQ0FBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakIsbUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwRCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQVMsR0FBVDtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsb0NBQW9DO1lBQzFDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFqQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzJEQVd0QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzs2REFNeEM7SUFDSCwrQkFBQztDQWhDRCxBQWdDQyxDQWhDNkMscUNBQWlCLEdBZ0M5RDtBQWhDWSw0REFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyQ2xlYXJFZmZlY3RCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gZS5kYXRhLnRpbGVJZHM7XG4gICAgaWYgKCF0IHx8IHQubGVuZ3RoIDwgMikgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtlbHNlIHtcbiAgICAgIHZhciBvID0gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpIHx8IGNjLnYzKDAsIDAsIDApLFxuICAgICAgICBuID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290LFxuICAgICAgICBpID0gbmV3IGNjLk5vZGUoXCJUaWxlMkNsZWFyRWZmZWN0XCIpO1xuICAgICAgaS5wYXJlbnQgPSBuO1xuICAgICAgdmFyIHIgPSBuLmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgaS5wb3NpdGlvbiA9IGNjLnYzKHIueCwgci55LCAwKTtcbiAgICAgIHRoaXMucGxheUFuaShpLCBlLCByKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkNsZWFyRWZmQmh2X3BsYXlBbmlcIilcbiAgcGxheUFuaShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgaSA9IHRoaXMuZ2V0QW5pQ2ZnKHQsIG8pLFxuICAgICAgciA9IGkucGF0aCxcbiAgICAgIHMgPSBpLmJ1bmRsZSxcbiAgICAgIGMgPSBpLmFuaW1OYW1lO1xuICAgIEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUoZSwgciwgcykuc2V0QW5pbWF0aW9uKGMsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoZSkgJiYgZS5kZXN0cm95KCk7XG4gICAgICBuLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJDbGVhckVmZkJodl9nZXRBbmlDZmdcIilcbiAgZ2V0QW5pQ2ZnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBcInNwaW5lL2NsZWFyL2dhbWVwbGF5X2VsaW1pbmF0aW9uX2FcIixcbiAgICAgIGFuaW1OYW1lOiBcImluXCJcbiAgICB9O1xuICB9XG59Il19