
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tileTypes/DuoxiaoChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd20ff4NelNDRIzua2VTF2ds', 'DuoxiaoChecker');
// Scripts/process/tileTypes/DuoxiaoChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var DuoxiaoChecker = /** @class */ (function (_super) {
    __extends(DuoxiaoChecker, _super);
    function DuoxiaoChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuoxiaoChecker.prototype.isInDuoxiaoCombo = function () {
        return this._context.getDuoxiaoClearCount() > 0;
    };
    DuoxiaoChecker.prototype.isHasDuoxiaoCard = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        return !(!n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && !i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard));
    };
    DuoxiaoChecker.prototype.canShowDuoxiaoCombo = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        return !(!n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && !i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard)) || this._context.getDuoxiaoClearCount() > 0;
    };
    DuoxiaoChecker.prototype.getCanClearDuoxiaoCardInfos = function (e) {
        var t = e[0], o = e[1], n = this._context.getTileMapObject().getTileObject(t), i = this._context.getTileMapObject().getTileObject(o);
        if (n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) || i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard)) {
            var r = 0, l = 0;
            n.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && (r = n.getDuoxiaoCount());
            i.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && (l = i.getDuoxiaoCount());
            return {
                tileId1: t,
                tileId2: o,
                count1: r,
                count2: l,
                count: r + l
            };
        }
    };
    return DuoxiaoChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DuoxiaoChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZVR5cGVzL0R1b3hpYW9DaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsc0VBQWtFO0FBQ2xFO0lBQTRDLGtDQUFjO0lBQTFEOztJQXFDQSxDQUFDO0lBcENDLHlDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QseUNBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx3QkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx3QkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUNELDRDQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekksQ0FBQztJQUNELG9EQUEyQixHQUEzQixVQUE0QixDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDUixDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLFlBQVksQ0FBQyx3QkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2IsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQzJDLCtCQUFjLEdBcUN6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW94aWFvQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgaXNJbkR1b3hpYW9Db21ibygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpID4gMDtcbiAgfVxuICBpc0hhc0R1b3hpYW9DYXJkKGUpIHtcbiAgICB2YXIgdCA9IGVbMF0sXG4gICAgICBvID0gZVsxXSxcbiAgICAgIG4gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KHQpLFxuICAgICAgaSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3Qobyk7XG4gICAgcmV0dXJuICEoIW4uY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5EdW94aWFvQ2FyZCkgJiYgIWkuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5EdW94aWFvQ2FyZCkpO1xuICB9XG4gIGNhblNob3dEdW94aWFvQ29tYm8oZSkge1xuICAgIHZhciB0ID0gZVswXSxcbiAgICAgIG8gPSBlWzFdLFxuICAgICAgbiA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QodCksXG4gICAgICBpID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChvKTtcbiAgICByZXR1cm4gISghbi5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSAmJiAhaS5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSkgfHwgdGhpcy5fY29udGV4dC5nZXREdW94aWFvQ2xlYXJDb3VudCgpID4gMDtcbiAgfVxuICBnZXRDYW5DbGVhckR1b3hpYW9DYXJkSW5mb3MoZSkge1xuICAgIHZhciB0ID0gZVswXSxcbiAgICAgIG8gPSBlWzFdLFxuICAgICAgbiA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QodCksXG4gICAgICBpID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChvKTtcbiAgICBpZiAobi5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSB8fCBpLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRHVveGlhb0NhcmQpKSB7XG4gICAgICB2YXIgciA9IDAsXG4gICAgICAgIGwgPSAwO1xuICAgICAgbi5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSAmJiAociA9IG4uZ2V0RHVveGlhb0NvdW50KCkpO1xuICAgICAgaS5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSAmJiAobCA9IGkuZ2V0RHVveGlhb0NvdW50KCkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGlsZUlkMTogdCxcbiAgICAgICAgdGlsZUlkMjogbyxcbiAgICAgICAgY291bnQxOiByLFxuICAgICAgICBjb3VudDI6IGwsXG4gICAgICAgIGNvdW50OiByICsgbFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn0iXX0=