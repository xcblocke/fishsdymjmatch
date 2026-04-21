
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/GameInteraction/GameTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9HYW1lSW50ZXJhY3Rpb24vR2FtZVRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQWtCRSxrQkFBWSxDQUFDO1FBakJiLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFjaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQWRELHNCQUFJLCtCQUFTO2FBQWI7WUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUN6QixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGlDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBSUQseUJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7SUFDRCw2QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQWhEQSxBQWdEQyxJQUFBO0FBaERZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdhbWVUaW1lIHtcbiAgX2FjY3VtdWxhdGVkVGltZSA9IDA7XG4gIF9pc1J1bm5pbmcgPSB0cnVlO1xuICBfbGFzdFVwZGF0ZVRpbWUgPSAwO1xuICBfbGFzdEZyYW1lVGltZSA9IDA7XG4gIF9wdXNoRXZlbnQgPSBudWxsO1xuICBnZXQgZGVsdGFUaW1lKCkge1xuICAgIHZhciBlID0gdGhpcy5fbGFzdEZyYW1lVGltZSxcbiAgICAgIHQgPSBlIC0gdGhpcy5fbGFzdFVwZGF0ZVRpbWU7XG4gICAgdGhpcy5fbGFzdFVwZGF0ZVRpbWUgPSBlO1xuICAgIHJldHVybiB0O1xuICB9XG4gIGdldCBjdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdEZyYW1lVGltZTtcbiAgfVxuICBnZXQgYWNjdW11bGF0ZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2N1bXVsYXRlZFRpbWU7XG4gIH1cbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMuX3B1c2hFdmVudCA9IGU7XG4gIH1cbiAgdXBkYXRlKGUpIHtcbiAgICBpZiAodGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICBpZiAoZSA+IDAgJiYgZSA8IDUpIHtcbiAgICAgICAgdGhpcy5fYWNjdW11bGF0ZWRUaW1lICs9IGU7XG4gICAgICAgIHRoaXMuX2xhc3RGcmFtZVRpbWUgKz0gZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9hY2N1bXVsYXRlZFRpbWUgPj0gMykge1xuICAgICAgICB0aGlzLnB1c2hFdmVudCgpO1xuICAgICAgICB0aGlzLl9hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkdhbWVTaG93KCkge1xuICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gIH1cbiAgb25HYW1lSGlkZSgpIHtcbiAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgfVxuICBwdXNoRXZlbnQoKSB7XG4gICAgdGhpcy5fcHVzaEV2ZW50KCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICB0aGlzLl9sYXN0RnJhbWVUaW1lID0gMDtcbiAgICB0aGlzLl9sYXN0VXBkYXRlVGltZSA9IDA7XG4gICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgfVxufSJdfQ==