import { DotGameOpen } from '../gamePlay/dot/DGameOpen';
import { DotGameUnlock } from '../gamePlay/dot/DGameUnlock';
import UserModel from '../gamePlay/user/UserModel';
import { InputBase } from '../inputbase/InputBase';
import GameStateListener from '../process/game/GameStateListener';
import LevelGenRule from '../core/simulator/config/LevelGenRule';
import { DotUtil } from '../gamePlay/dot/DotUtil';
export default class InputTile2SetLevel extends InputBase {
  excute(e) {
    this.dispatchGameStateEvent(e.levelData);
    var t = UserModel.getInstance().getGameDataByGameType(e.levelData.gameType),
      o = UserModel.getInstance().getDotTrackerByGameType(e.levelData.gameType);
    this.gameContext.setUserData(UserModel.getInstance());
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
      } else {
        this.gameContext.tile2TileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
        this.gameContext.tile2TileTypesModifier.saveToGameDataForRestart();
      }
      this.reGenerateFaceSetAfter(e);
      this.tileMapObject.fixSingleCard();
      this.gameContext.getUserData().updateGameId();
      var n = this.tileMapObject.getCardsCount();
      this.gameContext.getGameData().setCurLevelComboMaxLimit(n / 2);
      t.setInitSpecialCards(DotUtil.getSpecialTiles(this.tileMapObject, true));
      this.newGameComplete();
    } else {
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
      DotGameUnlock.dot(this.gameContext);
    }
    DotGameOpen.isCheckCanDot() && DotGameOpen.dot(this.gameContext);
  }
  @mj.traitEvent("IptT2SetLv_newGmComplete")
  newGameComplete() {}
  @mj.traitEvent("IptT2SetLv_setData")
  setLevelData(e) {
    if (e.isExtractLevel) {
      var t = e.levelStr;
      e.levelStr = LevelGenRule.convertLevelStrCardIdToResId(e.levelStr);
      this.gameContext.getGameData().setOriginalLevelDataWithCardId(t);
    }
    this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr, e.slover);
    this.tileMapObject.initGameLayer(e.levelStr);
    this.gameController.tileMapObject.updateCanMatchTiles();
  }
  @mj.traitEvent("IptT2SetLv_reGenFaces")
  reGenerateFaceSet(e) {
    e.levelData.isNewGame;
  }
  @mj.traitEvent("IptT2SetLv_genFcsAfter")
  reGenerateFaceSetAfter(e) {
    e.levelData.isNewGame;
  }
  @mj.traitEvent("IptT2SetLv_selEnterAnim")
  selectEnterAnimationStrategy() {}
  @mj.traitEvent("IptT2SetLv_rstCombo")
  onResumeComboReset() {}
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