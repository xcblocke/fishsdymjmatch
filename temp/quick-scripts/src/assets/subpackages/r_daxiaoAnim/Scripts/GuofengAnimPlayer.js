"use strict";
cc._RF.push(module, '5a01eDkBfdCyJMBD8wah+gx', 'GuofengAnimPlayer');
// subpackages/r_daxiaoAnim/Scripts/GuofengAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuofengAnimPlayer = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GuofengAnimPlayer = /** @class */ (function () {
    function GuofengAnimPlayer(e) {
        this.nodeInfos = [];
        this.completedCount = 0;
        this.PHASE1_DURATION = 0.16;
        this.PHASE1_MOVE_Y = 10;
        this.PHASE1_SCALE = 1.2;
        this.PHASE1_DELAY = 0.06;
        this.PHASE2_DURATION = 0.5;
        this.PHASE2_RESTORE_DELAY = 0.4;
        this.PHASE2_TRAIL_DELAY = 0.03;
        this.SPREAD_START_DELAY = 0.18;
        this.SPREAD_INTERVAL = 0.03;
        this.SPREAD_DURATION = 0.2;
        this.SPREAD_DISTANCE = 600;
        this.SPREAD_FADE_DELAY = 0.14;
        this.SPREAD_FADE_DURATION = 0.02;
        this.TRAIL_HIT_DELAY = 0.25;
        this.TRAIL_DURATION = 0.25;
        this.TRAIL_FADE_TIME = 0.3;
        this.TRAIL_STROKE = 64;
        this.TRAIL_COLOR = cc.color(255, 255, 255);
        this.SPREAD_TRAIL_FADE_TIME = 0.1;
        this.SPREAD_TRAIL_COLOR = cc.color(255, 255, 255, 255);
        this.RES_BUNDLE = "r_daxiaoguofeng";
        this.RES_TRAIL_SPRITE = "texture/gameplay_gf_star";
        this.RES_TRAIL_TEXTURE = "texture/gameplay_gf_star_tail";
        this.RES_TRAIL_TEXTURE2 = "texture/gameplay_gf_star_02";
        this.RES_HIT_SPINE = "spine/hint/gameplay_hit_gf";
        this.RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight_gf";
        this.RES_BACK_SPINE = "spine/clear/gameplay_great_elimination_effect_gf_buttom";
        this.RES_EFFECT_SPINE = "spine/clear/gameplay_great_elimination_effect_gf_top";
        this.context = null;
        this.context = e;
    }
    GuofengAnimPlayer.playFullAnimation = function (t, i) {
        var n = t.context, o = n.gameView.nodeTopEffectRoot, a = new GuofengAnimPlayer({
            effectNode: o,
            layoutScale: n.layoutScale,
            onComplete: function () {
                return t.onAnimationComplete();
            },
            onShake: function () {
                return n.gameView.playShake();
            },
            loadRes: function (e, t, i) {
                return n.gameCtr.loadRes(e, t, i);
            },
            getTileNodePos: function (e) {
                var i = n.getTileNodeMap().get(e);
                return i ? t.toLocalPos(i.cardNode, o) : null;
            },
            removeTileNode: function (e) {
                return n.removeTileNodeByTileId(e);
            },
            getTileObject: function (e) {
                var t = n.getTileNodeMap().get(e);
                return t ? t.info.tileObject : null;
            },
            getRandomIndexes: function (e) {
                return n.randomGenerator.shuffle(Array.from({
                    length: e
                }, function (e, t) {
                    return t;
                }));
            }
        });
        a.setupPositions(i);
        a.play(i);
    };
    GuofengAnimPlayer.prototype.setupPositions = function (e) {
        var t = this;
        e.sort(function (e, i) {
            var n = t.context.getTileObject(e.tileId2), o = t.context.getTileObject(i.tileId2);
            return n && o ? n.gridPosX !== o.gridPosX ? n.gridPosX - o.gridPosX : n.gridPosY - o.gridPosY : 0;
        });
        var i = e[0].cardNode1.getContentSize().height, n = e[0].cardNode1.getContentSize().width, o = i, a = n / 2, r = -n / 2, c = -e.length * o / 2 + o / 2, s = Array.from({
            length: e.length
        }, function (t, i) {
            return e.length - 1 - i;
        });
        e.forEach(function (e, i) {
            var n = c + i * o;
            e.targetPos1 = cc.v3(a, n, 0);
            e.targetPos2 = cc.v3(r, n, 0);
            e.runIndex = s[i];
            e.cardNode1.zIndex = 2 * -i;
            e.cardNode2.zIndex = 100 - 2 * i;
            t.context.removeTileNode(e.tileId1);
        });
    };
    GuofengAnimPlayer.prototype.play = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.completedCount = 0;
        e.forEach(function (e) {
            return t.animateCard1(e);
        });
    };
    GuofengAnimPlayer.prototype.animateCard1 = function (e) {
        var t = this, i = e.runIndex * this.PHASE1_DELAY;
        this.delay(e.cardNode1, i).then(function () {
            return t.phase1Up(e.cardNode1);
        }).then(function () {
            var i = t.phase2Bezier(e.cardNode1, e.targetPos1);
            t.delay(e.cardNode1, t.PHASE2_TRAIL_DELAY).then(function () {
                return t.playTrail(e);
            });
            return i;
        });
    };
    GuofengAnimPlayer.prototype.playTrail = function (e) {
        var t = this, i = e.cardNode1.position.clone(), n = this.context.getTileNodePos(e.tileId2);
        if (n) {
            var a = new cc.Node("TrailContainer");
            a.parent = this.context.effectNode;
            a.position = cc.v3(i.x, i.y, 0);
            a.zIndex = 150;
            a.scale = this.context.layoutScale || 1;
            var r = new cc.Node("SpriteContainer");
            r.parent = a;
            var c = BaseSprite_1.default.create(this.RES_TRAIL_SPRITE, this.RES_BUNDLE);
            c.node.anchorY = 0.8;
            c.node.parent = r;
            this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (e) {
                if (e && cc.isValid(a)) {
                    var i = a.addComponent(cc.MotionStreak);
                    i.fadeTime = t.TRAIL_FADE_TIME;
                    i.minSeg = 1;
                    i.stroke = t.TRAIL_STROKE;
                    i.texture = e.getTexture();
                    i.color = t.TRAIL_COLOR;
                    return t.arcTo(a, cc.v3(n.x, n.y, 0), t.TRAIL_DURATION, r);
                }
            }).then(function () {
                t.animateCard2(e);
                cc.isValid(a) && cc.tween(a).to(0.2, {
                    opacity: 0
                }).call(function () {
                    cc.isValid(a) && a.destroy();
                }).start();
            });
        }
        else
            this.animateCard2(e);
    };
    GuofengAnimPlayer.prototype.animateCard2 = function (e) {
        var t = this;
        this.context.removeTileNode(e.tileId2);
        e.cardNode2.active = true;
        this.playHitEffect(this.context.effectNode, e.cardNode2);
        this.delay(e.cardNode2, this.TRAIL_HIT_DELAY).then(function () {
            t.showFlowLight(e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2);
        }).then(function () {
            return t.phase1Up(e.cardNode2);
        }).then(function () {
            return t.phase2Bezier(e.cardNode2, e.targetPos2);
        }).then(function () {
            ++t.completedCount >= t.nodeInfos.length && t.startCollision();
        });
    };
    GuofengAnimPlayer.prototype.startCollision = function () {
        var e, t = this, i = this.context.effectNode;
        this.playCollisionEffect(i);
        var n = null === (e = this.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
        cc.isValid(n) && this.delay(n, this.SPREAD_START_DELAY).then(function () {
            t.playSpreadCollision().then(function () {
                t.destroyAllNodes();
                t.context.onComplete();
            });
        });
    };
    GuofengAnimPlayer.prototype.playSpreadCollision = function () {
        for (var e = this, t = Math.floor(this.nodeInfos.length / 2), i = [], n = 0; n < this.nodeInfos.length; n++) {
            var o = Math.abs(n - t);
            i[o] || (i[o] = []);
            i[o].push(this.nodeInfos[n]);
        }
        var a = [];
        i.forEach(function (t, i) {
            t.forEach(function (t) {
                var n = i * e.SPREAD_INTERVAL, o = t.cardNode1.position.x < t.cardNode2.position.x ? -1 : 1;
                a.push(e.animateSpreadCard(t.cardNode1, o, n));
                a.push(e.animateSpreadCard(t.cardNode2, -o, n));
            });
        });
        return Promise.all(a).then(function () { });
    };
    GuofengAnimPlayer.prototype.animateSpreadCard = function (e, t, i) {
        var n = this;
        return new Promise(function (o) {
            if (cc.isValid(e)) {
                var a, r = e.position.clone(), c = r.x + t * n.SPREAD_DISTANCE, s = e.getContentSize().height;
                n.context.loadRes(n.RES_TRAIL_TEXTURE2, cc.SpriteFrame, n.RES_BUNDLE).then(function (t) {
                    if (cc.isValid(e) && t && t.getTexture()) {
                        (a = new cc.Node("TrailNode")).parent = e;
                        e.getContentSize().width;
                        a.position = cc.v3(0, 0, 0);
                        a.setContentSize(10, s);
                        a.anchorX = 0.5;
                        a.anchorY = 0.5;
                        var i = a.addComponent(cc.MotionStreak);
                        i.fadeTime = n.SPREAD_TRAIL_FADE_TIME;
                        i.minSeg = 3;
                        i.stroke = s;
                        i.texture = t.getTexture();
                        i.color = n.SPREAD_TRAIL_COLOR;
                        i.fastMode = false;
                        i.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
                        i.dstBlendFactor = cc.macro.BlendFactor.ONE;
                        a.zIndex = 150;
                    }
                }).catch(function () { });
                cc.tween(e).delay(i).to(n.SPREAD_DURATION, {
                    position: cc.v3(c, r.y, 0)
                }, {
                    easing: "sineOut"
                }).call(function () {
                    if (a && cc.isValid(a) && cc.isValid(e)) {
                        var t = a.convertToWorldSpaceAR(cc.v3(0, 0, 0)), i = e.parent;
                        a.parent = i;
                        a.position = i.convertToNodeSpaceAR(t);
                        cc.tween(a).delay(n.SPREAD_TRAIL_FADE_TIME).call(function () {
                            cc.isValid(a) && a.destroy();
                        }).start();
                    }
                    cc.isValid(e) && e.destroy();
                    o();
                }).start();
                cc.tween(e).delay(i + n.SPREAD_FADE_DELAY).to(n.SPREAD_FADE_DURATION, {
                    opacity: 0
                }).start();
            }
            else
                o();
        });
    };
    GuofengAnimPlayer.prototype.delay = function (e, t) {
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                cc.tween(e).delay(t).call(i).start();
            }
            else {
                i();
            }
        });
    };
    GuofengAnimPlayer.prototype.phase1Up = function (e) {
        var t = this;
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                cc.tween(e).to(t.PHASE1_DURATION, {
                    position: cc.v3(e.position.x, e.position.y + t.PHASE1_MOVE_Y, 0),
                    scale: t.PHASE1_SCALE
                }).call(i).start();
            }
            else {
                i();
            }
        });
    };
    GuofengAnimPlayer.prototype.phase2Bezier = function (e, t) {
        var i = this;
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                var o = e.position.clone(), a = t, r = (o.y + a.y) / 2 - 100, c = cc.v3((o.x + a.x) / 2, r, 0);
                e._bezierProgress = 0;
                cc.tween(e).to(i.PHASE2_DURATION, {
                    _bezierProgress: 1
                }, {
                    progress: function (t, i, n, r) {
                        var s = r, l = (1 - s) * (1 - s) * o.x + 2 * (1 - s) * s * c.x + s * s * a.x, d = (1 - s) * (1 - s) * o.y + 2 * (1 - s) * s * c.y + s * s * a.y;
                        cc.isValid(e) && (e.position = cc.v3(l, d, 0));
                        return t + (i - t) * r;
                    }
                }).call(function () {
                    cc.isValid(e) && (e.position = t);
                }).start();
                cc.tween(e).delay(i.PHASE2_RESTORE_DELAY).to(0.2, {
                    scale: 1
                }).call(n).start();
            }
            else
                n();
        });
    };
    GuofengAnimPlayer.prototype.arcTo = function (e, t, i, n) {
        return new Promise(function (o) {
            if (cc.isValid(e)) {
                var a = e.position.clone(), r = t, c = r.x - a.x, s = r.y - a.y, l = Math.sqrt(c * c + s * s), d = l * (0.6 + 0.2 * Math.random()), u = Math.random() > 0.5, p = (a.x + r.x) / 2, h = (a.y + r.y) / 2, f = p + -s / l * d * (u ? 1 : -1), y = h + c / l * d * (u ? 1 : -1);
                e._arcProgress = 0;
                cc.tween(e).to(i, {
                    _arcProgress: 1
                }, {
                    progress: function (t, i, o, c) {
                        var s = c < 0.5 ? 2 * c * c : 1 - Math.pow(-2 * c + 2, 2) / 2, l = (1 - s) * (1 - s) * a.x + 2 * (1 - s) * s * f + s * s * r.x, d = (1 - s) * (1 - s) * a.y + 2 * (1 - s) * s * y + s * s * r.y;
                        cc.isValid(e) && (e.position = cc.v3(l, d, 0));
                        if (n && cc.isValid(n)) {
                            var u = 2 * (1 - s) * (f - a.x) + 2 * s * (r.x - f), p = 2 * (1 - s) * (y - a.y) + 2 * s * (r.y - y), h = 180 * Math.atan2(p, u) / Math.PI - 90;
                            n.angle = h;
                        }
                        return t + (i - t) * c;
                    }
                }).call(function () {
                    cc.isValid(e) && (e.position = t);
                    o();
                }).start();
            }
            else
                o();
        });
    };
    GuofengAnimPlayer.prototype.showFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var i = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(i);
            i.scale = this.context.layoutScale;
            BaseSpine_1.default.refreshWithNode(i, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", -1, null, false);
        }
    };
    GuofengAnimPlayer.prototype.playHitEffect = function (e, t) {
        var i = new cc.Node("DaxiaoHitEffectNode");
        e.addChild(i);
        var o = t.parent.convertToWorldSpaceAR(t.position.clone());
        i.position = e.convertToNodeSpaceAR(o);
        i.zIndex = 900;
        i.scale = this.context.layoutScale;
        BaseSpine_1.default.refreshWithNode(i, this.RES_HIT_SPINE, this.RES_BUNDLE).setAnimation("in", 1, function () {
            cc.isValid(i) && i.destroy();
        }, false);
    };
    GuofengAnimPlayer.prototype.playCollisionEffect = function (e) {
        var t = this, i = (this.nodeInfos[0].targetPos1.y + this.nodeInfos[this.nodeInfos.length - 1].targetPos1.y) / 2;
        this.nodeInfos[0].cardNode1.getContentSize().width;
        [{
                path: this.RES_BACK_SPINE,
                x: 0,
                zIndex: -50
            }, {
                path: this.RES_EFFECT_SPINE,
                x: 0,
                zIndex: 200
            }].forEach(function (o) {
            var a = new cc.Node("CollisionEffect");
            a.parent = e;
            a.position = cc.v3(o.x, i, 0);
            a.zIndex = o.zIndex;
            BaseSpine_1.default.refreshWithNode(a, o.path, t.RES_BUNDLE).setAnimation("in", 1, function () {
                cc.isValid(a) && a.destroy();
            }, false);
        });
    };
    GuofengAnimPlayer.prototype.destroyAllNodes = function () {
        this.nodeInfos.forEach(function (e) {
            cc.isValid(e.cardNode1) && e.cardNode1.destroy();
            cc.isValid(e.cardNode2) && e.cardNode2.destroy();
        });
    };
    return GuofengAnimPlayer;
}());
exports.GuofengAnimPlayer = GuofengAnimPlayer;

cc._RF.pop();