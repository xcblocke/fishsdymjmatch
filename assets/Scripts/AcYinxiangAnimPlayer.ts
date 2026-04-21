import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { AcAnimPlayerBase } from './AcAnimPlayerBase';
export class AcYinxiangAnimPlayer extends AcAnimPlayerBase {
  PHASE1_DURATION = 0.45;
  PHASE1_DELAY = 0.03;
  PHASE1_FADE_TIME = 0.15;
  PHASE1_STROKE = 120;
  PHASE1_COLOR = cc.color(255, 255, 255, 255);
  PHASE1_FLOW_LIGHT_DELAY = 0.2;
  PHASE2_DURATIONS = [0.13];
  PHASE2_MOVE_YS = [10];
  PHASE2_DELAY = 0.066;
  PHASE3_DURATION = 0.3;
  PHASE3_DELAY = 0;
  PHASE3_PHASE4_DELAY = 0.0167;
  PHASE4_EFFECT_ZINDEX = 500;
  PHASE4_MASK_WIDTH = 1080;
  PHASE4_MASK_HEIGHT = 3000;
  PHASE4_COLLISION_ANIM = "in";
  PULSE_FIRST_START = 0.67;
  PULSE_SECOND_START = 1;
  PULSE_DURATION = 0.1;
  PULSE_SCALE_MIN = 0.9;
  PULSE_SCALE_MAX = 1;
  COLLISION_OUT_DISTANCE = 50;
  COLLISION_OUT_DURATION = 0.1;
  COLLISION_OUT_SCALE = 1.1;
  COLLISION_IN_DURATION = 0.15;
  COLLISION_IN_SCALE = 1.1;
  FADE_TO_DARK_OPACITY = 77;
  FADE_TO_DARK_DURATION = 2;
  FADE_TO_WHITE_DURATION = 0.5;
  RES_BUNDLE = "l_daxiaoyinxiang";
  RES_PARTICLE_PREFIX = "texture/note";
  RES_PARTICLE_COUNT = 8;
  RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
  RES_HIT_SPINE = "spine/gameplay_hit_gf";
  RES_FLOW_LIGHT = "spine/gameplay_flowingLight";
  RES_EFFECT_SPINE = "spine/gameplay_celebrate";
  constructor(t) {
    super(t);
  }
  setupPositions(e) {
    var t = e[0].cardNode1.getContentSize().height,
      o = e[0].cardNode1.getContentSize().width,
      n = (e.length - 1) / 2;
    e.forEach(function (e, i) {
      var r = 0.5 * Math.abs(i - n) * o,
        a = 0 + (n - i) * t * 0.95;
      e.targetPos1 = cc.v3(-0.5 * o - r, a, 0);
      e.targetPos2 = cc.v3(0.5 * o + r, a, 0);
      var l = 2 * i;
      e.cardNode1.zIndex = l;
      e.cardNode2.zIndex = l + 1;
    });
    this.nodeInfos = e;
  }
  play(e) {
    var t = this;
    this.nodeInfos = e;
    this.createGraphicsMask("AcYinxiangMask");
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
            a.push(e.createParticle(t, u.cardNode1.position, u.cardNode1, u.tileId1, l++, o));
            a.push(e.createParticle(t, u.cardNode2.position, u.cardNode2, u.tileId2, l++, o));
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
    return new Promise(function (s) {
      var c = new cc.Node("AcYinxiangParticle");
      c.parent = a.context.effectNode;
      c.position = e;
      c.scale = a.context.layoutScale;
      c.zIndex = -800;
      var u = new cc.Node("SpriteContainer");
      u.parent = c;
      var p = i % a.RES_PARTICLE_COUNT + 1,
        f = BaseSprite.create("" + a.RES_PARTICLE_PREFIX + p, a.RES_BUNDLE);
      if (null == f ? void 0 : f.node) {
        f.node.parent = u;
        f.node.scale = 2;
      }
      var d = c.addComponent(cc.MotionStreak);
      d.fadeTime = a.PHASE1_FADE_TIME;
      d.minSeg = 1;
      d.stroke = a.PHASE1_STROKE;
      d.texture = r.getTexture();
      d.color = a.PHASE1_COLOR;
      var h = i * a.PHASE1_DELAY;
      cc.tween(c).delay(h).call(function () {
        a.arcTo(c, t, a.PHASE1_DURATION, u).then(function () {
          cc.isValid(c) && c.destroy();
          a.context.removeTileNode(n);
          o.position = t;
          o.active = true;
          if (cc.isValid(o)) {
            a.playHitEffect(o);
            cc.tween(o).delay(a.PHASE1_FLOW_LIGHT_DELAY).call(function () {
              cc.isValid(o) && a.showFlowLight(o);
            }).start();
          }
          s();
        });
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
          return e.moveToTarget(i.cardNode1, i.targetPos1);
        }));
        t.push(n.delay(i.cardNode2, o * n.PHASE3_DELAY).then(function () {
          return e.moveToTarget(i.cardNode2, i.targetPos2);
        }));
      }, n = this, i = 0; i < this.nodeInfos.length; i++) o(i);
    return Promise.all(t).then(function () {
      var t,
        o = null === (t = e.nodeInfos[0]) || void 0 === t ? void 0 : t.cardNode1;
      return cc.isValid(o) ? e.delay(o, e.PHASE3_PHASE4_DELAY) : Promise.resolve();
    });
  }
  moveToTarget(e, t) {
    var o = this;
    return cc.isValid(e) ? new Promise(function (n) {
      cc.tween(e).to(o.PHASE3_DURATION, {
        position: t
      }).call(n).start();
    }) : Promise.resolve();
  }
  playPhase4() {
    var e,
      t = this,
      o = 0,
      n = 0,
      i = 0;
    this.nodeInfos.forEach(function (e) {
      o += e.cardNode1.x + e.cardNode2.x;
      n += e.cardNode1.y + e.cardNode2.y;
      i += 2;
    });
    var r = cc.v3(o / i, n / i, 0);
    this.playCollisionEffect(r);
    this.nodeInfos.forEach(function (e) {
      t.playCardPulse(e.cardNode1);
      t.playCardPulse(e.cardNode2);
    });
    var a = [];
    this.nodeInfos.forEach(function (e) {
      a.push(t.playCardCollision(e.cardNode1, r));
      a.push(t.playCardCollision(e.cardNode2, r));
    });
    var l = 2 * this.PULSE_DURATION,
      s = this.PULSE_SECOND_START + l + this.COLLISION_OUT_DURATION,
      c = null === (e = this.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
    cc.isValid(c) && cc.tween(c).delay(s).call(function () {
      t.context.onShake();
      cc.isValid(t.maskLayer) && t.fadeMaskWhite(t.FADE_TO_WHITE_DURATION);
    }).start();
    return Promise.all(a).then(function () {});
  }
  playCardPulse(e) {
    if (cc.isValid(e)) {
      var t = 2 * this.PULSE_DURATION,
        o = this.PULSE_SECOND_START - this.PULSE_FIRST_START - t;
      cc.tween(e).delay(this.PULSE_FIRST_START).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MIN,
        scaleY: this.PULSE_SCALE_MIN
      }).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MAX,
        scaleY: this.PULSE_SCALE_MAX
      }).delay(o).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MIN,
        scaleY: this.PULSE_SCALE_MIN
      }).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MAX,
        scaleY: this.PULSE_SCALE_MAX
      }).start();
    }
  }
  playCardCollision(e, t) {
    if (!cc.isValid(e)) return Promise.resolve();
    var o = e.position.clone(),
      n = 2 * this.PULSE_DURATION,
      i = this.PULSE_SECOND_START + n,
      r = o.x > t.x ? o.x + this.COLLISION_OUT_DISTANCE : o.x - this.COLLISION_OUT_DISTANCE;
    cc.tween(e).delay(i).to(this.COLLISION_OUT_DURATION, {
      position: cc.v3(r, o.y, 0),
      scaleX: this.COLLISION_OUT_SCALE,
      scaleY: this.COLLISION_OUT_SCALE
    }, {
      easing: "quartOut"
    }).to(this.COLLISION_IN_DURATION, {
      position: t,
      scaleX: this.COLLISION_IN_SCALE,
      scaleY: this.COLLISION_IN_SCALE
    }, {
      easing: "quartIn"
    }).call(function () {
      cc.isValid(e) && (e.active = false);
    }).start();
    return this.delay(e, i + this.COLLISION_OUT_DURATION + this.COLLISION_IN_DURATION);
  }
  playCollisionEffect(e) {
    var t = new cc.Node("AcYinxiangCollision");
    t.parent = this.context.effectNode;
    t.position = e;
    t.zIndex = this.PHASE4_EFFECT_ZINDEX;
    var o = t.addComponent(cc.Mask);
    o.type = cc.Mask.Type.RECT;
    o.inverted = false;
    t.setContentSize(this.PHASE4_MASK_WIDTH, this.PHASE4_MASK_HEIGHT);
    var n = BaseSpine.create(this.RES_EFFECT_SPINE, this.PHASE4_COLLISION_ANIM, 1, null, true, this.RES_BUNDLE);
    n.node.parent = t;
    n.node.position = cc.v3(0, 0, 0);
  }
  playHitEffect(e) {
    var t = BaseSpine.create(this.RES_HIT_SPINE, "gameplay_hit_gf", 1, null, false, this.RES_BUNDLE);
    t.node.parent = e;
    t.node.position = cc.v3(0, 0, 0);
    t.node.zIndex = 900;
    t.node.scale = this.context.layoutScale;
    t.node.name = "DaxiaoHitSpineNode";
  }
  showFlowLight(e) {
    var t = e.getChildByName("DaxiaoCardTipNode");
    t && (t.active = false);
    if (!e.getChildByName("DaxiaoFlowLightNode")) {
      var o = new cc.Node("DaxiaoFlowLightNode");
      e.addChild(o);
      o.scale = this.context.layoutScale;
      o.setContentSize(e.getContentSize());
      BaseSpine.refreshWithNode(o, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", 1);
    }
  }
}