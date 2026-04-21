"use strict";
cc._RF.push(module, '2fd3duARYdJsrwTRydCXEJC', 'RankSpecialCardEffect');
// subpackages/l_rank/Scripts/util/RankSpecialCardEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../../Scripts/framework/utils/CommonUtils");
var RankModel_1 = require("../RankModel");
var RankEnums_1 = require("./RankEnums");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var RankSpecialCardEffect = /** @class */ (function (_super) {
    __extends(RankSpecialCardEffect, _super);
    function RankSpecialCardEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp_collision = null;
        _this._card0 = null;
        _this._cardContent0 = null;
        _this._card1 = null;
        _this._cardContent1 = null;
        _this._spLight0 = null;
        _this._spLight1 = null;
        _this._card0Position = cc.v2(0, 0);
        return _this;
    }
    RankSpecialCardEffect.getUrl = function () {
        return this.prefabUrl;
    };
    RankSpecialCardEffect.prototype.onLoad = function () {
        var e, o, n, a, i, r, s, l, c;
        _super.prototype.onLoad.call(this);
        this.sp_collision = null === (e = this.node.getChildByName("sp_collision")) || void 0 === e ? void 0 : e.getComponent(sp.Skeleton);
        this._card0 = cc.find("card_0", this.node);
        this._cardContent0 = null === (o = this._card0) || void 0 === o ? void 0 : o.getChildByName("content");
        this._spLight0 = null === (a = null === (n = this._card0) || void 0 === n ? void 0 : n.getChildByName("sp_light")) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton);
        this._spLight0 && (this._spLight0.node.active = false);
        this._card1 = cc.find("card_1", this.node);
        this._cardContent1 = null === (i = this._card1) || void 0 === i ? void 0 : i.getChildByName("content");
        this._spLight1 = null === (s = null === (r = this._card1) || void 0 === r ? void 0 : r.getChildByName("sp_light")) || void 0 === s ? void 0 : s.getComponent(sp.Skeleton);
        this._spLight1 && (this._spLight1.node.active = false);
        this._card0Position = (null === (c = null === (l = this._card0) || void 0 === l ? void 0 : l.getPosition()) || void 0 === c ? void 0 : c.clone()) || cc.v2(0, 0);
    };
    RankSpecialCardEffect.prototype.playEffect = function (t, e, o, n) {
        if (e === void 0) { e = false; }
        var a;
        if (this._card0 && this._card1) {
            this.removeGameplayPrefix(null === (a = RankModel_1.default.getInstance().getCurBoardData()) || void 0 === a ? void 0 : a.CollectThing);
            try {
                if (!o || !cc.isValid(o) || !o.parent) {
                    n && n();
                    return;
                }
                var i = o.parent.convertToWorldSpaceAR(o.position), r = this.node.convertToNodeSpaceAR(i), s = cc.v2(r.x, r.y);
                Promise.all([this.playCardFlySequence(e, this._card1, this._cardContent1, this._spLight1, s, o, 0), this.playCardFlySequence(e, this._card0, this._cardContent0, this._spLight0, s, o, 0.2)]).then(function () {
                    n && n();
                });
            }
            catch (t) {
                console.error("[RankSpecialCardEffect] 播放特效失败: " + t.message);
                n && n();
            }
        }
        else
            n && n();
    };
    RankSpecialCardEffect.prototype.updatePos = function (t) {
        if (this._card0 && this._card1)
            if (!t || t.length < 2) {
                this._card0.setPosition(cc.v2(-80, 0));
                this._card1.setPosition(cc.v2(80, 0));
            }
            else {
                var e = t[0].x > t[1].x, o = e ? t[0] : t[1], n = e ? t[1] : t[0], a = cc.v2(this.node.x, this.node.y), i = this.convertToLocalPos(n, this.node, a);
                this._card0.setPosition(i);
                var r = this.convertToLocalPos(o, this.node, a);
                this._card1.setPosition(r);
            }
    };
    RankSpecialCardEffect.prototype.convertToLocalPos = function (t, e, o) {
        var n = this.node.convertToWorldSpaceAR(cc.v2(t.x, t.y)), a = e.convertToNodeSpaceAR(n);
        return cc.v2(a.x - o.x, a.y - o.y);
    };
    RankSpecialCardEffect.prototype.refreshCards = function () {
        var t = this;
        return new Promise(function (e) {
            var o, n, a, i;
            if (t._card0 && t._card1 && t._cardContent0 && t._cardContent1 && t._spLight0 && t._spLight1) {
                t._card0.scale = 1;
                t._card0.active = true;
                t.upSprites(null === (o = t._cardContent0) || void 0 === o ? void 0 : o.getChildByName("card_bg"), null === (n = t._cardContent0) || void 0 === n ? void 0 : n.getChildByName("card"));
                t._spLight0.node.active = false;
                t._card1.scale = 1;
                t._card1.active = true;
                t.upSprites(null === (a = t._cardContent1) || void 0 === a ? void 0 : a.getChildByName("card_bg"), null === (i = t._cardContent1) || void 0 === i ? void 0 : i.getChildByName("card"));
                t._spLight1.node.active = false;
                e();
            }
            else
                e();
        });
    };
    RankSpecialCardEffect.prototype.upSprites = function (t, e) {
        var o, n;
        if (null === (n = null === (o = RankModel_1.default.getInstance()) || void 0 === o ? void 0 : o.getCurBoardData()) || void 0 === n ? void 0 : n.CollectThing) {
            if (null == t ? void 0 : t.activeInHierarchy) {
                var a = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), i = a.path, r = a.bundleName, s = a.fromAtlas;
                BaseSprite_1.default.refreshWithNode(t, i, s, false, r);
            }
            (null == e ? void 0 : e.activeInHierarchy) && this.updateImgCard(e);
        }
    };
    RankSpecialCardEffect.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankSpecialCardEffect.prototype.resetCardPositions = function () {
        if (this._card0Position) {
            this._card0 && this._card0.setPosition(this._card0Position);
            this._card1 && this._card1.setPosition(-this._card0Position.x, this._card0Position.y);
        }
    };
    RankSpecialCardEffect.prototype.playCollisionAndSeparation = function () {
        var t = this;
        return new Promise(function (e) {
            if (t._card0 && t._card1 && t.sp_collision) {
                t.playRankCardClearEffect();
                var o = t._card0.x, n = t._card1.x;
                cc.tween(t._card0).to(0.3, {
                    position: cc.v3(o - 100, t._card0.y, 0)
                }).start();
                cc.tween(t._card1).to(0.3, {
                    position: cc.v3(n + 100, t._card1.y, 0)
                }).call(function () {
                    e();
                }).start();
            }
            else
                e();
        });
    };
    RankSpecialCardEffect.prototype.playRankCardClearEffect = function () {
        if (cc.isValid(this.sp_collision)) {
            this.sp_collision.node.active = true;
            CommonUtils_1.playSpineAnim(this.sp_collision, 1, "in", function () { });
        }
    };
    RankSpecialCardEffect.prototype.playCardFlySequence = function (t, e, o, n, a, i, r) {
        var l = this;
        return new Promise(function (c) {
            try {
                if (!(e && cc.isValid(e) && o && cc.isValid(o))) {
                    l.onFlyEnd(i);
                    c();
                    return;
                }
                l._card0;
                var d = e.getPosition(), p = 100 * Math.cos(-45 * Math.PI / 180), u = 100 * Math.sin(-45 * Math.PI / 180), h = cc.v3(d.x + p, d.y + u, 0), f = d.x + 0.2 * (h.x - d.x), m = d.y + 0.3 * (h.y - d.y), _ = cc.v2(f, m), y = d.x + 0.5 * (h.x - d.x), g = d.y + 0.85 * (h.y - d.y), v = cc.v2(y, g), k = cc.v2(h.x, h.y), C = h.x + 0.25 * (a.x - h.x), R = h.y + 0.15 * (a.y - h.y), b = cc.v2(C, R), w = h.x + 0.7 * (a.x - h.x), B = h.y + 0.6 * (a.y - h.y), S = cc.v2(w, B), I = cc.v2(a.x, a.y);
                r += t ? 0.2 : 0.6;
                var N = l.onFlyEnd.bind(l);
                cc.tween(e).delay(r).bezierTo(0.15, _, v, k).call(function () { }).bezierTo(0.3, b, S, I).call(function () {
                    if (o && cc.isValid(o) && n && cc.isValid(n)) {
                        o.active = false;
                        n.node.active = true;
                        l.playCollectEffect();
                        CommonUtils_1.playSpineAnim(n, 1, "in", function () {
                            n && (n.node.active = false);
                            c();
                        });
                        N(i);
                    }
                    else {
                        N(i);
                        c();
                    }
                }).start();
            }
            catch (t) {
                console.error("[RankSpecialCardEffect] " + (e === l._card0 ? "card_0" : "card_1") + " 飞行序列失败: " + t.message);
                c();
            }
        });
    };
    RankSpecialCardEffect.prototype.playCollectEffect = function () {
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Collect2);
    };
    RankSpecialCardEffect.prototype.onFlyEnd = function (t) {
        if (cc.isValid(t)) {
            var e = t.getComponent("RankCollectCard");
            e && "function" == typeof e.onCardArrived && e.onCardArrived();
        }
    };
    RankSpecialCardEffect.prototype.removeGameplayPrefix = function (t) {
        return t && t.startsWith("gameplay_special_") ? t.substring("gameplay_special_".length) : t;
    };
    RankSpecialCardEffect.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this._card0 = null;
        this._cardContent0 = null;
        this._card1 = null;
        this._cardContent1 = null;
        this._spLight0 = null;
        this._spLight1 = null;
        this.sp_collision = null;
    };
    RankSpecialCardEffect.prefabUrl = "prefabs/rank/RankSpecialCardEffect";
    __decorate([
        mj.traitEvent("RankSpCardEff_upSprites")
    ], RankSpecialCardEffect.prototype, "upSprites", null);
    __decorate([
        mj.traitEvent("RankSpCardEff_updImgCard")
    ], RankSpecialCardEffect.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankSpCardEff_clearEff")
    ], RankSpecialCardEffect.prototype, "playRankCardClearEffect", null);
    __decorate([
        mj.traitEvent("RankSpCardEff_colEff")
    ], RankSpecialCardEffect.prototype, "playCollectEffect", null);
    __decorate([
        mj.traitEvent("RankSpCardEff_getUrl")
    ], RankSpecialCardEffect, "getUrl", null);
    RankSpecialCardEffect = __decorate([
        mj.class
    ], RankSpecialCardEffect);
    return RankSpecialCardEffect;
}(BaseUI_1.default));
exports.default = RankSpecialCardEffect;

cc._RF.pop();