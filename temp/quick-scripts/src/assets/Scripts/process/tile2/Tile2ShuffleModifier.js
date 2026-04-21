"use strict";
cc._RF.push(module, '337bb9noSZEz5MqbhsQ3FBd', 'Tile2ShuffleModifier');
// Scripts/process/tile2/Tile2ShuffleModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2UnityShuffleStrategy_1 = require("./Tile2UnityShuffleStrategy");
var Tile2ShuffleModifier = /** @class */ (function (_super) {
    __extends(Tile2ShuffleModifier, _super);
    function Tile2ShuffleModifier(t) {
        return _super.call(this, t) || this;
    }
    Tile2ShuffleModifier.prototype.shuffle = function () {
        Date.now();
        var e = new Tile2UnityShuffleStrategy_1.Tile2UnityShuffleStrategy(this._context), t = e.collectTiles(), o = e.collectState(t), n = e.collectConstraints(t);
        this.computeAndApply(t, o, n, e);
        this.restoreFixedTypeSlots(n.fixedTypeSlots);
        this.afterShuffle();
    };
    Tile2ShuffleModifier.prototype.computeAndApply = function (e, t, o, n) {
        var i = n.compute(t, o);
        if (i) {
            n.applySwap(i, o);
        }
        else {
            n.hasSolution();
        }
    };
    Tile2ShuffleModifier.prototype.afterShuffle = function () { };
    Tile2ShuffleModifier.prototype.snapshotDistribution = function (e) {
        var t, o, n = new Map();
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                n.set(l.cardId, (n.get(l.cardId) || 0) + 1);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    Tile2ShuffleModifier.prototype.fmtDistribution = function (e) {
        return Array.from(e.entries()).sort(function (e, t) {
            return e[0] - t[0];
        }).map(function (e) {
            var t = __read(e, 2);
            return t[0] + "x" + t[1];
        }).join(", ");
    };
    Tile2ShuffleModifier.prototype.logSnapshot = function () { };
    Tile2ShuffleModifier.prototype.logSpecialTiles = function (e, t) {
        var o, n, i = [];
        try {
            for (var r = __values(t), l = r.next(); !l.done; l = r.next()) {
                var s = l.value;
                if (0 !== s.getTypeBits()) {
                    var c = [];
                    s.checkHasType(TileTypeEnum_1.ETileType.RollCard) && c.push("翻转");
                    s.checkHasType(TileTypeEnum_1.ETileType.Bomb) && c.push("炸弹");
                    s.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && c.push("多消(" + s.getDuoxiaoCount() + ")");
                    s.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) && c.push("大消");
                    c.length > 0 && i.push(s.id + "(" + s.gridPosX + "," + s.gridPosY + "," + s.layer + "):[" + c.join("+") + "]");
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
                l && !l.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.length;
    };
    Tile2ShuffleModifier.prototype.logDistributionDiff = function (e, t) {
        var o, n;
        this.logSnapshot("洗牌后", t);
        var i = [], r = new Set(__spreadArrays(e.keys(), t.keys()));
        try {
            for (var l = __values(r), c = l.next(); !c.done; c = l.next()) {
                var u = c.value, p = e.get(u) || 0, f = t.get(u) || 0;
                p !== f && i.push(u + ": " + p + "→" + f);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        i.length;
    };
    Tile2ShuffleModifier.prototype.restoreFixedTypeSlots = function (e) {
        var t, o, n, i;
        if (0 !== e.length) {
            var r = this._context.getTileMapObject();
            r.tileObjectMap();
            try {
                for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    r.setTileType_removeTypes(c.id, c.types);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (o = l.return) && o.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            try {
                for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
                    c = f.value;
                    r.setTileTypeByPos_addTypes({
                        x: c.x,
                        y: c.y,
                        z: c.z
                    }, c.types);
                    if (c.types.includes(TileTypeEnum_1.ETileType.RollCard)) {
                        var d = r.getAliveTileByPos({
                            x: c.x,
                            y: c.y,
                            z: c.z
                        });
                        d && d.setIsBack(true);
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
                    f && !f.done && (i = p.return) && i.call(p);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
    };
    __decorate([
        mj.traitEvent("Tile2ShuffleMod_shuffle")
    ], Tile2ShuffleModifier.prototype, "shuffle", null);
    __decorate([
        mj.traitEvent("Tile2ShuffleMod_compute")
    ], Tile2ShuffleModifier.prototype, "computeAndApply", null);
    __decorate([
        mj.traitEvent("Tile2ShuffleMod_afShuf")
    ], Tile2ShuffleModifier.prototype, "afterShuffle", null);
    return Tile2ShuffleModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ShuffleModifier = Tile2ShuffleModifier;

cc._RF.pop();