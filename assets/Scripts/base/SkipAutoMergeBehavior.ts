import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class SkipAutoMergeBehavior extends GameBehaviorsBase {
  start() {
    this.finish(EBehaviorEnum.Success);
  }
}