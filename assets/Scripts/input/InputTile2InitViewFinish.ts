import { HIDELOADING } from '../Config';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2InitViewFinish extends InputBase {
  excute() {
    mj.EventManager.emit(HIDELOADING, this);
  }
}