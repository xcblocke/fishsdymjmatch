"use strict";
cc._RF.push(module, '43a69un5VpKsbSJcXKHYR+m', 'Tile2BombModifier');
// Scripts/process/tile2/Tile2BombModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var BombCardType_1 = require("../../tileTypes/BombCardType");
var Tile2BombModifier = /** @class */ (function (_super) {
    __extends(Tile2BombModifier, _super);
    function Tile2BombModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2BombModifier.prototype.parseBombCard = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        if (n.checkHasType(TileTypeEnum_1.ETileType.Bomb) && i.checkHasType(TileTypeEnum_1.ETileType.Bomb)) {
            var r = this.getCanClearBombCardIds(e);
            if (r && r.length > 0)
                return {
                    pos1: n.getPosition(),
                    pos2: i.getPosition(),
                    bombIds: r
                };
        }
    };
    Tile2BombModifier.prototype.getCanClearBombCardIds = function (e) {
        var t = [], o = BombCardType_1.BombCardType.getBombClearTileIds(this._context, e);
        if (o && 2 == o.length) {
            t.push(o[0]);
            t.push(o[1]);
        }
        return t;
    };
    Tile2BombModifier.prototype.modifyBombCard = function (e, t) {
        this.context.tile2SlotBarModifier.clear([t], CollectInterfact_1.ECollectFrom.FromBomb);
        this._context.comboModifier.addCombo(1);
        var o = this._context.scoreModifier.calAddScore(), n = this._context.getGameData().getScore();
        return {
            addScore: o,
            combo: this._context.getGameData().getComboNum(),
            showCombo: this._context.comboChecker.canShowCombo(),
            targetScore: n
        };
    };
    return Tile2BombModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = Tile2BombModifier;

cc._RF.pop();