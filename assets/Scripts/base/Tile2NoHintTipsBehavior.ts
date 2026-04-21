import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import I18NStrings from '../framework/data/I18NStrings';
export class Tile2NoHintTipsBehavior extends GameBehaviorsBase {
  start() {
    this.showNoHintTips();
    this.finish(EBehaviorEnum.Success);
  }
  showNoHintTips() {
    var e = I18NStrings.get("Tile4_tip_tool_cannot_use", "Try using other props to solve this challenge");
    mj.EventManager.emit("SHOWTILE2TIPS", e);
  }
}