import { EBehaviorEnum } from './simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './base/GameBehaviorsBase';
export class BeforeDailyChallengeWinBehavior extends GameBehaviorsBase {
  _timeout = 0;
  @mj.traitEvent("BeforeDCWinBhv_start")
  start(e) {
    var t = this;
    this.doOtherLogic(function () {
      t.finish(EBehaviorEnum.Success);
    }, e.data);
  }
  @mj.traitEvent("BeforeDCWinBhv_doOthLgc")
  doOtherLogic(e) {
    e();
  }
}