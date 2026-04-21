import { resManager } from './framework/manager/ResManager';
@mj.class("JsonManager")
export default class JsonManager {
  dataCache = new Map();
  loadingPromises = new Map();
  static instance = null;
  static getInstance() {
    this.instance || (this.instance = new JsonManager());
    return this.instance;
  }
  clear() {
    this.dataCache.clear();
    this.loadingPromises.clear();
  }
  getCacheData(e) {
    return this.dataCache.get(e);
  }
  setCacheData(e, t) {
    this.dataCache.set(e, t);
  }
  clearCacheData(e) {
    this.dataCache.delete(e);
  }
  loadJson(e, t, o = -1) {
    var n = this;
    return new Promise(function (i) {
      var r = t + ":" + e,
        a = n.getCacheData(r);
      if (a) {
        var l = n.cloneData(a);
        return i(l);
      }
      var s = n.loadRawData(r, e, t);
      (s = n.raceTimeout(s, o, e, t)).then(function (e) {
        i(e ? n.cloneData(e) : null);
      }).catch(function () {
        i(null);
      });
    });
  }
  loadRawData(e, t, o) {
    var n = this,
      r = this.loadingPromises.get(e);
    if (r) return r;
    var a = resManager.loadRes(t, cc.JsonAsset, o).then(function (t) {
      if (!(t && t instanceof cc.JsonAsset)) return null;
      var o = JSON.parse(JSON.stringify(t.json));
      n.getCacheData(e) || n.setCacheData(e, o);
      t.decRef();
      return o;
    }).catch(function () {
      return null;
    }).then(function (t) {
      n.loadingPromises.delete(e);
      return t;
    });
    this.loadingPromises.set(e, a);
    return a;
  }
  raceTimeout(e, t) {
    return new Promise(function (o) {
      var n = false,
        i = -1;
      t > 0 && (i = setTimeout(function () {
        if (!n) {
          n = true;
          o(null);
        }
      }, t));
      e.then(function (e) {
        if (!n) {
          n = true;
          t > 0 && clearTimeout(i);
          o(e);
        }
      });
    });
  }
  cloneData(e) {
    try {
      return JSON.parse(JSON.stringify(e));
    } catch (e) {
      return null;
    }
  }
}