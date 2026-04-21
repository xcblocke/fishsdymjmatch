import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import TaskView from './view/TaskView';
import { TaskModel } from './model/TaskModel';
import { DotGameBtnClick, EDailyTaskClickType } from '../../../Scripts/dot/DGameBtnClick';
import { ETaskUIType } from './TaskData';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { ERedDotType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class("TaskController")
export default class TaskController extends ViewController {
  viewClass = TaskView;
  viewMode = viewMode.ALERT;
  _model = null;
  @mj.traitEvent("TaskCtrl_initRes")
  initDependRes() {}
  viewDidLoad() {
    var e, a;
    super.viewDidLoad.call(this);
    this._model = TaskModel.getInstance();
    if (!this._model.isInitialized()) {
      var o = mj.getClassByName("TaskTrait");
      (null === (e = null == o ? void 0 : o.getInstance()) || void 0 === e ? void 0 : e.eventEnabled) && (null === (a = null == o ? void 0 : o.getInstance()) || void 0 === a || a.initTask());
    }
  }
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this._model.updateFirstHomeShow();
    var a = (null == e ? void 0 : e.from) || ETaskUIType.Home;
    this._model.setOpenFrom(a);
    mj.EventManager.emit(EGameEvent.RedDot_clearNotify, ERedDotType.Task);
    this.dispatchEvent("updateTaskRedDot");
    DotGameBtnClick.dotDailyTask(EDailyTaskClickType.DialogDisplayed);
    this._model.checkAndInitTask();
    this.refreshTaskList();
  }
  refreshTaskList() {
    this.viewDoAction("refreshTaskList");
  }
  getMessageListeners() {
    var _t = {};
    _t.removeTaskBoxTips = this.onRemoveTaskBoxTips.bind(this);
    _t.openTaskReward = this.onOpenTaskReward.bind(this);
    return _t;
  }
  onRemoveTaskBoxTips() {
    this.viewDoAction("removeTaskBoxTips");
  }
  onOpenTaskReward(t) {
    this.viewDoAction("openTaskRewardUI", t);
  }
  onUIDestroy() {
    super.onUIDestroy.call(this);
  }
}