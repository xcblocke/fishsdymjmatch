"use strict";
cc._RF.push(module, '7368fp3BCNPu4ojMzuaQz8P', 'Tile2TouchData');
// Scripts/data/Tile2TouchData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2TouchData = void 0;
var Tile2TouchData = /** @class */ (function () {
    function Tile2TouchData() {
        this._toushStartTime = null;
        this._lastTileId = null;
        this._startPos = null;
        this._tileId = null;
        this._isLock = null;
        this._isMoving = null;
    }
    Object.defineProperty(Tile2TouchData.prototype, "lastTileId", {
        get: function () {
            return this._lastTileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2TouchData.prototype, "startPos", {
        get: function () {
            return this._startPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2TouchData.prototype, "tileId", {
        get: function () {
            return this._tileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2TouchData.prototype, "isLock", {
        get: function () {
            return this._isLock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2TouchData.prototype, "isMoving", {
        get: function () {
            return this._isMoving;
        },
        enumerable: false,
        configurable: true
    });
    Tile2TouchData.prototype.setToushStartTime = function () {
        var e = Date.now();
        this._toushStartTime = e;
    };
    Tile2TouchData.prototype.getToushStartTime = function () {
        return this._toushStartTime;
    };
    Tile2TouchData.prototype.setLastTileId = function (e) {
        this._lastTileId = e;
    };
    Tile2TouchData.prototype.setStartPos = function (e) {
        this._startPos = e;
    };
    Tile2TouchData.prototype.setTileId = function (e) {
        this._tileId = e;
    };
    Tile2TouchData.prototype.setIsLock = function (e) {
        this._isLock = e;
    };
    Tile2TouchData.prototype.setIsMoving = function (e) {
        this._isMoving = e;
    };
    Tile2TouchData.prototype.clear = function () {
        this._tileId = null;
        this._isLock = false;
        this._isMoving = false;
        this._startPos = null;
        this._toushStartTime = 0;
    };
    return Tile2TouchData;
}());
exports.Tile2TouchData = Tile2TouchData;

cc._RF.pop();