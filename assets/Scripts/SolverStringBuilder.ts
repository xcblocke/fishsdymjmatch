export class SolverStringBuilder {
  graph = null;
  constructor(e) {
    this.graph = e;
  }
  generate(e, t) {
    var o,
      a,
      l,
      s,
      c,
      u,
      p = this;
    if (0 === e.length) return "";
    var f = new Set();
    try {
      for (var d = __values(t.values()), h = d.next(); !h.done; h = d.next()) {
        var y = h.value;
        f.add(this.graph.tileToCoord(y));
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (a = d.return) && a.call(d);
      } finally {
        if (o) throw o.error;
      }
    }
    for (var m = e.map(function (e) {
        var t = __read(e, 2),
          o = t[0],
          n = t[1];
        return [p.graph.tileToCoord(o), p.graph.tileToCoord(n)];
      }), v = new Map(), g = new Map(), _ = [], T = [...m.entries()], C = 1; T.length > 0;) {
      var b = [],
        E = [];
      try {
        for (var S = (l = void 0, __values(T)), I = S.next(); !I.done; I = S.next()) {
          var w = __read(I.value, 2),
            B = w[0],
            x = __read(w[1], 2),
            M = x[0],
            O = x[1];
          if (f.has(M) && f.has(O) && this.isCoordSelectable(M, f) && this.isCoordSelectable(O, f)) {
            b.push([B, M, O]);
          } else {
            E.push([B, [M, O]]);
          }
        }
      } catch (e) {
        l = {
          error: e
        };
      } finally {
        try {
          I && !I.done && (s = S.return) && s.call(S);
        } finally {
          if (l) throw l.error;
        }
      }
      if (0 === b.length) break;
      for (var D = [], P = 0; P < b.length; P++) {
        var A = __read(b[P], 3),
          R = (M = A[1], O = A[2], P < 26 ? String.fromCharCode(65 + P) : String.fromCharCode(97 + (P - 26) % 26)),
          N = "" + String(C).padStart(2, "0") + R;
        g.set(N, C);
        var j = this.pickDependency(M, v, g),
          k = this.pickDependency(O, v, g);
        D.push({
          id: N,
          dep1: j,
          dep2: k,
          c1: M,
          c2: O
        });
      }
      try {
        for (var L = (c = void 0, __values(D)), G = L.next(); !G.done; G = L.next()) {
          var F = G.value;
          _.push(F.id + ":" + F.dep1 + "~" + F.dep2 + ":" + F.c1 + "|" + F.c2);
          v.set(F.c1, F.id);
          v.set(F.c2, F.id);
          f.delete(F.c1);
          f.delete(F.c2);
        }
      } catch (e) {
        c = {
          error: e
        };
      } finally {
        try {
          G && !G.done && (u = L.return) && u.call(L);
        } finally {
          if (c) throw c.error;
        }
      }
      T = E;
      C++;
    }
    return _.join(",");
  }
  isCoordSelectable(e, t) {
    var o,
      i,
      r,
      a,
      l,
      s,
      c = this.graph.getLazyPredecessors(e);
    try {
      for (var u = __values(c), p = u.next(); !p.done; p = u.next()) {
        var f = p.value;
        if (t.has(f)) return false;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (i = u.return) && i.call(u);
      } finally {
        if (o) throw o.error;
      }
    }
    var d = this.graph.getLazyLeftSemiPreds(e),
      h = this.graph.getLazyRightSemiPreds(e),
      y = false,
      m = false;
    try {
      for (var v = __values(d), g = v.next(); !g.done; g = v.next()) {
        var _ = g.value;
        if (t.has(_)) {
          y = true;
          break;
        }
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
      for (var T = __values(h), C = T.next(); !C.done; C = T.next()) {
        var b = C.value;
        if (t.has(b)) {
          m = true;
          break;
        }
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
    return !(y && m);
  }
  pickDependency(e, t, o) {
    var i,
      a,
      l = [...this.graph.getLazyPredecessors(e), ...this.graph.getLazyLeftSemiPreds(e)],
      s = [];
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = u.value,
          f = t.get(p);
        f && s.push([o.get(f) || 0, f]);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (a = c.return) && a.call(c);
      } finally {
        if (i) throw i.error;
      }
    }
    if (0 === s.length) return "*";
    s.sort(function (e, t) {
      return t[0] - e[0];
    });
    return s[0][1];
  }
}