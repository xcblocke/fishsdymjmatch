import { DotGameStart } from '../gamePlay/dot/DGameStart';
import { EInsertType } from '../constant/BehaviorsEnum';
import { ETile2SlotType } from '../core/simulator/constant/GameTypeEnums';
import { Tile2InitSlotBarEffect } from '../Tile2InitSlotBarEffect';
import { Tile2ScreenEdgeEffect } from '../Tile2ScreenEdgeEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2InitSlotBar extends InputBase {
  @mj.traitEvent("IptT2InitSlotBar_exec")
  excute() {
    for (var e = this.gameContext.getGameData(), t = e.slotBarIds, o = this.gameContext.getTileMapObject(), n = [], i = 0; i < t.length; i++) {
      var r = o.getTileObjectByPosId(t[i]);
      r && n.push(r.id);
    }
    var p = e.getSlotLevel(),
      f = this.gameContext.getTile2SlotType(),
      d = this.isShowSlot3();
    p = d ? 0 : p;
    this.pushEffect(new Tile2InitSlotBarEffect({
      tileIds: n,
      slotLevel: p,
      slotType: f
    }), EInsertType.Root);
    if (this.gameContext.getTile2SlotType() === ETile2SlotType.Slot3 || d) {
      var h = e.getComboNum(),
        y = this.gameContext.tile2ComboChecker.getReachedScreenEdgeThreshold(h);
      y > 0 && this.pushEffect(new Tile2ScreenEdgeEffect({
        comboNum: y,
        skipBurst: true
      }), EInsertType.Parallel);
    }
    this.gameContext.getIsNewGame() && DotGameStart.dot(this.gameContext);
  }
  @mj.traitEvent("IptT2InitSlotBar_isSlot3")
  isShowSlot3() {
    return false;
  }
}