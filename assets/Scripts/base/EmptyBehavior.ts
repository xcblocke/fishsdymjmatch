import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class EmptyBehavior extends GameBehaviorsBase {
  start() {
    this.finish(EBehaviorEnum.Success);
  }
}