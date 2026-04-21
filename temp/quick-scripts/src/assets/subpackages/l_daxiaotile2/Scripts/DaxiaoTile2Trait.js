"use strict";
cc._RF.push(module, '5638dl5ePBMMrHkSuJfeK34', 'DaxiaoTile2Trait');
// subpackages/l_daxiaotile2/Scripts/DaxiaoTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var r;
(function (r) {
    r[r["Tag1"] = 1] = "Tag1";
    r[r["Tag2"] = 2] = "Tag2";
    r[r["Tag3"] = 3] = "Tag3";
    r[r["Tag4"] = 4] = "Tag4";
    r[r["Tag5"] = 5] = "Tag5";
    r[r["Tag6"] = 6] = "Tag6";
})(r || (r = {}));
var DaxiaoTile2Trait = /** @class */ (function (_super) {
    __extends(DaxiaoTile2Trait, _super);
    function DaxiaoTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._tag = this._traitData.tag || r.Tag1;
        this._minLevel = this._traitData.minLevel || 18;
        this._count = this._traitData.count || 1;
        this.initLocalDataDefaults();
        this.applyColdStartBreak();
    };
    DaxiaoTile2Trait.prototype.initLocalDataDefaults = function () {
        GameUtils_1.default.isEmpty(this.localData.lastRoundWin) && (this.localData.lastRoundWin = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundPopupRevive) && (this.localData.lastRoundPopupRevive = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundWatchedRewardAd) && (this.localData.lastRoundWatchedRewardAd = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundWatchedInterAd) && (this.localData.lastRoundWatchedInterAd = false);
        GameUtils_1.default.isEmpty(this.localData.lastRoundUsedItem) && (this.localData.lastRoundUsedItem = false);
        GameUtils_1.default.isEmpty(this.localData.winStreakCount) && (this.localData.winStreakCount = 0);
    };
    DaxiaoTile2Trait.prototype.applyColdStartBreak = function () {
        this.localData.lastRoundWin = false;
        this._resetWinStreakCount();
    };
    DaxiaoTile2Trait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    DaxiaoTile2Trait.prototype.getGameData = function () {
        return UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Tile2Normal);
    };
    DaxiaoTile2Trait.prototype.isWinStreak = function () {
        return this.localData.lastRoundWin && !this.localData.lastRoundPopupRevive;
    };
    DaxiaoTile2Trait.prototype.hasUsedItemLastRound = function () {
        return this.localData.lastRoundUsedItem;
    };
    DaxiaoTile2Trait.prototype.shouldGenDaxiao = function () {
        var t = this.getGameData();
        if (!t)
            return false;
        switch (this._tag) {
            case r.Tag1:
                var a = t.getLevelId() >= this._minLevel, e = AdManager_1.default.getInstance().checkVideoAdIsReady();
                return a && e;
            case r.Tag2:
                return t.getLevelId() >= this._minLevel;
            case r.Tag3:
                return this.localData.lastRoundWatchedRewardAd;
            case r.Tag4:
                return this.localData.lastRoundWatchedInterAd;
            case r.Tag5:
                var o = this.localData.winStreakCount || 0, i = this.localData.lastRoundWatchedInterAd;
                return o >= 2 && i;
            case r.Tag6:
                o = this.localData.winStreakCount || 0;
                var n = this.hasUsedItemLastRound();
                return o >= 2 && n;
            default:
                return false;
        }
    };
    DaxiaoTile2Trait.prototype._addWinStreakCount = function () {
        this.localData.winStreakCount = (this.localData.winStreakCount || 0) + 1;
    };
    DaxiaoTile2Trait.prototype._resetWinStreakCount = function () {
        this.localData.winStreakCount = 0;
    };
    DaxiaoTile2Trait.prototype.onT2GameCtrl_getTileTypes = function (t, a) {
        if (this.isWinStreak()) {
            this._addWinStreakCount();
        }
        else {
            this._resetWinStreakCount();
        }
        var e = this.shouldGenDaxiao();
        this.localData.lastRoundPopupRevive = false;
        this.localData.lastRoundWatchedInterAd = false;
        this.localData.lastRoundWatchedRewardAd = false;
        if (e) {
            this._resetWinStreakCount();
            a({
                returnVal: t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard
            });
        }
        else
            a();
    };
    DaxiaoTile2Trait.prototype.onDaxiaoCardType_getCount = function (t, a) {
        if (this.isTile2Mode()) {
            a({
                returnVal: this._count,
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            a();
        }
    };
    DaxiaoTile2Trait.prototype.onTile2WinVw_onLoad = function (t, a) {
        this._handleRoundEnd(true);
        a();
    };
    DaxiaoTile2Trait.prototype.onTile2FailVw_onLoad = function (t, a) {
        this.localData.lastRoundPopupRevive = true;
        a();
    };
    DaxiaoTile2Trait.prototype.onAdMgr_interAdClose = function (t, a) {
        var e;
        if (this.isTile2Mode()) {
            this.localData.lastRoundWatchedInterAd = true;
            null === (e = t.args) || void 0 === e || e[0];
            a();
        }
        else
            a();
    };
    DaxiaoTile2Trait.prototype.onAdMgr_videoSuccess = function (t, a) {
        if (this.isTile2Mode()) {
            this.localData.lastRoundWatchedRewardAd = true;
            a();
        }
        else
            a();
    };
    DaxiaoTile2Trait.prototype._handleRoundEnd = function (t) {
        this.localData.lastRoundWin = t;
        var a = this.getGameData();
        a && (this.localData.lastRoundUsedItem = !!(a.getUsedShuffle() || a.getUsedHitTips() || a.getUsedRevert() || a.getUsedMagnet()));
    };
    DaxiaoTile2Trait.traitKey = "DaxiaoTile2";
    DaxiaoTile2Trait = __decorate([
        mj.trait,
        mj.class("DaxiaoTile2Trait")
    ], DaxiaoTile2Trait);
    return DaxiaoTile2Trait;
}(Trait_1.default));
exports.default = DaxiaoTile2Trait;

cc._RF.pop();