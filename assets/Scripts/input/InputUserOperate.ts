import { InputBase } from '../inputbase/InputBase';
export default class InputUserOperate extends InputBase {
  excute() {
    this.gameContext.getGameData().updateLastOpTime();
  }
}