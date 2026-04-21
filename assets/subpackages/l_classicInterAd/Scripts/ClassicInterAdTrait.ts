import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { EVT_TIME_STAT_UPDATE } from '../../../Scripts/Config';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
@mj.trait
@mj.class("ClassicInterAdTrait")
export default class ClassicInterAdTrait extends Trait {
  _playDuration = 300;
  _retryStartTime = 120;
  static traitKey = "ClassicInterAd";
  onLoad() {
    super.onLoad.call(this);
    var e = this.traitData;
    this._playDuration = (null == e ? void 0 : e.playDuration) || 300;
    this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 120;
    mj.EventManager.on(EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
    this.localData.remainingTime = this._playDuration;
    this.localData.waitingForNextBatch = false;
  }
  isClassicMode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Classic;
  }
  resetTimer(t) {
    this.localData.remainingTime = t;
    this.localData.waitingForNextBatch = false;
  }
  onTimeUpdate(t) {
    if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
      this.localData.remainingTime -= t;
      if (this.localData.remainingTime <= 0) {
        this.localData.waitingForNextBatch = true;
        this.localData = this.localData;
      }
    }
  }
  playAd() {
    var t = this;
    this._playDuration, this.localData.remainingTime;
    DotGameAdShowStage.dot(true, "endlessInGame");
    AdManager.getInstance().playInterAd(EAdPosition.InGameInsertScreen_PauseContinue, {
      onSuccess: function () {
        t.resetTimer(t._playDuration);
      },
      onFailed: function () {
        t.resetTimer(t._playDuration);
      }
    }, "endless_in_game", {
      adTimeType: "endlessInGameAd"
    });
  }
  onMainGameCtrl_vwLoad(t, e) {
    e();
    this.isClassicMode();
  }
  onMainGameCtrl_uiDes(t, e) {
    e();
    this.isClassicMode();
  }
  onGsListener_onNewGame(t, e) {
    e();
    this.isClassicMode() && this.resetTimer(this._playDuration);
  }
  onGsListener_onReplayGame(t, e) {
    e();
    this.isClassicMode() && this.resetTimer(this._playDuration);
  }
  onChgBatchAnimBhv_finish(t, e) {
    if (this.isClassicMode()) {
      if (this.localData.waitingForNextBatch) {
        this.localData.waitingForNextBatch = false;
        this.localData = this.localData;
        var i = AdManager.getInstance().checkInterAdIsReady(),
          a = isNetworkAvailable();
        if (!i && !a) {
          this.resetTimer(this._retryStartTime);
          e();
          return;
        }
        this.playAd();
      }
      e();
    } else e();
  }
}