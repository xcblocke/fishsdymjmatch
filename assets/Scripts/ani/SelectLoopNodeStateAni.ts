import { NodeStateAniBase } from '../base/NodeStateAniBase';
export class SelectLoopNodeStateAni extends NodeStateAniBase {
  _isLooping = false;
  _originalY = 0;
  _moveUpOffset = 8;
  _upDuration = 0.66;
  _downDuration = 0.66;
  _baseTileNode = null;
  constructor(t, o) {
    super(t, "selectLoop");
    this._baseTileNode = o;
  }
  configure(e) {
    if (e) {
      void 0 !== e.moveUpOffset && (this._moveUpOffset = e.moveUpOffset);
      void 0 !== e.upDuration && (this._upDuration = e.upDuration);
      void 0 !== e.downDuration && (this._downDuration = e.downDuration);
    }
  }
  onEnterStart(t) {
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._currentTween && this._currentTween.stop();
      this._originalY = this._node.y;
      this._isLooping = true;
      t && "object" == typeof t && this.configure(t);
      this.playLoopAnimation();
      this.onEnterEnd(t);
    } else this.onEnterEnd(t);
  }
  playLoopAnimation() {
    var e = this;
    if (cc.isValid(this._node) && this._isLooping) {
      var t = this._originalY + this._moveUpOffset;
      this._currentTween = cc.tween(this._node).to(this._upDuration, {
        y: t
      }, {
        easing: "sineInOut"
      }).to(this._downDuration, {
        y: this._originalY
      }, {
        easing: "sineInOut"
      }).call(function () {
        e._isLooping && e.playLoopAnimation();
      }).start();
    }
  }
  onExitStart(t) {
    super.onExitStart.call(this, t);
    this._isLooping = false;
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    if (cc.isValid(this._node)) {
      this._node.y = this._originalY;
      this.onExitEnd(t);
    } else this.onExitEnd(t);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    if (cc.isValid(this._node)) {
      this._originalY = this._node.y;
      this._isLooping = true;
      this.playLoopAnimation();
    }
  }
  onExit(t) {
    super.onExit.call(this, t);
    this._isLooping = false;
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = null;
    }
    cc.isValid(this._node) && (this._node.y = this._originalY);
  }
  applyImmediate() {
    if (cc.isValid(this._node)) {
      this._isLooping = false;
      if (this._currentTween) {
        this._currentTween.stop();
        this._currentTween = void 0;
      }
      this._node.y = this._originalY;
    }
  }
  isLooping() {
    return this._isLooping;
  }
}