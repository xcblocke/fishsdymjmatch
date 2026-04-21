import ControllerManager from '../framework/manager/ControllerManager';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class TravelWinBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this.context.applauseAudioId;
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
    ControllerManager.getInstance().closeAllPanelsAndAlerts();
    ControllerManager.getInstance().pushViewByController("TravelWinController", {
      data: e.data,
      bgStyle: null,
      isShowAction: false
    }, null);
    this.finish();
  }
}