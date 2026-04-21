"use strict";
cc._RF.push(module, '74a18U/yEZI6ZiIrOzI8Sis', 'Tile2NormalBackModifier');
// Scripts/process/tile2/Tile2NormalBackModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2NormalBackModifier = /** @class */ (function (_super) {
    __extends(Tile2NormalBackModifier, _super);
    function Tile2NormalBackModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NormalBackModifier.prototype.isEnable = function () {
        return false;
    };
    Tile2NormalBackModifier.prototype.getExcludeTiles = function () {
        return [TileTypeEnum_1.ETileType.RollCard, TileTypeEnum_1.ETileType.DaxiaoCard, TileTypeEnum_1.ETileType.DuoxiaoCard, TileTypeEnum_1.ETileType.RankCard, TileTypeEnum_1.ETileType.Yoga];
    };
    Tile2NormalBackModifier.prototype.modifyStatus = function () {
        var e, t;
        if (!this.isEnable())
            return [];
        var o = this.context.getTileMapObject().aliveTiles().filter(function (e) {
            return !e.getIsInSlotBar();
        }), n = this.getExcludeTiles(), i = [], r = function r(e) {
            if (n.some(function (t) {
                return e.checkHasType(t);
            }))
                return "continue";
            if (0 === e.isCardLock()) {
                if (e.getIsBack()) {
                    e.setIsBack(false);
                    i.push({
                        tileId: e.id,
                        isBack: false
                    });
                }
            }
            else if (!e.getIsBack()) {
                e.setIsBack(true);
                i.push({
                    tileId: e.id,
                    isBack: true
                });
            }
        };
        try {
            for (var l = __values(o), s = l.next(); !s.done; s = l.next())
                r(s.value);
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return i;
    };
    __decorate([
        mj.traitEvent("T2NorBackMod_isEnable")
    ], Tile2NormalBackModifier.prototype, "isEnable", null);
    __decorate([
        mj.traitEvent("T2NorBackMod_getExcludes")
    ], Tile2NormalBackModifier.prototype, "getExcludeTiles", null);
    return Tile2NormalBackModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2NormalBackModifier;

cc._RF.pop();