import { NodeAnimator } from '../../animator/NodeAnimator';
import { CrossLayerEnterStrategy } from '../../strategy/CrossLayerEnterStrategy';
import { CenterRadialEnterStrategy } from '../../strategy/CenterRadialEnterStrategy';
import { TopDropEnterStrategy } from '../../strategy/TopDropEnterStrategy';
import { RowByRowEnterStrategy } from '../../strategy/RowByRowEnterStrategy';
import { TopMaskEnterStrategy } from '../../strategy/TopMaskEnterStrategy';
export class EnterAnimationManager {
  strategies = new Map();
  currentStrategyName = "CrossLayerEnter";
  isPlaying = false;
  static instance = null;
  constructor() {
    NodeAnimator.init();
    this.registerStrategy(new CenterRadialEnterStrategy());
    this.registerStrategy(new CrossLayerEnterStrategy());
    this.registerStrategy(new TopDropEnterStrategy());
    this.registerStrategy(new RowByRowEnterStrategy());
    this.registerStrategy(new TopMaskEnterStrategy());
  }
  static getInstance() {
    this.instance || (this.instance = new EnterAnimationManager());
    return this.instance;
  }
  registerStrategy(e) {
    var t = e.getName();
    this.strategies.has(t);
    this.strategies.set(t, e);
  }
  setStrategy(e) {
    this.strategies.has(e) && (this.currentStrategyName = e);
  }
  getCurrentStrategyName() {
    return this.currentStrategyName;
  }
  isAnimationPlaying() {
    return this.isPlaying;
  }
  play(e) {
    var t,
      o,
      i,
      r,
      a,
      l,
      s,
      c = this;
    if (this.isPlaying) null === (o = null === (t = e.callbacks) || void 0 === t ? void 0 : t.onComplete) || void 0 === o || o.call(t);else {
      var u = e.context,
        p = e.timerComponent,
        f = e.callbacks,
        d = this.currentStrategyName,
        h = this.strategies.get(d);
      if (h) {
        this.isPlaying = true;
        try {
          var y = h.generateAnimationConfigs(u);
          if (!y || 0 === y.length) {
            this.isPlaying = false;
            null === (r = null == f ? void 0 : f.onStart) || void 0 === r || r.call(f);
            null === (a = null == f ? void 0 : f.onComplete) || void 0 === a || a.call(f);
            return;
          }
          null === (l = null == f ? void 0 : f.onStart) || void 0 === l || l.call(f);
          y.forEach(function (e) {
            NodeAnimator.execute(e);
          });
          var m = h.getTotalDuration();
          p.doOnce(m, function () {
            var e;
            c.isPlaying = false;
            NodeAnimator.clearAnimatingNodes();
            null === (e = null == f ? void 0 : f.onComplete) || void 0 === e || e.call(f);
          });
        } catch (e) {
          this.isPlaying = false;
          console.error("[EnterAnimationManager] 播放动画时发生错误:", e);
          null === (s = null == f ? void 0 : f.onComplete) || void 0 === s || s.call(f);
        }
      } else null === (i = null == f ? void 0 : f.onComplete) || void 0 === i || i.call(f);
    }
  }
  stop() {
    if (this.isPlaying) {
      this.isPlaying = false;
      NodeAnimator.stopAllAnimations();
    }
  }
  getAvailableStrategies() {
    return Array.from(this.strategies.keys());
  }
}