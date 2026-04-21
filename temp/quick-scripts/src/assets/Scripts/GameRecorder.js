"use strict";
cc._RF.push(module, '6698fd7znNDF4vK+nhGCW2y', 'GameRecorder');
// Scripts/GameRecorder.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameRecorder = /** @class */ (function () {
    function GameRecorder() {
        this._list = [];
        this._videoList = [];
    }
    GameRecorder.getInstance = function () {
        this._instance || (this._instance = new GameRecorder());
        return this._instance;
    };
    GameRecorder.prototype.push = function (e) {
        this._list.push(e);
    };
    GameRecorder.prototype.getList = function () {
        return this._videoList;
    };
    GameRecorder.prototype.clear = function () {
        this._list.length > 0 && (this._videoList = this._list.slice());
        this._list = [];
    };
    GameRecorder._instance = null;
    return GameRecorder;
}());
exports.default = GameRecorder;

cc._RF.pop();