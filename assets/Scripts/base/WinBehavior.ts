import ControllerManager from '../framework/manager/ControllerManager';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class WinBehavior extends GameBehaviorsBase {
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
    this.pushWinView(e);
    this.context.gameType !== MjGameType.Travel && this.context.gameView.timerComponent.doOnce(0.2, function () {
      t.context.gameView.scoreItem.forceUpdateScore(e.data.settlementScore);
    });
    this.finish();
  }
  @mj.traitEvent("WinBhv_pushWinView")
  pushWinView(e) {
    ControllerManager.getInstance().pushViewByController("WinController", {
      data: e.data,
      bgStyle: null,
      isShowAction: false
    }, null);
  }
}