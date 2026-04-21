import { EInsertType } from '../constant/BehaviorsEnum';
import { UpdateScoreEffect } from '../UpdateScoreEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTimeoutBreakCombo extends InputBase {
  @mj.traitEvent("IptTmoutBrkCb_exec")
  excute() {
    this.gameContext.comboModifier.breakCombo();
    var e = this.gameContext.getGameData(),
      t = new UpdateScoreEffect({
        addScore: 0,
        targetScore: e.getScore(),
        isShowCombo: this.gameContext.comboChecker.canShowCombo()
      });
    this.pushEffect(t, EInsertType.Parallel);
  }
}