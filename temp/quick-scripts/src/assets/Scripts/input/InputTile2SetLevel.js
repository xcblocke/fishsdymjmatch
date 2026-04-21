"use strict";
cc._RF.push(module, 'f1e0d8I4QRFLIJq4QtrNnmN', 'InputTile2SetLevel');
// Scripts/input/InputTile2SetLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameOpen_1 = require("../gamePlay/dot/DGameOpen");
var DGameUnlock_1 = require("../gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputBase_1 = require("../inputbase/InputBase");
var GameStateListener_1 = require("../process/game/GameStateListener");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var InputTile2SetLevel = /** @class */ (function (_super) {
    __extends(InputTile2SetLevel, _super);
    function InputTile2SetLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2SetLevel.prototype.excute = function (e) {
        this.dispatchGameStateEvent(e.levelData);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e.levelData.gameType), o = UserModel_1.default.getInstance().getDotTrackerByGameType(e.levelData.gameType);
        this.gameContext.setUserData(UserModel_1.default.getInstance());
        this.gameContext.setTile2DotTracker(o);
        this.gameContext.setGameData(t);
        this.gameContext.setIsNewGame(e.levelData.isNewGame);
        this.gameContext.setIsRestart(e.levelData.isRestart);
        if (e.levelData.isNewGame) {
            e.levelData.isRestart || t.onNewGameReset();
            t.resetGameData();
            t.resetSlotBarCount(e.levelData.slotBarCount);
            t.setLevelDifficulty(e.levelData.levelDifficulty);
            t.setLevelId(e.levelData.levelId);
            t.setLevelIndex(e.levelData.levelIndex);
            t.setLevelName(e.levelData.levelName);
            t.updatePlayCount();
            t.setStartGameTime(Date.now());
            e.levelData.dimensionName && t.setDimensionName(e.levelData.dimensionName);
            t.setTileTypes(e.levelData.tileTypes);
            t.setTileStrategies(e.levelData.tileStrategies);
            this.setLevelData(e.levelData);
            this.reGenerateFaceSet(e);
            if (e.levelData.isRestart) {
                this.gameContext.tile2TileTypesModifier.modifyFromLocalForRestart();
                this.gameContext.tile2TileTypesModifier.saveToGameData();
            }
            else {
                this.gameContext.tile2TileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
                this.gameContext.tile2TileTypesModifier.saveToGameDataForRestart();
            }
            this.reGenerateFaceSetAfter(e);
            this.tileMapObject.fixSingleCard();
            this.gameContext.getUserData().updateGameId();
            var n = this.tileMapObject.getCardsCount();
            this.gameContext.getGameData().setCurLevelComboMaxLimit(n / 2);
            t.setInitSpecialCards(DotUtil_1.DotUtil.getSpecialTiles(this.tileMapObject, true));
            this.newGameComplete();
        }
        else {
            this.onResumeComboReset();
            this.setLevelData(e.levelData);
            this.gameContext.tile2TileTypesModifier.modifyFromLocal();
        }
        this.gameContext.tile2ReviveModifier.initRevive();
        this.gameContext.gameModifier.enterGame();
        this.selectEnterAnimationStrategy(e.levelData.isNewGame, e.levelData.isRestart);
        this.gameController.gameTimeData.initTime(t.getCurrentRoundTime());
        if (e.levelData.isNewGame) {
            this.gameContext.saveModifier.saveOriWithSpecialCards();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            t.setTotalTileCount(this.tileMapObject.getCount());
            t.setLayerTileCount(this.tileMapObject.getEachLayerTileCount());
            DGameUnlock_1.DotGameUnlock.dot(this.gameContext);
        }
        DGameOpen_1.DotGameOpen.isCheckCanDot() && DGameOpen_1.DotGameOpen.dot(this.gameContext);
    };
    InputTile2SetLevel.prototype.newGameComplete = function () { };
    InputTile2SetLevel.prototype.setLevelData = function (e) {
        if (e.isExtractLevel) {
            var t = e.levelStr;
            e.levelStr = LevelGenRule_1.default.convertLevelStrCardIdToResId(e.levelStr);
            this.gameContext.getGameData().setOriginalLevelDataWithCardId(t);
        }
        this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr, e.slover);
        this.tileMapObject.initGameLayer(e.levelStr);
        this.gameController.tileMapObject.updateCanMatchTiles();
    };
    InputTile2SetLevel.prototype.reGenerateFaceSet = function (e) {
        e.levelData.isNewGame;
    };
    InputTile2SetLevel.prototype.reGenerateFaceSetAfter = function (e) {
        e.levelData.isNewGame;
    };
    InputTile2SetLevel.prototype.selectEnterAnimationStrategy = function () { };
    InputTile2SetLevel.prototype.onResumeComboReset = function () { };
    InputTile2SetLevel.prototype.dispatchGameStateEvent = function (e) {
        if (e.isRestart) {
            GameStateListener_1.default.onReplayGame(this.gameContext.gameType);
        }
        else {
            if (e.isNewGame) {
                GameStateListener_1.default.onNewGame(this.gameContext.gameType);
            }
            else {
                GameStateListener_1.default.onSurvivalGame(this.gameContext.gameType);
            }
        }
    };
    __decorate([
        mj.traitEvent("IptT2SetLv_newGmComplete")
    ], InputTile2SetLevel.prototype, "newGameComplete", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_setData")
    ], InputTile2SetLevel.prototype, "setLevelData", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_reGenFaces")
    ], InputTile2SetLevel.prototype, "reGenerateFaceSet", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_genFcsAfter")
    ], InputTile2SetLevel.prototype, "reGenerateFaceSetAfter", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_selEnterAnim")
    ], InputTile2SetLevel.prototype, "selectEnterAnimationStrategy", null);
    __decorate([
        mj.traitEvent("IptT2SetLv_rstCombo")
    ], InputTile2SetLevel.prototype, "onResumeComboReset", null);
    return InputTile2SetLevel;
}(InputBase_1.InputBase));
exports.default = InputTile2SetLevel;

cc._RF.pop();