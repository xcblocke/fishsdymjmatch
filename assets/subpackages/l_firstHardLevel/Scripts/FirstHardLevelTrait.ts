import ExtractTrait from '../../../Scripts/ExtractTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FirstHardLevelTrait")
export default class FirstHardLevelTrait extends ExtractTrait {
  _checkTime = 0;
  static traitKey = "FirstHardLevel";
  static HOURS_48_MS = 172800000;
  onLoad() {
    super.onLoad.call(this);
    this.isLocalEmpty(this.localData.lastCheckDate) && (this.localData.lastCheckDate = "");
    this.isLocalEmpty(this.localData.remainingDelayRounds) && (this.localData.remainingDelayRounds = 0);
    this.isLocalEmpty(this.localData.dailyChecked) && (this.localData.dailyChecked = false);
    this.isLocalEmpty(this.localData.lastHardLevelID) && (this.localData.lastHardLevelID = 0);
    this.isLocalEmpty(this.localData.pendingForceAfterLevel) && (this.localData.pendingForceAfterLevel = 0);
    this.isLocalEmpty(this.localData.lastLoginTime) && (this.localData.lastLoginTime = 0);
    this._checkTime = 3600000 * this._traitData.checkTime || FirstHardLevelTrait.HOURS_48_MS;
    this.checkDailyFirst();
  }
  getTodayDateString() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  isHardLevelInternal(t) {
    return this.localData.lastHardLevelID === t;
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  checkDailyFirst() {
    var t = UserModel.getInstance(),
      a = this.getTodayDateString();
    if (a !== this.localData.lastCheckDate) {
      this.localData.dailyChecked = false;
      this.localData.lastCheckDate = a;
      this.localData.lastCheckDate = this.localData.lastCheckDate;
    }
    if (!this.localData.dailyChecked) {
      this.localData.dailyChecked = true;
      this.localData.dailyChecked = this.localData.dailyChecked;
      var e = t.getGameDataByGameType(MjGameType.Normal),
        i = e.getLevelId(),
        l = Date.now(),
        r = this.localData.lastLoginTime || l,
        o = r > 0 ? l - r : 0;
      this.localData.lastLoginTime = l;
      this.localData.lastLoginTime = this.localData.lastLoginTime;
      if (o >= this._checkTime) {
        this.localData.remainingDelayRounds = 3;
        this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
      } else {
        if (1 !== e.getDieResult()) {
          this.localData.remainingDelayRounds = 2;
          this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
        } else {
          this.localData.remainingDelayRounds = 0;
          this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
        }
      }
      if (0 === this.localData.remainingDelayRounds) {
        var s = e.getLevelData(),
          h = e.getOriginalLevelData();
        if (s && h) if (this.isHardLevelInternal(i)) ;else {
          this.localData.pendingForceAfterLevel = i;
          this.localData.pendingForceAfterLevel = this.localData.pendingForceAfterLevel;
        }
      }
    }
  }
  onExtractTool_isHardUI(t, a) {
    if (this.checkGameMode()) {
      var e = t.args[0];
      if (this.localData.remainingDelayRounds > 0) a({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: false
      });else {
        var i = this.localData.pendingForceAfterLevel || 0;
        if (i > 0 && e > i) {
          this.localData.pendingForceAfterLevel = 0;
          this.localData.pendingForceAfterLevel = this.localData.pendingForceAfterLevel;
          this.localData.lastHardLevelID = e;
          this.localData.lastHardLevelID = this.localData.lastHardLevelID;
          a({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
          });
        } else a();
      }
    } else a();
  }
  onExtractTool_isExpertUI(t, a) {
    if (this.checkGameMode()) {
      t.args[0];
      if (this.localData.remainingDelayRounds > 0) {
        a({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: false
        });
      } else {
        a();
      }
    } else a();
  }
  onHardLvNew_getLastId(t, a) {
    if (this.checkGameMode()) {
      var e = t.beforReturnVal || 0,
        i = this.localData.lastHardLevelID || 0,
        l = Math.max(e, i);
      if (l > i) {
        this.localData.lastHardLevelID = l;
        this.localData.lastHardLevelID = this.localData.lastHardLevelID;
      }
      a({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: l
      });
    } else a();
  }
  onBeforeWinBhv_doOthLgc(t, a) {
    if (this.checkGameMode()) {
      if (this.localData.remainingDelayRounds > 0) {
        this.localData.remainingDelayRounds--;
        this.localData.remainingDelayRounds = this.localData.remainingDelayRounds;
      }
      a();
    } else a();
  }
}