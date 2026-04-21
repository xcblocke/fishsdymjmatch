import { ETileType } from './simulator/constant/TileTypeEnum';
import CharacterGenerator, { ECoordSelectionType, ECharSelectionType } from './CharacterGenerator';
import { DyeingConfig } from './DyeingConfig';
import { EDifficultyType, isResIdBlacklisted } from './IClassicExtractTypes';
import { ResidualCardManager } from './ResidualCardManager';
import { SymmetricShuffleCoordSel } from './SymmetricShuffleCoordSel';
var n;
var i;
var r;
(n = {})[ECoordSelectionType.Random] = "随机";
n[ECoordSelectionType.Symmetric] = "全对称";
n[ECoordSelectionType.SymmetricShuffle] = "对称打乱";
n[ECoordSelectionType.LongDistance] = "长距离";
n[ECoordSelectionType.ShortDistance] = "短距离";
n[ECoordSelectionType.AntiIntuitive] = "反直觉";
(i = {})[ECharSelectionType.Random] = "随机";
i[ECharSelectionType.PredCoord] = "前驱协调";
i[ECharSelectionType.PredTrigger] = "前驱触发";
(r = {})[EDifficultyType.Simple] = "简单";
r[EDifficultyType.Medium] = "中等";
r[EDifficultyType.Difficult] = "困难";
r[EDifficultyType.Reward] = "奖励";
@mj.class("ClassicDyeingModifier")
export class ClassicDyeingModifier {
  static DYEING_TIMEOUT_MS = 200;
  static getInstance() {
    ClassicDyeingModifier._instance || (ClassicDyeingModifier._instance = new ClassicDyeingModifier());
    return ClassicDyeingModifier._instance;
  }
  getDyeingStrategy(e) {
    var t = DyeingConfig.getInstance().getDyeingConfig(e);
    return {
      coordType: t.coordSelectionType,
      charType: t.charSelectionType
    };
  }
  applyDyeing(e, o, n) {
    var i, r;
    Date.now();
    if (o && 0 !== o.length) {
      Date.now();
      var a = DyeingConfig.getInstance().getDyeingConfig(n),
        c = a.coordSelectionType,
        u = a.charSelectionType,
        d = c === ECoordSelectionType.SymmetricShuffle;
      d && (c = ECoordSelectionType.Symmetric);
      var h = o.filter(function (e) {
        return e.isValid;
      });
      if (!(h.length < 2)) {
        Date.now();
        Date.now();
        var m = this.generateResIdPairs(e, h),
          v = (Date.now(), Date.now(), CharacterGenerator.getInstance());
        try {
          var g = v.generateCharacterAssignment(e, h, m, c, u, void 0, ClassicDyeingModifier.DYEING_TIMEOUT_MS);
          Date.now(), Date.now();
          if (v.isTimeout) {
            this.applyDyeingResult(e, g);
            var _ = new Set();
            try {
              for (var T = __values(g), C = T.next(); !C.done; C = T.next()) {
                var b = __read(C.value, 2),
                  E = b[0],
                  S = b[1];
                _.add(E.id);
                _.add(S.id);
              }
            } catch (e) {
              i = {
                error: e
              };
            } finally {
              try {
                C && !C.done && (r = T.return) && r.call(T);
              } finally {
                if (i) throw i.error;
              }
            }
            var I = h.filter(function (e) {
              return !_.has(e.id);
            });
            if (I.length >= 2) {
              var w = Date.now(),
                B = this.generateResIdPairs(e, I),
                x = v.generateCharacterAssignment(e, I, B, ECoordSelectionType.Random, ECharSelectionType.Random);
              this.applyDyeingResult(e, x);
              Date.now() - w;
              x.length;
            }
            Date.now(), Date.now();
          } else {
            if (d) {
              var M = v.computePTLGroups(g);
              SymmetricShuffleCoordSel.postProcessShuffle(g, M);
            }
            this.applyDyeingResult(e, g);
            Date.now(), Date.now();
          }
        } catch (t) {
          console.error("【无尽关卡-染色】染色失败，使用随机有解策略兜底:", t);
          try {
            x = v.generateCharacterAssignment(e, h, m, ECoordSelectionType.Random, ECharSelectionType.Random);
            this.applyDyeingResult(e, x);
            Date.now();
          } catch (e) {
            console.error("【无尽关卡-染色】兜底也失败:", e);
          }
        }
      }
    }
  }
  generateResIdPairs(e, t) {
    var o,
      n,
      i,
      r,
      a,
      p,
      f,
      y,
      m,
      v,
      g,
      _,
      T,
      C,
      b = e.getTileMapObject(),
      E = new Set(t.map(function (e) {
        return e.id;
      })),
      S = t.length,
      I = ResidualCardManager.getInstance().generateResidualResIds(b, E, S),
      w = [...I.residualResIds];
    if (I.remainingTileCount > 0) {
      var B = [];
      try {
        for (var x = __values(t), M = x.next(); !M.done; M = x.next()) {
          var O = M.value,
            D = O.cardId,
            P = O.resId;
          I.usedCardIds.has(D) || isResIdBlacklisted(P) || B.push(P);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          M && !M.done && (n = x.return) && n.call(x);
        } finally {
          if (o) throw o.error;
        }
      }
      var A = new Map();
      try {
        for (var R = __values(B), N = R.next(); !N.done; N = R.next()) {
          P = N.value;
          A.set(P, (A.get(P) || 0) + 1);
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          N && !N.done && (r = R.return) && r.call(R);
        } finally {
          if (i) throw i.error;
        }
      }
      var j = Array.from(A.entries()).sort(function (e, t) {
          return t[1] - e[1];
        }),
        k = I.remainingTileCount;
      try {
        for (var L = __values(j), G = L.next(); !G.done; G = L.next()) {
          var F = __read(G.value, 2),
            V = (P = F[0], F[1]);
          if (k <= 0) break;
          for (var U = Math.min(V, k), H = U - U % 2, W = 0; W < H; W++) w.push(P);
          k -= H;
        }
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          G && !G.done && (p = L.return) && p.call(L);
        } finally {
          if (a) throw a.error;
        }
      }
      if (k > 0 && j.length > 0) {
        var z = j[j.length - 1][0],
          Y = k - k % 2;
        for (W = 0; W < Y; W++) w.push(z);
      }
    }
    var K = new Map();
    try {
      for (var J = __values(w), Z = J.next(); !Z.done; Z = J.next()) {
        P = Z.value;
        K.set(P, (K.get(P) || 0) + 1);
      }
    } catch (e) {
      f = {
        error: e
      };
    } finally {
      try {
        Z && !Z.done && (y = J.return) && y.call(J);
      } finally {
        if (f) throw f.error;
      }
    }
    try {
      for (var X = __values(K), q = X.next(); !q.done; q = X.next()) {
        var Q = __read(q.value, 2);
        P = Q[0];
        (V = Q[1]) % 2 != 0 && K.set(P, V - 1);
      }
    } catch (e) {
      m = {
        error: e
      };
    } finally {
      try {
        q && !q.done && (v = X.return) && v.call(X);
      } finally {
        if (m) throw m.error;
      }
    }
    var $ = 0;
    try {
      for (var ee = __values(K.values()), te = ee.next(); !te.done; te = ee.next()) $ += V = te.value;
    } catch (e) {
      g = {
        error: e
      };
    } finally {
      try {
        te && !te.done && (_ = ee.return) && _.call(ee);
      } finally {
        if (g) throw g.error;
      }
    }
    for (var oe = K.size > 0 ? K.keys().next().value : 0; $ < S;) {
      K.set(oe, (K.get(oe) || 0) + 2);
      $ += 2;
    }
    var ne = [],
      ie = 0,
      re = Math.floor(S / 2);
    try {
      for (var ae = __values(K), le = ae.next(); !le.done; le = ae.next()) {
        var se = __read(le.value, 2),
          ce = (P = se[0], V = se[1], Math.floor(V / 2));
        for (W = 0; W < ce && ie < re; W++) {
          ne.push([{
            resId: P,
            type: ETileType.Normal,
            duoxiaoCount: 0
          }, {
            resId: P,
            type: ETileType.Normal,
            duoxiaoCount: 0
          }]);
          ie++;
        }
      }
    } catch (e) {
      T = {
        error: e
      };
    } finally {
      try {
        le && !le.done && (C = ae.return) && C.call(ae);
      } finally {
        if (T) throw T.error;
      }
    }
    for (; ne.length < re;) ne.push([{
      resId: oe,
      type: ETileType.Normal,
      duoxiaoCount: 0
    }, {
      resId: oe,
      type: ETileType.Normal,
      duoxiaoCount: 0
    }]);
    this.shuffleArray(ne);
    return ne;
  }
  applyDyeingResult(e, t) {
    var o,
      n,
      i = e.getTileMapObject();
    try {
      for (var r = __values(t), a = r.next(); !a.done; a = r.next()) {
        var c = __read(a.value, 4),
          p = c[0],
          f = c[1],
          d = c[2],
          h = c[3];
        if (p.type !== ETileType.RollCard) {
          var y = d.type === ETileType.RollCard ? ETileType.Normal : d.type;
          i.setTileType(p.id, y);
        }
        p.changeResId(d.resId);
        p.setDuoxiaoCount(d.duoxiaoCount || 0);
        if (f.type !== ETileType.RollCard) {
          var m = h.type === ETileType.RollCard ? ETileType.Normal : h.type;
          i.setTileType(f.id, m);
        }
        f.changeResId(h.resId);
        f.setDuoxiaoCount(h.duoxiaoCount || 0);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (n = r.return) && n.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
    i.updateCanMatchTiles();
  }
  shuffleArray(e) {
    for (var t, o = e.length - 1; o > 0; o--) {
      var n = Math.floor(Math.random() * (o + 1));
      t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
    }
  }
}