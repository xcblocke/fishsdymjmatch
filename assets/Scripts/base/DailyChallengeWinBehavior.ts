import ControllerManager from '../framework/manager/ControllerManager';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class DailyChallengeWinBehavior extends GameBehaviorsBase {
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
    this.context.hasAutoMergeTimers() && this.context.clearAutoMergeTimers();
    this.context.gameView.setSwallowEventNodeActive(false);
    this._context.gameView.unregisterScreenTouchEnd();
    ControllerManager.getInstance().closeAllPanelsAndAlerts();
    ControllerManager.getInstance().pushViewByController("DailyChallengeWinController", {
      data: e.data,
      bgStyle: null,
      isShowAction: false
    }, null);
    this.context.gameView.timerComponent.doOnce(0.2, function () {
      t.context.gameView.scoreItem.forceUpdateScore(e.data.settlementScore);
    });
    this.finish();
  }
}