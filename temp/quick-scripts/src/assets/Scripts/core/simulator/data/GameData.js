"use strict";
cc._RF.push(module, '1add6dlKg5NxpF+M2xCXTYi', 'GameData');
// Scripts/core/simulator/data/GameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../framework/data/Model");
var GameInputEnum_1 = require("../../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameData = /** @class */ (function (_super) {
    __extends(GameData, _super);
    function GameData() {
        var _this = _super.call(this) || this;
        _this.playTime = 0;
        _this.enterGameTime = 0;
        _this.isStopPlayTime = false;
        _this.isLocalEmpty(_this.localData.levelIndex) && (_this.localData.levelIndex = "");
        _this.isLocalEmpty(_this.localData.levelName) && (_this.localData.levelName = "");
        _this.isLocalEmpty(_this.localData.totalTileCount) && (_this.localData.totalTileCount = 0);
        _this.isLocalEmpty(_this.localData.clearTileCount) && (_this.localData.clearTileCount = 0);
        _this.isLocalEmpty(_this.localData.stepCount) && (_this.localData.stepCount = 0);
        _this.isLocalEmpty(_this.localData.score) && (_this.localData.score = 0);
        _this.isLocalEmpty(_this.localData.settlementScore) && (_this.localData.settlementScore = 0);
        _this.isLocalEmpty(_this.localData.levelId) && (_this.localData.levelId = 1);
        _this.isLocalEmpty(_this.localData.replayCount) && (_this.localData.replayCount = 0);
        _this.isLocalEmpty(_this.localData.gameCount) && (_this.localData.gameCount = 0);
        _this.isLocalEmpty(_this.localData.currentLevelId) && (_this.localData.currentLevelId = 1);
        _this.isLocalEmpty(_this.localData.levelData) && (_this.localData.levelData = "");
        _this.isLocalEmpty(_this.localData.originalLevelData) && (_this.localData.originalLevelData = "");
        _this.isLocalEmpty(_this.localData.originalLevelDataWithSpecialCards) && (_this.localData.originalLevelDataWithSpecialCards = "");
        _this.isLocalEmpty(_this.localData.originalLevelDataWithCardId) && (_this.localData.originalLevelDataWithCardId = "");
        _this.isLocalEmpty(_this.localData.comboNum) && (_this.localData.comboNum = 0);
        _this.isLocalEmpty(_this.localData.hasBrokenCombo) && (_this.localData.hasBrokenCombo = false);
        _this.isLocalEmpty(_this.localData.lockClickCount) && (_this.localData.lockClickCount = 0);
        _this.isLocalEmpty(_this.localData.hasTriggeredFullCombo) && (_this.localData.hasTriggeredFullCombo = false);
        _this.isLocalEmpty(_this.localData.hasTriggeredRewardCombo) && (_this.localData.hasTriggeredRewardCombo = false);
        _this.isLocalEmpty(_this.localData.maxScore) && (_this.localData.maxScore = 0);
        _this.isLocalEmpty(_this.localData.maxCombo) && (_this.localData.maxCombo = 0);
        _this.isLocalEmpty(_this.localData.curMaxCombo) && (_this.localData.curMaxCombo = 0);
        _this.isLocalEmpty(_this.localData.totalGames) && (_this.localData.totalGames = 0);
        _this.isLocalEmpty(_this.localData.winGames) && (_this.localData.winGames = 0);
        _this.isLocalEmpty(_this.localData.loseGames) && (_this.localData.loseGames = 0);
        _this.isLocalEmpty(_this.localData.levelDifficulty) && (_this.localData.levelDifficulty = 0);
        _this.isLocalEmpty(_this.localData.currentRoundTime) && (_this.localData.currentRoundTime = 0);
        _this.isLocalEmpty(_this.localData.lastUpdateTime) && (_this.localData.lastUpdateTime = Date.now());
        _this.isLocalEmpty(_this.localData.dieResult) && (_this.localData.dieResult = 1);
        _this.isLocalEmpty(_this.localData.curLevelComboMaxLimit) && (_this.localData.curLevelComboMaxLimit = 0);
        _this.isLocalEmpty(_this.localData.curLvCanTriRewardCombo) && (_this.localData.curLvCanTriRewardCombo = 0);
        _this.isLocalEmpty(_this.localData.rewardComboTriTileCnt) && (_this.localData.rewardComboTriTileCnt = 0);
        _this.isLocalEmpty(_this.localData.tileTypes) && (_this.localData.tileTypes = "");
        _this.isLocalEmpty(_this.localData.tileStrategies) && (_this.localData.tileStrategies = "");
        _this.isLocalEmpty(_this.localData.tileId2Type) && (_this.localData.tileId2Type = "");
        _this.isLocalEmpty(_this.localData.tileTypesExtra) && (_this.localData.tileTypesExtra = "");
        _this.isLocalEmpty(_this.localData.cardId2Type) && (_this.localData.cardId2Type = "");
        _this.isLocalEmpty(_this.localData.usedShuffle) && (_this.localData.usedShuffle = 0);
        _this.isLocalEmpty(_this.localData.usedHitTips) && (_this.localData.usedHitTips = 0);
        _this.isLocalEmpty(_this.localData.usedRevert) && (_this.localData.usedRevert = 0);
        _this.isLocalEmpty(_this.localData.usedRevive) && (_this.localData.usedRevive = 0);
        _this.isLocalEmpty(_this.localData.usedMagnet) && (_this.localData.usedMagnet = 0);
        _this.isLocalEmpty(_this.localData.replaceInfo) && (_this.localData.replaceInfo = "");
        _this.isLocalEmpty(_this.localData.gamePlayMethod) && (_this.localData.gamePlayMethod = 0);
        _this.isLocalEmpty(_this.localData.autoCollectTilesNum) && (_this.localData.autoCollectTilesNum = 0);
        _this.isLocalEmpty(_this.localData.last10GameRecord) && (_this.localData.last10GameRecord = []);
        _this.isLocalEmpty(_this.localData.winStreak) && (_this.localData.winStreak = 0);
        _this.isLocalEmpty(_this.localData.levelGenIndex) && (_this.localData.levelGenIndex = 0);
        _this.isLocalEmpty(_this.localData.enterAnimationStrategy) && (_this.localData.enterAnimationStrategy = "");
        _this.isLocalEmpty(_this.localData.nonAutoStepCount) && (_this.localData.nonAutoStepCount = 0);
        _this.isLocalEmpty(_this.localData.clearIntervals) && (_this.localData.clearIntervals = []);
        _this.isLocalEmpty(_this.localData.lastClearTime) && (_this.localData.lastClearTime = 0);
        _this.isLocalEmpty(_this.localData.limitClearIntervals) && (_this.localData.limitClearIntervals = 3);
        _this.isLocalEmpty(_this.localData.limitAvgClearIntervals) && (_this.localData.limitAvgClearIntervals = 3);
        _this.isLocalEmpty(_this.localData.avgClearIntervals) && (_this.localData.avgClearIntervals = []);
        _this.isLocalEmpty(_this.localData.lastOpTime) && (_this.localData.lastOpTime = 0);
        _this.isLocalEmpty(_this.localData.lastOpRealTime) && (_this.localData.lastOpRealTime = 0);
        _this._gameType === GameTypeEnums_1.MjGameType.Normal && 0 === _this.localData.levelGenIndex && _this.localData.levelId > 1 && _this.compatLevelGenIndex();
        _this.isLocalEmpty(_this.localData.clearRecords) && (_this.localData.clearRecords = []);
        _this.isLocalEmpty(_this.localData.theme) && (_this.localData.theme = "");
        _this.isLocalEmpty(_this.localData.hasShowResetSkinBtn) && (_this.localData.hasShowResetSkinBtn = 0);
        _this.isLocalEmpty(_this.localData.popupFailCnt) && (_this.localData.popupFailCnt = 0);
        _this.isLocalEmpty(_this.localData.toolUseRecords) && (_this.localData.toolUseRecords = []);
        _this.isLocalEmpty(_this.localData.cardMaterialID) && (_this.localData.cardMaterialID = 0);
        _this.isLocalEmpty(_this.localData.layerTileCount) && (_this.localData.layerTileCount = []);
        _this.isLocalEmpty(_this.localData.initSpecialCards) && (_this.localData.initSpecialCards = "");
        _this.isLocalEmpty(_this.localData.gotShuffle) && (_this.localData.gotShuffle = 0);
        _this.isLocalEmpty(_this.localData.gotHitTips) && (_this.localData.gotHitTips = 0);
        _this.isLocalEmpty(_this.localData.gotRevert) && (_this.localData.gotRevert = 0);
        _this.isLocalEmpty(_this.localData.gotRevive) && (_this.localData.gotRevive = 0);
        _this.isLocalEmpty(_this.localData.gotMagnet) && (_this.localData.gotMagnet = 0);
        _this.isLocalEmpty(_this.localData.lastManualMatchTime) && (_this.localData.lastManualMatchTime = 0);
        _this.isLocalEmpty(_this.localData.maxManualMatchTime) && (_this.localData.maxManualMatchTime = 0);
        _this.isLocalEmpty(_this.localData.avgManualMatchSampleCount) && (_this.localData.avgManualMatchSampleCount = 0);
        _this.isLocalEmpty(_this.localData.avgManualMatchSampleValue) && (_this.localData.avgManualMatchSampleValue = 0);
        _this.isLocalEmpty(_this.localData.avgManualMatchSampleStd) && (_this.localData.avgManualMatchSampleStd = 0);
        _this.isLocalEmpty(_this.localData.solvers) && (_this.localData.solvers = "");
        return _this;
    }
    Object.defineProperty(GameData.prototype, "userModel", {
        get: function () {
            return cc.js.getClassByName("UserModel").getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    GameData.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    GameData.prototype.setTheme = function (e) {
        this.localData.theme = e;
    };
    GameData.prototype.getTheme = function () {
        return this.localData.theme;
    };
    GameData.prototype.getCardMaterialID = function () {
        return this.localData.cardMaterialID || 0;
    };
    GameData.prototype.setCardMaterialID = function (e) {
        this.localData.cardMaterialID = e;
    };
    GameData.prototype.setHasShowResetSkinBtn = function (e) {
        this.localData.hasShowResetSkinBtn = e;
    };
    GameData.prototype.getHasShowResetSkinBtn = function () {
        return this.localData.hasShowResetSkinBtn;
    };
    GameData.prototype.compatLevelGenIndex = function () {
        var e = this.localData.levelId, t = cc.js.getClassByName("ExtractTool").getInstance().getRealLevelID(e);
        this.localData.levelGenIndex = Math.max(0, t);
    };
    GameData.prototype.setTotalTileCount = function (e) {
        this.localData.totalTileCount = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.addTotalTileCount = function (e) {
        this.localData.totalTileCount += e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getTotalTileCount = function () {
        return this.localData.totalTileCount;
    };
    GameData.prototype.addClearTileCount = function (e) {
        this.localData.clearTileCount += e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getClearTileCount = function () {
        return this.localData.clearTileCount;
    };
    GameData.prototype.addStepCount = function (e) {
        this.localData.stepCount += e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getStepCount = function () {
        return this.localData.stepCount;
    };
    GameData.prototype.getLevelId = function () {
        return this.localData.levelId;
    };
    GameData.prototype.setLevelId = function (e) {
        this.localData.levelId = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setLevelIndex = function (e) {
        if (void 0 !== e) {
            this.localData.levelIndex = String(e);
            this.localData.lastUpdateTime = Date.now();
        }
    };
    GameData.prototype.setLevelName = function (e) {
        if (void 0 !== e) {
            this.localData.levelName = e;
            this.localData.lastUpdateTime = Date.now();
        }
    };
    GameData.prototype.getLevelIndex = function () {
        return this.localData.levelIndex;
    };
    GameData.prototype.getLevelName = function () {
        return this.localData.levelName;
    };
    GameData.prototype.getCurrentLevelId = function () {
        return this.localData.currentLevelId;
    };
    GameData.prototype.setStartGameTime = function (e) {
        this.localData.startGameTime = e;
    };
    GameData.prototype.getStartGameTime = function () {
        return this.localData.startGameTime;
    };
    GameData.prototype.setIsEnd = function (e) {
        if (e) {
            this.localData.levelId += 1;
            this.localData.replayCount = 0;
            this.localData.levelData = "";
            this.localData.originalLevelData = "";
            this.localData.solvers = "";
            this.localData.currentRoundTime = 0;
            this.localData.lastUpdateTime = Date.now();
            this.localData.dimensionName = "";
            this.userModel.addTotalWinGames();
            this.recordWin();
        }
    };
    GameData.prototype.updateLast10GameRecord = function (e) {
        var t = this.localData.last10GameRecord, o = {
            gameId: this.getGameCount(),
            win: e,
            score: this.getRealScore()
        };
        t.push(o);
        t.length > 10 && t.splice(0, t.length - 10);
        this.localData.last10GameRecord = t;
        if (e) {
            this.localData.winStreak++;
        }
        else {
            this.localData.winStreak = 0;
        }
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.updatePlayCount = function () {
        this.localData.replayCount++;
        this.localData.gameCount++;
        this.userModel.addTotalGames();
    };
    GameData.prototype.getLevelData = function () {
        return this.localData.levelData;
    };
    GameData.prototype.getReplayCount = function () {
        return this.localData.replayCount;
    };
    GameData.prototype.getGameCount = function () {
        return this.localData.gameCount;
    };
    GameData.prototype.saveLevelData = function (e) {
        this.localData.levelData = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.saveOriWithSpecialCards = function (e) {
        this.localData.originalLevelDataWithSpecialCards = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getOriginalLevelData = function () {
        return this.localData.originalLevelData;
    };
    GameData.prototype.getOriWithSpecialCards = function () {
        return this.localData.originalLevelDataWithSpecialCards;
    };
    GameData.prototype.setOriginalLevelDataWithCardId = function (e) {
        this.localData.originalLevelDataWithCardId = e;
    };
    GameData.prototype.getOriginalLevelDataWithCardId = function () {
        return this.localData.originalLevelDataWithCardId;
    };
    GameData.prototype.setLevelInfo = function (e, t, o, n) {
        if (o === void 0) { o = ""; }
        if (n === void 0) { n = ""; }
        this.localData.levelId = e;
        this.localData.levelData = t;
        this.localData.originalLevelData = o || t;
        this.localData.solvers = n;
        this.localData.lastUpdateTime = Date.now();
        this.localData.currentLevelId = e;
    };
    GameData.prototype.setTileTypes = function (e) {
        this.localData.tileTypes = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setTileStrategies = function (e) {
        this.localData.tileStrategies = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getTileStrategies = function () {
        return this.localData.tileStrategies;
    };
    GameData.prototype.getCardId2Type = function () {
        return this.localData.cardId2Type;
    };
    GameData.prototype.setTileId2Type = function (e) {
        this.localData.tileId2Type = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setCardId2Type = function (e) {
        this.localData.cardId2Type = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setTileTypesExtra = function (e) {
        this.localData.tileTypesExtra = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setReplaceInfo = function (e) {
        this.localData.replaceInfo = JSON.stringify(e);
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getReplaceInfo = function () {
        var e = {};
        try {
            if (this.localData.replaceInfo) {
                var t = JSON.parse(this.localData.replaceInfo);
                "object" == typeof t && (e = t);
            }
        }
        catch (e) {
        }
        return e;
    };
    GameData.prototype.getTileTypes = function () {
        return this.localData.tileTypes;
    };
    GameData.prototype.getTileId2Type = function () {
        return this.localData.tileId2Type;
    };
    GameData.prototype.getTileTypesExtra = function () {
        return this.localData.tileTypesExtra;
    };
    GameData.prototype.getScore = function () {
        return this.localData.score;
    };
    GameData.prototype.getUsedShuffle = function () {
        return this.localData.usedShuffle;
    };
    GameData.prototype.getUsedHitTips = function () {
        return this.localData.usedHitTips;
    };
    GameData.prototype.getUsedRevert = function () {
        return this.localData.usedRevert;
    };
    GameData.prototype.getUsedRevive = function () {
        return this.localData.usedRevive;
    };
    GameData.prototype.getUsedMagnet = function () {
        return this.localData.usedMagnet;
    };
    GameData.prototype.getGotShuffle = function () {
        return this.localData.gotShuffle;
    };
    GameData.prototype.getGotHitTips = function () {
        return this.localData.gotHitTips;
    };
    GameData.prototype.getGotRevert = function () {
        return this.localData.gotRevert;
    };
    GameData.prototype.getGotRevive = function () {
        return this.localData.gotRevive;
    };
    GameData.prototype.getGotMagnet = function () {
        return this.localData.gotMagnet;
    };
    GameData.prototype.setScore = function (e, t) {
        if (t === void 0) { t = true; }
        if (this.localData.score !== e) {
            this.localData.score = e;
            t && this.updateMaxScore(e);
            this.localData.lastUpdateTime = Date.now();
        }
    };
    GameData.prototype.updateMaxScore = function (e) {
        if (e > this.localData.maxScore) {
            this.localData.maxScore = e;
            e > this.userModel.getMaxScore() && this.userModel.setMaxScore(e);
        }
    };
    GameData.prototype.addScore = function (e, t) {
        if (t === void 0) { t = true; }
        this.setScore(this.localData.score + e, t);
    };
    GameData.prototype.setSettlementScore = function (e) {
        this.localData.settlementScore = e;
        this.updateMaxScore(e);
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getSettlementScore = function () {
        return this.localData.settlementScore;
    };
    GameData.prototype.getComboNum = function () {
        return this.localData.comboNum;
    };
    GameData.prototype.getHasBrokenCombo = function () {
        return this.localData.hasBrokenCombo;
    };
    GameData.prototype.setHasBrokenCombo = function (e) {
        if (e === void 0) { e = true; }
        this.localData.hasBrokenCombo = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getHasTriggeredFullCombo = function () {
        return this.localData.hasTriggeredFullCombo;
    };
    GameData.prototype.setHasTriggeredFullCombo = function (e) {
        if (e === void 0) { e = true; }
        this.localData.hasTriggeredFullCombo = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getHasTriggeredRewardCombo = function () {
        return this.localData.hasTriggeredRewardCombo;
    };
    GameData.prototype.setHasTriggeredRewardCombo = function (e) {
        if (e === void 0) { e = true; }
        this.localData.hasTriggeredRewardCombo = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getLockClickCount = function () {
        return this.localData.lockClickCount;
    };
    GameData.prototype.setLockClickCount = function (e) {
        this.localData.lockClickCount = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.addLockClickCount = function (e) {
        if (e === void 0) { e = 1; }
        this.localData.lockClickCount += e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setComboNum = function (e, t) {
        if (t === void 0) { t = true; }
        if (this.localData.comboNum !== e) {
            this.localData.comboNum = e;
            t && e > this.localData.curMaxCombo && (this.localData.curMaxCombo = e);
            t && e > this.localData.maxCombo && (this.localData.maxCombo = e);
            this.localData.lastUpdateTime = Date.now();
        }
    };
    GameData.prototype.addComboNum = function (e, t) {
        if (t === void 0) { t = true; }
        this.setComboNum(this.localData.comboNum + e, t);
    };
    GameData.prototype.resetComboNum = function () {
        this.setComboNum(0, false);
        this.setHasTriggeredFullCombo(false);
        this.setHasTriggeredRewardCombo(false);
    };
    GameData.prototype.getMaxScore = function () {
        return this.localData.maxScore;
    };
    GameData.prototype.getMaxCombo = function () {
        return this.localData.maxCombo;
    };
    GameData.prototype.getCurMaxCombo = function () {
        return this.localData.curMaxCombo;
    };
    GameData.prototype.getTotalGames = function () {
        return this.localData.totalGames;
    };
    GameData.prototype.addGameCount = function () {
        this.localData.totalGames++;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.recordWin = function () {
        this.localData.winGames++;
        this.addGameCount();
    };
    GameData.prototype.recordLose = function () {
        this.localData.loseGames++;
        this.addGameCount();
    };
    GameData.prototype.getWinGames = function () {
        return this.localData.winGames;
    };
    GameData.prototype.setLevelDifficulty = function (e) {
        this.localData.levelDifficulty = e;
    };
    GameData.prototype.getLevelDifficulty = function () {
        return this.localData.levelDifficulty;
    };
    GameData.prototype.getHitTipsNums = function () {
        return this.userModel.localData.hitTips;
    };
    GameData.prototype.changeHitTipsNums = function (e, t) {
        if (t === void 0) { t = false; }
        if (t) {
            this.userModel.localData.hitTips = e;
        }
        else {
            this.userModel.localData.hitTips += e;
        }
    };
    GameData.prototype.getRevertNums = function () {
        return this.userModel.localData.revertItem || 0;
    };
    GameData.prototype.changeRevertNums = function (e, t) {
        if (t === void 0) { t = false; }
        e = Number(e);
        this.userModel.localData.revertItem = t ? e : this.getRevertNums() + e;
    };
    GameData.prototype.getReviveNums = function () {
        return 0;
    };
    GameData.prototype.changeReviveNums = function (e, t) {
        if (t === void 0) { t = false; }
    };
    GameData.prototype.getShuffleNums = function () {
        return this.userModel.localData.shuffle;
    };
    GameData.prototype.changeShuffleNums = function (e, t) {
        if (t === void 0) { t = false; }
        if (t) {
            this.userModel.localData.shuffle = e;
        }
        else {
            this.userModel.localData.shuffle += e;
        }
    };
    GameData.prototype.getLoseGames = function () {
        return this.localData.loseGames;
    };
    GameData.prototype.getWinRate = function () {
        return 0 === this.localData.totalGames ? 0 : this.localData.winGames / this.localData.totalGames;
    };
    GameData.prototype.setCurrentRoundTime = function (e) {
        this.localData.currentRoundTime = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getCurrentRoundTime = function () {
        return this.localData.currentRoundTime;
    };
    GameData.prototype.getCurLevelComboMaxLimit = function () {
        return this.localData.curLevelComboMaxLimit;
    };
    GameData.prototype.setCurLevelComboMaxLimit = function (e) {
        this.localData.curLevelComboMaxLimit = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getCurLvCanTriRewardCombo = function () {
        return this.localData.curLvCanTriRewardCombo;
    };
    GameData.prototype.setCurLvCanTriRewardCombo = function (e) {
        this.localData.curLvCanTriRewardCombo = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getRewardComboTriTileCnt = function () {
        return this.localData.rewardComboTriTileCnt;
    };
    GameData.prototype.setRewardComboTriTileCnt = function (e) {
        this.localData.rewardComboTriTileCnt = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setDieResult = function (e) {
        this.localData.dieResult = e;
    };
    GameData.prototype.getDieResult = function () {
        return this.localData.dieResult;
    };
    GameData.prototype.getGamePlayMethod = function () {
        return this.localData.gamePlayMethod;
    };
    GameData.prototype.setGamePlayMethod = function (e) {
        this.localData.gamePlayMethod = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.setDimensionName = function (e) {
        this.localData.dimensionName = e;
    };
    GameData.prototype.getDimensionName = function () {
        return this.localData.dimensionName;
    };
    GameData.prototype.getAutoCollectTilesNum = function () {
        return this.localData.autoCollectTilesNum;
    };
    GameData.prototype.addAutoCollectTilesNum = function (e) {
        this.localData.autoCollectTilesNum += e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.resetGameData = function () {
        this.localData.popupFailCnt = 0;
        this.localData.curMaxCombo = 0;
        this.localData.score = 0;
        this.localData.settlementScore = 0;
        this.localData.comboNum = 0;
        this.localData.hasBrokenCombo = false;
        this.localData.lockClickCount = 0;
        this.localData.levelData = "";
        this.localData.currentRoundTime = 0;
        this.localData.curLevelComboMaxLimit = 0;
        this.localData.curLvCanTriRewardCombo = 0;
        this.localData.rewardComboTriTileCnt = 0;
        this.localData.lastUpdateTime = Date.now();
        this.localData.usedShuffle = 0;
        this.localData.usedHitTips = 0;
        this.localData.usedRevert = 0;
        this.localData.usedRevive = 0;
        this.localData.usedMagnet = 0;
        this.localData.gotShuffle = 0;
        this.localData.gotHitTips = 0;
        this.localData.gotRevert = 0;
        this.localData.gotRevive = 0;
        this.localData.gotMagnet = 0;
        this.localData.totalTileCount = 0;
        this.localData.clearTileCount = 0;
        this.localData.stepCount = 0;
        this.localData.clearRecords = [];
        this.localData.hasTriggeredFullCombo = false;
        this.localData.hasTriggeredRewardCombo = false;
        this.localData.autoCollectTilesNum = 0;
        this.localData.clearIntervals = [];
        this.localData.lastClearTime = 0;
        this.localData.nonAutoStepCount = 0;
        this.localData.lastManualMatchTime = 0;
        this.localData.maxManualMatchTime = 0;
        this.localData.toolUseRecords = [];
        this.localData.layerTileCount = [];
        this.localData.initSpecialCards = "";
        this.updateLastOpTime();
        var e = this.userModel.getDotTrackerByGameType(this.gameType);
        e && e.resetGameData();
    };
    GameData.prototype.getGameId = function () {
        return this.localData.levelIndex + ":" + this.localData.replayCount;
    };
    GameData.prototype.getLast10GameRecord = function () {
        return this.localData.last10GameRecord;
    };
    GameData.prototype.getWinStreak = function () {
        return this.localData.winStreak;
    };
    GameData.prototype.getLevelGenIndex = function () {
        return this.localData.levelGenIndex || 0;
    };
    GameData.prototype.incrementLevelGenIndex = function () {
        this.localData.levelGenIndex += 1;
    };
    GameData.prototype.getRealScore = function () {
        return Math.max(this.getScore(), this.getSettlementScore());
    };
    GameData.prototype.getEnterAnimationStrategy = function () {
        return this.localData.enterAnimationStrategy || "";
    };
    GameData.prototype.setEnterAnimationStrategy = function (e) {
        this.localData.enterAnimationStrategy = e;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.updateNonAutoStepCount = function () {
        var e = this.localData.lastManualMatchTime;
        this.localData.lastManualMatchTime = this.getRealPlayTime();
        var t = this.localData.lastManualMatchTime - e;
        t > this.localData.maxManualMatchTime && (this.localData.maxManualMatchTime = t);
        this.localData.nonAutoStepCount++;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getNonAutoStepCount = function () {
        return this.localData.nonAutoStepCount;
    };
    GameData.prototype.updateClearTimeInterval = function () {
        if (0 !== this.localData.lastClearTime) {
            var e = this.localData.limitClearIntervals, t = (Date.now() - this.localData.lastClearTime) / 1000;
            this.localData.lastClearTime = Date.now();
            var o = this.localData.clearIntervals;
            o.push(t);
            o.sort(function (e, t) {
                return e - t;
            });
            o = o.slice(0, e);
            this.localData.clearIntervals = o;
        }
        else
            this.localData.lastClearTime = Date.now();
    };
    GameData.prototype.updateAvgClearIntervals = function () {
        var e = this.localData.limitAvgClearIntervals, t = this.localData.avgClearIntervals, o = this.localData.clearIntervals, n = o.length > 0 ? o.reduce(function (e, t) {
            return e + t;
        }, 0) / o.length : 0;
        t.unshift(n);
        t = t.slice(0, e);
        this.localData.avgClearIntervals = t;
        t.reduce(function (e, t) {
            return e + t;
        }, 0), t.length;
    };
    GameData.prototype.getUserBaseOpTime = function () {
        var e = this.localData.avgClearIntervals;
        return e.length > 0 ? e.reduce(function (e, t) {
            return e + t;
        }, 0) / e.length : 0;
    };
    GameData.prototype.updateLastOpTime = function () {
        this.localData.lastOpTime = Date.now();
        this.localData.lastOpRealTime = this.getCurrentRoundTime();
    };
    GameData.prototype.getLastOpTime = function () {
        return this.localData.lastOpTime;
    };
    GameData.prototype.getLastOpRealTime = function () {
        return this.localData.lastOpRealTime;
    };
    GameData.prototype.setLimitClearIntervals = function (e) {
        this.localData.limitClearIntervals = e;
    };
    GameData.prototype.setLimitAvgClearIntervals = function (e) {
        this.localData.limitAvgClearIntervals = e;
    };
    GameData.prototype.recordClear = function (e) {
        this.addClearTileCount(e.length);
        var t = this.localData.clearRecords;
        t.push(__spreadArrays(e));
        this.localData.clearRecords = t;
    };
    GameData.prototype.getClearRecords = function () {
        return this.localData.clearRecords;
    };
    GameData.prototype.addPopupFailCnt = function () {
        this.localData.popupFailCnt++;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getPopupFailCnt = function () {
        return this.localData.popupFailCnt;
    };
    GameData.prototype.recordToolUse = function (e, t) {
        var o = t === GameInputEnum_1.EShuffleFrom.ClassicRevive || t === GameInputEnum_1.EShuffleFrom.Revive ? 0 : 1, n = this.getTotalTileCount() > 0 ? this.getClearTileCount() / this.getTotalTileCount() : 0, i = this.localData.toolUseRecords;
        i.push([e, o, n]);
        this.localData.toolUseRecords = i;
        this.localData.lastUpdateTime = Date.now();
    };
    GameData.prototype.getToolUseRecords = function () {
        return this.localData.toolUseRecords;
    };
    GameData.prototype.setLayerTileCount = function (e) {
        this.localData.layerTileCount = e;
    };
    GameData.prototype.getLayerTileCount = function () {
        return this.localData.layerTileCount;
    };
    GameData.prototype.setInitSpecialCards = function (e) {
        this.localData.initSpecialCards = e;
    };
    GameData.prototype.getInitSpecialCards = function () {
        return this.localData.initSpecialCards;
    };
    GameData.prototype.toolChange = function (e, t) {
        if (t < 0)
            switch (e) {
                case GameTypeEnums_1.EItemId.Shuffle:
                    this.localData.usedShuffle += Math.abs(t);
                    break;
                case GameTypeEnums_1.EItemId.Hint:
                    this.localData.usedHitTips += Math.abs(t);
                    break;
                case GameTypeEnums_1.EItemId.Revert:
                    this.localData.usedRevert += Math.abs(t);
                    break;
                case GameTypeEnums_1.EItemId.Revive:
                    this.localData.usedRevive += Math.abs(t);
                    break;
                case GameTypeEnums_1.EItemId.Magnet:
                    this.localData.usedMagnet += Math.abs(t);
            }
        else if (t > 0)
            switch (e) {
                case GameTypeEnums_1.EItemId.Shuffle:
                    this.localData.gotShuffle += t;
                    break;
                case GameTypeEnums_1.EItemId.Hint:
                    this.localData.gotHitTips += t;
                    break;
                case GameTypeEnums_1.EItemId.Revert:
                    this.localData.gotRevert += t;
                    break;
                case GameTypeEnums_1.EItemId.Revive:
                    this.localData.gotRevive += t;
                    break;
                case GameTypeEnums_1.EItemId.Magnet:
                    this.localData.gotMagnet += t;
            }
    };
    GameData.prototype.isHitTipsEnough = function () {
        return this.getHitTipsNums() > 0;
    };
    GameData.prototype.isRevertEnough = function () {
        return this.getRevertNums() > 0;
    };
    GameData.prototype.isReviveEnough = function () {
        return this.getReviveNums() > 0;
    };
    GameData.prototype.isShuffleEnough = function () {
        return this.getShuffleNums() > 0;
    };
    GameData.prototype.getAvgManualMatchTime = function () {
        var e = this.localData.lastManualMatchTime, t = this.localData.nonAutoStepCount;
        return t > 0 ? e / t : 0;
    };
    GameData.prototype.getAvgManualMatchSampleStd = function () {
        return this.localData.avgManualMatchSampleStd;
    };
    GameData.prototype.getAvgManualMatchSampleCount = function () {
        return this.localData.avgManualMatchSampleCount;
    };
    GameData.prototype.getAvgManualMatchSampleValue = function () {
        return this.localData.avgManualMatchSampleValue;
    };
    GameData.prototype.updateManualMatchSample = function () {
        if (!(this.localData.nonAutoStepCount <= 0 || this.localData.lastManualMatchTime > 600 || this.localData.maxManualMatchTime > 30)) {
            var e = this.getAvgManualMatchTime(), t = this.localData.avgManualMatchSampleCount, o = this.localData.avgManualMatchSampleValue, n = this.localData.avgManualMatchSampleStd, i = o + (e - o) / (t + 1), r = 0;
            if (t >= 1) {
                var a = ((t - 1) * n * n + (e - o) * (e - i)) / t;
                r = Math.sqrt(Math.max(0, a));
            }
            this.localData.avgManualMatchSampleCount = t + 1;
            this.localData.avgManualMatchSampleValue = i;
            this.localData.avgManualMatchSampleStd = r;
            this.localData.lastUpdateTime = Date.now();
        }
    };
    GameData.prototype.advancePlayTime = function (e) {
        this.isStopPlayTime || (this.playTime += e);
    };
    GameData.prototype.enterGame = function () {
        this.playTime = 0;
        this.enterGameTime = this.getCurrentRoundTime();
        this.isStopPlayTime = false;
    };
    GameData.prototype.stopPlayTime = function () {
        this.isStopPlayTime = true;
    };
    GameData.prototype.getRealPlayTime = function () {
        return this.playTime + this.enterGameTime;
    };
    GameData.prototype.getSolvers = function () {
        return this.localData.solvers;
    };
    __decorate([
        mj.traitEvent("GameData_chgHitTips")
    ], GameData.prototype, "changeHitTipsNums", null);
    __decorate([
        mj.traitEvent("GameData_chgRevert")
    ], GameData.prototype, "changeRevertNums", null);
    __decorate([
        mj.traitEvent("GameData_chgShuffle")
    ], GameData.prototype, "changeShuffleNums", null);
    __decorate([
        mj.traitEvent("GameData_getBaseOpTime")
    ], GameData.prototype, "getUserBaseOpTime", null);
    __decorate([
        mj.traitEvent("GameData_isHitTipEnough")
    ], GameData.prototype, "isHitTipsEnough", null);
    __decorate([
        mj.traitEvent("GameData_isRevertEnough")
    ], GameData.prototype, "isRevertEnough", null);
    __decorate([
        mj.traitEvent("GameData_isReviveEnough")
    ], GameData.prototype, "isReviveEnough", null);
    __decorate([
        mj.traitEvent("GameData_isShuffleEnough")
    ], GameData.prototype, "isShuffleEnough", null);
    GameData = __decorate([
        mj.class("GameData")
    ], GameData);
    return GameData;
}(Model_1.default));
exports.default = GameData;

cc._RF.pop();