import { CardLockDarkenEffect } from '../CardLockDarkenEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputToggleCardLockDarken extends InputBase {
  @mj.traitEvent("IptTglLock_exec")
  excute(e) {
    var t = e.enabled;
    this.pushToggleCardLockDarkenEffect(t);
  }
  pushToggleCardLockDarkenEffect(e) {
    var t = new CardLockDarkenEffect({
      isAutoMerge: !e
    });
    this.pushEffect(t);
  }
}