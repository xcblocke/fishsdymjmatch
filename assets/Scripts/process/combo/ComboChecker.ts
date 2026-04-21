import UserModel from '../../gamePlay/user/UserModel';
import { BaseCoreObject } from '../../BaseCoreObject';
export class ComboChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  getShowLimit() {
    return 3;
  }
  @mj.traitEvent("ComboChk_canShowCombo")
  canShowCombo() {
    var e = this.context.getGameData();
    return !!UserModel.getInstance().isGuideFinished() && e.getComboNum() >= this.getShowLimit();
  }
  getBreakLimit() {
    return 1;
  }
  @mj.traitEvent("ComboChk_canBreakCb")
  canBreakCombo() {
    return this.context.getGameData().getLockClickCount() >= this.getBreakLimit();
  }
}