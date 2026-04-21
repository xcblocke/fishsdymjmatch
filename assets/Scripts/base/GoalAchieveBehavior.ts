import { EBehaviorEnum, EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import GoalAchieveItem from '../items/GoalAchieveItem';
import { GameInteraction } from '../GameInteraction/GameInteraction';
export class GoalAchieveBehavior extends GameBehaviorsBase {
  _timeout = 3000;
  async start() {
    var e,
      t,
      o,
      n = this;
    e = this.context.gameView.effectNode;
    if (!(t = await GoalAchieveItem.createUI())) {
      this.finish(EBehaviorEnum.Success);
      return;
    }
    t.setParent(e);
    t.position = cc.v3(0, 0, 0);
    if (!(o = t.getComponent(GoalAchieveItem))) {
      t.destroy();
      this.finish(EBehaviorEnum.Success);
      return;
    }
    o.playSound();
    o.playAnimation(function () {
      GameInteraction.input({
        inputType: EGameInputEnum.StartAutoMerge,
        type: "travelVictory"
      });
      n.finish(EBehaviorEnum.Success);
    });
    return;
  }
}