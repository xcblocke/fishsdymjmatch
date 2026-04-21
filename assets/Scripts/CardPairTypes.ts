import GameConstant from './core/simulator/constant/GameConstant';
export enum TileInGameSteps {
  None = 0,
  Trigger = 1,
  Block = 2,
}
export enum CurrentBoardState {
  Unknown = 0,
  TriggerDead = 1,
  BlockedDead = 2,
  EnsuredAlive = 3,
}
export class TileIdPair {
  cardId = null;
  tile1Id = null;
  tile2Id = null;
  constructor(e, t, o) {
    var i = __read(e.split("-").map(Number), 3),
      r = i[0],
      l = i[1],
      s = i[2],
      c = __read(t.split("-").map(Number), 3),
      u = c[0],
      p = c[1],
      f = c[2],
      d = GameConstant.MaxTileCountY;
    if (r * d * 10 + 10 * l + s < u * d * 10 + 10 * p + f) {
      this.tile1Id = e;
      this.tile2Id = t;
    } else {
      this.tile1Id = t;
      this.tile2Id = e;
    }
    this.cardId = o;
  }
  static fromRecordClear(t, o) {
    var i = t.split("-"),
      r = o.split("-");
    if (5 === i.length || 5 === r.length) {
      var a = __read(i, 4),
        l = a[0],
        s = a[1],
        c = a[2],
        u = a[3],
        p = __read(r, 3);
      return new TileIdPair(l + "-" + s + "-" + c, p[0] + "-" + p[1] + "-" + p[2], parseInt(u));
    }
    return null;
  }
  static fromTilePair(t) {
    return new TileIdPair(t.tile1.id, t.tile2.id, t.tile1.cardId);
  }
  static fromTiles(t, o) {
    return new TileIdPair(t.id, o.id, t.cardId);
  }
  isNull() {
    return !this.tile1Id || !this.tile2Id;
  }
  isEqual(e) {
    return !!e && (this.tile1Id === e.tile1Id && this.tile2Id === e.tile2Id || this.tile1Id === e.tile2Id && this.tile2Id === e.tile1Id);
  }
  isConflict(e) {
    return !(!e || this.isEqual(e) || this.tile1Id !== e.tile1Id && this.tile1Id !== e.tile2Id && this.tile2Id !== e.tile1Id && this.tile2Id !== e.tile2Id);
  }
  containsTile(e) {
    return this.tile1Id === e || this.tile2Id === e;
  }
  getKey() {
    return this.tile1Id + "-" + this.tile2Id;
  }
  toString() {
    return "TileIdPair(" + this.tile1Id + ", " + this.tile2Id + ")";
  }
}
export class CardPairUtils {
  static generateDeathPairsFromBadGroups(e) {
    var t,
      o,
      r,
      a,
      s,
      c,
      u = [];
    try {
      for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          h = [],
          y = d.tiles,
          m = new Map();
        try {
          for (var v = (r = void 0, __values(y)), g = v.next(); !g.done; g = v.next()) {
            var _ = g.value,
              T = m.get(_.cardId) || [];
            T.push(_);
            m.set(_.cardId, T);
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            g && !g.done && (a = v.return) && a.call(v);
          } finally {
            if (r) throw r.error;
          }
        }
        try {
          for (var C = (s = void 0, __values(m)), b = C.next(); !b.done; b = C.next()) for (var E = __read(b.value, 2), S = E[0], I = E[1], w = 0; w < I.length; w += 2) w + 1 < I.length && h.push(new TileIdPair(I[w].id, I[w + 1].id, S));
        } catch (e) {
          s = {
            error: e
          };
        } finally {
          try {
            b && !b.done && (c = C.return) && c.call(C);
          } finally {
            if (s) throw s.error;
          }
        }
        h.length > 0 && u.push(h);
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
    return u;
  }
  static generateUnlockPairs(e) {
    var t,
      o,
      r = [];
    try {
      for (var a = __values(e), s = a.next(); !s.done; s = a.next()) for (var c = __read(s.value, 2), u = c[0], p = c[1], f = 0; f < p.length; f++) for (var d = f + 1; d < p.length; d++) r.push(new TileIdPair(p[f].id, p[d].id, u));
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return r;
  }
  static checkTileInGameSteps(e, t) {
    var o, n;
    try {
      for (var a = __values(t), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        if (s.isEqual(e)) return TileInGameSteps.Trigger;
        if (s.isConflict(e)) return TileInGameSteps.Block;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (n = a.return) && n.call(a);
      } finally {
        if (o) throw o.error;
      }
    }
    return TileInGameSteps.None;
  }
  static fromClearRecords(e) {
    var t,
      o,
      n = [];
    try {
      for (var r = __values(e), a = r.next(); !a.done; a = r.next()) {
        var s = a.value;
        if (s && s.length >= 2) {
          var c = TileIdPair.fromRecordClear(s[0], s[1]);
          c && n.push(c);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
}