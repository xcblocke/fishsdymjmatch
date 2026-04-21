import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
export class YinxiangAnimPlayer {
  nodeInfos = [];
  maskLayer = null;
  maskGraphics = null;
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
  PHASE4_COLLISION_ANIM = "in";
  PHASE4_EFFECT_ZINDEX = 500;
  PHASE4_MASK_WIDTH = 1080;
  PHASE4_MASK_HEIGHT = 3000;
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
  context = null;
  constructor(t) {
    this.context = t;
  }
  static playFullAnimation(e, i) {
    var o,
      n,
      r,
      s,
      c = e.context,
      l = c.gameView.nodeTopEffectRoot,
      h = new YinxiangAnimPlayer({
        effectNode: l,
        layoutScale: c.layoutScale,
        onComplete: function () {
          return e.onAnimationComplete();
        },
        loadRes: function (t, e, i) {
          return c.gameCtr.loadRes(t, e, i);
        },
        getTileNodePos: function (t) {
          var i = c.getTileNodeMap().get(t);
          return i ? e.toLocalPos(i.cardNode, l) : null;
        },
        removeTileNode: function (t) {
          return c.removeTileNodeByTileId(t);
        },
        getTileObject: function (t) {
          var e = c.getTileNodeMap().get(t);
          return e ? e.info.tileObject : null;
        },
        getRandomIndexes: function (t) {
          return c.randomGenerator.shuffle(Array.from({
            length: t
          }, function (t, e) {
            return e;
          }));
        },
        getLastCollisionWorldPos: function () {
          return c.getLastCollisionWorldPos();
        },
        playShake: function () {
          return c.gameView.playShake();
        }
      });
    try {
      for (var d = __values(i), p = d.next(); !p.done; p = d.next()) {
        var u = p.value,
          f = null === (r = c.getTileNodeByTileId(u.tileId1)) || void 0 === r ? void 0 : r.tileNode;
        f && h.hideFlowLight(f);
        var _ = null === (s = c.getTileNodeByTileId(u.tileId2)) || void 0 === s ? void 0 : s.tileNode;
        _ && h.hideFlowLight(_);
        u.cardNode1.active = false;
        u.cardNode2.active = false;
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        p && !p.done && (n = d.return) && n.call(d);
      } finally {
        if (o) throw o.error;
      }
    }
    h.setupPositions(i);
    h.play(i);
  }
  setupPositions(t) {
    var e = t[0].cardNode1.getContentSize().height,
      i = t[0].cardNode1.getContentSize().width,
      a = (t.length - 1) / 2;
    t.forEach(function (t, o) {
      var n = 0.5 * Math.abs(o - a) * i,
        r = 0 + (a - o) * e * 0.95;
      t.targetPos1 = cc.v3(-0.5 * i - n, r, 0);
      t.targetPos2 = cc.v3(0.5 * i + n, r, 0);
      var s = 2 * o;
      t.cardNode1.zIndex = s;
      t.cardNode2.zIndex = s + 1;
    });
  }
  play(t) {
    var e = this;
    this.nodeInfos = t;
    this.createMaskLayer();
    this.playPhase1().then(function () {
      return e.playPhase2();
    }).then(function () {
      return e.playPhase3();
    }).then(function () {
      return e.playPhase4();
    }).then(function () {
      return e.onComplete();
    });
  }
  playPhase1() {
    var t = this,
      e = this.context.getLastCollisionWorldPos(),
      i = this.context.effectNode.convertToNodeSpaceAR(e);
    return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (e) {
      var o, n;
      if (e) {
        var r = [],
          s = 0;
        try {
          for (var c = __values(t.nodeInfos), l = c.next(); !l.done; l = c.next()) {
            var h = l.value;
            r.push(t.createParticle(i, h.cardNode1.position, h.cardNode1, h.tileId1, s++, e));
            r.push(t.createParticle(i, h.cardNode2.position, h.cardNode2, h.tileId2, s++, e));
          }
        } catch (t) {
          o = {
            error: t
          };
        } finally {
          try {
            l && !l.done && (n = c.return) && n.call(c);
          } finally {
            if (o) throw o.error;
          }
        }
        return Promise.all(r).then(function () {
          cc.isValid(t.maskLayer) && t.fadeToDark();
        });
      }
    });
  }
  createParticle(t, e, i, a, o, r) {
    var s = this;
    return new Promise(function (c) {
      var l = new cc.Node("YinxiangParticle");
      l.parent = s.context.effectNode;
      l.position = t;
      l.scale = s.context.layoutScale;
      l.zIndex = -800;
      var h = new cc.Node("SpriteContainer");
      h.parent = l;
      h.position = cc.v3(0, 0, 0);
      var d = o % s.RES_PARTICLE_COUNT + 1,
        p = "" + s.RES_PARTICLE_PREFIX + d,
        u = BaseSprite.create(p, s.RES_BUNDLE);
      if (u && u.node) {
        u.node.parent = h;
        u.node.scale = 2;
      }
      var f = l.addComponent(cc.MotionStreak);
      f.fadeTime = s.PHASE1_FADE_TIME;
      f.minSeg = 1;
      f.stroke = s.PHASE1_STROKE;
      f.texture = r.getTexture();
      f.color = s.PHASE1_COLOR;
      var _ = o * s.PHASE1_DELAY;
      cc.tween(l).delay(_).call(function () {
        s.arcTo(l, e, s.PHASE1_DURATION, h).then(function () {
          cc.isValid(l) && l.destroy();
          s.context.removeTileNode(a);
          i.position = e;
          i.active = true;
          if (cc.isValid(i)) {
            s.playHitEffect(i);
            cc.tween(i).delay(s.PHASE1_FLOW_LIGHT_DELAY).call(function () {
              cc.isValid(i) && s.showFlowLight(i);
            }).start();
          }
          c();
        });
      }).start();
    });
  }
  playPhase2() {
    for (var t = this, e = [], i = function i(i) {
        var o = a.nodeInfos[i],
          n = i * a.PHASE2_DELAY;
        e.push(a.delay(o.cardNode1, n).then(function () {
          return t.floatCard(o.cardNode1);
        }));
        e.push(a.delay(o.cardNode2, n).then(function () {
          return t.floatCard(o.cardNode2);
        }));
      }, a = this, o = 0; o < this.nodeInfos.length; o++) i(o);
    return Promise.all(e).then(function () {});
  }
  floatCard(t) {
    if (!cc.isValid(t)) return Promise.resolve();
    for (var e = cc.tween(t), i = t.y, a = 0; a < this.PHASE2_DURATIONS.length; a++) {
      i += this.PHASE2_MOVE_YS[a];
      e = e.to(this.PHASE2_DURATIONS[a], {
        y: i
      });
    }
    return new Promise(function (t) {
      e.call(t).start();
    });
  }
  playPhase3() {
    for (var t = this, e = [], i = function i(i) {
        var o = a.nodeInfos[i];
        e.push(a.delay(o.cardNode1, i * a.PHASE3_DELAY).then(function () {
          return t.moveToTarget(o.cardNode1, o.targetPos1);
        }));
        e.push(a.delay(o.cardNode2, i * a.PHASE3_DELAY).then(function () {
          return t.moveToTarget(o.cardNode2, o.targetPos2);
        }));
      }, a = this, o = 0; o < this.nodeInfos.length; o++) i(o);
    return Promise.all(e).then(function () {
      var e,
        i = null === (e = t.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
      return cc.isValid(i) ? t.delay(i, t.PHASE3_PHASE4_DELAY) : Promise.resolve();
    });
  }
  moveToTarget(t, e) {
    var i = this;
    return cc.isValid(t) ? new Promise(function (a) {
      cc.tween(t).to(i.PHASE3_DURATION, {
        position: e,
        scale: 1
      }).call(a).start();
    }) : Promise.resolve();
  }
  playPhase4() {
    var t,
      e = this,
      i = 0,
      a = 0,
      o = 0;
    this.nodeInfos.forEach(function (t) {
      i += t.cardNode1.x + t.cardNode2.x;
      a += t.cardNode1.y + t.cardNode2.y;
      o += 2;
    });
    var n = cc.v3(i / o, a / o, 0);
    this.playCollisionEffect(n);
    this.nodeInfos.forEach(function (t) {
      e.playCardPulse(t.cardNode1);
      e.playCardPulse(t.cardNode2);
    });
    var r = [];
    this.nodeInfos.forEach(function (t) {
      r.push(e.playCardCollision(t.cardNode1, n));
      r.push(e.playCardCollision(t.cardNode2, n));
    });
    var s = 2 * this.PULSE_DURATION,
      c = this.PULSE_SECOND_START + s + this.COLLISION_OUT_DURATION,
      l = null === (t = this.nodeInfos[0]) || void 0 === t ? void 0 : t.cardNode1;
    cc.isValid(l) && cc.tween(l).delay(c).call(function () {
      e.context.playShake();
      cc.isValid(e.maskLayer) && e.fadeToWhite();
    }).start();
    return Promise.all(r).then(function () {});
  }
  playCardPulse(t) {
    if (cc.isValid(t)) {
      var e = 2 * this.PULSE_DURATION,
        i = this.PULSE_SECOND_START - this.PULSE_FIRST_START - e;
      cc.tween(t).delay(this.PULSE_FIRST_START).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MIN,
        scaleY: this.PULSE_SCALE_MIN
      }).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MAX,
        scaleY: this.PULSE_SCALE_MAX
      }).delay(i).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MIN,
        scaleY: this.PULSE_SCALE_MIN
      }).to(this.PULSE_DURATION, {
        scaleX: this.PULSE_SCALE_MAX,
        scaleY: this.PULSE_SCALE_MAX
      }).start();
    }
  }
  playCardCollision(t, e) {
    if (!cc.isValid(t)) return Promise.resolve();
    var i = t.position.clone(),
      a = 2 * this.PULSE_DURATION,
      o = this.PULSE_SECOND_START + a,
      n = i.x > e.x ? i.x + this.COLLISION_OUT_DISTANCE : i.x - this.COLLISION_OUT_DISTANCE,
      r = cc.v3(n, i.y, 0);
    cc.tween(t).delay(o).to(this.COLLISION_OUT_DURATION, {
      position: r,
      scaleX: this.COLLISION_OUT_SCALE,
      scaleY: this.COLLISION_OUT_SCALE
    }, {
      easing: "quartOut"
    }).to(this.COLLISION_IN_DURATION, {
      position: e,
      scaleX: this.COLLISION_IN_SCALE,
      scaleY: this.COLLISION_IN_SCALE
    }, {
      easing: "quartIn"
    }).call(function () {
      cc.isValid(t) && (t.active = false);
    }).start();
    return this.delay(t, o + this.COLLISION_OUT_DURATION + this.COLLISION_IN_DURATION);
  }
  playCollisionEffect(t) {
    var e = new cc.Node("CollisionEffectMask");
    e.parent = this.context.effectNode;
    e.position = t;
    e.zIndex = this.PHASE4_EFFECT_ZINDEX;
    var i = e.addComponent(cc.Mask);
    i.type = cc.Mask.Type.RECT;
    i.inverted = false;
    e.setContentSize(this.PHASE4_MASK_WIDTH, this.PHASE4_MASK_HEIGHT);
    var a = BaseSpine.create(this.RES_EFFECT_SPINE, this.PHASE4_COLLISION_ANIM, 1, null, true, this.RES_BUNDLE);
    a.node.parent = e;
    a.node.position = cc.v3(0, 0, 0);
  }
  createMaskLayer() {
    this.maskLayer = new cc.Node("YinxiangMaskLayer");
    this.maskLayer.parent = this.context.effectNode;
    this.maskLayer.position = cc.v3(0, 0, 0);
    this.maskLayer.zIndex = -1000;
    this.maskLayer._fadeAlpha = 0;
    this.maskGraphics = this.maskLayer.addComponent(cc.Graphics);
    var t = cc.winSize;
    this.maskGraphics.rect(-t.width / 2, -t.height / 2, t.width, t.height);
    this.maskGraphics.fillColor = new cc.Color(0, 0, 0, 0);
    this.maskGraphics.fill();
  }
  fadeToDark() {
    var t = this;
    if (cc.isValid(this.maskLayer) && this.maskGraphics) {
      var e = this.FADE_TO_DARK_OPACITY,
        i = cc.winSize;
      cc.tween(this.maskLayer).to(this.FADE_TO_DARK_DURATION, {
        _fadeAlpha: e
      }, {
        progress: function (e, a, o, n) {
          if (cc.isValid(t.maskLayer) && t.maskGraphics) {
            var r = e + (a - e) * n;
            t.maskGraphics.clear();
            t.maskGraphics.rect(-i.width / 2, -i.height / 2, i.width, i.height);
            t.maskGraphics.fillColor = new cc.Color(0, 0, 0, r);
            t.maskGraphics.fill();
          }
          return e + (a - e) * n;
        }
      }).start();
    }
  }
  fadeToWhite() {
    var t = this;
    if (cc.isValid(this.maskLayer) && this.maskGraphics) {
      var e = cc.winSize;
      cc.tween(this.maskLayer).to(this.FADE_TO_WHITE_DURATION, {
        _fadeAlpha: 0
      }, {
        progress: function (i, a, o, n) {
          if (cc.isValid(t.maskLayer) && t.maskGraphics) {
            var r = i + (a - i) * n;
            t.maskGraphics.clear();
            t.maskGraphics.rect(-e.width / 2, -e.height / 2, e.width, e.height);
            t.maskGraphics.fillColor = new cc.Color(0, 0, 0, r);
            t.maskGraphics.fill();
          }
          return i + (a - i) * n;
        }
      }).start();
    }
  }
  arcTo(t, e, i, a) {
    return new Promise(function (o) {
      if (cc.isValid(t)) {
        var n = t.position.clone(),
          r = e,
          s = r.x - n.x,
          c = r.y - n.y,
          l = Math.sqrt(s * s + c * c),
          h = l * (0.6 + 0.2 * Math.random()),
          d = Math.random() > 0.5,
          p = (n.x + r.x) / 2,
          u = (n.y + r.y) / 2,
          f = p + -c / l * h * (d ? 1 : -1),
          _ = u + s / l * h * (d ? 1 : -1);
        t._arcProgress = 0;
        cc.tween(t).to(i, {
          _arcProgress: 1
        }, {
          progress: function (e, i, o, s) {
            var c = s < 0.5 ? 2 * s * s : 1 - Math.pow(-2 * s + 2, 2) / 2,
              l = (1 - c) * (1 - c) * n.x + 2 * (1 - c) * c * f + c * c * r.x,
              h = (1 - c) * (1 - c) * n.y + 2 * (1 - c) * c * _ + c * c * r.y;
            cc.isValid(t) && (t.position = cc.v3(l, h, 0));
            if (a && cc.isValid(a)) {
              var d = 2 * (1 - c) * (f - n.x) + 2 * c * (r.x - f),
                p = 2 * (1 - c) * (_ - n.y) + 2 * c * (r.y - _),
                u = 180 * Math.atan2(p, d) / Math.PI - 90;
              a.angle = u;
            }
            return e + (i - e) * s;
          }
        }).call(function () {
          cc.isValid(t) && (t.position = e);
          o();
        }).start();
      } else o();
    });
  }
  delay(t, e) {
    return new Promise(function (i) {
      if (!cc.isValid(t) || e <= 0) {
        i();
      } else {
        cc.tween(t).delay(e).call(i).start();
      }
    });
  }
  hideFlowLight(t) {
    var e = t.getChildByName("DaxiaoCardTipNode");
    e && (e.active = false);
  }
  showFlowLight(t) {
    var e = t.getChildByName("DaxiaoCardTipNode");
    e && (e.active = false);
    if (!t.getChildByName("DaxiaoFlowLightNode")) {
      var i = new cc.Node("DaxiaoFlowLightNode");
      t.addChild(i);
      i.scale = this.context.layoutScale;
      i.setContentSize(t.getContentSize());
      BaseSpine.refreshWithNode(i, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", 1);
    }
  }
  playHitEffect(t) {
    var e = BaseSpine.create(this.RES_HIT_SPINE, "gameplay_hit_gf", 1, null, false, this.RES_BUNDLE);
    e.node.parent = t;
    e.node.position = cc.v3(0, 0, 0);
    e.node.zIndex = 900;
    e.node.scale = this.context.layoutScale;
    e.node.name = "DaxiaoHitSpineNode";
  }
  onComplete() {
    this.nodeInfos.forEach(function (t) {
      cc.isValid(t.cardNode1) && t.cardNode1.destroy();
      cc.isValid(t.cardNode2) && t.cardNode2.destroy();
    });
    if (cc.isValid(this.maskLayer)) {
      this.maskLayer.destroy();
      this.maskLayer = null;
    }
    this.maskGraphics = null;
    this.context.onComplete && this.context.onComplete();
  }
}