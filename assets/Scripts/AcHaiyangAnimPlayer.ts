import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import { AcAnimPlayerBase } from './AcAnimPlayerBase';
export class AcHaiyangAnimPlayer extends AcAnimPlayerBase {
  completedCount = 0;
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
  constructor(t) {
    super(t);
  }
  setupPositions(e) {
    var t = this;
    e.sort(function (e, o) {
      var n = t.context.getTileObject(e.tileId2),
        i = t.context.getTileObject(o.tileId2);
      return n && i ? n.gridPosX !== i.gridPosX ? n.gridPosX - i.gridPosX : n.gridPosY - i.gridPosY : 0;
    });
    var o = e[0].cardNode1.getContentSize().height,
      n = e[0].cardNode1.getContentSize().width,
      i = -n * e.length / 2 + n / 2;
    e.forEach(function (t, r) {
      var a = i + r * n,
        l = Math.floor(e.length / 2),
        s = 500 - Math.abs(r - l) * o * 0.15,
        c = s - 0.96 * o;
      t.targetPos1 = cc.v3(a, s, 0);
      t.targetPos2 = cc.v3(a, c, 0);
      t.runIndex = r;
      t.cardNode1.zIndex = r;
      t.cardNode2.zIndex = r + 1000;
    });
    this.nodeInfos = e;
  }
  play(e) {
    var t = this;
    this.nodeInfos = e;
    this.completedCount = 0;
    this.createGraphicsMask("AcHaiyangMask");
    this.fadeMaskDark(this.FADE_TO_DARK_OPACITY, this.FADE_TO_DARK_DURATION);
    this.nodeInfos.forEach(function (e) {
      return t.animateCard1(e);
    });
  }
  animateCard1(e) {
    var t = this;
    this.context.removeTileNode(e.tileId1);
    var o = this.nodeInfos.length,
      n = e.runIndex * this.PHASE1_DELAY,
      i = (o - 1 - e.runIndex) * this.PHASE1_DELAY,
      r = e.runIndex * this.PHASE2_INTERVAL_DELAY;
    this.delay(e.cardNode1, n).then(function () {
      return t.playPhase1(e.cardNode1, false);
    }).then(function () {
      return t.delay(e.cardNode1, i + r);
    }).then(function () {
      var o = t.playPhase2(e.cardNode1, e.targetPos1);
      t.delay(e.cardNode1, 0).then(function () {
        return t.triggerTrail(e);
      });
      return o;
    });
  }
  playPhase1(e, t) {
    var o = this;
    if (!cc.isValid(e)) return Promise.resolve();
    var n = e.position.y + this.PHASE1_MOVE_Y,
      i = t ? -this.PHASE1_ANGLE : this.PHASE1_ANGLE;
    return new Promise(function (t) {
      cc.tween(e).to(o.PHASE1_DURATION, {
        position: cc.v3(e.position.x, n, 0),
        angle: i,
        scale: o.PHASE1_SCALE
      }).call(t).start();
    });
  }
  playPhase2(e, t) {
    cc.tween(e).to(this.PHASE2_RESTORE_DELAY, {
      angle: 0,
      scale: 1
    }).start();
    return this.arcTo(e, t, this.PHASE2_DURATION).then(function () {
      if (cc.isValid(e)) {
        e.angle = 0;
        e.scale = 1;
      }
    });
  }
  triggerTrail(e) {
    var t = this,
      o = e.cardNode1.position.clone(),
      n = this.context.getTileNodePos(e.tileId2);
    if (n) {
      this.playTrailEffect(o, n).then(function () {
        return t.animateCard2(e);
      });
    } else {
      this.animateCard2(e);
    }
  }
  playTrailEffect(e, t) {
    var o = this,
      n = new cc.Node("AcHaiyangTrail");
    n.parent = this.context.effectNode;
    n.position = e;
    n.zIndex = 400;
    n.scale = this.context.layoutScale;
    var i = new cc.Node("SpriteContainer");
    i.parent = n;
    BaseSprite.create(this.RES_TRAIL_SPRITE, this.RES_BUNDLE).node.parent = i;
    return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (e) {
      if (e && cc.isValid(n)) {
        var r = n.addComponent(cc.MotionStreak);
        r.fadeTime = o.TRAIL_FADE_TIME;
        r.minSeg = 1;
        r.stroke = o.TRAIL_STROKE;
        r.texture = e.getTexture();
        r.color = o.TRAIL_COLOR;
        return o.arcTo(n, t, o.TRAIL_DURATION, i);
      }
    }).then(function () {
      cc.isValid(n) && n.destroy();
    });
  }
  animateCard2(e) {
    var t = this;
    this.context.removeTileNode(e.tileId2);
    e.cardNode2.active = true;
    var o = this.context.layoutScale || 1;
    this.playHitEffect(e.cardNode2, o);
    this.delay(e.cardNode2, this.TRAIL_HIT_DELAY).then(function () {
      var o = e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2;
      t.showFlowLightNode(o, t.RES_FLOW_LIGHT, t.RES_BUNDLE);
    }).then(function () {
      return t.playPhase1(e.cardNode2, true);
    }).then(function () {
      return t.playPhase2(e.cardNode2, e.targetPos2);
    }).then(function () {
      return t.onCard2Arrived();
    });
  }
  playHitEffect(e, t) {
    var o = BaseSpine.create(this.RES_HIT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
    o.node.parent = this.context.effectNode;
    o.node.position = e.position.clone();
    o.node.zIndex = 900;
    o.node.scale = t;
    o.node.name = "DaxiaoHitSpineNode";
  }
  onCard2Arrived() {
    ++this.completedCount >= this.nodeInfos.length && this.startCollision();
  }
  startCollision() {
    var e = this,
      t = this.nodeInfos.map(function (e) {
        return {
          node1: e.cardNode1,
          node2: e.cardNode2
        };
      });
    this.playCollision(t).then(function () {
      return e.cleanupAndComplete();
    });
  }
  playCollision(e) {
    var t = this;
    if (0 === e.length) return Promise.resolve();
    var o = Math.floor(this.nodeInfos.length / 2),
      n = this.COLLISION_DELAY + this.COLLISION_UP_DURATION + this.COLLISION_DOWN_DURATION;
    this.delay(e[0].node1, n).then(function () {
      t.playEliminationEffect();
      t.context.onShake();
      t.fadeMaskWhite(t.FADE_TO_WHITE_DURATION);
    });
    this.nodeInfos.forEach(function (e, n) {
      var i = Math.abs(n - o) * t.COLLISION_SIDE_DELAY,
        r = t.COLLISION_DELAY + i,
        a = cc.v3(e.cardNode1.position.x, e.cardNode1.position.y + t.COLLISION_UP_DISTANCE, 0),
        l = cc.v3(a.x, a.y - t.COLLISION_DOWN_DISTANCE, 0),
        s = cc.v3(e.cardNode2.position.x, e.cardNode2.position.y + t.COLLISION_UP_DISTANCE, 0),
        c = cc.v3(s.x, s.y - t.COLLISION_DOWN_DISTANCE, 0);
      cc.tween(e.cardNode1).delay(r).to(t.COLLISION_UP_DURATION, {
        position: a
      }, {
        easing: "quartOut"
      }).to(t.COLLISION_DOWN_DURATION, {
        position: l
      }, {
        easing: "quartIn"
      }).call(function () {
        cc.isValid(e.cardNode1) && (e.cardNode1.active = false);
      }).start();
      cc.tween(e.cardNode2).delay(r).to(t.COLLISION_UP_DURATION, {
        position: s
      }, {
        easing: "quartOut"
      }).to(t.COLLISION_DOWN_DURATION, {
        position: c
      }, {
        easing: "quartIn"
      }).call(function () {
        cc.isValid(e.cardNode2) && (e.cardNode2.active = false);
      }).start();
    });
    var i = Math.max.apply(Math, [...this.nodeInfos.map(function (e, t) {
        return Math.abs(t - o);
      })]),
      r = this.COLLISION_DELAY + i * this.COLLISION_SIDE_DELAY + this.COLLISION_UP_DURATION + this.COLLISION_DOWN_DURATION;
    return this.delay(e[0].node1, r);
  }
  playEliminationEffect() {
    var e = BaseSpine.create(this.RES_ELIMINATION_BACK, "in", 1, null, true, this.RES_BUNDLE);
    e.node.parent = this.context.effectNode;
    e.node.position = cc.v3(0, this.RES_ELIMINATION_BACK_OFFSET_Y, 0);
    e.node.zIndex = 500;
    var t = BaseSpine.create(this.RES_ELIMINATION, "in", 1, null, true, this.RES_BUNDLE);
    t.node.parent = this.context.effectNode;
    t.node.position = cc.v3(0, this.RES_ELIMINATION_OFFSET_Y, 0);
    t.node.zIndex = 600;
  }
}