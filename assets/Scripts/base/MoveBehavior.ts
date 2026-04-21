import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
this && this.__values;
export class MoveBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.tileId;
    if (t) {
      var o = this.context.getTileNodeMap().get(t);
      if (!o) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      o.selected();
      o.setPositionWithDelta(true, e.data.delta);
      e.data.iFirstMove && this.playAudio();
    }
    this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("MoveBhv_playAudio")
  playAudio() {
    mj.audioManager.playEffect(EAudioID.Drag);
  }
}