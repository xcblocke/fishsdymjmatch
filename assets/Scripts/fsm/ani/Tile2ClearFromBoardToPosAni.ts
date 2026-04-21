import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
import { easeCard } from '../../base/TweenEasing';
export class Tile2ClearFromBoardToPosAni extends Tile2AniActionBase {
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
      var o = this._baseTileNode.context.gameView.nodeDragCardRoot;
      this._reparent(this._node, o);
      var n = this._node.position,
        i = e.isRight ? 24 : -24,
        r = cc.v3(n.x + i, n.y + 24, n.z);
      this._currentTween = cc.tween(this._node).to(0.05, {
        position: r
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