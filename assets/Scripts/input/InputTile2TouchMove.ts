import { EInsertType } from '../constant/BehaviorsEnum';
import { Tile2MoveEffect } from '../Tile2MoveEffect';
import { Tile2RollCardEffect } from '../Tile2RollCardEffect';
import InputTile2BaseTouchMove from '../inputbase/InputTile2BaseTouchMove';
export default class InputTile2TouchMove extends InputTile2BaseTouchMove {
  excute(t) {
    super.excute.call(this, t);
  }
  runStartMove(t) {
    super.runStartMove.call(this, t);
    var o = this.gameContext.tile2TouchData.tileId;
    this.gameContext.getTileMapObject().getTileObject(o) && this.gameContext.tile2DotTrackerModifier.recordErrorDrag(o);
  }
  runMove(t, o) {
    var n, i;
    super.runMove.call(this, t, o);
    var c = o.iFirstMove,
      u = o.rollCardDatas,
      p = this.gameContext.tile2TouchData.tileId,
      f = this.pushNewRootEffect(this.input, "Tile2MoveEffect"),
      d = this.gameContext.tileSelector.getExpandMultiple();
    try {
      for (var h = __values(u), y = h.next(); !y.done; y = h.next()) {
        var m = y.value,
          v = m.tileId,
          g = m.frontToBack,
          _ = new Tile2RollCardEffect({
            tileId: v,
            frontToBack: g
          });
        this.pushEffect(_, EInsertType.Parallel, f.newEffectId, false);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        y && !y.done && (i = h.return) && i.call(h);
      } finally {
        if (n) throw n.error;
      }
    }
    var T = new Tile2MoveEffect({
      tileId: p,
      pos: t.pos,
      delta: t.delta,
      iFirstMove: c,
      multiple: d
    });
    this.pushEffect(T, EInsertType.Parallel, f.newEffectId, false);
  }
  runLock(t) {
    super.runLock.call(this, t);
    this.gameContext.inputTile2TouchRunLock.runLock(t, this);
  }
}