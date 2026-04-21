import { EInsertType } from './constant/BehaviorsEnum';
import { Tile2ResetMoveEffect } from './Tile2ResetMoveEffect';
import { Tile2RollCardEffect } from './Tile2RollCardEffect';
import InputTile2BaseTouchEnd from './inputbase/InputTile2BaseTouchEnd';
import ClearHelper from './ClearHelper';
export default class InputTile2TouchEnd extends InputTile2BaseTouchEnd {
  @mj.traitEvent("Tile2IptTchEnd_runClr")
  runClear(t) {
    super.runClear.call(this, t);
    ClearHelper.runClear(this.gameContext, this.input, this, {
      tileIds: t
    });
  }
  runRollCard(t) {
    var o, n;
    super.runRollCard.call(this, t);
    var i = this.pushNewRootEffect(this.input, "Tile2RollCardEffect");
    try {
      for (var r = __values(t), s = r.next(); !s.done; s = r.next()) {
        var u = s.value,
          p = new Tile2RollCardEffect({
            tileId: u.tileId,
            frontToBack: u.frontToBack
          });
        this.pushEffect(p, EInsertType.Parallel, i.newEffectId, false);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (n = r.return) && n.call(r);
      } finally {
        if (o) throw o.error;
      }
    }
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
  runLock(t) {
    super.runLock.call(this, t);
    this.gameContext.inputTile2TouchRunLock.runLock(t, this);
  }
}