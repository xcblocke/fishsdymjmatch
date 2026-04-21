
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/data/Tile2SlotBarData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '511627lBhhH6qwMJIQdnQwC', 'Tile2SlotBarData');
// Scripts/data/Tile2SlotBarData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotBarData = void 0;
var Tile2SlotBarData = /** @class */ (function () {
    function Tile2SlotBarData() {
        this._canDianZanTileIds = null;
        this._slotBarTileSteps = {};
        this._slotBarTileClearSteps = {};
        this._rollCardLockTileIds = {};
    }
    Object.defineProperty(Tile2SlotBarData.prototype, "slotBarTileSteps", {
        get: function () {
            return this._slotBarTileSteps;
        },
        set: function (e) {
            this._slotBarTileSteps = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2SlotBarData.prototype, "canDianZanTileIds", {
        get: function () {
            return this._canDianZanTileIds;
        },
        set: function (e) {
            this._canDianZanTileIds = e || [];
        },
        enumerable: false,
        configurable: true
    });
    Tile2SlotBarData.prototype.addTileStep = function (e) {
        if (this._slotBarTileSteps[e]) {
            this._slotBarTileSteps[e]++;
        }
        else {
            this._slotBarTileSteps[e] = 1;
        }
    };
    Tile2SlotBarData.prototype.resetTileStep = function (e) {
        this._slotBarTileSteps[e] && delete this._slotBarTileSteps[e];
    };
    Tile2SlotBarData.prototype.getTileStep = function (e) {
        return this._slotBarTileSteps[e] || 0;
    };
    Tile2SlotBarData.prototype.clearTileStep = function (e) {
        if (e && 0 !== e.length)
            for (var t = Object.keys(this._slotBarTileSteps), o = 0; o < t.length; o++) {
                var n = t[o];
                e.includes(n) || this.resetTileStep(n);
            }
    };
    Tile2SlotBarData.prototype.addTileClearStep = function (e) {
        if (this._slotBarTileClearSteps[e]) {
            this._slotBarTileClearSteps[e]++;
        }
        else {
            this._slotBarTileClearSteps[e] = 1;
        }
    };
    Tile2SlotBarData.prototype.getTileClearStep = function (e) {
        return this._slotBarTileClearSteps[e] || 0;
    };
    Tile2SlotBarData.prototype.resetTileClearStep = function (e) {
        this._slotBarTileClearSteps[e] && delete this._slotBarTileClearSteps[e];
    };
    Tile2SlotBarData.prototype.clearTileClearSteps = function (e) {
        var t, o;
        if (e && 0 !== e.length) {
            var i = Object.keys(this._slotBarTileClearSteps);
            try {
                for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
                    var l = a.value;
                    e.includes(l) || this.resetTileClearStep(l);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (o = r.return) && o.call(r);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    Tile2SlotBarData.prototype.addRollCardLockTileId = function (e, t) {
        this._rollCardLockTileIds || (this._rollCardLockTileIds = {});
        this._rollCardLockTileIds[e] = t;
    };
    Tile2SlotBarData.prototype.getRollCardLockTileIds = function () {
        return this._rollCardLockTileIds ? Object.keys(this._rollCardLockTileIds) : [];
    };
    Tile2SlotBarData.prototype.removeRollCardLockTileId = function (e) {
        this._rollCardLockTileIds && this._rollCardLockTileIds[e] && delete this._rollCardLockTileIds[e];
    };
    Tile2SlotBarData.prototype.clearCardLockData = function () {
        this._rollCardLockTileIds && (this._rollCardLockTileIds = null);
    };
    Tile2SlotBarData.prototype.clearCanDianZanTileIds = function () {
        this._canDianZanTileIds && (this._canDianZanTileIds = null);
    };
    return Tile2SlotBarData;
}());
exports.Tile2SlotBarData = Tile2SlotBarData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RhdGEvVGlsZTJTbG90QmFyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFDRSx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1Qix5QkFBb0IsR0FBRyxFQUFFLENBQUM7SUFtRjVCLENBQUM7SUFsRkMsc0JBQUksOENBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzthQUNELFVBQXFCLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FIQTtJQUlELHNCQUFJLCtDQUFpQjthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUFzQixDQUFDO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLENBQUM7OztPQUhBO0lBSUQsc0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDRCx3Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0Qsc0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFB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QyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pGLENBQUM7SUFDRCxtREFBd0IsR0FBeEIsVUFBeUIsQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFDRCw0Q0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELGlEQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQXZGQSxBQXVGQyxJQUFBO0FBdkZZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaWxlMlNsb3RCYXJEYXRhIHtcbiAgX2NhbkRpYW5aYW5UaWxlSWRzID0gbnVsbDtcbiAgX3Nsb3RCYXJUaWxlU3RlcHMgPSB7fTtcbiAgX3Nsb3RCYXJUaWxlQ2xlYXJTdGVwcyA9IHt9O1xuICBfcm9sbENhcmRMb2NrVGlsZUlkcyA9IHt9O1xuICBnZXQgc2xvdEJhclRpbGVTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2xvdEJhclRpbGVTdGVwcztcbiAgfVxuICBzZXQgc2xvdEJhclRpbGVTdGVwcyhlKSB7XG4gICAgdGhpcy5fc2xvdEJhclRpbGVTdGVwcyA9IGU7XG4gIH1cbiAgZ2V0IGNhbkRpYW5aYW5UaWxlSWRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYW5EaWFuWmFuVGlsZUlkcztcbiAgfVxuICBzZXQgY2FuRGlhblphblRpbGVJZHMoZSkge1xuICAgIHRoaXMuX2NhbkRpYW5aYW5UaWxlSWRzID0gZSB8fCBbXTtcbiAgfVxuICBhZGRUaWxlU3RlcChlKSB7XG4gICAgaWYgKHRoaXMuX3Nsb3RCYXJUaWxlU3RlcHNbZV0pIHtcbiAgICAgIHRoaXMuX3Nsb3RCYXJUaWxlU3RlcHNbZV0rKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xvdEJhclRpbGVTdGVwc1tlXSA9IDE7XG4gICAgfVxuICB9XG4gIHJlc2V0VGlsZVN0ZXAoZSkge1xuICAgIHRoaXMuX3Nsb3RCYXJUaWxlU3RlcHNbZV0gJiYgZGVsZXRlIHRoaXMuX3Nsb3RCYXJUaWxlU3RlcHNbZV07XG4gIH1cbiAgZ2V0VGlsZVN0ZXAoZSkge1xuICAgIHJldHVybiB0aGlzLl9zbG90QmFyVGlsZVN0ZXBzW2VdIHx8IDA7XG4gIH1cbiAgY2xlYXJUaWxlU3RlcChlKSB7XG4gICAgaWYgKGUgJiYgMCAhPT0gZS5sZW5ndGgpIGZvciAodmFyIHQgPSBPYmplY3Qua2V5cyh0aGlzLl9zbG90QmFyVGlsZVN0ZXBzKSwgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgbiA9IHRbb107XG4gICAgICBlLmluY2x1ZGVzKG4pIHx8IHRoaXMucmVzZXRUaWxlU3RlcChuKTtcbiAgICB9XG4gIH1cbiAgYWRkVGlsZUNsZWFyU3RlcChlKSB7XG4gICAgaWYgKHRoaXMuX3Nsb3RCYXJUaWxlQ2xlYXJTdGVwc1tlXSkge1xuICAgICAgdGhpcy5fc2xvdEJhclRpbGVDbGVhclN0ZXBzW2VdKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nsb3RCYXJUaWxlQ2xlYXJTdGVwc1tlXSA9IDE7XG4gICAgfVxuICB9XG4gIGdldFRpbGVDbGVhclN0ZXAoZSkge1xuICAgIHJldHVybiB0aGlzLl9zbG90QmFyVGlsZUNsZWFyU3RlcHNbZV0gfHwgMDtcbiAgfVxuICByZXNldFRpbGVDbGVhclN0ZXAoZSkge1xuICAgIHRoaXMuX3Nsb3RCYXJUaWxlQ2xlYXJTdGVwc1tlXSAmJiBkZWxldGUgdGhpcy5fc2xvdEJhclRpbGVDbGVhclN0ZXBzW2VdO1xuICB9XG4gIGNsZWFyVGlsZUNsZWFyU3RlcHMoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGlmIChlICYmIDAgIT09IGUubGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IE9iamVjdC5rZXlzKHRoaXMuX3Nsb3RCYXJUaWxlQ2xlYXJTdGVwcyk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciByID0gX192YWx1ZXMoaSksIGEgPSByLm5leHQoKTsgIWEuZG9uZTsgYSA9IHIubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGwgPSBhLnZhbHVlO1xuICAgICAgICAgIGUuaW5jbHVkZXMobCkgfHwgdGhpcy5yZXNldFRpbGVDbGVhclN0ZXAobCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSByLnJldHVybikgJiYgby5jYWxsKHIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZFJvbGxDYXJkTG9ja1RpbGVJZChlLCB0KSB7XG4gICAgdGhpcy5fcm9sbENhcmRMb2NrVGlsZUlkcyB8fCAodGhpcy5fcm9sbENhcmRMb2NrVGlsZUlkcyA9IHt9KTtcbiAgICB0aGlzLl9yb2xsQ2FyZExvY2tUaWxlSWRzW2VdID0gdDtcbiAgfVxuICBnZXRSb2xsQ2FyZExvY2tUaWxlSWRzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xsQ2FyZExvY2tUaWxlSWRzID8gT2JqZWN0LmtleXModGhpcy5fcm9sbENhcmRMb2NrVGlsZUlkcykgOiBbXTtcbiAgfVxuICByZW1vdmVSb2xsQ2FyZExvY2tUaWxlSWQoZSkge1xuICAgIHRoaXMuX3JvbGxDYXJkTG9ja1RpbGVJZHMgJiYgdGhpcy5fcm9sbENhcmRMb2NrVGlsZUlkc1tlXSAmJiBkZWxldGUgdGhpcy5fcm9sbENhcmRMb2NrVGlsZUlkc1tlXTtcbiAgfVxuICBjbGVhckNhcmRMb2NrRGF0YSgpIHtcbiAgICB0aGlzLl9yb2xsQ2FyZExvY2tUaWxlSWRzICYmICh0aGlzLl9yb2xsQ2FyZExvY2tUaWxlSWRzID0gbnVsbCk7XG4gIH1cbiAgY2xlYXJDYW5EaWFuWmFuVGlsZUlkcygpIHtcbiAgICB0aGlzLl9jYW5EaWFuWmFuVGlsZUlkcyAmJiAodGhpcy5fY2FuRGlhblphblRpbGVJZHMgPSBudWxsKTtcbiAgfVxufSJdfQ==