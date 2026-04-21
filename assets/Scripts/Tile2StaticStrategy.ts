import { resManager } from './framework/manager/ResManager';
import Tile2BaseStrategy from './Tile2BaseStrategy';
@mj.class("Tile2StaticStrategy")
export default class Tile2StaticStrategy extends Tile2BaseStrategy {
  name = "Tile2Static";
  priority = 20;
  static _dataCache = new Map();
  constructor() {
    super();
    if (null == this.localData.progressMap) {
      this.localData.progressMap = {};
      this.localData.progressMap = this.localData.progressMap;
    }
    null == this.localData.dataPath && (this.localData.dataPath = "");
  }
  makeCacheKey(e, t) {
    return t + "_" + e;
  }
  @mj.traitEvent("T2StaStr_dataPath")
  getDataPath() {
    return ["tile2LevelData/static/tile2_static1", "mainRes"];
  }
  @mj.traitEvent("T2StaStr_priority")
  getPriority() {
    return 20;
  }
  canHandle() {
    return true;
  }
  init() {
    this.priority = this.getPriority();
    var e = __read(this.getDataPath(), 2),
      t = e[0],
      n = e[1],
      i = this.makeCacheKey(t, n);
    if (this.localData.dataPath !== t) {
      this.localData.dataPath = t;
      var r = this.localData.progressMap || {};
      r[i] = 0;
      this.localData.progressMap = r;
      Tile2StaticStrategy._dataCache.delete(i);
    }
    return Tile2StaticStrategy._dataCache.has(i) ? Promise.resolve() : this.loadDataForKey(t, n, i);
  }
  loadDataForKey(e, t, n) {
    return new Promise(function (i) {
      resManager.loadRes(e, cc.JsonAsset, t).then(function (e) {
        var t = e.json;
        Array.isArray(t) && Tile2StaticStrategy._dataCache.set(n, t);
        e.decRef();
        i();
      }).catch(function (e) {
        console.error("[关卡抽取 Tile2静态题库]加载失败: " + n, e);
        i();
      });
    });
  }
  doExtract(e, t, o) {
    if (!e || 0 === e.length) return null;
    var n = this.localData.progressMap || {},
      i = (n[t] || 0) % e.length,
      r = e[i];
    if (!r || !r.content) return null;
    n[t] = (i + 1) % e.length;
    this.localData.progressMap = n;
    return {
      content: r.content,
      index: r.index.toString(),
      slover: r.solver,
      tileNum: r.tile_num,
      libName: o
    };
  }
  @mj.traitEvent("T2StaStr_extract")
  extract() {
    var e = this,
      t = __read(this.getDataPath(), 2),
      n = t[0],
      i = t[1],
      r = this.makeCacheKey(n, i),
      l = n.split("/").pop() || this.name,
      s = Tile2StaticStrategy._dataCache.get(r);
    return s ? Promise.resolve(this.doExtract(s, r, l)) : this.loadDataForKey(n, i, r).then(function () {
      var t = Tile2StaticStrategy._dataCache.get(r);
      return e.doExtract(t, r, l);
    });
  }
}