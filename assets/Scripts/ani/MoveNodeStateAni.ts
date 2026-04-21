import { NodeStateAniBase } from '../base/NodeStateAniBase';
export class MoveNodeStateAni extends NodeStateAniBase {
  _duration = 0.1;
  _easing = "";
  _baseTileNode = null;
  constructor(t, o) {
    super(t, "move");
    this._baseTileNode = o;
  }
  @mj.traitEvent("MoveStateAni_duration")
  getDuration() {
    return this._duration;
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._currentTween && this._currentTween.stop();
      var n = this._baseTileNode.tileObject.getSelectOffsetX(),
        i = this._baseTileNode.tileObject.getPosition(),
        r = this._baseTileNode.layerNode.convertToWorldSpaceAR(i),
        a = cc.v3(r.x + n, r.y, 0),
        l = this.node.parent.convertToNodeSpaceAR(a);
      this._currentTween = cc.tween(this._node).to(this.getDuration(), {
        position: l
      }, this._easing ? {
        easing: this._easing
      } : {}).call(function () {
        o.onEnterEnd(t);
      }).start();
    } else this.onEnterEnd(t);
  }
  onExitStart(t) {
    var o = this;
    super.onExitStart.call(this, t);
    this._currentTween && this._currentTween.stop();
    var n = this._baseTileNode.tileObject.getPosition(),
      i = this._baseTileNode.layerNode.convertToWorldSpaceAR(n),
      r = this.node.parent.convertToNodeSpaceAR(i);
    this._currentTween = cc.tween(this._node).to(this.getDuration(), {
      position: r
    }, this._easing ? {
      easing: this._easing
    } : {}).call(function () {
      o.onExitEnd(t);
    }).start();
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    if (cc.isValid(this._node)) {
      var o = this._baseTileNode.tileObject.getPosition(),
        n = this._baseTileNode.layerNode.convertToWorldSpaceAR(o),
        i = this.node.parent.convertToNodeSpaceAR(n);
      this._node.position = i;
    }
  }
  onExit(t) {
    super.onExit.call(this, t);
    if (this._currentTween) {
      this._currentTween.stop();
      this._currentTween = void 0;
    }
    var o = this._baseTileNode.tileObject.getPosition(),
      n = this._baseTileNode.layerNode.convertToWorldSpaceAR(o),
      i = this.node.parent.convertToNodeSpaceAR(n);
    this.node.position = i;
  }
  applyImmediate(e) {
    if (cc.isValid(this._node)) {
      if (this._currentTween) {
        this._currentTween.stop();
        this._currentTween = void 0;
      }
      this._node.position = new cc.Vec3(this._node.position.x + e.x, this._node.position.y + e.y, this._node.position.z);
    }
  }
}