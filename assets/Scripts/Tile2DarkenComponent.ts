import { TileNodeComponent } from './TileNodeComponent';
export class Tile2DarkenComponent extends TileNodeComponent {
  setLockDarkenActive(e, t) {
    var o = this._host.imgLockBg;
    if (o && cc.isValid(o) && o.activeInHierarchy !== e) if (!e && t) this._hideLockIconWithFadeOut(o);else {
      if (e) {
        cc.Tween.stopAllByTarget(o);
        o.opacity = 255;
      } else cc.Tween.stopAllByTarget(o);
      o.active = e;
    }
  }
  resetLockDarkenImmediate() {
    var e = this._host.imgLockBg;
    if (e && cc.isValid(e)) {
      cc.Tween.stopAllByTarget(e);
      e.active = false;
    }
  }
  onClear() {
    this.resetLockDarkenImmediate();
  }
  onUnbind() {
    this.resetLockDarkenImmediate();
  }
  _hideLockIconWithFadeOut(e) {
    var t = this,
      o = this._host.tileObject.id;
    cc.Tween.stopAllByTarget(e);
    cc.tween(e).delay(0).to(0.25, {
      opacity: 0
    }).call(function () {
      var n;
      cc.isValid(e) && (e.active = false);
      if (o) {
        var i = null === (n = t._host.context.getTileNodeManager()) || void 0 === n ? void 0 : n.getTileNodeByTileId(o);
        if (i && cc.isValid(i.imgLockBg) && 0 != i.tileObject.isCardLock()) {
          e.active = true;
          e.opacity = 255;
        }
      }
    }).start();
  }
}