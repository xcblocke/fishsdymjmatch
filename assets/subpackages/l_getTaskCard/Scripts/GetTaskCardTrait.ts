import LevelGenRule from '../../../Scripts/core/simulator/config/LevelGenRule';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
enum c {
  USE_MAX = 1,
  USE_MIN = 2,
  Random = 3,
}
@mj.trait
@mj.class("GetTaskCardTrait")
export default class GetTaskCardTrait extends Trait {
  _isReplace = false;
  _targetCard = -1;
  _useType = c.USE_MAX;
  static traitKey = "GetTaskCard";
  get useType() {
    return null != this._traitData.useType ? this._traitData.useType : this._useType;
  }
  getIntersection(e, t) {
    var r = new Set(t);
    return e.filter(function (e) {
      return r.has(e);
    });
  }
  isTaskOpen() {
    var e = mj.getClassByName("TaskModel");
    return !!e && e.getInstance().isTaskOpen();
  }
  onIptSetLv_reGenFacesAfter(e, t) {
    var r = e.ins,
      a = e.args[0].levelData;
    if (a.isNewGame && !a.isRestart && this._isReplace && this._targetCard > 0 && this.isTaskOpen()) {
      this.checkHasTargetCard(r.tileMapObject, this._targetCard) || this.replaceCard(r.tileMapObject, this._targetCard);
      this._isReplace = false;
      this._targetCard = -1;
    }
    t();
  }
  onTaskUtils_random(e, t) {
    var r = e.args[0],
      a = this.getTaskCard(r);
    if (-1 != a) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: a
      });
    } else {
      t();
    }
  }
  checkHasTargetCard(e, t) {
    var r,
      a,
      n = e.tileObjectMap();
    try {
      for (var o = __values(n.values()), s = o.next(); !s.done; s = o.next()) if (t == s.value.cardId) return true;
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (a = o.return) && a.call(o);
      } finally {
        if (r) throw r.error;
      }
    }
    return false;
  }
  replaceCard(e, t) {
    var r, a, n, o;
    if (!(t > 34)) {
      var s = e.tileObjectMap(),
        l = new Map();
      try {
        for (var u = __values(s.values()), f = u.next(); !f.done; f = u.next()) {
          var h = (_ = f.value).cardId;
          h <= 34 && ETileType.Normal == _.type && (l.has(h) ? l.set(h, l.get(h) + 1) : l.set(h, 1));
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (a = u.return) && a.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
      var p = Array.from(l.entries()).sort(function (e, t) {
        return t[1] - e[1];
      });
      if (0 != p.length) {
        var v;
        v = c.USE_MAX == this.useType ? p[0][0] : c.USE_MIN == this.useType ? p[p.length - 1][0] : p[Math.floor(Math.random() * p.length)][0];
        try {
          for (var g = __values(s.values()), y = g.next(); !y.done; y = g.next()) {
            var _;
            (_ = y.value).cardId == v && e.changeTileResId(_.id, this.convertCardId2ResId(t));
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            y && !y.done && (o = g.return) && o.call(g);
          } finally {
            if (n) throw n.error;
          }
        }
      }
    }
  }
  getTaskCard(e) {
    var t = UserModel.getInstance().getMainGameData().getLevelData(),
      r = LevelGenRule.genLevel(t),
      a = [...r.LevelTiles.keys()],
      n = this.generateCardIdList(a),
      o = UserModel.getInstance().travelData.getLevelData(),
      i = LevelGenRule.genLevel(o),
      s = [...i.LevelTiles.keys()],
      c = this.generateCardIdList(s);
    if (1 == UserModel.getInstance().getMainGameData().getLevelId()) {
      this._isReplace = true;
      this._targetCard = this.getCardByUseType(e, false);
      return this._targetCard;
    }
    var d = [];
    if (TravelGameModel.getInstance().isUnlocked()) {
      var f = this.getIntersection(e, c),
        p = this.getIntersection(e, n);
      0 == (d = this.getIntersection(f, n)).length && (0 == f.length ? (d = p).length : d = f);
    } else (d = this.getIntersection(e, n)).length;
    var g = d.length > 0,
      y = g ? d : e;
    this._isReplace = !g;
    this._targetCard = this.getCardByUseType(y, g);
    return this._targetCard;
  }
  getCardByUseType(e, t = true) {
    if (0 == e.length) return -1;
    if (!t) return e[Math.floor(Math.random() * e.length)];
    for (var r = UserModel.getInstance().getMainGameData().getLevelData(), a = LevelGenRule.genLevel(r), n = UserModel.getInstance().travelData.getLevelData(), o = LevelGenRule.genLevel(n), i = new Map(), s = 0; s < a.LevelData.length; s++) {
      var l = a.LevelData[s],
        d = this.convertResId2CardId(l.id);
      if (i.has(d)) {
        i.set(d, i.get(d) + 1);
      } else {
        i.set(d, 1);
      }
    }
    for (s = 0; s < o.LevelData.length; s++) {
      l = o.LevelData[s], d = this.convertResId2CardId(l.id);
      if (i.has(d)) {
        i.set(d, i.get(d) + 1);
      } else {
        i.set(d, 1);
      }
    }
    var f = [];
    for (s = 0; s < e.length; s++) {
      d = e[s];
      f.push({
        cardId: d,
        count: i.has(d) ? i.get(d) : 0
      });
    }
    f.sort(function (e, t) {
      return t.count - e.count;
    });
    if (c.USE_MAX == this.useType) {
      var h = f[0].count,
        p = f.filter(function (e) {
          return e.count === h;
        });
      return p[Math.floor(Math.random() * p.length)].cardId;
    }
    if (c.USE_MIN == this.useType) {
      var g = 0;
      for (s = f.length - 1; s >= 0; s--) if (f[s].count > 0) {
        g = f[s].count;
        break;
      }
      if (g > 0) {
        var y = f.filter(function (e) {
          return e.count === g;
        });
        return y[Math.floor(Math.random() * y.length)].cardId;
      }
      return f[Math.floor(Math.random() * f.length)].cardId;
    }
    return f[Math.floor(Math.random() * f.length)].cardId;
  }
  convertResId2CardId(e) {
    for (var t = CardUtil.getList(), r = 0; r < t.length; r++) {
      var a = t[r];
      if (a.id == e) return a.cardId;
    }
    return -1;
  }
  convertCardId2ResId(e) {
    for (var t = CardUtil.getList(), r = 0; r < t.length; r++) {
      var a = t[r];
      if (a.cardId == e) return a.id;
    }
    return -1;
  }
  generateCardIdList(e) {
    for (var t = [], r = 0; r < e.length; r++) {
      var a = this.convertResId2CardId(e[r]);
      a >= 0 && t.push(a);
    }
    return t;
  }
}