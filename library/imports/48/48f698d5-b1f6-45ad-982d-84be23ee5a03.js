"use strict";
cc._RF.push(module, '48f69jVsfZFrZgthL4j7loD', 'InputSetLevelClassic');
// Scripts/input/InputSetLevelClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameOpen_1 = require("../gamePlay/dot/DGameOpen");
var DGameStart_1 = require("../gamePlay/dot/DGameStart");
var DGameUnlock_1 = require("../gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../gamePlay/user/UserModel");
var InputBase_1 = require("../inputbase/InputBase");
var GameStateListener_1 = require("../process/game/GameStateListener");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var InputSetLevelClassic = /** @class */ (function (_super) {
    __extends(InputSetLevelClassic, _super);
    function InputSetLevelClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSetLevelClassic.prototype.excute = function (e) {
        this.dispatchGameStateEvent(e.levelData);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(e.levelData.gameType), o = UserModel_1.default.getInstance().getGameTrackerByGameType(e.levelData.gameType);
        this.gameContext.setUserData(UserModel_1.default.getInstance());
        this.gameContext.setGameTracker(o);
        this.gameContext.setGameData(t);
        this.gameContext.setIsNewGame(e.levelData.isNewGame);
        this.gameContext.setIsRestart(e.levelData.isRestart);
        if (e.levelData.isNewGame) {
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
            this.gameContext.tileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
            this.reGenerateFaceSetAfter(e);
            this.gameContext.getUserData().updateGameId();
            var n = this.tileMapObject.getCardsCount();
            this.gameContext.getGameData().setCurLevelComboMaxLimit(n / 2);
            t.setInitSpecialCards(DotUtil_1.DotUtil.getSpecialTiles(this.tileMapObject, true));
        }
        else {
            t.resetComboNum();
            this.setLevelData(e.levelData);
            this.gameContext.tileTypesModifier.modifyFromLocalFix();
        }
        this.gameContext.gameModifier.enterGame();
        this.selectEnterAnimationStrategy(e.levelData.isNewGame, e.levelData.isRestart);
        this.gameController.gameTimeData.initTime(t.getCurrentRoundTime());
        if (e.levelData.isNewGame || this.isGuideStart(e)) {
            this.gameContext.saveModifier.saveOriWithSpecialCards();
            this.gameContext.saveModifier.saveLevelDataToLocalStorage();
            t.setTotalTileCount(this.tileMapObject.getCount());
            o.startGameTracking(this.gameContext);
            DGameStart_1.DotGameStart.dot(this.gameContext);
            DGameUnlock_1.DotGameUnlock.dot(this.gameContext);
        }
        DGameOpen_1.DotGameOpen.isCheckCanDot() && DGameOpen_1.DotGameOpen.dot(this.gameContext);
    };
    InputSetLevelClassic.prototype.isGuideStart = function (e) {
        var t = mj.getClassByName("GuideTrait");
        return 1 === e.levelData.levelId && t && t.getInstance() && true === t.getInstance().eventEnabled && !UserModel_1.default.getInstance().isGuideFinished();
    };
    InputSetLevelClassic.prototype.setLevelData = function (e) {
        var t, o;
        if (e.isExtractLevel) {
            var n = e.levelStr;
            e.levelStr = LevelGenRule_1.default.convertLevelStrCardIdToResId(e.levelStr);
            this.gameContext.getGameData().setOriginalLevelDataWithCardId(n);
        }
        this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr);
        this.tileMapObject.initGameLayer(e.levelStr, e.isNewGame);
        this.gameContext.classicLevelModifier.tryExcuteDrop();
        this.gameController.tileMapObject.updateCanMatchTiles();
        try {
            for (var i = __values(this.tileMapObject.tileObjectMap().values()), a = i.next(); !a.done; a = i.next()) {
                var l = a.value, s = this.gameContext.getGameData().getBatchIdByXyz(l.pos.x, l.pos.y, l.pos.z);
                this.tileMapObject.changeBatchId(l.id, s || 0);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    InputSetLevelClassic.prototype.reGenerateFaceSet = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevelClassic.prototype.reGenerateFaceSetAfter = function (e) {
        e.levelData.isNewGame;
    };
    InputSetLevelClassic.prototype.selectEnterAnimationStrategy = function () { };
    InputSetLevelClassic.prototype.dispatchGameStateEvent = function (e) {
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
    return InputSetLevelClassic;
}(InputBase_1.InputBase));
exports.default = InputSetLevelClassic;

cc._RF.pop();