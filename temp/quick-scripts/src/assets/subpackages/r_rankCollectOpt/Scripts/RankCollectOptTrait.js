"use strict";
cc._RF.push(module, '94427D2L5pPk4vOIm4zNcJg', 'RankCollectOptTrait');
// subpackages/r_rankCollectOpt/Scripts/RankCollectOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
function u(e, t, a, r) {
    var i = 1 - 3 * a + 3 * e, n = 3 * a - 6 * e, c = 3 * e, o = 1 - 3 * r + 3 * t, l = 3 * r - 6 * t, s = 3 * t;
    function f(e) {
        return ((i * e + n) * e + c) * e;
    }
    function d(e) {
        return (3 * i * e + 2 * n) * e + c;
    }
    function u(e) {
        for (var t = e, a = 0; a < 8; a++) {
            var r = f(t) - e;
            if (Math.abs(r) < 1e-7)
                return t;
            var i = d(t);
            if (Math.abs(i) < 1e-7)
                break;
            t -= r / i;
        }
        var n = 0, c = 1;
        t = e;
        for (a = 0; a < 20; a++) {
            var o = f(t);
            if (Math.abs(o - e) < 1e-7)
                return t;
            if (e > o) {
                n = t;
            }
            else {
                c = t;
            }
            t = 0.5 * (n + c);
        }
        return t;
    }
    return function (e) {
        return e <= 0 ? 0 : e >= 1 ? 1 : (t = u(e), ((o * t + l) * t + s) * t);
        var t;
    };
}
var p = u(0.25, 0, 0.25, 1);
var y = u(0.42, 0, 0.77, 0.27);
var v = u(0.22, 0.62, 0.25, 0.9);
var g = u(0.55, 0, 0.75, 0.4);
var h = u(0.85, 0, 0.92, 0.34);
var m = u(0.22, 0.63, 0.2, 0.9);
var RankCollectOptTrait = /** @class */ (function (_super) {
    __extends(RankCollectOptTrait, _super);
    function RankCollectOptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankCollectCard = null;
        _this._arrivedAnimPlaying = false;
        return _this;
    }
    RankCollectOptTrait_1 = RankCollectOptTrait;
    RankCollectOptTrait.prototype.onRkSpCardTrait_showColEff = function (e, t) {
        var r = e.args[0], i = e.args[1], n = e.args[2], c = e.args[3], o = e.ins;
        this._rankCollectCard = o._rankCollectCard;
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
        try {
            this.startCollectAnim(r, i, n, c);
        }
        catch (e) {
            console.error("[" + RankCollectOptTrait_1.traitKey + "] 创建优化特效失败: " + e.message);
        }
    };
    RankCollectOptTrait.prototype.startCollectAnim = function (e, t, a, r) {
        var i = this, n = r.gameView;
        if (cc.isValid(n) && cc.isValid(n.nodeTopEffectRoot)) {
            var c = n.nodeTopEffectRoot, o = mj.getClassByName("RankSpecialCardEffect");
            o && o.createUI(o.getUrl()).then(function (t) {
                var r;
                if (t && cc.isValid(c)) {
                    var n = cc.instantiate(t);
                    c.addChild(n);
                    var o = c.convertToNodeSpaceAR(e);
                    n.setPosition(o.x, o.y);
                    var l = cc.find("card_0", n), s = cc.find("card_1", n), f = null === (r = n.getChildByName("sp_collision")) || void 0 === r ? void 0 : r.getComponent(sp.Skeleton);
                    i.initCards(l, s, a, n);
                    i.refreshCardImages(l, s);
                    if (cc.isValid(i._rankCollectCard) && cc.isValid(i._rankCollectCard.node)) {
                        var d = i._rankCollectCard.node, u = d.parent.convertToWorldSpaceAR(d.position), p = n.convertToNodeSpaceAR(u), y = e.y < cc.winSize.height / 2;
                        i.runSequence(l, s, f, n, p, y);
                    }
                }
            });
        }
    };
    RankCollectOptTrait.prototype.initCards = function (e, t, a, r) {
        if (a && a.length >= 2) {
            var i = a[0].x > a[1].x, n = i ? a[1] : a[0], c = i ? a[0] : a[1], o = r.x, l = r.y;
            e.setPosition(n.x - o, n.y - l);
            t.setPosition(c.x - o, c.y - l);
        }
        else {
            e.setPosition(-80, 0);
            t.setPosition(80, 0);
        }
        [e, t].forEach(function (e) {
            e.scaleX = 1;
            e.scaleY = 1;
            e.angle = 0;
            e.active = true;
            var t = e.getChildByName("sp_light");
            t && (t.active = false);
        });
    };
    RankCollectOptTrait.prototype.refreshCardImages = function (e, t) {
        [e, t].forEach(function (e) {
            var t = e.getChildByName("content");
            if (t) {
                var a = t.getChildByName("card_bg");
                if (null == a ? void 0 : a.activeInHierarchy) {
                    var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2");
                    BaseSprite_1.default.refreshWithNode(a, r.path, r.fromAtlas, false, r.bundleName);
                }
                var i = t.getChildByName("card");
                if (null == i ? void 0 : i.activeInHierarchy) {
                    var n = UserModel_1.default.getInstance().getRankCardResName();
                    r = CardUtil_1.default.getAtlasPathAndBundleName(n);
                    BaseSprite_1.default.refreshWithNode(i, r.path, r.fromAtlas, false, r.bundleName);
                }
            }
        });
    };
    RankCollectOptTrait.prototype.runSequence = function (e, t, a, r, i, n) {
        var c = this;
        this.phase3Deformation(e, t, a).then(function () {
            if (cc.isValid(r))
                return c.phase4Collection(e, t, r, i, n);
        }).then(function () {
            cc.isValid(r) && r.destroy();
        });
    };
    RankCollectOptTrait.prototype.phase1Separation = function (e, t) {
        return new Promise(function (a) {
            if (cc.isValid(e) && cc.isValid(t)) {
                var r = (e.y + t.y) / 2, i = 0, n = function n() {
                    ++i >= 2 && a();
                };
                cc.tween(e).to(0.267, {
                    x: e.x - 150,
                    y: r
                }, {
                    easing: p
                }).call(n).start();
                cc.tween(t).to(0.267, {
                    x: t.x + 150,
                    y: r
                }, {
                    easing: p
                }).call(n).start();
            }
            else
                a();
        });
    };
    RankCollectOptTrait.prototype.phase2Collision = function (e, t) {
        return new Promise(function (a) {
            if (cc.isValid(e) && cc.isValid(t)) {
                var r = 0, i = function i() {
                    ++r >= 2 && a();
                };
                cc.tween(e).to(0.1, {
                    x: -70
                }, {
                    easing: y
                }).call(i).start();
                cc.tween(t).to(0.1, {
                    x: 70
                }, {
                    easing: y
                }).call(i).start();
            }
            else
                a();
        });
    };
    RankCollectOptTrait.prototype.phase3Deformation = function (e, t, a) {
        return new Promise(function (r) {
            if (cc.isValid(e) && cc.isValid(t)) {
                var i = 0, n = function n() {
                    if (!(++i < 2)) {
                        if (cc.isValid(a)) {
                            a.node.active = true;
                            a.setAnimation(0, "in", false);
                        }
                        cc.tween(e).to(0.033, {
                            scaleX: 1,
                            scaleY: 1
                        }).start();
                        cc.tween(t).to(0.033, {
                            scaleX: 1,
                            scaleY: 1
                        }).start();
                        var n = 0, c = function c() {
                            ++n >= 2 && r();
                        };
                        cc.tween(e).to(0.2, {
                            x: -125
                        }, {
                            easing: m
                        }).call(c).start();
                        cc.tween(t).to(0.2, {
                            x: 125
                        }, {
                            easing: m
                        }).call(c).start();
                    }
                };
                cc.tween(e).to(0.033, {
                    x: -45,
                    scaleX: 0.64,
                    scaleY: 1.26
                }, {
                    easing: v
                }).call(n).start();
                cc.tween(t).to(0.033, {
                    x: 45,
                    scaleX: 0.64,
                    scaleY: 1.26
                }, {
                    easing: v
                }).call(n).start();
            }
            else
                r();
        });
    };
    RankCollectOptTrait.prototype.phase4Collection = function (e, t, a, r, i) {
        var n = this;
        return new Promise(function (c) {
            if (cc.isValid(e) && cc.isValid(t)) {
                n._arrivedAnimPlaying = false;
                var o = i ? 0.6 : 0.467, l = cc.v2(r.x, r.y), s = 0, f = function f() {
                    n.triggerCardArrived();
                    mj.audioManager.playEffect(46);
                    ++s >= 2 && c();
                };
                n.flyCardToTarget(a, 1, l, o, 0, f);
                n.flyCardToTarget(a, 0, l, o, 0.067, f);
            }
            else
                c();
        });
    };
    RankCollectOptTrait.prototype.flyCardToTarget = function (e, t, a, r, i, n) {
        var c = e.getComponent("RankSpecialCardEffect"), o = c["_card" + t], l = c["_cardContent" + t], s = c["_spLight" + t];
        if (cc.isValid(o)) {
            cc.tween(o).delay(i).to(r, {
                x: a.x,
                y: a.y
            }, {
                easing: g
            }).call(function () {
                l.active = false;
                s.node.active = true;
                mj.audioManager.playEffect(46);
                CommonUtils_1.playSpineAnim(s, 1, "in", function () {
                    s && (s.node.active = false);
                });
                n();
            }).start();
            cc.tween(o).delay(i).to(r, {
                scaleX: 0.47,
                scaleY: 0.47
            }, {
                easing: h
            }).start();
            var d = r - 0.1;
            d > 0 && cc.tween(o).delay(i + 0.1).to(d, {
                angle: -39
            }).start();
        }
        else
            n();
    };
    RankCollectOptTrait.prototype.triggerCardArrived = function () {
        var e = this;
        if (cc.isValid(this._rankCollectCard) && !this._arrivedAnimPlaying) {
            this._arrivedAnimPlaying = true;
            var t = this._rankCollectCard, a = t.node, r = t._cardNode, i = t.lab_count, n = t.bg, c = BaseSpine_1.default.create("spine/gameplay_light_goal", "in", -1, null, true, "r_rankCollectOpt");
            c.node.parent = n;
            c.node.position = cc.v3(0, 0, 0);
            c.node.setSiblingIndex(0);
            if (cc.isValid(r) && cc.isValid(i)) {
                cc.Tween.stopAllByTarget(r);
                cc.Tween.stopAllByTarget(i);
                var o = function o() {
                    if (cc.isValid(t.node)) {
                        t._currentCount++;
                        t.updateCount(t._currentCount);
                    }
                }, l = function l() {
                    if (cc.isValid(a) && !e._arrivedAnimPlaying) {
                        cc.Tween.stopAllByTarget(a);
                        cc.tween(a).delay(0.3).to(0.1, {
                            scale: 0.6,
                            opacity: 0
                        }).call(function () {
                            cc.isValid(a) && (a.active = false);
                        }).start();
                    }
                };
                cc.tween(r).to(0.033, {
                    scaleX: 1.8,
                    scaleY: 1.8
                }).to(0.034, {
                    scaleX: 1.1,
                    scaleY: 1.1
                }).to(0.033, {
                    scaleX: 1.8,
                    scaleY: 1.8
                }).to(0.167, {
                    scaleX: 1,
                    scaleY: 1
                }).call(function () {
                    e._arrivedAnimPlaying = false;
                    l();
                }).start();
                cc.tween(i).to(0.033, {
                    scaleX: 3,
                    scaleY: 3
                }).call(o).to(0.034, {
                    scaleX: 2,
                    scaleY: 2
                }).to(0.033, {
                    scaleX: 3,
                    scaleY: 3
                }).call(o).to(0.167, {
                    scaleX: 1,
                    scaleY: 1
                }).start();
            }
            else
                this._arrivedAnimPlaying = false;
        }
    };
    var RankCollectOptTrait_1;
    RankCollectOptTrait.traitKey = "RankCollectOpt";
    RankCollectOptTrait.BUNDLE_NAME = "r_rankCollectOpt";
    RankCollectOptTrait = RankCollectOptTrait_1 = __decorate([
        mj.trait,
        mj.class("RankCollectOptTrait")
    ], RankCollectOptTrait);
    return RankCollectOptTrait;
}(Trait_1.default));
exports.default = RankCollectOptTrait;

cc._RF.pop();