"use strict";
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