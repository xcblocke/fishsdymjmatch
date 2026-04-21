import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
this && this.__spread;
@mj.trait
@mj.class("ChangeBaseCardTrait")
export default class ChangeBaseCardTrait extends Trait {
  _gameType = MjGameType.Normal;
  static traitKey = "ChangeBaseCard";
  onLoad() {
    var e, r, i, a, o, n, l, s;
    super.onLoad.call(this);
    this._config = {
      threshold: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.threshold) && void 0 !== r ? r : 3,
      wLast1: null !== (a = null === (i = this._traitData) || void 0 === i ? void 0 : i.wLast1) && void 0 !== a ? a : 1,
      wLast2: null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.wLast2) && void 0 !== n ? n : 0.5,
      gameTypes: null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.gameTypes) && void 0 !== s ? s : [MjGameType.Normal]
    };
    this.ensureLocalData();
  }
  onIptSetLv_reGenFaces(t, e) {
    var i,
      a,
      o,
      n,
      u,
      p,
      f = this;
    try {
      var y = __read(t.args, 1)[0],
        h = null == y ? void 0 : y.levelData;
      if (!h || !h.isNewGame || h.isRestart) {
        e();
        return;
      }
      var d = null !== (o = h.gameType) && void 0 !== o ? o : MjGameType.Normal;
      this._gameType = d;
      if (-1 === this._config.gameTypes.indexOf(d)) {
        e();
        return;
      }
      var v = t.ins,
        g = null == v ? void 0 : v.tileMapObject;
      if (!g) {
        e();
        return;
      }
      var m = this.collectCountsAndUsedResIds(g),
        _ = m.counts,
        b = m.usedResIdSet;
      if (!Object.keys(_).some(function (t) {
        return f.isBaseResId(Number(t));
      })) {
        this.updateHistory(String(d), _);
        e();
        return;
      }
      var T = this.getHistory(String(d)),
        j = null !== (n = T.last1) && void 0 !== n ? n : {},
        w = null !== (u = T.last2) && void 0 !== u ? u : {},
        O = this.pickTargetsByFamiliarity(_, j, w, this._config);
      if (0 === O.length) {
        this.updateHistory(String(d), _);
        e();
        return;
      }
      var R = this.buildBaseReplacePool(_, j, w, this._config);
      R.length > 0 && this.shuffleArray(R);
      var S = null,
        B = R.length;
      if (O.length > R.length) {
        S = this.buildSpecialReplacePool(b);
        this.shuffleArray(S);
        B = R.length + S.length;
      }
      if (B <= 0) {
        this.updateHistory(String(d), _);
        e();
        return;
      }
      var I = O.slice(0, Math.min(O.length, B)),
        M = new Map();
      try {
        for (var x = __values(I), C = x.next(); !C.done; C = x.next()) {
          var D = C.value,
            L = R.length > 0 ? R.pop() : null == S ? void 0 : S.pop();
          if (null == L) break;
          M.set(D.resId, L);
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          C && !C.done && (a = x.return) && a.call(x);
        } finally {
          if (i) throw i.error;
        }
      }
      if (0 === M.size) {
        this.updateHistory(String(d), _);
        e();
        return;
      }
      this.applyReplacementOnTileMapObject(g, M);
      var G = this.collectCountsAndUsedResIds(g).counts;
      this.updateHistory(String(d), G);
      e();
    } catch (t) {
      console.error("[" + ChangeBaseCardTrait.traitKey + "] 开局替换基础牌异常: " + (null !== (p = null == t ? void 0 : t.message) && void 0 !== p ? p : t));
      e();
    }
  }
  isBaseResId(t) {
    return "number" == typeof t && t >= 0 && t <= 26;
  }
  pickTargetsByFamiliarity(t, e, r, i) {
    for (var a = [], o = 0; o <= 26; o++) {
      var n = String(o);
      if (t[n]) {
        var l = this.calcFamiliarity(n, e, r, i);
        l >= i.threshold && a.push({
          resId: o,
          familiarity: l
        });
      }
    }
    a.sort(function (t, e) {
      return e.familiarity - t.familiarity || t.resId - e.resId;
    });
    return a;
  }
  buildBaseReplacePool(t, e, r, i) {
    for (var a = [], o = 0; o <= 26; o++) {
      var n = String(o);
      t[n] || this.calcFamiliarity(n, e, r, i) >= i.threshold || a.push(o);
    }
    return a;
  }
  calcFamiliarity(t, e, r, i) {
    var a,
      o,
      n = Number(null !== (a = e[t]) && void 0 !== a ? a : 0),
      l = Number(null !== (o = r[t]) && void 0 !== o ? o : 0);
    return n * i.wLast1 + l * i.wLast2;
  }
  buildSpecialReplacePool(t) {
    for (var e = [], r = 27; r <= 33; r++) t.has(r) || e.push(r);
    return e;
  }
  shuffleArray(t) {
    for (var e = t.length - 1; e > 0; e--) {
      var r = Math.floor(Math.random() * (e + 1)),
        i = t[e];
      t[e] = t[r];
      t[r] = i;
    }
  }
  debugLog(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  }
  updateHistory(t, e) {
    var i,
      a = this.getHistory(t),
      n = this.getHistoryMap();
    var _r = {};
    _r[t] = {
      last1: null != e ? e : {},
      last2: null !== (i = a.last1) && void 0 !== i ? i : {}
    };
    this.localData.histByGameType = Object.assign(Object.assign({}, n), _r);
  }
  getHistory(t) {
    this.ensureLocalData();
    var r = this.getHistoryMap(),
      i = r[t];
    if (i && "object" == typeof i && i.last1 && "object" == typeof i.last1 && i.last2 && "object" == typeof i.last2) return i;
    var a = {
      last1: {},
      last2: {}
    };
    var _e = {};
    _e[t] = a;
    this.localData.histByGameType = Object.assign(Object.assign({}, r), _e);
    return a;
  }
  ensureLocalData() {
    var t,
      e = null === (t = this.localData) || void 0 === t ? void 0 : t.histByGameType;
    e && "object" == typeof e || (this.localData.histByGameType = {});
  }
  getHistoryMap() {
    var t,
      e = null === (t = this.localData) || void 0 === t ? void 0 : t.histByGameType;
    return e && "object" == typeof e ? e : {};
  }
  collectCountsAndUsedResIds(t) {
    var e,
      r,
      i,
      a = new Set(),
      o = {},
      n = t.tileObjectMap();
    try {
      for (var l = __values(n.values()), u = l.next(); !u.done; u = l.next()) {
        var c = u.value;
        if (c && c.isValid) {
          var p = c.resId;
          a.add(p);
          var f = String(p);
          o[f] = (null !== (i = o[f]) && void 0 !== i ? i : 0) + 1;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        u && !u.done && (r = l.return) && r.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    return {
      counts: o,
      usedResIdSet: a
    };
  }
  applyReplacementOnTileMapObject(t, e) {
    var r,
      i,
      a = 0;
    try {
      for (var o = __values(t.tileObjectMap().entries()), n = o.next(); !n.done; n = o.next()) {
        var u = __read(n.value, 2),
          c = u[0],
          p = u[1];
        if (p && p.isValid) {
          var f = p.resId;
          if (this.isBaseResId(f)) {
            var y = e.get(f);
            if (void 0 !== y) {
              t.changeTileResId(c, y);
              a++;
            }
          }
        }
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (i = o.return) && i.call(o);
      } finally {
        if (r) throw r.error;
      }
    }
    return a;
  }
}