import { BaseCoreObject } from '../BaseCoreObject';
import { MjGameType, EMergeType } from '../core/simulator/constant/GameTypeEnums';
import { ETileType } from '../simulator/constant/TileTypeEnum';
import { BombCardType } from './BombCardType';
import { ColorCardType } from './ColorCardType';
import DaxiaoCardType from './DaxiaoCardType';
import DuoxiaoCardType from './DuoxiaoCardType';
import { RankCardType } from './RankCardType';
import RollCardType from './RollCardType';
export var ETileTypesExtra = {
  DuoxiaoCount: "duoxiaoCount"
};
export default class TileTypesModifier extends BaseCoreObject {
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
      n = new Array();
    if (e) {
      var i = e.split(",");
      try {
        for (var r = __values(i), l = r.next(); !l.done; l = r.next()) (c = l.value) && n.push(this.stringToTileType(c));
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
    }
    this.resetFunc();
    for (var s = 0; s < this._typeList.length; s++) {
      var c = this._typeList[s];
      n.includes(c) && this._tileTypesMap.get(c)(this._context);
    }
    this.setGamePlayMethod(n);
    if (this._context.gameType === MjGameType.Classic) {
      this.saveToGameDataFix();
    } else {
      this.saveToGameData();
    }
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
  @mj.traitEvent("TileTyModiy_resetMTypes")
  resetModifyTileTypes() {}
  modifyFromLocal() {
    var e, t, o, n, i, r;
    this.resetModifyTileTypes();
    if (this.isUserFix()) return this.modifyFromLocalFix();
    var l = this._context.getTileMapObject(),
      c = this._context.getGameData().getTileId2Type(),
      u = this._context.getGameData().getCardId2Type(),
      p = this._context.getGameData().getTileTypesExtra();
    if (c) try {
      var f = JSON.parse(c);
      for (var d in f) l.setTileType(d, f[d]);
    } catch (e) {}
    if (u) try {
      f = JSON.parse(u);
      var h = l.tileObjectMap();
      try {
        for (var y = __values(h.values()), m = y.next(); !m.done; m = y.next()) {
          var v = m.value;
          f[v.cardId] && l.setTileType(v.id, f[v.cardId]);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          m && !m.done && (t = y.return) && t.call(y);
        } finally {
          if (e) throw e.error;
        }
      }
    } catch (e) {}
    if (p) try {
      f = JSON.parse(p);
      for (var d in f) if (null === (i = f[d]) || void 0 === i ? void 0 : i[ETileTypesExtra.DuoxiaoCount]) {
        var g = Number(null === (r = f[d]) || void 0 === r ? void 0 : r[ETileTypesExtra.DuoxiaoCount]);
        l.setDuoxiaoCount(d, g);
      }
    } catch (e) {}
    var _ = this._context.getGameData().getReplaceInfo();
    for (var T in _) try {
      for (var C = (o = void 0, __values(_[T])), b = C.next(); !b.done; b = C.next()) {
        var E = b.value;
        l.setTileOriginalResId(E.id, E.origin);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        b && !b.done && (n = C.return) && n.call(C);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  isNeedSaveToGameData(e) {
    return [ETileType.RollCard, ETileType.DaxiaoCard, ETileType.DuoxiaoCard].includes(e);
  }
  isNeedSaveToGameDataByType(e) {
    return [ETileType.ColorCard].includes(e);
  }
  getNeedSaveToGameDataExtra(e) {
    var _t = {};
    _t[ETileTypesExtra.DuoxiaoCount] = e.getDuoxiaoCount();
    if (e.type == ETileType.DuoxiaoCard) return _t;
  }
  @mj.traitEvent("TileTyModiy_isUserFix")
  isUserFix() {
    return false;
  }
  saveToGameData() {
    var e = this;
    if (this.isUserFix()) return this.saveToGameDataFix();
    var t = {},
      o = {},
      n = {},
      i = {};
    this._context.getTileMapObject().tileObjectMap().forEach(function (r, a) {
      if (e.isNeedSaveToGameData(r.type)) {
        t[a] = r.type;
      } else {
        e.isNeedSaveToGameDataByType(r.type) && (o[r.cardId] = r.type);
      }
      var l = e.getNeedSaveToGameDataExtra(r);
      l && (n[a] = l);
      if (r.originalResId !== r.resId) {
        i[r.type] || (i[r.type] = []);
        i[r.type].push({
          origin: r.originalResId,
          id: a
        });
      }
    });
    this._context.getGameData().setTileId2Type(JSON.stringify(t));
    this._context.getGameData().setCardId2Type(JSON.stringify(o));
    this._context.getGameData().setTileTypesExtra(JSON.stringify(n));
    this._context.getGameData().setReplaceInfo(i);
  }
  modifyBombCard(e, t) {
    this._context.getTileMapObject().selcectTileId(t[0], true);
    this._context.getTileMapObject().selcectTileId(t[1], true);
    this._context.clearModifier.modifyClear(e, EMergeType.Bomb);
    this._context.comboModifier.addCombo(1);
    return {
      addScore: this._context.scoreModifier.calAddScore(),
      combo: this._context.getGameData().getComboNum(),
      showCombo: this._context.comboChecker.canShowCombo()
    };
  }
  modifyBombCard_travel(e, t) {
    this._context.getTileMapObject().selcectTileId(t[0], true);
    this._context.getTileMapObject().selcectTileId(t[1], true);
    this._context.clearModifier.modifyClear(e, EMergeType.Bomb);
  }
  saveToGameDataFix() {
    var e = this,
      t = {},
      o = {},
      n = {},
      i = {};
    this._context.getTileMapObject().tileObjectMap().forEach(function (r) {
      var a = r.saveKey();
      if (e.isNeedSaveToGameData(r.type)) {
        t[a] = r.type;
      } else {
        e.isNeedSaveToGameDataByType(r.type) && (o[r.cardId] = r.type);
      }
      var l = e.getNeedSaveToGameDataExtra(r);
      l && (n[a] = l);
      if (r.originalResId !== r.resId) {
        i[r.type] || (i[r.type] = []);
        i[r.type].push({
          origin: r.originalResId,
          id: a
        });
      }
    });
    this._context.getGameData().setTileId2Type(JSON.stringify(t));
    this._context.getGameData().setCardId2Type(JSON.stringify(o));
    this._context.getGameData().setTileTypesExtra(JSON.stringify(n));
    this._context.getGameData().setReplaceInfo(i);
  }
  modifyFromLocalFix() {
    var e,
      t,
      o,
      n,
      i,
      r,
      c = this._context.getTileMapObject(),
      u = this._context.getGameData().getTileId2Type(),
      p = this._context.getGameData().getCardId2Type(),
      f = this._context.getGameData().getTileTypesExtra();
    if (u) try {
      var d = JSON.parse(u);
      for (var h in d) {
        var y = __read(h.split("-"), 3),
          m = y[0],
          v = y[1],
          g = y[2];
        c.setTileTypeByPos({
          x: Number(m),
          y: Number(v),
          z: Number(g)
        }, d[h]);
      }
    } catch (e) {}
    if (p) try {
      d = JSON.parse(p);
      var _ = c.tileObjectMap();
      try {
        for (var T = __values(_.values()), C = T.next(); !C.done; C = T.next()) {
          var b = C.value;
          d[b.cardId] && c.setTileType(b.id, d[b.cardId]);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          C && !C.done && (t = T.return) && t.call(T);
        } finally {
          if (e) throw e.error;
        }
      }
    } catch (e) {}
    if (f) try {
      d = JSON.parse(f);
      for (var h in d) {
        var E = __read(h.split("-"), 3);
        m = E[0], v = E[1], g = E[2];
        if (null === (i = d[h]) || void 0 === i ? void 0 : i[ETileTypesExtra.DuoxiaoCount]) {
          var S = Number(null === (r = d[h]) || void 0 === r ? void 0 : r[ETileTypesExtra.DuoxiaoCount]);
          c.setDuoxiaoCountByPos({
            x: Number(m),
            y: Number(v),
            z: Number(g)
          }, S);
        }
      }
    } catch (e) {}
    var I = this._context.getGameData().getReplaceInfo();
    for (var w in I) try {
      for (var B = (o = void 0, __values(I[w])), x = B.next(); !x.done; x = B.next()) {
        var M = x.value,
          O = __read(M.id.split("-"), 3);
        m = O[0], v = O[1], g = O[2];
        c.setTileOriginalResIdByPos({
          x: Number(m),
          y: Number(v),
          z: Number(g)
        }, M.origin);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        x && !x.done && (n = B.return) && n.call(B);
      } finally {
        if (o) throw o.error;
      }
    }
  }
}