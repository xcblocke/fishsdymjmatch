import { EInsertType } from '../constant/BehaviorsEnum';
import { AddPropOff3hEffect } from '../AddPropOff3hEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputAddPropOff3h extends InputBase {
  excute(e) {
    this.pushEffect(new AddPropOff3hEffect({
      action: e.type
    }), EInsertType.Parallel);
  }
}