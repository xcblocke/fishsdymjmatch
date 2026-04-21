
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2PerfectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0dc9bhxU5Dmo6nZBEA5p2G', 'Tile2PerfectBehavior');
// Scripts/base/Tile2PerfectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2PerfectBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2PerfectBehavior = /** @class */ (function (_super) {
    __extends(Tile2PerfectBehavior, _super);
    function Tile2PerfectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2PerfectBehavior.prototype.start = function (e) {
        var t;
        if (null === (t = e.data) || void 0 === t ? void 0 : t.isClear) {
            this.removePlayingPerfect();
        }
        else {
            this.addPerfectEffect();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2PerfectBehavior.prototype.removePlayingPerfect = function () {
        var e, o = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (o && cc.isValid(o)) {
            var n = o.getChildByName(Tile2PerfectBehavior.PERFECT_NODE_NAME);
            n && cc.isValid(n) && n.destroy();
        }
    };
    Tile2PerfectBehavior.prototype.addPerfectEffect = function () {
        var e, o = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (o && cc.isValid(o)) {
            this.removePlayingPerfect();
            var n = BaseSpine_1.default.create("spine/tile2Perfect/gameplay_word_perfect", "in", 1, null, true);
            n.node.name = Tile2PerfectBehavior.PERFECT_NODE_NAME;
            n.node.parent = o;
            n.node.position = this.getPerfectPosition();
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Perfect);
        }
    };
    Tile2PerfectBehavior.prototype.getPerfectPosition = function () {
        var e = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), t = this.context.getLastCollisionWorldPos();
        if (t) {
            var o = e.convertToNodeSpaceAR(t);
            return cc.v3(o.x, o.y);
        }
        return cc.v3(0, 0, 0);
    };
    Tile2PerfectBehavior.PERFECT_NODE_NAME = "Tile2PerfectEffectNode";
    return Tile2PerfectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2PerfectBehavior = Tile2PerfectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJQZXJmZWN0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCx5REFBd0Q7QUFDeEQsMEVBQW9FO0FBQ3BFO0lBQTBDLHdDQUFpQjtJQUEzRDs7SUF3Q0EsQ0FBQztJQXRDQyxvQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDOUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxtREFBb0IsR0FBcEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyw2QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUFDRCwrQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyw2QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsMENBQTBDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7WUFDckQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBQ0QsaURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLDZCQUFXLENBQUMsR0FBRyxDQUFDLEVBQzNELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQXRDTSxzQ0FBaUIsR0FBRyx3QkFBd0IsQ0FBQztJQXVDdEQsMkJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q3lDLHFDQUFpQixHQXdDMUQ7QUF4Q1ksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVmZmVjdExheWVyIH0gZnJvbSAnLi4vY29uc3RhbnQvRWZmZWN0TGF5ZXJFbnVtJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgY2xhc3MgVGlsZTJQZXJmZWN0QmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXRpYyBQRVJGRUNUX05PREVfTkFNRSA9IFwiVGlsZTJQZXJmZWN0RWZmZWN0Tm9kZVwiO1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQ7XG4gICAgaWYgKG51bGwgPT09ICh0ID0gZS5kYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzQ2xlYXIpIHtcbiAgICAgIHRoaXMucmVtb3ZlUGxheWluZ1BlcmZlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRQZXJmZWN0RWZmZWN0KCk7XG4gICAgfVxuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgcmVtb3ZlUGxheWluZ1BlcmZlY3QoKSB7XG4gICAgdmFyIGUsXG4gICAgICBvID0gbnVsbCA9PT0gKGUgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0RWZmZWN0TGF5ZXIoRWZmZWN0TGF5ZXIuVG9wKTtcbiAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICB2YXIgbiA9IG8uZ2V0Q2hpbGRCeU5hbWUoVGlsZTJQZXJmZWN0QmVoYXZpb3IuUEVSRkVDVF9OT0RFX05BTUUpO1xuICAgICAgbiAmJiBjYy5pc1ZhbGlkKG4pICYmIG4uZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBhZGRQZXJmZWN0RWZmZWN0KCkge1xuICAgIHZhciBlLFxuICAgICAgbyA9IG51bGwgPT09IChlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldEVmZmVjdExheWVyKEVmZmVjdExheWVyLlRvcCk7XG4gICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgdGhpcy5yZW1vdmVQbGF5aW5nUGVyZmVjdCgpO1xuICAgICAgdmFyIG4gPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvdGlsZTJQZXJmZWN0L2dhbWVwbGF5X3dvcmRfcGVyZmVjdFwiLCBcImluXCIsIDEsIG51bGwsIHRydWUpO1xuICAgICAgbi5ub2RlLm5hbWUgPSBUaWxlMlBlcmZlY3RCZWhhdmlvci5QRVJGRUNUX05PREVfTkFNRTtcbiAgICAgIG4ubm9kZS5wYXJlbnQgPSBvO1xuICAgICAgbi5ub2RlLnBvc2l0aW9uID0gdGhpcy5nZXRQZXJmZWN0UG9zaXRpb24oKTtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRpbGUyUGVyZmVjdCk7XG4gICAgfVxuICB9XG4gIGdldFBlcmZlY3RQb3NpdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5nZXRFZmZlY3RMYXllcihFZmZlY3RMYXllci5Ub3ApLFxuICAgICAgdCA9IHRoaXMuY29udGV4dC5nZXRMYXN0Q29sbGlzaW9uV29ybGRQb3MoKTtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIG8gPSBlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgICAgcmV0dXJuIGNjLnYzKG8ueCwgby55KTtcbiAgICB9XG4gICAgcmV0dXJuIGNjLnYzKDAsIDAsIDApO1xuICB9XG59Il19