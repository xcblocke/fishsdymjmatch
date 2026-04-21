import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
export class Tile2ClearWaitOnSlotBarAni extends Tile2AniActionBase {
  _cancelled = false;
  _node = null;
  _baseTileNode = null;
  constructor(t, o) {
    super();
    this._node = t;
    this._baseTileNode = o;
  }
  onPlay() {
    var e = this;
    this._cancelled = false;
    if (cc.isValid(this._node)) {
      this._node.position.z;
      var t = this._baseTileNode.context.gameView.nodeDragCardRoot;
      this._reparent(this._node, t);
      var o = this._baseTileNode.tileObject.getScaleInSlotBar();
      this._tweenMove = cc.tween(this._node).to(0.1, {
        scale: o,
        opacity: 255
      }, {
        easing: "quadOut"
      }).call(function () {
        e.finish();
      }).start();
    } else this.finish();
  }
  onCancel() {
    this._cancelled = true;
    this._stopTweens();
  }
  onInterrupt() {
    this._cancelled = true;
    this._stopTweens();
  }
  _stopTweens() {
    var e;
    null === (e = this._tweenMove) || void 0 === e || e.stop();
    this._tweenMove = void 0;
  }
  _getTargetWorldPos() {
    var e = this._baseTileNode.tileObject,
      t = this._baseTileNode.context.gameView.slotBarView;
    if (!t) return null;
    var o = e.getIndexInSlotBar();
    return t.getWorldPosition(this._baseTileNode, o);
  }
}