"use strict";
cc._RF.push(module, '1ac61nmDpBOIKjVhFDW4b/+', 'Tile2ColorizeTrait');
// subpackages/l_tile2Colorize/Scripts/Tile2ColorizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var LevelUtil_1 = require("../../../Scripts/core/simulator/config/LevelUtil");
var SolverUtils_1 = require("../../../Scripts/SolverUtils");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var v = new Set([37, 38, 50]);
var Tile2ColorizeTrait = /** @class */ (function (_super) {
    __extends(Tile2ColorizeTrait, _super);
    function Tile2ColorizeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EXCLUDED_TILE_TYPES = new Set([TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.Yoga, TileTypeEnum_1.ETileType.Bomb]);
        return _this;
    }
    Tile2ColorizeTrait.prototype.onIptT2SetLv_genFcsAfter = function (e, t) {
        var r = e.ins, i = e.args[0].levelData;
        if (this.shouldProcess(i)) {
            var o = i.slover;
            if (o) {
                this.solverColorize(r.tileMapObject, r.gameContext, o);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    Tile2ColorizeTrait.prototype.shouldProcess = function (e) {
        return CardUtil_1.default.getCurrentConfigName() === ConfigType_1.ConfigType.card_config2.name && !!e.isNewGame && !ExtractTool_1.default.getInstance().isFixedLevel(e.levelId);
    };
    Tile2ColorizeTrait.prototype.solverColorize = function (e, t, r) {
        var i, o, n = this, a = LevelUtil_1.LevelUtil.parseStepSolver(r);
        if (0 !== a.length) {
            var s = e.tileObjectMap();
            if (s && 0 !== s.size) {
                var c = SolverUtils_1.SolverUtils.parsePairings(a, s, function (e) {
                    return v.has(e.cardId) || n.EXCLUDED_TILE_TYPES.has(e.type);
                }), p = c.pairs, d = c.unpaired, y = this.buildValidResIdPool(t);
                if (0 !== y.length) {
                    var h = 0;
                    try {
                        for (var g = __values(p), T = g.next(); !T.done; T = g.next()) {
                            var _ = T.value, m = y[h % y.length];
                            e.changeTileResId(_.paving.tile.id, m);
                            e.changeTileResId(_.elim.tile.id, m);
                            h++;
                        }
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            T && !T.done && (o = g.return) && o.call(g);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
                    if (d.length >= 2)
                        for (var b = 0; b < d.length - 1; b += 2) {
                            m = y[h % y.length];
                            e.changeTileResId(d[b].tile.id, m);
                            e.changeTileResId(d[b + 1].tile.id, m);
                            h++;
                        }
                }
            }
        }
    };
    Tile2ColorizeTrait.prototype.buildValidResIdPool = function (e) {
        var t = e.getCardConfigMap(), r = [], i = 0;
        t.forEach(function (e, t) {
            t > i && (i = t);
        });
        for (var o = 1; o <= i; o++) {
            var n = t.get(o);
            n && !v.has(n.cardId) && r.push(o);
        }
        return r;
    };
    Tile2ColorizeTrait.traitKey = "Tile2Colorize";
    Tile2ColorizeTrait = __decorate([
        mj.trait,
        mj.class("Tile2ColorizeTrait")
    ], Tile2ColorizeTrait);
    return Tile2ColorizeTrait;
}(Trait_1.default));
exports.default = Tile2ColorizeTrait;

cc._RF.pop();