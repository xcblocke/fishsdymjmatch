
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/BlockInputRefBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c81ajsx9NFeprD9OdMwy7N', 'BlockInputRefBehavior');
// Scripts/base/BlockInputRefBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInputRefBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BlockInputRefBehavior = /** @class */ (function (_super) {
    __extends(BlockInputRefBehavior, _super);
    function BlockInputRefBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockInputRefBehavior.prototype.start = function (e) {
        var t = e.data.block, o = e.data.from;
        if (t) {
            this.context.gameView.increaseCountBlockNode(o);
        }
        else {
            this.context.gameView.decreaseCountBlockNode(o);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BlockInputRefBehavior.prototype.onAbort = function () {
        this.context.gameView.resetCountBlockNode();
        _super.prototype.onAbort.call(this);
    };
    return BlockInputRefBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BlockInputRefBehavior = BlockInputRefBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQmxvY2tJbnB1dFJlZkJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUEyQyx5Q0FBaUI7SUFBNUQ7O0lBZUEsQ0FBQztJQWRDLHFDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsdUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDNUMsaUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQWZBLEFBZUMsQ0FmMEMscUNBQWlCLEdBZTNEO0FBZlksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQmxvY2tJbnB1dFJlZkJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGEuYmxvY2ssXG4gICAgICBvID0gZS5kYXRhLmZyb207XG4gICAgaWYgKHQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5pbmNyZWFzZUNvdW50QmxvY2tOb2RlKG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZGVjcmVhc2VDb3VudEJsb2NrTm9kZShvKTtcbiAgICB9XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBvbkFib3J0KCkge1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5yZXNldENvdW50QmxvY2tOb2RlKCk7XG4gICAgc3VwZXIub25BYm9ydC5jYWxsKHRoaXMpO1xuICB9XG59Il19