export class MCharTriggerManager {
  graph = null;
  active = false;
  primaryResId = null;
  primaryPairData = null;
  pairedCoords = new Set();
  lockedCoords = new Set();
  lockedResIds = new Set();
  stage = -1;
  xyz = null;
  abc = null;
  xyzPartner = null;
  abcPartner = null;
  groups = [];
  constructor(e) {
    this.graph = e;
  }
  reset() {
    this.active = false;
    this.primaryResId = null;
    this.primaryPairData = null;
    this.pairedCoords.clear();
    this.lockedCoords.clear();
    this.lockedResIds.clear();
    this.stage = -1;
    this.xyz = this.abc = this.xyzPartner = this.abcPartner = null;
    this.groups = [];
  }
  initSingleM(e, t) {
    var o,
      r,
      a,
      l,
      s,
      c,
      u = new Map();
    try {
      for (var p = __values(t), f = p.next(); !f.done; f = p.next()) {
        var d = (T = f.value)[0].resId;
        u.set(d, (u.get(d) || 0) + 2);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (r = p.return) && r.call(p);
      } finally {
        if (o) throw o.error;
      }
    }
    var h = [];
    try {
      for (var y = __values(u), m = y.next(); !m.done; m = y.next()) {
        var v = __read(m.value, 2);
        d = v[0];
        4 === v[1] && h.push(d);
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        m && !m.done && (l = y.return) && l.call(y);
      } finally {
        if (a) throw a.error;
      }
    }
    if (0 !== h.length) {
      this.primaryResId = h[Math.floor(Math.random() * h.length)];
      try {
        for (var g = __values(t), _ = g.next(); !_.done; _ = g.next()) {
          var T;
          if ((T = _.value)[0].resId === this.primaryResId) {
            this.primaryPairData = T;
            break;
          }
        }
      } catch (e) {
        s = {
          error: e
        };
      } finally {
        try {
          _ && !_.done && (c = g.return) && c.call(g);
        } finally {
          if (s) throw s.error;
        }
      }
      var C = this.findPredPair(e),
        b = C.bestXyz,
        E = C.bestAbc;
      if (b) {
        this.xyz = b;
        this.abc = E;
        this.active = true;
        this.stage = 0;
        this.lockedCoords = new Set([this.xyz, this.abc]);
      }
    }
  }
  checkSingleMTrigger(e, t, o) {
    var n = this;
    if (!this.active || this.stage < 0) return null;
    var i = new Set(e.map(function (e) {
      return n.graph.tileToCoord(e);
    }));
    if (0 === this.stage && this.xyz && this.abc) {
      var a = t.get(this.xyz);
      if (!a || !o.has(a)) {
        this.cancelSingleM();
        return null;
      }
      if (!i.has(this.xyz)) return null;
      var l = [...i].filter(function (e) {
        return e !== n.xyz && !n.lockedCoords.has(e);
      });
      if (0 === l.length) {
        this.cancelSingleM();
        return null;
      }
      this.xyzPartner = l[Math.floor(Math.random() * l.length)];
      var s = new Set([...this.graph.getExpanded("pred", this.abc), ...this.graph.getExpanded("left", this.abc)]),
        c = l.filter(function (e) {
          return e !== n.xyzPartner && !s.has(e) && !n.graph.getExpanded("pred", e).has(n.abc);
        });
      0 === c.length && (c = l.filter(function (e) {
        return e !== n.xyzPartner && !n.graph.getExpanded("pred", n.abc).has(e);
      }));
      if (0 === c.length) {
        this.cancelSingleM();
        return null;
      }
      this.abcPartner = c[Math.floor(Math.random() * c.length)];
      this.lockedCoords = new Set([this.abc, this.abcPartner]);
      this.stage = 1;
      this.pairedCoords.add(this.xyz);
      this.pairedCoords.add(this.xyzPartner);
      return [t.get(this.xyz), t.get(this.xyzPartner)];
    }
    if (1 === this.stage && this.abc && this.abcPartner && i.has(this.abc) && i.has(this.abcPartner)) {
      this.stage = 2;
      this.active = false;
      this.lockedCoords.clear();
      this.pairedCoords.add(this.abc);
      this.pairedCoords.add(this.abcPartner);
      return [t.get(this.abc), t.get(this.abcPartner)];
    }
    return null;
  }
  cancelSingleM() {
    this.active = false;
    this.stage = -1;
    this.lockedCoords.clear();
  }
  initDualM(e, t) {
    var o,
      a,
      l,
      s,
      c,
      u,
      p,
      f,
      d,
      h,
      y = this,
      m = new Map();
    try {
      for (var v = __values(t), g = v.next(); !g.done; g = v.next()) {
        var _ = g.value[0].resId;
        m.set(_, (m.get(_) || 0) + 2);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (a = v.return) && a.call(v);
      } finally {
        if (o) throw o.error;
      }
    }
    var T = [],
      C = [];
    try {
      for (var b = __values(m), E = b.next(); !E.done; E = b.next()) {
        var S = __read(E.value, 2),
          I = (_ = S[0], S[1]);
        if (4 === I) {
          T.push(_);
        } else {
          I > 4 && C.push(_);
        }
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        E && !E.done && (s = b.return) && s.call(b);
      } finally {
        if (l) throw l.error;
      }
    }
    this.shuffleArray(T);
    this.shuffleArray(C);
    var w = [...T, ...C].slice(0, 2);
    if (0 !== w.length) {
      var B = new Map(e.map(function (e) {
          return [y.graph.tileToCoord(e), e];
        })),
        x = new Set(e.filter(function (e) {
          return e.isValid;
        })),
        M = new Set(this.graph.getSelectableTiles(x, B).map(function (e) {
          return y.graph.tileToCoord(e);
        })),
        O = [];
      try {
        for (var D = __values(e), P = D.next(); !P.done; P = D.next()) {
          var A = P.value,
            R = this.graph.tileToCoord(A),
            N = this.graph.getExpanded("pred", R);
          if (0 !== N.size) try {
            for (var j = (p = void 0, __values(N)), k = j.next(); !k.done; k = j.next()) {
              var L = k.value;
              if (L !== R) {
                var G = B.get(L);
                G && O.push({
                  score: [M.has(L) ? 0 : 1, G.layer - A.layer >= 2 ? 1 : 0],
                  xyz: L,
                  abc: R
                });
              }
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
      } catch (e) {
        c = {
          error: e
        };
      } finally {
        try {
          P && !P.done && (u = D.return) && u.call(D);
        } finally {
          if (c) throw c.error;
        }
      }
      var F = new Set(),
        V = function V(e) {
          var o,
            i,
            r = O.filter(function (e) {
              return !F.has(e.xyz) && !F.has(e.abc);
            });
          if (0 === r.length) return "continue";
          r.sort(function (e, t) {
            return e.score[0] !== t.score[0] ? t.score[0] - e.score[0] : t.score[1] - e.score[1];
          });
          var a = r[0].score,
            l = r.filter(function (e) {
              return e.score[0] === a[0] && e.score[1] === a[1];
            }),
            s = l[Math.floor(Math.random() * l.length)];
          F.add(s.xyz);
          F.add(s.abc);
          var c = null;
          try {
            for (var u = (o = void 0, __values(t)), p = u.next(); !p.done; p = u.next()) {
              var f = p.value;
              if (f[0].resId === e) {
                c = f;
                break;
              }
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
          U.groups.push({
            active: true,
            resId: e,
            stage: 0,
            xyz: s.xyz,
            abc: s.abc,
            xyzPartner: null,
            abcPartner: null,
            pairData: c
          });
          U.lockedCoords.add(s.xyz);
          U.lockedCoords.add(s.abc);
          U.lockedResIds.add(e);
        },
        U = this;
      try {
        for (var H = __values(w), W = H.next(); !W.done; W = H.next()) V(W.value);
      } catch (e) {
        d = {
          error: e
        };
      } finally {
        try {
          W && !W.done && (h = H.return) && h.call(H);
        } finally {
          if (d) throw d.error;
        }
      }
      this.active = this.groups.some(function (e) {
        return e.active;
      });
      this.groups.length > 0 && (this.primaryResId = this.groups[0].resId);
    }
  }
  checkDualMTrigger(e, t, o) {
    var i,
      a,
      l,
      s,
      c = this,
      u = new Set(e.map(function (e) {
        return c.graph.tileToCoord(e);
      }));
    try {
      for (var p = __values(this.groups), f = p.next(); !f.done; f = p.next()) if ((_ = f.value).active && 1 === _.stage && _.abc && _.abcPartner) {
        var d = t.get(_.abc),
          h = t.get(_.abcPartner);
        if (d && h && o.has(d) && o.has(h)) {
          if (u.has(_.abc) && u.has(_.abcPartner)) {
            this.clearGroupLocks(_);
            _.stage = 2;
            _.active = false;
            this.pairedCoords.add(_.abc);
            this.pairedCoords.add(_.abcPartner);
            this.active = this.groups.some(function (e) {
              return e.active;
            });
            return [d, h];
          }
        } else {
          this.clearGroupLocks(_);
          _.active = false;
          _.stage = -1;
        }
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (a = p.return) && a.call(p);
      } finally {
        if (i) throw i.error;
      }
    }
    var y = function y(e) {
        if (!e.active || 0 !== e.stage || !e.xyz || !e.abc) return "continue";
        var n = t.get(e.xyz);
        if (!n || !o.has(n)) {
          m.lockedCoords.delete(e.xyz);
          m.lockedCoords.delete(e.abc);
          e.active = false;
          e.stage = -1;
          return "continue";
        }
        if (!u.has(e.xyz)) return "continue";
        var i = [...u].filter(function (t) {
          return t !== e.xyz && !c.lockedCoords.has(t);
        });
        if (0 === i.length) {
          e.active = false;
          e.stage = -1;
          m.lockedCoords.delete(e.xyz);
          m.lockedCoords.delete(e.abc);
          return "continue";
        }
        e.xyzPartner = i[Math.floor(Math.random() * i.length)];
        var a = new Set([...m.graph.getExpanded("pred", e.abc), ...m.graph.getExpanded("left", e.abc)]),
          l = i.filter(function (t) {
            return t !== e.xyzPartner && !a.has(t) && !c.graph.getExpanded("pred", t).has(e.abc);
          });
        0 === l.length && (l = i.filter(function (t) {
          return t !== e.xyzPartner && !c.graph.getExpanded("pred", e.abc).has(t);
        }));
        if (0 === l.length) {
          e.active = false;
          e.stage = -1;
          m.lockedCoords.delete(e.xyz);
          m.lockedCoords.delete(e.abc);
          return "continue";
        }
        e.abcPartner = l[Math.floor(Math.random() * l.length)];
        m.lockedCoords.delete(e.xyz);
        m.lockedCoords.delete(e.xyzPartner);
        m.lockedCoords.add(e.abc);
        m.lockedCoords.add(e.abcPartner);
        e.stage = 1;
        m.pairedCoords.add(e.xyz);
        m.pairedCoords.add(e.xyzPartner);
        return {
          value: [t.get(e.xyz), t.get(e.xyzPartner)]
        };
      },
      m = this;
    try {
      for (var v = __values(this.groups), g = v.next(); !g.done; g = v.next()) {
        var _,
          T = y(_ = g.value);
        if ("object" == typeof T) return T.value;
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (s = v.return) && s.call(v);
      } finally {
        if (l) throw l.error;
      }
    }
    return null;
  }
  findGroupForCoord(e, t) {
    var o, i;
    try {
      for (var r = __values(this.groups), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if ([l.xyz, l.abc, l.xyzPartner, l.abcPartner].includes(e) || [l.xyz, l.abc, l.xyzPartner, l.abcPartner].includes(t)) return l;
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
    return null;
  }
  findPredPair(e) {
    var t,
      o,
      i,
      r,
      a = this,
      l = new Map(e.map(function (e) {
        return [a.graph.tileToCoord(e), e];
      })),
      s = new Set(e.filter(function (e) {
        return e.isValid;
      })),
      c = new Set(this.graph.getSelectableTiles(s, l).map(function (e) {
        return a.graph.tileToCoord(e);
      })),
      u = [];
    try {
      for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          h = this.graph.tileToCoord(d),
          y = this.graph.getExpanded("pred", h);
        if (0 !== y.size) try {
          for (var m = (i = void 0, __values(y)), v = m.next(); !v.done; v = m.next()) {
            var g = v.value;
            if (g !== h) {
              var _ = l.get(g);
              _ && u.push({
                score: [c.has(g) ? 0 : 1, _.layer - d.layer >= 2 ? 1 : 0],
                xyz: g,
                abc: h
              });
            }
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            v && !v.done && (r = m.return) && r.call(m);
          } finally {
            if (i) throw i.error;
          }
        }
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
    if (0 === u.length) return {
      bestXyz: null,
      bestAbc: null
    };
    u.sort(function (e, t) {
      return e.score[0] !== t.score[0] ? t.score[0] - e.score[0] : t.score[1] - e.score[1];
    });
    var T = u[0].score,
      C = u.filter(function (e) {
        return e.score[0] === T[0] && e.score[1] === T[1];
      }),
      b = C[Math.floor(Math.random() * C.length)];
    return {
      bestXyz: b.xyz,
      bestAbc: b.abc
    };
  }
  clearGroupLocks(e) {
    e.abc && this.lockedCoords.delete(e.abc);
    e.abcPartner && this.lockedCoords.delete(e.abcPartner);
    e.xyz && this.lockedCoords.delete(e.xyz);
    e.xyzPartner && this.lockedCoords.delete(e.xyzPartner);
  }
  shuffleArray(e) {
    for (var t, o = e.length - 1; o > 0; o--) {
      var n = Math.floor(Math.random() * (o + 1));
      t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
    }
  }
}