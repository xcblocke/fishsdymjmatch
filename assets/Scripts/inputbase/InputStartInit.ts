import { EInsertType } from '../constant/BehaviorsEnum';
import { StartInitEffect } from '../StartInitEffect';
import { InputBase } from './InputBase';
export default class InputStartInit extends InputBase {
  excute() {
    this.pushStartInitEffect();
  }
  pushStartInitEffect() {
    var e = new StartInitEffect({});
    this.pushEffect(e, EInsertType.Serial);
  }
}