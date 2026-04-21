
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/anim/DaxiaoAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaW0vRGF4aWFvQW5pbVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCw2REFBd0Q7QUFDeEQsZ0RBQW9FO0FBQ3BFO0lBc0VFLDBCQUFZLENBQUMsRUFBRSxDQUFDO1FBckVoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFtRVosSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNNLDJCQUFVLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDckIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFB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Q0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLFlBQVksRUFBRSxDQUFDO2lCQUNoQixFQUFFO29CQUNELFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDM0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxFQUFFLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDWjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxxQ0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFTO1FBQVQsa0JBQUEsRUFBQSxTQUFTO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwTSxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDVixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNULElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEdBQUc7b0JBQ04sUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEMsQ0FBQztnQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzQztnQkFDRCxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QscUNBQVUsR0FBVixVQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQVM7UUFBVCxrQkFBQSxFQUFBLFNBQVM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUM5QyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQzlFLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7O1lBQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDcEMsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUQsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDWixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsd0NBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUMzQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDN0MsRUFBRTtnQkFDRCxNQUFNLEVBQUUsWUFBWTthQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQixFQUFFO2dCQUNELE1BQU0sRUFBRSxZQUFZO2FBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQzNDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3QyxFQUFFO2dCQUNELE1BQU0sRUFBRSxZQUFZO2FBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDbEIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFlBQVk7YUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFDN0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUNWLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN6QixDQUFDLEdBQUc7d0JBQ0YsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ3JCLENBQUM7b0JBQ0YsQ0FBQyxHQUFHO3dCQUNGLE1BQU0sRUFBRSxDQUFDO3dCQUNULE1BQU0sRUFBRSxDQUFDO3FCQUNWLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsQ0FBQyxHQUFHO3dCQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztxQkFDcEIsQ0FBQztvQkFDRixDQUFDLEdBQUc7d0JBQ0YsS0FBSyxFQUFFLENBQUM7cUJBQ1QsQ0FBQztpQkFDSDthQUNGO2lCQUFNO2dCQUNMLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU87aUJBQ2pCLENBQUM7Z0JBQ0YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtZQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzRCxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0QsQ0FBQyxDQUFDO1FBQ0YsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsMENBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRTtZQUNoQixtQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3RIO2FBQU07WUFDTCxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNwQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1osbUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7SUFDRCx3Q0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQVE7UUFBUixrQkFBQSxFQUFBLFFBQVE7UUFDaEMsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxnREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQztZQUFFLElBQUk7Z0JBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2lCQUNyQjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7SUFDSCxDQUFDO0lBQ0Qsc0RBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENB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b0NBQW9DO2dCQUMxQyxNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsc0RBQXNEO2dCQUM1RCxNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsd0RBQXdEO2dCQUM5RCxNQUFNLEVBQUUsU0FBUzthQUNsQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztLQUNkLENBQUM7SUF1ZEosdUJBQUM7Q0E1aEJELEFBNGhCQyxJQUFBO0FBNWhCWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgeyBUaWxlTm9kZVpJbmRleE1hcCwgRVRpbGVOb2RlTmFtZXMgfSBmcm9tICcuLi9CYXNlVGlsZU5vZGUnO1xuZXhwb3J0IGNsYXNzIERheGlhb0FuaW1QbGF5ZXIge1xuICBub2RlSW5mb3MgPSBbXTtcbiAgY29tcGxldGVkQ291bnQgPSAwO1xuICBjb250ZXh0ID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgc3RhdGljIGNvbmZpZ0Jhc2UgPSB7XG4gICAgcGhhc2UxOiB7XG4gICAgICBkdXJhdGlvbjogMC4xNixcbiAgICAgIG1vdmVZOiAxMCxcbiAgICAgIGFuZ2xlOiAtMTAsXG4gICAgICBzY2FsZTogMS4yLFxuICAgICAgZGVsYXk6IDAuMDYsXG4gICAgICByYW5kb21PcmRlcjogdHJ1ZVxuICAgIH0sXG4gICAgcGhhc2UyOiB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgcmVzdG9yZURlbGF5OiAwLjQsXG4gICAgICBjb250cm9sWU9mZnNldDogLTEwMCxcbiAgICAgIHRyYWlsRGVsYXk6IDBcbiAgICB9LFxuICAgIGNvbGxpc2lvbjoge1xuICAgICAgZGVsYXk6IDAuMSxcbiAgICAgIG91dER1cmF0aW9uOiAwLjMzLFxuICAgICAgaW5EdXJhdGlvbjogMC4wNjgsXG4gICAgICBvdXREaXN0YW5jZTogMTAwLFxuICAgICAgc2NhbGVVcDogMS4xLFxuICAgICAgc2NhbGVEdXJhdGlvbjE6IDAuMDYsXG4gICAgICBzY2FsZUR1cmF0aW9uMjogMC4wM1xuICAgIH0sXG4gICAgdHJhaWw6IHtcbiAgICAgIGhpdERlbGF5OiAwLjIsXG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgZmFkZVRpbWU6IDAuMyxcbiAgICAgIHN0cm9rZTogNjQsXG4gICAgICBjb2xvcjogY2MuY29sb3IoMjU1LCAxNDYsIDApLFxuICAgICAgZWxsaXBzZVJhdGlvOiAwLjQsXG4gICAgICBoaXRGb2xsb3dUYXJnZXQ6IHRydWVcbiAgICB9LFxuICAgIHJlc291cmNlczoge1xuICAgICAgdHJhaWxTcHJpdGU6IHtcbiAgICAgICAgcGF0aDogXCJzcGluZS9kYXhpYW8vdHVvd2VpL2dhbWVwbGF5X3RyYWlsaW5nRWxlbWVudFwiLFxuICAgICAgICBidW5kbGU6IFwibWFpblJlc1wiXG4gICAgICB9LFxuICAgICAgdHJhaWxUZXh0dXJlOiB7XG4gICAgICAgIHBhdGg6IFwic3BpbmUvZGF4aWFvL3R1b3dlaS9nYW1lcGxheV9zdGFyX3RhaWxcIixcbiAgICAgICAgYnVuZGxlOiBcIm1haW5SZXNcIlxuICAgICAgfSxcbiAgICAgIGhpdFNwaW5lOiB7XG4gICAgICAgIHBhdGg6IFwic3BpbmUvZGF4aWFvL2hpdC9nYW1lcGxheV9oaXRcIixcbiAgICAgICAgYnVuZGxlOiBcIm1haW5SZXNcIlxuICAgICAgfSxcbiAgICAgIGZsb3dMaWdodDoge1xuICAgICAgICBwYXRoOiBcInNwaW5lL2RheGlhby9sb29wL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiLFxuICAgICAgICBidW5kbGU6IFwibWFpblJlc1wiXG4gICAgICB9LFxuICAgICAgZWxpbWluYXRpb246IHtcbiAgICAgICAgcGF0aDogXCJzcGluZS9jbGVhci9nYW1lcGxheV9lbGltaW5hdGlvbl9hXCIsXG4gICAgICAgIGJ1bmRsZTogXCJtYWluUmVzXCJcbiAgICAgIH0sXG4gICAgICBiYWNrU3BpbmU6IHtcbiAgICAgICAgcGF0aDogXCJzcGluZS9kYXhpYW8veGlhb2NodS9nYW1lcGxheV9ncmVhdF9lbGltaW5hdGlvbl9iYWNrXCIsXG4gICAgICAgIGJ1bmRsZTogXCJtYWluUmVzXCJcbiAgICAgIH0sXG4gICAgICBlZmZlY3RTcGluZToge1xuICAgICAgICBwYXRoOiBcInNwaW5lL2RheGlhby94aWFvY2h1L2dhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX2VmZmVjdFwiLFxuICAgICAgICBidW5kbGU6IFwibWFpblJlc1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBudW1zOiBbMCwgMTBdXG4gIH07XG4gIGNvbnN0cnVjdG9yKGUsIHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBlO1xuICAgIHRoaXMuY29uZmlnID0gdDtcbiAgfVxuICBzdGF0aWMgZ2V0Q29uZmlncyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgaSA9IFt0aGlzLmNvbmZpZ0Jhc2VdLFxuICAgICAgciA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXMoaSksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgZSA+PSBzLm51bXNbMF0gJiYgZSA8PSBzLm51bXNbMV0gJiYgci5wdXNoKHMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKG8gPSBhLnJldHVybikgJiYgby5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHNldHVwUG9zaXRpb25zKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgZS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICB2YXIgbiA9IG8uY29udGV4dC5nZXRUaWxlT2JqZWN0KGUudGlsZUlkMiksXG4gICAgICAgIGkgPSBvLmNvbnRleHQuZ2V0VGlsZU9iamVjdCh0LnRpbGVJZDIpO1xuICAgICAgcmV0dXJuIG4gJiYgaSA/IG4uZ3JpZFBvc1ggIT09IGkuZ3JpZFBvc1ggPyBuLmdyaWRQb3NYIC0gaS5ncmlkUG9zWCA6IG4uZ3JpZFBvc1kgLSBpLmdyaWRQb3NZIDogMDtcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICB2YXIgbixcbiAgICAgIGkgPSBlWzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCxcbiAgICAgIHIgPSAoZVswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS53aWR0aCwgaSArIHQpLFxuICAgICAgYSA9IC0oZS5sZW5ndGggKiByICsgKGUubGVuZ3RoIC0gMSkgKiB0KSAvIDIgKyByIC8gMixcbiAgICAgIGwgPSBmYWxzZSAhPT0gdGhpcy5jb25maWcucGhhc2UxLnJhbmRvbU9yZGVyO1xuICAgIG4gPSBsID8gdGhpcy5jb250ZXh0LmdldFJhbmRvbUluZGV4ZXMoZS5sZW5ndGgpIDogQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IGUubGVuZ3RoXG4gICAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0pO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIG8gPSBhICsgdCAqIHI7XG4gICAgICBlLnRhcmdldFBvczEgPSBjYy52MygtMzgwLCBvLCAwKTtcbiAgICAgIGUudGFyZ2V0UG9zMiA9IGNjLnYzKDM4MCwgbywgMCk7XG4gICAgICBlLnJ1bkluZGV4ID0gblt0XTtcbiAgICAgIGUuY2FyZE5vZGUxLnpJbmRleCA9IGUuY2FyZE5vZGUyLnpJbmRleCA9IE1hdGguZmxvb3IoLTk5OTkgLSBvKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5RnVsbEFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMubm9kZUluZm9zID0gZTtcbiAgICB0aGlzLmNvbXBsZXRlZENvdW50ID0gMDtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB0LnJ1bkNhcmQxQW5pbWF0aW9uKGUpO1xuICAgIH0pO1xuICB9XG4gIGRlbGF5KGUsIHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGNjLnR3ZWVuKGUpLmRlbGF5KHQpLmNhbGwobykuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB0d2VlblRvKGUsIHQsIG8pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIGNjLnR3ZWVuKGUpLnRvKHQsIG8pLmNhbGwobikuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjcmVhdGVCZXppZXJFYXNpbmcoZSwgdCwgbywgbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKDAgPT09IGkgfHwgMSA9PT0gaSkgcmV0dXJuIGk7XG4gICAgICBmb3IgKHZhciByID0gMCwgYSA9IDEsIGwgPSAwLCBzID0gMDsgcyA8IDEwOyBzKyspIHtcbiAgICAgICAgdmFyIGMgPSAociArIGEpIC8gMjtcbiAgICAgICAgbCA9IDMgKiAoMSAtIGMpICogKDEgLSBjKSAqIGMgKiBlICsgMyAqICgxIC0gYykgKiBjICogYyAqIG8gKyBjICogYyAqIGM7XG4gICAgICAgIGlmIChNYXRoLmFicyhsIC0gaSkgPCAwLjAwMSkgYnJlYWs7XG4gICAgICAgIGlmIChsIDwgaSkge1xuICAgICAgICAgIHIgPSBjO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGEgPSBjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdSA9IChyICsgYSkgLyAyO1xuICAgICAgcmV0dXJuIDMgKiAoMSAtIHUpICogKDEgLSB1KSAqIHUgKiB0ICsgMyAqICgxIC0gdSkgKiB1ICogdSAqIG4gKyB1ICogdSAqIHU7XG4gICAgfTtcbiAgfVxuICBiZXppZXJUbyhlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgdmFyIHIgPSBuLmNyZWF0ZUJlemllckVhc2luZygwLjI1LCAwLCAwLjI1LCAxKTtcbiAgICAgICAgY2MudHdlZW4oZSkudG8obywge1xuICAgICAgICAgIHBvc2l0aW9uOiB0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IHJcbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaSgpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIGkoKTtcbiAgICB9KTtcbiAgfVxuICBhcmNUbyhlLCB0LCBvKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICB2YXIgaSA9IGUucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICByID0gdCxcbiAgICAgICAgICBhID0gci54IC0gaS54LFxuICAgICAgICAgIGwgPSByLnkgLSBpLnksXG4gICAgICAgICAgcyA9IE1hdGguc3FydChhICogYSArIGwgKiBsKSxcbiAgICAgICAgICBjID0gcyAqICgwLjYgKyAwLjIgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICB1ID0gTWF0aC5yYW5kb20oKSA+IDAuNSxcbiAgICAgICAgICBwID0gKGkueCArIHIueCkgLyAyLFxuICAgICAgICAgIGYgPSAoaS55ICsgci55KSAvIDIsXG4gICAgICAgICAgZCA9IHAgKyAtbCAvIHMgKiBjICogKHUgPyAxIDogLTEpLFxuICAgICAgICAgIGggPSBmICsgYSAvIHMgKiBjICogKHUgPyAxIDogLTEpO1xuICAgICAgICBlLl9hcmNQcm9ncmVzcyA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKGUpLnRvKG8sIHtcbiAgICAgICAgICBfYXJjUHJvZ3Jlc3M6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodCwgbywgbiwgYSkge1xuICAgICAgICAgICAgdmFyIGwgPSBhIDwgMC41ID8gMiAqIGEgKiBhIDogMSAtIE1hdGgucG93KC0yICogYSArIDIsIDIpIC8gMixcbiAgICAgICAgICAgICAgcyA9ICgxIC0gbCkgKiAoMSAtIGwpICogaS54ICsgMiAqICgxIC0gbCkgKiBsICogZCArIGwgKiBsICogci54LFxuICAgICAgICAgICAgICBjID0gKDEgLSBsKSAqICgxIC0gbCkgKiBpLnkgKyAyICogKDEgLSBsKSAqIGwgKiBoICsgbCAqIGwgKiByLnk7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKGUpICYmIChlLnBvc2l0aW9uID0gY2MudjMocywgYywgMCkpO1xuICAgICAgICAgICAgcmV0dXJuIHQgKyAobyAtIHQpICogYTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKGUucG9zaXRpb24gPSB0KTtcbiAgICAgICAgICBuKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgbigpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTEoZSwgdCwgbyA9IGZhbHNlKSB7XG4gICAgZm9yICh2YXIgbiA9IEFycmF5LmlzQXJyYXkodC5kdXJhdGlvbikgPyB0LmR1cmF0aW9uIDogW3QuZHVyYXRpb25dLCBpID0gQXJyYXkuaXNBcnJheSh0Lm1vdmVZKSA/IHQubW92ZVkgOiBbdC5tb3ZlWV0sIHIgPSBNYXRoLm1heChuLmxlbmd0aCwgaS5sZW5ndGgpOyBuLmxlbmd0aCA8IHI7KSBuLnB1c2gobltuLmxlbmd0aCAtIDFdIHx8IDApO1xuICAgIGZvciAoOyBpLmxlbmd0aCA8IHI7KSBpLnB1c2goaVtpLmxlbmd0aCAtIDFdIHx8IDApO1xuICAgIHJldHVybiB0aGlzLnBsYXlQaGFzZTFTdGFnZXMoZSwgbiwgaSwgdCwgbyk7XG4gIH1cbiAgcGxheVBoYXNlMVN0YWdlcyhlLCB0LCBvLCBuLCBpKSB7XG4gICAgdmFyIHIgPSB0aGlzO1xuICAgIGlmICghY2MuaXNWYWxpZChlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGZvciAodmFyIGEgPSBQcm9taXNlLnJlc29sdmUoKSwgbCA9IGUucG9zaXRpb24ueSwgcyA9IGZ1bmN0aW9uIHMocykge1xuICAgICAgICB2YXIgYyA9IHRbc10sXG4gICAgICAgICAgdSA9IGwgKyBvW3NdO1xuICAgICAgICBhID0gYS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICB2YXIgbyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MyhlLnBvc2l0aW9uLngsIHUsIDApXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAocyA9PT0gdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB2b2lkIDAgIT09IG4uYW5nbGUgJiYgKG8uYW5nbGUgPSBpID8gLW4uYW5nbGUgOiBuLmFuZ2xlKTtcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gbi5zY2FsZSAmJiAoby5zY2FsZSA9IG4uc2NhbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gci50d2VlblRvKGUsIGMsIG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgbCA9IHU7XG4gICAgICB9LCBjID0gMDsgYyA8IHQubGVuZ3RoOyBjKyspIHMoYyk7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgcGxheVBoYXNlMihlLCB0LCBvLCBuID0gZmFsc2UpIHtcbiAgICB2YXIgaSwgcjtcbiAgICB2YXIgYSA9IHZvaWQgMCAhPT0gby5hbmdsZSB8fCB2b2lkIDAgIT09IG8uc2NhbGUsXG4gICAgICBsID0gbnVsbCAhPT0gKGkgPSBvLnRyYW5zZm9ybUR1cmF0aW9uKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogby5yZXN0b3JlRGVsYXk7XG4gICAgaWYgKGEpIHtcbiAgICAgIHZhciBzID0gbiA/IC1vLmFuZ2xlIDogby5hbmdsZTtcbiAgICAgIGNjLnR3ZWVuKGUpLnRvKGwsIHtcbiAgICAgICAgYW5nbGU6IG51bGwgIT0gcyA/IHMgOiAwLFxuICAgICAgICBzY2FsZTogbnVsbCAhPT0gKHIgPSBvLnNjYWxlKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMVxuICAgICAgfSkudG8oby5yZXN0b3JlRGVsYXksIHtcbiAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSBjYy50d2VlbihlKS50byhvLnJlc3RvcmVEZWxheSwge1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBzY2FsZTogMVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgcmV0dXJuIHRoaXMuYmV6aWVyVG8oZSwgdCwgby5kdXJhdGlvbiwgby5jb250cm9sWU9mZnNldCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgICBlLmFuZ2xlID0gMDtcbiAgICAgICAgZS5zY2FsZSA9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcGxheUNvbGxpc2lvbihlLCB0KSB7XG4gICAgdmFyIG8sIGk7XG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIHIgPSBmdW5jdGlvbiByKGUsIG8pIHtcbiAgICAgIHZhciBuID0gZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICBpID0gby5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgY2MudHdlZW4oZSkuZGVsYXkodC5kZWxheSkudG8odC5vdXREdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54IC0gdC5vdXREaXN0YW5jZSwgbi55LCAwKVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhcnRJbk91dFwiXG4gICAgICB9KS50byh0LmluRHVyYXRpb24sIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIG4ueSwgMClcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4obykuZGVsYXkodC5kZWxheSkudG8odC5vdXREdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMoaS54ICsgdC5vdXREaXN0YW5jZSwgaS55LCAwKVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhcnRJbk91dFwiXG4gICAgICB9KS50byh0LmluRHVyYXRpb24sIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIGkueSwgMClcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG8uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdmFyIHIgPSB0LmRlbGF5ICsgdC5vdXREdXJhdGlvbixcbiAgICAgICAgYSA9IHZvaWQgMCxcbiAgICAgICAgbCA9IHZvaWQgMDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHQuc2NhbGVVcCkpIHtcbiAgICAgICAgaWYgKHQuc2NhbGVVcC5sZW5ndGggPj0gMikge1xuICAgICAgICAgIGEgPSB7XG4gICAgICAgICAgICBzY2FsZVg6IHQuc2NhbGVVcFswXSxcbiAgICAgICAgICAgIHNjYWxlWTogdC5zY2FsZVVwWzFdXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsID0ge1xuICAgICAgICAgICAgc2NhbGVYOiAxLFxuICAgICAgICAgICAgc2NhbGVZOiAxXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgc2NhbGU6IHQuc2NhbGVVcFswXVxuICAgICAgICAgIH07XG4gICAgICAgICAgbCA9IHtcbiAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSA9IHtcbiAgICAgICAgICBzY2FsZTogdC5zY2FsZVVwXG4gICAgICAgIH07XG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNjLnR3ZWVuKGUpLmRlbGF5KHIpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnNjYWxlID0gMTtcbiAgICAgIH0pLnRvKHQuc2NhbGVEdXJhdGlvbjEsIGEpLnRvKHQuc2NhbGVEdXJhdGlvbjIsIGwpLnN0YXJ0KCk7XG4gICAgICBjYy50d2VlbihvKS5kZWxheShyKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgby5zY2FsZSA9IDE7XG4gICAgICB9KS50byh0LnNjYWxlRHVyYXRpb24xLCBhKS50byh0LnNjYWxlRHVyYXRpb24yLCBsKS5zdGFydCgpO1xuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhlKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICByKHMubm9kZTEsIHMubm9kZTIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKGkgPSBhLnJldHVybikgJiYgaS5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlbGF5KGVbMF0ubm9kZTEsIHQuZGVsYXkgKyB0Lm91dER1cmF0aW9uICsgdC5pbkR1cmF0aW9uKTtcbiAgfVxuICBwbGF5VHJhaWxFZmZlY3QoZSwgdCwgbywgbiwgYSwgbCwgcykge1xuICAgIHZhciBjID0gdGhpcyxcbiAgICAgIHUgPSBuZXcgY2MuTm9kZShcIlRyYWlsQ29udGFpbmVyXCIpO1xuICAgIHUucGFyZW50ID0gZTtcbiAgICB1LnBvc2l0aW9uID0gY2MudjMoby54LCBvLnksIDApO1xuICAgIHUuekluZGV4ID0gNDAwO1xuICAgIHUuc2NhbGUgPSB0IHx8IDE7XG4gICAgaWYgKGwudHJhaWxTcGluZSkge1xuICAgICAgQmFzZVNwaW5lLmNyZWF0ZShsLnRyYWlsU3BpbmUucGF0aCwgbC50cmFpbFNwaW5lLmFuaW0gfHwgXCJpblwiLCAtMSwgbnVsbCwgZmFsc2UsIGwudHJhaWxTcGluZS5idW5kbGUpLm5vZGUucGFyZW50ID0gdTtcbiAgICB9IGVsc2Uge1xuICAgICAgbC50cmFpbFNwcml0ZSAmJiAoQmFzZVNwcml0ZS5jcmVhdGUobC50cmFpbFNwcml0ZS5wYXRoLCBsLnRyYWlsU3ByaXRlLmJ1bmRsZSkubm9kZS5wYXJlbnQgPSB1KTtcbiAgICB9XG4gICAgcmV0dXJuIHMobC50cmFpbFRleHR1cmUucGF0aCwgY2MuU3ByaXRlRnJhbWUsIGwudHJhaWxUZXh0dXJlLmJ1bmRsZSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUgJiYgY2MuaXNWYWxpZCh1KSkge1xuICAgICAgICB2YXIgdCA9IHUuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICAgIHQuZmFkZVRpbWUgPSBhLmZhZGVUaW1lO1xuICAgICAgICB0Lm1pblNlZyA9IDE7XG4gICAgICAgIHQuc3Ryb2tlID0gYS5zdHJva2U7XG4gICAgICAgIHQudGV4dHVyZSA9IGUuZ2V0VGV4dHVyZSgpO1xuICAgICAgICB0LmNvbG9yID0gYS5jb2xvcjtcbiAgICAgICAgcmV0dXJuIGMuYXJjVG8odSwgY2MudjMobi54LCBuLnksIDApLCBhLmR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQodSkgJiYgdS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0Zsb3dMaWdodChlLCB0LCBvLCBuKSB7XG4gICAgdmFyIHIgPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgciAmJiAoci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKCFlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKSkge1xuICAgICAgdmFyIGEgPSBuZXcgY2MuTm9kZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIik7XG4gICAgICBlLmFkZENoaWxkKGEpO1xuICAgICAgYS5zY2FsZSA9IHQ7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGEsIG8sIG4pLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgcGxheUhpdEVmZmVjdChlLCB0LCBvLCBuLCByID0gdHJ1ZSkge1xuICAgIHZhciBhID0gQmFzZVNwaW5lLmNyZWF0ZShvLCBcImluXCIsIDEsIG51bGwsIGZhbHNlLCBuKTtcbiAgICBhLm5vZGUucGFyZW50ID0gciA/IGUgOiBlLnBhcmVudDtcbiAgICBhLm5vZGUucG9zaXRpb24gPSByID8gY2MudjMoMCwgMCwgMCkgOiBlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgYS5ub2RlLnpJbmRleCA9IHIgPyA5MDAgOiAzMDA7XG4gICAgYS5ub2RlLnNjYWxlID0gdDtcbiAgICBhLm5vZGUubmFtZSA9IFwiRGF4aWFvSGl0U3BpbmVOb2RlXCI7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgcGxheUVsaW1pbmF0aW9uRWZmZWN0KGUsIHQsIG8pIHtcbiAgICB2YXIgciwgYTtcbiAgICBpZiAobykgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyh0KSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlLFxuICAgICAgICAgIHUgPSBCYXNlU3BpbmUuY3JlYXRlKG8ucGF0aCwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBvLmJ1bmRsZSk7XG4gICAgICAgIHUubm9kZS5wYXJlbnQgPSBlO1xuICAgICAgICB1Lm5vZGUucG9zaXRpb24gPSBjYy52MygwLCBjLCAwKTtcbiAgICAgICAgdS5ub2RlLnpJbmRleCA9IDYwMDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChhID0gbC5yZXR1cm4pICYmIGEuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwbGF5Q29sbGlzaW9uQ29tcGxldGVFZmZlY3QoZSwgdCwgbykge1xuICAgIGlmIChvLmJhY2tTcGluZSkge1xuICAgICAgdmFyIG4gPSBCYXNlU3BpbmUuY3JlYXRlKG8uYmFja1NwaW5lLnBhdGgsIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgby5iYWNrU3BpbmUuYnVuZGxlKTtcbiAgICAgIG4ubm9kZS5wYXJlbnQgPSBlO1xuICAgICAgbi5ub2RlLnBvc2l0aW9uID0gY2MudjMoLXQgLyAyLCAwLCAwKTtcbiAgICAgIG4ubm9kZS56SW5kZXggPSA1MDA7XG4gICAgICB2YXIgciA9IEJhc2VTcGluZS5jcmVhdGUoby5iYWNrU3BpbmUucGF0aCwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBvLmJhY2tTcGluZS5idW5kbGUpO1xuICAgICAgci5ub2RlLnBhcmVudCA9IGU7XG4gICAgICByLm5vZGUucG9zaXRpb24gPSBjYy52Myh0IC8gMiwgMCwgMCk7XG4gICAgICByLm5vZGUuc2NhbGVYID0gLTE7XG4gICAgICByLm5vZGUuekluZGV4ID0gNTAwO1xuICAgIH1cbiAgICBpZiAoby5lZmZlY3RTcGluZSkge1xuICAgICAgdmFyIGEgPSBCYXNlU3BpbmUuY3JlYXRlKG8uZWZmZWN0U3BpbmUucGF0aCwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBvLmVmZmVjdFNwaW5lLmJ1bmRsZSk7XG4gICAgICBhLm5vZGUucGFyZW50ID0gZTtcbiAgICAgIGEubm9kZS56SW5kZXggPSA1MDA7XG4gICAgfVxuICB9XG4gIGNhbGN1bGF0ZVlQb3NpdGlvbnMoZSwgdCwgbykge1xuICAgIGlmIChvIDw9IDApIHJldHVybiBbXTtcbiAgICBpZiAoMSA9PT0gbykgcmV0dXJuIFsoZSArIHQpIC8gMl07XG4gICAgdmFyIG4gPSAoZSAtIHQpIC8gKG8gLSAxKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IG9cbiAgICB9LCBmdW5jdGlvbiAodCwgbykge1xuICAgICAgcmV0dXJuIGUgLSBvICogbjtcbiAgICB9KTtcbiAgfVxuICBkZXN0cm95Tm9kZXMoZSkge1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGNjLmlzVmFsaWQoZSkgJiYgZS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgcnVuQ2FyZDFBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSB0aGlzLmNvbmZpZyxcbiAgICAgIG4gPSB0aGlzLm5vZGVJbmZvcy5sZW5ndGgsXG4gICAgICBpID0gZS5ydW5JbmRleCAqIG8ucGhhc2UxLmRlbGF5LFxuICAgICAgciA9IChuIC0gMSAtIGUucnVuSW5kZXgpICogby5waGFzZTEuZGVsYXksXG4gICAgICBhID0gMC4wNjcgKiBlLnJ1bkluZGV4O1xuICAgIHRoaXMuZGVsYXkoZS5jYXJkTm9kZTEsIGkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucGxheVBoYXNlMShlLmNhcmROb2RlMSwgby5waGFzZTEpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuZGVsYXkoZS5jYXJkTm9kZTEsIHIgKyBhKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuID0gdC5wbGF5UGhhc2UyKGUuY2FyZE5vZGUxLCBlLnRhcmdldFBvczEsIG8ucGhhc2UyKSxcbiAgICAgICAgaSA9IG8ucGhhc2UyLnRyYWlsRGVsYXkgfHwgMDtcbiAgICAgIHQuZGVsYXkoZS5jYXJkTm9kZTEsIGkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnRyaWdnZXJUcmFpbChlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfSk7XG4gIH1cbiAgdHJpZ2dlclRyYWlsKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGUsXG4gICAgICBuID0gZS5jYXJkTm9kZTEucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgIGkgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVQb3MoZS50aWxlSWQyKTtcbiAgICBpZiAoaSkge1xuICAgICAgdGhpcy5wbGF5VHJhaWxFZmZlY3QobywgdGhpcy5jb250ZXh0LmxheW91dFNjYWxlLCBjYy52MihuLngsIG4ueSksIGNjLnYyKGkueCwgaS55KSwgdGhpcy5jb25maWcudHJhaWwsIHRoaXMuY29uZmlnLnJlc291cmNlcywgdGhpcy5jb250ZXh0LmxvYWRSZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5ydW5DYXJkMkFuaW1hdGlvbihlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bkNhcmQyQW5pbWF0aW9uKGUpO1xuICAgIH1cbiAgfVxuICBydW5DYXJkMkFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IHRoaXMuY29uZmlnLFxuICAgICAgbiA9IG8ucmVzb3VyY2VzO1xuICAgIHRoaXMuY29udGV4dC5yZW1vdmVUaWxlTm9kZShlLnRpbGVJZDIpO1xuICAgIGUuY2FyZE5vZGUyLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIGkgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGUgfHwgMSxcbiAgICAgIHIgPSBmYWxzZSAhPT0gby50cmFpbC5oaXRGb2xsb3dUYXJnZXQ7XG4gICAgdGhpcy5wbGF5SGl0RWZmZWN0KGUuY2FyZE5vZGUyLCBpLCBuLmhpdFNwaW5lLnBhdGgsIG4uaGl0U3BpbmUuYnVuZGxlLCByKTtcbiAgICB0aGlzLmRlbGF5KGUuY2FyZE5vZGUyLCBvLnRyYWlsLmhpdERlbGF5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuc2hvd0Zsb3dMaWdodChlLmNhcmROb2RlMi5nZXRDaGlsZEJ5TmFtZShcIlRpbGVBbmltTm9kZU5hbWVcIikgfHwgZS5jYXJkTm9kZTIsIGksIG4uZmxvd0xpZ2h0LnBhdGgsIG4uZmxvd0xpZ2h0LmJ1bmRsZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5wbGF5UGhhc2UxKGUuY2FyZE5vZGUyLCBvLnBoYXNlMSwgdHJ1ZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5wbGF5UGhhc2UyKGUuY2FyZE5vZGUyLCBlLnRhcmdldFBvczIsIG8ucGhhc2UyLCB0cnVlKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Lm9uQ2FyZDJBcnJpdmVkKCk7XG4gICAgfSk7XG4gIH1cbiAgb25DYXJkMkFycml2ZWQoKSB7XG4gICAgKyt0aGlzLmNvbXBsZXRlZENvdW50ID49IHRoaXMubm9kZUluZm9zLmxlbmd0aCAmJiB0aGlzLnN0YXJ0Q29sbGlzaW9uKCk7XG4gIH1cbiAgc3RhcnRDb2xsaXNpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHRoaXMubm9kZUluZm9zLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGUxOiBlLmNhcmROb2RlMSxcbiAgICAgICAgICBub2RlMjogZS5jYXJkTm9kZTJcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHRoaXMucGxheUNvbGxpc2lvbih0LCB0aGlzLmNvbmZpZy5jb2xsaXNpb24pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUub25Db2xsaXNpb25Db21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG4gIG9uQ29sbGlzaW9uQ29tcGxldGUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZSxcbiAgICAgIHQgPSB0aGlzLmNvbmZpZy5yZXNvdXJjZXMsXG4gICAgICBvID0gTWF0aC5taW4odGhpcy5ub2RlSW5mb3MubGVuZ3RoLCAzKTtcbiAgICBpZiAobyA+IDApIHtcbiAgICAgIHZhciBuID0gdGhpcy5ub2RlSW5mb3NbMF0udGFyZ2V0UG9zMS55LFxuICAgICAgICBpID0gdGhpcy5ub2RlSW5mb3NbdGhpcy5ub2RlSW5mb3MubGVuZ3RoIC0gMV0udGFyZ2V0UG9zMS55O1xuICAgICAgdGhpcy5wbGF5RWxpbWluYXRpb25FZmZlY3QoZSwgdGhpcy5jYWxjdWxhdGVZUG9zaXRpb25zKG4sIGksIG8pLCB0LmVsaW1pbmF0aW9uKTtcbiAgICB9XG4gICAgdmFyIHIgPSBbXTtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gci5wdXNoKGUuY2FyZE5vZGUxLCBlLmNhcmROb2RlMik7XG4gICAgfSk7XG4gICAgdGhpcy5kZXN0cm95Tm9kZXMocik7XG4gICAgdGhpcy5wbGF5Q29sbGlzaW9uQ29tcGxldGVFZmZlY3QoZSwgZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoLCB0KTtcbiAgICB0aGlzLmNvbnRleHQub25TaGFrZSgpO1xuICAgIHRoaXMuY29udGV4dC5vbkNvbXBsZXRlKCk7XG4gIH1cbiAgc2hvd0NsZWFyVGlwKGUpIHtcbiAgICB2YXIgdCA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkVGlwTm9kZVwiKTtcbiAgICB0ICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgZS5hZGRDaGlsZChvKTtcbiAgICBvLnpJbmRleCA9IFRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmltZ0NhcmRdICsgMTtcbiAgICBvLnNjYWxlID0gdGhpcy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgIHZhciBuID0gdGhpcy5jb25maWcucmVzb3VyY2VzLmZsb3dMaWdodDtcbiAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKG8sIG4ucGF0aCwgbi5idW5kbGUpLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgfVxufSJdfQ==