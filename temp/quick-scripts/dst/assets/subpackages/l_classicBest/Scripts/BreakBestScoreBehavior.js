
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicBest/Scripts/BreakBestScoreBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a5a4dmcSVFXrSkQnE/mxIu', 'BreakBestScoreBehavior');
// subpackages/l_classicBest/Scripts/BreakBestScoreBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var ClassicBreakBestView_1 = require("./ClassicBreakBestView");
var BreakBestScoreBehavior = /** @class */ (function (_super) {
    __extends(BreakBestScoreBehavior, _super);
    function BreakBestScoreBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreakBestScoreBehavior.prototype.start = function (e) {
        var t = e.data.breakType;
        this.showBreakEffect(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BreakBestScoreBehavior.prototype.showBreakEffect = function (e) {
        var i = this;
        ClassicBreakBestView_1.default.createUI().then(function (t) {
            if (cc.isValid(i.context.gameView.node)) {
                t.setPosition(0, 0, 0);
                t.getComponent(ClassicBreakBestView_1.default).setBreakType(e);
                i.context.gameView.node.addChild(t);
            }
        }).catch(function (e) {
            console.error("[" + BreakBestScoreBehavior.name + "] 创建突破最高分视图失败:" + ((null == e ? void 0 : e.message) || "创建突破最高分视图失败"));
        });
    };
    return BreakBestScoreBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = BreakBestScoreBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNCZXN0L1NjcmlwdHMvQnJlYWtCZXN0U2NvcmVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWtGO0FBQ2xGLDZFQUE0RTtBQUM1RSwrREFBMEQ7QUFDMUQ7SUFBb0QsMENBQWlCO0lBQXJFOztJQWtCQSxDQUFDO0lBakJDLHNDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELGdEQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLDhCQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDOUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxZQUFZLENBQUMsOEJBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHNCQUFzQixDQUFDLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzVILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsQ0FsQm1ELHFDQUFpQixHQWtCcEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgQ2xhc3NpY0JyZWFrQmVzdFZpZXcgZnJvbSAnLi9DbGFzc2ljQnJlYWtCZXN0Vmlldyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVha0Jlc3RTY29yZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGEuYnJlYWtUeXBlO1xuICAgIHRoaXMuc2hvd0JyZWFrRWZmZWN0KHQpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgc2hvd0JyZWFrRWZmZWN0KGUpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgQ2xhc3NpY0JyZWFrQmVzdFZpZXcuY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChpLmNvbnRleHQuZ2FtZVZpZXcubm9kZSkpIHtcbiAgICAgICAgdC5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICAgICAgdC5nZXRDb21wb25lbnQoQ2xhc3NpY0JyZWFrQmVzdFZpZXcpLnNldEJyZWFrVHlwZShlKTtcbiAgICAgICAgaS5jb250ZXh0LmdhbWVWaWV3Lm5vZGUuYWRkQ2hpbGQodCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBCcmVha0Jlc3RTY29yZUJlaGF2aW9yLm5hbWUgKyBcIl0g5Yib5bu656qB56C05pyA6auY5YiG6KeG5Zu+5aSx6LSlOlwiICsgKChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpIHx8IFwi5Yib5bu656qB56C05pyA6auY5YiG6KeG5Zu+5aSx6LSlXCIpKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==