import { GameBehaviorsBase } from './base/GameBehaviorsBase';
export class AddLevelDropAniBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data.fallingTiles;
    if (e.data.isOpenGenerateState) {
      var n = this.context.getTileNodeManager();
      o.forEach(function (e) {
        var t = e.tile,
          o = n.getTileNodeByTileId(t.id);
        o && o.dropToPosition();
      });
      this.finish();
    } else if (o && o.length > 0) {
      this.playFallingTilesAnimation(o, function () {
        t.finish();
      });
    } else {
      this.finish();
    }
  }
  playFallingTilesAnimation(e, t) {
    for (var o = this.context.getTileNodeManager(), n = false, i = 0; i < e.length; i++) {
      var r = e[i].tile,
        a = o.getTileNodeByTileId(r.id);
      if (a) {
        var l = r.getPosition(),
          s = a.cardNode;
        this.playNodeMoveAnimation(s, l, n ? null : t);
        n = true;
        var c = a.shadowCardNode;
        cc.isValid(c) && this.playNodeMoveAnimation(c, l, null);
      }
    }
    n || t && t();
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