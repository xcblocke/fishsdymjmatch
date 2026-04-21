import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { SingletonFactory } from '../framework/utils/SingletonFactory';
import { EDCColor, LevelValueKey, PrefixLevelLibrary, getPercentileKey } from './Common';
import { LevelModel } from '../core/dynamicCurve/LevelModel';
import { resManager } from '../framework/manager/ResManager';
import { ExtractNormal } from '../core/dynamicCurve/models/ExtractNormal';
import { ExtractDaily } from '../core/dynamicCurve/models/ExtractDaily';
import { ExtractTravel } from '../core/dynamicCurve/models/ExtractTravel';
import { LayerCapability } from '../core/dynamicCurve/LayerCapability';
import { LayerLevelValue } from '../core/dynamicCurve/LayerLevelValue';
import { LayerMapping } from '../core/dynamicCurve/LayerMapping';
import { LayerDDA } from '../core/dynamicCurve/LayerDDA';
@mj.class("DynamicCurve")
export default class DynamicCurve {
  initialized = false;
  dataCache = new Map();
  curLevelData = null;
  levelDataCache = new Map();
  static get instance() {
    return SingletonFactory.getInstance(this);
  }
  @mj.traitEvent("DCMgr_isEnabled")
  isEnabled() {
    return false;
  }
  @mj.traitEvent("DCMgr_isModeSupport")
  isModeSupport(e) {
    return [MjGameType.Normal].includes(e);
  }
  supportMode(e) {
    return this.isEnabled() && this.isModeSupport(e);
  }
  @mj.traitEvent("DCMgr_setCurLvData")
  setCurLevelData(e) {
    this.curLevelData = Object.assign({}, e);
  }
  init() {
    if (this.isEnabled() && !this.initialized) {
      this.levelModel = LevelModel.getInstance();
      this.capabilityLayer = new LayerCapability();
      this.levelValueLayer = new LayerLevelValue();
      this.mappingLayer = new LayerMapping();
      this.ddaLayer = new LayerDDA();
      this.setCapabilityStrategy({
        name: "Capability1",
        param: {
          x: -0.166
        }
      });
      this.setLevelValueStrategy({
        name: "Level1",
        param: {
          x: "predictTime"
        }
      });
      this.setMappingStrategy([{
        name: "Mapping1"
      }]);
      this.setDDAStrategy();
      this.initialized = true;
    }
  }
  logInfo(e, t = EDCColor.NORMAL) {}
  @mj.traitEvent("DCMgr_setCapSgy")
  setCapabilityStrategy(e) {
    this.capabilityLayer.setStrategy(e);
  }
  @mj.traitEvent("DCMgr_setLvSgy")
  setLevelValueStrategy(e) {
    this.levelValueLayer.setStrategy(e);
  }
  @mj.traitEvent("DCMgr_setMapSgy")
  setMappingStrategy(e) {
    this.mappingLayer.setStrategies(e);
  }
  @mj.traitEvent("DCMgr_setDDASgy")
  setDDAStrategy() {
    this.ddaLayer.addStrategy({
      name: "DDA0",
      param: {
        x: 100
      }
    });
  }
  @mj.traitEvent("DCMgr_updateCap")
  updateCapability(e) {
    if (this.initialized) {
      var t = this.getExtractModel(e.gameType);
      if (t) {
        this.recordGameEnd(t, e);
        this.capabilityLayer.updateCapability(Object.assign(Object.assign({}, e), {
          defaultCapability: this.getDefaultCapability(e.gameType),
          extractModel: t
        }));
        e.win || t.gameReplay();
      }
    }
  }
  gameStart(e) {
    if (this.initialized) {
      var t = this.getExtractModel(e.gameType);
      if (t) {
        var o = null,
          n = true;
        if ("dynamic" !== e.fileName) {
          o = {
            index: isNaN(e.levelIndex) ? -1 : e.levelIndex,
            content: e.levelStr,
            rateSuccess: 1,
            tileNum: 0,
            predictTime: 0
          };
          n = false;
        } else o = this.curLevelData;
        o && this.recordGameStart(t, {
          levelId: e.levelId,
          gameType: e.gameType,
          levelData: o,
          isDynamic: n
        });
      }
    }
  }
  resetCapabilityCache() {
    var e,
      t,
      o = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge];
    try {
      for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
        var a = i.value,
          s = this.getExtractModel(a);
        if (s) {
          var c = this.getDefaultCapability(a);
          s.resetCapabilityData(c);
        }
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
  useShuffle(e) {
    if (this.supportMode(e)) {
      var t = this.getExtractModel(e);
      t && t.useShuffle();
    }
  }
  getExtractInfo(e) {
    var t,
      o,
      n,
      i,
      r,
      a,
      l,
      s,
      u = this.getExtractModel(e);
    if (!u) return {
      ok: false,
      capability: 0,
      predictTime: 0,
      levelValue: 0,
      rateSuccess: 0,
      levelIndex: -1
    };
    var p = this.getDefaultCapability(e),
      f = this.capabilityLayer.getCapability({
        gameType: e,
        extractModel: u,
        defaultCapability: p
      }),
      d = u.getLastLevelRecord(),
      h = 0,
      y = 0,
      m = 0,
      v = -1;
    if (d.length > 0 && d[0].isDynamic) {
      h = null !== (o = null === (t = d[0].levelData) || void 0 === t ? void 0 : t.predictTime) && void 0 !== o ? o : 0;
      y = null !== (i = null === (n = d[0].levelData) || void 0 === n ? void 0 : n[LevelValueKey]) && void 0 !== i ? i : 0;
      m = null !== (a = null === (r = d[0].levelData) || void 0 === r ? void 0 : r.rateSuccess) && void 0 !== a ? a : 0;
      v = null !== (s = null === (l = d[0].levelData) || void 0 === l ? void 0 : l.index) && void 0 !== s ? s : -1;
    }
    return {
      ok: d.length > 0 && d[0].isDynamic,
      capability: f,
      predictTime: h,
      levelValue: y,
      rateSuccess: m,
      levelIndex: v
    };
  }
  @mj.traitEvent("DCMgr_recordGameEnd")
  recordGameEnd(e, t) {
    e.gameEnd(t);
  }
  @mj.traitEvent("DCMgr_recordGameStart")
  recordGameStart(e, t) {
    e.gameStart(t);
  }
  @mj.traitEvent("DCMgr_getCont")
  getContentData(e) {
    var t = this;
    return new Promise(function (o) {
      var n = e.gameType || MjGameType.Normal,
        i = t.getLevelId(e);
      t.extractLevel(n, i, function (e) {
        if (e) {
          t.setCurLevelData(e);
          var n = t.capabilityLayer.getStrategyName();
          o([e.content, e[LevelValueKey], e.index.toString(), "dynamic", n, true]);
        } else o([null, 0, null, "dynamic", null, true]);
      });
    });
  }
  getRandomContent(e) {
    var t = this;
    return new Promise(function (o) {
      t.getLevelData(e, function (e) {
        if (e && 0 !== e.length) {
          var n = e[Math.floor(Math.random() * e.length)];
          t.setCurLevelData(n);
          o([n.content, n[LevelValueKey], n.index.toString(), "dynamic", "random", false]);
        } else o(null);
      });
    });
  }
  getLevelId(e) {
    switch (e.gameType) {
      case MjGameType.Normal:
        return e.levelID || 1;
      case MjGameType.Travel:
        return e.levelIndex || 1;
      case MjGameType.DailyChallenge:
        return e.challengeDate || 1;
    }
    return 1;
  }
  extractLevel(e, t, o) {
    var n = this;
    this.getLevelData(e, function (i) {
      if (i.length <= 0) o(null);else {
        var r,
          l = n.getExtractModel(e),
          s = n.capabilityLayer.getCapability({
            gameType: e,
            extractModel: l,
            defaultCapability: n.getDefaultCapability(e)
          }),
          c = {
            gameType: e,
            extractModel: l,
            levels: i,
            capability: s
          },
          u = __read(n.ddaLayer.filter(c), 2),
          p = u[0],
          f = u[1],
          d = c.levels;
        r = p ? f : n.mappingLayer.mapping({
          levelId: t,
          levels: d,
          gameType: e,
          extractModel: l,
          capability: s
        });
        o(r || null);
      }
    });
  }
  getDefaultCapability() {
    return 0.5;
  }
  @mj.traitEvent("DCMgr_getLvPath")
  getLevelPath() {
    return [["config/boards/dynamic/sample", "mainRes"], ["sample", "r_board1"]];
  }
  preLoadLevelLibrary() {
    var e,
      t,
      o,
      n,
      i = this,
      s = [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge],
      c = new Set(),
      u = [];
    try {
      for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          h = this.getLevelPath(d);
        try {
          for (var y = (o = void 0, __values(h)), m = y.next(); !m.done; m = y.next()) {
            var v = __read(m.value, 2),
              g = v[0],
              _ = v[1];
            if (g && !c.has(g + "_" + _)) {
              c.add(g + "_" + _);
              u.push([g, _]);
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            m && !m.done && (n = y.return) && n.call(y);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        f && !f.done && (t = p.return) && t.call(p);
      } finally {
        if (e) throw e.error;
      }
    }
    return Promise.all(u.map(function (e) {
      var t = __read(e, 2),
        o = t[0],
        n = t[1];
      return i.preLoadLevelLibraryByPath(o, n);
    }));
  }
  getDirPath(e) {
    var t = e.lastIndexOf("/");
    return -1 === t ? "" : e.substring(0, t);
  }
  preLoadLevelLibraryByPath(e, t) {
    var o = this;
    return new Promise(function (n) {
      var i = o.getDirPath(e);
      resManager.preDownLoadByDir(i, function () {}, function (e, t) {
        n(!t);
      }, t);
    });
  }
  getLevelData(e, t) {
    var o = this;
    if (this.dataCache.has(e)) {
      t(this.dataCache.get(e));
    } else {
      this.loadLevelLibrary(e).then(function (n) {
        var i = n.every(function (e) {
            return e.length > 0;
          }),
          r = n.reduce(function (e, t) {
            return e.concat(t);
          }, []);
        o.overridePercentile(r, i);
        o.fillLevelValue(r, e);
        i && o.dataCache.set(e, r);
        t(r);
      }).catch(function () {
        t([]);
      });
    }
  }
  overridePercentile() {}
  getLevelDataCacheKey(e, t) {
    var o = CryptoJS.MD5(e + "_" + t).toString().toUpperCase();
    return PrefixLevelLibrary + "_" + o;
  }
  loadLevelLibrary(e) {
    var t = this,
      o = this.getLevelPath(e);
    return Promise.all(o.map(function (o) {
      var n = __read(o, 2),
        i = n[0],
        r = n[1];
      return t.loadLevelLibraryByPath(e, i, r);
    }));
  }
  loadLevelLibraryByPath(e, t, o) {
    var n = this;
    return new Promise(function (e) {
      var i = n.getLevelDataCacheKey(t, o),
        r = n.levelDataCache.get(i) || [],
        a = false,
        l = function l(t) {
          if (!a) {
            a = true;
            e(t);
          }
        };
      if (r.length > 0) l(r);else {
        var s = setTimeout(function () {
          clearTimeout(s);
          s = -1;
          l([]);
        }, 100);
        resManager.loadRes(t, cc.JsonAsset, o).then(function (e) {
          if (-1 !== s) {
            clearTimeout(s);
            s = -1;
          }
          if (e) {
            if (e instanceof cc.JsonAsset) {
              r = n.parseLevelData(e.json);
              n.levelDataCache.set(i, r);
              e.decRef();
              l(r);
            } else l([]);
          } else l([]);
        }).catch(function () {
          l([]);
        });
      }
    });
  }
  @mj.traitEvent("DCMgr_parseLvData")
  parseLevelData(e) {
    var t,
      o,
      n = e.header,
      i = e.rows,
      a = [];
    try {
      for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
        for (var c = s.value, u = {}, p = 0; p < n.length; p++) u[n[p]] = c[p];
        a.push(u);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  fillLevelValue(e, t) {
    this.levelValueLayer.fillLevelValue({
      levels: e,
      gameType: t,
      levelModel: this.levelModel,
      extractModel: this.getExtractModel(t)
    });
  }
  getExtractModel(e) {
    switch (e) {
      case MjGameType.Normal:
        return ExtractNormal.getInstance();
      case MjGameType.Travel:
        return ExtractTravel.getInstance();
      case MjGameType.DailyChallenge:
        return ExtractDaily.getInstance();
    }
    return null;
  }
  calculatePercentile(e, t) {
    var o = t.length,
      n = Array.from({
        length: o
      }, function (e, t) {
        return t;
      });
    n.sort(function (o, n) {
      return t[o][e] - t[n][e];
    });
    for (var i = new Map(), r = 0; r < o; r++) {
      var a = t[n[r]][e];
      i.has(a) || i.set(a, r);
    }
    var l = getPercentileKey(e);
    for (r = 0; r < o; r++) {
      var s = i.has(t[r][e]) ? i.get(t[r][e]) : 0;
      t[r][l] = s / o;
    }
  }
}