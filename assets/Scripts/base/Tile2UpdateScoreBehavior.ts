import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2UpdateScoreBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o = e.data,
      n = o.isShowCombo,
      i = o.addScore,
      a = o.targetScore,
      l = null === (t = this.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem;
    l && l.updateScore(i, a, n);
    this.finish(EBehaviorEnum.Success);
  }
}