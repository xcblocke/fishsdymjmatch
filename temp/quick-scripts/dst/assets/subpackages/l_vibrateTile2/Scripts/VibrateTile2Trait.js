
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrateTile2/Scripts/VibrateTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddc7apRXhpPLJZ3V2L/VcOL', 'VibrateTile2Trait');
// subpackages/l_vibrateTile2/Scripts/VibrateTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateTile2Trait = /** @class */ (function (_super) {
    __extends(VibrateTile2Trait, _super);
    function VibrateTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrateTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    VibrateTile2Trait.prototype.triggerVibrate = function (t, e) {
        VibrateManager_1.default.executeVibrate(t, e);
    };
    VibrateTile2Trait.prototype.triggerTile2Rule = function (t, e) {
        t !== VibrateManager_1.EVibrateStrength.Disabled && this.triggerVibrate(t, e);
    };
    VibrateTile2Trait.prototype.onTile2IptTchEnd_runClr = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Medium, VibrateManager_1.EVibratePoint.Tile2TileSelect);
        e();
    };
    VibrateTile2Trait.prototype.onT2TchRunLock_exec = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Multiple, VibrateManager_1.EVibratePoint.Tile2TileLock);
        e();
    };
    VibrateTile2Trait.prototype.onT2ClearBhv_collision = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2TileClear);
        e();
    };
    VibrateTile2Trait.prototype.onTile2WinBhv_start = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.DoubleWeak, VibrateManager_1.EVibratePoint.Tile2Win);
        e();
    };
    VibrateTile2Trait.prototype.onTile2BfWinBhv_start = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.DoubleWeak, VibrateManager_1.EVibratePoint.Tile2BeforeWin);
        e();
    };
    VibrateTile2Trait.prototype.onTile2FlipAni_AnimComplete = function (t, e) {
        this.triggerTile2Rule(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2Flip);
        e();
    };
    VibrateTile2Trait.prototype.onT2ScreenEdgeBhv_start = function (t, e) {
        t.args[0];
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Light, VibrateManager_1.EVibratePoint.Tile2ScreenEdge);
        e();
    };
    VibrateTile2Trait.prototype.checkComboDelayVibrate = function (t) {
        if ("number" == typeof t && t % 5 == 0) {
            var e = t / 5, r = this.buildComboDelayIntervals(e);
            VibrateManager_1.default.executeDelayedVibrateSequence(VibrateManager_1.EVibrateStrength.Light, r, VibrateManager_1.EVibratePoint.Tile2ComboDelayVibrate);
        }
    };
    VibrateTile2Trait.prototype.buildComboDelayIntervals = function (t) {
        if (t <= 0)
            return [];
        for (var e = [150], r = 1; r < t; r++)
            e.push(200);
        return e;
    };
    VibrateTile2Trait.prototype.onT2SlotAdvBhv_advance = function (t, e) {
        this.triggerVibrate(VibrateManager_1.EVibrateStrength.Strong, VibrateManager_1.EVibratePoint.Tile2SlotAdvance);
        e();
    };
    VibrateTile2Trait.traitKey = "VibrateTile2";
    VibrateTile2Trait = __decorate([
        mj.trait,
        mj.class("VibrateTile2Trait")
    ], VibrateTile2Trait);
    return VibrateTile2Trait;
}(Trait_1.default));
exports.default = VibrateTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGVUaWxlMi9TY3JpcHRzL1ZpYnJhdGVUaWxlMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQXdIO0FBR3hIO0lBQStDLHFDQUFLO0lBQXBEOztJQXdEQSxDQUFDO0lBdERDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsd0JBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxLQUFLLGlDQUFnQixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsbURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBZ0IsQ0FBQyxNQUFNLEVBQUUsOEJBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwrQ0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlDQUFnQixDQUFDLFFBQVEsRUFBRSw4QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUNBQWdCLENBQUMsTUFBTSxFQUFFLDhCQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsK0NBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsOEJBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRSxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxpREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlDQUFnQixDQUFDLFVBQVUsRUFBRSw4QkFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHVEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUNBQWdCLENBQUMsTUFBTSxFQUFFLDhCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsbURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVix3QkFBYyxDQUFDLGNBQWMsQ0FBQyxpQ0FBZ0IsQ0FBQyxLQUFLLEVBQUUsOEJBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBc0IsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNYLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsd0JBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxpQ0FBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLDhCQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUMvRztJQUNILENBQUM7SUFDRCxvREFBd0IsR0FBeEIsVUFBeUIsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGtEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLGlDQUFnQixDQUFDLE1BQU0sRUFBRSw4QkFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0UsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBdERNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRGQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQXdEckM7SUFBRCx3QkFBQztDQXhERCxBQXdEQyxDQXhEOEMsZUFBSyxHQXdEbkQ7a0JBeERvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGgsIEVWaWJyYXRlUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZpYnJhdGVUaWxlMlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWJyYXRlVGlsZTJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWaWJyYXRlVGlsZTJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIHRyaWdnZXJWaWJyYXRlKHQsIGUpIHtcbiAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0LCBlKTtcbiAgfVxuICB0cmlnZ2VyVGlsZTJSdWxlKHQsIGUpIHtcbiAgICB0ICE9PSBFVmlicmF0ZVN0cmVuZ3RoLkRpc2FibGVkICYmIHRoaXMudHJpZ2dlclZpYnJhdGUodCwgZSk7XG4gIH1cbiAgb25UaWxlMklwdFRjaEVuZF9ydW5DbHIodCwgZSkge1xuICAgIHRoaXMudHJpZ2dlclRpbGUyUnVsZShFVmlicmF0ZVN0cmVuZ3RoLk1lZGl1bSwgRVZpYnJhdGVQb2ludC5UaWxlMlRpbGVTZWxlY3QpO1xuICAgIGUoKTtcbiAgfVxuICBvblQyVGNoUnVuTG9ja19leGVjKHQsIGUpIHtcbiAgICB0aGlzLnRyaWdnZXJUaWxlMlJ1bGUoRVZpYnJhdGVTdHJlbmd0aC5NdWx0aXBsZSwgRVZpYnJhdGVQb2ludC5UaWxlMlRpbGVMb2NrKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UMkNsZWFyQmh2X2NvbGxpc2lvbih0LCBlKSB7XG4gICAgdGhpcy50cmlnZ2VyVGlsZTJSdWxlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nLCBFVmlicmF0ZVBvaW50LlRpbGUyVGlsZUNsZWFyKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UaWxlMldpbkJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy50cmlnZ2VyVGlsZTJSdWxlKEVWaWJyYXRlU3RyZW5ndGguRG91YmxlV2VhaywgRVZpYnJhdGVQb2ludC5UaWxlMldpbik7XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJCZldpbkJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy50cmlnZ2VyVGlsZTJSdWxlKEVWaWJyYXRlU3RyZW5ndGguRG91YmxlV2VhaywgRVZpYnJhdGVQb2ludC5UaWxlMkJlZm9yZVdpbik7XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJGbGlwQW5pX0FuaW1Db21wbGV0ZSh0LCBlKSB7XG4gICAgdGhpcy50cmlnZ2VyVGlsZTJSdWxlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nLCBFVmlicmF0ZVBvaW50LlRpbGUyRmxpcCk7XG4gICAgZSgpO1xuICB9XG4gIG9uVDJTY3JlZW5FZGdlQmh2X3N0YXJ0KHQsIGUpIHtcbiAgICB0LmFyZ3NbMF07XG4gICAgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUoRVZpYnJhdGVTdHJlbmd0aC5MaWdodCwgRVZpYnJhdGVQb2ludC5UaWxlMlNjcmVlbkVkZ2UpO1xuICAgIGUoKTtcbiAgfVxuICBjaGVja0NvbWJvRGVsYXlWaWJyYXRlKHQpIHtcbiAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgdCAmJiB0ICUgNSA9PSAwKSB7XG4gICAgICB2YXIgZSA9IHQgLyA1LFxuICAgICAgICByID0gdGhpcy5idWlsZENvbWJvRGVsYXlJbnRlcnZhbHMoZSk7XG4gICAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlRGVsYXllZFZpYnJhdGVTZXF1ZW5jZShFVmlicmF0ZVN0cmVuZ3RoLkxpZ2h0LCByLCBFVmlicmF0ZVBvaW50LlRpbGUyQ29tYm9EZWxheVZpYnJhdGUpO1xuICAgIH1cbiAgfVxuICBidWlsZENvbWJvRGVsYXlJbnRlcnZhbHModCkge1xuICAgIGlmICh0IDw9IDApIHJldHVybiBbXTtcbiAgICBmb3IgKHZhciBlID0gWzE1MF0sIHIgPSAxOyByIDwgdDsgcisrKSBlLnB1c2goMjAwKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBvblQyU2xvdEFkdkJodl9hZHZhbmNlKHQsIGUpIHtcbiAgICB0aGlzLnRyaWdnZXJWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nLCBFVmlicmF0ZVBvaW50LlRpbGUyU2xvdEFkdmFuY2UpO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==