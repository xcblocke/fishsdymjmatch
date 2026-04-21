import DynamicCurve from './types/DynamicCurve';
import ExtractTool from './core/extractQuestion/ExtractTool';
import { ClassicExtractTool } from './ClassicExtractTool';
import { EGameInputEnum, InputRunType } from './simulator/constant/GameInputEnum';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import MainGameController from './game/controller/MainGameController';
import UserModel from './gamePlay/user/UserModel';
import ClassicView from './view/ClassicView';
@mj.class("ClassicController")
export default class ClassicController extends MainGameController {
  viewClass = ClassicView;
  _gameType = MjGameType.Classic;
  viewDidShow(t) {
    this.args = t || this.args;
    ClassicExtractTool.getInstance().init();
    super.viewDidShow.call(this);
  }
  initDependRes() {
    var t, o;
    super.initDependRes.call(this);
    this.preloadResMap.Prefab || (this.preloadResMap.Prefab = []);
    "string" == typeof this.preloadResMap.Prefab && (this.preloadResMap.Prefab = [this.preloadResMap.Prefab]);
    var n = this.preloadResMap.Prefab;
    try {
      for (var i = __values(["l_classic:prefabs/HighestScoreItem", "l_classic:prefabs/StageRightItem"]), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        n.includes(l) || n.push(l);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  initGameTime() {
    super.initGameTime.call(this);
    UserModel.getInstance().getGameDataByGameType(this.gameType).resetSwimlaneTime();
  }
  getRestartLevelData() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelId(),
      o = (e.getLevelData(), e.getOriginalLevelData()),
      n = e.getOriWithSpecialCards(),
      i = this.getClassicTileTypes(e);
    return {
      originalLevelStr: o,
      levelStr: n || o,
      levelDifficulty: e.getLevelDifficulty(),
      isNewGame: true,
      gameType: this.gameType,
      levelId: t,
      tileTypes: i,
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
  getNewLevelData(e) {
    var t = this,
      o = UserModel.getInstance().getGameDataByGameType(this.gameType),
      n = o.getLevelId(),
      i = o.getOriginalLevelData(),
      r = this.getClassicTileTypes(o);
    ClassicExtractTool.getInstance().extractInitial().then(function (o) {
      var a = o.levelStr,
        s = o.index,
        c = o.libName;
      DynamicCurve.instance.supportMode(t.gameType) && DynamicCurve.instance.gameStart({
        gameType: t.gameType,
        levelId: n,
        fileName: c,
        levelStr: a,
        levelIndex: Number(s)
      });
      e({
        levelStr: a,
        levelDifficulty: 0,
        originalLevelStr: i,
        isNewGame: true,
        gameType: t.gameType,
        levelId: n,
        tileTypes: r,
        isRestart: false,
        levelIndex: s,
        levelName: c,
        isExtractLevel: true,
        difficultyType: o.difficultyType
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
    var n = this.getIsNewGame();
    ExtractTool.getInstance().initData(this.gameType).then(function () {
      if (e) {
        if (o.isRestartExtractLevel()) o.getExtractRestartLevelData(function (e) {
          t(e);
        });else {
          var i = o.getRestartLevelData();
          t(i);
        }
      } else if (n) o.getNewLevelData(function (e) {
        t(e);
      });else {
        i = o.getLocalLevelData();
        t(i);
      }
    });
  }
  @mj.traitEvent("ClcCtl_isRestartExtLv")
  isRestartExtractLevel() {
    return true;
  }
  getExtractRestartLevelData(e) {
    this.getNewLevelData(function (t) {
      t.isRestart = true;
      e(t);
    });
  }
  getClassicTileTypes() {
    return "";
  }
  @mj.traitEvent("ClcCtl_isOpenGenState")
  isOpenGenerateState() {
    return false;
  }
  initInput(e, t, o) {
    this.pushInput({
      inputType: EGameInputEnum.StartSimulator,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.StartInit,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.OpenGenerateState,
      runType: InputRunType.Wait,
      openGenerateState: this.isOpenGenerateState()
    });
    this.pushInput({
      inputType: EGameInputEnum.SetLevelClassic,
      levelData: e,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.ChooseLayoutClassic,
      offsetY: o,
      contentSize: t,
      maxRow: 7,
      maxCol: 5,
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
}