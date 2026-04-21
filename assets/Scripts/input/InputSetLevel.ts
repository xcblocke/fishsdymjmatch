import { DotGameOpen } from '../gamePlay/dot/DGameOpen';
import { DotGameStart } from '../gamePlay/dot/DGameStart';
import { DotGameUnlock } from '../gamePlay/dot/DGameUnlock';
import UserModel from '../gamePlay/user/UserModel';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { InputBase } from '../inputbase/InputBase';
import GameStateListener from '../process/game/GameStateListener';
import LevelGenRule from '../core/simulator/config/LevelGenRule';
import { DotUtil } from '../gamePlay/dot/DotUtil';
export default class InputSetLevel extends InputBase {
  @mj.traitEvent("IptSetLv_exec")
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
      mj.EventManager.emit(EGameEvent.IptSetLevel_AfterSetLevel, {
        input: e,
        inputSetLevel: this
      });
      if (e.levelData.isRestart) {
        this.gameContext.tileTypesModifier.modifyFromLocal();
      } else {
        this.gameContext.tileTypesModifier.modifyTileTypes(e.levelData.tileTypes);
      }
      this.reGenerateFaceSetAfter(e);
      this.tileMapObject.fixSingleCard();
      this.gameContext.getUserData().updateGameId();
      var n = this.tileMapObject.getCardsCount();
      this.gameContext.getGameData().setCurLevelComboMaxLimit(n / 2);
      t.setInitSpecialCards(DotUtil.getSpecialTiles(this.tileMapObject, true));
      this.newGameComplete();
    } else {
      t.resetComboNum();
      this.setLevelData(e.levelData);
      mj.EventManager.emit(EGameEvent.IptSetLevel_AfterSetLevel, {
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
      DotGameStart.dot(this.gameContext);
      DotGameUnlock.dot(this.gameContext);
    }
    DotGameOpen.isCheckCanDot() && DotGameOpen.dot(this.gameContext);
  }
  @mj.traitEvent("IptSetLv_newGComp")
  newGameComplete() {}
  newGameReset() {
    this.gameContext.gameType === MjGameType.Normal && this.gameContext.getGameData().setRankCardCount(0);
  }
  isGuideStart(e) {
    var t = mj.getClassByName("GuideTrait");
    return 1 === e.levelData.levelId && t && t.getInstance() && true === t.getInstance().eventEnabled && !UserModel.getInstance().isGuideFinished();
  }
  @mj.traitEvent("IptSetLv_setData")
  setLevelData(e) {
    if (e.isExtractLevel) {
      var t = e.levelStr;
      e.levelStr = LevelGenRule.convertLevelStrCardIdToResId(e.levelStr);
      this.gameContext.getGameData().setOriginalLevelDataWithCardId(t);
    }
    this.gameContext.getGameData().setLevelInfo(e.levelId, e.levelStr, e.originalLevelStr);
    this.tileMapObject.initGameLayer(e.levelStr);
    this.gameController.tileMapObject.updateCanMatchTiles();
  }
  @mj.traitEvent("IptSetLv_reGenFaces")
  reGenerateFaceSet(e) {
    e.levelData.isNewGame;
  }
  @mj.traitEvent("IptSetLv_reGenFacesAfter")
  reGenerateFaceSetAfter(e) {
    e.levelData.isNewGame;
  }
  @mj.traitEvent("IptSetLv_selEnterAnim")
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