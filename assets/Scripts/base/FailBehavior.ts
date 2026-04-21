import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class FailBehavior extends GameBehaviorsBase {
  @mj.traitEvent("FailBhv_start")
  start() {
    this.finish(EBehaviorEnum.Success);
  }
}