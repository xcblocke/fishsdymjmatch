import { AniTimeScale } from '../framework/utils/CommonUtils';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { PoolName } from '../constant/enumRes';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ScoreFloatBehavior extends GameBehaviorsBase {
  _trailParticleNode = null;
  start(e) {
    var t = this,
      o = e.data.addScore,
      n = e.data.isCombo,
      i = this.context.getTileNodeMap().get(e.data.tileId);
    if (i || e.data.size) {
      var r = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0);
      if (e.data.size) {
        this._tileNodeSize = e.data.size;
      } else {
        this._tileNodeSize = i.info.tileObject.getContentSize();
      }
      var a = this.context.gameView.nodeTopEffectRoot,
        c = n ? PoolName.ScoreFloatCombo : PoolName.ScoreFloatNormal,
        u = this.context.gameView.gameObjectPool.get(c);
      if (u) {
        u.active = true;
        u.parent = a;
        var p = a.convertToNodeSpaceAR(r);
        u.position = cc.v3(p.x, p.y + 180, 0);
        var f = u.getChildByName("labelScore").getComponent(cc.Label);
        f && (f.string = "+" + o);
        u.scale = 0;
        var d = this.stayTime(),
          h = this.getScale();
        cc.tween(u).to(0.2, {
          scale: h.inScale
        }, {
          easing: "sineIn"
        }).to(0.1, {
          scale: h.outScale
        }, {
          easing: "sineOut"
        }).delay(d).call(function () {
          if (cc.isValid(u)) {
            t.startFlightAnimation(u, c, n);
          } else {
            t.finish(EBehaviorEnum.Success);
          }
        }).start();
      } else this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("ScrFloatBhv_stayTime")
  stayTime() {
    return 0;
  }
  @mj.traitEvent("ScrFloatBhv_getScale")
  getScale() {
    return {
      inScale: 1.1,
      outScale: 1
    };
  }
  startFlightAnimation(e, t, o = false) {
    var n = this;
    if (cc.isValid(e)) {
      var i = this.getTopScorePosition();
      if (i) {
        var r = e.position,
          a = e.parent.convertToNodeSpaceAR(i),
          s = this.calculateDistance(r, a),
          c = this.calculateFlightTime(s);
        cc.tween(e).parallel(cc.tween(e).to(c, {
          position: a
        }, {
          easing: "sineInOut"
        }), cc.tween(e).to(c, {
          scale: 0
        }, {
          easing: "linear"
        })).call(function () {
          n.context.gameView.gameObjectPool.push(t, e);
          n.finish(EBehaviorEnum.Success);
        }).start();
        if (o) {
          this.createTrailParticle(e);
          if (this._trailParticleNode) {
            var u = this.calculateTrailTargetPosition(r, a, 0),
              p = this.calculateDistance(r, u),
              f = this.calculateFlightTime(p);
            cc.tween(this._trailParticleNode).to(f, {
              position: u
            }, {
              easing: "sineInOut"
            }).call(function () {
              n.stopTrailParticle();
            }).delay(0.25).call(function () {
              n.cleanupTrailParticle();
            }).start();
          }
        }
      } else {
        this.context.gameView.gameObjectPool.push(t, e);
        this.finish(EBehaviorEnum.Success);
      }
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("ScrFloatBhv_getTopPos")
  getTopScorePosition() {
    try {
      var e = this.context.gameView.scoreItemNode;
      if (!e || !cc.isValid(e)) return null;
      var t = e.convertToWorldSpaceAR(cc.v2(0, 0));
      return cc.v3(t.x, t.y, 0);
    } catch (e) {
      return null;
    }
  }
  calculateDistance(e, t) {
    var o = t.x - e.x,
      n = t.y - e.y;
    return Math.sqrt(o * o + n * n);
  }
  calculateFlightTime(e) {
    var t = this._tileNodeSize.height,
      o = Math.ceil(e / t);
    return Math.max(0.1, Math.min(0.5, 0.1 + 0.1 * (o - 1)));
  }
  createTrailParticle(e) {
    try {
      this._trailParticleNode = this.context.gameView.gameObjectPool.get(PoolName.ScoreFlyTrail);
      if (!this._trailParticleNode) return;
      this._trailParticleNode.active = true;
      this._trailParticleNode.parent = e.parent;
      this._trailParticleNode.position = e.position;
      this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
        e.resetSystem();
        e.speed *= AniTimeScale.get();
      });
    } catch (e) {}
  }
  calculateTrailTargetPosition(e, t, o = 60) {
    if (!e || !t) return cc.v3((null == t ? void 0 : t.x) || 0, ((null == t ? void 0 : t.y) || 0) - o, 0);
    var n = cc.v3(t.x - e.x, t.y - e.y, 0);
    if (Math.sqrt(n.x * n.x + n.y * n.y) < 0.001) return cc.v3(t.x, t.y - o, 0);
    Math.atan2(n.y, n.x);
    var i = 0;
    i = Math.abs(n.y) > 0.001 ? -(i = n.x / n.y * o) : 0;
    i = Math.max(-50, Math.min(50, i));
    return cc.v3(t.x + i, t.y - o, 0);
  }
  stopTrailParticle() {
    if (this._trailParticleNode && cc.isValid(this._trailParticleNode)) try {
      this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
        e.stopSystem();
      });
    } catch (e) {}
  }
  cleanupTrailParticle() {
    if (this._trailParticleNode && cc.isValid(this._trailParticleNode)) try {
      this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
        e.stopSystem();
      });
      this.context.gameView.gameObjectPool.push(PoolName.ScoreFlyTrail, this._trailParticleNode);
      this._trailParticleNode = null;
    } catch (e) {}
  }
}