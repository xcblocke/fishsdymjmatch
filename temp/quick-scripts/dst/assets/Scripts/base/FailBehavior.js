
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/FailBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02909YGM2pHpZWErDA7btu5', 'FailBehavior');
// Scripts/base/FailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var FailBehavior = /** @class */ (function (_super) {
    __extends(FailBehavior, _super);
    function FailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("FailBhv_start")
    ], FailBehavior.prototype, "start", null);
    return FailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.FailBehavior = FailBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRmFpbEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUFrQyxnQ0FBaUI7SUFBbkQ7O0lBS0EsQ0FBQztJQUhDLDRCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7NkNBRzlCO0lBQ0gsbUJBQUM7Q0FMRCxBQUtDLENBTGlDLHFDQUFpQixHQUtsRDtBQUxZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgRmFpbEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIkZhaWxCaHZfc3RhcnRcIilcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==