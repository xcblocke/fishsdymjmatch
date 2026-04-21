import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseCell from '../../../Scripts/base/ui/BaseCell';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { ETaskType, ETaskUIType } from './TaskData';
import { TaskModel } from './model/TaskModel';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { DotGameBtnClick, EDailyTaskClickType } from '../../../Scripts/dot/DGameBtnClick';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class
export default class TaskItemView extends BaseCell {
  contentNode = null;
  iconSprite = null;
  iconSpriteBg = null;
  nodeTitleIcon = null;
  nodeTitleNormal = null;
  descLabelWithIcon = null;
  descLabelNormal = null;
  progressLabel = null;
  progressBar = null;
  rewardBtn = null;
  completedNode = null;
  static prefabUrl = "prefabs/task/TaskItem";
  @mj.traitEvent("TaskItemVw_onLoad")
  uiOnLoad() {
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
  }
  updateUI() {
    if (this._data) {
      this.updateTitleNode();
      this.updateTaskDescription();
      this.updateProgress();
      this.updateButtonState();
      this.loadTaskIcon();
    }
  }
  updateTitleNode() {
    var t = this._data.taskType === ETaskType.ClearMahjong;
    this.nodeTitleIcon && (this.nodeTitleIcon.active = t);
    this.nodeTitleNormal && (this.nodeTitleNormal.active = !t);
  }
  updateTaskDescription() {
    var t = this._data.taskDesc || "未知任务";
    if (this._data.taskType === ETaskType.ClearMahjong) {
      this.descLabelWithIcon && I18NStrings.setText(this.descLabelWithIcon.node, "", t, [this._data.targetProgress]);
    } else {
      this.descLabelNormal && I18NStrings.setText(this.descLabelNormal.node, "", t, [this._data.targetProgress]);
    }
  }
  @mj.traitEvent("TaskItemVw_updProg")
  updateProgress() {
    if (this._data) {
      this.progressLabel && (this.progressLabel.string = this._data.currentProgress + "/" + this._data.targetProgress);
      if (this.progressBar && this._data.targetProgress > 0) {
        var t = Math.min(this._data.currentProgress / this._data.targetProgress, 1);
        this.progressBar.progress = t;
      }
    }
  }
  @mj.traitEvent("TaskItemVw_updBtnSt")
  updateButtonState() {
    if (this._data) if (this._data.isCompleted) {
      this.setButtonState(false);
      this.setCompletedMarkVisible(true);
    } else {
      this.setButtonState(true);
      this.setCompletedMarkVisible(false);
    }
  }
  setButtonState(t) {
    this.rewardBtn && (this.rewardBtn.node.active = t);
  }
  setCompletedMarkVisible(t) {
    this.completedNode && (this.completedNode.active = t);
  }
  loadTaskIcon() {
    if (this.iconSprite && this.iconSpriteBg && this._data && this._data.taskType === ETaskType.ClearMahjong && void 0 !== this._data.targetCardId) {
      var t = TaskModel.getInstance().getCardResNameByCardId(this._data.targetCardId);
      if (t) {
        var e = CardUtil.getAtlasPathAndBundleName(t),
          a = e.path,
          o = e.bundleName,
          i = e.fromAtlas;
        BaseSprite.refreshWithNode(this.iconSprite.node, a, i, false, o);
        var r = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_up"),
          n = r.path,
          s = r.bundleName,
          u = r.fromAtlas;
        BaseSprite.refreshWithNode(this.iconSpriteBg.node, n, u, false, s);
      }
    }
  }
  onRewardBtnClick() {
    var t;
    if (this._data) try {
      if (((null === (t = TaskModel.getInstance()) || void 0 === t ? void 0 : t.getOpenFrom()) || ETaskUIType.Home) === ETaskUIType.Result) DotGameBtnClick.dotDailyTask(EDailyTaskClickType.StartGame_Result);else {
        DotGameBtnClick.dotDailyTask(EDailyTaskClickType.StartGame_Home);
        this.goToGame();
      }
      ControllerManager.getInstance().closeViewByName("TaskController");
    } catch (t) {}
  }
  @mj.traitEvent("TaskItemVw_goToGame")
  goToGame() {
    if (UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal) {
      ControllerManager.getInstance().pushViewByController("Tile2GameController");
    } else {
      ControllerManager.getInstance().pushViewByController("MainGameController");
    }
  }
  getCellData() {
    return this._data;
  }
}