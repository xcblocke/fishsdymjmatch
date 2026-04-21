
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_taskRewardProg/Scripts/TaskBoxLightView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9949dAJRVGWI8+PRMek39j', 'TaskBoxLightView');
// subpackages/r_taskRewardProg/Scripts/TaskBoxLightView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var TaskBoxLightView = /** @class */ (function (_super) {
    __extends(TaskBoxLightView, _super);
    function TaskBoxLightView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineBox = null;
        _this.isShown = false;
        return _this;
    }
    TaskBoxLightView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskBoxLightView.prototype.playAnimation = function (e, t, i) {
        if (this.isShown)
            null == i || i();
        else {
            this.isShown = true;
            var n = this.findBoxNode(e, t);
            n && this.alignToTarget(n);
            this.playBoxSpineAnimation(t, function () {
                null == i || i();
            });
        }
    };
    TaskBoxLightView.prototype.findBoxNode = function (e, t) {
        if (!cc.isValid(e) || !cc.isValid(e.node))
            return null;
        var i = "content/box/btn_box_close" + t, n = cc.find(i, e.node);
        return cc.isValid(n) ? n : null;
    };
    TaskBoxLightView.prototype.alignToTarget = function (e) {
        if (cc.isValid(this.node) && cc.isValid(e) && cc.isValid(this.node.parent) && this.spineBox && cc.isValid(this.spineBox.node)) {
            var t = e.convertToWorldSpaceAR(cc.v2(0, 0)), i = this.node.parent.convertToNodeSpaceAR(t);
            this.spineBox.node.setPosition(cc.v3(i.x, i.y, 0));
        }
    };
    TaskBoxLightView.prototype.playBoxSpineAnimation = function (e, t) {
        if (this.spineBox && cc.isValid(this.spineBox.node)) {
            var i = "in" + e;
            CommonUtils_1.playSpineAnim(this.spineBox, 1, i, function () {
                null == t || t();
            });
        }
        else
            null == t || t();
    };
    TaskBoxLightView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.isShown = false;
    };
    TaskBoxLightView.prefabUrl = "prefabs/TaskBoxLight";
    TaskBoxLightView.bundleName = "r_taskRewardProg";
    __decorate([
        mj.component("spine_box", sp.Skeleton)
    ], TaskBoxLightView.prototype, "spineBox", void 0);
    TaskBoxLightView = __decorate([
        mj.class
    ], TaskBoxLightView);
    return TaskBoxLightView;
}(BaseUI_1.default));
exports.default = TaskBoxLightView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3Rhc2tSZXdhcmRQcm9nL1NjcmlwdHMvVGFza0JveExpZ2h0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELDRFQUE2RTtBQUU3RTtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQTRDQztRQTFDQyxjQUFRLEdBQWdCLElBQUksQ0FBQztRQUM3QixhQUFPLEdBQUcsS0FBSyxDQUFDOztJQXlDbEIsQ0FBQztJQXRDQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsd0NBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUFLO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLDJCQUEyQixHQUFHLENBQUMsRUFDckMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDRCx3Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFDRCxnREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLDJCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0NBQVMsR0FBVDtRQUNFLGlCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQXZDTSwwQkFBUyxHQUFHLHNCQUFzQixDQUFDO0lBQ25DLDJCQUFVLEdBQUcsa0JBQWtCLENBQUM7SUFIdkM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO3NEQUNWO0lBRlYsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZ0JBQWdCLENBNENwQztJQUFELHVCQUFDO0NBNUNELEFBNENDLENBNUM2QyxnQkFBTSxHQTRDbkQ7a0JBNUNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBwbGF5U3BpbmVBbmltIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQm94TGlnaHRWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLmNvbXBvbmVudChcInNwaW5lX2JveFwiLCBzcC5Ta2VsZXRvbilcbiAgc3BpbmVCb3g6IFwic3BpbmVfYm94XCIgPSBudWxsO1xuICBpc1Nob3duID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvVGFza0JveExpZ2h0XCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX3Rhc2tSZXdhcmRQcm9nXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBwbGF5QW5pbWF0aW9uKGUsIHQsIGkpIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSBudWxsID09IGkgfHwgaSgpO2Vsc2Uge1xuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgICAgIHZhciBuID0gdGhpcy5maW5kQm94Tm9kZShlLCB0KTtcbiAgICAgIG4gJiYgdGhpcy5hbGlnblRvVGFyZ2V0KG4pO1xuICAgICAgdGhpcy5wbGF5Qm94U3BpbmVBbmltYXRpb24odCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsID09IGkgfHwgaSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZpbmRCb3hOb2RlKGUsIHQpIHtcbiAgICBpZiAoIWNjLmlzVmFsaWQoZSkgfHwgIWNjLmlzVmFsaWQoZS5ub2RlKSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGkgPSBcImNvbnRlbnQvYm94L2J0bl9ib3hfY2xvc2VcIiArIHQsXG4gICAgICBuID0gY2MuZmluZChpLCBlLm5vZGUpO1xuICAgIHJldHVybiBjYy5pc1ZhbGlkKG4pID8gbiA6IG51bGw7XG4gIH1cbiAgYWxpZ25Ub1RhcmdldChlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy5pc1ZhbGlkKGUpICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlLnBhcmVudCkgJiYgdGhpcy5zcGluZUJveCAmJiBjYy5pc1ZhbGlkKHRoaXMuc3BpbmVCb3gubm9kZSkpIHtcbiAgICAgIHZhciB0ID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxuICAgICAgICBpID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgIHRoaXMuc3BpbmVCb3gubm9kZS5zZXRQb3NpdGlvbihjYy52MyhpLngsIGkueSwgMCkpO1xuICAgIH1cbiAgfVxuICBwbGF5Qm94U3BpbmVBbmltYXRpb24oZSwgdCkge1xuICAgIGlmICh0aGlzLnNwaW5lQm94ICYmIGNjLmlzVmFsaWQodGhpcy5zcGluZUJveC5ub2RlKSkge1xuICAgICAgdmFyIGkgPSBcImluXCIgKyBlO1xuICAgICAgcGxheVNwaW5lQW5pbSh0aGlzLnNwaW5lQm94LCAxLCBpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgbnVsbCA9PSB0IHx8IHQoKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XG4gIH1cbn0iXX0=