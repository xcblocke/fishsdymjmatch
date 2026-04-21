import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
export class HaiyangAnimPlayer {
  nodeInfos = [];
  completedCount = 0;
  maskLayer = null;
  maskGraphics = null;
  PHASE1_DURATION = 0.16;
  PHASE1_MOVE_Y = 10;
  PHASE1_ANGLE = -10;
  PHASE1_SCALE = 1.2;
  PHASE1_DELAY = 0.06;
  PHASE2_DURATION = 0.5;
  PHASE2_RESTORE_DELAY = 0.4;
  PHASE2_INTERVAL_DELAY = 0.067;
  TRAIL_HIT_DELAY = 0.2;
  TRAIL_DURATION = 0.3;
  TRAIL_FADE_TIME = 0.3;
  TRAIL_STROKE = 64;
  TRAIL_COLOR = cc.color(255, 255, 255, 255);
  COLLISION_DELAY = 0.1;
  COLLISION_UP_DURATION = 0.33;
  COLLISION_DOWN_DURATION = 0.33;
  COLLISION_UP_DISTANCE = 150;
  COLLISION_DOWN_DISTANCE = 1500;
  COLLISION_SIDE_DELAY = 0.06;
  FADE_TO_DARK_OPACITY = 77;
  FADE_TO_DARK_DURATION = 0.16;
  FADE_TO_WHITE_DURATION = 0.33;
  RES_BUNDLE = "l_daxiaohaiyang";
  RES_TRAIL_SPRITE = "texture/gameplay_trailingElement";
  RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
  RES_HIT_SPINE = "spine/hint/gameplay_hit";
  RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight";
  RES_ELIMINATION_BACK = "spine/clear/gameplay_great_elimination_back";
  RES_ELIMINATION = "spine/clear/gameplay_great_elimination_effect";
  RES_ELIMINATION_BACK_OFFSET_Y = -100;
  RES_ELIMINATION_OFFSET_Y = 100;
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
      h = new HaiyangAnimPlayer({
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
  delay(t, e) {
    return new Promise(function (i) {
      if (cc.isValid(t)) {
        cc.tween(t).delay(e).call(i).start();
      } else {
        i();
      }
    });
  }
  createBezierEasing(t, e, i, a) {
    return function (o) {
      if (0 === o || 1 === o) return o;
      for (var n = 0, r = 1, s = 0, c = 0; c < 10; c++) {
        var l = (n + r) / 2;
        s = 3 * (1 - l) * (1 - l) * l * t + 3 * (1 - l) * l * l * i + l * l * l;
        if (Math.abs(s - o) < 0.001) break;
        if (s < o) {
          n = l;
        } else {
          r = l;
        }
      }
      var h = (n + r) / 2;
      return 3 * (1 - h) * (1 - h) * h * e + 3 * (1 - h) * h * h * a + h * h * h;
    };
  }
  bezierTo(t, e, i) {
    var a = this;
    return new Promise(function (o) {
      if (cc.isValid(t)) {
        var n = a.createBezierEasing(0.25, 0, 0.25, 1);
        cc.tween(t).to(i, {
          position: e
        }, {
          easing: n
        }).call(o).start();
      } else o();
    });
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
  hideFlowLight(t) {
    var e = t.getChildByName("DaxiaoFlowLightNode");
    e && (e.active = false);
    var i = t.getChildByName("DaxiaoCardTipNode");
    i && (i.active = false);
  }
  showFlowLight(t) {
    if (!t.getChildByName("DaxiaoFlowLightNode")) {
      var e = new cc.Node("DaxiaoFlowLightNode");
      t.addChild(e);
      e.scale = this.context.layoutScale;
      BaseSpine.refreshWithNode(e, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", -1, null, false);
    }
  }
  setupPositions(t) {
    var e = this;
    t.sort(function (t, i) {
      var a = e.context.getTileObject(t.tileId2),
        o = e.context.getTileObject(i.tileId2);
      return a && o ? a.gridPosX !== o.gridPosX ? a.gridPosX - o.gridPosX : a.gridPosY - o.gridPosY : 0;
    });
    var i = t[0].cardNode1.getContentSize().height,
      a = t[0].cardNode1.getContentSize().width,
      o = -a * t.length / 2 + a / 2;
    t.forEach(function (e, n) {
      var r = o + n * a,
        s = Math.floor(t.length / 2),
        c = 500 - Math.abs(n - s) * i * 0.15,
        l = c - 0.96 * i;
      e.targetPos1 = cc.v3(r, c, 0);
      e.targetPos2 = cc.v3(r, l, 0);
      e.runIndex = n;
      e.cardNode1.zIndex = n;
      e.cardNode2.zIndex = n + 1000;
    });
    this.nodeInfos = t;
  }
  play(t) {
    var e = this;
    this.nodeInfos = t;
    this.completedCount = 0;
    this.createMaskLayer();
    this.fadeToDark();
    this.nodeInfos.forEach(function (t) {
      return e.animateCard1(t);
    });
  }
  animateCard1(t) {
    var e = this;
    this.context.removeTileNode(t.tileId1);
    var i = this.nodeInfos.length,
      a = t.runIndex * this.PHASE1_DELAY,
      o = (i - 1 - t.runIndex) * this.PHASE1_DELAY,
      n = t.runIndex * this.PHASE2_INTERVAL_DELAY;
    this.delay(t.cardNode1, a).then(function () {
      return e.playPhase1(t.cardNode1, false);
    }).then(function () {
      return e.delay(t.cardNode1, o + n);
    }).then(function () {
      var i = e.playPhase2(t.cardNode1, t.targetPos1);
      e.delay(t.cardNode1, 0).then(function () {
        e.triggerTrail(t);
      });
      return i;
    });
  }
  playPhase1(t, e) {
    var i = this;
    if (!cc.isValid(t)) return Promise.resolve();
    var a = t.position.y + this.PHASE1_MOVE_Y,
      o = e ? -this.PHASE1_ANGLE : this.PHASE1_ANGLE;
    return new Promise(function (e) {
      cc.tween(t).to(i.PHASE1_DURATION, {
        position: cc.v3(t.position.x, a, 0),
        angle: o,
        scale: i.PHASE1_SCALE
      }).call(e).start();
    });
  }
  playPhase2(t, e) {
    cc.tween(t).to(this.PHASE2_RESTORE_DELAY, {
      angle: 0,
      scale: 1
    }).start();
    return this.bezierTo(t, e, this.PHASE2_DURATION).then(function () {
      if (cc.isValid(t)) {
        t.angle = 0;
        t.scale = 1;
      }
    });
  }
  triggerTrail(t) {
    var e = this,
      i = t.cardNode1.position.clone(),
      a = this.context.getTileNodePos(t.tileId2);
    if (a) {
      this.playTrailEffect(i, a).then(function () {
        return e.animateCard2(t);
      });
    } else {
      this.animateCard2(t);
    }
  }
  playTrailEffect(t, e) {
    var i = this,
      a = new cc.Node("TrailContainer");
    a.parent = this.context.effectNode;
    a.position = t;
    a.zIndex = 400;
    a.scale = this.context.layoutScale;
    var o = new cc.Node("SpriteContainer");
    o.parent = a;
    o.position = cc.v3(0, 0, 0);
    BaseSprite.create(this.RES_TRAIL_SPRITE, this.RES_BUNDLE).node.parent = o;
    return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (t) {
      if (t && cc.isValid(a)) {
        var n = a.addComponent(cc.MotionStreak);
        n.fadeTime = i.TRAIL_FADE_TIME;
        n.minSeg = 1;
        n.stroke = i.TRAIL_STROKE;
        n.texture = t.getTexture();
        n.color = i.TRAIL_COLOR;
        return i.arcTo(a, e, i.TRAIL_DURATION, o);
      }
    }).then(function () {
      cc.isValid(a) && a.destroy();
    });
  }
  animateCard2(t) {
    var e = this;
    this.context.removeTileNode(t.tileId2);
    t.cardNode2.active = true;
    var i = this.context.layoutScale || 1;
    this.playHitEffect(t.cardNode2, i);
    this.delay(t.cardNode2, this.TRAIL_HIT_DELAY).then(function () {
      var i = t.cardNode2.getChildByName("TileAnimNodeName") || t.cardNode2;
      e.showFlowLight(i);
    }).then(function () {
      return e.playPhase1(t.cardNode2, true);
    }).then(function () {
      return e.playPhase2(t.cardNode2, t.targetPos2);
    }).then(function () {
      return e.onCard2Arrived();
    });
  }
  playHitEffect(t, e) {
    var i = BaseSpine.create(this.RES_HIT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
    i.node.parent = this.context.effectNode;
    i.node.position = t.position.clone();
    i.node.zIndex = 900;
    i.node.scale = e;
    i.node.name = "DaxiaoHitSpineNode";
  }
  onCard2Arrived() {
    ++this.completedCount >= this.nodeInfos.length && this.startCollision();
  }
  startCollision() {
    var t = this,
      e = this.nodeInfos.map(function (t) {
        return {
          node1: t.cardNode1,
          node2: t.cardNode2
        };
      });
    this.playCollision(e).then(function () {
      return t.onCollisionComplete();
    });
  }
  playCollision(t) {
    var e = this;
    if (0 === t.length) return Promise.resolve();
    var i = Math.floor(this.nodeInfos.length / 2),
      a = this.COLLISION_DELAY + this.COLLISION_UP_DURATION + this.COLLISION_DOWN_DURATION;
    this.delay(t[0].node1, a).then(function () {
      e.playEliminationEffect();
      e.context.playShake();
      e.fadeToWhite();
    });
    this.nodeInfos.forEach(function (t, a) {
      var o = Math.abs(a - i) * e.COLLISION_SIDE_DELAY,
        n = e.COLLISION_DELAY + o,
        r = t.cardNode1.position.clone(),
        s = t.cardNode2.position.clone(),
        c = cc.v3(r.x, r.y + e.COLLISION_UP_DISTANCE, 0),
        l = cc.v3(s.x, s.y + e.COLLISION_UP_DISTANCE, 0),
        h = cc.v3(c.x, c.y - e.COLLISION_DOWN_DISTANCE, 0),
        d = cc.v3(l.x, l.y - e.COLLISION_DOWN_DISTANCE, 0);
      cc.tween(t.cardNode1).delay(n).to(e.COLLISION_UP_DURATION, {
        position: c
      }, {
        easing: "quartOut"
      }).to(e.COLLISION_DOWN_DURATION, {
        position: h
      }, {
        easing: "quartIn"
      }).call(function () {
        cc.isValid(t.cardNode1) && (t.cardNode1.active = false);
      }).start();
      cc.tween(t.cardNode2).delay(n).to(e.COLLISION_UP_DURATION, {
        position: l
      }, {
        easing: "quartOut"
      }).to(e.COLLISION_DOWN_DURATION, {
        position: d
      }, {
        easing: "quartIn"
      }).call(function () {
        cc.isValid(t.cardNode2) && (t.cardNode2.active = false);
      }).start();
    });
    var o = Math.max.apply(Math, [...this.nodeInfos.map(function (t, e) {
        return Math.abs(e - i);
      })]) * this.COLLISION_SIDE_DELAY,
      r = this.COLLISION_DELAY + o + this.COLLISION_UP_DURATION + this.COLLISION_DOWN_DURATION;
    return this.delay(t[0].node1, r);
  }
  onCollisionComplete() {
    this.nodeInfos.forEach(function (t) {
      cc.isValid(t.cardNode1) && t.cardNode1.destroy();
      cc.isValid(t.cardNode2) && t.cardNode2.destroy();
    });
    if (cc.isValid(this.maskLayer)) {
      this.maskLayer.destroy();
      this.maskLayer = null;
    }
    this.maskGraphics = null;
    this.context.onComplete();
  }
  playEliminationEffect() {
    var t = BaseSpine.create(this.RES_ELIMINATION_BACK, "in", 1, null, true, this.RES_BUNDLE);
    t.node.parent = this.context.effectNode;
    t.node.position = cc.v3(0, this.RES_ELIMINATION_BACK_OFFSET_Y, 0);
    t.node.zIndex = 500;
    var e = BaseSpine.create(this.RES_ELIMINATION, "in", 1, null, true, this.RES_BUNDLE);
    e.node.parent = this.context.effectNode;
    e.node.position = cc.v3(0, this.RES_ELIMINATION_OFFSET_Y, 0);
    e.node.zIndex = 600;
  }
  createMaskLayer() {
    this.maskLayer = new cc.Node("HaiyangMaskLayer");
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
}