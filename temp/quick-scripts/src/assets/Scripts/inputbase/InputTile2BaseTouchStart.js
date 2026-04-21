"use strict";
cc._RF.push(module, 'f08f7/u2b5G1bg12Vnmqdzf', 'InputTile2BaseTouchStart');
// Scripts/inputbase/InputTile2BaseTouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchStart = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchStart, _super);
    function InputTile2BaseTouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2BaseTouchStart.prototype.checkIsGenerating = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        return !!t && t.generating;
    };
    InputTile2BaseTouchStart.prototype.excute = function (e) {
        var t = this.gameContext.tileSelector.touchStart(e.pos);
        this.checkIsGenerating(t) && (t = null);
        if (!this.gameContext.tile2ResultChecker.checkIsDead()) {
            this.gameContext.tile2TouchData.clear();
            var o = this.gameContext.tileChecker.checkIsLock(t);
            this.gameContext.tile2TouchData.setTileId(t);
            this.gameContext.tile2TouchData.setStartPos(e.pos);
            this.gameContext.tile2TouchData.setToushStartTime();
            o && this.gameContext.tile2TouchData.setIsLock(true);
            this.gameContext.getTileMapObject().pushActionId(t);
        }
    };
    return InputTile2BaseTouchStart;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchStart;

cc._RF.pop();