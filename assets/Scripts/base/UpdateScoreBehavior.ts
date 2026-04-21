import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class UpdateScoreBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o = e.data.isShowCombo,
      n = e.data.addScore,
      i = e.data.targetScore,
      a = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.scoreItem;
    a && a.updateScore(n, i, o);
    this.finish(EBehaviorEnum.Success);
  }
}