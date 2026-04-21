"use strict";
cc._RF.push(module, '46136k5oihOlpI3uHhUTUw+', 'GameTime');
// Scripts/core/view/GameInteraction/GameTime.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTime = void 0;
var GameTime = /** @class */ (function () {
    function GameTime(e) {
        this._accumulatedTime = 0;
        this._isRunning = true;
        this._lastUpdateTime = 0;
        this._lastFrameTime = 0;
        this._pushEvent = null;
        this._pushEvent = e;
    }
    Object.defineProperty(GameTime.prototype, "deltaTime", {
        get: function () {
            var e = this._lastFrameTime, t = e - this._lastUpdateTime;
            this._lastUpdateTime = e;
            return t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTime.prototype, "currentTime", {
        get: function () {
            return this._lastFrameTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameTime.prototype, "accumulatedTime", {
        get: function () {
            return this._accumulatedTime;
        },
        enumerable: false,
        configurable: true
    });
    GameTime.prototype.update = function (e) {
        if (this._isRunning) {
            if (e > 0 && e < 5) {
                this._accumulatedTime += e;
                this._lastFrameTime += e;
            }
            if (this._accumulatedTime >= 3) {
                this.pushEvent();
                this._accumulatedTime = 0;
            }
        }
    };
    GameTime.prototype.onGameShow = function () {
        this._isRunning = true;
    };
    GameTime.prototype.onGameHide = function () {
        this._isRunning = false;
    };
    GameTime.prototype.pushEvent = function () {
        this._pushEvent();
    };
    GameTime.prototype.reset = function () {
        this._accumulatedTime = 0;
        this._lastFrameTime = 0;
        this._lastUpdateTime = 0;
        this._isRunning = true;
    };
    return GameTime;
}());
exports.GameTime = GameTime;

cc._RF.pop();