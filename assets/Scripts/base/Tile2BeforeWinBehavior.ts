import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2BeforeWinBehavior extends GameBehaviorsBase {
  _timeout = 0;
  @mj.traitEvent("Tile2BfWinBhv_start")
  start() {
    var e = this,
      t = this.context.applauseAudioId;
    if (t) {
      if (-1 !== t) {
        mj.audioManager.stopEffect(t);
      } else {
        mj.audioManager.stopAllEffect();
      }
      this.context.applauseAudioId = null;
      mj.audioManager.resumeBGM();
    }
    this.context.hasAutoMergeTimers() && this.context.clearAutoMergeTimers();
    this.context.gameView.setSwallowEventNodeActive(false);
    this._context.gameView.unregisterScreenTouchEnd();
    this.doOtherLogic(function () {
      e.finish(EBehaviorEnum.Success);
    });
  }
  @mj.traitEvent("Tile2BfWinBhv_doOthLgc")
  doOtherLogic(e) {
    e();
  }
}