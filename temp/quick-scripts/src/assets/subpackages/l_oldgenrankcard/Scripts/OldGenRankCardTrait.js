"use strict";
cc._RF.push(module, 'ae00cbDZGxB16utgVU3/MKV', 'OldGenRankCardTrait');
// subpackages/l_oldgenrankcard/Scripts/OldGenRankCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var RankCardType_1 = require("../../../Scripts/tileTypes/RankCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var OldGenRankCardTrait = /** @class */ (function (_super) {
    __extends(OldGenRankCardTrait, _super);
    function OldGenRankCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OldGenRankCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    OldGenRankCardTrait.prototype.onRankCardType_modify = function (e, r) {
        var t, n, o = e.args[0], a = (e.ins, o.getTileMapObject()), u = new Map();
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
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (n = p.return) && n.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 !== u.size) {
            var T = Array.from(u.values());
            T.sort(function (e, r) {
                return r.length - e.length;
            });
            var v = o.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2;
            if (T[0].length < v)
                r({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            else {
                for (var _ = 0; _ < v; _++) {
                    var h = T[0][_];
                    h.resId;
                    a.changeTileResId(h.id, GameTypeEnums_1.ResId.emRankId);
                    a.setTileType(h.id, TileTypeEnum_1.ETileType.RankCard);
                }
                RankCardType_1.RankCardType.saveToGameData(o, v);
                r({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
        }
        else
            r({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
    };
    OldGenRankCardTrait.traitKey = "OldGenRankCard";
    OldGenRankCardTrait = __decorate([
        mj.trait,
        mj.class("OldGenRankCardTrait")
    ], OldGenRankCardTrait);
    return OldGenRankCardTrait;
}(Trait_1.default));
exports.default = OldGenRankCardTrait;

cc._RF.pop();