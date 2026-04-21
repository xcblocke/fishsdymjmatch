"use strict";
cc._RF.push(module, 'eea002Xu+JEv5fuHwQZguL8', 'Tile2DianZanChecker');
// Scripts/process/dianzan/Tile2DianZanChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DianZanChecker = exports.EDianZanCondition = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var EDianZanCondition;
(function (EDianZanCondition) {
    EDianZanCondition[EDianZanCondition["None"] = 0] = "None";
    EDianZanCondition[EDianZanCondition["ContinueRollCard"] = 1] = "ContinueRollCard";
    EDianZanCondition[EDianZanCondition["SlotBarMatchNoRollCard"] = 2] = "SlotBarMatchNoRollCard";
    EDianZanCondition[EDianZanCondition["UnlockRollCardCanDianZan"] = 3] = "UnlockRollCardCanDianZan";
})(EDianZanCondition = exports.EDianZanCondition || (exports.EDianZanCondition = {}));
var Tile2DianZanChecker = /** @class */ (function (_super) {
    __extends(Tile2DianZanChecker, _super);
    function Tile2DianZanChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2DianZanChecker.prototype.isAllClearing = function () {
        var e, t = this._context.getGameData();
        return t && (null === (e = t.getHasTriggeredAllClear) || void 0 === e ? void 0 : e.call(t)) || false;
    };
    Tile2DianZanChecker.prototype.isCheckDianZan = function () {
        return false;
    };
    Tile2DianZanChecker.prototype.isCheckDZState = function () {
        return false;
    };
    Tile2DianZanChecker.prototype.checkContinueRollCard = function (e) {
        if (!this.isCheckDianZan())
            return false;
        if (this.isAllClearing())
            return false;
        var t = this._context.getTileMapObject(), o = (null == e ? void 0 : e.length) || 0;
        if (o >= 2) {
            var n = t.getTileObjectByPosId(e[o - 1]), i = t.getTileObjectByPosId(e[o - 2]);
            if (i && n && n.isValid && i.isValid && i.cardId == n.cardId && (i.checkHasType(TileTypeEnum_1.ETileType.RollCard) || n.checkHasType(TileTypeEnum_1.ETileType.RollCard)))
                return true;
        }
        return false;
    };
    Tile2DianZanChecker.prototype.checkSlotBarCanMatch = function (e, t) {
        if (t === void 0) { t = true; }
        var o, n, i, r;
        if (!this.isCheckDianZan())
            return false;
        if (this.isAllClearing())
            return false;
        if (((null == e ? void 0 : e.length) || 0) < 1)
            return false;
        var l = this._context.getTileMapObject();
        l.updateCanMatchTiles();
        var c = l.getCanMatchTiles();
        try {
            for (var u = __values(e), p = u.next(); !p.done; p = u.next()) {
                var f = p.value, d = l.getTileObjectByPosId(f);
                if (d && d.isValid) {
                    var h = c.get(d.cardId);
                    if (h && h.length >= 2) {
                        if (!t)
                            return true;
                        var y = true;
                        try {
                            for (var m = (i = void 0, __values(h)), v = m.next(); !v.done; v = m.next()) {
                                var g = v.value;
                                if (g.checkHasType(TileTypeEnum_1.ETileType.RollCard) && g.getIsBack()) {
                                    y = false;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            i = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                v && !v.done && (r = m.return) && r.call(m);
                            }
                            finally {
                                if (i)
                                    throw i.error;
                            }
                        }
                        if (y)
                            return true;
                    }
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                p && !p.done && (n = u.return) && n.call(u);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    Tile2DianZanChecker.prototype.checkLockRollCard = function () {
        var e, t;
        if (this.isCheckDZState() && !this.isAllClearing()) {
            var o = this._context.tile2SlotBarData, n = this.context.getTileMapObject(), i = n.getValidTileObjects();
            try {
                for (var r = __values(i), l = r.next(); !l.done; l = r.next()) {
                    var c = l.value;
                    c.checkHasType(TileTypeEnum_1.ETileType.RollCard) && c.getIsBack() && n.isCardLock(c) > 0 && o.addRollCardLockTileId(c.id, c.cardId);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    l && !l.done && (t = r.return) && t.call(r);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    Tile2DianZanChecker.prototype.checkAddTileCanDianZan = function (e, t) {
        var o, n;
        if (!this.isCheckDianZan())
            return false;
        if (!this.isCheckDZState())
            return false;
        if (this.isAllClearing())
            return false;
        var i = this._context.tile2SlotBarData, r = i.canDianZanTileIds;
        if (!t || 0 === t.length || !r || 0 === r.length)
            return false;
        var l = this.context.getTileMapObject(), s = 0;
        try {
            for (var c = __values(t), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (!e || 0 == e.length || !e.includes(p)) {
                    var f = l.getTileObjectByPosId(p);
                    f && f.isValid && r.includes(f.id) && s++;
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.canDianZanTileIds = null;
        return s > 0;
    };
    Tile2DianZanChecker.prototype.checkUnlockRollCard = function (e) {
        var t, o, n, i;
        if (this.isCheckDZState() && !this.isAllClearing()) {
            var r = this._context.tile2SlotBarData, l = r.getRollCardLockTileIds();
            if (l && 0 !== l.length) {
                var s = this.context.getTileMapObject(), c = [];
                try {
                    for (var u = __values(l), p = u.next(); !p.done; p = u.next()) {
                        var f = p.value, d = s.getTileObject(f);
                        if (d && d.isValid) {
                            if (e && e.length > 0 && e.includes(d.saveKey()))
                                r.removeRollCardLockTileId(f);
                            else if (0 === s.isCardLock(d)) {
                                r.removeRollCardLockTileId(f);
                                if (e && 3 == e.length) {
                                    var h = false;
                                    try {
                                        for (var y = (n = void 0, __values(e)), m = y.next(); !m.done; m = y.next()) {
                                            var v = m.value, g = s.getTileObjectByPosId(v);
                                            if (g && g.isValid && g.cardId == d.cardId) {
                                                h = true;
                                                break;
                                            }
                                        }
                                    }
                                    catch (e) {
                                        n = {
                                            error: e
                                        };
                                    }
                                    finally {
                                        try {
                                            m && !m.done && (i = y.return) && i.call(y);
                                        }
                                        finally {
                                            if (n)
                                                throw n.error;
                                        }
                                    }
                                    h && c.push(d.id);
                                }
                            }
                        }
                        else
                            r.removeRollCardLockTileId(f);
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (o = u.return) && o.call(u);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                r.canDianZanTileIds = c;
                r.clearCardLockData();
            }
            else
                r.clearCardLockData();
        }
    };
    __decorate([
        mj.traitEvent("T2DianZCheck_isDianZan")
    ], Tile2DianZanChecker.prototype, "isCheckDianZan", null);
    __decorate([
        mj.traitEvent("T2DianZCheck_isChkDZState")
    ], Tile2DianZanChecker.prototype, "isCheckDZState", null);
    return Tile2DianZanChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2DianZanChecker = Tile2DianZanChecker;

cc._RF.pop();