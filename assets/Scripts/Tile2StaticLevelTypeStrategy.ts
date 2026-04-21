import ExtractTool from './core/extractQuestion/ExtractTool';
import { resManager } from './framework/manager/ResManager';
import Tile2BaseStrategy from './Tile2BaseStrategy';
@mj.class("Tile2StaLvTypeStrategy")
export default class Tile2StaticLevelTypeStrategy extends Tile2BaseStrategy {
  name = "Tile2StaticLvType";
  priority = 70;
  _config = null;
  static _dataCache = new Map();
  constructor() {
    super();
    if (!this.localData.progressMap || !Object.keys(this.localData.progressMap).length) {
      this.localData.progressMap = {};
      this.localData.progressMap = this.localData.progressMap;
    }
  }
  @mj.traitEvent("T2StaLvT_priority")
  getPriority() {
    return 70;
  }
  @mj.traitEvent("T2StaLvT_config")
  getConfig() {
    return {
      bundle: "mainRes"
    };
  }
  @mj.traitEvent("T2StaLvT_getFile")
  getFileForType() {
    return null;
  }
  @mj.traitEvent("T2StaLvT_easyFile")
  getEasyFileName() {
    return null;
  }
  @mj.traitEvent("T2StaLvT_normFile")
  getNormalFileName() {
    return null;
  }
  @mj.traitEvent("T2StaLvT_hardFile")
  getHardFileName() {
    return null;
  }
  @mj.traitEvent("T2StaLvT_filterPool")
  filterPool(e) {
    return e;
  }
  makeProgressKey(e) {
    return e;
  }
  init() {
    this.priority = this.getPriority();
    this._config = this.getConfig();
    return Promise.resolve();
  }
  canHandle(e) {
    var t = e.gameData.getLevelId();
    if (!t) return false;
    var o = ExtractTool.getInstance().getLevelType(t);
    return !(o <= 0 || !this.resolveFileName(o));
  }
  extract(e) {
    var t = this,
      n = this.getConfig();
    if (!n) return Promise.resolve(null);
    var i = e.gameData.getLevelId(),
      r = ExtractTool.getInstance().getLevelType(i);
    if (r <= 0) return Promise.resolve(null);
    var l = n.bundle || "mainRes",
      s = this.resolveFileName(r);
    if (!s) return Promise.resolve(null);
    var c = l + "|" + s,
      u = Tile2StaticLevelTypeStrategy,
      p = u._dataCache.get(c);
    if (p) return Promise.resolve(this.doExtract(p, c, s, i, r));
    var f = "tile2LevelData/static/" + s;
    return this.loadFile(f, l, c).then(function () {
      var e = u._dataCache.get(c);
      return t.doExtract(e, c, s, i, r);
    });
  }
  resolveFileName(e) {
    return this.getFileForType(e) || (1 === e ? this.getEasyFileName() : 2 === e ? this.getNormalFileName() : 3 === e || 4 === e ? this.getHardFileName() : null);
  }
  loadFile(e, t, n) {
    return resManager.loadRes(e, cc.JsonAsset, t).then(function (e) {
      var t = Array.isArray(e.json) ? e.json : [];
      Tile2StaticLevelTypeStrategy._dataCache.set(n, t);
      e.decRef();
    }).catch(function (e) {
      console.error("[关卡抽取 Tile2类型题库] 加载失败: " + n, e);
    });
  }
  doExtract(e, t, o, n, i) {
    if (!e || 0 === e.length) return null;
    var r = this.filterPool(e, i, t, n),
      a = r && r.length > 0 ? r : null;
    if (!a) return null;
    var l = this.makeProgressKey(t),
      s = this.localData.progressMap || {},
      c = (s[l] || 0) % a.length,
      u = a[c];
    if (!u || !u.content) return null;
    var p = (c + 1) % a.length;
    s[l] = p;
    this.localData.progressMap = s;
    return {
      content: u.content,
      index: u.index.toString(),
      slover: u.solver,
      tileNum: u.tile_num,
      libName: o
    };
  }
}