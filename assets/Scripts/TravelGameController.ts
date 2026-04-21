import DynamicCurve from './types/DynamicCurve';
import ExtractTool from './core/extractQuestion/ExtractTool';
import { EGameInputEnum, InputRunType } from './simulator/constant/GameInputEnum';
import { MjGameType, LevelTargetType, JourneyType } from './core/simulator/constant/GameTypeEnums';
import { ETileType } from './simulator/constant/TileTypeEnum';
import { RandomGenerator } from './core/simulator/structures/RandomGenerator';
import MainGameController from './game/controller/MainGameController';
import UserModel from './gamePlay/user/UserModel';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
import TravelGameView from './view/TravelGameView';
@mj.class("TravelGameController")
export default class TravelGameController extends MainGameController {
  viewClass = TravelGameView;
  _gameType = MjGameType.Travel;
  getRestartLevelData() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelId(),
      o = (e.getLevelData(), e.getOriginalLevelData());
    return {
      originalLevelStr: o,
      levelStr: e.getOriWithSpecialCards() || o,
      levelDifficulty: e.getLevelDifficulty(),
      isNewGame: true,
      gameType: this.gameType,
      levelId: t,
      tileTypes: e.getTileTypes(),
      isRestart: true
    };
  }
  getLocalLevelData() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelId(),
      o = e.getLevelData();
    return {
      originalLevelStr: e.getOriginalLevelData(),
      levelStr: o,
      levelDifficulty: e.getLevelDifficulty(),
      isNewGame: false,
      gameType: this.gameType,
      levelId: t,
      tileTypes: e.getTileTypes(),
      isRestart: false
    };
  }
  getJourneyTypeConfig() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType).getLevelId(),
      t = TravelGameModel.getInstance().getPlayType(e);
    return new RandomGenerator().randomElement(t);
  }
  getJourneyType() {
    var e = this.getJourneyTypeConfig();
    UserModel.getInstance().getGameDataByGameType(this.gameType).setJourneyType(e);
    return e;
  }
  getNewLevelData(e) {
    var t = this,
      o = UserModel.getInstance().getGameDataByGameType(this.gameType),
      n = o.getLevelId(),
      i = o.getOriginalLevelData(),
      r = o.getJourneyType(),
      s = this.getTravelTileTypes(o, r);
    ExtractTool.getInstance().getContentData({
      levelID: n,
      levelIndex: o.getLevelGenIndex(),
      dieResult: o.getDieResult(),
      gameType: this.gameType,
      journeyType: r
    }).then(function (r) {
      o.setDieResult(1);
      o.incrementLevelGenIndex();
      var l = r[0],
        c = r[1],
        u = r[2],
        p = r[3],
        f = r[4];
      DynamicCurve.instance.supportMode(t.gameType) && DynamicCurve.instance.gameStart({
        gameType: t.gameType,
        levelId: n,
        fileName: p,
        levelStr: l,
        levelIndex: Number(u)
      });
      e({
        levelStr: l,
        levelDifficulty: c,
        originalLevelStr: i,
        isNewGame: true,
        gameType: t.gameType,
        levelId: n,
        tileTypes: s,
        isRestart: false,
        levelIndex: u,
        levelName: p,
        dimensionName: f,
        isExtractLevel: true
      });
    });
  }
  getIsNewGame() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelData(),
      o = e.getOriginalLevelData();
    return !t || !o;
  }
  getLevelData(e = false, t?) {
    var o = this;
    var n = this.getIsNewGame(),
      i = this.getJourneyType();
    ExtractTool.getInstance().initData(this.gameType, i).then(function () {
      if (e) {
        var i = o.getRestartLevelData();
        t(i);
      } else if (n) o.getNewLevelData(function (e) {
        t(e);
      });else {
        i = o.getLocalLevelData();
        t(i);
      }
    });
  }
  initInput(e, t) {
    this.pushInput({
      inputType: EGameInputEnum.StartSimulator,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.StartInit,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.SetLevel,
      levelData: e,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.InitCollectCard,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.InitEndStrategy,
      endStrategy: LevelTargetType.KillCollectCard,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.ChooseLayout,
      contentSize: t,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.InitView,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.InitViewFinish,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.EnterAnimation,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.EnterAnimationFinish,
      runType: InputRunType.Wait
    });
  }
  getTileTypesByJourneyType(e) {
    switch (e) {
      case JourneyType.Yoga:
        return ETileType.Yoga;
      case JourneyType.Flip:
        return ETileType.RollCard;
      case JourneyType.Color:
        return ETileType.ColorCard;
    }
  }
  @mj.traitEvent("TravelGaCtl_gTileTypes")
  getTravelTileTypes(e, t) {
    return this.getTileTypesByJourneyType(t);
  }
}