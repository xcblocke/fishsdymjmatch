import DynamicCurve from './types/DynamicCurve';
import ExtractTool from './core/extractQuestion/ExtractTool';
import { EGameInputEnum, InputRunType } from './simulator/constant/GameInputEnum';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import MainGameController from './game/controller/MainGameController';
import UserModel from './gamePlay/user/UserModel';
import DailyChallengeView from './view/DailyChallengeView';
@mj.class("DailyChallengeController")
export default class DailyChallengeController extends MainGameController {
  viewClass = DailyChallengeView;
  _gameType = MjGameType.DailyChallenge;
  viewDidShow(t) {
    this.args = t || this.args;
    super.viewDidShow.call(this);
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
      r = this.getChallengeTileTypes(o),
      s = o.getDailyChallengeTimestamp();
    ExtractTool.getInstance().getContentData({
      levelIndex: o.getLevelGenIndex(),
      dieResult: o.getDieResult(),
      gameType: this.gameType,
      challengeDate: s
    }).then(function (l) {
      o.setDieResult(1);
      o.incrementLevelGenIndex();
      var s = l[0],
        c = l[1],
        u = l[2],
        p = l[3],
        f = l[4];
      DynamicCurve.instance.supportMode(t.gameType) && DynamicCurve.instance.gameStart({
        gameType: t.gameType,
        levelId: n,
        fileName: p,
        levelStr: s,
        levelIndex: Number(u)
      });
      e({
        levelStr: s,
        levelDifficulty: c,
        originalLevelStr: i,
        isNewGame: true,
        gameType: t.gameType,
        levelId: n,
        tileTypes: r,
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
    var n = UserModel.getInstance().getGameDataByGameType(this.gameType);
    this.checkAndUpdateTimestamp(n);
    var i = this.getIsNewGame();
    ExtractTool.getInstance().initData(this.gameType).then(function () {
      if (e) {
        var n = o.getRestartLevelData();
        t(n);
      } else if (i) o.getNewLevelData(function (e) {
        t(e);
      });else {
        n = o.getLocalLevelData();
        t(n);
      }
    });
  }
  checkAndUpdateTimestamp(e) {
    var t,
      o = null === (t = this.args) || void 0 === t ? void 0 : t.timeStamp;
    if (o) {
      if (e.getDailyChallengeTimestamp() !== o) {
        e.resetGameData();
        e.setDailyChallengeTimestamp(o);
      }
    }
  }
  @mj.traitEvent("DailyChCtrl_getTileTypes")
  getChallengeTileTypes() {
    return "";
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
}