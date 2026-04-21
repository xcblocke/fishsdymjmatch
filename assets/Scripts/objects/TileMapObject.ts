import { LevelDataParser } from '../core/simulator/config/LevelDataParser';
import { ECollectFrom } from '../constant/CollectInterfact';
import GameConstant from '../core/simulator/constant/GameConstant';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { MjGameType, MjCardId } from '../core/simulator/constant/GameTypeEnums';
import { ETileVisible, ETileType } from '../simulator/constant/TileTypeEnum';
import CollectSystem from '../core/simulator/objects/CollectSystem';
import TileLayerObject from '../core/simulator/objects/TileLayerObject';
import { TileObject } from './TileObject';
export class TileMapObject {
  _maxMapWidth = 0;
  _mapRow = 0;
  _mapCol = 0;
  _layerOffsetX = 0;
  _layerOffsetY = 0;
  _maxLayerIndex = 0;
  _levelStr = "";
  _canMatchTiles = new Map();
  _cardsCount = 0;
  _mapLayers = [];
  _tileObjectMap = new Map();
  _isSimulator = false;
  _actionIds = [];
  _selectTildIdsMap = new Map();
  _hasCheckBatchIdSet = new Set();
  _gameContext = null;
  _gameType = null;
  _collectSystem = null;
  get gameType() {
    return this._gameType;
  }
  get isSimulator() {
    return this._isSimulator;
  }
  get gameContext() {
    return this._gameContext;
  }
  get layerOffsetX() {
    return this._layerOffsetX;
  }
  get layerOffsetY() {
    return this._layerOffsetY;
  }
  get maxLayerIndex() {
    return this._maxLayerIndex;
  }
  get maxMapWidth() {
    return this._maxMapWidth;
  }
  get mapRow() {
    return this._mapRow;
  }
  get mapCol() {
    return this._mapCol;
  }
  get collectSystem() {
    return this._collectSystem;
  }
  constructor(e) {
    this._gameContext = e;
    this._gameType = e.gameType;
  }
  static isSpecialCardId(e) {
    return [MjCardId.emYogaCardId, MjCardId.emBombCardId, MjCardId.emTravelEgyptId, MjCardId.emRankId].includes(e);
  }
  getCanMatchTiles() {
    return this._canMatchTiles;
  }
  getLevelData() {
    return this._levelStr;
  }
  reset() {
    this._canMatchTiles.clear();
    this._tileObjectMap.clear();
    this._mapLayers.length = 0;
    this._maxMapWidth = 0;
    this._mapRow = 0;
    this._mapCol = 0;
    this._layerOffsetX = 0;
    this._layerOffsetY = 0;
    this._maxLayerIndex = 0;
    this._levelStr = "";
  }
  initGameLayer(e, t) {
    this.reset();
    this._levelStr = e;
    var o = LevelDataParser.convertStringToCardTileDatasNew(e);
    this._cardsCount = o.length;
    var n = -1,
      i = -1,
      r = -1,
      a = -1;
    this.gameType === MjGameType.Classic && t && this.applyCenterOffsetToCards(o);
    for (var s = [], c = new Map(), u = new Map(), f = 0; f < o.length; f++) {
      var d = o[f],
        h = this.getSpeLayer(d.pos.z);
      if (h) {
        var m = d.pos.x + "-" + d.pos.y + "-" + d.pos.z,
          v = new TileObject(m, d, this);
        v.init(this._gameContext, this._gameContext.getCardConfigMap());
        h.addCard(v);
        s.push(v);
        this._tileObjectMap.set(m, v);
        var g = v.gridPosX,
          _ = v.gridPosY;
        (!c.has(v.layer) || g < c.get(v.layer)) && c.set(v.layer, g);
        (!u.has(v.layer) || _ < u.get(v.layer)) && u.set(v.layer, _);
        (-1 === n || d.pos.x < n) && (n = d.pos.x);
        d.pos.x > i && (i = d.pos.x);
        (-1 === r || d.pos.y < r) && (r = d.pos.y);
        d.pos.y > a && (a = d.pos.y);
        h.layerIndex > this._maxLayerIndex && (this._maxLayerIndex = h.layerIndex);
      }
    }
    this.fixSingleCard();
    this._layerOffsetX = 0;
    this._layerOffsetY = 0;
    for (var T = c.get(0), C = u.get(0), b = 1; b < this._mapLayers.length; b++) {
      var E = c.get(b),
        S = u.get(b);
      void 0 !== E && E <= T && (this._layerOffsetX = b);
      void 0 !== S && S <= C && (this._layerOffsetY = b);
    }
    this._maxMapWidth = Math.floor((i - n) / 2) + 1;
    this._mapCol = i - n;
    this._mapRow = a - r;
    this.updateTouchSizeOffsets();
    return this._mapLayers;
  }
  getCenter(e) {
    var t,
      o,
      n = e[0].x,
      r = e[0].x,
      a = e[0].y,
      l = e[0].y;
    try {
      for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
        var u = c.value;
        u.x < n && (n = u.x);
        u.x > r && (r = u.x);
        u.y < a && (a = u.y);
        u.y > l && (l = u.y);
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
    return cc.v3((n + r) / 2, (a + l) / 2, 0);
  }
  updatePositonOffset() {
    var e = this.gameContext.getOffsetY();
    if (this.gameType !== MjGameType.Classic) {
      this.updatePositonOffsetForNormal(e);
    } else {
      this.updatePositonOffsetForClassic(e);
    }
  }
  updatePositonOffsetForClassic(e, t) {
    var o,
      n,
      r,
      a,
      l = [],
      s = null;
    try {
      for (var u = __values(this._tileObjectMap.values()), p = u.next(); !p.done; p = u.next()) if ((I = p.value).isValid) {
        s = I;
        break;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        p && !p.done && (n = u.return) && n.call(u);
      } finally {
        if (o) throw o.error;
      }
    }
    if (s) {
      var f = 2 * GameConstant.MaxTileCountX - 2,
        d = 2 * GameConstant.MaxTileCountY - 2,
        h = s.cardLayoutConfig,
        y = s.layoutScale,
        m = cc.v3(0 * (h.cardSize[0] + h.cardSpace[0]) * y, -0 * (h.cardSize[1] + h.cardSpace[1]) * y, 0),
        v = cc.v3(0.5 * f * (h.cardSize[0] + h.cardSpace[0]) * y, -0 * (h.cardSize[1] + h.cardSpace[1]) * y, 0),
        g = cc.v3(0 * (h.cardSize[0] + h.cardSpace[0]) * y, -0.5 * d * (h.cardSize[1] + h.cardSpace[1]) * y, 0),
        _ = cc.v3(0.5 * f * (h.cardSize[0] + h.cardSpace[0]) * y, -0.5 * d * (h.cardSize[1] + h.cardSpace[1]) * y, 0);
      l.push(m, v, g, _);
      var T = this.getCenter(l),
        C = h.cardSizeRight,
        b = cc.v3(-T.x + C, -T.y + e + 0, 0);
      try {
        for (var E = __values(this._tileObjectMap.values()), S = E.next(); !S.done; S = E.next()) {
          var I = S.value;
          null != t && I.batchId !== t || (I.positionOffset = b);
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          S && !S.done && (a = E.return) && a.call(E);
        } finally {
          if (r) throw r.error;
        }
      }
    }
  }
  updatePositonOffsetForNormal(e) {
    var t,
      o,
      n,
      r,
      a = [],
      l = [];
    try {
      for (var s = __values(this._tileObjectMap.values()), c = s.next(); !c.done; c = s.next()) if ((d = c.value).isValid) {
        a.push(d.getPosition(true));
        l.push(d);
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
    if (a.length > 0) {
      var u = this.getCenter(a);
      try {
        for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
          var d;
          (d = f.value).positionOffset = cc.v3(-u.x, -u.y + e, 0);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (r = p.return) && r.call(p);
        } finally {
          if (n) throw n.error;
        }
      }
    }
  }
  appendCard(e) {
    if (!e || !e.pos) return null;
    var t = e.pos.x + "-" + e.pos.y + "-" + e.pos.z;
    if (this._tileObjectMap.has(t)) return null;
    var o = this.getSpeLayer(e.pos.z);
    if (o) {
      var n = new TileObject(t, e, this);
      n.init(this._gameContext, this._gameContext.getCardConfigMap());
      o.addCard(n);
      this._tileObjectMap.set(t, n);
      return n;
    }
    return null;
  }
  removeCard(e) {
    if (e) {
      var t = this.getSpeLayer(e.layer);
      if (t) {
        t.removeCard(e);
        this._tileObjectMap.delete(e.id);
      }
    }
  }
  updateInitGameLayer() {
    var e,
      t,
      o,
      n,
      r = -1,
      a = -1,
      l = -1,
      s = -1;
    this._maxLayerIndex = 0;
    var c = new Map(),
      u = new Map();
    try {
      for (var p = __values(this._tileObjectMap.values()), f = p.next(); !f.done; f = p.next()) {
        var d = f.value;
        (!c.has(d.layer) || d.gridPosX < c.get(d.layer)) && c.set(d.layer, d.gridPosX);
        (!u.has(d.layer) || d.gridPosY < u.get(d.layer)) && u.set(d.layer, d.gridPosY);
        (-1 === r || d.pos.x < r) && (r = d.pos.x);
        d.pos.x > a && (a = d.pos.x);
        (-1 === l || d.pos.y < l) && (l = d.pos.y);
        d.pos.y > s && (s = d.pos.y);
        d.layer > this._maxLayerIndex && (this._maxLayerIndex = d.layer);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        f && !f.done && (t = p.return) && t.call(p);
      } finally {
        if (e) throw e.error;
      }
    }
    this._layerOffsetX = 0;
    this._layerOffsetY = 0;
    var h = c.get(0),
      y = u.get(0);
    try {
      for (var m = __values(c.keys()), v = m.next(); !v.done; v = m.next()) {
        var g = v.value,
          _ = c.get(g),
          T = u.get(g);
        void 0 !== _ && _ <= h && (this._layerOffsetX = g);
        void 0 !== T && T <= y && (this._layerOffsetY = g);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (n = m.return) && n.call(m);
      } finally {
        if (o) throw o.error;
      }
    }
    this._maxMapWidth = Math.floor((a - r) / 2) + 1;
    this._mapCol = a - r;
    this._mapRow = s - l;
    this.updateTouchSizeOffsets();
  }
  getRemainCount() {
    var e,
      t,
      o = 0;
    try {
      for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) r.value.isValid && o++;
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
    return o;
  }
  moveTileToPosition(e, t, o, n) {
    var i = e.layer;
    i < this._mapLayers.length && this._mapLayers[i].removeCard(e);
    e.refreshOwnerGridIds(t, o, n);
    this.getSpeLayer(n).addCard(e);
  }
  swapTilePositions(e, t) {
    var o = this._tileObjectMap.get(e),
      n = this._tileObjectMap.get(t);
    if (o && n) {
      var i = {
          x: o.gridPosX,
          y: o.gridPosY,
          z: o.layer
        },
        r = {
          x: n.gridPosX,
          y: n.gridPosY,
          z: n.layer
        };
      this._mapLayers[i.z].removeCard(o);
      this._mapLayers[r.z].removeCard(n);
      o.refreshOwnerGridIds(r.x, r.y, r.z);
      this.getSpeLayer(r.z).addCard(o);
      n.refreshOwnerGridIds(i.x, i.y, i.z);
      this.getSpeLayer(i.z).addCard(n);
    }
  }
  applyCenterOffsetToAllTiles() {
    var e,
      t,
      o = this.getCurrentCenterOffset();
    try {
      for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
        var a = r.value;
        if (a.isValid) {
          var l = a.gridPosX,
            s = a.gridPosY,
            c = a.layer,
            u = this.applyOffsetToPosition(l, s, o);
          a.refreshOwnerGridIds(u.x, u.y, c);
        }
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
  getCurrentCenterOffset() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
        var a = r.value;
        a.isValid && o.push({
          id: a.resId,
          pos: {
            x: a.gridPosX,
            y: a.gridPosY,
            z: a.layer
          },
          isAlive: true
        });
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
    return 0 === o.length ? {
      centerOffsetX: 0,
      centerOffsetY: 0,
      originalStartX: 0,
      originalStartY: 0
    } : this.calculateCenterOffset(o);
  }
  fixSingleCard() {
    var e,
      t,
      o = this,
      n = this._gameContext.gameType;
    if (n === MjGameType.Normal || n === MjGameType.Travel || n === MjGameType.DailyChallenge || n === MjGameType.Tile2Normal) {
      var l = function l(e) {
          o.changeTileResId(e.id, 0);
          n === MjGameType.Tile2Normal && e.setTypeBits(0);
        },
        s = new Map();
      this._tileObjectMap.forEach(function (e) {
        s.has(e.cardId) || s.set(e.cardId, []);
        s.get(e.cardId).push(e);
      });
      var c = [];
      try {
        for (var u = __values(s), f = u.next(); !f.done; f = u.next()) {
          var d = __read(f.value, 2),
            h = d[0],
            y = d[1];
          if (y.length % 2 != 0) {
            if (n === MjGameType.Travel && h === MjCardId.emYogaCardId) continue;
            c.push.apply(c, [...y]);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          f && !f.done && (t = u.return) && t.call(u);
        } finally {
          if (e) throw e.error;
        }
      }
      c.length > 0 && c.length % 2 == 0 && c.forEach(function (e) {
        l(e);
      });
      if (n === MjGameType.Normal || n === MjGameType.DailyChallenge || n === MjGameType.Tile2Normal) {
        var m = MjCardId.emYogaCardId;
        if (s.has(m)) {
          var v = s.get(m);
          v && v.length > 0 && v.length % 2 == 0 && v.forEach(function (e) {
            l(e);
          });
        }
      }
    }
  }
  fixClassicSingleCard(e) {
    var t,
      o,
      n = this,
      l = [];
    this._tileObjectMap.forEach(function (e) {
      e.isValid && l.push(e);
    });
    l.length;
    var s = new Map();
    l.forEach(function (e) {
      var t = e.cardId;
      s.has(t) || s.set(t, []);
      var o = s.get(t);
      o.push(e);
      if (o.length >= 2) {
        o.splice(0, 2);
        0 === o.length && s.delete(t);
      }
    });
    var c = [];
    try {
      for (var u = __values(s), f = u.next(); !f.done; f = u.next()) {
        var d = __read(f.value, 2),
          h = d[0],
          y = d[1];
        (e || h !== MjCardId.emYogaCardId) && c.push.apply(c, [...y]);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (o = u.return) && o.call(u);
      } finally {
        if (t) throw t.error;
      }
    }
    if (0 !== c.length) if (c.length % 2 == 0) c.forEach(function (e) {
      n.changeTileResId(e.id, 0);
    });else {
      c[c.length - 1].isValid = false;
      for (var m = 0; m < c.length - 1; m++) this.changeTileResId(c[m].id, 0);
    }
  }
  getSpeLayer(e) {
    if (e + 1 > this._mapLayers.length) for (var t = e + 1 - this._mapLayers.length, o = 0; o < t; o++) {
      var n = new TileLayerObject(this._mapLayers.length);
      this._mapLayers.push(n);
    }
    return this._mapLayers[e];
  }
  mapLayers() {
    return this._mapLayers;
  }
  getTileObject(e) {
    return this._tileObjectMap.get(e);
  }
  tileObjectMap() {
    return this._tileObjectMap;
  }
  isHasCard(e, t) {
    return e < this._mapLayers.length && this._mapLayers[e].isHasCard(t);
  }
  getTileObjectByGridIndex(e, t) {
    if (e < this._mapLayers.length) {
      var o = this._mapLayers[e].getGridCard(t);
      if (o && o.isValid) return o;
    }
  }
  isHasCover(e) {
    if (this._gameContext.gameType === MjGameType.Tile2Normal) {
      var t = e.layer + 1;
      if (t == this._mapLayers.length) return false;
      for (var o = 0; o < e.ownerGridIds.length; o++) if (this.isHasCard(t, e.ownerGridIds[o])) return true;
      return false;
    }
    for (var n = e.layer + 1; n < this._mapLayers.length; n++) for (o = 0; o < e.ownerGridIds.length; o++) if (this.isHasCard(n, e.ownerGridIds[o])) return true;
    return false;
  }
  isHasCoverWithOutTiles(e, t) {
    for (var o = e.layer + 1; o < this._mapLayers.length; o++) for (var n = 0; n < e.ownerGridIds.length; n++) {
      var i = this.getTileObjectByGridIndex(o, e.ownerGridIds[n]);
      if (i && !t.includes(i.id)) return true;
    }
    return false;
  }
  isHasCoverWithOutTiles_tile2(e, t) {
    for (var o = e.layer + 1; o < this._mapLayers.length; o++) for (var n = 0; n < e.ownerGridIds.length; n++) {
      var i = this.getTileObjectByGridIndex(o, e.ownerGridIds[n]);
      if (i && !t.includes(i.id) && !i.getIsInSlotBar()) return true;
    }
    return false;
  }
  isHasVisible(e, t = false) {
    if (!e.isValid) return ETileVisible.None;
    for (var o = ETileVisible.All, n = t ? e.layer + 2 : this._mapLayers.length, i = e.layer + 1; i < n; i++) {
      this.isHasCard(i, e.ownerGridIds[0]) && (o &= ~ETileVisible.LeftTop);
      this.isHasCard(i, e.ownerGridIds[1]) && (o &= ~ETileVisible.RightTop);
      this.isHasCard(i, e.ownerGridIds[2]) && (o &= ~ETileVisible.LeftBottom);
      this.isHasCard(i, e.ownerGridIds[3]) && (o &= ~ETileVisible.RightBottom);
    }
    return o;
  }
  isCardLock(e) {
    var t, o;
    if (this.isHasCover(e)) return 2;
    t = this.isHasLeft(e);
    o = this.isHasRight(e);
    return t && o ? 1 : 0;
  }
  isHasLeft(e) {
    return e.isHasLeft();
  }
  isHasRight(e) {
    return e.isHasRight();
  }
  isHasUp(e) {
    return e.isHasUp();
  }
  isHasDown(e) {
    return e.isHasDown();
  }
  isOnlyHasLeftRight(e) {
    return 1 === this.isCardLock(e);
  }
  getAdjacentUpCards(e) {
    var t,
      o,
      n = [],
      r = e.layer + 1;
    if (r < this._mapLayers.length) try {
      for (var a = __values(e.ownerGridIds), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        if (this.isHasCard(r, s)) {
          var c = this._mapLayers[r].getGridCard(s);
          c && c !== e && n.push(c);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  getAdjacentLeftCards(e) {
    var t,
      o,
      n = [];
    try {
      for (var r = __values(e.ownerGridIds), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (l % (2 * GameConstant.MaxTileCountX) > 0) {
          var s = l - 1;
          if (this.isHasCard(e.layer, s)) {
            var u = this._mapLayers[e.layer].getGridCard(s);
            u && u !== e && n.push(u);
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  getAdjacentRightCards(e) {
    var t,
      o,
      n = [];
    try {
      for (var r = __values(e.ownerGridIds), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (l % (2 * GameConstant.MaxTileCountX) < 2 * GameConstant.MaxTileCountX - 1) {
          var s = l + 1;
          if (this.isHasCard(e.layer, s)) {
            var u = this._mapLayers[e.layer].getGridCard(s);
            u && u !== e && n.push(u);
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  getAdjacentLockCards(e) {
    var t = [],
      o = this.getAdjacentUpCards(e);
    if (o.length) t = o;else {
      var n = this.getAdjacentLeftCards(e),
        i = this.getAdjacentRightCards(e);
      t = [...n, ...i];
    }
    return t;
  }
  checkIsLock(e) {
    var t = this.getTileObject(e);
    return !!t && 0 != this.isCardLock(t);
  }
  getCanMatchCardPairNum() {
    var e = 0;
    this._canMatchTiles.forEach(function (t) {
      e += Math.floor(t.length / 2);
    });
    return e;
  }
  updateCanMatchTiles() {
    var e, t;
    this._canMatchTiles.clear();
    for (var o = this._mapLayers.length - 1; o >= 0; o--) try {
      for (var n = (e = void 0, __values(this._mapLayers[o].allCards)), r = n.next(); !r.done; r = n.next()) {
        var a = r.value;
        if (!this.checkIsLock(a.id) && a.isValid && !a.generating) {
          this._canMatchTiles.has(a.cardId) || this._canMatchTiles.set(a.cardId, []);
          this._canMatchTiles.get(a.cardId).push(a);
        }
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
  getCanMatchTilesHint() {
    var e = this.getCanMatchTiles(),
      t = [];
    e.forEach(function (e) {
      e.length >= 2 && t.push(e);
    });
    return t;
  }
  getAllCardTiles() {
    return Array.from(this._tileObjectMap.values()).filter(function (e) {
      return e.isValid;
    });
  }
  getValidTileObjects() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
        var a = r.value;
        a.isValid && o.push(a);
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
    return o;
  }
  compare(e, t) {
    return null != e && null != t && 0 != e.isValid && 0 != t.isValid && e.cardId == t.cardId;
  }
  pushActionId(e) {
    this._actionIds.push(e);
    this._actionIds.length > 2 && this._actionIds.shift();
  }
  deleteLastActionId() {
    return this._actionIds.length > 0 ? this._actionIds.shift() : null;
  }
  getActionIds() {
    return this._actionIds;
  }
  selcectTileId(e, t) {
    var o = this._tileObjectMap.get(e);
    if (o && o.isValid) {
      o._isSelect = t;
      this._selectTildIdsMap.set(e, t);
    }
  }
  getSelectTileIds() {
    var e = this,
      t = [];
    this._selectTildIdsMap.forEach(function (o, n) {
      o && e._tileObjectMap.get(n).isValid && t.push(n);
    });
    return t;
  }
  unselectAllTileIds(e) {
    var t = this,
      o = [];
    this._selectTildIdsMap.forEach(function (n, i) {
      if (i !== e && n && t._tileObjectMap.get(i).isValid) {
        t.selcectTileId(i, false);
        o.push(i);
      }
    });
    return o;
  }
  canClear(e) {
    var t = this,
      o = [];
    this._selectTildIdsMap.forEach(function (e, n) {
      if (e) {
        var i = t._tileObjectMap.get(n);
        i && i.isValid && o.push(n);
      }
    });
    e && o.push(e);
    if (2 === o.length && o[0] !== o[1]) {
      var n = this._tileObjectMap.get(o[0]),
        i = this._tileObjectMap.get(o[1]);
      if (n && i && n.isValid && i.isValid) return n.cardId == i.cardId;
    }
    return false;
  }
  getIsSelect(e) {
    var t = this._tileObjectMap.get(e);
    return !(!t || !t.isValid) && t.isSelect;
  }
  getMatchTileIds() {
    var e = this,
      t = [];
    this._selectTildIdsMap.forEach(function (o, n) {
      if (o) {
        var i = e._tileObjectMap.get(n);
        i && i.isValid && t.push(n);
      }
    });
    var o = [];
    if (2 === t.length && t[0] !== t[1]) {
      var n = this._tileObjectMap.get(t[0]),
        i = this._tileObjectMap.get(t[1]);
      if (n && i && n.isValid && i.isValid && n.cardId == i.cardId) {
        o.push(t[0]);
        o.push(t[1]);
      }
    }
    return o;
  }
  onClear(e) {
    if (e && e.length > 0) {
      this._gameContext.getGameData().recordClear(e.map(function (e) {
        return e.toKey();
      }));
      mj.EventManager.emit(EGameEvent.TileMapObject_OnClear, e);
    }
  }
  clear(e = false) {
    var t,
      o = this;
    var n = [];
    this._selectTildIdsMap.forEach(function (e, t) {
      if (e) {
        var i = o._tileObjectMap.get(t);
        i && i.isValid && n.push(t);
      }
    });
    var i = false;
    if (2 === n.length && n[0] !== n[1]) {
      var r = this._tileObjectMap.get(n[0]),
        a = this._tileObjectMap.get(n[1]);
      r && a && r.isValid && a.isValid && (i = r.cardId == a.cardId);
    }
    if (i) {
      var l = {
          tileIds: [],
          from: ECollectFrom.FromClear
        },
        c = [];
      n.forEach(function (e) {
        var t = o._tileObjectMap.get(e);
        o.selcectTileId(e, false);
        if (t && t.isValid) {
          t.isValid = false;
          l.tileIds.push(e);
          c.push(t);
        }
      });
      this.onClear(c);
      null === (t = this.collectSystem) || void 0 === t || t.addCollectTarget(l);
    }
    e || this.updateTouchSizeOffsets();
    return n;
  }
  clearTile(e, t) {
    var o,
      n = this._tileObjectMap.get(e);
    if (n && n.isValid) {
      n.isValid = false;
      var i = {
        tileIds: [e],
        from: t
      };
      null === (o = this.collectSystem) || void 0 === o || o.addCollectTarget(i);
      this.onClear([n]);
    }
  }
  clearSlotTile2Tiles(e, t) {
    var o;
    if (2 != e.length) return false;
    var n = this._tileObjectMap.get(e[0]),
      i = this._tileObjectMap.get(e[1]);
    if (n && i && n.isValid && i.isValid) {
      n.isValid = false;
      i.isValid = false;
      var r = {
        tileIds: e,
        from: t
      };
      null === (o = this.collectSystem) || void 0 === o || o.addCollectTarget(r);
      this.onClear([n, i]);
      return true;
    }
    return false;
  }
  getCurAllLockCards() {
    for (var e = [], t = [], o = 0; o < this._mapLayers.length; o++) for (var n = 0; n < this._mapLayers[o].allCards.length; n++) {
      var i = this._mapLayers[o].allCards[n];
      i.isValid && (this.isCardLock(i) ? e.push(i.id) : t.push(i.id));
    }
    return {
      lockCardIds: e,
      unLockCardIds: t
    };
  }
  updateTouchSizeOffsets() {
    for (var e = 0; e < this._mapLayers.length; e++) for (var t = 0; t < this._mapLayers[e].allCards.length; t++) {
      var o = this._mapLayers[e].allCards[t];
      this.updateTouchSizeOffsetsByTile(o);
    }
  }
  @mj.traitEvent("TileMapObj_updTchSz")
  updateTouchSizeOffsetsByTile(e) {
    e.updateTouchSizeOffsets([0, 0, 0, 0]);
  }
  getAliveCardByPos(e, t, o) {
    var n = this._mapLayers[o];
    if (!n) return null;
    var i = e + t * GameConstant.MaxTileCountX * 2,
      r = n.getGridCard(i);
    return r && r.isValid ? r : null;
  }
  getCurTilesCnt() {
    var e,
      t,
      o,
      n,
      r = 0;
    try {
      for (var a = __values(this._mapLayers), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        try {
          for (var c = (o = void 0, __values(s.allCards)), u = c.next(); !u.done; u = c.next()) u.value.isValid && r++;
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            u && !u.done && (n = c.return) && n.call(c);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return r;
  }
  aliveTileCount() {
    var e,
      t,
      o,
      n,
      r = 0;
    try {
      for (var a = __values(this._mapLayers), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        try {
          for (var c = (o = void 0, __values(s.allCards)), u = c.next(); !u.done; u = c.next()) u.value.isValid && r++;
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            u && !u.done && (n = c.return) && n.call(c);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return r;
  }
  aliveTiles() {
    var e,
      t,
      o,
      n,
      r = new Array();
    try {
      for (var a = __values(this._mapLayers), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        try {
          for (var c = (o = void 0, __values(s.allCards)), u = c.next(); !u.done; u = c.next()) {
            var p = u.value;
            p.isValid && r.push(p);
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            u && !u.done && (n = c.return) && n.call(c);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        l && !l.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return r;
  }
  getEachLayerTileCount() {
    for (var e = [], t = 0; t < this._mapLayers.length; t++) {
      var o = this._mapLayers[t].allCards.filter(function (e) {
        return e.isValid;
      });
      e[t] = o.length;
    }
    return e;
  }
  getAliveTileByPos(e) {
    var t = this._mapLayers[e.z];
    if (!t) return null;
    var o = e.x + e.y * GameConstant.MaxTileCountX * 2;
    return t.getGridCard(o);
  }
  setTileType(e, t) {
    var o = this._tileObjectMap.get(e);
    if (o) {
      o._type = t;
      this.gameType == MjGameType.Tile2Normal && o.addTypeBit(t);
    }
  }
  setTileType_removeTypes(e, t) {
    var o = this._tileObjectMap.get(e);
    o && this.gameType == MjGameType.Tile2Normal && t.forEach(function (e) {
      return o.removeTypeBit(e);
    });
  }
  setTileTypeByPos_addTypes(e, t) {
    var o = this.getAliveTileByPos(e);
    o && t.forEach(function (e) {
      return o.addTypeBit(e);
    });
  }
  setTileTypeByPos(e, t) {
    var o = this.getAliveTileByPos(e);
    o && (o._type = t);
  }
  setTileOriginalResId(e, t) {
    var o = this._tileObjectMap.get(e);
    o && o.setOriginalResId(t);
  }
  setTileOriginalResIdByPos(e, t) {
    var o = this.getAliveTileByPos(e);
    o && o.setOriginalResId(t);
  }
  changeTileResId(e, t) {
    var o = this._tileObjectMap.get(e);
    o && o.changeResId(t);
  }
  getAllTileTypes() {
    var e = new Map();
    this._tileObjectMap.forEach(function (t, o) {
      e.set(o, t.type);
    });
    return e;
  }
  isBoardTileHasType(e, t = true) {
    var o, n;
    var r = Array.isArray(e) ? e : [e];
    if (0 === r.length) return false;
    var a = new Set(r);
    try {
      for (var l = __values(this._tileObjectMap.values()), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        if (c && (!t || c.isValid) && a.has(c.type)) return true;
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (n = l.return) && n.call(l);
      } finally {
        if (o) throw o.error;
      }
    }
    return false;
  }
  checkIsDead(e = []) {
    var t, o;
    var n = this.aliveTiles();
    if (0 === n.length) return false;
    var r = new Map();
    try {
      for (var a = __values(n), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        if (!this.isCardLock(s) && !e.includes(s.id)) {
          r.has(s.cardId) || r.set(s.cardId, []);
          r.get(s.cardId).push(s);
          if (r.get(s.cardId).length >= 2) return false;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (o = a.return) && o.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return true;
  }
  getCount() {
    return this._tileObjectMap.size || 0;
  }
  getCardsCount() {
    return this._cardsCount || 0;
  }
  getInitialBoardDimension() {
    var e,
      t,
      o,
      n,
      r = 0,
      a = 0;
    try {
      for (var l = __values(this._mapLayers), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        try {
          for (var u = (o = void 0, __values(c.allCards)), p = u.next(); !p.done; p = u.next()) {
            var f = p.value;
            r = Math.max(r, f.gridPosX);
            a = Math.max(a, f.gridPosY);
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            p && !p.done && (n = u.return) && n.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (t = l.return) && t.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    return [r + 2, a + 2, this._mapLayers.length];
  }
  getCurBoardDimension(e = false) {
    var t, o, n, r;
    var a = 0,
      l = 0,
      s = 0;
    try {
      for (var c = __values(this._mapLayers), u = c.next(); !u.done; u = c.next()) {
        var p = u.value,
          f = false;
        try {
          for (var d = (n = void 0, __values(p.allCards)), h = d.next(); !h.done; h = d.next()) {
            var y = h.value;
            if (y.isValid && (!e || !y.getIsInSlotBar())) {
              a = Math.max(a, y.gridPosX);
              l = Math.max(l, y.gridPosY);
              f = true;
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            h && !h.done && (r = d.return) && r.call(d);
          } finally {
            if (n) throw n.error;
          }
        }
        f && s++;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    return [a + 2, l + 2, s];
  }
  getSelfDistanceArray(e) {
    var t,
      o,
      n,
      a,
      s = function s(t) {
        return e ? t.getPosition() : cc.v2(t.gridPosX, t.gridPosY);
      },
      c = {},
      u = this._tileObjectMap;
    try {
      for (var p = __values(u), f = p.next(); !f.done; f = p.next()) {
        var d = __read(f.value, 2),
          h = d[0];
        c[(R = d[1]).resId] || (c[R.resId] = []);
        c[R.resId].push(R);
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
    var y = {};
    for (var m in c) {
      var v = c[m];
      if (!(v.length < 2)) {
        var g = Number.MAX_VALUE,
          _ = {};
        try {
          for (var T = (n = void 0, __values(v)), C = T.next(); !C.done; C = T.next()) {
            var b = C.value;
            _[b.layer] || (_[b.layer] = []);
            _[b.layer].push(b);
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
        var E = false;
        for (var S in _) {
          var I = _[S];
          if (I.length >= 2) for (var w = 0; w < I.length; w++) for (var B = w + 1; B < I.length; B++) {
            var x = I[w],
              M = I[B],
              O = s(x),
              D = s(M),
              P = Math.sqrt(Math.pow(D.x - O.x, 2) + Math.pow(D.y - O.y, 2));
            g = Math.min(g, P);
            E = true;
          }
        }
        if (!E) for (w = 0; w < v.length; w++) for (B = w + 1; B < v.length; B++) {
          x = v[w], M = v[B], O = s(x), D = s(M), P = Math.sqrt(Math.pow(D.x - O.x, 2) + Math.pow(D.y - O.y, 2));
          g = Math.min(g, P);
        }
        g !== Number.MAX_VALUE && (y[m] = Number(g.toFixed(2)));
      }
    }
    var A = [];
    var _l = {};
    _l[h] = R;
    for (var h in y) {
      var R = y[h];
      A.push(_l);
    }
    return A;
  }
  getFlipCardPos() {
    var e,
      t,
      o = [];
    try {
      for (var n = __values(this._tileObjectMap), a = n.next(); !a.done; a = n.next()) {
        var l = __read(a.value, 2),
          s = (l[0], l[1]);
        s.type === ETileType.RollCard && o.push(cc.v3(s.gridPosX, s.gridPosY, s.layer));
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
    return o.map(function (e) {
      return e.x + "," + e.y + "," + e.z;
    });
  }
  initCollectSystem() {
    this._collectSystem || (this._collectSystem = new CollectSystem(this));
    return this._collectSystem;
  }
  setDuoxiaoCount(e, t = 0) {
    var o = this._tileObjectMap.get(e);
    o && o.setDuoxiaoCount(t);
  }
  setDuoxiaoCountByPos(e, t = 0) {
    var o = this.getAliveTileByPos(e);
    o && o.setDuoxiaoCount(t);
  }
  insertNewLayersToFront(e) {
    for (var t, o, n, r, l, s = [], c = 0; c < e; c++) s.push(new TileLayerObject(c));
    var u = [];
    try {
      for (var p = __values(this._mapLayers), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          y = d.layerIndex + e;
        try {
          for (var m = (n = void 0, __values(d.allCards)), v = m.next(); !v.done; v = m.next()) {
            var g = v.value;
            g.isValid && u.push(g);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            v && !v.done && (r = m.return) && r.call(m);
          } finally {
            if (n) throw n.error;
          }
        }
        d.updateLayerIndex(y);
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
    (l = this._mapLayers).unshift.apply(l, [...s]);
    return u;
  }
  setTileGenerated(e, t) {
    e && (e._generating = t);
  }
  createTilesForNewLayers(e, t) {
    for (var o = [], n = new Set(), i = 0; i < e.length; i++) {
      var r = e[i],
        a = this._mapLayers[r.pos.z];
      if (a) {
        var l = "_b" + t,
          s = r.pos.x + "-" + r.pos.y + "-" + r.pos.z + l,
          c = new TileObject(s, r, this, t);
        c.init(this._gameContext, this._gameContext.getCardConfigMap());
        a.addCard(c);
        o.push(c);
        this._tileObjectMap.set(s, c);
        n.add(a.layerIndex);
      }
    }
    return {
      tileObjects: o,
      layerSets: n
    };
  }
  mergeTileMapData() {
    var e, t;
    this._cardsCount = this._tileObjectMap.size;
    var o = -1,
      n = -1,
      r = -1,
      a = -1;
    this._maxLayerIndex = 0;
    try {
      for (var l = __values(this._tileObjectMap.values()), s = l.next(); !s.done; s = l.next()) {
        var c = s.value,
          u = c.gridPosX,
          p = c.gridPosY;
        (-1 === o || u < o) && (o = u);
        u > n && (n = u);
        (-1 === r || p < r) && (r = p);
        p > a && (a = p);
        c.layer > this._maxLayerIndex && (this._maxLayerIndex = c.layer);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (t = l.return) && t.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    this._maxMapWidth = Math.floor((n - o) / 2) + 1;
    this._mapCol = n - o;
    this._mapRow = a - r;
  }
  calculateCenterOffset(e) {
    for (var t = e[0].pos.x, o = e[0].pos.x, n = e[0].pos.y, i = e[0].pos.y, r = 1; r < e.length; r++) {
      var a = e[r].pos;
      a.x < t && (t = a.x);
      a.x > o && (o = a.x);
      a.y < n && (n = a.y);
      a.y > i && (i = a.y);
    }
    var l = o - t,
      s = i - n,
      u = 2 * GameConstant.MaxTileCountX - 2,
      p = 2 * GameConstant.MaxTileCountY - 2;
    return {
      centerOffsetX: Math.floor((u - l) / 2),
      centerOffsetY: Math.floor((p - s) / 2),
      originalStartX: t,
      originalStartY: n
    };
  }
  applyCenterOffsetToCards(e) {
    for (var t = this.calculateCenterOffset(e), o = 0; o < e.length; o++) {
      var n = this.applyOffsetToPosition(e[o].pos.x, e[o].pos.y, t);
      e[o].pos.x = n.x;
      e[o].pos.y = n.y;
    }
  }
  applyOffsetToPosition(e, t, o) {
    return {
      x: e - o.originalStartX + o.centerOffsetX,
      y: t - o.originalStartY + o.centerOffsetY
    };
  }
  addGameLayer(e, t) {
    var o = LevelDataParser.convertStringToCardTileDatasNew(t);
    this.applyCenterOffsetToCards(o);
    for (var n = -1, i = 0; i < o.length; i++) o[i].pos.z > n && (n = o[i].pos.z);
    var r = n + 1;
    this.insertNewLayersToFront(r);
    var a = this.createTilesForNewLayers(o, e),
      s = a.tileObjects,
      c = a.layerSets;
    return {
      batchId: e,
      levelStr: t,
      cardsCount: o.length,
      tileObjects: s,
      addLayers: Array.from(c),
      openGenerateState: this._gameContext.getOpenGenerateState()
    };
  }
  checkAndApplyTileFalling(e, t = true) {
    var o, n;
    var r = [];
    try {
      for (var a = __values(this._tileObjectMap.values()), l = a.next(); !l.done; l = a.next()) {
        var s = l.value;
        if (s.isValid && s.batchId !== e && (t || !this.getIsSelect(s.id))) {
          for (var c = s.layer, u = s.gridPosX, p = s.gridPosY, f = c, d = c - 1; d >= 0; d--) {
            if (this.hasBlockingTileAtPosition(d, u, p)) {
              f = d + 1;
              break;
            }
            0 === d && (f = 0);
          }
          r.push({
            tile: s,
            oldLayer: c,
            newLayer: f,
            indexInLayer: 0
          });
          this.moveTileToPosition(s, s.gridPosX, s.gridPosY, f);
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (n = a.return) && n.call(a);
      } finally {
        if (o) throw o.error;
      }
    }
    for (var h = 0; h < r.length; h++) {
      var y = r[h],
        m = this._mapLayers[y.newLayer];
      m && (y.indexInLayer = m.allCards.indexOf(y.tile));
    }
    return r;
  }
  hasBlockingTileAtPosition(e, t, o) {
    var n, r;
    if (e < 0 || e >= this._mapLayers.length) return false;
    var a = this._mapLayers[e];
    if (!a) return false;
    try {
      for (var l = __values(a.allCards), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        if (c.isValid) {
          var u = c.gridPosX,
            p = c.gridPosX + 1,
            f = c.gridPosY,
            d = c.gridPosY + 1;
          if (u <= t + 1 && p >= t && f <= o + 1 && d >= o) return true;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (r = l.return) && r.call(l);
      } finally {
        if (n) throw n.error;
      }
    }
    return false;
  }
  cleanupEmptyLayers() {
    var e, t, o, n;
    if (this._mapLayers && 0 !== this._mapLayers.length) {
      for (var r = -1, a = [], l = this._mapLayers.length - 1; l >= 0; l--) {
        if ((u = this._mapLayers[l]) && u.hasValidCard()) {
          r = l;
          break;
        }
        u && a.push(u);
      }
      if (0 !== a.length) {
        try {
          for (var s = __values(a), c = s.next(); !c.done; c = s.next()) {
            var u = c.value;
            try {
              for (var p = (o = void 0, __values(u.allCards)), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                this._tileObjectMap.delete(d.id);
              }
            } catch (e) {
              o = {
                error: e
              };
            } finally {
              try {
                f && !f.done && (n = p.return) && n.call(p);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            c && !c.done && (t = s.return) && t.call(s);
          } finally {
            if (e) throw e.error;
          }
        }
        this._mapLayers.splice(r + 1, a.length);
        this._maxLayerIndex = this._mapLayers.length > 0 ? this._mapLayers.length - 1 : 0;
      }
    }
  }
  hasCheckBatchId(e) {
    return this._hasCheckBatchIdSet.has(e);
  }
  addCheckBatchId(e) {
    this._hasCheckBatchIdSet.add(e);
  }
  changeBatchId(e, t) {
    var o = this.getTileObject(e);
    o && (o._batchId = t || 0);
  }
  getDropTiles(e) {
    var t,
      o,
      n = [];
    try {
      for (var r = __values(this._tileObjectMap.values()), a = r.next(); !a.done; a = r.next()) {
        var l = a.value;
        if (l.batchId != e) {
          var s = l.layer,
            c = this._mapLayers[s];
          c && n.push({
            tile: l,
            oldLayer: l.layer,
            newLayer: s,
            indexInLayer: c.allCards.indexOf(l) || 0
          });
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  getTileObjectByPosId(e) {
    var t, o;
    try {
      for (var n = __values(this._tileObjectMap.values()), r = n.next(); !r.done; r = n.next()) {
        var a = r.value;
        if (a.saveKey() === e) return a;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  setTileTypeByPosExtra(e, t) {
    var o,
      n = this.getAliveTileByPos(e);
    n && (null === (o = null == n ? void 0 : n.setExtraInfo) || void 0 === o || o.call(n, t));
  }
}