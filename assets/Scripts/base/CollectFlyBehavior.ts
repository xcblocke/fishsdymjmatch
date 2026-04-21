import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { AniTimeScale } from '../framework/utils/CommonUtils';
import { PoolName } from '../constant/enumRes';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { ETileType } from '../simulator/constant/TileTypeEnum';
export class CollectFlyBehavior extends GameBehaviorsBase {
  _timeout = 2000;
  _trailParticleNode = null;
  start(e) {
    var t = this;
    try {
      var o = e.data;
      if (!o.collectKey) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      var n = this.context.getLastCollisionWorldPos();
      if (!n) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      var i = this.context.getCollectTargetPosition(o.collectKey);
      if (!i) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      this.playFlyAudio(e.data.tileType);
      var a = cc.v3(n.x, n.y, 0),
        l = i,
        c = o.particlePoolName || PoolName.ScoreFlyTrail,
        u = void 0 !== o.trailOffsetY ? o.trailOffsetY : 0;
      this.createTrailParticle(a, c);
      if (!this._trailParticleNode) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      var p = this.calculateTrailTargetPosition(a, l, u),
        f = o.flightTime;
      if (!f || f <= 0) {
        var d = this.calculateDistance(a, p);
        f = this.calculateFlightTime(d);
      }
      var h = this.context.gameView.effectNode.convertToNodeSpaceAR(p);
      cc.tween(this._trailParticleNode).to(f, {
        position: h
      }, {
        easing: "sineInOut"
      }).call(function () {
        t.stopTrailParticle();
      }).call(function () {
        t.cleanupTrailParticle();
        t.finish(EBehaviorEnum.Success);
      }).start();
    } catch (e) {
      this.cleanupTrailParticle();
      this.fail("收集飞行效果执行失败");
    }
  }
  playFlyAudio(e) {
    var t = 0;
    switch (e) {
      case ETileType.RollCard:
        t = EAudioID.Targetfly3;
        break;
      case ETileType.Yoga:
        break;
      case ETileType.ColorCard:
      default:
        t = EAudioID.Targetfly3;
    }
    t && mj.audioManager.playEffect(t);
  }
  createTrailParticle(e, t) {
    try {
      this._trailParticleNode = this.context.gameView.gameObjectPool.get(PoolName[t]);
      if (!this._trailParticleNode) return;
      this._trailParticleNode.active = true;
      this._trailParticleNode.parent = this.context.gameView.effectNode;
      this._trailParticleNode.position = this.context.gameView.effectNode.convertToNodeSpaceAR(e);
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
    var i = 0;
    Math.abs(n.y) > 0.001 && (i = -(i = n.x / n.y * o));
    i = Math.max(-50, Math.min(50, i));
    return cc.v3(t.x + i, t.y - o, 0);
  }
  calculateDistance(e, t) {
    var o = t.x - e.x,
      n = t.y - e.y;
    return Math.sqrt(o * o + n * n);
  }
  calculateFlightTime(e) {
    var t = e / 800;
    return Math.max(0.1, Math.min(0.8, t));
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
      var e = PoolName.ScoreFlyTrail;
      this.context.gameView.gameObjectPool.push(e, this._trailParticleNode);
      this._trailParticleNode = null;
    } catch (e) {}
  }
  onAbort() {
    this.cleanupTrailParticle();
    super.onAbort.call(this);
  }
}