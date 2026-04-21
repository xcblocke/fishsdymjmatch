import { Tile2AniActionBase } from '../../base/Tile2AniActionBase';
export class Tile2MoveBackAni extends Tile2AniActionBase {
  _node = null;
  _baseTileNode = null;
  _defaultDuration = null;
  _defaultEasing = null;
  constructor(t, o, n = 0.3, i = "quadInOut") {
    super();
    this._node = t;
    this._baseTileNode = o;
    this._defaultDuration = n;
    this._defaultEasing = i;
  }
  onPlay(e) {
    var t,
      o,
      n = this;
    if (cc.isValid(this._node)) {
      var i = this._getTargetPos();
      if (i) {
        var r = null !== (t = null == e ? void 0 : e.duration) && void 0 !== t ? t : this._defaultDuration,
          a = null !== (o = null == e ? void 0 : e.easing) && void 0 !== o ? o : this._defaultEasing;
        this._node.zIndex = this._baseTileNode.tileObject.gridZIndex;
        this._currentTween = cc.tween(this._node).to(r, {
          position: i,
          scale: 1,
          opacity: 255
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
    if (cc.isValid(this._node)) {
      var e = this._getTargetPos();
      e && (this._node.position = e);
      this._node.scale = 1;
    }
  }
  _stopTween() {
    var e;
    null === (e = this._currentTween) || void 0 === e || e.stop();
    this._currentTween = void 0;
  }
  _getTargetPos() {
    var e = this._baseTileNode.tileObject,
      t = this._baseTileNode.layerNode;
    if (!cc.isValid(t) || !cc.isValid(this._node.parent)) return null;
    var o = e.getPosition(),
      n = t.convertToWorldSpaceAR(o);
    return this._node.parent.convertToNodeSpaceAR(n);
  }
}