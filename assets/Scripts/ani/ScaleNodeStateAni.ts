import { NodeStateAniBase } from '../base/NodeStateAniBase';
export class ScaleNodeStateAni extends NodeStateAniBase {
  _duration = 0.1;
  _easing = "";
  _baseTileNode = null;
  constructor(t, o) {
    super(t, "scale");
    this._baseTileNode = o;
  }
  @mj.traitEvent("ScaleStateAni_duration")
  getDuration() {
    return this._duration;
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._currentTween && this._currentTween.stop();
      var n = this._baseTileNode.getSelectedScale(),
        i = {
          scale: n
        };
      this._currentTween = cc.tween(this._node).to(this.getDuration(), i, this._easing ? {
        easing: this._easing
      } : {}).call(function () {
        o.onEnterEnd(n);
      }).start();
    }
  }
  onExitStart(t) {
    var o = this;
    super.onExitStart.call(this, t);
    this._currentTween && this._currentTween.stop();
    this._currentTween = cc.tween(this._node).to(this.getDuration(), {
      scale: 1
    }, this._easing ? {
      easing: this._easing
    } : {}).call(function () {
      o.onExitEnd(t);
    }).start();
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    cc.isValid(this._node) && (this._node.scale = this._baseTileNode.getSelectedScale());
  }
  onExit(t) {
    super.onExit.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    this.node.scale = 1;
  }
  applyImmediate(e) {
    cc.isValid(this._node) && (this._node.scale = e);
  }
}