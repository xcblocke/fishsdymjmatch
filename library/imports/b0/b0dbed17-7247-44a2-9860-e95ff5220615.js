"use strict";
cc._RF.push(module, 'b0dbe0XckdEophg6V/1IgYV', 'DaxiaoCardType');
// Scripts/tileTypes/DaxiaoCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var DaxiaoCardType = /** @class */ (function () {
    function DaxiaoCardType() {
    }
    DaxiaoCardType.isGen = function () {
        return true;
    };
    DaxiaoCardType.modify = function (e) {
        var t, o, n = this;
        if (this.isGen(e)) {
            var a = e.getTileMapObject(), l = a.maxLayerIndex, s = null, c = a.aliveTiles().filter(function (t) {
                if (!t.checkIsNormal())
                    return false;
                if (l - t.layer > 1)
                    return false;
                if (n.checkInCenter()) {
                    s || (s = n.getCenterArea(e));
                    if (!n.checkInArea(s, t))
                        return false;
                }
                return true;
            }), u = e.randomGenerator, p = this.getCount(e), f = u.randomElements(c, p);
            try {
                for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
                    var y = h.value;
                    a.setTileType(y.id, TileTypeEnum_1.ETileType.DaxiaoCard);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    h && !h.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    DaxiaoCardType.getCenterArea = function (e) {
        var t, o, n = e.getTileMapObject().aliveTiles();
        if (0 === n.length)
            return null;
        var r = Infinity, a = -Infinity, l = Infinity, s = -Infinity;
        try {
            for (var c = __values(n), u = c.next(); !u.done; u = c.next()) {
                var p = u.value, f = p.gridPosX, d = p.gridPosY;
                f < r && (r = f);
                f + 1 > a && (a = f + 1);
                d < l && (l = d);
                d + 1 > s && (s = d + 1);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var h = 2 * this.getCenterRange()[0], y = 2 * this.getCenterRange()[1], m = a - r + 1, v = s - l + 1;
        return {
            startX: r + Math.floor((m - h) / 2),
            endX: r + Math.floor((m - h) / 2) + h - 1,
            startY: l + Math.floor((v - y) / 2),
            endY: l + Math.floor((v - y) / 2) + y - 1
        };
    };
    DaxiaoCardType.getCenterRange = function () {
        return [3, 3];
    };
    DaxiaoCardType.checkInArea = function (e, t) {
        if (!e)
            return false;
        for (var o = t.gridPosX, n = t.gridPosY, i = 0; i <= 1; i++)
            for (var r = 0; r <= 1; r++) {
                var a = o + i, l = n + r;
                if (a >= e.startX && a <= e.endX && l >= e.startY && l <= e.endY)
                    return true;
            }
        return false;
    };
    DaxiaoCardType.checkInCenter = function () {
        return false;
    };
    DaxiaoCardType.getCount = function () {
        return 1;
    };
    __decorate([
        mj.traitEvent("DaxiaoCardType_isGen")
    ], DaxiaoCardType, "isGen", null);
    __decorate([
        mj.traitEvent("DaxiaoCardType_cenRange")
    ], DaxiaoCardType, "getCenterRange", null);
    __decorate([
        mj.traitEvent("DaxiaoCardType_cInCenter")
    ], DaxiaoCardType, "checkInCenter", null);
    __decorate([
        mj.traitEvent("DaxiaoCardType_getCount")
    ], DaxiaoCardType, "getCount", null);
    return DaxiaoCardType;
}());
exports.default = DaxiaoCardType;

cc._RF.pop();