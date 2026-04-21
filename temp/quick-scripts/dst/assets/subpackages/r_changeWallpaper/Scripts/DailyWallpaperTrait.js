
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeWallpaper/Scripts/DailyWallpaperTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZVdhbGxwYXBlci9TY3JpcHRzL0RhaWx5V2FsbHBhcGVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwRjtBQUMxRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSwyRUFBZ0c7QUFDaEcsd0ZBQW9GO0FBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxNQUFNLEVBQUUsMEJBQVUsQ0FBQyxjQUFjLEVBQUUsMEJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUdsRztJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQXFTQztRQXBTQyxlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQW9TaEIsQ0FBQzs0QkFyU29CLG1CQUFtQjtJQW9DdEMsb0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3SCxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLElBQUks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QWdCLENBQUM7SUFDNUIsaUNBQWEsR0FBRyxtQkFBbUIsQ0FBQztJQUNwQyxrQ0FBYyxHQUFHLHFCQUFxQixDQUFDO0lBQ3ZDLGtDQUFjLEdBQUcsQ0FBQztZQUN2QixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsRUFBRTtZQUNELElBQUksRUFBRSx1QkFBdUI7WUFDN0IsSUFBSSxFQUFFLDhCQUE4QjtTQUNyQyxFQUFFO1lBQ0QsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUsNkJBQTZCO1NBQ3BDLEVBQUU7WUFDRCxJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLElBQUksRUFBRSw4QkFBOEI7U0FDckMsRUFBRTtZQUNELElBQUksRUFBRSxzQkFBc0I7WUFDNUIsSUFBSSxFQUFFLDZCQUE2QjtTQUNwQyxFQUFFO1lBQ0QsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUsNkJBQTZCO1NBQ3BDLEVBQUU7WUFDRCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsRUFBRTtZQUNELElBQUksRUFBRSxzQkFBc0I7WUFDNUIsSUFBSSxFQUFFLDZCQUE2QjtTQUNwQyxFQUFFO1lBQ0QsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUsNkJBQTZCO1NBQ3BDLEVBQUU7WUFDRCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsQ0FBQyxDQUFDO0lBbkNnQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBcVN2QztJQUFELDBCQUFDO0NBclNELEFBcVNDLENBclNnRCxlQUFLLEdBcVNyRDtrQkFyU29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVWVF9NU0dfS0VZX1JFU0VUVEhFTUUsIEVWVF9NU0dfS0VZX0NIQU5HRVRIRU1FIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Db25maWcnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgQmFzZVNwcml0ZSwgeyBTUFJJVEVfTE9BRF9DT01QTEVURSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xudmFyIHkgPSBbTWpHYW1lVHlwZS5Ob3JtYWwsIE1qR2FtZVR5cGUuVHJhdmVsLCBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlLCBNakdhbWVUeXBlLlRpbGUyTm9ybWFsXTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGFpbHlXYWxscGFwZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlXYWxscGFwZXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3N0YXJ0RGF5ID0gMjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYWlseVdhbGxwYXBlclwiO1xuICBzdGF0aWMgQ19CVU5ETEVfTkFNRSA9IFwicl9jaGFuZ2VXYWxscGFwZXJcIjtcbiAgc3RhdGljIENfVEhFTUVfUFJFRklYID0gXCJEYWlseVdhbGxwYXBlclRoZW1lXCI7XG4gIHN0YXRpYyBXQUxMUEFQRVJfTElTVCA9IFt7XG4gICAgdHlwZTogXCJEYWlseVdhbGxwYXBlclRoZW1lOFwiLFxuICAgIHBhdGg6IFwidGV4dHVyZS84L2dhbWVwbGF5X2JnX2JvYXJkXCJcbiAgfSwge1xuICAgIHR5cGU6IFwiRGFpbHlXYWxscGFwZXJUaGVtZTExXCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzExL2dhbWVwbGF5X2JnX2JvYXJkXCJcbiAgfSwge1xuICAgIHR5cGU6IFwiRGFpbHlXYWxscGFwZXJUaGVtZTZcIixcbiAgICBwYXRoOiBcInRleHR1cmUvNi9nYW1lcGxheV9iZ19ib2FyZFwiXG4gIH0sIHtcbiAgICB0eXBlOiBcIkRhaWx5V2FsbHBhcGVyVGhlbWUxMFwiLFxuICAgIHBhdGg6IFwidGV4dHVyZS8xMC9nYW1lcGxheV9iZ19ib2FyZFwiXG4gIH0sIHtcbiAgICB0eXBlOiBcIkRhaWx5V2FsbHBhcGVyVGhlbWUyXCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzIvZ2FtZXBsYXlfYmdfYm9hcmRcIlxuICB9LCB7XG4gICAgdHlwZTogXCJEYWlseVdhbGxwYXBlclRoZW1lNVwiLFxuICAgIHBhdGg6IFwidGV4dHVyZS81L2dhbWVwbGF5X2JnX2JvYXJkXCJcbiAgfSwge1xuICAgIHR5cGU6IFwiRGFpbHlXYWxscGFwZXJUaGVtZTRcIixcbiAgICBwYXRoOiBcInRleHR1cmUvNC9nYW1lcGxheV9iZ19ib2FyZFwiXG4gIH0sIHtcbiAgICB0eXBlOiBcIkRhaWx5V2FsbHBhcGVyVGhlbWU3XCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzcvZ2FtZXBsYXlfYmdfYm9hcmRcIlxuICB9LCB7XG4gICAgdHlwZTogXCJEYWlseVdhbGxwYXBlclRoZW1lOVwiLFxuICAgIHBhdGg6IFwidGV4dHVyZS85L2dhbWVwbGF5X2JnX2JvYXJkXCJcbiAgfSwge1xuICAgIHR5cGU6IFwiRGFpbHlXYWxscGFwZXJUaGVtZTFcIixcbiAgICBwYXRoOiBcInRleHR1cmUvMS9nYW1lcGxheV9iZ19ib2FyZFwiXG4gIH1dO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc3RhcnREYXkgPSBudWxsICE9PSAoYSA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnN0YXJ0RGF5KSAmJiB2b2lkIDAgIT09IGEgPyBhIDogMjtcbiAgICB2b2lkIDAgPT09IHRoaXMubG9jYWxEYXRhLndhbGxwYXBlckluZGV4ICYmICh0aGlzLmxvY2FsRGF0YS53YWxscGFwZXJJbmRleCA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZXN0YW1wIHx8ICh0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1RpbWVzdGFtcCA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RXaW5UaW1lc3RhbXAgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RXaW5UaW1lc3RhbXAgPSAwKTtcbiAgICB2b2lkIDAgPT09IHRoaXMubG9jYWxEYXRhLnRvZGF5U3RhcnRXYWxscGFwZXJJbmRleCAmJiAodGhpcy5sb2NhbERhdGEudG9kYXlTdGFydFdhbGxwYXBlckluZGV4ID0gLTEpO1xuICAgIHRoaXMubG9jYWxEYXRhLnJlY29yZERhdGUgfHwgKHRoaXMubG9jYWxEYXRhLnJlY29yZERhdGUgPSAwKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIlRpbGUyV2luVndfc2hvd1wiXG4gICAgfV0pO1xuICB9XG4gIGlzU2FtZURheShlLCB0KSB7XG4gICAgdmFyIGEgPSBuZXcgRGF0ZShlKSxcbiAgICAgIHIgPSBuZXcgRGF0ZSh0KTtcbiAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSByLmdldEZ1bGxZZWFyKCkgJiYgYS5nZXRNb250aCgpID09PSByLmdldE1vbnRoKCkgJiYgYS5nZXREYXRlKCkgPT09IHIuZ2V0RGF0ZSgpO1xuICB9XG4gIGdldFRvZGF5RGF0ZSgpIHtcbiAgICB2YXIgZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIDEwMDAwICogZS5nZXRGdWxsWWVhcigpICsgMTAwICogKGUuZ2V0TW9udGgoKSArIDEpICsgZS5nZXREYXRlKCk7XG4gIH1cbiAgZ2V0RGF0ZUZyb21UaW1lc3RhbXAoZSkge1xuICAgIGlmICghZSkgcmV0dXJuIDA7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZShlKTtcbiAgICByZXR1cm4gMTAwMDAgKiB0LmdldEZ1bGxZZWFyKCkgKyAxMDAgKiAodC5nZXRNb250aCgpICsgMSkgKyB0LmdldERhdGUoKTtcbiAgfVxuICBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuICEoKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVBY3RpdmVEYXlzKCkgfHwgMCkgPCB0aGlzLl9zdGFydERheSk7XG4gIH1cbiAgaGFzTGFzdFdhbGxwYXBlcldvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1RpbWVzdGFtcCAmJiAhIXRoaXMubG9jYWxEYXRhLmxhc3RXaW5UaW1lc3RhbXAgJiYgdGhpcy5sb2NhbERhdGEubGFzdFdpblRpbWVzdGFtcCA+PSB0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1RpbWVzdGFtcDtcbiAgfVxuICBjaGVja0FuZFVwZGF0ZURhaWx5UmVjb3JkKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRUb2RheURhdGUoKTtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEucmVjb3JkRGF0ZSAhPT0gZSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEudG9kYXlTdGFydFdhbGxwYXBlckluZGV4ID0gdGhpcy5sb2NhbERhdGEud2FsbHBhcGVySW5kZXg7XG4gICAgICB0aGlzLmxvY2FsRGF0YS50b2RheVN0YXJ0V2FsbHBhcGVySW5kZXggPSB0aGlzLmxvY2FsRGF0YS50b2RheVN0YXJ0V2FsbHBhcGVySW5kZXg7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5yZWNvcmREYXRlID0gZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJlY29yZERhdGUgPSB0aGlzLmxvY2FsRGF0YS5yZWNvcmREYXRlO1xuICAgICAgMCA9PT0gdGhpcy5sb2NhbERhdGEudG9kYXlTdGFydFdhbGxwYXBlckluZGV4ICYmIHRoaXMubG9jYWxEYXRhLnJlY29yZERhdGU7XG4gICAgfVxuICB9XG4gIGhhc1RvZGF5U2hvd25OZXdXYWxscGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLndhbGxwYXBlckluZGV4ICE9PSB0aGlzLmxvY2FsRGF0YS50b2RheVN0YXJ0V2FsbHBhcGVySW5kZXgpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1RpbWVzdGFtcCA+IDApIHtcbiAgICAgIHZhciBlID0gdGhpcy5nZXRUb2RheURhdGUoKTtcbiAgICAgIHJldHVybiB0aGlzLmdldERhdGVGcm9tVGltZXN0YW1wKHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZXN0YW1wKSA9PT0gZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGhhc1RvZGF5TmV3V2FsbHBhcGVyV29uKCkge1xuICAgIHJldHVybiAhIXRoaXMuaGFzVG9kYXlTaG93bk5ld1dhbGxwYXBlcigpICYmICEhdGhpcy5sb2NhbERhdGEubGFzdFdpblRpbWVzdGFtcCAmJiB0aGlzLmxvY2FsRGF0YS5sYXN0V2luVGltZXN0YW1wID49IHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZXN0YW1wO1xuICB9XG4gIG1hcmtUb2RheVdvbigpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSBudWxsID09PSAoZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldFRoZW1lKCk7XG4gICAgaWYgKHQgJiYgdGhpcy5pc0RhaWx5V2FsbHBhcGVyVGhlbWUodCkpIHtcbiAgICAgIHZhciBhID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RXaW5UaW1lc3RhbXAgPSBhO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFdpblRpbWVzdGFtcCA9IHRoaXMubG9jYWxEYXRhLmxhc3RXaW5UaW1lc3RhbXA7XG4gICAgfVxuICB9XG4gIGdldEN1cnJlbnRXYWxscGFwZXIoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS53YWxscGFwZXJJbmRleCAlIERhaWx5V2FsbHBhcGVyVHJhaXQuV0FMTFBBUEVSX0xJU1QubGVuZ3RoO1xuICAgIHJldHVybiBEYWlseVdhbGxwYXBlclRyYWl0LldBTExQQVBFUl9MSVNUW2VdO1xuICB9XG4gIG5leHRXYWxscGFwZXIoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEud2FsbHBhcGVySW5kZXggPSAodGhpcy5sb2NhbERhdGEud2FsbHBhcGVySW5kZXggKyAxKSAlIERhaWx5V2FsbHBhcGVyVHJhaXQuV0FMTFBBUEVSX0xJU1QubGVuZ3RoO1xuICAgIHRoaXMubG9jYWxEYXRhLndhbGxwYXBlckluZGV4ID0gdGhpcy5sb2NhbERhdGEud2FsbHBhcGVySW5kZXg7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZXN0YW1wID0gdGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lc3RhbXA7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIGlmICh0aGlzLmhhc1RvZGF5TmV3V2FsbHBhcGVyV29uKCkpIHQoKTtlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1RvZGF5U2hvd25OZXdXYWxscGFwZXIoKSAmJiB0aGlzLmhhc0xhc3RXYWxscGFwZXJXb24oKSkge1xuICAgICAgICAgIHZhciByID0gKHRoaXMubG9jYWxEYXRhLndhbGxwYXBlckluZGV4ICsgMSkgJSBEYWlseVdhbGxwYXBlclRyYWl0LldBTExQQVBFUl9MSVNULmxlbmd0aCxcbiAgICAgICAgICAgIGwgPSBEYWlseVdhbGxwYXBlclRyYWl0LldBTExQQVBFUl9MSVNUW3JdO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlLmlucy5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgW0RhaWx5V2FsbHBhcGVyVHJhaXQuQ19CVU5ETEVfTkFNRSArIFwiOlwiICsgbC5wYXRoXSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VycmVudFdhbGxwYXBlcigpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlLmlucy5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgW0RhaWx5V2FsbHBhcGVyVHJhaXQuQ19CVU5ETEVfTkFNRSArIFwiOlwiICsgaS5wYXRoXSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgdGhpcy5pc0VuYWJsZWQoKSAmJiB0aGlzLm1hcmtUb2RheVdvbigpO1xuICAgIHQoKTtcbiAgfVxuICBvblRMV2luVndfc2hvd1RMV2luVncoZSwgdCkge1xuICAgIHRoaXMuaXNFbmFibGVkKCkgJiYgdGhpcy5tYXJrVG9kYXlXb24oKTtcbiAgICB0KCk7XG4gIH1cbiAgb25EQ1dpblZ3X3Nob3dXaW5WdyhlLCB0KSB7XG4gICAgdGhpcy5pc0VuYWJsZWQoKSAmJiB0aGlzLm1hcmtUb2RheVdvbigpO1xuICAgIHQoKTtcbiAgfVxuICBvblRpbGUyV2luVndfc2hvdyhlLCB0KSB7XG4gICAgdGhpcy5pc0VuYWJsZWQoKSAmJiB0aGlzLm1hcmtUb2RheVdvbigpO1xuICAgIHQoKTtcbiAgfVxuICBoYW5kbGVHYW1lU3RhcnQoZSA9IFwiXCIpIHtcbiAgICB2YXIgdDtcbiAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgciA9IGEuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZURhaWx5UmVjb3JkKCk7XG4gICAgaWYgKHRoaXMuaGFzVG9kYXlOZXdXYWxscGFwZXJXb24oKSkge1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgdmFyIGwgPSBudWxsID09PSAodCA9IGEuZ2V0TWFpbkdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0VGhlbWUoKTtcbiAgICAgICAgaWYgKGwgJiYgdGhpcy5pc0RhaWx5V2FsbHBhcGVyVGhlbWUobCkpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRVZUX01TR19LRVlfUkVTRVRUSEVNRSwgciwgXCJcIiwgbCk7XG4gICAgICAgICAgdGhpcy5zZXRUaGVtZUZvckFsbEdhbWVUeXBlcyhcIlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzVG9kYXlTaG93bk5ld1dhbGxwYXBlcigpICYmIHRoaXMuaGFzTGFzdFdhbGxwYXBlcldvbigpKSB7XG4gICAgICB0aGlzLm5leHRXYWxscGFwZXIoKTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRDdXJyZW50V2FsbHBhcGVyKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChFVlRfTVNHX0tFWV9DSEFOR0VUSEVNRSwgciwgaS50eXBlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRUaGVtZUZvckFsbEdhbWVUeXBlcyhpLnR5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZXN0YW1wKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dUaW1lc3RhbXAgPSB0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1RpbWVzdGFtcDtcbiAgICAgIH1cbiAgICAgIGlmIChyKSB7XG4gICAgICAgIGkgPSB0aGlzLmdldEN1cnJlbnRXYWxscGFwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWVF9NU0dfS0VZX0NIQU5HRVRIRU1FLCByLCBpLnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLnNldFRoZW1lRm9yQWxsR2FtZVR5cGVzKGkudHlwZSk7XG4gICAgICAgIHRoaXMuaGFzVG9kYXlTaG93bk5ld1dhbGxwYXBlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgdGhpcy5oYW5kbGVHYW1lU3RhcnQoKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uTWFpbkdtVndfYmVDaGFuZ2VUaGVtZShlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHZhciBhID0gZS5pbnMsXG4gICAgICAgIHIgPSBlLmFyZ3NbMV07XG4gICAgICBhICYmIHIgJiYgIXRoaXMuaXNEYWlseVdhbGxwYXBlclRoZW1lKHIpICYmIHRoaXMucmVzZXRCZyhhKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uTWFpbkdtVndfYWZDaGFuZ2VUaGVtZShlLCB0KSB7XG4gICAgdmFyIGEgPSBlLmlucyxcbiAgICAgIHIgPSBlLmFyZ3NbMV07XG4gICAgaWYgKGEgJiYgciAmJiB0aGlzLmlzRGFpbHlXYWxscGFwZXJUaGVtZShyKSkge1xuICAgICAgdmFyIGwgPSB0aGlzLmdldEN1cnJlbnRXYWxscGFwZXIoKTtcbiAgICAgIGwgJiYgdGhpcy5jaGFuZ2VCZyhsLCBhKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uTWFpbkdtVndfcmVzZXRUaGVtZShlLCB0KSB7XG4gICAgdmFyIGEgPSBlLmlucyxcbiAgICAgIHIgPSBlLmFyZ3NbMl07XG4gICAgaWYgKHIgJiYgdGhpcy5pc0RhaWx5V2FsbHBhcGVyVGhlbWUocikpIHtcbiAgICAgIHRoaXMuaXNFbmFibGVkKCkgJiYgdGhpcy5tYXJrVG9kYXlXb24oKTtcbiAgICAgIHRoaXMuc2V0VGhlbWVGb3JBbGxHYW1lVHlwZXMoXCJcIiwgdHJ1ZSk7XG4gICAgICB0aGlzLnJlc2V0QmcoYSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvblVJU2V0RGxnQ3RybF9zaG93UnN0U2tpbihlLCB0KSB7XG4gICAgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgaXNEYWlseVdhbGxwYXBlclRoZW1lKGUpIHtcbiAgICByZXR1cm4gZSAmJiBlLnN0YXJ0c1dpdGgoRGFpbHlXYWxscGFwZXJUcmFpdC5DX1RIRU1FX1BSRUZJWCk7XG4gIH1cbiAgc2V0VGhlbWVGb3JBbGxHYW1lVHlwZXMoZSwgdCA9IGZhbHNlKSB7XG4gICAgdmFyIGEsIHI7XG4gICAgdmFyIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGkgPSBsLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBuID0gX192YWx1ZXMoeSksIHAgPSBuLm5leHQoKTsgIXAuZG9uZTsgcCA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gcC52YWx1ZTtcbiAgICAgICAgaWYgKHMgIT09IGkpIHtcbiAgICAgICAgICB2YXIgYyA9IGwuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHMpO1xuICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICB2YXIgZCA9IG51bGwgPT0gYyA/IHZvaWQgMCA6IGMuZ2V0VGhlbWUoKTtcbiAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgIGQgJiYgdGhpcy5pc0RhaWx5V2FsbHBhcGVyVGhlbWUoZCkgJiYgYy5zZXRUaGVtZShlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGMuc2V0VGhlbWUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAociA9IG4ucmV0dXJuKSAmJiByLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hhbmdlQmcoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgbCA9IHQuZ2FtZU5vZGU7XG4gICAgaWYgKGNjLmlzVmFsaWQobCkpIHtcbiAgICAgIHZhciBpID0gbC5nZXRTaWJsaW5nSW5kZXgoKSxcbiAgICAgICAgbyA9IHQubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLFxuICAgICAgICBuID0gbnVsbCA9PT0gKHIgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLnBhcmVudCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRDaGlsZEJ5TmFtZShcImRhaWx5V2FsbHBhcGVyQmdcIik7XG4gICAgICBjYy5pc1ZhbGlkKG4pICYmIG4uZGVzdHJveSgpO1xuICAgICAgdmFyIHAgPSBuZXcgY2MuTm9kZShcImRhaWx5V2FsbHBhcGVyQmdcIik7XG4gICAgICBwLnBhcmVudCA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8ucGFyZW50O1xuICAgICAgcC5zZXRTaWJsaW5nSW5kZXgoaSk7XG4gICAgICBwLm9uY2UoU1BSSVRFX0xPQURfQ09NUExFVEUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgICAgIHZhciBhID0gZS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgaWYgKGEuZ2V0UmVjdCgpLndpZHRoID4gMCAmJiBhLmdldFJlY3QoKS5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgIHZhciByID0gY2Muc2l6ZShhLmdldFJlY3QoKS53aWR0aCwgYS5nZXRSZWN0KCkuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgcC5zZXRDb250ZW50U2l6ZShyKTtcbiAgICAgICAgICAgICAgdmFyIGwgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb250ZW50U2l6ZSgpLFxuICAgICAgICAgICAgICAgIGkgPSByLndpZHRoIC8gci5oZWlnaHQ7XG4gICAgICAgICAgICAgIGlmIChsLndpZHRoIC8gbC5oZWlnaHQgPiBpKSB7XG4gICAgICAgICAgICAgICAgcC5zZXRTY2FsZShsLndpZHRoIC8gci53aWR0aCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcC5zZXRTY2FsZShsLmhlaWdodCAvIHIuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSB0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQobykgJiYgKG8uYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShwLCBlLnBhdGgsIGZhbHNlLCB0cnVlLCBEYWlseVdhbGxwYXBlclRyYWl0LkNfQlVORExFX05BTUUpO1xuICAgIH1cbiAgfVxuICByZXNldEJnKGUpIHtcbiAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgIHZhciB0ID0gZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIiksXG4gICAgICAgIGEgPSBlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkYWlseVdhbGxwYXBlckJnXCIpO1xuICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIGNjLmlzVmFsaWQoYSkgJiYgYS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59Il19