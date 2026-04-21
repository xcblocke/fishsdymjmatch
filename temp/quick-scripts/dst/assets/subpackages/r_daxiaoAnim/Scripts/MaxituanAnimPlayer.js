
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_daxiaoAnim/Scripts/MaxituanAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9438q0iTRFIa9MA/FVR4CH', 'MaxituanAnimPlayer');
// subpackages/r_daxiaoAnim/Scripts/MaxituanAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxituanAnimPlayer = void 0;
var BaseTileNode_1 = require("../../../Scripts/BaseTileNode");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var MaxituanAnimPlayer = /** @class */ (function () {
    function MaxituanAnimPlayer(e, t) {
        this.nodeInfos = [];
        this.completedCount = 0;
        this.context = null;
        this.config = null;
        this.context = e;
        this.config = t;
    }
    MaxituanAnimPlayer.getConfig = function () {
        return {
            phase1: {
                duration: 0.5,
                delay: 0.03,
                trailDelay: 0.036,
                hitDelay: 0.2,
                controlYOffset: 200,
                preJumpY: void 0,
                preJumpDuration: void 0,
                angle: void 0,
                scale: void 0,
                transformDuration: void 0,
                restoreDelay: void 0
            },
            phase2: {
                duration: 0.5,
                controlYOffset: 200,
                preJumpY: void 0,
                preJumpDuration: void 0,
                angle: void 0,
                scale: void 0,
                transformDuration: void 0,
                restoreDelay: void 0
            },
            phase3: {
                duration: 0.3,
                delay: 0.09,
                controlYOffset: 200,
                finalScale: 0
            },
            circle: {
                radius: 2.5
            },
            trail: {
                duration: 0.3,
                fadeTime: 0.3,
                stroke: 64,
                hitFollowTarget: true
            },
            resources: {
                trailSprite: {
                    path: "texture/maxituan/gameplay_mx_star",
                    bundle: "r_daxiaomaxituan"
                },
                trailTexture: {
                    path: "texture/maxituan/gameplay_mx_star_tail",
                    bundle: "r_daxiaomaxituan"
                },
                hitSpine: {
                    path: "spine/maxituan/gameplay_hit_mx",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_hit_mx"
                },
                flowLight: {
                    path: "spine/maxituan/gameplay_flowingLight_mx",
                    bundle: "r_daxiaomaxituan",
                    anim: "idle"
                },
                bottomSpine: {
                    path: "spine/maxituan/gameplay_great_elimination_mx_ju_buttom",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_great_elimination_mx_ju_buttom"
                },
                topSpine: {
                    path: "spine/maxituan/gameplay_great_elimination_mx_ju_top",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_great_elimination_mx_ju_top"
                },
                endBottomSpine: {
                    path: "spine/maxituan/gameplay_great_elimination_effect_mx_buttom",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_great_elimination_effect_mx_buttom"
                },
                endTopSpine: {
                    path: "spine/maxituan/gameplay_great_elimination_effect_mx_top",
                    bundle: "r_daxiaomaxituan",
                    anim: "gameplay_great_elimination_effect_mx_top"
                }
            }
        };
    };
    MaxituanAnimPlayer.playFullAnimation = function (t, i) {
        var n = MaxituanAnimPlayer.createAnimContext(t), o = new MaxituanAnimPlayer(n, MaxituanAnimPlayer.getConfig());
        o.setupPositions(i, 0);
        i.forEach(function (e) {
            o.showClearTip(e.cardNode1);
            o.showClearTip(e.cardNode2);
            o.context.removeTileNodeByTileId(e.tileId1);
        });
        o.playAnimation(i);
    };
    MaxituanAnimPlayer.createAnimContext = function (e) {
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
    MaxituanAnimPlayer.hideAllFlowLight = function (e, t, i) {
        var o, a, r, c;
        try {
            for (var s = __values(t), l = s.next(); !l.done; l = s.next()) {
                var d = l.value, u = null === (r = e.context.getTileNodeByTileId(d.tileId1)) || void 0 === r ? void 0 : r.tileNode;
                u && i.hideFlowLight(u);
                var p = null === (c = e.context.getTileNodeByTileId(d.tileId2)) || void 0 === c ? void 0 : c.tileNode;
                p && i.hideFlowLight(p);
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
    };
    MaxituanAnimPlayer.prototype.setupPositions = function (e) {
        var t = this;
        this.sortInfos(e);
        var i = e[0].cardNode1.getContentSize().width, n = this.config.circle.radius * i;
        e.forEach(function (i, o) {
            t.setInfoPositionCircle(i, o, n, e.length);
        });
    };
    MaxituanAnimPlayer.prototype.sortInfos = function (e) {
        var t = this;
        e.sort(function (e, i) {
            var n = t.context.getTileObject(e.tileId2), o = t.context.getTileObject(i.tileId2);
            return n && o ? n.gridPosX !== o.gridPosX ? n.gridPosX - o.gridPosX : n.gridPosY - o.gridPosY : 0;
        });
    };
    MaxituanAnimPlayer.prototype.setInfoPositionCircle = function (e, t, i, n) {
        var o = 360 / (2 * n), a = (t * o - 90) * Math.PI / 180, r = ((n + t) * o - 90) * Math.PI / 180, c = Math.cos(a) * i, s = Math.sin(a) * i, l = Math.cos(r) * i, d = Math.sin(r) * i;
        e.targetPos1 = cc.v3(l, d, 0);
        e.targetPos2 = cc.v3(c, s, 0);
        e.runIndex = t;
        var u = 180 * -Math.atan2(-l, -d) / Math.PI + 180, p = 180 * -Math.atan2(-c, -s) / Math.PI + 180;
        e.targetAngle1 = u;
        e.targetAngle2 = p;
        var h = Math.floor(-d), f = Math.floor(-s);
        e.cardNode1.zIndex = h + 10 * t;
        e.cardNode2.zIndex = f + 3000 + 10 * t;
    };
    MaxituanAnimPlayer.prototype.playAnimation = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.completedCount = 0;
        e.forEach(function (e) {
            t.runCard1Animation(e);
            t.runCard2Animation(e);
        });
    };
    MaxituanAnimPlayer.prototype.hideFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        var i = e.getChildByName("DaxiaoFlowLightNode");
        i && i.destroy();
    };
    MaxituanAnimPlayer.prototype.delay = function (e, t) {
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                cc.tween(e).delay(t).call(i).start();
            }
            else {
                i();
            }
        });
    };
    MaxituanAnimPlayer.prototype.tweenTo = function (e, t, i) {
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                cc.tween(e).to(t, i).call(n).start();
            }
            else {
                n();
            }
        });
    };
    MaxituanAnimPlayer.prototype.createBezierEasing = function (e, t, i, n) {
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
    MaxituanAnimPlayer.prototype.bezierTo = function (e, t, i, n) {
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
    MaxituanAnimPlayer.prototype.arcTo = function (e, t, i) {
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
    MaxituanAnimPlayer.prototype.playTrailEffect = function (e, t, i, n, o, c, s) {
        var l = this, d = new cc.Node("TrailContainer");
        d.parent = e;
        d.position = cc.v3(i.x, i.y, 0);
        d.zIndex = 2000;
        d.scale = t || 1;
        if (c.trailSpine) {
            BaseSpine_1.default.create(c.trailSpine.path, c.trailSpine.anim || "in", -1, null, false, c.trailSpine.bundle).node.parent = d;
        }
        else {
            c.trailSprite && (BaseSprite_1.default.create(c.trailSprite.path, c.trailSprite.bundle).node.parent = d);
        }
        return s(c.trailTexture.path, cc.SpriteFrame, c.trailTexture.bundle).then(function (e) {
            if (!e || !cc.isValid(d))
                return Promise.resolve();
            var t = d.addComponent(cc.MotionStreak);
            t.fadeTime = o.fadeTime;
            t.minSeg = 1;
            t.stroke = o.stroke;
            t.texture = e.getTexture();
            return l.arcTo(d, cc.v3(n.x, n.y, 0), o.duration).then(function () {
                cc.isValid(d) && cc.tween(d).to(0.2, {
                    opacity: 0
                }).call(function () {
                    cc.isValid(d) && d.destroy();
                }).start();
            });
        });
    };
    MaxituanAnimPlayer.prototype.showFlowLight = function (e, t, i, n, o) {
        var r = e.getChildByName("DaxiaoCardTipNode");
        r && (r.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var c = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(c);
            c.scale = t;
            BaseSpine_1.default.refreshWithNode(c, i, n).setAnimation(o || "init", -1, null, false);
        }
    };
    MaxituanAnimPlayer.prototype.playHitEffect = function (e, t, i, n, o, r) {
        if (r === void 0) { r = true; }
        var c = BaseSpine_1.default.create(i, o || "in", 1, null, false, n);
        c.node.parent = r ? e : e.parent;
        c.node.position = r ? cc.v3(0, 0, 0) : e.position.clone();
        c.node.zIndex = r ? 900 : 300;
        c.node.scale = t;
        c.node.name = "DaxiaoHitSpineNode";
        return c;
    };
    MaxituanAnimPlayer.prototype.playEliminationEffect = function (e, t, i) {
        var o, r;
        if (i)
            try {
                for (var c = __values(t), s = c.next(); !s.done; s = c.next()) {
                    var l = s.value, d = BaseSpine_1.default.create(i.path, "in", 1, null, true, i.bundle);
                    d.node.parent = e;
                    d.node.position = cc.v3(0, l, 0);
                    d.node.zIndex = 600;
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (r = c.return) && r.call(c);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
    };
    MaxituanAnimPlayer.prototype.playMultiJump = function (e, t, i) {
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
    MaxituanAnimPlayer.prototype.calculateYPositions = function (e, t, i) {
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
    MaxituanAnimPlayer.prototype.destroyNodes = function (e) {
        e.forEach(function (e) {
            return cc.isValid(e) && e.destroy();
        });
    };
    MaxituanAnimPlayer.prototype.runCard1Animation = function (e) {
        var t = this, i = e.runIndex * this.config.phase1.delay;
        this.delay(e.cardNode1, i).then(function () {
            t.startCard1Move(e);
        });
    };
    MaxituanAnimPlayer.prototype.startCard1Move = function (e) {
        var t = this.config.phase1, i = e.targetAngle1 || 0, n = e.cardNode1, o = new cc.Node("RotateContainer1");
        o.parent = n.parent;
        o.position = n.position.clone();
        o.angle = 0;
        var a = n.parent;
        n.parent = o;
        n.position = cc.v3(0, 0, 0);
        cc.tween(o).to(t.duration, {
            angle: i
        }).start();
        cc.tween(n).to(t.duration, {
            scale: 1
        }).start();
        return this.bezierTo(o, e.targetPos1, t.duration, t.controlYOffset).then(function () {
            if (cc.isValid(n) && cc.isValid(a)) {
                n.parent = a;
                n.position = o.position.clone();
                n.angle = o.angle;
            }
            cc.isValid(o) && o.destroy();
        });
    };
    MaxituanAnimPlayer.prototype.triggerTrail = function (e) {
        var t = this, i = e.cardNode1.position.clone(), n = e.cardNode2.position.clone();
        if (!n) {
            this.runCard2Animation(e);
            return Promise.resolve();
        }
        return this.playTrailEffect(this.context.effectNode, this.context.layoutScale, cc.v2(i.x, i.y), cc.v2(n.x, n.y), this.config.trail, this.config.resources, this.context.loadRes).then(function () {
            t.context.removeTileNodeByTileId(e.tileId2);
            return t.runCard2Animation(e);
        });
    };
    MaxituanAnimPlayer.prototype.runCard2Animation = function (e) {
        var t = this, i = this.nodeInfos.length - 1, n = this.config.phase1, o = this.config.phase2, a = i * n.delay + n.duration + (e.runIndex + 1) * n.delay - o.duration;
        this.delay(e.cardNode2, a).then(function () {
            t.context.removeTileNode(e.tileId2);
            e.cardNode2.active = true;
            t.moveCard2ToTarget(e).then(function () {
                return t.onCard2Arrived();
            });
        });
    };
    MaxituanAnimPlayer.prototype.showCard2AndPlayHit = function (e) {
        this.context.removeTileNode(e.tileId2);
        e.cardNode2.active = true;
        var t = this.context.layoutScale || 1, i = false !== this.config.trail.hitFollowTarget, n = this.config.resources;
        this.playHitEffect(e.cardNode2, t, n.hitSpine.path, n.hitSpine.bundle, n.hitSpine.anim, i);
    };
    MaxituanAnimPlayer.prototype.showCard2FlowLight = function (e) {
        var t = this.context.layoutScale || 1, i = this.config.resources, n = e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2;
        this.showFlowLight(n, t, i.flowLight.path, i.flowLight.bundle, i.flowLight.anim);
    };
    MaxituanAnimPlayer.prototype.moveCard2ToTarget = function (e) {
        var t = this.config.phase2, i = e.targetAngle2 || 0, n = e.cardNode2, o = new cc.Node("RotateContainer2");
        o.parent = n.parent;
        o.position = n.position.clone();
        o.angle = 0;
        var a = n.parent;
        n.parent = o;
        n.position = cc.v3(0, 0, 0);
        cc.tween(o).to(t.duration, {
            angle: i
        }).start();
        cc.tween(n).to(t.duration, {
            scale: 1
        }).start();
        return this.bezierTo(o, e.targetPos2, t.duration, t.controlYOffset).then(function () {
            if (cc.isValid(n) && cc.isValid(a)) {
                n.parent = a;
                n.position = o.position.clone();
                n.angle = o.angle;
            }
            cc.isValid(o) && o.destroy();
        });
    };
    MaxituanAnimPlayer.prototype.onCard2Arrived = function () {
        ++this.completedCount >= this.nodeInfos.length && this.playPhase3();
    };
    MaxituanAnimPlayer.prototype.playPhase3 = function () {
        var e = this;
        this.completedCount = 0;
        this.buildPhase3MoveSequence().forEach(function (t, i) {
            e.playPhase3SingleCard(t, i);
        });
    };
    MaxituanAnimPlayer.prototype.buildPhase3MoveSequence = function () {
        for (var e = [], t = this.nodeInfos.length - 1; t >= 0; t--)
            e.push({
                node: this.nodeInfos[t].cardNode1,
                isFirst: t === this.nodeInfos.length - 1
            });
        for (t = this.nodeInfos.length - 1; t >= 0; t--)
            e.push({
                node: this.nodeInfos[t].cardNode2,
                isFirst: false
            });
        return e;
    };
    MaxituanAnimPlayer.prototype.playPhase3SingleCard = function (e, t) {
        var i = this, n = this.config.phase3, o = t * n.delay, a = cc.v3(0, 0, 0);
        this.delay(e.node, o).then(function () {
            e.isFirst && i.playPhase3BackgroundSpines();
            void 0 !== n.finalScale && cc.tween(e.node).to(n.duration, {
                scale: n.finalScale
            }).start();
            return i.bezierTo(e.node, a, n.duration, n.controlYOffset);
        }).then(function () {
            return i.onPhase3CardArrived();
        });
    };
    MaxituanAnimPlayer.prototype.playPhase3BackgroundSpines = function () {
        var e = this.config.resources, t = this.context.effectNode, i = cc.v3(0, 0, 0);
        e.bottomSpine && this.createBackgroundSpine(e.bottomSpine, t, i, -500);
        e.topSpine && this.createBackgroundSpine(e.topSpine, t, i, 9600);
    };
    MaxituanAnimPlayer.prototype.createBackgroundSpine = function (e, t, i, n) {
        var o = BaseSpine_1.default.create(e.path, e.anim || "in", 1, null, true, e.bundle);
        o.node.parent = t;
        o.node.position = i;
        o.node.zIndex = n;
    };
    MaxituanAnimPlayer.prototype.onPhase3CardArrived = function () {
        var e = 2 * this.nodeInfos.length;
        if (++this.completedCount >= e) {
            this.playPhase3EndSpines();
            this.onAnimationComplete();
        }
    };
    MaxituanAnimPlayer.prototype.playPhase3EndSpines = function () {
        var e = this.config.resources, t = this.context.effectNode, i = cc.v3(0, 0, 0);
        e.endBottomSpine && this.createBackgroundSpine(e.endBottomSpine, t, i, -500);
        e.endTopSpine && this.createBackgroundSpine(e.endTopSpine, t, i, 600);
    };
    MaxituanAnimPlayer.prototype.onAnimationComplete = function () {
        var e = [];
        this.nodeInfos.forEach(function (t) {
            return e.push(t.cardNode1, t.cardNode2);
        });
        this.destroyNodes(e);
        this.context.onComplete();
    };
    MaxituanAnimPlayer.prototype.showClearTip = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        var i = new cc.Node("DaxiaoCardTipNode");
        e.addChild(i);
        i.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        i.scale = this.context.layoutScale;
        var n = this.config.resources.flowLight;
        BaseSpine_1.default.refreshWithNode(i, n.path, n.bundle).setAnimation(n.anim || "init", -1, null, false);
    };
    return MaxituanAnimPlayer;
}());
exports.MaxituanAnimPlayer = MaxituanAnimPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RheGlhb0FuaW0vU2NyaXB0cy9NYXhpdHVhbkFuaW1QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBa0Y7QUFDbEYseUVBQW9FO0FBQ3BFLDJFQUFzRTtBQUN0RTtJQUtFLDRCQUFZLENBQUMsRUFBRSxDQUFDO1FBSmhCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVaLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDTSw0QkFBUyxHQUFoQjtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxHQUFHO2dCQUNuQixRQUFRLEVBQUUsS0FBSyxDQUFDO2dCQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNiLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ2IsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO2dCQUN6QixZQUFZLEVBQUUsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxHQUFHO2dCQUNuQixRQUFRLEVBQUUsS0FBSyxDQUFDO2dCQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNiLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ2IsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO2dCQUN6QixZ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QUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQ2hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDdEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ25CLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDbkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FB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QUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELHlDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxNQUFNLEdBQUcsZ0NBQWlCLENBQUMsNkJBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDeEMsbUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FsbEJBLEFBa2xCQyxJQUFBO0FBbGxCWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWxlTm9kZVpJbmRleE1hcCwgRVRpbGVOb2RlTmFtZXMgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0Jhc2VUaWxlTm9kZSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuZXhwb3J0IGNsYXNzIE1heGl0dWFuQW5pbVBsYXllciB7XG4gIG5vZGVJbmZvcyA9IFtdO1xuICBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIGNvbnRleHQgPSBudWxsO1xuICBjb25maWcgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihlLCB0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gZTtcbiAgICB0aGlzLmNvbmZpZyA9IHQ7XG4gIH1cbiAgc3RhdGljIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGhhc2UxOiB7XG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgIGRlbGF5OiAwLjAzLFxuICAgICAgICB0cmFpbERlbGF5OiAwLjAzNixcbiAgICAgICAgaGl0RGVsYXk6IDAuMixcbiAgICAgICAgY29udHJvbFlPZmZzZXQ6IDIwMCxcbiAgICAgICAgcHJlSnVtcFk6IHZvaWQgMCxcbiAgICAgICAgcHJlSnVtcER1cmF0aW9uOiB2b2lkIDAsXG4gICAgICAgIGFuZ2xlOiB2b2lkIDAsXG4gICAgICAgIHNjYWxlOiB2b2lkIDAsXG4gICAgICAgIHRyYW5zZm9ybUR1cmF0aW9uOiB2b2lkIDAsXG4gICAgICAgIHJlc3RvcmVEZWxheTogdm9pZCAwXG4gICAgICB9LFxuICAgICAgcGhhc2UyOiB7XG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgIGNvbnRyb2xZT2Zmc2V0OiAyMDAsXG4gICAgICAgIHByZUp1bXBZOiB2b2lkIDAsXG4gICAgICAgIHByZUp1bXBEdXJhdGlvbjogdm9pZCAwLFxuICAgICAgICBhbmdsZTogdm9pZCAwLFxuICAgICAgICBzY2FsZTogdm9pZCAwLFxuICAgICAgICB0cmFuc2Zvcm1EdXJhdGlvbjogdm9pZCAwLFxuICAgICAgICByZXN0b3JlRGVsYXk6IHZvaWQgMFxuICAgICAgfSxcbiAgICAgIHBoYXNlMzoge1xuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICBkZWxheTogMC4wOSxcbiAgICAgICAgY29udHJvbFlPZmZzZXQ6IDIwMCxcbiAgICAgICAgZmluYWxTY2FsZTogMFxuICAgICAgfSxcbiAgICAgIGNpcmNsZToge1xuICAgICAgICByYWRpdXM6IDIuNVxuICAgICAgfSxcbiAgICAgIHRyYWlsOiB7XG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIGZhZGVUaW1lOiAwLjMsXG4gICAgICAgIHN0cm9rZTogNjQsXG4gICAgICAgIGhpdEZvbGxvd1RhcmdldDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHJlc291cmNlczoge1xuICAgICAgICB0cmFpbFNwcml0ZToge1xuICAgICAgICAgIHBhdGg6IFwidGV4dHVyZS9tYXhpdHVhbi9nYW1lcGxheV9teF9zdGFyXCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvbWF4aXR1YW5cIlxuICAgICAgICB9LFxuICAgICAgICB0cmFpbFRleHR1cmU6IHtcbiAgICAgICAgICBwYXRoOiBcInRleHR1cmUvbWF4aXR1YW4vZ2FtZXBsYXlfbXhfc3Rhcl90YWlsXCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvbWF4aXR1YW5cIlxuICAgICAgICB9LFxuICAgICAgICBoaXRTcGluZToge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvbWF4aXR1YW4vZ2FtZXBsYXlfaGl0X214XCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvbWF4aXR1YW5cIixcbiAgICAgICAgICBhbmltOiBcImdhbWVwbGF5X2hpdF9teFwiXG4gICAgICAgIH0sXG4gICAgICAgIGZsb3dMaWdodDoge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvbWF4aXR1YW4vZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0X214XCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvbWF4aXR1YW5cIixcbiAgICAgICAgICBhbmltOiBcImlkbGVcIlxuICAgICAgICB9LFxuICAgICAgICBib3R0b21TcGluZToge1xuICAgICAgICAgIHBhdGg6IFwic3BpbmUvbWF4aXR1YW4vZ2FtZXBsYXlfZ3JlYXRfZWxpbWluYXRpb25fbXhfanVfYnV0dG9tXCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvbWF4aXR1YW5cIixcbiAgICAgICAgICBhbmltOiBcImdhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX214X2p1X2J1dHRvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHRvcFNwaW5lOiB7XG4gICAgICAgICAgcGF0aDogXCJzcGluZS9tYXhpdHVhbi9nYW1lcGxheV9ncmVhdF9lbGltaW5hdGlvbl9teF9qdV90b3BcIixcbiAgICAgICAgICBidW5kbGU6IFwicl9kYXhpYW9tYXhpdHVhblwiLFxuICAgICAgICAgIGFuaW06IFwiZ2FtZXBsYXlfZ3JlYXRfZWxpbWluYXRpb25fbXhfanVfdG9wXCJcbiAgICAgICAgfSxcbiAgICAgICAgZW5kQm90dG9tU3BpbmU6IHtcbiAgICAgICAgICBwYXRoOiBcInNwaW5lL21heGl0dWFuL2dhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX2VmZmVjdF9teF9idXR0b21cIixcbiAgICAgICAgICBidW5kbGU6IFwicl9kYXhpYW9tYXhpdHVhblwiLFxuICAgICAgICAgIGFuaW06IFwiZ2FtZXBsYXlfZ3JlYXRfZWxpbWluYXRpb25fZWZmZWN0X214X2J1dHRvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIGVuZFRvcFNwaW5lOiB7XG4gICAgICAgICAgcGF0aDogXCJzcGluZS9tYXhpdHVhbi9nYW1lcGxheV9ncmVhdF9lbGltaW5hdGlvbl9lZmZlY3RfbXhfdG9wXCIsXG4gICAgICAgICAgYnVuZGxlOiBcInJfZGF4aWFvbWF4aXR1YW5cIixcbiAgICAgICAgICBhbmltOiBcImdhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX2VmZmVjdF9teF90b3BcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgcGxheUZ1bGxBbmltYXRpb24odCwgaSkge1xuICAgIHZhciBuID0gTWF4aXR1YW5BbmltUGxheWVyLmNyZWF0ZUFuaW1Db250ZXh0KHQpLFxuICAgICAgbyA9IG5ldyBNYXhpdHVhbkFuaW1QbGF5ZXIobiwgTWF4aXR1YW5BbmltUGxheWVyLmdldENvbmZpZygpKTtcbiAgICBvLnNldHVwUG9zaXRpb25zKGksIDApO1xuICAgIGkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgby5zaG93Q2xlYXJUaXAoZS5jYXJkTm9kZTEpO1xuICAgICAgby5zaG93Q2xlYXJUaXAoZS5jYXJkTm9kZTIpO1xuICAgICAgby5jb250ZXh0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZS50aWxlSWQxKTtcbiAgICB9KTtcbiAgICBvLnBsYXlBbmltYXRpb24oaSk7XG4gIH1cbiAgc3RhdGljIGNyZWF0ZUFuaW1Db250ZXh0KGUpIHtcbiAgICB2YXIgdCA9IGUuY29udGV4dCxcbiAgICAgIGkgPSB0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290O1xuICAgIHJldHVybiB7XG4gICAgICBlZmZlY3ROb2RlOiBpLFxuICAgICAgbGF5b3V0U2NhbGU6IHQubGF5b3V0U2NhbGUsXG4gICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLm9uQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICAgIH0sXG4gICAgICBvblNoYWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmdhbWVWaWV3LnBsYXlTaGFrZSgpO1xuICAgICAgfSxcbiAgICAgIGxvYWRSZXM6IGZ1bmN0aW9uIChlLCBpLCBuKSB7XG4gICAgICAgIHJldHVybiB0LmdhbWVDdHIubG9hZFJlcyhlLCBpLCBuKTtcbiAgICAgIH0sXG4gICAgICBnZXRUaWxlTm9kZVBvczogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIG8gPSB0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KG4pO1xuICAgICAgICByZXR1cm4gbyA/IGUudG9Mb2NhbFBvcyhvLmNhcmROb2RlLCBpKSA6IG51bGw7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlVGlsZU5vZGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHQucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZChlKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVUaWxlTm9kZUJ5VGlsZUlkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZSk7XG4gICAgICB9LFxuICAgICAgZ2V0VGlsZU9iamVjdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGkgPSB0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KGUpO1xuICAgICAgICByZXR1cm4gaSA/IGkuaW5mby50aWxlT2JqZWN0IDogbnVsbDtcbiAgICAgIH0sXG4gICAgICBnZXRSYW5kb21JbmRleGVzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdC5yYW5kb21HZW5lcmF0b3Iuc2h1ZmZsZShBcnJheS5mcm9tKHtcbiAgICAgICAgICBsZW5ndGg6IGVcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIGdldENhcmRTcGFjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHN0YXRpYyBoaWRlQWxsRmxvd0xpZ2h0KGUsIHQsIGkpIHtcbiAgICB2YXIgbywgYSwgciwgYztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKHQpLCBsID0gcy5uZXh0KCk7ICFsLmRvbmU7IGwgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGwudmFsdWUsXG4gICAgICAgICAgdSA9IG51bGwgPT09IChyID0gZS5jb250ZXh0LmdldFRpbGVOb2RlQnlUaWxlSWQoZC50aWxlSWQxKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci50aWxlTm9kZTtcbiAgICAgICAgdSAmJiBpLmhpZGVGbG93TGlnaHQodSk7XG4gICAgICAgIHZhciBwID0gbnVsbCA9PT0gKGMgPSBlLmNvbnRleHQuZ2V0VGlsZU5vZGVCeVRpbGVJZChkLnRpbGVJZDIpKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLnRpbGVOb2RlO1xuICAgICAgICBwICYmIGkuaGlkZUZsb3dMaWdodChwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChhID0gcy5yZXR1cm4pICYmIGEuY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXR1cFBvc2l0aW9ucyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuc29ydEluZm9zKGUpO1xuICAgIHZhciBpID0gZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS53aWR0aCxcbiAgICAgIG4gPSB0aGlzLmNvbmZpZy5jaXJjbGUucmFkaXVzICogaTtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGksIG8pIHtcbiAgICAgIHQuc2V0SW5mb1Bvc2l0aW9uQ2lyY2xlKGksIG8sIG4sIGUubGVuZ3RoKTtcbiAgICB9KTtcbiAgfVxuICBzb3J0SW5mb3MoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBlLnNvcnQoZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgIHZhciBuID0gdC5jb250ZXh0LmdldFRpbGVPYmplY3QoZS50aWxlSWQyKSxcbiAgICAgICAgbyA9IHQuY29udGV4dC5nZXRUaWxlT2JqZWN0KGkudGlsZUlkMik7XG4gICAgICByZXR1cm4gbiAmJiBvID8gbi5ncmlkUG9zWCAhPT0gby5ncmlkUG9zWCA/IG4uZ3JpZFBvc1ggLSBvLmdyaWRQb3NYIDogbi5ncmlkUG9zWSAtIG8uZ3JpZFBvc1kgOiAwO1xuICAgIH0pO1xuICB9XG4gIHNldEluZm9Qb3NpdGlvbkNpcmNsZShlLCB0LCBpLCBuKSB7XG4gICAgdmFyIG8gPSAzNjAgLyAoMiAqIG4pLFxuICAgICAgYSA9ICh0ICogbyAtIDkwKSAqIE1hdGguUEkgLyAxODAsXG4gICAgICByID0gKChuICsgdCkgKiBvIC0gOTApICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIGMgPSBNYXRoLmNvcyhhKSAqIGksXG4gICAgICBzID0gTWF0aC5zaW4oYSkgKiBpLFxuICAgICAgbCA9IE1hdGguY29zKHIpICogaSxcbiAgICAgIGQgPSBNYXRoLnNpbihyKSAqIGk7XG4gICAgZS50YXJnZXRQb3MxID0gY2MudjMobCwgZCwgMCk7XG4gICAgZS50YXJnZXRQb3MyID0gY2MudjMoYywgcywgMCk7XG4gICAgZS5ydW5JbmRleCA9IHQ7XG4gICAgdmFyIHUgPSAxODAgKiAtTWF0aC5hdGFuMigtbCwgLWQpIC8gTWF0aC5QSSArIDE4MCxcbiAgICAgIHAgPSAxODAgKiAtTWF0aC5hdGFuMigtYywgLXMpIC8gTWF0aC5QSSArIDE4MDtcbiAgICBlLnRhcmdldEFuZ2xlMSA9IHU7XG4gICAgZS50YXJnZXRBbmdsZTIgPSBwO1xuICAgIHZhciBoID0gTWF0aC5mbG9vcigtZCksXG4gICAgICBmID0gTWF0aC5mbG9vcigtcyk7XG4gICAgZS5jYXJkTm9kZTEuekluZGV4ID0gaCArIDEwICogdDtcbiAgICBlLmNhcmROb2RlMi56SW5kZXggPSBmICsgMzAwMCArIDEwICogdDtcbiAgfVxuICBwbGF5QW5pbWF0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5ub2RlSW5mb3MgPSBlO1xuICAgIHRoaXMuY29tcGxldGVkQ291bnQgPSAwO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdC5ydW5DYXJkMUFuaW1hdGlvbihlKTtcbiAgICAgIHQucnVuQ2FyZDJBbmltYXRpb24oZSk7XG4gICAgfSk7XG4gIH1cbiAgaGlkZUZsb3dMaWdodChlKSB7XG4gICAgdmFyIHQgPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgdCAmJiAodC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdmFyIGkgPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKTtcbiAgICBpICYmIGkuZGVzdHJveSgpO1xuICB9XG4gIGRlbGF5KGUsIHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGkpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGNjLnR3ZWVuKGUpLmRlbGF5KHQpLmNhbGwoaSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB0d2VlblRvKGUsIHQsIGkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGNjLnR3ZWVuKGUpLnRvKHQsIGkpLmNhbGwobikuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjcmVhdGVCZXppZXJFYXNpbmcoZSwgdCwgaSwgbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKDAgPT09IG8gfHwgMSA9PT0gbykgcmV0dXJuIG87XG4gICAgICBmb3IgKHZhciBhID0gMCwgciA9IDEsIGMgPSAwLCBzID0gMDsgcyA8IDEwOyBzKyspIHtcbiAgICAgICAgdmFyIGwgPSAoYSArIHIpIC8gMjtcbiAgICAgICAgYyA9IDMgKiAoMSAtIGwpICogKDEgLSBsKSAqIGwgKiBlICsgMyAqICgxIC0gbCkgKiBsICogbCAqIGkgKyBsICogbCAqIGw7XG4gICAgICAgIGlmIChNYXRoLmFicyhjIC0gbykgPCAwLjAwMSkgYnJlYWs7XG4gICAgICAgIGlmIChjIDwgbykge1xuICAgICAgICAgIGEgPSBsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHIgPSBsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgZCA9IChhICsgcikgLyAyO1xuICAgICAgcmV0dXJuIDMgKiAoMSAtIGQpICogKDEgLSBkKSAqIGQgKiB0ICsgMyAqICgxIC0gZCkgKiBkICogZCAqIG4gKyBkICogZCAqIGQ7XG4gICAgfTtcbiAgfVxuICBiZXppZXJUbyhlLCB0LCBpLCBuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICB2YXIgYSA9IGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICByID0gKGEueSArIHQueSkgLyAyICsgbixcbiAgICAgICAgICBjID0gKGEueCArIHQueCkgLyAyO1xuICAgICAgICBlLl9iZXppZXJQcm9ncmVzcyA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKGUpLnRvKGksIHtcbiAgICAgICAgICBfYmV6aWVyUHJvZ3Jlc3M6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIGUsIDIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChpLCBuLCBvLCBzKSB7XG4gICAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoZSkpIHJldHVybiBzO1xuICAgICAgICAgICAgdmFyIGwgPSBzLFxuICAgICAgICAgICAgICBkID0gKDEgLSBsKSAqICgxIC0gbCkgKiBhLnggKyAyICogKDEgLSBsKSAqIGwgKiBjICsgbCAqIGwgKiB0LngsXG4gICAgICAgICAgICAgIHUgPSAoMSAtIGwpICogKDEgLSBsKSAqIGEueSArIDIgKiAoMSAtIGwpICogbCAqIHIgKyBsICogbCAqIHQueTtcbiAgICAgICAgICAgIGUucG9zaXRpb24gPSBjYy52MyhkLCB1LCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpICsgKG4gLSBpKSAqIHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGUpICYmIChlLnBvc2l0aW9uID0gdCk7XG4gICAgICAgICAgbygpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIG8oKTtcbiAgICB9KTtcbiAgfVxuICBhcmNUbyhlLCB0LCBpKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICB2YXIgbyA9IGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICBhID0gdCxcbiAgICAgICAgICByID0gYS54IC0gby54LFxuICAgICAgICAgIGMgPSBhLnkgLSBvLnksXG4gICAgICAgICAgcyA9IE1hdGguc3FydChyICogciArIGMgKiBjKSxcbiAgICAgICAgICBsID0gcyAqICgwLjYgKyAwLjIgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICBkID0gTWF0aC5yYW5kb20oKSA+IDAuNSxcbiAgICAgICAgICB1ID0gKG8ueCArIGEueCkgLyAyLFxuICAgICAgICAgIHAgPSAoby55ICsgYS55KSAvIDIsXG4gICAgICAgICAgaCA9IHUgKyAtYyAvIHMgKiBsICogKGQgPyAxIDogLTEpLFxuICAgICAgICAgIGYgPSBwICsgciAvIHMgKiBsICogKGQgPyAxIDogLTEpO1xuICAgICAgICBlLl9hcmNQcm9ncmVzcyA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKGUpLnRvKGksIHtcbiAgICAgICAgICBfYXJjUHJvZ3Jlc3M6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodCwgaSwgbiwgcikge1xuICAgICAgICAgICAgdmFyIGMgPSByIDwgMC41ID8gMiAqIHIgKiByIDogMSAtIE1hdGgucG93KC0yICogciArIDIsIDIpIC8gMixcbiAgICAgICAgICAgICAgcyA9ICgxIC0gYykgKiAoMSAtIGMpICogby54ICsgMiAqICgxIC0gYykgKiBjICogaCArIGMgKiBjICogYS54LFxuICAgICAgICAgICAgICBsID0gKDEgLSBjKSAqICgxIC0gYykgKiBvLnkgKyAyICogKDEgLSBjKSAqIGMgKiBmICsgYyAqIGMgKiBhLnk7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKGUpICYmIChlLnBvc2l0aW9uID0gY2MudjMocywgbCwgMCkpO1xuICAgICAgICAgICAgcmV0dXJuIHQgKyAoaSAtIHQpICogcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUucG9zaXRpb24gPSB0KTtcbiAgICAgICAgICBuKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgbigpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlUcmFpbEVmZmVjdChlLCB0LCBpLCBuLCBvLCBjLCBzKSB7XG4gICAgdmFyIGwgPSB0aGlzLFxuICAgICAgZCA9IG5ldyBjYy5Ob2RlKFwiVHJhaWxDb250YWluZXJcIik7XG4gICAgZC5wYXJlbnQgPSBlO1xuICAgIGQucG9zaXRpb24gPSBjYy52MyhpLngsIGkueSwgMCk7XG4gICAgZC56SW5kZXggPSAyMDAwO1xuICAgIGQuc2NhbGUgPSB0IHx8IDE7XG4gICAgaWYgKGMudHJhaWxTcGluZSkge1xuICAgICAgQmFzZVNwaW5lLmNyZWF0ZShjLnRyYWlsU3BpbmUucGF0aCwgYy50cmFpbFNwaW5lLmFuaW0gfHwgXCJpblwiLCAtMSwgbnVsbCwgZmFsc2UsIGMudHJhaWxTcGluZS5idW5kbGUpLm5vZGUucGFyZW50ID0gZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYy50cmFpbFNwcml0ZSAmJiAoQmFzZVNwcml0ZS5jcmVhdGUoYy50cmFpbFNwcml0ZS5wYXRoLCBjLnRyYWlsU3ByaXRlLmJ1bmRsZSkubm9kZS5wYXJlbnQgPSBkKTtcbiAgICB9XG4gICAgcmV0dXJuIHMoYy50cmFpbFRleHR1cmUucGF0aCwgY2MuU3ByaXRlRnJhbWUsIGMudHJhaWxUZXh0dXJlLmJ1bmRsZSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFlIHx8ICFjYy5pc1ZhbGlkKGQpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB2YXIgdCA9IGQuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICB0LmZhZGVUaW1lID0gby5mYWRlVGltZTtcbiAgICAgIHQubWluU2VnID0gMTtcbiAgICAgIHQuc3Ryb2tlID0gby5zdHJva2U7XG4gICAgICB0LnRleHR1cmUgPSBlLmdldFRleHR1cmUoKTtcbiAgICAgIHJldHVybiBsLmFyY1RvKGQsIGNjLnYzKG4ueCwgbi55LCAwKSwgby5kdXJhdGlvbikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoZCkgJiYgY2MudHdlZW4oZCkudG8oMC4yLCB7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGQpICYmIGQuZGVzdHJveSgpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0Zsb3dMaWdodChlLCB0LCBpLCBuLCBvKSB7XG4gICAgdmFyIHIgPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgciAmJiAoci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKCFlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKSkge1xuICAgICAgdmFyIGMgPSBuZXcgY2MuTm9kZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIik7XG4gICAgICBlLmFkZENoaWxkKGMpO1xuICAgICAgYy5zY2FsZSA9IHQ7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGMsIGksIG4pLnNldEFuaW1hdGlvbihvIHx8IFwiaW5pdFwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICBwbGF5SGl0RWZmZWN0KGUsIHQsIGksIG4sIG8sIHIgPSB0cnVlKSB7XG4gICAgdmFyIGMgPSBCYXNlU3BpbmUuY3JlYXRlKGksIG8gfHwgXCJpblwiLCAxLCBudWxsLCBmYWxzZSwgbik7XG4gICAgYy5ub2RlLnBhcmVudCA9IHIgPyBlIDogZS5wYXJlbnQ7XG4gICAgYy5ub2RlLnBvc2l0aW9uID0gciA/IGNjLnYzKDAsIDAsIDApIDogZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIGMubm9kZS56SW5kZXggPSByID8gOTAwIDogMzAwO1xuICAgIGMubm9kZS5zY2FsZSA9IHQ7XG4gICAgYy5ub2RlLm5hbWUgPSBcIkRheGlhb0hpdFNwaW5lTm9kZVwiO1xuICAgIHJldHVybiBjO1xuICB9XG4gIHBsYXlFbGltaW5hdGlvbkVmZmVjdChlLCB0LCBpKSB7XG4gICAgdmFyIG8sIHI7XG4gICAgaWYgKGkpIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXModCksIHMgPSBjLm5leHQoKTsgIXMuZG9uZTsgcyA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gcy52YWx1ZSxcbiAgICAgICAgICBkID0gQmFzZVNwaW5lLmNyZWF0ZShpLnBhdGgsIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgaS5idW5kbGUpO1xuICAgICAgICBkLm5vZGUucGFyZW50ID0gZTtcbiAgICAgICAgZC5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgbCwgMCk7XG4gICAgICAgIGQubm9kZS56SW5kZXggPSA2MDA7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAociA9IGMucmV0dXJuKSAmJiByLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheU11bHRpSnVtcChlLCB0LCBpKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmICghdCB8fCAhaSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGZvciAodmFyIG8gPSBBcnJheS5pc0FycmF5KHQpID8gdCA6IFt0XSwgYSA9IEFycmF5LmlzQXJyYXkoaSkgPyBpIDogW2ldLCByID0gUHJvbWlzZS5yZXNvbHZlKCksIGMgPSBmdW5jdGlvbiBjKHQpIHtcbiAgICAgICAgdmFyIGkgPSBvW3RdLFxuICAgICAgICAgIGMgPSBhW3RdIHx8IGFbYS5sZW5ndGggLSAxXTtcbiAgICAgICAgciA9IHIudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgdmFyIHQgPSBlLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICAgICAgICBvID0gY2MudjModC54LCB0LnkgKyBpLCB0LnopO1xuICAgICAgICAgIHJldHVybiBuLnR3ZWVuVG8oZSwgYywge1xuICAgICAgICAgICAgcG9zaXRpb246IG9cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIGMocyk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgY2FsY3VsYXRlWVBvc2l0aW9ucyhlLCB0LCBpKSB7XG4gICAgaWYgKGkgPD0gMCkgcmV0dXJuIFtdO1xuICAgIGlmICgxID09PSBpKSByZXR1cm4gWyhlICsgdCkgLyAyXTtcbiAgICB2YXIgbiA9IChlIC0gdCkgLyAoaSAtIDEpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogaVxuICAgIH0sIGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICByZXR1cm4gZSAtIGkgKiBuO1xuICAgIH0pO1xuICB9XG4gIGRlc3Ryb3lOb2RlcyhlKSB7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gY2MuaXNWYWxpZChlKSAmJiBlLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuICBydW5DYXJkMUFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgaSA9IGUucnVuSW5kZXggKiB0aGlzLmNvbmZpZy5waGFzZTEuZGVsYXk7XG4gICAgdGhpcy5kZWxheShlLmNhcmROb2RlMSwgaSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LnN0YXJ0Q2FyZDFNb3ZlKGUpO1xuICAgIH0pO1xuICB9XG4gIHN0YXJ0Q2FyZDFNb3ZlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29uZmlnLnBoYXNlMSxcbiAgICAgIGkgPSBlLnRhcmdldEFuZ2xlMSB8fCAwLFxuICAgICAgbiA9IGUuY2FyZE5vZGUxLFxuICAgICAgbyA9IG5ldyBjYy5Ob2RlKFwiUm90YXRlQ29udGFpbmVyMVwiKTtcbiAgICBvLnBhcmVudCA9IG4ucGFyZW50O1xuICAgIG8ucG9zaXRpb24gPSBuLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgby5hbmdsZSA9IDA7XG4gICAgdmFyIGEgPSBuLnBhcmVudDtcbiAgICBuLnBhcmVudCA9IG87XG4gICAgbi5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgIGNjLnR3ZWVuKG8pLnRvKHQuZHVyYXRpb24sIHtcbiAgICAgIGFuZ2xlOiBpXG4gICAgfSkuc3RhcnQoKTtcbiAgICBjYy50d2VlbihuKS50byh0LmR1cmF0aW9uLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgcmV0dXJuIHRoaXMuYmV6aWVyVG8obywgZS50YXJnZXRQb3MxLCB0LmR1cmF0aW9uLCB0LmNvbnRyb2xZT2Zmc2V0KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG4pICYmIGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgbi5wYXJlbnQgPSBhO1xuICAgICAgICBuLnBvc2l0aW9uID0gby5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBuLmFuZ2xlID0gby5hbmdsZTtcbiAgICAgIH1cbiAgICAgIGNjLmlzVmFsaWQobykgJiYgby5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgdHJpZ2dlclRyYWlsKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBpID0gZS5jYXJkTm9kZTEucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgIG4gPSBlLmNhcmROb2RlMi5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIGlmICghbikge1xuICAgICAgdGhpcy5ydW5DYXJkMkFuaW1hdGlvbihlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGxheVRyYWlsRWZmZWN0KHRoaXMuY29udGV4dC5lZmZlY3ROb2RlLCB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGUsIGNjLnYyKGkueCwgaS55KSwgY2MudjIobi54LCBuLnkpLCB0aGlzLmNvbmZpZy50cmFpbCwgdGhpcy5jb25maWcucmVzb3VyY2VzLCB0aGlzLmNvbnRleHQubG9hZFJlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LmNvbnRleHQucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZChlLnRpbGVJZDIpO1xuICAgICAgcmV0dXJuIHQucnVuQ2FyZDJBbmltYXRpb24oZSk7XG4gICAgfSk7XG4gIH1cbiAgcnVuQ2FyZDJBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGkgPSB0aGlzLm5vZGVJbmZvcy5sZW5ndGggLSAxLFxuICAgICAgbiA9IHRoaXMuY29uZmlnLnBoYXNlMSxcbiAgICAgIG8gPSB0aGlzLmNvbmZpZy5waGFzZTIsXG4gICAgICBhID0gaSAqIG4uZGVsYXkgKyBuLmR1cmF0aW9uICsgKGUucnVuSW5kZXggKyAxKSAqIG4uZGVsYXkgLSBvLmR1cmF0aW9uO1xuICAgIHRoaXMuZGVsYXkoZS5jYXJkTm9kZTIsIGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdC5jb250ZXh0LnJlbW92ZVRpbGVOb2RlKGUudGlsZUlkMik7XG4gICAgICBlLmNhcmROb2RlMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdC5tb3ZlQ2FyZDJUb1RhcmdldChlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHQub25DYXJkMkFycml2ZWQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHNob3dDYXJkMkFuZFBsYXlIaXQoZSkge1xuICAgIHRoaXMuY29udGV4dC5yZW1vdmVUaWxlTm9kZShlLnRpbGVJZDIpO1xuICAgIGUuY2FyZE5vZGUyLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGUgfHwgMSxcbiAgICAgIGkgPSBmYWxzZSAhPT0gdGhpcy5jb25maWcudHJhaWwuaGl0Rm9sbG93VGFyZ2V0LFxuICAgICAgbiA9IHRoaXMuY29uZmlnLnJlc291cmNlcztcbiAgICB0aGlzLnBsYXlIaXRFZmZlY3QoZS5jYXJkTm9kZTIsIHQsIG4uaGl0U3BpbmUucGF0aCwgbi5oaXRTcGluZS5idW5kbGUsIG4uaGl0U3BpbmUuYW5pbSwgaSk7XG4gIH1cbiAgc2hvd0NhcmQyRmxvd0xpZ2h0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZSB8fCAxLFxuICAgICAgaSA9IHRoaXMuY29uZmlnLnJlc291cmNlcyxcbiAgICAgIG4gPSBlLmNhcmROb2RlMi5nZXRDaGlsZEJ5TmFtZShcIlRpbGVBbmltTm9kZU5hbWVcIikgfHwgZS5jYXJkTm9kZTI7XG4gICAgdGhpcy5zaG93Rmxvd0xpZ2h0KG4sIHQsIGkuZmxvd0xpZ2h0LnBhdGgsIGkuZmxvd0xpZ2h0LmJ1bmRsZSwgaS5mbG93TGlnaHQuYW5pbSk7XG4gIH1cbiAgbW92ZUNhcmQyVG9UYXJnZXQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5jb25maWcucGhhc2UyLFxuICAgICAgaSA9IGUudGFyZ2V0QW5nbGUyIHx8IDAsXG4gICAgICBuID0gZS5jYXJkTm9kZTIsXG4gICAgICBvID0gbmV3IGNjLk5vZGUoXCJSb3RhdGVDb250YWluZXIyXCIpO1xuICAgIG8ucGFyZW50ID0gbi5wYXJlbnQ7XG4gICAgby5wb3NpdGlvbiA9IG4ucG9zaXRpb24uY2xvbmUoKTtcbiAgICBvLmFuZ2xlID0gMDtcbiAgICB2YXIgYSA9IG4ucGFyZW50O1xuICAgIG4ucGFyZW50ID0gbztcbiAgICBuLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgY2MudHdlZW4obykudG8odC5kdXJhdGlvbiwge1xuICAgICAgYW5nbGU6IGlcbiAgICB9KS5zdGFydCgpO1xuICAgIGNjLnR3ZWVuKG4pLnRvKHQuZHVyYXRpb24sIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkuc3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcy5iZXppZXJUbyhvLCBlLnRhcmdldFBvczIsIHQuZHVyYXRpb24sIHQuY29udHJvbFlPZmZzZXQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQobikgJiYgY2MuaXNWYWxpZChhKSkge1xuICAgICAgICBuLnBhcmVudCA9IGE7XG4gICAgICAgIG4ucG9zaXRpb24gPSBvLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIG4uYW5nbGUgPSBvLmFuZ2xlO1xuICAgICAgfVxuICAgICAgY2MuaXNWYWxpZChvKSAmJiBvLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuICBvbkNhcmQyQXJyaXZlZCgpIHtcbiAgICArK3RoaXMuY29tcGxldGVkQ291bnQgPj0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoICYmIHRoaXMucGxheVBoYXNlMygpO1xuICB9XG4gIHBsYXlQaGFzZTMoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuY29tcGxldGVkQ291bnQgPSAwO1xuICAgIHRoaXMuYnVpbGRQaGFzZTNNb3ZlU2VxdWVuY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICBlLnBsYXlQaGFzZTNTaW5nbGVDYXJkKHQsIGkpO1xuICAgIH0pO1xuICB9XG4gIGJ1aWxkUGhhc2UzTW92ZVNlcXVlbmNlKCkge1xuICAgIGZvciAodmFyIGUgPSBbXSwgdCA9IHRoaXMubm9kZUluZm9zLmxlbmd0aCAtIDE7IHQgPj0gMDsgdC0tKSBlLnB1c2goe1xuICAgICAgbm9kZTogdGhpcy5ub2RlSW5mb3NbdF0uY2FyZE5vZGUxLFxuICAgICAgaXNGaXJzdDogdCA9PT0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoIC0gMVxuICAgIH0pO1xuICAgIGZvciAodCA9IHRoaXMubm9kZUluZm9zLmxlbmd0aCAtIDE7IHQgPj0gMDsgdC0tKSBlLnB1c2goe1xuICAgICAgbm9kZTogdGhpcy5ub2RlSW5mb3NbdF0uY2FyZE5vZGUyLFxuICAgICAgaXNGaXJzdDogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBwbGF5UGhhc2UzU2luZ2xlQ2FyZChlLCB0KSB7XG4gICAgdmFyIGkgPSB0aGlzLFxuICAgICAgbiA9IHRoaXMuY29uZmlnLnBoYXNlMyxcbiAgICAgIG8gPSB0ICogbi5kZWxheSxcbiAgICAgIGEgPSBjYy52MygwLCAwLCAwKTtcbiAgICB0aGlzLmRlbGF5KGUubm9kZSwgbykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlLmlzRmlyc3QgJiYgaS5wbGF5UGhhc2UzQmFja2dyb3VuZFNwaW5lcygpO1xuICAgICAgdm9pZCAwICE9PSBuLmZpbmFsU2NhbGUgJiYgY2MudHdlZW4oZS5ub2RlKS50byhuLmR1cmF0aW9uLCB7XG4gICAgICAgIHNjYWxlOiBuLmZpbmFsU2NhbGVcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICByZXR1cm4gaS5iZXppZXJUbyhlLm5vZGUsIGEsIG4uZHVyYXRpb24sIG4uY29udHJvbFlPZmZzZXQpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGkub25QaGFzZTNDYXJkQXJyaXZlZCgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTNCYWNrZ3JvdW5kU3BpbmVzKCkge1xuICAgIHZhciBlID0gdGhpcy5jb25maWcucmVzb3VyY2VzLFxuICAgICAgdCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlLFxuICAgICAgaSA9IGNjLnYzKDAsIDAsIDApO1xuICAgIGUuYm90dG9tU3BpbmUgJiYgdGhpcy5jcmVhdGVCYWNrZ3JvdW5kU3BpbmUoZS5ib3R0b21TcGluZSwgdCwgaSwgLTUwMCk7XG4gICAgZS50b3BTcGluZSAmJiB0aGlzLmNyZWF0ZUJhY2tncm91bmRTcGluZShlLnRvcFNwaW5lLCB0LCBpLCA5NjAwKTtcbiAgfVxuICBjcmVhdGVCYWNrZ3JvdW5kU3BpbmUoZSwgdCwgaSwgbikge1xuICAgIHZhciBvID0gQmFzZVNwaW5lLmNyZWF0ZShlLnBhdGgsIGUuYW5pbSB8fCBcImluXCIsIDEsIG51bGwsIHRydWUsIGUuYnVuZGxlKTtcbiAgICBvLm5vZGUucGFyZW50ID0gdDtcbiAgICBvLm5vZGUucG9zaXRpb24gPSBpO1xuICAgIG8ubm9kZS56SW5kZXggPSBuO1xuICB9XG4gIG9uUGhhc2UzQ2FyZEFycml2ZWQoKSB7XG4gICAgdmFyIGUgPSAyICogdGhpcy5ub2RlSW5mb3MubGVuZ3RoO1xuICAgIGlmICgrK3RoaXMuY29tcGxldGVkQ291bnQgPj0gZSkge1xuICAgICAgdGhpcy5wbGF5UGhhc2UzRW5kU3BpbmVzKCk7XG4gICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cbiAgcGxheVBoYXNlM0VuZFNwaW5lcygpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29uZmlnLnJlc291cmNlcyxcbiAgICAgIHQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZSxcbiAgICAgIGkgPSBjYy52MygwLCAwLCAwKTtcbiAgICBlLmVuZEJvdHRvbVNwaW5lICYmIHRoaXMuY3JlYXRlQmFja2dyb3VuZFNwaW5lKGUuZW5kQm90dG9tU3BpbmUsIHQsIGksIC01MDApO1xuICAgIGUuZW5kVG9wU3BpbmUgJiYgdGhpcy5jcmVhdGVCYWNrZ3JvdW5kU3BpbmUoZS5lbmRUb3BTcGluZSwgdCwgaSwgNjAwKTtcbiAgfVxuICBvbkFuaW1hdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciBlID0gW107XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUucHVzaCh0LmNhcmROb2RlMSwgdC5jYXJkTm9kZTIpO1xuICAgIH0pO1xuICAgIHRoaXMuZGVzdHJveU5vZGVzKGUpO1xuICAgIHRoaXMuY29udGV4dC5vbkNvbXBsZXRlKCk7XG4gIH1cbiAgc2hvd0NsZWFyVGlwKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkVGlwTm9kZVwiKTtcbiAgICB0ICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB2YXIgaSA9IG5ldyBjYy5Ob2RlKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgZS5hZGRDaGlsZChpKTtcbiAgICBpLnpJbmRleCA9IFRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmltZ0NhcmRdICsgMTtcbiAgICBpLnNjYWxlID0gdGhpcy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgIHZhciBuID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZsb3dMaWdodDtcbiAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIG4ucGF0aCwgbi5idW5kbGUpLnNldEFuaW1hdGlvbihuLmFuaW0gfHwgXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gIH1cbn0iXX0=