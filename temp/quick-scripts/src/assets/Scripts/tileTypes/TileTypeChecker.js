"use strict";
cc._RF.push(module, '70e8aY6ODpC2bI0K0LFcSm7', 'TileTypeChecker');
// Scripts/tileTypes/TileTypeChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileTypeChecker = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var BombCardType_1 = require("./BombCardType");
var TileTypeChecker = /** @class */ (function (_super) {
    __extends(TileTypeChecker, _super);
    function TileTypeChecker(t) {
        return _super.call(this, t) || this;
    }
    TileTypeChecker.prototype.parseBombCard = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        if (n.type === TileTypeEnum_1.ETileType.Bomb && i.type === TileTypeEnum_1.ETileType.Bomb) {
            var r = this.getCanClearBombCardIds(e);
            if (r && r.length > 0)
                return {
                    pos1: n.getPosition(),
                    pos2: i.getPosition(),
                    bombIds: r
                };
        }
    };
    TileTypeChecker.prototype.getCanClearBombCardIds = function (e) {
        var t = [], o = BombCardType_1.BombCardType.getBombClearTileIds(this._context, e);
        if (o && 2 == o.length) {
            t.push(o[0]);
            t.push(o[1]);
        }
        return t;
    };
    return TileTypeChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.TileTypeChecker = TileTypeChecker;

cc._RF.pop();