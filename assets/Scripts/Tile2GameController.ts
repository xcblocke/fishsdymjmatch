import Tile2ExtractManager from './Tile2ExtractManager';
import { EGameInputEnum, InputRunType } from './simulator/constant/GameInputEnum';
import { ETile2SlotType, MjGameType } from './core/simulator/constant/GameTypeEnums';
import LowPriorityBundleLoader from './gamePlay/base/ui/LowPriorityBundleLoader';
import MainGameController from './game/controller/MainGameController';
import UserModel from './gamePlay/user/UserModel';
import Tile2GameView from './view/Tile2GameView';
@mj.class("Tile2GameController")
export default class Tile2GameController extends MainGameController {
  viewClass = Tile2GameView;
  _tile2SlotType = ETile2SlotType.Slot3;
  _gameType = MjGameType.Tile2Normal;
  _disPlayingCount = 0;
  static nextLevelStr = "";
  @mj.traitEvent("T2GameCtrl_gT2SlotT")
  getTile2SlotType() {
    return this._tile2SlotType;
  }
  @mj.traitEvent("T2GameCtrl_initRes")
  initDependRes() {
    super.initDependRes.call(this);
    this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeSlotBar");
    this.addPreloadRes("Prefab", "prefabs/game/Tile2Slot4nodeSlotBar");
    this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeBottom");
    this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeTop");
    this.addPreloadRes("Prefab", "prefabs/effects/Tile2ClearScoreNormal");
    this.addPreloadRes("Prefab", "prefabs/effects/Tile2ClearScoreCombo");
    this.addPreloadRes("Prefab", "prefabs/effects/Tile2EffectCombo");
  }
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
      tileStrategies: e.getTileStrategies(),
      slover: e.getSolvers(),
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
      slover: e.getSolvers(),
      isRestart: false
    };
  }
  getNewLevelData(e) {
    var t = this,
      o = UserModel.getInstance().getGameDataByGameType(this.gameType),
      n = this.getTile2TileTypes(o),
      i = this.getTile2Strategies(o);
    Tile2ExtractManager.getInstance().getContentData(o).then(function (r) {
      o.setDieResult(1);
      r.isCapabilityExtract && o.incrementLevelGenIndex();
      var a = r.content;
      e({
        levelStr: a,
        originalLevelStr: o.getOriginalLevelData(),
        levelDifficulty: 0,
        isNewGame: true,
        isRestart: false,
        gameType: t.gameType,
        levelId: o.getLevelId(),
        levelIndex: r.index,
        levelName: r.libName,
        tileTypes: n,
        isExtractLevel: true,
        slover: r.slover,
        tileStrategies: i
      });
    });
  }
  @mj.traitEvent("T2GameCtrl_getIsNewGame")
  getIsNewGame() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelData(),
      o = e.getOriginalLevelData();
    return !t || !o;
  }
  @mj.traitEvent("T2GameCtrl_reExtOnRst")
  shouldReExtractOnRestart() {
    return false;
  }
  getLevelData(e = false, t?) {
    var o = this;
    var n = this.getIsNewGame();
    Tile2ExtractManager.getInstance().initData().then(function () {
      if (e) {
        if (o.shouldReExtractOnRestart()) {
          o.getNewLevelData(t);
        } else {
          t(o.getRestartLevelData());
        }
      } else {
        if (n) {
          o.getNewLevelData(t);
        } else {
          t(o.getLocalLevelData());
        }
      }
    });
  }
  @mj.traitEvent("T2GameCtrl_getTileTypes")
  getTile2TileTypes() {
    return "";
  }
  @mj.traitEvent("T2GameCtrl_gtStrates")
  getTile2Strategies() {
    return "";
  }
  getStartSlotBarCount() {
    return 4;
  }
  initInput(e, t) {
    var o = this.getStartSlotBarCount();
    e.slotBarCount = o;
    this.pushInput({
      inputType: EGameInputEnum.StartSimulator,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.StartInit,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2SetSlotType,
      slotType: this.getTile2SlotType(),
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2SetLevel,
      levelData: e,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2SetSlotBarCount,
      slotBarCount: o,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.ChooseLayout,
      contentSize: t,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2InitView,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2InitViewFinish,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2InitSlotBar,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2InitBottom,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2InitTop,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2EnterAnimation,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.Tile2EnterAnimationFinish,
      runType: InputRunType.Wait
    });
  }
  pushInput(e) {
    var t;
    if (this._gameSimulator && this.getGameTime()) {
      e.inputType === EGameInputEnum.UpdateTime && (e.time = this.getGameTime().deltaTime);
      null === (t = this._gameSimulator) || void 0 === t || t.input(e);
      e.inputType !== EGameInputEnum.Restart && this.tryOpenLowPriorityBundle(e);
    }
  }
  tryOpenLowPriorityBundle(e) {
    e.inputType === EGameInputEnum.DisplaySimulator && e.displayInputType === EGameInputEnum.Tile2EnterAnimationFinish && LowPriorityBundleLoader.getInstance().start(true);
  }
  addDisPlayingCount() {
    this._disPlayingCount++;
  }
  removeDisPlayingCount() {
    this._disPlayingCount--;
    this._disPlayingCount < 0 && (this._disPlayingCount = 0);
  }
  isDisplaying() {
    return this._disPlayingCount > 0;
  }
  resetDisPlayingCount() {
    this._disPlayingCount = 0;
  }
}