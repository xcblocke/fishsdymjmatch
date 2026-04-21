
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_daxiaoAnim/Scripts/HudieAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RheGlhb0FuaW0vU2NyaXB0cy9IdWRpZUFuaW1QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBb0U7QUFDcEUsMkVBQXNFO0FBQ3RFO0lBMkNFLHlCQUFZLENBQUM7UUExQ2IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWMsR0FBRztZQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCLENBQUM7UUFDRixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENB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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLFlBQVksRUFBRSxDQUFDO2lCQUNoQixFQUFFO29CQUNELFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDM0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNqRCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FB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LENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7SUFDRCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0F6ZUEsQUF5ZUMsSUFBQTtBQXplWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5leHBvcnQgY2xhc3MgSHVkaWVBbmltUGxheWVyIHtcbiAgbm9kZUluZm9zID0gW107XG4gIG1hc2tMYXllciA9IG51bGw7XG4gIG1hc2tHcmFwaGljcyA9IG51bGw7XG4gIExBWU9VVF9DT05GSUdTID0ge1xuICAgIDQ6IFsxLCAzLCAzLCAxXSxcbiAgICA1OiBbMiwgMywgMywgMl0sXG4gICAgNjogWzEsIDIsIDMsIDMsIDIsIDFdLFxuICAgIDc6IFszLCA0LCA0LCAzXSxcbiAgICA4OiBbMSwgMywgNCwgNCwgMywgMV0sXG4gICAgOTogWzEsIDMsIDUsIDUsIDMsIDFdXG4gIH07XG4gIExBWU9VVF9TUEFDSU5HX1ggPSAxO1xuICBMQVlPVVRfU1BBQ0lOR19ZID0gMTtcbiAgUEhBU0UxX0RVUkFUSU9OID0gMC40NTtcbiAgUEhBU0UxX0RFTEFZID0gMC4wMztcbiAgUEhBU0UxX0ZBREVfVElNRSA9IDAuMTU7XG4gIFBIQVNFMV9TVFJPS0UgPSAzMjtcbiAgUEhBU0UxX0NPTE9SID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgUEhBU0UxX0ZMT1dfTElHSFRfREVMQVkgPSAwLjI7XG4gIFBIQVNFMl9EVVJBVElPTlMgPSBbMC4xM107XG4gIFBIQVNFMl9NT1ZFX1lTID0gWzEwXTtcbiAgUEhBU0UyX0RFTEFZID0gMC4wNjY7XG4gIFBIQVNFM19EVVJBVElPTiA9IDAuMztcbiAgUEhBU0UzX0RFTEFZID0gMDtcbiAgUEhBU0UzX1BIQVNFNF9ERUxBWSA9IDAuMDE2NztcbiAgUEhBU0U0X0NPTExJU0lPTl9BTklNID0gXCJpblwiO1xuICBDT0xMSVNJT05fREVMQVkgPSAwLjA4O1xuICBDT0xMSVNJT05fT1VUX0RVUkFUSU9OID0gMC4xNDtcbiAgQ09MTElTSU9OX0lOX0RVUkFUSU9OID0gMC4wNztcbiAgQ09MTElTSU9OX09VVF9ESVNUQU5DRSA9IDEwMDtcbiAgQ09MTElTSU9OX1NDQUxFX09VVCA9IDAuOTtcbiAgQ09MTElTSU9OX1NDQUxFX0lOID0gMTtcbiAgRkFERV9UT19EQVJLX09QQUNJVFkgPSA3NztcbiAgRkFERV9UT19EQVJLX0RVUkFUSU9OID0gMjtcbiAgRkFERV9UT19XSElURV9EVVJBVElPTiA9IDAuNTtcbiAgUkVTX0JVTkRMRSA9IFwicl9kYXhpYW9odWRpZVwiO1xuICBSRVNfUEFSVElDTEUgPSBcInRleHR1cmUvZ2FtZXBsYXlfdHJhaWxpbmdFbGVtZW50XCI7XG4gIFJFU19UUkFJTF9URVhUVVJFID0gXCJ0ZXh0dXJlL2dhbWVwbGF5X3N0YXJfdGFpbFwiO1xuICBSRVNfSElUX1NQSU5FID0gXCJzcGluZS9nYW1lcGxheV9oaXRfZ2ZcIjtcbiAgUkVTX0ZMT1dfTElHSFQgPSBcInNwaW5lL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiO1xuICBSRVNfRUZGRUNUX1NQSU5FID0gXCJzcGluZS9nYW1lcGxheV9lbGltaW5hdGlvblwiO1xuICBjb250ZXh0ID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGU7XG4gIH1cbiAgc3RhdGljIHBsYXlGdWxsQW5pbWF0aW9uKHQsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIGEsXG4gICAgICByLFxuICAgICAgYyxcbiAgICAgIHMgPSB0LmNvbnRleHQsXG4gICAgICBsID0gcy5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdCxcbiAgICAgIGQgPSBuZXcgSHVkaWVBbmltUGxheWVyKHtcbiAgICAgICAgZWZmZWN0Tm9kZTogbCxcbiAgICAgICAgbGF5b3V0U2NhbGU6IHMubGF5b3V0U2NhbGUsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdC5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSZXM6IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHMuZ2FtZUN0ci5sb2FkUmVzKGUsIHQsIGkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUaWxlTm9kZVBvczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHMuZ2V0VGlsZU5vZGVNYXAoKS5nZXQoZSk7XG4gICAgICAgICAgcmV0dXJuIGkgPyB0LnRvTG9jYWxQb3MoaS5jYXJkTm9kZSwgbCkgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUaWxlTm9kZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gcy5yZW1vdmVUaWxlTm9kZUJ5VGlsZUlkKGUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUaWxlT2JqZWN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciB0ID0gcy5nZXRUaWxlTm9kZU1hcCgpLmdldChlKTtcbiAgICAgICAgICByZXR1cm4gdCA/IHQuaW5mby50aWxlT2JqZWN0IDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZG9tSW5kZXhlczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gcy5yYW5kb21HZW5lcmF0b3Iuc2h1ZmZsZShBcnJheS5mcm9tKHtcbiAgICAgICAgICAgIGxlbmd0aDogZVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldExhc3RDb2xsaXNpb25Xb3JsZFBvczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBzLmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpO1xuICAgICAgICB9LFxuICAgICAgICBwbGF5U2hha2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcy5nYW1lVmlldy5wbGF5U2hha2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhpKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGggPSBwLnZhbHVlLFxuICAgICAgICAgIGYgPSBudWxsID09PSAociA9IHMuZ2V0VGlsZU5vZGVCeVRpbGVJZChoLnRpbGVJZDEpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnRpbGVOb2RlO1xuICAgICAgICBmICYmIGQuaGlkZUZsb3dMaWdodChmKTtcbiAgICAgICAgdmFyIHkgPSBudWxsID09PSAoYyA9IHMuZ2V0VGlsZU5vZGVCeVRpbGVJZChoLnRpbGVJZDIpKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLnRpbGVOb2RlO1xuICAgICAgICB5ICYmIGQuaGlkZUZsb3dMaWdodCh5KTtcbiAgICAgICAgaC5jYXJkTm9kZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGguY2FyZE5vZGUyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKGEgPSB1LnJldHVybikgJiYgYS5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGQuc2V0dXBQb3NpdGlvbnMoaSk7XG4gICAgZC5wbGF5KGkpO1xuICB9XG4gIHNldHVwUG9zaXRpb25zKGUpIHtcbiAgICB2YXIgdCA9IGUubGVuZ3RoLFxuICAgICAgaSA9IHRoaXMuTEFZT1VUX0NPTkZJR1NbdF07XG4gICAgaWYgKGkpIHtcbiAgICAgIHZhciBuID0gZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQsXG4gICAgICAgIG8gPSBlWzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICogdGhpcy5MQVlPVVRfU1BBQ0lOR19YLFxuICAgICAgICBhID0gbiAqIHRoaXMuTEFZT1VUX1NQQUNJTkdfWSxcbiAgICAgICAgciA9IFtdO1xuICAgICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHIucHVzaCh7XG4gICAgICAgICAgbm9kZTogZS5jYXJkTm9kZTEsXG4gICAgICAgICAgaW5mbzogZSxcbiAgICAgICAgICBpc0NhcmQxOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGUuY2FyZE5vZGUyLFxuICAgICAgICAgIGluZm86IGUsXG4gICAgICAgICAgaXNDYXJkMTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGZvciAodmFyIGMgPSBpLmxlbmd0aCwgcyA9IC0oYyAtIDEpICogbyAvIDIsIGwgPSAwLCBkID0gMCwgdSA9IDA7IHUgPCBjOyB1KyspIGZvciAodmFyIHAgPSBpW3VdLCBoID0gcyArIHUgKiBvLCBmID0gKHAgLSAxKSAqIGEgLyAyLCB5ID0gMDsgeSA8IHAgJiYgIShsID49IHIubGVuZ3RoKTsgeSsrKSB7XG4gICAgICAgIHZhciBtID0gcltsXSxcbiAgICAgICAgICBnID0gZiAtIHkgKiBhLFxuICAgICAgICAgIHYgPSBjYy52MyhoLCBnLCAwKTtcbiAgICAgICAgaWYgKG0uaXNDYXJkMSkge1xuICAgICAgICAgIG0uaW5mby50YXJnZXRQb3MxID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtLmluZm8udGFyZ2V0UG9zMiA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgbS5ub2RlLnpJbmRleCA9IGQ7XG4gICAgICAgIGQrKztcbiAgICAgICAgbCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLnNldHVwRGVmYXVsdFBvc2l0aW9ucyhlKTtcbiAgfVxuICBzZXR1cERlZmF1bHRQb3NpdGlvbnMoZSkge1xuICAgIHZhciB0ID0gZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQsXG4gICAgICBpID0gZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS53aWR0aCxcbiAgICAgIG4gPSB0ICogdGhpcy5MQVlPVVRfU1BBQ0lOR19ZLFxuICAgICAgbyA9IGkgKiB0aGlzLkxBWU9VVF9TUEFDSU5HX1ggLyAyLFxuICAgICAgYSA9IGUubGVuZ3RoICogbiAvIDIgLSBuIC8gMjtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHZhciBpID0gYSAtIHQgKiBuO1xuICAgICAgZS50YXJnZXRQb3MxID0gY2MudjMoLW8sIGksIDApO1xuICAgICAgZS50YXJnZXRQb3MyID0gY2MudjMobywgaSwgMCk7XG4gICAgICBlLmNhcmROb2RlMS56SW5kZXggPSAyICogdDtcbiAgICAgIGUuY2FyZE5vZGUyLnpJbmRleCA9IDIgKiB0ICsgMTtcbiAgICB9KTtcbiAgfVxuICBwbGF5KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5ub2RlSW5mb3MgPSBlO1xuICAgIHRoaXMuY3JlYXRlTWFza0xheWVyKCk7XG4gICAgdGhpcy5wbGF5UGhhc2UxKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5wbGF5UGhhc2UyKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5wbGF5UGhhc2UzKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5wbGF5UGhhc2U0KCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVBoYXNlMSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpLFxuICAgICAgaSA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQubG9hZFJlcyh0aGlzLlJFU19UUkFJTF9URVhUVVJFLCBjYy5TcHJpdGVGcmFtZSwgdGhpcy5SRVNfQlVORExFKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbywgYTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHZhciByID0gW10sXG4gICAgICAgICAgYyA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGUubm9kZUluZm9zKSwgbCA9IHMubmV4dCgpOyAhbC5kb25lOyBsID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBkID0gbC52YWx1ZTtcbiAgICAgICAgICAgIHIucHVzaChlLmNyZWF0ZVBhcnRpY2xlKGksIGQuY2FyZE5vZGUxLnBvc2l0aW9uLCBkLmNhcmROb2RlMSwgZC50aWxlSWQxLCBjKyssIHQpKTtcbiAgICAgICAgICAgIHIucHVzaChlLmNyZWF0ZVBhcnRpY2xlKGksIGQuY2FyZE5vZGUyLnBvc2l0aW9uLCBkLmNhcmROb2RlMiwgZC50aWxlSWQyLCBjKyssIHQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKGEgPSBzLnJldHVybikgJiYgYS5jYWxsKHMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUuZmFkZVRvRGFyaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjcmVhdGVQYXJ0aWNsZShlLCB0LCBpLCBuLCBvLCByKSB7XG4gICAgdmFyIGMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocykge1xuICAgICAgdmFyIGwgPSBuZXcgY2MuTm9kZShcIkh1ZGllUGFydGljbGVcIik7XG4gICAgICBsLnBhcmVudCA9IGMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgICAgbC5wb3NpdGlvbiA9IGU7XG4gICAgICBsLnNjYWxlID0gYy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgICAgbC56SW5kZXggPSAtODAwO1xuICAgICAgdmFyIGQgPSBuZXcgY2MuTm9kZShcIlNwcml0ZUNvbnRhaW5lclwiKTtcbiAgICAgIGQucGFyZW50ID0gbDtcbiAgICAgIGQucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgIHZhciB1ID0gQmFzZVNwcml0ZS5jcmVhdGUoYy5SRVNfUEFSVElDTEUsIGMuUkVTX0JVTkRMRSk7XG4gICAgICBpZiAodSAmJiB1Lm5vZGUpIHtcbiAgICAgICAgdS5ub2RlLnBhcmVudCA9IGQ7XG4gICAgICAgIHUubm9kZS5zY2FsZSA9IDI7XG4gICAgICB9XG4gICAgICB2YXIgcCA9IGwuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICBwLmZhZGVUaW1lID0gYy5QSEFTRTFfRkFERV9USU1FO1xuICAgICAgcC5taW5TZWcgPSAxO1xuICAgICAgcC5zdHJva2UgPSBjLlBIQVNFMV9TVFJPS0U7XG4gICAgICBwLnRleHR1cmUgPSByLmdldFRleHR1cmUoKTtcbiAgICAgIHAuY29sb3IgPSBjLlBIQVNFMV9DT0xPUjtcbiAgICAgIHZhciBoID0gbyAqIGMuUEhBU0UxX0RFTEFZO1xuICAgICAgY2MudHdlZW4obCkuZGVsYXkoaCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGMuYXJjVG8obCwgdCwgYy5QSEFTRTFfRFVSQVRJT04sIGQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQobCkgJiYgbC5kZXN0cm95KCk7XG4gICAgICAgICAgYy5jb250ZXh0LnJlbW92ZVRpbGVOb2RlKG4pO1xuICAgICAgICAgIGkucG9zaXRpb24gPSB0O1xuICAgICAgICAgIGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICAgICAgYy5wbGF5SGl0RWZmZWN0KGkpO1xuICAgICAgICAgICAgY2MudHdlZW4oaSkuZGVsYXkoYy5QSEFTRTFfRkxPV19MSUdIVF9ERUxBWSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNjLmlzVmFsaWQoaSkgJiYgYy5zaG93Rmxvd0xpZ2h0KGkpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVBoYXNlMigpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcywgdCA9IFtdLCBpID0gZnVuY3Rpb24gaShpKSB7XG4gICAgICAgIHZhciBvID0gbi5ub2RlSW5mb3NbaV0sXG4gICAgICAgICAgYSA9IGkgKiBuLlBIQVNFMl9ERUxBWTtcbiAgICAgICAgdC5wdXNoKG4uZGVsYXkoby5jYXJkTm9kZTEsIGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLmZsb2F0Q2FyZChvLmNhcmROb2RlMSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdC5wdXNoKG4uZGVsYXkoby5jYXJkTm9kZTIsIGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLmZsb2F0Q2FyZChvLmNhcmROb2RlMik7XG4gICAgICAgIH0pKTtcbiAgICAgIH0sIG4gPSB0aGlzLCBvID0gMDsgbyA8IHRoaXMubm9kZUluZm9zLmxlbmd0aDsgbysrKSBpKG8pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0KS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBmbG9hdENhcmQoZSkge1xuICAgIGlmICghY2MuaXNWYWxpZChlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGZvciAodmFyIHQgPSBjYy50d2VlbihlKSwgaSA9IGUueSwgbiA9IDA7IG4gPCB0aGlzLlBIQVNFMl9EVVJBVElPTlMubGVuZ3RoOyBuKyspIHtcbiAgICAgIGkgKz0gdGhpcy5QSEFTRTJfTU9WRV9ZU1tuXTtcbiAgICAgIHQgPSB0LnRvKHRoaXMuUEhBU0UyX0RVUkFUSU9OU1tuXSwge1xuICAgICAgICB5OiBpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0LmNhbGwoZSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UGhhc2UzKCkge1xuICAgIGZvciAodmFyIGUgPSB0aGlzLCB0ID0gW10sIGkgPSBmdW5jdGlvbiBpKGkpIHtcbiAgICAgICAgdmFyIG8gPSBuLm5vZGVJbmZvc1tpXTtcbiAgICAgICAgdC5wdXNoKG4uZGVsYXkoby5jYXJkTm9kZTEsIGkgKiBuLlBIQVNFM19ERUxBWSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUubW92ZVRvVGFyZ2V0KG8uY2FyZE5vZGUxLCBvLnRhcmdldFBvczEpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHQucHVzaChuLmRlbGF5KG8uY2FyZE5vZGUyLCBpICogbi5QSEFTRTNfREVMQVkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLm1vdmVUb1RhcmdldChvLmNhcmROb2RlMiwgby50YXJnZXRQb3MyKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSwgbiA9IHRoaXMsIG8gPSAwOyBvIDwgdGhpcy5ub2RlSW5mb3MubGVuZ3RoOyBvKyspIGkobyk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQsXG4gICAgICAgIGkgPSBudWxsID09PSAodCA9IGUubm9kZUluZm9zWzBdKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhcmROb2RlMTtcbiAgICAgIHJldHVybiBjYy5pc1ZhbGlkKGkpID8gZS5kZWxheShpLCBlLlBIQVNFM19QSEFTRTRfREVMQVkpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cbiAgbW92ZVRvVGFyZ2V0KGUsIHQpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgcmV0dXJuIGNjLmlzVmFsaWQoZSkgPyBuZXcgUHJvbWlzZShmdW5jdGlvbiAobikge1xuICAgICAgY2MudHdlZW4oZSkudG8oaS5QSEFTRTNfRFVSQVRJT04sIHtcbiAgICAgICAgcG9zaXRpb246IHQsXG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS5jYWxsKG4pLnN0YXJ0KCk7XG4gICAgfSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBwbGF5UGhhc2U0KCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IHRoaXMsXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSAwLFxuICAgICAgbyA9IDA7XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaSArPSBlLmNhcmROb2RlMS54ICsgZS5jYXJkTm9kZTIueDtcbiAgICAgIG4gKz0gZS5jYXJkTm9kZTEueSArIGUuY2FyZE5vZGUyLnk7XG4gICAgICBvICs9IDI7XG4gICAgfSk7XG4gICAgdmFyIGEgPSBjYy52MyhpIC8gbywgbiAvIG8sIDApLFxuICAgICAgciA9IFtdO1xuICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHIucHVzaCh0LnBsYXlDYXJkQ29sbGlzaW9uKGUuY2FyZE5vZGUxLCBhKSk7XG4gICAgICByLnB1c2godC5wbGF5Q2FyZENvbGxpc2lvbihlLmNhcmROb2RlMiwgYSkpO1xuICAgIH0pO1xuICAgIHZhciBjID0gdGhpcy5DT0xMSVNJT05fREVMQVkgKyB0aGlzLkNPTExJU0lPTl9PVVRfRFVSQVRJT04sXG4gICAgICBzID0gbnVsbCA9PT0gKGUgPSB0aGlzLm5vZGVJbmZvc1swXSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYXJkTm9kZTE7XG4gICAgY2MuaXNWYWxpZChzKSAmJiBjYy50d2VlbihzKS5kZWxheShjKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQucGxheUNvbGxpc2lvbkVmZmVjdChhKTtcbiAgICAgIHQuY29udGV4dC5wbGF5U2hha2UoKTtcbiAgICAgIGNjLmlzVmFsaWQodC5tYXNrTGF5ZXIpICYmIHQuZmFkZVRvV2hpdGUoKTtcbiAgICB9KS5zdGFydCgpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChyKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBwbGF5Q2FyZENvbGxpc2lvbihlLCB0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGkgPSBlLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICBuID0gaS5jbG9uZSgpLnN1Yih0KS5ub3JtYWxpemUoKSxcbiAgICAgIG8gPSBpLmNsb25lKCkuYWRkKG4ubXVsKHRoaXMuQ09MTElTSU9OX09VVF9ESVNUQU5DRSkpO1xuICAgIGNjLnR3ZWVuKGUpLmRlbGF5KHRoaXMuQ09MTElTSU9OX0RFTEFZKS5wYXJhbGxlbChjYy50d2VlbigpLnRvKHRoaXMuQ09MTElTSU9OX09VVF9EVVJBVElPTiwge1xuICAgICAgcG9zaXRpb246IG9cbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IFwicXVhcnRJbk91dFwiXG4gICAgfSksIGNjLnR3ZWVuKCkudG8odGhpcy5DT0xMSVNJT05fT1VUX0RVUkFUSU9OLCB7XG4gICAgICBzY2FsZTogdGhpcy5DT0xMSVNJT05fU0NBTEVfT1VUXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgIH0pKS5wYXJhbGxlbChjYy50d2VlbigpLnRvKHRoaXMuQ09MTElTSU9OX0lOX0RVUkFUSU9OLCB7XG4gICAgICBwb3NpdGlvbjogdFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJxdWFydEluT3V0XCJcbiAgICB9KSwgY2MudHdlZW4oKS50byh0aGlzLkNPTExJU0lPTl9JTl9EVVJBVElPTiwge1xuICAgICAgc2NhbGU6IHRoaXMuQ09MTElTSU9OX1NDQUxFX0lOXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgIH0pKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUuYWN0aXZlID0gZmFsc2UpO1xuICAgIH0pLnN0YXJ0KCk7XG4gICAgcmV0dXJuIHRoaXMuZGVsYXkoZSwgdGhpcy5DT0xMSVNJT05fREVMQVkgKyB0aGlzLkNPTExJU0lPTl9PVVRfRFVSQVRJT04gKyB0aGlzLkNPTExJU0lPTl9JTl9EVVJBVElPTik7XG4gIH1cbiAgcGxheUNvbGxpc2lvbkVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBCYXNlU3BpbmUuY3JlYXRlKHRoaXMuUkVTX0VGRkVDVF9TUElORSwgdGhpcy5QSEFTRTRfQ09MTElTSU9OX0FOSU0sIDEsIG51bGwsIHRydWUsIHRoaXMuUkVTX0JVTkRMRSk7XG4gICAgdC5ub2RlLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIHQubm9kZS5wb3NpdGlvbiA9IGU7XG4gICAgdC5ub2RlLnpJbmRleCA9IDUwMDtcbiAgfVxuICBjcmVhdGVNYXNrTGF5ZXIoKSB7XG4gICAgdGhpcy5tYXNrTGF5ZXIgPSBuZXcgY2MuTm9kZShcIkh1ZGllTWFza0xheWVyXCIpO1xuICAgIHRoaXMubWFza0xheWVyLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIHRoaXMubWFza0xheWVyLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgdGhpcy5tYXNrTGF5ZXIuekluZGV4ID0gLTEwMDA7XG4gICAgdGhpcy5tYXNrTGF5ZXIuX2ZhZGVBbHBoYSA9IDA7XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MgPSB0aGlzLm1hc2tMYXllci5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgIHZhciBlID0gY2Mud2luU2l6ZTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5yZWN0KC1lLndpZHRoIC8gMiwgLWUuaGVpZ2h0IC8gMiwgZS53aWR0aCwgZS5oZWlnaHQpO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAwKTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsKCk7XG4gIH1cbiAgZmFkZVRvRGFyaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpICYmIHRoaXMubWFza0dyYXBoaWNzKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuRkFERV9UT19EQVJLX09QQUNJVFksXG4gICAgICAgIGkgPSBjYy53aW5TaXplO1xuICAgICAgY2MudHdlZW4odGhpcy5tYXNrTGF5ZXIpLnRvKHRoaXMuRkFERV9UT19EQVJLX0RVUkFUSU9OLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IHRcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh0LCBuLCBvLCBhKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IHQgKyAobiAtIHQpICogYTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBlLm1hc2tHcmFwaGljcy5yZWN0KC1pLndpZHRoIC8gMiwgLWkuaGVpZ2h0IC8gMiwgaS53aWR0aCwgaS5oZWlnaHQpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdCArIChuIC0gdCkgKiBhO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBmYWRlVG9XaGl0ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpICYmIHRoaXMubWFza0dyYXBoaWNzKSB7XG4gICAgICB2YXIgdCA9IGNjLndpblNpemU7XG4gICAgICBjYy50d2Vlbih0aGlzLm1hc2tMYXllcikudG8odGhpcy5GQURFX1RPX1dISVRFX0RVUkFUSU9OLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChpLCBuLCBvLCBhKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IGkgKyAobiAtIGkpICogYTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBlLm1hc2tHcmFwaGljcy5yZWN0KC10LndpZHRoIC8gMiwgLXQuaGVpZ2h0IC8gMiwgdC53aWR0aCwgdC5oZWlnaHQpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaSArIChuIC0gaSkgKiBhO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBhcmNUbyhlLCB0LCBpLCBuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICB2YXIgYSA9IGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICByID0gdCxcbiAgICAgICAgICBjID0gci54IC0gYS54LFxuICAgICAgICAgIHMgPSByLnkgLSBhLnksXG4gICAgICAgICAgbCA9IE1hdGguc3FydChjICogYyArIHMgKiBzKSxcbiAgICAgICAgICBkID0gbCAqICgwLjYgKyAwLjIgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICB1ID0gTWF0aC5yYW5kb20oKSA+IDAuNSxcbiAgICAgICAgICBwID0gKGEueCArIHIueCkgLyAyLFxuICAgICAgICAgIGggPSAoYS55ICsgci55KSAvIDIsXG4gICAgICAgICAgZiA9IHAgKyAtcyAvIGwgKiBkICogKHUgPyAxIDogLTEpLFxuICAgICAgICAgIHkgPSBoICsgYyAvIGwgKiBkICogKHUgPyAxIDogLTEpO1xuICAgICAgICBlLl9hcmNQcm9ncmVzcyA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKGUpLnRvKGksIHtcbiAgICAgICAgICBfYXJjUHJvZ3Jlc3M6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodCwgaSwgbywgYykge1xuICAgICAgICAgICAgdmFyIHMgPSBjIDwgMC41ID8gMiAqIGMgKiBjIDogMSAtIE1hdGgucG93KC0yICogYyArIDIsIDIpIC8gMixcbiAgICAgICAgICAgICAgbCA9ICgxIC0gcykgKiAoMSAtIHMpICogYS54ICsgMiAqICgxIC0gcykgKiBzICogZiArIHMgKiBzICogci54LFxuICAgICAgICAgICAgICBkID0gKDEgLSBzKSAqICgxIC0gcykgKiBhLnkgKyAyICogKDEgLSBzKSAqIHMgKiB5ICsgcyAqIHMgKiByLnk7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKGUpICYmIChlLnBvc2l0aW9uID0gY2MudjMobCwgZCwgMCkpO1xuICAgICAgICAgICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgICAgICAgICB2YXIgdSA9IDIgKiAoMSAtIHMpICogKGYgLSBhLngpICsgMiAqIHMgKiAoci54IC0gZiksXG4gICAgICAgICAgICAgICAgcCA9IDIgKiAoMSAtIHMpICogKHkgLSBhLnkpICsgMiAqIHMgKiAoci55IC0geSksXG4gICAgICAgICAgICAgICAgaCA9IDE4MCAqIE1hdGguYXRhbjIocCwgdSkgLyBNYXRoLlBJIC0gOTA7XG4gICAgICAgICAgICAgIG4uYW5nbGUgPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHQgKyAoaSAtIHQpICogYztcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUucG9zaXRpb24gPSB0KTtcbiAgICAgICAgICBvKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgbygpO1xuICAgIH0pO1xuICB9XG4gIGRlbGF5KGUsIHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGkpIHtcbiAgICAgIGlmICghY2MuaXNWYWxpZChlKSB8fCB0IDw9IDApIHtcbiAgICAgICAgaSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MudHdlZW4oZSkuZGVsYXkodCkuY2FsbChpKS5zdGFydCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGhpZGVGbG93TGlnaHQoZSkge1xuICAgIHZhciB0ID0gZS5nZXRDaGlsZEJ5TmFtZShcIkRheGlhb0NhcmRUaXBOb2RlXCIpO1xuICAgIHQgJiYgKHQuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIHNob3dGbG93TGlnaHQoZSkge1xuICAgIHZhciB0ID0gZS5nZXRDaGlsZEJ5TmFtZShcIkRheGlhb0NhcmRUaXBOb2RlXCIpO1xuICAgIHQgJiYgKHQuYWN0aXZlID0gZmFsc2UpO1xuICAgIGlmICghZS5nZXRDaGlsZEJ5TmFtZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIikpIHtcbiAgICAgIHZhciBpID0gbmV3IGNjLk5vZGUoXCJEYXhpYW9GbG93TGlnaHROb2RlXCIpO1xuICAgICAgZS5hZGRDaGlsZChpKTtcbiAgICAgIGkuc2NhbGUgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGU7XG4gICAgICBpLnNldENvbnRlbnRTaXplKGUuZ2V0Q29udGVudFNpemUoKSk7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIHRoaXMuUkVTX0ZMT1dfTElHSFQsIHRoaXMuUkVTX0JVTkRMRSkuc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAxKTtcbiAgICB9XG4gIH1cbiAgcGxheUhpdEVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBCYXNlU3BpbmUuY3JlYXRlKHRoaXMuUkVTX0hJVF9TUElORSwgXCJnYW1lcGxheV9oaXRfZ2ZcIiwgMSwgbnVsbCwgZmFsc2UsIHRoaXMuUkVTX0JVTkRMRSk7XG4gICAgdC5ub2RlLnBhcmVudCA9IGU7XG4gICAgdC5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgdC5ub2RlLnpJbmRleCA9IDkwMDtcbiAgICB0Lm5vZGUuc2NhbGUgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGU7XG4gICAgdC5ub2RlLm5hbWUgPSBcIkRheGlhb0hpdFNwaW5lTm9kZVwiO1xuICB9XG4gIG9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgY2MuaXNWYWxpZChlLmNhcmROb2RlMSkgJiYgZS5jYXJkTm9kZTEuZGVzdHJveSgpO1xuICAgICAgY2MuaXNWYWxpZChlLmNhcmROb2RlMikgJiYgZS5jYXJkTm9kZTIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubWFza0xheWVyKSkge1xuICAgICAgdGhpcy5tYXNrTGF5ZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5tYXNrTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm1hc2tHcmFwaGljcyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0Lm9uQ29tcGxldGUgJiYgdGhpcy5jb250ZXh0Lm9uQ29tcGxldGUoKTtcbiAgfVxufSJdfQ==