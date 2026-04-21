
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/BaseCardDynamicSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8896bL3bkZMsYBdNV3LrGgk', 'BaseCardDynamicSkinTrait');
// subpackages/l_flowerCardSeries/Scripts/BaseCardDynamicSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var l = {
    Bing: "bing",
    Tiao: "tiao",
    Wan: "wan",
    Other: "other"
};
var s = {
    Normal: "normal",
    Hard: "hard",
    Expert: "expert"
};
var BaseCardDynamicSkinTrait = /** @class */ (function (_super) {
    __extends(BaseCardDynamicSkinTrait, _super);
    function BaseCardDynamicSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._currentGameType = GameTypeEnums_1.MjGameType.Normal;
        _this._currentLevelId = 0;
        _this._currentDifficulty = s.Normal;
        _this._cachedIsFeatureEnabled = false;
        return _this;
    }
    BaseCardDynamicSkinTrait_1 = BaseCardDynamicSkinTrait;
    Object.defineProperty(BaseCardDynamicSkinTrait.prototype, "_starThemesList", {
        get: function () {
            return FlowerStarConfigUtil_1.FlowerStarConfigUtil.getFullList();
        },
        enumerable: false,
        configurable: true
    });
    BaseCardDynamicSkinTrait.prototype.onLoad = function () {
        var t, r, a, o, i, n, l, s;
        _super.prototype.onLoad.call(this);
        this._config = {
            startLevel: null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== r ? r : 8,
            enableNormal: null === (o = null === (a = this._traitData) || void 0 === a ? void 0 : a.enableNormal) || void 0 === o || o,
            enableTravel: null === (n = null === (i = this._traitData) || void 0 === i ? void 0 : i.enableTravel) || void 0 === n || n,
            enableDailyChallenge: null === (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.enableDailyChallenge) || void 0 === s || s
        };
        this.localData.Normal || (this.localData.Normal = this.createEmptyModeData());
        this.localData.Travel || (this.localData.Travel = this.createEmptyModeData());
        this.localData.DailyChallenge || (this.localData.DailyChallenge = this.createEmptyModeData());
        this.addRemoteBundlesToLoader();
        this.registerEvent([{
                event: "DGameEnd_adjust"
            }]);
    };
    BaseCardDynamicSkinTrait.prototype.gmSetThemeIds = function () {
        return false;
    };
    BaseCardDynamicSkinTrait.prototype.findThemeByIdOrNull = function (e) {
        return e && 0 !== e ? "number" != typeof e || isNaN(e) ? null : this._starThemesList.find(function (t) {
            return t.id === e;
        }) || null : null;
    };
    BaseCardDynamicSkinTrait.prototype.addRemoteBundlesToLoader = function () {
        var e = LowPriorityBundleLoader_1.default.getInstance(), t = this._starThemesList.filter(function (e) {
            return !e.isLocal;
        }).map(function (e) {
            return e.bundle;
        });
        Array.from(new Set(t)).forEach(function (t) {
            e.addTask(t, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    BaseCardDynamicSkinTrait.prototype.createEmptyModeData = function () {
        return {
            wanTheme: null,
            tiaoTheme: null,
            bingTheme: null,
            usedThemeIds: []
        };
    };
    BaseCardDynamicSkinTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        try {
            var r = e.ins;
            this._currentGameType = r.gameType;
            var a = UserModel_1.default.getInstance().getGameDataByGameType(this._currentGameType);
            this._currentLevelId = (null == a ? void 0 : a.getLevelId()) || 0;
            this._cachedIsFeatureEnabled = this.isFeatureEnabled() && this.isCurrentModeEnabled();
            if (!this._cachedIsFeatureEnabled) {
                this.clearCurrentModeData();
                t();
                return;
            }
            this._currentDifficulty = this.getCurrentDifficulty();
            var o = null == a ? void 0 : a.getLevelData(), i = null == a ? void 0 : a.getOriginalLevelData();
            (!o || !i) && this.drawNewThemes();
            var n = this.getCurrentModeData();
            n && this.addPreloadThemeAtlas(n, r);
        }
        finally {
            t();
        }
    };
    BaseCardDynamicSkinTrait.prototype.onWinCtrl_viewShow = function (e, t) {
        var r;
        if (this.isNormalModeEnabled()) {
            var a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
            this.prepareNextGame(a);
            t();
        }
        else
            t();
    };
    BaseCardDynamicSkinTrait.prototype.onTLWinCtrl_viewShow = function (e, t) {
        var r;
        if (this.isTravelModeEnabled()) {
            var a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
            this.prepareNextGame(a);
            t();
        }
        else
            t();
    };
    BaseCardDynamicSkinTrait.prototype.onDCWinCtrl_viewShow = function (e, t) {
        var r;
        if (this.isDCModeEnabled()) {
            var a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
            this.prepareNextGame(a);
            t();
        }
        else
            t();
    };
    BaseCardDynamicSkinTrait.prototype.prepareNextGame = function (e) {
        try {
            this._cachedIsFeatureEnabled = this.isFeatureEnabled();
            if (!this._cachedIsFeatureEnabled)
                return;
            var t = UserModel_1.default.getInstance().getGameDataByGameType(this._currentGameType);
            this._currentLevelId = (null == t ? void 0 : t.getLevelId()) || 0;
            this._currentDifficulty = this.getCurrentDifficulty();
            this.drawNewThemes();
            var a = this.getCurrentModeData();
            a && this.loadThemeAtlas(a, e);
        }
        catch (e) {
            console.error("[" + BaseCardDynamicSkinTrait_1.traitKey + "] 准备下一局失败: " + e.message);
        }
    };
    BaseCardDynamicSkinTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        if (this._cachedIsFeatureEnabled) {
            var r = e.args[0];
            if (r) {
                var a = this.getCardType(r), o = this.getThemeForCard(a);
                if (o) {
                    var i = this.mapToFlowerCardName(r);
                    if (i) {
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            returnVal: {
                                path: "atlas/flowerCardIcon/" + i,
                                bundleName: o.bundle,
                                fromAtlas: true
                            }
                        });
                    }
                    else {
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
    BaseCardDynamicSkinTrait.prototype.mapToFlowerCardName = function (e) {
        var t = e.match(/[Wbt](\d)/);
        if (!t)
            return null;
        var a = parseInt(t[1]);
        return BaseCardDynamicSkinTrait_1.FLOWER_CARD_MAP[a] || null;
    };
    BaseCardDynamicSkinTrait.prototype.getStartLevel = function () {
        return this._config.startLevel;
    };
    BaseCardDynamicSkinTrait.prototype.isFeatureEnabled = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal);
        return ((null == e ? void 0 : e.getLevelId()) || 0) >= this.getStartLevel();
    };
    BaseCardDynamicSkinTrait.prototype.isCurrentModeEnabled = function () {
        switch (this._currentGameType) {
            case GameTypeEnums_1.MjGameType.Normal:
                return this.isNormalModeEnabled();
            case GameTypeEnums_1.MjGameType.Travel:
                return this.isTravelModeEnabled();
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return this.isDCModeEnabled();
            default:
                return false;
        }
    };
    BaseCardDynamicSkinTrait.prototype.isNormalModeEnabled = function () {
        return this._config.enableNormal;
    };
    BaseCardDynamicSkinTrait.prototype.isTravelModeEnabled = function () {
        return this._config.enableTravel;
    };
    BaseCardDynamicSkinTrait.prototype.isDCModeEnabled = function () {
        return this._config.enableDailyChallenge;
    };
    BaseCardDynamicSkinTrait.prototype.isBundleReady = function (e) {
        return LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e);
    };
    BaseCardDynamicSkinTrait.prototype.addPreloadThemeAtlas = function (e, t) {
        if (t && "function" == typeof t.addPreloadRes) {
            var r = false;
            if (e.wanTheme && !e.wanTheme.isLocal && !this.isBundleReady(e.wanTheme.bundle)) {
                e.wanTheme = null;
                r = true;
            }
            if (e.tiaoTheme && !e.tiaoTheme.isLocal && !this.isBundleReady(e.tiaoTheme.bundle)) {
                e.tiaoTheme = null;
                r = true;
            }
            if (e.bingTheme && !e.bingTheme.isLocal && !this.isBundleReady(e.bingTheme.bundle)) {
                e.bingTheme = null;
                r = true;
            }
            r && this.saveModeData();
            var a = [];
            e.wanTheme && e.wanTheme.bundle && a.push(e.wanTheme.bundle + ":atlas/flowerCardIcon");
            e.tiaoTheme && e.tiaoTheme.bundle && a.push(e.tiaoTheme.bundle + ":atlas/flowerCardIcon");
            e.bingTheme && e.bingTheme.bundle && a.push(e.bingTheme.bundle + ":atlas/flowerCardIcon");
            var o = Array.from(new Set(a));
            0 !== o.length && o.forEach(function (e) {
                t.addPreloadRes("SpriteAtlas", e);
            });
        }
    };
    BaseCardDynamicSkinTrait.prototype.loadThemeAtlas = function (e, t) {
        var r = this;
        if (t && "function" == typeof t.loadRes) {
            var a = [];
            e.wanTheme && e.wanTheme.bundle && a.push({
                path: "atlas/flowerCardIcon",
                bundle: e.wanTheme.bundle,
                isLocal: e.wanTheme.isLocal
            });
            e.tiaoTheme && e.tiaoTheme.bundle && a.push({
                path: "atlas/flowerCardIcon",
                bundle: e.tiaoTheme.bundle,
                isLocal: e.tiaoTheme.isLocal
            });
            e.bingTheme && e.bingTheme.bundle && a.push({
                path: "atlas/flowerCardIcon",
                bundle: e.bingTheme.bundle,
                isLocal: e.bingTheme.isLocal
            });
            var o = Array.from(new Map(a.map(function (e) {
                return [e.bundle + ":" + e.path, e];
            })).values());
            0 !== o.length && o.forEach(function (e) {
                (e.isLocal || r.isBundleReady(e.bundle)) && t.loadRes(e.path, cc.SpriteAtlas, e.bundle).then(function () { }).catch(function () { });
            });
        }
    };
    BaseCardDynamicSkinTrait.prototype.getCurrentDifficulty = function () {
        if (this._currentGameType !== GameTypeEnums_1.MjGameType.Normal)
            return s.Normal;
        var e = ExtractTool_1.default.getInstance();
        return e.isExpertUI(this._currentLevelId) ? s.Expert : e.isHardUI(this._currentLevelId) ? s.Hard : s.Normal;
    };
    BaseCardDynamicSkinTrait.prototype.getCardType = function (e) {
        return /^b[1-9]$/.test(e) ? l.Bing : /^t[1-9]$/.test(e) ? l.Tiao : /^W[1-9]$/.test(e) ? l.Wan : l.Other;
    };
    BaseCardDynamicSkinTrait.prototype.getThemeForCard = function (e) {
        var t = this.getCurrentModeData();
        return t ? e === l.Bing ? this.getThemeForBing(t) : e === l.Tiao ? this.getThemeForTiao(t) : e === l.Wan ? this.getThemeForWan(t) : null : null;
    };
    BaseCardDynamicSkinTrait.prototype.getThemeForTiao = function (e) {
        return this._currentGameType === GameTypeEnums_1.MjGameType.Normal && this._currentDifficulty === s.Normal ? null : e.tiaoTheme;
    };
    BaseCardDynamicSkinTrait.prototype.getThemeForWan = function (e) {
        return this._currentGameType === GameTypeEnums_1.MjGameType.Normal ? null : this._currentGameType === GameTypeEnums_1.MjGameType.Travel ? null : e.wanTheme;
    };
    BaseCardDynamicSkinTrait.prototype.getThemeForBing = function (e) {
        return this._currentGameType !== GameTypeEnums_1.MjGameType.Normal || this._currentDifficulty !== s.Normal && this._currentDifficulty !== s.Hard ? e.bingTheme : null;
    };
    BaseCardDynamicSkinTrait.prototype.drawNewThemes = function () {
        var e = this.getCurrentModeData();
        if (e) {
            e.usedThemeIds = [];
            if (this.shouldDrawThemeForWan()) {
                e.wanTheme = this.drawRandomTheme(e.usedThemeIds);
            }
            else {
                e.wanTheme = null;
            }
            if (this.shouldDrawThemeForTiao()) {
                e.tiaoTheme = this.drawRandomTheme(e.usedThemeIds);
            }
            else {
                e.tiaoTheme = null;
            }
            if (this.shouldDrawThemeForBing()) {
                e.bingTheme = this.drawRandomTheme(e.usedThemeIds);
            }
            else {
                e.bingTheme = null;
            }
            this.saveModeData();
        }
    };
    BaseCardDynamicSkinTrait.prototype.shouldDrawThemeForWan = function () {
        return this._currentGameType !== GameTypeEnums_1.MjGameType.Normal && this._currentGameType !== GameTypeEnums_1.MjGameType.Travel;
    };
    BaseCardDynamicSkinTrait.prototype.shouldDrawThemeForTiao = function () {
        return this._currentGameType !== GameTypeEnums_1.MjGameType.Normal || this._currentDifficulty === s.Hard || this._currentDifficulty === s.Expert;
    };
    BaseCardDynamicSkinTrait.prototype.shouldDrawThemeForBing = function () {
        return this._currentGameType !== GameTypeEnums_1.MjGameType.Normal || this._currentDifficulty === s.Expert;
    };
    BaseCardDynamicSkinTrait.prototype.drawRandomTheme = function (e) {
        var t = this, r = this.getFlowerCardUsedBundle(), a = this._starThemesList.filter(function (a) {
            return 0 !== a.id && !e.includes(a.id) && (!r || a.bundle !== r) && (!!a.isLocal || t.isBundleReady(a.bundle));
        });
        if (0 === a.length) {
            e.length = 0;
            return this.drawRandomTheme(e);
        }
        var o = a[Math.floor(Math.random() * a.length)];
        e.push(o.id);
        return o;
    };
    BaseCardDynamicSkinTrait.prototype.getFlowerCardUsedBundle = function () {
        try {
            var e = mj.getClassByName("FlowerCardSeriesTrait");
            if (!e)
                return null;
            var t = e.getInstance();
            if (!t || !t.eventEnabled)
                return null;
            var r = t.localData;
            if (!r)
                return null;
            var a = null;
            switch (this._currentGameType) {
                case GameTypeEnums_1.MjGameType.Normal:
                    a = r.Normal;
                    break;
                case GameTypeEnums_1.MjGameType.Travel:
                    a = r.Travel;
                    break;
                case GameTypeEnums_1.MjGameType.DailyChallenge:
                    a = r.DailyChallenge;
            }
            return a && a.currentSeries ? 0 === a.currentSeries.id ? null : a.currentSeries.bundle : null;
        }
        catch (e) {
            return null;
        }
    };
    BaseCardDynamicSkinTrait.prototype.onDGameEnd_adjust = function (e, t) {
        try {
            var r = __read(e.args, 3), a = r[0], o = r[1];
            r[2];
            if (!a || !o) {
                t();
                return;
            }
            var i = o.getGameData().gameType, l = false;
            switch (i) {
                case GameTypeEnums_1.MjGameType.Normal:
                    l = this.isNormalModeEnabled();
                    break;
                case GameTypeEnums_1.MjGameType.Travel:
                    l = this.isTravelModeEnabled();
                    break;
                case GameTypeEnums_1.MjGameType.DailyChallenge:
                    l = this.isDCModeEnabled();
            }
            if (!l) {
                t();
                return;
            }
            var s = null;
            switch (i) {
                case GameTypeEnums_1.MjGameType.Normal:
                    s = this.localData.Normal;
                    break;
                case GameTypeEnums_1.MjGameType.Travel:
                    s = this.localData.Travel;
                    break;
                case GameTypeEnums_1.MjGameType.DailyChallenge:
                    s = this.localData.DailyChallenge;
            }
            if (!s) {
                t();
                return;
            }
            var d = [];
            d.push(s.wanTheme ? s.wanTheme.name : "");
            d.push(s.tiaoTheme ? s.tiaoTheme.name : "");
            d.push(s.bingTheme ? s.bingTheme.name : "");
            a.topic_id = d;
        }
        catch (e) { }
        t();
    };
    BaseCardDynamicSkinTrait.prototype.getCurrentModeData = function () {
        switch (this._currentGameType) {
            case GameTypeEnums_1.MjGameType.Normal:
                return this.localData.Normal;
            case GameTypeEnums_1.MjGameType.Travel:
                return this.localData.Travel;
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return this.localData.DailyChallenge;
            default:
                return this.localData.Normal;
        }
    };
    BaseCardDynamicSkinTrait.prototype.saveModeData = function () {
        switch (this._currentGameType) {
            case GameTypeEnums_1.MjGameType.Normal:
                this.localData.Normal = this.localData.Normal;
                break;
            case GameTypeEnums_1.MjGameType.Travel:
                this.localData.Travel = this.localData.Travel;
                break;
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                this.localData.DailyChallenge = this.localData.DailyChallenge;
        }
    };
    BaseCardDynamicSkinTrait.prototype.clearCurrentModeData = function () {
        var e = this.getCurrentModeData();
        if (e) {
            e.wanTheme = null;
            e.tiaoTheme = null;
            e.bingTheme = null;
            e.usedThemeIds = [];
            this.saveModeData();
        }
    };
    var BaseCardDynamicSkinTrait_1;
    BaseCardDynamicSkinTrait.traitKey = "BaseCardDynamicSkin";
    BaseCardDynamicSkinTrait.FLOWER_CARD_MAP = {
        1: "Z_dong",
        2: "Z_nan",
        3: "Z_xi",
        4: "Z_bei",
        5: "Z_zhong",
        6: "Z_fa",
        7: "Z_bai",
        8: "H_mei",
        9: "J_chun"
    };
    __decorate([
        mj.traitEvent("BaseCardSkin_getStartLv")
    ], BaseCardDynamicSkinTrait.prototype, "getStartLevel", null);
    __decorate([
        mj.traitEvent("BaseCardSkin_isNormalOn")
    ], BaseCardDynamicSkinTrait.prototype, "isNormalModeEnabled", null);
    __decorate([
        mj.traitEvent("BaseCardSkin_isTravelOn")
    ], BaseCardDynamicSkinTrait.prototype, "isTravelModeEnabled", null);
    __decorate([
        mj.traitEvent("BaseCardSkin_isDCOn")
    ], BaseCardDynamicSkinTrait.prototype, "isDCModeEnabled", null);
    BaseCardDynamicSkinTrait = BaseCardDynamicSkinTrait_1 = __decorate([
        mj.trait,
        mj.class("BaseCardDynamicSkinTrait")
    ], BaseCardDynamicSkinTrait);
    return BaseCardDynamicSkinTrait;
}(Trait_1.default));
exports.default = BaseCardDynamicSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9CYXNlQ2FyZER5bmFtaWNTa2luVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSxpRkFBNEU7QUFDNUUscUdBQWdJO0FBQ2hJLGlHQUFnRztBQUNoRyxJQUFJLENBQUMsR0FBRztJQUNOLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQztBQUNGLElBQUksQ0FBQyxHQUFHO0lBQ04sTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBR0Y7SUFBc0QsNENBQUs7SUFBM0Q7UUFBQSxxRUFpYUM7UUFoYUMsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLHNCQUFnQixHQUFHLDBCQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3JDLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLHdCQUFrQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUIsNkJBQXVCLEdBQUcsS0FBSyxDQUFDOztJQTRabEMsQ0FBQztpQ0FqYW9CLHdCQUF3QjtJQWtCM0Msc0JBQUkscURBQWU7YUFBbkI7WUFDRSxPQUFPLDJDQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBQ0QseUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FB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QUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7SUExWk0saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQUNqQyx3Q0FBZSxHQUFHO1FBQ3ZCLENBQUMsRUFBRSxRQUFRO1FBQ1gsQ0FBQyxFQUFFLE9BQU87UUFDVixDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxPQUFPO1FBQ1YsQ0FBQyxFQUFFLFNBQVM7UUFDWixDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxPQUFPO1FBQ1YsQ0FBQyxFQUFFLE9BQU87UUFDVixDQUFDLEVBQUUsUUFBUTtLQUNaLENBQUM7SUE0SUY7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2lFQUd4QztJQWtCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7dUVBR3hDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3VFQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzttRUFHcEM7SUEzTGtCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBaWE1QztJQUFELCtCQUFDO0NBamFELEFBaWFDLENBamFxRCxlQUFLLEdBaWExRDtrQkFqYW9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIsIHsgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvTG93UHJpb3JpdHlCdW5kbGVMb2FkZXInO1xuaW1wb3J0IHsgRmxvd2VyU3RhckNvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9GbG93ZXJTdGFyQ29uZmlnVXRpbCc7XG52YXIgbCA9IHtcbiAgQmluZzogXCJiaW5nXCIsXG4gIFRpYW86IFwidGlhb1wiLFxuICBXYW46IFwid2FuXCIsXG4gIE90aGVyOiBcIm90aGVyXCJcbn07XG52YXIgcyA9IHtcbiAgTm9ybWFsOiBcIm5vcm1hbFwiLFxuICBIYXJkOiBcImhhcmRcIixcbiAgRXhwZXJ0OiBcImV4cGVydFwiXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCYXNlQ2FyZER5bmFtaWNTa2luVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDYXJkRHluYW1pY1NraW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHt9O1xuICBfY3VycmVudEdhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIF9jdXJyZW50TGV2ZWxJZCA9IDA7XG4gIF9jdXJyZW50RGlmZmljdWx0eSA9IHMuTm9ybWFsO1xuICBfY2FjaGVkSXNGZWF0dXJlRW5hYmxlZCA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkJhc2VDYXJkRHluYW1pY1NraW5cIjtcbiAgc3RhdGljIEZMT1dFUl9DQVJEX01BUCA9IHtcbiAgICAxOiBcIlpfZG9uZ1wiLFxuICAgIDI6IFwiWl9uYW5cIixcbiAgICAzOiBcIlpfeGlcIixcbiAgICA0OiBcIlpfYmVpXCIsXG4gICAgNTogXCJaX3pob25nXCIsXG4gICAgNjogXCJaX2ZhXCIsXG4gICAgNzogXCJaX2JhaVwiLFxuICAgIDg6IFwiSF9tZWlcIixcbiAgICA5OiBcIkpfY2h1blwiXG4gIH07XG4gIGdldCBfc3RhclRoZW1lc0xpc3QoKSB7XG4gICAgcmV0dXJuIEZsb3dlclN0YXJDb25maWdVdGlsLmdldEZ1bGxMaXN0KCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByLCBhLCBvLCBpLCBuLCBsLCBzO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIHN0YXJ0TGV2ZWw6IG51bGwgIT09IChyID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3RhcnRMZXZlbCkgJiYgdm9pZCAwICE9PSByID8gciA6IDgsXG4gICAgICBlbmFibGVOb3JtYWw6IG51bGwgPT09IChvID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZW5hYmxlTm9ybWFsKSB8fCB2b2lkIDAgPT09IG8gfHwgbyxcbiAgICAgIGVuYWJsZVRyYXZlbDogbnVsbCA9PT0gKG4gPSBudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5lbmFibGVUcmF2ZWwpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLFxuICAgICAgZW5hYmxlRGFpbHlDaGFsbGVuZ2U6IG51bGwgPT09IChzID0gbnVsbCA9PT0gKGwgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuZW5hYmxlRGFpbHlDaGFsbGVuZ2UpIHx8IHZvaWQgMCA9PT0gcyB8fCBzXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsRGF0YS5Ob3JtYWwgfHwgKHRoaXMubG9jYWxEYXRhLk5vcm1hbCA9IHRoaXMuY3JlYXRlRW1wdHlNb2RlRGF0YSgpKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5UcmF2ZWwgfHwgKHRoaXMubG9jYWxEYXRhLlRyYXZlbCA9IHRoaXMuY3JlYXRlRW1wdHlNb2RlRGF0YSgpKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5EYWlseUNoYWxsZW5nZSB8fCAodGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2UgPSB0aGlzLmNyZWF0ZUVtcHR5TW9kZURhdGEoKSk7XG4gICAgdGhpcy5hZGRSZW1vdGVCdW5kbGVzVG9Mb2FkZXIoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIkRHYW1lRW5kX2FkanVzdFwiXG4gICAgfV0pO1xuICB9XG4gIGdtU2V0VGhlbWVJZHMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZpbmRUaGVtZUJ5SWRPck51bGwoZSkge1xuICAgIHJldHVybiBlICYmIDAgIT09IGUgPyBcIm51bWJlclwiICE9IHR5cGVvZiBlIHx8IGlzTmFOKGUpID8gbnVsbCA6IHRoaXMuX3N0YXJUaGVtZXNMaXN0LmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmlkID09PSBlO1xuICAgIH0pIHx8IG51bGwgOiBudWxsO1xuICB9XG4gIGFkZFJlbW90ZUJ1bmRsZXNUb0xvYWRlcigpIHtcbiAgICB2YXIgZSA9IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCksXG4gICAgICB0ID0gdGhpcy5fc3RhclRoZW1lc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhZS5pc0xvY2FsO1xuICAgICAgfSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmJ1bmRsZTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20obmV3IFNldCh0KSkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgZS5hZGRUYXNrKHQsIEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHRDYXJkWGluZ3l1bkh1YVBhaSk7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlRW1wdHlNb2RlRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2FuVGhlbWU6IG51bGwsXG4gICAgICB0aWFvVGhlbWU6IG51bGwsXG4gICAgICBiaW5nVGhlbWU6IG51bGwsXG4gICAgICB1c2VkVGhlbWVJZHM6IFtdXG4gICAgfTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pbml0UmVzKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSBlLmlucztcbiAgICAgIHRoaXMuX2N1cnJlbnRHYW1lVHlwZSA9IHIuZ2FtZVR5cGU7XG4gICAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLl9jdXJyZW50R2FtZVR5cGUpO1xuICAgICAgdGhpcy5fY3VycmVudExldmVsSWQgPSAobnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgICB0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkID0gdGhpcy5pc0ZlYXR1cmVFbmFibGVkKCkgJiYgdGhpcy5pc0N1cnJlbnRNb2RlRW5hYmxlZCgpO1xuICAgICAgaWYgKCF0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJDdXJyZW50TW9kZURhdGEoKTtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50RGlmZmljdWx0eSA9IHRoaXMuZ2V0Q3VycmVudERpZmZpY3VsdHkoKTtcbiAgICAgIHZhciBvID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRMZXZlbERhdGEoKSxcbiAgICAgICAgaSA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKTtcbiAgICAgICghbyB8fCAhaSkgJiYgdGhpcy5kcmF3TmV3VGhlbWVzKCk7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2V0Q3VycmVudE1vZGVEYXRhKCk7XG4gICAgICBuICYmIHRoaXMuYWRkUHJlbG9hZFRoZW1lQXRsYXMobiwgcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25XaW5DdHJsX3ZpZXdTaG93KGUsIHQpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAodGhpcy5pc05vcm1hbE1vZGVFbmFibGVkKCkpIHtcbiAgICAgIHZhciBhID0gbnVsbCA9PT0gKHIgPSBlLmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5wYXJlbnRDb250cm9sbGVyO1xuICAgICAgdGhpcy5wcmVwYXJlTmV4dEdhbWUoYSk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblRMV2luQ3RybF92aWV3U2hvdyhlLCB0KSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuaXNUcmF2ZWxNb2RlRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChyID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucGFyZW50Q29udHJvbGxlcjtcbiAgICAgIHRoaXMucHJlcGFyZU5leHRHYW1lKGEpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25EQ1dpbkN0cmxfdmlld1Nob3coZSwgdCkge1xuICAgIHZhciByO1xuICAgIGlmICh0aGlzLmlzRENNb2RlRW5hYmxlZCgpKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChyID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucGFyZW50Q29udHJvbGxlcjtcbiAgICAgIHRoaXMucHJlcGFyZU5leHRHYW1lKGEpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgcHJlcGFyZU5leHRHYW1lKGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fY2FjaGVkSXNGZWF0dXJlRW5hYmxlZCA9IHRoaXMuaXNGZWF0dXJlRW5hYmxlZCgpO1xuICAgICAgaWYgKCF0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkKSByZXR1cm47XG4gICAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLl9jdXJyZW50R2FtZVR5cGUpO1xuICAgICAgdGhpcy5fY3VycmVudExldmVsSWQgPSAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgICB0aGlzLl9jdXJyZW50RGlmZmljdWx0eSA9IHRoaXMuZ2V0Q3VycmVudERpZmZpY3VsdHkoKTtcbiAgICAgIHRoaXMuZHJhd05ld1RoZW1lcygpO1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1cnJlbnRNb2RlRGF0YSgpO1xuICAgICAgYSAmJiB0aGlzLmxvYWRUaGVtZUF0bGFzKGEsIGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBCYXNlQ2FyZER5bmFtaWNTa2luVHJhaXQudHJhaXRLZXkgKyBcIl0g5YeG5aSH5LiL5LiA5bGA5aSx6LSlOiBcIiArIGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKGUsIHQpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkSXNGZWF0dXJlRW5hYmxlZCkge1xuICAgICAgdmFyIHIgPSBlLmFyZ3NbMF07XG4gICAgICBpZiAocikge1xuICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0Q2FyZFR5cGUociksXG4gICAgICAgICAgbyA9IHRoaXMuZ2V0VGhlbWVGb3JDYXJkKGEpO1xuICAgICAgICBpZiAobykge1xuICAgICAgICAgIHZhciBpID0gdGhpcy5tYXBUb0Zsb3dlckNhcmROYW1lKHIpO1xuICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImF0bGFzL2Zsb3dlckNhcmRJY29uL1wiICsgaSxcbiAgICAgICAgICAgICAgICBidW5kbGVOYW1lOiBvLmJ1bmRsZSxcbiAgICAgICAgICAgICAgICBmcm9tQXRsYXM6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgbWFwVG9GbG93ZXJDYXJkTmFtZShlKSB7XG4gICAgdmFyIHQgPSBlLm1hdGNoKC9bV2J0XShcXGQpLyk7XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgYSA9IHBhcnNlSW50KHRbMV0pO1xuICAgIHJldHVybiBCYXNlQ2FyZER5bmFtaWNTa2luVHJhaXQuRkxPV0VSX0NBUkRfTUFQW2FdIHx8IG51bGw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCYXNlQ2FyZFNraW5fZ2V0U3RhcnRMdlwiKVxuICBnZXRTdGFydExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc3RhcnRMZXZlbDtcbiAgfVxuICBpc0ZlYXR1cmVFbmFibGVkKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKE1qR2FtZVR5cGUuTm9ybWFsKTtcbiAgICByZXR1cm4gKChudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldExldmVsSWQoKSkgfHwgMCkgPj0gdGhpcy5nZXRTdGFydExldmVsKCk7XG4gIH1cbiAgaXNDdXJyZW50TW9kZUVuYWJsZWQoKSB7XG4gICAgc3dpdGNoICh0aGlzLl9jdXJyZW50R2FtZVR5cGUpIHtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5Ob3JtYWw6XG4gICAgICAgIHJldHVybiB0aGlzLmlzTm9ybWFsTW9kZUVuYWJsZWQoKTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5UcmF2ZWw6XG4gICAgICAgIHJldHVybiB0aGlzLmlzVHJhdmVsTW9kZUVuYWJsZWQoKTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEQ01vZGVFbmFibGVkKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQmFzZUNhcmRTa2luX2lzTm9ybWFsT25cIilcbiAgaXNOb3JtYWxNb2RlRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmVuYWJsZU5vcm1hbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJhc2VDYXJkU2tpbl9pc1RyYXZlbE9uXCIpXG4gIGlzVHJhdmVsTW9kZUVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5lbmFibGVUcmF2ZWw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCYXNlQ2FyZFNraW5faXNEQ09uXCIpXG4gIGlzRENNb2RlRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmVuYWJsZURhaWx5Q2hhbGxlbmdlO1xuICB9XG4gIGlzQnVuZGxlUmVhZHkoZSkge1xuICAgIHJldHVybiBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLmlzQnVuZGxlUHJlTG9hZGVkKGUpO1xuICB9XG4gIGFkZFByZWxvYWRUaGVtZUF0bGFzKGUsIHQpIHtcbiAgICBpZiAodCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQuYWRkUHJlbG9hZFJlcykge1xuICAgICAgdmFyIHIgPSBmYWxzZTtcbiAgICAgIGlmIChlLndhblRoZW1lICYmICFlLndhblRoZW1lLmlzTG9jYWwgJiYgIXRoaXMuaXNCdW5kbGVSZWFkeShlLndhblRoZW1lLmJ1bmRsZSkpIHtcbiAgICAgICAgZS53YW5UaGVtZSA9IG51bGw7XG4gICAgICAgIHIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGUudGlhb1RoZW1lICYmICFlLnRpYW9UaGVtZS5pc0xvY2FsICYmICF0aGlzLmlzQnVuZGxlUmVhZHkoZS50aWFvVGhlbWUuYnVuZGxlKSkge1xuICAgICAgICBlLnRpYW9UaGVtZSA9IG51bGw7XG4gICAgICAgIHIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGUuYmluZ1RoZW1lICYmICFlLmJpbmdUaGVtZS5pc0xvY2FsICYmICF0aGlzLmlzQnVuZGxlUmVhZHkoZS5iaW5nVGhlbWUuYnVuZGxlKSkge1xuICAgICAgICBlLmJpbmdUaGVtZSA9IG51bGw7XG4gICAgICAgIHIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgciAmJiB0aGlzLnNhdmVNb2RlRGF0YSgpO1xuICAgICAgdmFyIGEgPSBbXTtcbiAgICAgIGUud2FuVGhlbWUgJiYgZS53YW5UaGVtZS5idW5kbGUgJiYgYS5wdXNoKGUud2FuVGhlbWUuYnVuZGxlICsgXCI6YXRsYXMvZmxvd2VyQ2FyZEljb25cIik7XG4gICAgICBlLnRpYW9UaGVtZSAmJiBlLnRpYW9UaGVtZS5idW5kbGUgJiYgYS5wdXNoKGUudGlhb1RoZW1lLmJ1bmRsZSArIFwiOmF0bGFzL2Zsb3dlckNhcmRJY29uXCIpO1xuICAgICAgZS5iaW5nVGhlbWUgJiYgZS5iaW5nVGhlbWUuYnVuZGxlICYmIGEucHVzaChlLmJpbmdUaGVtZS5idW5kbGUgKyBcIjphdGxhcy9mbG93ZXJDYXJkSWNvblwiKTtcbiAgICAgIHZhciBvID0gQXJyYXkuZnJvbShuZXcgU2V0KGEpKTtcbiAgICAgIDAgIT09IG8ubGVuZ3RoICYmIG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB0LmFkZFByZWxvYWRSZXMoXCJTcHJpdGVBdGxhc1wiLCBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBsb2FkVGhlbWVBdGxhcyhlLCB0KSB7XG4gICAgdmFyIHIgPSB0aGlzO1xuICAgIGlmICh0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5sb2FkUmVzKSB7XG4gICAgICB2YXIgYSA9IFtdO1xuICAgICAgZS53YW5UaGVtZSAmJiBlLndhblRoZW1lLmJ1bmRsZSAmJiBhLnB1c2goe1xuICAgICAgICBwYXRoOiBcImF0bGFzL2Zsb3dlckNhcmRJY29uXCIsXG4gICAgICAgIGJ1bmRsZTogZS53YW5UaGVtZS5idW5kbGUsXG4gICAgICAgIGlzTG9jYWw6IGUud2FuVGhlbWUuaXNMb2NhbFxuICAgICAgfSk7XG4gICAgICBlLnRpYW9UaGVtZSAmJiBlLnRpYW9UaGVtZS5idW5kbGUgJiYgYS5wdXNoKHtcbiAgICAgICAgcGF0aDogXCJhdGxhcy9mbG93ZXJDYXJkSWNvblwiLFxuICAgICAgICBidW5kbGU6IGUudGlhb1RoZW1lLmJ1bmRsZSxcbiAgICAgICAgaXNMb2NhbDogZS50aWFvVGhlbWUuaXNMb2NhbFxuICAgICAgfSk7XG4gICAgICBlLmJpbmdUaGVtZSAmJiBlLmJpbmdUaGVtZS5idW5kbGUgJiYgYS5wdXNoKHtcbiAgICAgICAgcGF0aDogXCJhdGxhcy9mbG93ZXJDYXJkSWNvblwiLFxuICAgICAgICBidW5kbGU6IGUuYmluZ1RoZW1lLmJ1bmRsZSxcbiAgICAgICAgaXNMb2NhbDogZS5iaW5nVGhlbWUuaXNMb2NhbFxuICAgICAgfSk7XG4gICAgICB2YXIgbyA9IEFycmF5LmZyb20obmV3IE1hcChhLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gW2UuYnVuZGxlICsgXCI6XCIgKyBlLnBhdGgsIGVdO1xuICAgICAgfSkpLnZhbHVlcygpKTtcbiAgICAgIDAgIT09IG8ubGVuZ3RoICYmIG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAoZS5pc0xvY2FsIHx8IHIuaXNCdW5kbGVSZWFkeShlLmJ1bmRsZSkpICYmIHQubG9hZFJlcyhlLnBhdGgsIGNjLlNwcml0ZUF0bGFzLCBlLmJ1bmRsZSkudGhlbihmdW5jdGlvbiAoKSB7fSkuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldEN1cnJlbnREaWZmaWN1bHR5KCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50R2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSByZXR1cm4gcy5Ob3JtYWw7XG4gICAgdmFyIGUgPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiBlLmlzRXhwZXJ0VUkodGhpcy5fY3VycmVudExldmVsSWQpID8gcy5FeHBlcnQgOiBlLmlzSGFyZFVJKHRoaXMuX2N1cnJlbnRMZXZlbElkKSA/IHMuSGFyZCA6IHMuTm9ybWFsO1xuICB9XG4gIGdldENhcmRUeXBlKGUpIHtcbiAgICByZXR1cm4gL15iWzEtOV0kLy50ZXN0KGUpID8gbC5CaW5nIDogL150WzEtOV0kLy50ZXN0KGUpID8gbC5UaWFvIDogL15XWzEtOV0kLy50ZXN0KGUpID8gbC5XYW4gOiBsLk90aGVyO1xuICB9XG4gIGdldFRoZW1lRm9yQ2FyZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1cnJlbnRNb2RlRGF0YSgpO1xuICAgIHJldHVybiB0ID8gZSA9PT0gbC5CaW5nID8gdGhpcy5nZXRUaGVtZUZvckJpbmcodCkgOiBlID09PSBsLlRpYW8gPyB0aGlzLmdldFRoZW1lRm9yVGlhbyh0KSA6IGUgPT09IGwuV2FuID8gdGhpcy5nZXRUaGVtZUZvcldhbih0KSA6IG51bGwgOiBudWxsO1xuICB9XG4gIGdldFRoZW1lRm9yVGlhbyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRHYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgdGhpcy5fY3VycmVudERpZmZpY3VsdHkgPT09IHMuTm9ybWFsID8gbnVsbCA6IGUudGlhb1RoZW1lO1xuICB9XG4gIGdldFRoZW1lRm9yV2FuKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEdhbWVUeXBlID09PSBNakdhbWVUeXBlLk5vcm1hbCA/IG51bGwgOiB0aGlzLl9jdXJyZW50R2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVHJhdmVsID8gbnVsbCA6IGUud2FuVGhlbWU7XG4gIH1cbiAgZ2V0VGhlbWVGb3JCaW5nKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEdhbWVUeXBlICE9PSBNakdhbWVUeXBlLk5vcm1hbCB8fCB0aGlzLl9jdXJyZW50RGlmZmljdWx0eSAhPT0gcy5Ob3JtYWwgJiYgdGhpcy5fY3VycmVudERpZmZpY3VsdHkgIT09IHMuSGFyZCA/IGUuYmluZ1RoZW1lIDogbnVsbDtcbiAgfVxuICBkcmF3TmV3VGhlbWVzKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRDdXJyZW50TW9kZURhdGEoKTtcbiAgICBpZiAoZSkge1xuICAgICAgZS51c2VkVGhlbWVJZHMgPSBbXTtcbiAgICAgIGlmICh0aGlzLnNob3VsZERyYXdUaGVtZUZvcldhbigpKSB7XG4gICAgICAgIGUud2FuVGhlbWUgPSB0aGlzLmRyYXdSYW5kb21UaGVtZShlLnVzZWRUaGVtZUlkcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLndhblRoZW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNob3VsZERyYXdUaGVtZUZvclRpYW8oKSkge1xuICAgICAgICBlLnRpYW9UaGVtZSA9IHRoaXMuZHJhd1JhbmRvbVRoZW1lKGUudXNlZFRoZW1lSWRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGlhb1RoZW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNob3VsZERyYXdUaGVtZUZvckJpbmcoKSkge1xuICAgICAgICBlLmJpbmdUaGVtZSA9IHRoaXMuZHJhd1JhbmRvbVRoZW1lKGUudXNlZFRoZW1lSWRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUuYmluZ1RoZW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZU1vZGVEYXRhKCk7XG4gICAgfVxuICB9XG4gIHNob3VsZERyYXdUaGVtZUZvcldhbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEdhbWVUeXBlICE9PSBNakdhbWVUeXBlLk5vcm1hbCAmJiB0aGlzLl9jdXJyZW50R2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuVHJhdmVsO1xuICB9XG4gIHNob3VsZERyYXdUaGVtZUZvclRpYW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRHYW1lVHlwZSAhPT0gTWpHYW1lVHlwZS5Ob3JtYWwgfHwgdGhpcy5fY3VycmVudERpZmZpY3VsdHkgPT09IHMuSGFyZCB8fCB0aGlzLl9jdXJyZW50RGlmZmljdWx0eSA9PT0gcy5FeHBlcnQ7XG4gIH1cbiAgc2hvdWxkRHJhd1RoZW1lRm9yQmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEdhbWVUeXBlICE9PSBNakdhbWVUeXBlLk5vcm1hbCB8fCB0aGlzLl9jdXJyZW50RGlmZmljdWx0eSA9PT0gcy5FeHBlcnQ7XG4gIH1cbiAgZHJhd1JhbmRvbVRoZW1lKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICByID0gdGhpcy5nZXRGbG93ZXJDYXJkVXNlZEJ1bmRsZSgpLFxuICAgICAgYSA9IHRoaXMuX3N0YXJUaGVtZXNMaXN0LmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gMCAhPT0gYS5pZCAmJiAhZS5pbmNsdWRlcyhhLmlkKSAmJiAoIXIgfHwgYS5idW5kbGUgIT09IHIpICYmICghIWEuaXNMb2NhbCB8fCB0LmlzQnVuZGxlUmVhZHkoYS5idW5kbGUpKTtcbiAgICAgIH0pO1xuICAgIGlmICgwID09PSBhLmxlbmd0aCkge1xuICAgICAgZS5sZW5ndGggPSAwO1xuICAgICAgcmV0dXJuIHRoaXMuZHJhd1JhbmRvbVRoZW1lKGUpO1xuICAgIH1cbiAgICB2YXIgbyA9IGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYS5sZW5ndGgpXTtcbiAgICBlLnB1c2goby5pZCk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgZ2V0Rmxvd2VyQ2FyZFVzZWRCdW5kbGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGbG93ZXJDYXJkU2VyaWVzVHJhaXRcIik7XG4gICAgICBpZiAoIWUpIHJldHVybiBudWxsO1xuICAgICAgdmFyIHQgPSBlLmdldEluc3RhbmNlKCk7XG4gICAgICBpZiAoIXQgfHwgIXQuZXZlbnRFbmFibGVkKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciByID0gdC5sb2NhbERhdGE7XG4gICAgICBpZiAoIXIpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGEgPSBudWxsO1xuICAgICAgc3dpdGNoICh0aGlzLl9jdXJyZW50R2FtZVR5cGUpIHtcbiAgICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgICBhID0gci5Ob3JtYWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWpHYW1lVHlwZS5UcmF2ZWw6XG4gICAgICAgICAgYSA9IHIuVHJhdmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgICAgYSA9IHIuRGFpbHlDaGFsbGVuZ2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gYSAmJiBhLmN1cnJlbnRTZXJpZXMgPyAwID09PSBhLmN1cnJlbnRTZXJpZXMuaWQgPyBudWxsIDogYS5jdXJyZW50U2VyaWVzLmJ1bmRsZSA6IG51bGw7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIG9uREdhbWVFbmRfYWRqdXN0KGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSBfX3JlYWQoZS5hcmdzLCAzKSxcbiAgICAgICAgYSA9IHJbMF0sXG4gICAgICAgIG8gPSByWzFdO1xuICAgICAgclsyXTtcbiAgICAgIGlmICghYSB8fCAhbykge1xuICAgICAgICB0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gby5nZXRHYW1lRGF0YSgpLmdhbWVUeXBlLFxuICAgICAgICBsID0gZmFsc2U7XG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgICBsID0gdGhpcy5pc05vcm1hbE1vZGVFbmFibGVkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWpHYW1lVHlwZS5UcmF2ZWw6XG4gICAgICAgICAgbCA9IHRoaXMuaXNUcmF2ZWxNb2RlRW5hYmxlZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgICAgbCA9IHRoaXMuaXNEQ01vZGVFbmFibGVkKCk7XG4gICAgICB9XG4gICAgICBpZiAoIWwpIHtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcyA9IG51bGw7XG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgICBzID0gdGhpcy5sb2NhbERhdGEuTm9ybWFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1qR2FtZVR5cGUuVHJhdmVsOlxuICAgICAgICAgIHMgPSB0aGlzLmxvY2FsRGF0YS5UcmF2ZWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTpcbiAgICAgICAgICBzID0gdGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2U7XG4gICAgICB9XG4gICAgICBpZiAoIXMpIHtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZCA9IFtdO1xuICAgICAgZC5wdXNoKHMud2FuVGhlbWUgPyBzLndhblRoZW1lLm5hbWUgOiBcIlwiKTtcbiAgICAgIGQucHVzaChzLnRpYW9UaGVtZSA/IHMudGlhb1RoZW1lLm5hbWUgOiBcIlwiKTtcbiAgICAgIGQucHVzaChzLmJpbmdUaGVtZSA/IHMuYmluZ1RoZW1lLm5hbWUgOiBcIlwiKTtcbiAgICAgIGEudG9waWNfaWQgPSBkO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdCgpO1xuICB9XG4gIGdldEN1cnJlbnRNb2RlRGF0YSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX2N1cnJlbnRHYW1lVHlwZSkge1xuICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLk5vcm1hbDtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5UcmF2ZWw6XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5UcmF2ZWw7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5EYWlseUNoYWxsZW5nZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5Ob3JtYWw7XG4gICAgfVxuICB9XG4gIHNhdmVNb2RlRGF0YSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX2N1cnJlbnRHYW1lVHlwZSkge1xuICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuTm9ybWFsID0gdGhpcy5sb2NhbERhdGEuTm9ybWFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5UcmF2ZWw6XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLlRyYXZlbCA9IHRoaXMubG9jYWxEYXRhLlRyYXZlbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2U6XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLkRhaWx5Q2hhbGxlbmdlID0gdGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2U7XG4gICAgfVxuICB9XG4gIGNsZWFyQ3VycmVudE1vZGVEYXRhKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRDdXJyZW50TW9kZURhdGEoKTtcbiAgICBpZiAoZSkge1xuICAgICAgZS53YW5UaGVtZSA9IG51bGw7XG4gICAgICBlLnRpYW9UaGVtZSA9IG51bGw7XG4gICAgICBlLmJpbmdUaGVtZSA9IG51bGw7XG4gICAgICBlLnVzZWRUaGVtZUlkcyA9IFtdO1xuICAgICAgdGhpcy5zYXZlTW9kZURhdGEoKTtcbiAgICB9XG4gIH1cbn0iXX0=