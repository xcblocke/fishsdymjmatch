import { TileNodeZIndexMap, ETileNodeNames } from '../../../Scripts/BaseTileNode';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
export class MaxituanAnimPlayer {
  nodeInfos = [];
  completedCount = 0;
  context = null;
  config = null;
  constructor(e, t) {
    this.context = e;
    this.config = t;
  }
  static getConfig() {
    return {
      phase1: {
        duration: 0.5,
        delay: 0.03,
        trailDelay: 0.036,
        hitDelay: 0.2,
        controlYOffset: 200,
        preJumpY: void 0,
        preJumpDuration: void 0,
        angle: void 0,
        scale: void 0,
        transformDuration: void 0,
        restoreDelay: void 0
      },
      phase2: {
        duration: 0.5,
        controlYOffset: 200,
        preJumpY: void 0,
        preJumpDuration: void 0,
        angle: void 0,
        scale: void 0,
        transformDuration: void 0,
        restoreDelay: void 0
      },
      phase3: {
        duration: 0.3,
        delay: 0.09,
        controlYOffset: 200,
        finalScale: 0
      },
      circle: {
        radius: 2.5
      },
      trail: {
        duration: 0.3,
        fadeTime: 0.3,
        stroke: 64,
        hitFollowTarget: true
      },
      resources: {
        trailSprite: {
          path: "texture/maxituan/gameplay_mx_star",
          bundle: "r_daxiaomaxituan"
        },
        trailTexture: {
          path: "texture/maxituan/gameplay_mx_star_tail",
          bundle: "r_daxiaomaxituan"
        },
        hitSpine: {
          path: "spine/maxituan/gameplay_hit_mx",
          bundle: "r_daxiaomaxituan",
          anim: "gameplay_hit_mx"
        },
        flowLight: {
          path: "spine/maxituan/gameplay_flowingLight_mx",
          bundle: "r_daxiaomaxituan",
          anim: "idle"
        },
        bottomSpine: {
          path: "spine/maxituan/gameplay_great_elimination_mx_ju_buttom",
          bundle: "r_daxiaomaxituan",
          anim: "gameplay_great_elimination_mx_ju_buttom"
        },
        topSpine: {
          path: "spine/maxituan/gameplay_great_elimination_mx_ju_top",
          bundle: "r_daxiaomaxituan",
          anim: "gameplay_great_elimination_mx_ju_top"
        },
        endBottomSpine: {
          path: "spine/maxituan/gameplay_great_elimination_effect_mx_buttom",
          bundle: "r_daxiaomaxituan",
          anim: "gameplay_great_elimination_effect_mx_buttom"
        },
        endTopSpine: {
          path: "spine/maxituan/gameplay_great_elimination_effect_mx_top",
          bundle: "r_daxiaomaxituan",
          anim: "gameplay_great_elimination_effect_mx_top"
        }
      }
    };
  }
  static playFullAnimation(t, i) {
    var n = MaxituanAnimPlayer.createAnimContext(t),
      o = new MaxituanAnimPlayer(n, MaxituanAnimPlayer.getConfig());
    o.setupPositions(i, 0);
    i.forEach(function (e) {
      o.showClearTip(e.cardNode1);
      o.showClearTip(e.cardNode2);
      o.context.removeTileNodeByTileId(e.tileId1);
    });
    o.playAnimation(i);
  }
  static createAnimContext(e) {
    var t = e.context,
      i = t.gameView.nodeTopEffectRoot;
    return {
      effectNode: i,
      layoutScale: t.layoutScale,
      onComplete: function () {
        return e.onAnimationComplete();
      },
      onShake: function () {
        return t.gameView.playShake();
      },
      loadRes: function (e, i, n) {
        return t.gameCtr.loadRes(e, i, n);
      },
      getTileNodePos: function (n) {
        var o = t.getTileNodeMap().get(n);
        return o ? e.toLocalPos(o.cardNode, i) : null;
      },
      removeTileNode: function (e) {
        t.removeTileNodeByTileId(e);
      },
      removeTileNodeByTileId: function (e) {
        t.removeTileNodeByTileId(e);
      },
      getTileObject: function (e) {
        var i = t.getTileNodeMap().get(e);
        return i ? i.info.tileObject : null;
      },
      getRandomIndexes: function (e) {
        return t.randomGenerator.shuffle(Array.from({
          length: e
        }, function (e, t) {
          return t;
        }));
      },
      getCardSpace: function () {
        return 0;
      }
    };
  }
  static hideAllFlowLight(e, t, i) {
    var o, a, r, c;
    try {
      for (var s = __values(t), l = s.next(); !l.done; l = s.next()) {
        var d = l.value,
          u = null === (r = e.context.getTileNodeByTileId(d.tileId1)) || void 0 === r ? void 0 : r.tileNode;
        u && i.hideFlowLight(u);
        var p = null === (c = e.context.getTileNodeByTileId(d.tileId2)) || void 0 === c ? void 0 : c.tileNode;
        p && i.hideFlowLight(p);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (a = s.return) && a.call(s);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  setupPositions(e) {
    var t = this;
    this.sortInfos(e);
    var i = e[0].cardNode1.getContentSize().width,
      n = this.config.circle.radius * i;
    e.forEach(function (i, o) {
      t.setInfoPositionCircle(i, o, n, e.length);
    });
  }
  sortInfos(e) {
    var t = this;
    e.sort(function (e, i) {
      var n = t.context.getTileObject(e.tileId2),
        o = t.context.getTileObject(i.tileId2);
      return n && o ? n.gridPosX !== o.gridPosX ? n.gridPosX - o.gridPosX : n.gridPosY - o.gridPosY : 0;
    });
  }
  setInfoPositionCircle(e, t, i, n) {
    var o = 360 / (2 * n),
      a = (t * o - 90) * Math.PI / 180,
      r = ((n + t) * o - 90) * Math.PI / 180,
      c = Math.cos(a) * i,
      s = Math.sin(a) * i,
      l = Math.cos(r) * i,
      d = Math.sin(r) * i;
    e.targetPos1 = cc.v3(l, d, 0);
    e.targetPos2 = cc.v3(c, s, 0);
    e.runIndex = t;
    var u = 180 * -Math.atan2(-l, -d) / Math.PI + 180,
      p = 180 * -Math.atan2(-c, -s) / Math.PI + 180;
    e.targetAngle1 = u;
    e.targetAngle2 = p;
    var h = Math.floor(-d),
      f = Math.floor(-s);
    e.cardNode1.zIndex = h + 10 * t;
    e.cardNode2.zIndex = f + 3000 + 10 * t;
  }
  playAnimation(e) {
    var t = this;
    this.nodeInfos = e;
    this.completedCount = 0;
    e.forEach(function (e) {
      t.runCard1Animation(e);
      t.runCard2Animation(e);
    });
  }
  hideFlowLight(e) {
    var t = e.getChildByName("DaxiaoCardTipNode");
    t && (t.active = false);
    var i = e.getChildByName("DaxiaoFlowLightNode");
    i && i.destroy();
  }
  delay(e, t) {
    return new Promise(function (i) {
      if (cc.isValid(e)) {
        cc.tween(e).delay(t).call(i).start();
      } else {
        i();
      }
    });
  }
  tweenTo(e, t, i) {
    return new Promise(function (n) {
      if (cc.isValid(e)) {
        cc.tween(e).to(t, i).call(n).start();
      } else {
        n();
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
  bezierTo(e, t, i, n) {
    return new Promise(function (o) {
      if (cc.isValid(e)) {
        var a = e.position.clone(),
          r = (a.y + t.y) / 2 + n,
          c = (a.x + t.x) / 2;
        e._bezierProgress = 0;
        cc.tween(e).to(i, {
          _bezierProgress: 1
        }, {
          easing: function (e) {
            return 1 - Math.pow(1 - e, 2);
          },
          progress: function (i, n, o, s) {
            if (!cc.isValid(e)) return s;
            var l = s,
              d = (1 - l) * (1 - l) * a.x + 2 * (1 - l) * l * c + l * l * t.x,
              u = (1 - l) * (1 - l) * a.y + 2 * (1 - l) * l * r + l * l * t.y;
            e.position = cc.v3(d, u, 0);
            return i + (n - i) * s;
          }
        }).call(function () {
          cc.isValid(e) && (e.position = t);
          o();
        }).start();
      } else o();
    });
  }
  arcTo(e, t, i) {
    return new Promise(function (n) {
      if (cc.isValid(e)) {
        var o = e.position.clone(),
          a = t,
          r = a.x - o.x,
          c = a.y - o.y,
          s = Math.sqrt(r * r + c * c),
          l = s * (0.6 + 0.2 * Math.random()),
          d = Math.random() > 0.5,
          u = (o.x + a.x) / 2,
          p = (o.y + a.y) / 2,
          h = u + -c / s * l * (d ? 1 : -1),
          f = p + r / s * l * (d ? 1 : -1);
        e._arcProgress = 0;
        cc.tween(e).to(i, {
          _arcProgress: 1
        }, {
          progress: function (t, i, n, r) {
            var c = r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2,
              s = (1 - c) * (1 - c) * o.x + 2 * (1 - c) * c * h + c * c * a.x,
              l = (1 - c) * (1 - c) * o.y + 2 * (1 - c) * c * f + c * c * a.y;
            cc.isValid(e) && (e.position = cc.v3(s, l, 0));
            return t + (i - t) * r;
          }
        }).call(function () {
          cc.isValid(e) && (e.position = t);
          n();
        }).start();
      } else n();
    });
  }
  playTrailEffect(e, t, i, n, o, c, s) {
    var l = this,
      d = new cc.Node("TrailContainer");
    d.parent = e;
    d.position = cc.v3(i.x, i.y, 0);
    d.zIndex = 2000;
    d.scale = t || 1;
    if (c.trailSpine) {
      BaseSpine.create(c.trailSpine.path, c.trailSpine.anim || "in", -1, null, false, c.trailSpine.bundle).node.parent = d;
    } else {
      c.trailSprite && (BaseSprite.create(c.trailSprite.path, c.trailSprite.bundle).node.parent = d);
    }
    return s(c.trailTexture.path, cc.SpriteFrame, c.trailTexture.bundle).then(function (e) {
      if (!e || !cc.isValid(d)) return Promise.resolve();
      var t = d.addComponent(cc.MotionStreak);
      t.fadeTime = o.fadeTime;
      t.minSeg = 1;
      t.stroke = o.stroke;
      t.texture = e.getTexture();
      return l.arcTo(d, cc.v3(n.x, n.y, 0), o.duration).then(function () {
        cc.isValid(d) && cc.tween(d).to(0.2, {
          opacity: 0
        }).call(function () {
          cc.isValid(d) && d.destroy();
        }).start();
      });
    });
  }
  showFlowLight(e, t, i, n, o) {
    var r = e.getChildByName("DaxiaoCardTipNode");
    r && (r.active = false);
    if (!e.getChildByName("DaxiaoFlowLightNode")) {
      var c = new cc.Node("DaxiaoFlowLightNode");
      e.addChild(c);
      c.scale = t;
      BaseSpine.refreshWithNode(c, i, n).setAnimation(o || "init", -1, null, false);
    }
  }
  playHitEffect(e, t, i, n, o, r = true) {
    var c = BaseSpine.create(i, o || "in", 1, null, false, n);
    c.node.parent = r ? e : e.parent;
    c.node.position = r ? cc.v3(0, 0, 0) : e.position.clone();
    c.node.zIndex = r ? 900 : 300;
    c.node.scale = t;
    c.node.name = "DaxiaoHitSpineNode";
    return c;
  }
  playEliminationEffect(e, t, i) {
    var o, r;
    if (i) try {
      for (var c = __values(t), s = c.next(); !s.done; s = c.next()) {
        var l = s.value,
          d = BaseSpine.create(i.path, "in", 1, null, true, i.bundle);
        d.node.parent = e;
        d.node.position = cc.v3(0, l, 0);
        d.node.zIndex = 600;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (r = c.return) && r.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  playMultiJump(e, t, i) {
    var n = this;
    if (!t || !i) return Promise.resolve();
    for (var o = Array.isArray(t) ? t : [t], a = Array.isArray(i) ? i : [i], r = Promise.resolve(), c = function c(t) {
        var i = o[t],
          c = a[t] || a[a.length - 1];
        r = r.then(function () {
          if (!cc.isValid(e)) return Promise.resolve();
          var t = e.position.clone(),
            o = cc.v3(t.x, t.y + i, t.z);
          return n.tweenTo(e, c, {
            position: o
          });
        });
      }, s = 0; s < o.length; s++) c(s);
    return r;
  }
  calculateYPositions(e, t, i) {
    if (i <= 0) return [];
    if (1 === i) return [(e + t) / 2];
    var n = (e - t) / (i - 1);
    return Array.from({
      length: i
    }, function (t, i) {
      return e - i * n;
    });
  }
  destroyNodes(e) {
    e.forEach(function (e) {
      return cc.isValid(e) && e.destroy();
    });
  }
  runCard1Animation(e) {
    var t = this,
      i = e.runIndex * this.config.phase1.delay;
    this.delay(e.cardNode1, i).then(function () {
      t.startCard1Move(e);
    });
  }
  startCard1Move(e) {
    var t = this.config.phase1,
      i = e.targetAngle1 || 0,
      n = e.cardNode1,
      o = new cc.Node("RotateContainer1");
    o.parent = n.parent;
    o.position = n.position.clone();
    o.angle = 0;
    var a = n.parent;
    n.parent = o;
    n.position = cc.v3(0, 0, 0);
    cc.tween(o).to(t.duration, {
      angle: i
    }).start();
    cc.tween(n).to(t.duration, {
      scale: 1
    }).start();
    return this.bezierTo(o, e.targetPos1, t.duration, t.controlYOffset).then(function () {
      if (cc.isValid(n) && cc.isValid(a)) {
        n.parent = a;
        n.position = o.position.clone();
        n.angle = o.angle;
      }
      cc.isValid(o) && o.destroy();
    });
  }
  triggerTrail(e) {
    var t = this,
      i = e.cardNode1.position.clone(),
      n = e.cardNode2.position.clone();
    if (!n) {
      this.runCard2Animation(e);
      return Promise.resolve();
    }
    return this.playTrailEffect(this.context.effectNode, this.context.layoutScale, cc.v2(i.x, i.y), cc.v2(n.x, n.y), this.config.trail, this.config.resources, this.context.loadRes).then(function () {
      t.context.removeTileNodeByTileId(e.tileId2);
      return t.runCard2Animation(e);
    });
  }
  runCard2Animation(e) {
    var t = this,
      i = this.nodeInfos.length - 1,
      n = this.config.phase1,
      o = this.config.phase2,
      a = i * n.delay + n.duration + (e.runIndex + 1) * n.delay - o.duration;
    this.delay(e.cardNode2, a).then(function () {
      t.context.removeTileNode(e.tileId2);
      e.cardNode2.active = true;
      t.moveCard2ToTarget(e).then(function () {
        return t.onCard2Arrived();
      });
    });
  }
  showCard2AndPlayHit(e) {
    this.context.removeTileNode(e.tileId2);
    e.cardNode2.active = true;
    var t = this.context.layoutScale || 1,
      i = false !== this.config.trail.hitFollowTarget,
      n = this.config.resources;
    this.playHitEffect(e.cardNode2, t, n.hitSpine.path, n.hitSpine.bundle, n.hitSpine.anim, i);
  }
  showCard2FlowLight(e) {
    var t = this.context.layoutScale || 1,
      i = this.config.resources,
      n = e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2;
    this.showFlowLight(n, t, i.flowLight.path, i.flowLight.bundle, i.flowLight.anim);
  }
  moveCard2ToTarget(e) {
    var t = this.config.phase2,
      i = e.targetAngle2 || 0,
      n = e.cardNode2,
      o = new cc.Node("RotateContainer2");
    o.parent = n.parent;
    o.position = n.position.clone();
    o.angle = 0;
    var a = n.parent;
    n.parent = o;
    n.position = cc.v3(0, 0, 0);
    cc.tween(o).to(t.duration, {
      angle: i
    }).start();
    cc.tween(n).to(t.duration, {
      scale: 1
    }).start();
    return this.bezierTo(o, e.targetPos2, t.duration, t.controlYOffset).then(function () {
      if (cc.isValid(n) && cc.isValid(a)) {
        n.parent = a;
        n.position = o.position.clone();
        n.angle = o.angle;
      }
      cc.isValid(o) && o.destroy();
    });
  }
  onCard2Arrived() {
    ++this.completedCount >= this.nodeInfos.length && this.playPhase3();
  }
  playPhase3() {
    var e = this;
    this.completedCount = 0;
    this.buildPhase3MoveSequence().forEach(function (t, i) {
      e.playPhase3SingleCard(t, i);
    });
  }
  buildPhase3MoveSequence() {
    for (var e = [], t = this.nodeInfos.length - 1; t >= 0; t--) e.push({
      node: this.nodeInfos[t].cardNode1,
      isFirst: t === this.nodeInfos.length - 1
    });
    for (t = this.nodeInfos.length - 1; t >= 0; t--) e.push({
      node: this.nodeInfos[t].cardNode2,
      isFirst: false
    });
    return e;
  }
  playPhase3SingleCard(e, t) {
    var i = this,
      n = this.config.phase3,
      o = t * n.delay,
      a = cc.v3(0, 0, 0);
    this.delay(e.node, o).then(function () {
      e.isFirst && i.playPhase3BackgroundSpines();
      void 0 !== n.finalScale && cc.tween(e.node).to(n.duration, {
        scale: n.finalScale
      }).start();
      return i.bezierTo(e.node, a, n.duration, n.controlYOffset);
    }).then(function () {
      return i.onPhase3CardArrived();
    });
  }
  playPhase3BackgroundSpines() {
    var e = this.config.resources,
      t = this.context.effectNode,
      i = cc.v3(0, 0, 0);
    e.bottomSpine && this.createBackgroundSpine(e.bottomSpine, t, i, -500);
    e.topSpine && this.createBackgroundSpine(e.topSpine, t, i, 9600);
  }
  createBackgroundSpine(e, t, i, n) {
    var o = BaseSpine.create(e.path, e.anim || "in", 1, null, true, e.bundle);
    o.node.parent = t;
    o.node.position = i;
    o.node.zIndex = n;
  }
  onPhase3CardArrived() {
    var e = 2 * this.nodeInfos.length;
    if (++this.completedCount >= e) {
      this.playPhase3EndSpines();
      this.onAnimationComplete();
    }
  }
  playPhase3EndSpines() {
    var e = this.config.resources,
      t = this.context.effectNode,
      i = cc.v3(0, 0, 0);
    e.endBottomSpine && this.createBackgroundSpine(e.endBottomSpine, t, i, -500);
    e.endTopSpine && this.createBackgroundSpine(e.endTopSpine, t, i, 600);
  }
  onAnimationComplete() {
    var e = [];
    this.nodeInfos.forEach(function (t) {
      return e.push(t.cardNode1, t.cardNode2);
    });
    this.destroyNodes(e);
    this.context.onComplete();
  }
  showClearTip(e) {
    var t = e.getChildByName("DaxiaoCardTipNode");
    t && (t.active = false);
    var i = new cc.Node("DaxiaoCardTipNode");
    e.addChild(i);
    i.zIndex = TileNodeZIndexMap[ETileNodeNames.imgCard] + 1;
    i.scale = this.context.layoutScale;
    var n = this.config.resources.flowLight;
    BaseSpine.refreshWithNode(i, n.path, n.bundle).setAnimation(n.anim || "init", -1, null, false);
  }
}