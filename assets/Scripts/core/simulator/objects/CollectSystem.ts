import UserModel from '../../../gamePlay/user/UserModel';
import { ETileType } from '../../../simulator/constant/TileTypeEnum';
export default class CollectSystem {
  _collectTargetTypes = [];
  _allCount = 0;
  _collectCardIdMap = new Map();
  _tempCollectIds = [];
  _tileMapObject = null;
  get allCount() {
    return this._allCount;
  }
  constructor(e) {
    this._tileMapObject = e;
  }
  makeCardIdKey(e, t) {
    return e === ETileType.RollCard ? "" + e : e + "_" + t;
  }
  stringToTileType(e) {
    if (Object.values(ETileType).includes(e)) return e;
  }
  setCollectTargetTypes(e) {
    var t,
      o,
      n = new Array();
    if (e) {
      var r = e.split(",");
      try {
        for (var a = __values(r), l = a.next(); !l.done; l = a.next()) {
          var s = l.value;
          s && n.push(this.stringToTileType(s));
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
    }
    this._collectTargetTypes = n;
  }
  recordCollectTargetIds(e) {
    if (e) {
      this.deserializeData(e);
    } else {
      this.generateCollectTargets();
    }
  }
  generateCollectTargets() {
    var e = this;
    this._collectCardIdMap.clear();
    this._allCount = 0;
    this._tileMapObject.tileObjectMap().forEach(function (t) {
      if (t.isValid && e._collectTargetTypes.includes(t.type)) {
        var o = t.type,
          n = t.resId,
          i = t.cardId,
          r = e.makeCardIdKey(o, i);
        e._collectCardIdMap.has(r) || e._collectCardIdMap.set(r, {
          type: o,
          resId: n,
          cardId: i,
          resName: t.resName,
          count: 0,
          allCount: 0
        });
        var a = e._collectCardIdMap.get(r);
        a.count++;
        a.allCount++;
        e._allCount++;
      }
    });
    this.saveCollectData();
  }
  saveCollectData() {
    var e = this.serializeData();
    UserModel.getInstance().travelData.setCollectData(e);
  }
  addCollectTarget(e) {
    var t, o;
    if (e) {
      var n = e.tileIds || [];
      try {
        for (var r = __values(n), a = r.next(); !a.done; a = r.next()) {
          var l = a.value,
            s = this._tileMapObject.getTileObject(l);
          if (s && this._collectTargetTypes.includes(s.type)) {
            var c = s.type,
              u = s.cardId,
              p = this.makeCardIdKey(c, u),
              f = this._collectCardIdMap.get(p);
            if (f) {
              f.count--;
              f.count;
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
      this._tempCollectIds.push(e);
      this.saveCollectData();
    }
  }
  getCollectTempInfo(e = true) {
    var t = [...this._tempCollectIds];
    e && (this._tempCollectIds = []);
    return t;
  }
  isAllCollected() {
    var e, t;
    try {
      for (var o = __values(this._collectCardIdMap.values()), n = o.next(); !n.done; n = o.next()) if (n.value.count > 0) return false;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    return true;
  }
  getCollectDetailsByType(e) {
    var t = [];
    this._collectCardIdMap.forEach(function (o) {
      o.type === e && t.push(Object.assign({}, o));
    });
    return t;
  }
  getCollectDetailByCardId(e, t) {
    var o = this.makeCardIdKey(e, t),
      i = this._collectCardIdMap.get(o);
    return i ? Object.assign({}, i) : null;
  }
  getCollectCountByCardId(e, t) {
    var o = this.makeCardIdKey(e, t),
      n = this._collectCardIdMap.get(o);
    return n ? n.count : 0;
  }
  getAllCollectDetails() {
    return Array.from(this._collectCardIdMap.values()).map(function (e) {
      return Object.assign({}, e);
    });
  }
  getCollectCountByType(e) {
    var t = 0;
    this._collectCardIdMap.forEach(function (o) {
      o.type === e && (t += o.count);
    });
    return t;
  }
  serializeData() {
    try {
      var e = Array.from(this._collectCardIdMap.entries()).map(function (e) {
        var t = __read(e, 2),
          o = t[0],
          n = t[1];
        return {
          key: o,
          type: n.type,
          resId: n.resId,
          cardId: n.cardId,
          resName: n.resName,
          count: n.count,
          allCount: n.allCount
        };
      });
      return JSON.stringify(e);
    } catch (e) {
      return "";
    }
  }
  deserializeData(e) {
    var t = this;
    try {
      if (!e) return;
      var o = JSON.parse(e);
      this._collectCardIdMap.clear();
      this._allCount = 0;
      Array.isArray(o) && o.forEach(function (e) {
        t._collectCardIdMap.set(e.key, {
          type: e.type,
          resId: e.resId,
          cardId: e.cardId || 0,
          resName: e.resName || "",
          count: e.count,
          allCount: e.allCount
        });
        t._allCount += e.count;
      });
      var n = new Set();
      this._collectCardIdMap.forEach(function (e) {
        n.add(e.type);
      });
      this._collectTargetTypes = Array.from(n);
    } catch (e) {}
  }
}