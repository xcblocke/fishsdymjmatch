"use strict";
cc._RF.push(module, '841c5+9hPBP+6AycEmM9VCu', 'Tile2RollCardChecker');
// Scripts/process/tile2/Tile2RollCardChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var Tile2RollCardChecker = /** @class */ (function (_super) {
    __extends(Tile2RollCardChecker, _super);
    function Tile2RollCardChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardChecker.prototype.getOpenRollCardTileObjectIds = function () {
        var e, t, o = [], n = this._context.getTileMapObject().getValidTileObjects();
        try {
            for (var i = __values(n), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                !s.checkHasType(TileTypeEnum_1.ETileType.RollCard) || s.getIsBack() || s.getIsInSlotBar() || o.push(s.id);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    Tile2RollCardChecker.prototype.checkCanClearWithIds = function (e, t) {
        if (e == t)
            return false;
        var o = this._context.getTileMapObject().getTileObject(e), n = this._context.getTileMapObject().getTileObject(t);
        if (!o || !n)
            return false;
        if (!o.isValid || !n.isValid)
            return false;
        var i = 0;
        o.getIsInSlotBar() || i++;
        n.getIsInSlotBar() || i++;
        return !(i > this.getEmptySlotBarCount()) && o.cardId === n.cardId;
    };
    Tile2RollCardChecker.prototype.getClearWithOpenRollCard = function (e) {
        var t, o, n = this._context.getTileMapObject().getTileObject(e);
        if (!n)
            return null;
        if (!n.isValid)
            return null;
        var i = this.getOpenRollCardTileObjectIds();
        try {
            for (var a = __values(i), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = this._context.getTileMapObject().getTileObject(s);
                if (e != s && c.cardId === n.cardId && this.checkCanClearWithIds(e, s))
                    return s;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return null;
    };
    Tile2RollCardChecker.prototype.getEmptySlotBarCount = function () {
        var e = this._context.getGameData(), t = e.slotBarIds;
        return e.slotBarCount - t.length;
    };
    return Tile2RollCardChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2RollCardChecker;

cc._RF.pop();