"use strict";
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