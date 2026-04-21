
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2SlotCardNumChangeBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90db3DEO7BCP4pSpkyiTyFI', 'Tile2SlotCardNumChangeBehavior');
// Scripts/base/Tile2SlotCardNumChangeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotCardNumChangeBehavior = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2SlotCardNumChangeBehavior = /** @class */ (function (_super) {
    __extends(Tile2SlotCardNumChangeBehavior, _super);
    function Tile2SlotCardNumChangeBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2SlotCardNumChangeBehavior.prototype.start = function () {
        this.context.getTileNodeMap();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2SlotNumChg_start")
    ], Tile2SlotCardNumChangeBehavior.prototype, "start", null);
    return Tile2SlotCardNumChangeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2SlotCardNumChangeBehavior = Tile2SlotCardNumChangeBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJTbG90Q2FyZE51bUNoYW5nZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELHFFQUFvRTtBQUNwRTtJQUFvRCxrREFBaUI7SUFBckU7O0lBTUEsQ0FBQztJQUpDLDhDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBSEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOytEQUluQztJQUNILHFDQUFDO0NBTkQsQUFNQyxDQU5tRCxxQ0FBaUIsR0FNcEU7QUFOWSx3RUFBOEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmV4cG9ydCBjbGFzcyBUaWxlMlNsb3RDYXJkTnVtQ2hhbmdlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiVDJTbG90TnVtQ2hnX3N0YXJ0XCIpXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=