"use strict";
cc._RF.push(module, '2e104DcnGlMerP1EYS/+Chj', 'RankSpecialCardTrait');
// subpackages/l_rankSpecialCard/Scripts/RankSpecialCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankSpecialCardTrait = /** @class */ (function (_super) {
    __extends(RankSpecialCardTrait, _super);
    function RankSpecialCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankCollectCard = null;
        return _this;
    }
    RankSpecialCardTrait_1 = RankSpecialCardTrait;
    RankSpecialCardTrait.prototype.onRankColCard_initUI = function (t, e) {
        this._rankCollectCard = t.ins;
        e();
    };
    RankSpecialCardTrait.prototype.onRankColCard_clearNode = function (t, e) {
        this._rankCollectCard = null;
        e();
    };
    RankSpecialCardTrait.prototype.onRankTrait_chkSpCard = function (t, e) {
        var r, o, n = Array.isArray(null === (r = t.args) || void 0 === r ? void 0 : r[0]) ? t.args[0] : [], i = null === (o = t.args) || void 0 === o ? void 0 : o[1];
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
        this.checkSpecialCard(n, i);
    };
    RankSpecialCardTrait.prototype.checkRankColCardValid = function () {
        return this._rankCollectCard && cc.isValid(this._rankCollectCard.node);
    };
    RankSpecialCardTrait.prototype.showRankCollectCard = function () {
        if (!this.checkRankColCardValid())
            return false;
        if (this._rankCollectCard.node.active)
            return true;
        this._rankCollectCard.setVisible(true);
        "function" == typeof this._rankCollectCard.startShowAnimation && this._rankCollectCard.startShowAnimation();
        return true;
    };
    RankSpecialCardTrait.prototype.isSpecialCard = function (t) {
        var e, r, o = null === (e = t.args) || void 0 === e ? void 0 : e[0], n = null === (r = t.args) || void 0 === r ? void 0 : r[1];
        if (!o || !n)
            return false;
        var i = t.ins.context.getTileNodeMap(), a = null == i ? void 0 : i.get(o);
        return !!(a && a.info && a.info.tileObject) && !!(a.info.tileObject.type == TileTypeEnum_1.ETileType.RankCard);
    };
    RankSpecialCardTrait.prototype.getRankModel = function () {
        var t = mj.getClassByName("RankModel");
        return t ? t.getInstance() : null;
    };
    RankSpecialCardTrait.prototype.onClearEffBhv_playCollision = function (t, e) {
        var r = this.getRankModel();
        if (r) {
            if (r.hasOpeningActivity()) {
                if (this.isSpecialCard(t)) {
                    e({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                    var o = t.ins;
                    o && "function" == typeof o.finish && o.finish();
                    this.checkSpecialCard(null, o.context);
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    RankSpecialCardTrait.prototype.checkSpecialCard = function (t, e) {
        var r = this.getRankModel();
        if (r) {
            r.getLevelCollectCount();
            r.addLevelCollectCount(2);
            r.getLevelCollectCount();
            if (this.showRankCollectCard()) {
                "function" == typeof this._rankCollectCard.addPendingCard && this._rankCollectCard.addPendingCard(2);
                var o = e.getLastCollisionWorldPos();
                if (o) {
                    var n = this._rankCollectCard.getCardWorldPosition();
                    n && this.showColEff(o, n, t, e);
                }
            }
        }
    };
    RankSpecialCardTrait.prototype.showColEff = function (t, e, o, n) {
        var i = this;
        try {
            var a = n.gameView;
            if (!cc.isValid(a) || !cc.isValid(a.nodeTopEffectRoot))
                return;
            var l = mj.getClassByName("RankSpecialCardEffect");
            if (!l)
                return;
            l.createUI(l.getUrl()).then(function (r) {
                var n, l;
                if (cc.isValid(r))
                    if (a && cc.isValid(a.nodeTopEffectRoot) && (null === (l = null === (n = i._rankCollectCard) || void 0 === n ? void 0 : n.node) || void 0 === l ? void 0 : l.activeInHierarchy)) {
                        a.nodeTopEffectRoot.addChild(r);
                        var c = a.nodeTopEffectRoot.convertToNodeSpaceAR(t);
                        r.position = cc.v3(c.x, c.y, 0);
                        var s = r.getComponent("RankSpecialCardEffect"), d = true;
                        if (s && o && o.length >= 2) {
                            s.updatePos(o);
                            d = false;
                        }
                        s.refreshCards().then(function () {
                            if (d) {
                                null == s || s.resetCardPositions();
                                null == s || s.playCollisionAndSeparation();
                            }
                        }).then(function () {
                            var t, o;
                            if (null === (o = null === (t = i._rankCollectCard) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.activeInHierarchy) {
                                null == s || s.playEffect(e, d, i._rankCollectCard.node, function () {
                                    cc.isValid(r) && r.destroy();
                                });
                            }
                            else {
                                null == r || r.destroy();
                            }
                        });
                    }
                    else
                        r.destroy();
            });
        }
        catch (t) {
            console.error("[" + RankSpecialCardTrait_1.traitKey + "] 创建特效失败: " + t.message);
        }
    };
    var RankSpecialCardTrait_1;
    RankSpecialCardTrait.traitKey = "RankSpecialCard";
    __decorate([
        mj.traitEvent("RkSpCardTrait_showColEff")
    ], RankSpecialCardTrait.prototype, "showColEff", null);
    RankSpecialCardTrait = RankSpecialCardTrait_1 = __decorate([
        mj.trait,
        mj.class("RankSpecialCardTrait")
    ], RankSpecialCardTrait);
    return RankSpecialCardTrait;
}(Trait_1.default));
exports.default = RankSpecialCardTrait;

cc._RF.pop();