"use strict";
cc._RF.push(module, 'b3a87VYcAxKG5j4V2+1EGqW', 'InputTile2StartAutoMerge');
// Scripts/input/InputTile2StartAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2StartAutoMergeEffect_1 = require("../Tile2StartAutoMergeEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2StartAutoMerge = /** @class */ (function (_super) {
    __extends(InputTile2StartAutoMerge, _super);
    function InputTile2StartAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2StartAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().updateCanMatchTiles();
        this.gameContext.getTileMapObject().unselectAllTileIds();
        var t = new Tile2StartAutoMergeEffect_1.Tile2StartAutoMergeEffect({
            type: e.type
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTile2StartAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputTile2StartAutoMerge;

cc._RF.pop();