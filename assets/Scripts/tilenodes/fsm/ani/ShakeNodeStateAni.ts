import { NodeStateAniBase } from '../../../base/NodeStateAniBase';
export class ShakeNodeStateAni extends NodeStateAniBase {
  _duration = 0.05;
  _easing = "";
  _baseTileNode = null;
  constructor(t, o) {
    super(t, "shake");
    this._baseTileNode = o;
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._currentTween && this._currentTween.stop();
      var n = this.node.position.clone();
      this._currentTween = cc.tween(this._node).to(this._duration, {
        position: cc.v3(n.x + 5, n.y, n.z)
      }).to(this._duration, {
        position: cc.v3(n.x - 5, n.y, n.z)
      }).to(this._duration, {
        position: cc.v3(n.x + 5, n.y, n.z)
      }).to(this._duration, {
        position: cc.v3(n.x - 5, n.y, n.z)
      }).to(this._duration, {
        position: cc.v3(n.x, n.y, n.z)
      }).call(function () {
        o.onEnterEnd(t);
      }).start();
    } else this.onEnterEnd(t);
  }
  onExitStart(t) {
    super.onExitStart.call(this, t);
    this._currentTween && this._currentTween.stop();
    this.node.position = cc.v3(0, 0, 0);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    cc.isValid(this._node) && (this.node.position = cc.v3(0, 0, 0));
  }
  onExit(t) {
    super.onExit.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.node.position = cc.v3(0, 0, 0);
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
    this.node.position = cc.v3(0, 0, 0);
    if (this._onEnteredCallBack) {
      this._onEnteredCallBack();
      this._onEnteredCallBack = void 0;
    }
  }
}