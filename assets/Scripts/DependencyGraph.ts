export class DependencyGraph {
  coordToIndex = new Map();
  tileByCoord = new Map();
  predsBy = new Map();
  leftBy = new Map();
  rightBy = new Map();
  affectedBy = new Map();
  allTiles = [];
  tileMapObject = null;
  expandedCache = {
    pred: new Map(),
    left: new Map(),
    right: new Map()
  };
  tileToCoord(e) {
    return e.layer + "_" + e.gridPosY + "_" + e.gridPosX;
  }
  init(e, t) {
    var o = this;
    this.coordToIndex.clear();
    this.tileByCoord.clear();
    this.predsBy.clear();
    this.leftBy.clear();
    this.rightBy.clear();
    this.affectedBy.clear();
    this.allTiles = e;
    this.tileMapObject = t;
    this.clearExpandedCache();
    e.forEach(function (e, t) {
      var n = o.tileToCoord(e);
      o.coordToIndex.set(n, t);
      o.tileByCoord.set(n, e);
    });
  }
  clearExpandedCache() {
    this.expandedCache = {
      pred: new Map(),
      left: new Map(),
      right: new Map()
    };
  }
  getTileByCoord(e) {
    return this.tileByCoord.get(e);
  }
  getLazyPredecessors(e) {
    var t, o, i, r;
    if (this.predsBy.has(e)) return this.predsBy.get(e);
    var a = this.tileByCoord.get(e);
    if (!a) return [];
    var l = [],
      s = a.layer;
    try {
      for (var c = __values(this.allTiles), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        p.layer > s && p.isValid && this.hasGridOverlap(a, p) && l.push(this.tileToCoord(p));
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    this.predsBy.set(e, l);
    try {
      for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
        var h = d.value;
        this.affectedBy.has(h) || this.affectedBy.set(h, new Set());
        this.affectedBy.get(h).add(e);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (r = f.return) && r.call(f);
      } finally {
        if (i) throw i.error;
      }
    }
    return l;
  }
  getLazyLeftSemiPreds(e) {
    var t, o, i, r;
    if (this.leftBy.has(e)) return this.leftBy.get(e);
    var a = this.tileByCoord.get(e);
    if (!a) return [];
    var l = [];
    if (this.tileMapObject) {
      var s = new Set(this.allTiles);
      try {
        for (var c = __values(this.tileMapObject.getAdjacentLeftCards(a)), u = c.next(); !u.done; u = c.next()) {
          var p = u.value;
          s.has(p) && p.isValid && l.push(this.tileToCoord(p));
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (o = c.return) && o.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
    }
    this.leftBy.set(e, l);
    try {
      for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
        var h = d.value;
        this.affectedBy.has(h) || this.affectedBy.set(h, new Set());
        this.affectedBy.get(h).add(e);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (r = f.return) && r.call(f);
      } finally {
        if (i) throw i.error;
      }
    }
    return l;
  }
  getLazyRightSemiPreds(e) {
    var t, o, i, r;
    if (this.rightBy.has(e)) return this.rightBy.get(e);
    var a = this.tileByCoord.get(e);
    if (!a) return [];
    var l = [];
    if (this.tileMapObject) {
      var s = new Set(this.allTiles);
      try {
        for (var c = __values(this.tileMapObject.getAdjacentRightCards(a)), u = c.next(); !u.done; u = c.next()) {
          var p = u.value;
          s.has(p) && p.isValid && l.push(this.tileToCoord(p));
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (o = c.return) && o.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
    }
    this.rightBy.set(e, l);
    try {
      for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
        var h = d.value;
        this.affectedBy.has(h) || this.affectedBy.set(h, new Set());
        this.affectedBy.get(h).add(e);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (r = f.return) && r.call(f);
      } finally {
        if (i) throw i.error;
      }
    }
    return l;
  }
  getLazyAffectedBy(e) {
    return this.affectedBy.get(e) || new Set();
  }
  getExpanded(e, t) {
    var o,
      i,
      r = this;
    if (!t) return new Set();
    var a = this.expandedCache[e];
    if (a.has(t)) return a.get(t);
    for (var l = function l(t) {
        switch (e) {
          case "pred":
            return r.getLazyPredecessors(t);
          case "left":
            return r.getLazyLeftSemiPreds(t);
          case "right":
            return r.getLazyRightSemiPreds(t);
        }
      }, s = new Set(), c = [t]; c.length > 0;) {
      var u = c.pop();
      try {
        for (var p = (o = void 0, __values(l(u))), f = p.next(); !f.done; f = p.next()) {
          var d = f.value;
          if (!s.has(d)) {
            s.add(d);
            c.push(d);
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (i = p.return) && i.call(p);
        } finally {
          if (o) throw o.error;
        }
      }
    }
    a.set(t, s);
    return s;
  }
  getTopologyLevel(e) {
    return this.getLazyPredecessors(e).length;
  }
  isTileSelectable(e, t, o) {
    var i,
      r,
      a,
      l,
      s,
      c,
      u = this.tileToCoord(e),
      p = this.getLazyPredecessors(u);
    try {
      for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
        var h = d.value,
          y = o.get(h);
        if (y && t.has(y)) return false;
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (r = f.return) && r.call(f);
      } finally {
        if (i) throw i.error;
      }
    }
    var m = this.getLazyLeftSemiPreds(u),
      v = this.getLazyRightSemiPreds(u),
      g = false,
      _ = false;
    try {
      for (var T = __values(m), C = T.next(); !C.done; C = T.next()) {
        var b = C.value,
          E = o.get(b);
        if (E && t.has(E)) {
          g = true;
          break;
        }
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        C && !C.done && (l = T.return) && l.call(T);
      } finally {
        if (a) throw a.error;
      }
    }
    try {
      for (var S = __values(v), I = S.next(); !I.done; I = S.next()) {
        var w = I.value,
          B = o.get(w);
        if (B && t.has(B)) {
          _ = true;
          break;
        }
      }
    } catch (e) {
      s = {
        error: e
      };
    } finally {
      try {
        I && !I.done && (c = S.return) && c.call(S);
      } finally {
        if (s) throw s.error;
      }
    }
    return !(g && _);
  }
  getSelectableTiles(e, t) {
    var o,
      i,
      r = [];
    try {
      for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        this.isTileSelectable(s, e, t) && r.push(s);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (i = a.return) && i.call(a);
      } finally {
        if (o) throw o.error;
      }
    }
    return r;
  }
  wouldBecomeSelectable(e, t, o, i, r) {
    var a,
      l,
      s,
      c,
      u,
      p,
      f = this.tileToCoord(e),
      d = this.getLazyPredecessors(f);
    try {
      for (var h = __values(d), y = h.next(); !y.done; y = h.next()) {
        var m = y.value;
        if (m !== t && m !== o) {
          var v = r.get(m);
          if (v && i.has(v)) return false;
        }
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        y && !y.done && (l = h.return) && l.call(h);
      } finally {
        if (a) throw a.error;
      }
    }
    var g = this.getLazyLeftSemiPreds(f),
      _ = this.getLazyRightSemiPreds(f),
      T = false,
      C = false;
    try {
      for (var b = __values(g), E = b.next(); !E.done; E = b.next()) {
        var S = E.value;
        if (S !== t && S !== o) {
          var I = r.get(S);
          if (I && i.has(I)) {
            T = true;
            break;
          }
        }
      }
    } catch (e) {
      s = {
        error: e
      };
    } finally {
      try {
        E && !E.done && (c = b.return) && c.call(b);
      } finally {
        if (s) throw s.error;
      }
    }
    try {
      for (var w = __values(_), B = w.next(); !B.done; B = w.next()) {
        var x = B.value;
        if (x !== t && x !== o) {
          var M = r.get(x);
          if (M && i.has(M)) {
            C = true;
            break;
          }
        }
      }
    } catch (e) {
      u = {
        error: e
      };
    } finally {
      try {
        B && !B.done && (p = w.return) && p.call(w);
      } finally {
        if (u) throw u.error;
      }
    }
    return !(T && C);
  }
  hasGridOverlap(e, t) {
    var o,
      i,
      r,
      a,
      l = e.ownerGridIds,
      s = t.ownerGridIds;
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        try {
          for (var f = (r = void 0, __values(s)), d = f.next(); !d.done; d = f.next()) if (p === d.value) return true;
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            d && !d.done && (a = f.return) && a.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (i = c.return) && i.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    return false;
  }
}