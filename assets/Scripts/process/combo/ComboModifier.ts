import { BaseCoreObject } from '../../BaseCoreObject';
import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
export class ComboModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  addCombo(e) {
    this.context.getGameData().addComboNum(e);
  }
  resetCombo() {
    this.context.getGameData().resetComboNum();
  }
  lockClick() {
    var e = this.context.getGameData();
    e.addLockClickCount();
    var t = e.getLockClickCount();
    if (this.context.gameType === MjGameType.Tile2Normal) {
      this.context.tile2ComboChecker.checkIsBreakComboState(t) && this.tile2BreakCombo();
    } else {
      this.context.comboChecker.canBreakCombo() && this.breakCombo();
    }
  }
  @mj.traitEvent("ComboMdf_breakCombo")
  breakCombo() {
    this.resetCombo();
    this.context.getGameData().setHasBrokenCombo(true);
  }
  tile2BreakCombo() {
    this.resetCombo();
    this.context.getGameData().setHasBrokenCombo(true);
  }
  updateSlotLevel(e) {
    this.context.getGameData().setSlotLevel(e);
  }
}