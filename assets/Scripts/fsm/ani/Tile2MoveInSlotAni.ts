import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
export class Tile2MoveInSlotAni extends Tile2AniActionBase {
  _node = null;
  _baseTileNode = null;
  _defaultDelay = null;
  _defaultDuration = null;
  _defaultEasing = null;
  constructor(t, o, n = 0, i = 0.2, r = "cubicIn") {
    super();
    this._node = t;
    this._baseTileNode = o;
    this._defaultDelay = n;
    this._defaultDuration = i;
    this._defaultEasing = r;
  }
  onPlay(e) {
    var t,
      o,
      n,
      i = this;
    if (cc.isValid(this._node) && null != e) {
      var r = null !== (t = e.delay) && void 0 !== t ? t : this._defaultDelay,
        a = null !== (o = e.duration) && void 0 !== o ? o : this._defaultDuration,
        l = null !== (n = e.easing) && void 0 !== n ? n : this._defaultEasing,
        s = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(),
        c = this._getTargetPos(e.index);
      this._reparent(this._node, s);
      var u = cc.tween(this._node);
      r > 0 && u.delay(r);
      u.to(a, {
        position: c
      }, l ? {
        easing: l
      } : void 0).call(function () {
        i.finish();
      }).start();
      this._currentTween = u;
    } else this.finish();
  }
  reset() {
    var e = this._baseTileNode.context.gameView.slotBarView.getNodeLayer(),
      t = this._baseTileNode.tileObject.getIndexInSlotBar();
    if (t >= 0) {
      var o = this._getTargetPos(t);
      this._node.parent = e;
      this._node.position = o;
      this._node.scale = this._baseTileNode.tileObject.getScaleInSlotBar();
    }
  }
  finish() {
    super.finish.call(this);
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
  _getTargetPos(e) {
    var t = this._baseTileNode.context.gameView.slotBarView;
    return t ? t.getPosition(this._baseTileNode, e) : null;
  }
}