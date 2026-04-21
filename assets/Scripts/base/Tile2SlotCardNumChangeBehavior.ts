import { GameBehaviorsBase } from './GameBehaviorsBase';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
export class Tile2SlotCardNumChangeBehavior extends GameBehaviorsBase {
  @mj.traitEvent("T2SlotNumChg_start")
  start() {
    this.context.getTileNodeMap();
    this.finish(EBehaviorEnum.Success);
  }
}