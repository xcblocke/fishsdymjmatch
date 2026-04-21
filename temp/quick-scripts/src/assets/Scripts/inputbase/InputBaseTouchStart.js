"use strict";
cc._RF.push(module, '586bd+CsYdAJKnqPwBvqOkn', 'InputBaseTouchStart');
// Scripts/inputbase/InputBaseTouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchStart = /** @class */ (function (_super) {
    __extends(InputBaseTouchStart, _super);
    function InputBaseTouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchStart.prototype.checkIsGenerating = function (e) {
        var t = this.gameContext.getTileMapObject().getTileObject(e);
        return !!t && t.generating;
    };
    InputBaseTouchStart.prototype.excute = function (e) {
        var t = this.gameContext.tileSelector.touchStart(e.pos);
        this.checkIsGenerating(t) && (t = null);
        this.gameContext.touchModifier.modifyTouchStart(null != t, e.pos);
        if (t) {
            this.gameContext.touchData.setTileId(t);
            if (this.gameContext.tileChecker.checkIsLock(t)) {
                this.gameContext.touchModifier.modifyTouchStartLock(true);
                this.runLock(e, t);
            }
            else if (this.gameContext.clearChecker.checkCanClear(t)) {
                this.gameContext.getTileMapObject().selcectTileId(t, true);
                this.gameContext.touchModifier.modifyTouchStartClear(true);
                this.runClear(e, t);
            }
            else
                this.gameContext.getTileMapObject().pushActionId(t);
        }
    };
    InputBaseTouchStart.prototype.runLock = function () { };
    InputBaseTouchStart.prototype.runClear = function () { };
    return InputBaseTouchStart;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchStart;

cc._RF.pop();