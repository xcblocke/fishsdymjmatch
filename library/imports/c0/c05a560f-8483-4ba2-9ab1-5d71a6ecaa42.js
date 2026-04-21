"use strict";
cc._RF.push(module, 'c05a5YPhINLopqxXXGm7KpC', 'InputBaseTouchMove');
// Scripts/inputbase/InputBaseTouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchMove = /** @class */ (function (_super) {
    __extends(InputBaseTouchMove, _super);
    function InputBaseTouchMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchMove.prototype.excute = function (e) {
        var t = this;
        if (this.gameContext.touchData.isValid && !this.gameContext.touchData.isLock && !this.gameContext.touchData.isClear) {
            var o = false;
            if (!this.gameContext.touchData.isMoving) {
                o = true;
                this.runStartMove(e);
            }
            this.gameContext.touchModifier.modifyTouchMove(e.pos);
            var n = this.gameContext.getTileMapObject().getActionIds();
            if (0 !== n.length) {
                if (o) {
                    var i = n[n.length - 1];
                    this.gameContext.getTileMapObject().unselectAllTileIds(i).forEach(function (e) {
                        t.pushSelectEffect(e, true);
                    });
                    this.pushSelectEffect(i, false);
                    this.gameContext.getTileMapObject().pushActionId(i);
                    this.gameContext.getTileMapObject().selcectTileId(i, true);
                }
                var r = n[n.length - 1];
                this.pushMoveEffect(r, e.pos, e.delta, o);
            }
        }
    };
    InputBaseTouchMove.prototype.runStartMove = function () { };
    return InputBaseTouchMove;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchMove;

cc._RF.pop();