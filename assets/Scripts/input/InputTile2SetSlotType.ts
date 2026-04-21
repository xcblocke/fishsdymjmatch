import { InputBase } from '../inputbase/InputBase';
export default class InputTile2SetSlotType extends InputBase {
  excute(e) {
    this.gameContext.setTile2SlotType(e.slotType);
  }
}