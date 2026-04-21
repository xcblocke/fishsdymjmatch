"use strict";
cc._RF.push(module, 'a6e08/fMjlD7KUOqG+yFv9v', 'Tile2DaxiaoCardComponent');
// Scripts/Tile2DaxiaoCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DaxiaoCardComponent = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2DaxiaoCardComponent = /** @class */ (function (_super) {
    __extends(Tile2DaxiaoCardComponent, _super);
    function Tile2DaxiaoCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DaxiaoCardComponent.prototype.onRefreshNode = function () {
        this._flagNode || (this._flagNode = this._createFlag());
        this._updateFlag();
    };
    Tile2DaxiaoCardComponent.prototype.onUnbind = function () {
        this._flagNode && cc.isValid(this._flagNode) && this._flagNode.destroy();
        this._flagNode = null;
    };
    Tile2DaxiaoCardComponent.prototype._createFlag = function () {
        var e = this._host.tileNode, t = e.getChildByName("DaxiaoCardFlagNode");
        if (t)
            return t;
        var o = new cc.Node("DaxiaoCardFlagNode");
        e.addChild(o);
        o.scale = 1 * this._host.info.tileObject.layoutScale;
        o.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        return o;
    };
    Tile2DaxiaoCardComponent.prototype._updateFlag = function () {
        this._flagNode && BaseSpine_1.default.refreshWithNode(this._flagNode, "spine/daxiao/idle/gameplay_hintGreat", "mainRes").setAnimation("init", -1, null, false);
    };
    return Tile2DaxiaoCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2DaxiaoCardComponent = Tile2DaxiaoCardComponent;

cc._RF.pop();