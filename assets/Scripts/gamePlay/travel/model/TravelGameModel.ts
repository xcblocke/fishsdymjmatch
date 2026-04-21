import TravelGameData from '../../../core/simulator/data/TravelGameData';
import { DataReader } from '../../../framework/data/DataReader';
import Model from '../../../framework/data/Model';
import BadgeMode from '../../badge/mode/BadgeMode';
import { ConfigType, MapConfigMap } from '../../base/data/ConfigType';
import { ETravelRewardType } from '../../../config/TravelConfig';
export enum ETravelRedPointState {
  None = 0,
  Show = 1,
  Hide = 2,
}
@mj.class("TravelGameModel")
export default class TravelGameModel extends Model {
  constructor() {
    super();
    this.isLocalEmpty(this.localData.unlocked) && (this.localData.unlocked = false);
    this.isLocalEmpty(this.localData.curSession) && (this.localData.curSession = -1);
    this.isLocalEmpty(this.localData.curSessionIndex) && (this.localData.curSessionIndex = this.localData.curSession);
    this.isLocalEmpty(this.localData.startTime) && (this.localData.startTime = -1);
    this.isLocalEmpty(this.localData.endTime) && (this.localData.endTime = -1);
    this.isLocalEmpty(this.localData.curJourney) && (this.localData.curJourney = "");
    this.isLocalEmpty(this.localData.historyJourneys) && (this.localData.historyJourneys = []);
    this.isLocalEmpty(this.localData.lastMapLevel) && (this.localData.lastMapLevel = 1);
    this.isLocalEmpty(this.localData.redPointState) && (this.localData.redPointState = ETravelRedPointState.None);
    this.isLocalEmpty(this.localData.curSpecial) && (this.localData.curSpecial = false);
    this.isLocalEmpty(this.localData.firstOpen) && (this.localData.firstOpen = false);
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  @mj.traitEvent("TLGameModel_activeSession")
  activeSession(e, t, o, n) {
    var i = this.localData.historyJourneys;
    "" !== this.localData.curJourney && i.push(this.localData.curJourney);
    i.length > 20 && (i = i.slice(-20));
    this.localData.historyJourneys = i;
    this.localData.curJourney = e;
    this.localData.startTime = t;
    this.localData.endTime = -1 === o ? -1 : t + 1000 * o;
    this.localData.curSession++;
    if (n < 0) this.localData.curSpecial = true;else {
      this.localData.curSessionIndex = n;
      this.localData.curSpecial = false;
    }
    this.setFirstOpen(false);
  }
  getCurSession() {
    return this.localData.curSession;
  }
  getCurSessionIndex() {
    return this.localData.curSessionIndex;
  }
  getStartTime() {
    return this.localData.startTime;
  }
  getEndTime() {
    return this.localData.endTime;
  }
  getLastMapLevel() {
    return this.localData.lastMapLevel;
  }
  setLastMapLevel(e) {
    this.localData.lastMapLevel = e;
  }
  isSessionActive() {
    return !!this.isUnlocked() && !(this.localData.curSession < 0) && (this.localData.endTime < 0 && this.localData.startTime > 0 || Date.now() >= this.localData.startTime && Date.now() <= this.localData.endTime);
  }
  isUnlocked() {
    return this.localData.unlocked;
  }
  setUnlocked(e) {
    this.localData.unlocked = e;
  }
  getCurJourney() {
    return this.localData.curJourney;
  }
  getRemainTime() {
    return this.localData.endTime < 0 ? -1 : Math.floor((this.localData.endTime - Date.now()) / 1000);
  }
  getConfig(e) {
    return DataReader.getByKey(ConfigType.Travel, e);
  }
  getLevelConfig(e) {
    var t = this.getConfig(e);
    return t ? DataReader.getByKey(ConfigType.LevelConfig, t.levelConfig) : null;
  }
  getAllLevel(e) {
    var t = this.getLevelConfig(e);
    if (!t) return [];
    var o = MapConfigMap[t.mapConfig];
    return DataReader.getList(o).filter(function (e) {
      return e.level > 0;
    });
  }
  getLevelById(e, t) {
    return this.getAllLevel(t).find(function (t) {
      return t.level === e;
    });
  }
  @mj.traitEvent("TLGameModel_getReward")
  getRewardInfo(e) {
    var t = this.getLevelConfig(e);
    if (!t) return [];
    for (var o = [], n = 0; n < t.gift.length; n++) o.push({
      lv: t.gift[n],
      reward: t.giftRewards[n],
      type: ETravelRewardType.EGiftBox,
      gain: false
    });
    for (n = 0; n < t.badge.length; n++) o.push({
      lv: t.badge[n],
      reward: t.badgeRewards[n],
      type: ETravelRewardType.EBadge,
      gain: this.isBadgeRewardGain(t.badgeRewards[n])
    });
    o.sort(function (e, t) {
      return e.lv - t.lv;
    });
    return o;
  }
  getPlayType(e) {
    return this.getLevelById(e, this.getCurJourney()).playType;
  }
  isLevelEnd(e) {
    var t = this.getCurJourney(),
      o = this.getLevelConfig(t);
    return !o || e > o.levelCount;
  }
  isBadgeRewardGain(e) {
    var t = DataReader.getByKey(ConfigType.reward_config, e);
    return !(t && 1 === t.Items.length && !BadgeMode.getInstance().hasBadge(t.Items[0]));
  }
  isBadgeComplete(e) {
    var t, o;
    if ("" === e) return true;
    var n = this.getRewardInfo(e);
    try {
      for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        if (l.type === ETravelRewardType.EBadge && !l.gain) return false;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return true;
  }
  isComplete(e) {
    if ("" === e) return true;
    var t = TravelGameData.getInstance().getLevelId(),
      o = this.getLevelConfig(e);
    return !o || t > o.levelCount;
  }
  setRedPointState(e) {
    this.localData.redPointState = e;
  }
  getRedPointState() {
    return this.localData.redPointState;
  }
  isSpecialSession() {
    return this.localData.curSpecial;
  }
  @mj.traitEvent("TLGameModel_isHardLv")
  isHardLevel(e) {
    var t = this.getCurJourney(),
      o = this.getLevelConfig(t);
    return !(!o || !o.hards.includes(e));
  }
  getHistoryJourneys() {
    return this.localData.historyJourneys;
  }
  setFirstOpen(e) {
    this.localData.firstOpen = e;
  }
  isFirstOpen() {
    return this.localData.firstOpen;
  }
}