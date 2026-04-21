export class CenterRadialEnterStrategy {
  LAYER1_DURATION = 0.4;
  LAYER2_DURATION = 0.5;
  LAYER3_DURATION = 0.6;
  totalDuration = 0;
  getName() {
    return "CenterRadialEnter";
  }
  @mj.traitEvent("CenterRadialStgy_genCfgs")
  generateAnimationConfigs(e) {
    var t,
      o,
      n,
      a,
      l,
      s,
      c,
      u,
      p = [],
      f = e.tileNodeMap;
    e.screenSize;
    try {
      for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
        var y = __read(h.value, 2)[1];
        cc.isValid(y.cardNode) && (y.cardNode.opacity = 0);
        cc.isValid(y.shadowNode) && (y.shadowNode.opacity = 0);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (o = d.return) && o.call(d);
      } finally {
        if (t) throw t.error;
      }
    }
    var m = 0,
      v = 0,
      g = 0;
    try {
      for (var _ = __values(f), T = _.next(); !T.done; T = _.next()) {
        y = __read(T.value, 2)[1];
        if (cc.isValid(y.cardNode)) {
          var C = y.cardNode.position;
          m += C.x;
          v += C.y;
          g++;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        T && !T.done && (a = _.return) && a.call(_);
      } finally {
        if (n) throw n.error;
      }
    }
    if (0 === g) return p;
    var b = m / g,
      E = v / g,
      S = new Map();
    try {
      for (var I = __values(f), w = I.next(); !w.done; w = I.next()) {
        y = __read(w.value, 2)[1];
        if (cc.isValid(y.cardNode) && cc.isValid(y.shadowNode)) {
          var B = y.info.layerIndex || 0,
            x = y.info.tileObject.gridPosY || 0,
            M = y.info.tileObject.gridPosX || 0;
          S.has(B) || S.set(B, []);
          S.get(B).push({
            cardNode: y.cardNode,
            shadowNode: y.shadowNode,
            layer: B,
            row: x,
            col: M
          });
        }
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        w && !w.done && (s = I.return) && s.call(I);
      } finally {
        if (l) throw l.error;
      }
    }
    if (0 === S.size) return p;
    var O = 0,
      D = function D(e, t) {
        var o = P.getAnimationParams(e);
        O = Math.max(O, o.duration);
        t.forEach(function (e) {
          var t = e.cardNode.position,
            n = b - t.x,
            i = E - t.y,
            r = t.x < b;
          p.push({
            node: e.cardNode,
            startOffset: cc.v2(n, i),
            endPosition: t.clone(),
            delay: 0,
            duration: o.duration,
            animationType: "move",
            easing: o.easing,
            metadata: {
              layer: e.layer,
              row: e.row,
              col: e.col,
              isLeft: r
            },
            extraParams: {
              fadeIn: true
            }
          });
          var a = e.shadowNode.position;
          p.push({
            node: e.shadowNode,
            startOffset: cc.v2(n, i),
            endPosition: a.clone(),
            delay: 0,
            duration: o.duration,
            animationType: "move",
            easing: o.easing,
            metadata: {
              layer: e.layer,
              row: e.row,
              col: e.col,
              isLeft: r
            },
            extraParams: {
              fadeIn: true
            }
          });
        });
      },
      P = this;
    try {
      for (var A = __values(S), R = A.next(); !R.done; R = A.next()) {
        var N = __read(R.value, 2);
        D(B = N[0], N[1]);
      }
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        R && !R.done && (u = A.return) && u.call(A);
      } finally {
        if (c) throw c.error;
      }
    }
    this.totalDuration = O;
    return p;
  }
  getTotalDuration() {
    return this.totalDuration;
  }
  getAnimationParams(e) {
    return {
      duration: 0 === e ? this.LAYER1_DURATION : 1 === e ? this.LAYER2_DURATION : 2 === e ? this.LAYER3_DURATION : this.LAYER3_DURATION + 0.05 * (e - 2),
      easing: "backOut"
    };
  }
}