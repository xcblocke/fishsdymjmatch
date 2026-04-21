import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { ClassicExtractTool } from '../ClassicExtractTool';
import UserModel from '../gamePlay/user/UserModel';
export class PushBatchInfoBehavior extends GameBehaviorsBase {
  _isOpenGenerateState = false;
  onAbort() {
    this._isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(false);
    super.onAbort.call(this);
  }
  start(e) {
    this._isOpenGenerateState = e.data.isOpenGenerateState;
    this.loadAndPushLevel(e);
  }
  loadAndPushLevel() {
    var e = this;
    this._isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(true);
    var t = UserModel.getInstance().getGameDataByGameType(MjGameType.Classic);
    ClassicExtractTool.getInstance().extractSwimlane(t).then(function (t) {
      e._isOpenGenerateState || e.context.gameView.setSwallowEventNodeActive(false);
      GameInteraction.input({
        inputType: EGameInputEnum.AddLevelClassic,
        levelData: {
          levelStr: t.levelStr,
          originalLevelStr: t.levelStr,
          levelDifficulty: t.difficultyType,
          isNewGame: false,
          gameType: MjGameType.Classic,
          levelId: parseInt(t.index) || 0,
          difficultyType: t.difficultyType,
          levelName: t.libName
        }
      });
      e.finish();
    });
  }
}