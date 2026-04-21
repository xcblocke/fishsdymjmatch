"use strict";
cc._RF.push(module, '1a945cl/4BPD54+zwhZpAnV', 'DailyWallpaperTrait');
// subpackages/r_changeWallpaper/Scripts/DailyWallpaperTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var y = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge, GameTypeEnums_1.MjGameType.Tile2Normal];
var DailyWallpaperTrait = /** @class */ (function (_super) {
    __extends(DailyWallpaperTrait, _super);
    function DailyWallpaperTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startDay = 2;
        return _this;
    }
    DailyWallpaperTrait_1 = DailyWallpaperTrait;
    DailyWallpaperTrait.prototype.onLoad = function () {
        var t, a;
        _super.prototype.onLoad.call(this);
        this._startDay = null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.startDay) && void 0 !== a ? a : 2;
        void 0 === this.localData.wallpaperIndex && (this.localData.wallpaperIndex = 0);
        this.localData.lastShowTimestamp || (this.localData.lastShowTimestamp = 0);
        this.localData.lastWinTimestamp || (this.localData.lastWinTimestamp = 0);
        void 0 === this.localData.todayStartWallpaperIndex && (this.localData.todayStartWallpaperIndex = -1);
        this.localData.recordDate || (this.localData.recordDate = 0);
        this.registerEvent([{
                event: "Tile2WinVw_show"
            }]);
    };
    DailyWallpaperTrait.prototype.isSameDay = function (e, t) {
        var a = new Date(e), r = new Date(t);
        return a.getFullYear() === r.getFullYear() && a.getMonth() === r.getMonth() && a.getDate() === r.getDate();
    };
    DailyWallpaperTrait.prototype.getTodayDate = function () {
        var e = new Date();
        return 10000 * e.getFullYear() + 100 * (e.getMonth() + 1) + e.getDate();
    };
    DailyWallpaperTrait.prototype.getDateFromTimestamp = function (e) {
        if (!e)
            return 0;
        var t = new Date(e);
        return 10000 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
    };
    DailyWallpaperTrait.prototype.isEnabled = function () {
        return !((UserModel_1.default.getInstance().getGameActiveDays() || 0) < this._startDay);
    };
    DailyWallpaperTrait.prototype.hasLastWallpaperWon = function () {
        return !!this.localData.lastShowTimestamp && !!this.localData.lastWinTimestamp && this.localData.lastWinTimestamp >= this.localData.lastShowTimestamp;
    };
    DailyWallpaperTrait.prototype.checkAndUpdateDailyRecord = function () {
        var e = this.getTodayDate();
        if (this.localData.recordDate !== e) {
            this.localData.todayStartWallpaperIndex = this.localData.wallpaperIndex;
            this.localData.todayStartWallpaperIndex = this.localData.todayStartWallpaperIndex;
            this.localData.recordDate = e;
            this.localData.recordDate = this.localData.recordDate;
            0 === this.localData.todayStartWallpaperIndex && this.localData.recordDate;
        }
    };
    DailyWallpaperTrait.prototype.hasTodayShownNewWallpaper = function () {
        if (this.localData.wallpaperIndex !== this.localData.todayStartWallpaperIndex)
            return true;
        if (this.localData.lastShowTimestamp > 0) {
            var e = this.getTodayDate();
            return this.getDateFromTimestamp(this.localData.lastShowTimestamp) === e;
        }
        return false;
    };
    DailyWallpaperTrait.prototype.hasTodayNewWallpaperWon = function () {
        return !!this.hasTodayShownNewWallpaper() && !!this.localData.lastWinTimestamp && this.localData.lastWinTimestamp >= this.localData.lastShowTimestamp;
    };
    DailyWallpaperTrait.prototype.markTodayWon = function () {
        var e, t = null === (e = UserModel_1.default.getInstance().getMainGameData()) || void 0 === e ? void 0 : e.getTheme();
        if (t && this.isDailyWallpaperTheme(t)) {
            var a = Date.now();
            this.localData.lastWinTimestamp = a;
            this.localData.lastWinTimestamp = this.localData.lastWinTimestamp;
        }
    };
    DailyWallpaperTrait.prototype.getCurrentWallpaper = function () {
        var e = this.localData.wallpaperIndex % DailyWallpaperTrait_1.WALLPAPER_LIST.length;
        return DailyWallpaperTrait_1.WALLPAPER_LIST[e];
    };
    DailyWallpaperTrait.prototype.nextWallpaper = function () {
        this.localData.wallpaperIndex = (this.localData.wallpaperIndex + 1) % DailyWallpaperTrait_1.WALLPAPER_LIST.length;
        this.localData.wallpaperIndex = this.localData.wallpaperIndex;
        this.localData.lastShowTimestamp = Date.now();
        this.localData.lastShowTimestamp = this.localData.lastShowTimestamp;
    };
    DailyWallpaperTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        if (this.isEnabled()) {
            if (this.hasTodayNewWallpaperWon())
                t();
            else {
                if (!this.hasTodayShownNewWallpaper() && this.hasLastWallpaperWon()) {
                    var r = (this.localData.wallpaperIndex + 1) % DailyWallpaperTrait_1.WALLPAPER_LIST.length, l = DailyWallpaperTrait_1.WALLPAPER_LIST[r];
                    try {
                        e.ins.addPreloadRes("SpriteFrame", [DailyWallpaperTrait_1.C_BUNDLE_NAME + ":" + l.path]);
                    }
                    catch (e) { }
                }
                else {
                    var i = this.getCurrentWallpaper();
                    try {
                        e.ins.addPreloadRes("SpriteFrame", [DailyWallpaperTrait_1.C_BUNDLE_NAME + ":" + i.path]);
                    }
                    catch (e) { }
                }
                t();
            }
        }
        else
            t();
    };
    DailyWallpaperTrait.prototype.onWinVw_showWinVw = function (e, t) {
        this.isEnabled() && this.markTodayWon();
        t();
    };
    DailyWallpaperTrait.prototype.onTLWinVw_showTLWinVw = function (e, t) {
        this.isEnabled() && this.markTodayWon();
        t();
    };
    DailyWallpaperTrait.prototype.onDCWinVw_showWinVw = function (e, t) {
        this.isEnabled() && this.markTodayWon();
        t();
    };
    DailyWallpaperTrait.prototype.onTile2WinVw_show = function (e, t) {
        this.isEnabled() && this.markTodayWon();
        t();
    };
    DailyWallpaperTrait.prototype.handleGameStart = function (e) {
        if (e === void 0) { e = ""; }
        var t;
        var a = UserModel_1.default.getInstance(), r = a.getCurrentGameType();
        this.checkAndUpdateDailyRecord();
        if (this.hasTodayNewWallpaperWon()) {
            if (r) {
                var l = null === (t = a.getMainGameData()) || void 0 === t ? void 0 : t.getTheme();
                if (l && this.isDailyWallpaperTheme(l)) {
                    this.dispatchEvent(Config_1.EVT_MSG_KEY_RESETTHEME, r, "", l);
                    this.setThemeForAllGameTypes("");
                }
            }
        }
        else if (!this.hasTodayShownNewWallpaper() && this.hasLastWallpaperWon()) {
            this.nextWallpaper();
            if (r) {
                var i = this.getCurrentWallpaper();
                this.dispatchEvent(Config_1.EVT_MSG_KEY_CHANGETHEME, r, i.type, true);
                this.setThemeForAllGameTypes(i.type);
            }
        }
        else {
            if (!this.localData.lastShowTimestamp) {
                this.localData.lastShowTimestamp = Date.now();
                this.localData.lastShowTimestamp = this.localData.lastShowTimestamp;
            }
            if (r) {
                i = this.getCurrentWallpaper();
                this.dispatchEvent(Config_1.EVT_MSG_KEY_CHANGETHEME, r, i.type, true);
                this.setThemeForAllGameTypes(i.type);
                this.hasTodayShownNewWallpaper();
            }
        }
    };
    DailyWallpaperTrait.prototype.onGsListener_onNewGame = function (e, t) {
        if (this.isEnabled()) {
            this.handleGameStart();
            t();
        }
        else
            t();
    };
    DailyWallpaperTrait.prototype.onMainGmVw_beChangeTheme = function (e, t) {
        if (this.isEnabled()) {
            var a = e.ins, r = e.args[1];
            a && r && !this.isDailyWallpaperTheme(r) && this.resetBg(a);
            t();
        }
        else
            t();
    };
    DailyWallpaperTrait.prototype.onMainGmVw_afChangeTheme = function (e, t) {
        var a = e.ins, r = e.args[1];
        if (a && r && this.isDailyWallpaperTheme(r)) {
            var l = this.getCurrentWallpaper();
            l && this.changeBg(l, a);
        }
        t();
    };
    DailyWallpaperTrait.prototype.onMainGmVw_resetTheme = function (e, t) {
        var a = e.ins, r = e.args[2];
        if (r && this.isDailyWallpaperTheme(r)) {
            this.isEnabled() && this.markTodayWon();
            this.setThemeForAllGameTypes("", true);
            this.resetBg(a);
        }
        t();
    };
    DailyWallpaperTrait.prototype.onUISetDlgCtrl_showRstSkin = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    DailyWallpaperTrait.prototype.isDailyWallpaperTheme = function (e) {
        return e && e.startsWith(DailyWallpaperTrait_1.C_THEME_PREFIX);
    };
    DailyWallpaperTrait.prototype.setThemeForAllGameTypes = function (e, t) {
        if (t === void 0) { t = false; }
        var a, r;
        var l = UserModel_1.default.getInstance(), i = l.getCurrentGameType();
        try {
            for (var n = __values(y), p = n.next(); !p.done; p = n.next()) {
                var s = p.value;
                if (s !== i) {
                    var c = l.getGameDataByGameType(s);
                    if (c) {
                        var d = null == c ? void 0 : c.getTheme();
                        if (t) {
                            d && this.isDailyWallpaperTheme(d) && c.setTheme(e);
                        }
                        else {
                            c.setTheme(e);
                        }
                    }
                }
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (r = n.return) && r.call(n);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
    };
    DailyWallpaperTrait.prototype.changeBg = function (e, t) {
        var r, l = t.gameNode;
        if (cc.isValid(l)) {
            var i = l.getSiblingIndex(), o = t.node.getChildByName("bg"), n = null === (r = null == o ? void 0 : o.parent) || void 0 === r ? void 0 : r.getChildByName("dailyWallpaperBg");
            cc.isValid(n) && n.destroy();
            var p = new cc.Node("dailyWallpaperBg");
            p.parent = null == o ? void 0 : o.parent;
            p.setSiblingIndex(i);
            p.once(BaseSprite_1.SPRITE_LOAD_COMPLETE, function (e) {
                if (t && cc.isValid(t.node)) {
                    var a = e.spriteFrame;
                    if (a) {
                        if (a.getRect().width > 0 && a.getRect().height > 0) {
                            var r = cc.size(a.getRect().width, a.getRect().height);
                            p.setContentSize(r);
                            var l = cc.Canvas.instance.node.getContentSize(), i = r.width / r.height;
                            if (l.width / l.height > i) {
                                p.setScale(l.width / r.width);
                            }
                            else {
                                p.setScale(l.height / r.height);
                            }
                        }
                        var o = t.node.getChildByName("bg");
                        cc.isValid(o) && (o.active = false);
                    }
                }
            });
            BaseSprite_1.default.refreshWithNode(p, e.path, false, true, DailyWallpaperTrait_1.C_BUNDLE_NAME);
        }
    };
    DailyWallpaperTrait.prototype.resetBg = function (e) {
        if (e && cc.isValid(e.node)) {
            var t = e.node.getChildByName("bg"), a = e.node.getChildByName("dailyWallpaperBg");
            cc.isValid(t) && (t.active = true);
            cc.isValid(a) && a.destroy();
        }
    };
    var DailyWallpaperTrait_1;
    DailyWallpaperTrait.traitKey = "DailyWallpaper";
    DailyWallpaperTrait.C_BUNDLE_NAME = "r_changeWallpaper";
    DailyWallpaperTrait.C_THEME_PREFIX = "DailyWallpaperTheme";
    DailyWallpaperTrait.WALLPAPER_LIST = [{
            type: "DailyWallpaperTheme8",
            path: "texture/8/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme11",
            path: "texture/11/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme6",
            path: "texture/6/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme10",
            path: "texture/10/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme2",
            path: "texture/2/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme5",
            path: "texture/5/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme4",
            path: "texture/4/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme7",
            path: "texture/7/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme9",
            path: "texture/9/gameplay_bg_board"
        }, {
            type: "DailyWallpaperTheme1",
            path: "texture/1/gameplay_bg_board"
        }];
    DailyWallpaperTrait = DailyWallpaperTrait_1 = __decorate([
        mj.trait,
        mj.class("DailyWallpaperTrait")
    ], DailyWallpaperTrait);
    return DailyWallpaperTrait;
}(Trait_1.default));
exports.default = DailyWallpaperTrait;

cc._RF.pop();