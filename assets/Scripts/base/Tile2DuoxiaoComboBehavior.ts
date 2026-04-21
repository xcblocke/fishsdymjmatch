import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2DuoxiaoComboBehavior extends GameBehaviorsBase {
  start(e) {
    GameInteraction.input({
      inputType: EGameInputEnum.Tile2DuoxiaoAutoMerge,
      duoxiaoCount: e.data.duoxiaoCount
    });
    this.finish();
  }
}