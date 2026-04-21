
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/StartInitBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '874e4DRPgJDoYpqmC4628et', 'StartInitBehavior');
// Scripts/base/StartInitBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartInitBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTouchComponent_1 = require("../component/GameTouchComponent");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var StartInitBehavior = /** @class */ (function (_super) {
    __extends(StartInitBehavior, _super);
    function StartInitBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    StartInitBehavior.prototype.start = function () {
        this.disableTouchEvents();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    StartInitBehavior.prototype.disableTouchEvents = function () {
        var e = this.context.gameView;
        if (e) {
            var t = e._gameNode;
            if (t && cc.isValid(t)) {
                var o = t.getComponent(GameTouchComponent_1.GameTouchComponent);
                o && o.unregisterTouchEvents();
            }
        }
    };
    return StartInitBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.StartInitBehavior = StartInitBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU3RhcnRJbml0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsc0VBQXFFO0FBQ3JFLHlEQUF3RDtBQUN4RDtJQUF1QyxxQ0FBaUI7SUFBeEQ7UUFBQSxxRUFnQkM7UUFmQyxjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQWVmLENBQUM7SUFkQyxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCw4Q0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1Q0FBa0IsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBaEJBLEFBZ0JDLENBaEJzQyxxQ0FBaUIsR0FnQnZEO0FBaEJZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lVG91Y2hDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvR2FtZVRvdWNoQ29tcG9uZW50JztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgU3RhcnRJbml0QmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF90aW1lb3V0ID0gMDtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2hFdmVudHMoKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIGRpc2FibGVUb3VjaEV2ZW50cygpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldztcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSBlLl9nYW1lTm9kZTtcbiAgICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgdmFyIG8gPSB0LmdldENvbXBvbmVudChHYW1lVG91Y2hDb21wb25lbnQpO1xuICAgICAgICBvICYmIG8udW5yZWdpc3RlclRvdWNoRXZlbnRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19