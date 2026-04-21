import { NodeStateAniBase } from '../../base/NodeStateAniBase';
export class HintNodeStateAni extends NodeStateAniBase {
  _isShaking = false;
  _baseTileNode = null;
  _config = null;
  constructor(t, o, n) {
    super(t, "hint");
    this._baseTileNode = o;
    this._config = {
      enableShake: false !== (null == n ? void 0 : n.enableShake),
      enableScale: false !== (null == n ? void 0 : n.enableScale),
      scaleValue: (null == n ? void 0 : n.scaleValue) || 1.1,
      scaleDuration: (null == n ? void 0 : n.scaleDuration) || 0.2,
      direction: (null == n ? void 0 : n.direction) || 1
    };
  }
  updateConfig(e) {
    this._config = Object.assign(Object.assign({}, this._config), e);
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      t && this.updateConfig(t);
      this.stopAllAnimations();
      if (this._config.enableScale) this.playScaleAnimation(function () {
        o._config.enableShake && o.playShakeAnimation();
        o.onEnterEnd(t);
      });else {
        this._config.enableShake && this.playShakeAnimation();
        this.onEnterEnd(t);
      }
    } else this.onEnterEnd(t);
  }
  onExitStart(t) {
    super.onExitStart.call(this, t);
    this.stopAllAnimations();
    this._node.angle = 0;
    this._node.scale = 1;
    this.onExitEnd(t);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    if (cc.isValid(this._node)) {
      this._node.scale = this._config.enableScale ? this._config.scaleValue : 1;
      this._config.enableShake && this.playShakeAnimation();
    }
  }
  onExit(t) {
    super.onExit.call(this, t);
    this.stopAllAnimations();
    this._node.angle = 0;
    this._node.scale = 1;
  }
  playScaleAnimation(e) {
    this._scaleTween && this._scaleTween.stop();
    this._node.scale = 1;
    this._scaleTween = cc.tween(this._node).to(this._config.scaleDuration, {
      scale: this._config.scaleValue
    }, {
      easing: "cubicOut"
    }).call(function () {
      null == e || e();
    }).start();
  }
  playShakeAnimation() {
    var e = this;
    this._shakeTween && this._shakeTween.stop();
    this._isShaking = true;
    var t = [0, 2, -3, 4, -5, 4, -3, 2, 0].map(function (t) {
        return t * e._config.direction;
      }),
      o = [0, 0.07, 0.2, 0.33, 0.47, 0.6, 0.73, 0.87, 0.93];
    (function () {
      for (var n = cc.tween(e._node), i = 1; i < t.length; i++) {
        var r = o[i] - o[i - 1];
        n = n.to(r, {
          angle: t[i]
        }, {
          easing: "cubicInOut"
        });
      }
      n = n.delay(1);
      e._shakeTween = n.union().repeatForever().start();
    })();
  }
  pauseShake() {
    this._shakeTween && this._shakeTween.stop();
    this._isShaking = false;
    this._node.angle = 0;
  }
  resumeShake() {
    if ("entered" === this.behaviorState) {
      this._config.enableScale && (this._node.scale = this._config.scaleValue);
      this._config.enableShake && !this._isShaking && this.playShakeAnimation();
    }
  }
  stopAllAnimations() {
    if (this._scaleTween) {
      this._scaleTween.stop();
      this._scaleTween = void 0;
    }
    if (this._shakeTween) {
      this._shakeTween.stop();
      this._shakeTween = void 0;
    }
    this._isShaking = false;
  }
  reset() {
    super.reset.call(this);
    this.stopAllAnimations();
    this._node.angle = 0;
    this._node.scale = 1;
  }
  applyImmediate() {
    if (cc.isValid(this._node)) {
      this._node.scale = this._config.enableScale ? this._config.scaleValue : 1;
      this._config.enableShake && this.playShakeAnimation();
    }
  }
}