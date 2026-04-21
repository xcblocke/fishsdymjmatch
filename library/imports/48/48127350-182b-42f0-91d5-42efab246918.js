"use strict";
cc._RF.push(module, '48127NQGCtC8JHVQu+rJGkY', 'AcGuofengAnimPlayer');
// Scripts/AcGuofengAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AcGuofengAnimPlayer = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var AcAnimPlayerBase_1 = require("./AcAnimPlayerBase");
var AcGuofengAnimPlayer = /** @class */ (function (_super) {
    __extends(AcGuofengAnimPlayer, _super);
    function AcGuofengAnimPlayer(t) {
        var _this = _super.call(this, t) || this;
        _this.completedCount = 0;
        _this.PHASE1_DURATION = 0.16;
        _this.PHASE1_MOVE_Y = 10;
        _this.PHASE1_SCALE = 1.2;
        _this.PHASE1_DELAY = 0.06;
        _this.PHASE2_DURATION = 0.5;
        _this.PHASE2_RESTORE_DELAY = 0.4;
        _this.PHASE2_TRAIL_DELAY = 0.03;
        _this.SPREAD_START_DELAY = 0.18;
        _this.SPREAD_INTERVAL = 0.03;
        _this.SPREAD_DURATION = 0.2;
        _this.SPREAD_DISTANCE = 600;
        _this.SPREAD_FADE_DELAY = 0.14;
        _this.SPREAD_FADE_DURATION = 0.02;
        _this.TRAIL_HIT_DELAY = 0.25;
        _this.TRAIL_DURATION = 0.25;
        _this.TRAIL_FADE_TIME = 0.3;
        _this.TRAIL_STROKE = 64;
        _this.TRAIL_COLOR = cc.color(255, 255, 255);
        _this.SPREAD_TRAIL_FADE_TIME = 0.1;
        _this.SPREAD_TRAIL_COLOR = cc.color(255, 255, 255, 255);
        _this.RES_BUNDLE = "r_daxiaoguofeng";
        _this.RES_TRAIL_SPRITE = "texture/gameplay_gf_star";
        _this.RES_TRAIL_TEXTURE = "texture/gameplay_gf_star_tail";
        _this.RES_TRAIL_TEXTURE2 = "texture/gameplay_gf_star_02";
        _this.RES_HIT_SPINE = "spine/hint/gameplay_hit_gf";
        _this.RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight_gf";
        _this.RES_BACK_SPINE = "spine/clear/gameplay_great_elimination_effect_gf_buttom";
        _this.RES_EFFECT_SPINE = "spine/clear/gameplay_great_elimination_effect_gf_top";
        return _this;
    }
    AcGuofengAnimPlayer.prototype.setupPositions = function (e) {
        var t = this;
        e.sort(function (e, o) {
            var n = t.context.getTileObject(e.tileId2), i = t.context.getTileObject(o.tileId2);
            return n && i ? n.gridPosX !== i.gridPosX ? n.gridPosX - i.gridPosX : n.gridPosY - i.gridPosY : 0;
        });
        var o = e[0].cardNode1.getContentSize().height, n = e[0].cardNode1.getContentSize().width, i = n / 2, r = -n / 2, a = o, l = -e.length * a / 2 + a / 2;
        e.forEach(function (t, o) {
            var n = l + o * a;
            t.targetPos1 = cc.v3(i, n, 0);
            t.targetPos2 = cc.v3(r, n, 0);
            t.runIndex = e.length - 1 - o;
            t.cardNode1.zIndex = 2 * -o;
            t.cardNode2.zIndex = 100 - 2 * o;
        });
        this.nodeInfos = e;
    };
    AcGuofengAnimPlayer.prototype.play = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.completedCount = 0;
        e.forEach(function (e) {
            return t.animateCard1(e);
        });
    };
    AcGuofengAnimPlayer.prototype.animateCard1 = function (e) {
        var t = this;
        this.context.removeTileNode(e.tileId1);
        var o = e.runIndex * this.PHASE1_DELAY;
        this.delay(e.cardNode1, o).then(function () {
            return t.phase1Up(e.cardNode1);
        }).then(function () {
            var o = t.phase2Bezier(e.cardNode1, e.targetPos1);
            t.delay(e.cardNode1, t.PHASE2_TRAIL_DELAY).then(function () {
                return t.playTrail(e);
            });
            return o;
        });
    };
    AcGuofengAnimPlayer.prototype.phase1Up = function (e) {
        var t = this;
        return new Promise(function (o) {
            if (cc.isValid(e)) {
                cc.tween(e).to(t.PHASE1_DURATION, {
                    position: cc.v3(e.position.x, e.position.y + t.PHASE1_MOVE_Y, 0),
                    scale: t.PHASE1_SCALE
                }).call(o).start();
            }
            else {
                o();
            }
        });
    };
    AcGuofengAnimPlayer.prototype.phase2Bezier = function (e, t) {
        var o = this;
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                var i = e.position.clone(), r = t, a = (i.y + r.y) / 2 - 100, l = cc.v3((i.x + r.x) / 2, a, 0);
                e._bezierProgress = 0;
                cc.tween(e).to(o.PHASE2_DURATION, {
                    _bezierProgress: 1
                }, {
                    progress: function (t, o, n, a) {
                        var s = a, c = (1 - s) * (1 - s) * i.x + 2 * (1 - s) * s * l.x + s * s * r.x, u = (1 - s) * (1 - s) * i.y + 2 * (1 - s) * s * l.y + s * s * r.y;
                        cc.isValid(e) && (e.position = cc.v3(c, u, 0));
                        return t + (o - t) * a;
                    }
                }).call(function () {
                    cc.isValid(e) && (e.position = t);
                }).start();
                cc.tween(e).delay(o.PHASE2_RESTORE_DELAY).to(0.2, {
                    scale: 1
                }).call(n).start();
            }
            else
                n();
        });
    };
    AcGuofengAnimPlayer.prototype.playTrail = function (e) {
        var t = this, o = e.cardNode1.position.clone(), n = this.context.getTileNodePos(e.tileId2);
        if (n) {
            var i = new cc.Node("AcGuofengTrail");
            i.parent = this.context.effectNode;
            i.position = cc.v3(o.x, o.y, 0);
            i.zIndex = 150;
            i.scale = this.context.layoutScale || 1;
            var r = new cc.Node("SpriteContainer");
            r.parent = i;
            var l = BaseSprite_1.default.create(this.RES_TRAIL_SPRITE, this.RES_BUNDLE);
            l.node.anchorY = 0.8;
            l.node.parent = r;
            this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (e) {
                if (e && cc.isValid(i)) {
                    var o = i.addComponent(cc.MotionStreak);
                    o.fadeTime = t.TRAIL_FADE_TIME;
                    o.minSeg = 1;
                    o.stroke = t.TRAIL_STROKE;
                    o.texture = e.getTexture();
                    o.color = t.TRAIL_COLOR;
                    return t.arcTo(i, cc.v3(n.x, n.y, 0), t.TRAIL_DURATION, r);
                }
            }).then(function () {
                t.animateCard2(e);
                cc.isValid(i) && cc.tween(i).to(0.2, {
                    opacity: 0
                }).call(function () {
                    cc.isValid(i) && i.destroy();
                }).start();
            });
        }
        else
            this.animateCard2(e);
    };
    AcGuofengAnimPlayer.prototype.animateCard2 = function (e) {
        var t = this;
        this.context.removeTileNode(e.tileId2);
        e.cardNode2.active = true;
        this.playHitEffect(this.context.effectNode, e.cardNode2);
        this.delay(e.cardNode2, this.TRAIL_HIT_DELAY).then(function () {
            t.showFlowLightNode(e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2, t.RES_FLOW_LIGHT, t.RES_BUNDLE);
        }).then(function () {
            return t.phase1Up(e.cardNode2);
        }).then(function () {
            return t.phase2Bezier(e.cardNode2, e.targetPos2);
        }).then(function () {
            ++t.completedCount >= t.nodeInfos.length && t.startCollision();
        });
    };
    AcGuofengAnimPlayer.prototype.startCollision = function () {
        var e, t = this;
        this.playCollisionEffect(this.context.effectNode);
        var o = null === (e = this.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
        cc.isValid(o) && this.delay(o, this.SPREAD_START_DELAY).then(function () {
            t.playSpreadCollision().then(function () {
                return t.cleanupAndComplete();
            });
        });
    };
    AcGuofengAnimPlayer.prototype.playSpreadCollision = function () {
        for (var e = this, t = Math.floor(this.nodeInfos.length / 2), o = [], n = 0; n < this.nodeInfos.length; n++) {
            var i = Math.abs(n - t);
            o[i] || (o[i] = []);
            o[i].push(this.nodeInfos[n]);
        }
        var r = [];
        o.forEach(function (t, o) {
            t.forEach(function (t) {
                var n = o * e.SPREAD_INTERVAL, i = t.cardNode1.position.x < t.cardNode2.position.x ? -1 : 1;
                r.push(e.animateSpreadCard(t.cardNode1, i, n));
                r.push(e.animateSpreadCard(t.cardNode2, -i, n));
            });
        });
        return Promise.all(r).then(function () { });
    };
    AcGuofengAnimPlayer.prototype.animateSpreadCard = function (e, t, o) {
        var n = this;
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                var r, a = e.position.clone(), l = a.x + t * n.SPREAD_DISTANCE, s = e.getContentSize().height;
                n.context.loadRes(n.RES_TRAIL_TEXTURE2, cc.SpriteFrame, n.RES_BUNDLE).then(function (t) {
                    if (cc.isValid(e) && t && t.getTexture()) {
                        (r = new cc.Node("SpreadTrail")).parent = e;
                        r.position = cc.v3(0, 0, 0);
                        r.setContentSize(10, s);
                        r.anchorX = 0.5;
                        r.anchorY = 0.5;
                        var o = r.addComponent(cc.MotionStreak);
                        o.fadeTime = n.SPREAD_TRAIL_FADE_TIME;
                        o.minSeg = 3;
                        o.stroke = s;
                        o.texture = t.getTexture();
                        o.color = n.SPREAD_TRAIL_COLOR;
                        o.fastMode = false;
                        o.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
                        o.dstBlendFactor = cc.macro.BlendFactor.ONE;
                        r.zIndex = 150;
                    }
                }).catch(function () { });
                cc.tween(e).delay(o).to(n.SPREAD_DURATION, {
                    position: cc.v3(l, a.y, 0)
                }, {
                    easing: "sineOut"
                }).call(function () {
                    if (r && cc.isValid(r) && cc.isValid(e)) {
                        var t = r.convertToWorldSpaceAR(cc.v3(0, 0, 0)), o = e.parent;
                        r.parent = o;
                        r.position = o.convertToNodeSpaceAR(t);
                        cc.tween(r).delay(n.SPREAD_TRAIL_FADE_TIME).call(function () {
                            cc.isValid(r) && r.destroy();
                        }).start();
                    }
                    cc.isValid(e) && e.destroy();
                    i();
                }).start();
                cc.tween(e).delay(o + n.SPREAD_FADE_DELAY).to(n.SPREAD_FADE_DURATION, {
                    opacity: 0
                }).start();
            }
            else
                i();
        });
    };
    AcGuofengAnimPlayer.prototype.playCollisionEffect = function (e) {
        var t = this, o = (this.nodeInfos[0].targetPos1.y + this.nodeInfos[this.nodeInfos.length - 1].targetPos1.y) / 2;
        [{
                path: this.RES_BACK_SPINE,
                zIndex: -50
            }, {
                path: this.RES_EFFECT_SPINE,
                zIndex: 200
            }].forEach(function (n) {
            var i = new cc.Node("AcGuofengEffect");
            i.parent = e;
            i.position = cc.v3(0, o, 0);
            i.zIndex = n.zIndex;
            BaseSpine_1.default.refreshWithNode(i, n.path, t.RES_BUNDLE).setAnimation("in", 1, function () {
                cc.isValid(i) && i.destroy();
            }, false);
        });
    };
    AcGuofengAnimPlayer.prototype.playHitEffect = function (e, t) {
        var o = new cc.Node("AcGuofengHit");
        e.addChild(o);
        var n = t.parent.convertToWorldSpaceAR(t.position.clone());
        o.position = e.convertToNodeSpaceAR(n);
        o.zIndex = 900;
        o.scale = this.context.layoutScale;
        BaseSpine_1.default.refreshWithNode(o, this.RES_HIT_SPINE, this.RES_BUNDLE).setAnimation("in", 1, function () {
            cc.isValid(o) && o.destroy();
        }, false);
    };
    return AcGuofengAnimPlayer;
}(AcAnimPlayerBase_1.AcAnimPlayerBase));
exports.AcGuofengAnimPlayer = AcGuofengAnimPlayer;

cc._RF.pop();