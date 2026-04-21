import Trait from '../../../Scripts/framework/trait/Trait';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("ChangeResIdMaxMiniTrait")
export default class ChangeResIdMaxMiniTrait extends Trait {
  _baseDiffMatrix = null;
  static traitKey = "ChangeResIdMaxMini";
  onIptSetLv_reGenFaces(r, e) {
    var a, i;
    Date.now();
    try {
      var n = __read(r.args, 1)[0],
        s = null == n ? void 0 : n.levelData;
      if (!s || !s.isNewGame || s.isRestart) {
        e();
        return;
      }
      var f = r.ins,
        l = null == f ? void 0 : f.tileMapObject;
      if (!l) {
        e();
        return;
      }
      var u = s.levelId,
        d = GameUtils.isTypeHardLevel(s.gameType, u),
        p = null !== (a = this._traitData.timeMax) && void 0 !== a ? a : 50;
      if (1 === this._traitData.checkType) {
        if (1 === this._traitData.isHard && d) {
          e();
          return;
        }
        if (2 === this._traitData.isHard && !d) {
          e();
          return;
        }
        d = 1 !== this._traitData.socreType;
      }
      var h = l.tileObjectMap(),
        v = this.findResIds(l, h),
        y = v.selectResIds,
        m = y.length;
      if (m <= 0) {
        e();
        return;
      }
      var g = v.baseCardIdsInGame;
      if (g.length < m) {
        var b = y.map(function (r) {
          return r + 1;
        });
        this.applyOrderedMapping(l, h, y, b);
        e();
        return;
      }
      var _ = this.pickTargetCardIds(g, m, d, p).targetCardIds;
      this.applyOrderedMapping(l, h, y, _);
      e();
    } catch (r) {
      console.error("[" + ChangeResIdMaxMiniTrait.traitKey + "] onIptSetLv_reGenFaces error: " + (null !== (i = null == r ? void 0 : r.message) && void 0 !== i ? i : r));
      e();
    }
  }
  getBaseDiffMatrix() {
    var r, e;
    if (this._baseDiffMatrix) return this._baseDiffMatrix;
    for (var t = new Array(28), a = 0; a <= 27; a++) {
      var i = new Array(28).fill(50);
      i[a] = 0;
      t[a] = i;
    }
    var n = DataReader.getList(ConfigType.card_difference2);
    if (n && n.length > 0) try {
      for (var o = __values(n), f = o.next(); !f.done; f = o.next()) {
        var c = f.value;
        if (c) {
          var d = c.CardId1,
            p = c.CardId2,
            h = c.Difference;
          if ("number" == typeof d && "number" == typeof p && "number" == typeof h && !(d <= 0 || d > 27 || p <= 0 || p > 27 || d === p)) {
            t[d][p] = h;
            t[p][d] = h;
          }
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (e = o.return) && e.call(o);
      } finally {
        if (r) throw r.error;
      }
    }
    this._baseDiffMatrix = t;
    return this._baseDiffMatrix;
  }
  isBaseResId(r) {
    return "number" == typeof r && r >= 0 && r <= 26;
  }
  isBaseCardId(r) {
    return "number" == typeof r && r >= 1 && r <= 27;
  }
  isSelectable(r, e) {
    if (!e || !e.isValid) return false;
    var t = r.isHasCover(e),
      a = 0 !== r.isCardLock(e);
    return !t && !a;
  }
  findResIds(r, e) {
    var t,
      a,
      i = [],
      n = [],
      o = new Set(),
      f = new Set();
    try {
      for (var l = __values(e.values()), u = l.next(); !u.done; u = l.next()) {
        var c = u.value;
        if (c && c.isValid) {
          var d = c.resId;
          if (this.isBaseResId(d)) {
            var p = c.cardId;
            if (this.isBaseCardId(p) && !f.has(p)) {
              f.add(p);
              n.push(p);
            }
            if (this.isSelectable(r, c) && !o.has(d)) {
              o.add(d);
              i.push(d);
            }
          }
        }
      }
    } catch (r) {
      t = {
        error: r
      };
    } finally {
      try {
        u && !u.done && (a = l.return) && a.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return {
      selectResIds: i,
      baseCardIdsInGame: n
    };
  }
  pickTargetCardIds(r, e, t, a) {
    var i = Date.now(),
      n = 0,
      o = false,
      s = i + a,
      f = 0,
      l = function l() {
        return 0 == (1023 & ++f) && Date.now() > s;
      };
    if (e <= 0) return {
      targetCardIds: [],
      pickTimedOut: false,
      pickElapsedMs: Date.now() - i,
      matchNums: 0,
      combCount: 0,
      bestScore: 0
    };
    if (r.length <= e) return {
      targetCardIds: r.slice(0, e),
      pickTimedOut: false,
      pickElapsedMs: Date.now() - i,
      matchNums: 0,
      combCount: 0,
      bestScore: 0
    };
    for (var u = this.nChooseK(r.length, e), c = r.length, d = this.getBaseDiffMatrix(), p = [], h = 0; h < e; h++) p.push(h);
    var v = 0;
    for (h = 0; h < p.length; h++) for (var y = h + 1; y < p.length; y++) {
      var m = r[p[h]],
        g = r[p[y]];
      v += d[m][g];
    }
    var b = new Array(e),
      _ = function _(a, i, s) {
        if (l()) {
          o = true;
          return false;
        }
        if (i === e) {
          n++;
          f = s;
          if (t ? f < v : f > v) {
            v = s;
            p = b.slice(0, e);
          }
          return true;
        }
        for (var f, u = c - (e - i), h = a; h <= u; h++) {
          if (l()) {
            o = true;
            return false;
          }
          for (var y = 0, m = r[h], g = 0; g < i; g++) {
            var I = r[b[g]];
            y += d[m][I];
          }
          b[i] = h;
          if (false === _(h + 1, i + 1, s + y)) return false;
        }
        return true;
      };
    _(0, 0, 0);
    var I = [];
    for (h = 0; h < p.length; h++) {
      var w = p[h];
      "number" == typeof w && w >= 0 && w < r.length && I.push(r[w]);
    }
    return I.length !== e ? {
      targetCardIds: r.slice(0, e),
      pickTimedOut: o,
      pickElapsedMs: Date.now() - i,
      matchNums: n,
      combCount: u,
      bestScore: v
    } : {
      targetCardIds: I,
      pickTimedOut: o,
      pickElapsedMs: Date.now() - i,
      matchNums: n,
      combCount: u,
      bestScore: v
    };
  }
  nChooseK(r, e) {
    if (e < 0 || r < 0 || e > r) return 0;
    e = Math.min(e, r - e);
    for (var t = 1, a = 1; a <= e; a++) if ((t = t * (r - e + a) / a) > 1000000000) return t;
    return t;
  }
  applyOrderedMapping(r, e, t, a) {
    var i,
      n,
      f = Math.min(t.length, a.length);
    if (!(f <= 0)) {
      for (var l = new Array(27).fill(-1), u = 0, c = 0; c < f; c++) {
        var d = t[c],
          p = a[c] - 1;
        if (this.isBaseResId(d) && this.isBaseResId(p)) {
          -1 === l[d] && u++;
          l[d] = p;
        }
      }
      if (0 !== u) try {
        for (var h = __values(e.entries()), v = h.next(); !v.done; v = h.next()) {
          var y = __read(v.value, 2),
            m = y[0],
            g = y[1];
          if (g && g.isValid) {
            d = g.resId;
            this.isBaseResId(d) && -1 !== (p = l[d]) && p !== d && r.changeTileResId(m, p);
          }
        }
      } catch (r) {
        i = {
          error: r
        };
      } finally {
        try {
          v && !v.done && (n = h.return) && n.call(h);
        } finally {
          if (i) throw i.error;
        }
      }
    }
  }
}