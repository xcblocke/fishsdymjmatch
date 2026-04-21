import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ClassicFailBehavior extends GameBehaviorsBase {
  @mj.traitEvent("ClcFailBhv_start")
  start() {
    this.finish(EBehaviorEnum.Success);
  }
}