
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2HitTipsVibrateBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa998KZwI9NWakWgfj6TNVV', 'Tile2HitTipsVibrateBehavior');
// Scripts/base/Tile2HitTipsVibrateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsVibrateBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2HitTipsVibrateBehavior = /** @class */ (function (_super) {
    __extends(Tile2HitTipsVibrateBehavior, _super);
    function Tile2HitTipsVibrateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2HitTipsVibrateBehavior.prototype.start = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Light, VibrateManager_1.EVibratePoint.Tile2HitTips);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2HitTipsVibBhv_start")
    ], Tile2HitTipsVibrateBehavior.prototype, "start", null);
    return Tile2HitTipsVibrateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2HitTipsVibrateBehavior = Tile2HitTipsVibrateBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJIaXRUaXBzVmlicmF0ZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQTBHO0FBQzFHLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBaUQsK0NBQWlCO0lBQWxFOztJQU1BLENBQUM7SUFKQywyQ0FBSyxHQUFMO1FBQ0Usd0JBQWMsQ0FBQyxjQUFjLENBQUMsaUNBQWdCLENBQUMsS0FBSyxFQUFFLDhCQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFIRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7NERBSXRDO0lBQ0gsa0NBQUM7Q0FORCxBQU1DLENBTmdELHFDQUFpQixHQU1qRTtBQU5ZLGtFQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWJyYXRlTWFuYWdlciwgeyBFVmlicmF0ZVN0cmVuZ3RoLCBFVmlicmF0ZVBvaW50IH0gZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUySGl0VGlwc1ZpYnJhdGVCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkhpdFRpcHNWaWJCaHZfc3RhcnRcIilcbiAgc3RhcnQoKSB7XG4gICAgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUoRVZpYnJhdGVTdHJlbmd0aC5MaWdodCwgRVZpYnJhdGVQb2ludC5UaWxlMkhpdFRpcHMpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=