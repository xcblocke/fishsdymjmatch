import { DotGameOpen } from '../gamePlay/dot/DGameOpen';
import { DotGameStart } from '../gamePlay/dot/DGameStart';
import { DotGameUnlock } from '../gamePlay/dot/DGameUnlock';
import UserModel from '../gamePlay/user/UserModel';
import { InputBase } from '../inputbase/InputBase';
import GameStateListener from '../process/game/GameStateListener';
import LevelGenRule from '../core/simulator/config/LevelGenRule';
import { DotUtil } from '../gamePlay/dot/DotUtil';
export default class InputSetLevelClassic extends InputBase {
  logParsedMahjongData(e) {
    var t = this.tileMapObject.getAllCardTiles ? this.tileMapObject.getAllCardTiles() : [];
    if (!t || 0 === t.length) return;
    var o = Array();
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      o.push({
        id: i.id,
        resId: i.resId,
        cardId: i.cardId,
        x: i.gridPosX,
        y: i.gridPosY,
        z: i.layer
      });
    }
    o.sort(function (e, t) {
      return e.z !== t.z ? e.z - t.z : e.y !== t.y ? e.y - t.y : e.x - t.x;
    });
    console.log("[LevelTiles] levelId=" + e.levelId + " levelName=" + (e.levelName || "") + " tileCount=" + o.length);
    console.log("[LevelTiles] data=", o);
  }
  excute(e) {
    this.dispatchGameStateEvent(e.levelData);
    var t = UserModel.getInstance().getGameDataByGameType(e.levelData.gameType),
      o = UserModel.getInstance().getGameTrackerByGameType(e.levelData.gameType);
    this.gameContext.setUserData(UserModel.getInstance());
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
      t.setInitSpecialCards(DotUtil.getSpecialTiles(this.tileMapObject, true));
    } else {
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
      DotGameStart.dot(this.gameContext);
      DotGameUnlock.dot(this.gameContext);
    }
    DotGameOpen.isCheckCanDot() && DotGameOpen.dot(this.gameContext);
  }
  isGuideStart(e) {
    var t = mj.getClassByName("GuideTrait");
    return 1 === e.levelData.levelId && t && t.getInstance() && true === t.getInstance().eventEnabled && !UserModel.getInstance().isGuideFinished();
  }
  setLevelData(e) {
    var t, o;
    if (e.isExtractLevel) {
      var n = e.levelStr;
      e.levelStr = LevelGenRule.convertLevelStrCardIdToResId(e.levelStr);
      this.gameContext.getGameData().setOriginalLevelDataWithCardId(n);
    }
    this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr);
    this.tileMapObject.initGameLayer(e.levelStr, e.isNewGame);
    this.gameContext.classicLevelModifier.tryExcuteDrop();
    this.gameController.tileMapObject.updateCanMatchTiles();
    this.logParsedMahjongData(e);
    try {
      for (var i = __values(this.tileMapObject.tileObjectMap().values()), a = i.next(); !a.done; a = i.next()) {
        var l = a.value,
          s = this.gameContext.getGameData().getBatchIdByXyz(l.pos.x, l.pos.y, l.pos.z);
        this.tileMapObject.changeBatchId(l.id, s || 0);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  reGenerateFaceSet(e) {
    e.levelData.isNewGame;
  }
  reGenerateFaceSetAfter(e) {
    e.levelData.isNewGame;
  }
  selectEnterAnimationStrategy() {}
  dispatchGameStateEvent(e) {
    if (e.isRestart) {
      GameStateListener.onReplayGame(this.gameContext.gameType);
    } else {
      if (e.isNewGame) {
        GameStateListener.onNewGame(this.gameContext.gameType);
      } else {
        GameStateListener.onSurvivalGame(this.gameContext.gameType);
      }
    }
  }
}