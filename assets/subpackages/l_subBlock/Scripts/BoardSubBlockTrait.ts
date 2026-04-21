import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import { LevelUtil } from '../../../Scripts/core/simulator/config/LevelUtil';
import { TileMapSimulator } from '../../../Scripts/objects/TileMapSimulator';
@mj.trait
@mj.class("BoardSubBlockTrait")
export default class BoardSubBlockTrait extends ExtractTrait {
  static traitKey = "BoardSubBlock";
  get subPairCount() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.subPairCount) && void 0 !== t ? t : 0;
  }
  get isRemoveOperable() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.removeOperable) && void 0 !== t && t;
  }
  getCacheKey(e) {
    return e + "_tiles";
  }
  cacheSubBlock(e, t, r) {
    var o = this.getCacheKey(e);
    this.localData[o] = {
      levelId: t,
      cardInfos: r
    };
  }
  getCachedSubBlocks(e, t) {
    var r = this.getCacheKey(e),
      o = this.localData[r];
    return null == o || "" === o ? null : o.levelId !== t ? null : o;
  }
  onIptSetLv_reGenFaces(e, t) {
    if (this.checkGameMode()) {
      var r = e.ins,
        o = e.args[0],
        a = o.levelData.levelId;
      if (ExtractTool.getInstance().isFixedLevel(a)) t();else if (o.levelData.isNewGame && !o.levelData.isRestart) {
        try {
          this.trySubBlock(r.gameContext);
        } catch (e) {
          console.error("[BoardSubBlockTrait] 减少块失败: " + ((null == e ? void 0 : e.message) || "未知错误"));
        }
        t();
      } else t();
    } else t();
  }
  onIptT2SetLv_reGenFaces(e, t) {
    if (this.checkGameMode()) {
      var r = e.ins,
        o = e.args[0],
        a = o.levelData.levelId;
      if (ExtractTool.getInstance().isFixedLevel(a)) t();else if (o.levelData.isRestart) t();else if (o.levelData.isNewGame) {
        try {
          this.trySubBlock(r.gameContext);
        } catch (e) {
          console.error("[BoardSubBlockTrait] 减少块失败: " + ((null == e ? void 0 : e.message) || "未知错误"));
        }
        t();
      } else t();
    } else t();
  }
  trySubBlock(e) {
    var t, r;
    if (!(this.subPairCount <= 0)) {
      var o = [],
        a = this.getSolvers(e),
        i = e.getTileMapObject(),
        c = i.aliveTiles(),
        s = 2 * this.subPairCount;
      if (!(c.length <= s)) {
        if (a && a.length > 0) {
          this.selectFromSolvers(e, a, o);
        } else {
          if (this.isRemoveOperable) {
            this.selectFromInitOperablePairs(e, o);
          } else {
            this.selectFromBoard(e, o);
          }
        }
        if (!(o.length <= 0)) {
          var u = [];
          try {
            for (var d = __values(o), f = d.next(); !f.done; f = d.next()) {
              var p = __read(f.value, 2),
                v = p[0],
                h = p[1],
                y = {
                  pos: {
                    x: v.gridPosX,
                    y: v.gridPosY,
                    z: v.layer
                  },
                  isAlive: true,
                  id: v.resId
                },
                g = {
                  pos: {
                    x: h.gridPosX,
                    y: h.gridPosY,
                    z: h.layer
                  },
                  isAlive: true,
                  id: h.resId
                };
              u.push(y);
              u.push(g);
              i.removeCard(v);
              i.removeCard(h);
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              f && !f.done && (r = d.return) && r.call(d);
            } finally {
              if (t) throw t.error;
            }
          }
          this.cacheSubBlock(e.gameType, e.getGameData().getLevelId(), u);
          i.updateInitGameLayer();
          i.updateCanMatchTiles();
        }
      }
    }
  }
  getSolvers(e) {
    var t = e.getGameData().getLevelIndex(),
      r = e.getGameData().getLevelName(),
      o = e.getGameData().getLevelId(),
      a = e.gameType,
      i = ExtractTool.getInstance().getSolvers(a, o, t, r);
    return null == i || "" === i ? null : LevelUtil.parseSolver(i);
  }
  selectFromSolvers(e, t, r) {
    var o = TileMapSimulator.createSim(e),
      a = Date.now();
    this.selectRemovePair(e, o, t, r, a);
  }
  selectRemovePair(e, t, r, o, a) {
    var i, l;
    if (o.length >= this.subPairCount) return true;
    if (Date.now() - a >= 50) return true;
    try {
      for (var c = __values(r), s = c.next(); !s.done; s = c.next()) {
        var u = s.value,
          d = u.coord1.x + "-" + u.coord1.y + "-" + u.coord1.z,
          f = u.coord2.x + "-" + u.coord2.y + "-" + u.coord2.z,
          p = t.getTileObject(d),
          v = t.getTileObject(f),
          h = e.getTileMapObject().getTileObject(d),
          y = e.getTileMapObject().getTileObject(f);
        if (p && v && h && y && p.isValid && v.isValid && p.cardId == v.cardId && 0 == t.isCardLock(p) && 0 == t.isCardLock(v)) {
          o.push([h, y]);
          p.isValid = false;
          v.isValid = false;
          if (this.selectRemovePair(e, t, r, o, a)) return true;
        }
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (l = c.return) && l.call(c);
      } finally {
        if (i) throw i.error;
      }
    }
    return false;
  }
  selectFromInitOperablePairs(e, t) {
    var r,
      o,
      a,
      i,
      l = e.getTileMapObject(),
      c = l.aliveTiles(),
      s = new Map(),
      u = new Set();
    try {
      for (var d = __values(c), f = d.next(); !f.done; f = d.next()) {
        var p = f.value;
        if (0 === l.isCardLock(p)) {
          s.has(p.cardId) || s.set(p.cardId, []);
          s.get(p.cardId).push(p);
          s.get(p.cardId).length >= 2 && u.add(p.cardId);
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (o = d.return) && o.call(d);
      } finally {
        if (r) throw r.error;
      }
    }
    if (!(u.size <= 0)) {
      var v = Array.from(u),
        h = this.subPairCount;
      try {
        for (var y = __values(v), g = y.next(); !g.done; g = y.next()) for (var m = g.value, b = s.get(m), _ = Math.floor(b.length / 2), x = 0; x < _ && !(t.length >= h); x++) t.push([b[2 * x], b[2 * x + 1]]);
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          g && !g.done && (i = y.return) && i.call(y);
        } finally {
          if (a) throw a.error;
        }
      }
    }
  }
  selectFromBoard(e, t) {
    var r,
      o,
      a = e.getTileMapObject(),
      i = a.aliveTiles(),
      l = new Map();
    try {
      for (var c = __values(i), s = c.next(); !s.done; s = c.next()) {
        var u = s.value;
        l.has(u.cardId) || l.set(u.cardId, {
          count: 0,
          unlocks: []
        });
        l.get(u.cardId).count++;
        0 === a.isCardLock(u) && l.get(u.cardId).unlocks.push(u);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = c.return) && o.call(c);
      } finally {
        if (r) throw r.error;
      }
    }
    var d = Array.from(l.entries()).sort(function (e, t) {
      return t[1].count - e[1].count;
    }).filter(function (e) {
      return e[1].count === e[1].unlocks.length && e[1].count % 2 == 0;
    }).reduce(function (e, t) {
      return e.concat(t[1].unlocks);
    }, []);
    if (!(d.length <= 0)) for (var f = 2 * this.subPairCount, p = d.slice(0, f), v = 0; v < p.length; v += 2) t.push([p[v], p[v + 1]]);
  }
  onDGameStart_adjust(e, t) {
    if (this.checkGameMode()) {
      var r = __read(e.args, 2),
        o = r[0],
        a = r[1];
      this.addDotGameStart(o, a);
      t();
    } else t();
  }
  addDotGameStart(e, t) {
    var r = t.getGameData().getCurrentLevelId(),
      o = this.getCachedSubBlocks(t.gameType, r);
    o && o.cardInfos.length > 0 && (e.delete_tiles = o.cardInfos.map(function (e) {
      return e.pos.x + "-" + e.pos.y + "-" + e.pos.z + "|" + e.id;
    }));
  }
  onDGameEnd_adjust(e, t) {
    if (this.checkGameMode()) {
      var r = __read(e.args, 3),
        o = r[0],
        a = r[1],
        i = r[2];
      this.addDotGameEnd(o, a, i);
      t();
    } else t();
  }
  addDotGameEnd(e, t) {
    var r = t.getGameData().getCurrentLevelId(),
      o = this.getCachedSubBlocks(t.gameType, r);
    o && o.cardInfos.length > 0 && (e.delete_tiles = o.cardInfos.map(function (e) {
      return e.pos.x + "-" + e.pos.y + "-" + e.pos.z + "|" + e.id;
    }));
  }
}