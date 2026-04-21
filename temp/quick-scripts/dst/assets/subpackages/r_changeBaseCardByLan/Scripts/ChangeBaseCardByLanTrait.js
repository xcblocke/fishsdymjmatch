
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardByLanTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUJhc2VDYXJkQnlMYW4vU2NyaXB0cy9DaGFuZ2VCYXNlQ2FyZEJ5TGFuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsK0VBQTBFO0FBQzFFLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFDcEYsNEVBQXVFO0FBQ3ZFLDJFQUEyRTtBQUMzRSxpRkFBbUY7QUFDbkYsSUFBSSxDQUFDLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLE9BQU8sRUFBRSxJQUFJO0lBQ2IsT0FBTyxFQUFFLElBQUk7SUFDYixPQUFPLEVBQUUsSUFBSTtJQUNiLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0lBQ1IsRUFBRSxFQUFFLElBQUk7SUFDUixFQUFFLEVBQUUsSUFBSTtJQUNSLEVBQUUsRUFBRSxJQUFJO0NBQ1QsQ0FBQztBQUNGLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQztBQUd2QjtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQWtXQztRQWpXQyxvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixzQkFBZ0IsR0FBRyxhQUFhLENBQUM7UUFDakMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsc0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLG9CQUFjLEdBQUcsYUFBYSxDQUFDOztJQTRWakMsQ0FBQztpQ0FsV29CLHdCQUF3QjtJQVEzQyx5Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQzNCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxhQUFhLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQ2pEO1lBQ0QsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDMUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JILENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUF3QixDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMvRyxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDZixLQUFLLEVBQUUsbUJBQW1CO2lCQUMzQixFQUFFO29CQUNELEtBQUssRUFBRSxpQkFBaUI7aUJBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0RBQW1CLEdBQW5CO1FBQ0UsT0FBTztZQUNMLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZELENBQUM7SUFDSixDQUFDO0lBQ0QsMkRBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2FBQ3BDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELHlEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQztZQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsSUFBSSxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsYUFBYSxJQUFJLGFBQWEsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUM7U0FDM0g7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUF3QixDQUFDLFFBQVEsR0FBRyxpQkFBaUIsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMvRztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDOUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztvQkFDL0ksUUFBUSxFQUFFLENBQUM7aUJBQ1osQ0FBQyxDQUFDO2lCQUFLO2dCQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRywwQkFBd0IsQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckg7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw2REFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7Z0JBQzlCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxhQUFhLENBQUM7WUFDL0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsaUJBQWlCLEdBQUcsQ0FBQztvQkFDM0IsVUFBVSxFQUFFLENBQUM7b0JBQ2IsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUF3QixDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0csQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCwwREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUNsRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsMEJBQXdCLENBQUMsUUFBUSxHQUFHLHFCQUFxQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xILENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsNkRBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDTixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLENBQUM7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRywwQkFBd0IsQ0FBQyxRQUFRLEdBQUcsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckgsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxxREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsdURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxvQ0FBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqSyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxvREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxvQ0FBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqSyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxnREFBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUNyQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDcEQsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLG1CQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUF3QixDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDL0csQ0FBQyxDQUFDLENBQUM7YUFDSjs7Z0JBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDRCwrQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELCtDQUFZLEdBQVo7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCw2Q0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELGdEQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELGdEQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsbURBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsbURBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxrREFBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ3RDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFDRCwwREFBdUIsR0FBdkIsVUFBd0IsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLEVBQ3RFLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsZ0RBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxpREFBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUNELCtDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzNGLENBQUM7SUFFRCxpREFBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsd0RBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDaEYsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUNELGtEQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBQ0Qsa0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUN2RixDQUFDO0lBQ0QscURBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUF3QixDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0csQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0RBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEYsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZJLENBQUM7SUFDRCx3REFBcUIsR0FBckI7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCw4Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZILENBQUM7SUFDRCxzREFBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7O0lBMVZNLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFxT3hDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztnRUFHdkM7SUFnRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2tFQUdyQztJQTJCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7cUVBR3ZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3FFQUd4QztJQWpWa0Isd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FrVzVDO0lBQUQsK0JBQUM7Q0FsV0QsQUFrV0MsQ0FsV3FELGVBQUssR0FrVzFEO2tCQWxXb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBCVU5ETEVfU0tJTl9JRF9NQVAgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQ2hhbmdlQmFzZVNraW4nO1xudmFyIHYgPSB7XG4gIGVuOiBcIkVOXCIsXG4gIFwiemgtY25cIjogXCJDTlwiLFxuICBcInpoLXR3XCI6IFwiVFdcIixcbiAgXCJ6aC1oa1wiOiBcIlRXXCIsXG4gIGtvOiBcIktPXCIsXG4gIGphOiBcIkpQXCIsXG4gIHJ1OiBcIlJVXCIsXG4gIGVzOiBcIkVTXCIsXG4gIHB0OiBcIlBUXCIsXG4gIGRlOiBcIkRFXCIsXG4gIGZyOiBcIkZSXCJcbn07XG52YXIgeSA9IC9eW2J0V11bMS05XSQvO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGFuZ2VCYXNlQ2FyZEJ5TGFuVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUJhc2VDYXJkQnlMYW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2xhbmdTdWZmaXhNYXAgPSB7fTtcbiAgX2dhbWVUeXBlcyA9IFtdO1xuICBfY3VycmVudEdhbWVTa2luID0gXCJsX2xhbkNhcmRFTlwiO1xuICBfc2tpbkVuYWJsZWQgPSB0cnVlO1xuICBfY2hhbmdlQ2FyZE5hbWVzID0gW107XG4gIF9sYW5BY3RpdmVTa2luID0gXCJsX2xhbkNhcmRFTlwiO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNoYW5nZUJhc2VDYXJkQnlMYW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIG4gPSB0aGlzO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2xhbmdTdWZmaXhNYXAgPSBPYmplY3QuYXNzaWduKHt9LCB2LCAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubGFuZ0J1bmRsZU1hcCkgfHwge30pO1xuICAgIHRoaXMuX2dhbWVUeXBlcyA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lVHlwZXMpIHx8IFtdO1xuICAgIHZhciBpID0gdGhpcy5sb2NhbERhdGEudW5sb2NrZWRTa2lucyB8fCBbXTtcbiAgICB0aGlzLmxvY2FsRGF0YS51bmxvY2tlZFNraW5zID0gaTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgaWYgKCFuLmxvY2FsRGF0YS5hY3RpdmVTa2luKSB7XG4gICAgICAgIG4ubG9jYWxEYXRhLmFjdGl2ZVNraW4gPSBuLmdldERlZmF1bHRTa2luKCkgfHwgXCJsX2xhbkNhcmRFTlwiO1xuICAgICAgICBuLmxvY2FsRGF0YS5hY3RpdmVTa2luID0gbi5sb2NhbERhdGEuYWN0aXZlU2tpbjtcbiAgICAgIH1cbiAgICAgIG4uX2N1cnJlbnRHYW1lU2tpbiA9IG4ubG9jYWxEYXRhLmFjdGl2ZVNraW47XG4gICAgICBuLl9sYW5BY3RpdmVTa2luID0gbi5sb2NhbERhdGEuYWN0aXZlU2tpbjtcbiAgICAgIDIgIT0gKG51bGwgPT09ICh0ID0gbi5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmF1dG9Mb2NrU2tpbikgJiYgbi51bmxvY2tTa2luKG4ubG9jYWxEYXRhLmFjdGl2ZVNraW4pO1xuICAgICAgbi5kZWZPcGVuU2tpbnMoKTtcbiAgICAgIG4uX2xvYWRTa2luQnVuZGxlKG4uX2N1cnJlbnRHYW1lU2tpbikuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENoYW5nZUJhc2VDYXJkQnlMYW5UcmFpdC50cmFpdEtleSArIFwiXSDliJ3lp4vljJbpooTliqDovb3nmq7ogqTlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgfSk7XG4gICAgICBuLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgICAgZXZlbnQ6IFwiREdhbWVTdGFydF9hZGp1c3RcIlxuICAgICAgfSwge1xuICAgICAgICBldmVudDogXCJER2FtZUVuZF9hZGp1c3RcIlxuICAgICAgfV0pO1xuICAgIH0pO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwibGFuZ3VhZ2UtY2hhbmdlZFwiOiB0aGlzLl9vbkxhbmd1YWdlQ2hhbmdlZC5iaW5kKHRoaXMpXG4gICAgfTtcbiAgfVxuICBvbkxhbmdTZWxUcmFpdF9nZXRBc3NMYW4odCwgZSkge1xuICAgIGlmICh0aGlzLl90cmFpdERhdGEubGFuZ3VhZ2UpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmxhbmd1YWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pbml0UmVzKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSB0LmlucyxcbiAgICAgICAgbiA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuZ2FtZVR5cGU7XG4gICAgICBpZiAoIXRoaXMuX2lzR2FtZVR5cGVPcGVuKG4pKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSB0aGlzLmxvY2FsRGF0YS5hY3RpdmVTa2luIHx8IFwibF9sYW5DYXJkRU5cIjtcbiAgICAgIGkgPSB0aGlzLmdldFJlYWxCdW5kbGVOYW1lKGkpO1xuICAgICAgciAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHIuYWRkUHJlbG9hZFJlcyAmJiBcImxfbGFuQ2FyZEpQXCIgIT09IGkgJiYgci5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlQXRsYXNcIiwgaSArIFwiOmF0bGFzL2NhcmRJY29uXCIpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDaGFuZ2VCYXNlQ2FyZEJ5TGFuVHJhaXQudHJhaXRLZXkgKyBcIl0gaW5pdFJlc+WkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbklwdFNldEx2X2V4ZWModCwgZSkge1xuICAgIHZhciByLCBuLCBpO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IHQuaW5zLFxuICAgICAgICBsID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0sXG4gICAgICAgIHMgPSBudWxsID09PSAobiA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2FtZVR5cGU7XG4gICAgICB0aGlzLl9jaGFuZ2VDYXJkTmFtZXMgPSBbXTtcbiAgICAgIHRoaXMuX3NraW5FbmFibGVkID0gdGhpcy5faXNHYW1lVHlwZU9wZW4ocyk7XG4gICAgICBpZiAoIXRoaXMuX3NraW5FbmFibGVkKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG51bGwgPT09IChpID0gbnVsbCA9PSBsID8gdm9pZCAwIDogbC5sZXZlbERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaXNOZXdHYW1lKSB0aGlzLl9jdXJyZW50R2FtZVNraW4gPSB0aGlzLl9yZXNvbHZlQ3VycmVudEdhbWVTa2luKHtcbiAgICAgICAgZ2FtZVR5cGU6IHNcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2dldEhhcmRTa2luKHMpO1xuICAgICAgICBjICYmICh0aGlzLl9jdXJyZW50R2FtZVNraW4gPSBjKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2hhbmdlQmFzZUNhcmRCeUxhblRyYWl0LnRyYWl0S2V5ICsgXCJdIElwdFNldEx2X2V4ZWPlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUodCwgZSkge1xuICAgIHZhciByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdO1xuICAgICAgaWYgKCF0aGlzLl9za2luRW5hYmxlZCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrQ2FyZE51bWJlck9wZW4oKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghbiB8fCAheS50ZXN0KG4pKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2lzVGFza0NhcmQobikpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IHRoaXMuX2N1cnJlbnRHYW1lU2tpbiB8fCBcImxfbGFuQ2FyZEVOXCI7XG4gICAgICBpID0gdGhpcy5nZXRSZWFsQnVuZGxlTmFtZShpKTtcbiAgICAgIC0xID09PSB0aGlzLl9jaGFuZ2VDYXJkTmFtZXMuaW5kZXhPZihuKSAmJiB0aGlzLl9jaGFuZ2VDYXJkTmFtZXMucHVzaChuKTtcbiAgICAgIGlmIChcImxfbGFuQ2FyZEpQXCIgPT09IGkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICBwYXRoOiBcImF0bGFzL2NhcmRJY29uL1wiICsgbixcbiAgICAgICAgICBidW5kbGVOYW1lOiBpLFxuICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2hhbmdlQmFzZUNhcmRCeUxhblRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgei1hOa6kOi3r+W+hOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uTGFuZ1NlbFVJX2dldEl0ZW1DZWxsKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSBtai5nZXRDbGFzc0J5TmFtZShcIlVJTGFuZ3VhZ2VMb2NrSXRlbVwiKTtcbiAgICAgIGlmICghbikge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fdGFibGVWaWV3LFxuICAgICAgICBvID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5kZXF1ZXVlQ2VsbEJ5S2V5KFwibGFuZ3VhZ2VMb2NrSXRlbVwiKTtcbiAgICAgIG8gJiYgY2MuaXNWYWxpZChvKSB8fCAobyA9IG4uY3JlYXRlQ2VsbChcImxhbmd1YWdlTG9ja0l0ZW1cIikpO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBvXG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgQ2hhbmdlQmFzZUNhcmRCeUxhblRyYWl0LnRyYWl0S2V5ICsgXCJdIGdldEl0ZW1DZWxs5Yqr5oyB5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25MYW5nU2VsVUlfZ2V0SXRlbUNlbGxDbXAodCwgZSkge1xuICAgIHZhciByO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdO1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSBtai5nZXRDbGFzc0J5TmFtZShcIlVJTGFuZ3VhZ2VMb2NrSXRlbVwiKTtcbiAgICAgIGlmICghaSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvID0gbi5nZXRDb21wb25lbnQoaSk7XG4gICAgICBpZiAobykge1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENoYW5nZUJhc2VDYXJkQnlMYW5UcmFpdC50cmFpdEtleSArIFwiXSBnZXRJdGVtQ2VsbENtcOWKq+aMgeWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uV2luQ3RybF92aWV3U2hvdyh0LCBlKSB7XG4gICAgdmFyIGEsXG4gICAgICByID0gbnVsbCA9PT0gKGEgPSB0LmlucykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5wYXJlbnRDb250cm9sbGVyO1xuICAgIHRoaXMuY2hlY2tOZXh0U2tpbihyKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UTFdpbkN0cmxfdmlld1Nob3codCwgZSkge1xuICAgIHZhciBhLFxuICAgICAgciA9IG51bGwgPT09IChhID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEucGFyZW50Q29udHJvbGxlcjtcbiAgICB0aGlzLmNoZWNrTmV4dFNraW4ocik7XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJXaW5DdHJsX3ZpZXdTaG93KHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIgPSBudWxsID09PSAoYSA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLnBhcmVudENvbnRyb2xsZXI7XG4gICAgdGhpcy5jaGVja05leHRTa2luKHIpO1xuICAgIGUoKTtcbiAgfVxuICBvbkRHYW1lU3RhcnRfYWRqdXN0KHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIgPSBfX3JlYWQodC5hcmdzLCAyKSxcbiAgICAgIG4gPSByWzBdLFxuICAgICAgaSA9IHJbMV07XG4gICAgdGhpcy5fc2tpbkVuYWJsZWQgJiYgdGhpcy5faXNHYW1lVHlwZU9wZW4oaS5nYW1lVHlwZSkgJiYgKG4ubGFuZ3VhZ2Vfc2tpbl9pZCA9IG51bGwgIT09IChhID0gQlVORExFX1NLSU5fSURfTUFQW3RoaXMuX2N1cnJlbnRHYW1lU2tpbl0pICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAwKTtcbiAgICBlKCk7XG4gIH1cbiAgb25ER2FtZUVuZF9hZGp1c3QodCwgZSkge1xuICAgIHZhciBhLFxuICAgICAgciA9IF9fcmVhZCh0LmFyZ3MsIDIpLFxuICAgICAgbiA9IHJbMF0sXG4gICAgICBpID0gclsxXTtcbiAgICB0aGlzLl9za2luRW5hYmxlZCAmJiB0aGlzLl9pc0dhbWVUeXBlT3BlbihpLmdhbWVUeXBlKSAmJiAobi5sYW5ndWFnZV9za2luX2lkID0gbnVsbCAhPT0gKGEgPSBCVU5ETEVfU0tJTl9JRF9NQVBbdGhpcy5fY3VycmVudEdhbWVTa2luXSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDApO1xuICAgIGUoKTtcbiAgfVxuICBjaGVja05leHRTa2luKHQpIHtcbiAgICBpZiAodGhpcy5pc0hhcmRSYW5kb20oKSkge1xuICAgICAgdmFyIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdhbWVUeXBlLFxuICAgICAgICByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKGUpLFxuICAgICAgICBuID0gKG51bGwgPT0gciA/IHZvaWQgMCA6IHIuZ2V0TGV2ZWxJZCgpKSB8fCAwO1xuICAgICAgaWYgKEdhbWVVdGlscy5pc1R5cGVIYXJkTGV2ZWwoZSwgbikpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9yYW5kb21QaWNrU2tpbigpO1xuICAgICAgICB0aGlzLl9zYXZlSGFyZFNraW4oZSwgaSk7XG4gICAgICAgIGkgIT0gXCJsX2xhbkNhcmRFTlwiICYmIHRoaXMuX2xvYWRTa2luQnVuZGxlKGkpLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENoYW5nZUJhc2VDYXJkQnlMYW5UcmFpdC50cmFpdEtleSArIFwiXSDpooTliqDovb3lm7Dpmr7lhbPnmq7ogqTlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0aGlzLl9jbGVhckhhcmRTa2luKGUpO1xuICAgIH1cbiAgfVxuICBkZWZPcGVuU2tpbnMoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQub3Blbkxpc3Q7XG4gICAgaWYgKGUgJiYgZS5sZW5ndGggPiAwKSBmb3IgKHZhciBhID0gMDsgYSA8IGUubGVuZ3RoOyBhKyspIHRoaXMudW5sb2NrU2tpbihcImxfbGFuQ2FyZFwiICsgZVthXSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDaENhcmRCeUxhblR0X2lzSGFyZFJkXCIpXG4gIGlzSGFyZFJhbmRvbSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdW5sb2NrU2tpbih0KSB7XG4gICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLnVubG9ja2VkU2tpbnMuaW5jbHVkZXModCkpIHJldHVybiB0cnVlO1xuICAgIHRoaXMubG9jYWxEYXRhLnVubG9ja2VkU2tpbnMucHVzaCh0KTtcbiAgICB0aGlzLmxvY2FsRGF0YS51bmxvY2tlZFNraW5zID0gdGhpcy5sb2NhbERhdGEudW5sb2NrZWRTa2lucztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzZXRBY3RpdmVTa2luKHQpIHtcbiAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLnVubG9ja2VkU2tpbnMuaW5jbHVkZXModCkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5hY3RpdmVTa2luID0gdDtcbiAgICB0aGlzLmxvY2FsRGF0YS5hY3RpdmVTa2luID0gdGhpcy5sb2NhbERhdGEuYWN0aXZlU2tpbjtcbiAgICB0aGlzLl9jdXJyZW50R2FtZVNraW4gPSB0O1xuICAgIHRoaXMuX2Rpc3BhdGNoUmVmcmVzaENhcmRzKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0QWN0aXZlU2tpbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYWN0aXZlU2tpbiB8fCBcImxfbGFuQ2FyZEVOXCI7XG4gIH1cbiAgZ2V0TGFuQWN0aXZlU2tpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFuQWN0aXZlU2tpbiB8fCBcImxfbGFuQ2FyZEVOXCI7XG4gIH1cbiAgZ2V0VW5sb2NrZWRTa2lucygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudW5sb2NrZWRTa2lucyB8fCBbXCJsX2xhbkNhcmRFTlwiXTtcbiAgfVxuICBnZXRCdW5kbGVCeUxhbmcodCkge1xuICAgIHZhciBlLFxuICAgICAgYSA9IHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csIFwiLVwiKSxcbiAgICAgIHIgPSBudWxsICE9PSAoZSA9IHRoaXMuX2xhbmdTdWZmaXhNYXBbYV0pICYmIHZvaWQgMCAhPT0gZSA/IGUgOiB0aGlzLl9sYW5nU3VmZml4TWFwW2Euc3BsaXQoXCItXCIpWzBdXTtcbiAgICByZXR1cm4gciA/IFwibF9sYW5DYXJkXCIgKyByIDogXCJsX2xhbkNhcmRFTlwiO1xuICB9XG4gIF9yZXNvbHZlQ3VycmVudEdhbWVTa2luKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmFjdGl2ZVNraW4gfHwgXCJsX2xhbkNhcmRFTlwiO1xuICAgIGlmICghdGhpcy5pc0hhcmRSYW5kb20oKSkgcmV0dXJuIGU7XG4gICAgdmFyIGEgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdhbWVUeXBlO1xuICAgIGlmIChhICE9PSBNakdhbWVUeXBlLk5vcm1hbCkgcmV0dXJuIGU7XG4gICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoTWpHYW1lVHlwZS5Ob3JtYWwpLFxuICAgICAgbiA9IChudWxsID09IHIgPyB2b2lkIDAgOiByLmdldExldmVsSWQoKSkgfHwgMDtcbiAgICBpZiAoR2FtZVV0aWxzLmlzVHlwZUhhcmRMZXZlbChhLCBuKSkge1xuICAgICAgdmFyIGkgPSB0aGlzLl9nZXRIYXJkU2tpbihhKSB8fCB0aGlzLl9yYW5kb21QaWNrU2tpbigpO1xuICAgICAgdGhpcy5fc2F2ZUhhcmRTa2luKGEsIGkpO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIHRoaXMuX2NsZWFySGFyZFNraW4oYSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgX3NhdmVIYXJkU2tpbih0LCBlKSB7XG4gICAgdmFyIGEgPSB0aGlzLmxvY2FsRGF0YS5oYXJkU2tpbnMgfHwge307XG4gICAgYVt0XSA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFyZFNraW5zID0gYTtcbiAgfVxuICBfY2xlYXJIYXJkU2tpbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5oYXJkU2tpbnM7XG4gICAgaWYgKGUgJiYgZVt0XSkge1xuICAgICAgZGVsZXRlIGVbdF07XG4gICAgICB0aGlzLmxvY2FsRGF0YS5oYXJkU2tpbnMgPSBlO1xuICAgIH1cbiAgfVxuICBfZ2V0SGFyZFNraW4odCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSB0aGlzLmxvY2FsRGF0YS5oYXJkU2tpbnMpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbdF0pIHx8IG51bGw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDaENhcmRCeUxhblR0X2dldERTa1wiKVxuICBnZXREZWZhdWx0U2tpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q3VycmVudExhbmdCdW5kbGUoKTtcbiAgfVxuICBfZ2V0Q3VycmVudExhbmdCdW5kbGUoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5sYW5ndWFnZSB8fCBcImVuXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXy9nLCBcIi1cIiksXG4gICAgICBhID0gbnVsbCAhPT0gKHQgPSB0aGlzLl9sYW5nU3VmZml4TWFwW2VdKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogdGhpcy5fbGFuZ1N1ZmZpeE1hcFtlLnNwbGl0KFwiLVwiKVswXV07XG4gICAgcmV0dXJuIGEgPyBcImxfbGFuQ2FyZFwiICsgYSA6IFwibF9sYW5DYXJkRU5cIjtcbiAgfVxuICBfaXNHYW1lVHlwZU9wZW4odCkge1xuICAgIHJldHVybiAhdGhpcy5fZ2FtZVR5cGVzIHx8IDAgPT09IHRoaXMuX2dhbWVUeXBlcy5sZW5ndGggfHwgLTEgIT09IHRoaXMuX2dhbWVUeXBlcy5pbmRleE9mKHQpO1xuICB9XG4gIF9yYW5kb21QaWNrU2tpbigpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLnVubG9ja2VkU2tpbnM7XG4gICAgcmV0dXJuIHQgJiYgMCAhPT0gdC5sZW5ndGggPyB0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHQubGVuZ3RoKV0gOiBcImxfbGFuQ2FyZEVOXCI7XG4gIH1cbiAgX29uTGFuZ3VhZ2VDaGFuZ2VkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICByID0gdGhpcy5nZXRCdW5kbGVCeUxhbmcodCksXG4gICAgICBuID0gdGhpcy5nZXRMYW5ndWFnZUJ1bmRsZShyKTtcbiAgICB0aGlzLl9sYW5BY3RpdmVTa2luID0gbjtcbiAgICB0aGlzLl9sb2FkU2tpbkJ1bmRsZShuKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUudW5sb2NrU2tpbihuKTtcbiAgICAgIGUuc2V0QWN0aXZlU2tpbihuKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENoYW5nZUJhc2VDYXJkQnlMYW5UcmFpdC50cmFpdEtleSArIFwiXSDnmq7ogqTliqDovb3lpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2hDYXJkQnlMYW5UdF9nZXRMQmRsZVwiKVxuICBnZXRMYW5ndWFnZUJ1bmRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q3VycmVudExhbmdCdW5kbGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoQ2FyZEJ5TGFuVHRfZ2V0UkJOYW1lXCIpXG4gIGdldFJlYWxCdW5kbGVOYW1lKHQpIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBfbG9hZFNraW5CdW5kbGUodCkge1xuICAgIGlmIChcImxfbGFuQ2FyZEpQXCIgPT09ICh0ID0gdGhpcy5nZXRSZWFsQnVuZGxlTmFtZSh0KSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgZSA9IEdhbWVVdGlscy5nZXRHYW1lQ29udHJvbGxlckJ5VHlwZSgpO1xuICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5sb2FkUmVzID8gZS5sb2FkUmVzKFwiYXRsYXMvY2FyZEljb25cIiwgY2MuU3ByaXRlQXRsYXMsIHQpLnRoZW4oZnVuY3Rpb24gKCkge30pIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgX2Rpc3BhdGNoUmVmcmVzaENhcmRzKCkge1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuVmlld19SZWZyZXNoQmFzZUNhcmRzLCB0aGlzLl9jaGFuZ2VDYXJkTmFtZXMpO1xuICB9XG4gIF9pc1Rhc2tDYXJkKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIGEgPSBtai5nZXRDbGFzc0J5TmFtZShcIlRhc2tNb2RlbFwiKTtcbiAgICByZXR1cm4gKG51bGwgPT09IChlID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldFRhc2tDYXJkUmVzTmFtZSgpKSA9PT0gdDtcbiAgfVxuICBjaGVja0NhcmROdW1iZXJPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50R2FtZVNraW4gPT09IFwibF9sYW5DYXJkRU5cIiAmJiAhKCF0aGlzLl90bS5nZXRUcmFpdERhdGEoXCJDYXJkTnVtYmVyXCIpIHx8ICF0aGlzLl90bS5nZXRUcmFpdERhdGEoXCJDYXJkTnVtYmVyMlwiKSk7XG4gIH1cbn0iXX0=