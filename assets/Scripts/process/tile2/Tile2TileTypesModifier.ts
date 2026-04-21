import { BaseCoreObject } from '../../BaseCoreObject';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
import { BombCardType } from '../../tileTypes/BombCardType';
import { ColorCardType } from '../../tileTypes/ColorCardType';
import DaxiaoCardType from '../../tileTypes/DaxiaoCardType';
import DuoxiaoCardType from '../../tileTypes/DuoxiaoCardType';
import { RankCardType } from '../../tileTypes/RankCardType';
import RollCardType from '../../tileTypes/RollCardType';
import { TileGenerateStrategyRegistry } from '../../TileGenerateStrategyRegistry';
export default class Tile2TileTypesModifier extends BaseCoreObject {
  _tileTypesMap = new Map();
  _typeList = [ETileType.RollCard, ETileType.RankCard, ETileType.ColorCard, ETileType.Bomb, ETileType.DaxiaoCard, ETileType.DuoxiaoCard];
  resetFunc() {
    this._tileTypesMap.clear();
    this._tileTypesMap.set(ETileType.RollCard, RollCardType.modify.bind(RollCardType));
    this._tileTypesMap.set(ETileType.RankCard, RankCardType.modify.bind(RankCardType));
    this._tileTypesMap.set(ETileType.ColorCard, ColorCardType.modify.bind(ColorCardType));
    this._tileTypesMap.set(ETileType.Bomb, BombCardType.modify.bind(BombCardType));
    this._tileTypesMap.set(ETileType.DaxiaoCard, DaxiaoCardType.modify.bind(DaxiaoCardType));
    this._tileTypesMap.set(ETileType.DuoxiaoCard, DuoxiaoCardType.modify.bind(DuoxiaoCardType));
  }
  stringToTileType(e) {
    if (Object.values(ETileType).includes(e)) return e;
  }
  modifyTileTypes(e) {
    var t,
      o,
      n,
      i,
      a = new Array();
    if (e) {
      var l = e.split(",");
      try {
        for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
          var u = c.value;
          u && a.push(this.stringToTileType(u));
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
    }
    this.resetFunc();
    var p = this._context.getGameData().getTileStrategies(),
      f = TileGenerateStrategyRegistry.getStrategies(p);
    try {
      for (var d = __values(f), h = d.next(); !h.done; h = d.next()) h.value.run(this._context, this._typeList, a, this._tileTypesMap);
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (i = d.return) && i.call(d);
      } finally {
        if (n) throw n.error;
      }
    }
    this.setGamePlayMethod(a);
    this.saveToGameData();
  }
  setGamePlayMethod(e) {
    var t = 0;
    if (e.includes(ETileType.Yoga)) {
      t = 1;
    } else {
      if (e.includes(ETileType.RollCard)) {
        t = 2;
      } else {
        e.includes(ETileType.ColorCard) && (t = 3);
      }
    }
    this.context.getGameData().setGamePlayMethod(t);
  }
  saveToGameData() {
    var e = {},
      t = {};
    this._context.getTileMapObject().tileObjectMap().forEach(function (o) {
      var n = o.saveKey(),
        i = o.getExtraInfo();
      i && (e[n] = i);
      if (o.originalResId !== o.resId) {
        t[o.type] || (t[o.type] = []);
        t[o.type].push({
          origin: o.originalResId,
          id: n
        });
      }
    });
    this._context.getGameData().setTileTypesExtra(JSON.stringify(e));
    this._context.getGameData().setReplaceInfo(t);
  }
  saveToGameDataForRestart() {
    var e = {},
      t = {};
    this._context.getTileMapObject().tileObjectMap().forEach(function (o) {
      var n = o.saveKey(),
        i = o.getExtraInfo();
      i && (e[n] = i);
      if (o.originalResId !== o.resId) {
        t[o.type] || (t[o.type] = []);
        t[o.type].push({
          origin: o.originalResId,
          id: n
        });
      }
    });
    this._context.getGameData().setOriginalTileTypesExtra(JSON.stringify(e));
    this._context.getGameData().setOriginalReplaceInfo(JSON.stringify(t));
  }
  modifyFromLocal() {
    var e,
      t,
      o = this._context.getTileMapObject(),
      n = this._context.getGameData().getTileTypesExtra();
    if (n) try {
      var i = JSON.parse(n);
      for (var l in i) {
        var s = __read(l.split("-"), 3),
          c = s[0],
          u = s[1],
          p = s[2];
        o.setTileTypeByPosExtra({
          x: Number(c),
          y: Number(u),
          z: Number(p)
        }, i[l]);
      }
    } catch (e) {}
    var f = this._context.getGameData().getReplaceInfo();
    for (var d in f) try {
      for (var h = (e = void 0, __values(f[d])), y = h.next(); !y.done; y = h.next()) {
        var m = y.value,
          v = __read(m.id.split("-"), 3);
        c = v[0], u = v[1], p = v[2];
        o.setTileOriginalResIdByPos({
          x: Number(c),
          y: Number(u),
          z: Number(p)
        }, m.origin);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        y && !y.done && (t = h.return) && t.call(h);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  modifyFromLocalForRestart() {
    var e,
      t,
      o = this._context.getTileMapObject(),
      n = this._context.getGameData().getOriginalTileTypesExtra();
    if (n) try {
      var i = JSON.parse(n);
      for (var l in i) {
        var s = __read(l.split("-"), 3),
          c = s[0],
          u = s[1],
          p = s[2];
        o.setTileTypeByPosExtra({
          x: Number(c),
          y: Number(u),
          z: Number(p)
        }, i[l]);
      }
    } catch (e) {}
    var f = this._context.getGameData().getOriginalReplaceInfo();
    for (var d in f) try {
      for (var h = (e = void 0, __values(f[d])), y = h.next(); !y.done; y = h.next()) {
        var m = y.value,
          v = __read(m.id.split("-"), 3);
        c = v[0], u = v[1], p = v[2];
        o.setTileOriginalResIdByPos({
          x: Number(c),
          y: Number(u),
          z: Number(p)
        }, m.origin);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        y && !y.done && (t = h.return) && t.call(h);
      } finally {
        if (e) throw e.error;
      }
    }
  }
}