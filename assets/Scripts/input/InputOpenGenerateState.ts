import { InputBase } from '../inputbase/InputBase';
export default class InputOpenGenerateState extends InputBase {
  excute(e) {
    if (e.openGenerateState) {
      this.gameContext.setOpenGenerateState(true);
    } else {
      this.gameContext.setOpenGenerateState(false);
    }
  }
}