"use strict";
cc._RF.push(module, '38ba5PAfqRBO5xYD4ZrUBW3', 'LevelGenRule');
// Scripts/core/simulator/config/LevelGenRule.ts

Object.defineProperty(exports, "__esModule", { value: true });
var LevelUtil_1 = require("./LevelUtil");
var CardUtil_1 = require("../../../gamePlay/user/CardUtil");
var LevelGenRule = /** @class */ (function () {
    function LevelGenRule() {
    }
    LevelGenRule.initCardIdMapping = function () {
        var e, t;
        if (!(this.cardIdToResIdMap.size > 0)) {
            var o = CardUtil_1.default.getList();
            try {
                for (var n = __values(o), r = n.next(); !r.done; r = n.next()) {
                    var l = r.value;
                    this.cardIdToResIdMap.set(l.cardId, l.id);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    r && !r.done && (t = n.return) && t.call(n);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    LevelGenRule.genLevel = function (e) {
        var t, o, n = {
            LevelTiles: new Map(),
            LevelData: []
        }, a = LevelUtil_1.LevelUtil.ConvertLongStringToBitArrayNew(e), l = LevelUtil_1.LevelUtil.DeserializeNew(a);
        try {
            for (var s = __values(l), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = u.TileIndex, f = {
                    id: p,
                    pos: {
                        x: u.Coordinate.Y,
                        y: u.Coordinate.X,
                        z: u.Coordinate.Z
                    },
                    isAlive: true
                };
                n.LevelTiles.set(f.id, f);
                var d = {
                    id: p,
                    pos: {
                        x: u.Coordinate.Y,
                        y: u.Coordinate.X,
                        z: u.Coordinate.Z
                    },
                    isAlive: true
                };
                n.LevelData.push(d);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n;
    };
    LevelGenRule.serializeTilesToInlineString = function (e) {
        var t, o, n, a;
        if (!e || 0 === e.length)
            return "";
        var l = e.filter(function (e) {
            return true === e.isAlive;
        });
        if (0 === l.length)
            return "";
        var s = 0, c = 0, u = 0;
        try {
            for (var p = __values(l), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                s = Math.max(s, d.pos.y);
                c = Math.max(c, d.pos.x);
                u = Math.max(u, d.pos.z);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var h = l.length, y = (s + 1) * (c + 1), m = y * (u + 1), v = LevelUtil_1.LevelUtil.SectorSize_Prefix + m + LevelUtil_1.LevelUtil.SectorSize_ExternalId + LevelUtil_1.LevelUtil.Size_EachTile * h, g = new LevelUtil_1.CustomBitArray(v);
        LevelUtil_1.LevelUtil.WriteBits(g, 0, s, LevelUtil_1.LevelUtil.SectorSize_MaxX);
        LevelUtil_1.LevelUtil.WriteBits(g, LevelUtil_1.LevelUtil.SectorSize_MaxX, c, LevelUtil_1.LevelUtil.SectorSize_MaxY);
        LevelUtil_1.LevelUtil.WriteBits(g, LevelUtil_1.LevelUtil.SectorSize_MaxX + LevelUtil_1.LevelUtil.SectorSize_MaxY, h, LevelUtil_1.LevelUtil.SectorSize_Count);
        var _ = LevelUtil_1.LevelUtil.SectorSize_Prefix;
        try {
            for (var T = __values(l), C = T.next(); !C.done; C = T.next()) {
                var b = (d = C.value).pos.y, E = d.pos.x, S = d.pos.z * y + b * (c + 1) + E;
                g.set(_ + S, true);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (a = T.return) && a.call(T);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        for (var I = _ + m + LevelUtil_1.LevelUtil.SectorSize_ExternalId, w = 0; w < l.length; w++) {
            var B = l[w].id;
            LevelUtil_1.LevelUtil.WriteBits(g, I + w * LevelUtil_1.LevelUtil.Size_EachTile, B, LevelUtil_1.LevelUtil.Size_EachTile);
        }
        return g.toUInt64Array().map(function (e) {
            return e.toString();
        }).join(",");
    };
    LevelGenRule.convertCardIdToResId = function (e) {
        0 === this.cardIdToResIdMap.size && this.initCardIdMapping();
        var t = this.cardIdToResIdMap.get(e);
        return void 0 !== t ? t : 0;
    };
    LevelGenRule.convertLevelStrCardIdToResId = function (e) {
        var t = this, o = this.genLevel(e).LevelData.map(function (e) {
            var o = e.id;
            return {
                id: t.convertCardIdToResId(o),
                pos: e.pos,
                isAlive: e.isAlive
            };
        });
        return this.serializeTilesToInlineString(o);
    };
    LevelGenRule.cardIdToResIdMap = new Map();
    LevelGenRule = __decorate([
        mj.class("LevelGenRule")
    ], LevelGenRule);
    return LevelGenRule;
}());
exports.default = LevelGenRule;

cc._RF.pop();