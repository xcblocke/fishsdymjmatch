
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2CurveShuffle/Scripts/Tile2CurveShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72c24RxVrhE4Z7gGgaMXj4P', 'Tile2CurveShuffleTrait');
// subpackages/l_tile2CurveShuffle/Scripts/Tile2CurveShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2CurveSolver_1 = require("./Tile2CurveSolver");
var Tile2CurveShuffleTrait = /** @class */ (function (_super) {
    __extends(Tile2CurveShuffleTrait, _super);
    function Tile2CurveShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curveParams = {};
        return _this;
    }
    Tile2CurveShuffleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var r = this._traitData;
        void 0 !== r.minStepsForPeak && (this._curveParams.minStepsForPeak = r.minStepsForPeak);
        void 0 !== r.updateProbability && (this._curveParams.updateProbability = r.updateProbability);
        void 0 !== r.avgOccupancyRate && (this._curveParams.avgOccupancyRate = r.avgOccupancyRate);
        void 0 !== r.preferRemaining01 && (this._curveParams.preferRemaining01 = r.preferRemaining01);
        void 0 !== r.preferRemainingMin23 && (this._curveParams.preferRemainingMin23 = r.preferRemainingMin23);
    };
    Tile2CurveShuffleTrait.prototype.onTile2ShuffleMod_compute = function (e, r) {
        var t = e.ins._context;
        Date.now();
        if (new Tile2CurveSolver_1.default().shuffleWithContext(t, this._curveParams)) {
            r({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    Tile2CurveShuffleTrait.traitKey = "Tile2CurveShuffle";
    Tile2CurveShuffleTrait = __decorate([
        mj.trait,
        mj.class("Tile2CurveShuffleTrait")
    ], Tile2CurveShuffleTrait);
    return Tile2CurveShuffleTrait;
}(Trait_1.default));
exports.default = Tile2CurveShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyQ3VydmVTaHVmZmxlL1NjcmlwdHMvVGlsZTJDdXJ2ZVNodWZmbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHVEQUFrRDtBQUdsRDtJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQXdCQztRQXZCQyxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7SUF1QnBCLENBQUM7SUFyQkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUYsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekcsQ0FBQztJQUNELDBEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLElBQUksMEJBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ25FLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFyQk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUZuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBd0IxQztJQUFELDZCQUFDO0NBeEJELEFBd0JDLENBeEJtRCxlQUFLLEdBd0J4RDtrQkF4Qm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVGlsZTJDdXJ2ZVNvbHZlciBmcm9tICcuL1RpbGUyQ3VydmVTb2x2ZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMkN1cnZlU2h1ZmZsZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkN1cnZlU2h1ZmZsZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY3VydmVQYXJhbXMgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkN1cnZlU2h1ZmZsZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIHIgPSB0aGlzLl90cmFpdERhdGE7XG4gICAgdm9pZCAwICE9PSByLm1pblN0ZXBzRm9yUGVhayAmJiAodGhpcy5fY3VydmVQYXJhbXMubWluU3RlcHNGb3JQZWFrID0gci5taW5TdGVwc0ZvclBlYWspO1xuICAgIHZvaWQgMCAhPT0gci51cGRhdGVQcm9iYWJpbGl0eSAmJiAodGhpcy5fY3VydmVQYXJhbXMudXBkYXRlUHJvYmFiaWxpdHkgPSByLnVwZGF0ZVByb2JhYmlsaXR5KTtcbiAgICB2b2lkIDAgIT09IHIuYXZnT2NjdXBhbmN5UmF0ZSAmJiAodGhpcy5fY3VydmVQYXJhbXMuYXZnT2NjdXBhbmN5UmF0ZSA9IHIuYXZnT2NjdXBhbmN5UmF0ZSk7XG4gICAgdm9pZCAwICE9PSByLnByZWZlclJlbWFpbmluZzAxICYmICh0aGlzLl9jdXJ2ZVBhcmFtcy5wcmVmZXJSZW1haW5pbmcwMSA9IHIucHJlZmVyUmVtYWluaW5nMDEpO1xuICAgIHZvaWQgMCAhPT0gci5wcmVmZXJSZW1haW5pbmdNaW4yMyAmJiAodGhpcy5fY3VydmVQYXJhbXMucHJlZmVyUmVtYWluaW5nTWluMjMgPSByLnByZWZlclJlbWFpbmluZ01pbjIzKTtcbiAgfVxuICBvblRpbGUyU2h1ZmZsZU1vZF9jb21wdXRlKGUsIHIpIHtcbiAgICB2YXIgdCA9IGUuaW5zLl9jb250ZXh0O1xuICAgIERhdGUubm93KCk7XG4gICAgaWYgKG5ldyBUaWxlMkN1cnZlU29sdmVyKCkuc2h1ZmZsZVdpdGhDb250ZXh0KHQsIHRoaXMuX2N1cnZlUGFyYW1zKSkge1xuICAgICAgcih7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=