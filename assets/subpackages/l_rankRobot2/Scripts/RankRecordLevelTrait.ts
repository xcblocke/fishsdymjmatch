import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankRecordLevelTrait")
export default class RankRecordLevelTrait extends Trait {
  _retentionDays = 7;
  static traitKey = "RankRecordLevel";
  onLoad() {
    var a;
    super.onLoad.call(this);
    try {
      this._retentionDays = (null === (a = this._traitData) || void 0 === a ? void 0 : a.retentionDays) || 7;
      this.cleanupOldData(this._retentionDays);
    } catch (t) {
      console.error("[" + RankRecordLevelTrait.traitKey + "] 加载失败: " + ((null == t ? void 0 : t.message) || t));
    }
  }
  getDailyPassCounts() {
    this.localData.hasMigratedFromOldTrait || this.migrateFromOldTrait();
    return this.localData.dailyPassCounts || [];
  }
  getLastUpdateZeroTimeMS() {
    this.localData.hasMigratedFromOldTrait || this.migrateFromOldTrait();
    return this.localData.lastUpdateZeroTimeMS || 0;
  }
  onGameMod_modifyWin(t, a) {
    try {
      this.localData.hasMigratedFromOldTrait || this.migrateFromOldTrait();
      this.recordPassToday();
    } catch (t) {
      console.error("[" + RankRecordLevelTrait.traitKey + "] 记录通关失败: " + ((null == t ? void 0 : t.message) || t));
    } finally {
      a();
    }
  }
  migrateFromOldTrait() {
    var t, a;
    if (!this.localData.hasMigratedFromOldTrait) try {
      var e = mj.getClassByName("RankDynScoreTrait");
      if (e) {
        var r = e.getInstance();
        if ((null === (a = null === (t = null == r ? void 0 : r.localData) || void 0 === t ? void 0 : t.dailyPassCounts) || void 0 === a ? void 0 : a.length) > 0) {
          this.localData.dailyPassCounts = [...r.localData.dailyPassCounts];
          this.localData.lastUpdateZeroTimeMS = r.localData.lastUpdateZeroTimeMS || 0;
        }
      }
      this.localData.hasMigratedFromOldTrait = true;
    } catch (t) {
      this.localData.hasMigratedFromOldTrait = true;
    }
  }
  recordPassToday() {
    var t = new Date().setHours(0, 0, 0, 0),
      a = this.localData.dailyPassCounts || [];
    if (0 === a.length || !this.localData.lastUpdateZeroTimeMS || this.localData.lastUpdateZeroTimeMS !== t) {
      a.push(1);
    } else {
      a[a.length - 1]++;
    }
    this.localData.lastUpdateZeroTimeMS = t;
    this.localData.dailyPassCounts = a;
  }
  cleanupOldData(t) {
    var a;
    if (this.localData.hasMigratedFromOldTrait) {
      var e = (null === (a = this.localData.dailyPassCounts) || void 0 === a ? void 0 : a.length) || 0;
      if (!(e <= t)) {
        var r = e - t;
        this.localData.dailyPassCounts.splice(0, r);
        this.localData.dailyPassCounts = this.localData.dailyPassCounts;
      }
    }
  }
}