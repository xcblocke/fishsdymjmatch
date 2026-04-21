import { FlowTileSimulator, cloneFlowTile, createFlowTile } from './FlowTileSimulator';
var c = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 62, 63];
var u = {
  minPairs: 50,
  maxPairs: 70,
  totalPairs: 0,
  boardWidth: 14,
  boardHeight: 18,
  maxLayers: 5,
  minCardId: 1,
  maxCardId: 63,
  puzzleCoreCount: 0,
  hamsterCount: 0,
  hamsterDistance: 2,
  crossDepthRatio: 0.6,
  layerAlignMode: 1,
  excludedCardIds: c
};
function p(e, t, o) {
  return e + "," + t + "," + o;
}
class f {
  _s = null;
  constructor(e) {
    this._s = e % 2147483647;
    this._s <= 0 && (this._s += 2147483646);
    for (var t = 0; t < 3; t++) this.next();
  }
  next() {
    this._s = 16807 * this._s % 2147483647;
    return (this._s - 1) / 2147483646;
  }
  nextInt(e, t) {
    return e + Math.floor(this.next() * (t - e + 1));
  }
  shuffle(e) {
    for (var t, o = e.length - 1; o > 0; o--) {
      var n = Math.floor(this.next() * (o + 1));
      t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
    }
  }
  choice(e) {
    return e[Math.floor(this.next() * e.length)];
  }
}
export class FlowLevelGenerator {
  _actualPairs = 0;
  _puzzleCores = [];
  _hamsters = [];
  _selectedTopology = "pyramid";
  _cfg = null;
  _rng = null;
  get puzzleCores() {
    return this._puzzleCores;
  }
  get hamsters() {
    return this._hamsters;
  }
  get selectedTopology() {
    return this._selectedTopology;
  }
  get actualPairs() {
    return this._actualPairs;
  }
  constructor(e, t = 42) {
    this._cfg = Object.assign(Object.assign({}, u), e);
    this._rng = new f(t);
  }
  static solveClassic(t, o = true) {
    return FlowLevelGenerator._solveClassicMulti(t, 0, o, -1);
  }
  static solveBuffer(t, o = 4, n = true, i = 0, r = []) {
    return FlowLevelGenerator._solveBufferMulti(t, o, n, -1, i, r);
  }
  static solveBufferWithAdjust(t, o = 4, n = true, i?) {
    return FlowLevelGenerator._solveBufferMulti(t, o, n, -1, 12, [], true, i);
  }
  static _solveClassicMulti(t, o = 0, n = true, i = -1) {
    var r = FlowLevelGenerator._solveClassicCore(t, "smart", 0, n);
    if (null !== r) return r;
    var a = FlowLevelGenerator._solveClassicCore(t, "greedy", 0, n);
    if (null !== a) return a;
    for (var l = i >= 0 ? i : o > 0 ? 15 : 10, s = 0; s < l; s++) {
      var c = FlowLevelGenerator._solveClassicCore(t, "random", s, n);
      if (null !== c) return c;
    }
    return null;
  }
  static _solveClassicCore(e, t, o, n) {
    for (var i, l, c = new FlowTileSimulator(e.map(cloneFlowTile)), u = n ? [] : void 0, p = (o + 1) % 2147483647 || 1; !c.isCleared();) {
      var f = c.getAvailablePairs();
      if (0 === f.length) return null;
      var d = void 0;
      if ("smart" === t) {
        var h = -1;
        d = f[0];
        try {
          for (var y = (i = void 0, __values(f)), m = y.next(); !m.done; m = y.next()) {
            var v = __read(m.value, 2),
              g = v[0],
              _ = v[1],
              T = c.getFreedByRemoval(g).length + c.getFreedByRemoval(_).length;
            if (T > h) {
              h = T;
              d = [g, _];
            }
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            m && !m.done && (l = y.return) && l.call(y);
          } finally {
            if (i) throw i.error;
          }
        }
      } else if ("greedy" === t) d = f[0];else {
        p = 16807 * p % 2147483647;
        var C = Math.floor(p / 2147483647 * f.length);
        d = f[Math.min(C, f.length - 1)];
      }
      if (u) {
        var b = f.length;
        c.clearPair(d[0], d[1]);
        var E = c.getAvailablePairCount();
        u.push({
          tile1Id: d[0].id,
          tile2Id: d[1].id,
          cardId: d[0].cardId,
          pairCountBefore: b,
          pairCountAfter: E
        });
      } else c.clearPair(d[0], d[1]);
    }
    return null != u ? u : [];
  }
  static _solveBufferMulti(t, o, n, i = -1, s = 0, c = [], u = false, p?) {
    var f, d;
    var h = FlowLevelGenerator._solveBufferCore(t, "smart", 0, o, n, 0, c, 1);
    if (null !== h) return h;
    if (s > 0) {
      var y = FlowLevelGenerator._solveBufferCore(t, "smart", 0, o, n, s, c, 1);
      if (null !== y) return y;
      var m = [],
        v = FlowLevelGenerator._solveBufferCore(t, "smart", 0, o, n, s, c, 3, u, m);
      if (null !== v && m.length > 0) {
        var g = new Map(t.map(function (e) {
          return [e.id, e];
        }));
        try {
          for (var _ = __values(m), T = _.next(); !T.done; T = _.next()) {
            var C = __read(T.value, 2),
              b = C[0],
              E = C[1],
              S = g.get(b),
              I = g.get(E);
            if (S && I) {
              var w = S.cardId;
              S.cardId = I.cardId;
              I.cardId = w;
            }
          }
        } catch (e) {
          f = {
            error: e
          };
        } finally {
          try {
            T && !T.done && (d = _.return) && d.call(_);
          } finally {
            if (f) throw f.error;
          }
        }
        p && p.push.apply(p, [...m]);
      }
      return v;
    }
    return null;
  }
  static _evalAfterPick(t, o, n, i, r = 1, l = 12) {
    var c, u, p, f, d, h;
    var y = t.clone(),
      m = o.map(function (e) {
        return cloneFlowTile(e);
      }),
      v = y.tiles.find(function (e) {
        return e.id === n.id;
      });
    m.push(cloneFlowTile(v));
    v.isValid = false;
    y._rebuildGridMap();
    var g = m.length - 1,
      _ = m.findIndex(function (e, t) {
        return t < g && e.cardId === m[g].cardId;
      });
    if (_ >= 0) {
      m.splice(g, 1);
      m.splice(_, 1);
    }
    if (m.length >= i) return -100000;
    if (0 === y.getRemainingCount() && 0 === m.length) return 100000;
    var T = y.getFreeTiles();
    if (0 === T.length) return -100000;
    if (r <= 1) return (T.some(function (e) {
      return m.some(function (t) {
        return t.cardId === e.cardId;
      });
    }) ? 3000 : 0) + 100 * y.getAvailablePairCount() + 10 * T.length - 500 * m.length;
    var C = Math.max(3, Math.floor(l / 2)),
      b = T.filter(function (e) {
        return m.some(function (t) {
          return t.cardId === e.cardId;
        });
      });
    if (b.length > 0) {
      var E = -Infinity;
      try {
        for (var S = __values(b), I = S.next(); !I.done; I = S.next()) {
          var w = I.value;
          (N = FlowLevelGenerator._evalAfterPick(y, m, w, i, r - 1, C)) > E && (E = N);
        }
      } catch (e) {
        c = {
          error: e
        };
      } finally {
        try {
          I && !I.done && (u = S.return) && u.call(S);
        } finally {
          if (c) throw c.error;
        }
      }
      return E;
    }
    var B = [],
      x = function x(e) {
        var t = y.getFreedByRemoval(e).length,
          o = T.some(function (t) {
            return t.id !== e.id && t.cardId === e.cardId;
          });
        B.push({
          t: e,
          quick: (o ? 800 : 0) + 10 * t
        });
      };
    try {
      for (var M = __values(T), O = M.next(); !O.done; O = M.next()) x(w = O.value);
    } catch (e) {
      p = {
        error: e
      };
    } finally {
      try {
        O && !O.done && (f = M.return) && f.call(M);
      } finally {
        if (p) throw p.error;
      }
    }
    B.sort(function (e, t) {
      return t.quick - e.quick;
    });
    var D = B.slice(0, Math.min(C, B.length)),
      P = -Infinity;
    try {
      for (var A = __values(D), R = A.next(); !R.done; R = A.next()) {
        var N;
        w = R.value.t;
        (N = FlowLevelGenerator._evalAfterPick(y, m, w, i, r - 1, C)) > P && (P = N);
      }
    } catch (e) {
      d = {
        error: e
      };
    } finally {
      try {
        R && !R.done && (h = A.return) && h.call(A);
      } finally {
        if (d) throw d.error;
      }
    }
    return P;
  }
  static _solveBufferCore(t, o, n, i, r, l = 0, c = [], u = 1, p = false, f = []) {
    for (var d = new FlowTileSimulator(t.map(cloneFlowTile)), h = c.map(cloneFlowTile), y = r ? [] : void 0, m = i, v = (n + 1) % 2147483647 || 1, g = function g() {
        return (v = 16807 * v % 2147483647) / 2147483647;
      }, _ = p ? 20 * t.length : 4 * t.length, T = function T() {
        var t, n, i, r, c, v, _, T, C, b, E, S;
        if (0 === d.getRemainingCount() && 0 === h.length) return {
          value: null != y ? y : []
        };
        if (0 === d.getRemainingCount()) return p ? "break" : {
          value: null
        };
        var I,
          w = d.getFreeTiles();
        if (0 === w.length) return p ? "break" : {
          value: null
        };
        if (h.length >= m) return p && FlowLevelGenerator._performAdjust(d, h, y, f, g) ? "continue" : {
          value: null
        };
        if ("smart" === o && l > 0) {
          if ((G = w.filter(function (e) {
            return h.some(function (t) {
              return t.cardId === e.cardId;
            });
          })).length > 0) {
            if (1 === G.length) I = G[0];else {
              I = G[0];
              var B = -Infinity;
              try {
                for (var x = (t = void 0, __values(G)), M = x.next(); !M.done; M = x.next()) {
                  var O = M.value;
                  if ((L = FlowLevelGenerator._evalAfterPick(d, h, O, m, u, l)) > B) {
                    B = L;
                    I = O;
                  }
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  M && !M.done && (n = x.return) && n.call(x);
                } finally {
                  if (t) throw t.error;
                }
              }
            }
          } else {
            var D = [],
              P = function P(e) {
                var t = d.getFreedByRemoval(e).length,
                  o = w.some(function (t) {
                    return t.id !== e.id && t.cardId === e.cardId;
                  });
                D.push({
                  t: e,
                  quick: (o ? 800 : 0) + 10 * t
                });
              };
            try {
              for (var A = (i = void 0, __values(w)), R = A.next(); !R.done; R = A.next()) P(O = R.value);
            } catch (e) {
              i = {
                error: e
              };
            } finally {
              try {
                R && !R.done && (r = A.return) && r.call(A);
              } finally {
                if (i) throw i.error;
              }
            }
            D.sort(function (e, t) {
              return t.quick - e.quick;
            });
            var N = D.length <= l ? D : D.slice(0, l);
            I = N[0].t;
            B = -Infinity;
            try {
              for (var j = (c = void 0, __values(N)), k = j.next(); !k.done; k = j.next()) {
                var L;
                O = k.value.t;
                if ((L = FlowLevelGenerator._evalAfterPick(d, h, O, m, u, l)) > B) {
                  B = L;
                  I = O;
                }
              }
            } catch (e) {
              c = {
                error: e
              };
            } finally {
              try {
                k && !k.done && (v = j.return) && v.call(j);
              } finally {
                if (c) throw c.error;
              }
            }
          }
        } else if ("smart" === o) {
          var G;
          if ((G = w.filter(function (e) {
            return h.some(function (t) {
              return t.cardId === e.cardId;
            });
          })).length > 0) {
            B = -Infinity;
            I = G[0];
            var F = function F(e) {
              var t = d.getFreedByRemoval(e),
                o = h.filter(function (t) {
                  return t.cardId !== e.cardId;
                }),
                n = (o.length > 0 && t.some(function (e) {
                  return o.some(function (t) {
                    return t.cardId === e.cardId;
                  });
                }) ? 500 : 0) + 10 * t.length;
              if (n > B) {
                B = n;
                I = e;
              }
            };
            try {
              for (var V = (_ = void 0, __values(G)), U = V.next(); !U.done; U = V.next()) F(O = U.value);
            } catch (e) {
              _ = {
                error: e
              };
            } finally {
              try {
                U && !U.done && (T = V.return) && T.call(V);
              } finally {
                if (_) throw _.error;
              }
            }
          } else if (h.length >= m - 2 && h.length > 0) {
            var H = new Set(h.map(function (e) {
              return e.cardId;
            }));
            I = w[0];
            B = -Infinity;
            var W = function W(e) {
              var t = d.getFreedByRemoval(e),
                o = (w.some(function (t) {
                  return t.id !== e.id && t.cardId === e.cardId;
                }) ? 800 : 0) + (H.has(e.cardId) || t.some(function (e) {
                  return H.has(e.cardId);
                }) ? 400 : 0) + 10 * t.length;
              if (o > B) {
                B = o;
                I = e;
              }
            };
            try {
              for (var z = (C = void 0, __values(w)), Y = z.next(); !Y.done; Y = z.next()) W(O = Y.value);
            } catch (e) {
              C = {
                error: e
              };
            } finally {
              try {
                Y && !Y.done && (b = z.return) && b.call(z);
              } finally {
                if (C) throw C.error;
              }
            }
          } else {
            B = -Infinity;
            I = w[0];
            var K = function K(e) {
              var t = d.getFreedByRemoval(e),
                o = (w.some(function (t) {
                  return t.id !== e.id && t.cardId === e.cardId;
                }) ? 800 : 0) + 10 * t.length;
              if (o > B) {
                B = o;
                I = e;
              }
            };
            try {
              for (var J = (E = void 0, __values(w)), Z = J.next(); !Z.done; Z = J.next()) K(O = Z.value);
            } catch (e) {
              E = {
                error: e
              };
            } finally {
              try {
                Z && !Z.done && (S = J.return) && S.call(J);
              } finally {
                if (E) throw E.error;
              }
            }
          }
        } else if ("greedy" === o) {
          var X = w.find(function (e) {
            return h.some(function (t) {
              return t.cardId === e.cardId;
            });
          });
          I = X || w[0];
        } else if (g() < 0.7) {
          if (X = w.find(function (e) {
            return h.some(function (t) {
              return t.cardId === e.cardId;
            });
          })) I = X;else {
            var q = Math.floor(g() * w.length);
            I = w[Math.min(q, w.length - 1)];
          }
        } else {
          q = Math.floor(g() * w.length);
          I = w[Math.min(q, w.length - 1)];
        }
        var Q = h.findIndex(function (e) {
          return e.cardId === I.cardId;
        });
        y && y.push({
          type: "to-buffer",
          tileId: I.id,
          matchTileId: Q >= 0 ? h[Q].id : void 0,
          cardId: I.cardId,
          bufferCount: Q >= 0 ? h.length - 1 : h.length + 1
        });
        h.push(cloneFlowTile(I));
        I.isValid = false;
        d._rebuildGridMap();
        if (Q >= 0) {
          h.splice(h.length - 1, 1);
          h.splice(Q, 1);
        }
        if (h.length >= m) {
          if (!p) return {
            value: null
          };
          if (!FlowLevelGenerator._performAdjust(d, h, y, f, g)) return {
            value: null
          };
        }
      }; _-- > 0;) {
      var C = T();
      if ("object" == typeof C) return C.value;
      if ("break" === C) break;
    }
    return null;
  }
  static _performAdjust(e, t, o, n) {
    if (0 === t.length) return false;
    var i = t.pop(),
      r = e.tiles.find(function (e) {
        return e.id === i.id;
      });
    if (!r) return false;
    r.isValid = true;
    e._rebuildGridMap();
    o && o.length > 0 && o.pop();
    var a = new Set(t.map(function (e) {
      return e.cardId;
    }));
    if (0 === a.size) return false;
    var l = new Set(e.getFreeTiles().map(function (e) {
        return e.id;
      })),
      s = e.tiles.filter(function (e) {
        return e.isValid && !l.has(e.id) && a.has(e.cardId);
      }).sort(function (e, t) {
        var o, n;
        return (null !== (o = e.depth) && void 0 !== o ? o : 999) - (null !== (n = t.depth) && void 0 !== n ? n : 999);
      });
    if (0 === s.length) return false;
    var c = s[0],
      u = r.cardId;
    r.cardId = c.cardId;
    c.cardId = u;
    n.push([r.id, c.id]);
    return true;
  }
  _selectTopology() {
    var e,
      t,
      o = this._cfg.topologyWeights;
    if (o) {
      var n = Object.entries(o).filter(function (e) {
        return __read(e, 2)[1] > 0;
      });
      if (0 !== n.length) {
        var i = n.reduce(function (e, t) {
            return e + __read(t, 2)[1];
          }, 0),
          l = this._rng.next() * i;
        try {
          for (var s = __values(n), c = s.next(); !c.done; c = s.next()) {
            var u = __read(c.value, 2),
              p = u[0];
            if ((l -= u[1]) <= 0) {
              this._selectedTopology = p;
              return;
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            c && !c.done && (t = s.return) && t.call(s);
          } finally {
            if (e) throw e.error;
          }
        }
        this._selectedTopology = n[n.length - 1][0];
      } else this._selectedTopology = "pyramid";
    } else this._selectedTopology = "pyramid";
  }
  _buildTopology() {
    switch (this._selectedTopology) {
      case "cross":
        return this._buildCrossTopology();
      case "multiPeak":
        return this._buildMultiPeakTopology();
      case "checkerboard":
        return this._buildCheckerboardTopology();
      case "spiral":
        return this._buildSpiralTopology();
      case "hourglass":
        return this._buildHourglassTopology();
      case "mirror":
        return this._buildMirrorTopology();
      default:
        return this._buildPyramidTopology();
    }
  }
  generate() {
    var e = this._cfg;
    this._actualPairs = e.totalPairs > 0 ? e.totalPairs : this._rng.nextInt(e.minPairs, e.maxPairs);
    this._selectTopology();
    return this._generateOnce();
  }
  _generateOnce() {
    var e = this._buildBase();
    return this._generateFromBase(e);
  }
  _buildBase() {
    var e = this._buildTopology(),
      t = new FlowTileSimulator(e).peelLayers(),
      o = new Map();
    t.forEach(function (e, t) {
      o.set(t, e.map(function (e) {
        return e.id;
      }));
    });
    return {
      baseTiles: e,
      baseDepthIds: o
    };
  }
  _generateFromBase(e) {
    var t,
      o,
      n,
      i,
      r = e.baseTiles.map(function (e) {
        return cloneFlowTile(e);
      });
    try {
      for (var l = __values(r), c = l.next(); !c.done; c = l.next()) (d = c.value).cardId = 0;
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    var u = new Map();
    try {
      for (var p = __values(r), f = p.next(); !f.done; f = p.next()) {
        var d = f.value;
        u.set(d.id, d);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (i = p.return) && i.call(p);
      } finally {
        if (n) throw n.error;
      }
    }
    var h = new Map();
    e.baseDepthIds.forEach(function (e, t) {
      h.set(t, e.map(function (e) {
        return u.get(e);
      }).filter(Boolean));
    });
    this._assignStrategicCardIds(r, h);
    this._ensureEvenCardIds(r);
    return r;
  }
  _ensureEvenCardIds(e) {
    var t,
      o,
      n,
      i,
      r,
      l,
      s = this._cfg;
    if (e.length % 2 != 0) {
      var c = {};
      try {
        for (var u = __values(e), p = u.next(); !p.done; p = u.next()) c[(b = p.value).cardId] = (c[b.cardId] || 0) + 1;
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          p && !p.done && (o = u.return) && o.call(u);
        } finally {
          if (t) throw t.error;
        }
      }
      var f = e[e.length - 1].cardId,
        d = 0;
      for (var h in c) if (c[h] % 2 == 1 && c[h] > d) {
        d = c[h];
        f = Number(h);
      }
      for (var y = e.length - 1; y >= 0; y--) if (e[y].cardId === f) {
        e.splice(y, 1);
        break;
      }
    }
    var m = {};
    try {
      for (var v = __values(e), g = v.next(); !g.done; g = v.next()) (m[(b = g.value).cardId] = m[b.cardId] || []).push(b);
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (i = v.return) && i.call(v);
      } finally {
        if (n) throw n.error;
      }
    }
    var _ = [];
    for (var h in m) m[h].length % 2 != 0 && _.push(m[h]);
    for (y = 0; y < _.length - 1; y += 2) _[y + 1][_[y + 1].length - 1].cardId = _[y][0].cardId;
    try {
      for (var T = __values(e), C = T.next(); !C.done; C = T.next()) {
        var b;
        ((b = C.value).cardId < s.minCardId || b.cardId > s.maxCardId) && (b.cardId = s.minCardId);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        C && !C.done && (l = T.return) && l.call(T);
      } finally {
        if (r) throw r.error;
      }
    }
  }
  generateAndValidate(e = 50, t = false) {
    return this._generateInternal("classic", e, t);
  }
  generateAndValidateBuffer(e = 50, t = false) {
    return this._generateInternal("buffer", e, t);
  }
  generateAndValidateAsync(e = 30, t = false) {
    return __generator(this, function (o) {
      switch (o.label) {
        case 0:
          return [5, __values(this._generateInternalAsync("classic", e, t))];
        case 1:
          return [2, o.sent()];
      }
    });
  }
  generateAndValidateBufferAsync(e = 30, t = false) {
    return __generator(this, function (o) {
      switch (o.label) {
        case 0:
          return [5, __values(this._generateInternalAsync("buffer", e, t))];
        case 1:
          return [2, o.sent()];
      }
    });
  }
  generateEasy() {
    var e = this._cfg;
    this._actualPairs = e.totalPairs > 0 ? e.totalPairs : this._rng.nextInt(e.minPairs, e.maxPairs);
    this._selectTopology();
    for (var t = null, o = 0; o < 10; o++) {
      t = this._buildBase();
      var n = this._generateFromBase(t);
      if (new FlowTileSimulator(n).getAvailablePairCount() >= 1) return {
        tiles: n,
        solvable: true,
        attempt: o + 1
      };
      this._rng = new f(this._rng.nextInt(1, 2147483646));
    }
    return null;
  }
  _generateInternal(t, o, n) {
    var i,
      r,
      a = this._cfg;
    this._actualPairs = a.totalPairs > 0 ? a.totalPairs : this._rng.nextInt(a.minPairs, a.maxPairs);
    this._selectTopology();
    var l = "buffer" === t,
      c = a.puzzleCoreCount > 0 || (null !== (i = a.hamsterCount) && void 0 !== i ? i : 0) > 0,
      u = n ? -1 : c ? 8 : 5;
    if (l) {
      var p = this._buildBase(),
        d = this._generateFromBase(p),
        h = [];
      return null !== (v = FlowLevelGenerator._solveBufferMulti(d, null !== (r = a.bufferSize) && void 0 !== r ? r : 4, n, -1, 12, [], true, h)) ? {
        tiles: d,
        solvable: true,
        attempt: 1,
        adjustCount: h.length,
        solveBufferPath: n ? v : void 0
      } : {
        tiles: d,
        solvable: false,
        attempt: 1,
        adjustCount: 0
      };
    }
    for (var y = null, m = 0; m < o; m++) {
      p = this._buildBase();
      y = d = this._generateFromBase(p);
      if (new FlowTileSimulator(d).getAvailablePairCount() >= 1) {
        var v;
        if (null !== (v = FlowLevelGenerator._solveClassicMulti(d, a.puzzleCoreCount, n, u))) return {
          tiles: d,
          solvable: true,
          attempt: m + 1,
          solvePath: n ? v : void 0
        };
      }
      this._rng = new f(this._rng.nextInt(1, 2147483646));
    }
    return {
      tiles: y,
      solvable: false,
      attempt: o
    };
  }
  _generateInternalAsync(t, o, n) {
    var r, a, l, c, u, p, d, h, y, m, v, g;
    return __generator(this, function (i) {
      switch (i.label) {
        case 0:
          r = this._cfg;
          this._actualPairs = r.totalPairs > 0 ? r.totalPairs : this._rng.nextInt(r.minPairs, r.maxPairs);
          this._selectTopology();
          return [4];
        case 1:
          i.sent();
          a = "buffer" === t;
          l = r.puzzleCoreCount > 0 || (null !== (v = r.hamsterCount) && void 0 !== v ? v : 0) > 0;
          c = n ? -1 : l ? 8 : 5;
          if (!a) return [3, 3];
          h = this._buildBase();
          y = this._generateFromBase(h);
          return [4];
        case 2:
          i.sent();
          u = [];
          return null !== (m = FlowLevelGenerator._solveBufferMulti(y, null !== (g = r.bufferSize) && void 0 !== g ? g : 4, n, -1, 12, [], true, u)) ? [2, {
            tiles: y,
            solvable: true,
            attempt: 1,
            adjustCount: u.length,
            solveBufferPath: n ? m : void 0
          }] : [2, {
            tiles: y,
            solvable: false,
            attempt: 1,
            adjustCount: 0
          }];
        case 3:
          p = null;
          d = 0;
          i.label = 4;
        case 4:
          if (!(d < o)) return [3, 8];
          h = this._buildBase();
          y = this._generateFromBase(h);
          p = y;
          return [4];
        case 5:
          i.sent();
          return new FlowTileSimulator(y).getAvailablePairCount() >= 1 && null !== (m = FlowLevelGenerator._solveClassicMulti(y, r.puzzleCoreCount, n, c)) ? [2, {
            tiles: y,
            solvable: true,
            attempt: d + 1,
            solvePath: n ? m : void 0
          }] : [4];
        case 6:
          i.sent();
          this._rng = new f(this._rng.nextInt(1, 2147483646));
          i.label = 7;
        case 7:
          d++;
          return [3, 4];
        case 8:
          return [2, {
            tiles: p,
            solvable: false,
            attempt: o
          }];
      }
    });
  }
  _buildPyramidTopology() {
    for (var e = this._cfg, t = 2 * this._actualPairs, o = [], n = {}, i = 0, r = this._distributeTilesToLayers(t, e.maxLayers), a = 0; a < r.length; a++) {
      var s = r[a];
      if (!(s <= 0)) {
        var c;
        c = 0 === a ? this._growBaseLayer(s, i, n, e) : this._growUpperLayer(a, s, i, n, e);
        o.push.apply(o, [...c.tiles]);
        i = c.nextId;
      }
    }
    return o;
  }
  _buildMirrorTopology() {
    var e,
      t,
      o = this._cfg,
      n = 2 * this._actualPairs,
      i = [],
      c = {},
      u = 0,
      p = this._mirrorV.bind(this),
      f = this._distributeTilesToLayers(n, o.maxLayers),
      d = f[0],
      h = Math.floor(o.boardWidth / 2) - 1;
    h -= h % 2;
    var y = Math.floor(o.boardHeight / 2) - 1;
    y -= y % 2;
    var m = 0;
    __read(p(h, 0, o), 1)[0] === h && this._rng.next() < 0.6 && (m = 2 * (1 + Math.floor(3 * this._rng.next())));
    var v = Math.floor(o.boardHeight / 8),
      g = v > 0 ? 2 * Math.floor(this._rng.next() * (v + 1)) * (this._rng.next() < 0.5 ? -1 : 1) : 0,
      _ = Math.max(0, Math.min(o.boardHeight - 2, y + g));
    _ -= _ % 2;
    var T = new Set(),
      C = function C(e, t) {
        return e + "," + t;
      },
      b = [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]],
      E = Math.max(0, d - m),
      S = h - 2,
      I = _,
      w = __read(p(S, I, o), 2),
      B = w[0],
      x = w[1];
    if ((S !== B || I !== x) && i.length + 2 <= E && S >= 0 && S + 1 < o.boardWidth && I >= 0 && I + 1 < o.boardHeight && B >= 0 && B + 1 < o.boardWidth && x >= 0 && x + 1 < o.boardHeight && this._canPlace(S, I, 0, c) && this._canPlace(B, x, 0, c)) {
      var M = createFlowTile(u++, S, I, 0, 0);
      this._occupy(M, c);
      i.push(M);
      T.add(C(S, I));
      var O = createFlowTile(u++, B, x, 0, 0);
      this._occupy(O, c);
      i.push(O);
      T.add(C(B, x));
    }
    for (var D = __read(p(h, _, o), 2), P = D[0], A = D[1], R = h === P && _ === A ? [[h, _]] : [[h, _], [P, A]]; i.length < E && R.length > 0;) {
      this._rng.shuffle(R);
      for (var N = false, j = 0; j < R.length; j++) {
        var k = __read(R[j], 2),
          L = k[0],
          G = k[1];
        this._rng.shuffle(b);
        try {
          for (var F = (e = void 0, __values(b)), V = F.next(); !V.done; V = F.next()) {
            var U = __read(V.value, 2),
              H = U[0],
              W = U[1],
              z = L + H,
              Y = G + W,
              K = __read(p(z, Y, o), 2),
              J = K[0],
              Z = K[1];
            if (!T.has(C(z, Y)) && !T.has(C(J, Z)) && !(z < 0 || Y < 0 || z + 1 >= o.boardWidth || Y + 1 >= o.boardHeight) && !(J < 0 || Z < 0 || J + 1 >= o.boardWidth || Z + 1 >= o.boardHeight) && this._canPlace(z, Y, 0, c) && this._canPlace(J, Z, 0, c) && !(z === J && Y === Z || i.length + 2 > E)) {
              M = createFlowTile(u++, z, Y, 0, 0);
              this._occupy(M, c);
              i.push(M);
              T.add(C(z, Y));
              R.push([z, Y]);
              O = createFlowTile(u++, J, Z, 0, 0);
              this._occupy(O, c);
              i.push(O);
              T.add(C(J, Z));
              R.push([J, Z]);
              N = true;
              break;
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            V && !V.done && (t = F.return) && t.call(F);
          } finally {
            if (e) throw e.error;
          }
        }
        if (N) break;
      }
      N || R.shift();
    }
    if (m > 0) {
      for (var X = [], q = 0; q + 1 < o.boardHeight; q += 2) this._canPlace(h, q, 0, c) && X.push(q);
      this._rng.shuffle(X);
      for (var Q = -2 & Math.min(m, X.length), $ = 0; $ < Q; $++) {
        var ee = createFlowTile(u++, h, X[$], 0, 0);
        this._occupy(ee, c);
        i.push(ee);
      }
    }
    var te = d - i.length;
    te > 0 && f.length > 1 && (f[1] += te);
    for (var oe = 1; oe < f.length; oe++) if (!(f[oe] <= 0)) {
      var ne = this._growUpperLayer(oe, f[oe], u, c, o, p);
      i.push.apply(i, [...ne.tiles]);
      u = ne.nextId;
    }
    return i;
  }
  _mirror(e, t, o) {
    return [o.boardWidth - 2 - e, o.boardHeight - 2 - t];
  }
  _mirrorV(e, t, o) {
    return [o.boardWidth - 2 - e, t];
  }
  _growBaseLayer(e, t, o, n, i = this._mirror.bind(this)) {
    var l, c;
    var u = [],
      p = Math.floor(n.boardWidth / 2) - 1,
      f = Math.floor(n.boardHeight / 2) - 1;
    p -= p % 2;
    f -= f % 2;
    var d = new Set(),
      h = function h(e, t) {
        return e + "," + t;
      },
      y = p - 2,
      m = f,
      v = __read(i(y, m, n), 2),
      g = v[0],
      _ = v[1];
    if ((y !== g || m !== _) && this._canPlace(y, m, 0, o) && this._canPlace(g, _, 0, o)) {
      var T = createFlowTile(t++, y, m, 0, 0);
      this._occupy(T, o);
      u.push(T);
      d.add(h(y, m));
      var C = createFlowTile(t++, g, _, 0, 0);
      this._occupy(C, o);
      u.push(C);
      d.add(h(g, _));
    }
    for (var b = __read(i(p, f, n), 2), E = b[0], S = b[1], I = p === E && f === S ? [[p, f]] : [[p, f], [E, S]], w = [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]]; u.length < e && I.length > 0;) {
      this._rng.shuffle(I);
      for (var B = false, x = 0; x < I.length; x++) {
        var M = __read(I[x], 2),
          O = M[0],
          D = M[1];
        this._rng.shuffle(w);
        try {
          for (var P = (l = void 0, __values(w)), A = P.next(); !A.done; A = P.next()) {
            var R = __read(A.value, 2),
              N = R[0],
              j = R[1],
              k = O + N,
              L = D + j,
              G = __read(i(k, L, n), 2),
              F = G[0],
              V = G[1];
            if (!d.has(h(k, L)) && !d.has(h(F, V)) && !(k < 0 || L < 0 || k + 1 >= n.boardWidth || L + 1 >= n.boardHeight) && !(F < 0 || V < 0 || F + 1 >= n.boardWidth || V + 1 >= n.boardHeight) && this._canPlace(k, L, 0, o) && this._canPlace(F, V, 0, o) && !(k === F && L === V || u.length + 2 > e)) {
              T = createFlowTile(t++, k, L, 0, 0);
              this._occupy(T, o);
              u.push(T);
              d.add(h(k, L));
              I.push([k, L]);
              C = createFlowTile(t++, F, V, 0, 0);
              this._occupy(C, o);
              u.push(C);
              d.add(h(F, V));
              I.push([F, V]);
              B = true;
              break;
            }
          }
        } catch (e) {
          l = {
            error: e
          };
        } finally {
          try {
            A && !A.done && (c = P.return) && c.call(P);
          } finally {
            if (l) throw l.error;
          }
        }
        if (B) break;
      }
      B || I.shift();
    }
    return {
      tiles: u,
      nextId: t
    };
  }
  _growUpperLayer(e, t, o, n, i, l = this._mirror.bind(this)) {
    var c,
      u,
      p,
      f = this;
    for (var d = [], h = [], y = 0; y < i.boardWidth - 1; y++) for (var m = 0; m < i.boardHeight - 1; m++) if (this._canPlace(y, m, e, n)) {
      var v = this._countCovers(y, m, e, n);
      v >= 2 && h.push({
        gx: y,
        gy: m,
        covers: v
      });
    }
    var g = null !== (p = i.layerAlignMode) && void 0 !== p ? p : 1,
      _ = h;
    if (2 === g) {
      _ = h.filter(function (t) {
        return !f._isAlignedWithBelow(t.gx, t.gy, e, n);
      });
    } else {
      4 === g && (_ = h.filter(function (t) {
        return f._isAlignedWithBelow(t.gx, t.gy, e, n);
      }));
    }
    var T = i.boardWidth / 2,
      C = i.boardHeight / 2;
    if (3 === g) {
      _.sort(function (t, o) {
        var i = f._isAlignedWithBelow(t.gx, t.gy, e, n) ? 1 : 0,
          r = f._isAlignedWithBelow(o.gx, o.gy, e, n) ? 1 : 0;
        return r !== i ? r - i : o.covers !== t.covers ? o.covers - t.covers : Math.pow(t.gx - T, 2) + Math.pow(t.gy - C, 2) - (Math.pow(o.gx - T, 2) + Math.pow(o.gy - C, 2));
      });
    } else {
      _.sort(function (e, t) {
        return t.covers !== e.covers ? t.covers - e.covers : Math.pow(e.gx - T, 2) + Math.pow(e.gy - C, 2) - (Math.pow(t.gx - T, 2) + Math.pow(t.gy - C, 2));
      });
    }
    var b = new Set(),
      E = function E(e, t) {
        return e + "," + t;
      };
    try {
      for (var S = __values(_), I = S.next(); !I.done; I = S.next()) {
        var w = I.value;
        if (d.length >= t) break;
        if (!b.has(E(w.gx, w.gy)) && this._canPlace(w.gx, w.gy, e, n)) {
          var B = __read(l(w.gx, w.gy, i), 2),
            x = B[0],
            M = B[1];
          if ((w.gx !== x || w.gy !== M) && !b.has(E(x, M)) && this._canPlace(x, M, e, n) && !(this._countCovers(x, M, e, n) < 1 || d.length + 2 > t)) {
            var O = createFlowTile(o++, w.gx, w.gy, e, 0);
            this._occupy(O, n);
            d.push(O);
            b.add(E(w.gx, w.gy));
            var D = createFlowTile(o++, x, M, e, 0);
            this._occupy(D, n);
            d.push(D);
            b.add(E(x, M));
          }
        }
      }
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        I && !I.done && (u = S.return) && u.call(S);
      } finally {
        if (c) throw c.error;
      }
    }
    return {
      tiles: d,
      nextId: o
    };
  }
  _buildCrossTopology() {
    for (var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._distributeTilesToLayers(n, o.maxLayers), f = Math.floor(o.boardWidth / 2) - 1 - (Math.floor(o.boardWidth / 2) - 1) % 2, d = Math.floor(o.boardHeight / 2) - 1 - (Math.floor(o.boardHeight / 2) - 1) % 2, h = p[0], y = new Set(), m = function m(e, t) {
        return e + "," + t;
      }, v = this._rng.next() < 0.4, g = 2 + Math.floor(4 * this._rng.next()), _ = 2 + Math.floor(4 * this._rng.next()), T = function T(e, t) {
        if (v) {
          var o = e - f,
            n = t - d;
          return Math.abs(o - n) <= 1.414 * g || Math.abs(o + n) <= 1.414 * _;
        }
        var i = Math.abs(e - f),
          r = Math.abs(t - d);
        return i <= g || r <= _;
      }, C = v ? [[2, 2], [2, -2], [-2, 2], [-2, -2], [2, 0], [-2, 0], [0, 2], [0, -2]] : [[2, 0], [-2, 0], [0, 2], [0, -2]], b = [[f, d]]; i.length < h && b.length > 0;) {
      this._rng.shuffle(b);
      for (var E = false, S = 0; S < b.length; S++) {
        var I = __read(b[S], 2),
          w = I[0],
          B = I[1];
        this._rng.shuffle(C);
        try {
          for (var x = (e = void 0, __values(C)), M = x.next(); !M.done; M = x.next()) {
            var O = __read(M.value, 2),
              D = O[0],
              P = O[1],
              A = w + D,
              R = B + P;
            if (T(A, R)) {
              var N = __read(this._mirror(A, R, o), 2),
                j = N[0],
                k = N[1];
              if (T(j, k) && !y.has(m(A, R)) && !y.has(m(j, k)) && !(A < 0 || R < 0 || A + 1 >= o.boardWidth || R + 1 >= o.boardHeight) && !(j < 0 || k < 0 || j + 1 >= o.boardWidth || k + 1 >= o.boardHeight) && this._canPlace(A, R, 0, c) && this._canPlace(j, k, 0, c) && !(A === j && R === k || i.length + 2 > h)) {
                var L = createFlowTile(u++, A, R, 0, 0);
                this._occupy(L, c);
                i.push(L);
                y.add(m(A, R));
                b.push([A, R]);
                var G = createFlowTile(u++, j, k, 0, 0);
                this._occupy(G, c);
                i.push(G);
                y.add(m(j, k));
                b.push([j, k]);
                E = true;
                break;
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            M && !M.done && (t = x.return) && t.call(x);
          } finally {
            if (e) throw e.error;
          }
        }
        if (E) break;
      }
      E || b.shift();
    }
    var F = h - i.length;
    F > 0 && p.length > 1 && (p[1] += F);
    for (var V = 1; V < p.length; V++) if (!(p[V] <= 0)) {
      var U = this._growUpperLayer(V, p[V], u, c, o);
      i.push.apply(i, [...U.tiles]);
      u = U.nextId;
    }
    return i;
  }
  _buildMultiPeakTopology() {
    var e,
      t,
      o,
      n = this._cfg,
      i = 2 * this._actualPairs,
      c = [],
      u = {},
      p = 0,
      f = this._distributeTilesToLayers(i, n.maxLayers),
      d = f[0],
      h = this._rng.nextInt(2, 4),
      y = Math.floor(n.boardWidth / 2),
      m = Math.floor(n.boardHeight / 2),
      v = function v(e) {
        return e - e % 2;
      };
    o = 2 === h ? [[v(Math.floor(0.4 * y)), v(m)], [v(Math.floor(1.6 * y)), v(m)]] : 3 === h ? [[v(y), v(Math.floor(0.35 * m))], [v(Math.floor(0.4 * y)), v(Math.floor(1.3 * m))], [v(Math.floor(1.6 * y)), v(Math.floor(1.3 * m))]] : [[v(Math.floor(0.4 * y)), v(Math.floor(0.4 * m))], [v(Math.floor(1.6 * y)), v(Math.floor(0.4 * m))], [v(Math.floor(0.4 * y)), v(Math.floor(1.6 * m))], [v(Math.floor(1.6 * y)), v(Math.floor(1.6 * m))]];
    for (var g = new Set(), _ = function _(e, t) {
        return e + "," + t;
      }, T = [[2, 0], [0, 2], [-2, 0], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]], C = o.map(function (e) {
        return [e];
      }); c.length < d;) {
      for (var b = false, E = 0; E < C.length && !(c.length >= d); E++) {
        var S = C[E];
        if (0 !== S.length) {
          var I = false;
          this._rng.shuffle(S);
          for (var w = 0; w < S.length && w < 20; w++) {
            var B = __read(S[w], 2),
              x = B[0],
              M = B[1];
            this._rng.shuffle(T);
            try {
              for (var O = (e = void 0, __values(T)), D = O.next(); !D.done; D = O.next()) {
                var P = __read(D.value, 2),
                  A = P[0],
                  R = P[1],
                  N = x + A,
                  j = M + R,
                  k = __read(this._mirror(N, j, n), 2),
                  L = k[0],
                  G = k[1];
                if (!g.has(_(N, j)) && !(N < 0 || j < 0 || N + 1 >= n.boardWidth || j + 1 >= n.boardHeight) && this._canPlace(N, j, 0, u) && (N !== L || j !== G) && !g.has(_(L, G)) && !(L < 0 || G < 0 || L + 1 >= n.boardWidth || G + 1 >= n.boardHeight) && this._canPlace(L, G, 0, u) && !(c.length + 2 > d)) {
                  var F = createFlowTile(p++, N, j, 0, 0);
                  this._occupy(F, u);
                  c.push(F);
                  g.add(_(N, j));
                  S.push([N, j]);
                  var V = createFlowTile(p++, L, G, 0, 0);
                  this._occupy(V, u);
                  c.push(V);
                  g.add(_(L, G));
                  for (var U = E, H = Infinity, W = 0; W < o.length; W++) {
                    var z = Math.pow(L - o[W][0], 2) + Math.pow(G - o[W][1], 2);
                    if (z < H) {
                      H = z;
                      U = W;
                    }
                  }
                  C[U].push([L, G]);
                  I = true;
                  b = true;
                  break;
                }
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                D && !D.done && (t = O.return) && t.call(O);
              } finally {
                if (e) throw e.error;
              }
            }
            if (I) break;
          }
          !I && S.length > 8 && S.splice(0, 3);
        }
      }
      if (!b) break;
    }
    for (var Y = 1; Y < f.length; Y++) if (!(f[Y] <= 0)) {
      var K = this._growUpperLayer(Y, f[Y], p, u, n);
      c.push.apply(c, [...K.tiles]);
      p = K.nextId;
    }
    return c;
  }
  _buildCheckerboardTopology() {
    for (var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._distributeTilesToLayers(n, o.maxLayers), f = p[0], d = [], h = 0; h <= o.boardWidth - 2; h += 2) for (var y = 0; y <= o.boardHeight - 2; y += 2) d.push([h, y]);
    this._rng.shuffle(d);
    var m = new Set(),
      v = function v(e, t) {
        return e + "," + t;
      },
      g = 0;
    try {
      for (var _ = __values(d), T = _.next(); !T.done; T = _.next()) {
        var C = __read(T.value, 2);
        h = C[0], y = C[1];
        if (g >= f) break;
        if (!m.has(v(h, y)) && this._canPlace(h, y, 0, c)) {
          var b = __read(this._mirror(h, y, o), 2),
            E = b[0],
            S = b[1];
          if ((h !== E || y !== S) && !m.has(v(E, S)) && this._canPlace(E, S, 0, c) && !(g + 2 > f)) {
            var I = createFlowTile(u++, h, y, 0, 0);
            this._occupy(I, c);
            i.push(I);
            m.add(v(h, y));
            var w = createFlowTile(u++, E, S, 0, 0);
            this._occupy(w, c);
            i.push(w);
            m.add(v(E, S));
            g += 2;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        T && !T.done && (t = _.return) && t.call(_);
      } finally {
        if (e) throw e.error;
      }
    }
    for (var B = 1; B < p.length; B++) if (!(p[B] <= 0)) {
      var x = this._growUpperLayer(B, p[B], u, c, o);
      i.push.apply(i, [...x.tiles]);
      u = x.nextId;
    }
    if (i.length % 2 != 0 && i.length > 0) {
      i[i.length - 1].isValid = false;
      i.pop();
    }
    return i;
  }
  _buildSpiralTopology() {
    for (var e = this._cfg, t = 2 * this._actualPairs, o = [], n = {}, i = 0, a = this._distributeTilesToLayers(t, e.maxLayers), c = this._generateSpiralPath(e), u = a[0], p = new Set(), f = function f(e, t) {
        return e + "," + t;
      }, d = 0; o.length < u && d < c.length;) {
      var h = __read(c[d++], 2),
        y = h[0],
        m = h[1];
      if (!p.has(f(y, m)) && this._canPlace(y, m, 0, n)) {
        var v = __read(this._mirror(y, m, e), 2),
          g = v[0],
          _ = v[1];
        if ((y !== g || m !== _) && !p.has(f(g, _)) && this._canPlace(g, _, 0, n) && !(o.length + 2 > u)) {
          var T = createFlowTile(i++, y, m, 0, 0);
          this._occupy(T, n);
          o.push(T);
          p.add(f(y, m));
          var C = createFlowTile(i++, g, _, 0, 0);
          this._occupy(C, n);
          o.push(C);
          p.add(f(g, _));
        }
      }
    }
    for (var b = 1; b < a.length; b++) if (!(a[b] <= 0)) {
      var E = this._growUpperLayer(b, a[b], i, n, e);
      o.push.apply(o, [...E.tiles]);
      i = E.nextId;
    }
    return o;
  }
  _generateSpiralPath(e) {
    for (var t = [], o = 0, n = e.boardWidth - 2, i = 0, r = e.boardHeight - 2; o <= n && i <= r;) {
      for (var a = o; a <= n; a += 2) t.push([a, i]);
      for (var l = i += 2; l <= r; l += 2) t.push([n, l]);
      n -= 2;
      if (i <= r) {
        for (a = n; a >= o; a -= 2) t.push([a, r]);
        r -= 2;
      }
      if (o <= n) {
        for (l = r; l >= i; l -= 2) t.push([o, l]);
        o += 2;
      }
    }
    return t;
  }
  _buildHourglassTopology() {
    for (var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._distributeTilesToLayers(n, o.maxLayers), f = p[0], d = Math.floor(o.boardWidth / 2) - 1 - (Math.floor(o.boardWidth / 2) - 1) % 2, h = Math.floor(o.boardHeight / 2) - 1 - (Math.floor(o.boardHeight / 2) - 1) % 2, y = o.boardWidth / 2, m = o.boardHeight / 2, v = this._rng.next() < 0.5, g = 0.15 + 0.5 * this._rng.next(), _ = 0.5 + 2 * this._rng.next(), T = v ? y : m, C = v ? m : y, b = Math.max(1, Math.floor(C * g)), E = function E(e, t) {
        var o = v ? Math.abs(e + 1 - y) / Math.max(T, 1) : Math.abs(t + 1 - m) / Math.max(T, 1);
        return (v ? Math.abs(t + 1 - m) : Math.abs(e + 1 - y)) <= b + (C - b) * Math.pow(Math.min(1, o), _);
      }, S = new Set(), I = function I(e, t) {
        return e + "," + t;
      }, w = [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]], B = [[d, h]]; i.length < f && B.length > 0;) {
      this._rng.shuffle(B);
      for (var x = false, M = 0; M < B.length; M++) {
        var O = __read(B[M], 2),
          D = O[0],
          P = O[1];
        this._rng.shuffle(w);
        try {
          for (var A = (e = void 0, __values(w)), R = A.next(); !R.done; R = A.next()) {
            var N = __read(R.value, 2),
              j = N[0],
              k = N[1],
              L = D + j,
              G = P + k;
            if (E(L, G)) {
              var F = __read(this._mirror(L, G, o), 2),
                V = F[0],
                U = F[1];
              if (E(V, U) && !S.has(I(L, G)) && !S.has(I(V, U)) && !(L < 0 || G < 0 || L + 1 >= o.boardWidth || G + 1 >= o.boardHeight) && !(V < 0 || U < 0 || V + 1 >= o.boardWidth || U + 1 >= o.boardHeight) && this._canPlace(L, G, 0, c) && this._canPlace(V, U, 0, c) && !(L === V && G === U || i.length + 2 > f)) {
                var H = createFlowTile(u++, L, G, 0, 0);
                this._occupy(H, c);
                i.push(H);
                S.add(I(L, G));
                B.push([L, G]);
                var W = createFlowTile(u++, V, U, 0, 0);
                this._occupy(W, c);
                i.push(W);
                S.add(I(V, U));
                B.push([V, U]);
                x = true;
                break;
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            R && !R.done && (t = A.return) && t.call(A);
          } finally {
            if (e) throw e.error;
          }
        }
        if (x) break;
      }
      x || B.shift();
    }
    var z = f - i.length;
    z > 0 && p.length > 1 && (p[1] += z);
    for (var Y = 1; Y < p.length; Y++) if (!(p[Y] <= 0)) {
      var K = this._growUpperLayer(Y, p[Y], u, c, o);
      i.push.apply(i, [...K.tiles]);
      u = K.nextId;
    }
    return i;
  }
  _distributeTilesToLayers(e, t) {
    for (var o, n = null !== (o = this._cfg.layerDecayExponent) && void 0 !== o ? o : 2, i = [], r = 0; r < t; r++) i.push(Math.max(1, Math.pow(t + 1 - r, n)));
    var a = i.reduce(function (e, t) {
        return e + t;
      }, 0),
      l = [],
      s = e;
    for (r = 0; r < i.length; r++) {
      var c = void 0;
      if (r === i.length - 1) c = s;else {
        c = Math.max(2, Math.round(e * i[r] / a));
        c -= c % 2;
      }
      if ((s -= c) < 0) {
        c += s;
        s = 0;
      }
      l.push(Math.max(0, c));
    }
    for (; l.reduce(function (e, t) {
      return e + t;
    }, 0) < e;) l[0] += 2;
    for (; l.reduce(function (e, t) {
      return e + t;
    }, 0) > e;) for (r = l.length - 1; r >= 0; r--) if (l[r] >= 2) {
      l[r] -= 2;
      break;
    }
    return l;
  }
  _occupy(e, t) {
    var o = e.gridX,
      n = e.gridY,
      i = e.layer;
    t[p(o, n, i)] = e.id;
    t[p(o + 1, n, i)] = e.id;
    t[p(o, n + 1, i)] = e.id;
    t[p(o + 1, n + 1, i)] = e.id;
  }
  _canPlace(e, t, o, n) {
    var i,
      r,
      l = [p(e, t, o), p(e + 1, t, o), p(e, t + 1, o), p(e + 1, t + 1, o)];
    try {
      for (var s = __values(l), c = s.next(); !c.done; c = s.next()) if (c.value in n) return false;
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (r = s.return) && r.call(s);
      } finally {
        if (i) throw i.error;
      }
    }
    if (o > 0) {
      var u = [p(e, t, o - 1), p(e + 1, t, o - 1), p(e, t + 1, o - 1), p(e + 1, t + 1, o - 1)];
      return this._cfg.noFloating ? u.every(function (e) {
        return e in n;
      }) : u.some(function (e) {
        return e in n;
      });
    }
    return true;
  }
  _countCovers(e, t, o, n) {
    var i = 0;
    if (o > 0) for (var r = -1; r <= 2; r++) for (var a = -1; a <= 2; a++) p(e + r, t + a, o - 1) in n && i++;
    return i;
  }
  _isAlignedWithBelow(e, t, o, n) {
    if (o <= 0) return false;
    var i = p(e, t, o - 1);
    if (!(i in n)) return false;
    var r = n[i];
    return n[p(e + 1, t, o - 1)] === r && n[p(e, t + 1, o - 1)] === r && n[p(e + 1, t + 1, o - 1)] === r;
  }
  _assignStrategicCardIds(e, t) {
    var o, n, i, r, l, s, u, p, f, d, h, y, m, v, g, _;
    this._puzzleCores = [];
    this._hamsters = [];
    for (var T = [], C = this._cfg.minCardId, b = this._cfg.maxCardId, E = new Set(this._cfg.excludedCardIds || c), S = C; S <= b; S++) E.has(S) || T.push(S);
    this._rng.shuffle(T);
    var I = new Set(),
      w = 0,
      B = function B() {
        if (w >= T.length) return T[w % T.length];
        var e = T[w];
        w++;
        I.add(e);
        return e;
      },
      x = 0,
      M = function M() {
        var e,
          t = 0;
        do {
          e = T[x % T.length];
          x++;
          t++;
        } while (I.has(e) && t < T.length);
        return e;
      },
      O = Array.from(t.keys()).sort(function (e, t) {
        return e - t;
      }),
      D = new Set(),
      P = O.length;
    this._buildPuzzleCores(e, t, D, B);
    this._buildHamsters(e, t, D, B, O);
    var A = O.map(function (e) {
      return (t.get(e) || []).filter(function (e) {
        return !D.has(e.id);
      });
    });
    try {
      for (var R = __values(A), N = R.next(); !N.done; N = R.next()) {
        var j = N.value;
        this._rng.shuffle(j);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        N && !N.done && (n = R.return) && n.call(R);
      } finally {
        if (o) throw o.error;
      }
    }
    var k = this._cfg.maxLayers,
      L = null !== (m = this._cfg.easyPairCount) && void 0 !== m ? m : Math.max(1, 4 - Math.floor(k / 2)),
      G = Math.min(1, Math.max(0, null !== (v = this._cfg.crossDepthRatio) && void 0 !== v ? v : 0.6)),
      F = null !== (g = this._cfg.crossDepthType) && void 0 !== g ? g : 1,
      V = Math.min(4, Math.max(1, null !== (_ = this._cfg.crossDepthSpan) && void 0 !== _ ? _ : 1));
    if (A[0] && A[0].length >= 4) {
      var U = A[0].filter(function (e) {
        return !D.has(e.id);
      });
      U.sort(function (e, t) {
        return 100 * e.gridY + e.gridX - (100 * t.gridY + t.gridX);
      });
      var H = Math.max(0, 1 - G),
        W = Math.min(Math.max(1, Math.round(L * H)), Math.floor(U.length / 4)),
        z = Math.floor(U.length / 2);
      for (S = 0; S < W && S < z; S++) {
        var Y = M();
        U[S].cardId = Y;
        U[S + z].cardId = Y;
        D.add(U[S].id);
        D.add(U[S + z].id);
      }
    }
    for (var K = 0; K < P; K++) {
      var J = A[K].filter(function (e) {
        return !D.has(e.id);
      });
      if (0 !== J.length) {
        if (K + 1 < P) {
          var Z = 0 === K ? 4 : 2,
            X = Math.max(0, J.length - Z),
            q = Math.min(Math.round(J.length * G), X);
          if (q > 0) {
            this._rng.shuffle(J);
            var Q = 0,
              $ = [];
            if (3 === F) for (var ee = P - 1; ee > K; ee--) $.push(ee);else if (2 === F) for (ee = Math.min(K + 2, P - 1); ee < P; ee++) $.push(ee);else for (ee = K + 1; ee < P; ee++) $.push(ee);
            try {
              for (var te = (i = void 0, __values(J)), oe = te.next(); !oe.done; oe = te.next()) {
                var ne = oe.value;
                if (Q >= q) break;
                if (!D.has(ne.id)) {
                  var ie = [];
                  try {
                    for (var re = (l = void 0, __values($)), ae = re.next(); !ae.done; ae = re.next()) if (A[ee = ae.value].some(function (e) {
                      return !D.has(e.id);
                    })) {
                      ie.push(ee);
                      if (ie.length >= V) break;
                    }
                  } catch (e) {
                    l = {
                      error: e
                    };
                  } finally {
                    try {
                      ae && !ae.done && (s = re.return) && s.call(re);
                    } finally {
                      if (l) throw l.error;
                    }
                  }
                  if (0 === ie.length) break;
                  var le = null,
                    se = 0;
                  try {
                    for (var ce = (u = void 0, __values(ie)), ue = ce.next(); !ue.done; ue = ce.next()) {
                      ee = ue.value;
                      try {
                        for (var pe = (f = void 0, __values(A[ee])), fe = pe.next(); !fe.done; fe = pe.next()) {
                          var de = fe.value;
                          if (!D.has(de.id)) {
                            var he = this._tileDist(ne, de);
                            if (he > se) {
                              se = he;
                              le = de;
                            }
                          }
                        }
                      } catch (e) {
                        f = {
                          error: e
                        };
                      } finally {
                        try {
                          fe && !fe.done && (d = pe.return) && d.call(pe);
                        } finally {
                          if (f) throw f.error;
                        }
                      }
                    }
                  } catch (e) {
                    u = {
                      error: e
                    };
                  } finally {
                    try {
                      ue && !ue.done && (p = ce.return) && p.call(ce);
                    } finally {
                      if (u) throw u.error;
                    }
                  }
                  if (!le) break;
                  Y = M();
                  ne.cardId = Y;
                  le.cardId = Y;
                  D.add(ne.id);
                  D.add(le.id);
                  Q++;
                }
              }
            } catch (e) {
              i = {
                error: e
              };
            } finally {
              try {
                oe && !oe.done && (r = te.return) && r.call(te);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        }
        if (K > 0) {
          var ye = J.filter(function (e) {
            return !D.has(e.id);
          });
          if (ye.length >= 8) {
            this._rng.shuffle(ye);
            var me = Math.max(2, Math.round(ye.length * (1 - G))),
              ve = Math.floor((ye.length - me) / 4);
            for (j = 0; j < ve && j < 2; j++) for (Y = M(), S = 0; S < 4; S++) {
              ye[4 * j + S].cardId = Y;
              D.add(ye[4 * j + S].id);
            }
          }
        }
        var ge = J.filter(function (e) {
          return !D.has(e.id);
        });
        this._pairByMaxDistance(ge, D, M);
      }
    }
    var _e = e.filter(function (e) {
      return e.isValid && !D.has(e.id);
    });
    this._pairByMaxDistance(_e, D, M);
    var Te = e.filter(function (e) {
      return !D.has(e.id);
    });
    try {
      for (var Ce = __values(Te), be = Ce.next(); !be.done; be = Ce.next()) be.value.cardId = M();
    } catch (e) {
      h = {
        error: e
      };
    } finally {
      try {
        be && !be.done && (y = Ce.return) && y.call(Ce);
      } finally {
        if (h) throw h.error;
      }
    }
  }
  _pairByMaxDistance(e, t, o) {
    var n,
      i = e.filter(function (e) {
        return !t.has(e.id);
      });
    if (!(i.length < 2)) for (var r = null !== (n = this._cfg.pairDistanceBias) && void 0 !== n ? n : 1, s = new Set(), c = function c() {
        var e,
          n,
          c,
          p,
          f = i.filter(function (e) {
            return !s.has(e.id);
          });
        if (f.length < 2) return "break";
        var d = f.length,
          h = 0,
          y = 1;
        if (Math.abs(r - 0.5) < 0.01) {
          h = u._rng.nextInt(0, d - 1);
          (y = u._rng.nextInt(0, d - 2)) >= h && y++;
        } else {
          var m = d * (d - 1) / 2,
            v = d > 20 ? 30 : m,
            g = [];
          if (v >= m) for (var _ = 0; _ < d; _++) for (var T = _ + 1; T < d; T++) g.push({
            i: _,
            j: T,
            d: u._tileDist(f[_], f[T])
          });else for (var C = 0; C < v; C++) {
            _ = u._rng.nextInt(0, d - 1);
            (T = u._rng.nextInt(0, d - 2)) >= _ && T++;
            g.push({
              i: _,
              j: T,
              d: u._tileDist(f[_], f[T])
            });
          }
          if (r >= 0.9) {
            var b = g[0];
            try {
              for (var E = (e = void 0, __values(g)), S = E.next(); !S.done; S = E.next()) (B = S.value).d > b.d && (b = B);
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                S && !S.done && (n = E.return) && n.call(E);
              } finally {
                if (e) throw e.error;
              }
            }
            h = b.i;
            y = b.j;
          } else if (r <= 0.1) {
            b = g[0];
            try {
              for (var I = (c = void 0, __values(g)), w = I.next(); !w.done; w = I.next()) {
                var B;
                (B = w.value).d < b.d && (b = B);
              }
            } catch (e) {
              c = {
                error: e
              };
            } finally {
              try {
                w && !w.done && (p = I.return) && p.call(I);
              } finally {
                if (c) throw c.error;
              }
            }
            h = b.i;
            y = b.j;
          } else {
            var x = Math.max.apply(Math, [...g.map(function (e) {
              return e.d;
            })]);
            if (x > 0) {
              for (var M = g.map(function (e) {
                  var t = e.d / x;
                  return Math.pow(r > 0.5 ? t : 1 - t, 2) + 0.01;
                }), O = M.reduce(function (e, t) {
                  return e + t;
                }, 0), D = u._rng.next() * O, P = g[g.length - 1], A = 0; A < M.length; A++) if ((D -= M[A]) <= 0) {
                P = g[A];
                break;
              }
              h = P.i;
              y = P.j;
            }
          }
        }
        var R = o();
        f[h].cardId = R;
        f[y].cardId = R;
        t.add(f[h].id);
        t.add(f[y].id);
        s.add(f[h].id);
        s.add(f[y].id);
      }, u = this; "break" !== c(););
  }
  _tileDist(e, t) {
    var o = e.gridX - t.gridX,
      n = e.gridY - t.gridY;
    return Math.sqrt(o * o + n * n);
  }
  _buildPuzzleCores(e, t, o, n) {
    var i,
      r = null !== (i = this._cfg.puzzleCoreCount) && void 0 !== i ? i : 0;
    if (!(r <= 0)) for (var a = new FlowTileSimulator(e), l = 0; l < r; l++) {
      var c = this._findPuzzleCoreSlots(e, a, o);
      if (!c) break;
      var u = n();
      c.a1.cardId = u;
      c.a2.cardId = u;
      c.a3.cardId = u;
      c.a4.cardId = u;
      o.add(c.a1.id);
      o.add(c.a2.id);
      o.add(c.a3.id);
      o.add(c.a4.id);
      this._puzzleCores.push({
        cardId: u,
        lockedTileId: c.a1.id,
        keyTileId: c.a2.id,
        freeTileIds: [c.a3.id, c.a4.id],
        isIndirect: c.isIndirect
      });
    }
  }
  _buildHamsters(e, t, o, n, i) {
    var r,
      a,
      l = null !== (r = this._cfg.hamsterCount) && void 0 !== r ? r : 0;
    if (!(l <= 0)) {
      var s = i.length,
        c = s - 2;
      if (!(c < 2)) for (var u = Math.min(Math.max(2, null !== (a = this._cfg.hamsterDistance) && void 0 !== a ? a : 2), c), p = 0; p < l && this._placeOneHamster(t, o, n, i, s, u, c); p++);
    }
  }
  _placeOneHamster(e, t, o, n, i, s, c) {
    var u,
      p,
      f,
      d,
      h,
      y = [s];
    s > 2 && y.push(s - 1);
    s < c && y.push(s + 1);
    try {
      for (var m = __values(y), v = m.next(); !v.done; v = m.next()) {
        var g = v.value;
        if (!(g < 2 || g > c)) {
          for (var _ = [], T = 1; T + g < i; T++) _.push([T, T + g]);
          if (0 !== _.length) {
            var C = Math.max(0, Math.min(1, null !== (h = this._cfg.hamsterDepthBias) && void 0 !== h ? h : 0.5));
            if (C <= 0) this._rng.shuffle(_);else {
              _.sort(function (e, t) {
                return t[0] + t[1] - (e[0] + e[1]);
              });
              if (C < 1) {
                var b = Math.max(1, Math.ceil(_.length * C)),
                  E = _.slice(0, b),
                  S = _.slice(b);
                this._rng.shuffle(E);
                this._rng.shuffle(S);
                _.length = 0;
                _.push.apply(_, [...E, ...S]);
              }
            }
            try {
              for (var I = (f = void 0, __values(_)), w = I.next(); !w.done; w = I.next()) {
                var B = __read(w.value, 2),
                  x = B[0],
                  M = B[1],
                  O = n[x],
                  D = n[M],
                  P = (e.get(O) || []).filter(function (e) {
                    return !t.has(e.id);
                  }),
                  A = (e.get(D) || []).filter(function (e) {
                    return !t.has(e.id);
                  });
                if (0 !== P.length && 0 !== A.length) {
                  var R = P[this._rng.nextInt(0, P.length - 1)],
                    N = A[this._rng.nextInt(0, A.length - 1)],
                    j = o();
                  R.cardId = j;
                  N.cardId = j;
                  t.add(R.id);
                  t.add(N.id);
                  this._hamsters.push({
                    cardId: j,
                    shallowTileId: R.id,
                    deepTileId: N.id,
                    shallowDepth: O,
                    deepDepth: D,
                    depthDistance: M - x
                  });
                  return true;
                }
              }
            } catch (e) {
              f = {
                error: e
              };
            } finally {
              try {
                w && !w.done && (d = I.return) && d.call(I);
              } finally {
                if (f) throw f.error;
              }
            }
          }
        }
      }
    } catch (e) {
      u = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (p = m.return) && p.call(m);
      } finally {
        if (u) throw u.error;
      }
    }
    return false;
  }
  _findPuzzleCoreSlots(e, t, o) {
    var n,
      i,
      r,
      l,
      s,
      c,
      u,
      p,
      f = e.filter(function (e) {
        return e.isValid && !o.has(e.id) && !t.isCovered(e) && !t.isLocked(e);
      }),
      d = e.filter(function (e) {
        return e.isValid && !o.has(e.id) && t.isCovered(e);
      });
    if (f.length < 4 || d.length < 1) return null;
    this._rng.shuffle(f);
    for (var h = null, y = null, m = 0; m < f.length; m++) {
      for (var v = m + 1; v < f.length; v++) {
        var g = f[m],
          _ = f[v];
        if (this._canPairSimultaneously(g, _, e, t)) {
          h = g;
          y = _;
          break;
        }
      }
      if (h && y) break;
    }
    if (!h || !y) return null;
    var T = f.filter(function (e) {
      return e.id !== h.id && e.id !== y.id;
    });
    if (this._cfg.maxLayers > 2) try {
      for (var C = __values(T), b = C.next(); !b.done; b = C.next()) {
        var E = b.value;
        if (0 !== (O = this._findCoveredByTile(E, d, o, e)).length) {
          var S = O.filter(function (e) {
            return e.id !== h.id && e.id !== y.id;
          });
          try {
            for (var I = (r = void 0, __values(S)), w = I.next(); !w.done; w = I.next()) {
              var B = w.value;
              if (!this._tilesOverlap(E, B) && this._isChainBlockedBy(B, E, e)) return {
                a1: B,
                a2: E,
                a3: h,
                a4: y,
                isIndirect: true
              };
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              w && !w.done && (l = I.return) && l.call(I);
            } finally {
              if (r) throw r.error;
            }
          }
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        b && !b.done && (i = C.return) && i.call(C);
      } finally {
        if (n) throw n.error;
      }
    }
    try {
      for (var x = __values(T), M = x.next(); !M.done; M = x.next()) {
        var O;
        E = M.value;
        if (0 !== (O = this._findCoveredByTile(E, d, o, e)).length) {
          S = O.filter(function (e) {
            return e.id !== h.id && e.id !== y.id;
          });
          try {
            for (var D = (u = void 0, __values(S)), P = D.next(); !P.done; P = D.next()) {
              B = P.value;
              if (this._isChainBlockedBy(B, E, e)) return {
                a1: B,
                a2: E,
                a3: h,
                a4: y,
                isIndirect: !this._tilesOverlap(E, B)
              };
            }
          } catch (e) {
            u = {
              error: e
            };
          } finally {
            try {
              P && !P.done && (p = D.return) && p.call(D);
            } finally {
              if (u) throw u.error;
            }
          }
        }
      }
    } catch (e) {
      s = {
        error: e
      };
    } finally {
      try {
        M && !M.done && (c = x.return) && c.call(x);
      } finally {
        if (s) throw s.error;
      }
    }
    return null;
  }
  _isChainBlockedBy(e, t, o, n) {
    var i,
      r,
      l = this;
    n || (n = new Set());
    if (n.has(e.id)) return false;
    n.add(e.id);
    var s = o.filter(function (t) {
      return t.isValid && t.id !== e.id && t.layer > e.layer && l._tilesOverlap(t, e);
    });
    if (0 === s.length) return false;
    try {
      for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        if (p.id !== t.id && !this._isChainBlockedBy(p, t, o, n)) return false;
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (r = c.return) && r.call(c);
      } finally {
        if (i) throw i.error;
      }
    }
    return true;
  }
  _canPairSimultaneously(e, t, o, n) {
    return !n.isCovered(e) && !n.isLocked(e) && !n.isCovered(t) && !n.isLocked(t) && !(e.gridY === t.gridY && e.layer === t.layer && Math.abs(e.gridX - t.gridX) <= 2);
  }
  _findCoveredByTile(e, t, o, n) {
    var i,
      r,
      l = [];
    try {
      for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
        var u = c.value;
        o.has(u.id) || u.layer >= e.layer || (this._tilesOverlap(e, u) ? l.push(u) : this._hasDependencyChain(e, u, n) && l.push(u));
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (r = s.return) && r.call(s);
      } finally {
        if (i) throw i.error;
      }
    }
    return l;
  }
  _hasDependencyChain(e, t, o) {
    var n, i;
    if (e.layer <= t.layer) return false;
    var r = new Set(),
      l = [e];
    r.add(e.id);
    for (; l.length > 0;) {
      var s = l.shift();
      try {
        for (var c = (n = void 0, __values(o)), u = c.next(); !u.done; u = c.next()) {
          var p = u.value;
          if (p.isValid && !r.has(p.id) && !(p.layer >= s.layer) && this._tilesOverlap(s, p)) {
            if (p.id === t.id) return true;
            r.add(p.id);
            l.push(p);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (i = c.return) && i.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
    }
    return false;
  }
  _tilesOverlap(e, t) {
    if (e.layer <= t.layer) return false;
    var o = e.gridX,
      n = e.gridY,
      i = e.gridX + 1,
      r = e.gridY + 1,
      a = t.gridX,
      l = t.gridY,
      s = t.gridX + 1,
      c = t.gridY + 1;
    return !(i < a || o > s || r < l || n > c);
  }
  checkSolvableBuffer(t) {
    var o;
    return null !== FlowLevelGenerator._solveBufferMulti(t, null !== (o = this._cfg.bufferSize) && void 0 !== o ? o : 4, false, -1, 12);
  }
}