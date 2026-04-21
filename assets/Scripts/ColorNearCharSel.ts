import { weightedRandomSelect } from './ICharSelection';
export class ColorNearCharSel {
  selectCharacterPair(e, t, o, r) {
    var a,
      l,
      s = new Set(r.recentCharsHistory.slice(-10)),
      c = [];
    try {
      for (var u = __values(o), p = u.next(); !p.done; p = u.next()) {
        var f = p.value,
          d = s.has(f[0].resId);
        c.push(d ? 10 : 1);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (l = u.return) && l.call(u);
      } finally {
        if (a) throw a.error;
      }
    }
    var h = weightedRandomSelect(c),
      y = o[h];
    s.has(y[0].resId);
    return h;
  }
}