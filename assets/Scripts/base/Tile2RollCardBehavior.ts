import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2RollCardBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data,
      n = o.tileId,
      i = o.frontToBack,
      r = this.context.getTileNodeMap().get(n);
    if (r) {
      i || this.playRevealAudio();
      r.tile2RollCard(function () {
        t.finish(EBehaviorEnum.Success);
      });
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("T2RollCardBhv_playRvlAud")
  playRevealAudio() {
    mj.audioManager.playEffect(EAudioID.Tile2Overturn);
  }
}