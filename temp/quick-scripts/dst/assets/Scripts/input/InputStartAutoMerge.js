
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputStartAutoMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ccechRnwFFV4fLeNSFOO6B', 'InputStartAutoMerge');
// Scripts/input/InputStartAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var StartAutoMergeEffect_1 = require("../StartAutoMergeEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputStartAutoMerge = /** @class */ (function (_super) {
    __extends(InputStartAutoMerge, _super);
    function InputStartAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputStartAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().unselectAllTileIds();
        this.pushStartAutoMergeEffect(e);
    };
    InputStartAutoMerge.prototype.pushStartAutoMergeEffect = function (e) {
        var t = new StartAutoMergeEffect_1.StartAutoMergeEffect({
            type: e.type
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_StartAutoMerge, this);
    };
    __decorate([
        mj.traitEvent("IptStartAutoMrg_exec")
    ], InputStartAutoMerge.prototype, "excute", null);
    return InputStartAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputStartAutoMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0U3RhcnRBdXRvTWVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCw2REFBNkQ7QUFDN0QsZ0VBQStEO0FBQy9ELG9EQUFtRDtBQUNuRDtJQUFpRCx1Q0FBUztJQUExRDs7SUFhQSxDQUFDO0lBWEMsb0NBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHNEQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUM7WUFDL0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFWRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7cURBSXJDO0lBUUgsMEJBQUM7Q0FiRCxBQWFDLENBYmdELHFCQUFTLEdBYXpEO2tCQWJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgU3RhcnRBdXRvTWVyZ2VFZmZlY3QgfSBmcm9tICcuLi9TdGFydEF1dG9NZXJnZUVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0U3RhcnRBdXRvTWVyZ2UgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIklwdFN0YXJ0QXV0b01yZ19leGVjXCIpXG4gIGV4Y3V0ZShlKSB7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudW5zZWxlY3RBbGxUaWxlSWRzKCk7XG4gICAgdGhpcy5wdXNoU3RhcnRBdXRvTWVyZ2VFZmZlY3QoZSk7XG4gIH1cbiAgcHVzaFN0YXJ0QXV0b01lcmdlRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBTdGFydEF1dG9NZXJnZUVmZmVjdCh7XG4gICAgICB0eXBlOiBlLnR5cGVcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUm9vdCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5FZmZlY3RfU3RhcnRBdXRvTWVyZ2UsIHRoaXMpO1xuICB9XG59Il19