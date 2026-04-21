"use strict";
cc._RF.push(module, 'd2561T8uCBL9puj6MB4pWtZ', 'InputTile2BaseTouchMove');
// Scripts/inputbase/InputTile2BaseTouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchMove = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchMove, _super);
    function InputTile2BaseTouchMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._touchMoveTimeThreshold = 90;
        _this._touchMoveDistanceThreshold = 24;
        return _this;
    }
    InputTile2BaseTouchMove.prototype.checkCanMove = function (e) {
        var t = this.gameContext.tile2TouchData.getToushStartTime();
        if (Date.now() - t < this._touchMoveTimeThreshold)
            return false;
        var o = this.gameContext.tile2TouchData.startPos;
        return !(e.clone().subtract(o).mag() < this._touchMoveDistanceThreshold);
    };
    InputTile2BaseTouchMove.prototype.excute = function (e) {
        if (this.gameContext.tile2TouchData.tileId && !this.gameContext.tile2ResultChecker.checkIsDead())
            if (this.gameContext.tile2TouchData.isLock) {
                this.runLock(e);
                this.gameContext.tile2TouchData.clear();
            }
            else {
                var t = false, o = [], n = this.gameContext.tile2TouchData.tileId;
                if (!this.gameContext.tile2TouchData.isMoving && this.checkCanMove(e.pos)) {
                    t = true;
                    o = this.gameContext.tile2RollCardModifier.getRollCardDatas(n);
                    this.gameContext.tile2TouchData.setIsMoving(true);
                    e.delta = e.pos.clone().subtract(this.gameContext.tile2TouchData.startPos);
                    this.runStartMove(e);
                }
                this.gameContext.tile2TouchData.isMoving && this.runMove(e, {
                    iFirstMove: t,
                    rollCardDatas: o
                });
            }
    };
    InputTile2BaseTouchMove.prototype.tryBack2Front = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        if (!t)
            return null;
        if (!t.isValid)
            return null;
        if (t.getIsInSlotBar())
            return null;
        if (t.isHasRollCard() && t.getIsBack()) {
            t.setIsBack(false);
            return {
                tileId: e,
                frontToBack: false
            };
        }
        return null;
    };
    InputTile2BaseTouchMove.prototype.tryFront2Back = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        if (!t)
            return null;
        if (!t.isValid)
            return null;
        if (t.getIsInSlotBar())
            return null;
        if (t.isHasRollCard() && !t.getIsBack()) {
            t.setIsBack(true);
            return {
                tileId: e,
                frontToBack: true
            };
        }
        return null;
    };
    InputTile2BaseTouchMove.prototype.runLock = function () { };
    InputTile2BaseTouchMove.prototype.runStartMove = function () { };
    InputTile2BaseTouchMove.prototype.runMove = function () { };
    return InputTile2BaseTouchMove;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchMove;

cc._RF.pop();