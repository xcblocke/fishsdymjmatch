
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/CancelBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2eb86ocghBHCLw89mVxz+ie', 'CancelBehavior');
// Scripts/base/CancelBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CancelBehavior = /** @class */ (function (_super) {
    __extends(CancelBehavior, _super);
    function CancelBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CancelBehavior.prototype.start = function (e) {
        var t;
        null === (t = this.context.getTileNodeMap().get(e.data.tileId)) || void 0 === t || t.cancelTouch();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return CancelBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.CancelBehavior = CancelBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2FuY2VsQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQW9DLGtDQUFpQjtJQUFyRDs7SUFNQSxDQUFDO0lBTEMsOEJBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRyxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTm1DLHFDQUFpQixHQU1wRDtBQU5ZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQ2FuY2VsQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdDtcbiAgICBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChlLmRhdGEudGlsZUlkKSkgfHwgdm9pZCAwID09PSB0IHx8IHQuY2FuY2VsVG91Y2goKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19