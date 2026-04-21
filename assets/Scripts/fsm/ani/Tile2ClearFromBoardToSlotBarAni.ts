import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
import { easeCard2 } from '../../base/TweenEasing';
export class Tile2ClearFromBoardToSlotBarAni extends Tile2AniActionBase {
  _node = null;
  _baseTileNode = null;
  constructor(t, o) {
    super();
    this._node = t;
    this._baseTileNode = o;
  }
  onPlay(e) {
    var t = this;
    if (cc.isValid(this._node)) {
      var o = this._baseTileNode.context.gameView.nodeDragCardRoot,
        n = this._getTargetWorldPos(e.clearPosIndex),
        i = o.convertToNodeSpaceAR(n),
        r = this._baseTileNode.tileObject.getScaleInSlotBar();
      this._reparent(this._node, o);
      this._node.zIndex = 10000;
      this._node.position.z;
      this._currentTween = cc.tween(this._node).to(0.23, {
        position: i,
        scale: r
      }, {
        easing: easeCard2
      }).call(function () {
        return t.finish();
      }).start();
    } else this.finish();
  }
  onCancel() {
    this._stopTween();
  }
  onInterrupt() {
    this._stopTween();
  }
  _stopTween() {
    var e;
    null === (e = this._currentTween) || void 0 === e || e.stop();
    this._currentTween = void 0;
  }
  _getTargetWorldPos(e) {
    var t = this._baseTileNode.tileObject,
      o = this._baseTileNode.context.gameView.slotBarView;
    if (!o) return null;
    var n = null != e ? e : t.getIndexInSlotBar();
    return o.getWorldPosition(this._baseTileNode, n);
  }
}