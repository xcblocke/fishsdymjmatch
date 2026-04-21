"use strict";
cc._RF.push(module, '390fduXy+JFjI2/xS0ybzug', 'HudieAnimPlayer');
// subpackages/r_daxiaoAnim/Scripts/HudieAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HudieAnimPlayer = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HudieAnimPlayer = /** @class */ (function () {
    function HudieAnimPlayer(e) {
        this.nodeInfos = [];
        this.maskLayer = null;
        this.maskGraphics = null;
        this.LAYOUT_CONFIGS = {
            4: [1, 3, 3, 1],
            5: [2, 3, 3, 2],
            6: [1, 2, 3, 3, 2, 1],
            7: [3, 4, 4, 3],
            8: [1, 3, 4, 4, 3, 1],
            9: [1, 3, 5, 5, 3, 1]
        };
        this.LAYOUT_SPACING_X = 1;
        this.LAYOUT_SPACING_Y = 1;
        this.PHASE1_DURATION = 0.45;
        this.PHASE1_DELAY = 0.03;
        this.PHASE1_FADE_TIME = 0.15;
        this.PHASE1_STROKE = 32;
        this.PHASE1_COLOR = cc.color(255, 255, 255, 255);
        this.PHASE1_FLOW_LIGHT_DELAY = 0.2;
        this.PHASE2_DURATIONS = [0.13];
        this.PHASE2_MOVE_YS = [10];
        this.PHASE2_DELAY = 0.066;
        this.PHASE3_DURATION = 0.3;
        this.PHASE3_DELAY = 0;
        this.PHASE3_PHASE4_DELAY = 0.0167;
        this.PHASE4_COLLISION_ANIM = "in";
        this.COLLISION_DELAY = 0.08;
        this.COLLISION_OUT_DURATION = 0.14;
        this.COLLISION_IN_DURATION = 0.07;
        this.COLLISION_OUT_DISTANCE = 100;
        this.COLLISION_SCALE_OUT = 0.9;
        this.COLLISION_SCALE_IN = 1;
        this.FADE_TO_DARK_OPACITY = 77;
        this.FADE_TO_DARK_DURATION = 2;
        this.FADE_TO_WHITE_DURATION = 0.5;
        this.RES_BUNDLE = "r_daxiaohudie";
        this.RES_PARTICLE = "texture/gameplay_trailingElement";
        this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        this.RES_HIT_SPINE = "spine/gameplay_hit_gf";
        this.RES_FLOW_LIGHT = "spine/gameplay_flowingLight";
        this.RES_EFFECT_SPINE = "spine/gameplay_elimination";
        this.context = null;
        this.context = e;
    }
    HudieAnimPlayer.playFullAnimation = function (t, i) {
        var o, a, r, c, s = t.context, l = s.gameView.nodeTopEffectRoot, d = new HudieAnimPlayer({
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
                return s.removeTileNodeByTileId(e);
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
            getLastCollisionWorldPos: function () {
                return s.getLastCollisionWorldPos();
            },
            playShake: function () {
                return s.gameView.playShake();
            }
        });
        try {
            for (var u = __values(i), p = u.next(); !p.done; p = u.next()) {
                var h = p.value, f = null === (r = s.getTileNodeByTileId(h.tileId1)) || void 0 === r ? void 0 : r.tileNode;
                f && d.hideFlowLight(f);
                var y = null === (c = s.getTileNodeByTileId(h.tileId2)) || void 0 === c ? void 0 : c.tileNode;
                y && d.hideFlowLight(y);
                h.cardNode1.active = false;
                h.cardNode2.active = false;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (a = u.return) && a.call(u);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        d.setupPositions(i);
        d.play(i);
    };
    HudieAnimPlayer.prototype.setupPositions = function (e) {
        var t = e.length, i = this.LAYOUT_CONFIGS[t];
        if (i) {
            var n = e[0].cardNode1.getContentSize().height, o = e[0].cardNode1.getContentSize().width * this.LAYOUT_SPACING_X, a = n * this.LAYOUT_SPACING_Y, r = [];
            e.forEach(function (e) {
                r.push({
                    node: e.cardNode1,
                    info: e,
                    isCard1: true
                });
                r.push({
                    node: e.cardNode2,
                    info: e,
                    isCard1: false
                });
            });
            for (var c = i.length, s = -(c - 1) * o / 2, l = 0, d = 0, u = 0; u < c; u++)
                for (var p = i[u], h = s + u * o, f = (p - 1) * a / 2, y = 0; y < p && !(l >= r.length); y++) {
                    var m = r[l], g = f - y * a, v = cc.v3(h, g, 0);
                    if (m.isCard1) {
                        m.info.targetPos1 = v;
                    }
                    else {
                        m.info.targetPos2 = v;
                    }
                    m.node.zIndex = d;
                    d++;
                    l++;
                }
        }
        else
            this.setupDefaultPositions(e);
    };
    HudieAnimPlayer.prototype.setupDefaultPositions = function (e) {
        var t = e[0].cardNode1.getContentSize().height, i = e[0].cardNode1.getContentSize().width, n = t * this.LAYOUT_SPACING_Y, o = i * this.LAYOUT_SPACING_X / 2, a = e.length * n / 2 - n / 2;
        e.forEach(function (e, t) {
            var i = a - t * n;
            e.targetPos1 = cc.v3(-o, i, 0);
            e.targetPos2 = cc.v3(o, i, 0);
            e.cardNode1.zIndex = 2 * t;
            e.cardNode2.zIndex = 2 * t + 1;
        });
    };
    HudieAnimPlayer.prototype.play = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.createMaskLayer();
        this.playPhase1().then(function () {
            return t.playPhase2();
        }).then(function () {
            return t.playPhase3();
        }).then(function () {
            return t.playPhase4();
        }).then(function () {
            return t.onComplete();
        });
    };
    HudieAnimPlayer.prototype.playPhase1 = function () {
        var e = this, t = this.context.getLastCollisionWorldPos(), i = this.context.effectNode.convertToNodeSpaceAR(t);
        return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (t) {
            var o, a;
            if (t) {
                var r = [], c = 0;
                try {
                    for (var s = __values(e.nodeInfos), l = s.next(); !l.done; l = s.next()) {
                        var d = l.value;
                        r.push(e.createParticle(i, d.cardNode1.position, d.cardNode1, d.tileId1, c++, t));
                        r.push(e.createParticle(i, d.cardNode2.position, d.cardNode2, d.tileId2, c++, t));
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        l && !l.done && (a = s.return) && a.call(s);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
                return Promise.all(r).then(function () {
                    cc.isValid(e.maskLayer) && e.fadeToDark();
                });
            }
        });
    };
    HudieAnimPlayer.prototype.createParticle = function (e, t, i, n, o, r) {
        var c = this;
        return new Promise(function (s) {
            var l = new cc.Node("HudieParticle");
            l.parent = c.context.effectNode;
            l.position = e;
            l.scale = c.context.layoutScale;
            l.zIndex = -800;
            var d = new cc.Node("SpriteContainer");
            d.parent = l;
            d.position = cc.v3(0, 0, 0);
            var u = BaseSprite_1.default.create(c.RES_PARTICLE, c.RES_BUNDLE);
            if (u && u.node) {
                u.node.parent = d;
                u.node.scale = 2;
            }
            var p = l.addComponent(cc.MotionStreak);
            p.fadeTime = c.PHASE1_FADE_TIME;
            p.minSeg = 1;
            p.stroke = c.PHASE1_STROKE;
            p.texture = r.getTexture();
            p.color = c.PHASE1_COLOR;
            var h = o * c.PHASE1_DELAY;
            cc.tween(l).delay(h).call(function () {
                c.arcTo(l, t, c.PHASE1_DURATION, d).then(function () {
                    cc.isValid(l) && l.destroy();
                    c.context.removeTileNode(n);
                    i.position = t;
                    i.active = true;
                    if (cc.isValid(i)) {
                        c.playHitEffect(i);
                        cc.tween(i).delay(c.PHASE1_FLOW_LIGHT_DELAY).call(function () {
                            cc.isValid(i) && c.showFlowLight(i);
                        }).start();
                    }
                    s();
                });
            }).start();
        });
    };
    HudieAnimPlayer.prototype.playPhase2 = function () {
        for (var e = this, t = [], i = function i(i) {
            var o = n.nodeInfos[i], a = i * n.PHASE2_DELAY;
            t.push(n.delay(o.cardNode1, a).then(function () {
                return e.floatCard(o.cardNode1);
            }));
            t.push(n.delay(o.cardNode2, a).then(function () {
                return e.floatCard(o.cardNode2);
            }));
        }, n = this, o = 0; o < this.nodeInfos.length; o++)
            i(o);
        return Promise.all(t).then(function () { });
    };
    HudieAnimPlayer.prototype.floatCard = function (e) {
        if (!cc.isValid(e))
            return Promise.resolve();
        for (var t = cc.tween(e), i = e.y, n = 0; n < this.PHASE2_DURATIONS.length; n++) {
            i += this.PHASE2_MOVE_YS[n];
            t = t.to(this.PHASE2_DURATIONS[n], {
                y: i
            });
        }
        return new Promise(function (e) {
            t.call(e).start();
        });
    };
    HudieAnimPlayer.prototype.playPhase3 = function () {
        for (var e = this, t = [], i = function i(i) {
            var o = n.nodeInfos[i];
            t.push(n.delay(o.cardNode1, i * n.PHASE3_DELAY).then(function () {
                return e.moveToTarget(o.cardNode1, o.targetPos1);
            }));
            t.push(n.delay(o.cardNode2, i * n.PHASE3_DELAY).then(function () {
                return e.moveToTarget(o.cardNode2, o.targetPos2);
            }));
        }, n = this, o = 0; o < this.nodeInfos.length; o++)
            i(o);
        return Promise.all(t).then(function () {
            var t, i = null === (t = e.nodeInfos[0]) || void 0 === t ? void 0 : t.cardNode1;
            return cc.isValid(i) ? e.delay(i, e.PHASE3_PHASE4_DELAY) : Promise.resolve();
        });
    };
    HudieAnimPlayer.prototype.moveToTarget = function (e, t) {
        var i = this;
        return cc.isValid(e) ? new Promise(function (n) {
            cc.tween(e).to(i.PHASE3_DURATION, {
                position: t,
                scale: 1
            }).call(n).start();
        }) : Promise.resolve();
    };
    HudieAnimPlayer.prototype.playPhase4 = function () {
        var e, t = this, i = 0, n = 0, o = 0;
        this.nodeInfos.forEach(function (e) {
            i += e.cardNode1.x + e.cardNode2.x;
            n += e.cardNode1.y + e.cardNode2.y;
            o += 2;
        });
        var a = cc.v3(i / o, n / o, 0), r = [];
        this.nodeInfos.forEach(function (e) {
            r.push(t.playCardCollision(e.cardNode1, a));
            r.push(t.playCardCollision(e.cardNode2, a));
        });
        var c = this.COLLISION_DELAY + this.COLLISION_OUT_DURATION, s = null === (e = this.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
        cc.isValid(s) && cc.tween(s).delay(c).call(function () {
            t.playCollisionEffect(a);
            t.context.playShake();
            cc.isValid(t.maskLayer) && t.fadeToWhite();
        }).start();
        return Promise.all(r).then(function () { });
    };
    HudieAnimPlayer.prototype.playCardCollision = function (e, t) {
        if (!cc.isValid(e))
            return Promise.resolve();
        var i = e.position.clone(), n = i.clone().sub(t).normalize(), o = i.clone().add(n.mul(this.COLLISION_OUT_DISTANCE));
        cc.tween(e).delay(this.COLLISION_DELAY).parallel(cc.tween().to(this.COLLISION_OUT_DURATION, {
            position: o
        }, {
            easing: "quartInOut"
        }), cc.tween().to(this.COLLISION_OUT_DURATION, {
            scale: this.COLLISION_SCALE_OUT
        }, {
            easing: "quartInOut"
        })).parallel(cc.tween().to(this.COLLISION_IN_DURATION, {
            position: t
        }, {
            easing: "quartInOut"
        }), cc.tween().to(this.COLLISION_IN_DURATION, {
            scale: this.COLLISION_SCALE_IN
        }, {
            easing: "quartInOut"
        })).call(function () {
            cc.isValid(e) && (e.active = false);
        }).start();
        return this.delay(e, this.COLLISION_DELAY + this.COLLISION_OUT_DURATION + this.COLLISION_IN_DURATION);
    };
    HudieAnimPlayer.prototype.playCollisionEffect = function (e) {
        var t = BaseSpine_1.default.create(this.RES_EFFECT_SPINE, this.PHASE4_COLLISION_ANIM, 1, null, true, this.RES_BUNDLE);
        t.node.parent = this.context.effectNode;
        t.node.position = e;
        t.node.zIndex = 500;
    };
    HudieAnimPlayer.prototype.createMaskLayer = function () {
        this.maskLayer = new cc.Node("HudieMaskLayer");
        this.maskLayer.parent = this.context.effectNode;
        this.maskLayer.position = cc.v3(0, 0, 0);
        this.maskLayer.zIndex = -1000;
        this.maskLayer._fadeAlpha = 0;
        this.maskGraphics = this.maskLayer.addComponent(cc.Graphics);
        var e = cc.winSize;
        this.maskGraphics.rect(-e.width / 2, -e.height / 2, e.width, e.height);
        this.maskGraphics.fillColor = new cc.Color(0, 0, 0, 0);
        this.maskGraphics.fill();
    };
    HudieAnimPlayer.prototype.fadeToDark = function () {
        var e = this;
        if (cc.isValid(this.maskLayer) && this.maskGraphics) {
            var t = this.FADE_TO_DARK_OPACITY, i = cc.winSize;
            cc.tween(this.maskLayer).to(this.FADE_TO_DARK_DURATION, {
                _fadeAlpha: t
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
    };
    HudieAnimPlayer.prototype.fadeToWhite = function () {
        var e = this;
        if (cc.isValid(this.maskLayer) && this.maskGraphics) {
            var t = cc.winSize;
            cc.tween(this.maskLayer).to(this.FADE_TO_WHITE_DURATION, {
                _fadeAlpha: 0
            }, {
                progress: function (i, n, o, a) {
                    if (cc.isValid(e.maskLayer) && e.maskGraphics) {
                        var r = i + (n - i) * a;
                        e.maskGraphics.clear();
                        e.maskGraphics.rect(-t.width / 2, -t.height / 2, t.width, t.height);
                        e.maskGraphics.fillColor = new cc.Color(0, 0, 0, r);
                        e.maskGraphics.fill();
                    }
                    return i + (n - i) * a;
                }
            }).start();
        }
    };
    HudieAnimPlayer.prototype.arcTo = function (e, t, i, n) {
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
    HudieAnimPlayer.prototype.delay = function (e, t) {
        return new Promise(function (i) {
            if (!cc.isValid(e) || t <= 0) {
                i();
            }
            else {
                cc.tween(e).delay(t).call(i).start();
            }
        });
    };
    HudieAnimPlayer.prototype.hideFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
    };
    HudieAnimPlayer.prototype.showFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var i = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(i);
            i.scale = this.context.layoutScale;
            i.setContentSize(e.getContentSize());
            BaseSpine_1.default.refreshWithNode(i, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", 1);
        }
    };
    HudieAnimPlayer.prototype.playHitEffect = function (e) {
        var t = BaseSpine_1.default.create(this.RES_HIT_SPINE, "gameplay_hit_gf", 1, null, false, this.RES_BUNDLE);
        t.node.parent = e;
        t.node.position = cc.v3(0, 0, 0);
        t.node.zIndex = 900;
        t.node.scale = this.context.layoutScale;
        t.node.name = "DaxiaoHitSpineNode";
    };
    HudieAnimPlayer.prototype.onComplete = function () {
        this.nodeInfos.forEach(function (e) {
            cc.isValid(e.cardNode1) && e.cardNode1.destroy();
            cc.isValid(e.cardNode2) && e.cardNode2.destroy();
        });
        if (cc.isValid(this.maskLayer)) {
            this.maskLayer.destroy();
            this.maskLayer = null;
        }
        this.maskGraphics = null;
        this.context.onComplete && this.context.onComplete();
    };
    return HudieAnimPlayer;
}());
exports.HudieAnimPlayer = HudieAnimPlayer;

cc._RF.pop();