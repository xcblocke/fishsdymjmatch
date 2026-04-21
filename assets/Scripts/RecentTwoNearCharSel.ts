import { weightedRandomSelect } from './ICharSelection';
export class RecentTwoNearCharSel {
  selectCharacterPair(e, t, o, r) {
    var a,
      l,
      s = r.recentCharsHistory.slice(-2),
      c = new Set(s),
      u = [];
    try {
      for (var p = __values(o), f = p.next(); !f.done; f = p.next()) {
        var d = f.value;
        u.push(c.has(d[0].resId) ? 100 : 1);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (l = p.return) && l.call(p);
      } finally {
        if (a) throw a.error;
      }
    }
    return weightedRandomSelect(u);
  }
}