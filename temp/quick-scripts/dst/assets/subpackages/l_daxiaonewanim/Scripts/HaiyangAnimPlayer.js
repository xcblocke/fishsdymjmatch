
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaonewanim/Scripts/HaiyangAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63dfdaUqXNM+7SL/v890+Zv', 'HaiyangAnimPlayer');
// subpackages/l_daxiaonewanim/Scripts/HaiyangAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HaiyangAnimPlayer = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HaiyangAnimPlayer = /** @class */ (function () {
    function HaiyangAnimPlayer(t) {
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
        this.COLLISION_UP_DURATION = 0.33;
        this.COLLISION_DOWN_DURATION = 0.33;
        this.COLLISION_UP_DISTANCE = 150;
        this.COLLISION_DOWN_DISTANCE = 1500;
        this.COLLISION_SIDE_DELAY = 0.06;
        this.FADE_TO_DARK_OPACITY = 77;
        this.FADE_TO_DARK_DURATION = 0.16;
        this.FADE_TO_WHITE_DURATION = 0.33;
        this.RES_BUNDLE = "l_daxiaohaiyang";
        this.RES_TRAIL_SPRITE = "texture/gameplay_trailingElement";
        this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        this.RES_HIT_SPINE = "spine/hint/gameplay_hit";
        this.RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight";
        this.RES_ELIMINATION_BACK = "spine/clear/gameplay_great_elimination_back";
        this.RES_ELIMINATION = "spine/clear/gameplay_great_elimination_effect";
        this.RES_ELIMINATION_BACK_OFFSET_Y = -100;
        this.RES_ELIMINATION_OFFSET_Y = 100;
        this.context = null;
        this.context = t;
    }
    HaiyangAnimPlayer.playFullAnimation = function (e, i) {
        var o, n, r, s, c = e.context, l = c.gameView.nodeTopEffectRoot, h = new HaiyangAnimPlayer({
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
    HaiyangAnimPlayer.prototype.delay = function (t, e) {
        return new Promise(function (i) {
            if (cc.isValid(t)) {
                cc.tween(t).delay(e).call(i).start();
            }
            else {
                i();
            }
        });
    };
    HaiyangAnimPlayer.prototype.createBezierEasing = function (t, e, i, a) {
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
    HaiyangAnimPlayer.prototype.bezierTo = function (t, e, i) {
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
    HaiyangAnimPlayer.prototype.arcTo = function (t, e, i, a) {
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
    HaiyangAnimPlayer.prototype.hideFlowLight = function (t) {
        var e = t.getChildByName("DaxiaoFlowLightNode");
        e && (e.active = false);
        var i = t.getChildByName("DaxiaoCardTipNode");
        i && (i.active = false);
    };
    HaiyangAnimPlayer.prototype.showFlowLight = function (t) {
        if (!t.getChildByName("DaxiaoFlowLightNode")) {
            var e = new cc.Node("DaxiaoFlowLightNode");
            t.addChild(e);
            e.scale = this.context.layoutScale;
            BaseSpine_1.default.refreshWithNode(e, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", -1, null, false);
        }
    };
    HaiyangAnimPlayer.prototype.setupPositions = function (t) {
        var e = this;
        t.sort(function (t, i) {
            var a = e.context.getTileObject(t.tileId2), o = e.context.getTileObject(i.tileId2);
            return a && o ? a.gridPosX !== o.gridPosX ? a.gridPosX - o.gridPosX : a.gridPosY - o.gridPosY : 0;
        });
        var i = t[0].cardNode1.getContentSize().height, a = t[0].cardNode1.getContentSize().width, o = -a * t.length / 2 + a / 2;
        t.forEach(function (e, n) {
            var r = o + n * a, s = Math.floor(t.length / 2), c = 500 - Math.abs(n - s) * i * 0.15, l = c - 0.96 * i;
            e.targetPos1 = cc.v3(r, c, 0);
            e.targetPos2 = cc.v3(r, l, 0);
            e.runIndex = n;
            e.cardNode1.zIndex = n;
            e.cardNode2.zIndex = n + 1000;
        });
        this.nodeInfos = t;
    };
    HaiyangAnimPlayer.prototype.play = function (t) {
        var e = this;
        this.nodeInfos = t;
        this.completedCount = 0;
        this.createMaskLayer();
        this.fadeToDark();
        this.nodeInfos.forEach(function (t) {
            return e.animateCard1(t);
        });
    };
    HaiyangAnimPlayer.prototype.animateCard1 = function (t) {
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
    HaiyangAnimPlayer.prototype.playPhase1 = function (t, e) {
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
    HaiyangAnimPlayer.prototype.playPhase2 = function (t, e) {
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
    HaiyangAnimPlayer.prototype.triggerTrail = function (t) {
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
    HaiyangAnimPlayer.prototype.playTrailEffect = function (t, e) {
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
    HaiyangAnimPlayer.prototype.animateCard2 = function (t) {
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
    HaiyangAnimPlayer.prototype.playHitEffect = function (t, e) {
        var i = BaseSpine_1.default.create(this.RES_HIT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
        i.node.parent = this.context.effectNode;
        i.node.position = t.position.clone();
        i.node.zIndex = 900;
        i.node.scale = e;
        i.node.name = "DaxiaoHitSpineNode";
    };
    HaiyangAnimPlayer.prototype.onCard2Arrived = function () {
        ++this.completedCount >= this.nodeInfos.length && this.startCollision();
    };
    HaiyangAnimPlayer.prototype.startCollision = function () {
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
    HaiyangAnimPlayer.prototype.playCollision = function (t) {
        var e = this;
        if (0 === t.length)
            return Promise.resolve();
        var i = Math.floor(this.nodeInfos.length / 2), a = this.COLLISION_DELAY + this.COLLISION_UP_DURATION + this.COLLISION_DOWN_DURATION;
        this.delay(t[0].node1, a).then(function () {
            e.playEliminationEffect();
            e.context.playShake();
            e.fadeToWhite();
        });
        this.nodeInfos.forEach(function (t, a) {
            var o = Math.abs(a - i) * e.COLLISION_SIDE_DELAY, n = e.COLLISION_DELAY + o, r = t.cardNode1.position.clone(), s = t.cardNode2.position.clone(), c = cc.v3(r.x, r.y + e.COLLISION_UP_DISTANCE, 0), l = cc.v3(s.x, s.y + e.COLLISION_UP_DISTANCE, 0), h = cc.v3(c.x, c.y - e.COLLISION_DOWN_DISTANCE, 0), d = cc.v3(l.x, l.y - e.COLLISION_DOWN_DISTANCE, 0);
            cc.tween(t.cardNode1).delay(n).to(e.COLLISION_UP_DURATION, {
                position: c
            }, {
                easing: "quartOut"
            }).to(e.COLLISION_DOWN_DURATION, {
                position: h
            }, {
                easing: "quartIn"
            }).call(function () {
                cc.isValid(t.cardNode1) && (t.cardNode1.active = false);
            }).start();
            cc.tween(t.cardNode2).delay(n).to(e.COLLISION_UP_DURATION, {
                position: l
            }, {
                easing: "quartOut"
            }).to(e.COLLISION_DOWN_DURATION, {
                position: d
            }, {
                easing: "quartIn"
            }).call(function () {
                cc.isValid(t.cardNode2) && (t.cardNode2.active = false);
            }).start();
        });
        var o = Math.max.apply(Math, __spreadArrays(this.nodeInfos.map(function (t, e) {
            return Math.abs(e - i);
        }))) * this.COLLISION_SIDE_DELAY, r = this.COLLISION_DELAY + o + this.COLLISION_UP_DURATION + this.COLLISION_DOWN_DURATION;
        return this.delay(t[0].node1, r);
    };
    HaiyangAnimPlayer.prototype.onCollisionComplete = function () {
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
    HaiyangAnimPlayer.prototype.playEliminationEffect = function () {
        var t = BaseSpine_1.default.create(this.RES_ELIMINATION_BACK, "in", 1, null, true, this.RES_BUNDLE);
        t.node.parent = this.context.effectNode;
        t.node.position = cc.v3(0, this.RES_ELIMINATION_BACK_OFFSET_Y, 0);
        t.node.zIndex = 500;
        var e = BaseSpine_1.default.create(this.RES_ELIMINATION, "in", 1, null, true, this.RES_BUNDLE);
        e.node.parent = this.context.effectNode;
        e.node.position = cc.v3(0, this.RES_ELIMINATION_OFFSET_Y, 0);
        e.node.zIndex = 600;
    };
    HaiyangAnimPlayer.prototype.createMaskLayer = function () {
        this.maskLayer = new cc.Node("HaiyangMaskLayer");
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
    HaiyangAnimPlayer.prototype.fadeToDark = function () {
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
    HaiyangAnimPlayer.prototype.fadeToWhite = function () {
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
    return HaiyangAnimPlayer;
}());
exports.HaiyangAnimPlayer = HaiyangAnimPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb25ld2FuaW0vU2NyaXB0cy9IYWl5YW5nQW5pbVBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSwyRUFBc0U7QUFDdEU7SUFxQ0UsMkJBQVksQ0FBQztRQXBDYixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLEdBQUcsQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsMEJBQXFCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUMvQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIseUJBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzFCLDBC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LENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLFlBQVksRUFBRSxDQUFDO2lCQUNoQixFQUFFO29CQUNELFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDM0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNqRCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FB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QUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2FBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQTdjQSxBQTZjQyxJQUFBO0FBN2NZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5leHBvcnQgY2xhc3MgSGFpeWFuZ0FuaW1QbGF5ZXIge1xuICBub2RlSW5mb3MgPSBbXTtcbiAgY29tcGxldGVkQ291bnQgPSAwO1xuICBtYXNrTGF5ZXIgPSBudWxsO1xuICBtYXNrR3JhcGhpY3MgPSBudWxsO1xuICBQSEFTRTFfRFVSQVRJT04gPSAwLjE2O1xuICBQSEFTRTFfTU9WRV9ZID0gMTA7XG4gIFBIQVNFMV9BTkdMRSA9IC0xMDtcbiAgUEhBU0UxX1NDQUxFID0gMS4yO1xuICBQSEFTRTFfREVMQVkgPSAwLjA2O1xuICBQSEFTRTJfRFVSQVRJT04gPSAwLjU7XG4gIFBIQVNFMl9SRVNUT1JFX0RFTEFZID0gMC40O1xuICBQSEFTRTJfSU5URVJWQUxfREVMQVkgPSAwLjA2NztcbiAgVFJBSUxfSElUX0RFTEFZID0gMC4yO1xuICBUUkFJTF9EVVJBVElPTiA9IDAuMztcbiAgVFJBSUxfRkFERV9USU1FID0gMC4zO1xuICBUUkFJTF9TVFJPS0UgPSA2NDtcbiAgVFJBSUxfQ09MT1IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICBDT0xMSVNJT05fREVMQVkgPSAwLjE7XG4gIENPTExJU0lPTl9VUF9EVVJBVElPTiA9IDAuMzM7XG4gIENPTExJU0lPTl9ET1dOX0RVUkFUSU9OID0gMC4zMztcbiAgQ09MTElTSU9OX1VQX0RJU1RBTkNFID0gMTUwO1xuICBDT0xMSVNJT05fRE9XTl9ESVNUQU5DRSA9IDE1MDA7XG4gIENPTExJU0lPTl9TSURFX0RFTEFZID0gMC4wNjtcbiAgRkFERV9UT19EQVJLX09QQUNJVFkgPSA3NztcbiAgRkFERV9UT19EQVJLX0RVUkFUSU9OID0gMC4xNjtcbiAgRkFERV9UT19XSElURV9EVVJBVElPTiA9IDAuMzM7XG4gIFJFU19CVU5ETEUgPSBcImxfZGF4aWFvaGFpeWFuZ1wiO1xuICBSRVNfVFJBSUxfU1BSSVRFID0gXCJ0ZXh0dXJlL2dhbWVwbGF5X3RyYWlsaW5nRWxlbWVudFwiO1xuICBSRVNfVFJBSUxfVEVYVFVSRSA9IFwidGV4dHVyZS9nYW1lcGxheV9zdGFyX3RhaWxcIjtcbiAgUkVTX0hJVF9TUElORSA9IFwic3BpbmUvaGludC9nYW1lcGxheV9oaXRcIjtcbiAgUkVTX0ZMT1dfTElHSFQgPSBcInNwaW5lL2lkbGUvZ2FtZXBsYXlfZmxvd2luZ0xpZ2h0XCI7XG4gIFJFU19FTElNSU5BVElPTl9CQUNLID0gXCJzcGluZS9jbGVhci9nYW1lcGxheV9ncmVhdF9lbGltaW5hdGlvbl9iYWNrXCI7XG4gIFJFU19FTElNSU5BVElPTiA9IFwic3BpbmUvY2xlYXIvZ2FtZXBsYXlfZ3JlYXRfZWxpbWluYXRpb25fZWZmZWN0XCI7XG4gIFJFU19FTElNSU5BVElPTl9CQUNLX09GRlNFVF9ZID0gLTEwMDtcbiAgUkVTX0VMSU1JTkFUSU9OX09GRlNFVF9ZID0gMTAwO1xuICBjb250ZXh0ID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHRoaXMuY29udGV4dCA9IHQ7XG4gIH1cbiAgc3RhdGljIHBsYXlGdWxsQW5pbWF0aW9uKGUsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgcyxcbiAgICAgIGMgPSBlLmNvbnRleHQsXG4gICAgICBsID0gYy5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdCxcbiAgICAgIGggPSBuZXcgSGFpeWFuZ0FuaW1QbGF5ZXIoe1xuICAgICAgICBlZmZlY3ROb2RlOiBsLFxuICAgICAgICBsYXlvdXRTY2FsZTogYy5sYXlvdXRTY2FsZSxcbiAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBlLm9uQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJlczogZnVuY3Rpb24gKHQsIGUsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYy5nYW1lQ3RyLmxvYWRSZXModCwgZSwgaSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRpbGVOb2RlUG9zOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBpID0gYy5nZXRUaWxlTm9kZU1hcCgpLmdldCh0KTtcbiAgICAgICAgICByZXR1cm4gaSA/IGUudG9Mb2NhbFBvcyhpLmNhcmROb2RlLCBsKSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVRpbGVOb2RlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBjLnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRpbGVPYmplY3Q6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdmFyIGUgPSBjLmdldFRpbGVOb2RlTWFwKCkuZ2V0KHQpO1xuICAgICAgICAgIHJldHVybiBlID8gZS5pbmZvLnRpbGVPYmplY3QgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBwbGF5U2hha2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gYy5nYW1lVmlldy5wbGF5U2hha2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGQgPSBfX3ZhbHVlcyhpKSwgcCA9IGQubmV4dCgpOyAhcC5kb25lOyBwID0gZC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBwLnZhbHVlLFxuICAgICAgICAgIGYgPSBudWxsID09PSAociA9IGMuZ2V0VGlsZU5vZGVCeVRpbGVJZCh1LnRpbGVJZDEpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnRpbGVOb2RlO1xuICAgICAgICBmICYmIGguaGlkZUZsb3dMaWdodChmKTtcbiAgICAgICAgdmFyIF8gPSBudWxsID09PSAocyA9IGMuZ2V0VGlsZU5vZGVCeVRpbGVJZCh1LnRpbGVJZDIpKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLnRpbGVOb2RlO1xuICAgICAgICBfICYmIGguaGlkZUZsb3dMaWdodChfKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChuID0gZC5yZXR1cm4pICYmIG4uY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBoLnNldHVwUG9zaXRpb25zKGkpO1xuICAgIGgucGxheShpKTtcbiAgfVxuICBkZWxheSh0LCBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChpKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICBjYy50d2Vlbih0KS5kZWxheShlKS5jYWxsKGkpLnN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlQmV6aWVyRWFzaW5nKHQsIGUsIGksIGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmICgwID09PSBvIHx8IDEgPT09IG8pIHJldHVybiBvO1xuICAgICAgZm9yICh2YXIgbiA9IDAsIHIgPSAxLCBzID0gMCwgYyA9IDA7IGMgPCAxMDsgYysrKSB7XG4gICAgICAgIHZhciBsID0gKG4gKyByKSAvIDI7XG4gICAgICAgIHMgPSAzICogKDEgLSBsKSAqICgxIC0gbCkgKiBsICogdCArIDMgKiAoMSAtIGwpICogbCAqIGwgKiBpICsgbCAqIGwgKiBsO1xuICAgICAgICBpZiAoTWF0aC5hYnMocyAtIG8pIDwgMC4wMDEpIGJyZWFrO1xuICAgICAgICBpZiAocyA8IG8pIHtcbiAgICAgICAgICBuID0gbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByID0gbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGggPSAobiArIHIpIC8gMjtcbiAgICAgIHJldHVybiAzICogKDEgLSBoKSAqICgxIC0gaCkgKiBoICogZSArIDMgKiAoMSAtIGgpICogaCAqIGggKiBhICsgaCAqIGggKiBoO1xuICAgIH07XG4gIH1cbiAgYmV6aWVyVG8odCwgZSwgaSkge1xuICAgIHZhciBhID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHZhciBuID0gYS5jcmVhdGVCZXppZXJFYXNpbmcoMC4yNSwgMCwgMC4yNSwgMSk7XG4gICAgICAgIGNjLnR3ZWVuKHQpLnRvKGksIHtcbiAgICAgICAgICBwb3NpdGlvbjogZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBuXG4gICAgICAgIH0pLmNhbGwobykuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSBvKCk7XG4gICAgfSk7XG4gIH1cbiAgYXJjVG8odCwgZSwgaSwgYSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgdmFyIG4gPSB0LnBvc2l0aW9uLmNsb25lKCksXG4gICAgICAgICAgciA9IGUsXG4gICAgICAgICAgcyA9IHIueCAtIG4ueCxcbiAgICAgICAgICBjID0gci55IC0gbi55LFxuICAgICAgICAgIGwgPSBNYXRoLnNxcnQocyAqIHMgKyBjICogYyksXG4gICAgICAgICAgaCA9IGwgKiAoMC42ICsgMC4yICogTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgZCA9IE1hdGgucmFuZG9tKCkgPiAwLjUsXG4gICAgICAgICAgcCA9IChuLnggKyByLngpIC8gMixcbiAgICAgICAgICB1ID0gKG4ueSArIHIueSkgLyAyLFxuICAgICAgICAgIGYgPSBwICsgLWMgLyBsICogaCAqIChkID8gMSA6IC0xKSxcbiAgICAgICAgICBfID0gdSArIHMgLyBsICogaCAqIChkID8gMSA6IC0xKTtcbiAgICAgICAgdC5fYXJjUHJvZ3Jlc3MgPSAwO1xuICAgICAgICBjYy50d2Vlbih0KS50byhpLCB7XG4gICAgICAgICAgX2FyY1Byb2dyZXNzOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGUsIGksIG8sIHMpIHtcbiAgICAgICAgICAgIHZhciBjID0gcyA8IDAuNSA/IDIgKiBzICogcyA6IDEgLSBNYXRoLnBvdygtMiAqIHMgKyAyLCAyKSAvIDIsXG4gICAgICAgICAgICAgIGwgPSAoMSAtIGMpICogKDEgLSBjKSAqIG4ueCArIDIgKiAoMSAtIGMpICogYyAqIGYgKyBjICogYyAqIHIueCxcbiAgICAgICAgICAgICAgaCA9ICgxIC0gYykgKiAoMSAtIGMpICogbi55ICsgMiAqICgxIC0gYykgKiBjICogXyArIGMgKiBjICogci55O1xuICAgICAgICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5wb3NpdGlvbiA9IGNjLnYzKGwsIGgsIDApKTtcbiAgICAgICAgICAgIGlmIChhICYmIGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgICAgICAgdmFyIGQgPSAyICogKDEgLSBjKSAqIChmIC0gbi54KSArIDIgKiBjICogKHIueCAtIGYpLFxuICAgICAgICAgICAgICAgIHAgPSAyICogKDEgLSBjKSAqIChfIC0gbi55KSArIDIgKiBjICogKHIueSAtIF8pLFxuICAgICAgICAgICAgICAgIHUgPSAxODAgKiBNYXRoLmF0YW4yKHAsIGQpIC8gTWF0aC5QSSAtIDkwO1xuICAgICAgICAgICAgICBhLmFuZ2xlID0gdTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlICsgKGkgLSBlKSAqIHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHQpICYmICh0LnBvc2l0aW9uID0gZSk7XG4gICAgICAgICAgbygpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIG8oKTtcbiAgICB9KTtcbiAgfVxuICBoaWRlRmxvd0xpZ2h0KHQpIHtcbiAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJEYXhpYW9GbG93TGlnaHROb2RlXCIpO1xuICAgIGUgJiYgKGUuYWN0aXZlID0gZmFsc2UpO1xuICAgIHZhciBpID0gdC5nZXRDaGlsZEJ5TmFtZShcIkRheGlhb0NhcmRUaXBOb2RlXCIpO1xuICAgIGkgJiYgKGkuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIHNob3dGbG93TGlnaHQodCkge1xuICAgIGlmICghdC5nZXRDaGlsZEJ5TmFtZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIikpIHtcbiAgICAgIHZhciBlID0gbmV3IGNjLk5vZGUoXCJEYXhpYW9GbG93TGlnaHROb2RlXCIpO1xuICAgICAgdC5hZGRDaGlsZChlKTtcbiAgICAgIGUuc2NhbGUgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGU7XG4gICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGUsIHRoaXMuUkVTX0ZMT1dfTElHSFQsIHRoaXMuUkVTX0JVTkRMRSkuc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICBzZXR1cFBvc2l0aW9ucyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHQuc29ydChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgdmFyIGEgPSBlLmNvbnRleHQuZ2V0VGlsZU9iamVjdCh0LnRpbGVJZDIpLFxuICAgICAgICBvID0gZS5jb250ZXh0LmdldFRpbGVPYmplY3QoaS50aWxlSWQyKTtcbiAgICAgIHJldHVybiBhICYmIG8gPyBhLmdyaWRQb3NYICE9PSBvLmdyaWRQb3NYID8gYS5ncmlkUG9zWCAtIG8uZ3JpZFBvc1ggOiBhLmdyaWRQb3NZIC0gby5ncmlkUG9zWSA6IDA7XG4gICAgfSk7XG4gICAgdmFyIGkgPSB0WzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCxcbiAgICAgIGEgPSB0WzBdLmNhcmROb2RlMS5nZXRDb250ZW50U2l6ZSgpLndpZHRoLFxuICAgICAgbyA9IC1hICogdC5sZW5ndGggLyAyICsgYSAvIDI7XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICB2YXIgciA9IG8gKyBuICogYSxcbiAgICAgICAgcyA9IE1hdGguZmxvb3IodC5sZW5ndGggLyAyKSxcbiAgICAgICAgYyA9IDUwMCAtIE1hdGguYWJzKG4gLSBzKSAqIGkgKiAwLjE1LFxuICAgICAgICBsID0gYyAtIDAuOTYgKiBpO1xuICAgICAgZS50YXJnZXRQb3MxID0gY2MudjMociwgYywgMCk7XG4gICAgICBlLnRhcmdldFBvczIgPSBjYy52MyhyLCBsLCAwKTtcbiAgICAgIGUucnVuSW5kZXggPSBuO1xuICAgICAgZS5jYXJkTm9kZTEuekluZGV4ID0gbjtcbiAgICAgIGUuY2FyZE5vZGUyLnpJbmRleCA9IG4gKyAxMDAwO1xuICAgIH0pO1xuICAgIHRoaXMubm9kZUluZm9zID0gdDtcbiAgfVxuICBwbGF5KHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5ub2RlSW5mb3MgPSB0O1xuICAgIHRoaXMuY29tcGxldGVkQ291bnQgPSAwO1xuICAgIHRoaXMuY3JlYXRlTWFza0xheWVyKCk7XG4gICAgdGhpcy5mYWRlVG9EYXJrKCk7XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUuYW5pbWF0ZUNhcmQxKHQpO1xuICAgIH0pO1xuICB9XG4gIGFuaW1hdGVDYXJkMSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuY29udGV4dC5yZW1vdmVUaWxlTm9kZSh0LnRpbGVJZDEpO1xuICAgIHZhciBpID0gdGhpcy5ub2RlSW5mb3MubGVuZ3RoLFxuICAgICAgYSA9IHQucnVuSW5kZXggKiB0aGlzLlBIQVNFMV9ERUxBWSxcbiAgICAgIG8gPSAoaSAtIDEgLSB0LnJ1bkluZGV4KSAqIHRoaXMuUEhBU0UxX0RFTEFZLFxuICAgICAgbiA9IHQucnVuSW5kZXggKiB0aGlzLlBIQVNFMl9JTlRFUlZBTF9ERUxBWTtcbiAgICB0aGlzLmRlbGF5KHQuY2FyZE5vZGUxLCBhKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLnBsYXlQaGFzZTEodC5jYXJkTm9kZTEsIGZhbHNlKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLmRlbGF5KHQuY2FyZE5vZGUxLCBvICsgbik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSA9IGUucGxheVBoYXNlMih0LmNhcmROb2RlMSwgdC50YXJnZXRQb3MxKTtcbiAgICAgIGUuZGVsYXkodC5jYXJkTm9kZTEsIDApLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnRyaWdnZXJUcmFpbCh0KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVBoYXNlMSh0LCBlKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIGlmICghY2MuaXNWYWxpZCh0KSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHZhciBhID0gdC5wb3NpdGlvbi55ICsgdGhpcy5QSEFTRTFfTU9WRV9ZLFxuICAgICAgbyA9IGUgPyAtdGhpcy5QSEFTRTFfQU5HTEUgOiB0aGlzLlBIQVNFMV9BTkdMRTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNjLnR3ZWVuKHQpLnRvKGkuUEhBU0UxX0RVUkFUSU9OLCB7XG4gICAgICAgIHBvc2l0aW9uOiBjYy52Myh0LnBvc2l0aW9uLngsIGEsIDApLFxuICAgICAgICBhbmdsZTogbyxcbiAgICAgICAgc2NhbGU6IGkuUEhBU0UxX1NDQUxFXG4gICAgICB9KS5jYWxsKGUpLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVBoYXNlMih0LCBlKSB7XG4gICAgY2MudHdlZW4odCkudG8odGhpcy5QSEFTRTJfUkVTVE9SRV9ERUxBWSwge1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBzY2FsZTogMVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgcmV0dXJuIHRoaXMuYmV6aWVyVG8odCwgZSwgdGhpcy5QSEFTRTJfRFVSQVRJT04pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgdC5hbmdsZSA9IDA7XG4gICAgICAgIHQuc2NhbGUgPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHRyaWdnZXJUcmFpbCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgaSA9IHQuY2FyZE5vZGUxLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICBhID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlUG9zKHQudGlsZUlkMik7XG4gICAgaWYgKGEpIHtcbiAgICAgIHRoaXMucGxheVRyYWlsRWZmZWN0KGksIGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlQ2FyZDIodCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbmltYXRlQ2FyZDIodCk7XG4gICAgfVxuICB9XG4gIHBsYXlUcmFpbEVmZmVjdCh0LCBlKSB7XG4gICAgdmFyIGkgPSB0aGlzLFxuICAgICAgYSA9IG5ldyBjYy5Ob2RlKFwiVHJhaWxDb250YWluZXJcIik7XG4gICAgYS5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICBhLnBvc2l0aW9uID0gdDtcbiAgICBhLnpJbmRleCA9IDQwMDtcbiAgICBhLnNjYWxlID0gdGhpcy5jb250ZXh0LmxheW91dFNjYWxlO1xuICAgIHZhciBvID0gbmV3IGNjLk5vZGUoXCJTcHJpdGVDb250YWluZXJcIik7XG4gICAgby5wYXJlbnQgPSBhO1xuICAgIG8ucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICBCYXNlU3ByaXRlLmNyZWF0ZSh0aGlzLlJFU19UUkFJTF9TUFJJVEUsIHRoaXMuUkVTX0JVTkRMRSkubm9kZS5wYXJlbnQgPSBvO1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQubG9hZFJlcyh0aGlzLlJFU19UUkFJTF9URVhUVVJFLCBjYy5TcHJpdGVGcmFtZSwgdGhpcy5SRVNfQlVORExFKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICAgIHZhciBuID0gYS5hZGRDb21wb25lbnQoY2MuTW90aW9uU3RyZWFrKTtcbiAgICAgICAgbi5mYWRlVGltZSA9IGkuVFJBSUxfRkFERV9USU1FO1xuICAgICAgICBuLm1pblNlZyA9IDE7XG4gICAgICAgIG4uc3Ryb2tlID0gaS5UUkFJTF9TVFJPS0U7XG4gICAgICAgIG4udGV4dHVyZSA9IHQuZ2V0VGV4dHVyZSgpO1xuICAgICAgICBuLmNvbG9yID0gaS5UUkFJTF9DT0xPUjtcbiAgICAgICAgcmV0dXJuIGkuYXJjVG8oYSwgZSwgaS5UUkFJTF9EVVJBVElPTiwgbyk7XG4gICAgICB9XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKGEpICYmIGEuZGVzdHJveSgpO1xuICAgIH0pO1xuICB9XG4gIGFuaW1hdGVDYXJkMih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuY29udGV4dC5yZW1vdmVUaWxlTm9kZSh0LnRpbGVJZDIpO1xuICAgIHQuY2FyZE5vZGUyLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIGkgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGUgfHwgMTtcbiAgICB0aGlzLnBsYXlIaXRFZmZlY3QodC5jYXJkTm9kZTIsIGkpO1xuICAgIHRoaXMuZGVsYXkodC5jYXJkTm9kZTIsIHRoaXMuVFJBSUxfSElUX0RFTEFZKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpID0gdC5jYXJkTm9kZTIuZ2V0Q2hpbGRCeU5hbWUoXCJUaWxlQW5pbU5vZGVOYW1lXCIpIHx8IHQuY2FyZE5vZGUyO1xuICAgICAgZS5zaG93Rmxvd0xpZ2h0KGkpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUucGxheVBoYXNlMSh0LmNhcmROb2RlMiwgdHJ1ZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5wbGF5UGhhc2UyKHQuY2FyZE5vZGUyLCB0LnRhcmdldFBvczIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUub25DYXJkMkFycml2ZWQoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5SGl0RWZmZWN0KHQsIGUpIHtcbiAgICB2YXIgaSA9IEJhc2VTcGluZS5jcmVhdGUodGhpcy5SRVNfSElUX1NQSU5FLCBcImluXCIsIDEsIG51bGwsIHRydWUsIHRoaXMuUkVTX0JVTkRMRSk7XG4gICAgaS5ub2RlLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIGkubm9kZS5wb3NpdGlvbiA9IHQucG9zaXRpb24uY2xvbmUoKTtcbiAgICBpLm5vZGUuekluZGV4ID0gOTAwO1xuICAgIGkubm9kZS5zY2FsZSA9IGU7XG4gICAgaS5ub2RlLm5hbWUgPSBcIkRheGlhb0hpdFNwaW5lTm9kZVwiO1xuICB9XG4gIG9uQ2FyZDJBcnJpdmVkKCkge1xuICAgICsrdGhpcy5jb21wbGV0ZWRDb3VudCA+PSB0aGlzLm5vZGVJbmZvcy5sZW5ndGggJiYgdGhpcy5zdGFydENvbGxpc2lvbigpO1xuICB9XG4gIHN0YXJ0Q29sbGlzaW9uKCkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGUgPSB0aGlzLm5vZGVJbmZvcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBub2RlMTogdC5jYXJkTm9kZTEsXG4gICAgICAgICAgbm9kZTI6IHQuY2FyZE5vZGUyXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB0aGlzLnBsYXlDb2xsaXNpb24oZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkNvbGxpc2lvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheUNvbGxpc2lvbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICgwID09PSB0Lmxlbmd0aCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHZhciBpID0gTWF0aC5mbG9vcih0aGlzLm5vZGVJbmZvcy5sZW5ndGggLyAyKSxcbiAgICAgIGEgPSB0aGlzLkNPTExJU0lPTl9ERUxBWSArIHRoaXMuQ09MTElTSU9OX1VQX0RVUkFUSU9OICsgdGhpcy5DT0xMSVNJT05fRE9XTl9EVVJBVElPTjtcbiAgICB0aGlzLmRlbGF5KHRbMF0ubm9kZTEsIGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5RWxpbWluYXRpb25FZmZlY3QoKTtcbiAgICAgIGUuY29udGV4dC5wbGF5U2hha2UoKTtcbiAgICAgIGUuZmFkZVRvV2hpdGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBhKSB7XG4gICAgICB2YXIgbyA9IE1hdGguYWJzKGEgLSBpKSAqIGUuQ09MTElTSU9OX1NJREVfREVMQVksXG4gICAgICAgIG4gPSBlLkNPTExJU0lPTl9ERUxBWSArIG8sXG4gICAgICAgIHIgPSB0LmNhcmROb2RlMS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICBzID0gdC5jYXJkTm9kZTIucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgYyA9IGNjLnYzKHIueCwgci55ICsgZS5DT0xMSVNJT05fVVBfRElTVEFOQ0UsIDApLFxuICAgICAgICBsID0gY2MudjMocy54LCBzLnkgKyBlLkNPTExJU0lPTl9VUF9ESVNUQU5DRSwgMCksXG4gICAgICAgIGggPSBjYy52MyhjLngsIGMueSAtIGUuQ09MTElTSU9OX0RPV05fRElTVEFOQ0UsIDApLFxuICAgICAgICBkID0gY2MudjMobC54LCBsLnkgLSBlLkNPTExJU0lPTl9ET1dOX0RJU1RBTkNFLCAwKTtcbiAgICAgIGNjLnR3ZWVuKHQuY2FyZE5vZGUxKS5kZWxheShuKS50byhlLkNPTExJU0lPTl9VUF9EVVJBVElPTiwge1xuICAgICAgICBwb3NpdGlvbjogY1xuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhcnRPdXRcIlxuICAgICAgfSkudG8oZS5DT0xMSVNJT05fRE9XTl9EVVJBVElPTiwge1xuICAgICAgICBwb3NpdGlvbjogaFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwicXVhcnRJblwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZCh0LmNhcmROb2RlMSkgJiYgKHQuY2FyZE5vZGUxLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICBjYy50d2Vlbih0LmNhcmROb2RlMikuZGVsYXkobikudG8oZS5DT0xMSVNJT05fVVBfRFVSQVRJT04sIHtcbiAgICAgICAgcG9zaXRpb246IGxcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0T3V0XCJcbiAgICAgIH0pLnRvKGUuQ09MTElTSU9OX0RPV05fRFVSQVRJT04sIHtcbiAgICAgICAgcG9zaXRpb246IGRcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5cIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodC5jYXJkTm9kZTIpICYmICh0LmNhcmROb2RlMi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0pO1xuICAgIHZhciBvID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgWy4uLnRoaXMubm9kZUluZm9zLm1hcChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoZSAtIGkpO1xuICAgICAgfSldKSAqIHRoaXMuQ09MTElTSU9OX1NJREVfREVMQVksXG4gICAgICByID0gdGhpcy5DT0xMSVNJT05fREVMQVkgKyBvICsgdGhpcy5DT0xMSVNJT05fVVBfRFVSQVRJT04gKyB0aGlzLkNPTExJU0lPTl9ET1dOX0RVUkFUSU9OO1xuICAgIHJldHVybiB0aGlzLmRlbGF5KHRbMF0ubm9kZTEsIHIpO1xuICB9XG4gIG9uQ29sbGlzaW9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy5ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgY2MuaXNWYWxpZCh0LmNhcmROb2RlMSkgJiYgdC5jYXJkTm9kZTEuZGVzdHJveSgpO1xuICAgICAgY2MuaXNWYWxpZCh0LmNhcmROb2RlMikgJiYgdC5jYXJkTm9kZTIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubWFza0xheWVyKSkge1xuICAgICAgdGhpcy5tYXNrTGF5ZXIuZGVzdHJveSgpO1xuICAgICAgdGhpcy5tYXNrTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm1hc2tHcmFwaGljcyA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0Lm9uQ29tcGxldGUoKTtcbiAgfVxuICBwbGF5RWxpbWluYXRpb25FZmZlY3QoKSB7XG4gICAgdmFyIHQgPSBCYXNlU3BpbmUuY3JlYXRlKHRoaXMuUkVTX0VMSU1JTkFUSU9OX0JBQ0ssIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgdGhpcy5SRVNfQlVORExFKTtcbiAgICB0Lm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgdC5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgdGhpcy5SRVNfRUxJTUlOQVRJT05fQkFDS19PRkZTRVRfWSwgMCk7XG4gICAgdC5ub2RlLnpJbmRleCA9IDUwMDtcbiAgICB2YXIgZSA9IEJhc2VTcGluZS5jcmVhdGUodGhpcy5SRVNfRUxJTUlOQVRJT04sIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgdGhpcy5SRVNfQlVORExFKTtcbiAgICBlLm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgZS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgdGhpcy5SRVNfRUxJTUlOQVRJT05fT0ZGU0VUX1ksIDApO1xuICAgIGUubm9kZS56SW5kZXggPSA2MDA7XG4gIH1cbiAgY3JlYXRlTWFza0xheWVyKCkge1xuICAgIHRoaXMubWFza0xheWVyID0gbmV3IGNjLk5vZGUoXCJIYWl5YW5nTWFza0xheWVyXCIpO1xuICAgIHRoaXMubWFza0xheWVyLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIHRoaXMubWFza0xheWVyLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgdGhpcy5tYXNrTGF5ZXIuekluZGV4ID0gLTEwMDA7XG4gICAgdGhpcy5tYXNrTGF5ZXIuX2ZhZGVBbHBoYSA9IDA7XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MgPSB0aGlzLm1hc2tMYXllci5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgIHZhciB0ID0gY2Mud2luU2l6ZTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5yZWN0KC10LndpZHRoIC8gMiwgLXQuaGVpZ2h0IC8gMiwgdC53aWR0aCwgdC5oZWlnaHQpO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAwKTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsKCk7XG4gIH1cbiAgZmFkZVRvRGFyaygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpICYmIHRoaXMubWFza0dyYXBoaWNzKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuRkFERV9UT19EQVJLX09QQUNJVFksXG4gICAgICAgIGkgPSBjYy53aW5TaXplO1xuICAgICAgY2MudHdlZW4odGhpcy5tYXNrTGF5ZXIpLnRvKHRoaXMuRkFERV9UT19EQVJLX0RVUkFUSU9OLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChlLCBhLCBvLCBuKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5tYXNrTGF5ZXIpICYmIHQubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IGUgKyAoYSAtIGUpICogbjtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5yZWN0KC1pLndpZHRoIC8gMiwgLWkuaGVpZ2h0IC8gMiwgaS53aWR0aCwgaS5oZWlnaHQpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZSArIChhIC0gZSkgKiBuO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBmYWRlVG9XaGl0ZSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpICYmIHRoaXMubWFza0dyYXBoaWNzKSB7XG4gICAgICB2YXIgZSA9IGNjLndpblNpemU7XG4gICAgICBjYy50d2Vlbih0aGlzLm1hc2tMYXllcikudG8odGhpcy5GQURFX1RPX1dISVRFX0RVUkFUSU9OLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChpLCBhLCBvLCBuKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5tYXNrTGF5ZXIpICYmIHQubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IGkgKyAoYSAtIGkpICogbjtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5yZWN0KC1lLndpZHRoIC8gMiwgLWUuaGVpZ2h0IC8gMiwgZS53aWR0aCwgZS5oZWlnaHQpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaSArIChhIC0gaSkgKiBuO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxufSJdfQ==