import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
import { easeCard2, easeCard3 } from '../../base/TweenEasing';
export class Tile2NoClearAddToSlotBarAni extends Tile2AniActionBase {
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
      var o = this._node.position.z,
        n = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(),
        i = this._baseTileNode.context.gameView.nodeDragCardRoot,
        r = this._getTargetWorldPos(),
        l = i.convertToNodeSpaceAR(r),
        s = n.convertToNodeSpaceAR(r);
      l = cc.v3(l.x - 10, l.y + 18, o);
      var c = this._baseTileNode.tileObject.getScaleInSlotBar();
      this._reparent(this._node, i);
      var u = (null == e ? void 0 : e.isShadow) ? 0 : 255;
      this._currentTween = cc.tween(this._node).to(0.23, {
        position: l,
        scale: c
      }, {
        easing: easeCard2
      }).call(function () {
        t._reparent(t._node, n);
      }).delay(0.02).to(0.1, {
        position: cc.v3(s.x, s.y, 0),
        scale: c,
        opacity: u
      }, {
        easing: easeCard3
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
  reset() {
    var e = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(),
      t = this._getTargetWorldPos(),
      o = e.convertToNodeSpaceAR(t);
    this._node.parent = e;
    this._node.position = o;
    this._node.scale = this._baseTileNode.tileObject.getScaleInSlotBar();
  }
  _stopTween() {
    var e;
    null === (e = this._currentTween) || void 0 === e || e.stop();
    this._currentTween = void 0;
  }
  _getTargetWorldPos() {
    var e = this._baseTileNode.tileObject,
      t = this._baseTileNode.context.gameView.slotBarView;
    if (!t) return null;
    var o = e.getIndexInSlotBar();
    return t.getWorldPosition(this._baseTileNode, o);
  }
}