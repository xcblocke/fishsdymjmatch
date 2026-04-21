import { NodeStateAniBase } from '../base/NodeStateAniBase';
export class DropNodeStateAni extends NodeStateAniBase {
  _baseTileNode = null;
  constructor(t, o) {
    super(t, "drop");
    this._baseTileNode = o;
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._currentTween && this._currentTween.stop();
      var n = this._baseTileNode.tileObject.getPosition();
      this._currentTween = cc.tween(this._node).to(0.56, {
        position: n
      }, {
        easing: "backOut"
      }).call(function () {
        o.onEnterEnd(t);
        o._currentTween = void 0;
      }).start();
    } else this.onEnterEnd(t);
  }
  onExitStart(t) {
    super.onExitStart.call(this, t);
    this._currentTween && this._currentTween.stop();
    this.onExitEnd(t);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    var o = this._baseTileNode.tileObject.getPosition();
    this._node.position = o;
  }
  onExit(t) {
    super.onExit.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    var o = this._baseTileNode.tileObject.getPosition();
    this._node.position = o;
  }
  applyImmediate() {
    if (cc.isValid(this._node) && this._currentTween) {
      if (this._currentTween) {
        this._currentTween.stop();
        this._currentTween = void 0;
      }
      var e = this._baseTileNode.tileObject.getPosition();
      this._node.position = e;
      this.onExitEnd();
      this._onEnteredCallBack = null;
    }
  }
}