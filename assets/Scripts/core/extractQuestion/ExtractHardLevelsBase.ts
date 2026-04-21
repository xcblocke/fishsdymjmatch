import { resManager } from '../../framework/manager/ResManager';
export class ExtractHardLevelsBase {
  getMaxLevels() {
    var e = this.getLevelData();
    return e ? e.length : this.getConfig().defaultMaxLevels;
  }
  getContent() {
    var e = this;
    return this.getLevelData() ? Promise.resolve(this.extractContent()) : this.loadData().then(function () {
      return e.extractContent();
    });
  }
  extractContent() {
    var e = this.getConfig(),
      t = this.getProgress(),
      o = this.getLevelData();
    if (o && o.length > 0) {
      var n = o[t],
        i = n.Content,
        r = 100 + 3 * (t + 1),
        a = (t + 1) % this.getMaxLevels();
      this.saveProgress(a);
      this.setCurLvData(t, n);
      return [i, r, n.Index, e.sourceName, null];
    }
    return null;
  }
  @mj.traitEvent("ExtHrdLvBase_setCurLvData")
  setCurLvData() {}
  loadData() {
    var e = this,
      t = this.getConfig();
    return new Promise(function (o, n) {
      if (e.getLevelData()) o();else {
        var r = t.bundleName || "mainRes";
        resManager.loadRes(t.dataPath, cc.JsonAsset, r).then(function (i) {
          if (i) {
            e.setLevelData(e.parseLevelData(i.json));
            i.decRef();
            o();
          } else {
            console.error("【关卡抽取】[" + t.logPrefix + "] " + t.dataPath + ".json加载失败");
            n(new Error(t.dataPath + ".json加载失败"));
          }
        }).catch(function (e) {
          console.error("【关卡抽取】[" + t.logPrefix + "] Failed to load " + t.dataPath + ".json:", e);
          n(e);
        });
      }
    });
  }
  @mj.traitEvent("ExtHrdLvBase_parseLvData")
  parseLevelData(e) {
    return e;
  }
  getSaveData() {
    var e = this.getConfig(),
      t = cc.sys.localStorage.getItem(e.storageKey);
    if (t) try {
      return JSON.parse(t);
    } catch (t) {
      console.error("【关卡抽取】[" + e.logPrefix + "] 解析存档数据失败:", t);
      return {};
    }
    return {};
  }
  setSaveData(e) {
    var t = this.getConfig();
    try {
      cc.sys.localStorage.setItem(t.storageKey, JSON.stringify(e));
    } catch (e) {
      console.error("【关卡抽取】[" + t.logPrefix + "] 保存存档数据失败:", e);
    }
  }
  getProgress() {
    var e = this.getSaveData().progress;
    return "number" == typeof e && e >= 0 && e < this.getMaxLevels() ? e : 0;
  }
  saveProgress(e) {
    var t = this.getSaveData();
    t.progress = e;
    this.setSaveData(t);
  }
  resetProgress() {
    this.saveProgress(0);
  }
  getProgressInfo() {
    var e = this.getProgress(),
      t = this.getMaxLevels();
    return {
      currentIndex: e,
      totalLevels: t,
      nextLevel: (e + 1) % t
    };
  }
}