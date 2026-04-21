import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2SlotAdvanceBehavior extends GameBehaviorsBase {
  start(e) {
    this.finish(EBehaviorEnum.Success);
    var t = e.data.slotLevel,
      o = this.context.gameView,
      n = null == o ? void 0 : o.slotBarView,
      i = this.isShowSlot4();
    if ((null == n ? void 0 : n.slotBarEffectManager) && i) {
      n.slotBarEffectManager.advanceToLevel(t);
      this.onSlotAdvance(t);
    }
  }
  @mj.traitEvent("T2SlotAdvBhv_advance")
  onSlotAdvance() {}
  @mj.traitEvent("T2SlotAdvBhv_isShow4")
  isShowSlot4() {
    return true;
  }
}