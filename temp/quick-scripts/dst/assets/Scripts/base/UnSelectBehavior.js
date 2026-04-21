
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UnSelectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fac49uRFchBP6VbVZ/a0/O2', 'UnSelectBehavior');
// Scripts/base/UnSelectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnSelectBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UnSelectBehavior = /** @class */ (function (_super) {
    __extends(UnSelectBehavior, _super);
    function UnSelectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnSelectBehavior.prototype.start = function (e) {
        var t = this.context.getTileNodeMap().get(e.data.tileId);
        if (t) {
            t.cancelSelected();
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return UnSelectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UnSelectBehavior = UnSelectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVW5TZWxlY3RCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBc0Msb0NBQWlCO0lBQXZEOztJQVFBLENBQUM7SUFQQyxnQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDOztZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVJBLEFBUUMsQ0FScUMscUNBQWlCLEdBUXREO0FBUlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVW5TZWxlY3RCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KGUuZGF0YS50aWxlSWQpO1xuICAgIGlmICh0KSB7XG4gICAgICB0LmNhbmNlbFNlbGVjdGVkKCk7XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19