import { weightedRandomSelect } from './ICharSelection';
export class ColorFarCharSel {
  selectCharacterPair(e, t, o, i) {
    for (var l, s, c, u, p = i.recentCharsHistory.slice(-10), f = new Set(p), d = [], h = 0; h < o.length; h++) f.has(o[h][0].resId) || d.push(h);
    if (d.length > 0) {
      return d[Math.floor(Math.random() * d.length)];
    }
    var y = new Map();
    try {
      for (var m = __values(p), v = m.next(); !v.done; v = m.next()) {
        var g = v.value;
        y.set(g, (y.get(g) || 0) + 1);
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (s = m.return) && s.call(m);
      } finally {
        if (l) throw l.error;
      }
    }
    var _ = Math.max.apply(Math, [...y.values(), ...[0]]),
      T = [];
    try {
      for (var C = __values(o), b = C.next(); !b.done; b = C.next()) {
        var E = b.value,
          S = y.get(E[0].resId) || 0;
        T.push(_ - S + 1);
      }
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        b && !b.done && (u = C.return) && u.call(C);
      } finally {
        if (c) throw c.error;
      }
    }
    return weightedRandomSelect(T);
  }
}