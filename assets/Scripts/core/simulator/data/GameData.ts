import Model from "../../../framework/data/Model";

import {EShuffleFrom} from "../../../simulator/constant/GameInputEnum";
import {EItemId, MjGameType} from "../constant/GameTypeEnums";

@mj.class("GameData")
export default class GameData extends Model {
    playTime = 0;
    enterGameTime = 0;
    isStopPlayTime = false;

    get userModel() {
        return cc.js.getClassByName("UserModel").getInstance();
    }

    get gameType() {
        return this._gameType;
    }

    constructor() {
        super();
        this.isLocalEmpty(this.localData.levelIndex) && (this.localData.levelIndex = "");
        this.isLocalEmpty(this.localData.levelName) && (this.localData.levelName = "");
        this.isLocalEmpty(this.localData.totalTileCount) && (this.localData.totalTileCount = 0);
        this.isLocalEmpty(this.localData.clearTileCount) && (this.localData.clearTileCount = 0);
        this.isLocalEmpty(this.localData.stepCount) && (this.localData.stepCount = 0);
        this.isLocalEmpty(this.localData.score) && (this.localData.score = 0);
        this.isLocalEmpty(this.localData.settlementScore) && (this.localData.settlementScore = 0);
        this.isLocalEmpty(this.localData.levelId) && (this.localData.levelId = 1);
        this.isLocalEmpty(this.localData.replayCount) && (this.localData.replayCount = 0);
        this.isLocalEmpty(this.localData.gameCount) && (this.localData.gameCount = 0);
        this.isLocalEmpty(this.localData.currentLevelId) && (this.localData.currentLevelId = 1);
        this.isLocalEmpty(this.localData.levelData) && (this.localData.levelData = "");
        this.isLocalEmpty(this.localData.originalLevelData) && (this.localData.originalLevelData = "");
        this.isLocalEmpty(this.localData.originalLevelDataWithSpecialCards) && (this.localData.originalLevelDataWithSpecialCards = "");
        this.isLocalEmpty(this.localData.originalLevelDataWithCardId) && (this.localData.originalLevelDataWithCardId = "");
        this.isLocalEmpty(this.localData.comboNum) && (this.localData.comboNum = 0);
        this.isLocalEmpty(this.localData.hasBrokenCombo) && (this.localData.hasBrokenCombo = false);
        this.isLocalEmpty(this.localData.lockClickCount) && (this.localData.lockClickCount = 0);
        this.isLocalEmpty(this.localData.hasTriggeredFullCombo) && (this.localData.hasTriggeredFullCombo = false);
        this.isLocalEmpty(this.localData.hasTriggeredRewardCombo) && (this.localData.hasTriggeredRewardCombo = false);
        this.isLocalEmpty(this.localData.maxScore) && (this.localData.maxScore = 0);
        this.isLocalEmpty(this.localData.maxCombo) && (this.localData.maxCombo = 0);
        this.isLocalEmpty(this.localData.curMaxCombo) && (this.localData.curMaxCombo = 0);
        this.isLocalEmpty(this.localData.totalGames) && (this.localData.totalGames = 0);
        this.isLocalEmpty(this.localData.winGames) && (this.localData.winGames = 0);
        this.isLocalEmpty(this.localData.loseGames) && (this.localData.loseGames = 0);
        this.isLocalEmpty(this.localData.levelDifficulty) && (this.localData.levelDifficulty = 0);
        this.isLocalEmpty(this.localData.currentRoundTime) && (this.localData.currentRoundTime = 0);
        this.isLocalEmpty(this.localData.lastUpdateTime) && (this.localData.lastUpdateTime = Date.now());
        this.isLocalEmpty(this.localData.dieResult) && (this.localData.dieResult = 1);
        this.isLocalEmpty(this.localData.curLevelComboMaxLimit) && (this.localData.curLevelComboMaxLimit = 0);
        this.isLocalEmpty(this.localData.curLvCanTriRewardCombo) && (this.localData.curLvCanTriRewardCombo = 0);
        this.isLocalEmpty(this.localData.rewardComboTriTileCnt) && (this.localData.rewardComboTriTileCnt = 0);
        this.isLocalEmpty(this.localData.tileTypes) && (this.localData.tileTypes = "");
        this.isLocalEmpty(this.localData.tileStrategies) && (this.localData.tileStrategies = "");
        this.isLocalEmpty(this.localData.tileId2Type) && (this.localData.tileId2Type = "");
        this.isLocalEmpty(this.localData.tileTypesExtra) && (this.localData.tileTypesExtra = "");
        this.isLocalEmpty(this.localData.cardId2Type) && (this.localData.cardId2Type = "");
        this.isLocalEmpty(this.localData.usedShuffle) && (this.localData.usedShuffle = 0);
        this.isLocalEmpty(this.localData.usedHitTips) && (this.localData.usedHitTips = 0);
        this.isLocalEmpty(this.localData.usedRevert) && (this.localData.usedRevert = 0);
        this.isLocalEmpty(this.localData.usedRevive) && (this.localData.usedRevive = 0);
        this.isLocalEmpty(this.localData.usedMagnet) && (this.localData.usedMagnet = 0);
        this.isLocalEmpty(this.localData.replaceInfo) && (this.localData.replaceInfo = "");
        this.isLocalEmpty(this.localData.gamePlayMethod) && (this.localData.gamePlayMethod = 0);
        this.isLocalEmpty(this.localData.autoCollectTilesNum) && (this.localData.autoCollectTilesNum = 0);
        this.isLocalEmpty(this.localData.last10GameRecord) && (this.localData.last10GameRecord = []);
        this.isLocalEmpty(this.localData.winStreak) && (this.localData.winStreak = 0);
        this.isLocalEmpty(this.localData.levelGenIndex) && (this.localData.levelGenIndex = 0);
        this.isLocalEmpty(this.localData.enterAnimationStrategy) && (this.localData.enterAnimationStrategy = "");
        this.isLocalEmpty(this.localData.nonAutoStepCount) && (this.localData.nonAutoStepCount = 0);
        this.isLocalEmpty(this.localData.clearIntervals) && (this.localData.clearIntervals = []);
        this.isLocalEmpty(this.localData.lastClearTime) && (this.localData.lastClearTime = 0);
        this.isLocalEmpty(this.localData.limitClearIntervals) && (this.localData.limitClearIntervals = 3);
        this.isLocalEmpty(this.localData.limitAvgClearIntervals) && (this.localData.limitAvgClearIntervals = 3);
        this.isLocalEmpty(this.localData.avgClearIntervals) && (this.localData.avgClearIntervals = []);
        this.isLocalEmpty(this.localData.lastOpTime) && (this.localData.lastOpTime = 0);
        this.isLocalEmpty(this.localData.lastOpRealTime) && (this.localData.lastOpRealTime = 0);
        this._gameType === MjGameType.Normal && 0 === this.localData.levelGenIndex && this.localData.levelId > 1 && this.compatLevelGenIndex();
        this.isLocalEmpty(this.localData.clearRecords) && (this.localData.clearRecords = []);
        this.isLocalEmpty(this.localData.theme) && (this.localData.theme = "");
        this.isLocalEmpty(this.localData.hasShowResetSkinBtn) && (this.localData.hasShowResetSkinBtn = 0);
        this.isLocalEmpty(this.localData.popupFailCnt) && (this.localData.popupFailCnt = 0);
        this.isLocalEmpty(this.localData.toolUseRecords) && (this.localData.toolUseRecords = []);
        this.isLocalEmpty(this.localData.cardMaterialID) && (this.localData.cardMaterialID = 0);
        this.isLocalEmpty(this.localData.layerTileCount) && (this.localData.layerTileCount = []);
        this.isLocalEmpty(this.localData.initSpecialCards) && (this.localData.initSpecialCards = "");
        this.isLocalEmpty(this.localData.gotShuffle) && (this.localData.gotShuffle = 0);
        this.isLocalEmpty(this.localData.gotHitTips) && (this.localData.gotHitTips = 0);
        this.isLocalEmpty(this.localData.gotRevert) && (this.localData.gotRevert = 0);
        this.isLocalEmpty(this.localData.gotRevive) && (this.localData.gotRevive = 0);
        this.isLocalEmpty(this.localData.gotMagnet) && (this.localData.gotMagnet = 0);
        this.isLocalEmpty(this.localData.lastManualMatchTime) && (this.localData.lastManualMatchTime = 0);
        this.isLocalEmpty(this.localData.maxManualMatchTime) && (this.localData.maxManualMatchTime = 0);
        this.isLocalEmpty(this.localData.avgManualMatchSampleCount) && (this.localData.avgManualMatchSampleCount = 0);
        this.isLocalEmpty(this.localData.avgManualMatchSampleValue) && (this.localData.avgManualMatchSampleValue = 0);
        this.isLocalEmpty(this.localData.avgManualMatchSampleStd) && (this.localData.avgManualMatchSampleStd = 0);
        this.isLocalEmpty(this.localData.solvers) && (this.localData.solvers = "");
    }

    isLocalEmpty(e) {
        return null == e || "" === e;
    }

    setTheme(e) {
        this.localData.theme = e;
    }

    getTheme() {
        return this.localData.theme;
    }

    getCardMaterialID() {
        return this.localData.cardMaterialID || 0;
    }

    setCardMaterialID(e) {
        this.localData.cardMaterialID = e;
    }

    setHasShowResetSkinBtn(e) {
        this.localData.hasShowResetSkinBtn = e;
    }

    getHasShowResetSkinBtn() {
        return this.localData.hasShowResetSkinBtn;
    }

    compatLevelGenIndex() {
        var e = this.localData.levelId,
            t = cc.js.getClassByName("ExtractTool").getInstance().getRealLevelID(e);
        this.localData.levelGenIndex = Math.max(0, t);
    }

    setTotalTileCount(e) {
        this.localData.totalTileCount = e;
        this.localData.lastUpdateTime = Date.now();
    }

    addTotalTileCount(e) {
        this.localData.totalTileCount += e;
        this.localData.lastUpdateTime = Date.now();
    }

    getTotalTileCount() {
        return this.localData.totalTileCount;
    }

    addClearTileCount(e) {
        this.localData.clearTileCount += e;
        this.localData.lastUpdateTime = Date.now();
    }

    getClearTileCount() {
        return this.localData.clearTileCount;
    }

    addStepCount(e) {
        this.localData.stepCount += e;
        this.localData.lastUpdateTime = Date.now();
    }

    getStepCount() {
        return this.localData.stepCount;
    }

    getLevelId() {
        return this.localData.levelId;
    }

    setLevelId(e) {
        this.localData.levelId = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setLevelIndex(e) {
        if (void 0 !== e) {
            this.localData.levelIndex = String(e);
            this.localData.lastUpdateTime = Date.now();
        }
    }

    setLevelName(e) {
        if (void 0 !== e) {
            this.localData.levelName = e;
            this.localData.lastUpdateTime = Date.now();
        }
    }

    getLevelIndex() {
        return this.localData.levelIndex;
    }

    getLevelName() {
        return this.localData.levelName;
    }

    getCurrentLevelId() {
        return this.localData.currentLevelId;
    }

    setStartGameTime(e) {
        this.localData.startGameTime = e;
    }

    getStartGameTime() {
        return this.localData.startGameTime;
    }

    setIsEnd(e) {
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
    }

    updateLast10GameRecord(e) {
        var t = this.localData.last10GameRecord,
            o = {
                gameId: this.getGameCount(),
                win: e,
                score: this.getRealScore()
            };
        t.push(o);
        t.length > 10 && t.splice(0, t.length - 10);
        this.localData.last10GameRecord = t;
        if (e) {
            this.localData.winStreak++;
        } else {
            this.localData.winStreak = 0;
        }
        this.localData.lastUpdateTime = Date.now();
    }

    updatePlayCount() {
        this.localData.replayCount++;
        this.localData.gameCount++;
        this.userModel.addTotalGames();
    }

    getLevelData() {
        return this.localData.levelData;
    }

    getReplayCount() {
        return this.localData.replayCount;
    }

    getGameCount() {
        return this.localData.gameCount;
    }

    saveLevelData(e) {
        this.localData.levelData = e;
        this.localData.lastUpdateTime = Date.now();
    }

    saveOriWithSpecialCards(e) {
        this.localData.originalLevelDataWithSpecialCards = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getOriginalLevelData() {
        return this.localData.originalLevelData;
    }

    getOriWithSpecialCards() {
        return this.localData.originalLevelDataWithSpecialCards;
    }

    setOriginalLevelDataWithCardId(e) {
        this.localData.originalLevelDataWithCardId = e;
    }

    getOriginalLevelDataWithCardId() {
        return this.localData.originalLevelDataWithCardId;
    }

    setLevelInfo(e, t, o = "", n = "") {
        this.localData.levelId = e;
        this.localData.levelData = t;
        this.localData.originalLevelData = o || t;
        this.localData.solvers = n;
        this.localData.lastUpdateTime = Date.now();
        this.localData.currentLevelId = e;
    }

    setTileTypes(e) {
        this.localData.tileTypes = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setTileStrategies(e) {
        this.localData.tileStrategies = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getTileStrategies() {
        return this.localData.tileStrategies;
    }

    getCardId2Type() {
        return this.localData.cardId2Type;
    }

    setTileId2Type(e) {
        this.localData.tileId2Type = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setCardId2Type(e) {
        this.localData.cardId2Type = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setTileTypesExtra(e) {
        this.localData.tileTypesExtra = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setReplaceInfo(e) {
        this.localData.replaceInfo = JSON.stringify(e);
        this.localData.lastUpdateTime = Date.now();
    }

    getReplaceInfo() {
        var e = {};
        try {
            if (this.localData.replaceInfo) {
                var t = JSON.parse(this.localData.replaceInfo);
                "object" == typeof t && (e = t);
            }
        } catch (e) {
        }
        return e;
    }

    getTileTypes() {
        return this.localData.tileTypes;
    }

    getTileId2Type() {
        return this.localData.tileId2Type;
    }

    getTileTypesExtra() {
        return this.localData.tileTypesExtra;
    }

    getScore() {
        return this.localData.score;
    }

    getUsedShuffle() {
        return this.localData.usedShuffle;
    }

    getUsedHitTips() {
        return this.localData.usedHitTips;
    }

    getUsedRevert() {
        return this.localData.usedRevert;
    }

    getUsedRevive() {
        return this.localData.usedRevive;
    }

    getUsedMagnet() {
        return this.localData.usedMagnet;
    }

    getGotShuffle() {
        return this.localData.gotShuffle;
    }

    getGotHitTips() {
        return this.localData.gotHitTips;
    }

    getGotRevert() {
        return this.localData.gotRevert;
    }

    getGotRevive() {
        return this.localData.gotRevive;
    }

    getGotMagnet() {
        return this.localData.gotMagnet;
    }

    setScore(e, t = true) {
        if (this.localData.score !== e) {
            this.localData.score = e;
            t && this.updateMaxScore(e);
            this.localData.lastUpdateTime = Date.now();
        }
    }

    updateMaxScore(e) {
        if (e > this.localData.maxScore) {
            this.localData.maxScore = e;
            e > this.userModel.getMaxScore() && this.userModel.setMaxScore(e);
        }
    }

    addScore(e, t = true) {
        this.setScore(this.localData.score + e, t);
    }

    setSettlementScore(e) {
        this.localData.settlementScore = e;
        this.updateMaxScore(e);
        this.localData.lastUpdateTime = Date.now();
    }

    getSettlementScore() {
        return this.localData.settlementScore;
    }

    getComboNum() {
        return this.localData.comboNum;
    }

    getHasBrokenCombo() {
        return this.localData.hasBrokenCombo;
    }

    setHasBrokenCombo(e = true) {
        this.localData.hasBrokenCombo = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getHasTriggeredFullCombo() {
        return this.localData.hasTriggeredFullCombo;
    }

    setHasTriggeredFullCombo(e = true) {
        this.localData.hasTriggeredFullCombo = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getHasTriggeredRewardCombo() {
        return this.localData.hasTriggeredRewardCombo;
    }

    setHasTriggeredRewardCombo(e = true) {
        this.localData.hasTriggeredRewardCombo = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getLockClickCount() {
        return this.localData.lockClickCount;
    }

    setLockClickCount(e) {
        this.localData.lockClickCount = e;
        this.localData.lastUpdateTime = Date.now();
    }

    addLockClickCount(e = 1) {
        this.localData.lockClickCount += e;
        this.localData.lastUpdateTime = Date.now();
    }

    setComboNum(e, t = true) {
        if (this.localData.comboNum !== e) {
            this.localData.comboNum = e;
            t && e > this.localData.curMaxCombo && (this.localData.curMaxCombo = e);
            t && e > this.localData.maxCombo && (this.localData.maxCombo = e);
            this.localData.lastUpdateTime = Date.now();
        }
    }

    addComboNum(e, t = true) {
        this.setComboNum(this.localData.comboNum + e, t);
    }

    resetComboNum() {
        this.setComboNum(0, false);
        this.setHasTriggeredFullCombo(false);
        this.setHasTriggeredRewardCombo(false);
    }

    getMaxScore() {
        return this.localData.maxScore;
    }

    getMaxCombo() {
        return this.localData.maxCombo;
    }

    getCurMaxCombo() {
        return this.localData.curMaxCombo;
    }

    getTotalGames() {
        return this.localData.totalGames;
    }

    addGameCount() {
        this.localData.totalGames++;
        this.localData.lastUpdateTime = Date.now();
    }

    recordWin() {
        this.localData.winGames++;
        this.addGameCount();
    }

    recordLose() {
        this.localData.loseGames++;
        this.addGameCount();
    }

    getWinGames() {
        return this.localData.winGames;
    }

    setLevelDifficulty(e) {
        this.localData.levelDifficulty = e;
    }

    getLevelDifficulty() {
        return this.localData.levelDifficulty;
    }

    getHitTipsNums() {
        return this.userModel.localData.hitTips;
    }

    @mj.traitEvent("GameData_chgHitTips")
    changeHitTipsNums(e, t = false) {
        if (t) {
            this.userModel.localData.hitTips = e;
        } else {
            this.userModel.localData.hitTips += e;
        }
    }

    getRevertNums() {
        return this.userModel.localData.revertItem || 0;
    }

    @mj.traitEvent("GameData_chgRevert")
    changeRevertNums(e, t = false) {
        e = Number(e);
        this.userModel.localData.revertItem = t ? e : this.getRevertNums() + e;
    }

    getReviveNums() {
        return 0;
    }

    changeReviveNums(e, t = false) {
    }

    getShuffleNums() {
        return this.userModel.localData.shuffle;
    }

    @mj.traitEvent("GameData_chgShuffle")
    changeShuffleNums(e, t = false) {
        if (t) {
            this.userModel.localData.shuffle = e;
        } else {
            this.userModel.localData.shuffle += e;
        }
    }

    getLoseGames() {
        return this.localData.loseGames;
    }

    getWinRate() {
        return 0 === this.localData.totalGames ? 0 : this.localData.winGames / this.localData.totalGames;
    }

    setCurrentRoundTime(e) {
        this.localData.currentRoundTime = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getCurrentRoundTime() {
        return this.localData.currentRoundTime;
    }

    getCurLevelComboMaxLimit() {
        return this.localData.curLevelComboMaxLimit;
    }

    setCurLevelComboMaxLimit(e) {
        this.localData.curLevelComboMaxLimit = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getCurLvCanTriRewardCombo() {
        return this.localData.curLvCanTriRewardCombo;
    }

    setCurLvCanTriRewardCombo(e) {
        this.localData.curLvCanTriRewardCombo = e;
        this.localData.lastUpdateTime = Date.now();
    }

    getRewardComboTriTileCnt() {
        return this.localData.rewardComboTriTileCnt;
    }

    setRewardComboTriTileCnt(e) {
        this.localData.rewardComboTriTileCnt = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setDieResult(e) {
        this.localData.dieResult = e;
    }

    getDieResult() {
        return this.localData.dieResult;
    }

    getGamePlayMethod() {
        return this.localData.gamePlayMethod;
    }

    setGamePlayMethod(e) {
        this.localData.gamePlayMethod = e;
        this.localData.lastUpdateTime = Date.now();
    }

    setDimensionName(e) {
        this.localData.dimensionName = e;
    }

    getDimensionName() {
        return this.localData.dimensionName;
    }

    getAutoCollectTilesNum() {
        return this.localData.autoCollectTilesNum;
    }

    addAutoCollectTilesNum(e) {
        this.localData.autoCollectTilesNum += e;
        this.localData.lastUpdateTime = Date.now();
    }

    resetGameData() {
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
    }

    getGameId() {
        return this.localData.levelIndex + ":" + this.localData.replayCount;
    }

    getLast10GameRecord() {
        return this.localData.last10GameRecord;
    }

    getWinStreak() {
        return this.localData.winStreak;
    }

    getLevelGenIndex() {
        return this.localData.levelGenIndex || 0;
    }

    incrementLevelGenIndex() {
        this.localData.levelGenIndex += 1;
    }

    getRealScore() {
        return Math.max(this.getScore(), this.getSettlementScore());
    }

    getEnterAnimationStrategy() {
        return this.localData.enterAnimationStrategy || "";
    }

    setEnterAnimationStrategy(e) {
        this.localData.enterAnimationStrategy = e;
        this.localData.lastUpdateTime = Date.now();
    }

    updateNonAutoStepCount() {
        var e = this.localData.lastManualMatchTime;
        this.localData.lastManualMatchTime = this.getRealPlayTime();
        var t = this.localData.lastManualMatchTime - e;
        t > this.localData.maxManualMatchTime && (this.localData.maxManualMatchTime = t);
        this.localData.nonAutoStepCount++;
        this.localData.lastUpdateTime = Date.now();
    }

    getNonAutoStepCount() {
        return this.localData.nonAutoStepCount;
    }

    updateClearTimeInterval() {
        if (0 !== this.localData.lastClearTime) {
            var e = this.localData.limitClearIntervals,
                t = (Date.now() - this.localData.lastClearTime) / 1000;
            this.localData.lastClearTime = Date.now();
            var o = this.localData.clearIntervals;
            o.push(t);
            o.sort(function (e, t) {
                return e - t;
            });
            o = o.slice(0, e);
            this.localData.clearIntervals = o;
        } else this.localData.lastClearTime = Date.now();
    }

    updateAvgClearIntervals() {
        var e = this.localData.limitAvgClearIntervals,
            t = this.localData.avgClearIntervals,
            o = this.localData.clearIntervals,
            n = o.length > 0 ? o.reduce(function (e, t) {
                return e + t;
            }, 0) / o.length : 0;
        t.unshift(n);
        t = t.slice(0, e);
        this.localData.avgClearIntervals = t;
        t.reduce(function (e, t) {
            return e + t;
        }, 0), t.length;
    }

    @mj.traitEvent("GameData_getBaseOpTime")
    getUserBaseOpTime() {
        var e = this.localData.avgClearIntervals;
        return e.length > 0 ? e.reduce(function (e, t) {
            return e + t;
        }, 0) / e.length : 0;
    }

    updateLastOpTime() {
        this.localData.lastOpTime = Date.now();
        this.localData.lastOpRealTime = this.getCurrentRoundTime();
    }

    getLastOpTime() {
        return this.localData.lastOpTime;
    }

    getLastOpRealTime() {
        return this.localData.lastOpRealTime;
    }

    setLimitClearIntervals(e) {
        this.localData.limitClearIntervals = e;
    }

    setLimitAvgClearIntervals(e) {
        this.localData.limitAvgClearIntervals = e;
    }

    recordClear(e) {
        this.addClearTileCount(e.length);
        var t = this.localData.clearRecords;
        t.push([...e]);
        this.localData.clearRecords = t;
    }

    getClearRecords() {
        return this.localData.clearRecords;
    }

    addPopupFailCnt() {
        this.localData.popupFailCnt++;
        this.localData.lastUpdateTime = Date.now();
    }

    getPopupFailCnt() {
        return this.localData.popupFailCnt;
    }

    recordToolUse(e, t) {
        var o = t === EShuffleFrom.ClassicRevive || t === EShuffleFrom.Revive ? 0 : 1,
            n = this.getTotalTileCount() > 0 ? this.getClearTileCount() / this.getTotalTileCount() : 0,
            i = this.localData.toolUseRecords;
        i.push([e, o, n]);
        this.localData.toolUseRecords = i;
        this.localData.lastUpdateTime = Date.now();
    }

    getToolUseRecords() {
        return this.localData.toolUseRecords;
    }

    setLayerTileCount(e) {
        this.localData.layerTileCount = e;
    }

    getLayerTileCount() {
        return this.localData.layerTileCount;
    }

    setInitSpecialCards(e) {
        this.localData.initSpecialCards = e;
    }

    getInitSpecialCards() {
        return this.localData.initSpecialCards;
    }

    toolChange(e, t) {
        if (t < 0) switch (e) {
            case EItemId.Shuffle:
                this.localData.usedShuffle += Math.abs(t);
                break;
            case EItemId.Hint:
                this.localData.usedHitTips += Math.abs(t);
                break;
            case EItemId.Revert:
                this.localData.usedRevert += Math.abs(t);
                break;
            case EItemId.Revive:
                this.localData.usedRevive += Math.abs(t);
                break;
            case EItemId.Magnet:
                this.localData.usedMagnet += Math.abs(t);
        } else if (t > 0) switch (e) {
            case EItemId.Shuffle:
                this.localData.gotShuffle += t;
                break;
            case EItemId.Hint:
                this.localData.gotHitTips += t;
                break;
            case EItemId.Revert:
                this.localData.gotRevert += t;
                break;
            case EItemId.Revive:
                this.localData.gotRevive += t;
                break;
            case EItemId.Magnet:
                this.localData.gotMagnet += t;
        }
    }

    @mj.traitEvent("GameData_isHitTipEnough")
    isHitTipsEnough() {
        return this.getHitTipsNums() > 0;
    }

    @mj.traitEvent("GameData_isRevertEnough")
    isRevertEnough() {
        return this.getRevertNums() > 0;
    }

    @mj.traitEvent("GameData_isReviveEnough")
    isReviveEnough() {
        return this.getReviveNums() > 0;
    }

    @mj.traitEvent("GameData_isShuffleEnough")
    isShuffleEnough() {
        return this.getShuffleNums() > 0;
    }

    getAvgManualMatchTime() {
        var e = this.localData.lastManualMatchTime,
            t = this.localData.nonAutoStepCount;
        return t > 0 ? e / t : 0;
    }

    getAvgManualMatchSampleStd() {
        return this.localData.avgManualMatchSampleStd;
    }

    getAvgManualMatchSampleCount() {
        return this.localData.avgManualMatchSampleCount;
    }

    getAvgManualMatchSampleValue() {
        return this.localData.avgManualMatchSampleValue;
    }

    updateManualMatchSample() {
        if (!(this.localData.nonAutoStepCount <= 0 || this.localData.lastManualMatchTime > 600 || this.localData.maxManualMatchTime > 30)) {
            var e = this.getAvgManualMatchTime(),
                t = this.localData.avgManualMatchSampleCount,
                o = this.localData.avgManualMatchSampleValue,
                n = this.localData.avgManualMatchSampleStd,
                i = o + (e - o) / (t + 1),
                r = 0;
            if (t >= 1) {
                var a = ((t - 1) * n * n + (e - o) * (e - i)) / t;
                r = Math.sqrt(Math.max(0, a));
            }
            this.localData.avgManualMatchSampleCount = t + 1;
            this.localData.avgManualMatchSampleValue = i;
            this.localData.avgManualMatchSampleStd = r;
            this.localData.lastUpdateTime = Date.now();
        }
    }

    advancePlayTime(e) {
        this.isStopPlayTime || (this.playTime += e);
    }

    enterGame() {
        this.playTime = 0;
        this.enterGameTime = this.getCurrentRoundTime();
        this.isStopPlayTime = false;
    }

    stopPlayTime() {
        this.isStopPlayTime = true;
    }

    getRealPlayTime() {
        return this.playTime + this.enterGameTime;
    }

    getSolvers() {
        return this.localData.solvers;
    }
}