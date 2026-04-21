"use strict";
cc._RF.push(module, 'c5b3f14YApGV6mnszb//Z+Y', 'MatchDownTrait');
// subpackages/l_matchDown/Scripts/MatchDownTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MatchDownLabel_1 = require("./MatchDownLabel");
var p = ["levelDesc", "labelMatch", "lblDate", "labelLevel", "labelCanMatchNum", "nodeScore/label", "btnBack", "lblDateDesc"];
var d = new cc.Vec2(0, -112);
var MatchDownTrait = /** @class */ (function (_super) {
    __extends(MatchDownTrait, _super);
    function MatchDownTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchDownTrait.prototype.isSupportedGameType = function (e) {
        var t, o;
        return -1 !== (null !== (o = null === (t = this.traitData) || void 0 === t ? void 0 : t.gameType) && void 0 !== o ? o : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.DailyChallenge]).indexOf(e);
    };
    MatchDownTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var o = e.ins;
        if (this.isSupportedGameType(o.gameType)) {
            o.addPreloadRes("Prefab", ["l_matchDown:prefabs/matchDown"]);
            t();
        }
        else
            t();
    };
    MatchDownTrait.prototype.onMainGmVw_initCntBlockNode = function (e, t) {
        var o = e.ins;
        if (this.isSupportedGameType(o.gameType)) {
            this.hideNodes(o.topRootNode);
            this.scaleScore(o.topRootNode);
            this.createMatchDownLabel(o);
            t();
        }
        else
            t();
    };
    MatchDownTrait.prototype.createMatchDownLabel = function (e) {
        if (cc.isValid(e) && cc.isValid(e.bottomRootNode)) {
            var t = e.createUISync(MatchDownLabel_1.default);
            if (cc.isValid(t)) {
                t.setPosition(d);
                t.name = "MatchDownLabel";
                e.bottomRootNode.addChild(t);
                var o = t.getComponent(MatchDownLabel_1.default);
                if (cc.isValid(o)) {
                    o.updateCount(0);
                    t.active = false;
                }
            }
        }
    };
    MatchDownTrait.prototype.onMGTxtShow_updateMatchHide = function (e, t) {
        var o = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isSupportedGameType(o)) {
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else {
            t();
        }
    };
    MatchDownTrait.prototype.onMGTxtShow_setNodeOpacity = function (e, t) {
        var o, a = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isSupportedGameType(a)) {
            var i = null === (o = e.args) || void 0 === o ? void 0 : o[0];
            if (-1 != p.indexOf(i)) {
                t({
                    returnType: TraitCallbackReturnType.jump
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    MatchDownTrait.prototype.hideNodes = function (e) {
        var t, o;
        if (cc.isValid(e))
            try {
                for (var a = __values(p), i = a.next(); !i.done; i = a.next()) {
                    var n = i.value, c = cc.find(n, e);
                    if (cc.isValid(c)) {
                        c.opacity = 0;
                        c.active = false;
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    i && !i.done && (o = a.return) && o.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
    };
    MatchDownTrait.prototype.scaleScore = function (e) {
        if (cc.isValid(e)) {
            var t = cc.find("nodeScore/scoreItem/lbl_normal", e);
            if (cc.isValid(t)) {
                var o = t.getComponent(cc.Label);
                if (o) {
                    o.fontSize = 66;
                    o.lineHeight = 70;
                }
            }
        }
    };
    MatchDownTrait.prototype.onUpdateMatchNumBhv_start = function (e, t) {
        var o, a, i, n, r, c = null === (o = e.ins.context) || void 0 === o ? void 0 : o.gameType;
        if (this.isSupportedGameType(c)) {
            var l = null === (a = e.args) || void 0 === a ? void 0 : a[0], s = null !== (n = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.canMatchCardPairNum) && void 0 !== n ? n : 0, p = null === (r = e.ins.context) || void 0 === r ? void 0 : r.gameView;
            if (cc.isValid(p) && cc.isValid(p.bottomRootNode)) {
                var d = p.bottomRootNode.getChildByName("MatchDownLabel");
                if (cc.isValid(d)) {
                    var f = d.getComponent(MatchDownLabel_1.default);
                    if (cc.isValid(f)) {
                        f.updateCount(s);
                        t();
                    }
                    else
                        t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    MatchDownTrait.prototype.onEnterAniBhv_startPlay = function (e, t) {
        var o, a, i = null === (o = e.ins.context) || void 0 === o ? void 0 : o.gameType;
        if (this.isSupportedGameType(i)) {
            var n = null === (a = e.ins.context) || void 0 === a ? void 0 : a.gameView;
            if (cc.isValid(n) && cc.isValid(n.bottomRootNode)) {
                var r = n.bottomRootNode.getChildByName("MatchDownLabel");
                if (cc.isValid(r)) {
                    r.active = true;
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    MatchDownTrait.prototype.onGmLtApt_getBtmNOffsetY = function (e, t) {
        var o = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isSupportedGameType(o)) {
            t({
                returnType: TraitCallbackReturnType.return,
                returnVal: 86
            });
        }
        else {
            t();
        }
    };
    MatchDownTrait.prototype.onGameUI_updateDCDate = function (e, t) {
        var o = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isSupportedGameType(o)) {
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else {
            t();
        }
    };
    MatchDownTrait.prototype.onRwdComboBhv_bonusAud = function (e, t) {
        var o, a, i = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isSupportedGameType(i)) {
            this.hideMatchNum(null === (a = null === (o = e.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameView);
            t();
        }
        else
            t();
    };
    MatchDownTrait.prototype.onFullComboBhv_playAudio = function (e, t) {
        var o, a, i = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isSupportedGameType(i)) {
            this.hideMatchNum(null === (a = null === (o = e.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameView);
            t();
        }
        else
            t();
    };
    MatchDownTrait.prototype.hideMatchNum = function (e) {
        if (cc.isValid(e) && cc.isValid(e.bottomRootNode)) {
            var t = e.bottomRootNode.getChildByName("MatchDownLabel");
            cc.isValid(t) && (t.active = false);
        }
    };
    MatchDownTrait.traitKey = "MatchDown";
    MatchDownTrait = __decorate([
        mj.trait,
        mj.class("MatchDownTrait")
    ], MatchDownTrait);
    return MatchDownTrait;
}(Trait_1.default));
exports.default = MatchDownTrait;

cc._RF.pop();