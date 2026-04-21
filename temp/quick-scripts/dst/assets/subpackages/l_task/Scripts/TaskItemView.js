
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskItemView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9b9f9p4JlNqYHvrz2h+Sn8', 'TaskItemView');
// subpackages/l_task/Scripts/TaskItemView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TaskData_1 = require("./TaskData");
var TaskModel_1 = require("./model/TaskModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskItemView = /** @class */ (function (_super) {
    __extends(TaskItemView, _super);
    function TaskItemView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.iconSprite = null;
        _this.iconSpriteBg = null;
        _this.nodeTitleIcon = null;
        _this.nodeTitleNormal = null;
        _this.descLabelWithIcon = null;
        _this.descLabelNormal = null;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.rewardBtn = null;
        _this.completedNode = null;
        return _this;
    }
    TaskItemView.prototype.uiOnLoad = function () {
        var t, e, a, o, i, r, n;
        this.contentNode = cc.find("content", this._cellUI);
        this.iconSprite = null === (t = cc.find("content/node_title_icon/node_mj/mj", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Sprite);
        this.iconSpriteBg = null === (e = cc.find("content/node_title_icon/node_mj/mj_bg", this._cellUI)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite);
        this.nodeTitleIcon = cc.find("content/node_title_icon", this._cellUI);
        this.nodeTitleNormal = cc.find("content/node_title", this._cellUI);
        this.descLabelWithIcon = null === (a = cc.find("content/node_title_icon/lb_title", this._cellUI)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
        this.descLabelNormal = null === (o = cc.find("content/node_title/lb_title", this._cellUI)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
        this.progressLabel = null === (i = cc.find("content/lb_progress", this._cellUI)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
        this.progressBar = null === (r = cc.find("content/progressBar", this._cellUI)) || void 0 === r ? void 0 : r.getComponent(cc.ProgressBar);
        this.rewardBtn = null === (n = cc.find("content/btn_play", this._cellUI)) || void 0 === n ? void 0 : n.getComponent(cc.Button);
        this.completedNode = cc.find("content/sp_done", this._cellUI);
        this.rewardBtn && this.OnButtonClick(this.rewardBtn.node, this.onRewardBtnClick.bind(this));
    };
    TaskItemView.prototype.updateUI = function () {
        if (this._data) {
            this.updateTitleNode();
            this.updateTaskDescription();
            this.updateProgress();
            this.updateButtonState();
            this.loadTaskIcon();
        }
    };
    TaskItemView.prototype.updateTitleNode = function () {
        var t = this._data.taskType === TaskData_1.ETaskType.ClearMahjong;
        this.nodeTitleIcon && (this.nodeTitleIcon.active = t);
        this.nodeTitleNormal && (this.nodeTitleNormal.active = !t);
    };
    TaskItemView.prototype.updateTaskDescription = function () {
        var t = this._data.taskDesc || "未知任务";
        if (this._data.taskType === TaskData_1.ETaskType.ClearMahjong) {
            this.descLabelWithIcon && I18NStrings_1.default.setText(this.descLabelWithIcon.node, "", t, [this._data.targetProgress]);
        }
        else {
            this.descLabelNormal && I18NStrings_1.default.setText(this.descLabelNormal.node, "", t, [this._data.targetProgress]);
        }
    };
    TaskItemView.prototype.updateProgress = function () {
        if (this._data) {
            this.progressLabel && (this.progressLabel.string = this._data.currentProgress + "/" + this._data.targetProgress);
            if (this.progressBar && this._data.targetProgress > 0) {
                var t = Math.min(this._data.currentProgress / this._data.targetProgress, 1);
                this.progressBar.progress = t;
            }
        }
    };
    TaskItemView.prototype.updateButtonState = function () {
        if (this._data)
            if (this._data.isCompleted) {
                this.setButtonState(false);
                this.setCompletedMarkVisible(true);
            }
            else {
                this.setButtonState(true);
                this.setCompletedMarkVisible(false);
            }
    };
    TaskItemView.prototype.setButtonState = function (t) {
        this.rewardBtn && (this.rewardBtn.node.active = t);
    };
    TaskItemView.prototype.setCompletedMarkVisible = function (t) {
        this.completedNode && (this.completedNode.active = t);
    };
    TaskItemView.prototype.loadTaskIcon = function () {
        if (this.iconSprite && this.iconSpriteBg && this._data && this._data.taskType === TaskData_1.ETaskType.ClearMahjong && void 0 !== this._data.targetCardId) {
            var t = TaskModel_1.TaskModel.getInstance().getCardResNameByCardId(this._data.targetCardId);
            if (t) {
                var e = CardUtil_1.default.getAtlasPathAndBundleName(t), a = e.path, o = e.bundleName, i = e.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this.iconSprite.node, a, i, false, o);
                var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up"), n = r.path, s = r.bundleName, u = r.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this.iconSpriteBg.node, n, u, false, s);
            }
        }
    };
    TaskItemView.prototype.onRewardBtnClick = function () {
        var t;
        if (this._data)
            try {
                if (((null === (t = TaskModel_1.TaskModel.getInstance()) || void 0 === t ? void 0 : t.getOpenFrom()) || TaskData_1.ETaskUIType.Home) === TaskData_1.ETaskUIType.Result)
                    DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.StartGame_Result);
                else {
                    DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.StartGame_Home);
                    this.goToGame();
                }
                ControllerManager_1.default.getInstance().closeViewByName("TaskController");
            }
            catch (t) { }
    };
    TaskItemView.prototype.goToGame = function () {
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
    };
    TaskItemView.prototype.getCellData = function () {
        return this._data;
    };
    TaskItemView.prefabUrl = "prefabs/task/TaskItem";
    __decorate([
        mj.traitEvent("TaskItemVw_onLoad")
    ], TaskItemView.prototype, "uiOnLoad", null);
    __decorate([
        mj.traitEvent("TaskItemVw_updProg")
    ], TaskItemView.prototype, "updateProgress", null);
    __decorate([
        mj.traitEvent("TaskItemVw_updBtnSt")
    ], TaskItemView.prototype, "updateButtonState", null);
    __decorate([
        mj.traitEvent("TaskItemVw_goToGame")
    ], TaskItemView.prototype, "goToGame", null);
    TaskItemView = __decorate([
        mj.class
    ], TaskItemView);
    return TaskItemView;
}(BaseCell_1.default));
exports.default = TaskItemView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrSXRlbVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFzRTtBQUN0RSw4REFBeUQ7QUFDekQsMkVBQXNFO0FBQ3RFLHVDQUFvRDtBQUNwRCwrQ0FBOEM7QUFDOUMsMEZBQXFGO0FBQ3JGLG9FQUEwRjtBQUMxRixvRUFBK0Q7QUFDL0Qsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUVwRjtJQUEwQyxnQ0FBUTtJQUFsRDtRQUFBLHFFQW1IQztRQWxIQyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYSxHQUFHLElBQUksQ0FBQzs7SUF3R3ZCLENBQUM7SUFyR0MsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FB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bUIsQ0FBQztnREFlbEM7SUF3QkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3NEQVNuQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt5REFTcEM7SUFtQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2dEQU9wQztJQS9Ha0IsWUFBWTtRQURoQyxFQUFFLENBQUMsS0FBSztPQUNZLFlBQVksQ0FtSGhDO0lBQUQsbUJBQUM7Q0FuSEQsQUFtSEMsQ0FuSHlDLGtCQUFRLEdBbUhqRDtrQkFuSG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQmFzZUNlbGwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL3VpL0Jhc2VDZWxsJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IEVUYXNrVHlwZSwgRVRhc2tVSVR5cGUgfSBmcm9tICcuL1Rhc2tEYXRhJztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwvVGFza01vZGVsJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRURhaWx5VGFza0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tJdGVtVmlldyBleHRlbmRzIEJhc2VDZWxsIHtcbiAgY29udGVudE5vZGUgPSBudWxsO1xuICBpY29uU3ByaXRlID0gbnVsbDtcbiAgaWNvblNwcml0ZUJnID0gbnVsbDtcbiAgbm9kZVRpdGxlSWNvbiA9IG51bGw7XG4gIG5vZGVUaXRsZU5vcm1hbCA9IG51bGw7XG4gIGRlc2NMYWJlbFdpdGhJY29uID0gbnVsbDtcbiAgZGVzY0xhYmVsTm9ybWFsID0gbnVsbDtcbiAgcHJvZ3Jlc3NMYWJlbCA9IG51bGw7XG4gIHByb2dyZXNzQmFyID0gbnVsbDtcbiAgcmV3YXJkQnRuID0gbnVsbDtcbiAgY29tcGxldGVkTm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdGFzay9UYXNrSXRlbVwiO1xuICBAbWoudHJhaXRFdmVudChcIlRhc2tJdGVtVndfb25Mb2FkXCIpXG4gIHVpT25Mb2FkKCkge1xuICAgIHZhciB0LCBlLCBhLCBvLCBpLCByLCBuO1xuICAgIHRoaXMuY29udGVudE5vZGUgPSBjYy5maW5kKFwiY29udGVudFwiLCB0aGlzLl9jZWxsVUkpO1xuICAgIHRoaXMuaWNvblNwcml0ZSA9IG51bGwgPT09ICh0ID0gY2MuZmluZChcImNvbnRlbnQvbm9kZV90aXRsZV9pY29uL25vZGVfbWovbWpcIiwgdGhpcy5fY2VsbFVJKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLmljb25TcHJpdGVCZyA9IG51bGwgPT09IChlID0gY2MuZmluZChcImNvbnRlbnQvbm9kZV90aXRsZV9pY29uL25vZGVfbWovbWpfYmdcIiwgdGhpcy5fY2VsbFVJKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLm5vZGVUaXRsZUljb24gPSBjYy5maW5kKFwiY29udGVudC9ub2RlX3RpdGxlX2ljb25cIiwgdGhpcy5fY2VsbFVJKTtcbiAgICB0aGlzLm5vZGVUaXRsZU5vcm1hbCA9IGNjLmZpbmQoXCJjb250ZW50L25vZGVfdGl0bGVcIiwgdGhpcy5fY2VsbFVJKTtcbiAgICB0aGlzLmRlc2NMYWJlbFdpdGhJY29uID0gbnVsbCA9PT0gKGEgPSBjYy5maW5kKFwiY29udGVudC9ub2RlX3RpdGxlX2ljb24vbGJfdGl0bGVcIiwgdGhpcy5fY2VsbFVJKSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuZGVzY0xhYmVsTm9ybWFsID0gbnVsbCA9PT0gKG8gPSBjYy5maW5kKFwiY29udGVudC9ub2RlX3RpdGxlL2xiX3RpdGxlXCIsIHRoaXMuX2NlbGxVSSkpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwgPSBudWxsID09PSAoaSA9IGNjLmZpbmQoXCJjb250ZW50L2xiX3Byb2dyZXNzXCIsIHRoaXMuX2NlbGxVSSkpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLnByb2dyZXNzQmFyID0gbnVsbCA9PT0gKHIgPSBjYy5maW5kKFwiY29udGVudC9wcm9ncmVzc0JhclwiLCB0aGlzLl9jZWxsVUkpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgdGhpcy5yZXdhcmRCdG4gPSBudWxsID09PSAobiA9IGNjLmZpbmQoXCJjb250ZW50L2J0bl9wbGF5XCIsIHRoaXMuX2NlbGxVSSkpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgdGhpcy5jb21wbGV0ZWROb2RlID0gY2MuZmluZChcImNvbnRlbnQvc3BfZG9uZVwiLCB0aGlzLl9jZWxsVUkpO1xuICAgIHRoaXMucmV3YXJkQnRuICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLnJld2FyZEJ0bi5ub2RlLCB0aGlzLm9uUmV3YXJkQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlVGl0bGVOb2RlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVRhc2tEZXNjcmlwdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgdGhpcy5sb2FkVGFza0ljb24oKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlVGl0bGVOb2RlKCkge1xuICAgIHZhciB0ID0gdGhpcy5fZGF0YS50YXNrVHlwZSA9PT0gRVRhc2tUeXBlLkNsZWFyTWFoam9uZztcbiAgICB0aGlzLm5vZGVUaXRsZUljb24gJiYgKHRoaXMubm9kZVRpdGxlSWNvbi5hY3RpdmUgPSB0KTtcbiAgICB0aGlzLm5vZGVUaXRsZU5vcm1hbCAmJiAodGhpcy5ub2RlVGl0bGVOb3JtYWwuYWN0aXZlID0gIXQpO1xuICB9XG4gIHVwZGF0ZVRhc2tEZXNjcmlwdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2RhdGEudGFza0Rlc2MgfHwgXCLmnKrnn6Xku7vliqFcIjtcbiAgICBpZiAodGhpcy5fZGF0YS50YXNrVHlwZSA9PT0gRVRhc2tUeXBlLkNsZWFyTWFoam9uZykge1xuICAgICAgdGhpcy5kZXNjTGFiZWxXaXRoSWNvbiAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuZGVzY0xhYmVsV2l0aEljb24ubm9kZSwgXCJcIiwgdCwgW3RoaXMuX2RhdGEudGFyZ2V0UHJvZ3Jlc3NdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNjTGFiZWxOb3JtYWwgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLmRlc2NMYWJlbE5vcm1hbC5ub2RlLCBcIlwiLCB0LCBbdGhpcy5fZGF0YS50YXJnZXRQcm9ncmVzc10pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tJdGVtVndfdXBkUHJvZ1wiKVxuICB1cGRhdGVQcm9ncmVzcygpIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5wcm9ncmVzc0xhYmVsICYmICh0aGlzLnByb2dyZXNzTGFiZWwuc3RyaW5nID0gdGhpcy5fZGF0YS5jdXJyZW50UHJvZ3Jlc3MgKyBcIi9cIiArIHRoaXMuX2RhdGEudGFyZ2V0UHJvZ3Jlc3MpO1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgJiYgdGhpcy5fZGF0YS50YXJnZXRQcm9ncmVzcyA+IDApIHtcbiAgICAgICAgdmFyIHQgPSBNYXRoLm1pbih0aGlzLl9kYXRhLmN1cnJlbnRQcm9ncmVzcyAvIHRoaXMuX2RhdGEudGFyZ2V0UHJvZ3Jlc3MsIDEpO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrSXRlbVZ3X3VwZEJ0blN0XCIpXG4gIHVwZGF0ZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9kYXRhKSBpZiAodGhpcy5fZGF0YS5pc0NvbXBsZXRlZCkge1xuICAgICAgdGhpcy5zZXRCdXR0b25TdGF0ZShmYWxzZSk7XG4gICAgICB0aGlzLnNldENvbXBsZXRlZE1hcmtWaXNpYmxlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEJ1dHRvblN0YXRlKHRydWUpO1xuICAgICAgdGhpcy5zZXRDb21wbGV0ZWRNYXJrVmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICB9XG4gIHNldEJ1dHRvblN0YXRlKHQpIHtcbiAgICB0aGlzLnJld2FyZEJ0biAmJiAodGhpcy5yZXdhcmRCdG4ubm9kZS5hY3RpdmUgPSB0KTtcbiAgfVxuICBzZXRDb21wbGV0ZWRNYXJrVmlzaWJsZSh0KSB7XG4gICAgdGhpcy5jb21wbGV0ZWROb2RlICYmICh0aGlzLmNvbXBsZXRlZE5vZGUuYWN0aXZlID0gdCk7XG4gIH1cbiAgbG9hZFRhc2tJY29uKCkge1xuICAgIGlmICh0aGlzLmljb25TcHJpdGUgJiYgdGhpcy5pY29uU3ByaXRlQmcgJiYgdGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLnRhc2tUeXBlID09PSBFVGFza1R5cGUuQ2xlYXJNYWhqb25nICYmIHZvaWQgMCAhPT0gdGhpcy5fZGF0YS50YXJnZXRDYXJkSWQpIHtcbiAgICAgIHZhciB0ID0gVGFza01vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q2FyZFJlc05hbWVCeUNhcmRJZCh0aGlzLl9kYXRhLnRhcmdldENhcmRJZCk7XG4gICAgICBpZiAodCkge1xuICAgICAgICB2YXIgZSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodCksXG4gICAgICAgICAgYSA9IGUucGF0aCxcbiAgICAgICAgICBvID0gZS5idW5kbGVOYW1lLFxuICAgICAgICAgIGkgPSBlLmZyb21BdGxhcztcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5pY29uU3ByaXRlLm5vZGUsIGEsIGksIGZhbHNlLCBvKTtcbiAgICAgICAgdmFyIHIgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIpLFxuICAgICAgICAgIG4gPSByLnBhdGgsXG4gICAgICAgICAgcyA9IHIuYnVuZGxlTmFtZSxcbiAgICAgICAgICB1ID0gci5mcm9tQXRsYXM7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuaWNvblNwcml0ZUJnLm5vZGUsIG4sIHUsIGZhbHNlLCBzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25SZXdhcmRCdG5DbGljaygpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5fZGF0YSkgdHJ5IHtcbiAgICAgIGlmICgoKG51bGwgPT09ICh0ID0gVGFza01vZGVsLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0T3BlbkZyb20oKSkgfHwgRVRhc2tVSVR5cGUuSG9tZSkgPT09IEVUYXNrVUlUeXBlLlJlc3VsdCkgRG90R2FtZUJ0bkNsaWNrLmRvdERhaWx5VGFzayhFRGFpbHlUYXNrQ2xpY2tUeXBlLlN0YXJ0R2FtZV9SZXN1bHQpO2Vsc2Uge1xuICAgICAgICBEb3RHYW1lQnRuQ2xpY2suZG90RGFpbHlUYXNrKEVEYWlseVRhc2tDbGlja1R5cGUuU3RhcnRHYW1lX0hvbWUpO1xuICAgICAgICB0aGlzLmdvVG9HYW1lKCk7XG4gICAgICB9XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlVmlld0J5TmFtZShcIlRhc2tDb250cm9sbGVyXCIpO1xuICAgIH0gY2F0Y2ggKHQpIHt9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrSXRlbVZ3X2dvVG9HYW1lXCIpXG4gIGdvVG9HYW1lKCkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRpbGUyR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgfVxuICB9XG4gIGdldENlbGxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59Il19