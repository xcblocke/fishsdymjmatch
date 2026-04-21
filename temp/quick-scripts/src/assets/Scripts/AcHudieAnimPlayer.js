"use strict";
cc._RF.push(module, 'fd8deHmmX5Bd6Mqphh2e2AP', 'AcHudieAnimPlayer');
// Scripts/AcHudieAnimPlayer.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AcHudieAnimPlayer = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var AcAnimPlayerBase_1 = require("./AcAnimPlayerBase");
var AcHudieAnimPlayer = /** @class */ (function (_super) {
    __extends(AcHudieAnimPlayer, _super);
    function AcHudieAnimPlayer(t) {
        var _this = _super.call(this, t) || this;
        _this.LAYOUT_CONFIGS = {
            4: [1, 3, 3, 1],
            5: [2, 3, 3, 2],
            6: [1, 2, 3, 3, 2, 1],
            7: [3, 4, 4, 3],
            8: [1, 3, 4, 4, 3, 1],
            9: [1, 3, 5, 5, 3, 1]
        };
        _this.LAYOUT_SPACING_X = 1;
        _this.LAYOUT_SPACING_Y = 1;
        _this.PHASE1_DURATION = 0.45;
        _this.PHASE1_DELAY = 0.03;
        _this.PHASE1_FADE_TIME = 0.15;
        _this.PHASE1_STROKE = 32;
        _this.PHASE1_COLOR = cc.color(255, 255, 255, 255);
        _this.PHASE1_FLOW_LIGHT_DELAY = 0.2;
        _this.PHASE2_DURATIONS = [0.13];
        _this.PHASE2_MOVE_YS = [10];
        _this.PHASE2_DELAY = 0.066;
        _this.PHASE3_DURATION = 0.3;
        _this.PHASE3_DELAY = 0;
        _this.PHASE3_PHASE4_DELAY = 0.0167;
        _this.COLLISION_DELAY = 0.08;
        _this.COLLISION_OUT_DURATION = 0.14;
        _this.COLLISION_IN_DURATION = 0.07;
        _this.COLLISION_OUT_DISTANCE = 100;
        _this.COLLISION_SCALE_OUT = 0.9;
        _this.COLLISION_SCALE_IN = 1;
        _this.FADE_TO_DARK_OPACITY = 77;
        _this.FADE_TO_DARK_DURATION = 2;
        _this.FADE_TO_WHITE_DURATION = 0.5;
        _this.RES_BUNDLE = "r_daxiaohudie";
        _this.RES_PARTICLE = "texture/gameplay_trailingElement";
        _this.RES_TRAIL_TEXTURE = "texture/gameplay_star_tail";
        _this.RES_HIT_SPINE = "spine/gameplay_hit_gf";
        _this.RES_FLOW_LIGHT = "spine/gameplay_flowingLight";
        _this.RES_EFFECT_SPINE = "spine/gameplay_elimination";
        return _this;
    }
    AcHudieAnimPlayer.prototype.setupPositions = function (e) {
        var t = e.length, o = this.LAYOUT_CONFIGS[t];
        if (o) {
            this.setupColumnPositions(e, o);
        }
        else {
            this.setupDefaultPositions(e);
        }
        this.nodeInfos = e;
    };
    AcHudieAnimPlayer.prototype.setupColumnPositions = function (e, t) {
        var o = e[0].cardNode1.getContentSize().height, n = e[0].cardNode1.getContentSize().width * this.LAYOUT_SPACING_X, i = o * this.LAYOUT_SPACING_Y, r = t.length, a = -(r - 1) * n / 2, l = [];
        e.forEach(function (e) {
            l.push({
                node: e.cardNode1,
                info: e,
                isCard1: true
            });
            l.push({
                node: e.cardNode2,
                info: e,
                isCard1: false
            });
        });
        for (var s = 0, c = 0, u = 0; u < r; u++)
            for (var p = t[u], f = a + u * n, d = (p - 1) * i / 2, h = 0; h < p && !(s >= l.length); h++) {
                var y = l[s], m = d - h * i, v = cc.v3(f, m, 0);
                if (y.isCard1) {
                    y.info.targetPos1 = v;
                }
                else {
                    y.info.targetPos2 = v;
                }
                y.node.zIndex = c++;
                s++;
            }
    };
    AcHudieAnimPlayer.prototype.setupDefaultPositions = function (e) {
        var t = e[0].cardNode1.getContentSize().height, o = e[0].cardNode1.getContentSize().width, n = t * this.LAYOUT_SPACING_Y, i = o * this.LAYOUT_SPACING_X / 2, r = e.length * n / 2 - n / 2;
        e.forEach(function (e, t) {
            var o = r - t * n;
            e.targetPos1 = cc.v3(-i, o, 0);
            e.targetPos2 = cc.v3(i, o, 0);
            e.cardNode1.zIndex = 2 * t;
            e.cardNode2.zIndex = 2 * t + 1;
        });
    };
    AcHudieAnimPlayer.prototype.play = function (e) {
        var t = this;
        this.nodeInfos = e;
        this.createGraphicsMask("AcHudieMask");
        this.playPhase1().then(function () {
            return t.playPhase2();
        }).then(function () {
            return t.playPhase3();
        }).then(function () {
            return t.playPhase4();
        }).then(function () {
            return t.cleanupAndComplete();
        });
    };
    AcHudieAnimPlayer.prototype.playPhase1 = function () {
        var e = this, t = cc.v3(0, 0, 0);
        return this.context.loadRes(this.RES_TRAIL_TEXTURE, cc.SpriteFrame, this.RES_BUNDLE).then(function (o) {
            var n, i;
            if (o) {
                var a = [], l = 0;
                try {
                    for (var s = __values(e.nodeInfos), c = s.next(); !c.done; c = s.next()) {
                        var u = c.value;
                        a.push(e.createParticle(t, u.cardNode1.position, u.cardNode1, u.tileId1, l++, o));
                        a.push(e.createParticle(t, u.cardNode2.position, u.cardNode2, u.tileId2, l++, o));
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        c && !c.done && (i = s.return) && i.call(s);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                return Promise.all(a).then(function () {
                    cc.isValid(e.maskLayer) && e.fadeMaskDark(e.FADE_TO_DARK_OPACITY, e.FADE_TO_DARK_DURATION);
                });
            }
        });
    };
    AcHudieAnimPlayer.prototype.createParticle = function (e, t, o, n, i, r) {
        var a = this;
        return new Promise(function (s) {
            var c = new cc.Node("AcHudieParticle");
            c.parent = a.context.effectNode;
            c.position = e;
            c.scale = a.context.layoutScale;
            c.zIndex = -800;
            var u = new cc.Node("SpriteContainer");
            u.parent = c;
            var p = BaseSprite_1.default.create(a.RES_PARTICLE, a.RES_BUNDLE);
            if (null == p ? void 0 : p.node) {
                p.node.parent = u;
                p.node.scale = 2;
            }
            var f = c.addComponent(cc.MotionStreak);
            f.fadeTime = a.PHASE1_FADE_TIME;
            f.minSeg = 1;
            f.stroke = a.PHASE1_STROKE;
            f.texture = r.getTexture();
            f.color = a.PHASE1_COLOR;
            cc.tween(c).delay(i * a.PHASE1_DELAY).call(function () {
                a.arcTo(c, t, a.PHASE1_DURATION, u).then(function () {
                    cc.isValid(c) && c.destroy();
                    a.context.removeTileNode(n);
                    o.position = t;
                    o.active = true;
                    if (cc.isValid(o)) {
                        a.playHitEffect(o);
                        cc.tween(o).delay(a.PHASE1_FLOW_LIGHT_DELAY).call(function () {
                            cc.isValid(o) && a.showFlowLight(o);
                        }).start();
                    }
                    s();
                });
            }).start();
        });
    };
    AcHudieAnimPlayer.prototype.playPhase2 = function () {
        for (var e = this, t = [], o = function o(o) {
            var i = n.nodeInfos[o], r = o * n.PHASE2_DELAY;
            t.push(n.delay(i.cardNode1, r).then(function () {
                return e.floatCard(i.cardNode1);
            }));
            t.push(n.delay(i.cardNode2, r).then(function () {
                return e.floatCard(i.cardNode2);
            }));
        }, n = this, i = 0; i < this.nodeInfos.length; i++)
            o(i);
        return Promise.all(t).then(function () { });
    };
    AcHudieAnimPlayer.prototype.floatCard = function (e) {
        if (!cc.isValid(e))
            return Promise.resolve();
        for (var t = cc.tween(e), o = e.y, n = 0; n < this.PHASE2_DURATIONS.length; n++) {
            o += this.PHASE2_MOVE_YS[n];
            t = t.to(this.PHASE2_DURATIONS[n], {
                y: o
            });
        }
        return new Promise(function (e) {
            t.call(e).start();
        });
    };
    AcHudieAnimPlayer.prototype.playPhase3 = function () {
        for (var e = this, t = [], o = function o(o) {
            var i = n.nodeInfos[o];
            t.push(n.delay(i.cardNode1, o * n.PHASE3_DELAY).then(function () {
                return e.moveTo(i.cardNode1, i.targetPos1);
            }));
            t.push(n.delay(i.cardNode2, o * n.PHASE3_DELAY).then(function () {
                return e.moveTo(i.cardNode2, i.targetPos2);
            }));
        }, n = this, i = 0; i < this.nodeInfos.length; i++)
            o(i);
        return Promise.all(t).then(function () {
            var t, o = null === (t = e.nodeInfos[0]) || void 0 === t ? void 0 : t.cardNode1;
            return cc.isValid(o) ? e.delay(o, e.PHASE3_PHASE4_DELAY) : Promise.resolve();
        });
    };
    AcHudieAnimPlayer.prototype.moveTo = function (e, t) {
        var o = this;
        return cc.isValid(e) ? new Promise(function (n) {
            cc.tween(e).to(o.PHASE3_DURATION, {
                position: t
            }).call(n).start();
        }) : Promise.resolve();
    };
    AcHudieAnimPlayer.prototype.playPhase4 = function () {
        var e, t = this, o = 0, n = 0, i = 0;
        this.nodeInfos.forEach(function (e) {
            o += e.cardNode1.x + e.cardNode2.x;
            n += e.cardNode1.y + e.cardNode2.y;
            i += 2;
        });
        var r = cc.v3(o / i, n / i, 0), a = [];
        this.nodeInfos.forEach(function (e) {
            a.push(t.playCardCollision(e.cardNode1, r));
            a.push(t.playCardCollision(e.cardNode2, r));
        });
        var l = null === (e = this.nodeInfos[0]) || void 0 === e ? void 0 : e.cardNode1;
        cc.isValid(l) && cc.tween(l).delay(this.COLLISION_DELAY + this.COLLISION_OUT_DURATION).call(function () {
            t.playCollisionEffect(r);
            t.context.onShake();
            cc.isValid(t.maskLayer) && t.fadeMaskWhite(t.FADE_TO_WHITE_DURATION);
        }).start();
        return Promise.all(a).then(function () { });
    };
    AcHudieAnimPlayer.prototype.playCardCollision = function (e, t) {
        if (!cc.isValid(e))
            return Promise.resolve();
        var o = e.position.clone(), n = o.clone().sub(t).normalize(), i = o.clone().add(n.mul(this.COLLISION_OUT_DISTANCE));
        cc.tween(e).delay(this.COLLISION_DELAY).parallel(cc.tween().to(this.COLLISION_OUT_DURATION, {
            position: i
        }, {
            easing: "quartInOut"
        }), cc.tween().to(this.COLLISION_OUT_DURATION, {
            scale: this.COLLISION_SCALE_OUT
        }, {
            easing: "quartInOut"
        })).parallel(cc.tween().to(this.COLLISION_IN_DURATION, {
            position: t
        }, {
            easing: "quartInOut"
        }), cc.tween().to(this.COLLISION_IN_DURATION, {
            scale: this.COLLISION_SCALE_IN
        }, {
            easing: "quartInOut"
        })).call(function () {
            cc.isValid(e) && (e.active = false);
        }).start();
        return this.delay(e, this.COLLISION_DELAY + this.COLLISION_OUT_DURATION + this.COLLISION_IN_DURATION);
    };
    AcHudieAnimPlayer.prototype.playCollisionEffect = function (e) {
        var t = BaseSpine_1.default.create(this.RES_EFFECT_SPINE, "in", 1, null, true, this.RES_BUNDLE);
        t.node.parent = this.context.effectNode;
        t.node.position = e;
        t.node.zIndex = 500;
    };
    AcHudieAnimPlayer.prototype.playHitEffect = function (e) {
        var t = BaseSpine_1.default.create(this.RES_HIT_SPINE, "gameplay_hit_gf", 1, null, false, this.RES_BUNDLE);
        t.node.parent = e;
        t.node.position = cc.v3(0, 0, 0);
        t.node.zIndex = 900;
        t.node.scale = this.context.layoutScale;
        t.node.name = "DaxiaoHitSpineNode";
    };
    AcHudieAnimPlayer.prototype.showFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoCardTipNode");
        t && (t.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var o = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(o);
            o.scale = this.context.layoutScale;
            o.setContentSize(e.getContentSize());
            BaseSpine_1.default.refreshWithNode(o, this.RES_FLOW_LIGHT, this.RES_BUNDLE).setAnimation("init", 1);
        }
    };
    return AcHudieAnimPlayer;
}(AcAnimPlayerBase_1.AcAnimPlayerBase));
exports.AcHudieAnimPlayer = AcHudieAnimPlayer;

cc._RF.pop();