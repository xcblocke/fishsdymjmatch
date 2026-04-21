import Model from '../../framework/data/Model';
import { PrefixLevelValue, EDCColor } from '../../types/Common';
@mj.class("LevelModel")
export class LevelModel extends Model {
  constructor() {
    super();
    this.initDefaultData();
  }
  initDefaultData() {
    this.isLocalEmpty(this.localData.customKeys) && (this.localData.customKeys = []);
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
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
  clearLevelValues() {
    var e,
      t,
      o = this.localData.customKeys,
      n = [];
    try {
      for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        if (l.startsWith(PrefixLevelValue)) {
          this.localData[l] = [];
        } else {
          n.push(l);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    this.localData.customKeys = n;
    this.logInfo("清除关卡值数据: " + JSON.stringify(this.localData.customKeys));
  }
  logInfo(e, t = EDCColor.LEVEL_MODEL) {}
}