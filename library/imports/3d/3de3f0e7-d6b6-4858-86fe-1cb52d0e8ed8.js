"use strict";
cc._RF.push(module, '3de3fDn1rZIWIb+HLUtDo7Y', 'InputSetLevel');
// Scripts/input/InputSetLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameOpen_1 = require("../gamePlay/dot/DGameOpen");
var DGameStart_1 = require("../gamePlay/dot/DGameStart");
var DGameUnlock_1 = require("../gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../gamePlay/user/UserModel");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var InputBase_1 = require("../inputbase/InputBase");
var GameStateListener_1 = require("../process/game/GameStateListener");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var InputSetLevel = /** @class */ (function (_super) {
    __extends(InputSetLevel, _super);
    function InputSetLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSetLevel.prototype.excute = function (e) {
        this.dispatchGameStateEvent(e.levelData);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e.levelData.gameType), o = UserModel_1.default.getInstance().getGameTrackerByGameType(e.levelData.gameType);
        this.gameContext.setUserData(UserModel_1.default.getInstance());
        this.gameContext.setGameTracker(o);
        this.gameContext.setGameData(t);
        this.gameContext.setIsNewGame(e.levelData.isNewGame);
        this.gameContext.setIsRestart(e.levelData.isRestart);
        if (e.levelData.isNewGame) {
            e.levelData.isRestart || this.newGameReset();
            t.resetGameData();
            t.setLevelDifficulty(e.levelData.levelDifficulty);
            t.setLevelId(e.levelData.levelId);
            t.setLevelIndex(e.levelData.levelIndex);
            t.setLevelName(e.levelData.levelName);
            t.updatePlayCount();
            t.setStartGameTime(Date.now());
            e.levelData.dimensionName && t.setDimensionName(e.levelData.dimensionName);
            e.levelData.tileTypes && t.setTileTypes(e.levelData.tileTypes);
            this.setLevelData(e.levelData);
            this.reGenerateFaceSet(e);
            mj.EventManager.emit(GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel, {
                input: e,
                inputSetLevel: this
            });
            if (e.levelData.isRestart) {
                this.gameContext.tileTypesModifier.modifyFromLocal();
            }
            else {
                this.gameContext.tileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
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
            t.resetComboNum();
            this.setLevelData(e.levelData);
            mj.EventManager.emit(GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel, {
                input: e,
                inputSetLevel: this
            });
            this.gameContext.tileTypesModifier.modifyFromLocal();
        }
        this.gameContext.gameModifier.enterGame();
        this.selectEnterAnimationStrategy(e.levelData.isNewGame, e.levelData.isRestart);
        this.gameController.gameTimeData.initTime(t.getCurrentRoundTime());
        if (e.levelData.isNewGame || this.isGuideStart(e)) {
            this.gameContext.saveModifier.saveOriWithSpecialCards();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            t.setTotalTileCount(this.tileMapObject.getCount());
            t.setLayerTileCount(this.tileMapObject.getEachLayerTileCount());
            o.startGameTracking(this.gameContext);
            DGameStart_1.DotGameStart.dot(this.gameContext);
            DGameUnlock_1.DotGameUnlock.dot(this.gameContext);
        }
        DGameOpen_1.DotGameOpen.isCheckCanDot() && DGameOpen_1.DotGameOpen.dot(this.gameContext);
    };
    InputSetLevel.prototype.newGameComplete = function () { };
    InputSetLevel.prototype.newGameReset = function () {
        this.gameContext.gameType === GameTypeEnums_1.MjGameType.Normal && this.gameContext.getGameData().setRankCardCount(0);
    };
    InputSetLevel.prototype.isGuideStart = function (e) {
        var t = mj.getClassByName("GuideTrait");
        return 1 === e.levelData.levelId && t && t.getInstance() && true === t.getInstance().eventEnabled && !UserModel_1.default.getInstance().isGuideFinished();
    };
    InputSetLevel.prototype.setLevelData = function (e) {
        if (e.isExtractLevel) {
            var t = e.levelStr;
            e.levelStr = LevelGenRule_1.default.convertLevelStrCardIdToResId(e.levelStr);
            this.gameContext.getGameData().setOriginalLevelDataWithCardId(t);
        }
        this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr);
        this.tileMapObject.initGameLayer(e.levelStr);
        this.gameController.tileMapObject.updateCanMatchTiles();
    };
    InputSetLevel.prototype.reGenerateFaceSet = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevel.prototype.reGenerateFaceSetAfter = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevel.prototype.selectEnterAnimationStrategy = function () { };
    InputSetLevel.prototype.dispatchGameStateEvent = function (e) {
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
        mj.traitEvent("IptSetLv_exec")
    ], InputSetLevel.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptSetLv_newGComp")
    ], InputSetLevel.prototype, "newGameComplete", null);
    __decorate([
        mj.traitEvent("IptSetLv_setData")
    ], InputSetLevel.prototype, "setLevelData", null);
    __decorate([
        mj.traitEvent("IptSetLv_reGenFaces")
    ], InputSetLevel.prototype, "reGenerateFaceSet", null);
    __decorate([
        mj.traitEvent("IptSetLv_reGenFacesAfter")
    ], InputSetLevel.prototype, "reGenerateFaceSetAfter", null);
    __decorate([
        mj.traitEvent("IptSetLv_selEnterAnim")
    ], InputSetLevel.prototype, "selectEnterAnimationStrategy", null);
    return InputSetLevel;
}(InputBase_1.InputBase));
exports.default = InputSetLevel;

cc._RF.pop();