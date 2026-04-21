"use strict";
cc._RF.push(module, '9cdcbw4cvtBabt7kxqqSmnt', 'LevelWallpaperTrait');
// subpackages/r_changeWallpaper/Scripts/LevelWallpaperTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var LevelWallpaperTrait = /** @class */ (function (_super) {
    __extends(LevelWallpaperTrait, _super);
    function LevelWallpaperTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._levelInterval = 5;
        return _this;
    }
    LevelWallpaperTrait_1 = LevelWallpaperTrait;
    LevelWallpaperTrait.prototype.onLoad = function () {
        var t, a, r, l;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== a ? a : 6;
        this._levelInterval = null !== (l = null === (r = this._traitData) || void 0 === r ? void 0 : r.levelInterval) && void 0 !== l ? l : 5;
    };
    LevelWallpaperTrait.prototype.getMainLineLevelId = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal);
        return (null == e ? void 0 : e.getLevelId()) || 0;
    };
    LevelWallpaperTrait.prototype.isEnabled = function () {
        return !(this.getMainLineLevelId() < this._startLevel);
    };
    LevelWallpaperTrait.prototype.calculateWallpaperIndex = function (e) {
        return e < this._startLevel ? 0 : Math.floor((e - this._startLevel) / this._levelInterval) % LevelWallpaperTrait_1.WALLPAPER_LIST.length;
    };
    LevelWallpaperTrait.prototype.getCurrentWallpaper = function () {
        var e = this.getMainLineLevelId(), t = this.calculateWallpaperIndex(e);
        return LevelWallpaperTrait_1.WALLPAPER_LIST[t];
    };
    LevelWallpaperTrait.prototype.setThemeForAllGameTypes = function (e, t) {
        if (t === void 0) { t = false; }
        var a, r;
        var l = UserModel_1.default.getInstance(), i = l.getCurrentGameType(), n = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
        try {
            for (var p = __values(n), h = p.next(); !h.done; h = p.next()) {
                var d = h.value;
                if (d !== i) {
                    var y = l.getGameDataByGameType(d);
                    if (y) {
                        var u = null == y ? void 0 : y.getTheme();
                        if (t) {
                            u && this.isLevelWallpaperTheme(u) && y.setTheme(e);
                        }
                        else {
                            y.setTheme(e);
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
                h && !h.done && (r = p.return) && r.call(p);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
    };
    LevelWallpaperTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        if (this.isEnabled()) {
            var r = this.getCurrentWallpaper();
            if (r.isDefault)
                t();
            else {
                try {
                    e.ins.addPreloadRes("SpriteFrame", [LevelWallpaperTrait_1.C_BUNDLE_NAME + ":" + r.path]);
                }
                catch (e) { }
                t();
            }
        }
        else
            t();
    };
    LevelWallpaperTrait.prototype.onGsListener_onNewGame = function (e, t) {
        var a;
        if (this.isEnabled()) {
            var r = UserModel_1.default.getInstance(), l = r.getCurrentGameType();
            if (l == GameTypeEnums_1.MjGameType.Normal) {
                if ((this.getMainLineLevelId() - this._startLevel) % this._levelInterval == 0) {
                    var i = this.getCurrentWallpaper();
                    if (i.isDefault) {
                        var o = null === (a = r.getGameDataByGameType(l)) || void 0 === a ? void 0 : a.getTheme();
                        this.dispatchEvent(Config_1.EVT_MSG_KEY_RESETTHEME, l, "", o);
                        this.setThemeForAllGameTypes("");
                        t();
                    }
                    else {
                        this.dispatchEvent(Config_1.EVT_MSG_KEY_CHANGETHEME, l, i.type, true);
                        this.setThemeForAllGameTypes(i.type);
                        t();
                    }
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
    LevelWallpaperTrait.prototype.onMainGmVw_beChangeTheme = function (e, t) {
        if (this.isEnabled()) {
            var a = e.ins, r = (e.args[0], e.args[1]);
            e.args[2];
            r && !this.isLevelWallpaperTheme(r) && this.resetBg(a);
            t();
        }
        else
            t();
    };
    LevelWallpaperTrait.prototype.onMainGmVw_afChangeTheme = function (e, t) {
        var a = e.ins, r = e.args[1];
        if (a && r && this.isLevelWallpaperTheme(r)) {
            var l = this.getCurrentWallpaper();
            l && !l.isDefault && this.changeBg(l, a);
        }
        t();
    };
    LevelWallpaperTrait.prototype.onMainGmVw_resetTheme = function (e, t) {
        var a = e.ins, r = e.args[2];
        if (r && this.isLevelWallpaperTheme(r)) {
            this.setThemeForAllGameTypes("", true);
            this.resetBg(a);
        }
        t();
    };
    LevelWallpaperTrait.prototype.onUISetDlgCtrl_showRstSkin = function (e, t) {
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    LevelWallpaperTrait.prototype.isLevelWallpaperTheme = function (e) {
        return e && e.startsWith(LevelWallpaperTrait_1.C_THEME_PREFIX);
    };
    LevelWallpaperTrait.prototype.changeBg = function (e, t) {
        var r, l = t.gameNode;
        if (cc.isValid(l)) {
            var i = l.getSiblingIndex(), o = t.node.getChildByName("bg"), n = null === (r = null == o ? void 0 : o.parent) || void 0 === r ? void 0 : r.getChildByName("levelWallpaperBg");
            cc.isValid(n) && n.destroy();
            var p = new cc.Node("levelWallpaperBg");
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
            BaseSprite_1.default.refreshWithNode(p, e.path, false, true, LevelWallpaperTrait_1.C_BUNDLE_NAME);
        }
    };
    LevelWallpaperTrait.prototype.resetBg = function (e) {
        if (e && cc.isValid(e.node)) {
            var t = e.node.getChildByName("bg"), a = e.node.getChildByName("levelWallpaperBg");
            cc.isValid(t) && (t.active = true);
            cc.isValid(a) && a.destroy();
        }
    };
    var LevelWallpaperTrait_1;
    LevelWallpaperTrait.traitKey = "LevelWallpaper";
    LevelWallpaperTrait.C_BUNDLE_NAME = "r_changeWallpaper";
    LevelWallpaperTrait.C_THEME_PREFIX = "LevelWallpaperTheme";
    LevelWallpaperTrait.WALLPAPER_LIST = [{
            type: "LevelWallpaperTheme5",
            path: "texture/5/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme6",
            path: "texture/6/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme1",
            path: "texture/1/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme11",
            path: "texture/11/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme8",
            path: "texture/8/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme2",
            path: "texture/2/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme10",
            path: "texture/10/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme4",
            path: "texture/4/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme7",
            path: "texture/7/gameplay_bg_board",
            isDefault: false
        }, {
            type: "LevelWallpaperTheme9",
            path: "texture/9/gameplay_bg_board",
            isDefault: false
        }, {
            type: "",
            path: "",
            isDefault: true
        }];
    LevelWallpaperTrait = LevelWallpaperTrait_1 = __decorate([
        mj.trait,
        mj.class("LevelWallpaperTrait")
    ], LevelWallpaperTrait);
    return LevelWallpaperTrait;
}(Trait_1.default));
exports.default = LevelWallpaperTrait;

cc._RF.pop();