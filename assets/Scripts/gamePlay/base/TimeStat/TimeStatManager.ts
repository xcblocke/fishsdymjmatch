import { EVT_TIME_STAT_UPDATE, EVT_AD_SHOW_START, EVT_AD_SHOW_END } from '../../../Config';
import UserModel from '../../user/UserModel';
@mj.class("TimeStatManager")
export default class TimeStatManager {
  _timingStartPoint = 0;
  _scheduleTimer = null;
  SYNC_INTERVAL = 3;
  _isPaused = false;
  static _instance = null;
  static getInstance() {
    TimeStatManager._instance || (TimeStatManager._instance = new TimeStatManager());
    return TimeStatManager._instance;
  }
  init(e) {
    var t = this;
    if (!this._scheduleTimer) {
      this._timingStartPoint = Date.now();
      this._scheduleTimer = e.schedule(function () {
        t.syncTimeStats();
      }, this.SYNC_INTERVAL);
      cc.sys.os === cc.sys.OS_IOS && this.registerAdEvents();
    }
  }
  syncTimeStats() {
    if (!this._isPaused) {
      var e = Date.now(),
        t = e - this._timingStartPoint,
        o = Math.floor(t / 1000);
      if (o > 0) {
        this._timingStartPoint = e;
        UserModel.getInstance().addAppUseSecondsTime(o);
        mj.EventManager.emit(EVT_TIME_STAT_UPDATE, o);
      }
    }
  }
  resetStartPoint() {
    this._timingStartPoint = Date.now();
  }
  getStartPoint() {
    return this._timingStartPoint;
  }
  isPaused() {
    return this._isPaused;
  }
  registerAdEvents() {
    mj.EventManager.on(EVT_AD_SHOW_START, this.onAdShowStart, this);
    mj.EventManager.on(EVT_AD_SHOW_END, this.onAdShowEnd, this);
  }
  unregisterAdEvents() {
    mj.EventManager.off(EVT_AD_SHOW_START, this.onAdShowStart, this);
    mj.EventManager.off(EVT_AD_SHOW_END, this.onAdShowEnd, this);
  }
  onAdShowStart() {
    this.syncTimeStats();
    this._isPaused = true;
  }
  onAdShowEnd() {
    this._isPaused = false;
    this.resetStartPoint();
  }
  destroy() {
    cc.sys.os === cc.sys.OS_IOS && this.unregisterAdEvents();
    this._scheduleTimer = null;
    this._isPaused = false;
  }
}