"use strict";
cc._RF.push(module, '54dc78Mq9BKPJXku07knjK4', 'TouchModifier');
// Scripts/process/touch/TouchModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TouchModifier = /** @class */ (function (_super) {
    __extends(TouchModifier, _super);
    function TouchModifier(t) {
        return _super.call(this, t) || this;
    }
    TouchModifier.prototype.modifyTouchStartLock = function (e) {
        this._context.touchData.setIsLock(e);
    };
    TouchModifier.prototype.modifyTouchStartClear = function (e) {
        this._context.touchData.setIsClear(e);
    };
    TouchModifier.prototype.modifyTouchStart = function (e, t) {
        var o = this._context.touchData;
        o.setIsValid(e);
        o.setPos(t);
        o.setStartPos(t);
        o.setIsMoving(false);
        o.setIsLock(false);
        o.setIsClear(false);
        o.setTileId(null);
    };
    TouchModifier.prototype.modifyTouchMove = function (e) {
        var t = this._context.touchData;
        t.setPos(e);
        t.setIsMoving(true);
    };
    TouchModifier.prototype.modifyTouchEnd = function () {
        this._context.touchData.clear();
    };
    TouchModifier.prototype.modifyTouchCancel = function () {
        this._context.touchData.clear();
    };
    return TouchModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.TouchModifier = TouchModifier;

cc._RF.pop();