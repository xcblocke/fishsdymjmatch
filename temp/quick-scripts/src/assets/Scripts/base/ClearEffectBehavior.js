"use strict";
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