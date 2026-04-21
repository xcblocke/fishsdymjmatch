import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TileMapObject } from '../../../Scripts/objects/TileMapObject';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
enum c {
  FullyVisible = 1,
  PartiallyVisible = 2,
  Selectable = 3,
  NotVisible = 4,
}
class v {
  dict = new Map();
  _cardIdSet = new Set();
  constructor(t) {
    var e = this;
    t.forEach(function (t) {
      e._cardIdSet.add(t.CardId1);
      var r = Math.min(t.CardId1, t.CardId2) + "_" + Math.max(t.CardId1, t.CardId2);
      e.dict.set(r, t.Difference);
    });
  }
  hasCard(t) {
    return this._cardIdSet.has(t);
  }
  get(t, e) {
    if (t === e) return 0;
    var r = Math.min(t, e) + "_" + Math.max(t, e),
      i = this.dict.get(r);
    return void 0 !== i ? i : 50;
  }
}
@mj.trait
@mj.class("CardDifferenceTrait")
export default class CardDifferenceTrait extends ExtractTrait {
  _differenceLookup = null;
  _history = [];
  static traitKey = "CardDifference";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this.localData.history || (this.localData.history = []);
    var i = this._traitData.config || {};
    this._config = {
      C: i.C || 20,
      allowSimilar: i.allowSimilar || false,
      isRandom: i.isRandom || false,
      restartChange: null !== (e = i.restartChange) && void 0 !== e && e,
      isSimilarLow: null === (r = i.isSimilarLow) || void 0 === r || r
    };
    this.loadDifferenceConfig();
  }
  loadDifferenceConfig() {
    var t = DataReader.getList(ConfigType.card_difference2);
    t && t.length > 0 && (this._differenceLookup = new v(t));
  }
  onIptSetLv_reGenFaces(t, e) {
    if (this.checkGameMode()) {
      if (this._differenceLookup) {
        var r = t.ins,
          i = t.args[0].levelData;
        if (i.isNewGame) {
          if (!i.isRestart || this._config.restartChange) {
            var a = i.levelId;
            if (ExtractTool.getInstance().isHardLevel(a)) e();else if (ExtractTool.getInstance().isFixedLevel(a)) e();else {
              this.changeBoard(r.tileMapObject, r.gameContext, a);
              e();
            }
          } else e();
        } else e();
      } else e();
    } else e();
  }
  changeBoard(t, e, r) {
    var i = t.mapLayers();
    if (i && 0 !== i.length) {
      var a = this.collectOriginalCardIds(i),
        n = a.size;
      if (!(n <= 0)) {
        var o = this.buildCandidateCardIdSet(e, r);
        o.size < n && a.forEach(function (t) {
          return o.add(t);
        });
        var l,
          s = this.computeFamiliarity(o),
          c = this.classifyFacesByCardId(i),
          f = this.countLayerCardsByCardId(c);
        l = this._config.isRandom ? this.pickRandomFaces(o, n) : this.pickFacesByStrategy(o, n, this._config.C, this._config.allowSimilar, s);
        this.applyLayeredFaceDistributionByCardId(t, e, i, l, c, f);
        this.printLevelDiffLog(l);
        this.updateRecentHistory(l);
      }
    }
  }
  collectOriginalCardIds(t) {
    var e = new Set();
    t.forEach(function (t) {
      t.allCards.forEach(function (t) {
        t.type === ETileType.Normal && e.add(t.cardId);
      });
    });
    return e;
  }
  buildCandidateCardIdSet(t, e) {
    var r = this,
      i = t.getCardConfigMap(),
      a = new Set();
    i.forEach(function (t) {
      var i = t.cardId;
      TileMapObject.isSpecialCardId(i) || 35 === i && e < 4 || 36 === i && e < 6 || r._differenceLookup.hasCard(i) && a.add(i);
    });
    return a;
  }
  computeFamiliarity(t) {
    this._history = this.loadRecentHistory();
    var e = new Map();
    t.forEach(function (t) {
      return e.set(t, 0);
    });
    for (var r = function r(t) {
        var r = Math.pow(0.8, t);
        i._history[t].forEach(function (t) {
          e.has(t) && e.set(t, e.get(t) + r);
        });
      }, i = this, a = 0; a < this._history.length; a++) r(a);
    return e;
  }
  loadRecentHistory() {
    var t = this.localData.history;
    return t && Array.isArray(t) ? t : [];
  }
  updateRecentHistory(t) {
    var e = this._history;
    e.unshift(t);
    for (; e.length > 5;) e.pop();
    this.localData.history = e;
  }
  classifyFacesByCardId(t) {
    var e = this,
      r = [];
    t.forEach(function (t) {
      t.allCards.forEach(function (t) {
        if (t.type === ETileType.Normal) {
          var i = e.getVisibilityType(t);
          r.push({
            cardId: t.cardId,
            visibilityType: i,
            tileObject: t
          });
        }
      });
    });
    return r;
  }
  getVisibilityType(t) {
    var e = t.tileMapObject,
      r = 0 !== e.isCardLock(t),
      i = e.isHasCover(t);
    return i || r ? !i && r ? c.FullyVisible : i && this.isPartiallyVisible(t) ? c.PartiallyVisible : c.NotVisible : c.Selectable;
  }
  isPartiallyVisible(t) {
    var e,
      r,
      i = t.tileMapObject,
      a = t.layer + 1;
    if (a >= i.mapLayers().length) return true;
    var n = 0;
    try {
      for (var l = __values(t.ownerGridIds), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        i.isHasCard(a, c) && n++;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (r = l.return) && r.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    return n < 4;
  }
  countLayerCardsByCardId(t) {
    var e = new Map();
    t.forEach(function (t) {
      var r = t.cardId;
      e.has(r) || e.set(r, []);
      e.get(r).push(t.visibilityType);
    });
    var r = 0,
      i = 0,
      a = 0;
    e.forEach(function (t) {
      var e = t.includes(c.FullyVisible),
        n = t.includes(c.Selectable),
        o = t.includes(c.PartiallyVisible);
      if (e || n) {
        r++;
      } else {
        if (o) {
          i++;
        } else {
          a++;
        }
      }
    });
    return {
      N1: r,
      N2: i,
      N3: a
    };
  }
  pickRandomFaces(t, e) {
    var r = Array.from(t);
    this.shuffle(r);
    return r.slice(0, e);
  }
  pickFacesByStrategy(t, e, r, i, a) {
    var n = this,
      l = this.selectFirstCardByFamiliarity(a, t),
      s = [l],
      c = new Set(t);
    c.delete(l);
    for (var f = [], u = false, d = function d() {
        var t,
          a,
          l,
          d,
          p,
          y,
          v,
          g,
          b = -1,
          _ = -Infinity;
        try {
          for (var m = (t = void 0, __values(c)), C = m.next(); !C.done; C = m.next()) {
            var I = C.value,
              M = 0;
            try {
              for (var w = (l = void 0, __values(s)), T = w.next(); !T.done; T = w.next()) {
                var x = T.value;
                M += h._differenceLookup.get(x, I);
              }
            } catch (t) {
              l = {
                error: t
              };
            } finally {
              try {
                T && !T.done && (d = w.return) && d.call(w);
              } finally {
                if (l) throw l.error;
              }
            }
            if (M > _) {
              _ = M;
              b = I;
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            C && !C.done && (a = m.return) && a.call(m);
          } finally {
            if (t) throw t.error;
          }
        }
        if (!i && s.length < e && s.some(function (t) {
          return n._differenceLookup.get(t, b) <= r;
        })) {
          c.delete(b);
          f.push(b);
          return "continue";
        }
        if (i && s.length === e - 1) {
          for (var S = false, N = 0; N < s.length && !S; N++) for (var E = N + 1; E < s.length && !S; E++) S = h._differenceLookup.get(s[N], s[E]) <= r;
          if (!S) {
            var L = -1,
              F = Infinity;
            try {
              for (var D = (p = void 0, __values(c)), O = D.next(); !O.done; O = D.next()) {
                I = O.value;
                var R = Infinity;
                try {
                  for (var V = (v = void 0, __values(s)), j = V.next(); !j.done; j = V.next()) {
                    x = j.value;
                    R = Math.min(R, h._differenceLookup.get(x, I));
                  }
                } catch (t) {
                  v = {
                    error: t
                  };
                } finally {
                  try {
                    j && !j.done && (g = V.return) && g.call(V);
                  } finally {
                    if (v) throw v.error;
                  }
                }
                if (R < F) {
                  F = R;
                  L = I;
                }
              }
            } catch (t) {
              p = {
                error: t
              };
            } finally {
              try {
                O && !O.done && (y = D.return) && y.call(D);
              } finally {
                if (p) throw p.error;
              }
            }
            b = L;
            u = true;
          }
        }
        if (-1 === b) {
          var P = Array.from(c);
          b = P[Math.floor(Math.random() * P.length)];
        }
        s.push(b);
        c.delete(b);
      }, h = this; s.length < e && c.size > 0;) d();
    if (s.length < e && f.length > 0) for (var p = e - s.length, y = 0; y < p; y++) {
      var v = Math.floor(Math.random() * f.length),
        g = f[v];
      s.push(g);
      f.splice(v, 1);
    }
    if (u && s.length > 1) {
      var b = s[s.length - 1];
      s.pop();
      var _ = Math.floor(Math.random() * (s.length + 1));
      s.splice(_, 0, b);
    }
    return s.length > e ? s.slice(0, e) : s;
  }
  selectFirstCardByFamiliarity(t, e) {
    var r,
      i,
      a = this._config.isSimilarLow,
      n = a ? Infinity : -Infinity,
      l = [];
    try {
      for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
        var f = c.value,
          u = t.get(f) || 0;
        if (a) {
          if (u < n) {
            n = u;
            l.length = 0;
            l.push(f);
          } else Math.abs(u - n) < 0.0001 && l.push(f);
        } else if (u > n) {
          n = u;
          l.length = 0;
          l.push(f);
        } else Math.abs(u - n) < 0.0001 && l.push(f);
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (i = s.return) && i.call(s);
      } finally {
        if (r) throw r.error;
      }
    }
    return 0 === l.length ? Array.from(e)[0] : l[Math.floor(Math.random() * l.length)];
  }
  applyLayeredFaceDistributionByCardId(t, e, r, i, a, n) {
    var o = this.collectPrioritizedCardIds(a, n),
      l = this.buildOldToNewMapping(o, i, n);
    this.applyCardIdMappingToResId(t, e, r, l);
  }
  collectPrioritizedCardIds(t) {
    var e = new Map();
    t.forEach(function (t) {
      var r = t.cardId;
      e.has(r) || e.set(r, []);
      e.get(r).push(t.visibilityType);
    });
    var r = [],
      i = [];
    e.forEach(function (t, e) {
      (t.includes(c.FullyVisible) || t.includes(c.Selectable)) && i.push(e);
    });
    r.push.apply(r, [...i]);
    var a = [];
    e.forEach(function (t, e) {
      !t.includes(c.PartiallyVisible) || t.includes(c.Selectable) || t.includes(c.FullyVisible) || a.push(e);
    });
    r.push.apply(r, [...a]);
    var n = [];
    e.forEach(function (t, e) {
      t.includes(c.FullyVisible) || t.includes(c.PartiallyVisible) || t.includes(c.Selectable) || n.push(e);
    });
    r.push.apply(r, [...n]);
    return r;
  }
  applyCardIdMappingToResId(t, e, r, i) {
    var a = e.getCardConfigMap(),
      n = new Map();
    a.forEach(function (t) {
      var e = t.cardId,
        r = t.id;
      n.has(e) || n.set(e, []);
      n.get(e).push(r);
    });
    r.forEach(function (e) {
      e.allCards.forEach(function (e) {
        var r = e.cardId,
          a = i.get(r);
        if (void 0 !== a && a !== r) {
          var o = n.get(a);
          if (o && o.length > 0) {
            var l = o[Math.floor(Math.random() * o.length)];
            t.changeTileResId(e.id, l);
          }
        }
      });
    });
  }
  buildOldToNewMapping(t, e, r) {
    var i = new Map(),
      a = 0;
    if (r.N1 > 0 && a + r.N1 <= t.length) {
      var n = t.slice(a, a + r.N1),
        o = e.slice(a, a + r.N1);
      this.shuffle(n);
      this.shuffle(o);
      for (var l = 0; l < r.N1; l++) i.set(n[l], o[l]);
      a += r.N1;
    }
    if (r.N2 > 0 && a + r.N2 <= t.length) {
      var s = t.slice(a, a + r.N2),
        c = e.slice(a, a + r.N2);
      this.shuffle(s);
      this.shuffle(c);
      for (l = 0; l < r.N2; l++) i.set(s[l], c[l]);
      a += r.N2;
    }
    if (r.N3 > 0 && a + r.N3 <= t.length) {
      var f = t.slice(a, a + r.N3),
        u = e.slice(a, a + r.N3);
      this.shuffle(f);
      this.shuffle(u);
      for (l = 0; l < r.N3; l++) i.set(f[l], u[l]);
    }
    return i;
  }
  printLevelDiffLog(t) {
    for (var e = Infinity, r = 0; r < t.length; r++) for (var i = r + 1; i < t.length; i++) {
      var a = this._differenceLookup.get(t[r], t[i]);
      e = Math.min(e, a);
    }
    Infinity === e && (e = 0);
  }
  shuffle(t) {
    for (var e, r = t.length - 1; r > 0; r--) {
      var i = Math.floor(Math.random() * (r + 1));
      e = __read([t[i], t[r]], 2), t[r] = e[0], t[i] = e[1];
    }
  }
}