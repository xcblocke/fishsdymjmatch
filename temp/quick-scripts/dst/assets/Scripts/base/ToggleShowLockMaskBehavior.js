
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ToggleShowLockMaskBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '173e9WiwoFIVJDUMgfMI+dr', 'ToggleShowLockMaskBehavior');
// Scripts/base/ToggleShowLockMaskBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleShowLockMaskBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ToggleShowLockMaskBehavior = /** @class */ (function (_super) {
    __extends(ToggleShowLockMaskBehavior, _super);
    function ToggleShowLockMaskBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleShowLockMaskBehavior.prototype.start = function (e) {
        var t = e.data.enabled, o = this.context.getTileNodeMap();
        this.toggleAllLockMasks(o, t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ToggleShowLockMaskBehavior.prototype.toggleAllLockMasks = function (e, t) {
        e.forEach(function (e) {
            if (e && cc.isValid(e.tileNode)) {
                var o = e.tileNode.getChildByName("imgMaskFadeOut");
                if (o && cc.isValid(o)) {
                    cc.Tween.stopAllByTarget(o);
                    if (t) {
                        o.opacity = 0;
                        o.active = false;
                    }
                    else {
                        o.active = true;
                        o.opacity = 255;
                    }
                }
            }
        });
    };
    return ToggleShowLockMaskBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ToggleShowLockMaskBehavior = ToggleShowLockMaskBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVG9nZ2xlU2hvd0xvY2tNYXNrQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQWdELDhDQUFpQjtJQUFqRTs7SUF3QkEsQ0FBQztJQXZCQywwQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUNwQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsdURBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7cUJBQ2xCO3lCQUFNO3dCQUNMLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztxQkFDakI7aUJBQ0Y7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0F4QkEsQUF3QkMsQ0F4QitDLHFDQUFpQixHQXdCaEU7QUF4QlksZ0VBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVG9nZ2xlU2hvd0xvY2tNYXNrQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS5lbmFibGVkLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIHRoaXMudG9nZ2xlQWxsTG9ja01hc2tzKG8sIHQpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgdG9nZ2xlQWxsTG9ja01hc2tzKGUsIHQpIHtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZS50aWxlTm9kZSkpIHtcbiAgICAgICAgdmFyIG8gPSBlLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiaW1nTWFza0ZhZGVPdXRcIik7XG4gICAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobyk7XG4gICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIG8ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBvLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=