import { HIDELOADING } from '../Config';
import { EInsertType } from '../constant/BehaviorsEnum';
import { UpdateHitTipsPropEffect } from '../UpdateHitTipsPropEffect';
import { UpdateShufflePropEffect } from '../UpdateShufflePropEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputInitViewFinish extends InputBase {
  @mj.traitEvent("IptInitViewFin_exec")
  excute() {
    this.pushUpdateHitTipsPropEffect(this.gameContext.getGameData().getHitTipsNums());
    this.pushUpdateShufflePropEffect(this.gameContext.getGameData().getShuffleNums());
    mj.EventManager.emit(HIDELOADING, this);
  }
  pushUpdateHitTipsPropEffect(e) {
    var t = new UpdateHitTipsPropEffect({
      curNum: e
    });
    this.pushEffect(t);
  }
  pushUpdateShufflePropEffect(e) {
    var t = new UpdateShufflePropEffect({
      curNum: e
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
}