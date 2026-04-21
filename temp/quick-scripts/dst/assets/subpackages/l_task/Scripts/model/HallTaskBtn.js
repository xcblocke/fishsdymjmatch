
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/model/HallTaskBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '058e8fFCvtA27DEbGEW9xBT', 'HallTaskBtn');
// subpackages/l_task/Scripts/model/HallTaskBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var TaskData_1 = require("../TaskData");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var TaskModel_1 = require("./TaskModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var HallTaskBtn = /** @class */ (function (_super) {
    __extends(HallTaskBtn, _super);
    function HallTaskBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redDot = null;
        _this._itemLock = null;
        _this._lb_level = null;
        _this._lb_task = null;
        _this._effLock = null;
        return _this;
    }
    Object.defineProperty(HallTaskBtn.prototype, "taskModel", {
        get: function () {
            return TaskModel_1.TaskModel.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    HallTaskBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
        this._redDot = cc.find("Bg/sp_red", this.node);
        this._redDot;
        this._lb_task = cc.find("Bg/lb_task", this.node).getComponent(cc.Label);
        this._itemLock = cc.find("Bg/item_lock", this.node);
        if (this._itemLock) {
            this._lb_level = this._itemLock.getComponentInChildren(cc.Label);
            this._itemLock.active = false;
            this._effLock = cc.find("Bg/item_lock/eff_lock", this.node).getComponent(sp.Skeleton);
        }
        this.updateRedDot(false);
    };
    HallTaskBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Task",
            node: this.node
        });
    };
    HallTaskBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallTaskBtn.prototype.onBtnClick = function () {
        if (this.taskModel.isTaskOpen()) {
            ControllerManager_1.default.getInstance().pushViewByController("TaskController", {
                from: TaskData_1.ETaskUIType.Home
            });
            this.updateRedDot(false);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.DailyTask);
        }
        else
            this.playLockAnim();
    };
    HallTaskBtn.prototype.doPlayLockAnim = function () {
        var t = this;
        cc.isValid(this._effLock) && GameUtils_1.default.playSpine(this._effLock, "in", false, function () {
            cc.isValid(t._effLock) && GameUtils_1.default.playSpine(t._effLock, "init", true);
        });
    };
    HallTaskBtn.prototype.playLockAnim = function () {
        this.doPlayLockAnim();
        var t = this.getOpenTips(this.taskModel.openCondition().level);
        ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
            isReuse: false,
            tips: t,
            noBlock: true,
            isGlobal: false,
            bgStyle: null,
            isShowAction: false
        });
    };
    HallTaskBtn.prototype.updateRedDot = function (t) {
        cc.isValid(this._redDot) && (this._redDot.active = t);
    };
    HallTaskBtn.prototype.updateLock = function (t) {
        if (cc.isValid(this._lb_task)) {
            void 0 === t && (t = this.taskModel.isTaskOpen());
            var e = this.taskModel.openCondition().level;
            this._itemLock && (this._itemLock.active = !t);
            if (this._lb_level && !t) {
                var a = this.getLevel(e);
                this._lb_level.string = "Lv." + a;
            }
            this._lb_task.node.active = t;
        }
    };
    HallTaskBtn.prototype.getLevel = function (t) {
        return t;
    };
    HallTaskBtn.prototype.getOpenTips = function (t) {
        return I18NStrings_1.default.stringFormat(I18NStrings_1.default.get("Common_Reward_target_1"), t);
    };
    HallTaskBtn.prefabUrl = "prefabs/task/HallTaskBtn";
    __decorate([
        mj.traitEvent("TaskTt_onLoad")
    ], HallTaskBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("TaskTt_onBtnClick")
    ], HallTaskBtn.prototype, "onBtnClick", null);
    __decorate([
        mj.traitEvent("TaskTt_doLockAni")
    ], HallTaskBtn.prototype, "doPlayLockAnim", null);
    __decorate([
        mj.traitEvent("TaskTt_updateLock")
    ], HallTaskBtn.prototype, "updateLock", null);
    __decorate([
        mj.traitEvent("TaskTt_getLv")
    ], HallTaskBtn.prototype, "getLevel", null);
    __decorate([
        mj.traitEvent("TaskTt_getOTips")
    ], HallTaskBtn.prototype, "getOpenTips", null);
    HallTaskBtn = __decorate([
        mj.class
    ], HallTaskBtn);
    return HallTaskBtn;
}(BaseUI_1.default));
exports.default = HallTaskBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9tb2RlbC9IYWxsVGFza0J0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDZGQUF3RjtBQUN4Rix3Q0FBMEM7QUFDMUMsdUVBQTRGO0FBQzVGLHlDQUF3QztBQUN4Qyw4RUFBeUU7QUFDekUsK0VBQTBFO0FBRTFFO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBd0ZDO1FBdkZDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQW1GbEIsQ0FBQztJQWpGQyxzQkFBSSxrQ0FBUzthQUFiO1lBQ0UsT0FBTyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsNEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFB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QUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQzsrQ0FHN0I7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7a0RBR2hDO0lBdkZrQixXQUFXO1FBRC9CLEVBQUUsQ0FBQyxLQUFLO09BQ1ksV0FBVyxDQXdGL0I7SUFBRCxrQkFBQztDQXhGRCxBQXdGQyxDQXhGd0MsZ0JBQU0sR0F3RjlDO2tCQXhGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IEVUYXNrVUlUeXBlIH0gZnJvbSAnLi4vVGFza0RhdGEnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFSG9tZVBhZ2VDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vVGFza01vZGVsJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxUYXNrQnRuIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3JlZERvdCA9IG51bGw7XG4gIF9pdGVtTG9jayA9IG51bGw7XG4gIF9sYl9sZXZlbCA9IG51bGw7XG4gIF9sYl90YXNrID0gbnVsbDtcbiAgX2VmZkxvY2sgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3Rhc2svSGFsbFRhc2tCdG5cIjtcbiAgZ2V0IHRhc2tNb2RlbCgpIHtcbiAgICByZXR1cm4gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHRfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB0aGlzLm9uQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fcmVkRG90ID0gY2MuZmluZChcIkJnL3NwX3JlZFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3JlZERvdDtcbiAgICB0aGlzLl9sYl90YXNrID0gY2MuZmluZChcIkJnL2xiX3Rhc2tcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2l0ZW1Mb2NrID0gY2MuZmluZChcIkJnL2l0ZW1fbG9ja1wiLCB0aGlzLm5vZGUpO1xuICAgIGlmICh0aGlzLl9pdGVtTG9jaykge1xuICAgICAgdGhpcy5fbGJfbGV2ZWwgPSB0aGlzLl9pdGVtTG9jay5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgIHRoaXMuX2l0ZW1Mb2NrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fZWZmTG9jayA9IGNjLmZpbmQoXCJCZy9pdGVtX2xvY2svZWZmX2xvY2tcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVJlZERvdChmYWxzZSk7XG4gIH1cbiAgb25FbmFibGUoKSB7XG4gICAgc3VwZXIub25FbmFibGUgJiYgc3VwZXIub25FbmFibGUuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJNc2dFbmFibGVIb21lQnRuXCIsIHtcbiAgICAgIHR5cGU6IFwiVGFza1wiLFxuICAgICAgbm9kZTogdGhpcy5ub2RlXG4gICAgfSk7XG4gIH1cbiAgb25EaXNhYmxlKCkge1xuICAgIHN1cGVyLm9uRGlzYWJsZSAmJiBzdXBlci5vbkRpc2FibGUuY2FsbCh0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tUdF9vbkJ0bkNsaWNrXCIpXG4gIG9uQnRuQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMudGFza01vZGVsLmlzVGFza09wZW4oKSkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRhc2tDb250cm9sbGVyXCIsIHtcbiAgICAgICAgZnJvbTogRVRhc2tVSVR5cGUuSG9tZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZVJlZERvdChmYWxzZSk7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90SGFsbChFSG9tZVBhZ2VDbGlja1R5cGUuRGFpbHlUYXNrKTtcbiAgICB9IGVsc2UgdGhpcy5wbGF5TG9ja0FuaW0oKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tUdF9kb0xvY2tBbmlcIilcbiAgZG9QbGF5TG9ja0FuaW0oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy5fZWZmTG9jaykgJiYgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl9lZmZMb2NrLCBcImluXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKHQuX2VmZkxvY2spICYmIEdhbWVVdGlscy5wbGF5U3BpbmUodC5fZWZmTG9jaywgXCJpbml0XCIsIHRydWUpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlMb2NrQW5pbSgpIHtcbiAgICB0aGlzLmRvUGxheUxvY2tBbmltKCk7XG4gICAgdmFyIHQgPSB0aGlzLmdldE9wZW5UaXBzKHRoaXMudGFza01vZGVsLm9wZW5Db25kaXRpb24oKS5sZXZlbCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkxvY2tUaXBzQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiBmYWxzZSxcbiAgICAgIHRpcHM6IHQsXG4gICAgICBub0Jsb2NrOiB0cnVlLFxuICAgICAgaXNHbG9iYWw6IGZhbHNlLFxuICAgICAgYmdTdHlsZTogbnVsbCxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVSZWREb3QodCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5fcmVkRG90KSAmJiAodGhpcy5fcmVkRG90LmFjdGl2ZSA9IHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza1R0X3VwZGF0ZUxvY2tcIilcbiAgdXBkYXRlTG9jayh0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbGJfdGFzaykpIHtcbiAgICAgIHZvaWQgMCA9PT0gdCAmJiAodCA9IHRoaXMudGFza01vZGVsLmlzVGFza09wZW4oKSk7XG4gICAgICB2YXIgZSA9IHRoaXMudGFza01vZGVsLm9wZW5Db25kaXRpb24oKS5sZXZlbDtcbiAgICAgIHRoaXMuX2l0ZW1Mb2NrICYmICh0aGlzLl9pdGVtTG9jay5hY3RpdmUgPSAhdCk7XG4gICAgICBpZiAodGhpcy5fbGJfbGV2ZWwgJiYgIXQpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldExldmVsKGUpO1xuICAgICAgICB0aGlzLl9sYl9sZXZlbC5zdHJpbmcgPSBcIkx2LlwiICsgYTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xiX3Rhc2subm9kZS5hY3RpdmUgPSB0O1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tUdF9nZXRMdlwiKVxuICBnZXRMZXZlbCh0KSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHRfZ2V0T1RpcHNcIilcbiAgZ2V0T3BlblRpcHModCkge1xuICAgIHJldHVybiBJMThOU3RyaW5ncy5zdHJpbmdGb3JtYXQoSTE4TlN0cmluZ3MuZ2V0KFwiQ29tbW9uX1Jld2FyZF90YXJnZXRfMVwiKSwgdCk7XG4gIH1cbn0iXX0=