
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ClearEffectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd47a4CAPrZPgZmaXx3zg4ne', 'ClearEffectBehavior');
// Scripts/base/ClearEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearEffectBehavior = void 0;
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClearEffectBehavior = /** @class */ (function (_super) {
    __extends(ClearEffectBehavior, _super);
    function ClearEffectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearEffectBehavior.prototype.start = function (e) {
        this.context.getTileNodeMap();
        if (e.data.tileId && e.data.lastTileId) {
            this.playCollisionEffect(e.data.tileId, e.data.lastTileId, false);
        }
        else {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    ClearEffectBehavior.prototype.getCardScale = function () {
        return 1;
    };
    ClearEffectBehavior.prototype.playCollisionEffect = function (e, t) {
        var o = this, n = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0), i = this.isSpecialCard(e, t), r = i ? enumRes_1.PoolName.CollisionSpecialEffect : enumRes_1.PoolName.CollisionEffect, u = this.context.gameView.gameObjectPool.get(r);
        if (cc.isValid(u)) {
            var p = this.context.gameView.nodeTopEffectRoot;
            u.parent = p;
            var f = p.convertToNodeSpaceAR(n);
            u.position = cc.v3(f.x, f.y, 0);
            var d = i ? this.getSpAnimName(false, f) : this.getAnimName(false, f), h = u.getComponent(sp.Skeleton) || u.getComponentInChildren(sp.Skeleton);
            if (h) {
                mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ClearBehaviorStart, this);
                h.node.scale = this.getCardScale() || 1;
                if (i) {
                    this.changeSpSkeletonData(h, d);
                }
                else {
                    this.changeSkeletonData(h, d);
                }
                d = this.checkSpine(h, d);
                this.attachCardFaces(h, e, t);
                CommonUtils_1.playSpineAnim(h, 1, d, function () {
                    o.context.gameView.gameObjectPool.push(r, u);
                    mj.EventManager.emit(GameEvent_1.EGameEvent.Behavior_ClearBehaviorFinish, o);
                    o.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
            }
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ClearEffectBehavior.prototype.checkSpine = function (e, t) {
        if (e) {
            if (null !== e.findAnimation(t))
                return t;
            var o = this.getAvailableAnimations(e);
            if (o.length > 0)
                return -1 != o.indexOf("in_middle") ? "in_middle" : o[0];
        }
        return t;
    };
    ClearEffectBehavior.prototype.getAvailableAnimations = function (e) {
        var t;
        if (!e || !e.skeletonData)
            return [];
        var o = [], n = null === (t = e._skeleton) || void 0 === t ? void 0 : t.data;
        if (n && n.animations)
            for (var i = 0; i < n.animations.length; i++)
                o.push(n.animations[i].name);
        return o;
    };
    ClearEffectBehavior.prototype.changeSkeletonData = function () { };
    ClearEffectBehavior.prototype.changeSpSkeletonData = function () { };
    ClearEffectBehavior.prototype.isSpecialCard = function () {
        return false;
    };
    ClearEffectBehavior.prototype.getAnimName = function (e) {
        return e ? "in_1" : "in";
    };
    ClearEffectBehavior.prototype.getSpAnimName = function (e) {
        return e ? "in_1" : "in";
    };
    ClearEffectBehavior.prototype.attachCardFaces = function () { };
    __decorate([
        mj.traitEvent("ClearEffBhv_start")
    ], ClearEffectBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_getScale")
    ], ClearEffectBehavior.prototype, "getCardScale", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_playCollision")
    ], ClearEffectBehavior.prototype, "playCollisionEffect", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_changeSkd")
    ], ClearEffectBehavior.prototype, "changeSkeletonData", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_changeSpSkd")
    ], ClearEffectBehavior.prototype, "changeSpSkeletonData", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_isSpCard")
    ], ClearEffectBehavior.prototype, "isSpecialCard", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_getAnimName")
    ], ClearEffectBehavior.prototype, "getAnimName", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_getSpAnimName")
    ], ClearEffectBehavior.prototype, "getSpAnimName", null);
    __decorate([
        mj.traitEvent("ClearEffBhv_attCFace")
    ], ClearEffectBehavior.prototype, "attachCardFaces", null);
    return ClearEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClearEffectBehavior = ClearEffectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2xlYXJFZmZlY3RCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0QscUVBQW9FO0FBQ3BFLCtDQUErQztBQUMvQyx5REFBd0Q7QUFDeEQ7SUFBeUMsdUNBQWlCO0lBQTFEOztJQWdGQSxDQUFDO0lBOUVDLG1DQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxpREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3RCxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLGtCQUFRLENBQUMsZUFBZSxFQUNsRSxDQUFDLEdBQUcs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QUFzQixDQUFDOzJEQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztrRUErQjFDO0lBa0JEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztpRUFDaEI7SUFFdkI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO21FQUNoQjtJQUV6QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7NERBR3JDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDOzBEQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQzs0REFHMUM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7OERBQ2xCO0lBQ3RCLDBCQUFDO0NBaEZELEFBZ0ZDLENBaEZ3QyxxQ0FBaUIsR0FnRnpEO0FBaEZZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXlTcGluZUFuaW0gfSBmcm9tICcuLi9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IFBvb2xOYW1lIH0gZnJvbSAnLi4vY29uc3RhbnQvZW51bVJlcyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIENsZWFyRWZmZWN0QmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xlYXJFZmZCaHZfc3RhcnRcIilcbiAgc3RhcnQoZSkge1xuICAgIHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIGlmIChlLmRhdGEudGlsZUlkICYmIGUuZGF0YS5sYXN0VGlsZUlkKSB7XG4gICAgICB0aGlzLnBsYXlDb2xsaXNpb25FZmZlY3QoZS5kYXRhLnRpbGVJZCwgZS5kYXRhLmxhc3RUaWxlSWQsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhckVmZkJodl9nZXRTY2FsZVwiKVxuICBnZXRDYXJkU2NhbGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhckVmZkJodl9wbGF5Q29sbGlzaW9uXCIpXG4gIHBsYXlDb2xsaXNpb25FZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcyxcbiAgICAgIG4gPSB0aGlzLmNvbnRleHQuZ2V0TGFzdENvbGxpc2lvbldvcmxkUG9zKCkgfHwgY2MudjMoMCwgMCwgMCksXG4gICAgICBpID0gdGhpcy5pc1NwZWNpYWxDYXJkKGUsIHQpLFxuICAgICAgciA9IGkgPyBQb29sTmFtZS5Db2xsaXNpb25TcGVjaWFsRWZmZWN0IDogUG9vbE5hbWUuQ29sbGlzaW9uRWZmZWN0LFxuICAgICAgdSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5nZXQocik7XG4gICAgaWYgKGNjLmlzVmFsaWQodSkpIHtcbiAgICAgIHZhciBwID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290O1xuICAgICAgdS5wYXJlbnQgPSBwO1xuICAgICAgdmFyIGYgPSBwLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgICAgdS5wb3NpdGlvbiA9IGNjLnYzKGYueCwgZi55LCAwKTtcbiAgICAgIHZhciBkID0gaSA/IHRoaXMuZ2V0U3BBbmltTmFtZShmYWxzZSwgZikgOiB0aGlzLmdldEFuaW1OYW1lKGZhbHNlLCBmKSxcbiAgICAgICAgaCA9IHUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSB8fCB1LmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgaWYgKGgpIHtcbiAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9DbGVhckJlaGF2aW9yU3RhcnQsIHRoaXMpO1xuICAgICAgICBoLm5vZGUuc2NhbGUgPSB0aGlzLmdldENhcmRTY2FsZSgpIHx8IDE7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VTcFNrZWxldG9uRGF0YShoLCBkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVNrZWxldG9uRGF0YShoLCBkKTtcbiAgICAgICAgfVxuICAgICAgICBkID0gdGhpcy5jaGVja1NwaW5lKGgsIGQpO1xuICAgICAgICB0aGlzLmF0dGFjaENhcmRGYWNlcyhoLCBlLCB0KTtcbiAgICAgICAgcGxheVNwaW5lQW5pbShoLCAxLCBkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgby5jb250ZXh0LmdhbWVWaWV3LmdhbWVPYmplY3RQb29sLnB1c2gociwgdSk7XG4gICAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5CZWhhdmlvcl9DbGVhckJlaGF2aW9yRmluaXNoLCBvKTtcbiAgICAgICAgICBvLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBjaGVja1NwaW5lKGUsIHQpIHtcbiAgICBpZiAoZSkge1xuICAgICAgaWYgKG51bGwgIT09IGUuZmluZEFuaW1hdGlvbih0KSkgcmV0dXJuIHQ7XG4gICAgICB2YXIgbyA9IHRoaXMuZ2V0QXZhaWxhYmxlQW5pbWF0aW9ucyhlKTtcbiAgICAgIGlmIChvLmxlbmd0aCA+IDApIHJldHVybiAtMSAhPSBvLmluZGV4T2YoXCJpbl9taWRkbGVcIikgPyBcImluX21pZGRsZVwiIDogb1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgZ2V0QXZhaWxhYmxlQW5pbWF0aW9ucyhlKSB7XG4gICAgdmFyIHQ7XG4gICAgaWYgKCFlIHx8ICFlLnNrZWxldG9uRGF0YSkgcmV0dXJuIFtdO1xuICAgIHZhciBvID0gW10sXG4gICAgICBuID0gbnVsbCA9PT0gKHQgPSBlLl9za2VsZXRvbikgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5kYXRhO1xuICAgIGlmIChuICYmIG4uYW5pbWF0aW9ucykgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIG8ucHVzaChuLmFuaW1hdGlvbnNbaV0ubmFtZSk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhckVmZkJodl9jaGFuZ2VTa2RcIilcbiAgY2hhbmdlU2tlbGV0b25EYXRhKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhckVmZkJodl9jaGFuZ2VTcFNrZFwiKVxuICBjaGFuZ2VTcFNrZWxldG9uRGF0YSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2xlYXJFZmZCaHZfaXNTcENhcmRcIilcbiAgaXNTcGVjaWFsQ2FyZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGVhckVmZkJodl9nZXRBbmltTmFtZVwiKVxuICBnZXRBbmltTmFtZShlKSB7XG4gICAgcmV0dXJuIGUgPyBcImluXzFcIiA6IFwiaW5cIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsZWFyRWZmQmh2X2dldFNwQW5pbU5hbWVcIilcbiAgZ2V0U3BBbmltTmFtZShlKSB7XG4gICAgcmV0dXJuIGUgPyBcImluXzFcIiA6IFwiaW5cIjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNsZWFyRWZmQmh2X2F0dENGYWNlXCIpXG4gIGF0dGFjaENhcmRGYWNlcygpIHt9XG59Il19