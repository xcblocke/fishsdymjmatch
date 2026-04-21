import { EGameInputEnum } from './simulator/constant/GameInputEnum';
import { GameInteraction } from './GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './base/GameBehaviorsBase';
export class AddLevelFinishBehavior extends GameBehaviorsBase {
  start(e) {
    if (e.data.isOpenGenerateState) {
      GameInteraction.input({
        inputType: EGameInputEnum.DropClassic
      });
    } else {
      this.context.getTileNodeManager().destoryEmptyLayerNodes();
    }
    this.finish();
  }
}