import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { FlowerStarConfigUtil } from '../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import { TileMapSimulator } from '../../../Scripts/objects/TileMapSimulator';
enum u {
  Tong = 0,
  Tiao = 1,
  Wan = 2,
}
var y = [27, 28, 29, 30, 31, 32, 33, 55, 59];
var m = [[0, 1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24, 25, 26]];
@mj.trait
@mj.class("SkinPreferenceTrait")
export default class SkinPreferenceTrait extends Trait {
  skinsMap = {};
  static traitKey = "SkinPreference";
  isEmpty(e) {
    return null == e || "" === e;
  }
  getSkins() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.skins) && void 0 !== t ? t : [1, 2, 3, 4, 5];
  }
  supportModes() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.supportModes) && void 0 !== t ? t : [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge, MjGameType.Classic, MjGameType.Tile2Normal];
  }
  isSupportMode(e) {
    return this.supportModes().includes(e);
  }
  getForbidTraits() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.forbidTraits) && void 0 !== t ? t : ["ChangeResIdTrait", "WinStreakBaseCardSkinTrait"];
  }
  onLoad() {
    var t, r;
    super.onLoad.call(this);
    this.isEmpty(this.localData.firstUses) && (this.localData.firstUses = {});
    this.isEmpty(this.localData.records) && (this.localData.records = []);
    var a = FlowerStarConfigUtil.getFullList(),
      i = this.getSkins(),
      n = [];
    try {
      for (var s = __values(a), l = s.next(); !l.done; l = s.next()) {
        var u = l.value;
        if (i.includes(u.id)) {
          this.skinsMap[u.id] = u;
          u.isLocal || n.push(u.bundle);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (r = s.return) && r.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    this.addRemoteBundlesToLoader(n);
  }
  addRemoteBundlesToLoader(e) {
    var t = LowPriorityBundleLoader.getInstance();
    e.forEach(function (e) {
      t.addTask(e, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    });
  }
  isSkinBundleReady(e) {
    return LowPriorityBundleLoader.getInstance().isBundlePreLoaded(e);
  }
  setReplaceList(e, t) {
    this.isEmpty(this.localData[e]) && (this.localData[e] = []);
    this.localData[e] = t;
  }
  getReplaceList(e) {
    return this.isEmpty(this.localData[e]) ? [] : this.localData[e];
  }
  onIptSetLv_reGenFaces(e, t) {
    var r = e.ins.gameContext,
      a = e.args[0].levelData;
    if (this.isSupportMode(r.gameType)) {
      if (a.isRestart) t();else if (a.isNewGame) {
        this.replaceFaces(r);
        t();
      } else t();
    } else t();
  }
  onIptT2SetLv_reGenFaces(e, t) {
    var r = e.ins.gameContext,
      a = e.args[0].levelData;
    if (this.isSupportMode(r.gameType)) {
      if (a.isRestart) t();else if (a.isNewGame) {
        this.replaceFaces(r);
        t();
      } else t();
    } else t();
  }
  replaceFaces(e) {
    var t = e.getTileMapObject(),
      r = [],
      a = new Map(),
      i = [];
    this.replaceWanTiaoBing(e, r, i);
    this.replaceFirstMatch(e, r, a, i);
    this.setReplaceList(e.gameType, r);
    this.applyCardIdMappingToResId(t, a);
  }
  getBoardInfo(e) {
    var _t = {};
    _t[u.Wan] = 0;
    _t[u.Tiao] = 0;
    _t[u.Tong] = 0;
    var r = _t,
      a = e.getTileMapObject(),
      i = new Set(m[u.Wan]),
      n = new Set(m[u.Tiao]),
      o = new Set(m[u.Tong]);
    a.aliveTiles().forEach(function (e) {
      if (i.has(e.resId)) {
        r[u.Wan] = r[u.Wan] + 1;
      } else {
        if (n.has(e.resId)) {
          r[u.Tiao] = r[u.Tiao] + 1;
        } else {
          o.has(e.resId) && (r[u.Tong] = r[u.Tong] + 1);
        }
      }
    });
    return r;
  }
  replaceWanTiaoBing(e, t, r) {
    var a, i, n, o;
    if (!(NormalGameData.getInstance().getLevelId() < 21)) {
      var s = this.getMaxFirstUseSkin();
      if (-1 !== s) {
        var l = this.getBoardInfo(e),
          c = [];
        l[u.Tong] > 0 && c.push(u.Tong);
        l[u.Tiao] > 0 && c.push(u.Tiao);
        l[u.Wan] > 0 && c.push(u.Wan);
        if (0 !== c.length) {
          for (var f = c[Math.floor(Math.random() * c.length)], p = m[f], d = p.length, h = e.getCardConfigMap(), g = 0; g < d; g++) {
            var T = p[g],
              M = y[g],
              I = null !== (i = null === (a = h.get(T)) || void 0 === a ? void 0 : a.resName) && void 0 !== i ? i : "",
              S = null !== (o = null === (n = h.get(M)) || void 0 === n ? void 0 : n.resName) && void 0 !== o ? o : "";
            t.push({
              skinId: s,
              oldImg: I,
              newImg: S
            });
          }
          r.push(s);
        }
      }
    }
  }
  replaceFirstMatch(e, t, r, a) {
    var i,
      n,
      o = e.gameType === MjGameType.Tile2Normal ? this.findInitialMatchTile2(e) : this.findInitialMatch(e),
      s = o.size;
    if (!(s <= 0)) for (var l = this.getCanUseSkins(a), u = Math.min(s, l.length, y.length), c = this.shuffle(Array.from(o)), p = this.shuffle(y), d = this.shuffle(l), h = e.getCardConfigMap(), v = 0; v < u; v++) {
      var g = c[v],
        m = p[v],
        T = d[v],
        M = null !== (n = null === (i = h.get(m)) || void 0 === i ? void 0 : i.resName) && void 0 !== n ? n : "";
      t.push({
        skinId: T,
        oldImg: M,
        newImg: M
      });
      r.set(g, m);
    }
  }
  getTaskCardResName() {
    var e,
      t = mj.getClassByName("TaskModel");
    return null === (e = null == t ? void 0 : t.getInstance()) || void 0 === e ? void 0 : e.getTaskCardResName();
  }
  onCardUtil_atlasPathBundle(e, t) {
    var r = UserModel.getInstance().getCurrentGameType();
    if (r !== MjGameType.None) {
      if (this.isSupportMode(r)) {
        var a = this.getReplaceList(r);
        if (0 !== a.length) {
          var i = e.args[0];
          if (i) {
            var n = this.getTaskCardResName();
            if (n && i === n) t();else {
              var o = a.find(function (e) {
                return e.oldImg === i;
              });
              if (o) {
                var s = this.skinsMap[o.skinId];
                if (s) {
                  t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: {
                      path: "atlas/flowerCardIcon/" + o.newImg,
                      bundleName: s.bundle,
                      fromAtlas: true
                    }
                  });
                } else {
                  t();
                }
              } else t();
            }
          } else t();
        } else t();
      } else t();
    } else t();
  }
  applyCardIdMappingToResId(e, t) {
    var r,
      a,
      i = e.aliveTiles();
    try {
      for (var n = __values(i), s = n.next(); !s.done; s = n.next()) {
        var l = s.value,
          u = l.cardId,
          c = t.get(u);
        void 0 !== c && c !== l.resId && e.changeTileResId(l.id, c);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (a = n.return) && a.call(n);
      } finally {
        if (r) throw r.error;
      }
    }
  }
  shuffle(e) {
    for (var t, r = [...e], a = r.length - 1; a > 0; a--) {
      var i = Math.floor(Math.random() * (a + 1));
      t = __read([r[i], r[a]], 2), r[a] = t[0], r[i] = t[1];
    }
    return r;
  }
  getCanUseSkins(e) {
    var t,
      r,
      a,
      i,
      n,
      s = [],
      l = this.getSkins();
    try {
      for (var u = __values(l), c = u.next(); !c.done; c = u.next()) {
        var f = c.value;
        e.includes(f) || ((null === (a = this.skinsMap[f]) || void 0 === a ? void 0 : a.isLocal) || this.isSkinBundleReady(null !== (n = null === (i = this.skinsMap[f]) || void 0 === i ? void 0 : i.bundle) && void 0 !== n ? n : "")) && s.push(f);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (r = u.return) && r.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    return s;
  }
  onIptBase_pushClrEff(e, t) {
    var r = __read(e.args, 1)[0],
      a = e.ins.gameContext,
      i = a.getGameData();
    if (this.isSupportMode(a.gameType)) {
      if (i.getClearTileCount() > 2) t();else {
        var n = this.getReplaceList(a.gameType);
        if (0 !== n.length) {
          var o = a.getTileMapObject().getTileObject(r);
          if (o) {
            var l = n.find(function (e) {
              return e.oldImg === o.resName;
            });
            if (l) {
              var u = a.getGameData().getLevelId();
              this.updateFirstUse(a.gameType, u, l.skinId);
              t();
            } else t();
          } else t();
        } else t();
      }
    } else t();
  }
  onT2SlotBarMod_clearSlotBar(e, t) {
    var r = e.ins.context,
      a = r.getGameData();
    if (this.isSupportMode(r.gameType)) {
      var i = e.args[0],
        n = r.tile2SlotBarModifier.getClearTileList(i);
      if (n.length <= 0) t();else if (a.getClearTileCount() > 2) t();else {
        var o = this.getReplaceList(r.gameType);
        if (0 !== o.length) {
          var s = n[0][0],
            l = r.getTileMapObject().getTileObject(s);
          if (l) {
            var u = o.find(function (e) {
              return e.oldImg === l.resName;
            });
            if (u) {
              var c = r.getGameData().getLevelId();
              this.updateFirstUse(r.gameType, c, u.skinId);
              t();
            } else t();
          } else t();
        } else t();
      }
    } else t();
  }
  updateFirstUse(e, t, r) {
    var a = e + "_" + t,
      i = this.localData.records;
    if (!i.includes(a)) {
      i.unshift(a);
      i = i.slice(0, 10);
      this.localData.records = i;
      var n = this.localData.firstUses;
      if (n[r]) {
        n[r]++;
      } else {
        n[r] = 1;
      }
      this.localData.firstUses = n;
    }
  }
  getMaxFirstUseSkin() {
    var e = this.localData.firstUses,
      t = [];
    for (var r in e) t.push([Number(r), e[r]]);
    t.sort(function (e, t) {
      return t[1] - e[1];
    });
    if (0 === t.length) return -1;
    var a = t.filter(function (e) {
      return e[1] === t[0][1];
    });
    return 0 === a.length ? -1 : a[Math.floor(Math.random() * a.length)][0];
  }
  findInitialMatchTile2(e) {
    var t,
      r,
      a = new Set(),
      i = TileMapSimulator.createSim(e),
      n = i.aliveTiles(),
      s = n.filter(function (e) {
        return !e.getIsInSlotBar() && 0 === i.isCardLock(e);
      });
    if (s.length <= 0) return a;
    var l = function l(e) {
      var t, r;
      if (a.has(e.cardId)) return "continue";
      e.isValid = false;
      var s = n.filter(function (t) {
        return t.cardId === e.cardId && t.isValid && !t.getIsInSlotBar();
      });
      try {
        for (var l = (t = void 0, __values(s)), u = l.next(); !u.done; u = l.next()) {
          var c = u.value;
          if (0 === i.isCardLock(c)) {
            a.add(e.cardId);
            break;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          u && !u.done && (r = l.return) && r.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      e.isValid = true;
    };
    try {
      for (var u = __values(s), c = u.next(); !c.done; c = u.next()) l(c.value);
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (r = u.return) && r.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    return a;
  }
  findInitialMatch(e) {
    var t = TileMapSimulator.createSim(e);
    t.updateCanMatchTiles();
    var r = t.getCanMatchTiles(),
      a = new Set();
    r.forEach(function (e, t) {
      e.length >= 2 && a.add(t);
    });
    return a;
  }
}