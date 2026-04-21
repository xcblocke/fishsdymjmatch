
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_daxiaoAnim/Scripts/CaiDaiAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '381b0la4MBES6YQIE7dXJF6', 'CaiDaiAnimPlayer');
// subpackages/r_daxiaoAnim/Scripts/CaiDaiAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CaiDaiAnimPlayer = void 0;
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var CaiDaiAnimPlayer = /** @class */ (function () {
    function CaiDaiAnimPlayer(e, t) {
        this.nodeInfos = [];
        this.maskLayer = null;
        this.maskGraphics = null;
        this.context = null;
        this.config = null;
        this.context = e;
        this.config = t;
    }
    CaiDaiAnimPlayer.getConfig = function () {
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
    };
    CaiDaiAnimPlayer.playCaiDaiAnim = function (t, i) {
        var o, a, r, c, s = t.context, l = s.gameView.nodeTopEffectRoot, d = CaiDaiAnimPlayer.getConfig(), u = new CaiDaiAnimPlayer({
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
                var f = h.value, y = null === (r = t.context.getTileNodeByTileId(f.tileId1)) || void 0 === r ? void 0 : r.tileNode;
                y && u.hideFlowLight(y);
                var m = null === (c = t.context.getTileNodeByTileId(f.tileId2)) || void 0 === c ? void 0 : c.tileNode;
                m && u.hideFlowLight(m);
                f.cardNode1.active = false;
                f.cardNode2.active = false;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (a = p.return) && a.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        u.playFullAnimation(i);
    };
    CaiDaiAnimPlayer.prototype.playFullAnimation = function (e) {
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
    };
    CaiDaiAnimPlayer.prototype.playPhase1 = function () {
        var e = this, t = this.config.phase1, i = this.config.resources, n = this.context.getLastCollisionWorldPos(), o = this.context.effectNode.convertToNodeSpaceAR(n);
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
    };
    CaiDaiAnimPlayer.prototype.createSingleParticle = function (e, t, i, n, a, r, c, s) {
        var l = this;
        return new Promise(function (d) {
            var u = new cc.Node("CaiDaiParticle");
            u.parent = l.context.effectNode;
            u.position = e;
            u.scale = l.context.layoutScale;
            u.zIndex = 200;
            var p = BaseSprite_1.default.create(c.particle.path, c.particle.bundle);
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
    };
    CaiDaiAnimPlayer.prototype.playPhase2All = function () {
        for (var e = this, t = this.config.phase2, i = [], n = function n(n) {
            var a = o.nodeInfos[n], r = n * t.delay;
            i.push(o.delay(a.cardNode1, r).then(function () {
                return e.playPhase2(a.cardNode1, t);
            }));
            i.push(o.delay(a.cardNode2, r).then(function () {
                return e.playPhase2(a.cardNode2, t);
            }));
        }, o = this, a = 0; a < this.nodeInfos.length; a++)
            n(a);
        return Promise.all(i).then(function () { });
    };
    CaiDaiAnimPlayer.prototype.playPhase2 = function (e, t) {
        if (!cc.isValid(e))
            return Promise.resolve();
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
    };
    CaiDaiAnimPlayer.prototype.playPhase3All = function () {
        for (var e = this, t = this.config.phase3, i = [], n = function n(n) {
            var a = o.nodeInfos[n];
            i.push(o.delay(a.cardNode1, n * t.delay).then(function () {
                return e.playPhase3Single(a.cardNode1, a.targetPos1, t);
            }));
            i.push(o.delay(a.cardNode2, n * t.delay).then(function () {
                return e.playPhase3Single(a.cardNode2, a.targetPos2, t);
            }));
        }, o = this, a = 0; a < this.nodeInfos.length; a++)
            n(a);
        return Promise.all(i).then(function () {
            var i = e.maskLayer || (e.nodeInfos.length > 0 ? e.nodeInfos[0].cardNode1 : null);
            return i ? e.delay(i, t.phase4Delay) : Promise.resolve();
        });
    };
    CaiDaiAnimPlayer.prototype.playPhase3Single = function (e, t, i) {
        return cc.isValid(e) ? new Promise(function (n) {
            cc.tween(e).to(i.duration, {
                position: t,
                scale: 1
            }).call(n).start();
        }) : Promise.resolve();
    };
    CaiDaiAnimPlayer.prototype.playPhase4 = function () {
        for (var e = this, t = this.config.phase4, i = [], n = this.nodeInfos.length - 1; n >= 0; n--) {
            var o = this.nodeInfos[n], a = 0 === n, r = n === this.nodeInfos.length - 1, c = (this.nodeInfos.length - 1 - n) * t.delay;
            i.push(this.playSingleCollision(o, a, r, c));
        }
        return Promise.all(i).then(function () {
            cc.isValid(e.maskLayer) && e.fadeToWhite();
        });
    };
    CaiDaiAnimPlayer.prototype.playSingleCollision = function (e, t, i, n) {
        var o = this, a = cc.v3((e.cardNode1.x + e.cardNode2.x) / 2, (e.cardNode1.y + e.cardNode2.y) / 2, 0);
        return this.delay(e.cardNode1, n).then(function () {
            return o.playCollision([{
                    node1: e.cardNode1,
                    node2: e.cardNode2
                }], o.config.collision);
        }).then(function () {
            o.playCollisionEffects(a, t, i);
        });
    };
    CaiDaiAnimPlayer.prototype.playCollisionEffects = function (e, t, i) {
        var n = this.config.phase4, o = this.config.resources;
        if (n.collisionAnimations.length > 0) {
            var r = n.collisionAnimations[Math.floor(Math.random() * n.collisionAnimations.length)], c = BaseSpine_1.default.create(o.effectSpine.path, r, 1, null, true, o.effectSpine.bundle);
            c.node.parent = this.context.effectNode;
            c.node.position = e;
            c.node.zIndex = 500;
            if (t && n.topAdditionalAnim) {
                var s = BaseSpine_1.default.create(o.effectSpine.path, n.topAdditionalAnim, 1, null, true, o.effectSpine.bundle);
                s.node.parent = this.context.effectNode;
                var l = e.clone();
                l.y += n.topAdditionalAnimOffsetY;
                s.node.position = l;
                s.node.zIndex = 501;
            }
        }
        if (i && n.ribbonAnim) {
            var d = BaseSpine_1.default.create(o.backSpine.path, n.ribbonAnim, 1, null, true, o.backSpine.bundle);
            d.node.parent = this.context.effectNode;
            d.node.position = cc.v3(0, 0, 0);
            d.node.zIndex = 450;
        }
        if (i && n.ribbonBgAnim) {
            var u = BaseSpine_1.default.create(o.backSpine.path, n.ribbonBgAnim, 1, null, true, o.backSpine.bundle);
            u.node.parent = this.context.effectNode;
            u.node.position = cc.v3(0, 0, 0);
            u.node.zIndex = 400;
        }
    };
    CaiDaiAnimPlayer.prototype.playCollision = function (e, t) {
        var i, o;
        if (0 === e.length)
            return Promise.resolve();
        var a = function a(e, i) {
            if (!cc.isValid(e) || !cc.isValid(i))
                return "continue";
            var n = e.position.clone(), o = i.position.clone();
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
            var a = t.delay + t.outDuration, r = void 0, c = void 0;
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
                }
                else {
                    r = {
                        scale: t.scaleUp[0]
                    };
                    c = {
                        scale: 1
                    };
                }
            }
            else {
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
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = r.return) && o.call(r);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return this.delay(e[0].node1, t.delay + t.outDuration + t.inDuration);
    };
    CaiDaiAnimPlayer.prototype.fadeToDark = function () {
        var e = this, t = this.config.fade;
        if (cc.isValid(this.maskLayer) && this.maskGraphics) {
            var i = t.toDarkOpacity, n = cc.winSize;
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
    };
    CaiDaiAnimPlayer.prototype.fadeToWhite = function () {
        var e = this, t = this.config.fade;
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
    };
    CaiDaiAnimPlayer.prototype.hideFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
    };
    CaiDaiAnimPlayer.prototype.showFlowLight = function (e, t, i, n) {
        var o = e.getChildByName("DaxiaoCardTipNode");
        o && (o.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var r = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(r);
            r.scale = t;
            BaseSpine_1.default.refreshWithNode(r, i, n).setAnimation("init", -1, null, false);
        }
    };
    CaiDaiAnimPlayer.prototype.playHitEffect = function (e, t, i, n, o) {
        if (o === void 0) { o = true; }
        var r = BaseSpine_1.default.create(i, "in", 1, null, false, n);
        r.node.parent = o ? e : e.parent;
        r.node.position = o ? cc.v3(0, 0, 0) : e.position.clone();
        r.node.zIndex = o ? 900 : 300;
        r.node.scale = t;
        r.node.name = "DaxiaoHitSpineNode";
        return r;
    };
    CaiDaiAnimPlayer.prototype.onAnimationComplete = function () {
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
    };
    CaiDaiAnimPlayer.prototype.destroyNodes = function (e) {
        e.forEach(function (e) {
            return cc.isValid(e) && e.destroy();
        });
    };
    CaiDaiAnimPlayer.prototype.delay = function (e, t) {
        return new Promise(function (i) {
            if (!cc.isValid(e) || t <= 0) {
                i();
            }
            else {
                cc.tween(e).delay(t).call(i).start();
            }
        });
    };
    CaiDaiAnimPlayer.prototype.createBezierEasing = function (e, t, i, n) {
        return function (o) {
            if (0 === o || 1 === o)
                return o;
            for (var a = 0, r = 1, c = 0, s = 0; s < 10; s++) {
                var l = (a + r) / 2;
                c = 3 * (1 - l) * (1 - l) * l * e + 3 * (1 - l) * l * l * i + l * l * l;
                if (Math.abs(c - o) < 0.001)
                    break;
                if (c < o) {
                    a = l;
                }
                else {
                    r = l;
                }
            }
            var d = (a + r) / 2;
            return 3 * (1 - d) * (1 - d) * d * t + 3 * (1 - d) * d * d * n + d * d * d;
        };
    };
    CaiDaiAnimPlayer.prototype.setupPositions = function (e, t) {
        var i = e[0].cardNode1.getContentSize().height, n = e[0].cardNode1.getContentSize().width;
        if (e.length % 2 == 0) {
            this.setupEvenPositions(e, n, i, t);
        }
        else {
            this.setupOddPositions(e, n, i, t);
        }
    };
    CaiDaiAnimPlayer.prototype.setupEvenPositions = function (e, t, i, n) {
        var o = e.length, a = o / 2, r = i + n, c = o * r / 2;
        e.forEach(function (e, i) {
            var n, s = c - i * r;
            n = i < a ? t / 2 + i * (t / 2) : t / 2 + t / 2 * (o - 1 - i);
            e.targetPos1 = cc.v3(-n, s, 0);
            e.targetPos2 = cc.v3(n, s, 0);
            var l = Math.floor(-s);
            e.cardNode1.zIndex = l;
            e.cardNode2.zIndex = l + 1;
        });
    };
    CaiDaiAnimPlayer.prototype.setupOddPositions = function (e, t, i, n) {
        var o = e.length, a = Math.floor(o / 2), r = i + n, c = o * r / 2;
        e.forEach(function (e, i) {
            var n, s = c - i * r;
            n = i <= a ? t / 2 + i * (t / 2) : t / 2 + t / 2 * (o - 1 - i);
            e.targetPos1 = cc.v3(-n, s, 0);
            e.targetPos2 = cc.v3(n, s, 0);
            var l = Math.floor(-s);
            e.cardNode1.zIndex = l;
            e.cardNode2.zIndex = l + 1;
        });
    };
    return CaiDaiAnimPlayer;
}());
exports.CaiDaiAnimPlayer = CaiDaiAnimPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RheGlhb0FuaW0vU2NyaXB0cy9DYWlEYWlBbmltUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQXNFO0FBQ3RFLHlFQUFvRTtBQUNwRTtJQU1FLDBCQUFZLENBQUMsRUFBRSxDQUFDO1FBTGhCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRVosSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNNLDBCQUFTLEdBQWhCO1FBQ0UsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ25DLGNBQWMsRUFBRSxHQUFHO2FBQ3BCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsQ0FBQztnQkFDUixXQUFXLEVBQUUsTUFBTTthQUNwQjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsSUFBSTtnQkFDWCxtQkFBbUIsRUFBRSxDQUFDLEtB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VCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQXBqQkEsQUFvakJDLElBQUE7QUFwakJZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5leHBvcnQgY2xhc3MgQ2FpRGFpQW5pbVBsYXllciB7XG4gIG5vZGVJbmZvcyA9IFtdO1xuICBtYXNrTGF5ZXIgPSBudWxsO1xuICBtYXNrR3JhcGhpY3MgPSBudWxsO1xuICBjb250ZXh0ID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZSwgdCkge1xuICAgIHRoaXMuY29udGV4dCA9IGU7XG4gICAgdGhpcy5jb25maWcgPSB0O1xuICB9XG4gIHN0YXRpYyBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBoYXNlMToge1xuICAgICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgICAgZGVsYXk6IDAuMDMsXG4gICAgICAgIGZhZGVUaW1lOiAwLjE1LFxuICAgICAgICBzdHJva2U6IDMyLFxuICAgICAgICBjb2xvcjogY2MuY29sb3IoMjU1LCAyMDAsIDEwMCwgMjU1KSxcbiAgICAgICAgZmxvd0xpZ2h0RGVsYXk6IDAuMlxuICAgICAgfSxcbiAgICAgIHBoYXNlMjoge1xuICAgICAgICBkdXJhdGlvbjogWzAuMTMsIDAuMl0sXG4gICAgICAgIG1vdmVZOiBbMTAwLCAtMzBdLFxuICAgICAgICBkZWxheTogMC4wNjZcbiAgICAgIH0sXG4gICAgICBwaGFzZTM6IHtcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIHBoYXNlNERlbGF5OiAwLjAxNjdcbiAgICAgIH0sXG4gICAgICBwaGFzZTQ6IHtcbiAgICAgICAgZGVsYXk6IDAuMDQsXG4gICAgICAgIGNvbGxpc2lvbkFuaW1hdGlvbnM6IFtcImluMVwiLCBcImluMlwiLCBcImluM1wiXSxcbiAgICAgICAgdG9wQWRkaXRpb25hbEFuaW06IFwiaW40X3RvcFwiLFxuICAgICAgICB0b3BBZGRpdGlvbmFsQW5pbU9mZnNldFk6IDAsXG4gICAgICAgIHJpYmJvbkFuaW06IFwiaW4yXCIsXG4gICAgICAgIHJpYmJvbkJnQW5pbTogXCJpbjNcIlxuICAgICAgfSxcbiAgICAgIGNvbGxpc2lvbjoge1xuICAgICAgICBkZWxheTogMC4wOCxcbiAgICAgICAgb3V0RHVyYXRpb246IDAuMTMsXG4gICAgICAgIGluRHVyYXRpb246IDAuMDY4LFxuICAgICAgICBvdXREaXN0YW5jZTogMTAwLFxuICAgICAgICBzY2FsZVVwOiAxLjEsXG4gICAgICAgIHNjYWxlRHVyYXRpb24xOiAwLjA2LFxuICAgICAgICBzY2FsZUR1cmF0aW9uMjogMC4wM1xuICAgICAgfSxcbiAgICAgIGZhZGU6IHtcbiAgICAgICAgdG9EYXJrT3BhY2l0eTogNzcsXG4gICAgICAgIHRvRGFya0R1cmF0aW9uOiAyLFxuICAgICAgICB0b1doaXRlRHVyYXRpb246IDAuNVxuICAgICAgfSxcbiAgICAgIHJlc291cmNlczoge1xuICAgICAgICBwYXJ0aWNsZToge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9jYWlkYWkvZ2FtZXBsYXlfdHJhaWxpbmdFbGVtZW50XCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvY2FpZGFpXCJcbiAgICAgICAgfSxcbiAgICAgICAgdHJhaWxUZXh0dXJlOiB7XG4gICAgICAgICAgcGF0aDogXCJ0ZXh0dXJlL2NhaWRhaS9nYW1lcGxheV9zdGFyX3RhaWxcIixcbiAgICAgICAgICBidW5kbGU6IFwicl9kYXhpYW9jYWlkYWlcIlxuICAgICAgICB9LFxuICAgICAgICBoaXRTcGluZToge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvY2FpZGFpL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiLFxuICAgICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2NhaWRhaVwiXG4gICAgICAgIH0sXG4gICAgICAgIGZsb3dMaWdodDoge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvY2FpZGFpL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiLFxuICAgICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2NhaWRhaVwiXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tTcGluZToge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvY2FpZGFpL2dhbWVwbGF5X3JpYmJvblwiLFxuICAgICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2NhaWRhaVwiXG4gICAgICAgIH0sXG4gICAgICAgIGVmZmVjdFNwaW5lOiB7XG4gICAgICAgICAgcGF0aDogXCJzcGluZS9jYWlkYWkvZ2FtZXBsYXlfZWxpbWluYXRpb25fZWZmZWN0XCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvY2FpZGFpXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgc3RhdGljIHBsYXlDYWlEYWlBbmltKHQsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIGEsXG4gICAgICByLFxuICAgICAgYyxcbiAgICAgIHMgPSB0LmNvbnRleHQsXG4gICAgICBsID0gcy5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdCxcbiAgICAgIGQgPSBDYWlEYWlBbmltUGxheWVyLmdldENvbmZpZygpLFxuICAgICAgdSA9IG5ldyBDYWlEYWlBbmltUGxheWVyKHtcbiAgICAgICAgZWZmZWN0Tm9kZTogbCxcbiAgICAgICAgbGF5b3V0U2NhbGU6IHMubGF5b3V0U2NhbGUsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdC5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSZXM6IGZ1bmN0aW9uIChlLCB0LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHMuZ2FtZUN0ci5sb2FkUmVzKGUsIHQsIGkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUaWxlTm9kZVBvczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgaSA9IHMuZ2V0VGlsZU5vZGVNYXAoKS5nZXQoZSk7XG4gICAgICAgICAgcmV0dXJuIGkgPyB0LnRvTG9jYWxQb3MoaS5jYXJkTm9kZSwgbCkgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUaWxlTm9kZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzLnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRpbGVPYmplY3Q6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBzLmdldFRpbGVOb2RlTWFwKCkuZ2V0KGUpO1xuICAgICAgICAgIHJldHVybiB0ID8gdC5pbmZvLnRpbGVPYmplY3QgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSYW5kb21JbmRleGVzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBzLnJhbmRvbUdlbmVyYXRvci5zaHVmZmxlKEFycmF5LmZyb20oe1xuICAgICAgICAgICAgbGVuZ3RoOiBlXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2FyZFNwYWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIGdldExhc3RDb2xsaXNpb25Xb3JsZFBvczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBzLmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpO1xuICAgICAgICB9XG4gICAgICB9LCBkKTtcbiAgICB1LnNldHVwUG9zaXRpb25zKGksIDApO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMoaSksIGggPSBwLm5leHQoKTsgIWguZG9uZTsgaCA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBmID0gaC52YWx1ZSxcbiAgICAgICAgICB5ID0gbnVsbCA9PT0gKHIgPSB0LmNvbnRleHQuZ2V0VGlsZU5vZGVCeVRpbGVJZChmLnRpbGVJZDEpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnRpbGVOb2RlO1xuICAgICAgICB5ICYmIHUuaGlkZUZsb3dMaWdodCh5KTtcbiAgICAgICAgdmFyIG0gPSBudWxsID09PSAoYyA9IHQuY29udGV4dC5nZXRUaWxlTm9kZUJ5VGlsZUlkKGYudGlsZUlkMikpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGMudGlsZU5vZGU7XG4gICAgICAgIG0gJiYgdS5oaWRlRmxvd0xpZ2h0KG0pO1xuICAgICAgICBmLmNhcmROb2RlMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZi5jYXJkTm9kZTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAoYSA9IHAucmV0dXJuKSAmJiBhLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdS5wbGF5RnVsbEFuaW1hdGlvbihpKTtcbiAgfVxuICBwbGF5RnVsbEFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubm9kZUluZm9zID0gZTtcbiAgICB0aGlzLm1hc2tMYXllciA9IG5ldyBjYy5Ob2RlKFwiQ2FpRGFpTWFza0xheWVyXCIpO1xuICAgIHRoaXMubWFza0xheWVyLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIHRoaXMubWFza0xheWVyLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgdGhpcy5tYXNrTGF5ZXIuekluZGV4ID0gLTEwMDA7XG4gICAgdGhpcy5tYXNrTGF5ZXIuX2ZhZGVBbHBoYSA9IDA7XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MgPSB0aGlzLm1hc2tMYXllci5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgIHZhciBpID0gY2Mud2luU2l6ZTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5yZWN0KC1pLndpZHRoIC8gMiwgLWkuaGVpZ2h0IC8gMiwgaS53aWR0aCwgaS5oZWlnaHQpO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAwKTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsKCk7XG4gICAgcmV0dXJuIHRoaXMucGxheVBoYXNlMSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucGxheVBoYXNlMkFsbCgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucGxheVBoYXNlM0FsbCgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucGxheVBoYXNlNCgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25BbmltYXRpb25Db21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTEoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHRoaXMuY29uZmlnLnBoYXNlMSxcbiAgICAgIGkgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMsXG4gICAgICBuID0gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQubG9hZFJlcyhpLnRyYWlsVGV4dHVyZS5wYXRoLCBjYy5TcHJpdGVGcmFtZSwgaS50cmFpbFRleHR1cmUuYnVuZGxlKS50aGVuKGZ1bmN0aW9uIChuKSB7XG4gICAgICBpZiAobikge1xuICAgICAgICBmb3IgKHZhciBhID0gW10sIHIgPSAwLCBjID0gMDsgYyA8IGUubm9kZUluZm9zLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgdmFyIHMgPSBlLm5vZGVJbmZvc1tjXTtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChzLmNhcmROb2RlMSkgJiYgY2MuaXNWYWxpZChzLmNhcmROb2RlMikpIHtcbiAgICAgICAgICAgIHZhciBsID0gZS5jcmVhdGVTaW5nbGVQYXJ0aWNsZShvLCBzLmNhcmROb2RlMS5wb3NpdGlvbiwgcy5jYXJkTm9kZTEsIHMudGlsZUlkMSwgcisrLCB0LCBpLCBuKTtcbiAgICAgICAgICAgIGEucHVzaChsKTtcbiAgICAgICAgICAgIHZhciBkID0gZS5jcmVhdGVTaW5nbGVQYXJ0aWNsZShvLCBzLmNhcmROb2RlMi5wb3NpdGlvbiwgcy5jYXJkTm9kZTIsIHMudGlsZUlkMiwgcisrLCB0LCBpLCBuKTtcbiAgICAgICAgICAgIGEucHVzaChkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUuZmFkZVRvRGFyaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjcmVhdGVTaW5nbGVQYXJ0aWNsZShlLCB0LCBpLCBuLCBhLCByLCBjLCBzKSB7XG4gICAgdmFyIGwgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZCkge1xuICAgICAgdmFyIHUgPSBuZXcgY2MuTm9kZShcIkNhaURhaVBhcnRpY2xlXCIpO1xuICAgICAgdS5wYXJlbnQgPSBsLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgIHUucG9zaXRpb24gPSBlO1xuICAgICAgdS5zY2FsZSA9IGwuY29udGV4dC5sYXlvdXRTY2FsZTtcbiAgICAgIHUuekluZGV4ID0gMjAwO1xuICAgICAgdmFyIHAgPSBCYXNlU3ByaXRlLmNyZWF0ZShjLnBhcnRpY2xlLnBhdGgsIGMucGFydGljbGUuYnVuZGxlKTtcbiAgICAgIHAgJiYgcC5ub2RlICYmIChwLm5vZGUucGFyZW50ID0gdSk7XG4gICAgICB2YXIgaCA9IHUuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICBoLmZhZGVUaW1lID0gci5mYWRlVGltZTtcbiAgICAgIGgubWluU2VnID0gMTtcbiAgICAgIGguc3Ryb2tlID0gci5zdHJva2U7XG4gICAgICBoLnRleHR1cmUgPSBzLmdldFRleHR1cmUoKTtcbiAgICAgIGguY29sb3IgPSByLmNvbG9yO1xuICAgICAgdmFyIGYgPSBhICogci5kZWxheTtcbiAgICAgIGNjLnR3ZWVuKHUpLmRlbGF5KGYpLnRvKHIuZHVyYXRpb24sIHtcbiAgICAgICAgcG9zaXRpb246IHRcbiAgICAgIH0sIHt9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZCh1KSAmJiB1LmRlc3Ryb3koKTtcbiAgICAgICAgbC5jb250ZXh0LnJlbW92ZVRpbGVOb2RlKG4pO1xuICAgICAgICBpLnBvc2l0aW9uID0gdDtcbiAgICAgICAgaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICAgIGwucGxheUhpdEVmZmVjdChpLCBsLmNvbnRleHQubGF5b3V0U2NhbGUsIGMuaGl0U3BpbmUucGF0aCwgYy5oaXRTcGluZS5idW5kbGUsIHRydWUpO1xuICAgICAgICAgIGNjLnR3ZWVuKGkpLmRlbGF5KHIuZmxvd0xpZ2h0RGVsYXkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuaXNWYWxpZChpKSAmJiBsLnNob3dGbG93TGlnaHQoaSwgbC5jb250ZXh0LmxheW91dFNjYWxlLCBjLmZsb3dMaWdodC5wYXRoLCBjLmZsb3dMaWdodC5idW5kbGUpO1xuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZCgpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UGhhc2UyQWxsKCkge1xuICAgIGZvciAodmFyIGUgPSB0aGlzLCB0ID0gdGhpcy5jb25maWcucGhhc2UyLCBpID0gW10sIG4gPSBmdW5jdGlvbiBuKG4pIHtcbiAgICAgICAgdmFyIGEgPSBvLm5vZGVJbmZvc1tuXSxcbiAgICAgICAgICByID0gbiAqIHQuZGVsYXk7XG4gICAgICAgIGkucHVzaChvLmRlbGF5KGEuY2FyZE5vZGUxLCByKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZS5wbGF5UGhhc2UyKGEuY2FyZE5vZGUxLCB0KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpLnB1c2goby5kZWxheShhLmNhcmROb2RlMiwgcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUucGxheVBoYXNlMihhLmNhcmROb2RlMiwgdCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0sIG8gPSB0aGlzLCBhID0gMDsgYSA8IHRoaXMubm9kZUluZm9zLmxlbmd0aDsgYSsrKSBuKGEpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChpKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBwbGF5UGhhc2UyKGUsIHQpIHtcbiAgICBpZiAoIWNjLmlzVmFsaWQoZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBmb3IgKHZhciBpID0gQXJyYXkuaXNBcnJheSh0LmR1cmF0aW9uKSA/IHQuZHVyYXRpb24gOiBbdC5kdXJhdGlvbl0sIG4gPSBBcnJheS5pc0FycmF5KHQubW92ZVkpID8gdC5tb3ZlWSA6IFt0Lm1vdmVZXSwgbyA9IGNjLnR3ZWVuKGUpLCBhID0gZS55LCByID0gMDsgciA8IGkubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBjID0gaVtyXTtcbiAgICAgIGEgKz0gdm9pZCAwICE9PSBuW3JdID8gbltyXSA6IDA7XG4gICAgICBvID0gby50byhjLCB7XG4gICAgICAgIHk6IGFcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgIG8uY2FsbChlKS5zdGFydCgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTNBbGwoKSB7XG4gICAgZm9yICh2YXIgZSA9IHRoaXMsIHQgPSB0aGlzLmNvbmZpZy5waGFzZTMsIGkgPSBbXSwgbiA9IGZ1bmN0aW9uIG4obikge1xuICAgICAgICB2YXIgYSA9IG8ubm9kZUluZm9zW25dO1xuICAgICAgICBpLnB1c2goby5kZWxheShhLmNhcmROb2RlMSwgbiAqIHQuZGVsYXkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLnBsYXlQaGFzZTNTaW5nbGUoYS5jYXJkTm9kZTEsIGEudGFyZ2V0UG9zMSwgdCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaS5wdXNoKG8uZGVsYXkoYS5jYXJkTm9kZTIsIG4gKiB0LmRlbGF5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZS5wbGF5UGhhc2UzU2luZ2xlKGEuY2FyZE5vZGUyLCBhLnRhcmdldFBvczIsIHQpO1xuICAgICAgICB9KSk7XG4gICAgICB9LCBvID0gdGhpcywgYSA9IDA7IGEgPCB0aGlzLm5vZGVJbmZvcy5sZW5ndGg7IGErKykgbihhKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoaSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSA9IGUubWFza0xheWVyIHx8IChlLm5vZGVJbmZvcy5sZW5ndGggPiAwID8gZS5ub2RlSW5mb3NbMF0uY2FyZE5vZGUxIDogbnVsbCk7XG4gICAgICByZXR1cm4gaSA/IGUuZGVsYXkoaSwgdC5waGFzZTREZWxheSkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UGhhc2UzU2luZ2xlKGUsIHQsIGkpIHtcbiAgICByZXR1cm4gY2MuaXNWYWxpZChlKSA/IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuKSB7XG4gICAgICBjYy50d2VlbihlKS50byhpLmR1cmF0aW9uLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0LFxuICAgICAgICBzY2FsZTogMVxuICAgICAgfSkuY2FsbChuKS5zdGFydCgpO1xuICAgIH0pIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgcGxheVBoYXNlNCgpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcywgdCA9IHRoaXMuY29uZmlnLnBoYXNlNCwgaSA9IFtdLCBuID0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgIHZhciBvID0gdGhpcy5ub2RlSW5mb3Nbbl0sXG4gICAgICAgIGEgPSAwID09PSBuLFxuICAgICAgICByID0gbiA9PT0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoIC0gMSxcbiAgICAgICAgYyA9ICh0aGlzLm5vZGVJbmZvcy5sZW5ndGggLSAxIC0gbikgKiB0LmRlbGF5O1xuICAgICAgaS5wdXNoKHRoaXMucGxheVNpbmdsZUNvbGxpc2lvbihvLCBhLCByLCBjKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUuZmFkZVRvV2hpdGUoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5U2luZ2xlQ29sbGlzaW9uKGUsIHQsIGksIG4pIHtcbiAgICB2YXIgbyA9IHRoaXMsXG4gICAgICBhID0gY2MudjMoKGUuY2FyZE5vZGUxLnggKyBlLmNhcmROb2RlMi54KSAvIDIsIChlLmNhcmROb2RlMS55ICsgZS5jYXJkTm9kZTIueSkgLyAyLCAwKTtcbiAgICByZXR1cm4gdGhpcy5kZWxheShlLmNhcmROb2RlMSwgbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gby5wbGF5Q29sbGlzaW9uKFt7XG4gICAgICAgIG5vZGUxOiBlLmNhcmROb2RlMSxcbiAgICAgICAgbm9kZTI6IGUuY2FyZE5vZGUyXG4gICAgICB9XSwgby5jb25maWcuY29sbGlzaW9uKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8ucGxheUNvbGxpc2lvbkVmZmVjdHMoYSwgdCwgaSk7XG4gICAgfSk7XG4gIH1cbiAgcGxheUNvbGxpc2lvbkVmZmVjdHMoZSwgdCwgaSkge1xuICAgIHZhciBuID0gdGhpcy5jb25maWcucGhhc2U0LFxuICAgICAgbyA9IHRoaXMuY29uZmlnLnJlc291cmNlcztcbiAgICBpZiAobi5jb2xsaXNpb25BbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciByID0gbi5jb2xsaXNpb25BbmltYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4uY29sbGlzaW9uQW5pbWF0aW9ucy5sZW5ndGgpXSxcbiAgICAgICAgYyA9IEJhc2VTcGluZS5jcmVhdGUoby5lZmZlY3RTcGluZS5wYXRoLCByLCAxLCBudWxsLCB0cnVlLCBvLmVmZmVjdFNwaW5lLmJ1bmRsZSk7XG4gICAgICBjLm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgICBjLm5vZGUucG9zaXRpb24gPSBlO1xuICAgICAgYy5ub2RlLnpJbmRleCA9IDUwMDtcbiAgICAgIGlmICh0ICYmIG4udG9wQWRkaXRpb25hbEFuaW0pIHtcbiAgICAgICAgdmFyIHMgPSBCYXNlU3BpbmUuY3JlYXRlKG8uZWZmZWN0U3BpbmUucGF0aCwgbi50b3BBZGRpdGlvbmFsQW5pbSwgMSwgbnVsbCwgdHJ1ZSwgby5lZmZlY3RTcGluZS5idW5kbGUpO1xuICAgICAgICBzLm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgICAgIHZhciBsID0gZS5jbG9uZSgpO1xuICAgICAgICBsLnkgKz0gbi50b3BBZGRpdGlvbmFsQW5pbU9mZnNldFk7XG4gICAgICAgIHMubm9kZS5wb3NpdGlvbiA9IGw7XG4gICAgICAgIHMubm9kZS56SW5kZXggPSA1MDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpICYmIG4ucmliYm9uQW5pbSkge1xuICAgICAgdmFyIGQgPSBCYXNlU3BpbmUuY3JlYXRlKG8uYmFja1NwaW5lLnBhdGgsIG4ucmliYm9uQW5pbSwgMSwgbnVsbCwgdHJ1ZSwgby5iYWNrU3BpbmUuYnVuZGxlKTtcbiAgICAgIGQubm9kZS5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgIGQubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgZC5ub2RlLnpJbmRleCA9IDQ1MDtcbiAgICB9XG4gICAgaWYgKGkgJiYgbi5yaWJib25CZ0FuaW0pIHtcbiAgICAgIHZhciB1ID0gQmFzZVNwaW5lLmNyZWF0ZShvLmJhY2tTcGluZS5wYXRoLCBuLnJpYmJvbkJnQW5pbSwgMSwgbnVsbCwgdHJ1ZSwgby5iYWNrU3BpbmUuYnVuZGxlKTtcbiAgICAgIHUubm9kZS5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgIHUubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgdS5ub2RlLnpJbmRleCA9IDQwMDtcbiAgICB9XG4gIH1cbiAgcGxheUNvbGxpc2lvbihlLCB0KSB7XG4gICAgdmFyIGksIG87XG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGEgPSBmdW5jdGlvbiBhKGUsIGkpIHtcbiAgICAgIGlmICghY2MuaXNWYWxpZChlKSB8fCAhY2MuaXNWYWxpZChpKSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgIHZhciBuID0gZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICBvID0gaS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgY2MudHdlZW4oZSkuZGVsYXkodC5kZWxheSkudG8odC5vdXREdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54IC0gdC5vdXREaXN0YW5jZSwgbi55LCAwKVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhcnRJbk91dFwiXG4gICAgICB9KS50byh0LmluRHVyYXRpb24sIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIG4ueSwgMClcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKGkpLmRlbGF5KHQuZGVsYXkpLnRvKHQub3V0RHVyYXRpb24sIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKG8ueCArIHQub3V0RGlzdGFuY2UsIG8ueSwgMClcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgICAgfSkudG8odC5pbkR1cmF0aW9uLCB7XG4gICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCBvLnksIDApXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFydEluT3V0XCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKGkpICYmIChpLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB2YXIgYSA9IHQuZGVsYXkgKyB0Lm91dER1cmF0aW9uLFxuICAgICAgICByID0gdm9pZCAwLFxuICAgICAgICBjID0gdm9pZCAwO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodC5zY2FsZVVwKSkge1xuICAgICAgICBpZiAodC5zY2FsZVVwLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgciA9IHtcbiAgICAgICAgICAgIHNjYWxlWDogdC5zY2FsZVVwWzBdLFxuICAgICAgICAgICAgc2NhbGVZOiB0LnNjYWxlVXBbMV1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGMgPSB7XG4gICAgICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgICAgICBzY2FsZVk6IDFcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICBzY2FsZTogdC5zY2FsZVVwWzBdXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByID0ge1xuICAgICAgICAgIHNjYWxlOiB0LnNjYWxlVXBcbiAgICAgICAgfTtcbiAgICAgICAgYyA9IHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY2MudHdlZW4oZSkuZGVsYXkoYSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUuc2NhbGUgPSAxKTtcbiAgICAgIH0pLnRvKHQuc2NhbGVEdXJhdGlvbjEsIHIpLnRvKHQuc2NhbGVEdXJhdGlvbjIsIGMpLnN0YXJ0KCk7XG4gICAgICBjYy50d2VlbihpKS5kZWxheShhKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZChpKSAmJiAoaS5zY2FsZSA9IDEpO1xuICAgICAgfSkudG8odC5zY2FsZUR1cmF0aW9uMSwgcikudG8odC5zY2FsZUR1cmF0aW9uMiwgYykuc3RhcnQoKTtcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXMoZSksIGMgPSByLm5leHQoKTsgIWMuZG9uZTsgYyA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gYy52YWx1ZTtcbiAgICAgICAgYShzLm5vZGUxLCBzLm5vZGUyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChvID0gci5yZXR1cm4pICYmIG8uY2FsbChyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWxheShlWzBdLm5vZGUxLCB0LmRlbGF5ICsgdC5vdXREdXJhdGlvbiArIHQuaW5EdXJhdGlvbik7XG4gIH1cbiAgZmFkZVRvRGFyaygpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5jb25maWcuZmFkZTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBpID0gdC50b0RhcmtPcGFjaXR5LFxuICAgICAgICBuID0gY2Mud2luU2l6ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubWFza0xheWVyKS50byh0LnRvRGFya0R1cmF0aW9uLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IGlcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh0LCBpLCBvLCBhKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IHQgKyAoaSAtIHQpICogYTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBlLm1hc2tHcmFwaGljcy5yZWN0KC1uLndpZHRoIC8gMiwgLW4uaGVpZ2h0IC8gMiwgbi53aWR0aCwgbi5oZWlnaHQpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdCArIChpIC0gdCkgKiBhO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBmYWRlVG9XaGl0ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5jb25maWcuZmFkZTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBpID0gY2Mud2luU2l6ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubWFza0xheWVyKS50byh0LnRvV2hpdGVEdXJhdGlvbiwge1xuICAgICAgICBfZmFkZUFscGhhOiAwXG4gICAgICB9LCB7XG4gICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodCwgbiwgbywgYSkge1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKGUubWFza0xheWVyKSAmJiBlLm1hc2tHcmFwaGljcykge1xuICAgICAgICAgICAgdmFyIHIgPSB0ICsgKG4gLSB0KSAqIGE7XG4gICAgICAgICAgICBlLm1hc2tHcmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MucmVjdCgtaS53aWR0aCAvIDIsIC1pLmhlaWdodCAvIDIsIGkud2lkdGgsIGkuaGVpZ2h0KTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCByKTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHQgKyAobiAtIHQpICogYTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgaGlkZUZsb3dMaWdodChlKSB7XG4gICAgdmFyIHQgPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgdCAmJiAodC5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgc2hvd0Zsb3dMaWdodChlLCB0LCBpLCBuKSB7XG4gICAgdmFyIG8gPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgbyAmJiAoby5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKCFlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKSkge1xuICAgICAgdmFyIHIgPSBuZXcgY2MuTm9kZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIik7XG4gICAgICBlLmFkZENoaWxkKHIpO1xuICAgICAgci5zY2FsZSA9IHQ7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHIsIGksIG4pLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgcGxheUhpdEVmZmVjdChlLCB0LCBpLCBuLCBvID0gdHJ1ZSkge1xuICAgIHZhciByID0gQmFzZVNwaW5lLmNyZWF0ZShpLCBcImluXCIsIDEsIG51bGwsIGZhbHNlLCBuKTtcbiAgICByLm5vZGUucGFyZW50ID0gbyA/IGUgOiBlLnBhcmVudDtcbiAgICByLm5vZGUucG9zaXRpb24gPSBvID8gY2MudjMoMCwgMCwgMCkgOiBlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgci5ub2RlLnpJbmRleCA9IG8gPyA5MDAgOiAzMDA7XG4gICAgci5ub2RlLnNjYWxlID0gdDtcbiAgICByLm5vZGUubmFtZSA9IFwiRGF4aWFvSGl0U3BpbmVOb2RlXCI7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgb25BbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgZSA9IFtdO1xuICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUucHVzaCh0LmNhcmROb2RlMSwgdC5jYXJkTm9kZTIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGVzdHJveU5vZGVzKGUpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubWFza0xheWVyKSkge1xuICAgICAgdGhpcy5tYXNrTGF5ZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5tYXNrTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm1hc2tHcmFwaGljcyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0Lm9uQ29tcGxldGUgJiYgdGhpcy5jb250ZXh0Lm9uQ29tcGxldGUoKTtcbiAgfVxuICBkZXN0cm95Tm9kZXMoZSkge1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGNjLmlzVmFsaWQoZSkgJiYgZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgZGVsYXkoZSwgdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKGUpIHx8IHQgPD0gMCkge1xuICAgICAgICBpKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy50d2VlbihlKS5kZWxheSh0KS5jYWxsKGkpLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlQmV6aWVyRWFzaW5nKGUsIHQsIGksIG4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmICgwID09PSBvIHx8IDEgPT09IG8pIHJldHVybiBvO1xuICAgICAgZm9yICh2YXIgYSA9IDAsIHIgPSAxLCBjID0gMCwgcyA9IDA7IHMgPCAxMDsgcysrKSB7XG4gICAgICAgIHZhciBsID0gKGEgKyByKSAvIDI7XG4gICAgICAgIGMgPSAzICogKDEgLSBsKSAqICgxIC0gbCkgKiBsICogZSArIDMgKiAoMSAtIGwpICogbCAqIGwgKiBpICsgbCAqIGwgKiBsO1xuICAgICAgICBpZiAoTWF0aC5hYnMoYyAtIG8pIDwgMC4wMDEpIGJyZWFrO1xuICAgICAgICBpZiAoYyA8IG8pIHtcbiAgICAgICAgICBhID0gbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByID0gbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGQgPSAoYSArIHIpIC8gMjtcbiAgICAgIHJldHVybiAzICogKDEgLSBkKSAqICgxIC0gZCkgKiBkICogdCArIDMgKiAoMSAtIGQpICogZCAqIGQgKiBuICsgZCAqIGQgKiBkO1xuICAgIH07XG4gIH1cbiAgc2V0dXBQb3NpdGlvbnMoZSwgdCkge1xuICAgIHZhciBpID0gZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQsXG4gICAgICBuID0gZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS53aWR0aDtcbiAgICBpZiAoZS5sZW5ndGggJSAyID09IDApIHtcbiAgICAgIHRoaXMuc2V0dXBFdmVuUG9zaXRpb25zKGUsIG4sIGksIHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHVwT2RkUG9zaXRpb25zKGUsIG4sIGksIHQpO1xuICAgIH1cbiAgfVxuICBzZXR1cEV2ZW5Qb3NpdGlvbnMoZSwgdCwgaSwgbikge1xuICAgIHZhciBvID0gZS5sZW5ndGgsXG4gICAgICBhID0gbyAvIDIsXG4gICAgICByID0gaSArIG4sXG4gICAgICBjID0gbyAqIHIgLyAyO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgdmFyIG4sXG4gICAgICAgIHMgPSBjIC0gaSAqIHI7XG4gICAgICBuID0gaSA8IGEgPyB0IC8gMiArIGkgKiAodCAvIDIpIDogdCAvIDIgKyB0IC8gMiAqIChvIC0gMSAtIGkpO1xuICAgICAgZS50YXJnZXRQb3MxID0gY2MudjMoLW4sIHMsIDApO1xuICAgICAgZS50YXJnZXRQb3MyID0gY2MudjMobiwgcywgMCk7XG4gICAgICB2YXIgbCA9IE1hdGguZmxvb3IoLXMpO1xuICAgICAgZS5jYXJkTm9kZTEuekluZGV4ID0gbDtcbiAgICAgIGUuY2FyZE5vZGUyLnpJbmRleCA9IGwgKyAxO1xuICAgIH0pO1xuICB9XG4gIHNldHVwT2RkUG9zaXRpb25zKGUsIHQsIGksIG4pIHtcbiAgICB2YXIgbyA9IGUubGVuZ3RoLFxuICAgICAgYSA9IE1hdGguZmxvb3IobyAvIDIpLFxuICAgICAgciA9IGkgKyBuLFxuICAgICAgYyA9IG8gKiByIC8gMjtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgIHZhciBuLFxuICAgICAgICBzID0gYyAtIGkgKiByO1xuICAgICAgbiA9IGkgPD0gYSA/IHQgLyAyICsgaSAqICh0IC8gMikgOiB0IC8gMiArIHQgLyAyICogKG8gLSAxIC0gaSk7XG4gICAgICBlLnRhcmdldFBvczEgPSBjYy52MygtbiwgcywgMCk7XG4gICAgICBlLnRhcmdldFBvczIgPSBjYy52MyhuLCBzLCAwKTtcbiAgICAgIHZhciBsID0gTWF0aC5mbG9vcigtcyk7XG4gICAgICBlLmNhcmROb2RlMS56SW5kZXggPSBsO1xuICAgICAgZS5jYXJkTm9kZTIuekluZGV4ID0gbCArIDE7XG4gICAgfSk7XG4gIH1cbn0iXX0=