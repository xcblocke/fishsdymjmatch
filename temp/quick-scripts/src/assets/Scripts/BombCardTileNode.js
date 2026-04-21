"use strict";
cc._RF.push(module, '5c615d47z5N2rbxek1vvpLe', 'BombCardTileNode');
// Scripts/BombCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BombCardTileNode = void 0;
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var BombCardTileNode = /** @class */ (function (_super) {
    __extends(BombCardTileNode, _super);
    function BombCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.Bomb;
        return _this;
    }
    BombCardTileNode.prototype.createImgCard = function (t) {
        return _super.prototype.createImgCard.call(this, t);
    };
    __decorate([
        mj.traitEvent("BombCardNode_crtImgCard")
    ], BombCardTileNode.prototype, "createImgCard", null);
    return BombCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.BombCardTileNode = BombCardTileNode;

cc._RF.pop();