import { InputBase } from '../inputbase/InputBase';
export class InputInitEndStrategy extends InputBase {
  excute(e) {
    var t = e.endStrategy;
    this.gameContext.endStrategy.initEndStrategy(t);
  }
}