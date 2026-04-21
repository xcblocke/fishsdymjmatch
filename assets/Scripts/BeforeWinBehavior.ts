import { EBehaviorEnum } from './simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './base/GameBehaviorsBase';
export class BeforeWinBehavior extends GameBehaviorsBase {
  _timeout = 0;
  @mj.traitEvent("BeforeWinBhv_start")
  start(e) {
    var t = this,
      o = this.context.applauseAudioId;
    if (o) {
      if (-1 !== o) {
        mj.audioManager.stopEffect(o);
      } else {
        mj.audioManager.stopAllEffect();
      }
      this.context.applauseAudioId = null;
      mj.audioManager.resumeBGM();
    }
    this.doOtherLogic(function () {
      t.finish(EBehaviorEnum.Success);
    }, e.data);
  }
  @mj.traitEvent("BeforeWinBhv_doOthLgc")
  doOtherLogic(e) {
    e();
  }
}