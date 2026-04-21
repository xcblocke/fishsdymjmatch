import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
import { easeCard } from '../../base/TweenEasing';
export class Tile2ClearFromSlotBarToPosAni extends Tile2AniActionBase {
  _cancelled = false;
  _node = null;
  _baseTileNode = null;
  constructor(t, o) {
    super();
    this._node = t;
    this._baseTileNode = o;
  }
  onPlay(e) {
    var t = this;
    this._cancelled = false;
    if (cc.isValid(this._node)) {
      var o = this._node.position,
        n = (cc.v3(o.x, o.y, o.z), this._baseTileNode.context.gameView.nodeDragCardRoot);
      this._currentTween = cc.tween(this._node).call(function () {
        t._reparent(t._node, n);
      }).to(0.05, {
        scale: 1,
        opacity: 255
      }, {
        easing: "quadOut"
      }).to(0.18, {
        position: cc.v3(e.targetLocalPos.x, e.targetLocalPos.y, 0)
      }, {
        easing: easeCard
      }).call(function () {
        return t.finish();
      }).start();
    } else this.finish();
  }
  onCancel() {
    this._cancelled = true;
    this._stopTween();
  }
  onInterrupt() {
    this._cancelled = true;
    this._stopTween();
  }
  _stopTween() {
    var e;
    null === (e = this._currentTween) || void 0 === e || e.stop();
    this._currentTween = void 0;
  }
}