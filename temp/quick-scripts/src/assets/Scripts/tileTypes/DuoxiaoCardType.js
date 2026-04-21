"use strict";
cc._RF.push(module, '66c6eDMC0BK3qlaNaVHXnpm', 'DuoxiaoCardType');
// Scripts/tileTypes/DuoxiaoCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var DuoxiaoCardType = /** @class */ (function () {
    function DuoxiaoCardType() {
    }
    DuoxiaoCardType.modify = function (e) {
        var t, o, n = e.getTileMapObject(), a = n.maxLayerIndex, l = n.aliveTiles().filter(function (e) {
            return !(!e.checkIsNormal() || a - e.layer > 1);
        }), s = e.randomGenerator, c = this.getGenCountRange(), u = s.randomInt(c[0], c[1]), p = s.randomElements(l, u);
        if (p.length > 0)
            try {
                for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
                    var h = d.value, y = this.getCountRange(), m = s.randomInt(y[0], y[1]);
                    n.setDuoxiaoCount(h.id, m);
                    n.setTileType(h.id, TileTypeEnum_1.ETileType.DuoxiaoCard);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
    };
    DuoxiaoCardType.getGenCountRange = function () {
        return [1, 3];
    };
    DuoxiaoCardType.getCountRange = function () {
        return [4, 6];
    };
    __decorate([
        mj.traitEvent("DuoxiaoCt_modify")
    ], DuoxiaoCardType, "modify", null);
    __decorate([
        mj.traitEvent("DuoxiaoCt_genCountRange")
    ], DuoxiaoCardType, "getGenCountRange", null);
    __decorate([
        mj.traitEvent("DuoxiaoCt_countRange")
    ], DuoxiaoCardType, "getCountRange", null);
    return DuoxiaoCardType;
}());
exports.default = DuoxiaoCardType;

cc._RF.pop();