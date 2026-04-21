"use strict";
cc._RF.push(module, 'c0d7f3IvVJPXqF6lERjv1/Z', 'GameTimeData');
// Scripts/data/GameTimeData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTimeData = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var GameTimeData = /** @class */ (function (_super) {
    __extends(GameTimeData, _super);
    function GameTimeData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._time = 0;
        _this._baseTime = 0;
        _this._isPause = true;
        return _this;
    }
    Object.defineProperty(GameTimeData.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (e) {
            if (!this._isPause) {
                this._time = this._time + e;
                this.context.getGameData().setCurrentRoundTime(this._time);
            }
        },
        enumerable: false,
        configurable: true
    });
    GameTimeData.prototype.initTime = function (e) {
        if (e === void 0) { e = 0; }
        this._baseTime = e;
        this._time = e;
        this._isPause = false;
    };
    GameTimeData.prototype.reset = function () {
        this._time = 0;
        this._baseTime = 0;
        this._isPause = false;
    };
    GameTimeData.prototype.stop = function () {
        this._isPause = true;
        this._time = 0;
        this._baseTime = 0;
    };
    GameTimeData.prototype.restart = function () {
        this._time = 0;
        this._baseTime = 0;
        this._isPause = false;
    };
    return GameTimeData;
}(BaseCoreObject_1.BaseCoreObject));
exports.GameTimeData = GameTimeData;

cc._RF.pop();