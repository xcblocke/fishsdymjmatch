import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class DailyChallengeDateBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.date;
    this.context.gameView.gameUI.updateDailyChallengeDate(t);
    this.finish(EBehaviorEnum.Success);
  }
}