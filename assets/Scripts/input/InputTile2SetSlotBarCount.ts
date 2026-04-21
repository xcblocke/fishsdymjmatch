import { InputBase } from '../inputbase/InputBase';
export default class InputTile2SetSlotBarCount extends InputBase {
  excute(e) {
    var t = e.slotBarCount || 4;
    this.gameContext.tile2SlotBarModifier.initSlotBar(t);
  }
}