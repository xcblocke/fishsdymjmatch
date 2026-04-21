
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/BlockInputBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec64bSVvRHYYqMEUZqrOBq', 'BlockInputBehavior');
// Scripts/base/BlockInputBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BlockInputBehavior = /** @class */ (function (_super) {
    __extends(BlockInputBehavior, _super);
    function BlockInputBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    BlockInputBehavior.prototype.start = function (e) {
        var t = false !== e.data.block;
        this.context.gameView.setSwallowEventNodeActive(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return BlockInputBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BlockInputBehavior = BlockInputBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQmxvY2tJbnB1dEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUF3QyxzQ0FBaUI7SUFBekQ7UUFBQSxxRUFPQztRQU5DLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBTWYsQ0FBQztJQUxDLGtDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQdUMscUNBQWlCLEdBT3hEO0FBUFksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQmxvY2tJbnB1dEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdGltZW91dCA9IDA7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGZhbHNlICE9PSBlLmRhdGEuYmxvY2s7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodCk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==