"use strict";
cc._RF.push(module, 'a7741cx/g1KGqeJNyWuefyO', 'GenRankCardTrait');
// subpackages/l_genrankcard/Scripts/GenRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankCardType_1 = require("../../../Scripts/tileTypes/RankCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GenRankCardTrait = /** @class */ (function (_super) {
    __extends(GenRankCardTrait, _super);
    function GenRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenRankCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GenRankCardTrait.prototype.onRankCardType_modify = function (e, t) {
        var r, n, o = e.args[0], a = (e.ins, o.getTileMapObject()), u = new Map();
        try {
            for (var p = __values(a.aliveTiles()), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                if (d.type === TileTypeEnum_1.ETileType.Normal) {
                    var y = d.cardId;
                    u.has(y) || u.set(y, []);
                    u.get(y).push(d);
                }
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (n = p.return) && n.call(p);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (0 !== u.size) {
            var h = Array.from(u.values());
            h.sort(function (e, t) {
                return t.length - e.length;
            });
            for (var T = o.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2, v = [], m = 0; m < h.length; m++)
                if (h[m].length == T) {
                    v = h[m];
                    break;
                }
            0 == v.length && (v = h[o.randomGenerator.randomIntInclusive(0, h.length - 1)]);
            for (m = 0; m < v.length; m++) {
                var _ = v[m];
                _.resId;
                a.changeTileResId(_.id, GameTypeEnums_1.ResId.emRankId);
                a.setTileType(_.id, TileTypeEnum_1.ETileType.RankCard);
            }
            RankCardType_1.RankCardType.saveToGameData(o, v.length);
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    GenRankCardTrait.traitKey = "GenRankCard";
    GenRankCardTrait = __decorate([
        mj.trait,
        mj.class("GenRankCardTrait")
    ], GenRankCardTrait);
    return GenRankCardTrait;
}(Trait_1.default));
exports.default = GenRankCardTrait;

cc._RF.pop();