
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/data/Tile2TouchData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RhdGEvVGlsZTJUb3VjaERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ0Usb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7SUE2Q25CLENBQUM7SUE1Q0Msc0JBQUksc0NBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9DQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxrQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksa0NBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9DQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCwwQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELDBDQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsc0NBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsa0NBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsa0NBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsb0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDSCxxQkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGlsZTJUb3VjaERhdGEge1xuICBfdG91c2hTdGFydFRpbWUgPSBudWxsO1xuICBfbGFzdFRpbGVJZCA9IG51bGw7XG4gIF9zdGFydFBvcyA9IG51bGw7XG4gIF90aWxlSWQgPSBudWxsO1xuICBfaXNMb2NrID0gbnVsbDtcbiAgX2lzTW92aW5nID0gbnVsbDtcbiAgZ2V0IGxhc3RUaWxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RUaWxlSWQ7XG4gIH1cbiAgZ2V0IHN0YXJ0UG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFBvcztcbiAgfVxuICBnZXQgdGlsZUlkKCkge1xuICAgIHJldHVybiB0aGlzLl90aWxlSWQ7XG4gIH1cbiAgZ2V0IGlzTG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2NrO1xuICB9XG4gIGdldCBpc01vdmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb3Zpbmc7XG4gIH1cbiAgc2V0VG91c2hTdGFydFRpbWUoKSB7XG4gICAgdmFyIGUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3RvdXNoU3RhcnRUaW1lID0gZTtcbiAgfVxuICBnZXRUb3VzaFN0YXJ0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91c2hTdGFydFRpbWU7XG4gIH1cbiAgc2V0TGFzdFRpbGVJZChlKSB7XG4gICAgdGhpcy5fbGFzdFRpbGVJZCA9IGU7XG4gIH1cbiAgc2V0U3RhcnRQb3MoZSkge1xuICAgIHRoaXMuX3N0YXJ0UG9zID0gZTtcbiAgfVxuICBzZXRUaWxlSWQoZSkge1xuICAgIHRoaXMuX3RpbGVJZCA9IGU7XG4gIH1cbiAgc2V0SXNMb2NrKGUpIHtcbiAgICB0aGlzLl9pc0xvY2sgPSBlO1xuICB9XG4gIHNldElzTW92aW5nKGUpIHtcbiAgICB0aGlzLl9pc01vdmluZyA9IGU7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fdGlsZUlkID0gbnVsbDtcbiAgICB0aGlzLl9pc0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xuICAgIHRoaXMuX3N0YXJ0UG9zID0gbnVsbDtcbiAgICB0aGlzLl90b3VzaFN0YXJ0VGltZSA9IDA7XG4gIH1cbn0iXX0=