import { LevelUtil, CustomBitArray } from './LevelUtil';
import CardUtil from '../../../gamePlay/user/CardUtil';
@mj.class("LevelGenRule")
export default class LevelGenRule {
  static cardIdToResIdMap = new Map();
  static initCardIdMapping() {
    var e, t;
    if (!(this.cardIdToResIdMap.size > 0)) {
      var o = CardUtil.getList();
      try {
        for (var n = __values(o), r = n.next(); !r.done; r = n.next()) {
          var l = r.value;
          this.cardIdToResIdMap.set(l.cardId, l.id);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          r && !r.done && (t = n.return) && t.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }
  }
  static genLevel(e) {
    var t,
      o,
      n = {
        LevelTiles: new Map(),
        LevelData: []
      },
      a = LevelUtil.ConvertLongStringToBitArrayNew(e),
      l = LevelUtil.DeserializeNew(a);
    try {
      for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          p = u.TileIndex,
          f = {
            id: p,
            pos: {
              x: u.Coordinate.Y,
              y: u.Coordinate.X,
              z: u.Coordinate.Z
            },
            isAlive: true
          };
        n.LevelTiles.set(f.id, f);
        var d = {
          id: p,
          pos: {
            x: u.Coordinate.Y,
            y: u.Coordinate.X,
            z: u.Coordinate.Z
          },
          isAlive: true
        };
        n.LevelData.push(d);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (o = s.return) && o.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  static serializeTilesToInlineString(e) {
    var t, o, n, a;
    if (!e || 0 === e.length) return "";
    var l = e.filter(function (e) {
      return true === e.isAlive;
    });
    if (0 === l.length) return "";
    var s = 0,
      c = 0,
      u = 0;
    try {
      for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
        var d = f.value;
        s = Math.max(s, d.pos.y);
        c = Math.max(c, d.pos.x);
        u = Math.max(u, d.pos.z);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (o = p.return) && o.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    var h = l.length,
      y = (s + 1) * (c + 1),
      m = y * (u + 1),
      v = LevelUtil.SectorSize_Prefix + m + LevelUtil.SectorSize_ExternalId + LevelUtil.Size_EachTile * h,
      g = new CustomBitArray(v);
    LevelUtil.WriteBits(g, 0, s, LevelUtil.SectorSize_MaxX);
    LevelUtil.WriteBits(g, LevelUtil.SectorSize_MaxX, c, LevelUtil.SectorSize_MaxY);
    LevelUtil.WriteBits(g, LevelUtil.SectorSize_MaxX + LevelUtil.SectorSize_MaxY, h, LevelUtil.SectorSize_Count);
    var _ = LevelUtil.SectorSize_Prefix;
    try {
      for (var T = __values(l), C = T.next(); !C.done; C = T.next()) {
        var b = (d = C.value).pos.y,
          E = d.pos.x,
          S = d.pos.z * y + b * (c + 1) + E;
        g.set(_ + S, true);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        C && !C.done && (a = T.return) && a.call(T);
      } finally {
        if (n) throw n.error;
      }
    }
    for (var I = _ + m + LevelUtil.SectorSize_ExternalId, w = 0; w < l.length; w++) {
      var B = l[w].id;
      LevelUtil.WriteBits(g, I + w * LevelUtil.Size_EachTile, B, LevelUtil.Size_EachTile);
    }
    return g.toUInt64Array().map(function (e) {
      return e.toString();
    }).join(",");
  }
  static convertCardIdToResId(e) {
    0 === this.cardIdToResIdMap.size && this.initCardIdMapping();
    var t = this.cardIdToResIdMap.get(e);
    return void 0 !== t ? t : 0;
  }
  static convertLevelStrCardIdToResId(e) {
    var t = this,
      o = this.genLevel(e).LevelData.map(function (e) {
        var o = e.id;
        return {
          id: t.convertCardIdToResId(o),
          pos: e.pos,
          isAlive: e.isAlive
        };
      });
    return this.serializeTilesToInlineString(o);
  }
}