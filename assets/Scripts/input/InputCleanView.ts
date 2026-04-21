import { EInsertType } from '../constant/BehaviorsEnum';
import { CleanViewEffect } from '../CleanViewEffect';
import { InputBase } from '../inputbase/InputBase';
export class InputCleanView extends InputBase {
  excute() {
    var e = new CleanViewEffect({});
    this.pushEffect(e, EInsertType.Root);
  }
}