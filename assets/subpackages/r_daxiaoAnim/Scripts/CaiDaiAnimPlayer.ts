import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export class CaiDaiAnimPlayer {
  nodeInfos = [];
  maskLayer = null;
  maskGraphics = null;
  context = null;
  config = null;
  constructor(e, t) {
    this.context = e;
    this.config = t;
  }
  static getConfig() {
    return {
      phase1: {
        duration: 0.25,
        delay: 0.03,
        fadeTime: 0.15,
        stroke: 32,
        color: cc.color(255, 200, 100, 255),
        flowLightDelay: 0.2
      },
      phase2: {
        duration: [0.13, 0.2],
        moveY: [100, -30],
        delay: 0.066
      },
      phase3: {
        duration: 0.3,
        delay: 0,
        phase4Delay: 0.0167
      },
      phase4: {
        delay: 0.04,
        collisionAnimations: ["in1", "in2", "in3"],
        topAdditionalAnim: "in4_top",
        topAdditionalAnimOffsetY: 0,
        ribbonAnim: "in2",
        ribbonBgAnim: "in3"
      },
      collision: {
        delay: 0.08,
        outDuration: 0.13,
        inDuration: 0.068,
        outDistance: 100,
        scaleUp: 1.1,
        scaleDuration1: 0.06,
        scaleDuration2: 0.03
      },
      fade: {
        toDarkOpacity: 77,
        toDarkDuration: 2,
        toWhiteDuration: 0.5
      },
      resources: {
        particle: {
          path: "texture/caidai/gameplay_trailingElement",
          bundle: "r_daxiaocaidai"
        },
        trailTexture: {
          path: "texture/caidai/gameplay_star_tail",
          bundle: "r_daxiaocaidai"
        },
        hitSpine: {
          path: "spine/caidai/gameplay_flowingLight",
          bundle: "r_daxiaocaidai"
        },
        flowLight: {
          path: "spine/caidai/gameplay_flowingLight",
          bundle: "r_daxiaocaidai"
        },
        backSpine: {
          path: "spine/caidai/gameplay_ribbon",
          bundle: "r_daxiaocaidai"
        },
        effectSpine: {
          path: "spine/caidai/gameplay_elimination_effect",
          bundle: "r_daxiaocaidai"
        }
      }
    };
  }
  static playCaiDaiAnim(t, i) {
    var o,
      a,
      r,
      c,
      s = t.context,
      l = s.gameView.nodeTopEffectRoot,
      d = CaiDaiAnimPlayer.getConfig(),
      u = new CaiDaiAnimPlayer({
        effectNode: l,
        layoutScale: s.layoutScale,
        onComplete: function () {
          return t.onAnimationComplete();
        },
        loadRes: function (e, t, i) {
          return s.gameCtr.loadRes(e, t, i);
        },
        getTileNodePos: function (e) {
          var i = s.getTileNodeMap().get(e);
          return i ? t.toLocalPos(i.cardNode, l) : null;
        },
        removeTileNode: function (e) {
          s.removeTileNodeByTileId(e);
        },
        getTileObject: function (e) {
          var t = s.getTileNodeMap().get(e);
          return t ? t.info.tileObject : null;
        },
        getRandomIndexes: function (e) {
          return s.randomGenerator.shuffle(Array.from({
            length: e
          }, function (e, t) {
            return t;
          }));
        },
        getCardSpace: function () {
          return 0;
        },
        getLastCollisionWorldPos: function () {
          return s.getLastCollisionWorldPos();
        }
      }, d);
    u.setupPositions(i, 0);
    try {
      for (var p = __values(i), h = p.next(); !h.done; h = p.next()) {
        var f = h.value,
          y = null === (r = t.context.getTileNodeByTileId(f.tileId1)) || void 0 === r ? void 0 : r.tileNode;
        y && u.hideFlowLight(y);
        var m = null === (c = t.context.getTileNodeByTileId(f.tileId2)) || void 0 === c ? void 0 : c.tileNode;
        m && u.hideFlowLight(m);
        f.cardNode1.active = false;
        f.cardNode2.active = false;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (a = p.return) && a.call(p);
      } finally {
        if (o) throw o.error;
      }
    }
    u.playFullAnimation(i);
  }
  playFullAnimation(e) {
    var t = this;
    this.nodeInfos = e;
    this.maskLayer = new cc.Node("CaiDaiMaskLayer");
    this.maskLayer.parent = this.context.effectNode;
    this.maskLayer.position = cc.v3(0, 0, 0);
    this.maskLayer.zIndex = -1000;
    this.maskLayer._fadeAlpha = 0;
    this.maskGraphics = this.maskLayer.addComponent(cc.Graphics);
    var i = cc.winSize;
    this.maskGraphics.rect(-i.width / 2, -i.height / 2, i.width, i.height);
    this.maskGraphics.fillColor = new cc.Color(0, 0, 0, 0);
    this.maskGraphics.fill();
    return this.playPhase1().then(function () {
      return t.playPhase2All();
    }).then(function () {
      return t.playPhase3All();
    }).then(function () {
      return t.playPhase4();
    }).then(function () {
      return t.onAnimationComplete();
    });
  }
  playPhase1() {
    var e = this,
      t = this.config.phase1,
      i = this.config.resources,
      n = this.context.getLastCollisionWorldPos(),
      o = this.context.effectNode.convertToNodeSpaceAR(n);
    return this.context.loadRes(i.trailTexture.path, cc.SpriteFrame, i.trailTexture.bundle).then(function (n) {
      if (n) {
        for (var a = [], r = 0, c = 0; c < e.nodeInfos.length; c++) {
          var s = e.nodeInfos[c];
          if (cc.isValid(s.cardNode1) && cc.isValid(s.cardNode2)) {
            var l = e.createSingleParticle(o, s.cardNode1.position, s.cardNode1, s.tileId1, r++, t, i, n);
            a.push(l);
            var d = e.createSingleParticle(o, s.cardNode2.position, s.cardNode2, s.tileId2, r++, t, i, n);
            a.push(d);
          }
        }
        return Promise.all(a).then(function () {
          cc.isValid(e.maskLayer) && e.fadeToDark();
        });
      }
    });
  }
  createSingleParticle(e, t, i, n, a, r, c, s) {
    var l = this;
    return new Promise(function (d) {
      var u = new cc.Node("CaiDaiParticle");
      u.parent = l.context.effectNode;
      u.position = e;
      u.scale = l.context.layoutScale;
      u.zIndex = 200;
      var p = BaseSprite.create(c.particle.path, c.particle.bundle);
      p && p.node && (p.node.parent = u);
      var h = u.addComponent(cc.MotionStreak);
      h.fadeTime = r.fadeTime;
      h.minSeg = 1;
      h.stroke = r.stroke;
      h.texture = s.getTexture();
      h.color = r.color;
      var f = a * r.delay;
      cc.tween(u).delay(f).to(r.duration, {
        position: t
      }, {}).call(function () {
        cc.isValid(u) && u.destroy();
        l.context.removeTileNode(n);
        i.position = t;
        i.active = true;
        if (cc.isValid(i)) {
          l.playHitEffect(i, l.context.layoutScale, c.hitSpine.path, c.hitSpine.bundle, true);
          cc.tween(i).delay(r.flowLightDelay).call(function () {
            cc.isValid(i) && l.showFlowLight(i, l.context.layoutScale, c.flowLight.path, c.flowLight.bundle);
          }).start();
        }
        d();
      }).start();
    });
  }
  playPhase2All() {
    for (var e = this, t = this.config.phase2, i = [], n = function n(n) {
        var a = o.nodeInfos[n],
          r = n * t.delay;
        i.push(o.delay(a.cardNode1, r).then(function () {
          return e.playPhase2(a.cardNode1, t);
        }));
        i.push(o.delay(a.cardNode2, r).then(function () {
          return e.playPhase2(a.cardNode2, t);
        }));
      }, o = this, a = 0; a < this.nodeInfos.length; a++) n(a);
    return Promise.all(i).then(function () {});
  }
  playPhase2(e, t) {
    if (!cc.isValid(e)) return Promise.resolve();
    for (var i = Array.isArray(t.duration) ? t.duration : [t.duration], n = Array.isArray(t.moveY) ? t.moveY : [t.moveY], o = cc.tween(e), a = e.y, r = 0; r < i.length; r++) {
      var c = i[r];
      a += void 0 !== n[r] ? n[r] : 0;
      o = o.to(c, {
        y: a
      });
    }
    return new Promise(function (e) {
      o.call(e).start();
    });
  }
  playPhase3All() {
    for (var e = this, t = this.config.phase3, i = [], n = function n(n) {
        var a = o.nodeInfos[n];
        i.push(o.delay(a.cardNode1, n * t.delay).then(function () {
          return e.playPhase3Single(a.cardNode1, a.targetPos1, t);
        }));
        i.push(o.delay(a.cardNode2, n * t.delay).then(function () {
          return e.playPhase3Single(a.cardNode2, a.targetPos2, t);
        }));
      }, o = this, a = 0; a < this.nodeInfos.length; a++) n(a);
    return Promise.all(i).then(function () {
      var i = e.maskLayer || (e.nodeInfos.length > 0 ? e.nodeInfos[0].cardNode1 : null);
      return i ? e.delay(i, t.phase4Delay) : Promise.resolve();
    });
  }
  playPhase3Single(e, t, i) {
    return cc.isValid(e) ? new Promise(function (n) {
      cc.tween(e).to(i.duration, {
        position: t,
        scale: 1
      }).call(n).start();
    }) : Promise.resolve();
  }
  playPhase4() {
    for (var e = this, t = this.config.phase4, i = [], n = this.nodeInfos.length - 1; n >= 0; n--) {
      var o = this.nodeInfos[n],
        a = 0 === n,
        r = n === this.nodeInfos.length - 1,
        c = (this.nodeInfos.length - 1 - n) * t.delay;
      i.push(this.playSingleCollision(o, a, r, c));
    }
    return Promise.all(i).then(function () {
      cc.isValid(e.maskLayer) && e.fadeToWhite();
    });
  }
  playSingleCollision(e, t, i, n) {
    var o = this,
      a = cc.v3((e.cardNode1.x + e.cardNode2.x) / 2, (e.cardNode1.y + e.cardNode2.y) / 2, 0);
    return this.delay(e.cardNode1, n).then(function () {
      return o.playCollision([{
        node1: e.cardNode1,
        node2: e.cardNode2
      }], o.config.collision);
    }).then(function () {
      o.playCollisionEffects(a, t, i);
    });
  }
  playCollisionEffects(e, t, i) {
    var n = this.config.phase4,
      o = this.config.resources;
    if (n.collisionAnimations.length > 0) {
      var r = n.collisionAnimations[Math.floor(Math.random() * n.collisionAnimations.length)],
        c = BaseSpine.create(o.effectSpine.path, r, 1, null, true, o.effectSpine.bundle);
      c.node.parent = this.context.effectNode;
      c.node.position = e;
      c.node.zIndex = 500;
      if (t && n.topAdditionalAnim) {
        var s = BaseSpine.create(o.effectSpine.path, n.topAdditionalAnim, 1, null, true, o.effectSpine.bundle);
        s.node.parent = this.context.effectNode;
        var l = e.clone();
        l.y += n.topAdditionalAnimOffsetY;
        s.node.position = l;
        s.node.zIndex = 501;
      }
    }
    if (i && n.ribbonAnim) {
      var d = BaseSpine.create(o.backSpine.path, n.ribbonAnim, 1, null, true, o.backSpine.bundle);
      d.node.parent = this.context.effectNode;
      d.node.position = cc.v3(0, 0, 0);
      d.node.zIndex = 450;
    }
    if (i && n.ribbonBgAnim) {
      var u = BaseSpine.create(o.backSpine.path, n.ribbonBgAnim, 1, null, true, o.backSpine.bundle);
      u.node.parent = this.context.effectNode;
      u.node.position = cc.v3(0, 0, 0);
      u.node.zIndex = 400;
    }
  }
  playCollision(e, t) {
    var i, o;
    if (0 === e.length) return Promise.resolve();
    var a = function a(e, i) {
      if (!cc.isValid(e) || !cc.isValid(i)) return "continue";
      var n = e.position.clone(),
        o = i.position.clone();
      cc.tween(e).delay(t.delay).to(t.outDuration, {
        position: cc.v3(n.x - t.outDistance, n.y, 0)
      }, {
        easing: "quartInOut"
      }).to(t.inDuration, {
        position: cc.v3(0, n.y, 0)
      }, {
        easing: "quartInOut"
      }).call(function () {
        cc.isValid(e) && (e.active = false);
      }).start();
      cc.tween(i).delay(t.delay).to(t.outDuration, {
        position: cc.v3(o.x + t.outDistance, o.y, 0)
      }, {
        easing: "quartInOut"
      }).to(t.inDuration, {
        position: cc.v3(0, o.y, 0)
      }, {
        easing: "quartInOut"
      }).call(function () {
        cc.isValid(i) && (i.active = false);
      }).start();
      var a = t.delay + t.outDuration,
        r = void 0,
        c = void 0;
      if (Array.isArray(t.scaleUp)) {
        if (t.scaleUp.length >= 2) {
          r = {
            scaleX: t.scaleUp[0],
            scaleY: t.scaleUp[1]
          };
          c = {
            scaleX: 1,
            scaleY: 1
          };
        } else {
          r = {
            scale: t.scaleUp[0]
          };
          c = {
            scale: 1
          };
        }
      } else {
        r = {
          scale: t.scaleUp
        };
        c = {
          scale: 1
        };
      }
      cc.tween(e).delay(a).call(function () {
        cc.isValid(e) && (e.scale = 1);
      }).to(t.scaleDuration1, r).to(t.scaleDuration2, c).start();
      cc.tween(i).delay(a).call(function () {
        cc.isValid(i) && (i.scale = 1);
      }).to(t.scaleDuration1, r).to(t.scaleDuration2, c).start();
    };
    try {
      for (var r = __values(e), c = r.next(); !c.done; c = r.next()) {
        var s = c.value;
        a(s.node1, s.node2);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (o = r.return) && o.call(r);
      } finally {
        if (i) throw i.error;
      }
    }
    return this.delay(e[0].node1, t.delay + t.outDuration + t.inDuration);
  }
  fadeToDark() {
    var e = this,
      t = this.config.fade;
    if (cc.isValid(this.maskLayer) && this.maskGraphics) {
      var i = t.toDarkOpacity,
        n = cc.winSize;
      cc.tween(this.maskLayer).to(t.toDarkDuration, {
        _fadeAlpha: i
      }, {
        progress: function (t, i, o, a) {
          if (cc.isValid(e.maskLayer) && e.maskGraphics) {
            var r = t + (i - t) * a;
            e.maskGraphics.clear();
            e.maskGraphics.rect(-n.width / 2, -n.height / 2, n.width, n.height);
            e.maskGraphics.fillColor = new cc.Color(0, 0, 0, r);
            e.maskGraphics.fill();
          }
          return t + (i - t) * a;
        }
      }).start();
    }
  }
  fadeToWhite() {
    var e = this,
      t = this.config.fade;
    if (cc.isValid(this.maskLayer) && this.maskGraphics) {
      var i = cc.winSize;
      cc.tween(this.maskLayer).to(t.toWhiteDuration, {
        _fadeAlpha: 0
      }, {
        progress: function (t, n, o, a) {
          if (cc.isValid(e.maskLayer) && e.maskGraphics) {
            var r = t + (n - t) * a;
            e.maskGraphics.clear();
            e.maskGraphics.rect(-i.width / 2, -i.height / 2, i.width, i.height);
            e.maskGraphics.fillColor = new cc.Color(0, 0, 0, r);
            e.maskGraphics.fill();
          }
          return t + (n - t) * a;
        }
      }).start();
    }
  }
  hideFlowLight(e) {
    var t = e.getChildByName("DaxiaoCardTipNode");
    t && (t.active = false);
  }
  showFlowLight(e, t, i, n) {
    var o = e.getChildByName("DaxiaoCardTipNode");
    o && (o.active = false);
    if (!e.getChildByName("DaxiaoFlowLightNode")) {
      var r = new cc.Node("DaxiaoFlowLightNode");
      e.addChild(r);
      r.scale = t;
      BaseSpine.refreshWithNode(r, i, n).setAnimation("init", -1, null, false);
    }
  }
  playHitEffect(e, t, i, n, o = true) {
    var r = BaseSpine.create(i, "in", 1, null, false, n);
    r.node.parent = o ? e : e.parent;
    r.node.position = o ? cc.v3(0, 0, 0) : e.position.clone();
    r.node.zIndex = o ? 900 : 300;
    r.node.scale = t;
    r.node.name = "DaxiaoHitSpineNode";
    return r;
  }
  onAnimationComplete() {
    var e = [];
    this.nodeInfos.forEach(function (t) {
      e.push(t.cardNode1, t.cardNode2);
    });
    this.destroyNodes(e);
    if (cc.isValid(this.maskLayer)) {
      this.maskLayer.destroy();
      this.maskLayer = null;
    }
    this.maskGraphics = null;
    this.context.onComplete && this.context.onComplete();
  }
  destroyNodes(e) {
    e.forEach(function (e) {
      return cc.isValid(e) && e.destroy();
    });
  }
  delay(e, t) {
    return new Promise(function (i) {
      if (!cc.isValid(e) || t <= 0) {
        i();
      } else {
        cc.tween(e).delay(t).call(i).start();
      }
    });
  }
  createBezierEasing(e, t, i, n) {
    return function (o) {
      if (0 === o || 1 === o) return o;
      for (var a = 0, r = 1, c = 0, s = 0; s < 10; s++) {
        var l = (a + r) / 2;
        c = 3 * (1 - l) * (1 - l) * l * e + 3 * (1 - l) * l * l * i + l * l * l;
        if (Math.abs(c - o) < 0.001) break;
        if (c < o) {
          a = l;
        } else {
          r = l;
        }
      }
      var d = (a + r) / 2;
      return 3 * (1 - d) * (1 - d) * d * t + 3 * (1 - d) * d * d * n + d * d * d;
    };
  }
  setupPositions(e, t) {
    var i = e[0].cardNode1.getContentSize().height,
      n = e[0].cardNode1.getContentSize().width;
    if (e.length % 2 == 0) {
      this.setupEvenPositions(e, n, i, t);
    } else {
      this.setupOddPositions(e, n, i, t);
    }
  }
  setupEvenPositions(e, t, i, n) {
    var o = e.length,
      a = o / 2,
      r = i + n,
      c = o * r / 2;
    e.forEach(function (e, i) {
      var n,
        s = c - i * r;
      n = i < a ? t / 2 + i * (t / 2) : t / 2 + t / 2 * (o - 1 - i);
      e.targetPos1 = cc.v3(-n, s, 0);
      e.targetPos2 = cc.v3(n, s, 0);
      var l = Math.floor(-s);
      e.cardNode1.zIndex = l;
      e.cardNode2.zIndex = l + 1;
    });
  }
  setupOddPositions(e, t, i, n) {
    var o = e.length,
      a = Math.floor(o / 2),
      r = i + n,
      c = o * r / 2;
    e.forEach(function (e, i) {
      var n,
        s = c - i * r;
      n = i <= a ? t / 2 + i * (t / 2) : t / 2 + t / 2 * (o - 1 - i);
      e.targetPos1 = cc.v3(-n, s, 0);
      e.targetPos2 = cc.v3(n, s, 0);
      var l = Math.floor(-s);
      e.cardNode1.zIndex = l;
      e.cardNode2.zIndex = l + 1;
    });
  }
}