import ExtractTrait from '../../../Scripts/ExtractTrait';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var c = {
  Tong: "Tong",
  Tiao: "Tiao",
  Wan: "Wan",
  Zi: "Zi",
  Hua: "Hua",
  Other: "Other"
};
@mj.trait
@mj.class("ColorSetMergeTrait")
export default class ColorSetMergeTrait extends ExtractTrait {
  _currentGameType = "";
  EXCLUDED_TILE_TYPES = new Set([ETileType.RankCard, ETileType.ColorCard, ETileType.Yoga, ETileType.Bomb]);
  OLD_FLOWER_CARD_IDS = [35, 36];
  static traitKey = "ColorSetMerge";
  onLoad() {
    var e, r, o, n, a;
    super.onLoad.call(this);
    this.localData.lastSelectedColorSetsByMode || (this.localData.lastSelectedColorSetsByMode = {});
    this._config = {
      k1: null !== (e = this._traitData.k1) && void 0 !== e ? e : 2,
      k2: null !== (r = this._traitData.k2) && void 0 !== r ? r : 4,
      C: null !== (o = this._traitData.C) && void 0 !== o ? o : 1,
      r: null !== (n = this._traitData.r) && void 0 !== n ? n : 1,
      level_num: null !== (a = this._traitData.level_num) && void 0 !== a ? a : 999999
    };
  }
  onIptSetLv_reGenFacesAfter(t, e) {
    if (this.checkGameMode()) {
      var r = t.ins,
        o = t.args[0].levelData;
      if (this.shouldProcess(o)) {
        if (Math.random() > this._config.r) e();else {
          this.mergeColorSets(r.tileMapObject, r.gameContext);
          e();
        }
      } else e();
    } else e();
  }
  onIptT2SetLv_genFcsAfter(t, e) {
    if (this.checkGameMode()) {
      var r = t.ins,
        o = t.args[0].levelData;
      if (this.shouldProcess(o)) {
        if (Math.random() > this._config.r) e();else {
          this.mergeColorSets(r.tileMapObject, r.gameContext);
          e();
        }
      } else e();
    } else e();
  }
  shouldProcess(t) {
    if (!t.isNewGame) return false;
    if (!t.isExtractLevel) return false;
    var e = t.levelId;
    return !(e > this._config.level_num || ExtractTool.getInstance().isFixedLevel(e));
  }
  mergeColorSets(t, e) {
    var r = t.tileObjectMap();
    if (r && 0 !== r.size) {
      var o = UserModel.getInstance();
      this._currentGameType = o.getCurrentGameType();
      var n = this.collectExistingColorSets(r);
      if (!(n.length <= 1)) {
        var a = this.determineK(n.length);
        if (a >= n.length) this.updateLastSelectedColorSets(n);else {
          var i = this.selectColorSets(n, a);
          this.doMerge(t, e, r, i);
          this.updateLastSelectedColorSets(i);
        }
      }
    }
  }
  collectExistingColorSets(t) {
    var e = this,
      r = new Set();
    t.forEach(function (t) {
      e.EXCLUDED_TILE_TYPES.has(t.type) || r.add(e.getColorSetType(t.cardId));
    });
    return Array.from(r);
  }
  getColorSetType(t) {
    return t >= 1 && t <= 9 ? c.Tong : t >= 10 && t <= 18 ? c.Tiao : t >= 19 && t <= 27 ? c.Wan : t >= 28 && t <= 34 ? c.Zi : t >= 54 && t <= 61 ? c.Hua : 35 == t || 36 == t ? c.Hua : c.Other;
  }
  determineK(t) {
    var e = Math.min(this._config.k1, t),
      r = Math.min(this._config.k2, t);
    return e >= r ? e : e + Math.floor(Math.random() * (r - e + 1));
  }
  selectColorSets(t, e) {
    var r,
      o,
      n,
      a,
      i,
      c,
      f = [],
      u = [...t],
      h = this.getLastSelectedColorSets(),
      d = Math.min(this._config.C, e, h.length),
      p = this.shuffle([...h]);
    try {
      for (var y = __values(p), v = y.next(); !v.done; v = y.next()) {
        var g = v.value;
        if (f.length >= d) break;
        if (-1 !== (m = u.indexOf(g))) {
          f.push(g);
          u.splice(m, 1);
        }
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        v && !v.done && (o = y.return) && o.call(y);
      } finally {
        if (r) throw r.error;
      }
    }
    var _ = u.filter(function (t) {
        return !h.includes(t);
      }),
      S = this.shuffle([..._]);
    try {
      for (var C = __values(S), T = C.next(); !T.done; T = C.next()) {
        var m;
        g = T.value;
        if (f.length >= e) break;
        f.push(g);
        -1 !== (m = u.indexOf(g)) && u.splice(m, 1);
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        T && !T.done && (a = C.return) && a.call(C);
      } finally {
        if (n) throw n.error;
      }
    }
    if (f.length < e && u.length > 0) {
      var M = this.shuffle([...u]);
      try {
        for (var E = __values(M), x = E.next(); !x.done; x = E.next()) {
          g = x.value;
          if (f.length >= e) break;
          f.push(g);
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          x && !x.done && (c = E.return) && c.call(E);
        } finally {
          if (i) throw i.error;
        }
      }
    }
    return f;
  }
  doMerge(t, e, r, o) {
    var n,
      a,
      i,
      l,
      f = this,
      u = new Set(o),
      h = new Map(),
      d = new Map();
    r.forEach(function (t) {
      if (!f.EXCLUDED_TILE_TYPES.has(t.type)) {
        var e = f.getColorSetType(t.cardId);
        if (u.has(e)) h.set(t.cardId, (h.get(t.cardId) || 0) + 1);else {
          var r = d.get(t.cardId);
          if (r) {
            r.push(t);
          } else {
            d.set(t.cardId, [t]);
          }
        }
      }
    });
    var p = Array.from(d.keys()).sort(function (t, e) {
      return t - e;
    });
    try {
      for (var y = __values(p), v = y.next(); !v.done; v = y.next()) {
        var g = v.value,
          _ = d.get(g),
          S = this.findLeastCountCardId(h);
        if (-1 !== S) {
          var C = this.getResIdByCardId(S, e);
          if (-1 !== C) {
            try {
              for (var T = (i = void 0, __values(_)), m = T.next(); !m.done; m = T.next()) {
                var M = m.value;
                t.changeTileResId(M.id, C);
              }
            } catch (t) {
              i = {
                error: t
              };
            } finally {
              try {
                m && !m.done && (l = T.return) && l.call(T);
              } finally {
                if (i) throw i.error;
              }
            }
            var E = (h.get(S) || 0) + _.length;
            h.set(S, E);
          }
        }
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        v && !v.done && (a = y.return) && a.call(y);
      } finally {
        if (n) throw n.error;
      }
    }
    u.has(c.Hua) && this.convertOldFlowerToNew(t, r);
  }
  convertOldFlowerToNew(t, e) {
    var r = this,
      o = [];
    e.forEach(function (t) {
      r.EXCLUDED_TILE_TYPES.has(t.type) || t.resId >= 34 && t.resId <= 41 && o.push(t);
    });
    if (0 !== o.length) for (var n = [55, 56, 57, 58, 59, 60, 61, 62], a = 0, i = 0; i < o.length; i += 2) {
      var l = n[a % n.length],
        s = o[i];
      s.resId;
      t.changeTileResId(s.id, l);
      if (i + 1 < o.length) {
        var c = o[i + 1];
        c.resId;
        t.changeTileResId(c.id, l);
      }
      a++;
    }
  }
  findLeastCountCardId(t) {
    var e = this,
      r = Infinity,
      o = [],
      n = [];
    t.forEach(function (t, a) {
      if (e.OLD_FLOWER_CARD_IDS.includes(a)) n.push(a);else if (t < r) {
        r = t;
        o.length = 0;
        o.push(a);
      } else t === r && o.push(a);
    });
    if (o.length > 0) return o[Math.floor(Math.random() * o.length)];
    if (n.length > 0) {
      var a = [54, 55, 56, 57, 58, 59, 60, 61];
      return a[Math.floor(Math.random() * a.length)];
    }
    return -1;
  }
  getResIdByCardId(t, e) {
    var r = e.getCardConfigMap(),
      o = [];
    r.forEach(function (e) {
      e.cardId === t && o.push(e.id);
    });
    return 0 === o.length ? -1 : o[Math.floor(Math.random() * o.length)];
  }
  getLastSelectedColorSets() {
    return (this.localData.lastSelectedColorSetsByMode || {})[this._currentGameType] || [];
  }
  updateLastSelectedColorSets(t) {
    var e = this.localData.lastSelectedColorSetsByMode || {};
    e[this._currentGameType] = [...t];
    this.localData.lastSelectedColorSetsByMode = e;
    this.localData.lastSelectedColorSetsByMode = this.localData.lastSelectedColorSetsByMode;
  }
  shuffle(t) {
    for (var e, r = [...t], o = r.length - 1; o > 0; o--) {
      var n = Math.floor(Math.random() * (o + 1));
      e = __read([r[n], r[o]], 2), r[o] = e[0], r[n] = e[1];
    }
    return r;
  }
}