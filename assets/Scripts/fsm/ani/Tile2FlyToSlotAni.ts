import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
import { easeCard4, easeCard5 } from '../../base/TweenEasing';
export class Tile2FlyToSlotAni extends Tile2AniActionBase {
  _node = null;
  _baseTileNode = null;
  _defaultDuration = null;
  _defaultEasing = null;
  constructor(t, o, n = 0.287, i = "quadInOut") {
    super();
    this._node = t;
    this._baseTileNode = o;
    this._defaultDuration = n;
    this._defaultEasing = i;
  }
  onPlay() {
    var e = this;
    if (cc.isValid(this._node)) {
      var t = this._baseTileNode.tileObject.getScaleInSlotBar(),
        o = (this._baseTileNode.context.gameView.slotBarView.getNodeLayer(), this._baseTileNode.context.gameView.nodeDragCardRoot),
        n = this._getTargetWorldPos(),
        i = o.convertToNodeSpaceAR(n);
      this._reparent(this._node, o);
      var r = t - 0.03;
      this._currentTween = cc.tween(this._node).parallel(cc.tween().to(0.287, {
        position: i
      }, {
        easing: easeCard4
      }), cc.tween().delay(0.148).to(0.139, {
        scale: r
      }, {
        easing: easeCard5
      }).to(0.096, {
        scale: t
      }, {
        easing: easeCard5
      })).call(function () {
        e.reset();
        e.finish();
      }).start();
    } else this.finish();
  }
  onCancel() {
    this._stopTween();
  }
  reset() {
    var e = this._baseTileNode.tileObject.getScaleInSlotBar(),
      t = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(),
      o = (this._baseTileNode.context.gameView.nodeDragCardRoot, this._getTargetWorldPos()),
      n = t.convertToNodeSpaceAR(o);
    this._node.parent = t;
    this._node.scale = e;
    this._node.position = n;
  }
  onInterrupt() {
    this._stopTween();
    cc.isValid(this._node) && this.reset();
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