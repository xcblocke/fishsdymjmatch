"use strict";
cc._RF.push(module, 'c862ffetxFLtJOfA1O99Pf/', 'Tile2NormalShowBackTrait');
// subpackages/l_normalshowback/Scripts/Tile2NormalShowBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2NormalShowBackTrait = /** @class */ (function (_super) {
    __extends(Tile2NormalShowBackTrait, _super);
    function Tile2NormalShowBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NormalShowBackTrait.prototype.isSupportMode = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2NormalShowBackTrait.prototype.getExcludeTiles = function () {
        var e, t;
        return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.excludes) && void 0 !== t ? t : [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard, TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.Yoga];
    };
    Tile2NormalShowBackTrait.prototype.isExcludeTile = function (e) {
        return this.getExcludeTiles().some(function (t) {
            return e.checkHasType(t);
        });
    };
    Tile2NormalShowBackTrait.prototype.onT2NorBackMod_isEnable = function (e, t) {
        var o = e.ins.context;
        t({
            returnType: TraitCallbackReturnType.jump,
            returnVal: this.isSupportMode(o.gameType)
        });
    };
    Tile2NormalShowBackTrait.prototype.onT2NorBackMod_getExcludes = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.jump,
            returnVal: this.getExcludeTiles()
        });
    };
    Tile2NormalShowBackTrait.prototype.onTile2NodeObj_getReqComKs = function (e, t) {
        var o, i = e.args[0], r = i.tileObject;
        if (r) {
            if (this.isSupportMode(null === (o = i.context) || void 0 === o ? void 0 : o.gameType)) {
                if (this.isExcludeTile(r))
                    t();
                else {
                    var a = e.beforReturnVal;
                    if (a.includes(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard))
                        t();
                    else {
                        a.unshift(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
                        t({
                            returnVal: a
                        });
                    }
                }
            }
            else
                t();
        }
        else
            t();
    };
    Tile2NormalShowBackTrait.prototype.onT2ShuffleBhv_stayEnd = function (e, t) {
        var o, i, r = e.ins, a = null === (o = null == r ? void 0 : r.context) || void 0 === o ? void 0 : o.getTileNodeManager();
        if (this.isSupportMode(null === (i = null == r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameType)) {
            this.updateTileNodeStatus(a, true);
            t();
        }
        else
            t();
    };
    Tile2NormalShowBackTrait.prototype.updateTileNodeStatus = function (e, t) {
        if (t === void 0) { t = false; }
        var o, i;
        if (e) {
            var r = e.getTileNodes();
            try {
                for (var a = __values(r), l = a.next(); !l.done; l = a.next()) {
                    var p = l.value;
                    if (p && p.info && p.info.tileObject) {
                        var s = p.info.tileObject;
                        s.getIsInSlotBar() || this.isExcludeTile(s) || (t ? s.getIsBack() ? p.tile2ShowBackImmediately() : p.tile2ShowFrontImmediately() : p.tile2RollCard());
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
                    l && !l.done && (i = a.return) && i.call(a);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
        }
    };
    Tile2NormalShowBackTrait.traitKey = "Tile2NormalShowBack";
    Tile2NormalShowBackTrait = __decorate([
        mj.trait,
        mj.class("Tile2NormalShowBackTrait")
    ], Tile2NormalShowBackTrait);
    return Tile2NormalShowBackTrait;
}(Trait_1.default));
exports.default = Tile2NormalShowBackTrait;

cc._RF.pop();