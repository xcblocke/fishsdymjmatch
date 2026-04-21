import UserModel from './gamePlay/user/UserModel';
import { EGameInputEnum } from './simulator/constant/GameInputEnum';
import { GameInteraction } from './GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './base/GameBehaviorsBase';
export class AddLevelDropBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o,
      n,
      i,
      a,
      l,
      s = e.data.fallingTiles,
      c = this.context.getTileNodeManager(),
      u = [];
    try {
      for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          h = d.tile;
        c.handleFallingTileNode(h, d.newLayer, d.indexInLayer);
        u.push(d.newLayer);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (o = p.return) && o.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    try {
      for (var y = __values(u), m = y.next(); !m.done; m = y.next()) {
        var v = m.value;
        c.updateLayerSiblingIndexes(v);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        m && !m.done && (i = y.return) && i.call(y);
      } finally {
        if (n) throw n.error;
      }
    }
    try {
      for (var g = __values(u), _ = g.next(); !_.done; _ = g.next()) {
        v = _.value;
        c.updateLayerShadowSize(v);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        _ && !_.done && (l = g.return) && l.call(g);
      } finally {
        if (a) throw a.error;
      }
    }
    c.destoryEmptyLayerNodes();
    this.refreshCardLockDarken();
    this.finish();
  }
  refreshCardLockDarken() {
    UserModel.getInstance().isLockHighlightEnabled() && GameInteraction.input({
      inputType: EGameInputEnum.RefreshCardLockDarken,
      isShowAni: false
    });
  }
}