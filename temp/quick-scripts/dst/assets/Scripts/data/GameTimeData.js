
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/data/GameTimeData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RhdGEvR2FtZVRpbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25EO0lBQWtDLGdDQUFjO0lBQWhEO1FBQUEscUVBaUNDO1FBaENDLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUE4QmxCLENBQUM7SUE3QkMsc0JBQUksOEJBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBQ0QsVUFBUyxDQUFDO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVEO1FBQ0gsQ0FBQzs7O09BTkE7SUFPRCwrQkFBUSxHQUFSLFVBQVMsQ0FBSztRQUFMLGtCQUFBLEVBQUEsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCwyQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsOEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQ2lDLCtCQUFjLEdBaUMvQztBQWpDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIEdhbWVUaW1lRGF0YSBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgX3RpbWUgPSAwO1xuICBfYmFzZVRpbWUgPSAwO1xuICBfaXNQYXVzZSA9IHRydWU7XG4gIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG4gIHNldCB0aW1lKGUpIHtcbiAgICBpZiAoIXRoaXMuX2lzUGF1c2UpIHtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl90aW1lICsgZTtcbiAgICAgIHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLnNldEN1cnJlbnRSb3VuZFRpbWUodGhpcy5fdGltZSk7XG4gICAgfVxuICB9XG4gIGluaXRUaW1lKGUgPSAwKSB7XG4gICAgdGhpcy5fYmFzZVRpbWUgPSBlO1xuICAgIHRoaXMuX3RpbWUgPSBlO1xuICAgIHRoaXMuX2lzUGF1c2UgPSBmYWxzZTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLl90aW1lID0gMDtcbiAgICB0aGlzLl9iYXNlVGltZSA9IDA7XG4gICAgdGhpcy5faXNQYXVzZSA9IGZhbHNlO1xuICB9XG4gIHN0b3AoKSB7XG4gICAgdGhpcy5faXNQYXVzZSA9IHRydWU7XG4gICAgdGhpcy5fdGltZSA9IDA7XG4gICAgdGhpcy5fYmFzZVRpbWUgPSAwO1xuICB9XG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5fdGltZSA9IDA7XG4gICAgdGhpcy5fYmFzZVRpbWUgPSAwO1xuICAgIHRoaXMuX2lzUGF1c2UgPSBmYWxzZTtcbiAgfVxufSJdfQ==