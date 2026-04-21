
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/view/TaskTipView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbf106gJGZGV6cmTi2zc9Ws', 'TaskTipView');
// subpackages/l_task/Scripts/view/TaskTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var TaskTipView = /** @class */ (function (_super) {
    __extends(TaskTipView, _super);
    function TaskTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        return _this;
    }
    TaskTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.reset();
    };
    TaskTipView.prototype.reset = function () {
        if (cc.isValid(this.node)) {
            this.node.opacity = 0;
            this.node.scale = 1;
            this.node.active = false;
        }
    };
    TaskTipView.prototype.showTip = function (t) {
        var e = this;
        cc.isValid(this.titleLabel) && (this.titleLabel.string = t || "");
        this.node.setPosition(0, 0);
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.5;
        cc.tween(this.node).to(0.1, {
            opacity: 255,
            scale: 1
        }, {
            easing: cc.easing.sineOut
        }).delay(1).to(0.1, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            e.node.active = false;
        }).start();
    };
    TaskTipView.prototype.hideTip = function () {
        var t = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.isValid(this.node) && cc.tween(this.node).to(0.1, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            t.node.active = false;
        }).start();
    };
    TaskTipView.prefabUrl = "prefabs/task/TaskTip";
    __decorate([
        mj.component("tipBg/lb_title", cc.Label)
    ], TaskTipView.prototype, "titleLabel", void 0);
    TaskTipView = __decorate([
        mj.class
    ], TaskTipView);
    return TaskTipView;
}(BaseUI_1.default));
exports.default = TaskTipView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy92aWV3L1Rhc2tUaXBWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFFN0Q7SUFBeUMsK0JBQU07SUFBL0M7UUFBQSxxRUErQ0M7UUE3Q0MsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDOztJQTZDdEMsQ0FBQztJQTNDQyw0QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsMkJBQUssR0FBTDtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBQ0QsNkJBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNULEVBQUU7WUFDRCxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1NBQzFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNYLEVBQUU7WUFDRCxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ25ELE9BQU8sRUFBRSxDQUFDO1NBQ1gsRUFBRTtZQUNELE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUEzQ00scUJBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQUQxQztRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDTDtJQUZqQixXQUFXO1FBRC9CLEVBQUUsQ0FBQyxLQUFLO09BQ1ksV0FBVyxDQStDL0I7SUFBRCxrQkFBQztDQS9DRCxBQStDQyxDQS9Dd0MsZ0JBQU0sR0ErQzlDO2tCQS9Db0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1RpcFZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBAbWouY29tcG9uZW50KFwidGlwQmcvbGJfdGl0bGVcIiwgY2MuTGFiZWwpXG4gIHRpdGxlTGFiZWw6IFwidGlwQmcvbGJfdGl0bGVcIiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdGFzay9UYXNrVGlwXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcbiAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc2hvd1RpcCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy50aXRsZUxhYmVsKSAmJiAodGhpcy50aXRsZUxhYmVsLnN0cmluZyA9IHQgfHwgXCJcIik7XG4gICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjU7XG4gICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEsIHtcbiAgICAgIG9wYWNpdHk6IDI1NSxcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLmRlbGF5KDEpLnRvKDAuMSwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgaGlkZVRpcCgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4xLCB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==