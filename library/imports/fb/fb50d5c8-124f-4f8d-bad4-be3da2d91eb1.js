"use strict";
cc._RF.push(module, 'fb50dXIEk9PjbrUvj2i2R6x', 'Tile2ColorCardComponent');
// Scripts/Tile2ColorCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ColorCardComponent = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2ColorCardComponent = /** @class */ (function (_super) {
    __extends(Tile2ColorCardComponent, _super);
    function Tile2ColorCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ColorCardComponent.prototype.onUpdateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("journey_special_mj_green", this._host), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._host.imgCardBg, t, n, false, o);
        return true;
    };
    return Tile2ColorCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2ColorCardComponent = Tile2ColorCardComponent;

cc._RF.pop();