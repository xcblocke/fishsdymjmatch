
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UpdateShufflePropBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ecf708s5qBIqIvtxyFZUtxY', 'UpdateShufflePropBehavior');
// Scripts/base/UpdateShufflePropBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateShufflePropBehavior = /** @class */ (function (_super) {
    __extends(UpdateShufflePropBehavior, _super);
    function UpdateShufflePropBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateShufflePropBehavior.prototype.start = function (e) {
        var t = e.data.curNum;
        this.context.gameView.gameUI.updateShuffleProp(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("UdShufflePropBhv_start")
    ], UpdateShufflePropBehavior.prototype, "start", null);
    return UpdateShufflePropBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = UpdateShufflePropBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVXBkYXRlU2h1ZmZsZVByb3BCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUF1RCw2Q0FBaUI7SUFBeEU7O0lBT0EsQ0FBQztJQUxDLHlDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBSkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDOzBEQUt2QztJQUNILGdDQUFDO0NBUEQsQUFPQyxDQVBzRCxxQ0FBaUIsR0FPdkU7a0JBUG9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlU2h1ZmZsZVByb3BCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJVZFNodWZmbGVQcm9wQmh2X3N0YXJ0XCIpXG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS5jdXJOdW07XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVVSS51cGRhdGVTaHVmZmxlUHJvcCh0KTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19