import { BaseCoreObject } from '../../BaseCoreObject';
import { ECollectFrom } from '../../constant/CollectInterfact';
export class Tile2SlotBarModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  getSameCardIdIndex(e) {
    for (var t = this._context.getTileMapObject(), o = t.getTileObject(e).cardId, n = this._context.getGameData().slotBarIds, i = 0; i < n.length; i++) {
      var r = n[i],
        a = t.getTileObjectByPosId(r);
      if (a && a.cardId === o) return i + 1;
    }
    return n.length;
  }
  getSlotBarSnapshot() {
    for (var e = this._context.getGameData().slotBarIds, t = [], o = 0; o < e.length; o++) {
      var n = e[o];
      t.push(n);
    }
    return t;
  }
  addTile(e) {
    var t = this._context.getTileMapObject().getTileObject(e);
    if (t) {
      var o = this._context.getGameData(),
        n = o.slotBarIds;
      if (!t.getIsInSlotBar() && !n.includes(t.saveKey())) {
        var i = t.saveKey(),
          r = this.getSameCardIdIndex(e);
        o.addSlotBarId(i, r);
        t.addToSlotBar(r);
        return {
          index: r,
          tileId: e
        };
      }
    }
  }
  getClearSlotBarList(e = []) {
    var t, o, n, i, r, s, c, u, p;
    var f = this._context.getGameData(),
      d = this._context.getTileMapObject(),
      h = f.slotBarIds,
      y = new Map(),
      m = new Set();
    try {
      for (var v = __values(e), g = v.next(); !g.done; g = v.next()) {
        var _ = g.value;
        try {
          for (var T = (n = void 0, __values(_)), C = T.next(); !C.done; C = T.next()) {
            var b = C.value;
            m.add(b);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            C && !C.done && (i = T.return) && i.call(T);
          } finally {
            if (n) throw n.error;
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (o = v.return) && o.call(v);
      } finally {
        if (t) throw t.error;
      }
    }
    try {
      for (var E = __values(h), S = E.next(); !S.done; S = E.next()) {
        var I = S.value,
          w = d.getTileObjectByPosId(I);
        if (w && !m.has(I)) {
          var B = w.cardId;
          if (y.has(B)) {
            null === (p = y.get(B)) || void 0 === p || p.push(I);
          } else {
            y.set(B, [I]);
          }
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        S && !S.done && (s = E.return) && s.call(E);
      } finally {
        if (r) throw r.error;
      }
    }
    var x = [];
    try {
      for (var M = __values(y.entries()), O = M.next(); !O.done; O = M.next()) for (var D = __read(O.value, 2), P = (B = D[0], D[1]), A = 0; A + 1 < P.length; A += 2) x.push([P[A], P[A + 1]]);
    } catch (e) {
      c = {
        error: e
      };
    } finally {
      try {
        O && !O.done && (u = M.return) && u.call(M);
      } finally {
        if (c) throw c.error;
      }
    }
    return x;
  }
  getClearTileList(e) {
    var t,
      o,
      n = this._context.getTileMapObject(),
      i = [];
    try {
      for (var r = __values(e), l = r.next(); !l.done; l = r.next()) {
        var s = l.value,
          c = n.getTileObjectByPosId(s[0]),
          u = n.getTileObjectByPosId(s[1]);
        c && u && i.push([c.id, u.id]);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return i;
  }
  updateInSlotBarIndex() {
    var e,
      t,
      o = this._context.getGameData().slotBarIds;
    try {
      for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
        var r = i.value,
          l = this._context.getTileMapObject().getTileObjectByPosId(r);
        l && l.changeSlotBarIndex(o.indexOf(r));
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
  @mj.traitEvent("T2SlotBarMod_clearSlotBar")
  clearSlotBar(e) {
    var t,
      o,
      n,
      i,
      r,
      l = this._context.getGameData(),
      s = this._context.getTileMapObject();
    try {
      for (var c = __values(e), p = c.next(); !p.done; p = c.next()) {
        var f = p.value,
          d = [],
          h = s.getTileObjectByPosId(f[0]),
          y = s.getTileObjectByPosId(f[1]);
        if (h && y) {
          d.push(h.id);
          d.push(y.id);
          if (s.clearSlotTile2Tiles(d, ECollectFrom.FromClear)) try {
            for (var m = (n = void 0, __values(f)), v = m.next(); !v.done; v = m.next()) {
              var g = v.value;
              l.removeSlotBarId(g);
              null === (r = s.getTileObjectByPosId(g)) || void 0 === r || r.removeFromSlotBar();
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              v && !v.done && (i = m.return) && i.call(m);
            } finally {
              if (n) throw n.error;
            }
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    this.updateInSlotBarIndex();
    this.context.saveModifier.saveLevelDataToLocalStorage();
  }
  clear(e = [], t?) {
    var o, n;
    var i = this._context.getGameData(),
      r = this._context.getTileMapObject(),
      l = i.slotBarIds;
    try {
      for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          p = r.getTileObject(u[0]),
          f = r.getTileObject(u[1]),
          d = p.saveKey(),
          h = f.saveKey();
        if (p && f && p.isValid && f.isValid && p.cardId === f.cardId && p.id !== f.id && r.clearSlotTile2Tiles(u, t)) {
          if (l.includes(d)) {
            i.removeSlotBarId(d);
            p.removeFromSlotBar();
          }
          if (l.includes(h)) {
            i.removeSlotBarId(h);
            f.removeFromSlotBar();
          }
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (n = s.return) && n.call(s);
      } finally {
        if (o) throw o.error;
      }
    }
    this.updateInSlotBarIndex();
    this.context.saveModifier.saveLevelDataToLocalStorage();
  }
  returnSlotBarToBoard() {
    var e,
      t,
      o = this._context.getGameData(),
      n = this._context.getTileMapObject(),
      i = [...(o.slotBarIds || [])],
      r = [];
    try {
      for (var l = __values(i), c = l.next(); !c.done; c = l.next()) {
        var u = c.value,
          p = n.getTileObjectByPosId(u);
        if (p) {
          p.removeFromSlotBar();
          r.push(p.id);
        }
        o.removeSlotBarId(u);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (t = l.return) && t.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    this.updateInSlotBarIndex();
    return r;
  }
  revertLastTile() {
    var e = this._context.getGameData(),
      t = e.slotBarIds;
    if (0 === t.length) return null;
    var o = t[t.length - 1],
      n = this._context.getTileMapObject().getTileObjectByPosId(o);
    if (!n) return null;
    var i = n.id;
    e.removeSlotBarId(o);
    n.removeFromSlotBar();
    this.updateInSlotBarIndex();
    return i;
  }
  initSlotBar(e) {
    for (var t = this._context.getGameData(), o = t.slotBarIds || [], n = (t.slotBarCount, this._context.getTileMapObject()), i = [], r = 0; r < e; r++) o[r] && i.push(o[r]);
    var a = [];
    for (r = 0; r < i.length; r++) {
      var l = n.getTileObjectByPosId(i[r]);
      if (l) {
        l.addToSlotBar(r);
        this._context.tile2RollCardModifier.tryBack2Front(l.id);
        a.push(i[r]);
      }
    }
    t.resetSlotBarIds(a);
    t.resetSlotBarCount(e);
  }
  updateSlotBarStepCount() {
    var e,
      t,
      o = this._context.getGameData().slotBarIds,
      n = this._context.tile2SlotBarData;
    try {
      for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        n.addTileStep(l);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  clearSlotBarStepCount() {
    var e = this._context.getGameData().slotBarIds;
    this._context.tile2SlotBarData.clearTileStep(e);
  }
  updateSlotBarClearStepCount() {
    var e,
      t,
      o = this._context.getGameData().slotBarIds,
      n = this._context.tile2SlotBarData;
    try {
      for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        n.addTileClearStep(l);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  clearSlotBarClearStepCount() {
    var e = this._context.getGameData().slotBarIds;
    this._context.tile2SlotBarData.clearTileClearSteps(e);
  }
}