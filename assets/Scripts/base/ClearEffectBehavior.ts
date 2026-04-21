import { playSpineAnim } from '../framework/utils/CommonUtils';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { PoolName } from '../constant/enumRes';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ClearEffectBehavior extends GameBehaviorsBase {
  @mj.traitEvent("ClearEffBhv_start")
  start(e) {
    this.context.getTileNodeMap();
    if (e.data.tileId && e.data.lastTileId) {
      this.playCollisionEffect(e.data.tileId, e.data.lastTileId, false);
    } else {
      this.finish(EBehaviorEnum.Success);
    }
  }
  @mj.traitEvent("ClearEffBhv_getScale")
  getCardScale() {
    return 1;
  }
  @mj.traitEvent("ClearEffBhv_playCollision")
  playCollisionEffect(e, t) {
    var o = this,
      n = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0),
      i = this.isSpecialCard(e, t),
      r = i ? PoolName.CollisionSpecialEffect : PoolName.CollisionEffect,
      u = this.context.gameView.gameObjectPool.get(r);
    if (cc.isValid(u)) {
      var p = this.context.gameView.nodeTopEffectRoot;
      u.parent = p;
      var f = p.convertToNodeSpaceAR(n);
      u.position = cc.v3(f.x, f.y, 0);
      var d = i ? this.getSpAnimName(false, f) : this.getAnimName(false, f),
        h = u.getComponent(sp.Skeleton) || u.getComponentInChildren(sp.Skeleton);
      if (h) {
        mj.EventManager.emit(EGameEvent.Behavior_ClearBehaviorStart, this);
        h.node.scale = this.getCardScale() || 1;
        if (i) {
          this.changeSpSkeletonData(h, d);
        } else {
          this.changeSkeletonData(h, d);
        }
        d = this.checkSpine(h, d);
        this.attachCardFaces(h, e, t);
        playSpineAnim(h, 1, d, function () {
          o.context.gameView.gameObjectPool.push(r, u);
          mj.EventManager.emit(EGameEvent.Behavior_ClearBehaviorFinish, o);
          o.finish(EBehaviorEnum.Success);
        });
      }
    } else this.finish(EBehaviorEnum.Success);
  }
  checkSpine(e, t) {
    if (e) {
      if (null !== e.findAnimation(t)) return t;
      var o = this.getAvailableAnimations(e);
      if (o.length > 0) return -1 != o.indexOf("in_middle") ? "in_middle" : o[0];
    }
    return t;
  }
  getAvailableAnimations(e) {
    var t;
    if (!e || !e.skeletonData) return [];
    var o = [],
      n = null === (t = e._skeleton) || void 0 === t ? void 0 : t.data;
    if (n && n.animations) for (var i = 0; i < n.animations.length; i++) o.push(n.animations[i].name);
    return o;
  }
  @mj.traitEvent("ClearEffBhv_changeSkd")
  changeSkeletonData() {}
  @mj.traitEvent("ClearEffBhv_changeSpSkd")
  changeSpSkeletonData() {}
  @mj.traitEvent("ClearEffBhv_isSpCard")
  isSpecialCard() {
    return false;
  }
  @mj.traitEvent("ClearEffBhv_getAnimName")
  getAnimName(e) {
    return e ? "in_1" : "in";
  }
  @mj.traitEvent("ClearEffBhv_getSpAnimName")
  getSpAnimName(e) {
    return e ? "in_1" : "in";
  }
  @mj.traitEvent("ClearEffBhv_attCFace")
  attachCardFaces() {}
}