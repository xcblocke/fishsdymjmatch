import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import GameConstant from '../../../Scripts/core/simulator/constant/GameConstant';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { TileMapSimulator } from '../../../Scripts/objects/TileMapSimulator';
var h = Array.from({
  length: 34
}, function (t, e) {
  return e;
});
var y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 55, 56, 57, 58, 59, 60, 61, 62];
@mj.trait
@mj.class("BoardAddBlockTrait")
export default class BoardAddBlockTrait extends ExtractTrait {
  static traitKey = "BoardAddBlock";
  get addPairCount() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.addPairCount) && void 0 !== e ? e : 0;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  getCacheKey(t) {
    return t + "_tiles";
  }
  cacheAddBlock(t, e, r) {
    var a = this.getCacheKey(t);
    this.localData[a] = {
      levelId: e,
      cardInfos: r,
      bombs: r.filter(function (t) {
        return 43 === t.id;
      }).map(function (t) {
        return t.pos.x + "-" + t.pos.y + "-" + t.pos.z;
      })
    };
  }
  getCachedAddBlocks(t, e) {
    var r = this.getCacheKey(t),
      a = this.localData[r];
    return null == a || "" === a ? null : a.levelId !== e ? null : a;
  }
  onIptSetLv_reGenFacesAfter(t, e) {
    if (this.checkGameMode()) {
      var r = t.ins,
        a = t.args[0],
        i = a.levelData.levelId;
      if (ExtractTool.getInstance().isFixedLevel(i)) e();else if (a.levelData.isNewGame && !a.levelData.isRestart) {
        try {
          var o = r.gameContext,
            n = o.getTileMapObject(),
            l = this.getNonSymmetricPos(n);
          if (l.length > 0) {
            this.tryFillSymmetric(o, l);
          } else {
            this.tryAddBlock(o);
          }
        } catch (t) {
          console.error("[BoardAddBlockTrait] 增加块失败: " + ((null == t ? void 0 : t.message) || "未知错误"));
        }
        e();
      } else e();
    } else e();
  }
  onIptT2SetLv_genFcsAfter(t, e) {
    if (this.checkGameMode()) {
      var r = t.ins,
        a = t.args[0],
        i = a.levelData.levelId;
      if (ExtractTool.getInstance().isFixedLevel(i)) e();else if (a.levelData.isRestart) e();else if (a.levelData.isNewGame) {
        try {
          var o = r.gameContext,
            n = o.getTileMapObject(),
            l = this.getNonSymmetricPos(n);
          if (l.length > 0) {
            this.tryFillSymmetric(o, l);
          } else {
            this.tryAddBlock(o);
          }
        } catch (t) {
          console.error("[BoardAddBlockTrait] 增加块失败: " + ((null == t ? void 0 : t.message) || "未知错误"));
        }
        e();
      } else e();
    } else e();
  }
  tryAddBlock(t) {
    var e = t.getTileMapObject(),
      r = TileMapSimulator.createSim(t),
      a = this.getAvailablePos(r);
    if (a.length <= 0) return false;
    var i = this.addPairCount,
      o = [...a],
      n = [],
      s = Date.now();
    this.selectPairs(o, n, i, r, s);
    if (n.length <= 0) return false;
    this.fillColor(t, n, e);
    return true;
  }
  fillColor(t, e, r) {
    for (var a = this, i = this.getUnUsedTileTypes(r), o = e.length; i.length < o;) i.push(43);
    for (var n = i.slice(0, o), l = [], s = e.reduce(function (t, e) {
        return t.concat(e);
      }, []), c = function c(t, e) {
        if (s.length <= 0) return null;
        Math.floor(t / 2);
        var r = null;
        if (e) {
          s.sort(function (t, r) {
            return a.getDistanceSqr(t, e) - a.getDistanceSqr(r, e);
          });
          r = s.shift();
        } else {
          var i = Math.floor(Math.random() * s.length);
          r = s[i];
          s.splice(i, 1);
        }
        return r;
      }, u = null, d = 0; d < o; d++) {
      var p = null,
        f = null;
      if (0 === d) {
        p = c(2 * d, null);
        f = c(2 * d + 1, null);
      } else {
        p = c(2 * d, u);
        f = c(2 * d + 1, null);
      }
      if (!p || !f) break;
      u = f;
      var h = {
          pos: {
            x: p.x,
            y: p.y,
            z: p.z
          },
          isAlive: true,
          id: n[d]
        },
        y = {
          pos: {
            x: f.x,
            y: f.y,
            z: f.z
          },
          isAlive: true,
          id: n[d]
        };
      l.push(h);
      l.push(y);
      r.appendCard(h);
      r.appendCard(y);
    }
    r.updateInitGameLayer();
    r.updateCanMatchTiles();
    this.cacheAddBlock(t.gameType, t.getGameData().getLevelId(), l);
  }
  getDistanceSqr(t, e) {
    return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
  }
  isOverlap(t, e) {
    var r,
      a,
      i = __read(t, 2),
      o = i[0],
      l = i[1];
    try {
      for (var c = __values(e), u = c.next(); !u.done; u = c.next()) {
        var d = __read(u.value, 2),
          p = d[0],
          f = d[1];
        if (Math.abs(o.x - p.x) < 2 && Math.abs(o.y - p.y) < 2 || Math.abs(l.x - f.x) < 2 && Math.abs(l.y - f.y) < 2 || Math.abs(o.x - f.x) < 2 && Math.abs(o.y - f.y) < 2 || Math.abs(l.x - p.x) < 2 && Math.abs(l.y - p.y) < 2) return true;
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        u && !u.done && (a = c.return) && a.call(c);
      } finally {
        if (r) throw r.error;
      }
    }
    return false;
  }
  isLocked(t, e, r) {
    var a,
      i,
      o = __read(t, 2),
      c = o[0],
      u = o[1],
      d = e.appendCard({
        pos: {
          x: c.x,
          y: c.y,
          z: c.z
        },
        isAlive: true,
        id: 0
      });
    if (!d) return true;
    var p = e.appendCard({
      pos: {
        x: u.x,
        y: u.y,
        z: u.z
      },
      isAlive: true,
      id: 0
    });
    if (!p) {
      e.removeCard(d);
      return true;
    }
    var f = false,
      h = [...[d.id, p.id], ...r];
    try {
      for (var y = __values(h), v = y.next(); !v.done; v = y.next()) {
        var g = v.value,
          m = e.getTileObject(g);
        if (!m) {
          f = true;
          break;
        }
        if (e.isHasLeft(m) && e.isHasRight(m)) {
          f = true;
          break;
        }
      }
    } catch (t) {
      a = {
        error: t
      };
    } finally {
      try {
        v && !v.done && (i = y.return) && i.call(y);
      } finally {
        if (a) throw a.error;
      }
    }
    e.removeCard(d);
    e.removeCard(p);
    return f;
  }
  selectPairs(t, e, r, a, i, o = -1) {
    var n = this;
    if (!(e.length >= r || 0 == t.length || Date.now() - i >= 50)) {
      var l = e.length,
        s = -1;
      if (0 === l) {
        if (-1 !== o) this.isLocked(t[o], a, []) || (s = o);else for (var c = Math.floor(Math.random() * t.length), u = 0; u < t.length; u++) {
          var d = (c + u) % t.length;
          if (!this.isLocked(t[d], a, [])) {
            s = d;
            break;
          }
        }
      } else {
        var p = e[l - 1];
        t.sort(function (t, e) {
          return n.getDistanceSqr(t[0], p[0]) - n.getDistanceSqr(e[0], p[0]);
        });
        var f = [];
        e.forEach(function (t) {
          f.push(t[0].x + "-" + t[0].y + "-" + t[0].z);
          f.push(t[1].x + "-" + t[1].y + "-" + t[1].z);
        });
        for (u = 0; u < t.length; u++) {
          var h = t[u];
          if (!this.isOverlap(h, e) && !this.isLocked(h, a, f)) {
            s = u;
            break;
          }
        }
      }
      if (-1 !== s) {
        a.appendCard({
          pos: {
            x: t[s][0].x,
            y: t[s][0].y,
            z: t[s][0].z
          },
          isAlive: true,
          id: 0
        });
        a.appendCard({
          pos: {
            x: t[s][1].x,
            y: t[s][1].y,
            z: t[s][1].z
          },
          isAlive: true,
          id: 0
        });
        e.push(t[s]);
        t.splice(s, 1);
        this.selectPairs(t, e, r, a, i);
      }
    }
  }
  getAvailablePos(t) {
    var e = t.maxLayerIndex,
      r = [],
      a = [];
    this.getAvailablePosInLayer(t, e, r, a);
    this.getAvailablePosInLayer(t, e + 1, r, a);
    if (a.length > 1) for (var i = 0; i < a.length; i++) for (var o = i + 1; o < a.length; o++) Math.abs(a[i].y - a[o].y) >= 2 && r.push([a[i], a[o]]);
    return r;
  }
  checkCardPosInvalid(t, e) {
    return !(e < 0 || e >= 2 * GameConstant.MaxTileCountX || t < 0 || t >= 2 * GameConstant.MaxTileCountY);
  }
  getGridIndex(t, e) {
    return e * GameConstant.MaxTileCountX * 2 + t;
  }
  getOwnerGridIds(t, e) {
    var r = this.getGridIndex(t, e),
      a = Array.from({
        length: 4
      }, function () {
        return 0;
      });
    a[0] = r;
    a[1] = r + 1;
    a[2] = r + 2 * GameConstant.MaxTileCountX;
    a[3] = r + 2 * GameConstant.MaxTileCountX + 1;
    return a;
  }
  getSymmetricPosX(t, e) {
    return 2 * (e - 1) - t;
  }
  checkPosValid(t, e, r, a) {
    var i, o, n, l;
    if (!this.checkCardPosInvalid(e, t)) return false;
    var c = this.getOwnerGridIds(t, e);
    if (r) try {
      for (var u = __values(c), d = u.next(); !d.done; d = u.next()) {
        var p = d.value;
        if (r.isHasCard(p)) return false;
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        d && !d.done && (o = u.return) && o.call(u);
      } finally {
        if (i) throw i.error;
      }
    }
    if (a) try {
      for (var f = __values(c), h = f.next(); !h.done; h = f.next()) {
        p = h.value;
        if (!a.isHasCard(p)) return false;
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        h && !h.done && (l = f.return) && l.call(f);
      } finally {
        if (n) throw n.error;
      }
    }
    return true;
  }
  getAvailablePosInLayer(t, e, r, a) {
    for (var i = t.mapLayers(), o = t.mapCol, n = t.mapRow, l = t.maxMapWidth, s = i[e], c = e - 1 >= 0 ? i[e - 1] : null, u = new Set(), d = o / 2, p = 0; p < d; p++) for (var f = 0; f <= n; f++) {
      var h = this.getGridIndex(p, f),
        y = this.getSymmetricPosX(p, l),
        v = this.getGridIndex(y, f);
      if (!u.has(h) && !u.has(v)) {
        u.add(h);
        u.add(v);
        this.checkPosValid(p, f, s, c) && this.checkPosValid(y, f, s, c) && r.push([cc.v3(p, f, e), cc.v3(y, f, e)]);
      }
    }
    for (f = 0; f <= n; f++) this.checkPosValid(d, f, s, c) && a.push(cc.v3(d, f, e));
  }
  getUnUsedTileTypes(t) {
    var e = new Set();
    t.tileObjectMap().forEach(function (t) {
      e.add(t.resId);
    });
    return this.getSupportedResIds().filter(function (t) {
      return !e.has(t);
    });
  }
  isSupportAll() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.supportAll) && void 0 !== e && e;
  }
  getSupportedResIds() {
    return (this.isSupportAll() ? y : h).concat();
  }
  getNonSymmetricPos(t) {
    var e = this,
      r = t.maxMapWidth,
      a = [],
      i = t.tileObjectMap();
    i.forEach(function (t) {
      if (t.isValid) {
        var o = e.getSymmetricPosX(t.gridPosX, r),
          n = t.gridPosY,
          l = t.layer,
          s = o + "-" + n + "-" + l;
        i.has(s) || a.push(cc.v3(o, n, l));
      }
    });
    return a;
  }
  tryFillSymmetric(t, e) {
    var r = t.getTileMapObject();
    if (e.length % 2 != 0) {
      var a = this.getMiddlePos(r);
      if (!a) return false;
      e.push(a);
    }
    for (var i = this.getUnUsedTileTypes(r), o = e.length / 2; i.length < o;) i.push(43);
    var n = i.slice(0, o);
    this.tryPaintColor(t, e, n);
    return true;
  }
  tryPaintColor(t, e, r) {
    for (var a = Date.now(), i = TileMapSimulator.createSim(t), o = i.mapLayers(), l = [], s = 0; s < e.length; s++) {
      var c = e[s],
        u = c.z < o.length ? o[c.z] : null;
      if (!this.checkPosValid(c.x, c.y, u, null)) return false;
      var d = i.appendCard({
        pos: {
          x: c.x,
          y: c.y,
          z: c.z
        },
        isAlive: true,
        id: 0
      });
      if (!d) return false;
      l.push(d);
    }
    var p = this.getPairCombines(l, a),
      h = null;
    for (s = 0; s < p.length; s++) {
      var y = p[s];
      if (Date.now() - a >= 50) return false;
      if (this.checkTileCombines(i, y, r)) {
        h = y;
        break;
      }
    }
    if (!h) return false;
    var v = t.getTileMapObject(),
      g = [];
    for (s = 0; s < h.length; s++) {
      var m = __read(h[s], 2),
        x = m[0],
        b = m[1],
        C = {
          pos: {
            x: x.gridPosX,
            y: x.gridPosY,
            z: x.layer
          },
          isAlive: true,
          id: x.resId
        },
        T = {
          pos: {
            x: b.gridPosX,
            y: b.gridPosY,
            z: b.layer
          },
          isAlive: true,
          id: b.resId
        };
      g.push(C);
      g.push(T);
      v.appendCard(C);
      v.appendCard(T);
    }
    v.updateInitGameLayer();
    v.updateCanMatchTiles();
    this.cacheAddBlock(t.gameType, t.getGameData().getLevelId(), g);
    return true;
  }
  checkTileCombines(t, e, r) {
    for (var a = [], i = 0; i < e.length; i++) {
      var o = __read(e[i], 2),
        l = o[0],
        s = o[1];
      l.changeResId(r[i]);
      s.changeResId(r[i]);
      l.isValid = true;
      s.isValid = true;
      a.push(l);
      a.push(s);
    }
    return this.tryClearAll(t, a, e);
  }
  tryClearAll(t, e, r) {
    if (e.every(function (t) {
      return !t.isValid;
    })) return true;
    var a = t.aliveTiles().filter(function (t) {
        return 0 === t.isCardLock();
      }),
      i = r.filter(function (t) {
        var e = __read(t, 2),
          r = e[0],
          i = e[1];
        return a.includes(r) && a.includes(i);
      });
    if (0 === i.length) return false;
    for (var o = 0; o < i.length; o++) {
      var l = __read(i[o], 2),
        s = l[0],
        c = l[1];
      s.isValid = false;
      c.isValid = false;
    }
    return this.tryClearAll(t, e, r);
  }
  getPairCombines(t, e) {
    if (t.length % 2 != 0 || 0 === t.length) return [];
    var r = [],
      a = function a(t, i) {
        if (0 === t.length) {
          r.push([...i]);
          return false;
        }
        if (Date.now() - e >= 16.666666666666668) return true;
        for (var o = t[0], n = 1; n < t.length; n++) {
          var s = [o, t[n]],
            c = t.slice(1, n).concat(t.slice(n + 1));
          i.push(s);
          var u = a(c, i);
          i.pop();
          if (u) return true;
        }
        return false;
      };
    a(t, []);
    return r;
  }
  getMiddlePos(t) {
    for (var e = t.mapLayers(), r = t.mapCol, a = t.mapRow, i = t.maxLayerIndex, o = r / 2, n = 0; n <= a; n++) for (var l = 0; l <= i + 1; l++) if (this.checkPosValid(o, n, e[l], 0 == l ? null : e[l - 1])) return cc.v3(o, n, l);
    return null;
  }
  onBombCdTp_getBombClrIds(t, e) {
    if (this.checkGameMode()) {
      var r = __read(t.args, 2),
        a = r[0],
        i = r[1],
        o = this.getCachedAddBlocks(a.gameType, a.getGameData().getLevelId());
      if (o) {
        var l = o.bombs;
        if (i.some(function (t) {
          return !l.includes(t);
        })) e();else {
          var s = a.getTileMapObject(),
            c = s.aliveTiles().filter(function (t) {
              return t.type === ETileType.Bomb && l.includes(t.id) && 0 === s.isCardLock(t);
            });
          if (c.length < 2) e();else {
            var u = [c[0].id, c[1].id];
            e({
              returnType: TraitCallbackReturnType.return,
              isBreak: true,
              returnVal: u
            });
          }
        }
      } else e();
    } else e();
  }
  onDGameStart_adjust(t, e) {
    if (this.checkGameMode()) {
      var r = __read(t.args, 2),
        a = r[0],
        i = r[1];
      this.addDotGameStart(a, i);
      e();
    } else e();
  }
  addDotGameStart(t, e) {
    var r = e.getGameData().getCurrentLevelId(),
      a = this.getCachedAddBlocks(e.gameType, r);
    a && a.cardInfos.length > 0 && (t.add_tiles = a.cardInfos.map(function (t) {
      return t.pos.x + "-" + t.pos.y + "-" + t.pos.z + "|" + t.id;
    }));
  }
  onDGameEnd_adjust(t, e) {
    if (this.checkGameMode()) {
      var r = __read(t.args, 3),
        a = r[0],
        i = r[1],
        o = r[2];
      this.addDotGameEnd(a, i, o);
      e();
    } else e();
  }
  addDotGameEnd(t, e) {
    var r = e.getGameData().getCurrentLevelId(),
      a = this.getCachedAddBlocks(e.gameType, r);
    a && a.cardInfos.length > 0 && (t.add_tiles = a.cardInfos.map(function (t) {
      return t.pos.x + "-" + t.pos.y + "-" + t.pos.z + "|" + t.id;
    }));
  }
  testAllSelect(t, e, r) {
    for (var a = Date.now(), i = 0; i < e.length; i++) {
      var o = TileMapSimulator.createSim(t),
        n = [...e];
      this.selectPairs(n, [], r, o, a, i);
    }
  }
}