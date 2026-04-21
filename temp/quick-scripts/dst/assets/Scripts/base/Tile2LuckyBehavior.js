
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2LuckyBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5663jxDSNHoK/2JSVIExuK', 'Tile2LuckyBehavior');
// Scripts/base/Tile2LuckyBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2LuckyBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2LuckyBehavior = /** @class */ (function (_super) {
    __extends(Tile2LuckyBehavior, _super);
    function Tile2LuckyBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2LuckyBehavior.prototype.start = function (e) {
        this.addLuckyEffect(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2LuckyBehavior.prototype.addLuckyEffect = function () {
        var e, t = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (t && cc.isValid(t)) {
            var o = BaseSpine_1.default.create("spine/tile2Lucky/gameplay_word_lucky", "in", 1, null, true);
            o.node.parent = t;
            o.node.position = this.getSlotBarBottomPosition();
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Lucky);
        }
    };
    Tile2LuckyBehavior.prototype.getSlotBarBottomPosition = function () {
        var e = this.context.gameView.getSlotBarNode(), t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY + this.getOffsetY())), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y);
    };
    Tile2LuckyBehavior.prototype.getOffsetY = function () {
        return -60;
    };
    return Tile2LuckyBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2LuckyBehavior = Tile2LuckyBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJMdWNreUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RCwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELDBFQUFvRTtBQUNwRTtJQUF3QyxzQ0FBaUI7SUFBekQ7O0lBeUJBLENBQUM7SUF4QkMsa0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsMkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLDZCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0RixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFDRCxxREFBd0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsRUFDNUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyw2QkFBVyxDQUFDLEdBQUcsQ0FBQyxFQUN6RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFDOUYsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELHVDQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QnVDLHFDQUFpQixHQXlCeEQ7QUF6QlksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgeyBFZmZlY3RMYXllciB9IGZyb20gJy4uL2NvbnN0YW50L0VmZmVjdExheWVyRW51bSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgY2xhc3MgVGlsZTJMdWNreUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdGhpcy5hZGRMdWNreUVmZmVjdChlKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIGFkZEx1Y2t5RWZmZWN0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IG51bGwgPT09IChlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldEVmZmVjdExheWVyKEVmZmVjdExheWVyLlRvcCk7XG4gICAgaWYgKHQgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIG8gPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvdGlsZTJMdWNreS9nYW1lcGxheV93b3JkX2x1Y2t5XCIsIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSk7XG4gICAgICBvLm5vZGUucGFyZW50ID0gdDtcbiAgICAgIG8ubm9kZS5wb3NpdGlvbiA9IHRoaXMuZ2V0U2xvdEJhckJvdHRvbVBvc2l0aW9uKCk7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5UaWxlMkx1Y2t5KTtcbiAgICB9XG4gIH1cbiAgZ2V0U2xvdEJhckJvdHRvbVBvc2l0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdldFNsb3RCYXJOb2RlKCksXG4gICAgICB0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdldEVmZmVjdExheWVyKEVmZmVjdExheWVyLlRvcCksXG4gICAgICBvID0gZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGUueCwgZS55IC0gZS5oZWlnaHQgKiBlLmFuY2hvclkgKyB0aGlzLmdldE9mZnNldFkoKSkpLFxuICAgICAgbiA9IHQuY29udmVydFRvTm9kZVNwYWNlQVIobyk7XG4gICAgcmV0dXJuIGNjLnYzKG4ueCwgbi55KTtcbiAgfVxuICBnZXRPZmZzZXRZKCkge1xuICAgIHJldHVybiAtNjA7XG4gIH1cbn0iXX0=