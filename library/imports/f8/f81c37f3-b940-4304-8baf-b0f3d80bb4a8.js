"use strict";
cc._RF.push(module, 'f81c3fzuUBDBIuvsPPYC7So', 'RankCardType');
// Scripts/tileTypes/RankCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RankCardType = void 0;
var UserModel_1 = require("../gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var RankCardType = /** @class */ (function () {
    function RankCardType() {
    }
    RankCardType.modify = function (t) {
        RankCardType.fixModify(t);
    };
    RankCardType.saveToGameData = function (e, t) {
        e.gameType === UserModel_1.default.getInstance().getMainGameType() && e.getGameData().setRankCardCount(t);
    };
    RankCardType.fixModify = function (t) {
        var o, n, r = t.getTileMapObject(), s = new Map();
        try {
            for (var c = __values(r.aliveTiles()), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (p.checkIsNormal()) {
                    var f = p.cardId;
                    s.has(f) || s.set(f, []);
                    s.get(f).push(p);
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
        if (0 !== s.size) {
            var d = Array.from(s.values());
            d.sort(function (e, t) {
                return t.length - e.length;
            });
            for (var h = t.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2, y = [], m = [], v = d.length - 1; v >= 0; v--) {
                var g = d[v];
                if (g.length === h) {
                    y = g;
                    break;
                }
                g.length >= h && (m = g);
            }
            0 === y.length && m.length > 0 && (y = m);
            0 === y.length && (h = (y = d[t.randomGenerator.randomIntInclusive(0, d.length - 1)]).length);
            var _ = Math.min(h, y.length);
            for (v = 0; v < _; v++) {
                var T = y[v];
                r.changeTileResId(T.id, GameTypeEnums_1.ResId.emRankId);
                r.setTileType(T.id, TileTypeEnum_1.ETileType.RankCard);
            }
            RankCardType.saveToGameData(t, _);
        }
    };
    __decorate([
        mj.traitEvent("RankCardType_modify")
    ], RankCardType, "modify", null);
    return RankCardType;
}());
exports.RankCardType = RankCardType;

cc._RF.pop();