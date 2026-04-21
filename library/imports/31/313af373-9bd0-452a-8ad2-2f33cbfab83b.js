"use strict";
cc._RF.push(module, '313afNzm9BFKorSLzPL+rg7', 'DaxiaoAnimPlayer');
// Scripts/anim/DaxiaoAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoAnimPlayer = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var BaseTileNode_1 = require("../BaseTileNode");
var DaxiaoAnimPlayer = /** @class */ (function () {
    function DaxiaoAnimPlayer(e, t) {
        this.nodeInfos = [];
        this.completedCount = 0;
        this.context = null;
        this.config = null;
        this.context = e;
        this.config = t;
    }
    DaxiaoAnimPlayer.getConfigs = function (e) {
        var t, o, i = [this.configBase], r = [];
        try {
            for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                e >= s.nums[0] && e <= s.nums[1] && r.push(s);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return r;
    };
    DaxiaoAnimPlayer.prototype.setupPositions = function (e, t) {
        var o = this;
        e.sort(function (e, t) {
            var n = o.context.getTileObject(e.tileId2), i = o.context.getTileObject(t.tileId2);
            return n && i ? n.gridPosX !== i.gridPosX ? n.gridPosX - i.gridPosX : n.gridPosY - i.gridPosY : 0;
        });
        this.context.effectNode;
        var n, i = e[0].cardNode1.getContentSize().height, r = (e[0].cardNode1.getContentSize().width, i + t), a = -(e.length * r + (e.length - 1) * t) / 2 + r / 2, l = false !== this.config.phase1.randomOrder;
        n = l ? this.context.getRandomIndexes(e.length) : Array.from({
            length: e.length
        }, function (e, t) {
            return t;
        });
        e.forEach(function (e, t) {
            var o = a + t * r;
            e.targetPos1 = cc.v3(-380, o, 0);
            e.targetPos2 = cc.v3(380, o, 0);
            e.runIndex = n[t];
            e.cardNode1.zIndex = e.cardNode2.zIndex = Math.floor(-9999 - o);
        });
    };
    DaxiaoAnimPlayer.prototype.playFullAnimation = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.completedCount = 0;
        e.forEach(function (e) {
            return t.runCard1Animation(e);
        });
    };
    DaxiaoAnimPlayer.prototype.delay = function (e, t) {
        return new Promise(function (o) {
            if (cc.isValid(e)) {
                cc.tween(e).delay(t).call(o).start();
            }
            else {
                o();
            }
        });
    };
    DaxiaoAnimPlayer.prototype.tweenTo = function (e, t, o) {
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                cc.tween(e).to(t, o).call(n).start();
            }
            else {
                n();
            }
        });
    };
    DaxiaoAnimPlayer.prototype.createBezierEasing = function (e, t, o, n) {
        return function (i) {
            if (0 === i || 1 === i)
                return i;
            for (var r = 0, a = 1, l = 0, s = 0; s < 10; s++) {
                var c = (r + a) / 2;
                l = 3 * (1 - c) * (1 - c) * c * e + 3 * (1 - c) * c * c * o + c * c * c;
                if (Math.abs(l - i) < 0.001)
                    break;
                if (l < i) {
                    r = c;
                }
                else {
                    a = c;
                }
            }
            var u = (r + a) / 2;
            return 3 * (1 - u) * (1 - u) * u * t + 3 * (1 - u) * u * u * n + u * u * u;
        };
    };
    DaxiaoAnimPlayer.prototype.bezierTo = function (e, t, o) {
        var n = this;
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                var r = n.createBezierEasing(0.25, 0, 0.25, 1);
                cc.tween(e).to(o, {
                    position: t
                }, {
                    easing: r
                }).call(function () {
                    i();
                }).start();
            }
            else
                i();
        });
    };
    DaxiaoAnimPlayer.prototype.arcTo = function (e, t, o) {
        return new Promise(function (n) {
            if (cc.isValid(e)) {
                var i = e.position.clone(), r = t, a = r.x - i.x, l = r.y - i.y, s = Math.sqrt(a * a + l * l), c = s * (0.6 + 0.2 * Math.random()), u = Math.random() > 0.5, p = (i.x + r.x) / 2, f = (i.y + r.y) / 2, d = p + -l / s * c * (u ? 1 : -1), h = f + a / s * c * (u ? 1 : -1);
                e._arcProgress = 0;
                cc.tween(e).to(o, {
                    _arcProgress: 1
                }, {
                    progress: function (t, o, n, a) {
                        var l = a < 0.5 ? 2 * a * a : 1 - Math.pow(-2 * a + 2, 2) / 2, s = (1 - l) * (1 - l) * i.x + 2 * (1 - l) * l * d + l * l * r.x, c = (1 - l) * (1 - l) * i.y + 2 * (1 - l) * l * h + l * l * r.y;
                        cc.isValid(e) && (e.position = cc.v3(s, c, 0));
                        return t + (o - t) * a;
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
    DaxiaoAnimPlayer.prototype.playPhase1 = function (e, t, o) {
        if (o === void 0) { o = false; }
        for (var n = Array.isArray(t.duration) ? t.duration : [t.duration], i = Array.isArray(t.moveY) ? t.moveY : [t.moveY], r = Math.max(n.length, i.length); n.length < r;)
            n.push(n[n.length - 1] || 0);
        for (; i.length < r;)
            i.push(i[i.length - 1] || 0);
        return this.playPhase1Stages(e, n, i, t, o);
    };
    DaxiaoAnimPlayer.prototype.playPhase1Stages = function (e, t, o, n, i) {
        var r = this;
        if (!cc.isValid(e))
            return Promise.resolve();
        for (var a = Promise.resolve(), l = e.position.y, s = function s(s) {
            var c = t[s], u = l + o[s];
            a = a.then(function () {
                if (!cc.isValid(e))
                    return Promise.resolve();
                var o = {
                    position: cc.v3(e.position.x, u, 0)
                };
                if (s === t.length - 1) {
                    void 0 !== n.angle && (o.angle = i ? -n.angle : n.angle);
                    void 0 !== n.scale && (o.scale = n.scale);
                }
                return r.tweenTo(e, c, o);
            });
            l = u;
        }, c = 0; c < t.length; c++)
            s(c);
        return a;
    };
    DaxiaoAnimPlayer.prototype.playPhase2 = function (e, t, o, n) {
        if (n === void 0) { n = false; }
        var i, r;
        var a = void 0 !== o.angle || void 0 !== o.scale, l = null !== (i = o.transformDuration) && void 0 !== i ? i : o.restoreDelay;
        if (a) {
            var s = n ? -o.angle : o.angle;
            cc.tween(e).to(l, {
                angle: null != s ? s : 0,
                scale: null !== (r = o.scale) && void 0 !== r ? r : 1
            }).to(o.restoreDelay, {
                angle: 0,
                scale: 1
            }).start();
        }
        else
            cc.tween(e).to(o.restoreDelay, {
                angle: 0,
                scale: 1
            }).start();
        return this.bezierTo(e, t, o.duration, o.controlYOffset).then(function () {
            if (cc.isValid(e)) {
                e.angle = 0;
                e.scale = 1;
            }
        });
    };
    DaxiaoAnimPlayer.prototype.playCollision = function (e, t) {
        var o, i;
        if (0 === e.length)
            return Promise.resolve();
        var r = function r(e, o) {
            var n = e.position.clone(), i = o.position.clone();
            cc.tween(e).delay(t.delay).to(t.outDuration, {
                position: cc.v3(n.x - t.outDistance, n.y, 0)
            }, {
                easing: "quartInOut"
            }).to(t.inDuration, {
                position: cc.v3(0, n.y, 0)
            }, {
                easing: "quartInOut"
            }).call(function () {
                e.active = false;
            }).start();
            cc.tween(o).delay(t.delay).to(t.outDuration, {
                position: cc.v3(i.x + t.outDistance, i.y, 0)
            }, {
                easing: "quartInOut"
            }).to(t.inDuration, {
                position: cc.v3(0, i.y, 0)
            }, {
                easing: "quartInOut"
            }).call(function () {
                o.active = false;
            }).start();
            var r = t.delay + t.outDuration, a = void 0, l = void 0;
            if (Array.isArray(t.scaleUp)) {
                if (t.scaleUp.length >= 2) {
                    a = {
                        scaleX: t.scaleUp[0],
                        scaleY: t.scaleUp[1]
                    };
                    l = {
                        scaleX: 1,
                        scaleY: 1
                    };
                }
                else {
                    a = {
                        scale: t.scaleUp[0]
                    };
                    l = {
                        scale: 1
                    };
                }
            }
            else {
                a = {
                    scale: t.scaleUp
                };
                l = {
                    scale: 1
                };
            }
            cc.tween(e).delay(r).call(function () {
                e.scale = 1;
            }).to(t.scaleDuration1, a).to(t.scaleDuration2, l).start();
            cc.tween(o).delay(r).call(function () {
                o.scale = 1;
            }).to(t.scaleDuration1, a).to(t.scaleDuration2, l).start();
        };
        try {
            for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                r(s.node1, s.node2);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = a.return) && i.call(a);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return this.delay(e[0].node1, t.delay + t.outDuration + t.inDuration);
    };
    DaxiaoAnimPlayer.prototype.playTrailEffect = function (e, t, o, n, a, l, s) {
        var c = this, u = new cc.Node("TrailContainer");
        u.parent = e;
        u.position = cc.v3(o.x, o.y, 0);
        u.zIndex = 400;
        u.scale = t || 1;
        if (l.trailSpine) {
            BaseSpine_1.default.create(l.trailSpine.path, l.trailSpine.anim || "in", -1, null, false, l.trailSpine.bundle).node.parent = u;
        }
        else {
            l.trailSprite && (BaseSprite_1.default.create(l.trailSprite.path, l.trailSprite.bundle).node.parent = u);
        }
        return s(l.trailTexture.path, cc.SpriteFrame, l.trailTexture.bundle).then(function (e) {
            if (e && cc.isValid(u)) {
                var t = u.addComponent(cc.MotionStreak);
                t.fadeTime = a.fadeTime;
                t.minSeg = 1;
                t.stroke = a.stroke;
                t.texture = e.getTexture();
                t.color = a.color;
                return c.arcTo(u, cc.v3(n.x, n.y, 0), a.duration);
            }
        }).then(function () {
            cc.isValid(u) && u.destroy();
        });
    };
    DaxiaoAnimPlayer.prototype.showFlowLight = function (e, t, o, n) {
        var r = e.getChildByName("DaxiaoCardTipNode");
        r && (r.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var a = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(a);
            a.scale = t;
            BaseSpine_1.default.refreshWithNode(a, o, n).setAnimation("init", -1, null, false);
        }
    };
    DaxiaoAnimPlayer.prototype.playHitEffect = function (e, t, o, n, r) {
        if (r === void 0) { r = true; }
        var a = BaseSpine_1.default.create(o, "in", 1, null, false, n);
        a.node.parent = r ? e : e.parent;
        a.node.position = r ? cc.v3(0, 0, 0) : e.position.clone();
        a.node.zIndex = r ? 900 : 300;
        a.node.scale = t;
        a.node.name = "DaxiaoHitSpineNode";
        return a;
    };
    DaxiaoAnimPlayer.prototype.playEliminationEffect = function (e, t, o) {
        var r, a;
        if (o)
            try {
                for (var l = __values(t), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value, u = BaseSpine_1.default.create(o.path, "in", 1, null, true, o.bundle);
                    u.node.parent = e;
                    u.node.position = cc.v3(0, c, 0);
                    u.node.zIndex = 600;
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (a = l.return) && a.call(l);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
    };
    DaxiaoAnimPlayer.prototype.playCollisionCompleteEffect = function (e, t, o) {
        if (o.backSpine) {
            var n = BaseSpine_1.default.create(o.backSpine.path, "in", 1, null, true, o.backSpine.bundle);
            n.node.parent = e;
            n.node.position = cc.v3(-t / 2, 0, 0);
            n.node.zIndex = 500;
            var r = BaseSpine_1.default.create(o.backSpine.path, "in", 1, null, true, o.backSpine.bundle);
            r.node.parent = e;
            r.node.position = cc.v3(t / 2, 0, 0);
            r.node.scaleX = -1;
            r.node.zIndex = 500;
        }
        if (o.effectSpine) {
            var a = BaseSpine_1.default.create(o.effectSpine.path, "in", 1, null, true, o.effectSpine.bundle);
            a.node.parent = e;
            a.node.zIndex = 500;
        }
    };
    DaxiaoAnimPlayer.prototype.calculateYPositions = function (e, t, o) {
        if (o <= 0)
            return [];
        if (1 === o)
            return [(e + t) / 2];
        var n = (e - t) / (o - 1);
        return Array.from({
            length: o
        }, function (t, o) {
            return e - o * n;
        });
    };
    DaxiaoAnimPlayer.prototype.destroyNodes = function (e) {
        e.forEach(function (e) {
            return cc.isValid(e) && e.destroy();
        });
    };
    DaxiaoAnimPlayer.prototype.runCard1Animation = function (e) {
        var t = this, o = this.config, n = this.nodeInfos.length, i = e.runIndex * o.phase1.delay, r = (n - 1 - e.runIndex) * o.phase1.delay, a = 0.067 * e.runIndex;
        this.delay(e.cardNode1, i).then(function () {
            return t.playPhase1(e.cardNode1, o.phase1);
        }).then(function () {
            return t.delay(e.cardNode1, r + a);
        }).then(function () {
            var n = t.playPhase2(e.cardNode1, e.targetPos1, o.phase2), i = o.phase2.trailDelay || 0;
            t.delay(e.cardNode1, i).then(function () {
                t.triggerTrail(e);
            });
            return n;
        });
    };
    DaxiaoAnimPlayer.prototype.triggerTrail = function (e) {
        var t = this, o = this.context.effectNode, n = e.cardNode1.position.clone(), i = this.context.getTileNodePos(e.tileId2);
        if (i) {
            this.playTrailEffect(o, this.context.layoutScale, cc.v2(n.x, n.y), cc.v2(i.x, i.y), this.config.trail, this.config.resources, this.context.loadRes).then(function () {
                return t.runCard2Animation(e);
            });
        }
        else {
            this.runCard2Animation(e);
        }
    };
    DaxiaoAnimPlayer.prototype.runCard2Animation = function (e) {
        var t = this, o = this.config, n = o.resources;
        this.context.removeTileNode(e.tileId2);
        e.cardNode2.active = true;
        var i = this.context.layoutScale || 1, r = false !== o.trail.hitFollowTarget;
        this.playHitEffect(e.cardNode2, i, n.hitSpine.path, n.hitSpine.bundle, r);
        this.delay(e.cardNode2, o.trail.hitDelay).then(function () {
            t.showFlowLight(e.cardNode2.getChildByName("TileAnimNodeName") || e.cardNode2, i, n.flowLight.path, n.flowLight.bundle);
        }).then(function () {
            return t.playPhase1(e.cardNode2, o.phase1, true);
        }).then(function () {
            return t.playPhase2(e.cardNode2, e.targetPos2, o.phase2, true);
        }).then(function () {
            return t.onCard2Arrived();
        });
    };
    DaxiaoAnimPlayer.prototype.onCard2Arrived = function () {
        ++this.completedCount >= this.nodeInfos.length && this.startCollision();
    };
    DaxiaoAnimPlayer.prototype.startCollision = function () {
        var e = this, t = this.nodeInfos.map(function (e) {
            return {
                node1: e.cardNode1,
                node2: e.cardNode2
            };
        });
        this.playCollision(t, this.config.collision).then(function () {
            return e.onCollisionComplete();
        });
    };
    DaxiaoAnimPlayer.prototype.onCollisionComplete = function () {
        var e = this.context.effectNode, t = this.config.resources, o = Math.min(this.nodeInfos.length, 3);
        if (o > 0) {
            var n = this.nodeInfos[0].targetPos1.y, i = this.nodeInfos[this.nodeInfos.length - 1].targetPos1.y;
            this.playEliminationEffect(e, this.calculateYPositions(n, i, o), t.elimination);
        }
        var r = [];
        this.nodeInfos.forEach(function (e) {
            return r.push(e.cardNode1, e.cardNode2);
        });
        this.destroyNodes(r);
        this.playCollisionCompleteEffect(e, e.getContentSize().width, t);
        this.context.onShake();
        this.context.onComplete();
    };
    DaxiaoAnimPlayer.prototype.showClearTip = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        var o = new cc.Node("DaxiaoCardTipNode");
        e.addChild(o);
        o.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        o.scale = this.context.layoutScale;
        var n = this.config.resources.flowLight;
        BaseSpine_1.default.refreshWithNode(o, n.path, n.bundle).setAnimation("init", -1, null, false);
    };
    DaxiaoAnimPlayer.configBase = {
        phase1: {
            duration: 0.16,
            moveY: 10,
            angle: -10,
            scale: 1.2,
            delay: 0.06,
            randomOrder: true
        },
        phase2: {
            duration: 0.5,
            restoreDelay: 0.4,
            controlYOffset: -100,
            trailDelay: 0
        },
        collision: {
            delay: 0.1,
            outDuration: 0.33,
            inDuration: 0.068,
            outDistance: 100,
            scaleUp: 1.1,
            scaleDuration1: 0.06,
            scaleDuration2: 0.03
        },
        trail: {
            hitDelay: 0.2,
            duration: 0.3,
            fadeTime: 0.3,
            stroke: 64,
            color: cc.color(255, 146, 0),
            ellipseRatio: 0.4,
            hitFollowTarget: true
        },
        resources: {
            trailSprite: {
                path: "spine/daxiao/tuowei/gameplay_trailingElement",
                bundle: "mainRes"
            },
            trailTexture: {
                path: "spine/daxiao/tuowei/gameplay_star_tail",
                bundle: "mainRes"
            },
            hitSpine: {
                path: "spine/daxiao/hit/gameplay_hit",
                bundle: "mainRes"
            },
            flowLight: {
                path: "spine/daxiao/loop/gameplay_flowingLight",
                bundle: "mainRes"
            },
            elimination: {
                path: "spine/clear/gameplay_elimination_a",
                bundle: "mainRes"
            },
            backSpine: {
                path: "spine/daxiao/xiaochu/gameplay_great_elimination_back",
                bundle: "mainRes"
            },
            effectSpine: {
                path: "spine/daxiao/xiaochu/gameplay_great_elimination_effect",
                bundle: "mainRes"
            }
        },
        nums: [0, 10]
    };
    return DaxiaoAnimPlayer;
}());
exports.DaxiaoAnimPlayer = DaxiaoAnimPlayer;

cc._RF.pop();