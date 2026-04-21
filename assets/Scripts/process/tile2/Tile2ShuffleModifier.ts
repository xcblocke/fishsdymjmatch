import { BaseCoreObject } from '../../BaseCoreObject';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
import { Tile2UnityShuffleStrategy } from './Tile2UnityShuffleStrategy';
export class Tile2ShuffleModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("Tile2ShuffleMod_shuffle")
  shuffle() {
    Date.now();
    var e = new Tile2UnityShuffleStrategy(this._context),
      t = e.collectTiles(),
      o = e.collectState(t),
      n = e.collectConstraints(t);
    this.computeAndApply(t, o, n, e);
    this.restoreFixedTypeSlots(n.fixedTypeSlots);
    this.afterShuffle();
  }
  @mj.traitEvent("Tile2ShuffleMod_compute")
  computeAndApply(e, t, o, n) {
    var i = n.compute(t, o);
    if (i) {
      n.applySwap(i, o);
    } else {
      n.hasSolution();
    }
  }
  @mj.traitEvent("Tile2ShuffleMod_afShuf")
  afterShuffle() {}
  snapshotDistribution(e) {
    var t,
      o,
      n = new Map();
    try {
      for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        n.set(l.cardId, (n.get(l.cardId) || 0) + 1);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  fmtDistribution(e) {
    return Array.from(e.entries()).sort(function (e, t) {
      return e[0] - t[0];
    }).map(function (e) {
      var t = __read(e, 2);
      return t[0] + "x" + t[1];
    }).join(", ");
  }
  logSnapshot() {}
  logSpecialTiles(e, t) {
    var o,
      n,
      i = [];
    try {
      for (var r = __values(t), l = r.next(); !l.done; l = r.next()) {
        var s = l.value;
        if (0 !== s.getTypeBits()) {
          var c = [];
          s.checkHasType(ETileType.RollCard) && c.push("翻转");
          s.checkHasType(ETileType.Bomb) && c.push("炸弹");
          s.checkHasType(ETileType.DuoxiaoCard) && c.push("多消(" + s.getDuoxiaoCount() + ")");
          s.checkHasType(ETileType.DaxiaoCard) && c.push("大消");
          c.length > 0 && i.push(s.id + "(" + s.gridPosX + "," + s.gridPosY + "," + s.layer + "):[" + c.join("+") + "]");
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (n = r.return) && n.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
    i.length;
  }
  logDistributionDiff(e, t) {
    var o, n;
    this.logSnapshot("洗牌后", t);
    var i = [],
      r = new Set([...e.keys(), ...t.keys()]);
    try {
      for (var l = __values(r), c = l.next(); !c.done; c = l.next()) {
        var u = c.value,
          p = e.get(u) || 0,
          f = t.get(u) || 0;
        p !== f && i.push(u + ": " + p + "→" + f);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (n = l.return) && n.call(l);
      } finally {
        if (o) throw o.error;
      }
    }
    i.length;
  }
  restoreFixedTypeSlots(e) {
    var t, o, n, i;
    if (0 !== e.length) {
      var r = this._context.getTileMapObject();
      r.tileObjectMap();
      try {
        for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
          var c = s.value;
          r.setTileType_removeTypes(c.id, c.types);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (o = l.return) && o.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
          c = f.value;
          r.setTileTypeByPos_addTypes({
            x: c.x,
            y: c.y,
            z: c.z
          }, c.types);
          if (c.types.includes(ETileType.RollCard)) {
            var d = r.getAliveTileByPos({
              x: c.x,
              y: c.y,
              z: c.z
            });
            d && d.setIsBack(true);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (i = p.return) && i.call(p);
        } finally {
          if (n) throw n.error;
        }
      }
    }
  }
}