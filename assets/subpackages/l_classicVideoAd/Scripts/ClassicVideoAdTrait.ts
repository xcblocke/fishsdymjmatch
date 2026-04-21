import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { EVT_TIME_STAT_UPDATE } from '../../../Scripts/Config';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
@mj.trait
@mj.class("ClassicVideoAdTrait")
export default class ClassicVideoAdTrait extends Trait {
  _playDuration = 300;
  _retryStartTime = 120;
  static traitKey = "ClassicVideoAd";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData;
    this._playDuration = (null == e ? void 0 : e.playDuration) || 300;
    this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 120;
    mj.EventManager.on(EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
    void 0 !== this.localData.remainingTime && null !== this.localData.remainingTime && "" !== this.localData.remainingTime || (this.localData.remainingTime = this._playDuration);
    void 0 !== this.localData.waitingForNextBatch && null !== this.localData.waitingForNextBatch && "" !== this.localData.waitingForNextBatch || (this.localData.waitingForNextBatch = false);
    void 0 !== this.localData.uiShownAndPending && null !== this.localData.uiShownAndPending && "" !== this.localData.uiShownAndPending || (this.localData.uiShownAndPending = false);
    this.localData.remainingTime = this._playDuration;
    this.localData.waitingForNextBatch = false;
  }
  isClassicMode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Classic;
  }
  resetTimer(t) {
    this.localData.remainingTime = t;
    this.localData.waitingForNextBatch = false;
    this.localData = this.localData;
  }
  onTimeUpdate(t) {
    if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
      this.localData.remainingTime -= t;
      this.localData = this.localData;
      if (this.localData.remainingTime <= 0) {
        this.localData.waitingForNextBatch = true;
        this.localData = this.localData;
      }
    }
  }
  showRewardButton() {
    this.localData.uiShownAndPending = true;
    ControllerManager.getInstance().pushViewByController("ClassicVideoAdController", {
      bgStyle: {
        blackOpacity: 200
      }
    });
  }
  onClickWatch() {
    var t = this;
    this.localData.uiShownAndPending = false;
    DotGameAdShowStage.dot(true, "classicInGame");
    AdManager.getInstance().playVideoAd(EAdPosition.InGameMotivation_GameContinue_Classic, {
      onSuccess: function () {
        t.resetTimer(t._playDuration);
      },
      onFailed: function () {
        t.resetTimer(t._playDuration);
      }
    }, "classic_in_game", {
      adTimeType: "classicInGameAd"
    });
  }
  onClickRefuse() {
    this.localData.uiShownAndPending = false;
    this.resetTimer(this._playDuration);
    GameInteraction.input({
      inputType: EGameInputEnum.ClassicFail,
      skipBeforeFailEffect: true
    });
  }
  onMainGameCtrl_vwLoad(t, e) {
    e();
    this.isClassicMode();
  }
  onEntAniFiBhv_start(t, e) {
    if (this.isClassicMode() && this.localData.uiShownAndPending) {
      this.localData.uiShownAndPending = false;
      GameInteraction.input({
        inputType: EGameInputEnum.ClassicFail,
        skipBeforeFailEffect: true,
        skipInterAd: true
      });
    }
    e();
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
        var i = AdManager.getInstance().checkVideoAdIsReady(),
          a = isNetworkAvailable();
        if (!i && !a) {
          this.resetTimer(this._retryStartTime);
          e();
          return;
        }
        this.showRewardButton();
      }
      e();
    } else e();
  }
}