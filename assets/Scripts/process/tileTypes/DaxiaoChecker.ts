import { BaseCoreObject } from '../../BaseCoreObject';
import GameConstant from '../../core/simulator/constant/GameConstant';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
export default class DaxiaoChecker extends BaseCoreObject {
  getDaxiaoMaxCount() {
    return GameConstant.MaxTileCountY;
  }
  getCanClearDaxiaoCardInfos(e) {
    var t, o, n, i, r, s, c, u, f, d, h, y, m, v;
    if (e && 2 == e.length) {
      var g = e[0],
        _ = e[1],
        T = this._context.getTileMapObject().getTileObject(g),
        C = this._context.getTileMapObject().getTileObject(_);
      if (T && C && (T.checkHasType(ETileType.DaxiaoCard) || C.checkHasType(ETileType.DaxiaoCard))) {
        var b = T.checkHasType(ETileType.DaxiaoCard) ? T : C,
          E = this._context.getTileMapObject().aliveTiles(),
          S = new Map();
        try {
          for (var I = __values(E), w = I.next(); !w.done; w = I.next()) if ((j = w.value).id != T.id && j.id != C.id && j.checkIsNormal() && Math.abs(j.gridPosX - b.gridPosX) <= 1 && !this.context.getTileMapObject().isHasCoverWithOutTiles(j, e)) {
            S.has(j.cardId) || S.set(j.cardId, []);
            S.get(j.cardId).push(j);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            w && !w.done && (o = I.return) && o.call(I);
          } finally {
            if (t) throw t.error;
          }
        }
        var B = [],
          x = new Set();
        try {
          for (var M = __values(S.entries()), O = M.next(); !O.done; O = M.next()) for (var D = __read(O.value, 2), P = (D[0], D[1]); P.length >= 2;) {
            var A = P.splice(0, 2);
            B.push(A);
            try {
              for (var R = (r = void 0, __values(A)), N = R.next(); !N.done; N = R.next()) {
                var j = N.value;
                x.add(j.id);
              }
            } catch (e) {
              r = {
                error: e
              };
            } finally {
              try {
                N && !N.done && (s = R.return) && s.call(R);
              } finally {
                if (r) throw r.error;
              }
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            O && !O.done && (i = M.return) && i.call(M);
          } finally {
            if (n) throw n.error;
          }
        }
        var k = this.getDaxiaoMaxCount(),
          L = [];
        if (B.length > k) B = this.context.randomGenerator.randomElements(B, k);else {
          var G = k - B.length;
          if (G > 0) {
            try {
              for (var F = __values(S.entries()), V = F.next(); !V.done; V = F.next()) {
                var U = __read(V.value, 2);
                U[0];
                (P = U[1]).length > 0 && L.push(P[0]);
              }
            } catch (e) {
              c = {
                error: e
              };
            } finally {
              try {
                V && !V.done && (u = F.return) && u.call(F);
              } finally {
                if (c) throw c.error;
              }
            }
            L = this.context.randomGenerator.randomElements(L, G);
            try {
              for (var H = __values(L), W = H.next(); !W.done; W = H.next()) {
                j = W.value;
                x.add(j.id);
              }
            } catch (e) {
              f = {
                error: e
              };
            } finally {
              try {
                W && !W.done && (d = H.return) && d.call(H);
              } finally {
                if (f) throw f.error;
              }
            }
          }
        }
        x.add(T.id);
        x.add(C.id);
        for (var z = E.filter(function (e) {
            return !x.has(e.id) && e.checkIsNormal();
          }), Y = this.context.getTileMapObject(), K = [], J = function J(e) {
            var t,
              o,
              n,
              i,
              r,
              l,
              s = L[e],
              c = null,
              u = z.filter(function (e) {
                return e.cardId === s.cardId;
              });
            try {
              for (var p = (t = void 0, __values(u)), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                if (!Y.isCardLock(d)) {
                  c = d;
                  break;
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
            if (!c) try {
              for (var h = (n = void 0, __values(u)), y = h.next(); !y.done; y = h.next()) {
                d = y.value;
                if (!Y.isHasCover(d)) {
                  c = d;
                  break;
                }
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                y && !y.done && (i = h.return) && i.call(h);
              } finally {
                if (n) throw n.error;
              }
            }
            if (!c) try {
              for (var m = (r = void 0, __values(u)), v = m.next(); !v.done; v = m.next()) {
                d = v.value;
                (!c || d.layer > c.layer) && (c = d);
              }
            } catch (e) {
              r = {
                error: e
              };
            } finally {
              try {
                v && !v.done && (l = m.return) && l.call(m);
              } finally {
                if (r) throw r.error;
              }
            }
            if (c) {
              K.push([s, c]);
              x.add(c.id);
              z = z.filter(function (e) {
                return e.id != c.id;
              });
            }
          }, Z = 0; Z < L.length; Z++) J(Z);
        var X = [];
        try {
          for (var q = __values(K), Q = q.next(); !Q.done; Q = q.next()) {
            var $ = Q.value;
            X.push({
              tileId1: $[0].id,
              tileId2: $[1].id,
              y: $[0].gridPosY,
              isFix: false
            });
          }
        } catch (e) {
          h = {
            error: e
          };
        } finally {
          try {
            Q && !Q.done && (y = q.return) && y.call(q);
          } finally {
            if (h) throw h.error;
          }
        }
        try {
          for (var ee = __values(B), te = ee.next(); !te.done; te = ee.next()) {
            var oe = te.value;
            X.push({
              tileId1: oe[0].id,
              tileId2: oe[1].id,
              isFix: true,
              y: oe[0].gridPosY
            });
          }
        } catch (e) {
          m = {
            error: e
          };
        } finally {
          try {
            te && !te.done && (v = ee.return) && v.call(ee);
          } finally {
            if (m) throw m.error;
          }
        }
        X.sort(function (e, t) {
          return (e.y || 0) - (t.y || 0);
        });
        this.fixFinalMatchInfos(X, S, e);
        return X;
      }
    }
  }
  getCanClearDaxiaoCardInfos_tile2(e) {
    var t,
      o,
      n,
      i,
      r,
      c,
      u,
      f,
      d,
      h,
      y,
      m,
      v = this;
    if (e && 2 == e.length) {
      var g = e[0],
        _ = e[1],
        T = this._context.getTileMapObject().getTileObject(g),
        C = this._context.getTileMapObject().getTileObject(_),
        b = this._context.getTileMapObject();
      if (T && C && (T.checkHasType(ETileType.DaxiaoCard) || C.checkHasType(ETileType.DaxiaoCard))) {
        var E = T.checkHasType(ETileType.DaxiaoCard) ? T : C,
          S = this._context.getTileMapObject().aliveTiles(),
          I = new Map();
        try {
          for (var w = __values(S), B = w.next(); !B.done; B = w.next()) if ((k = B.value).id != T.id && k.id != C.id && k.checkIsNormal()) if (k.getIsInSlotBar()) {
            I.has(k.cardId) || I.set(k.cardId, []);
            I.get(k.cardId).push(k);
          } else if (Math.abs(k.gridPosX - E.gridPosX) <= 1 && !this.context.getTileMapObject().isHasCoverWithOutTiles_tile2(k, e)) {
            I.has(k.cardId) || I.set(k.cardId, []);
            I.get(k.cardId).push(k);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            B && !B.done && (o = w.return) && o.call(w);
          } finally {
            if (t) throw t.error;
          }
        }
        var x = [],
          M = new Set();
        M.add(T.id);
        M.add(C.id);
        try {
          for (var O = __values(I.entries()), D = O.next(); !D.done; D = O.next()) for (var P = __read(D.value, 2), A = (P[0], P[1]); A.length >= 2;) {
            var R = A.splice(0, 2);
            x.push({
              tileId1: R[0].id,
              tileId2: R[1].id,
              isFix: true,
              y: R[0].gridPosY,
              isInSlotBar: R[0].getIsInSlotBar() || R[1].getIsInSlotBar()
            });
            try {
              for (var N = (r = void 0, __values(R)), j = N.next(); !j.done; j = N.next()) {
                var k = j.value;
                M.add(k.id);
              }
            } catch (e) {
              r = {
                error: e
              };
            } finally {
              try {
                j && !j.done && (c = N.return) && c.call(N);
              } finally {
                if (r) throw r.error;
              }
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            D && !D.done && (i = O.return) && i.call(O);
          } finally {
            if (n) throw n.error;
          }
        }
        var L = this.getDaxiaoMaxCount();
        try {
          for (var G = __values(I.entries()), F = G.next(); !F.done; F = G.next()) {
            var V = __read(F.value, 2);
            V[0];
            (A = V[1]).length > 0 && x.push({
              tileId1: A[0].id,
              tileId2: "",
              isFix: false,
              y: A[0].gridPosY,
              isInSlotBar: A[0].getIsInSlotBar()
            });
          }
        } catch (e) {
          u = {
            error: e
          };
        } finally {
          try {
            F && !F.done && (f = G.return) && f.call(G);
          } finally {
            if (u) throw u.error;
          }
        }
        var U = [];
        if (x.length > L) {
          var H = x.filter(function (e) {
              return !e.isInSlotBar;
            }),
            W = x.filter(function (e) {
              return e.isInSlotBar;
            }),
            z = L - W.length;
          z > 0 && (H = this.context.randomGenerator.randomElements(H, z));
          U.push.apply(U, [...H]);
          U.push.apply(U, [...W]);
        } else U.push.apply(U, [...x]);
        try {
          for (var Y = __values(U), K = Y.next(); !K.done; K = Y.next()) (q = K.value).isFix || M.add(q.tileId1);
        } catch (e) {
          d = {
            error: e
          };
        } finally {
          try {
            K && !K.done && (h = Y.return) && h.call(Y);
          } finally {
            if (d) throw d.error;
          }
        }
        var J = function J(e) {
          var t,
            o,
            n,
            i = v._context.getTileMapObject().getTileObject(e),
            r = [];
          try {
            for (var l = __values(S), s = l.next(); !s.done; s = l.next()) {
              var c = s.value;
              !M.has(c.id) && c.checkIsNormal() && c.cardId == i.cardId && (b.isCardLock(c) ? b.isHasCover(c) ? c.layer > i.layer ? r.push({
                tile: c,
                sortNum: c.layer
              }) : r.push({
                tile: c,
                sortNum: 0
              }) : r.push({
                tile: c,
                sortNum: 998
              }) : r.push({
                tile: c,
                sortNum: 999
              }));
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              s && !s.done && (o = l.return) && o.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
          r.sort(function (e, t) {
            return t.sortNum - e.sortNum;
          });
          r[0] && M.add(r[0].tile.id);
          return null === (n = r[0]) || void 0 === n ? void 0 : n.tile;
        };
        try {
          for (var Z = __values(U), X = Z.next(); !X.done; X = Z.next()) {
            var q;
            if (!(q = X.value).isFix) {
              var Q = J(q.tileId1);
              Q && (q.tileId2 = Q.id);
            }
          }
        } catch (e) {
          y = {
            error: e
          };
        } finally {
          try {
            X && !X.done && (m = Z.return) && m.call(Z);
          } finally {
            if (y) throw y.error;
          }
        }
        (U = U.filter(function (e) {
          return e.isFix || "" != e.tileId2;
        })).sort(function (e, t) {
          return (e.y || 0) - (t.y || 0);
        });
        this.fixFinalMatchInfos(U, I, e);
        return U;
      }
    }
  }
  @mj.traitEvent("DaxiaoCkr_fixFinal")
  fixFinalMatchInfos() {}
}