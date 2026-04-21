import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { AcAnimPlayerBase } from './AcAnimPlayerBase';
export class AcCaiDaiAnimPlayer extends AcAnimPlayerBase {
  PHASE1_DURATION = 0.25;
  PHASE1_DELAY = 0.03;
  PHASE1_FADE_TIME = 0.15;
  PHASE1_STROKE = 32;
  PHASE1_COLOR = cc.color(255, 200, 100, 255);
  PHASE1_FLOW_LIGHT_DELAY = 0.2;
  PHASE2_DURATIONS = [0.13, 0.2];
  PHASE2_MOVE_YS = [100, -30];
  PHASE2_DELAY = 0.066;
  PHASE3_DURATION = 0.3;
  PHASE3_DELAY = 0;
  PHASE3_PHASE4_DELAY = 0.0167;
  PHASE4_DELAY = 0.04;
  COLLISION_DELAY = 0.08;
  COLLISION_OUT_DURATION = 0.13;
  COLLISION_IN_DURATION = 0.068;
  COLLISION_OUT_DISTANCE = 100;
  COLLISION_SCALE_UP = 1.1;
  COLLISION_SCALE_DUR1 = 0.06;
  COLLISION_SCALE_DUR2 = 0.03;
  FADE_TO_DARK_OPACITY = 77;
  FADE_TO_DARK_DURATION = 2;
  FADE_TO_WHITE_DURATION = 0.5;
  RES_BUNDLE = "r_daxiaocaidai";
  RES_PARTICLE = "texture/caidai/gameplay_trailingElement";
  RES_TRAIL_TEXTURE = "texture/caidai/gameplay_star_tail";
  RES_HIT_SPINE = "spine/caidai/gameplay_flowingLight";
  RES_FLOW_LIGHT = "spine/caidai/gameplay_flowingLight";
  RES_BACK_SPINE = "spine/caidai/gameplay_ribbon";
  RES_EFFECT_SPINE = "spine/caidai/gameplay_elimination_effect";
  constructor(t) {
    super(t);
  }
  setupPositions(e, t = 0) {
    var o = e[0].cardNode1.getContentSize().height,
      n = e[0].cardNode1.getContentSize().width;
    if (e.length % 2 == 0) {
      this.setupEvenPositions(e, n, o, t);
    } else {
      this.setupOddPositions(e, n, o, t);
    }
    this.nodeInfos = e;
  }
  setupEvenPositions(e, t, o, n) {
    var i = e.length,
      r = i / 2,
      a = o + n,
      l = i * a / 2;
    e.forEach(function (e, o) {
      var n,
        s = l - o * a;
      n = o < r ? t / 2 + o * (t / 2) : t / 2 + t / 2 * (i - 1 - o);
      e.targetPos1 = cc.v3(-n, s, 0);
      e.targetPos2 = cc.v3(n, s, 0);
      var c = Math.floor(-s);
      e.cardNode1.zIndex = c;
      e.cardNode2.zIndex = c + 1;
    });
  }
  setupOddPositions(e, t, o, n) {
    var i = e.length,
      r = Math.floor(i / 2),
      a = o + n,
      l = i * a / 2;
    e.forEach(function (e, o) {
      var n,
        s = l - o * a;
      n = o <= r ? t / 2 + o * (t / 2) : t / 2 + t / 2 * (i - 1 - o);
      e.targetPos1 = cc.v3(-n, s, 0);
      e.targetPos2 = cc.v3(n, s, 0);
      var c = Math.floor(-s);
      e.cardNode1.zIndex = c;
      e.cardNode2.zIndex = c + 1;
    });
  }
  play(e) {
    var t = this;
    this.nodeInfos = e;
    this.createGraphicsMask("AcCaiDaiMask");
    this.playPhase1().then(function () {
      return t.playPhase2();
    }).then(function () {
      return t.playPhase3();
    }).then(function () {
      return t.playPhase4();
    }).then(function () {
      return t.cleanupAndComplete();
    });
  }
  playPhase1() {
    var e = this,
      t = cc.v3(0, 0, 0);
    return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (o) {
      var n, i;
      if (o) {
        var a = [],
          l = 0;
        try {
          for (var s = __values(e.nodeInfos), c = s.next(); !c.done; c = s.next()) {
            var u = c.value;
            if (cc.isValid(u.cardNode1) && cc.isValid(u.cardNode2)) {
              a.push(e.createParticle(t, u.cardNode1.position, u.cardNode1, u.tileId1, l++, o));
              a.push(e.createParticle(t, u.cardNode2.position, u.cardNode2, u.tileId2, l++, o));
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return Promise.all(a).then(function () {
          cc.isValid(e.maskLayer) && e.fadeMaskDark(e.FADE_TO_DARK_OPACITY, e.FADE_TO_DARK_DURATION);
        });
      }
    });
  }
  createParticle(e, t, o, n, i, r) {
    var a = this;
    return new Promise(function (l) {
      var c = new cc.Node("AcCaiDaiParticle");
      c.parent = a.context.effectNode;
      c.position = e;
      c.scale = a.context.layoutScale;
      c.zIndex = 200;
      var u = BaseSprite.create(a.RES_PARTICLE, a.RES_BUNDLE);
      (null == u ? void 0 : u.node) && (u.node.parent = c);
      var p = c.addComponent(cc.MotionStreak);
      p.fadeTime = a.PHASE1_FADE_TIME;
      p.minSeg = 1;
      p.stroke = a.PHASE1_STROKE;
      p.texture = r.getTexture();
      p.color = a.PHASE1_COLOR;
      cc.tween(c).delay(i * a.PHASE1_DELAY).to(a.PHASE1_DURATION, {
        position: t
      }).call(function () {
        cc.isValid(c) && c.destroy();
        a.context.removeTileNode(n);
        o.position = t;
        o.active = true;
        if (cc.isValid(o)) {
          a.playHitEffect(o);
          cc.tween(o).delay(a.PHASE1_FLOW_LIGHT_DELAY).call(function () {
            cc.isValid(o) && a.showFlowLightNode(o, a.RES_FLOW_LIGHT, a.RES_BUNDLE);
          }).start();
        }
        l();
      }).start();
    });
  }
  playPhase2() {
    for (var e = this, t = [], o = function o(o) {
        var i = n.nodeInfos[o],
          r = o * n.PHASE2_DELAY;
        t.push(n.delay(i.cardNode1, r).then(function () {
          return e.floatCard(i.cardNode1);
        }));
        t.push(n.delay(i.cardNode2, r).then(function () {
          return e.floatCard(i.cardNode2);
        }));
      }, n = this, i = 0; i < this.nodeInfos.length; i++) o(i);
    return Promise.all(t).then(function () {});
  }
  floatCard(e) {
    if (!cc.isValid(e)) return Promise.resolve();
    for (var t = cc.tween(e), o = e.y, n = 0; n < this.PHASE2_DURATIONS.length; n++) {
      o += this.PHASE2_MOVE_YS[n];
      t = t.to(this.PHASE2_DURATIONS[n], {
        y: o
      });
    }
    return new Promise(function (e) {
      t.call(e).start();
    });
  }
  playPhase3() {
    for (var e = this, t = [], o = function o(o) {
        var i = n.nodeInfos[o];
        t.push(n.delay(i.cardNode1, o * n.PHASE3_DELAY).then(function () {
          return e.moveTo(i.cardNode1, i.targetPos1);
        }));
        t.push(n.delay(i.cardNode2, o * n.PHASE3_DELAY).then(function () {
          return e.moveTo(i.cardNode2, i.targetPos2);
        }));
      }, n = this, i = 0; i < this.nodeInfos.length; i++) o(i);
    return Promise.all(t).then(function () {
      var t,
        o = null === (t = e.nodeInfos[0]) || void 0 === t ? void 0 : t.cardNode1;
      return cc.isValid(o) ? e.delay(o, e.PHASE3_PHASE4_DELAY) : Promise.resolve();
    });
  }
  moveTo(e, t) {
    var o = this;
    return cc.isValid(e) ? new Promise(function (n) {
      cc.tween(e).to(o.PHASE3_DURATION, {
        position: t
      }).call(n).start();
    }) : Promise.resolve();
  }
  playPhase4() {
    for (var e = this, t = this.nodeInfos.length, o = [], n = t - 1; n >= 0; n--) {
      var i = this.nodeInfos[n],
        r = t - 1 - n,
        a = r * this.PHASE4_DELAY,
        l = 0 === r,
        s = 0 === n;
      o.push(this.playSingleCollision(i, a, l, s));
    }
    return Promise.all(o).then(function () {
      cc.isValid(e.maskLayer) && e.fadeMaskWhite(e.FADE_TO_WHITE_DURATION);
    });
  }
  playSingleCollision(e, t, o, n) {
    var i = this,
      r = e.cardNode1,
      a = cc.v3(0, r.y, 0);
    return this.delay(r, t).then(function () {
      return i.playCollision(e);
    }).then(function () {
      return i.playCollisionEffect(a, o, n);
    });
  }
  playCollision(e) {
    var t,
      o,
      n = e.cardNode1,
      i = e.cardNode2,
      l = n.position.clone(),
      s = i.position.clone(),
      c = cc.v3(l.x - this.COLLISION_OUT_DISTANCE, l.y, 0),
      u = cc.v3(s.x + this.COLLISION_OUT_DISTANCE, s.y, 0),
      p = cc.v3(0, l.y, 0),
      f = cc.v3(0, s.y, 0),
      d = this.COLLISION_DELAY + this.COLLISION_OUT_DURATION,
      h = function h(e, t, o) {
        cc.tween(e).delay(y.COLLISION_DELAY).to(y.COLLISION_OUT_DURATION, {
          position: t
        }, {
          easing: "quartInOut"
        }).to(y.COLLISION_IN_DURATION, {
          position: o
        }, {
          easing: "quartInOut"
        }).call(function () {
          cc.isValid(e) && (e.active = false);
        }).start();
        cc.tween(e).delay(d).call(function () {
          cc.isValid(e) && (e.scale = 1);
        }).to(y.COLLISION_SCALE_DUR1, {
          scale: y.COLLISION_SCALE_UP
        }).to(y.COLLISION_SCALE_DUR2, {
          scale: 1
        }).start();
      },
      y = this;
    try {
      for (var m = __values([[n, c, p], [i, u, f]]), v = m.next(); !v.done; v = m.next()) {
        var g = __read(v.value, 3);
        h(g[0], g[1], g[2]);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (o = m.return) && o.call(m);
      } finally {
        if (t) throw t.error;
      }
    }
    return this.delay(n, this.COLLISION_DELAY + this.COLLISION_OUT_DURATION + this.COLLISION_IN_DURATION);
  }
  playCollisionEffect(e, t, o) {
    var n = ["in1", "in2", "in3"],
      i = n[Math.floor(Math.random() * n.length)],
      r = BaseSpine.create(this.RES_EFFECT_SPINE, i, 1, null, true, this.RES_BUNDLE);
    r.node.parent = this.context.effectNode;
    r.node.position = e;
    r.node.zIndex = 500;
    if (o) {
      var a = BaseSpine.create(this.RES_EFFECT_SPINE, "in4_top", 1, null, true, this.RES_BUNDLE);
      a.node.parent = this.context.effectNode;
      a.node.position = cc.v3(e.x, e.y + 60, 0);
      a.node.zIndex = 501;
    }
    if (t) {
      var s = BaseSpine.create(this.RES_BACK_SPINE, "in2", 1, null, true, this.RES_BUNDLE);
      s.node.parent = this.context.effectNode;
      s.node.position = cc.v3(0, 0, 0);
      s.node.zIndex = 450;
      var c = BaseSpine.create(this.RES_BACK_SPINE, "in3", 1, null, true, this.RES_BUNDLE);
      c.node.parent = this.context.effectNode;
      c.node.position = cc.v3(0, 0, 0);
      c.node.zIndex = 400;
    }
  }
  playHitEffect(e) {
    var t = BaseSpine.create(this.RES_HIT_SPINE, "in", 1, null, false, this.RES_BUNDLE);
    t.node.parent = e;
    t.node.position = cc.v3(0, 0, 0);
    t.node.zIndex = 900;
    t.node.scale = this.context.layoutScale;
    t.node.name = "DaxiaoHitSpineNode";
  }
}