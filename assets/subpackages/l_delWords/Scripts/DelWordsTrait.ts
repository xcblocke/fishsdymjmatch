import ExtractTrait from '../../../Scripts/ExtractTrait';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
enum c {
  Selectable = 1,
  FullyVisible = 2,
  PartiallyVisible = 3,
  NotVisible = 4,
}
@mj.trait
@mj.class("DelWordsTrait")
export default class DelWordsTrait extends ExtractTrait {
  EXCLUDED_TILE_TYPES = new Set([ETileType.RankCard, ETileType.ColorCard, ETileType.Yoga, ETileType.Bomb]);
  _currentExcludedCardIds = [];
  static traitKey = "DelWords";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData.config || this._traitData,
      t = e.exptId || "";
    this._config = {
      exptId: t,
      materialGroups: [],
      cycleConfig: e.cycleConfig || "{1;2;3;4,5,6}",
      levelNumLimit: e.levelNumLimit || 999999
    };
    t && (this._config.materialGroups = this.loadMaterialGroupsFromConfig(t));
    this._config.materialGroups.length;
  }
  loadMaterialGroupsFromConfig(r) {
    var e,
      t,
      a = [],
      i = DataReader.getTypeList(ConfigType.SelectCardGroupConfig, "ExptId", r);
    if (!i || 0 === i.length) return a;
    try {
      for (var o = __values(i), l = o.next(); !l.done; l = o.next()) {
        var s = l.value;
        a.push({
          groupId: s.SelectCardGroupId,
          cardIds: s.CardIdList || [],
          selectLimit: s.SelectCount,
          remark: s["##Note"] || "组" + s.SelectCardGroupId
        });
      }
    } catch (r) {
      e = {
        error: r
      };
    } finally {
      try {
        l && !l.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    a.sort(function (r, e) {
      return r.groupId - e.groupId;
    });
    return a;
  }
  onChgResId_getExcluded(r, e) {
    if (this.checkGameMode()) {
      e({
        returnType: TraitCallbackReturnType.jump,
        isBreak: true,
        returnVal: this._currentExcludedCardIds
      });
    } else {
      e();
    }
  }
  onIptSetLv_reGenFaces(r, e) {
    if (this.checkGameMode()) {
      var t = r.ins,
        a = r.args[0].levelData;
      if (this.shouldProcess(a)) {
        this._currentExcludedCardIds = this.calculateExcludedCardIds();
        this.remapMaterials(t.tileMapObject, t.gameContext, a.levelId);
        e();
      } else {
        this._currentExcludedCardIds = [];
        e();
      }
    } else e();
  }
  calculateExcludedCardIds() {
    var r,
      e,
      t = [];
    try {
      for (var a = __values(this._config.materialGroups), i = a.next(); !i.done; i = a.next()) {
        var o = i.value;
        0 === o.selectLimit && t.push.apply(t, [...o.cardIds]);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (e = a.return) && e.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
    return t;
  }
  shouldProcess(r) {
    if (0 === this._config.materialGroups.length) return false;
    if (!r.isNewGame) return false;
    if (!r.isExtractLevel) return false;
    var e = r.levelId;
    return !(e > this._config.levelNumLimit || ExtractTool.getInstance().isFixedLevel(e));
  }
  remapMaterials(r, e) {
    var t = r.tileObjectMap();
    if (t && 0 !== t.size) {
      var a = this.collectOriginalCardIds(t).size;
      if (!(a <= 0)) {
        var i = this.selectMaterialsByGroups(a, e),
          o = this.classifyAndPrioritize(t),
          n = o.prioritizedCardIds,
          l = o.cardCount;
        this.applyLayeredMapping(r, e, t, i.selectedMaterials, n, l);
      }
    }
  }
  collectOriginalCardIds(r) {
    var e = this,
      t = new Set();
    r.forEach(function (r) {
      e.EXCLUDED_TILE_TYPES.has(r.type) || t.add(r.cardId);
    });
    return t;
  }
  selectMaterialsByGroups(r) {
    var e,
      t,
      a,
      i,
      o,
      l,
      c,
      u,
      f,
      d,
      p,
      h,
      y = [],
      v = this.parseCycleConfig(this._config.cycleConfig);
    if (0 === v.length) try {
      for (var g = __values(this._config.materialGroups), m = g.next(); !m.done; m = g.next()) {
        var _ = m.value;
        v.push([_.groupId]);
      }
    } catch (r) {
      e = {
        error: r
      };
    } finally {
      try {
        m && !m.done && (t = g.return) && t.call(g);
      } finally {
        if (e) throw e.error;
      }
    }
    var x = new Map(),
      b = new Map(),
      I = new Map(),
      C = new Map();
    try {
      for (var E = __values(this._config.materialGroups), M = E.next(); !M.done; M = E.next()) {
        _ = M.value;
        x.set(_.groupId, _);
        I.set(_.groupId, 0);
        C.set(_.groupId, [..._.cardIds]);
        try {
          for (var T = (o = void 0, __values(_.cardIds)), w = T.next(); !w.done; w = T.next()) {
            var L = w.value;
            b.set(L, _.groupId);
          }
        } catch (r) {
          o = {
            error: r
          };
        } finally {
          try {
            w && !w.done && (l = T.return) && l.call(T);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (r) {
      a = {
        error: r
      };
    } finally {
      try {
        M && !M.done && (i = E.return) && i.call(E);
      } finally {
        if (a) throw a.error;
      }
    }
    var G = [],
      P = new Set();
    try {
      for (var S = __values(this._config.materialGroups), D = S.next(); !D.done; D = S.next()) if (0 === (_ = D.value).selectLimit) {
        try {
          for (var N = (f = void 0, __values(_.cardIds)), O = N.next(); !O.done; O = N.next()) {
            L = O.value;
            G.push(L);
            P.add(L);
          }
        } catch (r) {
          f = {
            error: r
          };
        } finally {
          try {
            O && !O.done && (d = N.return) && d.call(N);
          } finally {
            if (f) throw f.error;
          }
        }
        C.set(_.groupId, []);
      }
    } catch (r) {
      c = {
        error: r
      };
    } finally {
      try {
        D && !D.done && (u = S.return) && u.call(S);
      } finally {
        if (c) throw c.error;
      }
    }
    for (var V = 0, j = 0; y.length < r;) {
      var F = v[V],
        R = this.getAvailableFromGroups(F, C);
      if (0 !== R.length) {
        j = 0;
        var k = R[Math.floor(Math.random() * R.length)],
          z = b.get(k),
          q = C.get(z),
          A = q.indexOf(k);
        -1 !== A && q.splice(A, 1);
        var W = I.get(z) || 0;
        I.set(z, W + 1);
        var X = x.get(z);
        if (-1 !== X.selectLimit && W + 1 >= X.selectLimit) {
          var Y = C.get(z);
          try {
            for (var B = (p = void 0, __values(Y)), Q = B.next(); !Q.done; Q = B.next()) {
              L = Q.value;
              if (!P.has(L)) {
                G.push(L);
                P.add(L);
              }
            }
          } catch (r) {
            p = {
              error: r
            };
          } finally {
            try {
              Q && !Q.done && (h = B.return) && h.call(B);
            } finally {
              if (p) throw p.error;
            }
          }
          C.set(z, []);
        }
        y.push(k);
        V = (V + 1) % v.length;
      } else {
        if (++j >= v.length) {
          if (!(G.length > 0)) break;
          var U = Math.floor(Math.random() * G.length),
            H = G[U];
          y.push(H);
          G.splice(U, 1);
          P.delete(H);
          j = 0;
        }
        V = (V + 1) % v.length;
      }
    }
    return {
      selectedMaterials: y,
      alterMaterials: G
    };
  }
  getAvailableFromGroups(r, e) {
    var t,
      a,
      i = [];
    try {
      for (var o = __values(r), l = o.next(); !l.done; l = o.next()) {
        var c = l.value,
          u = e.get(c);
        u && u.length > 0 && i.push.apply(i, [...u]);
      }
    } catch (r) {
      t = {
        error: r
      };
    } finally {
      try {
        l && !l.done && (a = o.return) && a.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
    return i;
  }
  parseCycleConfig(r) {
    var e,
      t,
      a,
      i,
      o = [],
      l = r.replace(/^\{|\}$/g, "").trim();
    if (!l) return o;
    var s = l.split(";");
    try {
      for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
        var f = u.value,
          d = [],
          p = f.split(",");
        try {
          for (var h = (a = void 0, __values(p)), y = h.next(); !y.done; y = h.next()) {
            var v = y.value,
              g = parseInt(v.trim(), 10);
            isNaN(g) || d.push(g);
          }
        } catch (r) {
          a = {
            error: r
          };
        } finally {
          try {
            y && !y.done && (i = h.return) && i.call(h);
          } finally {
            if (a) throw a.error;
          }
        }
        d.length > 0 && o.push(d);
      }
    } catch (r) {
      e = {
        error: r
      };
    } finally {
      try {
        u && !u.done && (t = c.return) && t.call(c);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  classifyAndPrioritize(r) {
    var e = this,
      t = new Map();
    r.forEach(function (r) {
      if (!e.EXCLUDED_TILE_TYPES.has(r.type)) {
        var a = e.getVisibilityType(r);
        t.has(r.cardId) || t.set(r.cardId, []);
        t.get(r.cardId).push(a);
      }
    });
    var a = [],
      i = [],
      o = [];
    t.forEach(function (r, e) {
      var t = r.includes(c.Selectable),
        n = r.includes(c.FullyVisible),
        l = r.includes(c.PartiallyVisible);
      if (t || n) {
        a.push(e);
      } else {
        if (l) {
          i.push(e);
        } else {
          o.push(e);
        }
      }
    });
    return {
      prioritizedCardIds: [...a, ...i],
      cardCount: {
        N1: a.length,
        N2: i.length,
        N3: o.length
      }
    };
  }
  getVisibilityType(r) {
    var e = r.tileMapObject,
      t = 0 !== e.isCardLock(r),
      a = e.isHasCover(r);
    return a || t ? !a && t ? c.FullyVisible : a && this.isPartiallyVisible(r) ? c.PartiallyVisible : c.NotVisible : c.Selectable;
  }
  isPartiallyVisible(r) {
    var e,
      t,
      a = r.tileMapObject,
      i = r.layer + 1;
    if (i >= a.mapLayers().length) return true;
    var o = 0;
    try {
      for (var l = __values(r.ownerGridIds), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        a.isHasCard(i, c) && o++;
      }
    } catch (r) {
      e = {
        error: r
      };
    } finally {
      try {
        s && !s.done && (t = l.return) && t.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    return o < 4;
  }
  applyLayeredMapping(r, e, t, a, i, o) {
    var n = this.buildOldToNewMapping(i, a, o);
    this.applyCardIdMapping(r, e, t, n);
  }
  buildOldToNewMapping(r, e, t) {
    var a,
      i,
      o = new Map(),
      l = [t.N1, t.N2, t.N3],
      s = 0;
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var f = u.value;
        if (f > 0 && s + f <= r.length) {
          for (var d = this.shuffle(r.slice(s, s + f)), p = this.shuffle(e.slice(s, Math.min(s + f, e.length))), h = Math.min(d.length, p.length), y = 0; y < h; y++) o.set(d[y], p[y]);
          s += f;
        }
      }
    } catch (r) {
      a = {
        error: r
      };
    } finally {
      try {
        u && !u.done && (i = c.return) && i.call(c);
      } finally {
        if (a) throw a.error;
      }
    }
    return o;
  }
  applyCardIdMapping(r, e, t, a) {
    var i = this,
      o = e.getCardConfigMap(),
      n = new Map();
    o.forEach(function (r) {
      var e = r.cardId,
        t = r.id;
      n.has(e) || n.set(e, []);
      n.get(e).push(t);
    });
    t.forEach(function (e) {
      if (!i.EXCLUDED_TILE_TYPES.has(e.type)) {
        var t = e.cardId,
          o = a.get(t);
        if (void 0 !== o && o !== t) {
          var l = n.get(o);
          if (l && l.length > 0) {
            var s = l[Math.floor(Math.random() * l.length)];
            r.changeTileResId(e.id, s);
          }
        }
      }
    });
  }
  shuffle(r) {
    for (var e, t = [...r], a = t.length - 1; a > 0; a--) {
      var i = Math.floor(Math.random() * (a + 1));
      e = __read([t[i], t[a]], 2), t[a] = e[0], t[i] = e[1];
    }
    return t;
  }
}