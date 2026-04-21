
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaonewanim/Scripts/ShipinAnimPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15e07t0981JN7unzcUXiYyn', 'ShipinAnimPlayer');
// subpackages/l_daxiaonewanim/Scripts/ShipinAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipinAnimPlayer = void 0;
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var ShipinAnimPlayer = /** @class */ (function () {
    function ShipinAnimPlayer(t) {
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
        this.RES_BUNDLE = "l_daxiaoshipin";
        this.RES_TRAIL_SPRITE = "texture/gameplay_trailingElement";
        this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        this.RES_HIT_SPINE = "spine/hint/gameplay_hit";
        this.RES_FLOW_LIGHT = "spine/idle/gameplay_flowingLight";
        this.RES_ELIMINATION = "spine/clear/gameplay_great_elimination_effect";
        this.context = null;
        this.context = t;
    }
    ShipinAnimPlayer.playFullAnimation = function (e, i) {
        var o, n, r, s, c = e.context, l = c.gameView.nodeTopEffectRoot, h = new ShipinAnimPlayer({
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
    ShipinAnimPlayer.prototype.delay = function (t, e) {
        return new Promise(function (i) {
            if (cc.isValid(t)) {
                cc.tween(t).delay(e).call(i).start();
            }
            else {
                i();
            }
        });
    };
    ShipinAnimPlayer.prototype.createBezierEasing = function (t, e, i, a) {
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
    ShipinAnimPlayer.prototype.bezierTo = function (t, e, i) {
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
    ShipinAnimPlayer.prototype.arcTo = function (t, e, i, a) {
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
    ShipinAnimPlayer.prototype.hideFlowLight = function (t) {
        var e = t.getChildByName("DaxiaoFlowLightNode");
        e && (e.active = false);
        var i = t.getChildByName("DaxiaoCardTipNode");
        i && (i.active = false);
    };
    ShipinAnimPlayer.prototype.showFlowLight = function (t) {
        if (!t.getChildByName("DaxiaoFlowLightNode")) {
            var e = new cc.Node("DaxiaoFlowLightNode");
            t.addChild(e);
            e.scale = this.context.layoutScale;
            BaseSpine_1.default.refreshWithNode(e, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", -1, null, false);
        }
    };
    ShipinAnimPlayer.prototype.setupPositions = function (t) {
        var e = this;
        t.sort(function (t, i) {
            var a = e.context.getTileObject(t.tileId2), o = e.context.getTileObject(i.tileId2);
            return a && o ? a.gridPosX !== o.gridPosX ? a.gridPosX - o.gridPosX : a.gridPosY - o.gridPosY : 0;
        });
        var i = t[0].cardNode1.getContentSize().height, a = t[0].cardNode1.getContentSize().width, o = (t.length - 1) / 2;
        t.forEach(function (t, e) {
            var n = Math.abs(e - o), r = Math.floor(n), s = (e < o ? 1 : -1) * (0.5 * i + 0.5 * r * i), c = 0.5 * a + r * a;
            t.targetPos1 = cc.v3(-c, s, 0);
            t.targetPos2 = cc.v3(c, s, 0);
            t.runIndex = e;
            var l = 2 * e;
            t.cardNode1.zIndex = l;
            t.cardNode2.zIndex = l + 1;
        });
        this.nodeInfos = t;
    };
    ShipinAnimPlayer.prototype.play = function (t) {
        var e = this;
        this.nodeInfos = t;
        this.completedCount = 0;
        this.createMaskLayer();
        this.fadeToDark();
        this.nodeInfos.forEach(function (t) {
            return e.animateCard1(t);
        });
    };
    ShipinAnimPlayer.prototype.animateCard1 = function (t) {
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
    ShipinAnimPlayer.prototype.playPhase1 = function (t, e) {
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
    ShipinAnimPlayer.prototype.playPhase2 = function (t, e) {
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
    ShipinAnimPlayer.prototype.triggerTrail = function (t) {
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
    ShipinAnimPlayer.prototype.playTrailEffect = function (t, e) {
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
    ShipinAnimPlayer.prototype.animateCard2 = function (t) {
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
    ShipinAnimPlayer.prototype.playHitEffect = function (t, e) {
        var i = BaseSpine_1.default.create(this.RES_HIT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
        i.node.parent = this.context.effectNode;
        i.node.position = t.position.clone();
        i.node.zIndex = 900;
        i.node.scale = e;
        i.node.name = "DaxiaoHitSpineNode";
    };
    ShipinAnimPlayer.prototype.onCard2Arrived = function () {
        ++this.completedCount >= this.nodeInfos.length && this.startCollision();
    };
    ShipinAnimPlayer.prototype.startCollision = function () {
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
    ShipinAnimPlayer.prototype.playCollision = function (t) {
        var e = this;
        if (0 === t.length)
            return Promise.resolve();
        var i = (this.nodeInfos.length - 1) / 2;
        this.playEliminationEffect();
        this.fadeToWhite();
        this.context.playShake();
        this.nodeInfos.forEach(function (t, a) {
            var o, n, r = t.cardNode1.position.clone(), s = t.cardNode2.position.clone();
            if (0 === Math.floor(Math.abs(a - i))) {
                o = cc.v3(r.x - e.COLLISION_OUT_DISTANCE, r.y, 0);
                n = cc.v3(s.x + e.COLLISION_OUT_DISTANCE, s.y, 0);
            }
            else {
                var c = a < i ? 1 : -1, l = e.COLLISION_OUT_DISTANCE / Math.sqrt(2);
                o = cc.v3(r.x - l, r.y + c * l, 0);
                n = cc.v3(s.x + l, s.y + c * l, 0);
            }
            cc.tween(t.cardNode1).delay(e.COLLISION_DELAY).to(e.COLLISION_OUT_DURATION, {
                position: o
            }, {
                easing: "quartInOut"
            }).call(function () {
                cc.isValid(t.cardNode1) && (t.cardNode1.active = false);
            }).start();
            cc.tween(t.cardNode2).delay(e.COLLISION_DELAY).to(e.COLLISION_OUT_DURATION, {
                position: n
            }, {
                easing: "quartInOut"
            }).call(function () {
                cc.isValid(t.cardNode2) && (t.cardNode2.active = false);
            }).start();
        });
        return this.delay(t[0].node1, this.COLLISION_DELAY + this.COLLISION_OUT_DURATION);
    };
    ShipinAnimPlayer.prototype.onCollisionComplete = function () {
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
    ShipinAnimPlayer.prototype.playEliminationEffect = function () {
        var t = BaseSpine_1.default.create(this.RES_ELIMINATION, "in", 1, null, true, this.RES_BUNDLE);
        t.node.parent = this.context.effectNode;
        t.node.position = cc.v3(0, 0, 0);
        t.node.zIndex = 600;
    };
    ShipinAnimPlayer.prototype.createMaskLayer = function () {
        this.maskLayer = new cc.Node("ShipinMaskLayer");
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
    ShipinAnimPlayer.prototype.fadeToDark = function () {
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
    ShipinAnimPlayer.prototype.fadeToWhite = function () {
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
    return ShipinAnimPlayer;
}());
exports.ShipinAnimPlayer = ShipinAnimPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb25ld2FuaW0vU2NyaXB0cy9TaGlwaW5BbmltUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLDJFQUFzRTtBQUN0RTtJQStCRSwwQkFBWSxDQUFDO1FBOUJiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIseUJBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5QixvQkFBZSxHQUFHLEdBQUcsQ0FBQztRQUN0QixtQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUNyQixvQkFBZSxHQUFHLEdBQUcsQ0FBQztRQUN0QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0Msb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5Qix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixlQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUIscUJB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QUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDakQsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQy9DLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7NEJBQzVDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxD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Q0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2FBQ0YsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQTFiQSxBQTBiQyxJQUFBO0FBMWJZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5leHBvcnQgY2xhc3MgU2hpcGluQW5pbVBsYXllciB7XG4gIG5vZGVJbmZvcyA9IFtdO1xuICBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIG1hc2tMYXllciA9IG51bGw7XG4gIG1hc2tHcmFwaGljcyA9IG51bGw7XG4gIFBIQVNFMV9EVVJBVElPTiA9IDAuMTY7XG4gIFBIQVNFMV9NT1ZFX1kgPSAxMDtcbiAgUEhBU0UxX0FOR0xFID0gLTEwO1xuICBQSEFTRTFfU0NBTEUgPSAxLjI7XG4gIFBIQVNFMV9ERUxBWSA9IDAuMDY7XG4gIFBIQVNFMl9EVVJBVElPTiA9IDAuNTtcbiAgUEhBU0UyX1JFU1RPUkVfREVMQVkgPSAwLjQ7XG4gIFBIQVNFMl9JTlRFUlZBTF9ERUxBWSA9IDAuMDY3O1xuICBUUkFJTF9ISVRfREVMQVkgPSAwLjI7XG4gIFRSQUlMX0RVUkFUSU9OID0gMC4zO1xuICBUUkFJTF9GQURFX1RJTUUgPSAwLjM7XG4gIFRSQUlMX1NUUk9LRSA9IDY0O1xuICBUUkFJTF9DT0xPUiA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gIENPTExJU0lPTl9ERUxBWSA9IDAuMTtcbiAgQ09MTElTSU9OX09VVF9EVVJBVElPTiA9IDAuMzM7XG4gIENPTExJU0lPTl9PVVRfRElTVEFOQ0UgPSAyMDAwO1xuICBGQURFX1RPX0RBUktfT1BBQ0lUWSA9IDc3O1xuICBGQURFX1RPX0RBUktfRFVSQVRJT04gPSAwLjE2O1xuICBGQURFX1RPX1dISVRFX0RVUkFUSU9OID0gMC4zMztcbiAgUkVTX0JVTkRMRSA9IFwibF9kYXhpYW9zaGlwaW5cIjtcbiAgUkVTX1RSQUlMX1NQUklURSA9IFwidGV4dHVyZS9nYW1lcGxheV90cmFpbGluZ0VsZW1lbnRcIjtcbiAgUkVTX1RSQUlMX1RFWFRVUkUgPSBcInRleHR1cmUvZ2FtZXBsYXlfc3Rhcl90YWlsXCI7XG4gIFJFU19ISVRfU1BJTkUgPSBcInNwaW5lL2hpbnQvZ2FtZXBsYXlfaGl0XCI7XG4gIFJFU19GTE9XX0xJR0hUID0gXCJzcGluZS9pZGxlL2dhbWVwbGF5X2Zsb3dpbmdMaWdodFwiO1xuICBSRVNfRUxJTUlOQVRJT04gPSBcInNwaW5lL2NsZWFyL2dhbWVwbGF5X2dyZWF0X2VsaW1pbmF0aW9uX2VmZmVjdFwiO1xuICBjb250ZXh0ID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHRoaXMuY29udGV4dCA9IHQ7XG4gIH1cbiAgc3RhdGljIHBsYXlGdWxsQW5pbWF0aW9uKGUsIGkpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgcyxcbiAgICAgIGMgPSBlLmNvbnRleHQsXG4gICAgICBsID0gYy5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdCxcbiAgICAgIGggPSBuZXcgU2hpcGluQW5pbVBsYXllcih7XG4gICAgICAgIGVmZmVjdE5vZGU6IGwsXG4gICAgICAgIGxheW91dFNjYWxlOiBjLmxheW91dFNjYWxlLFxuICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUub25BbmltYXRpb25Db21wbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUmVzOiBmdW5jdGlvbiAodCwgZSwgaSkge1xuICAgICAgICAgIHJldHVybiBjLmdhbWVDdHIubG9hZFJlcyh0LCBlLCBpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGlsZU5vZGVQb3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdmFyIGkgPSBjLmdldFRpbGVOb2RlTWFwKCkuZ2V0KHQpO1xuICAgICAgICAgIHJldHVybiBpID8gZS50b0xvY2FsUG9zKGkuY2FyZE5vZGUsIGwpIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlVGlsZU5vZGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGMucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZCh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGlsZU9iamVjdDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IGMuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodCk7XG4gICAgICAgICAgcmV0dXJuIGUgPyBlLmluZm8udGlsZU9iamVjdCA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXlTaGFrZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjLmdhbWVWaWV3LnBsYXlTaGFrZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGkpLCBwID0gZC5uZXh0KCk7ICFwLmRvbmU7IHAgPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IHAudmFsdWUsXG4gICAgICAgICAgZiA9IG51bGwgPT09IChyID0gYy5nZXRUaWxlTm9kZUJ5VGlsZUlkKHUudGlsZUlkMSkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIudGlsZU5vZGU7XG4gICAgICAgIGYgJiYgaC5oaWRlRmxvd0xpZ2h0KGYpO1xuICAgICAgICB2YXIgXyA9IG51bGwgPT09IChzID0gYy5nZXRUaWxlTm9kZUJ5VGlsZUlkKHUudGlsZUlkMikpIHx8IHZvaWQgMCA9PT0gcyA/IHZvaWQgMCA6IHMudGlsZU5vZGU7XG4gICAgICAgIF8gJiYgaC5oaWRlRmxvd0xpZ2h0KF8pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBwICYmICFwLmRvbmUgJiYgKG4gPSBkLnJldHVybikgJiYgbi5jYWxsKGQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGguc2V0dXBQb3NpdGlvbnMoaSk7XG4gICAgaC5wbGF5KGkpO1xuICB9XG4gIGRlbGF5KHQsIGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGkpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIGNjLnR3ZWVuKHQpLmRlbGF5KGUpLmNhbGwoaSkuc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjcmVhdGVCZXppZXJFYXNpbmcodCwgZSwgaSwgYSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKDAgPT09IG8gfHwgMSA9PT0gbykgcmV0dXJuIG87XG4gICAgICBmb3IgKHZhciBuID0gMCwgciA9IDEsIHMgPSAwLCBjID0gMDsgYyA8IDEwOyBjKyspIHtcbiAgICAgICAgdmFyIGwgPSAobiArIHIpIC8gMjtcbiAgICAgICAgcyA9IDMgKiAoMSAtIGwpICogKDEgLSBsKSAqIGwgKiB0ICsgMyAqICgxIC0gbCkgKiBsICogbCAqIGkgKyBsICogbCAqIGw7XG4gICAgICAgIGlmIChNYXRoLmFicyhzIC0gbykgPCAwLjAwMSkgYnJlYWs7XG4gICAgICAgIGlmIChzIDwgbykge1xuICAgICAgICAgIG4gPSBsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHIgPSBsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgaCA9IChuICsgcikgLyAyO1xuICAgICAgcmV0dXJuIDMgKiAoMSAtIGgpICogKDEgLSBoKSAqIGggKiBlICsgMyAqICgxIC0gaCkgKiBoICogaCAqIGEgKyBoICogaCAqIGg7XG4gICAgfTtcbiAgfVxuICBiZXppZXJUbyh0LCBlLCBpKSB7XG4gICAgdmFyIGEgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgdmFyIG4gPSBhLmNyZWF0ZUJlemllckVhc2luZygwLjI1LCAwLCAwLjI1LCAxKTtcbiAgICAgICAgY2MudHdlZW4odCkudG8oaSwge1xuICAgICAgICAgIHBvc2l0aW9uOiBlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IG5cbiAgICAgICAgfSkuY2FsbChvKS5zdGFydCgpO1xuICAgICAgfSBlbHNlIG8oKTtcbiAgICB9KTtcbiAgfVxuICBhcmNUbyh0LCBlLCBpLCBhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB2YXIgbiA9IHQucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgICAgICByID0gZSxcbiAgICAgICAgICBzID0gci54IC0gbi54LFxuICAgICAgICAgIGMgPSByLnkgLSBuLnksXG4gICAgICAgICAgbCA9IE1hdGguc3FydChzICogcyArIGMgKiBjKSxcbiAgICAgICAgICBoID0gbCAqICgwLjYgKyAwLjIgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICBkID0gTWF0aC5yYW5kb20oKSA+IDAuNSxcbiAgICAgICAgICBwID0gKG4ueCArIHIueCkgLyAyLFxuICAgICAgICAgIHUgPSAobi55ICsgci55KSAvIDIsXG4gICAgICAgICAgZiA9IHAgKyAtYyAvIGwgKiBoICogKGQgPyAxIDogLTEpLFxuICAgICAgICAgIF8gPSB1ICsgcyAvIGwgKiBoICogKGQgPyAxIDogLTEpO1xuICAgICAgICB0Ll9hcmNQcm9ncmVzcyA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKHQpLnRvKGksIHtcbiAgICAgICAgICBfYXJjUHJvZ3Jlc3M6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAoZSwgaSwgbywgcykge1xuICAgICAgICAgICAgdmFyIGMgPSBzIDwgMC41ID8gMiAqIHMgKiBzIDogMSAtIE1hdGgucG93KC0yICogcyArIDIsIDIpIC8gMixcbiAgICAgICAgICAgICAgbCA9ICgxIC0gYykgKiAoMSAtIGMpICogbi54ICsgMiAqICgxIC0gYykgKiBjICogZiArIGMgKiBjICogci54LFxuICAgICAgICAgICAgICBoID0gKDEgLSBjKSAqICgxIC0gYykgKiBuLnkgKyAyICogKDEgLSBjKSAqIGMgKiBfICsgYyAqIGMgKiByLnk7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKHQpICYmICh0LnBvc2l0aW9uID0gY2MudjMobCwgaCwgMCkpO1xuICAgICAgICAgICAgaWYgKGEgJiYgY2MuaXNWYWxpZChhKSkge1xuICAgICAgICAgICAgICB2YXIgZCA9IDIgKiAoMSAtIGMpICogKGYgLSBuLngpICsgMiAqIGMgKiAoci54IC0gZiksXG4gICAgICAgICAgICAgICAgcCA9IDIgKiAoMSAtIGMpICogKF8gLSBuLnkpICsgMiAqIGMgKiAoci55IC0gXyksXG4gICAgICAgICAgICAgICAgdSA9IDE4MCAqIE1hdGguYXRhbjIocCwgZCkgLyBNYXRoLlBJIC0gOTA7XG4gICAgICAgICAgICAgIGEuYW5nbGUgPSB1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGUgKyAoaSAtIGUpICogcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQucG9zaXRpb24gPSBlKTtcbiAgICAgICAgICBvKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9IGVsc2UgbygpO1xuICAgIH0pO1xuICB9XG4gIGhpZGVGbG93TGlnaHQodCkge1xuICAgIHZhciBlID0gdC5nZXRDaGlsZEJ5TmFtZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIik7XG4gICAgZSAmJiAoZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdmFyIGkgPSB0LmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIik7XG4gICAgaSAmJiAoaS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgc2hvd0Zsb3dMaWdodCh0KSB7XG4gICAgaWYgKCF0LmdldENoaWxkQnlOYW1lKFwiRGF4aWFvRmxvd0xpZ2h0Tm9kZVwiKSkge1xuICAgICAgdmFyIGUgPSBuZXcgY2MuTm9kZShcIkRheGlhb0Zsb3dMaWdodE5vZGVcIik7XG4gICAgICB0LmFkZENoaWxkKGUpO1xuICAgICAgZS5zY2FsZSA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZTtcbiAgICAgIEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUoZSwgdGhpcy5SRVNfRkxPV19MSUdIVCwgdGhpcy5SRVNfQlVORExFKS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIHNldHVwUG9zaXRpb25zKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdC5zb3J0KGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICB2YXIgYSA9IGUuY29udGV4dC5nZXRUaWxlT2JqZWN0KHQudGlsZUlkMiksXG4gICAgICAgIG8gPSBlLmNvbnRleHQuZ2V0VGlsZU9iamVjdChpLnRpbGVJZDIpO1xuICAgICAgcmV0dXJuIGEgJiYgbyA/IGEuZ3JpZFBvc1ggIT09IG8uZ3JpZFBvc1ggPyBhLmdyaWRQb3NYIC0gby5ncmlkUG9zWCA6IGEuZ3JpZFBvc1kgLSBvLmdyaWRQb3NZIDogMDtcbiAgICB9KTtcbiAgICB2YXIgaSA9IHRbMF0uY2FyZE5vZGUxLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0LFxuICAgICAgYSA9IHRbMF0uY2FyZE5vZGUxLmdldENvbnRlbnRTaXplKCkud2lkdGgsXG4gICAgICBvID0gKHQubGVuZ3RoIC0gMSkgLyAyO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgdmFyIG4gPSBNYXRoLmFicyhlIC0gbyksXG4gICAgICAgIHIgPSBNYXRoLmZsb29yKG4pLFxuICAgICAgICBzID0gKGUgPCBvID8gMSA6IC0xKSAqICgwLjUgKiBpICsgMC41ICogciAqIGkpLFxuICAgICAgICBjID0gMC41ICogYSArIHIgKiBhO1xuICAgICAgdC50YXJnZXRQb3MxID0gY2MudjMoLWMsIHMsIDApO1xuICAgICAgdC50YXJnZXRQb3MyID0gY2MudjMoYywgcywgMCk7XG4gICAgICB0LnJ1bkluZGV4ID0gZTtcbiAgICAgIHZhciBsID0gMiAqIGU7XG4gICAgICB0LmNhcmROb2RlMS56SW5kZXggPSBsO1xuICAgICAgdC5jYXJkTm9kZTIuekluZGV4ID0gbCArIDE7XG4gICAgfSk7XG4gICAgdGhpcy5ub2RlSW5mb3MgPSB0O1xuICB9XG4gIHBsYXkodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLm5vZGVJbmZvcyA9IHQ7XG4gICAgdGhpcy5jb21wbGV0ZWRDb3VudCA9IDA7XG4gICAgdGhpcy5jcmVhdGVNYXNrTGF5ZXIoKTtcbiAgICB0aGlzLmZhZGVUb0RhcmsoKTtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gZS5hbmltYXRlQ2FyZDEodCk7XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZUNhcmQxKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5jb250ZXh0LnJlbW92ZVRpbGVOb2RlKHQudGlsZUlkMSk7XG4gICAgdmFyIGkgPSB0aGlzLm5vZGVJbmZvcy5sZW5ndGgsXG4gICAgICBhID0gdC5ydW5JbmRleCAqIHRoaXMuUEhBU0UxX0RFTEFZLFxuICAgICAgbyA9IChpIC0gMSAtIHQucnVuSW5kZXgpICogdGhpcy5QSEFTRTFfREVMQVksXG4gICAgICBuID0gdC5ydW5JbmRleCAqIHRoaXMuUEhBU0UyX0lOVEVSVkFMX0RFTEFZO1xuICAgIHRoaXMuZGVsYXkodC5jYXJkTm9kZTEsIGEpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUucGxheVBoYXNlMSh0LmNhcmROb2RlMSwgZmFsc2UpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUuZGVsYXkodC5jYXJkTm9kZTEsIG8gKyBuKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpID0gZS5wbGF5UGhhc2UyKHQuY2FyZE5vZGUxLCB0LnRhcmdldFBvczEpO1xuICAgICAgZS5kZWxheSh0LmNhcmROb2RlMSwgMCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUudHJpZ2dlclRyYWlsKHQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UGhhc2UxKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHQpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGEgPSB0LnBvc2l0aW9uLnkgKyB0aGlzLlBIQVNFMV9NT1ZFX1ksXG4gICAgICBvID0gZSA/IC10aGlzLlBIQVNFMV9BTkdMRSA6IHRoaXMuUEhBU0UxX0FOR0xFO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgY2MudHdlZW4odCkudG8oaS5QSEFTRTFfRFVSQVRJT04sIHtcbiAgICAgICAgcG9zaXRpb246IGNjLnYzKHQucG9zaXRpb24ueCwgYSwgMCksXG4gICAgICAgIGFuZ2xlOiBvLFxuICAgICAgICBzY2FsZTogaS5QSEFTRTFfU0NBTEVcbiAgICAgIH0pLmNhbGwoZSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UGhhc2UyKHQsIGUpIHtcbiAgICBjYy50d2Vlbih0KS50byh0aGlzLlBIQVNFMl9SRVNUT1JFX0RFTEFZLCB7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkuc3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcy5iZXppZXJUbyh0LCBlLCB0aGlzLlBIQVNFMl9EVVJBVElPTikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB0LmFuZ2xlID0gMDtcbiAgICAgICAgdC5zY2FsZSA9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdHJpZ2dlclRyYWlsKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBpID0gdC5jYXJkTm9kZTEucG9zaXRpb24uY2xvbmUoKSxcbiAgICAgIGEgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVQb3ModC50aWxlSWQyKTtcbiAgICBpZiAoYSkge1xuICAgICAgdGhpcy5wbGF5VHJhaWxFZmZlY3QoaSwgYSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGVDYXJkMih0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFuaW1hdGVDYXJkMih0KTtcbiAgICB9XG4gIH1cbiAgcGxheVRyYWlsRWZmZWN0KHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMsXG4gICAgICBhID0gbmV3IGNjLk5vZGUoXCJUcmFpbENvbnRhaW5lclwiKTtcbiAgICBhLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIGEucG9zaXRpb24gPSB0O1xuICAgIGEuekluZGV4ID0gNDAwO1xuICAgIGEuc2NhbGUgPSB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGU7XG4gICAgdmFyIG8gPSBuZXcgY2MuTm9kZShcIlNwcml0ZUNvbnRhaW5lclwiKTtcbiAgICBvLnBhcmVudCA9IGE7XG4gICAgby5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgIEJhc2VTcHJpdGUuY3JlYXRlKHRoaXMuUkVTX1RSQUlMX1NQUklURSwgdGhpcy5SRVNfQlVORExFKS5ub2RlLnBhcmVudCA9IG87XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5sb2FkUmVzKHRoaXMuUkVTX1RSQUlMX1RFWFRVUkUsIGNjLlNwcml0ZUZyYW1lLCB0aGlzLlJFU19CVU5ETEUpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICh0ICYmIGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgdmFyIG4gPSBhLmFkZENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspO1xuICAgICAgICBuLmZhZGVUaW1lID0gaS5UUkFJTF9GQURFX1RJTUU7XG4gICAgICAgIG4ubWluU2VnID0gMTtcbiAgICAgICAgbi5zdHJva2UgPSBpLlRSQUlMX1NUUk9LRTtcbiAgICAgICAgbi50ZXh0dXJlID0gdC5nZXRUZXh0dXJlKCk7XG4gICAgICAgIG4uY29sb3IgPSBpLlRSQUlMX0NPTE9SO1xuICAgICAgICByZXR1cm4gaS5hcmNUbyhhLCBlLCBpLlRSQUlMX0RVUkFUSU9OLCBvKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoYSkgJiYgYS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cbiAgYW5pbWF0ZUNhcmQyKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5jb250ZXh0LnJlbW92ZVRpbGVOb2RlKHQudGlsZUlkMik7XG4gICAgdC5jYXJkTm9kZTIuYWN0aXZlID0gdHJ1ZTtcbiAgICB2YXIgaSA9IHRoaXMuY29udGV4dC5sYXlvdXRTY2FsZSB8fCAxO1xuICAgIHRoaXMucGxheUhpdEVmZmVjdCh0LmNhcmROb2RlMiwgaSk7XG4gICAgdGhpcy5kZWxheSh0LmNhcmROb2RlMiwgdGhpcy5UUkFJTF9ISVRfREVMQVkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGkgPSB0LmNhcmROb2RlMi5nZXRDaGlsZEJ5TmFtZShcIlRpbGVBbmltTm9kZU5hbWVcIikgfHwgdC5jYXJkTm9kZTI7XG4gICAgICBlLnNob3dGbG93TGlnaHQoaSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5wbGF5UGhhc2UxKHQuY2FyZE5vZGUyLCB0cnVlKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLnBsYXlQaGFzZTIodC5jYXJkTm9kZTIsIHQudGFyZ2V0UG9zMik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5vbkNhcmQyQXJyaXZlZCgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlIaXRFZmZlY3QodCwgZSkge1xuICAgIHZhciBpID0gQmFzZVNwaW5lLmNyZWF0ZSh0aGlzLlJFU19ISVRfU1BJTkUsIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgdGhpcy5SRVNfQlVORExFKTtcbiAgICBpLm5vZGUucGFyZW50ID0gdGhpcy5jb250ZXh0LmVmZmVjdE5vZGU7XG4gICAgaS5ub2RlLnBvc2l0aW9uID0gdC5wb3NpdGlvbi5jbG9uZSgpO1xuICAgIGkubm9kZS56SW5kZXggPSA5MDA7XG4gICAgaS5ub2RlLnNjYWxlID0gZTtcbiAgICBpLm5vZGUubmFtZSA9IFwiRGF4aWFvSGl0U3BpbmVOb2RlXCI7XG4gIH1cbiAgb25DYXJkMkFycml2ZWQoKSB7XG4gICAgKyt0aGlzLmNvbXBsZXRlZENvdW50ID49IHRoaXMubm9kZUluZm9zLmxlbmd0aCAmJiB0aGlzLnN0YXJ0Q29sbGlzaW9uKCk7XG4gIH1cbiAgc3RhcnRDb2xsaXNpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IHRoaXMubm9kZUluZm9zLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGUxOiB0LmNhcmROb2RlMSxcbiAgICAgICAgICBub2RlMjogdC5jYXJkTm9kZTJcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHRoaXMucGxheUNvbGxpc2lvbihlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Lm9uQ29sbGlzaW9uQ29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5Q29sbGlzaW9uKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKDAgPT09IHQubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGkgPSAodGhpcy5ub2RlSW5mb3MubGVuZ3RoIC0gMSkgLyAyO1xuICAgIHRoaXMucGxheUVsaW1pbmF0aW9uRWZmZWN0KCk7XG4gICAgdGhpcy5mYWRlVG9XaGl0ZSgpO1xuICAgIHRoaXMuY29udGV4dC5wbGF5U2hha2UoKTtcbiAgICB0aGlzLm5vZGVJbmZvcy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBhKSB7XG4gICAgICB2YXIgbyxcbiAgICAgICAgbixcbiAgICAgICAgciA9IHQuY2FyZE5vZGUxLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICAgIHMgPSB0LmNhcmROb2RlMi5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgaWYgKDAgPT09IE1hdGguZmxvb3IoTWF0aC5hYnMoYSAtIGkpKSkge1xuICAgICAgICBvID0gY2MudjMoci54IC0gZS5DT0xMSVNJT05fT1VUX0RJU1RBTkNFLCByLnksIDApO1xuICAgICAgICBuID0gY2MudjMocy54ICsgZS5DT0xMSVNJT05fT1VUX0RJU1RBTkNFLCBzLnksIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGMgPSBhIDwgaSA/IDEgOiAtMSxcbiAgICAgICAgICBsID0gZS5DT0xMSVNJT05fT1VUX0RJU1RBTkNFIC8gTWF0aC5zcXJ0KDIpO1xuICAgICAgICBvID0gY2MudjMoci54IC0gbCwgci55ICsgYyAqIGwsIDApO1xuICAgICAgICBuID0gY2MudjMocy54ICsgbCwgcy55ICsgYyAqIGwsIDApO1xuICAgICAgfVxuICAgICAgY2MudHdlZW4odC5jYXJkTm9kZTEpLmRlbGF5KGUuQ09MTElTSU9OX0RFTEFZKS50byhlLkNPTExJU0lPTl9PVVRfRFVSQVRJT04sIHtcbiAgICAgICAgcG9zaXRpb246IG9cbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodC5jYXJkTm9kZTEpICYmICh0LmNhcmROb2RlMS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4odC5jYXJkTm9kZTIpLmRlbGF5KGUuQ09MTElTSU9OX0RFTEFZKS50byhlLkNPTExJU0lPTl9PVVRfRFVSQVRJT04sIHtcbiAgICAgICAgcG9zaXRpb246IG5cbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInF1YXJ0SW5PdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodC5jYXJkTm9kZTIpICYmICh0LmNhcmROb2RlMi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmRlbGF5KHRbMF0ubm9kZTEsIHRoaXMuQ09MTElTSU9OX0RFTEFZICsgdGhpcy5DT0xMSVNJT05fT1VUX0RVUkFUSU9OKTtcbiAgfVxuICBvbkNvbGxpc2lvbkNvbXBsZXRlKCkge1xuICAgIHRoaXMubm9kZUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNjLmlzVmFsaWQodC5jYXJkTm9kZTEpICYmIHQuY2FyZE5vZGUxLmRlc3Ryb3koKTtcbiAgICAgIGNjLmlzVmFsaWQodC5jYXJkTm9kZTIpICYmIHQuY2FyZE5vZGUyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1hc2tMYXllcikpIHtcbiAgICAgIHRoaXMubWFza0xheWVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubWFza0xheWVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MgPSBudWxsO1xuICAgIHRoaXMuY29udGV4dC5vbkNvbXBsZXRlKCk7XG4gIH1cbiAgcGxheUVsaW1pbmF0aW9uRWZmZWN0KCkge1xuICAgIHZhciB0ID0gQmFzZVNwaW5lLmNyZWF0ZSh0aGlzLlJFU19FTElNSU5BVElPTiwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCB0aGlzLlJFU19CVU5ETEUpO1xuICAgIHQubm9kZS5wYXJlbnQgPSB0aGlzLmNvbnRleHQuZWZmZWN0Tm9kZTtcbiAgICB0Lm5vZGUucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICB0Lm5vZGUuekluZGV4ID0gNjAwO1xuICB9XG4gIGNyZWF0ZU1hc2tMYXllcigpIHtcbiAgICB0aGlzLm1hc2tMYXllciA9IG5ldyBjYy5Ob2RlKFwiU2hpcGluTWFza0xheWVyXCIpO1xuICAgIHRoaXMubWFza0xheWVyLnBhcmVudCA9IHRoaXMuY29udGV4dC5lZmZlY3ROb2RlO1xuICAgIHRoaXMubWFza0xheWVyLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgdGhpcy5tYXNrTGF5ZXIuekluZGV4ID0gLTEwMDA7XG4gICAgdGhpcy5tYXNrTGF5ZXIuX2ZhZGVBbHBoYSA9IDA7XG4gICAgdGhpcy5tYXNrR3JhcGhpY3MgPSB0aGlzLm1hc2tMYXllci5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgIHZhciB0ID0gY2Mud2luU2l6ZTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5yZWN0KC10LndpZHRoIC8gMiwgLXQuaGVpZ2h0IC8gMiwgdC53aWR0aCwgdC5oZWlnaHQpO1xuICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGxDb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwLCAwKTtcbiAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsKCk7XG4gIH1cbiAgZmFkZVRvRGFyaygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpICYmIHRoaXMubWFza0dyYXBoaWNzKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuRkFERV9UT19EQVJLX09QQUNJVFksXG4gICAgICAgIGkgPSBjYy53aW5TaXplO1xuICAgICAgY2MudHdlZW4odGhpcy5tYXNrTGF5ZXIpLnRvKHRoaXMuRkFERV9UT19EQVJLX0RVUkFUSU9OLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IGVcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChlLCBhLCBvLCBuKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5tYXNrTGF5ZXIpICYmIHQubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IGUgKyAoYSAtIGUpICogbjtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5yZWN0KC1pLndpZHRoIC8gMiwgLWkuaGVpZ2h0IC8gMiwgaS53aWR0aCwgaS5oZWlnaHQpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZSArIChhIC0gZSkgKiBuO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBmYWRlVG9XaGl0ZSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tYXNrTGF5ZXIpICYmIHRoaXMubWFza0dyYXBoaWNzKSB7XG4gICAgICB2YXIgZSA9IGNjLndpblNpemU7XG4gICAgICBjYy50d2Vlbih0aGlzLm1hc2tMYXllcikudG8odGhpcy5GQURFX1RPX1dISVRFX0RVUkFUSU9OLCB7XG4gICAgICAgIF9mYWRlQWxwaGE6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIChpLCBhLCBvLCBuKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5tYXNrTGF5ZXIpICYmIHQubWFza0dyYXBoaWNzKSB7XG4gICAgICAgICAgICB2YXIgciA9IGkgKyAoYSAtIGkpICogbjtcbiAgICAgICAgICAgIHQubWFza0dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0Lm1hc2tHcmFwaGljcy5yZWN0KC1lLndpZHRoIC8gMiwgLWUuaGVpZ2h0IC8gMiwgZS53aWR0aCwgZS5oZWlnaHQpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIHIpO1xuICAgICAgICAgICAgdC5tYXNrR3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaSArIChhIC0gaSkgKiBuO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxufSJdfQ==