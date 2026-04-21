import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { EVT_TIME_STAT_UPDATE } from '../../../Scripts/Config';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
@mj.trait
@mj.class("ClassicVideo61Trait")
export default class ClassicVideo61Trait extends Trait {
  _playDuration = 150;
  _retryStartTime = 60;
  _maxCloseCount = 1;
  _initialMultiplier = 1;
  _multiplierIncrement = 0.2;
  _maxMultiplier = 10;
  static traitKey = "ClassicVideo61";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData;
    this._playDuration = (null == e ? void 0 : e.playDuration) || 150;
    this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 60;
    this._maxCloseCount = (null == e ? void 0 : e.maxCloseCount) || 0;
    this._initialMultiplier = (null == e ? void 0 : e.initialMultiplier) || 1.2;
    this._multiplierIncrement = (null == e ? void 0 : e.multiplierIncrement) || 0.2;
    this._maxMultiplier = (null == e ? void 0 : e.maxMultiplier) || 10;
    mj.EventManager.on(EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
    this.initializeLocalData();
    this.localData.remainingTime = this._playDuration;
    this.localData.waitingForNextBatch = false;
  }
  initializeLocalData() {
    void 0 !== this.localData.remainingTime && null !== this.localData.remainingTime && "" !== this.localData.remainingTime || (this.localData.remainingTime = this._playDuration);
    void 0 !== this.localData.waitingForNextBatch && null !== this.localData.waitingForNextBatch && "" !== this.localData.waitingForNextBatch || (this.localData.waitingForNextBatch = false);
    void 0 !== this.localData.closeCountInGame && null !== this.localData.closeCountInGame && "" !== this.localData.closeCountInGame || (this.localData.closeCountInGame = this._maxCloseCount);
    void 0 !== this.localData.currentMultiplier && null !== this.localData.currentMultiplier && "" !== this.localData.currentMultiplier || (this.localData.currentMultiplier = this._initialMultiplier);
    void 0 !== this.localData.batchBreakComboCount && null !== this.localData.batchBreakComboCount && "" !== this.localData.batchBreakComboCount || (this.localData.batchBreakComboCount = 0);
    void 0 !== this.localData.uiShownAndPending && null !== this.localData.uiShownAndPending && "" !== this.localData.uiShownAndPending || (this.localData.uiShownAndPending = false);
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
      this.localData.remainingTime <= 0 && (this.localData.waitingForNextBatch = true);
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
    DotGameAdShowStage.dot(false, "classicInGame61");
    AdManager.getInstance().playVideoAd(EAdPosition.InGameMotivation_GameContinue_Classic, {
      onSuccess: function () {
        t.onVideoAdSuccess();
        t.localData.batchBreakComboCount = 0;
      },
      onFailed: function () {
        t.resetTimer(t._playDuration);
        t.localData.batchBreakComboCount = 0;
      }
    }, "classic_in_game_61", {
      adTimeType: "classicInGameAd61"
    });
  }
  onVideoAdSuccess() {
    this.localData.batchBreakComboCount <= 1 && (this.localData.currentMultiplier = Math.min(this.localData.currentMultiplier + this._multiplierIncrement, this._maxMultiplier));
    this.resetTimer(this._playDuration);
  }
  onClickRefuse() {
    this.localData.uiShownAndPending = false;
    this.localData.batchBreakComboCount = 0;
    if (this.localData.closeCountInGame > 0) {
      this.localData.closeCountInGame--;
      this.resetTimer(this._playDuration);
    } else {
      this.resetTimer(this._playDuration);
      GameInteraction.input({
        inputType: EGameInputEnum.ClassicFail,
        skipBeforeFailEffect: true
      });
    }
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
    if (this.isClassicMode()) {
      this.localData.remainingTime = this._playDuration;
      this.localData.waitingForNextBatch = false;
      this.localData.closeCountInGame = this._maxCloseCount;
      this.localData.currentMultiplier = this._initialMultiplier;
      this.localData.batchBreakComboCount = 0;
    }
  }
  onGsListener_onReplayGame(t, e) {
    if (this.isClassicMode()) {
      this.localData.remainingTime = this._playDuration;
      this.localData.waitingForNextBatch = false;
      this.localData.closeCountInGame = this._maxCloseCount;
      this.localData.currentMultiplier = this._initialMultiplier;
      this.localData.batchBreakComboCount = 0;
    }
    e();
  }
  onChgBatchAnimBhv_finish(t, e) {
    if (this.isClassicMode()) {
      if (this.localData.waitingForNextBatch) {
        this.localData.waitingForNextBatch = false;
        this.showRewardButton();
      } else this.localData.batchBreakComboCount = 0;
      e();
    } else e();
  }
  onComboMdf_breakCombo(t, e) {
    e();
    this.isClassicMode() && this.localData.batchBreakComboCount++;
  }
  onScoreMod_applyMultiplier(t, e) {
    var i;
    if (this.isClassicMode()) {
      if (this.localData.currentMultiplier > 1) {
        var a = (null === (i = t.args) || void 0 === i ? void 0 : i[0]) || 0;
        e({
          returnVal: Math.floor(a * this.localData.currentMultiplier)
        });
      } else e();
    } else e();
  }
  onClcVideoAdVw_load(t, e) {
    e();
    if (this.isClassicMode()) {
      var i = t.ins;
      i && "function" == typeof i.updateDisplay && i.updateDisplay({
        hasCloseCount: this.localData.closeCountInGame > 0,
        currentMultiplier: this.localData.currentMultiplier + this._multiplierIncrement,
        showSpecialTitle: this.localData.batchBreakComboCount <= 1
      });
    }
  }
  onClcVideoAdVw_clickWatch(t, e) {
    if (this.isClassicMode()) {
      ControllerManager.getInstance().closeViewByName("ClassicVideoAdController");
      this.onClickWatch();
      e();
    } else e();
  }
  onClcVideoAdVw_clickRefuse(t, e) {
    if (this.isClassicMode()) {
      ControllerManager.getInstance().closeViewByName("ClassicVideoAdController");
      this.onClickRefuse();
      e();
    } else e();
  }
}