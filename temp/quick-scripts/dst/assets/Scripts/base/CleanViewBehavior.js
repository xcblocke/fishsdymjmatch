
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/CleanViewBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb066DIcEpML4LO49H4sW0Z', 'CleanViewBehavior');
// Scripts/base/CleanViewBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CleanViewBehavior = /** @class */ (function (_super) {
    __extends(CleanViewBehavior, _super);
    function CleanViewBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CleanViewBehavior.prototype.start = function () {
        this._context.gameView.nodeCardRoot.children.forEach(function (e) {
            e.active = false;
        });
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return CleanViewBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = CleanViewBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2xlYW5WaWV3QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBK0MscUNBQWlCO0lBQWhFOztJQU9BLENBQUM7SUFOQyxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQzlELENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCx3QkFBQztBQUFELENBUEEsQUFPQyxDQVA4QyxxQ0FBaUIsR0FPL0QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFuVmlld0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLl9jb250ZXh0LmdhbWVWaWV3Lm5vZGVDYXJkUm9vdC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=