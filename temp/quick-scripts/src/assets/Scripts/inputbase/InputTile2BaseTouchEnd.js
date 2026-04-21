"use strict";
cc._RF.push(module, '8c0cbsqQxpGgYE1xyTO7Gak', 'InputTile2BaseTouchEnd');
// Scripts/inputbase/InputTile2BaseTouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchEnd = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchEnd, _super);
    function InputTile2BaseTouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2BaseTouchEnd.prototype.runLock = function () { };
    InputTile2BaseTouchEnd.prototype.excute = function (e) {
        if (!this.gameContext.tile2ResultChecker.checkIsDead())
            if (this.gameContext.tile2TouchData.tileId) {
                if (this.gameContext.tile2TouchData.isLock) {
                    this.runLock(e);
                    this.gameContext.tile2TouchData.clear();
                }
                else if (0 !== this.gameContext.getTileMapObject().getActionIds().length) {
                    var t = this.gameContext.tile2TouchData.isMoving;
                    if (!t && this.gameContext.tileSelector.touchStart(e.pos) != this.gameContext.tile2TouchData.tileId) {
                        this.gameContext.tile2TouchData.clear();
                        return;
                    }
                    var o = this.gameContext.tile2TouchData.tileId;
                    this.gameContext.tile2TouchData.lastTileId;
                    if (t) {
                        if (n = this.gameContext.tile2RollCardChecker.getClearWithOpenRollCard(o)) {
                            this.runClear([n, o]);
                        }
                        else {
                            if (this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(o)) {
                                this.runClear([o]);
                            }
                            else {
                                this.runResetMove();
                            }
                        }
                    }
                    else {
                        var n;
                        if (n = this.gameContext.tile2RollCardChecker.getClearWithOpenRollCard(o))
                            this.runClear([n, o]);
                        else if (this.gameContext.tile2SlotBarChecker.checkCanClearWithTileId(o))
                            this.runClear([o]);
                        else {
                            var i = this.gameContext.tile2RollCardModifier.tryBack2Front(o);
                            if (i) {
                                var r = this.gameContext.tile2RollCardModifier.modifyRollCardDatas([o]);
                                this.runRollCard(__spreadArrays([i], r));
                            }
                            else
                                this.runClear([o]);
                        }
                    }
                    this.gameContext.tile2TouchData.clear();
                    this.updateLastTileId(o, t);
                }
                else
                    this.gameContext.tile2TouchData.clear();
            }
            else
                this.gameContext.tile2TouchData.clear();
    };
    InputTile2BaseTouchEnd.prototype.checkIsValidLastTileId = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        if (t && t.isValid && !t.getIsInSlotBar() && t.isHasRollCard() && !t.getIsBack())
            return true;
    };
    InputTile2BaseTouchEnd.prototype.updateLastTileId = function (e) {
        if (this.checkIsValidLastTileId(e))
            this.gameContext.tile2TouchData.setLastTileId(e);
        else {
            var t = this.gameContext.tile2TouchData.lastTileId;
            this.checkIsValidLastTileId(t) || this.gameContext.tile2TouchData.setLastTileId(null);
        }
    };
    InputTile2BaseTouchEnd.prototype.runRollCard = function (e) {
        var t = this.gameContext.tile2TouchData.tileId;
        e.filter(function (e) {
            return !e.frontToBack;
        }).length > 0 && this.gameContext.tile2DotTrackerModifier.recordErrorFlip(t);
    };
    InputTile2BaseTouchEnd.prototype.runResetMove = function () { };
    InputTile2BaseTouchEnd.prototype.runClear = function () { };
    InputTile2BaseTouchEnd.prototype.checkIsSame = function () {
        return false;
    };
    return InputTile2BaseTouchEnd;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchEnd;

cc._RF.pop();