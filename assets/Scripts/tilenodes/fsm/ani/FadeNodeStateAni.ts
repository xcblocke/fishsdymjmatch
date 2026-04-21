import { NodeStateAniBase } from '../../../base/NodeStateAniBase';
export class FadeNodeStateAni extends NodeStateAniBase {
  _duration = 0.2;
  _easing = "";
  _baseTileNode = null;
  constructor(t, o) {
    super(t, "fade");
    this._baseTileNode = o;
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._currentTween && this._currentTween.stop();
      this._currentTween = cc.tween(this._node).to(this._duration, {
        opacity: 255
      }).call(function () {
        o.onEnterEnd(t);
      }).start();
    } else this.onEnterEnd(t);
  }
  onExitStart(t) {
    var o = this;
    super.onExitStart.call(this, t);
    this._currentTween && this._currentTween.stop();
    this._currentTween = cc.tween(this._node).to(this._duration, {
      opacity: 0
    }).call(function () {
      o.onExitEnd(t);
    }).start();
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    cc.isValid(this._node) && (this.node.opacity = 255);
  }
  onExit(t) {
    super.onExit.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.node.opacity = 0;
  }
  applyImmediate() {
    if (cc.isValid(this._node) && this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
  }
  reset() {
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.node.opacity = 255;
    if (this._onEnteredCallBack) {
      this._onEnteredCallBack();
      this._onEnteredCallBack = void 0;
    }
  }
}