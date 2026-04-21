
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_daxiaoAnim/Scripts/GardenAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RheGlhb0FuaW0vU2NyaXB0cy9HYXJkZW5BbmltUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQWtGO0FBQ2xGLHlFQUFvRTtBQUNwRSwyRUFBc0U7QUFDdEU7SUFTRSwwQkFBWSxDQUFDLEVBQUUsQ0FBQztRQVJoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzlCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVaLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDTSwwQkFBUyxHQUFoQjtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLElBQUk7Z0JBQ1gsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRTtvQkFDSixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ1IsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNqQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sUUFBUSxFQUFFLEdBQUc7b0JBQ2IsY0FBYyxFQUFFLEdBQUc7b0JBQ25CLEtBQUssRUFBRSxDQUFDLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsWUFBWSxFQUFFLElBQUk7aUJBQ25CO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFO29CQUNKLENBQUMsRUFB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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLFlBQVksRUFBRSxDQUFDO2lCQUNoQixFQUFFO29CQUNELFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDM0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxD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RUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsMENBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFTO1FBQVQsa0JBQUEsRUFBQSxTQUFTO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQ3pFLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUNsRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLEtBQUssRUFBRSxD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SUFBQTtBQXIyQlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZU5vZGVaSW5kZXhNYXAsIEVUaWxlTm9kZU5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CYXNlVGlsZU5vZGUnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmV4cG9ydCBjbGFzcyBHYXJkZW5BbmltUGxheWVyIHtcbiAgbm9kZUluZm9zID0gW107XG4gIGNvbXBsZXRlZENvdW50ID0gMDtcbiAgbWFza0xheWVyID0gbnVsbDtcbiAgbWFza0dyYXBoaWNzID0gbnVsbDtcbiAgZWxpbWluYXRpb25TcGluZXMgPSBuZXcgTWFwKCk7XG4gIGdsb2JhbEVmZmVjdFBsYXllZCA9IGZhbHNlO1xuICBjb250ZXh0ID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZSwgdCkge1xuICAgIHRoaXMuY29udGV4dCA9IGU7XG4gICAgdGhpcy5jb25maWcgPSB0O1xuICB9XG4gIHN0YXRpYyBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBoYXNlMToge1xuICAgICAgICBkZWxheTogMC4wMyxcbiAgICAgICAgdHJhaWxEZWxheTogMC4wMzYsXG4gICAgICAgIGhpdERlbGF5OiAwLjEsXG4gICAgICAgIGp1bXA6IHtcbiAgICAgICAgICB5OiBbMTAwXSxcbiAgICAgICAgICBkdXJhdGlvbjogWzAuMDhdXG4gICAgICAgIH0sXG4gICAgICAgIGJlemllcjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgY29udHJvbFlPZmZzZXQ6IDEwMCxcbiAgICAgICAgICBhbmdsZTogLTEwLFxuICAgICAgICAgIHNjYWxlOiAxLjIsXG4gICAgICAgICAgdHJhbnNmb3JtRHVyYXRpb246IDAuMjUsXG4gICAgICAgICAgcmVzdG9yZURlbGF5OiAwLjI1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwaGFzZTI6IHtcbiAgICAgICAganVtcDoge1xuICAgICAgICAgIHk6IFsxMDBdLFxuICAgICAgICAgIGR1cmF0aW9uOiBbMC4wOF1cbiAgICAgICAgfSxcbiAgICAgICAgYmV6aWVyOiB7XG4gICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICBjb250cm9sWU9mZnNldDogMTAwLFxuICAgICAgICAgIGFuZ2xlOiAxMCxcbiAgICAgICAgICBzY2FsZTogMS4yLFxuICAgICAgICAgIHRyYW5zZm9ybUR1cmF0aW9uOiAwLjI1LFxuICAgICAgICAgIHJlc3RvcmVEZWxheTogMC4yNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdHJhaWw6IHtcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgZmFkZVRpbWU6IDAuMyxcbiAgICAgICAgc3Ryb2tlOiA2NCxcbiAgICAgICAgaGl0Rm9sbG93VGFyZ2V0OiB0cnVlXG4gICAgICB9LFxuICAgICAgekluZGV4TXVsdGlwbGllcjogMTAwMCxcbiAgICAgIGhlYXJ0TGF5b3V0OiB7XG4gICAgICAgIDY6IHtcbiAgICAgICAgICByb3dZT2Zmc2V0czogWzAsIDAuNSwgLTAuMywgLTEuMywgLTIuMywgLTMuM10sXG4gICAgICAgICAgcm93WE9mZnNldHM6IFswLCAxLCAyLCAxLjgsIDAuOSwgMF0sXG4gICAgICAgICAgekluZGV4T2Zmc2V0czogWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgIGFuaW1JbmRleGVzTGVmdDogWzEsIDIsIDMsIDIsIDEsIDNdLFxuICAgICAgICAgIGFuaW1JbmRleGVzUmlnaHQ6IFsyLCAzLCAyLCAzLCAyLCAyXVxuICAgICAgICB9LFxuICAgICAgICA3OiB7XG4gICAgICAgICAgcm93WU9mZnNldHM6IFswLCAwLjUsIC0wLjEsIC0wLjksIC0xLjcsIC0yLjUsIC0zLjNdLFxuICAgICAgICAgIHJvd1hPZmZzZXRzOiBbMCwgMC44LCAxLjYsIDIsIDEuNiwgMC44LCAwXSxcbiAgICAgICAgICB6SW5kZXhPZmZzZXRzOiBbMCwgMiwgMSwgNCwgMywgNiwgNV0sXG4gICAgICAgICAgYW5pbUluZGV4ZXNMZWZ0OiBbMSwgMiwgMywgMiwgMSwgMywgMl0sXG4gICAgICAgICAgYW5pbUluZGV4ZXNSaWdodDogWzIsIDMsIDEsIDMsIDIsIDEsIDNdXG4gICAgICAgIH0sXG4gICAgICAgIDg6IHtcbiAgICAgICAgICByb3dZT2Zmc2V0czogWy0xLCAwLCAwLjUsIC0wLjEsIC0wLjksIC0xLjcsIC0yLjUsIC0zLjNdLFxuICAgICAgICAgIHJvd1hPZmZzZXRzOiBbMC43LCAwLCAwLjgsIDEuNiwgMiwgMS42LCAwLjgsIDBdLFxuICAgICAgICAgIHpJbmRleE9mZnNldHM6IFs4LCAwLCAyLCAxLCA0LCAzLCA2LCA1XSxcbiAgICAgICAgICBhbmltSW5kZXhlc0xlZnQ6IFsxLCAyLCAzLCAyLCAxLCAzLCAyLCAxXSxcbiAgICAgICAgICBhbmltSW5kZXhlc1JpZ2h0OiBbMiwgMywgMSwgMywgMiwgMSwgMywgMl1cbiAgICAgICAgfSxcbiAgICAgICAgOToge1xuICAgICAgICAgIHJvd1lPZmZzZXRzOiBbLTIsIC0xLCAwLCAwLjUsIC0wLjEsIC0wLjksIC0xLjcsIC0yLjUsIC0zLjNdLFxuICAgICAgICAgIHJvd1hPZmZzZXRzOiBbMCwgMC43LCAwLCAwLjgsIDEuNiwgMiwgMS42LCAwLjgsIDBdLFxuICAgICAgICAgIHpJbmRleE9mZnNldHM6IFs5LCA4LCAwLCAyLCAxLCA0LCAzLCAxMCwgNV0sXG4gICAgICAgICAgYW5pbUluZGV4ZXNMZWZ0OiBbMSwgMiwgMywgMiwgMSwgMywgMiwgMSwgM10sXG4gICAgICAgICAgYW5pbUluZGV4ZXNSaWdodDogWzIsIDMsIDEsIDMsIDIsIDEsIDMsIDIsIDFdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcnJheUVmZmVjdDoge1xuICAgICAgICBkZWxheTogMC4xLFxuICAgICAgICBhSW5EdXJhdGlvbjogMC43LFxuICAgICAgICBiRGVsYXk6IDAuMDE2NyxcbiAgICAgICAgZXhwYW5kUGhhc2UxRHVyYXRpb246IDAuMTYsXG4gICAgICAgIGV4cGFuZFBoYXNlMVNjYWxlOiAwLjk1LFxuICAgICAgICBleHBhbmRQaGFzZTJEdXJhdGlvbjogMC4zMyxcbiAgICAgICAgZXhwYW5kUGhhc2UyU2NhbGU6IDEuMyxcbiAgICAgICAgYmdFZmZlY3REZWxheTogMC4wMixcbiAgICAgICAgbW92ZUluRGlzdGFuY2U6IDEwMCxcbiAgICAgICAgbW92ZUluRHVyYXRpb246IDAuMTYsXG4gICAgICAgIG1vdmVPdXREaXN0YW5jZTogMzAwLFxuICAgICAgICBtb3ZlT3V0RHVyYXRpb246IDAuMzNcbiAgICAgIH0sXG4gICAgICBmYWRlOiB7XG4gICAgICAgIHRvRGFya0R1cmF0aW9uOiAyLFxuICAgICAgICB0b0RhcmtPcGFjaXR5OiA3NyxcbiAgICAgICAgdG9XaGl0ZUR1cmF0aW9uOiAwLjVcbiAgICAgIH0sXG4gICAgICByZXNvdXJjZXM6IHtcbiAgICAgICAgdHJhaWxTcHJpdGU6IHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvZ2FyZGVuL2dhbWVwbGF5X3RyYWlsaW5nRWxlbWVudFwiLFxuICAgICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2dhcmRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIHRyYWlsVGV4dHVyZToge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9nYXJkZW4vZ2FtZXBsYXlfc3Rhcl90YWlsXCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvZ2FyZGVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgaGl0U3BpbmU6IHtcbiAgICAgICAgICBwYXRoOiBcInNwaW5lL2dhcmRlbi9nYW1lcGxheV9oaXRcIixcbiAgICAgICAgICBidW5kbGU6IFwicl9kYXhpYW9nYXJkZW5cIixcbiAgICAgICAgICBhbmltOiBcImluXCJcbiAgICAgICAgfSxcbiAgICAgICAgZmxvd0xpZ2h0OiB7XG4gICAgICAgICAgcGF0aDogXCJzcGluZS9nYXJkZW4vZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0XCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvZ2FyZGVuXCIsXG4gICAgICAgICAgYW5pbTogXCJpZGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAgZWxpbWluYXRpb25BOiB7XG4gICAgICAgICAgcGF0aDogXCJzcGluZS9nYXJkZW4vZ2FtZXBsYXlfZ3JlYXRfZWxpbWluYXRpb25fYVwiLFxuICAgICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2dhcmRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIGVsaW1pbmF0aW9uQjoge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvZ2FyZGVuL2dhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX2JcIixcbiAgICAgICAgICBidW5kbGU6IFwicl9kYXhpYW9nYXJkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBlbGltaW5hdGlvbkVmZmVjdDoge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvZ2FyZGVuL2dhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX2VmZmVjdFwiLFxuICAgICAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2dhcmRlblwiLFxuICAgICAgICAgIGFuaW06IFwiaW5cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgcGxheUZ1bGxBbmltYXRpb24odCwgaSkge1xuICAgIHZhciBuID0gR2FyZGVuQW5pbVBsYXllci5jcmVhdGVBbmltQ29udGV4dCh0KSxcbiAgICAgIG8gPSBuZXcgR2FyZGVuQW5pbVBsYXllcihuLCBHYXJkZW5BbmltUGxheWVyLmdldENvbmZpZygpKTtcbiAgICBvLnNldHVwUG9zaXRpb25zKGksIDApO1xuICAgIGkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgby5zaG93Q2xlYXJUaXAoZS5jYXJkTm9kZTEpO1xuICAgICAgby5zaG93Q2xlYXJUaXAoZS5jYXJkTm9kZTIpO1xuICAgICAgby5jb250ZXh0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZS50aWxlSWQxKTtcbiAgICB9KTtcbiAgICBvLnBsYXlBbmltYXRpb24oaSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUFuaW1Db250ZXh0KGUpIHtcbiAgICB2YXIgdCA9IGUuY29udGV4dCxcbiAgICAgIGkgPSB0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290O1xuICAgIHJldHVybiB7XG4gICAgICBlZmZlY3ROb2RlOiBpLFxuICAgICAgbGF5b3V0U2NhbGU6IHQubGF5b3V0U2NhbGUsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLm9uQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICAgIH0sXG4gICAgICBvblNoYWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmdhbWVWaWV3LnBsYXlTaGFrZSgpO1xuICAgICAgfSxcbiAgICAgIGxvYWRSZXM6IGZ1bmN0aW9uIChlLCBpLCBuKSB7XG4gICAgICAgIHJldHVybiB0LmdhbWVDdHIubG9hZFJlcyhlLCBpLCBuKTtcbiAgICAgIH0sXG4gICAgICBnZXRUaWxlTm9kZVBvczogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIG8gPSB0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KG4pO1xuICAgICAgICByZXR1cm4gbyA/IGUudG9Mb2NhbFBvcyhvLmNhcmROb2RlLCBpKSA6IG51bGw7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlVGlsZU5vZGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHQucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZChlKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVUaWxlTm9kZUJ5VGlsZUlkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZSk7XG4gICAgICB9LFxuICAgICAgZ2V0VGlsZU9iamVjdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGkgPSB0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KGUpO1xuICAgICAgICByZXR1cm4gaSA/IGkuaW5mby50aWxlT2JqZWN0IDogbnVsbDtcbiAgICAgIH0sXG4gICAgICBnZXRSYW5kb21JbmRleGVzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdC5yYW5kb21HZW5lcmF0b3Iuc2h1ZmZsZShBcnJheS5mcm9tKHtcbiAgICAgICAgICBsZW5ndGg6IGVcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIGdldENhcmRTcGFjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBoaWRlQWxsRmxvd0xpZ2h0KGUsIHQsIGkpIHtcbiAgICB2YXIgbiwgYSwgciwgYztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKHQpLCBsID0gcy5uZXh0KCk7ICFsLmRvbmU7IGwgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGwudmFsdWUsXG4gICAgICAgICAgdSA9IG51bGwgPT09IChyID0gZS5jb250ZXh0LmdldFRpbGVOb2RlQnlUaWxlSWQoZC50aWxlSWQxKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci50aWxlTm9kZTtcbiAgICAgICAgdSAmJiBpLmhpZGVGbG93TGlnaHQodSk7XG4gICAgICAgIHZhciBwID0gbnVsbCA9PT0gKGMgPSBlLmNvbnRleHQuZ2V0VGlsZU5vZGVCeVRpbGVJZChkLnRpbGVJZDIpKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLnRpbGVOb2RlO1xuICAgICAgICBwICYmIGkuaGlkZUZsb3dMaWdodChwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChhID0gcy5yZXR1cm4pICYmIGEuY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXR1cFBvc2l0aW9ucyhlKSB7XG4gICAgdGhpcy5zb3J0SW5mb3MoZSk7XG4gICAgdmFyIHQgPSBlWzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLndpZHRoLFxuICAgICAgaSA9IGVbMF0uY2FyZE5vZGUxLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0LFxuICAgICAgbiA9IHRoaXMuY2FsY3VsYXRlSGVhcnRMYXlvdXQodCwgaSwgZS5sZW5ndGgpO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIGkgPSBuLnBvc2l0aW9uc1t0XTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGUudGFyZ2V0UG9zMSA9IGNjLnYzKGkueDEsIGkueTEsIDApO1xuICAgICAgICBlLnRhcmdldFBvczIgPSBjYy52MyhpLngyLCBpLnkyLCAwKTtcbiAgICAgICAgZS5ydW5JbmRleCA9IHQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjdWxhdGVaSW5kZXgoZSk7XG4gIH1cbiAgc29ydEluZm9zKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgZS5zb3J0KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICB2YXIgbiA9IHQuY29udGV4dC5nZXRUaWxlT2JqZWN0KGUudGlsZUlkMiksXG4gICAgICAgIG8gPSB0LmNvbnRleHQuZ2V0VGlsZU9iamVjdChpLnRpbGVJZDIpO1xuICAgICAgcmV0dXJuIG4gJiYgbyA/IG4uZ3JpZFBvc1ggIT09IG8uZ3JpZFBvc1ggPyBuLmdyaWRQb3NYIC0gby5ncmlkUG9zWCA6IG4uZ3JpZFBvc1kgLSBvLmdyaWRQb3NZIDogMDtcbiAgICB9KTtcbiAgfVxuICBjYWxjdWxhdGVaSW5kZXgoZSkge1xuICAgIHZhciB0ID0gZS5sZW5ndGgsXG4gICAgICBpID0gdGhpcy5jb25maWcuaGVhcnRMYXlvdXRbdF07XG4gICAgaSB8fCAoaSA9IHRoaXMuY29uZmlnLmhlYXJ0TGF5b3V0WzddKTtcbiAgICB2YXIgbiA9IGkuekluZGV4T2Zmc2V0cyB8fCBbXSxcbiAgICAgIG8gPSB0aGlzLmNvbmZpZy56SW5kZXhNdWx0aXBsaWVyIHx8IDEwMDA7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUucnVuSW5kZXgsXG4gICAgICAgIGkgPSBlLnRhcmdldFBvczEueSxcbiAgICAgICAgYSA9IGUudGFyZ2V0UG9zMS54LFxuICAgICAgICByID0gTWF0aC5mbG9vcihhIC8gMTAgLSBpKSxcbiAgICAgICAgYyA9IChuW3RdIHx8IDApICogbztcbiAgICAgIGUuY2FyZE5vZGUxLnpJbmRleCA9IHIgKyBjO1xuICAgICAgZS5jYXJkTm9kZTIuekluZGV4ID0gciArIGMgKyAxMDAwMDtcbiAgICB9KTtcbiAgfVxuICBjYWxjdWxhdGVIZWFydExheW91dChlLCB0LCBpKSB7XG4gICAgdmFyIG4gPSBbXSxcbiAgICAgIG8gPSB0aGlzLmNvbmZpZy5oZWFydExheW91dFtpXTtcbiAgICBvIHx8IChvID0gdGhpcy5jb25maWcuaGVhcnRMYXlvdXRbN10pO1xuICAgIGZvciAodmFyIGEgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBbLi4uby5yb3dZT2Zmc2V0c10pLCBjID0gLShNYXRoLm1heC5hcHBseShNYXRoLCBbLi4uby5yb3dZT2Zmc2V0c10pIC0gYSkgKiB0IC8gMiAtIGEgKiB0LCBzID0gMDsgcyA8IGk7IHMrKykge1xuICAgICAgdmFyIGwgPSBvLnJvd1lPZmZzZXRzW3NdLFxuICAgICAgICBkID0gby5yb3dYT2Zmc2V0c1tzXTtcbiAgICAgIG5bc10gPSB7XG4gICAgICAgIHgxOiAtZSAvIDIgLSBkICogZSxcbiAgICAgICAgeTE6IGMgKyBsICogdCxcbiAgICAgICAgeDI6IGUgLyAyICsgZCAqIGUsXG4gICAgICAgIHkyOiBjICsgbCAqIHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnM6IG5cbiAgICB9O1xuICB9XG4gIHBsYXlBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLm5vZGVJbmZvcyA9IGU7XG4gICAgdGhpcy5jb21wbGV0ZWRDb3VudCA9IDA7XG4gICAgdGhpcy5nbG9iYWxFZmZlY3RQbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVsaW1pbmF0aW9uU3BpbmVzLmNsZWFyKCk7XG4gICAgdGhpcy5pbml0TWFza0xheWVyKCk7XG4gICAgdGhpcy5mYWRlVG9EYXJrKCk7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gdC5ydW5DYXJkMUFuaW1hdGlvbihlKTtcbiAgICB9KTtcbiAgfVxuICBoaWRlRmxvd0xpZ2h0KGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkVGlwTm9kZVwiKTtcbiAgICB0ICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB2YXIgaSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9GbG93TGlnaHROb2RlXCIpO1xuICAgIGkgJiYgaS5kZXN0cm95KCk7XG4gIH1cbiAgZGVsYXkoZSwgdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgY2MudHdlZW4oZSkuZGVsYXkodCkuY2FsbChpKS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHR3ZWVuVG8oZSwgdCwgaSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobikge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgY2MudHdlZW4oZSkudG8odCwgaSkuY2FsbChuKS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUJlemllckVhc2luZyhlLCB0LCBpLCBuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoMCA9PT0gbyB8fCAxID09PSBvKSByZXR1cm4gbztcbiAgICAgIGZvciAodmFyIGEgPSAwLCByID0gMSwgYyA9IDAsIHMgPSAwOyBzIDwgMTA7IHMrKykge1xuICAgICAgICB2YXIgbCA9IChhICsgcikgLyAyO1xuICAgICAgICBjID0gMyAqICgxIC0gbCkgKiAoMSAtIGwpICogbCAqIGUgKyAzICogKDEgLSBsKSAqIGwgKiBsICogaSArIGwgKiBsICogbDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGMgLSBvKSA8IDAuMDAxKSBicmVhaztcbiAgICAgICAgaWYgKGMgPCBvKSB7XG4gICAgICAgICAgYSA9IGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgciA9IGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBkID0gKGEgKyByKSAvIDI7XG4gICAgICByZXR1cm4gMyAqICgxIC0gZCkgKiAoMSAtIGQpICogZCAqIHQgKyAzICogKDEgLSBkKSAqIGQgKiBkICogbiArIGQgKiBkICogZDtcbiAgICB9O1xuICB9XG4gIGJlemllclRvKGUsIHQsIGksIG4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIHZhciBhID0gZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgIHIgPSAoYS55ICsgdC55KSAvIDIgKyBuLFxuICAgICAgICAgIGMgPSAoYS54ICsgdC54KSAvIDI7XG4gICAgICAgIGUuX2JlemllclByb2dyZXNzID0gMDtcbiAgICAgICAgY2MudHdlZW4oZSkudG8oaSwge1xuICAgICAgICAgIF9iZXppZXJQcm9ncmVzczogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gZSwgMik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGksIG4sIG8sIHMpIHtcbiAgICAgICAgICAgIGlmICghY2MuaXNWYWxpZChlKSkgcmV0dXJuIHM7XG4gICAgICAgICAgICB2YXIgbCA9IHMsXG4gICAgICAgICAgICAgIGQgPSAoMSAtIGwpICogKDEgLSBsKSAqIGEueCArIDIgKiAoMSAtIGwpICogbCAqIGMgKyBsICogbCAqIHQueCxcbiAgICAgICAgICAgICAgdSA9ICgxIC0gbCkgKiAoMSAtIGwpICogYS55ICsgMiAqICgxIC0gbCkgKiBsICogciArIGwgKiBsICogdC55O1xuICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYzKGQsIHUsIDApO1xuICAgICAgICAgICAgcmV0dXJuIGkgKyAobiAtIGkpICogcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUucG9zaXRpb24gPSB0KTtcbiAgICAgICAgICBvKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgbygpO1xuICAgIH0pO1xuICB9XG4gIGFyY1RvKGUsIHQsIGkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIHZhciBvID0gZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgIGEgPSB0LFxuICAgICAgICAgIHIgPSBhLnggLSBvLngsXG4gICAgICAgICAgYyA9IGEueSAtIG8ueSxcbiAgICAgICAgICBzID0gTWF0aC5zcXJ0KHIgKiByICsgYyAqIGMpLFxuICAgICAgICAgIGwgPSBzICogKDAuNiArIDAuMiAqIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgIGQgPSBNYXRoLnJhbmRvbSgpID4gMC41LFxuICAgICAgICAgIHUgPSAoby54ICsgYS54KSAvIDIsXG4gICAgICAgICAgcCA9IChvLnkgKyBhLnkpIC8gMixcbiAgICAgICAgICBoID0gdSArIC1jIC8gcyAqIGwgKiAoZCA/IDEgOiAtMSksXG4gICAgICAgICAgZiA9IHAgKyByIC8gcyAqIGwgKiAoZCA/IDEgOiAtMSk7XG4gICAgICAgIGUuX2FyY1Byb2dyZXNzID0gMDtcbiAgICAgICAgY2MudHdlZW4oZSkudG8oaSwge1xuICAgICAgICAgIF9hcmNQcm9ncmVzczogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh0LCBpLCBuLCByKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHIgPCAwLjUgPyAyICogciAqIHIgOiAxIC0gTWF0aC5wb3coLTIgKiByICsgMiwgMikgLyAyLFxuICAgICAgICAgICAgICBzID0gKDEgLSBjKSAqICgxIC0gYykgKiBvLnggKyAyICogKDEgLSBjKSAqIGMgKiBoICsgYyAqIGMgKiBhLngsXG4gICAgICAgICAgICAgIGwgPSAoMSAtIGMpICogKDEgLSBjKSAqIG8ueSArIDIgKiAoMSAtIGMpICogYyAqIGYgKyBjICogYyAqIGEueTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUucG9zaXRpb24gPSBjYy52MyhzLCBsLCAwKSk7XG4gICAgICAgICAgICByZXR1cm4gdCArIChpIC0gdCkgKiByO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZChlKSAmJiAoZS5wb3NpdGlvbiA9IHQpO1xuICAgICAgICAgIG4oKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSBuKCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVRyYWlsRWZmZWN0KGUsIHQsIGksIG4sIG8sIGEsIHIpIHtcbiAgICB2YXIgYyA9IHRoaXMsXG4gICAgICBkID0gbmV3IGNjLk5vZGUoXCJUcmFpbENvbnRhaW5lclwiKTtcbiAgICBkLnBhcmVudCA9IGU7XG4gICAgZC5wb3NpdGlvbiA9IGNjLnYzKGkueCwgaS55LCAwKTtcbiAgICBkLnpJbmRleCA9IDIwMDA7XG4gICAgZC5zY2FsZSA9IHQgfHwgMTtcbiAgICBpZiAoYS50cmFpbFNwaW5lKSB7XG4gICAgICBCYXNlU3BpbmUuY3JlYXRlKGEudHJhaWxTcGluZS5wYXRoLCBhLnRyYWlsU3BpbmUuYW5pbSB8fCBcImluXCIsIC0xLCBudWxsLCBmYWxzZSwgYS50cmFpbFNwaW5lLmJ1bmRsZSkubm9kZS5wYXJlbnQgPSBkO1xuICAgIH0gZWxzZSB7XG4gICAgICBhLnRyYWlsU3ByaXRlICYmIChCYXNlU3ByaXRlLmNyZWF0ZShhLnRyYWlsU3ByaXRlLnBhdGgsIGEudHJhaWxTcHJpdGUuYnVuZGxlKS5ub2RlLnBhcmVudCA9IGQpO1xuICAgIH1cbiAgICByZXR1cm4gcihhLnRyYWlsVGV4dHVyZS5wYXRoLCBjYy5TcHJpdGVGcmFtZSwgYS50cmFpbFRleHR1cmUuYnVuZGxlKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUgfHwgIWNjLmlzVmFsaWQoZCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIHZhciB0ID0gZC5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKTtcbiAgICAgIHQuZmFkZVRpbWUgPSBvLmZhZGVUaW1lO1xuICAgICAgdC5taW5TZWcgPSAxO1xuICAgICAgdC5zdHJva2UgPSBvLnN0cm9rZTtcbiAgICAgIHQudGV4dHVyZSA9IGUuZ2V0VGV4dHVyZSgpO1xuICAgICAgcmV0dXJuIGMuYXJjVG8oZCwgY2MudjMobi54LCBuLnksIDApLCBvLmR1cmF0aW9uKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZChkKSAmJiBjYy50d2VlbihkKS50bygwLjIsIHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZCkgJiYgZC5kZXN0cm95KCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBzaG93Rmxvd0xpZ2h0KGUsIHQsIGksIG4sIG8pIHtcbiAgICB2YXIgYSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkVGlwTm9kZVwiKTtcbiAgICBhICYmIChhLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBpZiAoIWUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9GbG93TGlnaHROb2RlXCIpKSB7XG4gICAgICB2YXIgciA9IG5ldyBjYy5Ob2RlKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKTtcbiAgICAgIGUuYWRkQ2hpbGQocik7XG4gICAgICByLnNjYWxlID0gdDtcbiAgICAgIEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUociwgaSwgbikuc2V0QW5pbWF0aW9uKG8gfHwgXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIHBsYXlIaXRFZmZlY3QoZSwgdCwgaSwgbiwgbywgYSA9IHRydWUpIHtcbiAgICB2YXIgciA9IEJhc2VTcGluZS5jcmVhdGUoaSwgbyB8fCBcImluXCIsIDEsIG51bGwsIGZhbHNlLCBuKTtcbiAgICByLm5vZGUucGFyZW50ID0gYSA/IGUgOiBlLnBhcmVudDtcbiAgICByLm5vZGUucG9zaXRpb24gPSBhID8gY2MudjMoMCwgMCwgMCkgOiBlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgci5ub2RlLnpJbmRleCA9IGEgPyA5MDAgOiAyMTAwO1xuICAgIHIubm9kZS5zY2FsZSA9IHQ7XG4gICAgci5ub2RlLm5hbWUgPSBcIkRheGlhb0hpdFNwaW5lTm9kZVwiO1xuICAgIHJldHVybiByO1xuICB9XG4gIHBsYXlNdWx0aUp1bXAoZSwgdCwgaSkge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAoIXQgfHwgIWkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBmb3IgKHZhciBvID0gQXJyYXkuaXNBcnJheSh0KSA/IHQgOiBbdF0sIGEgPSBBcnJheS5pc0FycmF5KGkpID8gaSA6IFtpXSwgciA9IFByb21pc2UucmVzb2x2ZSgpLCBjID0gZnVuY3Rpb24gYyh0KSB7XG4gICAgICAgIHZhciBpID0gb1t0XSxcbiAgICAgICAgICBjID0gYVt0XSB8fCBhW2EubGVuZ3RoIC0gMV07XG4gICAgICAgIHIgPSByLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghY2MuaXNWYWxpZChlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgIHZhciB0ID0gZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgICAgbyA9IGNjLnYzKHQueCwgdC55ICsgaSwgdC56KTtcbiAgICAgICAgICByZXR1cm4gbi50d2VlblRvKGUsIGMsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBvXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgcyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKSBjKHMpO1xuICAgIHJldHVybiByO1xuICB9XG4gIGNhbGN1bGF0ZVlQb3NpdGlvbnMoZSwgdCwgaSkge1xuICAgIGlmIChpIDw9IDApIHJldHVybiBbXTtcbiAgICBpZiAoMSA9PT0gaSkgcmV0dXJuIFsoZSArIHQpIC8gMl07XG4gICAgdmFyIG4gPSAoZSAtIHQpIC8gKGkgLSAxKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IGlcbiAgICB9LCBmdW5jdGlvbiAodCwgaSkge1xuICAgICAgcmV0dXJuIGUgLSBpICogbjtcbiAgICB9KTtcbiAgfVxuICBkZXN0cm95Tm9kZXMoZSkge1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGNjLmlzVmFsaWQoZSkgJiYgZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgcnVuQ2FyZDFBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGkgPSBlLnJ1bkluZGV4ICogdGhpcy5jb25maWcucGhhc2UxLmRlbGF5O1xuICAgIHRoaXMuZGVsYXkoZS5jYXJkTm9kZTEsIGkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuZXhlY3V0ZUNhcmQxSnVtcChlKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0LmV4ZWN1dGVDYXJkMUJlemllckFuZFRyYWlsKGUpO1xuICAgIH0pO1xuICB9XG4gIGV4ZWN1dGVDYXJkMUp1bXAoZSkge1xuICAgIHZhciB0ID0gdGhpcy5jb25maWcucGhhc2UxLmp1bXA7XG4gICAgcmV0dXJuIHRoaXMucGxheU11bHRpSnVtcChlLmNhcmROb2RlMSwgdC55LCB0LmR1cmF0aW9uKTtcbiAgfVxuICBleGVjdXRlQ2FyZDFCZXppZXJBbmRUcmFpbChlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYXBwbHlCZXppZXJNb3ZlKGUuY2FyZE5vZGUxLCBlLnRhcmdldFBvczEsIHRoaXMuY29uZmlnLnBoYXNlMS5iZXppZXIpO1xuICAgIHRoaXMuZGVsYXkoZS5jYXJkTm9kZTEsIHRoaXMuY29uZmlnLnBoYXNlMS50cmFpbERlbGF5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0LmV4ZWN1dGVUcmFpbEFuZENhcmQyKGUpO1xuICAgIH0pO1xuICB9XG4gIGV4ZWN1dGVUcmFpbEFuZENhcmQyKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQoZS5jYXJkTm9kZTEpICYmIGNjLmlzVmFsaWQoZS5jYXJkTm9kZTIpKSB7XG4gICAgICB2YXIgaSA9IGUuY2FyZE5vZGUxLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICAgIG4gPSBlLmNhcmROb2RlMi5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdGhpcy5wbGF5VHJhaWxFZmZlY3QodGhpcy5jb250ZXh0LmVmZmVjdE5vZGUsIHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZSwgY2MudjIoaS54LCBpLnkpLCBjYy52MihuLngsIG4ueSksIHRoaXMuY29uZmlnLnRyYWlsLCB0aGlzLmNvbmZpZy5yZXNvdXJjZXMsIHRoaXMuY29udGV4dC5sb2FkUmVzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0LmNvbnRleHQucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZChlLnRpbGVJZDIpO1xuICAgICAgICAgIHQucnVuQ2FyZDJBbmltYXRpb24oZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ydW5DYXJkMkFuaW1hdGlvbihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcnVuQ2FyZDJBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmFwcGx5Q2FyZDJIaXRFZmZlY3QoZSk7XG4gICAgdGhpcy5kZWxheShlLmNhcmROb2RlMiwgdGhpcy5jb25maWcucGhhc2UxLmhpdERlbGF5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0LmFwcGx5Q2FyZDJGbG93TGlnaHQoZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5leGVjdXRlQ2FyZDJKdW1wKGUpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuZXhlY3V0ZUNhcmQyQmV6aWVyKGUpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25DYXJkMkFycml2ZWQoKTtcbiAgICB9KTtcbiAgfVxuICBleGVjdXRlQ2FyZDJKdW1wKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29uZmlnLnBoYXNlMi5qdW1wO1xuICAgIHJldHVybiB0aGlzLnBsYXlNdWx0aUp1bXAoZS5jYXJkTm9kZTIsIHQueSwgdC5kdXJhdGlvbik7XG4gIH1cbiAgZXhlY3V0ZUNhcmQyQmV6aWVyKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29uZmlnLnBoYXNlMi5iZXppZXIsXG4gICAgICBpID0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoLFxuICAgICAgbyA9IHQuZHVyYXRpb24gKyAoaSAtIGUucnVuSW5kZXggLSAxKSAqIHRoaXMuY29uZmlnLnBoYXNlMS5kZWxheSArIChpIC0gZS5ydW5JbmRleCAtIDEpICogdGhpcy5jb25maWcucGhhc2UxLmRlbGF5ICogMixcbiAgICAgIGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHQpLCB7XG4gICAgICAgIGR1cmF0aW9uOiBvXG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5hcHBseUJlemllck1vdmUoZS5jYXJkTm9kZTIsIGUudGFyZ2V0UG9zMiwgYSwgdHJ1ZSk7XG4gIH1cbiAgYXBwbHlCZXppZXJNb3ZlKGUsIHQsIGksIG4gPSBmYWxzZSkge1xuICAgIHZhciBvLCBhLCByLCBjLCBzO1xuICAgIGlmICh2b2lkIDAgIT09IGkuYW5nbGUgfHwgdm9pZCAwICE9PSBpLnNjYWxlKSB7XG4gICAgICB2YXIgbCA9IG51bGwgIT09IChvID0gaS50cmFuc2Zvcm1EdXJhdGlvbikgJiYgdm9pZCAwICE9PSBvID8gbyA6IGkuZHVyYXRpb24sXG4gICAgICAgIGQgPSBudWxsICE9PSAoYSA9IGkucmVzdG9yZURlbGF5KSAmJiB2b2lkIDAgIT09IGEgPyBhIDogaS5kdXJhdGlvbixcbiAgICAgICAgdSA9IG4gPyAtKG51bGwgIT09IChyID0gaS5hbmdsZSkgJiYgdm9pZCAwICE9PSByID8gciA6IDApIDogbnVsbCAhPT0gKGMgPSBpLmFuZ2xlKSAmJiB2b2lkIDAgIT09IGMgPyBjIDogMDtcbiAgICAgIGNjLnR3ZWVuKGUpLnRvKGwsIHtcbiAgICAgICAgYW5nbGU6IHUsXG4gICAgICAgIHNjYWxlOiBudWxsICE9PSAocyA9IGkuc2NhbGUpICYmIHZvaWQgMCAhPT0gcyA/IHMgOiAxXG4gICAgICB9KS50byhkLCB7XG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBzY2FsZTogMVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYmV6aWVyVG8oZSwgdCwgaS5kdXJhdGlvbiwgaS5jb250cm9sWU9mZnNldCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICBlLmFuZ2xlID0gMDtcbiAgICAgICAgZS5zY2FsZSA9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYXBwbHlDYXJkMkhpdEVmZmVjdChlKSB7XG4gICAgdGhpcy5jb250ZXh0LnJlbW92ZVRpbGVOb2RlKGUudGlsZUlkMik7XG4gICAgZS5jYXJkTm9kZTIuYWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgdCA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZSB8fCAxLFxuICAgICAgaSA9IGZhbHNlICE9PSB0aGlzLmNvbmZpZy50cmFpbC5oaXRGb2xsb3dUYXJnZXQsXG4gICAgICBuID0gdGhpcy5jb25maWcucmVzb3VyY2VzO1xuICAgIHRoaXMucGxheUhpdEVmZmVjdChlLmNhcmROb2RlMiwgdCwgbi5oaXRTcGluZS5wYXRoLCBuLmhpdFNwaW5lLmJ1bmRsZSwgbi5oaXRTcGluZS5hbmltLCBpKTtcbiAgfVxuICBhcHBseUNhcmQyRmxvd0xpZ2h0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZSB8fCAxLFxuICAgICAgaSA9IHRoaXMuY29uZmlnLnJlc291cmNlcyxcbiAgICAgIG4gPSBlLmNhcmROb2RlMi5nZXRDaGlsZEJ5TmFtZShcIlRpbGVBbmltTm9kZU5hbWVcIikgfHwgZS5jYXJkTm9kZTI7XG4gICAgdGhpcy5zaG93Rmxvd0xpZ2h0KG4sIHQsIGkuZmxvd0xpZ2h0LnBhdGgsIGkuZmxvd0xpZ2h0LmJ1bmRsZSwgaS5mbG93TGlnaHQuYW5pbSk7XG4gIH1cbiAgbW92ZUNhcmQyVG9UYXJnZXQoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5wbGF5Q2FyZDJKdW1wKGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucGxheUNhcmQyQmV6aWVyKGUpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlDYXJkMkp1bXAoZSkge1xuICAgIHZhciB0ID0gdGhpcy5jb25maWcucGhhc2UyLmp1bXA7XG4gICAgcmV0dXJuIHRoaXMucGxheU11bHRpSnVtcChlLmNhcmROb2RlMiwgdC55LCB0LmR1cmF0aW9uKTtcbiAgfVxuICBwbGF5Q2FyZDJCZXppZXIoZSkge1xuICAgIHZhciB0LFxuICAgICAgaSxcbiAgICAgIG4sXG4gICAgICBvLFxuICAgICAgYSA9IHRoaXMuY29uZmlnLnBoYXNlMi5iZXppZXI7XG4gICAgaWYgKHZvaWQgMCAhPT0gYS5hbmdsZSB8fCB2b2lkIDAgIT09IGEuc2NhbGUpIHtcbiAgICAgIHZhciByID0gbnVsbCAhPT0gKHQgPSBhLnRyYW5zZm9ybUR1cmF0aW9uKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogYS5kdXJhdGlvbixcbiAgICAgICAgYyA9IG51bGwgIT09IChpID0gYS5yZXN0b3JlRGVsYXkpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBhLmR1cmF0aW9uO1xuICAgICAgY2MudHdlZW4oZS5jYXJkTm9kZTIpLnRvKHIsIHtcbiAgICAgICAgYW5nbGU6IC0obnVsbCAhPT0gKG4gPSBhLmFuZ2xlKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMCksXG4gICAgICAgIHNjYWxlOiBudWxsICE9PSAobyA9IGEuc2NhbGUpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiAxXG4gICAgICB9KS50byhjLCB7XG4gICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICBzY2FsZTogMVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYmV6aWVyVG8oZS5jYXJkTm9kZTIsIGUudGFyZ2V0UG9zMiwgYS5kdXJhdGlvbiwgYS5jb250cm9sWU9mZnNldCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlLmNhcmROb2RlMikpIHtcbiAgICAgICAgZS5jYXJkTm9kZTIuYW5nbGUgPSAwO1xuICAgICAgICBlLmNhcmROb2RlMi5zY2FsZSA9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25DYXJkMkFycml2ZWQoKSB7XG4gICAgaWYgKCsrdGhpcy5jb21wbGV0ZWRDb3VudCA+PSB0aGlzLm5vZGVJbmZvcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmFkZVRvV2hpdGUoKTtcbiAgICAgIHRoaXMuc3RhcnRQaGFzZTNBcnJheUVmZmVjdCgpO1xuICAgIH1cbiAgfVxuICBzdGFydFBoYXNlM0FycmF5RWZmZWN0KCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLmNvbmZpZy5hcnJheUVmZmVjdDtcbiAgICBpZiAodGhpcy5jb25maWcucmVzb3VyY2VzLmVsaW1pbmF0aW9uQSkge1xuICAgICAgdmFyIGkgPSB0aGlzLm1hc2tMYXllciB8fCB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgIHRoaXMuZGVsYXkoaSwgdC5kZWxheSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuY3JlYXRlRWxpbWluYXRpb25BU3BpbmVzKCk7XG4gICAgICAgIGUuZGVsYXkoaSwgdC5hSW5EdXJhdGlvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZS5hcHBseUV4cGFuZEFuaW1hdGlvbigpO1xuICAgICAgICAgIGUuZGVsYXkoaSwgdC5iRGVsYXkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuY3JlYXRlRWxpbWluYXRpb25CU3BpbmVzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS5kZWxheShpLCB0LmJnRWZmZWN0RGVsYXkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuYXBwbHlHbG9iYWxFZmZlY3QoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gIH1cbiAgY3JlYXRlRWxpbWluYXRpb25BU3BpbmVzKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXM7XG4gICAgaWYgKHQuZWxpbWluYXRpb25BKSB7XG4gICAgICB2YXIgaSA9IFtcImluXzFcIiwgXCJpbl8yXCIsIFwiaW5fM1wiXSxcbiAgICAgICAgbiA9IFtcIm91dF8xXCIsIFwib3V0XzJcIiwgXCJvdXRfM1wiXSxcbiAgICAgICAgbyA9IHRoaXMubm9kZUluZm9zLmxlbmd0aCxcbiAgICAgICAgYSA9IHRoaXMuY29uZmlnLmhlYXJ0TGF5b3V0W29dO1xuICAgICAgYSB8fCAoYSA9IHRoaXMuY29uZmlnLmhlYXJ0TGF5b3V0WzddKTtcbiAgICAgIHZhciByID0gYS5hbmltSW5kZXhlc0xlZnQgfHwgWzEsIDIsIDMsIDEsIDIsIDMsIDFdLFxuICAgICAgICBjID0gYS5hbmltSW5kZXhlc1JpZ2h0IHx8IFsxLCAyLCAzLCAxLCAyLCAzLCAxXTtcbiAgICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKG8sIGEpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoby5jYXJkTm9kZTEpICYmIGNjLmlzVmFsaWQoby5jYXJkTm9kZTIpKSB7XG4gICAgICAgICAgdmFyIGwgPSBlLmNvbnRleHQubGF5b3V0U2NhbGUsXG4gICAgICAgICAgICBkID0gclthXSB8fCAxLFxuICAgICAgICAgICAgdSA9IGlbZCAtIDFdLFxuICAgICAgICAgICAgcCA9IG5bZCAtIDFdLFxuICAgICAgICAgICAgaCA9IEJhc2VTcGluZS5jcmVhdGUodC5lbGltaW5hdGlvbkEucGF0aCwgdSwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjYy5pc1ZhbGlkKGgpICYmIGguc2V0QW5pbWF0aW9uKHAsIDEsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgfSwgZmFsc2UsIHQuZWxpbWluYXRpb25BLmJ1bmRsZSk7XG4gICAgICAgICAgaC5ub2RlLnBhcmVudCA9IGUuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgICAgICAgIGgubm9kZS5wb3NpdGlvbiA9IG8uY2FyZE5vZGUxLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgaC5ub2RlLnpJbmRleCA9IG8uY2FyZE5vZGUxLnpJbmRleCArIDIwMDtcbiAgICAgICAgICBoLm5vZGUuc2NhbGUgPSBsO1xuICAgICAgICAgIGgubm9kZS5zY2FsZVggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gbCA6IC1sO1xuICAgICAgICAgIGUuZWxpbWluYXRpb25TcGluZXMuc2V0KG8uY2FyZE5vZGUxLCB7XG4gICAgICAgICAgICBhU3BpbmU6IGhcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgZiA9IGNbYV0gfHwgMSxcbiAgICAgICAgICAgIHkgPSBpW2YgLSAxXSxcbiAgICAgICAgICAgIG0gPSBuW2YgLSAxXSxcbiAgICAgICAgICAgIGcgPSBCYXNlU3BpbmUuY3JlYXRlKHQuZWxpbWluYXRpb25BLnBhdGgsIHksIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY2MuaXNWYWxpZChnKSAmJiBnLnNldEFuaW1hdGlvbihtLCAxLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIGZhbHNlLCB0LmVsaW1pbmF0aW9uQS5idW5kbGUpO1xuICAgICAgICAgIGcubm9kZS5wYXJlbnQgPSBlLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgICAgICBnLm5vZGUucG9zaXRpb24gPSBvLmNhcmROb2RlMi5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgIGcubm9kZS56SW5kZXggPSBvLmNhcmROb2RlMi56SW5kZXggKyAyMDA7XG4gICAgICAgICAgZy5ub2RlLnNjYWxlID0gbDtcbiAgICAgICAgICBnLm5vZGUuc2NhbGVYID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IGwgOiAtbDtcbiAgICAgICAgICBlLmVsaW1pbmF0aW9uU3BpbmVzLnNldChvLmNhcmROb2RlMiwge1xuICAgICAgICAgICAgYVNwaW5lOiBnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhcHBseUdsb2JhbEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29uZmlnLnJlc291cmNlcztcbiAgICBpZiAoZS5lbGltaW5hdGlvbkVmZmVjdCAmJiAhdGhpcy5nbG9iYWxFZmZlY3RQbGF5ZWQpIHtcbiAgICAgIHRoaXMuZ2xvYmFsRWZmZWN0UGxheWVkID0gdHJ1ZTtcbiAgICAgIHZhciB0ID0gQmFzZVNwaW5lLmNyZWF0ZShlLmVsaW1pbmF0aW9uRWZmZWN0LnBhdGgsIGUuZWxpbWluYXRpb25FZmZlY3QuYW5pbSB8fCBcImluXCIsIDEsIG51bGwsIHRydWUsIGUuZWxpbWluYXRpb25FZmZlY3QuYnVuZGxlKTtcbiAgICAgIHQubm9kZS5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgIHQubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgICAgdC5ub2RlLnpJbmRleCA9IC0xMDA7XG4gICAgICB0aGlzLmZhZGVUb1doaXRlKCk7XG4gICAgfVxuICB9XG4gIGNyZWF0ZUVsaW1pbmF0aW9uQlNwaW5lcygpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5jb25maWcucmVzb3VyY2VzO1xuICAgIGlmICh0LmVsaW1pbmF0aW9uQikge1xuICAgICAgdmFyIGkgPSBbXCJpbl9ibHVlXCIsIFwiaW5fcGlua1wiXTtcbiAgICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobi5jYXJkTm9kZTEpICYmIGNjLmlzVmFsaWQobi5jYXJkTm9kZTIpKSB7XG4gICAgICAgICAgdmFyIG8gPSBpW01hdGguZmxvb3IoMiAqIE1hdGgucmFuZG9tKCkpXSxcbiAgICAgICAgICAgIGEgPSBCYXNlU3BpbmUuY3JlYXRlKHQuZWxpbWluYXRpb25CLnBhdGgsIG8sIDEsIG51bGwsIHRydWUsIHQuZWxpbWluYXRpb25CLmJ1bmRsZSk7XG4gICAgICAgICAgYS5ub2RlLnBhcmVudCA9IGUuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgICAgICAgIGEubm9kZS5wb3NpdGlvbiA9IG4uY2FyZE5vZGUxLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgYS5ub2RlLnpJbmRleCA9IG4uY2FyZE5vZGUxLnpJbmRleCArIDEwMDtcbiAgICAgICAgICB2YXIgciA9IGUuZWxpbWluYXRpb25TcGluZXMuZ2V0KG4uY2FyZE5vZGUxKTtcbiAgICAgICAgICByICYmIChyLmJTcGluZSA9IGEpO1xuICAgICAgICAgIHZhciBjID0gQmFzZVNwaW5lLmNyZWF0ZSh0LmVsaW1pbmF0aW9uQi5wYXRoLCBvLCAxLCBudWxsLCB0cnVlLCB0LmVsaW1pbmF0aW9uQi5idW5kbGUpO1xuICAgICAgICAgIGMubm9kZS5wYXJlbnQgPSBlLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgICAgICBjLm5vZGUucG9zaXRpb24gPSBuLmNhcmROb2RlMi5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgIGMubm9kZS56SW5kZXggPSBuLmNhcmROb2RlMi56SW5kZXggKyAxMDA7XG4gICAgICAgICAgdmFyIGwgPSBlLmVsaW1pbmF0aW9uU3BpbmVzLmdldChuLmNhcmROb2RlMik7XG4gICAgICAgICAgbCAmJiAobC5iU3BpbmUgPSBjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFwcGx5RXhwYW5kQW5pbWF0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSB0aGlzLmNvbmZpZy5hcnJheUVmZmVjdCxcbiAgICAgIGkgPSBbXTtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChuLmNhcmROb2RlMSkgJiYgY2MuaXNWYWxpZChuLmNhcmROb2RlMikpIHtcbiAgICAgICAgdmFyIG8gPSBuLmNhcmROb2RlMS5wb3NpdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpLFxuICAgICAgICAgIGEgPSBuLmNhcmROb2RlMi5wb3NpdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpLFxuICAgICAgICAgIHIgPSBuLmNhcmROb2RlMS5wb3NpdGlvbi5jbG9uZSgpLnN1YihvLm11bCh0Lm1vdmVJbkRpc3RhbmNlKSksXG4gICAgICAgICAgYyA9IG4uY2FyZE5vZGUyLnBvc2l0aW9uLmNsb25lKCkuc3ViKGEubXVsKHQubW92ZUluRGlzdGFuY2UpKSxcbiAgICAgICAgICBzID0gbi5jYXJkTm9kZTEucG9zaXRpb24uY2xvbmUoKS5hZGQoby5tdWwodC5tb3ZlT3V0RGlzdGFuY2UpKSxcbiAgICAgICAgICBsID0gbi5jYXJkTm9kZTIucG9zaXRpb24uY2xvbmUoKS5hZGQoYS5tdWwodC5tb3ZlT3V0RGlzdGFuY2UpKTtcbiAgICAgICAgaS5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQobi5jYXJkTm9kZTEpKSB7XG4gICAgICAgICAgICBjYy50d2VlbihuLmNhcmROb2RlMSkudG8odC5leHBhbmRQaGFzZTFEdXJhdGlvbiwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcixcbiAgICAgICAgICAgICAgc2NhbGU6IHQuZXhwYW5kUGhhc2UxU2NhbGVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgICAgICAgfSkudG8odC5leHBhbmRQaGFzZTJEdXJhdGlvbiwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcyxcbiAgICAgICAgICAgICAgc2NhbGU6IHQuZXhwYW5kUGhhc2UyU2NhbGUsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVJblwiXG4gICAgICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgaS5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQobi5jYXJkTm9kZTIpKSB7XG4gICAgICAgICAgICBjYy50d2VlbihuLmNhcmROb2RlMikudG8odC5leHBhbmRQaGFzZTFEdXJhdGlvbiwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYyxcbiAgICAgICAgICAgICAgc2NhbGU6IHQuZXhwYW5kUGhhc2UxU2NhbGVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgICAgICAgfSkudG8odC5leHBhbmRQaGFzZTJEdXJhdGlvbiwge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogbCxcbiAgICAgICAgICAgICAgc2NhbGU6IHQuZXhwYW5kUGhhc2UyU2NhbGUsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVJblwiXG4gICAgICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgZS5zeW5jU3BpbmVXaXRoQ2FyZChuLmNhcmROb2RlMSwgciwgcywgdCk7XG4gICAgICAgIGUuc3luY1NwaW5lV2l0aENhcmQobi5jYXJkTm9kZTIsIGMsIGwsIHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaS5wdXNoKFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgaS5wdXNoKFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBQcm9taXNlLmFsbChpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLm9uQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuICBzeW5jU3BpbmVXaXRoQ2FyZChlLCB0LCBpLCBuKSB7XG4gICAgdmFyIG8gPSB0aGlzLmVsaW1pbmF0aW9uU3BpbmVzLmdldChlKTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIGEgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGU7XG4gICAgICBvLmFTcGluZSAmJiBjYy5pc1ZhbGlkKG8uYVNwaW5lLm5vZGUpICYmIGNjLnR3ZWVuKG8uYVNwaW5lLm5vZGUpLnRvKG4uZXhwYW5kUGhhc2UxRHVyYXRpb24sIHtcbiAgICAgICAgcG9zaXRpb246IHQsXG4gICAgICAgIHNjYWxlOiBuLmV4cGFuZFBoYXNlMVNjYWxlICogYVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwic2luZU91dFwiXG4gICAgICB9KS50byhuLmV4cGFuZFBoYXNlMkR1cmF0aW9uLCB7XG4gICAgICAgIHBvc2l0aW9uOiBpLFxuICAgICAgICBzY2FsZTogbi5leHBhbmRQaGFzZTJTY2FsZSAqIGEsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJblwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgby5iU3BpbmUgJiYgY2MuaXNWYWxpZChvLmJTcGluZS5ub2RlKSAmJiBjYy50d2VlbihvLmJTcGluZS5ub2RlKS50byhuLmV4cGFuZFBoYXNlMUR1cmF0aW9uLCB7XG4gICAgICAgIHBvc2l0aW9uOiB0LFxuICAgICAgICBzY2FsZTogbi5leHBhbmRQaGFzZTFTY2FsZSAqIGFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgfSkudG8obi5leHBhbmRQaGFzZTJEdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogaSxcbiAgICAgICAgc2NhbGU6IG4uZXhwYW5kUGhhc2UyU2NhbGUgKiBhLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5cIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgb25BbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgZSA9IFtdO1xuICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBlLnB1c2godC5jYXJkTm9kZTEsIHQuY2FyZE5vZGUyKTtcbiAgICB9KTtcbiAgICB0aGlzLmRlc3Ryb3lOb2RlcyhlKTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikpIHtcbiAgICAgIHRoaXMubWFza0xheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubWFza0xheWVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dC5vbkNvbXBsZXRlKCk7XG4gIH1cbiAgc2hvd0NsZWFyVGlwKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkVGlwTm9kZVwiKTtcbiAgICB0ICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB2YXIgaSA9IG5ldyBjYy5Ob2RlKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgZS5hZGRDaGlsZChpKTtcbiAgICBpLnpJbmRleCA9IFRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmltZ0NhcmRdICsgMTtcbiAgICBpLnNjYWxlID0gdGhpcy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgIHZhciBuID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZsb3dMaWdodDtcbiAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIG4ucGF0aCwgbi5idW5kbGUpLnNldEFuaW1hdGlvbihuLmFuaW0gfHwgXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gIH1cbiAgaW5pdE1hc2tMYXllcigpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZSkpIHtcbiAgICAgIHRoaXMubWFza0xheWVyID0gbmV3IGNjLk5vZGUoXCJNYXNrTGF5ZXJcIik7XG4gICAgICB0aGlzLm1hc2tMYXllci5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICAgIHRoaXMubWFza0xheWVyLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICB0aGlzLm1hc2tMYXllci56SW5kZXggPSAtMTAwMDtcbiAgICAgIHRoaXMubWFza0dyYXBoaWNzID0gdGhpcy5tYXNrTGF5ZXIuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgIHZhciBlID0gY2Mud2luU2l6ZTtcbiAgICAgIHRoaXMubWFza0dyYXBoaWNzLnJlY3QoLWUud2lkdGggLyAyLCAtZS5oZWlnaHQgLyAyLCBlLndpZHRoLCBlLmhlaWdodCk7XG4gICAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMCk7XG4gICAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsKCk7XG4gICAgICB0aGlzLm1hc2tMYXllci5fZmFkZUFscGhhID0gMDtcbiAgICB9XG4gIH1cbiAgZmFkZVRvRGFyaygpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5jb25maWcuZmFkZTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBpID0gdC50b0RhcmtPcGFjaXR5LFxuICAgICAgICBuID0gY2Mud2luU2l6ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubWFza0xheWVyKS50byh0LnRvRGFya0R1cmF0aW9uLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IGlcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh0LCBpLCBvLCBhKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZS5tYXNrTGF5ZXIpICYmIGUubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IHQgKyAoaSAtIHQpICogYTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBlLm1hc2tHcmFwaGljcy5yZWN0KC1uLndpZHRoIC8gMiwgLW4uaGVpZ2h0IC8gMiwgbi53aWR0aCwgbi5oZWlnaHQpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdCArIChpIC0gdCkgKiBhO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBmYWRlVG9XaGl0ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5jb25maWcuZmFkZTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBpID0gY2Mud2luU2l6ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubWFza0xheWVyKS50byh0LnRvV2hpdGVEdXJhdGlvbiwge1xuICAgICAgICBfZmFkZUFscGhhOiAwXG4gICAgICB9LCB7XG4gICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodCwgbiwgbywgYSkge1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKGUubWFza0xheWVyKSAmJiBlLm1hc2tHcmFwaGljcykge1xuICAgICAgICAgICAgdmFyIHIgPSB0ICsgKG4gLSB0KSAqIGE7XG4gICAgICAgICAgICBlLm1hc2tHcmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgZS5tYXNrR3JhcGhpY3MucmVjdCgtaS53aWR0aCAvIDIsIC1pLmhlaWdodCAvIDIsIGkud2lkdGgsIGkuaGVpZ2h0KTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCByKTtcbiAgICAgICAgICAgIGUubWFza0dyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHQgKyAobiAtIHQpICogYTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbn0iXX0=