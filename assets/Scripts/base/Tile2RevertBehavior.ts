import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
export class Tile2RevertBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this,
      o = e.data.tileId,
      n = this.context.getTileNodeMap().get(o);
    if (n) {
      var i = this.context.gameView,
        a = null == i ? void 0 : i.slotBarView;
      a && a.removeSlotBar([o]);
      n.tile2RevertFromSlotBar(function () {
        n.tile2RollCard();
        t.finish(EBehaviorEnum.Success);
      });
      this.playRevertSound();
    } else this.finish(EBehaviorEnum.Success);
  }
  playRevertSound() {
    mj.audioManager.playEffect(EAudioID.Tile2Fit);
  }
}