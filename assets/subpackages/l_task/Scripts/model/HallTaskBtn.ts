import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import { ETaskUIType } from '../TaskData';
import { DotGameBtnClick, EHomePageClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { TaskModel } from './TaskModel';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
@mj.class
export default class HallTaskBtn extends BaseUI {
  _redDot = null;
  _itemLock = null;
  _lb_level = null;
  _lb_task = null;
  _effLock = null;
  static prefabUrl = "prefabs/task/HallTaskBtn";
  get taskModel() {
    return TaskModel.getInstance();
  }
  @mj.traitEvent("TaskTt_onLoad")
  onLoad() {
    super.onLoad.call(this);
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
  }
  onEnable() {
    super.onEnable && super.onEnable.call(this);
    this.dispatchEvent("MsgEnableHomeBtn", {
      type: "Task",
      node: this.node
    });
  }
  onDisable() {
    super.onDisable && super.onDisable.call(this);
  }
  @mj.traitEvent("TaskTt_onBtnClick")
  onBtnClick() {
    if (this.taskModel.isTaskOpen()) {
      ControllerManager.getInstance().pushViewByController("TaskController", {
        from: ETaskUIType.Home
      });
      this.updateRedDot(false);
      DotGameBtnClick.dotHall(EHomePageClickType.DailyTask);
    } else this.playLockAnim();
  }
  @mj.traitEvent("TaskTt_doLockAni")
  doPlayLockAnim() {
    var t = this;
    cc.isValid(this._effLock) && GameUtils.playSpine(this._effLock, "in", false, function () {
      cc.isValid(t._effLock) && GameUtils.playSpine(t._effLock, "init", true);
    });
  }
  playLockAnim() {
    this.doPlayLockAnim();
    var t = this.getOpenTips(this.taskModel.openCondition().level);
    ControllerManager.getInstance().pushViewByController("LockTipsController", {
      isReuse: false,
      tips: t,
      noBlock: true,
      isGlobal: false,
      bgStyle: null,
      isShowAction: false
    });
  }
  updateRedDot(t) {
    cc.isValid(this._redDot) && (this._redDot.active = t);
  }
  @mj.traitEvent("TaskTt_updateLock")
  updateLock(t) {
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
  }
  @mj.traitEvent("TaskTt_getLv")
  getLevel(t) {
    return t;
  }
  @mj.traitEvent("TaskTt_getOTips")
  getOpenTips(t) {
    return I18NStrings.stringFormat(I18NStrings.get("Common_Reward_target_1"), t);
  }
}