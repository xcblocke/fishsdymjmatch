"use strict";
cc._RF.push(module, '41deeV/ZPtKt41/OttUK41+', 'Tile2GameData');
// Scripts/core/simulator/data/Tile2GameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameGetItem_1 = require("../../../gamePlay/dot/DGameGetItem");
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData_1 = require("./GameData");
var Tile2GameData = /** @class */ (function (_super) {
    __extends(Tile2GameData, _super);
    function Tile2GameData() {
        var _this = _super.call(this) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        _this.isLocalEmpty(_this.localData.rankCardCount) && (_this.localData.rankCardCount = 0);
        _this.isLocalEmpty(_this.localData.isBreakBest) && (_this.localData.isBreakBest = false);
        _this.isLocalEmpty(_this.localData.preBestScore) && (_this.localData.preBestScore = 0);
        _this.isLocalEmpty(_this.localData.slotBarIds) && (_this.localData.slotBarIds = []);
        _this.isLocalEmpty(_this.localData.slotBarCount) && (_this.localData.slotBarCount = 0);
        _this.isLocalEmpty(_this.localData.lastWinScore) && (_this.localData.lastWinScore = 0);
        _this.isLocalEmpty(_this.localData.lastWinComboNum) && (_this.localData.lastWinComboNum = 0);
        _this.isLocalEmpty(_this.localData.lastWinDuration) && (_this.localData.lastWinDuration = 0);
        _this.isLocalEmpty(_this.localData.tileTypesExtra) && (_this.localData.tileTypesExtra = "");
        _this.isLocalEmpty(_this.localData.originalTileTypesExtra) && (_this.localData.originalTileTypesExtra = "");
        _this.isLocalEmpty(_this.localData.originalReplaceInfo) && (_this.localData.originalReplaceInfo = "");
        _this.isLocalEmpty(_this.localData.slotLevel) && (_this.localData.slotLevel = 0);
        return _this;
    }
    Object.defineProperty(Tile2GameData.prototype, "slotBarIds", {
        get: function () {
            return this.localData.slotBarIds || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2GameData.prototype, "slotBarCount", {
        get: function () {
            return this.localData.slotBarCount || 0;
        },
        enumerable: false,
        configurable: true
    });
    Tile2GameData.prototype.getFreeReviveInitCount = function () {
        return 5;
    };
    Tile2GameData.prototype.ensureReviveCountInit = function () {
        if (this.isLocalEmpty(this.localData.reviveCount)) {
            var e = this.getFreeReviveInitCount();
            this.localData.reviveCount = e;
            e > 0 && DGameGetItem_1.DotGameGetItem.dotGetItem(this, {
                itemId: GameTypeEnums_1.EItemId.Revive,
                number: e,
                afterNum: e,
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "首次进入送" + e + "次复活"
            });
        }
    };
    Tile2GameData.prototype.setTileTypesExtra = function (e) {
        this.localData.tileTypesExtra = e;
        this.localData.lastUpdateTime = Date.now();
    };
    Tile2GameData.prototype.getTileTypesExtra = function () {
        return this.localData.tileTypesExtra;
    };
    Tile2GameData.prototype.setOriginalTileTypesExtra = function (e) {
        this.localData.originalTileTypesExtra = e;
        this.localData.lastUpdateTime = Date.now();
    };
    Tile2GameData.prototype.getOriginalTileTypesExtra = function () {
        return this.localData.originalTileTypesExtra || "";
    };
    Tile2GameData.prototype.setOriginalReplaceInfo = function (e) {
        this.localData.originalReplaceInfo = e;
        this.localData.lastUpdateTime = Date.now();
    };
    Tile2GameData.prototype.getOriginalReplaceInfo = function () {
        var e = {};
        try {
            if (this.localData.originalReplaceInfo) {
                var t = JSON.parse(this.localData.originalReplaceInfo);
                "object" == typeof t && (e = t);
            }
        }
        catch (e) { }
        return e;
    };
    Tile2GameData.prototype.onNewGameReset = function () {
        this.setRankCardCount(0);
        this.isLocalEmpty(this.localData.hasTriggeredAllClear) && (this.localData.hasTriggeredAllClear = false);
    };
    Tile2GameData.prototype.resetGameData = function () {
        _super.prototype.resetGameData.call(this);
        this.localData.hasTriggeredAllClear = false;
        this.localData.isBreakBest = false;
        this.localData.preBestScore = this.localData.maxScore;
        this.localData.slotBarIds = [];
        this.localData.slotBarIds = this.localData.slotBarIds;
        this.localData.slotLevel = 0;
    };
    Tile2GameData.prototype.setRankCardCount = function (e) {
        this.localData.rankCardCount = e;
    };
    Tile2GameData.prototype.getRankCardCount = function () {
        return this.localData.rankCardCount;
    };
    Tile2GameData.prototype.updateMaxScore = function (t) {
        _super.prototype.updateMaxScore.call(this, t);
        t > this.localData.preBestScore && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
    };
    Tile2GameData.prototype.getPreBestScore = function () {
        return this.localData.preBestScore;
    };
    Tile2GameData.prototype.isBreakBest = function () {
        return this.localData.isBreakBest;
    };
    Tile2GameData.prototype.addSlotBarId = function (e, t) {
        if (t === void 0) { t = -1; }
        this.localData.slotBarIds.splice(t, 0, e);
        this.localData.slotBarIds = this.localData.slotBarIds;
    };
    Tile2GameData.prototype.removeSlotBarId = function (e) {
        this.localData.slotBarIds = this.localData.slotBarIds.filter(function (t) {
            return t !== e;
        });
        this.localData.slotBarIds = this.localData.slotBarIds;
    };
    Tile2GameData.prototype.resetSlotBarIds = function (e) {
        this.localData.slotBarIds = e;
        this.localData.slotBarIds = this.localData.slotBarIds;
    };
    Tile2GameData.prototype.resetSlotBarCount = function (e) {
        this.localData.slotBarCount = e;
    };
    Tile2GameData.prototype.getReviveNums = function () {
        this.ensureReviveCountInit();
        return this.localData.reviveCount || 0;
    };
    Tile2GameData.prototype.changeReviveNums = function (e, t) {
        if (t === void 0) { t = false; }
        if (t)
            this.localData.reviveCount = e;
        else {
            this.ensureReviveCountInit();
            this.localData.reviveCount = this.localData.reviveCount + e;
        }
    };
    Tile2GameData.prototype.hasRevive = function () {
        return this.getReviveNums() > 0;
    };
    Tile2GameData.prototype.getLastWinScore = function () {
        return this.localData.lastWinScore || 0;
    };
    Tile2GameData.prototype.getLastWinComboNum = function () {
        return this.localData.lastWinComboNum || 0;
    };
    Tile2GameData.prototype.getLastWinDuration = function () {
        return this.localData.lastWinDuration || 0;
    };
    Tile2GameData.prototype.getSlotLevel = function () {
        return this.localData.slotLevel || 0;
    };
    Tile2GameData.prototype.setSlotLevel = function (e) {
        this.localData.slotLevel = e;
    };
    Tile2GameData.prototype.saveLastWinResult = function (e, t, o) {
        this.localData.lastWinScore = e;
        this.localData.lastWinComboNum = t;
        this.localData.lastWinDuration = o;
        this.localData.lastWinScore = this.localData.lastWinScore;
        this.localData.lastWinComboNum = this.localData.lastWinComboNum;
        this.localData.lastWinDuration = this.localData.lastWinDuration;
    };
    Tile2GameData.prototype.getHasTriggeredAllClear = function () {
        return this.localData.hasTriggeredAllClear;
    };
    Tile2GameData.prototype.setHasTriggeredAllClear = function (e) {
        if (e === void 0) { e = true; }
        this.localData.hasTriggeredAllClear = e;
        this.localData.lastUpdateTime = Date.now();
    };
    __decorate([
        mj.traitEvent("T2GD_getFrRvInitCnt")
    ], Tile2GameData.prototype, "getFreeReviveInitCount", null);
    Tile2GameData = __decorate([
        mj.class("Tile2GameData")
    ], Tile2GameData);
    return Tile2GameData;
}(GameData_1.default));
exports.default = Tile2GameData;

cc._RF.pop();