
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaonewanim/Scripts/ZheshanAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cad1fpiVAFM/KT//ZBOZ4KI', 'ZheshanAnimPlayer');
// subpackages/l_daxiaonewanim/Scripts/ZheshanAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZheshanAnimPlayer = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var ZheshanAnimPlayer = /** @class */ (function () {
    function ZheshanAnimPlayer(t) {
        this.nodeInfos = [];
        this.completedCount = 0;
        this.maskLayer = null;
        this.maskGraphics = null;
        this.PHASE1_DURATION = 0.16;
        this.PHASE1_MOVE_Y = 10;
        this.PHASE1_ANGLE = -10;
        this.PHASE1_SCALE = 1.2;
        this.PHASE1_DELAY = 0.06;
        this.PHASE2_DURATION = 0.5;
        this.PHASE2_RESTORE_DELAY = 0.4;
        this.PHASE2_INTERVAL_DELAY = 0.067;
        this.TRAIL_HIT_DELAY = 0.2;
        this.TRAIL_DURATION = 0.3;
        this.TRAIL_FADE_TIME = 0.3;
        this.TRAIL_STROKE = 64;
        this.TRAIL_COLOR = cc.color(255, 255, 255, 255);
        this.COLLISION_DELAY = 0.1;
        this.COLLISION_OUT_DURATION = 0.33;
        this.COLLISION_OUT_DISTANCE = 2000;
        this.FADE_TO_DARK_OPACITY = 77;
        this.FADE_TO_DARK_DURATION = 0.16;
        this.FADE_TO_WHITE_DURATION = 0.33;
        this.RES_BUNDLE = "l_daxiaozheshan";
        this.RES_TRAIL_SPRITE = "texture/gameplay_trailingElement";
        this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        this.RES_HIT_SPINE = "spine/hint/gameplay_hit";
        this.RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight";
        this.RES_ELIMINATION = "spine/clear/gameplay_great_elimination_effect";
        this.context = null;
        this.context = t;
    }
    ZheshanAnimPlayer.playFullAnimation = function (e, i) {
        var o, n, r, s, c = e.context, l = c.gameView.nodeTopEffectRoot, h = new ZheshanAnimPlayer({
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
    ZheshanAnimPlayer.prototype.delay = function (t, e) {
        return new Promise(function (i) {
            if (cc.isValid(t)) {
                cc.tween(t).delay(e).call(i).start();
            }
            else {
                i();
            }
        });
    };
    ZheshanAnimPlayer.prototype.createBezierEasing = function (t, e, i, a) {
        return function (o) {
            if (0 === o || 1 === o)
                return o;
            for (var n = 0, r = 1, s = 0, c = 0; c < 10; c++) {
                var l = (n + r) / 2;
                s = 3 * (1 - l) * (1 - l) * l * t + 3 * (1 - l) * l * l * i + l * l * l;
                if (Math.abs(s - o) < 0.001)
                    break;
                if (s < o) {
                    n = l;
                }
                else {
                    r = l;
                }
            }
            var h = (n + r) / 2;
            return 3 * (1 - h) * (1 - h) * h * e + 3 * (1 - h) * h * h * a + h * h * h;
        };
    };
    ZheshanAnimPlayer.prototype.bezierTo = function (t, e, i) {
        var a = this;
        return new Promise(function (o) {
            if (cc.isValid(t)) {
                var n = a.createBezierEasing(0.25, 0, 0.25, 1);
                cc.tween(t).to(i, {
                    position: e
                }, {
                    easing: n
                }).call(o).start();
            }
            else
                o();
        });
    };
    ZheshanAnimPlayer.prototype.arcTo = function (t, e, i, a) {
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
    ZheshanAnimPlayer.prototype.hideFlowLight = function (t) {
        var e = t.getChildByName("DaxiaoFlowLightNode");
        e && (e.active = false);
        var i = t.getChildByName("DaxiaoCardTipNode");
        i && (i.active = false);
    };
    ZheshanAnimPlayer.prototype.showFlowLight = function (t) {
        if (!t.getChildByName("DaxiaoFlowLightNode")) {
            var e = new cc.Node("DaxiaoFlowLightNode");
            t.addChild(e);
            e.scale = this.context.layoutScale;
            BaseSpine_1.default.refreshWithNode(e, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", -1, null, false);
        }
    };
    ZheshanAnimPlayer.prototype.setupPositions = function (t) {
        var e = this;
        t.sort(function (t, i) {
            var a = e.context.getTileObject(t.tileId2), o = e.context.getTileObject(i.tileId2);
            return a && o ? a.gridPosX !== o.gridPosX ? a.gridPosX - o.gridPosX : a.gridPosY - o.gridPosY : 0;
        });
        var i = t[0].cardNode1.getContentSize().height, a = t[0].cardNode1.getContentSize().width;
        t.forEach(function (e, o) {
            var n = 0.5 * i + (t.length - 1 - o) * i;
            e.targetPos1 = cc.v3(-0.5 * a, n, 0);
            e.targetPos2 = cc.v3(0.5 * a, n, 0);
            e.runIndex = t.length - 1 - o;
            var r = 2 * o;
            e.cardNode1.zIndex = r;
            e.cardNode2.zIndex = r + 1;
        });
        this.nodeInfos = t;
    };
    ZheshanAnimPlayer.prototype.play = function (t) {
        var e = this;
        this.nodeInfos = t;
        this.completedCount = 0;
        this.createMaskLayer();
        this.fadeToDark();
        this.nodeInfos.forEach(function (t) {
            return e.animateCard1(t);
        });
    };
    ZheshanAnimPlayer.prototype.animateCard1 = function (t) {
        var e = this;
        this.context.removeTileNode(t.tileId1);
        var i = this.nodeInfos.length, a = t.runIndex * this.PHASE1_DELAY, o = (i - 1 - t.runIndex) * this.PHASE1_DELAY, n = t.runIndex * this.PHASE2_INTERVAL_DELAY;
        this.delay(t.cardNode1, a).then(function () {
            return e.playPhase1(t.cardNode1, false);
        }).then(function () {
            return e.delay(t.cardNode1, o + n);
        }).then(function () {
            var i = e.playPhase2(t.cardNode1, t.targetPos1);
            e.delay(t.cardNode1, 0).then(function () {
                e.triggerTrail(t);
            });
            return i;
        });
    };
    ZheshanAnimPlayer.prototype.playPhase1 = function (t, e) {
        var i = this;
        if (!cc.isValid(t))
            return Promise.resolve();
        var a = t.position.y + this.PHASE1_MOVE_Y, o = e ? -this.PHASE1_ANGLE : this.PHASE1_ANGLE;
        return new Promise(function (e) {
            cc.tween(t).to(i.PHASE1_DURATION, {
                position: cc.v3(t.position.x, a, 0),
                angle: o,
                scale: i.PHASE1_SCALE
            }).call(e).start();
        });
    };
    ZheshanAnimPlayer.prototype.playPhase2 = function (t, e) {
        cc.tween(t).to(this.PHASE2_RESTORE_DELAY, {
            angle: 0,
            scale: 1
        }).start();
        return this.bezierTo(t, e, this.PHASE2_DURATION).then(function () {
            if (cc.isValid(t)) {
                t.angle = 0;
                t.scale = 1;
            }
        });
    };
    ZheshanAnimPlayer.prototype.triggerTrail = function (t) {
        var e = this, i = t.cardNode1.position.clone(), a = this.context.getTileNodePos(t.tileId2);
        if (a) {
            this.playTrailEffect(i, a).then(function () {
                return e.animateCard2(t);
            });
        }
        else {
            this.animateCard2(t);
        }
    };
    ZheshanAnimPlayer.prototype.playTrailEffect = function (t, e) {
        var i = this, a = new cc.Node("TrailContainer");
        a.parent = this.context.effectNode;
        a.position = t;
        a.zIndex = 400;
        a.scale = this.context.layoutScale;
        var o = new cc.Node("SpriteContainer");
        o.parent = a;
        o.position = cc.v3(0, 0, 0);
        BaseSprite_1.default.create(this.RES_TRAIL_SPRITE, this.RES_BUNDLE).node.parent = o;
        return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (t) {
            if (t && cc.isValid(a)) {
                var n = a.addComponent(cc.MotionStreak);
                n.fadeTime = i.TRAIL_FADE_TIME;
                n.minSeg = 1;
                n.stroke = i.TRAIL_STROKE;
                n.texture = t.getTexture();
                n.color = i.TRAIL_COLOR;
                return i.arcTo(a, e, i.TRAIL_DURATION, o);
            }
        }).then(function () {
            cc.isValid(a) && a.destroy();
        });
    };
    ZheshanAnimPlayer.prototype.animateCard2 = function (t) {
        var e = this;
        this.context.removeTileNode(t.tileId2);
        t.cardNode2.active = true;
        var i = this.context.layoutScale || 1;
        this.playHitEffect(t.cardNode2, i);
        this.delay(t.cardNode2, this.TRAIL_HIT_DELAY).then(function () {
            var i = t.cardNode2.getChildByName("TileAnimNodeName") || t.cardNode2;
            e.showFlowLight(i);
        }).then(function () {
            return e.playPhase1(t.cardNode2, true);
        }).then(function () {
            return e.playPhase2(t.cardNode2, t.targetPos2);
        }).then(function () {
            return e.onCard2Arrived();
        });
    };
    ZheshanAnimPlayer.prototype.playHitEffect = function (t, e) {
        var i = BaseSpine_1.default.create(this.RES_HIT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
        i.node.parent = this.context.effectNode;
        i.node.position = t.position.clone();
        i.node.zIndex = 900;
        i.node.scale = e;
        i.node.name = "DaxiaoHitSpineNode";
    };
    ZheshanAnimPlayer.prototype.onCard2Arrived = function () {
        ++this.completedCount >= this.nodeInfos.length && this.startCollision();
    };
    ZheshanAnimPlayer.prototype.startCollision = function () {
        var t = this, e = this.nodeInfos.map(function (t) {
            return {
                node1: t.cardNode1,
                node2: t.cardNode2
            };
        });
        this.playCollision(e).then(function () {
            return t.onCollisionComplete();
        });
    };
    ZheshanAnimPlayer.prototype.playCollision = function (t) {
        var e = this;
        if (0 === t.length)
            return Promise.resolve();
        this.delay(t[0].node1, this.COLLISION_DELAY).then(function () {
            e.playEliminationEffect();
            e.context.playShake();
            e.fadeToWhite();
        });
        var i = this.nodeInfos[0].cardNode1.getContentSize().height, a = this.nodeInfos[0].cardNode1.getContentSize().width, o = 0.5 * i, n = this.nodeInfos.length;
        this.nodeInfos.forEach(function (t, i) {
            var r = n - 1 - i, s = -0.5 * a - r * a, c = 0.5 * a + r * a, l = cc.v3(s, o, 0), h = cc.v3(c, o, 0);
            cc.tween(t.cardNode1).delay(e.COLLISION_DELAY).to(e.COLLISION_OUT_DURATION, {
                position: l
            }, {
                easing: "quartInOut"
            }).call(function () {
                cc.isValid(t.cardNode1) && (t.cardNode1.active = false);
            }).start();
            cc.tween(t.cardNode2).delay(e.COLLISION_DELAY).to(e.COLLISION_OUT_DURATION, {
                position: h
            }, {
                easing: "quartInOut"
            }).call(function () {
                cc.isValid(t.cardNode2) && (t.cardNode2.active = false);
            }).start();
        });
        return this.delay(t[0].node1, this.COLLISION_DELAY + this.COLLISION_OUT_DURATION);
    };
    ZheshanAnimPlayer.prototype.onCollisionComplete = function () {
        this.nodeInfos.forEach(function (t) {
            cc.isValid(t.cardNode1) && t.cardNode1.destroy();
            cc.isValid(t.cardNode2) && t.cardNode2.destroy();
        });
        if (cc.isValid(this.maskLayer)) {
            this.maskLayer.destroy();
            this.maskLayer = null;
        }
        this.maskGraphics = null;
        this.context.onComplete();
    };
    ZheshanAnimPlayer.prototype.playEliminationEffect = function () {
        var t = BaseSpine_1.default.create(this.RES_ELIMINATION, "in", 1, null, true, this.RES_BUNDLE);
        t.node.parent = this.context.effectNode;
        t.node.position = cc.v3(0, 0, 0);
        t.node.zIndex = 600;
    };
    ZheshanAnimPlayer.prototype.createMaskLayer = function () {
        this.maskLayer = new cc.Node("ZheshanMaskLayer");
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
    ZheshanAnimPlayer.prototype.fadeToDark = function () {
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
    ZheshanAnimPlayer.prototype.fadeToWhite = function () {
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
    return ZheshanAnimPlayer;
}());
exports.ZheshanAnimPlayer = ZheshanAnimPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb25ld2FuaW0vU2NyaXB0cy9aaGVzaGFuQW5pbVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSwyRUFBc0U7QUFDdEU7SUErQkUsMkJBQVksQ0FBQztRQTlCYixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLEdBQUcsQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLHFC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QUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQy9ELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2pELENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUMvQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOzRCQUM1QyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMs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LENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3ZCLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUN2QjtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7YUFDRixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBbmJBLEFBbWJDLElBQUE7QUFuYlksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmV4cG9ydCBjbGFzcyBaaGVzaGFuQW5pbVBsYXllciB7XG4gIG5vZGVJbmZvcyA9IFtdO1xuICBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIG1hc2tMYXllciA9IG51bGw7XG4gIG1hc2tHcmFwaGljcyA9IG51bGw7XG4gIFBIQVNFMV9EVVJBVElPTiA9IDAuMTY7XG4gIFBIQVNFMV9NT1ZFX1kgPSAxMDtcbiAgUEhBU0UxX0FOR0xFID0gLTEwO1xuICBQSEFTRTFfU0NBTEUgPSAxLjI7XG4gIFBIQVNFMV9ERUxBWSA9IDAuMDY7XG4gIFBIQVNFMl9EVVJBVElPTiA9IDAuNTtcbiAgUEhBU0UyX1JFU1RPUkVfREVMQVkgPSAwLjQ7XG4gIFBIQVNFMl9JTlRFUlZBTF9ERUxBWSA9IDAuMDY3O1xuICBUUkFJTF9ISVRfREVMQVkgPSAwLjI7XG4gIFRSQUlMX0RVUkFUSU9OID0gMC4zO1xuICBUUkFJTF9GQURFX1RJTUUgPSAwLjM7XG4gIFRSQUlMX1NUUk9LRSA9IDY0O1xuICBUUkFJTF9DT0xPUiA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gIENPTExJU0lPTl9ERUxBWSA9IDAuMTtcbiAgQ09MTElTSU9OX09VVF9EVVJBVElPTiA9IDAuMzM7XG4gIENPTExJU0lPTl9PVVRfRElTVEFOQ0UgPSAyMDAwO1xuICBGQURFX1RPX0RBUktfT1BBQ0lUWSA9IDc3O1xuICBGQURFX1RPX0RBUktfRFVSQVRJT04gPSAwLjE2O1xuICBGQURFX1RPX1dISVRFX0RVUkFUSU9OID0gMC4zMztcbiAgUkVTX0JVTkRMRSA9IFwibF9kYXhpYW96aGVzaGFuXCI7XG4gIFJFU19UUkFJTF9TUFJJVEUgPSBcInRleHR1cmUvZ2FtZXBsYXlfdHJhaWxpbmdFbGVtZW50XCI7XG4gIFJFU19UUkFJTF9URVhUVVJFID0gXCJ0ZXh0dXJlL2dhbWVwbGF5X3N0YXJfdGFpbFwiO1xuICBSRVNfSElUX1NQSU5FID0gXCJzcGluZS9oaW50L2dhbWVwbGF5X2hpdFwiO1xuICBSRVNfRkxPV19MSUdIVCA9IFwic3BpbmUvaWRsZS9nYW1lcGxheV9mbG93aW5nTGlnaHRcIjtcbiAgUkVTX0VMSU1JTkFUSU9OID0gXCJzcGluZS9jbGVhci9nYW1lcGxheV9ncmVhdF9lbGltaW5hdGlvbl9lZmZlY3RcIjtcbiAgY29udGV4dCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSB0O1xuICB9XG4gIHN0YXRpYyBwbGF5RnVsbEFuaW1hdGlvbihlLCBpKSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgcixcbiAgICAgIHMsXG4gICAgICBjID0gZS5jb250ZXh0LFxuICAgICAgbCA9IGMuZ2FtZVZpZXcubm9kZVRvcEVmZmVjdFJvb3QsXG4gICAgICBoID0gbmV3IFpoZXNoYW5BbmltUGxheWVyKHtcbiAgICAgICAgZWZmZWN0Tm9kZTogbCxcbiAgICAgICAgbGF5b3V0U2NhbGU6IGMubGF5b3V0U2NhbGUsXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZS5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSZXM6IGZ1bmN0aW9uICh0LCBlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGMuZ2FtZUN0ci5sb2FkUmVzKHQsIGUsIGkpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUaWxlTm9kZVBvczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgaSA9IGMuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodCk7XG4gICAgICAgICAgcmV0dXJuIGkgPyBlLnRvTG9jYWxQb3MoaS5jYXJkTm9kZSwgbCkgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVUaWxlTm9kZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gYy5yZW1vdmVUaWxlTm9kZUJ5VGlsZUlkKHQpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRUaWxlT2JqZWN0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBlID0gYy5nZXRUaWxlTm9kZU1hcCgpLmdldCh0KTtcbiAgICAgICAgICByZXR1cm4gZSA/IGUuaW5mby50aWxlT2JqZWN0IDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheVNoYWtlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGMuZ2FtZVZpZXcucGxheVNoYWtlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMoaSksIHAgPSBkLm5leHQoKTsgIXAuZG9uZTsgcCA9IGQubmV4dCgpKSB7XG4gICAgICAgIHZhciB1ID0gcC52YWx1ZSxcbiAgICAgICAgICBmID0gbnVsbCA9PT0gKHIgPSBjLmdldFRpbGVOb2RlQnlUaWxlSWQodS50aWxlSWQxKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci50aWxlTm9kZTtcbiAgICAgICAgZiAmJiBoLmhpZGVGbG93TGlnaHQoZik7XG4gICAgICAgIHZhciBfID0gbnVsbCA9PT0gKHMgPSBjLmdldFRpbGVOb2RlQnlUaWxlSWQodS50aWxlSWQyKSkgfHwgdm9pZCAwID09PSBzID8gdm9pZCAwIDogcy50aWxlTm9kZTtcbiAgICAgICAgXyAmJiBoLmhpZGVGbG93TGlnaHQoXyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAobiA9IGQucmV0dXJuKSAmJiBuLmNhbGwoZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaC5zZXR1cFBvc2l0aW9ucyhpKTtcbiAgICBoLnBsYXkoaSk7XG4gIH1cbiAgZGVsYXkodCwgZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgY2MudHdlZW4odCkuZGVsYXkoZSkuY2FsbChpKS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUJlemllckVhc2luZyh0LCBlLCBpLCBhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoMCA9PT0gbyB8fCAxID09PSBvKSByZXR1cm4gbztcbiAgICAgIGZvciAodmFyIG4gPSAwLCByID0gMSwgcyA9IDAsIGMgPSAwOyBjIDwgMTA7IGMrKykge1xuICAgICAgICB2YXIgbCA9IChuICsgcikgLyAyO1xuICAgICAgICBzID0gMyAqICgxIC0gbCkgKiAoMSAtIGwpICogbCAqIHQgKyAzICogKDEgLSBsKSAqIGwgKiBsICogaSArIGwgKiBsICogbDtcbiAgICAgICAgaWYgKE1hdGguYWJzKHMgLSBvKSA8IDAuMDAxKSBicmVhaztcbiAgICAgICAgaWYgKHMgPCBvKSB7XG4gICAgICAgICAgbiA9IGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgciA9IGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBoID0gKG4gKyByKSAvIDI7XG4gICAgICByZXR1cm4gMyAqICgxIC0gaCkgKiAoMSAtIGgpICogaCAqIGUgKyAzICogKDEgLSBoKSAqIGggKiBoICogYSArIGggKiBoICogaDtcbiAgICB9O1xuICB9XG4gIGJlemllclRvKHQsIGUsIGkpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB2YXIgbiA9IGEuY3JlYXRlQmV6aWVyRWFzaW5nKDAuMjUsIDAsIDAuMjUsIDEpO1xuICAgICAgICBjYy50d2Vlbih0KS50byhpLCB7XG4gICAgICAgICAgcG9zaXRpb246IGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogblxuICAgICAgICB9KS5jYWxsKG8pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgbygpO1xuICAgIH0pO1xuICB9XG4gIGFyY1RvKHQsIGUsIGksIGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHZhciBuID0gdC5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICAgIHIgPSBlLFxuICAgICAgICAgIHMgPSByLnggLSBuLngsXG4gICAgICAgICAgYyA9IHIueSAtIG4ueSxcbiAgICAgICAgICBsID0gTWF0aC5zcXJ0KHMgKiBzICsgYyAqIGMpLFxuICAgICAgICAgIGggPSBsICogKDAuNiArIDAuMiAqIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgIGQgPSBNYXRoLnJhbmRvbSgpID4gMC41LFxuICAgICAgICAgIHAgPSAobi54ICsgci54KSAvIDIsXG4gICAgICAgICAgdSA9IChuLnkgKyByLnkpIC8gMixcbiAgICAgICAgICBmID0gcCArIC1jIC8gbCAqIGggKiAoZCA/IDEgOiAtMSksXG4gICAgICAgICAgXyA9IHUgKyBzIC8gbCAqIGggKiAoZCA/IDEgOiAtMSk7XG4gICAgICAgIHQuX2FyY1Byb2dyZXNzID0gMDtcbiAgICAgICAgY2MudHdlZW4odCkudG8oaSwge1xuICAgICAgICAgIF9hcmNQcm9ncmVzczogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChlLCBpLCBvLCBzKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHMgPCAwLjUgPyAyICogcyAqIHMgOiAxIC0gTWF0aC5wb3coLTIgKiBzICsgMiwgMikgLyAyLFxuICAgICAgICAgICAgICBsID0gKDEgLSBjKSAqICgxIC0gYykgKiBuLnggKyAyICogKDEgLSBjKSAqIGMgKiBmICsgYyAqIGMgKiByLngsXG4gICAgICAgICAgICAgIGggPSAoMSAtIGMpICogKDEgLSBjKSAqIG4ueSArIDIgKiAoMSAtIGMpICogYyAqIF8gKyBjICogYyAqIHIueTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQucG9zaXRpb24gPSBjYy52MyhsLCBoLCAwKSk7XG4gICAgICAgICAgICBpZiAoYSAmJiBjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgICAgICAgIHZhciBkID0gMiAqICgxIC0gYykgKiAoZiAtIG4ueCkgKyAyICogYyAqIChyLnggLSBmKSxcbiAgICAgICAgICAgICAgICBwID0gMiAqICgxIC0gYykgKiAoXyAtIG4ueSkgKyAyICogYyAqIChyLnkgLSBfKSxcbiAgICAgICAgICAgICAgICB1ID0gMTgwICogTWF0aC5hdGFuMihwLCBkKSAvIE1hdGguUEkgLSA5MDtcbiAgICAgICAgICAgICAgYS5hbmdsZSA9IHU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZSArIChpIC0gZSkgKiBzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5wb3NpdGlvbiA9IGUpO1xuICAgICAgICAgIG8oKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSBvKCk7XG4gICAgfSk7XG4gIH1cbiAgaGlkZUZsb3dMaWdodCh0KSB7XG4gICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKTtcbiAgICBlICYmIChlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB2YXIgaSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9DYXJkVGlwTm9kZVwiKTtcbiAgICBpICYmIChpLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfVxuICBzaG93Rmxvd0xpZ2h0KHQpIHtcbiAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9GbG93TGlnaHROb2RlXCIpKSB7XG4gICAgICB2YXIgZSA9IG5ldyBjYy5Ob2RlKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKTtcbiAgICAgIHQuYWRkQ2hpbGQoZSk7XG4gICAgICBlLnNjYWxlID0gdGhpcy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgICAgQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShlLCB0aGlzLlJFU19GTE9XX0xJR0hULCB0aGlzLlJFU19CVU5ETEUpLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgc2V0dXBQb3NpdGlvbnModCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0LnNvcnQoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgIHZhciBhID0gZS5jb250ZXh0LmdldFRpbGVPYmplY3QodC50aWxlSWQyKSxcbiAgICAgICAgbyA9IGUuY29udGV4dC5nZXRUaWxlT2JqZWN0KGkudGlsZUlkMik7XG4gICAgICByZXR1cm4gYSAmJiBvID8gYS5ncmlkUG9zWCAhPT0gby5ncmlkUG9zWCA/IGEuZ3JpZFBvc1ggLSBvLmdyaWRQb3NYIDogYS5ncmlkUG9zWSAtIG8uZ3JpZFBvc1kgOiAwO1xuICAgIH0pO1xuICAgIHZhciBpID0gdFswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQsXG4gICAgICBhID0gdFswXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS53aWR0aDtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgIHZhciBuID0gMC41ICogaSArICh0Lmxlbmd0aCAtIDEgLSBvKSAqIGk7XG4gICAgICBlLnRhcmdldFBvczEgPSBjYy52MygtMC41ICogYSwgbiwgMCk7XG4gICAgICBlLnRhcmdldFBvczIgPSBjYy52MygwLjUgKiBhLCBuLCAwKTtcbiAgICAgIGUucnVuSW5kZXggPSB0Lmxlbmd0aCAtIDEgLSBvO1xuICAgICAgdmFyIHIgPSAyICogbztcbiAgICAgIGUuY2FyZE5vZGUxLnpJbmRleCA9IHI7XG4gICAgICBlLmNhcmROb2RlMi56SW5kZXggPSByICsgMTtcbiAgICB9KTtcbiAgICB0aGlzLm5vZGVJbmZvcyA9IHQ7XG4gIH1cbiAgcGxheSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMubm9kZUluZm9zID0gdDtcbiAgICB0aGlzLmNvbXBsZXRlZENvdW50ID0gMDtcbiAgICB0aGlzLmNyZWF0ZU1hc2tMYXllcigpO1xuICAgIHRoaXMuZmFkZVRvRGFyaygpO1xuICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBlLmFuaW1hdGVDYXJkMSh0KTtcbiAgICB9KTtcbiAgfVxuICBhbmltYXRlQ2FyZDEodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmNvbnRleHQucmVtb3ZlVGlsZU5vZGUodC50aWxlSWQxKTtcbiAgICB2YXIgaSA9IHRoaXMubm9kZUluZm9zLmxlbmd0aCxcbiAgICAgIGEgPSB0LnJ1bkluZGV4ICogdGhpcy5QSEFTRTFfREVMQVksXG4gICAgICBvID0gKGkgLSAxIC0gdC5ydW5JbmRleCkgKiB0aGlzLlBIQVNFMV9ERUxBWSxcbiAgICAgIG4gPSB0LnJ1bkluZGV4ICogdGhpcy5QSEFTRTJfSU5URVJWQUxfREVMQVk7XG4gICAgdGhpcy5kZWxheSh0LmNhcmROb2RlMSwgYSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5wbGF5UGhhc2UxKHQuY2FyZE5vZGUxLCBmYWxzZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5kZWxheSh0LmNhcmROb2RlMSwgbyArIG4pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGkgPSBlLnBsYXlQaGFzZTIodC5jYXJkTm9kZTEsIHQudGFyZ2V0UG9zMSk7XG4gICAgICBlLmRlbGF5KHQuY2FyZE5vZGUxLCAwKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS50cmlnZ2VyVHJhaWwodCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTEodCwgZSkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICBpZiAoIWNjLmlzVmFsaWQodCkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgYSA9IHQucG9zaXRpb24ueSArIHRoaXMuUEhBU0UxX01PVkVfWSxcbiAgICAgIG8gPSBlID8gLXRoaXMuUEhBU0UxX0FOR0xFIDogdGhpcy5QSEFTRTFfQU5HTEU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYy50d2Vlbih0KS50byhpLlBIQVNFMV9EVVJBVElPTiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjModC5wb3NpdGlvbi54LCBhLCAwKSxcbiAgICAgICAgYW5nbGU6IG8sXG4gICAgICAgIHNjYWxlOiBpLlBIQVNFMV9TQ0FMRVxuICAgICAgfSkuY2FsbChlKS5zdGFydCgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQaGFzZTIodCwgZSkge1xuICAgIGNjLnR3ZWVuKHQpLnRvKHRoaXMuUEhBU0UyX1JFU1RPUkVfREVMQVksIHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgc2NhbGU6IDFcbiAgICB9KS5zdGFydCgpO1xuICAgIHJldHVybiB0aGlzLmJlemllclRvKHQsIGUsIHRoaXMuUEhBU0UyX0RVUkFUSU9OKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHQuYW5nbGUgPSAwO1xuICAgICAgICB0LnNjYWxlID0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB0cmlnZ2VyVHJhaWwodCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIGkgPSB0LmNhcmROb2RlMS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgYSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZVBvcyh0LnRpbGVJZDIpO1xuICAgIGlmIChhKSB7XG4gICAgICB0aGlzLnBsYXlUcmFpbEVmZmVjdChpLCBhKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZUNhcmQyKHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUNhcmQyKHQpO1xuICAgIH1cbiAgfVxuICBwbGF5VHJhaWxFZmZlY3QodCwgZSkge1xuICAgIHZhciBpID0gdGhpcyxcbiAgICAgIGEgPSBuZXcgY2MuTm9kZShcIlRyYWlsQ29udGFpbmVyXCIpO1xuICAgIGEucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgYS5wb3NpdGlvbiA9IHQ7XG4gICAgYS56SW5kZXggPSA0MDA7XG4gICAgYS5zY2FsZSA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZTtcbiAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKFwiU3ByaXRlQ29udGFpbmVyXCIpO1xuICAgIG8ucGFyZW50ID0gYTtcbiAgICBvLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgQmFzZVNwcml0ZS5jcmVhdGUodGhpcy5SRVNfVFJBSUxfU1BSSVRFLCB0aGlzLlJFU19CVU5ETEUpLm5vZGUucGFyZW50ID0gbztcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmxvYWRSZXModGhpcy5SRVNfVFJBSUxfVEVYVFVSRSwgY2MuU3ByaXRlRnJhbWUsIHRoaXMuUkVTX0JVTkRMRSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHQgJiYgY2MuaXNWYWxpZChhKSkge1xuICAgICAgICB2YXIgbiA9IGEuYWRkQ29tcG9uZW50KGNjLk1vdGlvblN0cmVhayk7XG4gICAgICAgIG4uZmFkZVRpbWUgPSBpLlRSQUlMX0ZBREVfVElNRTtcbiAgICAgICAgbi5taW5TZWcgPSAxO1xuICAgICAgICBuLnN0cm9rZSA9IGkuVFJBSUxfU1RST0tFO1xuICAgICAgICBuLnRleHR1cmUgPSB0LmdldFRleHR1cmUoKTtcbiAgICAgICAgbi5jb2xvciA9IGkuVFJBSUxfQ09MT1I7XG4gICAgICAgIHJldHVybiBpLmFyY1RvKGEsIGUsIGkuVFJBSUxfRFVSQVRJT04sIG8pO1xuICAgICAgfVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChhKSAmJiBhLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfVxuICBhbmltYXRlQ2FyZDIodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmNvbnRleHQucmVtb3ZlVGlsZU5vZGUodC50aWxlSWQyKTtcbiAgICB0LmNhcmROb2RlMi5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBpID0gdGhpcy5jb250ZXh0LmxheW91dFNjYWxlIHx8IDE7XG4gICAgdGhpcy5wbGF5SGl0RWZmZWN0KHQuY2FyZE5vZGUyLCBpKTtcbiAgICB0aGlzLmRlbGF5KHQuY2FyZE5vZGUyLCB0aGlzLlRSQUlMX0hJVF9ERUxBWSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSA9IHQuY2FyZE5vZGUyLmdldENoaWxkQnlOYW1lKFwiVGlsZUFuaW1Ob2RlTmFtZVwiKSB8fCB0LmNhcmROb2RlMjtcbiAgICAgIGUuc2hvd0Zsb3dMaWdodChpKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLnBsYXlQaGFzZTEodC5jYXJkTm9kZTIsIHRydWUpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUucGxheVBoYXNlMih0LmNhcmROb2RlMiwgdC50YXJnZXRQb3MyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLm9uQ2FyZDJBcnJpdmVkKCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheUhpdEVmZmVjdCh0LCBlKSB7XG4gICAgdmFyIGkgPSBCYXNlU3BpbmUuY3JlYXRlKHRoaXMuUkVTX0hJVF9TUElORSwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCB0aGlzLlJFU19CVU5ETEUpO1xuICAgIGkubm9kZS5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICBpLm5vZGUucG9zaXRpb24gPSB0LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgaS5ub2RlLnpJbmRleCA9IDkwMDtcbiAgICBpLm5vZGUuc2NhbGUgPSBlO1xuICAgIGkubm9kZS5uYW1lID0gXCJEYXhpYW9IaXRTcGluZU5vZGVcIjtcbiAgfVxuICBvbkNhcmQyQXJyaXZlZCgpIHtcbiAgICArK3RoaXMuY29tcGxldGVkQ291bnQgPj0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoICYmIHRoaXMuc3RhcnRDb2xsaXNpb24oKTtcbiAgfVxuICBzdGFydENvbGxpc2lvbigpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gdGhpcy5ub2RlSW5mb3MubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm9kZTE6IHQuY2FyZE5vZGUxLFxuICAgICAgICAgIG5vZGUyOiB0LmNhcmROb2RlMlxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgdGhpcy5wbGF5Q29sbGlzaW9uKGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25Db2xsaXNpb25Db21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlDb2xsaXNpb24odCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoMCA9PT0gdC5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLmRlbGF5KHRbMF0ubm9kZTEsIHRoaXMuQ09MTElTSU9OX0RFTEFZKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUucGxheUVsaW1pbmF0aW9uRWZmZWN0KCk7XG4gICAgICBlLmNvbnRleHQucGxheVNoYWtlKCk7XG4gICAgICBlLmZhZGVUb1doaXRlKCk7XG4gICAgfSk7XG4gICAgdmFyIGkgPSB0aGlzLm5vZGVJbmZvc1swXS5jYXJkTm9kZTEuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQsXG4gICAgICBhID0gdGhpcy5ub2RlSW5mb3NbMF0uY2FyZE5vZGUxLmdldENvbnRlbnRTaXplKCkud2lkdGgsXG4gICAgICBvID0gMC41ICogaSxcbiAgICAgIG4gPSB0aGlzLm5vZGVJbmZvcy5sZW5ndGg7XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgdmFyIHIgPSBuIC0gMSAtIGksXG4gICAgICAgIHMgPSAtMC41ICogYSAtIHIgKiBhLFxuICAgICAgICBjID0gMC41ICogYSArIHIgKiBhLFxuICAgICAgICBsID0gY2MudjMocywgbywgMCksXG4gICAgICAgIGggPSBjYy52MyhjLCBvLCAwKTtcbiAgICAgIGNjLnR3ZWVuKHQuY2FyZE5vZGUxKS5kZWxheShlLkNPTExJU0lPTl9ERUxBWSkudG8oZS5DT0xMSVNJT05fT1VUX0RVUkFUSU9OLCB7XG4gICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFydEluT3V0XCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUxKSAmJiAodC5jYXJkTm9kZTEuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKHQuY2FyZE5vZGUyKS5kZWxheShlLkNPTExJU0lPTl9ERUxBWSkudG8oZS5DT0xMSVNJT05fT1VUX0RVUkFUSU9OLCB7XG4gICAgICAgIHBvc2l0aW9uOiBoXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJxdWFydEluT3V0XCJcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUyKSAmJiAodC5jYXJkTm9kZTIuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5kZWxheSh0WzBdLm5vZGUxLCB0aGlzLkNPTExJU0lPTl9ERUxBWSArIHRoaXMuQ09MTElTSU9OX09VVF9EVVJBVElPTik7XG4gIH1cbiAgb25Db2xsaXNpb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUxKSAmJiB0LmNhcmROb2RlMS5kZXN0cm95KCk7XG4gICAgICBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUyKSAmJiB0LmNhcmROb2RlMi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpKSB7XG4gICAgICB0aGlzLm1hc2tMYXllci5kZXN0cm95KCk7XG4gICAgICB0aGlzLm1hc2tMYXllciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubWFza0dyYXBoaWNzID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQub25Db21wbGV0ZSgpO1xuICB9XG4gIHBsYXlFbGltaW5hdGlvbkVmZmVjdCgpIHtcbiAgICB2YXIgdCA9IEJhc2VTcGluZS5jcmVhdGUodGhpcy5SRVNfRUxJTUlOQVRJT04sIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgdGhpcy5SRVNfQlVORExFKTtcbiAgICB0Lm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgdC5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgdC5ub2RlLnpJbmRleCA9IDYwMDtcbiAgfVxuICBjcmVhdGVNYXNrTGF5ZXIoKSB7XG4gICAgdGhpcy5tYXNrTGF5ZXIgPSBuZXcgY2MuTm9kZShcIlpoZXNoYW5NYXNrTGF5ZXJcIik7XG4gICAgdGhpcy5tYXNrTGF5ZXIucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgdGhpcy5tYXNrTGF5ZXIucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICB0aGlzLm1hc2tMYXllci56SW5kZXggPSAtMTAwMDtcbiAgICB0aGlzLm1hc2tMYXllci5fZmFkZUFscGhhID0gMDtcbiAgICB0aGlzLm1hc2tHcmFwaGljcyA9IHRoaXMubWFza0xheWVyLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgdmFyIHQgPSBjYy53aW5TaXplO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLnJlY3QoLXQud2lkdGggLyAyLCAtdC5oZWlnaHQgLyAyLCB0LndpZHRoLCB0LmhlaWdodCk7XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIDApO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGwoKTtcbiAgfVxuICBmYWRlVG9EYXJrKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBlID0gdGhpcy5GQURFX1RPX0RBUktfT1BBQ0lUWSxcbiAgICAgICAgaSA9IGNjLndpblNpemU7XG4gICAgICBjYy50d2Vlbih0aGlzLm1hc2tMYXllcikudG8odGhpcy5GQURFX1RPX0RBUktfRFVSQVRJT04sIHtcbiAgICAgICAgX2ZhZGVBbHBoYTogZVxuICAgICAgfSwge1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGUsIGEsIG8sIG4pIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Lm1hc2tMYXllcikgJiYgdC5tYXNrR3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHZhciByID0gZSArIChhIC0gZSkgKiBuO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLnJlY3QoLWkud2lkdGggLyAyLCAtaS5oZWlnaHQgLyAyLCBpLndpZHRoLCBpLmhlaWdodCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgcik7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlICsgKGEgLSBlKSAqIG47XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIGZhZGVUb1doaXRlKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikgJiYgdGhpcy5tYXNrR3JhcGhpY3MpIHtcbiAgICAgIHZhciBlID0gY2Mud2luU2l6ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubWFza0xheWVyKS50byh0aGlzLkZBREVfVE9fV0hJVEVfRFVSQVRJT04sIHtcbiAgICAgICAgX2ZhZGVBbHBoYTogMFxuICAgICAgfSwge1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGksIGEsIG8sIG4pIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0Lm1hc2tMYXllcikgJiYgdC5tYXNrR3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHZhciByID0gaSArIChhIC0gaSkgKiBuO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLnJlY3QoLWUud2lkdGggLyAyLCAtZS5oZWlnaHQgLyAyLCBlLndpZHRoLCBlLmhlaWdodCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgcik7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpICsgKGEgLSBpKSAqIG47XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG59Il19