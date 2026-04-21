"use strict";
cc._RF.push(module, '214749dz6JIXpyvdiuV5g0Y', 'ACGatherClearStrategy');
// Scripts/ACGatherClearStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACGatherClearStrategy = void 0;
var IAllClearStrategy_1 = require("./IAllClearStrategy");
var AllClearStrategyRegistry_1 = require("./AllClearStrategyRegistry");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var UserModel_1 = require("./gamePlay/user/UserModel");
var DataReader_1 = require("./framework/data/DataReader");
var ConfigType_1 = require("./gamePlay/base/data/ConfigType");
var u = {
    "": "FEEDC4",
    Red: "FFE6E4",
    Ice: "EBF6F9",
    Gray: "E0DFDE",
    Blue: "D8F0FF",
    Green: "E6FCE5",
    Purple: "FBE7F1"
};
var ACGatherClearStrategy = /** @class */ (function () {
    function ACGatherClearStrategy() {
    }
    ACGatherClearStrategy.prototype.getName = function () {
        return "ACGatherClearStrategy";
    };
    ACGatherClearStrategy.prototype._reparentKeepWorld = function (e, t) {
        if (cc.isValid(e) && cc.isValid(t)) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
            e.removeFromParent(false);
            e.parent = t;
            e.setPosition(n.x, n.y, e.position.z);
        }
    };
    ACGatherClearStrategy.prototype.play = function (e, t) {
        var o, r, p, f, d, h, y, m, v, g, _, T, C, b = t.effectNode, E = [], S = [];
        try {
            for (var I = __values(e), w = I.next(); !w.done; w = I.next()) {
                var B = w.value, x = t.getTileNode(B);
                if (x) {
                    var M = x.cardNode;
                    if (M && cc.isValid(M)) {
                        var O = t.getTileNodePos(B);
                        O && S.push({
                            id: B,
                            tileObj: x,
                            cardNode: M,
                            localPos: cc.v2(O.x, O.y)
                        });
                    }
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                w && !w.done && (r = I.return) && r.call(I);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var D = null !== (h = null === (d = t.getReferenceBoardCardNode) || void 0 === d ? void 0 : d.call(t)) && void 0 !== h ? h : null;
        try {
            for (var P = __values(S), A = P.next(); !A.done; A = P.next()) {
                var R = A.value;
                if (null === (v = null === (m = null === (y = R.tileObj) || void 0 === y ? void 0 : y.tileObject) || void 0 === m ? void 0 : m.getIsInSlotBar) || void 0 === v ? void 0 : v.call(m)) {
                    var N = null === (T = null === (_ = null === (g = R.tileObj) || void 0 === g ? void 0 : g.context) || void 0 === _ ? void 0 : _.gameView) || void 0 === T ? void 0 : T.nodeDragCardRoot;
                    N && cc.isValid(N) && this._reparentKeepWorld(R.cardNode, N);
                    IAllClearStrategy_1.applyAllClearSlotCardNodeScaleToBoard(R.cardNode, R.cardNode, D);
                }
            }
        }
        catch (e) {
            p = {
                error: e
            };
        }
        finally {
            try {
                A && !A.done && (f = P.return) && f.call(P);
            }
            finally {
                if (p)
                    throw p.error;
            }
        }
        var j = function j() {
            S.forEach(function (e) {
                return t.removeTileNode(e.id);
            });
            E.forEach(function (e) {
                cc.isValid(e) && e.destroy();
            });
            t.onComplete();
        };
        if (0 !== S.length) {
            var k = null !== (C = t.beamOriginWorld) && void 0 !== C ? C : cc.v2(0.5 * cc.winSize.width, 0.88 * cc.winSize.height), L = b.convertToNodeSpaceAR(k), G = S.slice(0, 15), F = function F(e) {
                var t, o, n = e.tileObj, i = e.cardNode;
                if (cc.isValid(i)) {
                    var r = null == n ? void 0 : n.tileNode;
                    if (r && !r.getChildByName("glow")) {
                        try {
                            null === (t = null == n ? void 0 : n.showSelectEffect) || void 0 === t || t.call(n);
                            null === (o = null == n ? void 0 : n.playSelectAnimation) || void 0 === o || o.call(n, function () { });
                        }
                        catch (e) {
                            console.error("[ACGatherClearStrategy] applySelectEffect 异常: " + e);
                        }
                        var l = r.getChildByName("imgLockBg");
                        l && (l.active = false);
                        var s = BaseSpine_1.default.create("spine/gameplay_majong_glow", "in", 1, null, false, "r_gatherClear");
                        s.node.name = "glow";
                        s.node.parent = r;
                        s.node.setPosition(0, 0);
                        E.push(s.node);
                    }
                }
            }, V = function V(e, t, o, n, i) {
                if (e) {
                    var r = cc.instantiate(e);
                    E.push(r);
                    r.parent = b;
                    r.setPosition(t.x, t.y);
                    r.angle = 180 * Math.atan2(o.y - t.y, o.x - t.x) / Math.PI - 90;
                    var a = r.getComponentsInChildren(cc.ParticleSystem);
                    a.forEach(function (e) {
                        e.positionType = cc.ParticleSystem.PositionType.FREE;
                        e.resetSystem();
                    });
                    cc.tween(r).to(n, {
                        position: cc.v3(o.x, o.y, 0)
                    }, {
                        easing: "cubicIn"
                    }).call(function () {
                        a.forEach(function (e) {
                            return e.stopSystem();
                        });
                        i();
                    }).delay(0.25).call(function () {
                        cc.isValid(r) && r.destroy();
                    }).start();
                }
                else
                    i();
            }, U = function U(e) {
                return new Promise(function (t) {
                    var o = [];
                    S.forEach(function (e) {
                        cc.isValid(e.cardNode) && o.push(e);
                    });
                    var n = o.length;
                    if (0 !== n) {
                        var i = cc.v3(e.x, e.y, 0), r = 0;
                        o.forEach(function (o) {
                            var a = o.tileObj, l = o.cardNode, s = o.localPos, c = null == a ? void 0 : a.shadowCardNode;
                            c && cc.isValid(c) && (c.active = false);
                            l.removeFromParent();
                            l.parent = b;
                            l.setPosition(s.x, s.y, 0);
                            var u = s.x - e.x, p = s.y - e.y, f = Math.sqrt(u * u + p * p) || 1, d = cc.v3(s.x + u / f * 50, s.y + p / f * 50, 0);
                            cc.tween(l).to(0.13, {
                                position: d
                            }, {
                                easing: "cubicOut"
                            }).to(0.2, {
                                position: i,
                                scale: 0.2
                            }, {
                                easing: "cubicIn"
                            }).call(function () {
                                l.active = false;
                                ++r >= n && t();
                            }).start();
                        });
                        var a = new cc.Node("__acgc_gs__");
                        a.parent = b;
                        E.push(a);
                        cc.tween(a).delay(1.33).call(function () {
                            if (r < n) {
                                o.forEach(function (e) {
                                    var t = e.cardNode;
                                    cc.isValid(t) && (t.active = false);
                                });
                                t();
                            }
                        }).start();
                    }
                    else
                        t();
                });
            }, H = function H() {
                var e = "";
                try {
                    var t = UserModel_1.default.getInstance().getCurrentGameData().getCardMaterialID();
                    if (t) {
                        var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, t);
                        o && o.Color && (e = o.Color);
                    }
                }
                catch (e) { }
                var n = new cc.Color();
                n.fromHEX("#" + (u[e] || "FEEDC4"));
                return n;
            }, W = function W(e, t, o) {
                return new Promise(function (n) {
                    var i = b.convertToNodeSpaceAR(t), r = false, l = function l() {
                        if (!r) {
                            r = true;
                            n();
                        }
                    }, s = BaseSpine_1.default.create(e, "in", 1, function () {
                        return l();
                    }, true, "r_gatherClear");
                    s.node.parent = b;
                    s.node.setPosition(i.x, i.y);
                    o && (s.node.color = o);
                    E.push(s.node);
                    var c = new cc.Node("__acgc_es__");
                    c.parent = b;
                    E.push(c);
                    cc.tween(c).delay(3).call(l).start();
                });
            }, z = cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height), Y = b.convertToNodeSpaceAR(z);
            t.loadRes("effect/eff/gatherClearEff", cc.Prefab, "r_gatherClear").then(function (e) {
                return t = e, new Promise(function (e) {
                    var o = G.length;
                    if (0 !== o) {
                        for (var n = 0, i = Math.min(3, Math.max(0.5, 0.1 * o)), r = [], a = 0; a < o; a++) {
                            var l = 1 - (o > 1 ? a / (o - 1) : 0), s = (1 - l * l) * i;
                            a > 0 && s - r[a - 1] < 0.1 && (s = r[a - 1] + 0.1);
                            r.push(s);
                        }
                        var c = function c(i) {
                            var a = G[i], l = a.localPos, s = 0.3 - (o > 1 ? i / (o - 1) : 1) * 0.12999999999999998, c = new cc.Node("__acgc_bd__");
                            c.parent = b;
                            E.push(c);
                            cc.tween(c).delay(r[i]).call(function () {
                                V(t, L, l, s, function () {
                                    F(a);
                                    cc.isValid(a.cardNode) && cc.tween(a.cardNode).to(0.1, {
                                        scale: 1.15
                                    }).to(0.1, {
                                        scale: 1
                                    }).start();
                                    ++n >= o && e();
                                });
                            }).start();
                        };
                        for (a = 0; a < o; a++)
                            c(a);
                        var u = new cc.Node("__acgc_bs__");
                        u.parent = b;
                        E.push(u);
                        cc.tween(u).delay(i + 0.3 + 0.5 + 1).call(function () {
                            n < o && e();
                        }).start();
                    }
                    else
                        e();
                });
                var t;
            }).then(function () {
                S.forEach(function (e) {
                    if (cc.isValid(e.cardNode)) {
                        F(e);
                        cc.tween(e.cardNode).to(0.12, {
                            scale: 1.12
                        }).to(0.1, {
                            scale: 1
                        }).start();
                    }
                });
                return 0.4, new Promise(function (e) {
                    var t = new cc.Node("__acgc_delay__");
                    t.parent = b;
                    E.push(t);
                    cc.tween(t).delay(0.4).call(function () {
                        return e();
                    }).start();
                });
            }).then(function () {
                return U(Y);
            }).then(function () {
                return Promise.all([W("spine/gameplay_Explosion_eff", z), W("spine/gameplay_Explosion_lizi", z, H())]);
            }).then(function () {
                return j();
            }).catch(function (e) {
                console.error("[ACGatherClearStrategy] 动画异常: " + e);
                j();
            });
        }
        else
            j();
    };
    return ACGatherClearStrategy;
}());
exports.ACGatherClearStrategy = ACGatherClearStrategy;
AllClearStrategyRegistry_1.AllClearStrategyRegistry.register(8, new ACGatherClearStrategy());

cc._RF.pop();