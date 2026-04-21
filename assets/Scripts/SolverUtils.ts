export class SolverUtils {
  static parsePairings(e, t, o) {
    var i,
      r,
      a = new Map();
    t.forEach(function (e) {
      e.isValid && a.set(e.layer + "_" + e.gridPosY + "_" + e.gridPosX, e);
    });
    var l = [],
      s = [],
      c = function c(e) {
        var t = e.coord.z + "_" + e.coord.y + "_" + e.coord.x,
          n = a.get(t);
        if (!n) return "continue";
        if (o && o(n)) return "continue";
        var i = n.cardId,
          r = s.findIndex(function (e) {
            return e.cardId === i;
          });
        if (r >= 0) {
          var c = s.splice(r, 1)[0];
          l.push({
            paving: {
              pos: c.pos,
              tile: c.tile,
              coord: c.coord
            },
            elim: {
              pos: e.index,
              tile: n,
              coord: t
            }
          });
        } else s.push({
          pos: e.index,
          tile: n,
          coord: t,
          cardId: i
        });
      };
    try {
      for (var u = __values(e), p = u.next(); !p.done; p = u.next()) c(p.value);
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (r = u.return) && r.call(u);
      } finally {
        if (i) throw i.error;
      }
    }
    var f = s.map(function (e) {
      return {
        pos: e.pos,
        tile: e.tile,
        coord: e.coord
      };
    });
    return {
      pairs: l,
      unpaired: f
    };
  }
  static simulateOccupancy(e, t, o) {
    for (var n = [], i = [], r = function r(r) {
        var a = r + 1,
          l = e[r].coord,
          s = l.x + "-" + l.y + "-" + l.z,
          c = t.getTileObject(s);
        if (!c || !c.isValid) return "continue";
        n.push({
          tileId: s,
          cardId: c.cardId
        });
        var u = c.cardId;
        if (n.filter(function (e) {
          return e.cardId === u;
        }).length >= 2) for (var p = 0, f = n.length - 1; f >= 0 && p < 2; f--) if (n[f].cardId === u) {
          n.splice(f, 1);
          p++;
        }
        i.push({
          step: a,
          occupancyRate: n.length / o,
          tileId: s,
          cardId: u
        });
      }, a = 0; a < e.length; a++) r(a);
    return i;
  }
}