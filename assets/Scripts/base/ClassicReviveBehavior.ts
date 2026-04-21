import { EBehaviorEnum, EGameInputEnum, EShuffleFrom } from '../simulator/constant/GameInputEnum';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ClassicReviveBehavior extends GameBehaviorsBase {
  _timeout = 0;
  start() {
    var e = this;
    this.showReviveView(function (t) {
      if (t) {
        e.doRevive();
        e.finish(EBehaviorEnum.Success);
      } else {
        GameInteraction.input({
          inputType: EGameInputEnum.ClassicFail
        });
        e.finish(EBehaviorEnum.Success);
      }
    });
    this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("ClcRevBhv_showReviveVw")
  showReviveView(e) {
    e && e(false);
  }
  doRevive() {
    GameInteraction.input({
      inputType: EGameInputEnum.Shuffle,
      from: EShuffleFrom.ClassicRevive
    });
  }
}