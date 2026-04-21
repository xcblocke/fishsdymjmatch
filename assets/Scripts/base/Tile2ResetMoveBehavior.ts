import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2ResetMoveBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data.tileId,
      n = this.context.getTileNodeMap().get(o);
    if (n) {
      n.tile2ResetMove(function () {
        t.finish(EBehaviorEnum.Success);
      });
      mj.audioManager.playEffect(EAudioID.Tile2Fit);
    } else this.finish(EBehaviorEnum.Success);
  }
}