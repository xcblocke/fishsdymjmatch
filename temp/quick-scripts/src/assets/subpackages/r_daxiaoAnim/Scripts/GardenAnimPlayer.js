"use strict";
cc._RF.push(module, 'd0c924IqNNN07Xz4bmR5K99', 'GardenAnimPlayer');
// subpackages/r_daxiaoAnim/Scripts/GardenAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GardenAnimPlayer = void 0;
var BaseTileNode_1 = require("../../../Scripts/BaseTileNode");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GardenAnimPlayer = /** @class */ (function () {
    function GardenAnimPlayer(e, t) {
        this.nodeInfos = [];
        this.completedCount = 0;
        this.maskLayer = null;
        this.maskGraphics = null;
        this.eliminationSpines = new Map();
        this.globalEffectPlayed = false;
        this.context = null;
        this.config = null;
        this.context = e;
        this.config = t;
    }
    GardenAnimPlayer.getConfig = function () {
        return {
            phase1: {
                delay: 0.03,
                trailDelay: 0.036,
                hitDelay: 0.1,
                jump: {
                    y: [100],
                    duration: [0.08]
                },
                bezier: {
                    duration: 0.5,
                    controlYOffset: 100,
                    angle: -10,
                    scale: 1.2,
                    transformDuration: 0.25,
                    restoreDelay: 0.25
                }
            },
            phase2: {
                jump: {
                    y: [100],
                    duration: [0.08]
                },
                bezier: {
                    duration: 0.2,
                    controlYOffset: 100,
                    angle: 10,
                    scale: 1.2,
                    transformDuration: 0.25,
                    restoreDelay: 0.25
                }
            },
            trail: {
                duration: 0.3,
                fadeTime: 0.3,
                stroke: 64,
                hitFollowTarget: true
            },
            zIndexMultiplier: 1000,
            heartLayout: {
                6: {
                    rowYOffsets: [0, 0.5, -0.3, -1.3, -2.3, -3.3],
                    rowXOffsets: [0, 1, 2, 1.8, 0.9, 0],
                    zIndexOffsets: [0, 0, 0, 0, 0, 0],
                    animIndexesLeft: [1, 2, 3, 2, 1, 3],
                    animIndexesRight: [2, 3, 2, 3, 2, 2]
                },
                7: {
                    rowYOffsets: [0, 0.5, -0.1, -0.9, -1.7, -2.5, -3.3],
                    rowXOffsets: [0, 0.8, 1.6, 2, 1.6, 0.8, 0],
                    zIndexOffsets: [0, 2, 1, 4, 3, 6, 5],
                    animIndexesLeft: [1, 2, 3, 2, 1, 3, 2],
                    animIndexesRight: [2, 3, 1, 3, 2, 1, 3]
                },
                8: {
                    rowYOffsets: [-1, 0, 0.5, -0.1, -0.9, -1.7, -2.5, -3.3],
                    rowXOffsets: [0.7, 0, 0.8, 1.6, 2, 1.6, 0.8, 0],
                    zIndexOffsets: [8, 0, 2, 1, 4, 3, 6, 5],
                    animIndexesLeft: [1, 2, 3, 2, 1, 3, 2, 1],
                    animIndexesRight: [2, 3, 1, 3, 2, 1, 3, 2]
                },
                9: {
                    rowYOffsets: [-2, -1, 0, 0.5, -0.1, -0.9, -1.7, -2.5, -3.3],
                    rowXOffsets: [0, 0.7, 0, 0.8, 1.6, 2, 1.6, 0.8, 0],
                    zIndexOffsets: [9, 8, 0, 2, 1, 4, 3, 10, 5],
                    animIndexesLeft: [1, 2, 3, 2, 1, 3, 2, 1, 3],
                    animIndexesRight: [2, 3, 1, 3, 2, 1, 3, 2, 1]
                }
            },
            arrayEffect: {
                delay: 0.1,
                aInDuration: 0.7,
                bDelay: 0.0167,
                expandPhase1Duration: 0.16,
                expandPhase1Scale: 0.95,
                expandPhase2Duration: 0.33,
                expandPhase2Scale: 1.3,
                bgEffectDelay: 0.02,
                moveInDistance: 100,
                moveInDuration: 0.16,
                moveOutDistance: 300,
                moveOutDuration: 0.33
            },
            fade: {
                toDarkDuration: 2,
                toDarkOpacity: 77,
                toWhiteDuration: 0.5
            },
            resources: {
                trailSprite: {
                    path: "texture/garden/gameplay_trailingElement",
                    bundle: "r_daxiaogarden"
                },
                trailTexture: {
                    path: "texture/garden/gameplay_star_tail",
                    bundle: "r_daxiaogarden"
                },
                hitSpine: {
                    path: "spine/garden/gameplay_hit",
                    bundle: "r_daxiaogarden",
                    anim: "in"
                },
                flowLight: {
                    path: "spine/garden/gameplay_flowingLight",
                    bundle: "r_daxiaogarden",
                    anim: "idle"
                },
                eliminationA: {
                    path: "spine/garden/gameplay_great_elimination_a",
                    bundle: "r_daxiaogarden"
                },
                eliminationB: {
                    path: "spine/garden/gameplay_great_elimination_b",
                    bundle: "r_daxiaogarden"
                },
                eliminationEffect: {
                    path: "spine/garden/gameplay_great_elimination_effect",
                    bundle: "r_daxiaogarden",
                    anim: "in"
                }
            }
        };
    };
    GardenAnimPlayer.playFullAnimation = function (t, i) {
        var n = GardenAnimPlayer.createAnimContext(t), o = new GardenAnimPlayer(n, GardenAnimPlayer.getConfig());
        o.setupPositions(i, 0);
        i.forEach(function (e) {
            o.showClearTip(e.cardNode1);
            o.showClearTip(e.cardNode2);
            o.context.removeTileNodeByTileId(e.tileId1);
        });
        o.playAnimation(i);
    };
    GardenAnimPlayer.createAnimContext = function (e) {
        var t = e.context, i = t.gameView.nodeTopEffectRoot;
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
    };
    GardenAnimPlayer.hideAllFlowLight = function (e, t, i) {
        var n, a, r, c;
        try {
            for (var s = __values(t), l = s.next(); !l.done; l = s.next()) {
                var d = l.value, u = null === (r = e.context.getTileNodeByTileId(d.tileId1)) || void 0 === r ? void 0 : r.tileNode;
                u && i.hideFlowLight(u);
                var p = null === (c = e.context.getTileNodeByTileId(d.tileId2)) || void 0 === c ? void 0 : c.tileNode;
                p && i.hideFlowLight(p);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (a = s.return) && a.call(s);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    GardenAnimPlayer.prototype.setupPositions = function (e) {
        this.sortInfos(e);
        var t = e[0].cardNode1.getContentSize().width, i = e[0].cardNode1.getContentSize().height, n = this.calculateHeartLayout(t, i, e.length);
        e.forEach(function (e, t) {
            var i = n.positions[t];
            if (i) {
                e.targetPos1 = cc.v3(i.x1, i.y1, 0);
                e.targetPos2 = cc.v3(i.x2, i.y2, 0);
                e.runIndex = t;
            }
        });
        this.calculateZIndex(e);
    };
    GardenAnimPlayer.prototype.sortInfos = function (e) {
        var t = this;
        e.sort(function (e, i) {
            var n = t.context.getTileObject(e.tileId2), o = t.context.getTileObject(i.tileId2);
            return n && o ? n.gridPosX !== o.gridPosX ? n.gridPosX - o.gridPosX : n.gridPosY - o.gridPosY : 0;
        });
    };
    GardenAnimPlayer.prototype.calculateZIndex = function (e) {
        var t = e.length, i = this.config.heartLayout[t];
        i || (i = this.config.heartLayout[7]);
        var n = i.zIndexOffsets || [], o = this.config.zIndexMultiplier || 1000;
        e.forEach(function (e) {
            var t = e.runIndex, i = e.targetPos1.y, a = e.targetPos1.x, r = Math.floor(a / 10 - i), c = (n[t] || 0) * o;
            e.cardNode1.zIndex = r + c;
            e.cardNode2.zIndex = r + c + 10000;
        });
    };
    GardenAnimPlayer.prototype.calculateHeartLayout = function (e, t, i) {
        var n = [], o = this.config.heartLayout[i];
        o || (o = this.config.heartLayout[7]);
        for (var a = Math.min.apply(Math, __spreadArrays(o.rowYOffsets)), c = -(Math.max.apply(Math, __spreadArrays(o.rowYOffsets)) - a) * t / 2 - a * t, s = 0; s < i; s++) {
            var l = o.rowYOffsets[s], d = o.rowXOffsets[s];
            n[s] = {
                x1: -e / 2 - d * e,
                y1: c + l * t,
                x2: e / 2 + d * e,
                y2: c + l * t
            };
        }
        return {
            positions: n
        };
    };
    GardenAnimPlayer.prototype.playAnimation = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.completedCount = 0;
        this.globalEffectPlayed = false;
        this.eliminationSpines.clear();
        this.initMaskLayer();
        this.fadeToDark();
        e.forEach(function (e) {
            return t.runCard1Animation(e);
        });
    };
    GardenAnimPlayer.prototype.hideFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        var i = e.getChildByName("DaxiaoFlowLightNode");
        i && i.destroy();
    };
    GardenAnimPlayer.prototype.delay = function (e, t) {
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                cc.tween(e).delay(t).call(i).start();
            }
            else {
                i();
            }
        });
    };
    GardenAnimPlayer.prototype.tweenTo = function (e, t, i) {
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                cc.tween(e).to(t, i).call(n).start();
            }
            else {
                n();
            }
        });
    };
    GardenAnimPlayer.prototype.createBezierEasing = function (e, t, i, n) {
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
    GardenAnimPlayer.prototype.bezierTo = function (e, t, i, n) {
        return new Promise(function (o) {
            if (cc.isValid(e)) {
                var a = e.position.clone(), r = (a.y + t.y) / 2 + n, c = (a.x + t.x) / 2;
                e._bezierProgress = 0;
                cc.tween(e).to(i, {
                    _bezierProgress: 1
                }, {
                    easing: function (e) {
                        return 1 - Math.pow(1 - e, 2);
                    },
                    progress: function (i, n, o, s) {
                        if (!cc.isValid(e))
                            return s;
                        var l = s, d = (1 - l) * (1 - l) * a.x + 2 * (1 - l) * l * c + l * l * t.x, u = (1 - l) * (1 - l) * a.y + 2 * (1 - l) * l * r + l * l * t.y;
                        e.position = cc.v3(d, u, 0);
                        return i + (n - i) * s;
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
    GardenAnimPlayer.prototype.arcTo = function (e, t, i) {
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                var o = e.position.clone(), a = t, r = a.x - o.x, c = a.y - o.y, s = Math.sqrt(r * r + c * c), l = s * (0.6 + 0.2 * Math.random()), d = Math.random() > 0.5, u = (o.x + a.x) / 2, p = (o.y + a.y) / 2, h = u + -c / s * l * (d ? 1 : -1), f = p + r / s * l * (d ? 1 : -1);
                e._arcProgress = 0;
                cc.tween(e).to(i, {
                    _arcProgress: 1
                }, {
                    progress: function (t, i, n, r) {
                        var c = r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2, s = (1 - c) * (1 - c) * o.x + 2 * (1 - c) * c * h + c * c * a.x, l = (1 - c) * (1 - c) * o.y + 2 * (1 - c) * c * f + c * c * a.y;
                        cc.isValid(e) && (e.position = cc.v3(s, l, 0));
                        return t + (i - t) * r;
                    }
                }).call(function () {
                    cc.isValid(e) && (e.position = t);
                    n();
                }).start();
            }
            else
                n();
        });
    };
    GardenAnimPlayer.prototype.playTrailEffect = function (e, t, i, n, o, a, r) {
        var c = this, d = new cc.Node("TrailContainer");
        d.parent = e;
        d.position = cc.v3(i.x, i.y, 0);
        d.zIndex = 2000;
        d.scale = t || 1;
        if (a.trailSpine) {
            BaseSpine_1.default.create(a.trailSpine.path, a.trailSpine.anim || "in", -1, null, false, a.trailSpine.bundle).node.parent = d;
        }
        else {
            a.trailSprite && (BaseSprite_1.default.create(a.trailSprite.path, a.trailSprite.bundle).node.parent = d);
        }
        return r(a.trailTexture.path, cc.SpriteFrame, a.trailTexture.bundle).then(function (e) {
            if (!e || !cc.isValid(d))
                return Promise.resolve();
            var t = d.addComponent(cc.MotionStreak);
            t.fadeTime = o.fadeTime;
            t.minSeg = 1;
            t.stroke = o.stroke;
            t.texture = e.getTexture();
            return c.arcTo(d, cc.v3(n.x, n.y, 0), o.duration).then(function () {
                cc.isValid(d) && cc.tween(d).to(0.2, {
                    opacity: 0
                }).call(function () {
                    cc.isValid(d) && d.destroy();
                }).start();
            });
        });
    };
    GardenAnimPlayer.prototype.showFlowLight = function (e, t, i, n, o) {
        var a = e.getChildByName("DaxiaoCardTipNode");
        a && (a.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var r = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(r);
            r.scale = t;
            BaseSpine_1.default.refreshWithNode(r, i, n).setAnimation(o || "init", -1, null, false);
        }
    };
    GardenAnimPlayer.prototype.playHitEffect = function (e, t, i, n, o, a) {
        if (a === void 0) { a = true; }
        var r = BaseSpine_1.default.create(i, o || "in", 1, null, false, n);
        r.node.parent = a ? e : e.parent;
        r.node.position = a ? cc.v3(0, 0, 0) : e.position.clone();
        r.node.zIndex = a ? 900 : 2100;
        r.node.scale = t;
        r.node.name = "DaxiaoHitSpineNode";
        return r;
    };
    GardenAnimPlayer.prototype.playMultiJump = function (e, t, i) {
        var n = this;
        if (!t || !i)
            return Promise.resolve();
        for (var o = Array.isArray(t) ? t : [t], a = Array.isArray(i) ? i : [i], r = Promise.resolve(), c = function c(t) {
            var i = o[t], c = a[t] || a[a.length - 1];
            r = r.then(function () {
                if (!cc.isValid(e))
                    return Promise.resolve();
                var t = e.position.clone(), o = cc.v3(t.x, t.y + i, t.z);
                return n.tweenTo(e, c, {
                    position: o
                });
            });
        }, s = 0; s < o.length; s++)
            c(s);
        return r;
    };
    GardenAnimPlayer.prototype.calculateYPositions = function (e, t, i) {
        if (i <= 0)
            return [];
        if (1 === i)
            return [(e + t) / 2];
        var n = (e - t) / (i - 1);
        return Array.from({
            length: i
        }, function (t, i) {
            return e - i * n;
        });
    };
    GardenAnimPlayer.prototype.destroyNodes = function (e) {
        e.forEach(function (e) {
            return cc.isValid(e) && e.destroy();
        });
    };
    GardenAnimPlayer.prototype.runCard1Animation = function (e) {
        var t = this, i = e.runIndex * this.config.phase1.delay;
        this.delay(e.cardNode1, i).then(function () {
            return t.executeCard1Jump(e);
        }).then(function () {
            return t.executeCard1BezierAndTrail(e);
        });
    };
    GardenAnimPlayer.prototype.executeCard1Jump = function (e) {
        var t = this.config.phase1.jump;
        return this.playMultiJump(e.cardNode1, t.y, t.duration);
    };
    GardenAnimPlayer.prototype.executeCard1BezierAndTrail = function (e) {
        var t = this;
        this.applyBezierMove(e.cardNode1, e.targetPos1, this.config.phase1.bezier);
        this.delay(e.cardNode1, this.config.phase1.trailDelay).then(function () {
            return t.executeTrailAndCard2(e);
        });
    };
    GardenAnimPlayer.prototype.executeTrailAndCard2 = function (e) {
        var t = this;
        if (cc.isValid(e.cardNode1) && cc.isValid(e.cardNode2)) {
            var i = e.cardNode1.position.clone(), n = e.cardNode2.position.clone();
            if (n) {
                this.playTrailEffect(this.context.effectNode, this.context.layoutScale, cc.v2(i.x, i.y), cc.v2(n.x, n.y), this.config.trail, this.config.resources, this.context.loadRes).then(function () {
                    t.context.removeTileNodeByTileId(e.tileId2);
                    t.runCard2Animation(e);
                });
            }
            else {
                this.runCard2Animation(e);
            }
        }
    };
    GardenAnimPlayer.prototype.runCard2Animation = function (e) {
        var t = this;
        this.applyCard2HitEffect(e);
        this.delay(e.cardNode2, this.config.phase1.hitDelay).then(function () {
            return t.applyCard2FlowLight(e);
        }).then(function () {
            return t.executeCard2Jump(e);
        }).then(function () {
            return t.executeCard2Bezier(e);
        }).then(function () {
            return t.onCard2Arrived();
        });
    };
    GardenAnimPlayer.prototype.executeCard2Jump = function (e) {
        var t = this.config.phase2.jump;
        return this.playMultiJump(e.cardNode2, t.y, t.duration);
    };
    GardenAnimPlayer.prototype.executeCard2Bezier = function (e) {
        var t = this.config.phase2.bezier, i = this.nodeInfos.length, o = t.duration + (i - e.runIndex - 1) * this.config.phase1.delay + (i - e.runIndex - 1) * this.config.phase1.delay * 2, a = Object.assign(Object.assign({}, t), {
            duration: o
        });
        return this.applyBezierMove(e.cardNode2, e.targetPos2, a, true);
    };
    GardenAnimPlayer.prototype.applyBezierMove = function (e, t, i, n) {
        if (n === void 0) { n = false; }
        var o, a, r, c, s;
        if (void 0 !== i.angle || void 0 !== i.scale) {
            var l = null !== (o = i.transformDuration) && void 0 !== o ? o : i.duration, d = null !== (a = i.restoreDelay) && void 0 !== a ? a : i.duration, u = n ? -(null !== (r = i.angle) && void 0 !== r ? r : 0) : null !== (c = i.angle) && void 0 !== c ? c : 0;
            cc.tween(e).to(l, {
                angle: u,
                scale: null !== (s = i.scale) && void 0 !== s ? s : 1
            }).to(d, {
                angle: 0,
                scale: 1
            }).start();
        }
        return this.bezierTo(e, t, i.duration, i.controlYOffset).then(function () {
            if (cc.isValid(e)) {
                e.angle = 0;
                e.scale = 1;
            }
        });
    };
    GardenAnimPlayer.prototype.applyCard2HitEffect = function (e) {
        this.context.removeTileNode(e.tileId2);
        e.cardNode2.active = true;
        var t = this.context.layoutScale || 1, i = false !== this.config.trail.hitFollowTarget, n = this.config.resources;
        this.playHitEffect(e.cardNode2, t, n.hitSpine.path, n.hitSpine.bundle, n.hitSpine.anim, i);
    };
    GardenAnimPlayer.prototype.applyCard2FlowLight = function (e) {
        var t = this.context.layoutScale || 1, i = this.config.resources, n = e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2;
        this.showFlowLight(n, t, i.flowLight.path, i.flowLight.bundle, i.flowLight.anim);
    };
    GardenAnimPlayer.prototype.moveCard2ToTarget = function (e) {
        var t = this;
        return this.playCard2Jump(e).then(function () {
            return t.playCard2Bezier(e);
        });
    };
    GardenAnimPlayer.prototype.playCard2Jump = function (e) {
        var t = this.config.phase2.jump;
        return this.playMultiJump(e.cardNode2, t.y, t.duration);
    };
    GardenAnimPlayer.prototype.playCard2Bezier = function (e) {
        var t, i, n, o, a = this.config.phase2.bezier;
        if (void 0 !== a.angle || void 0 !== a.scale) {
            var r = null !== (t = a.transformDuration) && void 0 !== t ? t : a.duration, c = null !== (i = a.restoreDelay) && void 0 !== i ? i : a.duration;
            cc.tween(e.cardNode2).to(r, {
                angle: -(null !== (n = a.angle) && void 0 !== n ? n : 0),
                scale: null !== (o = a.scale) && void 0 !== o ? o : 1
            }).to(c, {
                angle: 0,
                scale: 1
            }).start();
        }
        return this.bezierTo(e.cardNode2, e.targetPos2, a.duration, a.controlYOffset).then(function () {
            if (cc.isValid(e.cardNode2)) {
                e.cardNode2.angle = 0;
                e.cardNode2.scale = 1;
            }
        });
    };
    GardenAnimPlayer.prototype.onCard2Arrived = function () {
        if (++this.completedCount >= this.nodeInfos.length) {
            this.fadeToWhite();
            this.startPhase3ArrayEffect();
        }
    };
    GardenAnimPlayer.prototype.startPhase3ArrayEffect = function () {
        var e = this, t = this.config.arrayEffect;
        if (this.config.resources.eliminationA) {
            var i = this.maskLayer || this.context.effectNode;
            this.delay(i, t.delay).then(function () {
                e.createEliminationASpines();
                e.delay(i, t.aInDuration).then(function () {
                    e.applyExpandAnimation();
                    e.delay(i, t.bDelay).then(function () {
                        return e.createEliminationBSpines();
                    });
                    e.delay(i, t.bgEffectDelay).then(function () {
                        return e.applyGlobalEffect();
                    });
                });
            });
        }
        else
            this.onAnimationComplete();
    };
    GardenAnimPlayer.prototype.createEliminationASpines = function () {
        var e = this, t = this.config.resources;
        if (t.eliminationA) {
            var i = ["in_1", "in_2", "in_3"], n = ["out_1", "out_2", "out_3"], o = this.nodeInfos.length, a = this.config.heartLayout[o];
            a || (a = this.config.heartLayout[7]);
            var r = a.animIndexesLeft || [1, 2, 3, 1, 2, 3, 1], c = a.animIndexesRight || [1, 2, 3, 1, 2, 3, 1];
            this.nodeInfos.forEach(function (o, a) {
                if (cc.isValid(o.cardNode1) && cc.isValid(o.cardNode2)) {
                    var l = e.context.layoutScale, d = r[a] || 1, u = i[d - 1], p = n[d - 1], h = BaseSpine_1.default.create(t.eliminationA.path, u, 1, function () {
                        cc.isValid(h) && h.setAnimation(p, 1, null, true);
                    }, false, t.eliminationA.bundle);
                    h.node.parent = e.context.effectNode;
                    h.node.position = o.cardNode1.position.clone();
                    h.node.zIndex = o.cardNode1.zIndex + 200;
                    h.node.scale = l;
                    h.node.scaleX = Math.random() > 0.5 ? l : -l;
                    e.eliminationSpines.set(o.cardNode1, {
                        aSpine: h
                    });
                    var f = c[a] || 1, y = i[f - 1], m = n[f - 1], g = BaseSpine_1.default.create(t.eliminationA.path, y, 1, function () {
                        cc.isValid(g) && g.setAnimation(m, 1, null, true);
                    }, false, t.eliminationA.bundle);
                    g.node.parent = e.context.effectNode;
                    g.node.position = o.cardNode2.position.clone();
                    g.node.zIndex = o.cardNode2.zIndex + 200;
                    g.node.scale = l;
                    g.node.scaleX = Math.random() > 0.5 ? l : -l;
                    e.eliminationSpines.set(o.cardNode2, {
                        aSpine: g
                    });
                }
            });
        }
    };
    GardenAnimPlayer.prototype.applyGlobalEffect = function () {
        var e = this.config.resources;
        if (e.eliminationEffect && !this.globalEffectPlayed) {
            this.globalEffectPlayed = true;
            var t = BaseSpine_1.default.create(e.eliminationEffect.path, e.eliminationEffect.anim || "in", 1, null, true, e.eliminationEffect.bundle);
            t.node.parent = this.context.effectNode;
            t.node.position = cc.v3(0, 0, 0);
            t.node.zIndex = -100;
            this.fadeToWhite();
        }
    };
    GardenAnimPlayer.prototype.createEliminationBSpines = function () {
        var e = this, t = this.config.resources;
        if (t.eliminationB) {
            var i = ["in_blue", "in_pink"];
            this.nodeInfos.forEach(function (n) {
                if (cc.isValid(n.cardNode1) && cc.isValid(n.cardNode2)) {
                    var o = i[Math.floor(2 * Math.random())], a = BaseSpine_1.default.create(t.eliminationB.path, o, 1, null, true, t.eliminationB.bundle);
                    a.node.parent = e.context.effectNode;
                    a.node.position = n.cardNode1.position.clone();
                    a.node.zIndex = n.cardNode1.zIndex + 100;
                    var r = e.eliminationSpines.get(n.cardNode1);
                    r && (r.bSpine = a);
                    var c = BaseSpine_1.default.create(t.eliminationB.path, o, 1, null, true, t.eliminationB.bundle);
                    c.node.parent = e.context.effectNode;
                    c.node.position = n.cardNode2.position.clone();
                    c.node.zIndex = n.cardNode2.zIndex + 100;
                    var l = e.eliminationSpines.get(n.cardNode2);
                    l && (l.bSpine = c);
                }
            });
        }
    };
    GardenAnimPlayer.prototype.applyExpandAnimation = function () {
        var e = this, t = this.config.arrayEffect, i = [];
        this.nodeInfos.forEach(function (n) {
            if (cc.isValid(n.cardNode1) && cc.isValid(n.cardNode2)) {
                var o = n.cardNode1.position.clone().normalize(), a = n.cardNode2.position.clone().normalize(), r = n.cardNode1.position.clone().sub(o.mul(t.moveInDistance)), c = n.cardNode2.position.clone().sub(a.mul(t.moveInDistance)), s = n.cardNode1.position.clone().add(o.mul(t.moveOutDistance)), l = n.cardNode2.position.clone().add(a.mul(t.moveOutDistance));
                i.push(new Promise(function (e) {
                    if (cc.isValid(n.cardNode1)) {
                        cc.tween(n.cardNode1).to(t.expandPhase1Duration, {
                            position: r,
                            scale: t.expandPhase1Scale
                        }, {
                            easing: "sineOut"
                        }).to(t.expandPhase2Duration, {
                            position: s,
                            scale: t.expandPhase2Scale,
                            opacity: 0
                        }, {
                            easing: "sineIn"
                        }).call(function () {
                            return e();
                        }).start();
                    }
                    else {
                        e();
                    }
                }));
                i.push(new Promise(function (e) {
                    if (cc.isValid(n.cardNode2)) {
                        cc.tween(n.cardNode2).to(t.expandPhase1Duration, {
                            position: c,
                            scale: t.expandPhase1Scale
                        }, {
                            easing: "sineOut"
                        }).to(t.expandPhase2Duration, {
                            position: l,
                            scale: t.expandPhase2Scale,
                            opacity: 0
                        }, {
                            easing: "sineIn"
                        }).call(function () {
                            return e();
                        }).start();
                    }
                    else {
                        e();
                    }
                }));
                e.syncSpineWithCard(n.cardNode1, r, s, t);
                e.syncSpineWithCard(n.cardNode2, c, l, t);
            }
            else {
                i.push(Promise.resolve());
                i.push(Promise.resolve());
            }
        });
        Promise.all(i).then(function () {
            return e.onAnimationComplete();
        });
    };
    GardenAnimPlayer.prototype.syncSpineWithCard = function (e, t, i, n) {
        var o = this.eliminationSpines.get(e);
        if (o) {
            var a = this.context.layoutScale;
            o.aSpine && cc.isValid(o.aSpine.node) && cc.tween(o.aSpine.node).to(n.expandPhase1Duration, {
                position: t,
                scale: n.expandPhase1Scale * a
            }, {
                easing: "sineOut"
            }).to(n.expandPhase2Duration, {
                position: i,
                scale: n.expandPhase2Scale * a,
                opacity: 0
            }, {
                easing: "sineIn"
            }).start();
            o.bSpine && cc.isValid(o.bSpine.node) && cc.tween(o.bSpine.node).to(n.expandPhase1Duration, {
                position: t,
                scale: n.expandPhase1Scale * a
            }, {
                easing: "sineOut"
            }).to(n.expandPhase2Duration, {
                position: i,
                scale: n.expandPhase2Scale * a,
                opacity: 0
            }, {
                easing: "sineIn"
            }).start();
        }
    };
    GardenAnimPlayer.prototype.onAnimationComplete = function () {
        var e = [];
        this.nodeInfos.forEach(function (t) {
            return e.push(t.cardNode1, t.cardNode2);
        });
        this.destroyNodes(e);
        if (cc.isValid(this.maskLayer)) {
            this.maskLayer.destroy();
            this.maskLayer = null;
        }
        this.maskGraphics = null;
        this.context.onComplete();
    };
    GardenAnimPlayer.prototype.showClearTip = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        var i = new cc.Node("DaxiaoCardTipNode");
        e.addChild(i);
        i.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        i.scale = this.context.layoutScale;
        var n = this.config.resources.flowLight;
        BaseSpine_1.default.refreshWithNode(i, n.path, n.bundle).setAnimation(n.anim || "init", -1, null, false);
    };
    GardenAnimPlayer.prototype.initMaskLayer = function () {
        if (cc.isValid(this.context.effectNode)) {
            this.maskLayer = new cc.Node("MaskLayer");
            this.maskLayer.parent = this.context.effectNode;
            this.maskLayer.position = cc.v3(0, 0, 0);
            this.maskLayer.zIndex = -1000;
            this.maskGraphics = this.maskLayer.addComponent(cc.Graphics);
            var e = cc.winSize;
            this.maskGraphics.rect(-e.width / 2, -e.height / 2, e.width, e.height);
            this.maskGraphics.fillColor = new cc.Color(0, 0, 0, 0);
            this.maskGraphics.fill();
            this.maskLayer._fadeAlpha = 0;
        }
    };
    GardenAnimPlayer.prototype.fadeToDark = function () {
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
    GardenAnimPlayer.prototype.fadeToWhite = function () {
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
    return GardenAnimPlayer;
}());
exports.GardenAnimPlayer = GardenAnimPlayer;

cc._RF.pop();