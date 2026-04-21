import { RemoveLockMaskEffect } from '../RemoveLockMaskEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputRemoveLockMask extends InputBase {
  excute() {
    this.pushRemoveLockMaskEffect();
  }
  pushRemoveLockMaskEffect() {
    var e = new RemoveLockMaskEffect({});
    this.pushEffect(e);
  }
}