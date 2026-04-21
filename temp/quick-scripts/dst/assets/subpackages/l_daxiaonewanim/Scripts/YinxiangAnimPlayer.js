
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaonewanim/Scripts/YinxiangAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50756URbVlAb699So+bHIXm', 'YinxiangAnimPlayer');
// subpackages/l_daxiaonewanim/Scripts/YinxiangAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.YinxiangAnimPlayer = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var YinxiangAnimPlayer = /** @class */ (function () {
    function YinxiangAnimPlayer(t) {
        this.nodeInfos = [];
        this.maskLayer = null;
        this.maskGraphics = null;
        this.PHASE1_DURATION = 0.45;
        this.PHASE1_DELAY = 0.03;
        this.PHASE1_FADE_TIME = 0.15;
        this.PHASE1_STROKE = 120;
        this.PHASE1_COLOR = cc.color(255, 255, 255, 255);
        this.PHASE1_FLOW_LIGHT_DELAY = 0.2;
        this.PHASE2_DURATIONS = [0.13];
        this.PHASE2_MOVE_YS = [10];
        this.PHASE2_DELAY = 0.066;
        this.PHASE3_DURATION = 0.3;
        this.PHASE3_DELAY = 0;
        this.PHASE3_PHASE4_DELAY = 0.0167;
        this.PHASE4_COLLISION_ANIM = "in";
        this.PHASE4_EFFECT_ZINDEX = 500;
        this.PHASE4_MASK_WIDTH = 1080;
        this.PHASE4_MASK_HEIGHT = 3000;
        this.PULSE_FIRST_START = 0.67;
        this.PULSE_SECOND_START = 1;
        this.PULSE_DURATION = 0.1;
        this.PULSE_SCALE_MIN = 0.9;
        this.PULSE_SCALE_MAX = 1;
        this.COLLISION_OUT_DISTANCE = 50;
        this.COLLISION_OUT_DURATION = 0.1;
        this.COLLISION_OUT_SCALE = 1.1;
        this.COLLISION_IN_DURATION = 0.15;
        this.COLLISION_IN_SCALE = 1.1;
        this.FADE_TO_DARK_OPACITY = 77;
        this.FADE_TO_DARK_DURATION = 2;
        this.FADE_TO_WHITE_DURATION = 0.5;
        this.RES_BUNDLE = "l_daxiaoyinxiang";
        this.RES_PARTICLE_PREFIX = "texture/note";
        this.RES_PARTICLE_COUNT = 8;
        this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        this.RES_HIT_SPINE = "spine/gameplay_hit_gf";
        this.RES_FLOW_LIGHT = "spine/gameplay_flowingLight";
        this.RES_EFFECT_SPINE = "spine/gameplay_celebrate";
        this.context = null;
        this.context = t;
    }
    YinxiangAnimPlayer.playFullAnimation = function (e, i) {
        var o, n, r, s, c = e.context, l = c.gameView.nodeTopEffectRoot, h = new YinxiangAnimPlayer({
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
                var u = p.value, f = null === (r = c.getTileNodeByTileId(u.tileId1)) || void 0 === r ? void 0 : r.tileNode;
                f && h.hideFlowLight(f);
                var _ = null === (s = c.getTileNodeByTileId(u.tileId2)) || void 0 === s ? void 0 : s.tileNode;
                _ && h.hideFlowLight(_);
                u.cardNode1.active = false;
                u.cardNode2.active = false;
            }
        }
        catch (t) {
            o = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (n = d.return) && n.call(d);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        h.setupPositions(i);
        h.play(i);
    };
    YinxiangAnimPlayer.prototype.setupPositions = function (t) {
        var e = t[0].cardNode1.getContentSize().height, i = t[0].cardNode1.getContentSize().width, a = (t.length - 1) / 2;
        t.forEach(function (t, o) {
            var n = 0.5 * Math.abs(o - a) * i, r = 0 + (a - o) * e * 0.95;
            t.targetPos1 = cc.v3(-0.5 * i - n, r, 0);
            t.targetPos2 = cc.v3(0.5 * i + n, r, 0);
            var s = 2 * o;
            t.cardNode1.zIndex = s;
            t.cardNode2.zIndex = s + 1;
        });
    };
    YinxiangAnimPlayer.prototype.play = function (t) {
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
    };
    YinxiangAnimPlayer.prototype.playPhase1 = function () {
        var t = this, e = this.context.getLastCollisionWorldPos(), i = this.context.effectNode.convertToNodeSpaceAR(e);
        return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (e) {
            var o, n;
            if (e) {
                var r = [], s = 0;
                try {
                    for (var c = __values(t.nodeInfos), l = c.next(); !l.done; l = c.next()) {
                        var h = l.value;
                        r.push(t.createParticle(i, h.cardNode1.position, h.cardNode1, h.tileId1, s++, e));
                        r.push(t.createParticle(i, h.cardNode2.position, h.cardNode2, h.tileId2, s++, e));
                    }
                }
                catch (t) {
                    o = {
                        error: t
                    };
                }
                finally {
                    try {
                        l && !l.done && (n = c.return) && n.call(c);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
                return Promise.all(r).then(function () {
                    cc.isValid(t.maskLayer) && t.fadeToDark();
                });
            }
        });
    };
    YinxiangAnimPlayer.prototype.createParticle = function (t, e, i, a, o, r) {
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
            var d = o % s.RES_PARTICLE_COUNT + 1, p = "" + s.RES_PARTICLE_PREFIX + d, u = BaseSprite_1.default.create(p, s.RES_BUNDLE);
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
    };
    YinxiangAnimPlayer.prototype.playPhase2 = function () {
        for (var t = this, e = [], i = function i(i) {
            var o = a.nodeInfos[i], n = i * a.PHASE2_DELAY;
            e.push(a.delay(o.cardNode1, n).then(function () {
                return t.floatCard(o.cardNode1);
            }));
            e.push(a.delay(o.cardNode2, n).then(function () {
                return t.floatCard(o.cardNode2);
            }));
        }, a = this, o = 0; o < this.nodeInfos.length; o++)
            i(o);
        return Promise.all(e).then(function () { });
    };
    YinxiangAnimPlayer.prototype.floatCard = function (t) {
        if (!cc.isValid(t))
            return Promise.resolve();
        for (var e = cc.tween(t), i = t.y, a = 0; a < this.PHASE2_DURATIONS.length; a++) {
            i += this.PHASE2_MOVE_YS[a];
            e = e.to(this.PHASE2_DURATIONS[a], {
                y: i
            });
        }
        return new Promise(function (t) {
            e.call(t).start();
        });
    };
    YinxiangAnimPlayer.prototype.playPhase3 = function () {
        for (var t = this, e = [], i = function i(i) {
            var o = a.nodeInfos[i];
            e.push(a.delay(o.cardNode1, i * a.PHASE3_DELAY).then(function () {
                return t.moveToTarget(o.cardNode1, o.targetPos1);
            }));
            e.push(a.delay(o.cardNode2, i * a.PHASE3_DELAY).then(function () {
                return t.moveToTarget(o.cardNode2, o.targetPos2);
            }));
        }, a = this, o = 0; o < this.nodeInfos.length; o++)
            i(o);
        return Promise.all(e).then(function () {
            var e, i = null === (e = t.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
            return cc.isValid(i) ? t.delay(i, t.PHASE3_PHASE4_DELAY) : Promise.resolve();
        });
    };
    YinxiangAnimPlayer.prototype.moveToTarget = function (t, e) {
        var i = this;
        return cc.isValid(t) ? new Promise(function (a) {
            cc.tween(t).to(i.PHASE3_DURATION, {
                position: e,
                scale: 1
            }).call(a).start();
        }) : Promise.resolve();
    };
    YinxiangAnimPlayer.prototype.playPhase4 = function () {
        var t, e = this, i = 0, a = 0, o = 0;
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
        var s = 2 * this.PULSE_DURATION, c = this.PULSE_SECOND_START + s + this.COLLISION_OUT_DURATION, l = null === (t = this.nodeInfos[0]) || void 0 === t ? void 0 : t.cardNode1;
        cc.isValid(l) && cc.tween(l).delay(c).call(function () {
            e.context.playShake();
            cc.isValid(e.maskLayer) && e.fadeToWhite();
        }).start();
        return Promise.all(r).then(function () { });
    };
    YinxiangAnimPlayer.prototype.playCardPulse = function (t) {
        if (cc.isValid(t)) {
            var e = 2 * this.PULSE_DURATION, i = this.PULSE_SECOND_START - this.PULSE_FIRST_START - e;
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
    };
    YinxiangAnimPlayer.prototype.playCardCollision = function (t, e) {
        if (!cc.isValid(t))
            return Promise.resolve();
        var i = t.position.clone(), a = 2 * this.PULSE_DURATION, o = this.PULSE_SECOND_START + a, n = i.x > e.x ? i.x + this.COLLISION_OUT_DISTANCE : i.x - this.COLLISION_OUT_DISTANCE, r = cc.v3(n, i.y, 0);
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
    };
    YinxiangAnimPlayer.prototype.playCollisionEffect = function (t) {
        var e = new cc.Node("CollisionEffectMask");
        e.parent = this.context.effectNode;
        e.position = t;
        e.zIndex = this.PHASE4_EFFECT_ZINDEX;
        var i = e.addComponent(cc.Mask);
        i.type = cc.Mask.Type.RECT;
        i.inverted = false;
        e.setContentSize(this.PHASE4_MASK_WIDTH, this.PHASE4_MASK_HEIGHT);
        var a = BaseSpine_1.default.create(this.RES_EFFECT_SPINE, this.PHASE4_COLLISION_ANIM, 1, null, true, this.RES_BUNDLE);
        a.node.parent = e;
        a.node.position = cc.v3(0, 0, 0);
    };
    YinxiangAnimPlayer.prototype.createMaskLayer = function () {
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
    };
    YinxiangAnimPlayer.prototype.fadeToDark = function () {
        var t = this;
        if (cc.isValid(this.maskLayer) && this.maskGraphics) {
            var e = this.FADE_TO_DARK_OPACITY, i = cc.winSize;
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
    };
    YinxiangAnimPlayer.prototype.fadeToWhite = function () {
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
    };
    YinxiangAnimPlayer.prototype.arcTo = function (t, e, i, a) {
        return new Promise(function (o) {
            if (cc.isValid(t)) {
                var n = t.position.clone(), r = e, s = r.x - n.x, c = r.y - n.y, l = Math.sqrt(s * s + c * c), h = l * (0.6 + 0.2 * Math.random()), d = Math.random() > 0.5, p = (n.x + r.x) / 2, u = (n.y + r.y) / 2, f = p + -c / l * h * (d ? 1 : -1), _ = u + s / l * h * (d ? 1 : -1);
                t._arcProgress = 0;
                cc.tween(t).to(i, {
                    _arcProgress: 1
                }, {
                    progress: function (e, i, o, s) {
                        var c = s < 0.5 ? 2 * s * s : 1 - Math.pow(-2 * s + 2, 2) / 2, l = (1 - c) * (1 - c) * n.x + 2 * (1 - c) * c * f + c * c * r.x, h = (1 - c) * (1 - c) * n.y + 2 * (1 - c) * c * _ + c * c * r.y;
                        cc.isValid(t) && (t.position = cc.v3(l, h, 0));
                        if (a && cc.isValid(a)) {
                            var d = 2 * (1 - c) * (f - n.x) + 2 * c * (r.x - f), p = 2 * (1 - c) * (_ - n.y) + 2 * c * (r.y - _), u = 180 * Math.atan2(p, d) / Math.PI - 90;
                            a.angle = u;
                        }
                        return e + (i - e) * s;
                    }
                }).call(function () {
                    cc.isValid(t) && (t.position = e);
                    o();
                }).start();
            }
            else
                o();
        });
    };
    YinxiangAnimPlayer.prototype.delay = function (t, e) {
        return new Promise(function (i) {
            if (!cc.isValid(t) || e <= 0) {
                i();
            }
            else {
                cc.tween(t).delay(e).call(i).start();
            }
        });
    };
    YinxiangAnimPlayer.prototype.hideFlowLight = function (t) {
        var e = t.getChildByName("DaxiaoCardTipNode");
        e && (e.active = false);
    };
    YinxiangAnimPlayer.prototype.showFlowLight = function (t) {
        var e = t.getChildByName("DaxiaoCardTipNode");
        e && (e.active = false);
        if (!t.getChildByName("DaxiaoFlowLightNode")) {
            var i = new cc.Node("DaxiaoFlowLightNode");
            t.addChild(i);
            i.scale = this.context.layoutScale;
            i.setContentSize(t.getContentSize());
            BaseSpine_1.default.refreshWithNode(i, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", 1);
        }
    };
    YinxiangAnimPlayer.prototype.playHitEffect = function (t) {
        var e = BaseSpine_1.default.create(this.RES_HIT_SPINE, "gameplay_hit_gf", 1, null, false, this.RES_BUNDLE);
        e.node.parent = t;
        e.node.position = cc.v3(0, 0, 0);
        e.node.zIndex = 900;
        e.node.scale = this.context.layoutScale;
        e.node.name = "DaxiaoHitSpineNode";
    };
    YinxiangAnimPlayer.prototype.onComplete = function () {
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
    };
    return YinxiangAnimPlayer;
}());
exports.YinxiangAnimPlayer = YinxiangAnimPlayer;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb25ld2FuaW0vU2NyaXB0cy9ZaW54aWFuZ0FuaW1QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBb0U7QUFDcEUsMkVBQXNFO0FBQ3RFO0lBeUNFLDRCQUFZLENBQUM7UUF4Q2IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1Qyw0QkFBdUIsR0FBRyxHQUFHLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixtQkFBYyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsd0JBQW1CLEdBQUcsTUFBTSxDQUFDO1FBQzdCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3Qix5QkFBb0IsR0FBRyxHQUFHLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcs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Q0FBQyxDQUFDO1FBQ0gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQW5lQSxBQW1lQyxJQUFBO0FBbmVZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5leHBvcnQgY2xhc3MgWWlueGlhbmdBbmltUGxheWVyIHtcbiAgbm9kZUluZm9zID0gW107XG4gIG1hc2tMYXllciA9IG51bGw7XG4gIG1hc2tHcmFwaGljcyA9IG51bGw7XG4gIFBIQVNFMV9EVVJBVElPTiA9IDAuNDU7XG4gIFBIQVNFMV9ERUxBWSA9IDAuMDM7XG4gIFBIQVNFMV9GQURFX1RJTUUgPSAwLjE1O1xuICBQSEFTRTFfU1RST0tFID0gMTIwO1xuICBQSEFTRTFfQ09MT1IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICBQSEFTRTFfRkxPV19MSUdIVF9ERUxBWSA9IDAuMjtcbiAgUEhBU0UyX0RVUkFUSU9OUyA9IFswLjEzXTtcbiAgUEhBU0UyX01PVkVfWVMgPSBbMTBdO1xuICBQSEFTRTJfREVMQVkgPSAwLjA2NjtcbiAgUEhBU0UzX0RVUkFUSU9OID0gMC4zO1xuICBQSEFTRTNfREVMQVkgPSAwO1xuICBQSEFTRTNfUEhBU0U0X0RFTEFZID0gMC4wMTY3O1xuICBQSEFTRTRfQ09MTElTSU9OX0FOSU0gPSBcImluXCI7XG4gIFBIQVNFNF9FRkZFQ1RfWklOREVYID0gNTAwO1xuICBQSEFTRTRfTUFTS19XSURUSCA9IDEwODA7XG4gIFBIQVNFNF9NQVNLX0hFSUdIVCA9IDMwMDA7XG4gIFBVTFNFX0ZJUlNUX1NUQVJUID0gMC42NztcbiAgUFVMU0VfU0VDT05EX1NUQVJUID0gMTtcbiAgUFVMU0VfRFVSQVRJT04gPSAwLjE7XG4gIFBVTFNFX1NDQUxFX01JTiA9IDAuOTtcbiAgUFVMU0VfU0NBTEVfTUFYID0gMTtcbiAgQ09MTElTSU9OX09VVF9ESVNUQU5DRSA9IDUwO1xuICBDT0xMSVNJT05fT1VUX0RVUkFUSU9OID0gMC4xO1xuICBDT0xMSVNJT05fT1VUX1NDQUxFID0gMS4xO1xuICBDT0xMSVNJT05fSU5fRFVSQVRJT04gPSAwLjE1O1xuICBDT0xMSVNJT05fSU5fU0NBTEUgPSAxLjE7XG4gIEZBREVfVE9fREFSS19PUEFDSVRZID0gNzc7XG4gIEZBREVfVE9fREFSS19EVVJBVElPTiA9IDI7XG4gIEZBREVfVE9fV0hJVEVfRFVSQVRJT04gPSAwLjU7XG4gIFJFU19CVU5ETEUgPSBcImxfZGF4aWFveWlueGlhbmdcIjtcbiAgUkVTX1BBUlRJQ0xFX1BSRUZJWCA9IFwidGV4dHVyZS9ub3RlXCI7XG4gIFJFU19QQVJUSUNMRV9DT1VOVCA9IDg7XG4gIFJFU19UUkFJTF9URVhUVVJFID0gXCJ0ZXh0dXJlL2dhbWVwbGF5X3N0YXJfdGFpbFwiO1xuICBSRVNfSElUX1NQSU5FID0gXCJzcGluZS9nYW1lcGxheV9oaXRfZ2ZcIjtcbiAgUkVTX0ZMT1dfTElHSFQgPSBcInNwaW5lL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiO1xuICBSRVNfRUZGRUNUX1NQSU5FID0gXCJzcGluZS9nYW1lcGxheV9jZWxlYnJhdGVcIjtcbiAgY29udGV4dCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSB0O1xuICB9XG4gIHN0YXRpYyBwbGF5RnVsbEFuaW1hdGlvbihlLCBpKSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgcixcbiAgICAgIHMsXG4gICAgICBjID0gZS5jb250ZXh0LFxuICAgICAgbCA9IGMuZ2FtZVZpZXcubm9kZVRvcEVmZmVjdFJvb3QsXG4gICAgICBoID0gbmV3IFlpbnhpYW5nQW5pbVBsYXllcih7XG4gICAgICAgIGVmZmVjdE5vZGU6IGwsXG4gICAgICAgIGxheW91dFNjYWxlOiBjLmxheW91dFNjYWxlLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUub25BbmltYXRpb25Db21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUmVzOiBmdW5jdGlvbiAodCwgZSwgaSkge1xuICAgICAgICAgIHJldHVybiBjLmdhbWVDdHIubG9hZFJlcyh0LCBlLCBpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGlsZU5vZGVQb3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdmFyIGkgPSBjLmdldFRpbGVOb2RlTWFwKCkuZ2V0KHQpO1xuICAgICAgICAgIHJldHVybiBpID8gZS50b0xvY2FsUG9zKGkuY2FyZE5vZGUsIGwpIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlVGlsZU5vZGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGMucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZCh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGlsZU9iamVjdDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IGMuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodCk7XG4gICAgICAgICAgcmV0dXJuIGUgPyBlLmluZm8udGlsZU9iamVjdCA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJhbmRvbUluZGV4ZXM6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGMucmFuZG9tR2VuZXJhdG9yLnNodWZmbGUoQXJyYXkuZnJvbSh7XG4gICAgICAgICAgICBsZW5ndGg6IHRcbiAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRMYXN0Q29sbGlzaW9uV29ybGRQb3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gYy5nZXRMYXN0Q29sbGlzaW9uV29ybGRQb3MoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheVNoYWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGMuZ2FtZVZpZXcucGxheVNoYWtlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMoaSksIHAgPSBkLm5leHQoKTsgIXAuZG9uZTsgcCA9IGQubmV4dCgpKSB7XG4gICAgICAgIHZhciB1ID0gcC52YWx1ZSxcbiAgICAgICAgICBmID0gbnVsbCA9PT0gKHIgPSBjLmdldFRpbGVOb2RlQnlUaWxlSWQodS50aWxlSWQxKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci50aWxlTm9kZTtcbiAgICAgICAgZiAmJiBoLmhpZGVGbG93TGlnaHQoZik7XG4gICAgICAgIHZhciBfID0gbnVsbCA9PT0gKHMgPSBjLmdldFRpbGVOb2RlQnlUaWxlSWQodS50aWxlSWQyKSkgfHwgdm9pZCAwID09PSBzID8gdm9pZCAwIDogcy50aWxlTm9kZTtcbiAgICAgICAgXyAmJiBoLmhpZGVGbG93TGlnaHQoXyk7XG4gICAgICAgIHUuY2FyZE5vZGUxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB1LmNhcmROb2RlMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChuID0gZC5yZXR1cm4pICYmIG4uY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBoLnNldHVwUG9zaXRpb25zKGkpO1xuICAgIGgucGxheShpKTtcbiAgfVxuICBzZXR1cFBvc2l0aW9ucyh0KSB7XG4gICAgdmFyIGUgPSB0WzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCxcbiAgICAgIGkgPSB0WzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLndpZHRoLFxuICAgICAgYSA9ICh0Lmxlbmd0aCAtIDEpIC8gMjtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgIHZhciBuID0gMC41ICogTWF0aC5hYnMobyAtIGEpICogaSxcbiAgICAgICAgciA9IDAgKyAoYSAtIG8pICogZSAqIDAuOTU7XG4gICAgICB0LnRhcmdldFBvczEgPSBjYy52MygtMC41ICogaSAtIG4sIHIsIDApO1xuICAgICAgdC50YXJnZXRQb3MyID0gY2MudjMoMC41ICogaSArIG4sIHIsIDApO1xuICAgICAgdmFyIHMgPSAyICogbztcbiAgICAgIHQuY2FyZE5vZGUxLnpJbmRleCA9IHM7XG4gICAgICB0LmNhcmROb2RlMi56SW5kZXggPSBzICsgMTtcbiAgICB9KTtcbiAgfVxuICBwbGF5KHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5ub2RlSW5mb3MgPSB0O1xuICAgIHRoaXMuY3JlYXRlTWFza0xheWVyKCk7XG4gICAgdGhpcy5wbGF5UGhhc2UxKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5wbGF5UGhhc2UyKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5wbGF5UGhhc2UzKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5wbGF5UGhhc2U0KCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5vbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVBoYXNlMSgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpLFxuICAgICAgaSA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGUpO1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQubG9hZFJlcyh0aGlzLlJFU19UUkFJTF9URVhUVVJFLCBjYy5TcHJpdGVGcmFtZSwgdGhpcy5SRVNfQlVORExFKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbywgbjtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciByID0gW10sXG4gICAgICAgICAgcyA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHQubm9kZUluZm9zKSwgbCA9IGMubmV4dCgpOyAhbC5kb25lOyBsID0gYy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBoID0gbC52YWx1ZTtcbiAgICAgICAgICAgIHIucHVzaCh0LmNyZWF0ZVBhcnRpY2xlKGksIGguY2FyZE5vZGUxLnBvc2l0aW9uLCBoLmNhcmROb2RlMSwgaC50aWxlSWQxLCBzKyssIGUpKTtcbiAgICAgICAgICAgIHIucHVzaCh0LmNyZWF0ZVBhcnRpY2xlKGksIGguY2FyZE5vZGUyLnBvc2l0aW9uLCBoLmNhcmROb2RlMiwgaC50aWxlSWQyLCBzKyssIGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKG4gPSBjLnJldHVybikgJiYgbi5jYWxsKGMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQodC5tYXNrTGF5ZXIpICYmIHQuZmFkZVRvRGFyaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjcmVhdGVQYXJ0aWNsZSh0LCBlLCBpLCBhLCBvLCByKSB7XG4gICAgdmFyIHMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGwgPSBuZXcgY2MuTm9kZShcIllpbnhpYW5nUGFydGljbGVcIik7XG4gICAgICBsLnBhcmVudCA9IHMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgICAgbC5wb3NpdGlvbiA9IHQ7XG4gICAgICBsLnNjYWxlID0gcy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgICAgbC56SW5kZXggPSAtODAwO1xuICAgICAgdmFyIGggPSBuZXcgY2MuTm9kZShcIlNwcml0ZUNvbnRhaW5lclwiKTtcbiAgICAgIGgucGFyZW50ID0gbDtcbiAgICAgIGgucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgIHZhciBkID0gbyAlIHMuUkVTX1BBUlRJQ0xFX0NPVU5UICsgMSxcbiAgICAgICAgcCA9IFwiXCIgKyBzLlJFU19QQVJUSUNMRV9QUkVGSVggKyBkLFxuICAgICAgICB1ID0gQmFzZVNwcml0ZS5jcmVhdGUocCwgcy5SRVNfQlVORExFKTtcbiAgICAgIGlmICh1ICYmIHUubm9kZSkge1xuICAgICAgICB1Lm5vZGUucGFyZW50ID0gaDtcbiAgICAgICAgdS5ub2RlLnNjYWxlID0gMjtcbiAgICAgIH1cbiAgICAgIHZhciBmID0gbC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKTtcbiAgICAgIGYuZmFkZVRpbWUgPSBzLlBIQVNFMV9GQURFX1RJTUU7XG4gICAgICBmLm1pblNlZyA9IDE7XG4gICAgICBmLnN0cm9rZSA9IHMuUEhBU0UxX1NUUk9LRTtcbiAgICAgIGYudGV4dHVyZSA9IHIuZ2V0VGV4dHVyZSgpO1xuICAgICAgZi5jb2xvciA9IHMuUEhBU0UxX0NPTE9SO1xuICAgICAgdmFyIF8gPSBvICogcy5QSEFTRTFfREVMQVk7XG4gICAgICBjYy50d2VlbihsKS5kZWxheShfKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcy5hcmNUbyhsLCBlLCBzLlBIQVNFMV9EVVJBVElPTiwgaCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZChsKSAmJiBsLmRlc3Ryb3koKTtcbiAgICAgICAgICBzLmNvbnRleHQucmVtb3ZlVGlsZU5vZGUoYSk7XG4gICAgICAgICAgaS5wb3NpdGlvbiA9IGU7XG4gICAgICAgICAgaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgICAgICBzLnBsYXlIaXRFZmZlY3QoaSk7XG4gICAgICAgICAgICBjYy50d2VlbihpKS5kZWxheShzLlBIQVNFMV9GTE9XX0xJR0hUX0RFTEFZKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY2MuaXNWYWxpZChpKSAmJiBzLnNob3dGbG93TGlnaHQoaSk7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UGhhc2UyKCkge1xuICAgIGZvciAodmFyIHQgPSB0aGlzLCBlID0gW10sIGkgPSBmdW5jdGlvbiBpKGkpIHtcbiAgICAgICAgdmFyIG8gPSBhLm5vZGVJbmZvc1tpXSxcbiAgICAgICAgICBuID0gaSAqIGEuUEhBU0UyX0RFTEFZO1xuICAgICAgICBlLnB1c2goYS5kZWxheShvLmNhcmROb2RlMSwgbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHQuZmxvYXRDYXJkKG8uY2FyZE5vZGUxKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBlLnB1c2goYS5kZWxheShvLmNhcmROb2RlMiwgbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHQuZmxvYXRDYXJkKG8uY2FyZE5vZGUyKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSwgYSA9IHRoaXMsIG8gPSAwOyBvIDwgdGhpcy5ub2RlSW5mb3MubGVuZ3RoOyBvKyspIGkobyk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGUpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuICB9XG4gIGZsb2F0Q2FyZCh0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHQpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgZm9yICh2YXIgZSA9IGNjLnR3ZWVuKHQpLCBpID0gdC55LCBhID0gMDsgYSA8IHRoaXMuUEhBU0UyX0RVUkFUSU9OUy5sZW5ndGg7IGErKykge1xuICAgICAgaSArPSB0aGlzLlBIQVNFMl9NT1ZFX1lTW2FdO1xuICAgICAgZSA9IGUudG8odGhpcy5QSEFTRTJfRFVSQVRJT05TW2FdLCB7XG4gICAgICAgIHk6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUuY2FsbCh0KS5zdGFydCgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTMoKSB7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMsIGUgPSBbXSwgaSA9IGZ1bmN0aW9uIGkoaSkge1xuICAgICAgICB2YXIgbyA9IGEubm9kZUluZm9zW2ldO1xuICAgICAgICBlLnB1c2goYS5kZWxheShvLmNhcmROb2RlMSwgaSAqIGEuUEhBU0UzX0RFTEFZKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdC5tb3ZlVG9UYXJnZXQoby5jYXJkTm9kZTEsIG8udGFyZ2V0UG9zMSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgZS5wdXNoKGEuZGVsYXkoby5jYXJkTm9kZTIsIGkgKiBhLlBIQVNFM19ERUxBWSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHQubW92ZVRvVGFyZ2V0KG8uY2FyZE5vZGUyLCBvLnRhcmdldFBvczIpO1xuICAgICAgICB9KSk7XG4gICAgICB9LCBhID0gdGhpcywgbyA9IDA7IG8gPCB0aGlzLm5vZGVJbmZvcy5sZW5ndGg7IG8rKykgaShvKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZSxcbiAgICAgICAgaSA9IG51bGwgPT09IChlID0gdC5ub2RlSW5mb3NbMF0pIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FyZE5vZGUxO1xuICAgICAgcmV0dXJuIGNjLmlzVmFsaWQoaSkgPyB0LmRlbGF5KGksIHQuUEhBU0UzX1BIQVNFNF9ERUxBWSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuICBtb3ZlVG9UYXJnZXQodCwgZSkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICByZXR1cm4gY2MuaXNWYWxpZCh0KSA/IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhKSB7XG4gICAgICBjYy50d2Vlbih0KS50byhpLlBIQVNFM19EVVJBVElPTiwge1xuICAgICAgICBwb3NpdGlvbjogZSxcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0pLmNhbGwoYSkuc3RhcnQoKTtcbiAgICB9KSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIHBsYXlQaGFzZTQoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gdGhpcyxcbiAgICAgIGkgPSAwLFxuICAgICAgYSA9IDAsXG4gICAgICBvID0gMDtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpICs9IHQuY2FyZE5vZGUxLnggKyB0LmNhcmROb2RlMi54O1xuICAgICAgYSArPSB0LmNhcmROb2RlMS55ICsgdC5jYXJkTm9kZTIueTtcbiAgICAgIG8gKz0gMjtcbiAgICB9KTtcbiAgICB2YXIgbiA9IGNjLnYzKGkgLyBvLCBhIC8gbywgMCk7XG4gICAgdGhpcy5wbGF5Q29sbGlzaW9uRWZmZWN0KG4pO1xuICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUucGxheUNhcmRQdWxzZSh0LmNhcmROb2RlMSk7XG4gICAgICBlLnBsYXlDYXJkUHVsc2UodC5jYXJkTm9kZTIpO1xuICAgIH0pO1xuICAgIHZhciByID0gW107XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgci5wdXNoKGUucGxheUNhcmRDb2xsaXNpb24odC5jYXJkTm9kZTEsIG4pKTtcbiAgICAgIHIucHVzaChlLnBsYXlDYXJkQ29sbGlzaW9uKHQuY2FyZE5vZGUyLCBuKSk7XG4gICAgfSk7XG4gICAgdmFyIHMgPSAyICogdGhpcy5QVUxTRV9EVVJBVElPTixcbiAgICAgIGMgPSB0aGlzLlBVTFNFX1NFQ09ORF9TVEFSVCArIHMgKyB0aGlzLkNPTExJU0lPTl9PVVRfRFVSQVRJT04sXG4gICAgICBsID0gbnVsbCA9PT0gKHQgPSB0aGlzLm5vZGVJbmZvc1swXSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYXJkTm9kZTE7XG4gICAgY2MuaXNWYWxpZChsKSAmJiBjYy50d2VlbihsKS5kZWxheShjKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuY29udGV4dC5wbGF5U2hha2UoKTtcbiAgICAgIGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUuZmFkZVRvV2hpdGUoKTtcbiAgICB9KS5zdGFydCgpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChyKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBwbGF5Q2FyZFB1bHNlKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGUgPSAyICogdGhpcy5QVUxTRV9EVVJBVElPTixcbiAgICAgICAgaSA9IHRoaXMuUFVMU0VfU0VDT05EX1NUQVJUIC0gdGhpcy5QVUxTRV9GSVJTVF9TVEFSVCAtIGU7XG4gICAgICBjYy50d2Vlbih0KS5kZWxheSh0aGlzLlBVTFNFX0ZJUlNUX1NUQVJUKS50byh0aGlzLlBVTFNFX0RVUkFUSU9OLCB7XG4gICAgICAgIHNjYWxlWDogdGhpcy5QVUxTRV9TQ0FMRV9NSU4sXG4gICAgICAgIHNjYWxlWTogdGhpcy5QVUxTRV9TQ0FMRV9NSU5cbiAgICAgIH0pLnRvKHRoaXMuUFVMU0VfRFVSQVRJT04sIHtcbiAgICAgICAgc2NhbGVYOiB0aGlzLlBVTFNFX1NDQUxFX01BWCxcbiAgICAgICAgc2NhbGVZOiB0aGlzLlBVTFNFX1NDQUxFX01BWFxuICAgICAgfSkuZGVsYXkoaSkudG8odGhpcy5QVUxTRV9EVVJBVElPTiwge1xuICAgICAgICBzY2FsZVg6IHRoaXMuUFVMU0VfU0NBTEVfTUlOLFxuICAgICAgICBzY2FsZVk6IHRoaXMuUFVMU0VfU0NBTEVfTUlOXG4gICAgICB9KS50byh0aGlzLlBVTFNFX0RVUkFUSU9OLCB7XG4gICAgICAgIHNjYWxlWDogdGhpcy5QVUxTRV9TQ0FMRV9NQVgsXG4gICAgICAgIHNjYWxlWTogdGhpcy5QVUxTRV9TQ0FMRV9NQVhcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlDYXJkQ29sbGlzaW9uKHQsIGUpIHtcbiAgICBpZiAoIWNjLmlzVmFsaWQodCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgaSA9IHQucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgIGEgPSAyICogdGhpcy5QVUxTRV9EVVJBVElPTixcbiAgICAgIG8gPSB0aGlzLlBVTFNFX1NFQ09ORF9TVEFSVCArIGEsXG4gICAgICBuID0gaS54ID4gZS54ID8gaS54ICsgdGhpcy5DT0xMSVNJT05fT1VUX0RJU1RBTkNFIDogaS54IC0gdGhpcy5DT0xMSVNJT05fT1VUX0RJU1RBTkNFLFxuICAgICAgciA9IGNjLnYzKG4sIGkueSwgMCk7XG4gICAgY2MudHdlZW4odCkuZGVsYXkobykudG8odGhpcy5DT0xMSVNJT05fT1VUX0RVUkFUSU9OLCB7XG4gICAgICBwb3NpdGlvbjogcixcbiAgICAgIHNjYWxlWDogdGhpcy5DT0xMSVNJT05fT1VUX1NDQUxFLFxuICAgICAgc2NhbGVZOiB0aGlzLkNPTExJU0lPTl9PVVRfU0NBTEVcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IFwicXVhcnRPdXRcIlxuICAgIH0pLnRvKHRoaXMuQ09MTElTSU9OX0lOX0RVUkFUSU9OLCB7XG4gICAgICBwb3NpdGlvbjogZSxcbiAgICAgIHNjYWxlWDogdGhpcy5DT0xMSVNJT05fSU5fU0NBTEUsXG4gICAgICBzY2FsZVk6IHRoaXMuQ09MTElTSU9OX0lOX1NDQUxFXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBcInF1YXJ0SW5cIlxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfSkuc3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcy5kZWxheSh0LCBvICsgdGhpcy5DT0xMSVNJT05fT1VUX0RVUkFUSU9OICsgdGhpcy5DT0xMSVNJT05fSU5fRFVSQVRJT04pO1xuICB9XG4gIHBsYXlDb2xsaXNpb25FZmZlY3QodCkge1xuICAgIHZhciBlID0gbmV3IGNjLk5vZGUoXCJDb2xsaXNpb25FZmZlY3RNYXNrXCIpO1xuICAgIGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgZS5wb3NpdGlvbiA9IHQ7XG4gICAgZS56SW5kZXggPSB0aGlzLlBIQVNFNF9FRkZFQ1RfWklOREVYO1xuICAgIHZhciBpID0gZS5hZGRDb21wb25lbnQoY2MuTWFzayk7XG4gICAgaS50eXBlID0gY2MuTWFzay5UeXBlLlJFQ1Q7XG4gICAgaS5pbnZlcnRlZCA9IGZhbHNlO1xuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5QSEFTRTRfTUFTS19XSURUSCwgdGhpcy5QSEFTRTRfTUFTS19IRUlHSFQpO1xuICAgIHZhciBhID0gQmFzZVNwaW5lLmNyZWF0ZSh0aGlzLlJFU19FRkZFQ1RfU1BJTkUsIHRoaXMuUEhBU0U0X0NPTExJU0lPTl9BTklNLCAxLCBudWxsLCB0cnVlLCB0aGlzLlJFU19CVU5ETEUpO1xuICAgIGEubm9kZS5wYXJlbnQgPSBlO1xuICAgIGEubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICB9XG4gIGNyZWF0ZU1hc2tMYXllcigpIHtcbiAgICB0aGlzLm1hc2tMYXllciA9IG5ldyBjYy5Ob2RlKFwiWWlueGlhbmdNYXNrTGF5ZXJcIik7XG4gICAgdGhpcy5tYXNrTGF5ZXIucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgdGhpcy5tYXNrTGF5ZXIucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICB0aGlzLm1hc2tMYXllci56SW5kZXggPSAtMTAwMDtcbiAgICB0aGlzLm1hc2tMYXllci5fZmFkZUFscGhhID0gMDtcbiAgICB0aGlzLm1hc2tHcmFwaGljcyA9IHRoaXMubWFza0xheWVyLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgdmFyIHQgPSBjYy53aW5TaXplO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLnJlY3QoLXQud2lkdGggLyAyLCAtdC5oZWlnaHQgLyAyLCB0LndpZHRoLCB0LmhlaWdodCk7XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIDApO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGwoKTtcbiAgfVxuICBmYWRlVG9EYXJrKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBlID0gdGhpcy5GQURFX1RPX0RBUktfT1BBQ0lUWSxcbiAgICAgICAgaSA9IGNjLndpblNpemU7XG4gICAgICBjYy50d2Vlbih0aGlzLm1hc2tMYXllcikudG8odGhpcy5GQURFX1RPX0RBUktfRFVSQVRJT04sIHtcbiAgICAgICAgX2ZhZGVBbHBoYTogZVxuICAgICAgfSwge1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGUsIGEsIG8sIG4pIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Lm1hc2tMYXllcikgJiYgdC5tYXNrR3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHZhciByID0gZSArIChhIC0gZSkgKiBuO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLnJlY3QoLWkud2lkdGggLyAyLCAtaS5oZWlnaHQgLyAyLCBpLndpZHRoLCBpLmhlaWdodCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgcik7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlICsgKGEgLSBlKSAqIG47XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIGZhZGVUb1doaXRlKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBlID0gY2Mud2luU2l6ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubWFza0xheWVyKS50byh0aGlzLkZBREVfVE9fV0hJVEVfRFVSQVRJT04sIHtcbiAgICAgICAgX2ZhZGVBbHBoYTogMFxuICAgICAgfSwge1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGksIGEsIG8sIG4pIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Lm1hc2tMYXllcikgJiYgdC5tYXNrR3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHZhciByID0gaSArIChhIC0gaSkgKiBuO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLnJlY3QoLWUud2lkdGggLyAyLCAtZS5oZWlnaHQgLyAyLCBlLndpZHRoLCBlLmhlaWdodCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgcik7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpICsgKGEgLSBpKSAqIG47XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIGFyY1RvKHQsIGUsIGksIGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHZhciBuID0gdC5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgIHIgPSBlLFxuICAgICAgICAgIHMgPSByLnggLSBuLngsXG4gICAgICAgICAgYyA9IHIueSAtIG4ueSxcbiAgICAgICAgICBsID0gTWF0aC5zcXJ0KHMgKiBzICsgYyAqIGMpLFxuICAgICAgICAgIGggPSBsICogKDAuNiArIDAuMiAqIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgIGQgPSBNYXRoLnJhbmRvbSgpID4gMC41LFxuICAgICAgICAgIHAgPSAobi54ICsgci54KSAvIDIsXG4gICAgICAgICAgdSA9IChuLnkgKyByLnkpIC8gMixcbiAgICAgICAgICBmID0gcCArIC1jIC8gbCAqIGggKiAoZCA/IDEgOiAtMSksXG4gICAgICAgICAgXyA9IHUgKyBzIC8gbCAqIGggKiAoZCA/IDEgOiAtMSk7XG4gICAgICAgIHQuX2FyY1Byb2dyZXNzID0gMDtcbiAgICAgICAgY2MudHdlZW4odCkudG8oaSwge1xuICAgICAgICAgIF9hcmNQcm9ncmVzczogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChlLCBpLCBvLCBzKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHMgPCAwLjUgPyAyICogcyAqIHMgOiAxIC0gTWF0aC5wb3coLTIgKiBzICsgMiwgMikgLyAyLFxuICAgICAgICAgICAgICBsID0gKDEgLSBjKSAqICgxIC0gYykgKiBuLnggKyAyICogKDEgLSBjKSAqIGMgKiBmICsgYyAqIGMgKiByLngsXG4gICAgICAgICAgICAgIGggPSAoMSAtIGMpICogKDEgLSBjKSAqIG4ueSArIDIgKiAoMSAtIGMpICogYyAqIF8gKyBjICogYyAqIHIueTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQucG9zaXRpb24gPSBjYy52MyhsLCBoLCAwKSk7XG4gICAgICAgICAgICBpZiAoYSAmJiBjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgICAgICAgIHZhciBkID0gMiAqICgxIC0gYykgKiAoZiAtIG4ueCkgKyAyICogYyAqIChyLnggLSBmKSxcbiAgICAgICAgICAgICAgICBwID0gMiAqICgxIC0gYykgKiAoXyAtIG4ueSkgKyAyICogYyAqIChyLnkgLSBfKSxcbiAgICAgICAgICAgICAgICB1ID0gMTgwICogTWF0aC5hdGFuMihwLCBkKSAvIE1hdGguUEkgLSA5MDtcbiAgICAgICAgICAgICAgYS5hbmdsZSA9IHU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZSArIChpIC0gZSkgKiBzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5wb3NpdGlvbiA9IGUpO1xuICAgICAgICAgIG8oKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSBvKCk7XG4gICAgfSk7XG4gIH1cbiAgZGVsYXkodCwgZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKHQpIHx8IGUgPD0gMCkge1xuICAgICAgICBpKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy50d2Vlbih0KS5kZWxheShlKS5jYWxsKGkpLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaGlkZUZsb3dMaWdodCh0KSB7XG4gICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgZSAmJiAoZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgc2hvd0Zsb3dMaWdodCh0KSB7XG4gICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgZSAmJiAoZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKCF0LmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKSkge1xuICAgICAgdmFyIGkgPSBuZXcgY2MuTm9kZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIik7XG4gICAgICB0LmFkZENoaWxkKGkpO1xuICAgICAgaS5zY2FsZSA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZTtcbiAgICAgIGkuc2V0Q29udGVudFNpemUodC5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICAgIEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUoaSwgdGhpcy5SRVNfRkxPV19MSUdIVCwgdGhpcy5SRVNfQlVORExFKS5zZXRBbmltYXRpb24oXCJpbml0XCIsIDEpO1xuICAgIH1cbiAgfVxuICBwbGF5SGl0RWZmZWN0KHQpIHtcbiAgICB2YXIgZSA9IEJhc2VTcGluZS5jcmVhdGUodGhpcy5SRVNfSElUX1NQSU5FLCBcImdhbWVwbGF5X2hpdF9nZlwiLCAxLCBudWxsLCBmYWxzZSwgdGhpcy5SRVNfQlVORExFKTtcbiAgICBlLm5vZGUucGFyZW50ID0gdDtcbiAgICBlLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICBlLm5vZGUuekluZGV4ID0gOTAwO1xuICAgIGUubm9kZS5zY2FsZSA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZTtcbiAgICBlLm5vZGUubmFtZSA9IFwiRGF4aWFvSGl0U3BpbmVOb2RlXCI7XG4gIH1cbiAgb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUxKSAmJiB0LmNhcmROb2RlMS5kZXN0cm95KCk7XG4gICAgICBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUyKSAmJiB0LmNhcmROb2RlMi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpKSB7XG4gICAgICB0aGlzLm1hc2tMYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLm1hc2tMYXllciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubWFza0dyYXBoaWNzID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQub25Db21wbGV0ZSAmJiB0aGlzLmNvbnRleHQub25Db21wbGV0ZSgpO1xuICB9XG59Il19