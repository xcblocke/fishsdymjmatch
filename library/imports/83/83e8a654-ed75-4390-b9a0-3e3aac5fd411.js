"use strict";
cc._RF.push(module, '83e8aZU7XVDkLmgPjqsX9QR', 'ColorCardTileNode');
// Scripts/ColorCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCardTileNode = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var ColorCardTileNode = /** @class */ (function (_super) {
    __extends(ColorCardTileNode, _super);
    function ColorCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.ColorCard;
        return _this;
    }
    ColorCardTileNode.prototype.updateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("journey_special_mj_green", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCardBg, t, n, false, o);
    };
    return ColorCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.ColorCardTileNode = ColorCardTileNode;

cc._RF.pop();