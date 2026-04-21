"use strict";
cc._RF.push(module, '64808rwpUNBYZ+VLCG9FzKu', 'ChangeBaseCardByLanTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardByLanTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var DChangeBaseSkin_1 = require("../../../Scripts/gamePlay/dot/DChangeBaseSkin");
var v = {
    en: "EN",
    "zh-cn": "CN",
    "zh-tw": "TW",
    "zh-hk": "TW",
    ko: "KO",
    ja: "JP",
    ru: "RU",
    es: "ES",
    pt: "PT",
    de: "DE",
    fr: "FR"
};
var y = /^[btW][1-9]$/;
var ChangeBaseCardByLanTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseCardByLanTrait, _super);
    function ChangeBaseCardByLanTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._langSuffixMap = {};
        _this._gameTypes = [];
        _this._currentGameSkin = "l_lanCardEN";
        _this._skinEnabled = true;
        _this._changeCardNames = [];
        _this._lanActiveSkin = "l_lanCardEN";
        return _this;
    }
    ChangeBaseCardByLanTrait_1 = ChangeBaseCardByLanTrait;
    ChangeBaseCardByLanTrait.prototype.onLoad = function () {
        var e, r, n = this;
        _super.prototype.onLoad.call(this);
        this._langSuffixMap = Object.assign({}, v, (null === (e = this._traitData) || void 0 === e ? void 0 : e.langBundleMap) || {});
        this._gameTypes = (null === (r = this._traitData) || void 0 === r ? void 0 : r.gameTypes) || [];
        var i = this.localData.unlockedSkins || [];
        this.localData.unlockedSkins = i;
        Promise.resolve().then(function () {
            var t;
            if (!n.localData.activeSkin) {
                n.localData.activeSkin = n.getDefaultSkin() || "l_lanCardEN";
                n.localData.activeSkin = n.localData.activeSkin;
            }
            n._currentGameSkin = n.localData.activeSkin;
            n._lanActiveSkin = n.localData.activeSkin;
            2 != (null === (t = n._traitData) || void 0 === t ? void 0 : t.autoLockSkin) && n.unlockSkin(n.localData.activeSkin);
            n.defOpenSkins();
            n._loadSkinBundle(n._currentGameSkin).catch(function (t) {
                console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] 初始化预加载皮肤失败: " + (null == t ? void 0 : t.message));
            });
            n.registerEvent([{
                    event: "DGameStart_adjust"
                }, {
                    event: "DGameEnd_adjust"
                }]);
        });
    };
    ChangeBaseCardByLanTrait.prototype.getMessageListeners = function () {
        return {
            "language-changed": this._onLanguageChanged.bind(this)
        };
    };
    ChangeBaseCardByLanTrait.prototype.onLangSelTrait_getAssLan = function (t, e) {
        if (this._traitData.language) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._traitData.language
            });
        }
        else {
            e();
        }
    };
    ChangeBaseCardByLanTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        try {
            var r = t.ins, n = null == r ? void 0 : r.gameType;
            if (!this._isGameTypeOpen(n)) {
                e();
                return;
            }
            var i = this.localData.activeSkin || "l_lanCardEN";
            i = this.getRealBundleName(i);
            r && "function" == typeof r.addPreloadRes && "l_lanCardJP" !== i && r.addPreloadRes("SpriteAtlas", i + ":atlas/cardIcon");
        }
        catch (t) {
            console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] initRes处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    ChangeBaseCardByLanTrait.prototype.onIptSetLv_exec = function (t, e) {
        var r, n, i;
        try {
            var o = t.ins, l = null === (r = t.args) || void 0 === r ? void 0 : r[0], s = null === (n = null == o ? void 0 : o.gameContext) || void 0 === n ? void 0 : n.gameType;
            this._changeCardNames = [];
            this._skinEnabled = this._isGameTypeOpen(s);
            if (!this._skinEnabled) {
                e();
                return;
            }
            if (null === (i = null == l ? void 0 : l.levelData) || void 0 === i ? void 0 : i.isNewGame)
                this._currentGameSkin = this._resolveCurrentGameSkin({
                    gameType: s
                });
            else {
                var c = this._getHardSkin(s);
                c && (this._currentGameSkin = c);
            }
        }
        catch (t) {
            console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] IptSetLv_exec处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    ChangeBaseCardByLanTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var r;
        try {
            var n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if (!this._skinEnabled) {
                e();
                return;
            }
            if (this.checkCardNumberOpen()) {
                e();
                return;
            }
            if (!n || !y.test(n)) {
                e();
                return;
            }
            if (this._isTaskCard(n)) {
                e();
                return;
            }
            var i = this._currentGameSkin || "l_lanCardEN";
            i = this.getRealBundleName(i);
            -1 === this._changeCardNames.indexOf(n) && this._changeCardNames.push(n);
            if ("l_lanCardJP" === i) {
                e();
                return;
            }
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    path: "atlas/cardIcon/" + n,
                    bundleName: i,
                    fromAtlas: true
                }
            });
        }
        catch (t) {
            console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] 劫持资源路径失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ChangeBaseCardByLanTrait.prototype.onLangSelUI_getItemCell = function (t, e) {
        var r;
        try {
            var n = mj.getClassByName("UILanguageLockItem");
            if (!n) {
                e();
                return;
            }
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._tableView, o = null == i ? void 0 : i.dequeueCellByKey("languageLockItem");
            o && cc.isValid(o) || (o = n.createCell("languageLockItem"));
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: o
            });
        }
        catch (t) {
            console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] getItemCell劫持失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ChangeBaseCardByLanTrait.prototype.onLangSelUI_getItemCellCmp = function (t, e) {
        var r;
        try {
            var n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if (!cc.isValid(n)) {
                e();
                return;
            }
            var i = mj.getClassByName("UILanguageLockItem");
            if (!i) {
                e();
                return;
            }
            var o = n.getComponent(i);
            if (o) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: o
                });
            }
            else {
                e();
            }
        }
        catch (t) {
            console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] getItemCellCmp劫持失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ChangeBaseCardByLanTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var a, r = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
        this.checkNextSkin(r);
        e();
    };
    ChangeBaseCardByLanTrait.prototype.onTLWinCtrl_viewShow = function (t, e) {
        var a, r = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
        this.checkNextSkin(r);
        e();
    };
    ChangeBaseCardByLanTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        var a, r = null === (a = t.ins) || void 0 === a ? void 0 : a.parentController;
        this.checkNextSkin(r);
        e();
    };
    ChangeBaseCardByLanTrait.prototype.onDGameStart_adjust = function (t, e) {
        var a, r = __read(t.args, 2), n = r[0], i = r[1];
        this._skinEnabled && this._isGameTypeOpen(i.gameType) && (n.language_skin_id = null !== (a = DChangeBaseSkin_1.BUNDLE_SKIN_ID_MAP[this._currentGameSkin]) && void 0 !== a ? a : 0);
        e();
    };
    ChangeBaseCardByLanTrait.prototype.onDGameEnd_adjust = function (t, e) {
        var a, r = __read(t.args, 2), n = r[0], i = r[1];
        this._skinEnabled && this._isGameTypeOpen(i.gameType) && (n.language_skin_id = null !== (a = DChangeBaseSkin_1.BUNDLE_SKIN_ID_MAP[this._currentGameSkin]) && void 0 !== a ? a : 0);
        e();
    };
    ChangeBaseCardByLanTrait.prototype.checkNextSkin = function (t) {
        if (this.isHardRandom()) {
            var e = null == t ? void 0 : t.gameType, r = UserModel_1.default.getInstance().getGameDataByGameType(e), n = (null == r ? void 0 : r.getLevelId()) || 0;
            if (GameUtils_1.default.isTypeHardLevel(e, n)) {
                var i = this._randomPickSkin();
                this._saveHardSkin(e, i);
                i != "l_lanCardEN" && this._loadSkinBundle(i).catch(function (t) {
                    console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] 预加载困难关皮肤失败: " + (null == t ? void 0 : t.message));
                });
            }
            else
                this._clearHardSkin(e);
        }
    };
    ChangeBaseCardByLanTrait.prototype.defOpenSkins = function () {
        var t, e = null === (t = this._traitData) || void 0 === t ? void 0 : t.openList;
        if (e && e.length > 0)
            for (var a = 0; a < e.length; a++)
                this.unlockSkin("l_lanCard" + e[a]);
    };
    ChangeBaseCardByLanTrait.prototype.isHardRandom = function () {
        return false;
    };
    ChangeBaseCardByLanTrait.prototype.unlockSkin = function (t) {
        if (!t)
            return false;
        if (this.localData.unlockedSkins.includes(t))
            return true;
        this.localData.unlockedSkins.push(t);
        this.localData.unlockedSkins = this.localData.unlockedSkins;
        return true;
    };
    ChangeBaseCardByLanTrait.prototype.setActiveSkin = function (t) {
        if (!t)
            return false;
        if (!this.localData.unlockedSkins.includes(t))
            return false;
        this.localData.activeSkin = t;
        this.localData.activeSkin = this.localData.activeSkin;
        this._currentGameSkin = t;
        this._dispatchRefreshCards();
        return true;
    };
    ChangeBaseCardByLanTrait.prototype.getActiveSkin = function () {
        return this.localData.activeSkin || "l_lanCardEN";
    };
    ChangeBaseCardByLanTrait.prototype.getLanActiveSkin = function () {
        return this._lanActiveSkin || "l_lanCardEN";
    };
    ChangeBaseCardByLanTrait.prototype.getUnlockedSkins = function () {
        return this.localData.unlockedSkins || ["l_lanCardEN"];
    };
    ChangeBaseCardByLanTrait.prototype.getBundleByLang = function (t) {
        var e, a = t.toLowerCase().replace(/_/g, "-"), r = null !== (e = this._langSuffixMap[a]) && void 0 !== e ? e : this._langSuffixMap[a.split("-")[0]];
        return r ? "l_lanCard" + r : "l_lanCardEN";
    };
    ChangeBaseCardByLanTrait.prototype._resolveCurrentGameSkin = function (t) {
        var e = this.localData.activeSkin || "l_lanCardEN";
        if (!this.isHardRandom())
            return e;
        var a = null == t ? void 0 : t.gameType;
        if (a !== GameTypeEnums_1.MjGameType.Normal)
            return e;
        var r = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), n = (null == r ? void 0 : r.getLevelId()) || 0;
        if (GameUtils_1.default.isTypeHardLevel(a, n)) {
            var i = this._getHardSkin(a) || this._randomPickSkin();
            this._saveHardSkin(a, i);
            return i;
        }
        this._clearHardSkin(a);
        return e;
    };
    ChangeBaseCardByLanTrait.prototype._saveHardSkin = function (t, e) {
        var a = this.localData.hardSkins || {};
        a[t] = e;
        this.localData.hardSkins = a;
    };
    ChangeBaseCardByLanTrait.prototype._clearHardSkin = function (t) {
        var e = this.localData.hardSkins;
        if (e && e[t]) {
            delete e[t];
            this.localData.hardSkins = e;
        }
    };
    ChangeBaseCardByLanTrait.prototype._getHardSkin = function (t) {
        var e;
        return (null === (e = this.localData.hardSkins) || void 0 === e ? void 0 : e[t]) || null;
    };
    ChangeBaseCardByLanTrait.prototype.getDefaultSkin = function () {
        return this._getCurrentLangBundle();
    };
    ChangeBaseCardByLanTrait.prototype._getCurrentLangBundle = function () {
        var t, e = (LoginModel_1.default.getInstance().language || "en").toLowerCase().replace(/_/g, "-"), a = null !== (t = this._langSuffixMap[e]) && void 0 !== t ? t : this._langSuffixMap[e.split("-")[0]];
        return a ? "l_lanCard" + a : "l_lanCardEN";
    };
    ChangeBaseCardByLanTrait.prototype._isGameTypeOpen = function (t) {
        return !this._gameTypes || 0 === this._gameTypes.length || -1 !== this._gameTypes.indexOf(t);
    };
    ChangeBaseCardByLanTrait.prototype._randomPickSkin = function () {
        var t = this.localData.unlockedSkins;
        return t && 0 !== t.length ? t[Math.floor(Math.random() * t.length)] : "l_lanCardEN";
    };
    ChangeBaseCardByLanTrait.prototype._onLanguageChanged = function (t) {
        var e = this, r = this.getBundleByLang(t), n = this.getLanguageBundle(r);
        this._lanActiveSkin = n;
        this._loadSkinBundle(n).then(function () {
            e.unlockSkin(n);
            e.setActiveSkin(n);
        }).catch(function (t) {
            console.error("[" + ChangeBaseCardByLanTrait_1.traitKey + "] 皮肤加载失败: " + (null == t ? void 0 : t.message));
        });
    };
    ChangeBaseCardByLanTrait.prototype.getLanguageBundle = function () {
        return this._getCurrentLangBundle();
    };
    ChangeBaseCardByLanTrait.prototype.getRealBundleName = function (t) {
        return t;
    };
    ChangeBaseCardByLanTrait.prototype._loadSkinBundle = function (t) {
        if ("l_lanCardJP" === (t = this.getRealBundleName(t)))
            return Promise.resolve();
        var e = GameUtils_1.default.getGameControllerByType();
        return e && "function" == typeof e.loadRes ? e.loadRes("atlas/cardIcon", cc.SpriteAtlas, t).then(function () { }) : Promise.resolve();
    };
    ChangeBaseCardByLanTrait.prototype._dispatchRefreshCards = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.View_RefreshBaseCards, this._changeCardNames);
    };
    ChangeBaseCardByLanTrait.prototype._isTaskCard = function (t) {
        var e, a = mj.getClassByName("TaskModel");
        return (null === (e = null == a ? void 0 : a.getInstance()) || void 0 === e ? void 0 : e.getTaskCardResName()) === t;
    };
    ChangeBaseCardByLanTrait.prototype.checkCardNumberOpen = function () {
        return this._currentGameSkin === "l_lanCardEN" && !(!this._tm.getTraitData("CardNumber") || !this._tm.getTraitData("CardNumber2"));
    };
    var ChangeBaseCardByLanTrait_1;
    ChangeBaseCardByLanTrait.traitKey = "ChangeBaseCardByLan";
    __decorate([
        mj.traitEvent("ChCardByLanTt_isHardRd")
    ], ChangeBaseCardByLanTrait.prototype, "isHardRandom", null);
    __decorate([
        mj.traitEvent("ChCardByLanTt_getDSk")
    ], ChangeBaseCardByLanTrait.prototype, "getDefaultSkin", null);
    __decorate([
        mj.traitEvent("ChCardByLanTt_getLBdle")
    ], ChangeBaseCardByLanTrait.prototype, "getLanguageBundle", null);
    __decorate([
        mj.traitEvent("ChCardByLanTt_getRBName")
    ], ChangeBaseCardByLanTrait.prototype, "getRealBundleName", null);
    ChangeBaseCardByLanTrait = ChangeBaseCardByLanTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeBaseCardByLanTrait")
    ], ChangeBaseCardByLanTrait);
    return ChangeBaseCardByLanTrait;
}(Trait_1.default));
exports.default = ChangeBaseCardByLanTrait;

cc._RF.pop();