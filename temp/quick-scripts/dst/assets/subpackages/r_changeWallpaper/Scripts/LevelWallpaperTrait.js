
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeWallpaper/Scripts/LevelWallpaperTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZVdhbGxwYXBlci9TY3JpcHRzL0xldmVsV2FsbHBhcGVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwRjtBQUMxRixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBQ2pFLDJFQUFnRztBQUNoRyx3RkFBb0Y7QUFHcEY7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUF3TkM7UUF2TkMsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsb0JBQWMsR0FBRyxDQUFDLENBQUM7O0lBc05yQixDQUFDOzRCQXhOb0IsbUJBQW1CO0lBbUR0QyxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FB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QUE4QjtZQUNwQyxTQUFTLEVBQUUsS0FBSztTQUNqQixFQUFFO1lBQ0QsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUsNkJBQTZCO1lBQ25DLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLEVBQUU7WUFDRCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLElBQUksRUFBRSw2QkFBNkI7WUFDbkMsU0FBUyxFQUFFLEtBQUs7U0FDakIsRUFBRTtZQUNELElBQUksRUFBRSx1QkFBdUI7WUFDN0IsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQyxTQUFTLEVBQUUsS0FBSztTQUNqQixFQUFFO1lBQ0QsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixJQUFJLEVBQUUsNkJBQTZCO1lBQ25DLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLEVBQUU7WUFDRCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLElBQUksRUFBRSw2QkFBNkI7WUFDbkMsU0FBUyxFQUFFLEtBQUs7U0FDakIsRUFBRTtZQUNELElBQUksRUFBRSxzQkFBc0I7WUFDNUIsSUFBSSxFQUFFLDZCQUE2QjtZQUNuQyxTQUFTLEVBQUUsS0FBSztTQUNqQixFQUFFO1lBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQWxEZ0IsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQXdOdkM7SUFBRCwwQkFBQztDQXhORCxBQXdOQyxDQXhOZ0QsZUFBSyxHQXdOckQ7a0JBeE5vQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVlRfTVNHX0tFWV9SRVNFVFRIRU1FLCBFVlRfTVNHX0tFWV9DSEFOR0VUSEVNRSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEJhc2VTcHJpdGUsIHsgU1BSSVRFX0xPQURfQ09NUExFVEUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTGV2ZWxXYWxscGFwZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxXYWxscGFwZXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3N0YXJ0TGV2ZWwgPSA2O1xuICBfbGV2ZWxJbnRlcnZhbCA9IDU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTGV2ZWxXYWxscGFwZXJcIjtcbiAgc3RhdGljIENfQlVORExFX05BTUUgPSBcInJfY2hhbmdlV2FsbHBhcGVyXCI7XG4gIHN0YXRpYyBDX1RIRU1FX1BSRUZJWCA9IFwiTGV2ZWxXYWxscGFwZXJUaGVtZVwiO1xuICBzdGF0aWMgV0FMTFBBUEVSX0xJU1QgPSBbe1xuICAgIHR5cGU6IFwiTGV2ZWxXYWxscGFwZXJUaGVtZTVcIixcbiAgICBwYXRoOiBcInRleHR1cmUvNS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSwge1xuICAgIHR5cGU6IFwiTGV2ZWxXYWxscGFwZXJUaGVtZTZcIixcbiAgICBwYXRoOiBcInRleHR1cmUvNi9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSwge1xuICAgIHR5cGU6IFwiTGV2ZWxXYWxscGFwZXJUaGVtZTFcIixcbiAgICBwYXRoOiBcInRleHR1cmUvMS9nYW1lcGxheV9iZ19ib2FyZFwiLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSwge1xuICAgIHR5cGU6IFwiTGV2ZWxXYWxscGFwZXJUaGVtZTExXCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzExL2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgaXNEZWZhdWx0OiBmYWxzZVxuICB9LCB7XG4gICAgdHlwZTogXCJMZXZlbFdhbGxwYXBlclRoZW1lOFwiLFxuICAgIHBhdGg6IFwidGV4dHVyZS84L2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgaXNEZWZhdWx0OiBmYWxzZVxuICB9LCB7XG4gICAgdHlwZTogXCJMZXZlbFdhbGxwYXBlclRoZW1lMlwiLFxuICAgIHBhdGg6IFwidGV4dHVyZS8yL2dhbWVwbGF5X2JnX2JvYXJkXCIsXG4gICAgaXNEZWZhdWx0OiBmYWxzZVxuICB9LCB7XG4gICAgdHlwZTogXCJMZXZlbFdhbGxwYXBlclRoZW1lMTBcIixcbiAgICBwYXRoOiBcInRleHR1cmUvMTAvZ2FtZXBsYXlfYmdfYm9hcmRcIixcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0sIHtcbiAgICB0eXBlOiBcIkxldmVsV2FsbHBhcGVyVGhlbWU0XCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzQvZ2FtZXBsYXlfYmdfYm9hcmRcIixcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0sIHtcbiAgICB0eXBlOiBcIkxldmVsV2FsbHBhcGVyVGhlbWU3XCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzcvZ2FtZXBsYXlfYmdfYm9hcmRcIixcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0sIHtcbiAgICB0eXBlOiBcIkxldmVsV2FsbHBhcGVyVGhlbWU5XCIsXG4gICAgcGF0aDogXCJ0ZXh0dXJlLzkvZ2FtZXBsYXlfYmdfYm9hcmRcIixcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0sIHtcbiAgICB0eXBlOiBcIlwiLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaXNEZWZhdWx0OiB0cnVlXG4gIH1dO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIGEsIHIsIGw7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc3RhcnRMZXZlbCA9IG51bGwgIT09IChhID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3RhcnRMZXZlbCkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDY7XG4gICAgdGhpcy5fbGV2ZWxJbnRlcnZhbCA9IG51bGwgIT09IChsID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubGV2ZWxJbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBsID8gbCA6IDU7XG4gIH1cbiAgZ2V0TWFpbkxpbmVMZXZlbElkKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKTtcbiAgICByZXR1cm4gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0TGV2ZWxJZCgpKSB8fCAwO1xuICB9XG4gIGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gISh0aGlzLmdldE1haW5MaW5lTGV2ZWxJZCgpIDwgdGhpcy5fc3RhcnRMZXZlbCk7XG4gIH1cbiAgY2FsY3VsYXRlV2FsbHBhcGVySW5kZXgoZSkge1xuICAgIHJldHVybiBlIDwgdGhpcy5fc3RhcnRMZXZlbCA/IDAgOiBNYXRoLmZsb29yKChlIC0gdGhpcy5fc3RhcnRMZXZlbCkgLyB0aGlzLl9sZXZlbEludGVydmFsKSAlIExldmVsV2FsbHBhcGVyVHJhaXQuV0FMTFBBUEVSX0xJU1QubGVuZ3RoO1xuICB9XG4gIGdldEN1cnJlbnRXYWxscGFwZXIoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldE1haW5MaW5lTGV2ZWxJZCgpLFxuICAgICAgdCA9IHRoaXMuY2FsY3VsYXRlV2FsbHBhcGVySW5kZXgoZSk7XG4gICAgcmV0dXJuIExldmVsV2FsbHBhcGVyVHJhaXQuV0FMTFBBUEVSX0xJU1RbdF07XG4gIH1cbiAgc2V0VGhlbWVGb3JBbGxHYW1lVHlwZXMoZSwgdCA9IGZhbHNlKSB7XG4gICAgdmFyIGEsIHI7XG4gICAgdmFyIGwgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGkgPSBsLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgbiA9IFtNakdhbWVUeXBlLk5vcm1hbCwgTWpHYW1lVHlwZS5UcmF2ZWwsIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2VdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMobiksIGggPSBwLm5leHQoKTsgIWguZG9uZTsgaCA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gaC52YWx1ZTtcbiAgICAgICAgaWYgKGQgIT09IGkpIHtcbiAgICAgICAgICB2YXIgeSA9IGwuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKGQpO1xuICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICB2YXIgdSA9IG51bGwgPT0geSA/IHZvaWQgMCA6IHkuZ2V0VGhlbWUoKTtcbiAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgIHUgJiYgdGhpcy5pc0xldmVsV2FsbHBhcGVyVGhlbWUodSkgJiYgeS5zZXRUaGVtZShlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHkuc2V0VGhlbWUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAociA9IHAucmV0dXJuKSAmJiByLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRDdXJyZW50V2FsbHBhcGVyKCk7XG4gICAgICBpZiAoci5pc0RlZmF1bHQpIHQoKTtlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlLmlucy5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlRnJhbWVcIiwgW0xldmVsV2FsbHBhcGVyVHJhaXQuQ19CVU5ETEVfTkFNRSArIFwiOlwiICsgci5wYXRoXSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUoZSwgdCkge1xuICAgIHZhciBhO1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBsID0gci5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIGlmIChsID09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIGlmICgodGhpcy5nZXRNYWluTGluZUxldmVsSWQoKSAtIHRoaXMuX3N0YXJ0TGV2ZWwpICUgdGhpcy5fbGV2ZWxJbnRlcnZhbCA9PSAwKSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLmdldEN1cnJlbnRXYWxscGFwZXIoKTtcbiAgICAgICAgICBpZiAoaS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgIHZhciBvID0gbnVsbCA9PT0gKGEgPSByLmdldEdhbWVEYXRhQnlHYW1lVHlwZShsKSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nZXRUaGVtZSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWVF9NU0dfS0VZX1JFU0VUVEhFTUUsIGwsIFwiXCIsIG8pO1xuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZUZvckFsbEdhbWVUeXBlcyhcIlwiKTtcbiAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWVF9NU0dfS0VZX0NIQU5HRVRIRU1FLCBsLCBpLnR5cGUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZUZvckFsbEdhbWVUeXBlcyhpLnR5cGUpO1xuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbk1haW5HbVZ3X2JlQ2hhbmdlVGhlbWUoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgYSA9IGUuaW5zLFxuICAgICAgICByID0gKGUuYXJnc1swXSwgZS5hcmdzWzFdKTtcbiAgICAgIGUuYXJnc1syXTtcbiAgICAgIHIgJiYgIXRoaXMuaXNMZXZlbFdhbGxwYXBlclRoZW1lKHIpICYmIHRoaXMucmVzZXRCZyhhKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uTWFpbkdtVndfYWZDaGFuZ2VUaGVtZShlLCB0KSB7XG4gICAgdmFyIGEgPSBlLmlucyxcbiAgICAgIHIgPSBlLmFyZ3NbMV07XG4gICAgaWYgKGEgJiYgciAmJiB0aGlzLmlzTGV2ZWxXYWxscGFwZXJUaGVtZShyKSkge1xuICAgICAgdmFyIGwgPSB0aGlzLmdldEN1cnJlbnRXYWxscGFwZXIoKTtcbiAgICAgIGwgJiYgIWwuaXNEZWZhdWx0ICYmIHRoaXMuY2hhbmdlQmcobCwgYSk7XG4gICAgfVxuICAgIHQoKTtcbiAgfVxuICBvbk1haW5HbVZ3X3Jlc2V0VGhlbWUoZSwgdCkge1xuICAgIHZhciBhID0gZS5pbnMsXG4gICAgICByID0gZS5hcmdzWzJdO1xuICAgIGlmIChyICYmIHRoaXMuaXNMZXZlbFdhbGxwYXBlclRoZW1lKHIpKSB7XG4gICAgICB0aGlzLnNldFRoZW1lRm9yQWxsR2FtZVR5cGVzKFwiXCIsIHRydWUpO1xuICAgICAgdGhpcy5yZXNldEJnKGEpO1xuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgb25VSVNldERsZ0N0cmxfc2hvd1JzdFNraW4oZSwgdCkge1xuICAgIHQoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGlzTGV2ZWxXYWxscGFwZXJUaGVtZShlKSB7XG4gICAgcmV0dXJuIGUgJiYgZS5zdGFydHNXaXRoKExldmVsV2FsbHBhcGVyVHJhaXQuQ19USEVNRV9QUkVGSVgpO1xuICB9XG4gIGNoYW5nZUJnKGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGwgPSB0LmdhbWVOb2RlO1xuICAgIGlmIChjYy5pc1ZhbGlkKGwpKSB7XG4gICAgICB2YXIgaSA9IGwuZ2V0U2libGluZ0luZGV4KCksXG4gICAgICAgIG8gPSB0Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSxcbiAgICAgICAgbiA9IG51bGwgPT09IChyID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5wYXJlbnQpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0Q2hpbGRCeU5hbWUoXCJsZXZlbFdhbGxwYXBlckJnXCIpO1xuICAgICAgY2MuaXNWYWxpZChuKSAmJiBuLmRlc3Ryb3koKTtcbiAgICAgIHZhciBwID0gbmV3IGNjLk5vZGUoXCJsZXZlbFdhbGxwYXBlckJnXCIpO1xuICAgICAgcC5wYXJlbnQgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLnBhcmVudDtcbiAgICAgIHAuc2V0U2libGluZ0luZGV4KGkpO1xuICAgICAgcC5vbmNlKFNQUklURV9MT0FEX0NPTVBMRVRFLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgICAgICB2YXIgYSA9IGUuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGlmIChhLmdldFJlY3QoKS53aWR0aCA+IDAgJiYgYS5nZXRSZWN0KCkuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICB2YXIgciA9IGNjLnNpemUoYS5nZXRSZWN0KCkud2lkdGgsIGEuZ2V0UmVjdCgpLmhlaWdodCk7XG4gICAgICAgICAgICAgIHAuc2V0Q29udGVudFNpemUocik7XG4gICAgICAgICAgICAgIHZhciBsID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q29udGVudFNpemUoKSxcbiAgICAgICAgICAgICAgICBpID0gci53aWR0aCAvIHIuaGVpZ2h0O1xuICAgICAgICAgICAgICBpZiAobC53aWR0aCAvIGwuaGVpZ2h0ID4gaSkge1xuICAgICAgICAgICAgICAgIHAuc2V0U2NhbGUobC53aWR0aCAvIHIud2lkdGgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHAuc2V0U2NhbGUobC5oZWlnaHQgLyByLmhlaWdodCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvID0gdC5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgICAgICAgICBjYy5pc1ZhbGlkKG8pICYmIChvLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUocCwgZS5wYXRoLCBmYWxzZSwgdHJ1ZSwgTGV2ZWxXYWxscGFwZXJUcmFpdC5DX0JVTkRMRV9OQU1FKTtcbiAgICB9XG4gIH1cbiAgcmVzZXRCZyhlKSB7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICB2YXIgdCA9IGUubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLFxuICAgICAgICBhID0gZS5ub2RlLmdldENoaWxkQnlOYW1lKFwibGV2ZWxXYWxscGFwZXJCZ1wiKTtcbiAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICBjYy5pc1ZhbGlkKGEpICYmIGEuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufSJdfQ==