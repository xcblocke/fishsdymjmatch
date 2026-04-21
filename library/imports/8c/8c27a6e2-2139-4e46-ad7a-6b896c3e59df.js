"use strict";
cc._RF.push(module, '8c27abiITlORq16a4lsPlnf', 'CollectSystem');
// Scripts/core/simulator/objects/CollectSystem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../../../gamePlay/user/UserModel");
var TileTypeEnum_1 = require("../../../simulator/constant/TileTypeEnum");
var CollectSystem = /** @class */ (function () {
    function CollectSystem(e) {
        this._collectTargetTypes = [];
        this._allCount = 0;
        this._collectCardIdMap = new Map();
        this._tempCollectIds = [];
        this._tileMapObject = null;
        this._tileMapObject = e;
    }
    Object.defineProperty(CollectSystem.prototype, "allCount", {
        get: function () {
            return this._allCount;
        },
        enumerable: false,
        configurable: true
    });
    CollectSystem.prototype.makeCardIdKey = function (e, t) {
        return e === TileTypeEnum_1.ETileType.RollCard ? "" + e : e + "_" + t;
    };
    CollectSystem.prototype.stringToTileType = function (e) {
        if (Object.values(TileTypeEnum_1.ETileType).includes(e))
            return e;
    };
    CollectSystem.prototype.setCollectTargetTypes = function (e) {
        var t, o, n = new Array();
        if (e) {
            var r = e.split(",");
            try {
                for (var a = __values(r), l = a.next(); !l.done; l = a.next()) {
                    var s = l.value;
                    s && n.push(this.stringToTileType(s));
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (o = a.return) && o.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        this._collectTargetTypes = n;
    };
    CollectSystem.prototype.recordCollectTargetIds = function (e) {
        if (e) {
            this.deserializeData(e);
        }
        else {
            this.generateCollectTargets();
        }
    };
    CollectSystem.prototype.generateCollectTargets = function () {
        var e = this;
        this._collectCardIdMap.clear();
        this._allCount = 0;
        this._tileMapObject.tileObjectMap().forEach(function (t) {
            if (t.isValid && e._collectTargetTypes.includes(t.type)) {
                var o = t.type, n = t.resId, i = t.cardId, r = e.makeCardIdKey(o, i);
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
    };
    CollectSystem.prototype.saveCollectData = function () {
        var e = this.serializeData();
        UserModel_1.default.getInstance().travelData.setCollectData(e);
    };
    CollectSystem.prototype.addCollectTarget = function (e) {
        var t, o;
        if (e) {
            var n = e.tileIds || [];
            try {
                for (var r = __values(n), a = r.next(); !a.done; a = r.next()) {
                    var l = a.value, s = this._tileMapObject.getTileObject(l);
                    if (s && this._collectTargetTypes.includes(s.type)) {
                        var c = s.type, u = s.cardId, p = this.makeCardIdKey(c, u), f = this._collectCardIdMap.get(p);
                        if (f) {
                            f.count--;
                            f.count;
                        }
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (o = r.return) && o.call(r);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this._tempCollectIds.push(e);
            this.saveCollectData();
        }
    };
    CollectSystem.prototype.getCollectTempInfo = function (e) {
        if (e === void 0) { e = true; }
        var t = __spreadArrays(this._tempCollectIds);
        e && (this._tempCollectIds = []);
        return t;
    };
    CollectSystem.prototype.isAllCollected = function () {
        var e, t;
        try {
            for (var o = __values(this._collectCardIdMap.values()), n = o.next(); !n.done; n = o.next())
                if (n.value.count > 0)
                    return false;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    CollectSystem.prototype.getCollectDetailsByType = function (e) {
        var t = [];
        this._collectCardIdMap.forEach(function (o) {
            o.type === e && t.push(Object.assign({}, o));
        });
        return t;
    };
    CollectSystem.prototype.getCollectDetailByCardId = function (e, t) {
        var o = this.makeCardIdKey(e, t), i = this._collectCardIdMap.get(o);
        return i ? Object.assign({}, i) : null;
    };
    CollectSystem.prototype.getCollectCountByCardId = function (e, t) {
        var o = this.makeCardIdKey(e, t), n = this._collectCardIdMap.get(o);
        return n ? n.count : 0;
    };
    CollectSystem.prototype.getAllCollectDetails = function () {
        return Array.from(this._collectCardIdMap.values()).map(function (e) {
            return Object.assign({}, e);
        });
    };
    CollectSystem.prototype.getCollectCountByType = function (e) {
        var t = 0;
        this._collectCardIdMap.forEach(function (o) {
            o.type === e && (t += o.count);
        });
        return t;
    };
    CollectSystem.prototype.serializeData = function () {
        try {
            var e = Array.from(this._collectCardIdMap.entries()).map(function (e) {
                var t = __read(e, 2), o = t[0], n = t[1];
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
        }
        catch (e) {
            return "";
        }
    };
    CollectSystem.prototype.deserializeData = function (e) {
        var t = this;
        try {
            if (!e)
                return;
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
        }
        catch (e) { }
    };
    return CollectSystem;
}());
exports.default = CollectSystem;

cc._RF.pop();