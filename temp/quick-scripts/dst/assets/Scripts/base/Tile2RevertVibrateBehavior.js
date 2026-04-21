
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2RevertVibrateBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f783190UnVEu4Sk5GgeSYMt', 'Tile2RevertVibrateBehavior');
// Scripts/base/Tile2RevertVibrateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RevertVibrateBehavior = void 0;
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RevertVibrateBehavior = /** @class */ (function (_super) {
    __extends(Tile2RevertVibrateBehavior, _super);
    function Tile2RevertVibrateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RevertVibrateBehavior.prototype.start = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Medium, VibrateManager_1.EVibratePoint.Tile2Revert);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2RevertVibBhv_start")
    ], Tile2RevertVibrateBehavior.prototype, "start", null);
    return Tile2RevertVibrateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RevertVibrateBehavior = Tile2RevertVibrateBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSZXZlcnRWaWJyYXRlQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBMEc7QUFDMUcscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUFnRCw4Q0FBaUI7SUFBakU7O0lBTUEsQ0FBQztJQUpDLDBDQUFLLEdBQUw7UUFDRSx3QkFBYyxDQUFDLGNBQWMsQ0FBQyxpQ0FBZ0IsQ0FBQyxNQUFNLEVBQUUsOEJBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUhEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzsyREFJckM7SUFDSCxpQ0FBQztDQU5ELEFBTUMsQ0FOK0MscUNBQWlCLEdBTWhFO0FBTlksZ0VBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGgsIEVWaWJyYXRlUG9pbnQgfSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJSZXZlcnRWaWJyYXRlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiVDJSZXZlcnRWaWJCaHZfc3RhcnRcIilcbiAgc3RhcnQoKSB7XG4gICAgVmlicmF0ZU1hbmFnZXIuZXhlY3V0ZVZpYnJhdGUoRVZpYnJhdGVTdHJlbmd0aC5NZWRpdW0sIEVWaWJyYXRlUG9pbnQuVGlsZTJSZXZlcnQpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=