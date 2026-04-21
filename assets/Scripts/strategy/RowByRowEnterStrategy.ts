export class RowByRowEnterStrategy {
  ANIM_DURATION = 0.4;
  ROW_INTERVAL = 0.03;
  LAYER_DELAYS = {
    0: 0,
    1: 0.23,
    2: 0.2,
    3: 0.16,
    4: 0.13,
    5: 0.1,
    6: 0.06,
    7: 0.03
  };
  totalDuration = 0;
  getName() {
    return "RowByRowEnter";
  }
  @mj.traitEvent("RowByRowStgy_genCfgs")
  generateAnimationConfigs(e) {
    var t, o, n, a, l, s, c, u, p, f, d, h, y, m;
    this.totalDuration = 0;
    var v = [],
      g = e.tileNodeMap;
    try {
      for (var _ = __values(g), T = _.next(); !T.done; T = _.next()) {
        var C = __read(T.value, 2)[1];
        cc.isValid(C.cardNode) && (C.cardNode.opacity = 0);
        cc.isValid(C.shadowNode) && (C.shadowNode.opacity = 0);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        T && !T.done && (o = _.return) && o.call(_);
      } finally {
        if (t) throw t.error;
      }
    }
    var b = 0,
      E = 0,
      S = 0;
    try {
      for (var I = __values(g), w = I.next(); !w.done; w = I.next()) {
        C = __read(w.value, 2)[1];
        if (cc.isValid(C.cardNode)) {
          var B = C.cardNode.position;
          b += B.x;
          E += B.y;
          S++;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        w && !w.done && (a = I.return) && a.call(I);
      } finally {
        if (n) throw n.error;
      }
    }
    if (0 === S) return v;
    var x = b / S,
      M = E / S,
      O = new Map();
    try {
      for (var D = __values(g), P = D.next(); !P.done; P = D.next()) {
        C = __read(P.value, 2)[1];
        if (cc.isValid(C.cardNode)) {
          var A = C.info.layerIndex || 0,
            R = (null === (y = C.info.tileObject) || void 0 === y ? void 0 : y.gridPosY) || 0,
            N = (null === (m = C.info.tileObject) || void 0 === m ? void 0 : m.gridPosX) || 0;
          O.has(A) || O.set(A, new Map());
          (F = O.get(A)).has(R) || F.set(R, []);
          F.get(R).push({
            cardNode: C.cardNode,
            shadowNode: C.shadowNode,
            layer: A,
            row: R,
            col: N
          });
        }
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        P && !P.done && (s = D.return) && s.call(D);
      } finally {
        if (l) throw l.error;
      }
    }
    var j = 0,
      k = Array.from(O.keys()).sort(function (e, t) {
        return e - t;
      });
    try {
      for (var L = __values(k), G = L.next(); !G.done; G = L.next()) {
        A = G.value;
        var F = O.get(A),
          V = Array.from(F.keys()).sort(function (e, t) {
            return e - t;
          }),
          U = 0;
        try {
          for (var H = (p = void 0, __values(V)), W = H.next(); !W.done; W = H.next()) {
            R = W.value;
            var z = F.get(R),
              Y = j + U;
            try {
              for (var K = (d = void 0, __values(z)), J = K.next(); !J.done; J = K.next()) {
                var Z = J.value,
                  X = Z.cardNode.position,
                  q = x - X.x,
                  Q = M - X.y;
                v.push({
                  node: Z.cardNode,
                  delay: Y,
                  duration: this.ANIM_DURATION,
                  animationType: "move",
                  easing: "backOut",
                  startOffset: cc.v2(q, Q),
                  endPosition: cc.v3(X.x, X.y, 0),
                  metadata: {
                    layer: A,
                    row: R,
                    col: Z.col,
                    isLeft: false
                  },
                  extraParams: {
                    fadeIn: true
                  }
                });
                if (cc.isValid(Z.shadowNode)) {
                  var $ = Z.shadowNode.position;
                  v.push({
                    node: Z.shadowNode,
                    delay: Y,
                    duration: this.ANIM_DURATION,
                    animationType: "move",
                    easing: "backOut",
                    startOffset: cc.v2(q, Q),
                    endPosition: cc.v3($.x, $.y, 0),
                    metadata: {
                      layer: A,
                      row: R,
                      col: Z.col,
                      isLeft: false
                    },
                    extraParams: {
                      fadeIn: true
                    }
                  });
                }
              }
            } catch (e) {
              d = {
                error: e
              };
            } finally {
              try {
                J && !J.done && (h = K.return) && h.call(K);
              } finally {
                if (d) throw d.error;
              }
            }
            U += this.ROW_INTERVAL;
          }
        } catch (e) {
          p = {
            error: e
          };
        } finally {
          try {
            W && !W.done && (f = H.return) && f.call(H);
          } finally {
            if (p) throw p.error;
          }
        }
        var ee = j + U + this.ANIM_DURATION;
        ee > this.totalDuration && (this.totalDuration = ee);
        var te = A + 1;
        j += void 0 !== this.LAYER_DELAYS[te] ? this.LAYER_DELAYS[te] : 0;
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
    return v;
  }
  getTotalDuration() {
    return this.totalDuration;
  }
}