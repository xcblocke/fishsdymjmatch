"use strict";
cc._RF.push(module, '337b7cdcmxARJPkZnq8cs6a', 'DuoxiaoGenTrait');
// subpackages/l_duoxiaogen/Scripts/DuoxiaoGenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var DuoxiaoCardType_1 = require("../../../Scripts/tileTypes/DuoxiaoCardType");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DuoxiaoGenTrait = /** @class */ (function (_super) {
    __extends(DuoxiaoGenTrait, _super);
    function DuoxiaoGenTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoGenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DuoxiaoGenTrait.prototype.canGenDuoxiaoCard = function (t) {
        return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t)) && (null != this.traitData.travelLevel && t == GameTypeEnums_1.MjGameType.Travel ? UserModel_1.default.getInstance().travelData.getLevelId() >= this._traitData.level : UserModel_1.default.getInstance().normalData.getLevelId() >= this._traitData.level);
    };
    DuoxiaoGenTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DuoxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.prototype.onTravelGaCtl_gTileTypes = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DuoxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.prototype.onDailyChCtrl_getTileTypes = function (t, e) {
        var r = t.ins;
        if (this.canGenDuoxiaoCard(r.gameType)) {
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DuoxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
        else
            e();
    };
    DuoxiaoGenTrait.prototype.onDuoxiaoCt_genCountRange = function (t, e) {
        e({
            returnVal: this._traitData.genCountRange || [1, 3],
            isBreak: true
        });
    };
    DuoxiaoGenTrait.prototype.onDuoxiaoCt_countRange = function (t, e) {
        e({
            returnVal: this._traitData.countRange || [4, 6],
            isBreak: true
        });
    };
    DuoxiaoGenTrait.prototype.onIptInCollectCd_cTileTypes = function (t, e) {
        var r = t.beforReturnVal || "";
        e({
            returnVal: r = r.replace(TileTypeEnum_1.ETileType.DuoxiaoCard, "")
        });
    };
    DuoxiaoGenTrait.prototype.getNormalCardGroups = function (t) {
        var e, r, o, n, a, l, s = new Map(), p = t.getTileMapObject(), c = t.randomGenerator;
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
                        g && !g.done && (l = m.return) && l.call(m);
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
    DuoxiaoGenTrait.prototype.onDuoxiaoCt_modify = function (t, e) {
        var r, o;
        if (1 == this._traitData.genType) {
            var n = t.args[0], a = DuoxiaoCardType_1.default.getGenCountRange(), l = n.randomGenerator, p = l.randomInt(a[0], a[1]), c = this.getNormalCardGroups(n).slice(0, p), y = n.getTileMapObject();
            try {
                for (var f = __values(c), d = f.next(); !d.done; d = f.next()) {
                    var T = d.value, v = DuoxiaoCardType_1.default.getCountRange(), h = l.randomInt(v[0], v[1]);
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
    DuoxiaoGenTrait.traitKey = "DuoxiaoGen";
    DuoxiaoGenTrait = __decorate([
        mj.trait,
        mj.class("DuoxiaoGenTrait")
    ], DuoxiaoGenTrait);
    return DuoxiaoGenTrait;
}(Trait_1.default));
exports.default = DuoxiaoGenTrait;

cc._RF.pop();