import { InputBase } from '../inputbase/InputBase';
export default class InputGameActive extends InputBase {
  excute() {
    this.doGameTiles();
  }
  @mj.traitEvent("IptGameAct_doGTiles")
  doGameTiles() {}
}