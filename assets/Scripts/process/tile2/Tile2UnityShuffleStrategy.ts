import { ETileType } from '../../simulator/constant/TileTypeEnum';
import { TileMapSimulator } from '../../objects/TileMapSimulator';
export class Tile2UnityShuffleStrategy {
  _sim = null;
  _simMapLayers = [];
  _simTiles = [];
  _context = null;
  constructor(e) {
    this._context = e;
  }
  collectTiles() {
    var e, t;
    this._sim = TileMapSimulator.createSim(this._context);
    this._simMapLayers = this._sim.mapLayers();
    this._simTiles = [];
    for (var o = this._context.getTileMapObject().tileObjectMap(), n = this._simMapLayers.length - 1; n >= 0; n--) {
      var a = [...this._simMapLayers[n].allCards];
      try {
        for (var s = (e = void 0, __values(a)), c = s.next(); !c.done; c = s.next()) {
          var u = c.value,
            p = o.get(u.id);
          if (p && p.isValid) {
            this._simTiles.push(u);
          } else {
            this._simMapLayers[n].removeCard(u);
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
    }
    return this._simTiles;
  }
  collectState(e) {
    return e.map(function (e) {
      return {
        id: e.id,
        cardId: e.cardId,
        type: e.type,
        typeBits: e.getTypeBits(),
        x: e.gridPosX,
        y: e.gridPosY,
        z: e.layer
      };
    });
  }
  collectConstraints(e) {
    var t,
      o,
      n = [],
      i = [];
    try {
      for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
        var s = l.value,
          c = {
            id: s.id,
            x: s.gridPosX,
            y: s.gridPosY,
            z: s.layer,
            type: s.type
          };
        if (this.isFixedTile(s)) i.push({
          id: c.id,
          x: c.x,
          y: c.y,
          z: c.z
        });else {
          var u = this.isFixedTypeSlot(s);
          u && u.length > 0 && n.push({
            id: c.id,
            x: c.x,
            y: c.y,
            z: c.z,
            type: c.type,
            types: u
          });
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return {
      fixedTypeSlots: n,
      fixedTiles: i
    };
  }
  compute(e, t) {
    var o,
      n,
      i,
      a,
      l,
      s,
      c,
      u,
      p,
      f,
      d,
      h,
      y,
      m,
      v = this,
      g = new Set();
    try {
      for (var _ = __values(t.fixedTiles), T = _.next(); !T.done; T = _.next()) {
        var C = T.value;
        g.add(C.id);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        T && !T.done && (n = _.return) && n.call(_);
      } finally {
        if (o) throw o.error;
      }
    }
    var b = new Set(g),
      E = function E(e) {
        var t = S._simTiles.find(function (t) {
          return t.id === e;
        });
        if (!t) return "continue";
        var o = S._simTiles.find(function (e) {
          return e.cardId === t.cardId && !b.has(e.id);
        });
        o && b.add(o.id);
      },
      S = this;
    try {
      for (var I = __values(g), w = I.next(); !w.done; w = I.next()) E(w.value);
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        w && !w.done && (a = I.return) && a.call(I);
      } finally {
        if (i) throw i.error;
      }
    }
    try {
      for (var B = __values(this._simTiles), x = B.next(); !x.done; x = B.next()) {
        var M = x.value;
        if (b.has(M.id)) {
          this._simMapLayers[M.layer].removeCard(M);
          M.isValid = false;
        }
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        x && !x.done && (s = B.return) && s.call(B);
      } finally {
        if (l) throw l.error;
      }
    }
    this._simTiles = this._simTiles.filter(function (e) {
      return !b.has(e.id);
    });
    var O = this.findSequence(this._simTiles);
    if (!O) return null;
    var D = function D(e, t, o) {
        return e + "," + t + "," + o;
      },
      P = function P(e) {
        return D(e.gridPosX, e.gridPosY, e.layer);
      },
      A = new Map();
    try {
      for (var R = __values(t.fixedTypeSlots), N = R.next(); !N.done; N = R.next()) {
        C = N.value;
        A.set(D(C.x, C.y, C.z), C);
      }
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        N && !N.done && (u = R.return) && u.call(R);
      } finally {
        if (c) throw c.error;
      }
    }
    for (var j = [], k = 0; k + 1 < O.length; k += 2) j.push({
      s1: O[k],
      s2: O[k + 1],
      tile1: "",
      tile2: "",
      isSet: false
    });
    var L = new Map();
    try {
      for (var G = __values(this._simTiles), F = G.next(); !F.done; F = G.next()) {
        M = F.value;
        if (!A.has(P(M))) {
          L.has(M.cardId) || L.set(M.cardId, []);
          L.get(M.cardId).push(M);
        }
      }
    } catch (e) {
      p = {
        error: e
      };
    } finally {
      try {
        F && !F.done && (f = G.return) && f.call(G);
      } finally {
        if (p) throw p.error;
      }
    }
    L.forEach(function (e) {
      return v.randomShuffle(e);
    });
    var V = [];
    L.forEach(function (e) {
      for (var t = 0; t + 1 < e.length; t += 2) V.push({
        t1: e[t],
        t2: e[t + 1],
        used: false
      });
    });
    this.randomShuffle(V);
    try {
      for (var U = __values(j), H = U.next(); !H.done; H = U.next()) if (!(J = H.value).isSet) {
        var W = V.find(function (e) {
          return !e.used;
        });
        if (W) {
          W.used = true;
          J.tile1 = W.t1.id;
          J.tile2 = W.t2.id;
          J.isSet = true;
        }
      }
    } catch (e) {
      d = {
        error: e
      };
    } finally {
      try {
        H && !H.done && (h = U.return) && h.call(U);
      } finally {
        if (d) throw d.error;
      }
    }
    var z = [];
    try {
      for (var Y = __values(j), K = Y.next(); !K.done; K = Y.next()) {
        var J;
        if ((J = K.value).tile1 && J.tile2) {
          z.push({
            tileId: J.tile1,
            x: J.s1.gridPosX,
            y: J.s1.gridPosY,
            z: J.s1.layer
          });
          z.push({
            tileId: J.tile2,
            x: J.s2.gridPosX,
            y: J.s2.gridPosY,
            z: J.s2.layer
          });
        }
      }
    } catch (e) {
      y = {
        error: e
      };
    } finally {
      try {
        K && !K.done && (m = Y.return) && m.call(Y);
      } finally {
        if (y) throw y.error;
      }
    }
    return z.length > 0 ? z : null;
  }
  fixFixedTypeSlots(e, t) {
    var o, i;
    if (0 !== t.fixedTypeSlots.length) {
      var a = function a(e, t, o) {
          return e + "," + t + "," + o;
        },
        l = function l(e) {
          return a(e.gridPosX, e.gridPosY, e.layer);
        },
        s = new Map(t.fixedTypeSlots.map(function (e) {
          return [a(e.x, e.y, e.z), e];
        })),
        c = new Map(this._simTiles.map(function (e) {
          return [e.id, e];
        })),
        u = function u(e, t) {
          var o = c.get(e);
          return !!o && t.every(function (e) {
            return o.checkHasType(e);
          });
        },
        p = function p(e) {
          return !s.has(l(e.s1)) && !s.has(l(e.s2));
        },
        f = function f(t, o, i) {
          var a, l, s, c;
          try {
            for (var f = __values(e), d = f.next(); !d.done; d = f.next()) {
              var h = d.value;
              if (h !== t && p(h)) {
                if ((!o || u(h.tile1, o)) && (!i || u(h.tile2, i))) {
                  s = __read([h.tile1, h.tile2, t.tile1, t.tile2], 4), t.tile1 = s[0], t.tile2 = s[1], h.tile1 = s[2], h.tile2 = s[3];
                  return;
                }
                if ((!o || u(h.tile2, o)) && (!i || u(h.tile1, i))) {
                  c = __read([h.tile2, h.tile1, t.tile1, t.tile2], 4), t.tile1 = c[0], t.tile2 = c[1], h.tile1 = c[2], h.tile2 = c[3];
                  return;
                }
              }
            }
          } catch (e) {
            a = {
              error: e
            };
          } finally {
            try {
              d && !d.done && (l = f.return) && l.call(f);
            } finally {
              if (a) throw a.error;
            }
          }
        };
      try {
        for (var d = __values(e), h = d.next(); !h.done; h = d.next()) {
          var y = h.value,
            m = s.get(l(y.s1)),
            v = s.get(l(y.s2)),
            g = !!m && !u(y.tile1, m.types),
            _ = !!v && !u(y.tile2, v.types);
          (g || _) && f(y, m.types, v.types);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          h && !h.done && (i = d.return) && i.call(d);
        } finally {
          if (o) throw o.error;
        }
      }
    }
  }
  applySwap(e) {
    var t,
      o,
      i = this._context.getTileMapObject(),
      a = i.tileObjectMap(),
      l = function l(e, t, o) {
        return e + "," + t + "," + o;
      },
      s = new Map();
    try {
      for (var c = __values(a), u = c.next(); !u.done; u = c.next()) {
        var p = __read(u.value, 2),
          f = p[0],
          d = p[1];
        d.isValid && s.set(l(d.gridPosX, d.gridPosY, d.layer), f);
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
    for (var h = e.map(function (e) {
        var t;
        return null !== (t = s.get(l(e.x, e.y, e.z))) && void 0 !== t ? t : "";
      }), y = 0; y < e.length; y++) {
      var m = e[y].tileId,
        v = h[y];
      if (v !== m) {
        var g = h.indexOf(m);
        i.swapTilePositions(v, m);
        h[g] = v;
        h[y] = m;
      }
    }
  }
  hasSolution() {
    var e = this._context.getTileMapObject();
    e.updateCanMatchTiles();
    return e.getCanMatchCardPairNum() > 0;
  }
  isFixedTile(e) {
    return e.getIsInSlotBar();
  }
  isFixedTypeSlot(e) {
    if (e.checkHasType(ETileType.RollCard)) return [ETileType.RollCard];
  }
  findSequence(e) {
    var t = this,
      o = [],
      n = [...e],
      a = 0,
      l = function l(e = 0) {
        var i, s;
        a = Math.max(a, e);
        if (0 === n.length) return true;
        var c = [];
        try {
          for (var u = __values(n), p = u.next(); !p.done; p = u.next()) {
            var f = p.value;
            0 === t._sim.isCardLock(f) && c.push(f);
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            p && !p.done && (s = u.return) && s.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
        if (c.length < 2) return false;
        t.randomShuffle(c);
        for (var d = 0; d < c.length; d++) {
          t.detach(c[d], n);
          o.push(c[d]);
          for (var h = d + 1; h < c.length; h++) {
            t.detach(c[h], n);
            o.push(c[h]);
            if (l(e + 1)) return true;
            t.attach(c[h], n);
            o.pop();
          }
          t.attach(c[d], n);
          o.pop();
        }
        return false;
      };
    return l(0) ? o : null;
  }
  detach(e, t) {
    var o = t.indexOf(e);
    o > -1 && t.splice(o, 1);
    this._simMapLayers[e.layer].refreshGridState_Remove(e);
  }
  attach(e, t) {
    t.push(e);
    this._simMapLayers[e.layer].refreshGridState_Add(e);
  }
  randomShuffle(e) {
    for (var t = e.length; t > 1;) {
      var o = Math.floor(Math.random() * t--),
        n = e[t];
      e[t] = e[o];
      e[o] = n;
    }
  }
}