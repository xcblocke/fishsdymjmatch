import InputTile2BaseTouchStart from '../inputbase/InputTile2BaseTouchStart';
import { Tile2TouchStartEffect } from '../Tile2TouchStartEffect';
export default class InputTile2TouchStart extends InputTile2BaseTouchStart {
  @mj.traitEvent("Tile2IptTchSt_exec")
  excute(t) {
    super.excute.call(this, t);
    this.pushEffect(new Tile2TouchStartEffect({}));
  }
}