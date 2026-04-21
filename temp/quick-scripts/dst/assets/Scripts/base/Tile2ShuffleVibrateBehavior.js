
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2ShuffleVibrateBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8c6eqTtQpEeZhalSBbXXpQ', 'Tile2ShuffleVibrateBehavior');
// Scripts/base/Tile2ShuffleVibrateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleVibrateBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ShuffleVibrateBehavior = /** @class */ (function (_super) {
    __extends(Tile2ShuffleVibrateBehavior, _super);
    function Tile2ShuffleVibrateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ShuffleVibrateBehavior.prototype.start = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Light, VibrateManager_1.EVibratePoint.Tile2ShuffleVibrate);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2ShuffleVibBhv_start")
    ], Tile2ShuffleVibrateBehavior.prototype, "start", null);
    return Tile2ShuffleVibrateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ShuffleVibrateBehavior = Tile2ShuffleVibrateBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTaHVmZmxlVmlicmF0ZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQTBHO0FBQzFHLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBaUQsK0NBQWlCO0lBQWxFOztJQU1BLENBQUM7SUFKQywyQ0FBSyxHQUFMO1FBQ0Usd0JBQWMsQ0FBQyxjQUFjLENBQUMsaUNBQWdCLENBQUMsS0FBSyxFQUFFLDhCQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUhEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs0REFJdEM7SUFDSCxrQ0FBQztDQU5ELEFBTUMsQ0FOZ0QscUNBQWlCLEdBTWpFO0FBTlksa0VBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGgsIEVWaWJyYXRlUG9pbnQgfSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJTaHVmZmxlVmlicmF0ZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIlQyU2h1ZmZsZVZpYkJodl9zdGFydFwiKVxuICBzdGFydCgpIHtcbiAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZShFVmlicmF0ZVN0cmVuZ3RoLkxpZ2h0LCBFVmlicmF0ZVBvaW50LlRpbGUyU2h1ZmZsZVZpYnJhdGUpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=