"use strict";
cc._RF.push(module, '62082KBrj5GvbqGCn+I50FG', 'WinLayoutOptTrait');
// subpackages/l_winLayoutOpt/Scripts/WinLayoutOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var WinLayoutOptTrait = /** @class */ (function (_super) {
    __extends(WinLayoutOptTrait, _super);
    function WinLayoutOptTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WinLayoutOptTrait.prototype, "barLayoutBottom", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.barLayoutBottom) || 18;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "levelBoxSpinePath", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.levelBoxSpinePath) || "spine/levelBox/result_rewardsCollection";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "normalSpinePath", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.normalSpinePath) || "spine/normal/result_rewardsCollection";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.bundle) || "l_winLayoutOpt";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "subtitleY", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.subtitleY) || -77;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "descAnimationDelay", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.descAnimDelay) || 0.9;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "boxAnimDelay", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.boxAnimDelay) || 0.01;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinLayoutOptTrait.prototype, "btnNextDelay", {
        get: function () {
            var t;
            return (null === (t = this._traitData) || void 0 === t ? void 0 : t.btnNextDelay) || 1.53;
        },
        enumerable: false,
        configurable: true
    });
    WinLayoutOptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinLayoutOptTrait.prototype.onWinVw_getDescAniDly = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.descAnimationDelay
        });
    };
    WinLayoutOptTrait.prototype.onWinVw_popNextView = function (t, e) {
        t.ins.scheduleOnce(function () {
            e();
        }, this.boxAnimDelay);
    };
    WinLayoutOptTrait.prototype.onWinVw_getBtnNextDly = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.btnNextDelay
        });
    };
    WinLayoutOptTrait.prototype.isLevelBoxTraitEnabled = function () {
        var t = mj.getClassByName("LevelBoxTrait");
        return t && true === t.getInstance().eventEnabled;
    };
    WinLayoutOptTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        var o = t.ins;
        if (o && "function" == typeof o.addPreloadRes) {
            var i = this.isLevelBoxTraitEnabled() ? this.levelBoxSpinePath : this.normalSpinePath, n = this.bundleName + ":" + i;
            o.addPreloadRes("SkeletonData", [n]);
        }
        e();
    };
    WinLayoutOptTrait.prototype.onLvBoxVw_initComps = function (t, e) {
        var o = t.ins;
        this.replaceRewardBoxSpine(o, this.levelBoxSpinePath);
        e();
    };
    WinLayoutOptTrait.prototype.onBoxOpenUI_initComponents = function (t, e) {
        var o = t.ins;
        this.replaceRewardBoxSpine(o, this.normalSpinePath);
        e();
    };
    WinLayoutOptTrait.prototype.replaceRewardBoxSpine = function (t, e) {
        var o = null == t ? void 0 : t.getAnimSkeleton;
        if (o && cc.isValid(o.node)) {
            var i = BaseSpine_1.default.refreshWithNode(o.node, e, this.bundleName);
            null == i || i.setOnReadyCallback(function () {
                cc.isValid(t) && "function" == typeof t.hookRewardNodes && t.hookRewardNodes();
            });
        }
    };
    WinLayoutOptTrait.prototype.onWinVw_mvSubTitToBtnBtm = function (t, e) {
        var o = t.ins;
        this.setSubtitlePosition(o);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    WinLayoutOptTrait.prototype.onDCWinVw_mvSubTitToBtnBtm = function (t, e) {
        var o = t.ins;
        this.setSubtitlePosition(o);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    WinLayoutOptTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var o = this, i = t.ins;
        i.scheduleOnce(function () {
            cc.isValid(i) && o.setSubtitlePosition(i);
        }, 0);
        e();
    };
    WinLayoutOptTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        var o = this, i = t.ins;
        i.scheduleOnce(function () {
            cc.isValid(i) && o.setSubtitlePosition(i);
        }, 0);
        e();
    };
    WinLayoutOptTrait.prototype.setSubtitlePosition = function (t) {
        var e;
        if (cc.isValid(t)) {
            var o = null === (e = t.getContentNode) || void 0 === e ? void 0 : e.call(t);
            if (cc.isValid(o)) {
                var i = o.getChildByName("lbl_subtitle");
                cc.isValid(i) && (i.y = this.subtitleY);
            }
        }
    };
    WinLayoutOptTrait.prototype.onLvBoxProg_barBoxEnter = function (t, e) {
        var o = t.ins;
        this.adjustBarLayoutPosition(o, true);
        e();
    };
    WinLayoutOptTrait.prototype.onBoxRwdUI_barBoxEnter = function (t, e) {
        var o = t.ins;
        this.adjustBarLayoutPosition(o, true);
        e();
    };
    WinLayoutOptTrait.prototype.onLvBoxProg_showNextBox = function (t, e) {
        var o = t.ins;
        this.adjustBarLayoutPosition(o, true);
        e();
    };
    WinLayoutOptTrait.prototype.adjustBarLayoutPosition = function (t, e) {
        if (e === void 0) { e = false; }
        var o, i;
        if (cc.isValid(null == t ? void 0 : t.node)) {
            var n = t.node.getChildByName("BarLayout"), r = t.node.getChildByName("BoxBtn");
            if (n) {
                NodeSkinTool_1.default.applyWidgetInfo(n, {
                    isAlignBottom: true,
                    bottom: this.barLayoutBottom,
                    isAlignTop: false,
                    isAlignVerticalCenter: false
                });
                var a = n.getComponent(cc.Widget);
                a && a.updateAlignment();
            }
            var l = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.boxBtnOffset) && void 0 !== i ? i : 24;
            r && n && (e && t.scheduleOnce ? t.scheduleOnce(function () {
                cc.isValid(r) && cc.isValid(n) && (r.y = n.y + l);
            }, 0) : r.y = n.y + l);
        }
    };
    WinLayoutOptTrait.traitKey = "WinLayoutOpt";
    WinLayoutOptTrait = __decorate([
        mj.trait,
        mj.class("WinLayoutOptTrait")
    ], WinLayoutOptTrait);
    return WinLayoutOptTrait;
}(Trait_1.default));
exports.default = WinLayoutOptTrait;

cc._RF.pop();