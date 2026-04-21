import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import TimeoutCheckerComponent from './TimeoutCheckerComponent';
@mj.trait
@mj.class("TimeoutStopComboTrait")
export default class TimeoutStopComboTrait extends Trait {
  _lastClickTime = 0;
  _timeoutSeconds = 10;
  _timerNode = null;
  _gameType = MjGameType.Normal;
  _isInStop = false;
  _isInComplete = false;
  static traitKey = "TimeoutStopCombo";
  onLoad() {
    var e;
    super.onLoad.call(this);
    (null === (e = this._traitData) || void 0 === e ? void 0 : e.timeout) && (this._timeoutSeconds = this._traitData.timeout);
  }
  onInitViewBhv_crtTls(t, e) {
    var o, i;
    this._gameType = null === (i = null === (o = t.ins) || void 0 === o ? void 0 : o._context) || void 0 === i ? void 0 : i.gameType;
    this._isInComplete = false;
    this._isInStop = false;
    if (this._gameType == MjGameType.Normal) {
      this.updateTime();
    } else {
      this.stopTimer();
    }
    e();
  }
  onIptTchStart_exec(t, e) {
    this.updateTime();
    this._isInStop = false;
    e();
  }
  onGameUI_onBtnHitTips(t, e) {
    this.updateTime();
    e();
  }
  onGameUI_onBtnShuffle(t, e) {
    this.updateTime();
    e();
  }
  onGameUI_onBtnSettings(t, e) {
    this.updateTime();
    this._isInStop = true;
    e();
  }
  onWatchAdVw_setContent(t, e) {
    this._isInStop = true;
    this.updateTime();
    e();
  }
  onUISetDlg_close(t, e) {
    this._isInStop = false;
    this.updateTime();
    e();
  }
  onShuffleBhv_onAnimEnd(t, e) {
    this._isInStop = false;
    this.updateTime();
    e();
  }
  onFailVw_show(t, e) {
    this._isInStop = true;
    this.updateTime();
    e();
  }
  onWatchAdVw_closeClick(t, e) {
    this._isInStop = false;
    this.updateTime();
    e();
  }
  onWatchAdCtrl_onAdSuccess(t, e) {
    this._isInStop = false;
    this.updateTime();
    e();
  }
  onComboChk_canBreakCb(t, e) {
    if (this._gameType != MjGameType.Normal) {
      e();
    } else {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: false
      });
    }
  }
  onIptStartAutoMrg_exec(t, e) {
    this._isInComplete = true;
    this.stopTimer();
    e();
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    this._isInComplete = true;
    this.stopTimer();
    e();
  }
  updateTime() {
    var t;
    if (this._gameType == MjGameType.Normal) {
      var e = ControllerManager.getInstance().getControByName("MainGameController");
      e && (this._lastClickTime = (null === (t = e.getGameTime()) || void 0 === t ? void 0 : t.currentTime) || 0);
      this.startTimer();
    }
  }
  startTimer() {
    var t;
    if (!(this._isInComplete || this._timerNode && cc.isValid(this._timerNode))) {
      this._timerNode = new cc.Node("TimeoutChecker");
      this._timerNode.addComponent(TimeoutCheckerComponent).init(this.checkTimeout.bind(this), 1);
      var e = null === (t = ControllerManager.getInstance().getTopSceneController()) || void 0 === t ? void 0 : t.rootView;
      e && (this._timerNode.parent = e);
    }
  }
  stopTimer() {
    if (this._timerNode && cc.isValid(this._timerNode)) {
      this._timerNode.destroy();
      this._timerNode = null;
    }
  }
  checkTimeout() {
    var t;
    if (!this._isInStop) {
      var e = ControllerManager.getInstance().getControByName("MainGameController");
      if (e) {
        if (((null === (t = e.getGameTime()) || void 0 === t ? void 0 : t.currentTime) || 0) - this._lastClickTime >= this._timeoutSeconds) {
          GameInteraction.input({
            inputType: EGameInputEnum.TimeoutBreakCombo
          });
          this.stopTimer();
        }
      }
    }
  }
}