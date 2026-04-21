"use strict";
cc._RF.push(module, '88784ZyX0ZEKopomaNhlhY/', 'TopOnlyShowScoreTrait');
// subpackages/l_topOnlyShowScore/Scripts/TopOnlyShowScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseLabel_1 = require("../../../Scripts/gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TopOnlyShowScoreTrait = /** @class */ (function (_super) {
    __extends(TopOnlyShowScoreTrait, _super);
    function TopOnlyShowScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyShowScoreTrait_1 = TopOnlyShowScoreTrait;
    TopOnlyShowScoreTrait.prototype.getBundleName = function () {
        var t;
        return (null === (t = this.traitData) || void 0 === t ? void 0 : t.bundle) || "l_topOnlyShowScore";
    };
    TopOnlyShowScoreTrait.prototype.getScoreFontPath = function () {
        return "font/gameplay_num_score";
    };
    TopOnlyShowScoreTrait.prototype.getComboSpinePath = function () {
        return "spine/gameplay_comboTips";
    };
    TopOnlyShowScoreTrait.prototype.isMatchGameType = function (t) {
        var e, r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], o = GameTypeEnums_1.MjGameType[t];
        return r.includes(o);
    };
    TopOnlyShowScoreTrait.prototype.getNoControlList = function (t) {
        return TopOnlyShowScoreTrait_1.NO_CONTROL_MAP.get(t);
    };
    TopOnlyShowScoreTrait.prototype.getLevelNodesList = function (t) {
        return TopOnlyShowScoreTrait_1.LEVEL_NODES_MAP.get(t);
    };
    TopOnlyShowScoreTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyShowScoreTrait.prototype.onMGTxtShow_canChgActive = function (t, e) {
        var r, o, a = null === (r = t.args) || void 0 === r ? void 0 : r[0], i = null === (o = t.args) || void 0 === o ? void 0 : o[2];
        if (this.isMatchGameType(i)) {
            var n = this.getNoControlList(i);
            if (n && n.includes(a)) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    TopOnlyShowScoreTrait.prototype.onMainGRTop_applyTSCfg = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[0], a = null == o ? void 0 : o.topRootNode, i = null == o ? void 0 : o.gameType;
        if (a) {
            if (this.isMatchGameType(i)) {
                var n = this.getNoControlList(i);
                n && this.hideNodes(a, n);
                this.replaceScoreFont(a);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    TopOnlyShowScoreTrait.prototype.onGameUI_updateLevel = function (t, e) {
        var r, o = t.ins, a = null === (r = null == o ? void 0 : o.node) || void 0 === r ? void 0 : r.getChildByName("nodeTop");
        if (a) {
            var i = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isMatchGameType(i)) {
                var n = this.getLevelNodesList(i);
                n && this.hideNodes(a, n);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    TopOnlyShowScoreTrait.prototype.hideNodes = function (t, e) {
        var r, o;
        try {
            for (var a = __values(e), i = a.next(); !i.done; i = a.next()) {
                var l = i.value, c = t.getChildByName(l);
                c && (c.active = false);
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (o = a.return) && o.call(a);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
    };
    TopOnlyShowScoreTrait.prototype.replaceScoreFont = function (t) {
        var e, r, o, a, i = t.getChildByName("nodeScore");
        if (i) {
            var n = i.getChildByName("scoreItem");
            if (n) {
                var l = this.getBundleName(), c = n.getChildByName("lbl_normal");
                if (c) {
                    BaseLabel_1.default.refreshWithNode(c, this.getScoreFontPath(), l);
                    var s = c.getComponent(cc.Label);
                    if (s) {
                        s.fontSize = (null === (e = this.traitData) || void 0 === e ? void 0 : e.scoreFontSize) || 68;
                        s.lineHeight = (null === (r = this.traitData) || void 0 === r ? void 0 : r.scoreFontSize) || 80;
                    }
                    var y = n.getChildByName("spin_combo");
                    y && (y.y = (null === (o = this.traitData) || void 0 === o ? void 0 : o.spineComboY) || 0);
                }
                var f = null === (a = this.traitData) || void 0 === a ? void 0 : a.scoreLabelY;
                null != f && (n.y = f);
                var d = n.getChildByName("spin_combo");
                d && BaseSpine_1.default.refreshWithNode(d, this.getComboSpinePath(), l);
            }
        }
    };
    TopOnlyShowScoreTrait.prototype.onScoreItem_playComboAni = function (t, e) {
        var r, o = t.ins, a = null === (r = null == o ? void 0 : o.node) || void 0 === r ? void 0 : r.getChildByName("spin_combo");
        if (null == a ? void 0 : a.getComponent(BaseSpine_1.default)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: void 0
            });
        }
        else {
            e();
        }
    };
    TopOnlyShowScoreTrait.prototype.onScoreItem_updScore = function (t, e) {
        var r, o, a = t.ins, i = null === (r = t.args) || void 0 === r ? void 0 : r[2], n = null === (o = null == a ? void 0 : a.node) || void 0 === o ? void 0 : o.getChildByName("spin_combo"), l = null == n ? void 0 : n.getComponent(BaseSpine_1.default);
        i && l && l.setAnimation("init", -1);
        e();
    };
    TopOnlyShowScoreTrait.prototype.onGameUI_updateDCDate = function (t, e) {
        var r = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isMatchGameType(r)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: void 0
            });
        }
        else {
            e();
        }
    };
    var TopOnlyShowScoreTrait_1;
    TopOnlyShowScoreTrait.traitKey = "TopOnlyShowScore";
    TopOnlyShowScoreTrait.NO_CONTROL_MAP = new Map([[GameTypeEnums_1.MjGameType.Normal, ["levelDesc", "labelLevel", "labelMatch", "labelCanMatchNum"]], [GameTypeEnums_1.MjGameType.DailyChallenge, ["lblDateDesc", "lblDate", "labelMatch", "labelCanMatchNum"]]]);
    TopOnlyShowScoreTrait.LEVEL_NODES_MAP = new Map([[GameTypeEnums_1.MjGameType.Normal, ["levelDesc", "labelLevel"]], [GameTypeEnums_1.MjGameType.DailyChallenge, ["lblDateDesc", "lblDate"]]]);
    __decorate([
        mj.traitEvent("TOSScore_isMatchGType")
    ], TopOnlyShowScoreTrait.prototype, "isMatchGameType", null);
    TopOnlyShowScoreTrait = TopOnlyShowScoreTrait_1 = __decorate([
        mj.trait,
        mj.class("TopOnlyShowScoreTrait")
    ], TopOnlyShowScoreTrait);
    return TopOnlyShowScoreTrait;
}(Trait_1.default));
exports.default = TopOnlyShowScoreTrait;

cc._RF.pop();