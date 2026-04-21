import { resManager } from '../../framework/manager/ResManager';
@mj.class("ClassicLevelRepository")
export class ClassicLevelRepository {
  _initialLevels = [];
  _loopLevels = [];
  _loopLevelsByLayer = new Map();
  _initialized = false;
  _initPromise = null;
  _lastInitialIndex = null;
  static getInstance() {
    ClassicLevelRepository._instance || (ClassicLevelRepository._instance = new ClassicLevelRepository());
    return ClassicLevelRepository._instance;
  }
  init() {
    var e = this;
    if (this._initialized) return Promise.resolve();
    if (this._initPromise) return this._initPromise;
    this._initPromise = this._loadAllLevels();
    return this._initPromise.then(function () {
      e._initPromise = null;
    });
  }
  getLoopPath() {
    return "config/boards/endless_classic/loop";
  }
  getInitialPath() {
    return "config/boards/endless_classic/initial";
  }
  getLibName(e) {
    var t;
    return (null === (t = e.split("/").pop()) || void 0 === t ? void 0 : t.split(".")[0]) || "";
  }
  _loadAllLevels() {
    var e = this;
    Date.now();
    return Promise.all([this._loadLevels(this.getInitialPath(), "initial"), this._loadLevels(this.getLoopPath(), "loop")]).then(function (t) {
      var o = __read(t, 2),
        n = o[0],
        r = o[1];
      e._initialLevels = n;
      e._loopLevels = r;
      e._buildLayerCache();
      e._initialized = true;
      Date.now();
    }).catch(function (e) {
      console.error("【无尽关卡-仓库】加载关卡数据失败:", e);
      throw e;
    });
  }
  _buildLayerCache() {
    var e, t, o;
    this._loopLevelsByLayer.clear();
    try {
      for (var n = __values(this._loopLevels), i = n.next(); !i.done; i = n.next()) {
        var a = i.value,
          l = null !== (o = a.Layer) && void 0 !== o ? o : 0;
        this._loopLevelsByLayer.has(l) || this._loopLevelsByLayer.set(l, []);
        this._loopLevelsByLayer.get(l).push(a);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  _getLayerDistributionStr() {
    var e,
      t,
      o = [],
      n = Array.from(this._loopLevelsByLayer.keys()).sort(function (e, t) {
        return e - t;
      });
    try {
      for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
        var l = a.value;
        o.push("Layer" + l + "=" + this._loopLevelsByLayer.get(l).length);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return o.join(", ");
  }
  _loadLevels(e) {
    return resManager.loadRes(e, cc.JsonAsset, "mainRes").then(function (e) {
      return (Array.isArray(e) ? e[0] : e).json;
    });
  }
  getAllInitialLevels() {
    return this._initialLevels;
  }
  getInitialLevelCount() {
    return this._initialLevels.length;
  }
  getRandomInitialLevel() {
    if (0 === this._initialLevels.length) return null;
    if (1 === this._initialLevels.length) return this._initialLevels[0];
    var e,
      t = 0;
    do {
      var o = Math.floor(Math.random() * this._initialLevels.length);
      e = this._initialLevels[o];
      t++;
    } while (e.Index === this._lastInitialIndex && t < 10);
    this._lastInitialIndex = e.Index;
    return e;
  }
  getAllLoopLevels() {
    return this._loopLevels;
  }
  getRandomLoopLevel() {
    if (0 === this._loopLevels.length) return null;
    var e = Math.floor(Math.random() * this._loopLevels.length);
    return this._loopLevels[e];
  }
  getRandomLoopLevelByLayers(e) {
    var t, o;
    if (0 === e.length) return this.getRandomLoopLevel();
    var n = [];
    try {
      for (var i = __values(e), l = i.next(); !l.done; l = i.next()) {
        var s = l.value,
          c = this._loopLevelsByLayer.get(s);
        c && n.push.apply(n, [...c]);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return 0 === n.length ? this.getRandomLoopLevel() : n[Math.floor(Math.random() * n.length)];
  }
}