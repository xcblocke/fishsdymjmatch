
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2HardStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4c52PHsM9JnarN7itw5osg', 'Tile2HardStrategy');
// Scripts/Tile2HardStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2HardStrategy = /** @class */ (function (_super) {
    __extends(Tile2HardStrategy, _super);
    function Tile2HardStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2Hard";
        _this.priority = 80;
        return _this;
    }
    Tile2HardStrategy.prototype.getPriority = function () {
        return 80;
    };
    Tile2HardStrategy.prototype.isHardLevel = function () {
        return false;
    };
    Tile2HardStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        return Promise.resolve();
    };
    Tile2HardStrategy.prototype.canHandle = function (e) {
        var t = e.gameData.getLevelId();
        return !!t && this.isHardLevel(t);
    };
    Tile2HardStrategy.prototype.extract = function () {
        return Promise.resolve(null);
    };
    __decorate([
        mj.traitEvent("T2HarStr_priority")
    ], Tile2HardStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2HarStr_isHard")
    ], Tile2HardStrategy.prototype, "isHardLevel", null);
    __decorate([
        mj.traitEvent("T2HarStr_extract")
    ], Tile2HardStrategy.prototype, "extract", null);
    Tile2HardStrategy = __decorate([
        mj.class("Tile2HardStrategy")
    ], Tile2HardStrategy);
    return Tile2HardStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2HardStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUySGFyZFN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQ7SUFBK0MscUNBQWlCO0lBQWhFO1FBQUEscUVBdUJDO1FBdEJDLFVBQUksR0FBRyxXQUFXLENBQUM7UUFDbkIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFxQmhCLENBQUM7SUFuQkMsdUNBQVcsR0FBWDtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxnQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELHFDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzt3REFHbEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7d0RBR2hDO0lBVUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO29EQUdqQztJQXRCa0IsaUJBQWlCO1FBRHJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0F1QnJDO0lBQUQsd0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QjhDLDJCQUFpQixHQXVCL0Q7a0JBdkJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGlsZTJCYXNlU3RyYXRlZ3kgZnJvbSAnLi9UaWxlMkJhc2VTdHJhdGVneSc7XG5AbWouY2xhc3MoXCJUaWxlMkhhcmRTdHJhdGVneVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJIYXJkU3RyYXRlZ3kgZXh0ZW5kcyBUaWxlMkJhc2VTdHJhdGVneSB7XG4gIG5hbWUgPSBcIlRpbGUySGFyZFwiO1xuICBwcmlvcml0eSA9IDgwO1xuICBAbWoudHJhaXRFdmVudChcIlQySGFyU3RyX3ByaW9yaXR5XCIpXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiA4MDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQySGFyU3RyX2lzSGFyZFwiKVxuICBpc0hhcmRMZXZlbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5nZXRQcmlvcml0eSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBjYW5IYW5kbGUoZSkge1xuICAgIHZhciB0ID0gZS5nYW1lRGF0YS5nZXRMZXZlbElkKCk7XG4gICAgcmV0dXJuICEhdCAmJiB0aGlzLmlzSGFyZExldmVsKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJIYXJTdHJfZXh0cmFjdFwiKVxuICBleHRyYWN0KCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH1cbn0iXX0=