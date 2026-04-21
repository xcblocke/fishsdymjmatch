import { resManager } from './framework/manager/ResManager';
import Tile2BaseStrategy from './Tile2BaseStrategy';
@mj.class("Tile2FixedRandomStrategy")
export default class Tile2FixedRandomStrategy extends Tile2BaseStrategy {
  name = "Tile2FixedRandom";
  priority = 90;
  _initConfig = null;
  @mj.traitEvent("T2FxRnd_priority")
  getPriority() {
    return 90;
  }
  @mj.traitEvent("T2FxRnd_config")
  getConfig() {
    return null;
  }
  init() {
    this.priority = this.getPriority();
    this._initConfig = this.getConfig();
    if (!this._initConfig || !this._initConfig.strategy) return Promise.resolve();
    for (var e = this._initConfig, t = e.minLevel, o = e.maxLevel, n = [], i = t; i <= o; i++) n.push(i.toString().padStart(2, "0"));
    this.notifyDataLoaded(n);
    return Promise.resolve();
  }
  @mj.traitEvent("T2FxRnd_onLoaded")
  notifyDataLoaded() {}
  canHandle(e) {
    if (!this._initConfig) return false;
    var t = e.gameData.getLevelId();
    return !!t && t >= this._initConfig.minLevel && t <= this._initConfig.maxLevel;
  }
  extract(e) {
    var t = this,
      o = e.gameData.getLevelId().toString().padStart(2, "0"),
      n = this.getConfig();
    if (!n || !n.strategy) return Promise.resolve(null);
    var i = "" + n.path + o;
    return resManager.loadRes(i, cc.JsonAsset, n.bundle).then(function (e) {
      var n = Array.isArray(e) ? e[0] : e;
      if (!n || !n.json) return null;
      var i = n.json;
      n.decRef();
      if (!i || 0 === i.length) return null;
      var r = i[Math.floor(Math.random() * i.length)];
      return t.buildResult(r, o);
    }).catch(function () {
      return null;
    });
  }
  buildResult(e, t) {
    return {
      content: e.content,
      index: String(e.index),
      slover: e.solver,
      tileNum: e.tile_num,
      libName: "fixRandom_" + t
    };
  }
}