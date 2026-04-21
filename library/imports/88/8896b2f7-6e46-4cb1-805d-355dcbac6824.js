"use strict";
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