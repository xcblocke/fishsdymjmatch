
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_topOnlyShowMatch/Scripts/TopOnlyShowMatchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a9a3IBEHZOdITeuTvcKi4c', 'TopOnlyShowMatchTrait');
// subpackages/l_topOnlyShowMatch/Scripts/TopOnlyShowMatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseLabel_1 = require("../../../Scripts/gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var TopOnlyShowMatchTrait = /** @class */ (function (_super) {
    __extends(TopOnlyShowMatchTrait, _super);
    function TopOnlyShowMatchTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isInitialized = false;
        _this._lastMatchNum = -1;
        _this._matchScaleTween = null;
        return _this;
    }
    TopOnlyShowMatchTrait_1 = TopOnlyShowMatchTrait;
    TopOnlyShowMatchTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyShowMatchTrait.prototype.getBundleName = function () {
        var t;
        return (null === (t = this.traitData) || void 0 === t ? void 0 : t.bundle) || "l_topOnlyShowMatch";
    };
    TopOnlyShowMatchTrait.prototype.getMatchFontPath = function () {
        return "font/gameplay_num_matches";
    };
    TopOnlyShowMatchTrait.prototype.getComboSpinePath = function () {
        return "spine/gameplay_comboTips";
    };
    TopOnlyShowMatchTrait.prototype.getShowSpinePath = function () {
        return "spine/gameplay_comboTips";
    };
    TopOnlyShowMatchTrait.prototype.isInitialized = function () {
        return this._isInitialized;
    };
    TopOnlyShowMatchTrait.prototype.isMatchGameType = function (t) {
        var e, i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], a = GameTypeEnums_1.MjGameType[t];
        return i.includes(a);
    };
    TopOnlyShowMatchTrait.prototype.getNoControlList = function (t) {
        return TopOnlyShowMatchTrait_1.NO_CONTROL_MAP.get(t);
    };
    TopOnlyShowMatchTrait.prototype.getLevelNodesList = function (t) {
        return TopOnlyShowMatchTrait_1.LEVEL_NODES_MAP.get(t);
    };
    TopOnlyShowMatchTrait.prototype.onMGTxtShow_canChgActive = function (t, e) {
        var i, a;
        if (this._isInitialized) {
            var o = null === (i = t.args) || void 0 === i ? void 0 : i[0], n = null === (a = t.args) || void 0 === a ? void 0 : a[2];
            if (this.isMatchGameType(n)) {
                var r = this.getNoControlList(n);
                if (r && r.includes(o)) {
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
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.onChgMtchNmsPos_applyCfg = function (t, e) {
        var i;
        this._isInitialized = true;
        var a = null === (i = t.args) || void 0 === i ? void 0 : i[0], o = null == a ? void 0 : a.topRootNode, n = null == a ? void 0 : a.gameType;
        if (o) {
            if (this.isMatchGameType(n)) {
                var r = this.getNoControlList(n);
                r && this.hideNodes(o, r);
                this.replaceMatchFont(o);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.onGameUI_updateLevel = function (t, e) {
        var i;
        if (this._isInitialized) {
            var a = t.ins, o = null === (i = null == a ? void 0 : a.node) || void 0 === i ? void 0 : i.getChildByName("nodeTop");
            if (o) {
                var n = UserModel_1.default.getInstance().getCurrentGameType();
                if (this.isMatchGameType(n)) {
                    var r = this.getLevelNodesList(n);
                    r && this.hideNodes(o, r);
                    e();
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
    TopOnlyShowMatchTrait.prototype.onGameUI_updateDCDate = function (t, e) {
        if (this._isInitialized) {
            var i = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isMatchGameType(i)) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: void 0
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.hideNodes = function (t, e) {
        var i, a;
        try {
            for (var o = __values(e), n = o.next(); !n.done; n = o.next()) {
                var l = n.value, c = t.getChildByName(l);
                c && (c.active = false);
            }
        }
        catch (t) {
            i = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (a = o.return) && a.call(o);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
    };
    TopOnlyShowMatchTrait.prototype.replaceMatchFont = function (t) {
        var e, i, a, o = t.getChildByName("labelCanMatchNum");
        if (o) {
            BaseLabel_1.default.refreshWithNode(o, this.getMatchFontPath(), this.getBundleName());
            var n = o.getComponent(cc.Label);
            if (n) {
                n.fontSize = (null === (e = this.traitData) || void 0 === e ? void 0 : e.matchFontSize) || 68;
                n.lineHeight = (null === (i = this.traitData) || void 0 === i ? void 0 : i.matchFontSize) || 80;
            }
            var r = null === (a = this.traitData) || void 0 === a ? void 0 : a.matchLabelY;
            null != r && (o.y = r);
            var l = this.getOrCreateMatchSpineNode(t, o);
            this.getOrCreateSpineNodeByType(l, "combo");
            this.getOrCreateSpineNodeByType(l, "show");
        }
    };
    TopOnlyShowMatchTrait.prototype.getOrCreateMatchSpineNode = function (t, e) {
        var i = t.getChildByName("matchSpineNode");
        if (!i) {
            (i = new cc.Node("matchSpineNode")).parent = t;
            var a = e.getSiblingIndex();
            i.setSiblingIndex(a);
            i.position = e.position;
        }
        return i;
    };
    TopOnlyShowMatchTrait.prototype.getMatchSpineNode = function (t) {
        return (null == t ? void 0 : t.getChildByName("matchSpineNode")) || null;
    };
    TopOnlyShowMatchTrait.prototype.getOrCreateSpineNode = function (t, e, i, a) {
        var o = NodeSkinTool_1.default.createNodeByPath(t, e);
        NodeSkinTool_1.default.applyNodeInfo(o, i);
        NodeSkinTool_1.default.applySpineInfo(o, a);
        return o;
    };
    TopOnlyShowMatchTrait.prototype.getOrCreateSpineNodeByType = function (t, e) {
        var i, a, o = "combo" === e, n = {
            position: [0, o ? (null === (i = this.traitData) || void 0 === i ? void 0 : i.spineComboY) || 0 : (null === (a = this.traitData) || void 0 === a ? void 0 : a.spineShowY) || 0],
            active: false
        }, r = {
            skelPath: o ? this.getComboSpinePath() : this.getShowSpinePath(),
            bundleName: this.getBundleName()
        };
        return this.getOrCreateSpineNode(t, o ? "spin_combo" : "spin_show", n, r);
    };
    TopOnlyShowMatchTrait.prototype.playComboAnimation = function (t, e) {
        var i = t.parent, a = this.getMatchSpineNode(i);
        if (a && a.active) {
            var o = this.getOrCreateSpineNodeByType(a, "combo");
            if (o) {
                o.active = e;
                if (e) {
                    var n = o.getComponent(BaseSpine_1.default);
                    if (n)
                        n.setAnimation("init", -1);
                    else {
                        var r = o.getComponent(sp.Skeleton);
                        r && GameUtils_1.default.playSpine(r, "init", true);
                    }
                }
            }
        }
    };
    TopOnlyShowMatchTrait.prototype.playShowAnimation = function (t, e) {
        var i = t.parent, a = this.getMatchSpineNode(i);
        if (a && a.active) {
            var o = this.getOrCreateSpineNodeByType(a, "show");
            if (o) {
                o.active = true;
                var n = e ? "in_2" : "in_1", r = o.getComponent(BaseSpine_1.default);
                if (r)
                    r.setAnimation(n, 0, function () {
                        o.active = false;
                    });
                else {
                    var l = o.getComponent(sp.Skeleton);
                    l && GameUtils_1.default.playSpine(l, n, false, function () {
                        o.active = false;
                    });
                }
            }
        }
    };
    TopOnlyShowMatchTrait.prototype.handleMatchScaleAnimation = function (t) {
        var e = this;
        if (t && cc.isValid(t)) {
            this.stopMatchScaleTween();
            this._matchScaleTween = cc.tween(t).to(0.2, {
                scale: 1.3
            }, {
                easing: "backOut"
            }).to(0.2, {
                scale: 1
            }, {
                easing: "sineIn"
            }).call(function () {
                e._matchScaleTween = null;
            }).start();
        }
    };
    TopOnlyShowMatchTrait.prototype.stopMatchScaleTween = function () {
        if (this._matchScaleTween) {
            this._matchScaleTween.stop();
            this._matchScaleTween = null;
        }
    };
    TopOnlyShowMatchTrait.prototype.resetMatchScaleState = function (t) {
        this.stopMatchScaleTween();
        t && cc.isValid(t) && (t.scale = 1);
    };
    TopOnlyShowMatchTrait.prototype.resetMatchAnimationState = function (t) {
        if (t && cc.isValid(t)) {
            var e = t.parent, i = this.getMatchSpineNode(e);
            if (i) {
                var a = i.getChildByName("spin_combo"), o = i.getChildByName("spin_show");
                a && (a.active = false);
                o && (o.active = false);
            }
            this.resetMatchScaleState(t);
        }
    };
    TopOnlyShowMatchTrait.prototype.onUpdateMatchNumBhv_start = function (t, e) {
        var i, a, o, n, r, l, c;
        if (this._isInitialized) {
            var s = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isMatchGameType(s)) {
                var p = t.ins, u = null === (a = null === (i = null == p ? void 0 : p.context) || void 0 === i ? void 0 : i.gameView) || void 0 === a ? void 0 : a.gameUI, h = null === (o = null == u ? void 0 : u.node) || void 0 === o ? void 0 : o.getChildByName("nodeTop"), y = null == h ? void 0 : h.getChildByName("labelCanMatchNum");
                if (y) {
                    var v = null === (n = t.args) || void 0 === n ? void 0 : n[0], f = null !== (l = null === (r = null == v ? void 0 : v.data) || void 0 === r ? void 0 : r.canMatchCardPairNum) && void 0 !== l ? l : 0;
                    if (null === (c = null == v ? void 0 : v.data) || void 0 === c ? void 0 : c.isShow) {
                        var m = this.getMatchSpineNode(h);
                        m && !m.active && (m.active = true);
                    }
                    this._lastMatchNum < 0 && this.resetMatchAnimationState(y);
                    this._lastMatchNum = f;
                    e();
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
    TopOnlyShowMatchTrait.prototype.onScoreItem_updScore = function (t, e) {
        var i, a, o, n, r, l, s;
        if (this._isInitialized) {
            var p = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isMatchGameType(p)) {
                var u = null !== (a = null === (i = t.args) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : 0, h = null !== (n = null === (o = t.args) || void 0 === o ? void 0 : o[2]) && void 0 !== n && n, y = t.ins, v = null === (s = null === (l = null === (r = null == y ? void 0 : y.node) || void 0 === r ? void 0 : r.parent) || void 0 === l ? void 0 : l.parent) || void 0 === s ? void 0 : s.parent, f = null == v ? void 0 : v.getChildByName("nodeTop"), m = null == f ? void 0 : f.getChildByName("labelCanMatchNum");
                if (m && cc.isValid(m)) {
                    this.playComboAnimation(m, h);
                    u > 0 && this.playShowAnimation(m, h);
                    u > 0 && this.handleMatchScaleAnimation(m);
                }
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: void 0
                });
            }
            else
                e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.onBeforeWinBhv_start = function (t, e) {
        if (this._isInitialized) {
            this.hideMatchComboState(t);
            e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.onBeforeDCWinBhv_start = function (t, e) {
        if (this._isInitialized) {
            this.hideMatchComboState(t);
            e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.onFullComboBhv_playAudio = function (t, e) {
        if (this._isInitialized) {
            this.hideMatchSpineNode(t, "FullCombo");
            e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.onRwdComboBhv_bonusAud = function (t, e) {
        if (this._isInitialized) {
            this.hideMatchSpineNode(t, "破局奖励");
            e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.hideMatchSpineNode = function (t) {
        var e, i, a, o = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isMatchGameType(o)) {
            var n = t.ins, r = null === (i = null === (e = null == n ? void 0 : n.context) || void 0 === e ? void 0 : e.gameView) || void 0 === i ? void 0 : i.gameUI, l = null === (a = null == r ? void 0 : r.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop");
            if (l && cc.isValid(l)) {
                var c = this.getMatchSpineNode(l);
                c && cc.isValid(c) && (c.active = false);
            }
        }
    };
    TopOnlyShowMatchTrait.prototype.hideMatchComboState = function (t) {
        var e, i, a, o = UserModel_1.default.getInstance().getCurrentGameType();
        if (this.isMatchGameType(o)) {
            var n = t.ins, r = null === (i = null === (e = null == n ? void 0 : n.context) || void 0 === e ? void 0 : e.gameView) || void 0 === i ? void 0 : i.gameUI, l = null === (a = null == r ? void 0 : r.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop"), c = null == l ? void 0 : l.getChildByName("labelCanMatchNum");
            if (c) {
                var s = this.getMatchSpineNode(l);
                if (s) {
                    var p = s.getChildByName("spin_combo"), u = s.getChildByName("spin_show");
                    p && (p.active = false);
                    u && (u.active = false);
                }
                this.resetMatchScaleState(c);
                this._lastMatchNum = -1;
            }
        }
    };
    TopOnlyShowMatchTrait.prototype.onScrFloatBhv_getTopPos = function (t, e) {
        var i, a, o;
        if (this._isInitialized) {
            var n = UserModel_1.default.getInstance().getCurrentGameType();
            if (this.isMatchGameType(n)) {
                var r = t.ins, l = null === (a = null === (i = null == r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameView) || void 0 === a ? void 0 : a.gameUI, s = null === (o = null == l ? void 0 : l.node) || void 0 === o ? void 0 : o.getChildByName("nodeTop");
                if (s) {
                    var p = s.getChildByName("labelCanMatchNum");
                    if (p && !p.active) {
                        e({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            returnVal: null
                        });
                        return;
                    }
                    var u = this.getMatchSpineNode(s);
                    if (u && !u.active) {
                        e({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            returnVal: null
                        });
                        return;
                    }
                }
                var h = this.getMatchesNodePosition(t.ins);
                e(h ? {
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: h
                } : {
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: null
                });
            }
            else
                e();
        }
        else
            e();
    };
    TopOnlyShowMatchTrait.prototype.getMatchesNodePosition = function (t) {
        var e;
        try {
            var i = null === (e = null == t ? void 0 : t.context) || void 0 === e ? void 0 : e.gameView;
            if (!i)
                return null;
            var a = i.topRootNode;
            if (!a)
                return null;
            var o = a.getChildByName("labelCanMatchNum");
            if (!o || !cc.isValid(o))
                return null;
            var n = o.convertToWorldSpaceAR(cc.v2(0, 0));
            return cc.v3(n.x, n.y, 0);
        }
        catch (t) {
            return null;
        }
    };
    var TopOnlyShowMatchTrait_1;
    TopOnlyShowMatchTrait.traitKey = "TopOnlyShowMatch";
    TopOnlyShowMatchTrait.NO_CONTROL_MAP = new Map([[GameTypeEnums_1.MjGameType.Normal, ["levelDesc", "labelLevel", "nodeScore"]], [GameTypeEnums_1.MjGameType.DailyChallenge, ["lblDateDesc", "lblDate", "nodeScore"]]]);
    TopOnlyShowMatchTrait.LEVEL_NODES_MAP = new Map([[GameTypeEnums_1.MjGameType.Normal, ["levelDesc", "labelLevel"]], [GameTypeEnums_1.MjGameType.DailyChallenge, ["lblDateDesc", "lblDate"]]]);
    __decorate([
        mj.traitEvent("TOSMatch_isMatchGType")
    ], TopOnlyShowMatchTrait.prototype, "isMatchGameType", null);
    TopOnlyShowMatchTrait = TopOnlyShowMatchTrait_1 = __decorate([
        mj.trait,
        mj.class("TopOnlyShowMatchTrait")
    ], TopOnlyShowMatchTrait);
    return TopOnlyShowMatchTrait;
}(Trait_1.default));
exports.default = TopOnlyShowMatchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvcE9ubHlTaG93TWF0Y2gvU2NyaXB0cy9Ub3BPbmx5U2hvd01hdGNoVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsd0ZBQW9GO0FBQ3BGLHlFQUFvRTtBQUNwRSx5RUFBb0U7QUFDcEUsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSw4REFBeUQ7QUFHekQ7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFrYUM7UUFqYUMsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbUJBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7O0lBK1oxQixDQUFDOzhCQWxhb0IscUJBQXFCO0lBT3hDLHNDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsNkNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDO0lBQ3JHLENBQUM7SUFDRCxnREFBZ0IsR0FBaEI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFDRCxpREFBaUIsR0FBakI7UUFDRSxPQUFPLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7SUFD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ZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlTGFiZWwnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IE5vZGVTa2luVG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL05vZGVTa2luVG9vbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRvcE9ubHlTaG93TWF0Y2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wT25seVNob3dNYXRjaFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICBfbGFzdE1hdGNoTnVtID0gLTE7XG4gIF9tYXRjaFNjYWxlVHdlZW4gPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRvcE9ubHlTaG93TWF0Y2hcIjtcbiAgc3RhdGljIE5PX0NPTlRST0xfTUFQID0gbmV3IE1hcChbW01qR2FtZVR5cGUuTm9ybWFsLCBbXCJsZXZlbERlc2NcIiwgXCJsYWJlbExldmVsXCIsIFwibm9kZVNjb3JlXCJdXSwgW01qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UsIFtcImxibERhdGVEZXNjXCIsIFwibGJsRGF0ZVwiLCBcIm5vZGVTY29yZVwiXV1dKTtcbiAgc3RhdGljIExFVkVMX05PREVTX01BUCA9IG5ldyBNYXAoW1tNakdhbWVUeXBlLk5vcm1hbCwgW1wibGV2ZWxEZXNjXCIsIFwibGFiZWxMZXZlbFwiXV0sIFtNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlLCBbXCJsYmxEYXRlRGVzY1wiLCBcImxibERhdGVcIl1dXSk7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5nYW1lVHlwZXM7XG4gIH1cbiAgZ2V0QnVuZGxlTmFtZSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYnVuZGxlKSB8fCBcImxfdG9wT25seVNob3dNYXRjaFwiO1xuICB9XG4gIGdldE1hdGNoRm9udFBhdGgoKSB7XG4gICAgcmV0dXJuIFwiZm9udC9nYW1lcGxheV9udW1fbWF0Y2hlc1wiO1xuICB9XG4gIGdldENvbWJvU3BpbmVQYXRoKCkge1xuICAgIHJldHVybiBcInNwaW5lL2dhbWVwbGF5X2NvbWJvVGlwc1wiO1xuICB9XG4gIGdldFNob3dTcGluZVBhdGgoKSB7XG4gICAgcmV0dXJuIFwic3BpbmUvZ2FtZXBsYXlfY29tYm9UaXBzXCI7XG4gIH1cbiAgaXNJbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNJbml0aWFsaXplZDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRPU01hdGNoX2lzTWF0Y2hHVHlwZVwiKVxuICBpc01hdGNoR2FtZVR5cGUodCkge1xuICAgIHZhciBlLFxuICAgICAgaSA9IChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhbWVUeXBlcykgfHwgW10sXG4gICAgICBhID0gTWpHYW1lVHlwZVt0XTtcbiAgICByZXR1cm4gaS5pbmNsdWRlcyhhKTtcbiAgfVxuICBnZXROb0NvbnRyb2xMaXN0KHQpIHtcbiAgICByZXR1cm4gVG9wT25seVNob3dNYXRjaFRyYWl0Lk5PX0NPTlRST0xfTUFQLmdldCh0KTtcbiAgfVxuICBnZXRMZXZlbE5vZGVzTGlzdCh0KSB7XG4gICAgcmV0dXJuIFRvcE9ubHlTaG93TWF0Y2hUcmFpdC5MRVZFTF9OT0RFU19NQVAuZ2V0KHQpO1xuICB9XG4gIG9uTUdUeHRTaG93X2NhbkNoZ0FjdGl2ZSh0LCBlKSB7XG4gICAgdmFyIGksIGE7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHZhciBvID0gbnVsbCA9PT0gKGkgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF0sXG4gICAgICAgIG4gPSBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYVsyXTtcbiAgICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZShuKSkge1xuICAgICAgICB2YXIgciA9IHRoaXMuZ2V0Tm9Db250cm9sTGlzdChuKTtcbiAgICAgICAgaWYgKHIgJiYgci5pbmNsdWRlcyhvKSkge1xuICAgICAgICAgIGUoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkNoZ010Y2hObXNQb3NfYXBwbHlDZmcodCwgZSkge1xuICAgIHZhciBpO1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBhID0gbnVsbCA9PT0gKGkgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGlbMF0sXG4gICAgICBvID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS50b3BSb290Tm9kZSxcbiAgICAgIG4gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmdhbWVUeXBlO1xuICAgIGlmIChvKSB7XG4gICAgICBpZiAodGhpcy5pc01hdGNoR2FtZVR5cGUobikpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmdldE5vQ29udHJvbExpc3Qobik7XG4gICAgICAgIHIgJiYgdGhpcy5oaWRlTm9kZXMobywgcik7XG4gICAgICAgIHRoaXMucmVwbGFjZU1hdGNoRm9udChvKTtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uR2FtZVVJX3VwZGF0ZUxldmVsKHQsIGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdmFyIGEgPSB0LmlucyxcbiAgICAgICAgbyA9IG51bGwgPT09IChpID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5ub2RlKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZShuKSkge1xuICAgICAgICAgIHZhciByID0gdGhpcy5nZXRMZXZlbE5vZGVzTGlzdChuKTtcbiAgICAgICAgICByICYmIHRoaXMuaGlkZU5vZGVzKG8sIHIpO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkdhbWVVSV91cGRhdGVEQ0RhdGUodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICB2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgaWYgKHRoaXMuaXNNYXRjaEdhbWVUeXBlKGkpKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogdm9pZCAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgaGlkZU5vZGVzKHQsIGUpIHtcbiAgICB2YXIgaSwgYTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKGUpLCBuID0gby5uZXh0KCk7ICFuLmRvbmU7IG4gPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IG4udmFsdWUsXG4gICAgICAgICAgYyA9IHQuZ2V0Q2hpbGRCeU5hbWUobCk7XG4gICAgICAgIGMgJiYgKGMuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKGEgPSBvLnJldHVybikgJiYgYS5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlcGxhY2VNYXRjaEZvbnQodCkge1xuICAgIHZhciBlLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBvID0gdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsQ2FuTWF0Y2hOdW1cIik7XG4gICAgaWYgKG8pIHtcbiAgICAgIEJhc2VMYWJlbC5yZWZyZXNoV2l0aE5vZGUobywgdGhpcy5nZXRNYXRjaEZvbnRQYXRoKCksIHRoaXMuZ2V0QnVuZGxlTmFtZSgpKTtcbiAgICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgbi5mb250U2l6ZSA9IChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm1hdGNoRm9udFNpemUpIHx8IDY4O1xuICAgICAgICBuLmxpbmVIZWlnaHQgPSAobnVsbCA9PT0gKGkgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5tYXRjaEZvbnRTaXplKSB8fCA4MDtcbiAgICAgIH1cbiAgICAgIHZhciByID0gbnVsbCA9PT0gKGEgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5tYXRjaExhYmVsWTtcbiAgICAgIG51bGwgIT0gciAmJiAoby55ID0gcik7XG4gICAgICB2YXIgbCA9IHRoaXMuZ2V0T3JDcmVhdGVNYXRjaFNwaW5lTm9kZSh0LCBvKTtcbiAgICAgIHRoaXMuZ2V0T3JDcmVhdGVTcGluZU5vZGVCeVR5cGUobCwgXCJjb21ib1wiKTtcbiAgICAgIHRoaXMuZ2V0T3JDcmVhdGVTcGluZU5vZGVCeVR5cGUobCwgXCJzaG93XCIpO1xuICAgIH1cbiAgfVxuICBnZXRPckNyZWF0ZU1hdGNoU3BpbmVOb2RlKHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXRjaFNwaW5lTm9kZVwiKTtcbiAgICBpZiAoIWkpIHtcbiAgICAgIChpID0gbmV3IGNjLk5vZGUoXCJtYXRjaFNwaW5lTm9kZVwiKSkucGFyZW50ID0gdDtcbiAgICAgIHZhciBhID0gZS5nZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgIGkuc2V0U2libGluZ0luZGV4KGEpO1xuICAgICAgaS5wb3NpdGlvbiA9IGUucG9zaXRpb247XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIGdldE1hdGNoU3BpbmVOb2RlKHQpIHtcbiAgICByZXR1cm4gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q2hpbGRCeU5hbWUoXCJtYXRjaFNwaW5lTm9kZVwiKSkgfHwgbnVsbDtcbiAgfVxuICBnZXRPckNyZWF0ZVNwaW5lTm9kZSh0LCBlLCBpLCBhKSB7XG4gICAgdmFyIG8gPSBOb2RlU2tpblRvb2wuY3JlYXRlTm9kZUJ5UGF0aCh0LCBlKTtcbiAgICBOb2RlU2tpblRvb2wuYXBwbHlOb2RlSW5mbyhvLCBpKTtcbiAgICBOb2RlU2tpblRvb2wuYXBwbHlTcGluZUluZm8obywgYSk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgZ2V0T3JDcmVhdGVTcGluZU5vZGVCeVR5cGUodCwgZSkge1xuICAgIHZhciBpLFxuICAgICAgYSxcbiAgICAgIG8gPSBcImNvbWJvXCIgPT09IGUsXG4gICAgICBuID0ge1xuICAgICAgICBwb3NpdGlvbjogWzAsIG8gPyAobnVsbCA9PT0gKGkgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5zcGluZUNvbWJvWSkgfHwgMCA6IChudWxsID09PSAoYSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLnNwaW5lU2hvd1kpIHx8IDBdLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9LFxuICAgICAgciA9IHtcbiAgICAgICAgc2tlbFBhdGg6IG8gPyB0aGlzLmdldENvbWJvU3BpbmVQYXRoKCkgOiB0aGlzLmdldFNob3dTcGluZVBhdGgoKSxcbiAgICAgICAgYnVuZGxlTmFtZTogdGhpcy5nZXRCdW5kbGVOYW1lKClcbiAgICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3JDcmVhdGVTcGluZU5vZGUodCwgbyA/IFwic3Bpbl9jb21ib1wiIDogXCJzcGluX3Nob3dcIiwgbiwgcik7XG4gIH1cbiAgcGxheUNvbWJvQW5pbWF0aW9uKHQsIGUpIHtcbiAgICB2YXIgaSA9IHQucGFyZW50LFxuICAgICAgYSA9IHRoaXMuZ2V0TWF0Y2hTcGluZU5vZGUoaSk7XG4gICAgaWYgKGEgJiYgYS5hY3RpdmUpIHtcbiAgICAgIHZhciBvID0gdGhpcy5nZXRPckNyZWF0ZVNwaW5lTm9kZUJ5VHlwZShhLCBcImNvbWJvXCIpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgby5hY3RpdmUgPSBlO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgICAgICBpZiAobikgbi5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtlbHNlIHtcbiAgICAgICAgICAgIHZhciByID0gby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgciAmJiBHYW1lVXRpbHMucGxheVNwaW5lKHIsIFwiaW5pdFwiLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheVNob3dBbmltYXRpb24odCwgZSkge1xuICAgIHZhciBpID0gdC5wYXJlbnQsXG4gICAgICBhID0gdGhpcy5nZXRNYXRjaFNwaW5lTm9kZShpKTtcbiAgICBpZiAoYSAmJiBhLmFjdGl2ZSkge1xuICAgICAgdmFyIG8gPSB0aGlzLmdldE9yQ3JlYXRlU3BpbmVOb2RlQnlUeXBlKGEsIFwic2hvd1wiKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG4gPSBlID8gXCJpbl8yXCIgOiBcImluXzFcIixcbiAgICAgICAgICByID0gby5nZXRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgICAgaWYgKHIpIHIuc2V0QW5pbWF0aW9uKG4sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtlbHNlIHtcbiAgICAgICAgICB2YXIgbCA9IG8uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICBsICYmIEdhbWVVdGlscy5wbGF5U3BpbmUobCwgbiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaGFuZGxlTWF0Y2hTY2FsZUFuaW1hdGlvbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHRoaXMuc3RvcE1hdGNoU2NhbGVUd2VlbigpO1xuICAgICAgdGhpcy5fbWF0Y2hTY2FsZVR3ZWVuID0gY2MudHdlZW4odCkudG8oMC4yLCB7XG4gICAgICAgIHNjYWxlOiAxLjNcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgfSkudG8oMC4yLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5cIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX21hdGNoU2NhbGVUd2VlbiA9IG51bGw7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBzdG9wTWF0Y2hTY2FsZVR3ZWVuKCkge1xuICAgIGlmICh0aGlzLl9tYXRjaFNjYWxlVHdlZW4pIHtcbiAgICAgIHRoaXMuX21hdGNoU2NhbGVUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9tYXRjaFNjYWxlVHdlZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuICByZXNldE1hdGNoU2NhbGVTdGF0ZSh0KSB7XG4gICAgdGhpcy5zdG9wTWF0Y2hTY2FsZVR3ZWVuKCk7XG4gICAgdCAmJiBjYy5pc1ZhbGlkKHQpICYmICh0LnNjYWxlID0gMSk7XG4gIH1cbiAgcmVzZXRNYXRjaEFuaW1hdGlvblN0YXRlKHQpIHtcbiAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgZSA9IHQucGFyZW50LFxuICAgICAgICBpID0gdGhpcy5nZXRNYXRjaFNwaW5lTm9kZShlKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciBhID0gaS5nZXRDaGlsZEJ5TmFtZShcInNwaW5fY29tYm9cIiksXG4gICAgICAgICAgbyA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX3Nob3dcIik7XG4gICAgICAgIGEgJiYgKGEuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICBvICYmIChvLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzZXRNYXRjaFNjYWxlU3RhdGUodCk7XG4gICAgfVxuICB9XG4gIG9uVXBkYXRlTWF0Y2hOdW1CaHZfc3RhcnQodCwgZSkge1xuICAgIHZhciBpLCBhLCBvLCBuLCByLCBsLCBjO1xuICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICB2YXIgcyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgaWYgKHRoaXMuaXNNYXRjaEdhbWVUeXBlKHMpKSB7XG4gICAgICAgIHZhciBwID0gdC5pbnMsXG4gICAgICAgICAgdSA9IG51bGwgPT09IChhID0gbnVsbCA9PT0gKGkgPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2FtZVVJLFxuICAgICAgICAgIGggPSBudWxsID09PSAobyA9IG51bGwgPT0gdSA/IHZvaWQgMCA6IHUubm9kZSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDaGlsZEJ5TmFtZShcIm5vZGVUb3BcIiksXG4gICAgICAgICAgeSA9IG51bGwgPT0gaCA/IHZvaWQgMCA6IGguZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbENhbk1hdGNoTnVtXCIpO1xuICAgICAgICBpZiAoeSkge1xuICAgICAgICAgIHZhciB2ID0gbnVsbCA9PT0gKG4gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG5bMF0sXG4gICAgICAgICAgICBmID0gbnVsbCAhPT0gKGwgPSBudWxsID09PSAociA9IG51bGwgPT0gdiA/IHZvaWQgMCA6IHYuZGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jYW5NYXRjaENhcmRQYWlyTnVtKSAmJiB2b2lkIDAgIT09IGwgPyBsIDogMDtcbiAgICAgICAgICBpZiAobnVsbCA9PT0gKGMgPSBudWxsID09IHYgPyB2b2lkIDAgOiB2LmRhdGEpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGMuaXNTaG93KSB7XG4gICAgICAgICAgICB2YXIgbSA9IHRoaXMuZ2V0TWF0Y2hTcGluZU5vZGUoaCk7XG4gICAgICAgICAgICBtICYmICFtLmFjdGl2ZSAmJiAobS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbGFzdE1hdGNoTnVtIDwgMCAmJiB0aGlzLnJlc2V0TWF0Y2hBbmltYXRpb25TdGF0ZSh5KTtcbiAgICAgICAgICB0aGlzLl9sYXN0TWF0Y2hOdW0gPSBmO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvblNjb3JlSXRlbV91cGRTY29yZSh0LCBlKSB7XG4gICAgdmFyIGksIGEsIG8sIG4sIHIsIGwsIHM7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHZhciBwID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICBpZiAodGhpcy5pc01hdGNoR2FtZVR5cGUocCkpIHtcbiAgICAgICAgdmFyIHUgPSBudWxsICE9PSAoYSA9IG51bGwgPT09IChpID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpWzBdKSAmJiB2b2lkIDAgIT09IGEgPyBhIDogMCxcbiAgICAgICAgICBoID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAobyA9IHQuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1syXSkgJiYgdm9pZCAwICE9PSBuICYmIG4sXG4gICAgICAgICAgeSA9IHQuaW5zLFxuICAgICAgICAgIHYgPSBudWxsID09PSAocyA9IG51bGwgPT09IChsID0gbnVsbCA9PT0gKHIgPSBudWxsID09IHkgPyB2b2lkIDAgOiB5Lm5vZGUpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucGFyZW50KSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLnBhcmVudCkgfHwgdm9pZCAwID09PSBzID8gdm9pZCAwIDogcy5wYXJlbnQsXG4gICAgICAgICAgZiA9IG51bGwgPT0gdiA/IHZvaWQgMCA6IHYuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpLFxuICAgICAgICAgIG0gPSBudWxsID09IGYgPyB2b2lkIDAgOiBmLmdldENoaWxkQnlOYW1lKFwibGFiZWxDYW5NYXRjaE51bVwiKTtcbiAgICAgICAgaWYgKG0gJiYgY2MuaXNWYWxpZChtKSkge1xuICAgICAgICAgIHRoaXMucGxheUNvbWJvQW5pbWF0aW9uKG0sIGgpO1xuICAgICAgICAgIHUgPiAwICYmIHRoaXMucGxheVNob3dBbmltYXRpb24obSwgaCk7XG4gICAgICAgICAgdSA+IDAgJiYgdGhpcy5oYW5kbGVNYXRjaFNjYWxlQW5pbWF0aW9uKG0pO1xuICAgICAgICB9XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogdm9pZCAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uQmVmb3JlV2luQmh2X3N0YXJ0KHQsIGUpIHtcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5oaWRlTWF0Y2hDb21ib1N0YXRlKHQpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25CZWZvcmVEQ1dpbkJodl9zdGFydCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaGlkZU1hdGNoQ29tYm9TdGF0ZSh0KTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRnVsbENvbWJvQmh2X3BsYXlBdWRpbyh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaGlkZU1hdGNoU3BpbmVOb2RlKHQsIFwiRnVsbENvbWJvXCIpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25Sd2RDb21ib0Jodl9ib251c0F1ZCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaGlkZU1hdGNoU3BpbmVOb2RlKHQsIFwi56C05bGA5aWW5YqxXCIpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgaGlkZU1hdGNoU3BpbmVOb2RlKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZShvKSkge1xuICAgICAgdmFyIG4gPSB0LmlucyxcbiAgICAgICAgciA9IG51bGwgPT09IChpID0gbnVsbCA9PT0gKGUgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2FtZVVJLFxuICAgICAgICBsID0gbnVsbCA9PT0gKGEgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLm5vZGUpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpO1xuICAgICAgaWYgKGwgJiYgY2MuaXNWYWxpZChsKSkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0TWF0Y2hTcGluZU5vZGUobCk7XG4gICAgICAgIGMgJiYgY2MuaXNWYWxpZChjKSAmJiAoYy5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhpZGVNYXRjaENvbWJvU3RhdGUodCkge1xuICAgIHZhciBlLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKHRoaXMuaXNNYXRjaEdhbWVUeXBlKG8pKSB7XG4gICAgICB2YXIgbiA9IHQuaW5zLFxuICAgICAgICByID0gbnVsbCA9PT0gKGkgPSBudWxsID09PSAoZSA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uY29udGV4dCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nYW1lVmlldykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lVUksXG4gICAgICAgIGwgPSBudWxsID09PSAoYSA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIubm9kZSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVUb3BcIiksXG4gICAgICAgIGMgPSBudWxsID09IGwgPyB2b2lkIDAgOiBsLmdldENoaWxkQnlOYW1lKFwibGFiZWxDYW5NYXRjaE51bVwiKTtcbiAgICAgIGlmIChjKSB7XG4gICAgICAgIHZhciBzID0gdGhpcy5nZXRNYXRjaFNwaW5lTm9kZShsKTtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICB2YXIgcCA9IHMuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX2NvbWJvXCIpLFxuICAgICAgICAgICAgdSA9IHMuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX3Nob3dcIik7XG4gICAgICAgICAgcCAmJiAocC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgdSAmJiAodS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldE1hdGNoU2NhbGVTdGF0ZShjKTtcbiAgICAgICAgdGhpcy5fbGFzdE1hdGNoTnVtID0gLTE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uU2NyRmxvYXRCaHZfZ2V0VG9wUG9zKHQsIGUpIHtcbiAgICB2YXIgaSwgYSwgbztcbiAgICBpZiAodGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdmFyIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLmlzTWF0Y2hHYW1lVHlwZShuKSkge1xuICAgICAgICB2YXIgciA9IHQuaW5zLFxuICAgICAgICAgIGwgPSBudWxsID09PSAoYSA9IG51bGwgPT09IChpID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5jb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmdhbWVVSSxcbiAgICAgICAgICBzID0gbnVsbCA9PT0gKG8gPSBudWxsID09IGwgPyB2b2lkIDAgOiBsLm5vZGUpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgIHZhciBwID0gcy5nZXRDaGlsZEJ5TmFtZShcImxhYmVsQ2FuTWF0Y2hOdW1cIik7XG4gICAgICAgICAgaWYgKHAgJiYgIXAuYWN0aXZlKSB7XG4gICAgICAgICAgICBlKHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdSA9IHRoaXMuZ2V0TWF0Y2hTcGluZU5vZGUocyk7XG4gICAgICAgICAgaWYgKHUgJiYgIXUuYWN0aXZlKSB7XG4gICAgICAgICAgICBlKHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaCA9IHRoaXMuZ2V0TWF0Y2hlc05vZGVQb3NpdGlvbih0Lmlucyk7XG4gICAgICAgIGUoaCA/IHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGhcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgZ2V0TWF0Y2hlc05vZGVQb3NpdGlvbih0KSB7XG4gICAgdmFyIGU7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVZpZXc7XG4gICAgICBpZiAoIWkpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGEgPSBpLnRvcFJvb3ROb2RlO1xuICAgICAgaWYgKCFhKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBvID0gYS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsQ2FuTWF0Y2hOdW1cIik7XG4gICAgICBpZiAoIW8gfHwgIWNjLmlzVmFsaWQobykpIHJldHVybiBudWxsO1xuICAgICAgdmFyIG4gPSBvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICByZXR1cm4gY2MudjMobi54LCBuLnksIDApO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSJdfQ==