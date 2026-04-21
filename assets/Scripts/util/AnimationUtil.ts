import { AnimationTimingConfig } from '../config/AnimationTimingConfig';
import { FadeInAnimationConfig } from '../FadeInAnimationConfig';
export class AnimationUtil {
  static rectDurations = [];
  static lineDurations = [];
  static layerDurations = [];
  static baseOutScreenPoints = [];
  static screenSize = cc.winSize;
  static fadeInConfig = new FadeInAnimationConfig();
  static timingConfig = new AnimationTimingConfig();
  static animatingNodes = new Set();
  static enableSyncShadowAnimation = false;
  static cardToShadowMap = null;
  static setFadeInAnimation(t) {
    AnimationUtil.fadeInConfig.setConfig(t);
  }
  static setSyncShadowAnimation(t) {
    AnimationUtil.enableSyncShadowAnimation = t;
  }
  static setCardToShadowMap(t) {
    AnimationUtil.cardToShadowMap = t;
  }
  static initializeDurations(t = false) {
    var o, i, r, a, l, s;
    if (t || 0 === AnimationUtil.rectDurations.length) {
      AnimationUtil.rectDurations = [];
      AnimationUtil.lineDurations = [];
      AnimationUtil.layerDurations = [];
      var c = 0;
      try {
        for (var u = __values(AnimationUtil.fadeInConfig.itemDurations), p = u.next(); !p.done; p = u.next()) {
          c += p.value;
          AnimationUtil.rectDurations.push(c);
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
      c = 0;
      try {
        for (var f = __values(AnimationUtil.fadeInConfig.lineDurations), d = f.next(); !d.done; d = f.next()) {
          c += d.value;
          AnimationUtil.lineDurations.push(c);
        }
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
      c = 0;
      try {
        for (var h = __values(AnimationUtil.fadeInConfig.layerDurations), y = h.next(); !y.done; y = h.next()) {
          c += y.value;
          AnimationUtil.layerDurations.push(c);
        }
      } catch (e) {
        l = {
          error: e
        };
      } finally {
        try {
          y && !y.done && (s = h.return) && s.call(h);
        } finally {
          if (l) throw l.error;
        }
      }
    }
  }
  static playFadeInAnimation(t, o, n, i, r, a, l, s, c, u = false) {
    if (o && 0 !== o.length) {
      AnimationUtil.initializeDurations(u);
      var p = 0,
        f = AnimationUtil.splitRects(o, i),
        d = f.leftRects,
        h = f.rightRects;
      d.forEach(function (e) {
        e.forEach(function (e) {
          e.size;
        });
      });
      h.forEach(function (e) {
        e.forEach(function (e) {
          e.size;
        });
      });
      AnimationUtil.insertRectMoveAnimation(d, i, r, a, true, function (e) {
        p = Math.max(p, e);
      });
      AnimationUtil.insertRectMoveAnimation(h, i, r, a, false, function (e) {
        p = Math.max(p, e);
      });
      AnimationUtil.enableSyncShadowAnimation && AnimationUtil.cardToShadowMap || AnimationUtil.executeShadowFadeInAnimation(n, p);
      l && l();
      s && t.doOnce(p, s);
      if (c) {
        var y = p + AnimationUtil.fadeInConfig.shadowFadeInTime;
        t.doOnce(y, c);
      }
    } else {
      null == l || l();
      null == s || s();
      null == c || c();
    }
  }
  static splitRects(t, o) {
    for (var n = [], i = [], r = function r(r) {
        var a = new Map(),
          l = new Map();
        t[r].forEach(function (t, n) {
          t.forEach(function (t, i) {
            var r = AnimationUtil.isCardLeft(t, n, o) ? a : l;
            r.has(n) || r.set(n, new Map());
            r.get(n).set(i, t);
          });
        });
        a.size > 0 && n.push(a);
        l.size > 0 && i.push(l);
      }, a = 0; a < t.length; a++) r(a);
    return {
      leftRects: n,
      rightRects: i
    };
  }
  static isCardLeft(t, o, n) {
    if (o >= AnimationUtil.fadeInConfig.linePositionDeviations.length) return false;
    var i = n * AnimationUtil.fadeInConfig.linePositionDeviations[o];
    return t.position.x <= i;
  }
  static insertRectMoveAnimation(t, o, n, i, r, a) {
    for (var l = AnimationUtil.fadeInConfig.useSymmetry, s = cc.v2(0.7 * AnimationUtil.screenSize.width, 0.5 * AnimationUtil.screenSize.height), c = 0, u = function u(i) {
        var a = t[i],
          u = AnimationUtil.layerDurations[i] || 0;
        a.forEach(function (t, i) {
          var a = AnimationUtil.lineDurations[i] || 0,
            p = AnimationUtil.fadeInConfig.linePositionDeviations[i] || 0,
            f = p * o,
            d = n + p;
          t.forEach(function (t, n) {
            var i = t.position.clone(),
              p = 0,
              h = 0,
              y = f + s.x,
              m = s.x - f,
              v = Math.max(y, m),
              g = r ? AnimationUtil.fadeInConfig.leftOutScreenTime : AnimationUtil.fadeInConfig.rightOutScreenTime,
              _ = d;
            if (r) {
              _ -= n;
              p -= (l ? v : y) - AnimationUtil.fadeInConfig.leftOutScreenPosition.x + o;
              h = AnimationUtil.fadeInConfig.leftOutScreenPosition.y;
            } else {
              _ = n - _;
              p += (l ? v : m) + AnimationUtil.fadeInConfig.rightOutScreenPosition.x + o;
              h = AnimationUtil.fadeInConfig.rightOutScreenPosition.y;
            }
            var T = cc.v3(p, h);
            t.setPosition(t.position.add(T));
            _ = Math.max(0, Math.min(_, AnimationUtil.rectDurations.length - 1));
            var C = AnimationUtil.rectDurations[Math.floor(_)] || 0,
              b = u + a + C;
            AnimationUtil.animatingNodes.add(t);
            cc.tween(t).delay(b).to(0.6 * g, {
              position: i
            }).start();
            var E = b + 0.6 * g;
            c = Math.max(c, E);
            if (AnimationUtil.enableSyncShadowAnimation && AnimationUtil.cardToShadowMap) {
              var S = AnimationUtil.cardToShadowMap.get(t);
              if (S && cc.isValid(S)) {
                var I = S.position.clone();
                S.setPosition(S.position.add(T));
                S.opacity = 255;
                AnimationUtil.animatingNodes.add(S);
                cc.tween(S).delay(b).to(0.6 * g, {
                  position: I
                }).start();
              }
            }
          });
        });
      }, p = 0; p < t.length; p++) u(p);
    a(c);
  }
  static executeShadowFadeInAnimation(t, o) {
    var i, r;
    try {
      for (var a = __values(t), l = a.next(); !l.done; l = a.next()) {
        var s = l.value,
          c = s.node.opacity;
        s.node.opacity = 0;
        cc.Tween.stopAllByTarget(s.node);
        AnimationUtil.animatingNodes.add(s.node);
        cc.tween(s.node).delay(o).to(AnimationUtil.fadeInConfig.shadowFadeInTime, {
          opacity: c
        }).start();
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (r = a.return) && r.call(a);
      } finally {
        if (i) throw i.error;
      }
    }
  }
  static stopAllAnimations() {
    var t, o;
    try {
      for (var i = __values(AnimationUtil.animatingNodes), r = i.next(); !r.done; r = i.next()) {
        var a = r.value;
        cc.isValid(a) && cc.Tween.stopAllByTarget(a);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    AnimationUtil.animatingNodes.clear();
  }
  static clearAnimatingNodes() {
    AnimationUtil.animatingNodes.clear();
    AnimationUtil.cardToShadowMap = null;
  }
  static animateNode(t, o, n) {
    var i = t.position.clone(),
      r = o ? AnimationUtil.fadeInConfig.leftOutScreenPosition : AnimationUtil.fadeInConfig.rightOutScreenPosition;
    t.position = cc.v3(r.x, r.y, 0);
    cc.tween(t).to(n, {
      position: i
    }).start();
  }
}