
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUVsRCwyRUFBdUU7QUFDdkUsMkRBQThEO0FBRzlEO0lBQXNDLDRCQUFLO0lBYXZDO1FBQUEsWUFDSSxpQkFBTyxTQStFVjtRQTVGRCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFZbkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0UsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FB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QUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDakcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0UsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEYsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMs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LFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlFLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxL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QixRQUFRO1FBRDVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO09BQ0EsUUFBUSxDQW04QjVCO0lBQUQsZUFBQztDQW44QkQsQUFtOEJDLENBbjhCcUMsZUFBSyxHQW04QjFDO2tCQW44Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9kYXRhL01vZGVsXCI7XG5cbmltcG9ydCB7RVNodWZmbGVGcm9tfSBmcm9tIFwiLi4vLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW1cIjtcbmltcG9ydCB7RUl0ZW1JZCwgTWpHYW1lVHlwZX0gZnJvbSBcIi4uL2NvbnN0YW50L0dhbWVUeXBlRW51bXNcIjtcblxuQG1qLmNsYXNzKFwiR2FtZURhdGFcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVEYXRhIGV4dGVuZHMgTW9kZWwge1xuICAgIHBsYXlUaW1lID0gMDtcbiAgICBlbnRlckdhbWVUaW1lID0gMDtcbiAgICBpc1N0b3BQbGF5VGltZSA9IGZhbHNlO1xuXG4gICAgZ2V0IHVzZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIGNjLmpzLmdldENsYXNzQnlOYW1lKFwiVXNlck1vZGVsXCIpLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGdhbWVUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVR5cGU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxldmVsSW5kZXgpICYmICh0aGlzLmxvY2FsRGF0YS5sZXZlbEluZGV4ID0gXCJcIik7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxldmVsTmFtZSkgJiYgKHRoaXMubG9jYWxEYXRhLmxldmVsTmFtZSA9IFwiXCIpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50b3RhbFRpbGVDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLnRvdGFsVGlsZUNvdW50ID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmNsZWFyVGlsZUNvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuY2xlYXJUaWxlQ291bnQgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuc3RlcENvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuc3RlcENvdW50ID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnNjb3JlKSAmJiAodGhpcy5sb2NhbERhdGEuc2NvcmUgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuc2V0dGxlbWVudFNjb3JlKSAmJiAodGhpcy5sb2NhbERhdGEuc2V0dGxlbWVudFNjb3JlID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxldmVsSWQpICYmICh0aGlzLmxvY2FsRGF0YS5sZXZlbElkID0gMSk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnJlcGxheUNvdW50KSAmJiAodGhpcy5sb2NhbERhdGEucmVwbGF5Q291bnQgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZ2FtZUNvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuZ2FtZUNvdW50ID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmN1cnJlbnRMZXZlbElkKSAmJiAodGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQgPSAxKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGV2ZWxEYXRhKSAmJiAodGhpcy5sb2NhbERhdGEubGV2ZWxEYXRhID0gXCJcIik7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsTGV2ZWxEYXRhKSAmJiAodGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGEgPSBcIlwiKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGFXaXRoU3BlY2lhbENhcmRzKSAmJiAodGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGFXaXRoU3BlY2lhbENhcmRzID0gXCJcIik7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsTGV2ZWxEYXRhV2l0aENhcmRJZCkgJiYgKHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsTGV2ZWxEYXRhV2l0aENhcmRJZCA9IFwiXCIpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jb21ib051bSkgJiYgKHRoaXMubG9jYWxEYXRhLmNvbWJvTnVtID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhc0Jyb2tlbkNvbWJvKSAmJiAodGhpcy5sb2NhbERhdGEuaGFzQnJva2VuQ29tYm8gPSBmYWxzZSk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxvY2tDbGlja0NvdW50KSAmJiAodGhpcy5sb2NhbERhdGEubG9ja0NsaWNrQ291bnQgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaGFzVHJpZ2dlcmVkRnVsbENvbWJvKSAmJiAodGhpcy5sb2NhbERhdGEuaGFzVHJpZ2dlcmVkRnVsbENvbWJvID0gZmFsc2UpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5oYXNUcmlnZ2VyZWRSZXdhcmRDb21ibykgJiYgKHRoaXMubG9jYWxEYXRhLmhhc1RyaWdnZXJlZFJld2FyZENvbWJvID0gZmFsc2UpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5tYXhTY29yZSkgJiYgKHRoaXMubG9jYWxEYXRhLm1heFNjb3JlID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLm1heENvbWJvKSAmJiAodGhpcy5sb2NhbERhdGEubWF4Q29tYm8gPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3VyTWF4Q29tYm8pICYmICh0aGlzLmxvY2FsRGF0YS5jdXJNYXhDb21ibyA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50b3RhbEdhbWVzKSAmJiAodGhpcy5sb2NhbERhdGEudG90YWxHYW1lcyA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS53aW5HYW1lcykgJiYgKHRoaXMubG9jYWxEYXRhLndpbkdhbWVzID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxvc2VHYW1lcykgJiYgKHRoaXMubG9jYWxEYXRhLmxvc2VHYW1lcyA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sZXZlbERpZmZpY3VsdHkpICYmICh0aGlzLmxvY2FsRGF0YS5sZXZlbERpZmZpY3VsdHkgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3VycmVudFJvdW5kVGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmN1cnJlbnRSb3VuZFRpbWUgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCkpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5kaWVSZXN1bHQpICYmICh0aGlzLmxvY2FsRGF0YS5kaWVSZXN1bHQgPSAxKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3VyTGV2ZWxDb21ib01heExpbWl0KSAmJiAodGhpcy5sb2NhbERhdGEuY3VyTGV2ZWxDb21ib01heExpbWl0ID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmN1ckx2Q2FuVHJpUmV3YXJkQ29tYm8pICYmICh0aGlzLmxvY2FsRGF0YS5jdXJMdkNhblRyaVJld2FyZENvbWJvID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnJld2FyZENvbWJvVHJpVGlsZUNudCkgJiYgKHRoaXMubG9jYWxEYXRhLnJld2FyZENvbWJvVHJpVGlsZUNudCA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXMpICYmICh0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXMgPSBcIlwiKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudGlsZVN0cmF0ZWdpZXMpICYmICh0aGlzLmxvY2FsRGF0YS50aWxlU3RyYXRlZ2llcyA9IFwiXCIpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50aWxlSWQyVHlwZSkgJiYgKHRoaXMubG9jYWxEYXRhLnRpbGVJZDJUeXBlID0gXCJcIik7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnRpbGVUeXBlc0V4dHJhKSAmJiAodGhpcy5sb2NhbERhdGEudGlsZVR5cGVzRXh0cmEgPSBcIlwiKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY2FyZElkMlR5cGUpICYmICh0aGlzLmxvY2FsRGF0YS5jYXJkSWQyVHlwZSA9IFwiXCIpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS51c2VkU2h1ZmZsZSkgJiYgKHRoaXMubG9jYWxEYXRhLnVzZWRTaHVmZmxlID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnVzZWRIaXRUaXBzKSAmJiAodGhpcy5sb2NhbERhdGEudXNlZEhpdFRpcHMgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudXNlZFJldmVydCkgJiYgKHRoaXMubG9jYWxEYXRhLnVzZWRSZXZlcnQgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudXNlZFJldml2ZSkgJiYgKHRoaXMubG9jYWxEYXRhLnVzZWRSZXZpdmUgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudXNlZE1hZ25ldCkgJiYgKHRoaXMubG9jYWxEYXRhLnVzZWRNYWduZXQgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmVwbGFjZUluZm8pICYmICh0aGlzLmxvY2FsRGF0YS5yZXBsYWNlSW5mbyA9IFwiXCIpO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5nYW1lUGxheU1ldGhvZCkgJiYgKHRoaXMubG9jYWxEYXRhLmdhbWVQbGF5TWV0aG9kID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmF1dG9Db2xsZWN0VGlsZXNOdW0pICYmICh0aGlzLmxvY2FsRGF0YS5hdXRvQ29sbGVjdFRpbGVzTnVtID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3QxMEdhbWVSZWNvcmQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0MTBHYW1lUmVjb3JkID0gW10pO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS53aW5TdHJlYWspICYmICh0aGlzLmxvY2FsRGF0YS53aW5TdHJlYWsgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGV2ZWxHZW5JbmRleCkgJiYgKHRoaXMubG9jYWxEYXRhLmxldmVsR2VuSW5kZXggPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZW50ZXJBbmltYXRpb25TdHJhdGVneSkgJiYgKHRoaXMubG9jYWxEYXRhLmVudGVyQW5pbWF0aW9uU3RyYXRlZ3kgPSBcIlwiKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubm9uQXV0b1N0ZXBDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLm5vbkF1dG9TdGVwQ291bnQgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY2xlYXJJbnRlcnZhbHMpICYmICh0aGlzLmxvY2FsRGF0YS5jbGVhckludGVydmFscyA9IFtdKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdENsZWFyVGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RDbGVhclRpbWUgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGltaXRDbGVhckludGVydmFscykgJiYgKHRoaXMubG9jYWxEYXRhLmxpbWl0Q2xlYXJJbnRlcnZhbHMgPSAzKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGltaXRBdmdDbGVhckludGVydmFscykgJiYgKHRoaXMubG9jYWxEYXRhLmxpbWl0QXZnQ2xlYXJJbnRlcnZhbHMgPSAzKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuYXZnQ2xlYXJJbnRlcnZhbHMpICYmICh0aGlzLmxvY2FsRGF0YS5hdmdDbGVhckludGVydmFscyA9IFtdKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdE9wVGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RPcFRpbWUgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdE9wUmVhbFRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0T3BSZWFsVGltZSA9IDApO1xuICAgICAgICB0aGlzLl9nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgMCA9PT0gdGhpcy5sb2NhbERhdGEubGV2ZWxHZW5JbmRleCAmJiB0aGlzLmxvY2FsRGF0YS5sZXZlbElkID4gMSAmJiB0aGlzLmNvbXBhdExldmVsR2VuSW5kZXgoKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY2xlYXJSZWNvcmRzKSAmJiAodGhpcy5sb2NhbERhdGEuY2xlYXJSZWNvcmRzID0gW10pO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50aGVtZSkgJiYgKHRoaXMubG9jYWxEYXRhLnRoZW1lID0gXCJcIik7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmhhc1Nob3dSZXNldFNraW5CdG4pICYmICh0aGlzLmxvY2FsRGF0YS5oYXNTaG93UmVzZXRTa2luQnRuID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnBvcHVwRmFpbENudCkgJiYgKHRoaXMubG9jYWxEYXRhLnBvcHVwRmFpbENudCA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50b29sVXNlUmVjb3JkcykgJiYgKHRoaXMubG9jYWxEYXRhLnRvb2xVc2VSZWNvcmRzID0gW10pO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jYXJkTWF0ZXJpYWxJRCkgJiYgKHRoaXMubG9jYWxEYXRhLmNhcmRNYXRlcmlhbElEID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxheWVyVGlsZUNvdW50KSAmJiAodGhpcy5sb2NhbERhdGEubGF5ZXJUaWxlQ291bnQgPSBbXSk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmluaXRTcGVjaWFsQ2FyZHMpICYmICh0aGlzLmxvY2FsRGF0YS5pbml0U3BlY2lhbENhcmRzID0gXCJcIik7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmdvdFNodWZmbGUpICYmICh0aGlzLmxvY2FsRGF0YS5nb3RTaHVmZmxlID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmdvdEhpdFRpcHMpICYmICh0aGlzLmxvY2FsRGF0YS5nb3RIaXRUaXBzID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmdvdFJldmVydCkgJiYgKHRoaXMubG9jYWxEYXRhLmdvdFJldmVydCA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5nb3RSZXZpdmUpICYmICh0aGlzLmxvY2FsRGF0YS5nb3RSZXZpdmUgPSAwKTtcbiAgICAgICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZ290TWFnbmV0KSAmJiAodGhpcy5sb2NhbERhdGEuZ290TWFnbmV0ID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RNYW51YWxNYXRjaFRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0TWFudWFsTWF0Y2hUaW1lID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLm1heE1hbnVhbE1hdGNoVGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLm1heE1hbnVhbE1hdGNoVGltZSA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5hdmdNYW51YWxNYXRjaFNhbXBsZUNvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuYXZnTWFudWFsTWF0Y2hTYW1wbGVDb3VudCA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5hdmdNYW51YWxNYXRjaFNhbXBsZVZhbHVlKSAmJiAodGhpcy5sb2NhbERhdGEuYXZnTWFudWFsTWF0Y2hTYW1wbGVWYWx1ZSA9IDApO1xuICAgICAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5hdmdNYW51YWxNYXRjaFNhbXBsZVN0ZCkgJiYgKHRoaXMubG9jYWxEYXRhLmF2Z01hbnVhbE1hdGNoU2FtcGxlU3RkID0gMCk7XG4gICAgICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnNvbHZlcnMpICYmICh0aGlzLmxvY2FsRGF0YS5zb2x2ZXJzID0gXCJcIik7XG4gICAgfVxuXG4gICAgaXNMb2NhbEVtcHR5KGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gZSB8fCBcIlwiID09PSBlO1xuICAgIH1cblxuICAgIHNldFRoZW1lKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEudGhlbWUgPSBlO1xuICAgIH1cblxuICAgIGdldFRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudGhlbWU7XG4gICAgfVxuXG4gICAgZ2V0Q2FyZE1hdGVyaWFsSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jYXJkTWF0ZXJpYWxJRCB8fCAwO1xuICAgIH1cblxuICAgIHNldENhcmRNYXRlcmlhbElEKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2FyZE1hdGVyaWFsSUQgPSBlO1xuICAgIH1cblxuICAgIHNldEhhc1Nob3dSZXNldFNraW5CdG4oZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNTaG93UmVzZXRTa2luQnRuID0gZTtcbiAgICB9XG5cbiAgICBnZXRIYXNTaG93UmVzZXRTa2luQnRuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaGFzU2hvd1Jlc2V0U2tpbkJ0bjtcbiAgICB9XG5cbiAgICBjb21wYXRMZXZlbEdlbkluZGV4KCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmxldmVsSWQsXG4gICAgICAgICAgICB0ID0gY2MuanMuZ2V0Q2xhc3NCeU5hbWUoXCJFeHRyYWN0VG9vbFwiKS5nZXRJbnN0YW5jZSgpLmdldFJlYWxMZXZlbElEKGUpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sZXZlbEdlbkluZGV4ID0gTWF0aC5tYXgoMCwgdCk7XG4gICAgfVxuXG4gICAgc2V0VG90YWxUaWxlQ291bnQoZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS50b3RhbFRpbGVDb3VudCA9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBhZGRUb3RhbFRpbGVDb3VudChlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnRvdGFsVGlsZUNvdW50ICs9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbFRpbGVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRvdGFsVGlsZUNvdW50O1xuICAgIH1cblxuICAgIGFkZENsZWFyVGlsZUNvdW50KGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2xlYXJUaWxlQ291bnQgKz0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldENsZWFyVGlsZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY2xlYXJUaWxlQ291bnQ7XG4gICAgfVxuXG4gICAgYWRkU3RlcENvdW50KGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc3RlcENvdW50ICs9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRTdGVwQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zdGVwQ291bnQ7XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWxJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxldmVsSWQ7XG4gICAgfVxuXG4gICAgc2V0TGV2ZWxJZChlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsSWQgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgc2V0TGV2ZWxJbmRleChlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsSW5kZXggPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMZXZlbE5hbWUoZSkge1xuICAgICAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sZXZlbE5hbWUgPSBlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWxJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxldmVsSW5kZXg7XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWxOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGV2ZWxOYW1lO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRMZXZlbElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQ7XG4gICAgfVxuXG4gICAgc2V0U3RhcnRHYW1lVGltZShlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnN0YXJ0R2FtZVRpbWUgPSBlO1xuICAgIH1cblxuICAgIGdldFN0YXJ0R2FtZVRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5zdGFydEdhbWVUaW1lO1xuICAgIH1cblxuICAgIHNldElzRW5kKGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsSWQgKz0gMTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLnJlcGxheUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsRGF0YSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbExldmVsRGF0YSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5zb2x2ZXJzID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRSb3VuZFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuZGltZW5zaW9uTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnVzZXJNb2RlbC5hZGRUb3RhbFdpbkdhbWVzKCk7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFdpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlTGFzdDEwR2FtZVJlY29yZChlKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEubGFzdDEwR2FtZVJlY29yZCxcbiAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdldEdhbWVDb3VudCgpLFxuICAgICAgICAgICAgICAgIHdpbjogZSxcbiAgICAgICAgICAgICAgICBzY29yZTogdGhpcy5nZXRSZWFsU2NvcmUoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgdC5wdXNoKG8pO1xuICAgICAgICB0Lmxlbmd0aCA+IDEwICYmIHQuc3BsaWNlKDAsIHQubGVuZ3RoIC0gMTApO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0MTBHYW1lUmVjb3JkID0gdDtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLndpblN0cmVhaysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEud2luU3RyZWFrID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGxheUNvdW50KCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5yZXBsYXlDb3VudCsrO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5nYW1lQ291bnQrKztcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYWRkVG90YWxHYW1lcygpO1xuICAgIH1cblxuICAgIGdldExldmVsRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxldmVsRGF0YTtcbiAgICB9XG5cbiAgICBnZXRSZXBsYXlDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnJlcGxheUNvdW50O1xuICAgIH1cblxuICAgIGdldEdhbWVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmdhbWVDb3VudDtcbiAgICB9XG5cbiAgICBzYXZlTGV2ZWxEYXRhKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGV2ZWxEYXRhID0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHNhdmVPcmlXaXRoU3BlY2lhbENhcmRzKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGFXaXRoU3BlY2lhbENhcmRzID0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldE9yaWdpbmFsTGV2ZWxEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEub3JpZ2luYWxMZXZlbERhdGE7XG4gICAgfVxuXG4gICAgZ2V0T3JpV2l0aFNwZWNpYWxDYXJkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsTGV2ZWxEYXRhV2l0aFNwZWNpYWxDYXJkcztcbiAgICB9XG5cbiAgICBzZXRPcmlnaW5hbExldmVsRGF0YVdpdGhDYXJkSWQoZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbExldmVsRGF0YVdpdGhDYXJkSWQgPSBlO1xuICAgIH1cblxuICAgIGdldE9yaWdpbmFsTGV2ZWxEYXRhV2l0aENhcmRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLm9yaWdpbmFsTGV2ZWxEYXRhV2l0aENhcmRJZDtcbiAgICB9XG5cbiAgICBzZXRMZXZlbEluZm8oZSwgdCwgbyA9IFwiXCIsIG4gPSBcIlwiKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsSWQgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sZXZlbERhdGEgPSB0O1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5vcmlnaW5hbExldmVsRGF0YSA9IG8gfHwgdDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc29sdmVycyA9IG47XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VycmVudExldmVsSWQgPSBlO1xuICAgIH1cblxuICAgIHNldFRpbGVUeXBlcyhlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnRpbGVUeXBlcyA9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBzZXRUaWxlU3RyYXRlZ2llcyhlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnRpbGVTdHJhdGVnaWVzID0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldFRpbGVTdHJhdGVnaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudGlsZVN0cmF0ZWdpZXM7XG4gICAgfVxuXG4gICAgZ2V0Q2FyZElkMlR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jYXJkSWQyVHlwZTtcbiAgICB9XG5cbiAgICBzZXRUaWxlSWQyVHlwZShlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnRpbGVJZDJUeXBlID0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHNldENhcmRJZDJUeXBlKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2FyZElkMlR5cGUgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgc2V0VGlsZVR5cGVzRXh0cmEoZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXNFeHRyYSA9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBzZXRSZXBsYWNlSW5mbyhlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnJlcGxhY2VJbmZvID0gSlNPTi5zdHJpbmdpZnkoZSk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRSZXBsYWNlSW5mbygpIHtcbiAgICAgICAgdmFyIGUgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5yZXBsYWNlSW5mbykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gSlNPTi5wYXJzZSh0aGlzLmxvY2FsRGF0YS5yZXBsYWNlSW5mbyk7XG4gICAgICAgICAgICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiAoZSA9IHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuXG4gICAgZ2V0VGlsZVR5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudGlsZVR5cGVzO1xuICAgIH1cblxuICAgIGdldFRpbGVJZDJUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudGlsZUlkMlR5cGU7XG4gICAgfVxuXG4gICAgZ2V0VGlsZVR5cGVzRXh0cmEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS50aWxlVHlwZXNFeHRyYTtcbiAgICB9XG5cbiAgICBnZXRTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnNjb3JlO1xuICAgIH1cblxuICAgIGdldFVzZWRTaHVmZmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudXNlZFNodWZmbGU7XG4gICAgfVxuXG4gICAgZ2V0VXNlZEhpdFRpcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS51c2VkSGl0VGlwcztcbiAgICB9XG5cbiAgICBnZXRVc2VkUmV2ZXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudXNlZFJldmVydDtcbiAgICB9XG5cbiAgICBnZXRVc2VkUmV2aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudXNlZFJldml2ZTtcbiAgICB9XG5cbiAgICBnZXRVc2VkTWFnbmV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudXNlZE1hZ25ldDtcbiAgICB9XG5cbiAgICBnZXRHb3RTaHVmZmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuZ290U2h1ZmZsZTtcbiAgICB9XG5cbiAgICBnZXRHb3RIaXRUaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuZ290SGl0VGlwcztcbiAgICB9XG5cbiAgICBnZXRHb3RSZXZlcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5nb3RSZXZlcnQ7XG4gICAgfVxuXG4gICAgZ2V0R290UmV2aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuZ290UmV2aXZlO1xuICAgIH1cblxuICAgIGdldEdvdE1hZ25ldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmdvdE1hZ25ldDtcbiAgICB9XG5cbiAgICBzZXRTY29yZShlLCB0ID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbERhdGEuc2NvcmUgIT09IGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLnNjb3JlID0gZTtcbiAgICAgICAgICAgIHQgJiYgdGhpcy51cGRhdGVNYXhTY29yZShlKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZU1heFNjb3JlKGUpIHtcbiAgICAgICAgaWYgKGUgPiB0aGlzLmxvY2FsRGF0YS5tYXhTY29yZSkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEubWF4U2NvcmUgPSBlO1xuICAgICAgICAgICAgZSA+IHRoaXMudXNlck1vZGVsLmdldE1heFNjb3JlKCkgJiYgdGhpcy51c2VyTW9kZWwuc2V0TWF4U2NvcmUoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTY29yZShlLCB0ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNldFNjb3JlKHRoaXMubG9jYWxEYXRhLnNjb3JlICsgZSwgdCk7XG4gICAgfVxuXG4gICAgc2V0U2V0dGxlbWVudFNjb3JlKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc2V0dGxlbWVudFNjb3JlID0gZTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXhTY29yZShlKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldFNldHRsZW1lbnRTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnNldHRsZW1lbnRTY29yZTtcbiAgICB9XG5cbiAgICBnZXRDb21ib051bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmNvbWJvTnVtO1xuICAgIH1cblxuICAgIGdldEhhc0Jyb2tlbkNvbWJvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaGFzQnJva2VuQ29tYm87XG4gICAgfVxuXG4gICAgc2V0SGFzQnJva2VuQ29tYm8oZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuaGFzQnJva2VuQ29tYm8gPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgZ2V0SGFzVHJpZ2dlcmVkRnVsbENvbWJvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaGFzVHJpZ2dlcmVkRnVsbENvbWJvO1xuICAgIH1cblxuICAgIHNldEhhc1RyaWdnZXJlZEZ1bGxDb21ibyhlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNUcmlnZ2VyZWRGdWxsQ29tYm8gPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgZ2V0SGFzVHJpZ2dlcmVkUmV3YXJkQ29tYm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5oYXNUcmlnZ2VyZWRSZXdhcmRDb21ibztcbiAgICB9XG5cbiAgICBzZXRIYXNUcmlnZ2VyZWRSZXdhcmRDb21ibyhlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNUcmlnZ2VyZWRSZXdhcmRDb21ibyA9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRMb2NrQ2xpY2tDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxvY2tDbGlja0NvdW50O1xuICAgIH1cblxuICAgIHNldExvY2tDbGlja0NvdW50KGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubG9ja0NsaWNrQ291bnQgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgYWRkTG9ja0NsaWNrQ291bnQoZSA9IDEpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubG9ja0NsaWNrQ291bnQgKz0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHNldENvbWJvTnVtKGUsIHQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5jb21ib051bSAhPT0gZSkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuY29tYm9OdW0gPSBlO1xuICAgICAgICAgICAgdCAmJiBlID4gdGhpcy5sb2NhbERhdGEuY3VyTWF4Q29tYm8gJiYgKHRoaXMubG9jYWxEYXRhLmN1ck1heENvbWJvID0gZSk7XG4gICAgICAgICAgICB0ICYmIGUgPiB0aGlzLmxvY2FsRGF0YS5tYXhDb21ibyAmJiAodGhpcy5sb2NhbERhdGEubWF4Q29tYm8gPSBlKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENvbWJvTnVtKGUsIHQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tYm9OdW0odGhpcy5sb2NhbERhdGEuY29tYm9OdW0gKyBlLCB0KTtcbiAgICB9XG5cbiAgICByZXNldENvbWJvTnVtKCkge1xuICAgICAgICB0aGlzLnNldENvbWJvTnVtKDAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8oZmFsc2UpO1xuICAgICAgICB0aGlzLnNldEhhc1RyaWdnZXJlZFJld2FyZENvbWJvKGZhbHNlKTtcbiAgICB9XG5cbiAgICBnZXRNYXhTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLm1heFNjb3JlO1xuICAgIH1cblxuICAgIGdldE1heENvbWJvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubWF4Q29tYm87XG4gICAgfVxuXG4gICAgZ2V0Q3VyTWF4Q29tYm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jdXJNYXhDb21ibztcbiAgICB9XG5cbiAgICBnZXRUb3RhbEdhbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudG90YWxHYW1lcztcbiAgICB9XG5cbiAgICBhZGRHYW1lQ291bnQoKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnRvdGFsR2FtZXMrKztcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIHJlY29yZFdpbigpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEud2luR2FtZXMrKztcbiAgICAgICAgdGhpcy5hZGRHYW1lQ291bnQoKTtcbiAgICB9XG5cbiAgICByZWNvcmRMb3NlKCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sb3NlR2FtZXMrKztcbiAgICAgICAgdGhpcy5hZGRHYW1lQ291bnQoKTtcbiAgICB9XG5cbiAgICBnZXRXaW5HYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLndpbkdhbWVzO1xuICAgIH1cblxuICAgIHNldExldmVsRGlmZmljdWx0eShlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsRGlmZmljdWx0eSA9IGU7XG4gICAgfVxuXG4gICAgZ2V0TGV2ZWxEaWZmaWN1bHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGV2ZWxEaWZmaWN1bHR5O1xuICAgIH1cblxuICAgIGdldEhpdFRpcHNOdW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyTW9kZWwubG9jYWxEYXRhLmhpdFRpcHM7XG4gICAgfVxuXG4gICAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lRGF0YV9jaGdIaXRUaXBzXCIpXG4gICAgY2hhbmdlSGl0VGlwc051bXMoZSwgdCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJNb2RlbC5sb2NhbERhdGEuaGl0VGlwcyA9IGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJNb2RlbC5sb2NhbERhdGEuaGl0VGlwcyArPSBlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmV2ZXJ0TnVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlck1vZGVsLmxvY2FsRGF0YS5yZXZlcnRJdGVtIHx8IDA7XG4gICAgfVxuXG4gICAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lRGF0YV9jaGdSZXZlcnRcIilcbiAgICBjaGFuZ2VSZXZlcnROdW1zKGUsIHQgPSBmYWxzZSkge1xuICAgICAgICBlID0gTnVtYmVyKGUpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5sb2NhbERhdGEucmV2ZXJ0SXRlbSA9IHQgPyBlIDogdGhpcy5nZXRSZXZlcnROdW1zKCkgKyBlO1xuICAgIH1cblxuICAgIGdldFJldml2ZU51bXMoKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNoYW5nZVJldml2ZU51bXMoZSwgdCA9IGZhbHNlKSB7XG4gICAgfVxuXG4gICAgZ2V0U2h1ZmZsZU51bXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJNb2RlbC5sb2NhbERhdGEuc2h1ZmZsZTtcbiAgICB9XG5cbiAgICBAbWoudHJhaXRFdmVudChcIkdhbWVEYXRhX2NoZ1NodWZmbGVcIilcbiAgICBjaGFuZ2VTaHVmZmxlTnVtcyhlLCB0ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIHRoaXMudXNlck1vZGVsLmxvY2FsRGF0YS5zaHVmZmxlID0gZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlck1vZGVsLmxvY2FsRGF0YS5zaHVmZmxlICs9IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMb3NlR2FtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sb3NlR2FtZXM7XG4gICAgfVxuXG4gICAgZ2V0V2luUmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIDAgPT09IHRoaXMubG9jYWxEYXRhLnRvdGFsR2FtZXMgPyAwIDogdGhpcy5sb2NhbERhdGEud2luR2FtZXMgLyB0aGlzLmxvY2FsRGF0YS50b3RhbEdhbWVzO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRSb3VuZFRpbWUoZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50Um91bmRUaW1lID0gZTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRSb3VuZFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jdXJyZW50Um91bmRUaW1lO1xuICAgIH1cblxuICAgIGdldEN1ckxldmVsQ29tYm9NYXhMaW1pdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmN1ckxldmVsQ29tYm9NYXhMaW1pdDtcbiAgICB9XG5cbiAgICBzZXRDdXJMZXZlbENvbWJvTWF4TGltaXQoZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJMZXZlbENvbWJvTWF4TGltaXQgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgZ2V0Q3VyTHZDYW5UcmlSZXdhcmRDb21ibygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmN1ckx2Q2FuVHJpUmV3YXJkQ29tYm87XG4gICAgfVxuXG4gICAgc2V0Q3VyTHZDYW5UcmlSZXdhcmRDb21ibyhlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1ckx2Q2FuVHJpUmV3YXJkQ29tYm8gPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgZ2V0UmV3YXJkQ29tYm9UcmlUaWxlQ250KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmV3YXJkQ29tYm9UcmlUaWxlQ250O1xuICAgIH1cblxuICAgIHNldFJld2FyZENvbWJvVHJpVGlsZUNudChlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnJld2FyZENvbWJvVHJpVGlsZUNudCA9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBzZXREaWVSZXN1bHQoZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5kaWVSZXN1bHQgPSBlO1xuICAgIH1cblxuICAgIGdldERpZVJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmRpZVJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRHYW1lUGxheU1ldGhvZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmdhbWVQbGF5TWV0aG9kO1xuICAgIH1cblxuICAgIHNldEdhbWVQbGF5TWV0aG9kKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuZ2FtZVBsYXlNZXRob2QgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgc2V0RGltZW5zaW9uTmFtZShlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmRpbWVuc2lvbk5hbWUgPSBlO1xuICAgIH1cblxuICAgIGdldERpbWVuc2lvbk5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5kaW1lbnNpb25OYW1lO1xuICAgIH1cblxuICAgIGdldEF1dG9Db2xsZWN0VGlsZXNOdW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5hdXRvQ29sbGVjdFRpbGVzTnVtO1xuICAgIH1cblxuICAgIGFkZEF1dG9Db2xsZWN0VGlsZXNOdW0oZSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5hdXRvQ29sbGVjdFRpbGVzTnVtICs9IGU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICByZXNldEdhbWVEYXRhKCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5wb3B1cEZhaWxDbnQgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJNYXhDb21ibyA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc2V0dGxlbWVudFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY29tYm9OdW0gPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNCcm9rZW5Db21ibyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sb2NrQ2xpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsRGF0YSA9IFwiXCI7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRSb3VuZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJMZXZlbENvbWJvTWF4TGltaXQgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5jdXJMdkNhblRyaVJld2FyZENvbWJvID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucmV3YXJkQ29tYm9UcmlUaWxlQ250ID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS51c2VkU2h1ZmZsZSA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRIaXRUaXBzID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlZFJldmVydCA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRSZXZpdmUgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS51c2VkTWFnbmV0ID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuZ290U2h1ZmZsZSA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmdvdEhpdFRpcHMgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5nb3RSZXZlcnQgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5nb3RSZXZpdmUgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5nb3RNYWduZXQgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS50b3RhbFRpbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmNsZWFyVGlsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuc3RlcENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2xlYXJSZWNvcmRzID0gW107XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmhhc1RyaWdnZXJlZEZ1bGxDb21ibyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5oYXNUcmlnZ2VyZWRSZXdhcmRDb21ibyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5hdXRvQ29sbGVjdFRpbGVzTnVtID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2xlYXJJbnRlcnZhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdENsZWFyVGltZSA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLm5vbkF1dG9TdGVwQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWFudWFsTWF0Y2hUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubWF4TWFudWFsTWF0Y2hUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEudG9vbFVzZVJlY29yZHMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGF5ZXJUaWxlQ291bnQgPSBbXTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuaW5pdFNwZWNpYWxDYXJkcyA9IFwiXCI7XG4gICAgICAgIHRoaXMudXBkYXRlTGFzdE9wVGltZSgpO1xuICAgICAgICB2YXIgZSA9IHRoaXMudXNlck1vZGVsLmdldERvdFRyYWNrZXJCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpO1xuICAgICAgICBlICYmIGUucmVzZXRHYW1lRGF0YSgpO1xuICAgIH1cblxuICAgIGdldEdhbWVJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxldmVsSW5kZXggKyBcIjpcIiArIHRoaXMubG9jYWxEYXRhLnJlcGxheUNvdW50O1xuICAgIH1cblxuICAgIGdldExhc3QxMEdhbWVSZWNvcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0MTBHYW1lUmVjb3JkO1xuICAgIH1cblxuICAgIGdldFdpblN0cmVhaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLndpblN0cmVhaztcbiAgICB9XG5cbiAgICBnZXRMZXZlbEdlbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGV2ZWxHZW5JbmRleCB8fCAwO1xuICAgIH1cblxuICAgIGluY3JlbWVudExldmVsR2VuSW5kZXgoKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxldmVsR2VuSW5kZXggKz0gMTtcbiAgICB9XG5cbiAgICBnZXRSZWFsU2NvcmUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLmdldFNjb3JlKCksIHRoaXMuZ2V0U2V0dGxlbWVudFNjb3JlKCkpO1xuICAgIH1cblxuICAgIGdldEVudGVyQW5pbWF0aW9uU3RyYXRlZ3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5lbnRlckFuaW1hdGlvblN0cmF0ZWd5IHx8IFwiXCI7XG4gICAgfVxuXG4gICAgc2V0RW50ZXJBbmltYXRpb25TdHJhdGVneShlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmVudGVyQW5pbWF0aW9uU3RyYXRlZ3kgPSBlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTm9uQXV0b1N0ZXBDb3VudCgpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5sYXN0TWFudWFsTWF0Y2hUaW1lO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWFudWFsTWF0Y2hUaW1lID0gdGhpcy5nZXRSZWFsUGxheVRpbWUoKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmxvY2FsRGF0YS5sYXN0TWFudWFsTWF0Y2hUaW1lIC0gZTtcbiAgICAgICAgdCA+IHRoaXMubG9jYWxEYXRhLm1heE1hbnVhbE1hdGNoVGltZSAmJiAodGhpcy5sb2NhbERhdGEubWF4TWFudWFsTWF0Y2hUaW1lID0gdCk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLm5vbkF1dG9TdGVwQ291bnQrKztcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldE5vbkF1dG9TdGVwQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5ub25BdXRvU3RlcENvdW50O1xuICAgIH1cblxuICAgIHVwZGF0ZUNsZWFyVGltZUludGVydmFsKCkge1xuICAgICAgICBpZiAoMCAhPT0gdGhpcy5sb2NhbERhdGEubGFzdENsZWFyVGltZSkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5saW1pdENsZWFySW50ZXJ2YWxzLFxuICAgICAgICAgICAgICAgIHQgPSAoRGF0ZS5ub3coKSAtIHRoaXMubG9jYWxEYXRhLmxhc3RDbGVhclRpbWUpIC8gMTAwMDtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RDbGVhclRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmxvY2FsRGF0YS5jbGVhckludGVydmFscztcbiAgICAgICAgICAgIG8ucHVzaCh0KTtcbiAgICAgICAgICAgIG8uc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlIC0gdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbyA9IG8uc2xpY2UoMCwgZSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5jbGVhckludGVydmFscyA9IG87XG4gICAgICAgIH0gZWxzZSB0aGlzLmxvY2FsRGF0YS5sYXN0Q2xlYXJUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBdmdDbGVhckludGVydmFscygpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5saW1pdEF2Z0NsZWFySW50ZXJ2YWxzLFxuICAgICAgICAgICAgdCA9IHRoaXMubG9jYWxEYXRhLmF2Z0NsZWFySW50ZXJ2YWxzLFxuICAgICAgICAgICAgbyA9IHRoaXMubG9jYWxEYXRhLmNsZWFySW50ZXJ2YWxzLFxuICAgICAgICAgICAgbiA9IG8ubGVuZ3RoID4gMCA/IG8ucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgKyB0O1xuICAgICAgICAgICAgfSwgMCkgLyBvLmxlbmd0aCA6IDA7XG4gICAgICAgIHQudW5zaGlmdChuKTtcbiAgICAgICAgdCA9IHQuc2xpY2UoMCwgZSk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmF2Z0NsZWFySW50ZXJ2YWxzID0gdDtcbiAgICAgICAgdC5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlICsgdDtcbiAgICAgICAgfSwgMCksIHQubGVuZ3RoO1xuICAgIH1cblxuICAgIEBtai50cmFpdEV2ZW50KFwiR2FtZURhdGFfZ2V0QmFzZU9wVGltZVwiKVxuICAgIGdldFVzZXJCYXNlT3BUaW1lKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmF2Z0NsZWFySW50ZXJ2YWxzO1xuICAgICAgICByZXR1cm4gZS5sZW5ndGggPiAwID8gZS5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlICsgdDtcbiAgICAgICAgfSwgMCkgLyBlLmxlbmd0aCA6IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlTGFzdE9wVGltZSgpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdE9wVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RPcFJlYWxUaW1lID0gdGhpcy5nZXRDdXJyZW50Um91bmRUaW1lKCk7XG4gICAgfVxuXG4gICAgZ2V0TGFzdE9wVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxhc3RPcFRpbWU7XG4gICAgfVxuXG4gICAgZ2V0TGFzdE9wUmVhbFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0T3BSZWFsVGltZTtcbiAgICB9XG5cbiAgICBzZXRMaW1pdENsZWFySW50ZXJ2YWxzKGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGltaXRDbGVhckludGVydmFscyA9IGU7XG4gICAgfVxuXG4gICAgc2V0TGltaXRBdmdDbGVhckludGVydmFscyhlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxpbWl0QXZnQ2xlYXJJbnRlcnZhbHMgPSBlO1xuICAgIH1cblxuICAgIHJlY29yZENsZWFyKGUpIHtcbiAgICAgICAgdGhpcy5hZGRDbGVhclRpbGVDb3VudChlLmxlbmd0aCk7XG4gICAgICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEuY2xlYXJSZWNvcmRzO1xuICAgICAgICB0LnB1c2goWy4uLmVdKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY2xlYXJSZWNvcmRzID0gdDtcbiAgICB9XG5cbiAgICBnZXRDbGVhclJlY29yZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jbGVhclJlY29yZHM7XG4gICAgfVxuXG4gICAgYWRkUG9wdXBGYWlsQ250KCkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5wb3B1cEZhaWxDbnQrKztcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGdldFBvcHVwRmFpbENudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnBvcHVwRmFpbENudDtcbiAgICB9XG5cbiAgICByZWNvcmRUb29sVXNlKGUsIHQpIHtcbiAgICAgICAgdmFyIG8gPSB0ID09PSBFU2h1ZmZsZUZyb20uQ2xhc3NpY1Jldml2ZSB8fCB0ID09PSBFU2h1ZmZsZUZyb20uUmV2aXZlID8gMCA6IDEsXG4gICAgICAgICAgICBuID0gdGhpcy5nZXRUb3RhbFRpbGVDb3VudCgpID4gMCA/IHRoaXMuZ2V0Q2xlYXJUaWxlQ291bnQoKSAvIHRoaXMuZ2V0VG90YWxUaWxlQ291bnQoKSA6IDAsXG4gICAgICAgICAgICBpID0gdGhpcy5sb2NhbERhdGEudG9vbFVzZVJlY29yZHM7XG4gICAgICAgIGkucHVzaChbZSwgbywgbl0pO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS50b29sVXNlUmVjb3JkcyA9IGk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICBnZXRUb29sVXNlUmVjb3JkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRvb2xVc2VSZWNvcmRzO1xuICAgIH1cblxuICAgIHNldExheWVyVGlsZUNvdW50KGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGF5ZXJUaWxlQ291bnQgPSBlO1xuICAgIH1cblxuICAgIGdldExheWVyVGlsZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubGF5ZXJUaWxlQ291bnQ7XG4gICAgfVxuXG4gICAgc2V0SW5pdFNwZWNpYWxDYXJkcyhlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmluaXRTcGVjaWFsQ2FyZHMgPSBlO1xuICAgIH1cblxuICAgIGdldEluaXRTcGVjaWFsQ2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5pbml0U3BlY2lhbENhcmRzO1xuICAgIH1cblxuICAgIHRvb2xDaGFuZ2UoZSwgdCkge1xuICAgICAgICBpZiAodCA8IDApIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgY2FzZSBFSXRlbUlkLlNodWZmbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlZFNodWZmbGUgKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEVJdGVtSWQuSGludDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS51c2VkSGl0VGlwcyArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1JZC5SZXZlcnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlZFJldmVydCArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1JZC5SZXZpdmU6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlZFJldml2ZSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1JZC5NYWduZXQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlZE1hZ25ldCArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0ID4gMCkgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICBjYXNlIEVJdGVtSWQuU2h1ZmZsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5nb3RTaHVmZmxlICs9IHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEVJdGVtSWQuSGludDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5nb3RIaXRUaXBzICs9IHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEVJdGVtSWQuUmV2ZXJ0OlxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmdvdFJldmVydCArPSB0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFSXRlbUlkLlJldml2ZTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5nb3RSZXZpdmUgKz0gdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRUl0ZW1JZC5NYWduZXQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuZ290TWFnbmV0ICs9IHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWoudHJhaXRFdmVudChcIkdhbWVEYXRhX2lzSGl0VGlwRW5vdWdoXCIpXG4gICAgaXNIaXRUaXBzRW5vdWdoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRIaXRUaXBzTnVtcygpID4gMDtcbiAgICB9XG5cbiAgICBAbWoudHJhaXRFdmVudChcIkdhbWVEYXRhX2lzUmV2ZXJ0RW5vdWdoXCIpXG4gICAgaXNSZXZlcnRFbm91Z2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJldmVydE51bXMoKSA+IDA7XG4gICAgfVxuXG4gICAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lRGF0YV9pc1Jldml2ZUVub3VnaFwiKVxuICAgIGlzUmV2aXZlRW5vdWdoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXZpdmVOdW1zKCkgPiAwO1xuICAgIH1cblxuICAgIEBtai50cmFpdEV2ZW50KFwiR2FtZURhdGFfaXNTaHVmZmxlRW5vdWdoXCIpXG4gICAgaXNTaHVmZmxlRW5vdWdoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaHVmZmxlTnVtcygpID4gMDtcbiAgICB9XG5cbiAgICBnZXRBdmdNYW51YWxNYXRjaFRpbWUoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEubGFzdE1hbnVhbE1hdGNoVGltZSxcbiAgICAgICAgICAgIHQgPSB0aGlzLmxvY2FsRGF0YS5ub25BdXRvU3RlcENvdW50O1xuICAgICAgICByZXR1cm4gdCA+IDAgPyBlIC8gdCA6IDA7XG4gICAgfVxuXG4gICAgZ2V0QXZnTWFudWFsTWF0Y2hTYW1wbGVTdGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5hdmdNYW51YWxNYXRjaFNhbXBsZVN0ZDtcbiAgICB9XG5cbiAgICBnZXRBdmdNYW51YWxNYXRjaFNhbXBsZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYXZnTWFudWFsTWF0Y2hTYW1wbGVDb3VudDtcbiAgICB9XG5cbiAgICBnZXRBdmdNYW51YWxNYXRjaFNhbXBsZVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYXZnTWFudWFsTWF0Y2hTYW1wbGVWYWx1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYW51YWxNYXRjaFNhbXBsZSgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5sb2NhbERhdGEubm9uQXV0b1N0ZXBDb3VudCA8PSAwIHx8IHRoaXMubG9jYWxEYXRhLmxhc3RNYW51YWxNYXRjaFRpbWUgPiA2MDAgfHwgdGhpcy5sb2NhbERhdGEubWF4TWFudWFsTWF0Y2hUaW1lID4gMzApKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0QXZnTWFudWFsTWF0Y2hUaW1lKCksXG4gICAgICAgICAgICAgICAgdCA9IHRoaXMubG9jYWxEYXRhLmF2Z01hbnVhbE1hdGNoU2FtcGxlQ291bnQsXG4gICAgICAgICAgICAgICAgbyA9IHRoaXMubG9jYWxEYXRhLmF2Z01hbnVhbE1hdGNoU2FtcGxlVmFsdWUsXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMubG9jYWxEYXRhLmF2Z01hbnVhbE1hdGNoU2FtcGxlU3RkLFxuICAgICAgICAgICAgICAgIGkgPSBvICsgKGUgLSBvKSAvICh0ICsgMSksXG4gICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICBpZiAodCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAoKHQgLSAxKSAqIG4gKiBuICsgKGUgLSBvKSAqIChlIC0gaSkpIC8gdDtcbiAgICAgICAgICAgICAgICByID0gTWF0aC5zcXJ0KE1hdGgubWF4KDAsIGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmF2Z01hbnVhbE1hdGNoU2FtcGxlQ291bnQgPSB0ICsgMTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmF2Z01hbnVhbE1hdGNoU2FtcGxlVmFsdWUgPSBpO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuYXZnTWFudWFsTWF0Y2hTYW1wbGVTdGQgPSByO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWR2YW5jZVBsYXlUaW1lKGUpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BQbGF5VGltZSB8fCAodGhpcy5wbGF5VGltZSArPSBlKTtcbiAgICB9XG5cbiAgICBlbnRlckdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVudGVyR2FtZVRpbWUgPSB0aGlzLmdldEN1cnJlbnRSb3VuZFRpbWUoKTtcbiAgICAgICAgdGhpcy5pc1N0b3BQbGF5VGltZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0b3BQbGF5VGltZSgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BQbGF5VGltZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0UmVhbFBsYXlUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5VGltZSArIHRoaXMuZW50ZXJHYW1lVGltZTtcbiAgICB9XG5cbiAgICBnZXRTb2x2ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc29sdmVycztcbiAgICB9XG59Il19