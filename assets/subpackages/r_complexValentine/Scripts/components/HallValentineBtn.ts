import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import ValentineModel, { ValentineEvents, ValentineActState } from '../model/ValentineModel';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import { DotGameValentine } from '../../../../Scripts/DGameValentine';
export var HallValentineBtnState = {
  InProgress: "InProgress",
  Off: "Off",
  On: "On"
};
@mj.class
export default class HallValentineBtn extends BaseUI {
  @mj.node("Root/spine")
  spineNode: "Root/spine" = null;
  @mj.node("Root/progress")
  progressNode: "Root/progress" = null;
  @mj.component("Root/progress/value", cc.Label)
  progressLabelNode: "Root/progress/value" = null;
  _curBtnState = HallValentineBtnState.InProgress;
  static prefabUrl = "prefabs/HallValentineBtn";
  static bundleName = "r_complexValentine";
  @mj.traitEvent("VltnBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    this.updateUI();
    DotGameValentine.dotValentineViewIcon({
      task_progress: ValentineModel.getInstance().getProgress()
    });
  }
  onEnable() {
    super.onEnable && super.onEnable.call(this);
    this.dispatchEvent("MsgEnableHomeBtn", {
      type: "Valentine",
      node: this.node
    });
  }
  onDisable() {
    super.onDisable && super.onDisable.call(this);
  }
  getMessageListeners() {
    var _t = {};
    _t[ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW] = this.onMsgCloseValentineActivateView.bind(this);
    return _t;
  }
  onMsgCloseValentineActivateView() {
    this.updateUI();
  }
  @mj.traitEvent("VltnBtn_updateUI")
  updateUI() {
    var t = ValentineModel.getInstance(),
      e = t.getActivityState(),
      n = t.getEffectEnabled();
    this.progressNode.active = e === ValentineActState.InProgress;
    if (ValentineActState.InProgress === e) {
      this.updateProgress();
      this._curBtnState = HallValentineBtnState.InProgress;
    } else ValentineActState.Activated === e && (this._curBtnState = n ? HallValentineBtnState.On : HallValentineBtnState.Off);
    this.updateEffectSwitch();
  }
  updateProgress() {
    var t = ValentineModel.getInstance(),
      e = t.getConfig(),
      n = t.localData.progress,
      o = e.requiredLevels,
      i = Math.min(n / o, 1);
    this.progressNode.getComponent(cc.ProgressBar).progress = i;
    this.progressLabelNode.getComponent(cc.Label).string = n + "/" + o;
  }
  updateEffectSwitch() {
    switch (this._curBtnState) {
      case HallValentineBtnState.InProgress:
        this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "off_init_jdt", true);
        break;
      case HallValentineBtnState.On:
        this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "on_init", true);
        break;
      case HallValentineBtnState.Off:
        this.spineNode.getComponent(sp.Skeleton).setAnimation(0, "off_init", true);
    }
  }
  @mj.traitEvent("VltnBtn_onBtnClk")
  onBtnClick() {
    var t = ValentineModel.getInstance().getActivityState(),
      e = ValentineModel.getInstance();
    if (ValentineActState.InProgress == t) this.popIntro();else if (ValentineActState.Activated == t) this.popActivate();else if (ValentineActState.Ended == t) {
      if (e.localData.hasActivated) {
        this.popEnd();
      } else {
        this.popIntro();
      }
      this.destroySelf();
    }
    DotGameValentine.dotValentineClickIcon({
      task_progress: e.getProgress()
    });
  }
  popIntro() {
    ControllerManager.getInstance().pushViewByController("ValentineIntroController", {
      isReuse: false,
      isShowAction: true
    });
  }
  popEnd() {
    ValentineModel.getInstance().markEndPopupShown();
    ControllerManager.getInstance().pushViewByController("ValentineEndController", {
      isReuse: false,
      isShowAction: false
    });
  }
  popActivate() {
    ControllerManager.getInstance().pushViewByController("ValentineActivateController", {
      isReuse: false,
      isShowAction: true
    });
  }
  destroySelf() {
    this.node.destroy();
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
}