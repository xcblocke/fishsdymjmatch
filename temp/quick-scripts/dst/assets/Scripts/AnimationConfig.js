
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AnimationConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d6c6yOBZlMq5psFCZ3KaVr', 'AnimationConfig');
// Scripts/AnimationConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationConfig = void 0;
var AnimationConfig = /** @class */ (function () {
    function AnimationConfig(e) {
        this.layerDurations = [];
        this.lineDurations = [];
        this.itemDurations = [];
        this.linePositionDeviations = [];
        this.useSymmetry = true;
        this.leftOutScreenPosition = cc.v2(-100, 0);
        this.leftOutScreenTime = 1;
        this.rightOutScreenPosition = cc.v2(100, 0);
        this.rightOutScreenTime = 1;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
        this.initializeConfig(e);
    }
    AnimationConfig.prototype.resetConfig = function () {
        this.layerDurations = [];
        this.lineDurations = [];
        this.itemDurations = [];
        this.linePositionDeviations = [];
    };
    AnimationConfig.prototype.pushValues = function (e, t, o) {
        for (var n = 0; n < t; n++)
            e.push(o);
    };
    return AnimationConfig;
}());
exports.AnimationConfig = AnimationConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FuaW1hdGlvbkNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBWUUseUJBQVksQ0FBQztRQVhiLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQiwwQkFBcUIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QiwyQkFBc0IsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2Qyx1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUVyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxvQ0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkNvbmZpZyB7XG4gIGxheWVyRHVyYXRpb25zID0gW107XG4gIGxpbmVEdXJhdGlvbnMgPSBbXTtcbiAgaXRlbUR1cmF0aW9ucyA9IFtdO1xuICBsaW5lUG9zaXRpb25EZXZpYXRpb25zID0gW107XG4gIHVzZVN5bW1ldHJ5ID0gdHJ1ZTtcbiAgbGVmdE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoLTEwMCwgMCk7XG4gIGxlZnRPdXRTY3JlZW5UaW1lID0gMTtcbiAgcmlnaHRPdXRTY3JlZW5Qb3NpdGlvbiA9IGNjLnYyKDEwMCwgMCk7XG4gIHJpZ2h0T3V0U2NyZWVuVGltZSA9IDE7XG4gIHNoYWRvd0ZhZGVPdXRUaW1lID0gMDtcbiAgc2hhZG93RmFkZUluVGltZSA9IDAuMjtcbiAgY29uc3RydWN0b3IoZSkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbmZpZyhlKTtcbiAgfVxuICByZXNldENvbmZpZygpIHtcbiAgICB0aGlzLmxheWVyRHVyYXRpb25zID0gW107XG4gICAgdGhpcy5saW5lRHVyYXRpb25zID0gW107XG4gICAgdGhpcy5pdGVtRHVyYXRpb25zID0gW107XG4gICAgdGhpcy5saW5lUG9zaXRpb25EZXZpYXRpb25zID0gW107XG4gIH1cbiAgcHVzaFZhbHVlcyhlLCB0LCBvKSB7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0OyBuKyspIGUucHVzaChvKTtcbiAgfVxufSJdfQ==