
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ScreenEdgeEffectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8812fZchx9AnaU8mmm0VbNi', 'Tile2ScreenEdgeEffectBehavior');
// Scripts/base/Tile2ScreenEdgeEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScreenEdgeEffectBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2ScreenEdgeEffectItem_1 = require("../items/Tile2ScreenEdgeEffectItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var p = {
    5: 1,
    15: 2,
    30: 3
};
var Tile2ScreenEdgeEffectBehavior = /** @class */ (function (_super) {
    __extends(Tile2ScreenEdgeEffectBehavior, _super);
    function Tile2ScreenEdgeEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ScreenEdgeEffectBehavior.clearParticles = function (e) {
        if (cc.isValid(e)) {
            var t = e.getChildByName("__comboEdgeParticles__");
            t && cc.isValid(t) && t.destroy();
        }
    };
    Tile2ScreenEdgeEffectBehavior.prototype.isSlot4 = function () {
        return this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4;
    };
    Tile2ScreenEdgeEffectBehavior.prototype.start = function (e) {
        var o;
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        var n = null === (o = this.context.gameView) || void 0 === o ? void 0 : o.effectNode;
        if (cc.isValid(n))
            if (this.isSlot4())
                this.handleSlot4Effect(e, n);
            else if (e.data.isClear)
                Tile2ScreenEdgeEffectBehavior.clearParticles(n);
            else {
                var i = this.getStage(e.data.comboNum);
                i >= 4 && this.handleSlot4Effect(e, n);
                if (i && !(i >= 4)) {
                    Tile2ScreenEdgeEffectBehavior.clearParticles(n);
                    var r = cc.v2(-n.width / 2, n.height / 2), a = cc.v2(n.width / 2, n.height / 2);
                    e.data.skipBurst || this.createBurstSpines(n, i, r, a);
                    this.createParticleSpines(n, i, r, a);
                }
            }
    };
    Tile2ScreenEdgeEffectBehavior.prototype.getStage = function (e) {
        return p[e];
    };
    Tile2ScreenEdgeEffectBehavior.prototype.handleSlot4Effect = function (e, t) {
        e.data.isClear || this.createSlot4Item(t);
    };
    Tile2ScreenEdgeEffectBehavior.prototype.createSlot4Item = function (e) {
        Tile2ScreenEdgeEffectItem_1.default.create().then(function (t) {
            if (t && cc.isValid(e)) {
                t.node.parent = e;
                t.playAnimation(function () {
                    cc.isValid(t.node) && t.node.destroy();
                });
            }
        });
    };
    Tile2ScreenEdgeEffectBehavior.prototype.createBurstSpines = function (e, t, o, n) {
        var i = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_a", "in_" + t + "a", 1, null, true);
        i.node.parent = e;
        i.node.setPosition(o.x, o.y);
        var r = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_a", "in_" + t + "b", 1, null, true);
        r.node.parent = e;
        r.node.setPosition(n.x, n.y);
    };
    Tile2ScreenEdgeEffectBehavior.prototype.createParticleSpines = function (e, t, o, n) {
        var i = new cc.Node("__comboEdgeParticles__");
        i.parent = e;
        var r = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_b", "init_" + t + "a", -1, null, false);
        r.node.parent = i;
        r.node.setPosition(o.x, o.y);
        var l = BaseSpine_1.default.create("spine/tile3Combo/gameplay_combo_effect_b", "init_" + t + "b", -1, null, false);
        l.node.parent = i;
        l.node.setPosition(n.x, n.y);
    };
    __decorate([
        mj.traitEvent("T2ScreenEdgeBhv_isSlot4")
    ], Tile2ScreenEdgeEffectBehavior.prototype, "isSlot4", null);
    __decorate([
        mj.traitEvent("T2ScreenEdgeBhv_start")
    ], Tile2ScreenEdgeEffectBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("T2ScreenEdgeBhv_getStage")
    ], Tile2ScreenEdgeEffectBehavior.prototype, "getStage", null);
    return Tile2ScreenEdgeEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ScreenEdgeEffectBehavior = Tile2ScreenEdgeEffectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTY3JlZW5FZGdlRWZmZWN0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQscUVBQW9FO0FBQ3BFLDBFQUEwRTtBQUMxRSxnRkFBMkU7QUFDM0UseURBQXdEO0FBQ3hELElBQUksQ0FBQyxHQUFHO0lBQ04sQ0FBQyxFQUFFLENBQUM7SUFDSixFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0NBQ04sQ0FBQztBQUNGO0lBQW1ELGlEQUFpQjtJQUFwRTs7SUErREEsQ0FBQztJQTlEUSw0Q0FBYyxHQUFyQixVQUFzQixDQUFDO1FBQ3JCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbkQsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELCtDQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyw4QkFBYyxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDO0lBRUQsNkNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3JGLElBQUks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QUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs4REFnQnRDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO2lFQUd6QztJQWdDSCxvQ0FBQztDQS9ERCxBQStEQyxDQS9Ea0QscUNBQWlCLEdBK0RuRTtBQS9EWSxzRUFBNkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRpbGUyU2NyZWVuRWRnZUVmZmVjdEl0ZW0gZnJvbSAnLi4vaXRlbXMvVGlsZTJTY3JlZW5FZGdlRWZmZWN0SXRlbSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xudmFyIHAgPSB7XG4gIDU6IDEsXG4gIDE1OiAyLFxuICAzMDogM1xufTtcbmV4cG9ydCBjbGFzcyBUaWxlMlNjcmVlbkVkZ2VFZmZlY3RCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhdGljIGNsZWFyUGFydGljbGVzKGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgdmFyIHQgPSBlLmdldENoaWxkQnlOYW1lKFwiX19jb21ib0VkZ2VQYXJ0aWNsZXNfX1wiKTtcbiAgICAgIHQgJiYgY2MuaXNWYWxpZCh0KSAmJiB0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlNjcmVlbkVkZ2VCaHZfaXNTbG90NFwiKVxuICBpc1Nsb3Q0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGlsZTJTbG90VHlwZSgpID09PSBFVGlsZTJTbG90VHlwZS5TbG90NDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU2NyZWVuRWRnZUJodl9zdGFydFwiKVxuICBzdGFydChlKSB7XG4gICAgdmFyIG87XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB2YXIgbiA9IG51bGwgPT09IChvID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmVmZmVjdE5vZGU7XG4gICAgaWYgKGNjLmlzVmFsaWQobikpIGlmICh0aGlzLmlzU2xvdDQoKSkgdGhpcy5oYW5kbGVTbG90NEVmZmVjdChlLCBuKTtlbHNlIGlmIChlLmRhdGEuaXNDbGVhcikgVGlsZTJTY3JlZW5FZGdlRWZmZWN0QmVoYXZpb3IuY2xlYXJQYXJ0aWNsZXMobik7ZWxzZSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0U3RhZ2UoZS5kYXRhLmNvbWJvTnVtKTtcbiAgICAgIGkgPj0gNCAmJiB0aGlzLmhhbmRsZVNsb3Q0RWZmZWN0KGUsIG4pO1xuICAgICAgaWYgKGkgJiYgIShpID49IDQpKSB7XG4gICAgICAgIFRpbGUyU2NyZWVuRWRnZUVmZmVjdEJlaGF2aW9yLmNsZWFyUGFydGljbGVzKG4pO1xuICAgICAgICB2YXIgciA9IGNjLnYyKC1uLndpZHRoIC8gMiwgbi5oZWlnaHQgLyAyKSxcbiAgICAgICAgICBhID0gY2MudjIobi53aWR0aCAvIDIsIG4uaGVpZ2h0IC8gMik7XG4gICAgICAgIGUuZGF0YS5za2lwQnVyc3QgfHwgdGhpcy5jcmVhdGVCdXJzdFNwaW5lcyhuLCBpLCByLCBhKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZVNwaW5lcyhuLCBpLCByLCBhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlNjcmVlbkVkZ2VCaHZfZ2V0U3RhZ2VcIilcbiAgZ2V0U3RhZ2UoZSkge1xuICAgIHJldHVybiBwW2VdO1xuICB9XG4gIGhhbmRsZVNsb3Q0RWZmZWN0KGUsIHQpIHtcbiAgICBlLmRhdGEuaXNDbGVhciB8fCB0aGlzLmNyZWF0ZVNsb3Q0SXRlbSh0KTtcbiAgfVxuICBjcmVhdGVTbG90NEl0ZW0oZSkge1xuICAgIFRpbGUyU2NyZWVuRWRnZUVmZmVjdEl0ZW0uY3JlYXRlKCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHQgJiYgY2MuaXNWYWxpZChlKSkge1xuICAgICAgICB0Lm5vZGUucGFyZW50ID0gZTtcbiAgICAgICAgdC5wbGF5QW5pbWF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHQubm9kZSkgJiYgdC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlQnVyc3RTcGluZXMoZSwgdCwgbywgbikge1xuICAgIHZhciBpID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL3RpbGUzQ29tYm8vZ2FtZXBsYXlfY29tYm9fZWZmZWN0X2FcIiwgXCJpbl9cIiArIHQgKyBcImFcIiwgMSwgbnVsbCwgdHJ1ZSk7XG4gICAgaS5ub2RlLnBhcmVudCA9IGU7XG4gICAgaS5ub2RlLnNldFBvc2l0aW9uKG8ueCwgby55KTtcbiAgICB2YXIgciA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS90aWxlM0NvbWJvL2dhbWVwbGF5X2NvbWJvX2VmZmVjdF9hXCIsIFwiaW5fXCIgKyB0ICsgXCJiXCIsIDEsIG51bGwsIHRydWUpO1xuICAgIHIubm9kZS5wYXJlbnQgPSBlO1xuICAgIHIubm9kZS5zZXRQb3NpdGlvbihuLngsIG4ueSk7XG4gIH1cbiAgY3JlYXRlUGFydGljbGVTcGluZXMoZSwgdCwgbywgbikge1xuICAgIHZhciBpID0gbmV3IGNjLk5vZGUoXCJfX2NvbWJvRWRnZVBhcnRpY2xlc19fXCIpO1xuICAgIGkucGFyZW50ID0gZTtcbiAgICB2YXIgciA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS90aWxlM0NvbWJvL2dhbWVwbGF5X2NvbWJvX2VmZmVjdF9iXCIsIFwiaW5pdF9cIiArIHQgKyBcImFcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICByLm5vZGUucGFyZW50ID0gaTtcbiAgICByLm5vZGUuc2V0UG9zaXRpb24oby54LCBvLnkpO1xuICAgIHZhciBsID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL3RpbGUzQ29tYm8vZ2FtZXBsYXlfY29tYm9fZWZmZWN0X2JcIiwgXCJpbml0X1wiICsgdCArIFwiYlwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICAgIGwubm9kZS5wYXJlbnQgPSBpO1xuICAgIGwubm9kZS5zZXRQb3NpdGlvbihuLngsIG4ueSk7XG4gIH1cbn0iXX0=