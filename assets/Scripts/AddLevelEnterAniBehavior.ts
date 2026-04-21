import { GameBehaviorsBase } from './base/GameBehaviorsBase';
export class AddLevelEnterAniBehavior extends GameBehaviorsBase {
  onAbort() {
    super.onAbort.call(this);
  }
  start(e) {
    var t = e.data.tileObjects;
    if (t && t.length > 0) {
      this.playNewTilesEnterAnimation(t);
    } else {
      this.finish();
    }
  }
  playNewTilesEnterAnimation(e) {
    for (var t = this, o = this.context.getTileNodeManager(), n = function n() {
        t.finish();
      }, i = false, r = 0; r < e.length; r++) {
      var a = e[r],
        l = o.getTileNodeByTileId(a.id);
      if (l) {
        var s = a.getPosition(),
          c = l.cardNode;
        if (cc.isValid(c)) {
          this.playNodeEnterAnimation(c, s, i ? null : n);
          i = true;
        }
        var u = l.shadowCardNode;
        cc.isValid(u) && this.playNodeEnterAnimation(u, s, null);
      }
    }
    i || n();
  }
  playNodeEnterAnimation(e, t, o) {
    if (cc.isValid(e)) {
      e.setPosition(t.x, t.y - 45, 0);
      e.scale = 0.3;
      e.opacity = 0;
      cc.tween(e).parallel(cc.tween().to(0.56, {
        position: cc.v3(t.x, t.y, 0)
      }, {
        easing: "backOut"
      }), cc.tween().to(0.33, {
        scale: 1
      }, {
        easing: "circOut"
      }), cc.tween().to(0.56, {
        opacity: 255
      }, {
        easing: "backOut"
      })).call(function () {
        o && o();
      }).start();
    } else o && o();
  }
  playFallingTilesAnimation(e) {
    for (var t = this.context.getTileNodeManager(), o = 0; o < e.length; o++) {
      var n = e[o].tile,
        i = t.getTileNodeByTileId(n.id);
      if (i) {
        var r = n.getPosition(),
          a = i.cardNode;
        this.playNodeMoveAnimation(a, r, null);
        var l = i.shadowCardNode;
        cc.isValid(l) && this.playNodeMoveAnimation(l, r, null);
      }
    }
  }
  playNodeMoveAnimation(e, t, o) {
    if (cc.isValid(e)) {
      cc.tween(e).to(0.56, {
        position: cc.v3(t.x, t.y, 0)
      }, {
        easing: "backOut"
      }).call(function () {
        o && o();
      }).start();
    } else {
      o && o();
    }
  }
}