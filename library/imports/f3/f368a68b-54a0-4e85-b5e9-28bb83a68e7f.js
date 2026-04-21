"use strict";
cc._RF.push(module, 'f368aaLVKBOhbXpKLuDpo5/', 'ShuffleFixRollTrait');
// subpackages/l_shuffleFixRoll/Scripts/ShuffleFixRollTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var c = [TileTypeEnum_1.ETileType.Bomb, TileTypeEnum_1.ETileType.DuoxiaoCard, TileTypeEnum_1.ETileType.DaxiaoCard];
var ShuffleFixRollTrait = /** @class */ (function (_super) {
    __extends(ShuffleFixRollTrait, _super);
    function ShuffleFixRollTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShuffleFixRollTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ShuffleFixRollTrait.prototype.isSpecialPair = function (e) {
        var t = [GameTypeEnums_1.ResId.emBombCardId, GameTypeEnums_1.ResId.emRankId];
        return !!(t.includes(e[0].resId) || t.includes(e[1].resId) || c.includes(e[0].type) || c.includes(e[1].type));
    };
    ShuffleFixRollTrait.prototype.onShuffleMod_assignResIds = function (e, t) {
        var r, o, i = e.args[0], n = e.args[1], u = e.ins._context, p = [], c = [];
        try {
            for (var y = __values(n), d = y.next(); !d.done; d = y.next()) {
                var h = d.value;
                if (this.isSpecialPair(h)) {
                    c.push(h);
                }
                else {
                    p.push(h);
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
                d && !d.done && (o = y.return) && o.call(y);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var T = __spreadArrays(p, c);
        this.randomShuffleList(T);
        for (var v = [], _ = 0; 2 * _ + 1 < i.length; _++)
            v.push([i[2 * _], i[2 * _ + 1]]);
        v.sort(function (e, t) {
            var r = e[0].type === TileTypeEnum_1.ETileType.RollCard || e[1].type === TileTypeEnum_1.ETileType.RollCard, o = t[0].type === TileTypeEnum_1.ETileType.RollCard || t[1].type === TileTypeEnum_1.ETileType.RollCard;
            return r && !o ? -1 : !r && o ? 1 : 0;
        });
        for (var m = 0, R = 0, g = 0, x = Date.now(); T.length > 0 && m < v.length && g < 10000;) {
            g++;
            if (Date.now() - x > 3000)
                break;
            var E = __read(v[m], 2), b = E[0], C = E[1], w = T[0], S = __read(w, 2), I = S[0], j = S[1], O = b.type === TileTypeEnum_1.ETileType.RollCard || C.type === TileTypeEnum_1.ETileType.RollCard, F = this.isSpecialPair(w);
            if (O && F) {
                R++;
                var D = T.shift();
                T.push(D);
                if (R > T.length) {
                    T.shift();
                    m++;
                    R = 0;
                    continue;
                }
            }
            else {
                R = 0;
                if (b.type === TileTypeEnum_1.ETileType.RollCard)
                    b.changeResId(I.resId);
                else {
                    var P = I.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : I.type;
                    u.getTileMapObject().setTileType(b.id, P);
                    b.changeResId(I.resId);
                    b.setDuoxiaoCount(I.duoxiaoCount || 0);
                }
                if (C.type === TileTypeEnum_1.ETileType.RollCard)
                    C.changeResId(j.resId);
                else {
                    var k = j.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : j.type;
                    u.getTileMapObject().setTileType(C.id, k);
                    C.changeResId(j.resId);
                    C.setDuoxiaoCount(j.duoxiaoCount || 0);
                }
                T.shift();
                m++;
            }
        }
        if (T.length > 0)
            if (g >= 10000) {
                var M = "洗牌失败：达到最大迭代次数10000，剩余" + T.length + "对未处理";
                console.error("[ShuffleFixRoll] " + M);
            }
            else
                Date.now();
        v.length;
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    ShuffleFixRollTrait.prototype.randomShuffleList = function (e) {
        for (var t, r = e.length; r > 1;) {
            var o = Math.floor(Math.random() * r--);
            t = __read([e[o], e[r]], 2), e[r] = t[0], e[o] = t[1];
        }
    };
    ShuffleFixRollTrait.traitKey = "ShuffleFixRoll";
    ShuffleFixRollTrait = __decorate([
        mj.trait,
        mj.class("ShuffleFixRollTrait")
    ], ShuffleFixRollTrait);
    return ShuffleFixRollTrait;
}(Trait_1.default));
exports.default = ShuffleFixRollTrait;

cc._RF.pop();