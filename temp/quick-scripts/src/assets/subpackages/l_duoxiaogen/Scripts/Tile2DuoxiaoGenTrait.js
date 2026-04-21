"use strict";
cc._RF.push(module, '2625cKbwcFM7IBzr3zFpxLL', 'Tile2DuoxiaoGenTrait');
// subpackages/l_duoxiaogen/Scripts/Tile2DuoxiaoGenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var DuoxiaoCardType_1 = require("../../../Scripts/tileTypes/DuoxiaoCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var Tile2DuoxiaoGenTrait = /** @class */ (function (_super) {
    __extends(Tile2DuoxiaoGenTrait, _super);
    function Tile2DuoxiaoGenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DuoxiaoGenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DuoxiaoGenTrait.prototype.canGenDuoxiaoCard = function (t) {
        var e, r;
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t)) && ((null === (r = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0) > this._traitData.level;
    };
    Tile2DuoxiaoGenTrait.prototype.onT2GameCtrl_getTileTypes = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            var o = this.genTypes();
            o && o.length > 0 && (t.beforReturnVal = t.beforReturnVal ? t.beforReturnVal + "," + o : o);
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    Tile2DuoxiaoGenTrait.prototype.genTypes = function () {
        return TileTypeEnum_1.ETileType.DuoxiaoCard;
    };
    Tile2DuoxiaoGenTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
        e({
            returnVal: this._traitData.genCountRange || [1, 3],
            isBreak: true
        });
    };
    Tile2DuoxiaoGenTrait.prototype.onDuoxiaoCt_countRange = function (t, e) {
        e({
            returnVal: this._traitData.countRange || [4, 6],
            isBreak: true
        });
    };
    Tile2DuoxiaoGenTrait.prototype.getNormalCardGroups = function (t) {
        var e, r, o, n, a, u, s = new Map(), p = t.getTileMapObject(), c = t.randomGenerator;
        try {
            for (var y = __values(p.aliveTiles()), f = y.next(); !f.done; f = y.next())
                if ((_ = f.value).type === TileTypeEnum_1.ETileType.Normal) {
                    s.has(_.cardId) || s.set(_.cardId, {
                        cardId: _.cardId,
                        count: 0,
                        layerSum: 0,
                        tiles: []
                    });
                    s.get(_.cardId).count++;
                    s.get(_.cardId).layerSum += _.pos.z;
                    s.get(_.cardId).tiles.push(_);
                }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                f && !f.done && (r = y.return) && r.call(y);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var d = [];
        try {
            for (var T = __values(s.values()), v = T.next(); !v.done; v = T.next()) {
                var h = v.value;
                try {
                    for (var m = (a = void 0, __values(h.tiles)), g = m.next(); !g.done; g = m.next()) {
                        var _ = g.value;
                        d.push({
                            tile: _,
                            layerSum: h.layerSum,
                            random: c.random()
                        });
                    }
                }
                catch (t) {
                    a = {
                        error: t
                    };
                }
                finally {
                    try {
                        g && !g.done && (u = m.return) && u.call(m);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
            }
        }
        catch (t) {
            o = {
                error: t
            };
        }
        finally {
            try {
                v && !v.done && (n = T.return) && n.call(T);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        d.sort(function (t, e) {
            return t.layerSum !== e.layerSum ? t.layerSum - e.layerSum : t.tile.pos.z !== e.tile.pos.z ? t.tile.pos.z - e.tile.pos.z : t.random - e.random;
        });
        return d.map(function (t) {
            return t.tile;
        });
    };
    Tile2DuoxiaoGenTrait.prototype.onDuoxiaoCt_modify = function (t, e) {
        var r, o;
        if (1 == this._traitData.genType) {
            var n = t.args[0], a = DuoxiaoCardType_1.default.getGenCountRange(), s = n.randomGenerator, p = s.randomInt(a[0], a[1]), c = this.getNormalCardGroups(n).slice(0, p), y = n.getTileMapObject();
            try {
                for (var f = __values(c), d = f.next(); !d.done; d = f.next()) {
                    var T = d.value, v = DuoxiaoCardType_1.default.getCountRange(), h = s.randomInt(v[0], v[1]);
                    y.setDuoxiaoCount(T.id, h);
                    y.setTileType(T.id, TileTypeEnum_1.ETileType.DuoxiaoCard);
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            e();
    };
    Tile2DuoxiaoGenTrait.traitKey = "Tile2DuoxiaoGen";
    __decorate([
        mj.traitEvent("T2DuoxiaoGenTt_genTypes")
    ], Tile2DuoxiaoGenTrait.prototype, "genTypes", null);
    Tile2DuoxiaoGenTrait = __decorate([
        mj.trait,
        mj.class("Tile2DuoxiaoGenTrait")
    ], Tile2DuoxiaoGenTrait);
    return Tile2DuoxiaoGenTrait;
}(Trait_1.default));
exports.default = Tile2DuoxiaoGenTrait;

cc._RF.pop();