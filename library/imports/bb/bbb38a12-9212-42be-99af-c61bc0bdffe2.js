"use strict";
cc._RF.push(module, 'bbb38oSkhJCvpmvxhvAvf/i', 'TouchData');
// Scripts/data/TouchData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchData = void 0;
var TouchData = /** @class */ (function () {
    function TouchData() {
        this._tileId = null;
        this._isClear = null;
        this._isValid = null;
        this._isLock = null;
        this._isMoving = null;
        this._pos = null;
        this._startPos = null;
    }
    Object.defineProperty(TouchData.prototype, "tileId", {
        get: function () {
            return this._tileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TouchData.prototype, "isClear", {
        get: function () {
            return this._isClear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TouchData.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TouchData.prototype, "isLock", {
        get: function () {
            return this._isLock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TouchData.prototype, "isMoving", {
        get: function () {
            return this._isMoving;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TouchData.prototype, "startPos", {
        get: function () {
            return this._startPos;
        },
        enumerable: false,
        configurable: true
    });
    TouchData.prototype.setTileId = function (e) {
        this._tileId = e;
    };
    TouchData.prototype.setIsClear = function (e) {
        this._isClear = e;
    };
    TouchData.prototype.setIsValid = function (e) {
        this._isValid = e;
    };
    TouchData.prototype.setIsLock = function (e) {
        this._isLock = e;
    };
    TouchData.prototype.setIsMoving = function (e) {
        this._isMoving = e;
    };
    TouchData.prototype.setPos = function (e) {
        this._pos = e;
    };
    TouchData.prototype.getPos = function () {
        return this._pos;
    };
    TouchData.prototype.setStartPos = function (e) {
        this._startPos = e;
    };
    TouchData.prototype.clear = function () {
        this._tileId = null;
        this._isValid = false;
        this._isLock = false;
        this._isClear = false;
        this._isMoving = false;
        this._pos = null;
        this._startPos = null;
    };
    return TouchData;
}());
exports.TouchData = TouchData;

cc._RF.pop();