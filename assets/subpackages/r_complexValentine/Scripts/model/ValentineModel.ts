import Model from '../../../../Scripts/framework/data/Model';
import { EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE } from '../../../../Scripts/Config';
import { EValentineStage } from '../../../../Scripts/DGameValentine';
export enum ValentineActState {
  NotStarted = 0,
  InProgress = 1,
  Activated = 2,
  Ended = 3,
}
export var ValentineEvents = {
  CLOSE_VALENTINE_ACTIVATE_VIEW: "closeValentineActivateView",
  UPDATE_ACTIVITY_STATE: "updateActivityState",
  UPDATE_ACTIVITY_REMAIN_TIME: "updateActivityRemainTime",
  VALENTINE_GAME_SHOW: "valentineGameShow",
  VALENTINE_GAME_HIDE: "valentineGameHide",
  VALENTINE_CLOSE_INTRO_POPUP: "valentineCloseIntroPopup",
  VALENTINE_CLOSE_ACTIVATE_POPUP: "valentineCloseActivatePopup",
  VALENTINE_CLOSE_END_POPUP: "valentineCloseEndPopup"
};
@mj.class("ValentineModel")
export default class ValentineModel extends Model {
  _config = {
    startDate: "2026-02-06 00:00:00",
    endDate: "2026-02-22 23:59:59",
    phase1Duration: 168,
    phase2Duration: 360,
    requiredLevels: 10
  };
  _passTime = 0;
  _cdHandler = -1;
  get actLeftTime() {
    return this._actLeftTime;
  }
  set actLeftTime(t) {
    if (this._actLeftTime !== t) {
      this._actLeftTime = t;
      this.dispatchEvent(ValentineEvents.UPDATE_ACTIVITY_REMAIN_TIME, this._actLeftTime);
    }
  }
  constructor() {
    super();
    this.initDefaultData();
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
    _t[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    return _t;
  }
  onGameShow() {
    this.updateLeftTime();
    this.dispatchEvent(ValentineEvents.VALENTINE_GAME_SHOW);
  }
  onGameHide() {
    this.dispatchEvent(ValentineEvents.VALENTINE_GAME_HIDE);
  }
  initDefaultData() {
    this.isLocalEmpty(this.localData.progress) && (this.localData.progress = 0);
    this.isLocalEmpty(this.localData.state) && (this.localData.state = ValentineActState.NotStarted);
    this.isLocalEmpty(this.localData.startTime) && (this.localData.startTime = -1);
    this.isLocalEmpty(this.localData.activatedTime) && (this.localData.activatedTime = -1);
    this.isLocalEmpty(this.localData.hasShownIntroPopup) && (this.localData.hasShownIntroPopup = false);
    this.isLocalEmpty(this.localData.hasShownActivatePopup) && (this.localData.hasShownActivatePopup = false);
    this.isLocalEmpty(this.localData.hasShownEndPopup) && (this.localData.hasShownEndPopup = false);
    this.isLocalEmpty(this.localData.effectEnabled) && (this.localData.effectEnabled = true);
    this.isLocalEmpty(this.localData.hasActivated) && (this.localData.hasActivated = false);
    this.updateLeftTime();
  }
  updateLeftTime() {
    switch (this.localData.state) {
      case ValentineActState.NotStarted:
        break;
      case ValentineActState.InProgress:
        this.actLeftTime = this.localData.startTime + 3600000 * this._config.phase1Duration - Date.now();
        this.actLeftTime = Math.max(0, this.actLeftTime);
        this.startCountDown();
        break;
      case ValentineActState.Activated:
        this.actLeftTime = this.localData.activatedTime + 3600000 * this._config.phase2Duration - Date.now();
        this.actLeftTime = Math.max(0, this.actLeftTime);
        this.startCountDown();
        break;
      default:
        this.actLeftTime = 0;
    }
  }
  startCountDown() {
    var t = this;
    if (-1 !== this._cdHandler) {
      clearInterval(this._cdHandler);
      this._cdHandler = -1;
    }
    if (this.actLeftTime <= 0) {
      this.changeActivityState(ValentineActState.Ended);
    } else {
      this._cdHandler = setInterval(function () {
        t.actLeftTime -= 1000;
        if (t.actLeftTime <= 0) {
          clearInterval(t._cdHandler);
          t._cdHandler = -1;
          t.changeActivityState(ValentineActState.Ended);
        }
        if (t._passTime >= 300000) {
          t.correctTime();
          t._passTime = 0;
        } else t._passTime += 1000;
      }, 1000);
    }
  }
  correctTime() {
    this.updateLeftTime();
  }
  getActLeftTime() {
    return this._actLeftTime;
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  setConfig(t) {
    this._config = Object.assign(Object.assign({}, this._config), t);
  }
  getConfig() {
    return this._config;
  }
  parseDateString(t) {
    var e = t.split(/[- :]/),
      n = parseInt(e[0]),
      o = parseInt(e[1]) - 1,
      i = parseInt(e[2]),
      a = parseInt(e[3]) || 0,
      r = parseInt(e[4]) || 0,
      l = parseInt(e[5]) || 0;
    return new Date(n, o, i, a, r, l).getTime();
  }
  getActivityStartTime() {
    return this.parseDateString(this._config.startDate);
  }
  getActivityEndTime() {
    return this.parseDateString(this._config.endDate);
  }
  isInActivityTime() {
    var t = Date.now(),
      e = this.getActivityStartTime(),
      n = this.getActivityEndTime();
    return t >= e && t <= n;
  }
  @mj.traitEvent("ValModel_isActOpen")
  isActivityOpen() {
    return this.isInActivityTime();
  }
  isActualActivityOpen() {
    return this.localData.startTime > 0;
  }
  getActivityState() {
    return this.localData.state;
  }
  changeActivityState(t) {
    if (this.localData.state !== t) {
      this.localData.state = t;
      ValentineActState.Ended != t && this.updateLeftTime();
      this.dispatchEvent(ValentineEvents.UPDATE_ACTIVITY_STATE, t);
    }
  }
  initActivity() {
    if (this.localData.startTime < 0 && this.isActivityOpen()) {
      this.localData.startTime = Date.now();
      this.changeActivityState(ValentineActState.InProgress);
    }
  }
  checkInitAct() {
    this.isActivityOpen() && ValentineActState.NotStarted == this.getActivityState() && this.initActivity();
  }
  addProgress(t = 1) {
    this.localData.progress = Math.min(this.localData.progress + t, this._config.requiredLevels);
    this.isProgressComplete() && this.localData.activatedTime < 0 && this.activateEffect();
  }
  isProgressComplete() {
    return this.localData.progress >= this._config.requiredLevels;
  }
  getProgress() {
    if (0 == this._config.requiredLevels) return 0;
    var t = this.localData.progress / this._config.requiredLevels;
    return parseFloat(t.toFixed(1));
  }
  getCurrentStage() {
    return this.localData.state === ValentineActState.NotStarted ? EValentineStage.Stage1 : this.localData.state === ValentineActState.InProgress ? EValentineStage.Stage1 : this.localData.state === ValentineActState.Activated ? EValentineStage.Stage2 : EValentineStage.Stage3;
  }
  activateEffect() {
    var t = Date.now();
    this.localData.activatedTime = t;
    this._config.phase2Duration;
    this.changeActivityState(ValentineActState.Activated);
    this.markActivated();
  }
  isEffectActive() {
    return ValentineActState.Activated === this.localData.state && this.localData.effectEnabled;
  }
  setEffectEnabled(t) {
    this.localData.effectEnabled = t;
  }
  toggleEffectEnabled() {
    this.setEffectEnabled(!this.localData.effectEnabled);
  }
  getEffectEnabled() {
    return this.localData.effectEnabled;
  }
  markIntroPopupShown() {
    this.localData.hasShownIntroPopup = true;
  }
  markActivatePopupShown() {
    this.localData.hasShownActivatePopup = true;
  }
  markEndPopupShown() {
    this.localData.hasShownEndPopup = true;
  }
  markActivated() {
    this.localData.hasActivated = true;
  }
  shouldShowIntroPopup() {
    return !this.localData.hasShownIntroPopup && this.isActivityOpen() && this.getActivityState() === ValentineActState.InProgress;
  }
  shouldShowActivatePopup() {
    return !this.localData.hasShownActivatePopup && this.isProgressComplete() && this.localData.activatedTime > 0;
  }
  shouldShowEndPopup() {
    var t = this.getActivityState();
    return !this.localData.hasShownEndPopup && t === ValentineActState.Ended && this.localData.activatedTime > 0;
  }
  resetActivity() {
    this.localData.progress = 0;
    this.localData.state = ValentineActState.NotStarted;
    this.localData.startTime = -1;
    this.localData.activatedTime = -1;
    this.localData.hasShownIntroPopup = false;
    this.localData.hasShownActivatePopup = false;
    this.localData.hasShownEndPopup = false;
    this.localData.effectEnabled = true;
  }
  getPhase1RemainingTime() {
    if (this.localData.startTime < 0) return 0;
    var t = this.localData.startTime + 3600000 * this._config.phase1Duration - Date.now();
    return Math.max(0, t);
  }
  getPhase2RemainingTime() {
    if (this.localData.activatedTime < 0) return 0;
    var t = this.localData.activatedTime + 3600000 * this._config.phase2Duration - Date.now();
    return Math.max(0, t);
  }
}