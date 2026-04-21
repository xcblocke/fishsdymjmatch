"use strict";
cc._RF.push(module, '81a58M1S3lHyq5BtH2o+std', 'DaxiaoChangeBgTrait');
// subpackages/l_daxiaochangebg/Scripts/DaxiaoChangeBgTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DaxiaoClearEffectBehavior_1 = require("../../../Scripts/base/DaxiaoClearEffectBehavior");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DaxiaoChangeBgTrait = /** @class */ (function (_super) {
    __extends(DaxiaoChangeBgTrait, _super);
    function DaxiaoChangeBgTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.C_DaxiaoTheme = "DaxiaoTheme";
        return _this;
    }
    DaxiaoChangeBgTrait.prototype.onLoad = function () {
        var t, a;
        _super.prototype.onLoad.call(this);
        this._bgconfig = new Map();
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Base, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg1base"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.CaiDai, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg2caidai"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Maxituan, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg4mxt"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Garden, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg5garden"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Haiyang, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg6haiyang"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Hudie, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg7hudie"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Guofeng, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg8guofeng"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Shipin, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg9shipin"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Zheshan, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg10zheshan"
        });
        this._bgconfig.set(DaxiaoClearEffectBehavior_1.EDaxiaoPlayAnimType.Yinxiang, {
            path: "texture/gameplay_bg_board",
            bundle: "r_daxiaobg11yinxiang"
        });
        var i = this.curUseType(GameTypeEnums_1.MjGameType.Normal), r = this.curUseType(GameTypeEnums_1.MjGameType.Travel), n = this.curUseType(GameTypeEnums_1.MjGameType.DailyChallenge);
        i && LowPriorityBundleLoader_1.default.getInstance().addTask(this._bgconfig.get(i).bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        r && LowPriorityBundleLoader_1.default.getInstance().addTask(this._bgconfig.get(r).bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        n && LowPriorityBundleLoader_1.default.getInstance().addTask(this._bgconfig.get(n).bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
        try {
            for (var s = __values(this._bgconfig.keys()), l = s.next(); !l.done; l = s.next()) {
                var d = l.value;
                LowPriorityBundleLoader_1.default.getInstance().addTask(this._bgconfig.get(d).bundle, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultDaXiao);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (a = s.return) && a.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this.resetSkinBtnData();
        this.registerEvent([{
                event: "UISetDlgCtrl_showRstSkin"
            }]);
    };
    DaxiaoChangeBgTrait.prototype.curUseType = function (e) {
        var t, a = null === (t = UserModel_1.default.getInstance().getGameDataByGameType(e)) || void 0 === t ? void 0 : t.getTheme();
        return a && a.startsWith(this.C_DaxiaoTheme) && this._bgconfig.has(a) ? a : null;
    };
    DaxiaoChangeBgTrait.prototype.onDaxiaoBhr_changeBg = function (e, t) {
        var a, i = null === (a = e.args[1]) || void 0 === a ? void 0 : a.gameView, r = this.curUseType(null == i ? void 0 : i.gameType), n = e.args[0];
        if (n && r != n) {
            var o = n, c = this._bgconfig.get(o);
            if (!c || !LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(c.bundle)) {
                t();
                return;
            }
            mj.EventManager.emit(Config_1.EVT_MSG_KEY_CHANGETHEME, i.gameType, o, false);
        }
        t();
    };
    DaxiaoChangeBgTrait.prototype.onMainGmVw_beChangeTheme = function (e, t) {
        var a = e.ins, i = (e.args[0], e.args[1]);
        e.args[2];
        i && !i.startsWith(this.C_DaxiaoTheme) && this.resetBg(a);
        t();
    };
    DaxiaoChangeBgTrait.prototype.onMainGmVw_afChangeTheme = function (e, t) {
        var a = e.ins, i = (e.args[0], e.args[1]), r = e.args[2];
        a && i && i.startsWith(this.C_DaxiaoTheme) && this.changeBg(i, a, !r);
        t();
    };
    DaxiaoChangeBgTrait.prototype.isHideMask = function () {
        return -1 != this._traitData.hideMask;
    };
    DaxiaoChangeBgTrait.prototype.changeBg = function (e, t, a) {
        if (a === void 0) { a = true; }
        var i = this;
        var r = t.gameNode, n = this._bgconfig.get(e);
        if (n && LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(n.bundle) && cc.isValid(r)) {
            var o = r.getSiblingIndex(), s = t.node.getChildByName("bg"), c = s.parent.getChildByName("daxiaobg");
            cc.isValid(c) && (c.name = "daxiaobg_reset");
            if (this.isHideMask()) {
                var g = cc.find("gameplay_bg_mask_bottom", r);
                cc.isValid(g) && (g.active = false);
                t.gameUI && cc.isValid(t.gameUI.node) && (cc.find("nodeTop/gameplay_bg_mask_top", t.gameUI.node).active = false);
            }
            var l = new cc.Node("daxiaobg");
            l.parent = s.parent;
            l.setSiblingIndex(o);
            l.once(BaseSprite_1.SPRITE_LOAD_COMPLETE, function (e) {
                if (t && cc.isValid(t.node)) {
                    var r = e.spriteFrame;
                    if (r) {
                        if (r && r.getRect().width > 0 && r.getRect().height > 0) {
                            var n = cc.size(r.getRect().width, r.getRect().height);
                            l.setContentSize(n);
                            var o = cc.Canvas.instance.node.getContentSize(), s = n.width / n.height;
                            if (o.width / o.height > s) {
                                l.setScale(o.width / n.width);
                            }
                            else {
                                l.setScale(o.height / n.height);
                            }
                        }
                        var g = t.node.getChildByName("bg");
                        i.resetOtherNodes(t);
                        if (a)
                            i.runShowTween(l, function () {
                                cc.isValid(g) && (g.active = false);
                                cc.isValid(c) && c.destroy();
                            });
                        else {
                            cc.isValid(g) && (g.active = false);
                            cc.isValid(c) && c.destroy();
                        }
                    }
                }
            });
            BaseSprite_1.default.refreshWithNode(l, n.path, false, true, n.bundle);
            a && (l.opacity = 0);
        }
    };
    DaxiaoChangeBgTrait.prototype.resetOtherNodes = function (e) {
        var t, a, i = null === (t = e.gameUI.btnShuffle) || void 0 === t ? void 0 : t.getChildByName("Background"), r = null === (a = e.gameUI.btnHitTips) || void 0 === a ? void 0 : a.getChildByName("Background");
        cc.isValid(i) && BaseSprite_1.default.refreshWithNode(i, "texture/gamePlay/gameplay_btn_refresh", false, true, "mainRes");
        cc.isValid(r) && BaseSprite_1.default.refreshWithNode(r, "texture/gamePlay/gameplay_btn_hint", false, true, "mainRes");
    };
    DaxiaoChangeBgTrait.prototype.runShowTween = function (e, t) {
        if (cc.isValid(e)) {
            cc.tween(e).to(0.2, {
                opacity: 255
            }).call(t).start();
        }
        else {
            null == t || t();
        }
    };
    DaxiaoChangeBgTrait.prototype.resetBg = function (e) {
        if (e && cc.isValid(e.node)) {
            var t = e.node.getChildByName("bg"), a = e.node.getChildByName("daxiaobg");
            cc.isValid(t) && (t.active = true);
            if (cc.isValid(a)) {
                a.name = "daxiaobg_reset";
                cc.tween(a).to(0.2, {
                    opacity: 0
                }).call(function () {
                    cc.isValid(a) && a.destroy();
                }).start();
            }
            if (this.isHideMask()) {
                var i = cc.find("gameplay_bg_mask_bottom", e.gameNode);
                cc.isValid(i) && (i.active = true);
                e.gameUI && cc.isValid(e.gameUI.node) && (cc.find("nodeTop/gameplay_bg_mask_top", e.gameUI.node).active = true);
            }
        }
    };
    DaxiaoChangeBgTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        var a = this.curUseType(e.ins.gameType);
        if (a) {
            var i = e.ins;
            try {
                LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(this._bgconfig.get(a).bundle) && i.addPreloadRes("SpriteFrame", [this._bgconfig.get(a).bundle + ":" + this._bgconfig.get(a).path]);
            }
            catch (e) { }
        }
        t();
    };
    DaxiaoChangeBgTrait.prototype.onMainGmVw_resetTheme = function (e, t) {
        var a = e.ins, i = (e.args[0], e.args[1], e.args[2]);
        i && i.startsWith(this.C_DaxiaoTheme) && this.resetBg(a);
        t();
    };
    DaxiaoChangeBgTrait.prototype.onUISetDlgCtrl_initDRes = function (e, t) {
        t();
    };
    DaxiaoChangeBgTrait.prototype.onUISetDlg_chkAddBack = function (e, t) {
        t();
    };
    DaxiaoChangeBgTrait.prototype.onUISetDlgCtrl_showRstSkin = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    DaxiaoChangeBgTrait.prototype.resetSkinBtnData = function () {
        var e, t, a = UserModel_1.default.getInstance(), i = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
        try {
            for (var r = __values(i), n = r.next(); !n.done; n = r.next()) {
                var s = n.value, g = "hasShowResetSkinBtn_" + s;
                if (1 === this.localData[g]) {
                    var l = a.getGameDataByGameType(s);
                    if (!l)
                        continue;
                    l.setHasShowResetSkinBtn(1);
                    delete this.localData[g];
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = r.return) && t.call(r);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    DaxiaoChangeBgTrait.prototype.hasChangedWallpaper = function (e) {
        return !!this.curUseType(e);
    };
    DaxiaoChangeBgTrait.traitKey = "DaxiaoChangeBg";
    DaxiaoChangeBgTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoChangeBgTrait")
    ], DaxiaoChangeBgTrait);
    return DaxiaoChangeBgTrait;
}(Trait_1.default));
exports.default = DaxiaoChangeBgTrait;

cc._RF.pop();