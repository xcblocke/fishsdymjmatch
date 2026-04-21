import { BaseCoreObject } from '../../BaseCoreObject';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
export class Tile2MagnetChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("T2MagnetChk_canMagnet")
  isCanMagnet() {
    return false;
  }
  @mj.traitEvent("T2MagnetChk_magnetCnt")
  getMagnetCount() {
    return 1;
  }
  @mj.traitEvent("T2MagnetChk_checkMagnet")
  checkMagnet() {
    var e = this.checkMagnetCondition(),
      t = e ? this.getMagnetCount() : 0;
    e && 0 == this.findMagnetTiles(1).length && (e = false);
    return {
      triggerMagnet: e,
      isShowIconItem: e,
      magnetCount: t
    };
  }
  @mj.traitEvent("T2MagnetChk_chkCon")
  checkMagnetCondition() {
    var e = this.context.getTileMapObject();
    e.updateCanMatchTiles();
    return 0 === e.getCanMatchTilesHint().length;
  }
  findMagnetTiles(e) {
    var t,
      o,
      n,
      i,
      r,
      l = this.context.getTileMapObject();
    l.updateCanMatchTiles();
    var s = [],
      c = [],
      u = null !== (r = this.context.getGameData().slotBarIds) && void 0 !== r ? r : [],
      p = l.getCanMatchTiles(),
      f = 0;
    if (u.length > 0) try {
      for (var d = __values(u), h = d.next(); !h.done; h = d.next()) {
        var y = h.value,
          m = l.getTileObjectByPosId(y);
        if ((null == m ? void 0 : m.isValid) && !this.isIgnoreTile(m)) {
          var v = p.get(m.cardId);
          if (v && v.length >= 2) {
            for (var g = 0; g < v.length; g++) if ((b = v[g]).id !== m.id && !this.isIgnoreTile(b) && !c.includes(b.id)) {
              s.push(b.id);
              c.push(m.id);
              c.push(b.id);
              f++;
              break;
            }
          } else {
            var _ = l.tileObjectMap().values();
            try {
              for (var T = (n = void 0, __values(_)), C = T.next(); !C.done; C = T.next()) {
                var b;
                if ((b = C.value).isValid && !c.includes(b.id)) {
                  if (b.cardId === m.cardId && b.id !== m.id && !this.isIgnoreTile(b)) {
                    s.push(b.id);
                    c.push(m.id);
                    c.push(b.id);
                    f++;
                    break;
                  }
                }
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
          if (f >= e) return s;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (o = d.return) && o.call(d);
      } finally {
        if (t) throw t.error;
      }
    }
    if (p.size > 0 && this.findTilesInCanMatchTiles(p, c, e, s)) return s;
    this.findTilesInTileObjectValues(l, c, e, s);
    return s;
  }
  findTilesInCanMatchTiles(e, t, o, n) {
    var i, r;
    if (!t || !e || !n) return false;
    var s = t.length / 2;
    if (s >= o) return true;
    try {
      for (var c = __values(e.entries()), u = c.next(); !u.done; u = c.next()) {
        var p = __read(u.value, 2),
          f = (p[0], p[1]);
        if (f.length >= 2) {
          if (this.isIgnoreTile(f[0]) || this.isIgnoreTile(f[1])) continue;
          if (t.includes(f[0].id) || t.includes(f[1].id)) continue;
          var d = f[0],
            h = f[1];
          n.push(d.id);
          n.push(h.id);
          t.push(d.id);
          t.push(h.id);
          if (++s >= o) return true;
        }
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (r = c.return) && r.call(c);
      } finally {
        if (i) throw i.error;
      }
    }
    return false;
  }
  isIgnoreTile(e) {
    return !!(e.checkHasType(ETileType.RankCard) || e.checkHasType(ETileType.DuoxiaoCard) || e.checkHasType(ETileType.DaxiaoCard) || e.checkHasType(ETileType.Bomb));
  }
  findTilesInTileObjectValues(e, t, o, n) {
    var i, r;
    if (!t || !e || !n) return false;
    var l = t.length / 2;
    if (l >= o) return true;
    var s = e.tileObjectMap().values(),
      c = new Map();
    try {
      for (var u = __values(s), p = u.next(); !p.done; p = u.next()) {
        var f = p.value;
        if (f.isValid && !this.isIgnoreTile(f) && !t.includes(f.id)) {
          var d = f.cardId,
            h = c.get(d);
          if (h) {
            n.push(h);
            n.push(f.id);
            t.push(h);
            t.push(f.id);
            if (++l >= o) return true;
          } else c.set(d, f.id);
        }
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (r = u.return) && r.call(u);
      } finally {
        if (i) throw i.error;
      }
    }
  }
}