
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/data/TouchData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RhdGEvVG91Y2hEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFvRG5CLENBQUM7SUFuREMsc0JBQUksNkJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDhCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw4QkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNkJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLCtCQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0QsNkJBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsOEJBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsOEJBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsNkJBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsK0JBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsMEJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsMEJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsK0JBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QseUJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDSCxnQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG91Y2hEYXRhIHtcbiAgX3RpbGVJZCA9IG51bGw7XG4gIF9pc0NsZWFyID0gbnVsbDtcbiAgX2lzVmFsaWQgPSBudWxsO1xuICBfaXNMb2NrID0gbnVsbDtcbiAgX2lzTW92aW5nID0gbnVsbDtcbiAgX3BvcyA9IG51bGw7XG4gIF9zdGFydFBvcyA9IG51bGw7XG4gIGdldCB0aWxlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbGVJZDtcbiAgfVxuICBnZXQgaXNDbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNDbGVhcjtcbiAgfVxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbiAgfVxuICBnZXQgaXNMb2NrKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvY2s7XG4gIH1cbiAgZ2V0IGlzTW92aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc01vdmluZztcbiAgfVxuICBnZXQgc3RhcnRQb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0UG9zO1xuICB9XG4gIHNldFRpbGVJZChlKSB7XG4gICAgdGhpcy5fdGlsZUlkID0gZTtcbiAgfVxuICBzZXRJc0NsZWFyKGUpIHtcbiAgICB0aGlzLl9pc0NsZWFyID0gZTtcbiAgfVxuICBzZXRJc1ZhbGlkKGUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gZTtcbiAgfVxuICBzZXRJc0xvY2soZSkge1xuICAgIHRoaXMuX2lzTG9jayA9IGU7XG4gIH1cbiAgc2V0SXNNb3ZpbmcoZSkge1xuICAgIHRoaXMuX2lzTW92aW5nID0gZTtcbiAgfVxuICBzZXRQb3MoZSkge1xuICAgIHRoaXMuX3BvcyA9IGU7XG4gIH1cbiAgZ2V0UG9zKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3M7XG4gIH1cbiAgc2V0U3RhcnRQb3MoZSkge1xuICAgIHRoaXMuX3N0YXJ0UG9zID0gZTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLl90aWxlSWQgPSBudWxsO1xuICAgIHRoaXMuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0xvY2sgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0NsZWFyID0gZmFsc2U7XG4gICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9wb3MgPSBudWxsO1xuICAgIHRoaXMuX3N0YXJ0UG9zID0gbnVsbDtcbiAgfVxufSJdfQ==