import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class DuoxiaoComboBehavior extends GameBehaviorsBase {
  start(e) {
    GameInteraction.input({
      inputType: EGameInputEnum.DuoxiaoAutoMerge,
      duoxiaoCount: e.data.duoxiaoCount
    });
    this.finish();
  }
}