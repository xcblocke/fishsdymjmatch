import Model from '../../../framework/data/Model';
import { PrefixCapability, EDCColor } from '../../../types/Common';
@mj.class("ExtractModel")
export class ExtractModel extends Model {
  constructor() {
    super();
    this.initDefaultData();
  }
  initDefaultData() {
    this.isLocalEmpty(this.localData.last100Game) && (this.localData.last100Game = []);
    this.isLocalEmpty(this.localData.last100Level) && (this.localData.last100Level = []);
    this.isLocalEmpty(this.localData.customKeys) && (this.localData.customKeys = []);
    this.isLocalEmpty(this.localData.extractCount) && (this.localData.extractCount = 0);
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  getLimitLevelRecord() {
    return 100;
  }
  getLimitGameRecord() {
    return 100;
  }
  gameStart(e) {
    var t = Object.assign(Object.assign({}, e), {
        shuffle: 0,
        replay: 0,
        passTime: 0
      }),
      o = this.localData.last100Level;
    o.unshift(t);
    var n = this.getLimitLevelRecord();
    o.length > n && o.splice(n);
    this.localData.last100Level = o;
    this.localData.extractCount++;
    this.logInfo("关卡开始,本关数据: " + JSON.stringify(t));
  }
  gameReplay() {
    if (!(this.localData.last100Level.length <= 0)) {
      var e = this.localData.last100Level;
      e[0].replay++;
      this.localData.last100Level = e;
    }
  }
  useShuffle() {
    if (!(this.localData.last100Level.length <= 0)) {
      var e = this.localData.last100Level;
      e[0].shuffle++;
      this.localData.last100Level = e;
    }
  }
  gameEnd(e) {
    this.addNewGameRecord(e);
    this.updateLastLevelRecord(e);
    this.updateOtherData(e);
  }
  addNewGameRecord(e) {
    if (!(this.localData.last100Level.length <= 0)) {
      var t = this.localData.last100Level[0],
        o = t.levelData.index,
        n = t.replay,
        i = t.levelId,
        r = {
          id: i + "-" + o + "-" + n,
          levelId: i,
          gameTime: e.time,
          win: e.win,
          clear: e.clearPair
        };
      this.addExtraGameRecordData(r);
      var a = this.localData.last100Game;
      a.unshift(r);
      var l = this.getLimitGameRecord();
      a.length > l && a.splice(l);
      this.localData.last100Game = a;
    }
  }
  addExtraGameRecordData() {}
  updateLastLevelRecord() {}
  updateOtherData() {}
  getLastLevelRecord(e = 1) {
    return this.localData.last100Level.slice(0, e);
  }
  getLastGameRecord(e = 1) {
    return this.localData.last100Game.length < e ? [] : this.localData.last100Game.slice(0, e);
  }
  getAllGameTime() {
    return this.localData.last100Game.reduce(function (e, t) {
      return e + t.gameTime;
    }, 0);
  }
  getAllClearCount() {
    return this.localData.last100Game.reduce(function (e, t) {
      return e + t.clear;
    }, 0);
  }
  getFirstPassCount(e) {
    var t = this.localData.last100Level;
    return t.length <= 0 ? 0 : (t = e ? t : t.slice(1)).filter(function (e) {
      return 0 === e.replay;
    }).length;
  }
  getExpectedFirstPassCount() {
    return this.localData.last100Level.reduce(function (e, t) {
      return e + t.levelData.rateSuccess;
    }, 0);
  }
  cacheData(e, t) {
    this.localData[e] = t;
    var o = this.localData.customKeys;
    if (!o.includes(e)) {
      o.push(e);
      this.localData.customKeys = o;
    }
  }
  getCachedData(e, t) {
    return this.localData[e] ? this.localData[e] : t;
  }
  resetCapabilityData(e) {
    var t,
      o,
      n = this.localData.customKeys;
    try {
      for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
        var a = r.value;
        a.startsWith(PrefixCapability) && (this.localData[a] = e);
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
  }
  logInfo(e, t = EDCColor.EXTRACT_MODEL) {}
}