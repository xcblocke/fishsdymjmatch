
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daxiaochangebg/Scripts/DaxiaoChangeBgTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RheGlhb2NoYW5nZWJnL1NjcmlwdHMvRGF4aWFvQ2hhbmdlQmdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWtFO0FBQ2xFLHdGQUFvRjtBQUNwRiw2RkFBc0Y7QUFDdEYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwyRUFBZ0c7QUFDaEcscUdBQWdJO0FBQ2hJLHNFQUFpRTtBQUdqRTtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQWlRQztRQWhRQyxtQkFBYSxHQUFHLGFBQWEsQ0FBQzs7SUFnUWhDLENBQUM7SUE5UEMsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLCtDQUFtQixDQUFDLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUUsMkJBQTJCO1lBQ2pDLE1BQU0sRUFBRSxpQkFBaUI7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0NBQW1CLENBQUMsTUFBTSxFQUFFO1lBQzdDLElBQUksRUFBRSwyQkFBMkI7WUFDakMsTUFBTSxFQUFFLG1CQUFtQjtTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywrQ0FBbUIsQ0FBQyxRQUFRLEVBQUU7WUFDL0MsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyxNQUFNLEVBQUUsZ0JBQWdCO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLCtDQUFtQixDQUFDLE1BQU0sRUFBRTtZQUM3QyxJQUFJLEVBQUUsMkJBQTJCO1lBQ2pDLE1BQU0s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QUM7T0FDWCxtQkFBbUIsQ0FpUXZDO0lBQUQsMEJBQUM7Q0FqUUQsQUFpUUMsQ0FqUWdELGVBQUssR0FpUXJEO2tCQWpRb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVZUX01TR19LRVlfQ0hBTkdFVEhFTUUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVEYXhpYW9QbGF5QW5pbVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvRGF4aWFvQ2xlYXJFZmZlY3RCZWhhdmlvcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEJhc2VTcHJpdGUsIHsgU1BSSVRFX0xPQURfQ09NUExFVEUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIsIHsgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvTG93UHJpb3JpdHlCdW5kbGVMb2FkZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGF4aWFvQ2hhbmdlQmdUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF4aWFvQ2hhbmdlQmdUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgQ19EYXhpYW9UaGVtZSA9IFwiRGF4aWFvVGhlbWVcIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYXhpYW9DaGFuZ2VCZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYmdjb25maWcgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fYmdjb25maWcuc2V0KEVEYXhpYW9QbGF5QW5pbVR5cGUuQmFzZSwge1xuICAgICAgcGF0aDogXCJ0ZXh0dXJlL2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgICBidW5kbGU6IFwicl9kYXhpYW9iZzFiYXNlXCJcbiAgICB9KTtcbiAgICB0aGlzLl9iZ2NvbmZpZy5zZXQoRURheGlhb1BsYXlBbmltVHlwZS5DYWlEYWksIHtcbiAgICAgIHBhdGg6IFwidGV4dHVyZS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvYmcyY2FpZGFpXCJcbiAgICB9KTtcbiAgICB0aGlzLl9iZ2NvbmZpZy5zZXQoRURheGlhb1BsYXlBbmltVHlwZS5NYXhpdHVhbiwge1xuICAgICAgcGF0aDogXCJ0ZXh0dXJlL2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgICBidW5kbGU6IFwicl9kYXhpYW9iZzRteHRcIlxuICAgIH0pO1xuICAgIHRoaXMuX2JnY29uZmlnLnNldChFRGF4aWFvUGxheUFuaW1UeXBlLkdhcmRlbiwge1xuICAgICAgcGF0aDogXCJ0ZXh0dXJlL2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgICBidW5kbGU6IFwicl9kYXhpYW9iZzVnYXJkZW5cIlxuICAgIH0pO1xuICAgIHRoaXMuX2JnY29uZmlnLnNldChFRGF4aWFvUGxheUFuaW1UeXBlLkhhaXlhbmcsIHtcbiAgICAgIHBhdGg6IFwidGV4dHVyZS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvYmc2aGFpeWFuZ1wiXG4gICAgfSk7XG4gICAgdGhpcy5fYmdjb25maWcuc2V0KEVEYXhpYW9QbGF5QW5pbVR5cGUuSHVkaWUsIHtcbiAgICAgIHBhdGg6IFwidGV4dHVyZS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvYmc3aHVkaWVcIlxuICAgIH0pO1xuICAgIHRoaXMuX2JnY29uZmlnLnNldChFRGF4aWFvUGxheUFuaW1UeXBlLkd1b2ZlbmcsIHtcbiAgICAgIHBhdGg6IFwidGV4dHVyZS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvYmc4Z3VvZmVuZ1wiXG4gICAgfSk7XG4gICAgdGhpcy5fYmdjb25maWcuc2V0KEVEYXhpYW9QbGF5QW5pbVR5cGUuU2hpcGluLCB7XG4gICAgICBwYXRoOiBcInRleHR1cmUvZ2FtZXBsYXlfYmdfYm9hcmRcIixcbiAgICAgIGJ1bmRsZTogXCJyX2RheGlhb2JnOXNoaXBpblwiXG4gICAgfSk7XG4gICAgdGhpcy5fYmdjb25maWcuc2V0KEVEYXhpYW9QbGF5QW5pbVR5cGUuWmhlc2hhbiwge1xuICAgICAgcGF0aDogXCJ0ZXh0dXJlL2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgICBidW5kbGU6IFwicl9kYXhpYW9iZzEwemhlc2hhblwiXG4gICAgfSk7XG4gICAgdGhpcy5fYmdjb25maWcuc2V0KEVEYXhpYW9QbGF5QW5pbVR5cGUuWWlueGlhbmcsIHtcbiAgICAgIHBhdGg6IFwidGV4dHVyZS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgICAgYnVuZGxlOiBcInJfZGF4aWFvYmcxMXlpbnhpYW5nXCJcbiAgICB9KTtcbiAgICB2YXIgaSA9IHRoaXMuY3VyVXNlVHlwZShNakdhbWVUeXBlLk5vcm1hbCksXG4gICAgICByID0gdGhpcy5jdXJVc2VUeXBlKE1qR2FtZVR5cGUuVHJhdmVsKSxcbiAgICAgIG4gPSB0aGlzLmN1clVzZVR5cGUoTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSk7XG4gICAgaSAmJiBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmFkZFRhc2sodGhpcy5fYmdjb25maWcuZ2V0KGkpLmJ1bmRsZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdERhWGlhbyk7XG4gICAgciAmJiBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmFkZFRhc2sodGhpcy5fYmdjb25maWcuZ2V0KHIpLmJ1bmRsZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdERhWGlhbyk7XG4gICAgbiAmJiBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmFkZFRhc2sodGhpcy5fYmdjb25maWcuZ2V0KG4pLmJ1bmRsZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdERhWGlhbyk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyh0aGlzLl9iZ2NvbmZpZy5rZXlzKCkpLCBsID0gcy5uZXh0KCk7ICFsLmRvbmU7IGwgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGwudmFsdWU7XG4gICAgICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuYWRkVGFzayh0aGlzLl9iZ2NvbmZpZy5nZXQoZCkuYnVuZGxlLCBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eS5EZWZhdWx0RGFYaWFvKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChhID0gcy5yZXR1cm4pICYmIGEuY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlc2V0U2tpbkJ0bkRhdGEoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIlVJU2V0RGxnQ3RybF9zaG93UnN0U2tpblwiXG4gICAgfV0pO1xuICB9XG4gIGN1clVzZVR5cGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgYSA9IG51bGwgPT09ICh0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKGUpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldFRoZW1lKCk7XG4gICAgcmV0dXJuIGEgJiYgYS5zdGFydHNXaXRoKHRoaXMuQ19EYXhpYW9UaGVtZSkgJiYgdGhpcy5fYmdjb25maWcuaGFzKGEpID8gYSA6IG51bGw7XG4gIH1cbiAgb25EYXhpYW9CaHJfY2hhbmdlQmcoZSwgdCkge1xuICAgIHZhciBhLFxuICAgICAgaSA9IG51bGwgPT09IChhID0gZS5hcmdzWzFdKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmdhbWVWaWV3LFxuICAgICAgciA9IHRoaXMuY3VyVXNlVHlwZShudWxsID09IGkgPyB2b2lkIDAgOiBpLmdhbWVUeXBlKSxcbiAgICAgIG4gPSBlLmFyZ3NbMF07XG4gICAgaWYgKG4gJiYgciAhPSBuKSB7XG4gICAgICB2YXIgbyA9IG4sXG4gICAgICAgIGMgPSB0aGlzLl9iZ2NvbmZpZy5nZXQobyk7XG4gICAgICBpZiAoIWMgfHwgIUxvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQoYy5idW5kbGUpKSB7XG4gICAgICAgIHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRVZUX01TR19LRVlfQ0hBTkdFVEhFTUUsIGkuZ2FtZVR5cGUsIG8sIGZhbHNlKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uTWFpbkdtVndfYmVDaGFuZ2VUaGVtZShlLCB0KSB7XG4gICAgdmFyIGEgPSBlLmlucyxcbiAgICAgIGkgPSAoZS5hcmdzWzBdLCBlLmFyZ3NbMV0pO1xuICAgIGUuYXJnc1syXTtcbiAgICBpICYmICFpLnN0YXJ0c1dpdGgodGhpcy5DX0RheGlhb1RoZW1lKSAmJiB0aGlzLnJlc2V0QmcoYSk7XG4gICAgdCgpO1xuICB9XG4gIG9uTWFpbkdtVndfYWZDaGFuZ2VUaGVtZShlLCB0KSB7XG4gICAgdmFyIGEgPSBlLmlucyxcbiAgICAgIGkgPSAoZS5hcmdzWzBdLCBlLmFyZ3NbMV0pLFxuICAgICAgciA9IGUuYXJnc1syXTtcbiAgICBhICYmIGkgJiYgaS5zdGFydHNXaXRoKHRoaXMuQ19EYXhpYW9UaGVtZSkgJiYgdGhpcy5jaGFuZ2VCZyhpLCBhLCAhcik7XG4gICAgdCgpO1xuICB9XG4gIGlzSGlkZU1hc2soKSB7XG4gICAgcmV0dXJuIC0xICE9IHRoaXMuX3RyYWl0RGF0YS5oaWRlTWFzaztcbiAgfVxuICBjaGFuZ2VCZyhlLCB0LCBhID0gdHJ1ZSkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICB2YXIgciA9IHQuZ2FtZU5vZGUsXG4gICAgICBuID0gdGhpcy5fYmdjb25maWcuZ2V0KGUpO1xuICAgIGlmIChuICYmIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQobi5idW5kbGUpICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgIHZhciBvID0gci5nZXRTaWJsaW5nSW5kZXgoKSxcbiAgICAgICAgcyA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLFxuICAgICAgICBjID0gcy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJkYXhpYW9iZ1wiKTtcbiAgICAgIGNjLmlzVmFsaWQoYykgJiYgKGMubmFtZSA9IFwiZGF4aWFvYmdfcmVzZXRcIik7XG4gICAgICBpZiAodGhpcy5pc0hpZGVNYXNrKCkpIHtcbiAgICAgICAgdmFyIGcgPSBjYy5maW5kKFwiZ2FtZXBsYXlfYmdfbWFza19ib3R0b21cIiwgcik7XG4gICAgICAgIGNjLmlzVmFsaWQoZykgJiYgKGcuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICB0LmdhbWVVSSAmJiBjYy5pc1ZhbGlkKHQuZ2FtZVVJLm5vZGUpICYmIChjYy5maW5kKFwibm9kZVRvcC9nYW1lcGxheV9iZ19tYXNrX3RvcFwiLCB0LmdhbWVVSS5ub2RlKS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICB9XG4gICAgICB2YXIgbCA9IG5ldyBjYy5Ob2RlKFwiZGF4aWFvYmdcIik7XG4gICAgICBsLnBhcmVudCA9IHMucGFyZW50O1xuICAgICAgbC5zZXRTaWJsaW5nSW5kZXgobyk7XG4gICAgICBsLm9uY2UoU1BSSVRFX0xPQURfQ09NUExFVEUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgICAgIHZhciByID0gZS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgaWYgKHIgJiYgci5nZXRSZWN0KCkud2lkdGggPiAwICYmIHIuZ2V0UmVjdCgpLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSBjYy5zaXplKHIuZ2V0UmVjdCgpLndpZHRoLCByLmdldFJlY3QoKS5oZWlnaHQpO1xuICAgICAgICAgICAgICBsLnNldENvbnRlbnRTaXplKG4pO1xuICAgICAgICAgICAgICB2YXIgbyA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbnRlbnRTaXplKCksXG4gICAgICAgICAgICAgICAgcyA9IG4ud2lkdGggLyBuLmhlaWdodDtcbiAgICAgICAgICAgICAgaWYgKG8ud2lkdGggLyBvLmhlaWdodCA+IHMpIHtcbiAgICAgICAgICAgICAgICBsLnNldFNjYWxlKG8ud2lkdGggLyBuLndpZHRoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsLnNldFNjYWxlKG8uaGVpZ2h0IC8gbi5oZWlnaHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZyA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgICAgICAgICAgaS5yZXNldE90aGVyTm9kZXModCk7XG4gICAgICAgICAgICBpZiAoYSkgaS5ydW5TaG93VHdlZW4obCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjYy5pc1ZhbGlkKGcpICYmIChnLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICAgICAgY2MuaXNWYWxpZChjKSAmJiBjLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO2Vsc2Uge1xuICAgICAgICAgICAgICBjYy5pc1ZhbGlkKGcpICYmIChnLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICAgICAgY2MuaXNWYWxpZChjKSAmJiBjLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobCwgbi5wYXRoLCBmYWxzZSwgdHJ1ZSwgbi5idW5kbGUpO1xuICAgICAgYSAmJiAobC5vcGFjaXR5ID0gMCk7XG4gICAgfVxuICB9XG4gIHJlc2V0T3RoZXJOb2RlcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBhLFxuICAgICAgaSA9IG51bGwgPT09ICh0ID0gZS5nYW1lVUkuYnRuU2h1ZmZsZSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIiksXG4gICAgICByID0gbnVsbCA9PT0gKGEgPSBlLmdhbWVVSS5idG5IaXRUaXBzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcbiAgICBjYy5pc1ZhbGlkKGkpICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGksIFwidGV4dHVyZS9nYW1lUGxheS9nYW1lcGxheV9idG5fcmVmcmVzaFwiLCBmYWxzZSwgdHJ1ZSwgXCJtYWluUmVzXCIpO1xuICAgIGNjLmlzVmFsaWQocikgJiYgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUociwgXCJ0ZXh0dXJlL2dhbWVQbGF5L2dhbWVwbGF5X2J0bl9oaW50XCIsIGZhbHNlLCB0cnVlLCBcIm1haW5SZXNcIik7XG4gIH1cbiAgcnVuU2hvd1R3ZWVuKGUsIHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgY2MudHdlZW4oZSkudG8oMC4yLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkuY2FsbCh0KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBudWxsID09IHQgfHwgdCgpO1xuICAgIH1cbiAgfVxuICByZXNldEJnKGUpIHtcbiAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgIHZhciB0ID0gZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIiksXG4gICAgICAgIGEgPSBlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkYXhpYW9iZ1wiKTtcbiAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChhKSkge1xuICAgICAgICBhLm5hbWUgPSBcImRheGlhb2JnX3Jlc2V0XCI7XG4gICAgICAgIGNjLnR3ZWVuKGEpLnRvKDAuMiwge1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZChhKSAmJiBhLmRlc3Ryb3koKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzSGlkZU1hc2soKSkge1xuICAgICAgICB2YXIgaSA9IGNjLmZpbmQoXCJnYW1lcGxheV9iZ19tYXNrX2JvdHRvbVwiLCBlLmdhbWVOb2RlKTtcbiAgICAgICAgY2MuaXNWYWxpZChpKSAmJiAoaS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgICAgZS5nYW1lVUkgJiYgY2MuaXNWYWxpZChlLmdhbWVVSS5ub2RlKSAmJiAoY2MuZmluZChcIm5vZGVUb3AvZ2FtZXBsYXlfYmdfbWFza190b3BcIiwgZS5nYW1lVUkubm9kZSkuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXMoZSwgdCkge1xuICAgIHZhciBhID0gdGhpcy5jdXJVc2VUeXBlKGUuaW5zLmdhbWVUeXBlKTtcbiAgICBpZiAoYSkge1xuICAgICAgdmFyIGkgPSBlLmlucztcbiAgICAgIHRyeSB7XG4gICAgICAgIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQodGhpcy5fYmdjb25maWcuZ2V0KGEpLmJ1bmRsZSkgJiYgaS5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgW3RoaXMuX2JnY29uZmlnLmdldChhKS5idW5kbGUgKyBcIjpcIiArIHRoaXMuX2JnY29uZmlnLmdldChhKS5wYXRoXSk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgb25NYWluR21Wd19yZXNldFRoZW1lKGUsIHQpIHtcbiAgICB2YXIgYSA9IGUuaW5zLFxuICAgICAgaSA9IChlLmFyZ3NbMF0sIGUuYXJnc1sxXSwgZS5hcmdzWzJdKTtcbiAgICBpICYmIGkuc3RhcnRzV2l0aCh0aGlzLkNfRGF4aWFvVGhlbWUpICYmIHRoaXMucmVzZXRCZyhhKTtcbiAgICB0KCk7XG4gIH1cbiAgb25VSVNldERsZ0N0cmxfaW5pdERSZXMoZSwgdCkge1xuICAgIHQoKTtcbiAgfVxuICBvblVJU2V0RGxnX2Noa0FkZEJhY2soZSwgdCkge1xuICAgIHQoKTtcbiAgfVxuICBvblVJU2V0RGxnQ3RybF9zaG93UnN0U2tpbihlLCB0KSB7XG4gICAgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgcmVzZXRTa2luQnRuRGF0YSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBhID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBpID0gW01qR2FtZVR5cGUuTm9ybWFsLCBNakdhbWVUeXBlLlRyYXZlbCwgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZV07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHIgPSBfX3ZhbHVlcyhpKSwgbiA9IHIubmV4dCgpOyAhbi5kb25lOyBuID0gci5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBuLnZhbHVlLFxuICAgICAgICAgIGcgPSBcImhhc1Nob3dSZXNldFNraW5CdG5fXCIgKyBzO1xuICAgICAgICBpZiAoMSA9PT0gdGhpcy5sb2NhbERhdGFbZ10pIHtcbiAgICAgICAgICB2YXIgbCA9IGEuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHMpO1xuICAgICAgICAgIGlmICghbCkgY29udGludWU7XG4gICAgICAgICAgbC5zZXRIYXNTaG93UmVzZXRTa2luQnRuKDEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmxvY2FsRGF0YVtnXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKHQgPSByLnJldHVybikgJiYgdC5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhc0NoYW5nZWRXYWxscGFwZXIoZSkge1xuICAgIHJldHVybiAhIXRoaXMuY3VyVXNlVHlwZShlKTtcbiAgfVxufSJdfQ==