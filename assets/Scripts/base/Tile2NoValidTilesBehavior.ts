import I18NStrings from '../framework/data/I18NStrings';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2NoValidTilesBehavior extends GameBehaviorsBase {
  start() {
    var e = I18NStrings.get("Tile4_back_tool_cannot_use", "No valid tiles");
    mj.EventManager.emit("SHOWTILE2TIPS", e);
    this.finish(EBehaviorEnum.Success);
  }
}