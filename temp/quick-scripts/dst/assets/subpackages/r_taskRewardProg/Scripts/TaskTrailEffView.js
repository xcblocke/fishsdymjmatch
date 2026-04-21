
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_taskRewardProg/Scripts/TaskTrailEffView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '657bebw8ChEP6K04mHLrNal', 'TaskTrailEffView');
// subpackages/r_taskRewardProg/Scripts/TaskTrailEffView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailEffType = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
exports.TrailEffType = {
    START: "start",
    END: "end"
};
var TaskTrailEffView = /** @class */ (function (_super) {
    __extends(TaskTrailEffView, _super);
    function TaskTrailEffView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineTrail = null;
        return _this;
    }
    TaskTrailEffView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskTrailEffView.prototype.playEffect = function (e, t, i) {
        if (cc.isValid(this.node) && cc.isValid(this.node.parent)) {
            var n = this.node.parent.convertToNodeSpaceAR(e);
            this.node.setPosition(n);
            this.playSpineEffect(t, i);
        }
        else
            null == i || i();
    };
    TaskTrailEffView.prototype.playSpineEffect = function (e, t) {
        if (this.spineTrail && cc.isValid(this.spineTrail.node)) {
            CommonUtils_1.playSpineAnim(this.spineTrail, 1, e, function () {
                null == t || t();
            });
        }
        else {
            null == t || t();
        }
    };
    TaskTrailEffView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    TaskTrailEffView.prefabUrl = "prefabs/TaskTrailEff";
    TaskTrailEffView.bundleName = "r_taskRewardProg";
    __decorate([
        mj.component("spineTrail", sp.Skeleton)
    ], TaskTrailEffView.prototype, "spineTrail", void 0);
    TaskTrailEffView = __decorate([
        mj.class
    ], TaskTrailEffView);
    return TaskTrailEffView;
}(BaseUI_1.default));
exports.default = TaskTrailEffView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3Rhc2tSZXdhcmRQcm9nL1NjcmlwdHMvVGFza1RyYWlsRWZmVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw0RUFBNkU7QUFDbEUsUUFBQSxZQUFZLEdBQUc7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxHQUFHLEVBQUUsS0FBSztDQUNYLENBQUM7QUFFRjtJQUE4QyxvQ0FBTTtJQUFwRDtRQUFBLHFFQTJCQztRQXpCQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7O0lBeUJsQyxDQUFDO0lBdEJDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCOztZQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2RCwyQkFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUNELG9DQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF2Qk0sMEJBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQUNuQywyQkFBVSxHQUFHLGtCQUFrQixDQUFDO0lBRnZDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3REFDUjtJQUZiLGdCQUFnQjtRQURwQyxFQUFFLENBQUMsS0FBSztPQUNZLGdCQUFnQixDQTJCcEM7SUFBRCx1QkFBQztDQTNCRCxBQTJCQyxDQTNCNkMsZ0JBQU0sR0EyQm5EO2tCQTNCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgcGxheVNwaW5lQW5pbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmV4cG9ydCB2YXIgVHJhaWxFZmZUeXBlID0ge1xuICBTVEFSVDogXCJzdGFydFwiLFxuICBFTkQ6IFwiZW5kXCJcbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tUcmFpbEVmZlZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBAbWouY29tcG9uZW50KFwic3BpbmVUcmFpbFwiLCBzcC5Ta2VsZXRvbilcbiAgc3BpbmVUcmFpbDogXCJzcGluZVRyYWlsXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL1Rhc2tUcmFpbEVmZlwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl90YXNrUmV3YXJkUHJvZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgcGxheUVmZmVjdChlLCB0LCBpKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZS5wYXJlbnQpKSB7XG4gICAgICB2YXIgbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZSk7XG4gICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obik7XG4gICAgICB0aGlzLnBsYXlTcGluZUVmZmVjdCh0LCBpKTtcbiAgICB9IGVsc2UgbnVsbCA9PSBpIHx8IGkoKTtcbiAgfVxuICBwbGF5U3BpbmVFZmZlY3QoZSwgdCkge1xuICAgIGlmICh0aGlzLnNwaW5lVHJhaWwgJiYgY2MuaXNWYWxpZCh0aGlzLnNwaW5lVHJhaWwubm9kZSkpIHtcbiAgICAgIHBsYXlTcGluZUFuaW0odGhpcy5zcGluZVRyYWlsLCAxLCBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19