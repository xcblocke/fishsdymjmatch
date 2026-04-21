import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import { FlowerStarConfigUtil } from '../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil';
var v = ["W", "b", "t"];
var y = {
  1: "Z_dong",
  2: "Z_nan",
  3: "Z_xi",
  4: "Z_bei",
  5: "Z_zhong",
  6: "Z_fa",
  7: "Z_bai",
  8: "H_mei",
  9: "J_chun"
};
@mj.trait
@mj.class("Tile2StarBaseCardTrait")
export default class Tile2StarBaseCardTrait extends Trait {
  _currentGameType = MjGameType.Normal;
  _cachedIsFeatureEnabled = false;
  _startLevel = 2;
  static traitKey = "Tile2StarBaseCard";
  get _suitGroupCount() {
    var e, t;
    return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== t ? t : 1;
  }
  get _starThemesList() {
    return FlowerStarConfigUtil.getStarList();
  }
  getStartLevel() {
    return this._startLevel;
  }
  getSuitGroupCount() {
    return this._suitGroupCount;
  }
  onLoad() {
    var t, r;
    super.onLoad.call(this);
    this._startLevel = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== r ? r : 2;
    this.ensureLocalDataDefaults();
    this.addRemoteBundlesToLoader();
  }
  ensureLocalDataDefaults() {
    this.localData.currentEntries || (this.localData.currentEntries = []);
    this.localData.handledLevelId || (this.localData.handledLevelId = 0);
    this.localData.recentDraws || (this.localData.recentDraws = []);
    this.localData.preparedNext || (this.localData.preparedNext = null);
    this.localData.preparedAfterNext || (this.localData.preparedAfterNext = null);
    this.saveLocalData();
  }
  addRemoteBundlesToLoader() {
    var e = LowPriorityBundleLoader.getInstance(),
      t = this._starThemesList.filter(function (e) {
        return !e.isLocal;
      }).map(function (e) {
        return e.bundle;
      });
    Array.from(new Set(t)).forEach(function (t) {
      return e.addTask(t, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    });
  }
  onMainGameCtrl_initRes(e, t) {
    try {
      var a = e.ins;
      this._currentGameType = a.gameType;
      var n = UserModel.getInstance(),
        o = n.getMainGameType();
      if (this._currentGameType !== o || this._currentGameType !== MjGameType.Tile2Normal) {
        this._cachedIsFeatureEnabled = false;
        t();
        return;
      }
      var l = n.getMainGameData(),
        i = (null == l ? void 0 : l.getLevelId()) || 0,
        s = (null == l ? void 0 : l.getReplayCount()) || 0;
      if (i < this.getStartLevel()) {
        this._cachedIsFeatureEnabled = false;
        t();
        return;
      }
      this._cachedIsFeatureEnabled = true;
      0 === s && this.handleNewLevel(i);
      this.doPreloadForInitRes(a, i);
    } catch (e) {
      console.error("[" + Tile2StarBaseCardTrait.traitKey + "] initRes error: " + e);
    }
    t();
  }
  handleNewLevel(e) {
    if (this.localData.handledLevelId !== e) {
      var t = this.localData.preparedNext;
      if ((null == t ? void 0 : t.forLevelId) === e) {
        this.localData.currentEntries = t.entries;
        this.pushRecentDraws(e, t.themeIds);
        var r = this.localData.preparedAfterNext;
        if ((null == r ? void 0 : r.forLevelId) === e + 1) {
          this.localData.preparedNext = r;
        } else {
          this.localData.preparedNext = this.drawForLevel(e + 1);
        }
        this.localData.preparedAfterNext = this.drawForLevel(e + 2);
      } else {
        var a = this.drawForLevel(e);
        this.localData.currentEntries = a.entries;
        this.pushRecentDraws(e, a.themeIds);
        this.localData.preparedNext = this.drawForLevel(e + 1);
        this.localData.preparedAfterNext = this.drawForLevel(e + 2);
      }
      this.localData.handledLevelId = e;
      this.saveLocalData();
    }
  }
  doPreloadForInitRes(e, t) {
    var r, a, n, o;
    if (e && "function" == typeof e.addPreloadRes) {
      var i = new Set();
      try {
        for (var s = __values(this.localData.currentEntries), u = s.next(); !u.done; u = s.next()) {
          var c = u.value;
          i.add(c.bundle);
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (a = s.return) && a.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
      var d = this.localData.preparedNext;
      if ((null == d ? void 0 : d.forLevelId) === t + 1) try {
        for (var h = __values(d.entries), f = h.next(); !f.done; f = h.next()) {
          c = f.value;
          i.add(c.bundle);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (o = h.return) && o.call(h);
        } finally {
          if (n) throw n.error;
        }
      }
      i.forEach(function (t) {
        e.addPreloadRes("SpriteAtlas", t + ":atlas/flowerCardIcon");
      });
    }
  }
  onTile2BfWinBhv_start(e, t) {
    var r, a;
    try {
      var n = UserModel.getInstance(),
        o = n.getMainGameType();
      if (this._currentGameType !== o) {
        t();
        return;
      }
      var l = n.getMainGameData(),
        i = (null == l ? void 0 : l.getLevelId()) || 0;
      if (i < this.getStartLevel()) {
        t();
        return;
      }
      var s = null === (a = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === a ? void 0 : a.gameCtr;
      if (!s || "function" != typeof (null == s ? void 0 : s.loadRes)) {
        t();
        return;
      }
      this.prepareNextLevelAndLoad(s, i);
      this._cachedIsFeatureEnabled = true;
    } catch (e) {}
    t();
  }
  prepareNextLevelAndLoad(e, t) {
    var r, a, n, o, i;
    if ((null === (i = this.localData.preparedNext) || void 0 === i ? void 0 : i.forLevelId) !== t) {
      this.localData.preparedNext = this.drawForLevel(t);
      this.saveLocalData();
    }
    this.handleNewLevel(t);
    var s = new Set();
    try {
      for (var u = __values(this.localData.currentEntries), c = u.next(); !c.done; c = u.next()) {
        var d = c.value;
        s.add(d.bundle);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (r) throw r.error;
      }
    }
    var h = this.localData.preparedAfterNext;
    if (h) try {
      for (var f = __values(h.entries), p = f.next(); !p.done; p = f.next()) {
        d = p.value;
        s.add(d.bundle);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (o = f.return) && o.call(f);
      } finally {
        if (n) throw n.error;
      }
    }
    s.forEach(function (t) {
      e.loadRes("atlas/flowerCardIcon", cc.SpriteAtlas, t).catch(function () {});
    });
  }
  onCardUtil_atlasPathBundle(e, t) {
    if (this._cachedIsFeatureEnabled && 0 !== this.localData.currentEntries.length) {
      var r = e.args[0];
      if (r) {
        var a = this.findEntryForResName(r);
        if (a) {
          var n = this.mapToFlowerCardName(r);
          if (n) {
            t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return,
              returnVal: {
                path: "atlas/flowerCardIcon/" + n,
                bundleName: a.bundle,
                fromAtlas: true
              }
            });
          } else {
            t();
          }
        } else t();
      } else t();
    } else t();
  }
  findEntryForResName(e) {
    var t = e.charAt(0);
    return v.includes(t) && this.localData.currentEntries.find(function (e) {
      return e.suit === t;
    }) || null;
  }
  mapToFlowerCardName(e) {
    var t = /[Wbt](\d)/.exec(e);
    if (!t) return null;
    var r = Number.parseInt(t[1]);
    return y[r] || null;
  }
  @mj.traitEvent("Tile2Star_drawLevel")
  drawForLevel(e) {
    var t,
      a,
      n = this.collectExcludeThemeIds(),
      o = this._suitGroupCount,
      i = this.drawRandomSuits(o),
      u = [],
      c = [];
    try {
      for (var d = __values(i), h = d.next(); !h.done; h = d.next()) {
        var f = h.value,
          p = this.drawRandomTheme([...n, ...c]);
        if (p) {
          u.push({
            suit: f,
            themeId: p.name,
            bundle: p.bundle
          });
          c.push(p.name);
        } else {
          console.error("[" + Tile2StarBaseCardTrait.traitKey + "] 可选主题不足 (targetLevel=" + e + ")");
          var v = this.drawRandomThemeFallback(c);
          if (v) {
            u.push({
              suit: f,
              themeId: v.name,
              bundle: v.bundle
            });
            c.push(v.name);
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (a = d.return) && a.call(d);
      } finally {
        if (t) throw t.error;
      }
    }
    return {
      forLevelId: e,
      entries: u,
      themeIds: c
    };
  }
  collectExcludeThemeIds() {
    var e,
      t,
      r,
      a,
      n = [];
    try {
      for (var o = __values(this.localData.recentDraws), i = o.next(); !i.done; i = o.next()) {
        var u = i.value;
        n.push.apply(n, [...u.themeIds]);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    try {
      for (var c = __values(this.localData.currentEntries), d = c.next(); !d.done; d = c.next()) {
        var h = d.value;
        n.push(h.themeId);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (a = c.return) && a.call(c);
      } finally {
        if (r) throw r.error;
      }
    }
    var f = this.localData.preparedNext;
    f && n.push.apply(n, [...f.themeIds]);
    var p = this.localData.preparedAfterNext;
    p && n.push.apply(n, [...p.themeIds]);
    return Array.from(new Set(n));
  }
  drawRandomSuits(e) {
    for (var t = [...v], r = [], a = 0; a < e && t.length > 0; a++) {
      var n = Math.floor(Math.random() * t.length);
      r.push(t[n]);
      t.splice(n, 1);
    }
    return r;
  }
  drawRandomTheme(e) {
    var t = new Set(e),
      r = this._starThemesList.filter(function (e) {
        return !t.has(e.name) && (!!e.isLocal || LowPriorityBundleLoader.getInstance().isBundlePreLoaded(e.bundle));
      });
    return 0 === r.length ? null : r[Math.floor(Math.random() * r.length)];
  }
  drawRandomThemeFallback(e) {
    var t = new Set(e),
      r = this._starThemesList.filter(function (e) {
        return !t.has(e.name) && (!!e.isLocal || LowPriorityBundleLoader.getInstance().isBundlePreLoaded(e.bundle));
      });
    if (0 === r.length) {
      var a = this._starThemesList.filter(function (e) {
        return !!e.isLocal || LowPriorityBundleLoader.getInstance().isBundlePreLoaded(e.bundle);
      });
      return 0 === a.length ? null : a[Math.floor(Math.random() * a.length)];
    }
    return r[Math.floor(Math.random() * r.length)];
  }
  pushRecentDraws(e, t) {
    this.localData.recentDraws.push({
      levelId: e,
      themeIds: t
    });
    for (; this.localData.recentDraws.length > 5;) this.localData.recentDraws.shift();
  }
  saveLocalData() {
    this.localData.currentEntries = this.localData.currentEntries;
    this.localData.handledLevelId = this.localData.handledLevelId;
    this.localData.recentDraws = this.localData.recentDraws;
    this.localData.preparedNext = this.localData.preparedNext;
    this.localData.preparedAfterNext = this.localData.preparedAfterNext;
  }
}