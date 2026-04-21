import { MjCardId } from '../core/simulator/constant/GameTypeEnums';
import { ETileType } from '../simulator/constant/TileTypeEnum';
export class ColorCardType {
  static modify(e) {
    var t,
      o,
      l,
      s,
      c,
      u,
      p,
      f,
      d,
      h,
      y = e.getTileMapObject(),
      m = y.aliveTiles().filter(function (e) {
        return !!e.checkIsNormal() && e.cardId != MjCardId.emFlowCardId && e.cardId != MjCardId.emSeasonCardId;
      }),
      v = new Map();
    try {
      for (var g = __values(m), _ = g.next(); !_.done; _ = g.next()) {
        var T = (V = _.value).cardId;
        v.has(T) || v.set(T, []);
        v.get(T).push(V);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        _ && !_.done && (o = g.return) && o.call(g);
      } finally {
        if (t) throw t.error;
      }
    }
    var C = Math.max(1, Math.floor(v.size / 6)),
      b = [];
    try {
      for (var E = __values(v), S = E.next(); !S.done; S = E.next()) {
        var I = __read(S.value, 2),
          w = (T = I[0], I[1]),
          B = 0;
        try {
          for (var x = (c = void 0, __values(w)), M = x.next(); !M.done; M = x.next()) B += (V = M.value).layer;
        } catch (e) {
          c = {
            error: e
          };
        } finally {
          try {
            M && !M.done && (u = x.return) && u.call(x);
          } finally {
            if (c) throw c.error;
          }
        }
        var O = B / w.length;
        b.push({
          cardId: T,
          average: O
        });
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        S && !S.done && (s = E.return) && s.call(E);
      } finally {
        if (l) throw l.error;
      }
    }
    b.sort(function (e, t) {
      return t.average - e.average;
    });
    var D = [];
    if (b.length >= 2) {
      D.push(b[0].cardId);
      D.push(b[1].cardId);
    } else 1 === b.length && D.push(b[0].cardId);
    var P = D.length;
    if (P < C && b.length > 2) {
      var A = Math.min(C - P, b.length - 2),
        R = b.slice(2),
        N = e.randomGenerator.randomElements(R, A);
      try {
        for (var j = __values(N), k = j.next(); !k.done; k = j.next()) {
          var L = k.value;
          D.push(L.cardId);
        }
      } catch (e) {
        p = {
          error: e
        };
      } finally {
        try {
          k && !k.done && (f = j.return) && f.call(j);
        } finally {
          if (p) throw p.error;
        }
      }
    }
    try {
      for (var G = __values(m), F = G.next(); !F.done; F = G.next()) {
        var V = F.value;
        this.isColoreTile(D, V) && y.setTileType(V.id, ETileType.ColorCard);
      }
    } catch (e) {
      d = {
        error: e
      };
    } finally {
      try {
        F && !F.done && (h = G.return) && h.call(G);
      } finally {
        if (d) throw d.error;
      }
    }
  }
  static isColoreTile(e, t) {
    var o, i;
    try {
      for (var r = __values(e), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (t.cardId === l) return true;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (i = r.return) && i.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
    return false;
  }
}