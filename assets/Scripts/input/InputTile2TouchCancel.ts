import { EInsertType } from '../constant/BehaviorsEnum';
import { Tile2ResetMoveEffect } from '../Tile2ResetMoveEffect';
import InputTile2BaseTouchCancel from '../inputbase/InputTile2BaseTouchCancel';
export default class InputTile2TouchCancel extends InputTile2BaseTouchCancel {
  excute(t) {
    super.excute.call(this, t);
  }
  runResetMove() {
    super.runResetMove.call(this);
    var t = this.gameContext.tile2TouchData.tileId;
    if (this.gameContext.getTileMapObject().getTileObject(t)) {
      var o = new Tile2ResetMoveEffect({
        tileId: t
      });
      this.pushEffect(o, EInsertType.Root);
    }
  }
}