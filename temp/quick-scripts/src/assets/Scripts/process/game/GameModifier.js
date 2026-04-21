"use strict";
cc._RF.push(module, '78ac2p7va9GvJdB6e8szJNk', 'GameModifier');
// Scripts/process/game/GameModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModifier = void 0;
var AdModel_1 = require("../../gamePlay/base/ad/AdModel");
var DGameAdRevenue_1 = require("../../gamePlay/dot/DGameAdRevenue");
var DGameEnd_1 = require("../../gamePlay/dot/DGameEnd");
var DGameLog_1 = require("../../gamePlay/dot/DGameLog");
var ExtractTool_1 = require("../../core/extractQuestion/ExtractTool");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var DynamicCurve_1 = require("../../types/DynamicCurve");
var GameModifier = /** @class */ (function (_super) {
    __extends(GameModifier, _super);
    function GameModifier(t) {
        return _super.call(this, t) || this;
    }
    GameModifier.prototype.modifyLayout = function (e, t) {
        if (t === void 0) { t = 1; }
        this.context.setCardLayoutConfig(e);
        this.context.setLayoutScale(t);
        this.context.getTileMapObject().updatePositonOffset();
    };
    GameModifier.prototype.modifyClearHitTips = function (e, t) {
        var o = this, n = false, i = this.context.getTileMapObject().getTileObject(e), r = this.context.getTileMapObject().getTileObject(t), a = this.context.getCanHitTips();
        if ((a.includes(e) || a.includes(t)) && a.length > 0) {
            var l = a.map(function (e) {
                return o.context.getTileMapObject().getTileObject(e);
            }).map(function (e) {
                return e.cardId;
            });
            if ([i.cardId, r.cardId].some(function (e) {
                return l.includes(e);
            })) {
                var s = this.context.getTileMapObject();
                Array.from(s._tileObjectMap.keys()).forEach(function (e) {
                    var t = s.getTileObject(e);
                    t && t.isValid && l.includes(t.cardId) && (t.isHint = false);
                });
                this.context.setCanHitTips([]);
                n = true;
            }
        }
        i.isHint && (i.isHint = false);
        r.isHint && (r.isHint = false);
        return [n, a.concat([e, t])];
    };
    GameModifier.prototype.modifyShuffle = function () {
        this.context.setCanHitTips([]);
        this.context.saveModifier.saveLevelDataToLocalStorage();
    };
    GameModifier.prototype.modifyWin = function (e) {
        var t = this.context.getGameData(), o = void 0 !== e ? e : this.context.gameTimeData.time, n = this.updateCapability(true, o);
        this.context.scoreModifier.calSettlementScore(o, n);
        t.updateLast10GameRecord(true);
        t.updateManualMatchSample();
        t.stopPlayTime();
        this.doGameEnd({
            isWin: true,
            expectTime: n,
            gameTime: t.getCurrentRoundTime()
        });
        this.context.gameTimeData.stop();
        t.setIsEnd(true);
        this.context.clearAllData();
    };
    GameModifier.prototype.modifyWinForTravel = function (e) {
        var t = this.context.getGameData(), o = void 0 !== e ? e : this.context.gameTimeData.time;
        this.updateCapability(true, o);
        var n = t.getLevelDifficulty(), i = ExtractTool_1.default.getInstance().getExpectTime(n, GameTypeEnums_1.MjGameType.Travel);
        t.updateLast10GameRecord(true);
        t.updateManualMatchSample();
        t.stopPlayTime();
        this.doGameEnd({
            isWin: true,
            expectTime: i,
            gameTime: t.getCurrentRoundTime()
        });
        this.context.gameTimeData.stop();
        t.setIsEnd(true);
        this.context.clearAllData();
    };
    GameModifier.prototype.modifyWinForDailyChallenge = function (e) {
        var t = this.context.getGameData(), o = void 0 !== e ? e : this.context.gameTimeData.time;
        this.updateCapability(true, o);
        var n = t.getLevelDifficulty(), i = ExtractTool_1.default.getInstance().getExpectTime(n, GameTypeEnums_1.MjGameType.DailyChallenge);
        this.context.scoreModifier.calSettlementScore(o, i);
        t.updateLast10GameRecord(true);
        t.updateManualMatchSample();
        t.stopPlayTime();
        this.doGameEnd({
            isWin: true,
            expectTime: i,
            gameTime: t.getCurrentRoundTime()
        });
        this.context.gameTimeData.stop();
        t.setIsEnd(true);
        this.context.clearAllData();
    };
    GameModifier.prototype.modifyClassicEnd = function () {
        var e = this.context.getGameData();
        e.updateLast10GameRecord(false);
        e.updateManualMatchSample();
        e.stopPlayTime();
        this.doGameEnd({
            isWin: false,
            expectTime: 0,
            gameTime: e.getCurrentRoundTime(),
            from: "fail"
        });
        this.context.gameTimeData.stop();
        e.setIsEnd(true);
        this.context.clearAllData();
    };
    GameModifier.prototype.updateCapability = function (e, t) {
        var o, n = this.context.getGameData(), i = n.getLevelId(), r = e ? Math.floor(n.getTotalTileCount() / 2) : Math.floor(n.getClearTileCount() / 2);
        if (DynamicCurve_1.default.instance.supportMode(this.context.gameType)) {
            DynamicCurve_1.default.instance.updateCapability({
                gameType: this.context.gameType,
                levelId: n.getLevelId(),
                win: e,
                time: t,
                clearPair: r
            });
            return DynamicCurve_1.default.instance.getExtractInfo(this.context.gameType).predictTime;
        }
        var a = 0;
        if (ExtractTool_1.default.getInstance().isSupportCapabilityUpdate(this.context.gameType) && e) {
            var l = n.getLevelDifficulty(), s = n.getLevelGenIndex(), c = ExtractTool_1.default.getInstance().UpdateCapability(l, t, s, i, this.context.gameType);
            a = null !== (o = null == c ? void 0 : c.expectTime) && void 0 !== o ? o : 0;
        }
        return a;
    };
    GameModifier.prototype.modifyWinForTile2 = function () {
        var e = this.context.getGameData(), t = this.context.gameTimeData.time, o = this.updateCapability(true, t);
        this.context.scoreModifier.calSettlementScore(t, o);
        e.updateLast10GameRecord(true);
        e.updateAvgClearIntervals();
        e.updateManualMatchSample();
        e.stopPlayTime();
        this.doGameEnd({
            isWin: true,
            expectTime: o,
            gameTime: t
        });
        this.context.gameTimeData.stop();
        e.setIsEnd(true);
        this.context.clearAllData();
    };
    GameModifier.prototype.modifyStepCount = function () {
        this.context.getGameData().addStepCount(1);
    };
    GameModifier.prototype.enterGame = function () {
        this.context.getGameData().enterGame();
    };
    GameModifier.prototype.failRelay = function () {
        var e = this.context.getGameData();
        e.updateLast10GameRecord(false);
        e.updateManualMatchSample();
        e.stopPlayTime();
        var t = e.getCurrentRoundTime();
        this.updateCapability(false, t);
        var o = ExtractTool_1.default.getInstance().getExpectTime(e.getLevelDifficulty(), this.context.gameType);
        this.doGameEnd({
            isWin: false,
            expectTime: o,
            gameTime: t,
            from: "fail"
        });
    };
    GameModifier.prototype.settingRelay = function () {
        var e = this.context.getGameData();
        e.updateLast10GameRecord(false);
        e.stopPlayTime();
        var t = e.getCurrentRoundTime();
        this.updateCapability(false, t);
        var o = ExtractTool_1.default.getInstance().getExpectTime(e.getLevelDifficulty(), this.context.gameType);
        this.doGameEnd({
            isWin: false,
            expectTime: o,
            gameTime: t,
            from: "setting"
        });
    };
    GameModifier.prototype.doGameEnd = function (e) {
        DGameLog_1.DotGameLog.dot(this.context);
        DGameEnd_1.DotGameEnd.dot(this.context, {
            win: e.isWin,
            expectTime: e.expectTime,
            from: e.from
        });
        DGameAdRevenue_1.DGameAdRevenue.recordGameAdRevenueData();
        AdModel_1.default.getInstance().updateOneDayAdGameEnd(e.gameTime, e.isWin);
    };
    __decorate([
        mj.traitEvent("GameMod_modifyLayout")
    ], GameModifier.prototype, "modifyLayout", null);
    __decorate([
        mj.traitEvent("GameMod_modifyShuffle")
    ], GameModifier.prototype, "modifyShuffle", null);
    __decorate([
        mj.traitEvent("GameMod_modifyWin")
    ], GameModifier.prototype, "modifyWin", null);
    __decorate([
        mj.traitEvent("GameMod_modifyWinTile2")
    ], GameModifier.prototype, "modifyWinForTile2", null);
    return GameModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.GameModifier = GameModifier;

cc._RF.pop();