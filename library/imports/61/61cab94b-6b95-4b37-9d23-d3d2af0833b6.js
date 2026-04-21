"use strict";
cc._RF.push(module, '61cablLa5VLN50j09KvCDO2', 'AcZheshanAnimPlayer');
// Scripts/AcZheshanAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AcZheshanAnimPlayer = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var AcAnimPlayerBase_1 = require("./AcAnimPlayerBase");
var AcZheshanAnimPlayer = /** @class */ (function (_super) {
    __extends(AcZheshanAnimPlayer, _super);
    function AcZheshanAnimPlayer(t) {
        var _this = _super.call(this, t) || this;
        _this.completedCount = 0;
        _this.PHASE1_DURATION = 0.16;
        _this.PHASE1_MOVE_Y = 10;
        _this.PHASE1_ANGLE = -10;
        _this.PHASE1_SCALE = 1.2;
        _this.PHASE1_DELAY = 0.06;
        _this.PHASE2_DURATION = 0.5;
        _this.PHASE2_RESTORE_DELAY = 0.4;
        _this.PHASE2_INTERVAL_DELAY = 0.067;
        _this.TRAIL_HIT_DELAY = 0.2;
        _this.TRAIL_DURATION = 0.3;
        _this.TRAIL_FADE_TIME = 0.3;
        _this.TRAIL_STROKE = 64;
        _this.TRAIL_COLOR = cc.color(255, 255, 255, 255);
        _this.COLLISION_DELAY = 0.1;
        _this.COLLISION_OUT_DURATION = 0.33;
        _this.FADE_TO_DARK_OPACITY = 77;
        _this.FADE_TO_DARK_DURATION = 0.16;
        _this.FADE_TO_WHITE_DURATION = 0.33;
        _this.RES_BUNDLE = "l_daxiaozheshan";
        _this.RES_TRAIL_SPRITE = "texture/gameplay_trailingElement";
        _this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        _this.RES_HIT_SPINE = "spine/hint/gameplay_hit";
        _this.RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight";
        _this.RES_ELIMINATION = "spine/clear/gameplay_great_elimination_effect";
        return _this;
    }
    AcZheshanAnimPlayer.prototype.setupPositions = function (e) {
        var t = this;
        e.sort(function (e, o) {
            var n = t.context.getTileObject(e.tileId2), i = t.context.getTileObject(o.tileId2);
            return n && i ? n.gridPosX !== i.gridPosX ? n.gridPosX - i.gridPosX : n.gridPosY - i.gridPosY : 0;
        });
        var o = e[0].cardNode1.getContentSize().height, n = e[0].cardNode1.getContentSize().width;
        e.forEach(function (t, i) {
            var r = 0.5 * o + (e.length - 1 - i) * o;
            t.targetPos1 = cc.v3(-0.5 * n, r, 0);
            t.targetPos2 = cc.v3(0.5 * n, r, 0);
            t.runIndex = e.length - 1 - i;
            var a = 2 * i;
            t.cardNode1.zIndex = a;
            t.cardNode2.zIndex = a + 1;
        });
        this.nodeInfos = e;
    };
    AcZheshanAnimPlayer.prototype.play = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.completedCount = 0;
        this.createGraphicsMask("AcZheshanMask");
        this.fadeMaskDark(this.FADE_TO_DARK_OPACITY, this.FADE_TO_DARK_DURATION);
        this.nodeInfos.forEach(function (e) {
            return t.animateCard1(e);
        });
    };
    AcZheshanAnimPlayer.prototype.animateCard1 = function (e) {
        var t = this;
        this.context.removeTileNode(e.tileId1);
        var o = this.nodeInfos.length, n = e.runIndex * this.PHASE1_DELAY, i = (o - 1 - e.runIndex) * this.PHASE1_DELAY, r = e.runIndex * this.PHASE2_INTERVAL_DELAY;
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
    };
    AcZheshanAnimPlayer.prototype.playPhase1 = function (e, t) {
        var o = this;
        if (!cc.isValid(e))
            return Promise.resolve();
        var n = t ? -this.PHASE1_ANGLE : this.PHASE1_ANGLE;
        return new Promise(function (t) {
            cc.tween(e).to(o.PHASE1_DURATION, {
                position: cc.v3(e.position.x, e.position.y + o.PHASE1_MOVE_Y, 0),
                angle: n,
                scale: o.PHASE1_SCALE
            }).call(t).start();
        });
    };
    AcZheshanAnimPlayer.prototype.playPhase2 = function (e, t) {
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
    };
    AcZheshanAnimPlayer.prototype.triggerTrail = function (e) {
        var t = this, o = e.cardNode1.position.clone(), n = this.context.getTileNodePos(e.tileId2);
        if (n) {
            this.playTrailEffect(o, n).then(function () {
                return t.animateCard2(e);
            });
        }
        else {
            this.animateCard2(e);
        }
    };
    AcZheshanAnimPlayer.prototype.playTrailEffect = function (e, t) {
        var o = this, n = new cc.Node("AcZheshanTrail");
        n.parent = this.context.effectNode;
        n.position = e;
        n.zIndex = 400;
        n.scale = this.context.layoutScale;
        var i = new cc.Node("SpriteContainer");
        i.parent = n;
        BaseSprite_1.default.create(this.RES_TRAIL_SPRITE, this.RES_BUNDLE).node.parent = i;
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
    };
    AcZheshanAnimPlayer.prototype.animateCard2 = function (e) {
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
    };
    AcZheshanAnimPlayer.prototype.playHitEffect = function (e, t) {
        var o = BaseSpine_1.default.create(this.RES_HIT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
        o.node.parent = this.context.effectNode;
        o.node.position = e.position.clone();
        o.node.zIndex = 900;
        o.node.scale = t;
        o.node.name = "DaxiaoHitSpineNode";
    };
    AcZheshanAnimPlayer.prototype.onCard2Arrived = function () {
        ++this.completedCount >= this.nodeInfos.length && this.startCollision();
    };
    AcZheshanAnimPlayer.prototype.startCollision = function () {
        var e = this;
        this.playCollision().then(function () {
            return e.cleanupAndComplete();
        });
    };
    AcZheshanAnimPlayer.prototype.playCollision = function () {
        var e = this, t = this.nodeInfos[0].cardNode1.getContentSize().height, o = this.nodeInfos[0].cardNode1.getContentSize().width, n = 0.5 * t, i = this.nodeInfos.length;
        this.delay(this.nodeInfos[0].cardNode1, this.COLLISION_DELAY).then(function () {
            e.playEliminationEffect();
            e.context.onShake();
            e.fadeMaskWhite(e.FADE_TO_WHITE_DURATION);
        });
        this.nodeInfos.forEach(function (t, r) {
            var a = i - 1 - r, l = -0.5 * o - a * o, s = 0.5 * o + a * o;
            cc.tween(t.cardNode1).delay(e.COLLISION_DELAY).to(e.COLLISION_OUT_DURATION, {
                position: cc.v3(l, n, 0)
            }, {
                easing: "quartInOut"
            }).call(function () {
                cc.isValid(t.cardNode1) && (t.cardNode1.active = false);
            }).start();
            cc.tween(t.cardNode2).delay(e.COLLISION_DELAY).to(e.COLLISION_OUT_DURATION, {
                position: cc.v3(s, n, 0)
            }, {
                easing: "quartInOut"
            }).call(function () {
                cc.isValid(t.cardNode2) && (t.cardNode2.active = false);
            }).start();
        });
        return this.delay(this.nodeInfos[0].cardNode1, this.COLLISION_DELAY + this.COLLISION_OUT_DURATION);
    };
    AcZheshanAnimPlayer.prototype.playEliminationEffect = function () {
        var e = BaseSpine_1.default.create(this.RES_ELIMINATION, "in", 1, null, true, this.RES_BUNDLE);
        e.node.parent = this.context.effectNode;
        e.node.position = cc.v3(0, 0, 0);
        e.node.zIndex = 600;
    };
    return AcZheshanAnimPlayer;
}(AcAnimPlayerBase_1.AcAnimPlayerBase));
exports.AcZheshanAnimPlayer = AcZheshanAnimPlayer;

cc._RF.pop();