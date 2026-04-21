export class SafetyChecker {
  graph = null;
  constructor(e) {
    this.graph = e;
  }
  computeFreedCoords(e, t, o, i, r) {
    var a,
      l,
      s = new Set(),
      c = new Set(r),
      u = new Set(),
      p = this.graph.getLazyAffectedBy(e),
      f = this.graph.getLazyAffectedBy(t);
    p.forEach(function (e) {
      return u.add(e);
    });
    f.forEach(function (e) {
      return u.add(e);
    });
    try {
      for (var d = __values(u), h = d.next(); !h.done; h = d.next()) {
        var y = h.value,
          m = i.get(y);
        m && o.has(m) && (c.has(m) || this.graph.wouldBecomeSelectable(m, e, t, o, i) && s.add(y));
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (l = d.return) && l.call(d);
      } finally {
        if (a) throw a.error;
      }
    }
    return s;
  }
  countFreedBlocks(e, t, o, n) {
    var i = this.graph.getSelectableTiles(o, n);
    return this.computeFreedCoords(e, t, o, n, i).size;
  }
  isSafePairChoiceFast(e, t, o, r, a) {
    var l,
      s,
      c = __read(e, 2),
      u = c[0],
      p = c[1],
      f = this.graph.tileToCoord(u),
      d = this.graph.tileToCoord(p),
      h = r.length,
      y = (a.has(u) ? 1 : 0) + (a.has(p) ? 1 : 0),
      m = 0,
      v = new Set(),
      g = this.graph.getLazyAffectedBy(f),
      _ = this.graph.getLazyAffectedBy(d);
    g.forEach(function (e) {
      return v.add(e);
    });
    _.forEach(function (e) {
      return v.add(e);
    });
    try {
      for (var T = __values(v), C = T.next(); !C.done; C = T.next()) {
        var b = C.value,
          E = o.get(b);
        E && t.has(E) && (a.has(E) || this.graph.wouldBecomeSelectable(E, f, d, t, o) && m++);
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        C && !C.done && (s = T.return) && s.call(T);
      } finally {
        if (l) throw l.error;
      }
    }
    return h - y + m !== 1;
  }
  hasNeighborSelectable(e, t, o) {
    var r,
      a,
      l = this,
      s = o.get(e);
    if (!s) return false;
    var c = s.layer,
      u = s.gridPosY,
      p = s.gridPosX,
      f = this.graph.getSelectableTiles(t, o),
      d = new Set(f.map(function (e) {
        return l.graph.tileToCoord(e);
      }));
    try {
      for (var h = __values([[0, -1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1], [0, 0, -2], [0, 0, 2]]), y = h.next(); !y.done; y = h.next()) {
        var m = __read(y.value, 3),
          v = c + m[0] + "_" + (u + m[1]) + "_" + (p + m[2]);
        if (d.has(v) && v !== e) return true;
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        y && !y.done && (a = h.return) && a.call(h);
      } finally {
        if (r) throw r.error;
      }
    }
    return false;
  }
}