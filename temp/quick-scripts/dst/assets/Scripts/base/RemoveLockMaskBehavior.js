
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/RemoveLockMaskBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2dcdbXMc9tB9ab1z7UmcAb6', 'RemoveLockMaskBehavior');
// Scripts/base/RemoveLockMaskBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveLockMaskBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var RemoveLockMaskBehavior = /** @class */ (function (_super) {
    __extends(RemoveLockMaskBehavior, _super);
    function RemoveLockMaskBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveLockMaskBehavior.prototype.start = function () {
        var e = this.context.getTileNodeMap();
        this.removeAllLockMasks(e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    RemoveLockMaskBehavior.prototype.removeAllLockMasks = function (e) {
        e.forEach(function (e) {
            if (e && cc.isValid(e.tileNode)) {
                var t = e.tileNode.getChildByName("imgMaskFadeOut");
                cc.isValid(t) && t.destroy();
            }
        });
    };
    return RemoveLockMaskBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.RemoveLockMaskBehavior = RemoveLockMaskBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvUmVtb3ZlTG9ja01hc2tCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBNEMsMENBQWlCO0lBQTdEOztJQWNBLENBQUM7SUFiQyxzQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxtREFBa0IsR0FBbEIsVUFBbUIsQ0FBQztRQUNsQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDcEQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCw2QkFBQztBQUFELENBZEEsQUFjQyxDQWQyQyxxQ0FBaUIsR0FjNUQ7QUFkWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBSZW1vdmVMb2NrTWFza0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIHRoaXMucmVtb3ZlQWxsTG9ja01hc2tzKGUpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgcmVtb3ZlQWxsTG9ja01hc2tzKGUpIHtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZS50aWxlTm9kZSkpIHtcbiAgICAgICAgdmFyIHQgPSBlLnRpbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiaW1nTWFza0ZhZGVPdXRcIik7XG4gICAgICAgIGNjLmlzVmFsaWQodCkgJiYgdC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=