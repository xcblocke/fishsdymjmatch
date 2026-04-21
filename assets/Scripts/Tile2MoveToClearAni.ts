import { Tile2AniActionBase } from './base/Tile2AniActionBase';
export class Tile2MoveToClearAni extends Tile2AniActionBase {
  _node = null;
  _defaultDuration = null;
  _defaultEasing = null;
  constructor(t, o = 0.25, n = "quadIn") {
    super();
    this._node = t;
    this._defaultDuration = o;
    this._defaultEasing = n;
  }
  onPlay(e) {
    var t,
      o,
      n = this;
    if (cc.isValid(this._node) && e) {
      var i = this._toNodeSpace(e.worldPos);
      if (i) {
        var r = null !== (t = e.duration) && void 0 !== t ? t : this._defaultDuration,
          a = null !== (o = e.easing) && void 0 !== o ? o : this._defaultEasing;
        this._currentTween = cc.tween(this._node).to(r, {
          position: i
        }, a ? {
          easing: a
        } : void 0).call(function () {
          return n.finish();
        }).start();
      } else this.finish();
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
  _toNodeSpace(e) {
    if (!cc.isValid(this._node.parent)) return null;
    var t = this._node.parent.convertToNodeSpaceAR(e);
    return cc.v3(t.x, t.y, this._node.position.z);
  }
}