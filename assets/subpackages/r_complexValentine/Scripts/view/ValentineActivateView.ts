import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import UIView from '../../../../Scripts/framework/ui/UIView';
import TravelGameModel from '../../../../Scripts/gamePlay/travel/model/TravelGameModel';
import ValentineModel, { ValentineEvents, ValentineActState } from '../model/ValentineModel';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../../Scripts/base/event/EventDefine';
import { MjGameType } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DotGameValentine, EValentineStage, EValentineEffectSwitch, EValentineClickTarget } from '../../../../Scripts/DGameValentine';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class ValentineActivateView extends UIView {
  @mj.node("content/btn_close")
  closeBtn: "content/btn_close" = null;
  @mj.node("content/btn_go")
  goBtn: "content/btn_go" = null;
  @mj.node("content/btn_toggle")
  switchBtn: "content/btn_toggle" = null;
  @mj.node("content/btn_toggle/spine")
  switchSpineNode: "content/btn_toggle/spine" = null;
  @mj.component("content/title", cc.Label)
  titleLabel: "content/title" = null;
  @mj.component("content/time_node/time", cc.Label)
  timeLabel: "content/time_node/time" = null;
  @mj.component("content/cnt", cc.Label)
  cntLabel: "content/cnt" = null;
  _autoCloseTimer = -1;
  _isGaming = false;
  _isAnimating = false;
  _isSwitchOn = true;
  static prefabUrl = "prefabs/ValentineActivateView";
  @mj.traitEvent("VltnActVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
    this.OnButtonClick(this.goBtn, this.onGoBtnClick.bind(this));
    this.OnButtonClick(this.switchBtn, this.onSwitchClick.bind(this));
    this.updateUI();
    DotGameValentine.dotValentineViewPopup({
      stage_progress: EValentineStage.Stage2,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId(),
      remaining_time: this.timeLabel.string
    });
    this.dispatchEvent(ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP);
    this.dispatchEvent(ValentineEvents.VALENTINE_CLOSE_END_POPUP);
  }
  getMessageListeners() {
    var _t = {};
    _t[ValentineEvents.UPDATE_ACTIVITY_REMAIN_TIME] = this.onMsgUpdateActivityRemainTime.bind(this);
    _t[ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP] = this.onMsgValentineCloseActivatePopup.bind(this);
    return _t;
  }
  onMsgValentineCloseActivatePopup() {
    this.delegate.close();
  }
  onMsgUpdateActivityRemainTime() {
    this.updateRemainTime();
  }
  updateRemainTime() {
    var t = function t(t) {
        return t.toString().padStart(2, "0");
      },
      e = ValentineModel.getInstance().getActLeftTime(),
      n = __read(GameUtils.getRemainTimeParts(0.001 * e), 4),
      o = n[0],
      i = n[1],
      a = n[2];
    n[3];
    I18NStrings.setText(this.timeLabel.node, o + "D" + i + "H" + a + "M", "Common_CountDown_Minute", [t(o), t(i), t(a)]);
  }
  updateUI() {
    this.updateRemainTime();
  }
  show(t) {
    this._isGaming = !!(null == t ? void 0 : t.isGaming);
    this.closeBtn.active = !this._isGaming;
    this._isGaming && this.scheduleAutoClose();
    var e = this.switchSpineNode.getComponent(sp.Skeleton);
    this._isSwitchOn = ValentineModel.getInstance().getEffectEnabled();
    GameUtils.playSpine(e, this._isSwitchOn ? "on_init" : "off_init", true);
  }
  scheduleAutoClose() {
    var t = this;
    this._autoCloseTimer = setTimeout(function () {
      t.delegate.close();
    }, 1000);
  }
  onCloseBtnClick() {
    var t = ValentineModel.getInstance().getEffectEnabled();
    DotGameValentine.dotValentineClickPopup({
      stage_progress: EValentineStage.Stage2,
      effect_switch: t ? EValentineEffectSwitch.On : EValentineEffectSwitch.Off,
      click_target: EValentineClickTarget.Close,
      remaining_time: this.timeLabel.string,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
    });
    this.delegate.close();
  }
  onGoBtnClick() {
    var t = ValentineModel.getInstance().getEffectEnabled();
    DotGameValentine.dotValentineClickPopup({
      stage_progress: EValentineStage.Stage2,
      effect_switch: t ? EValentineEffectSwitch.On : EValentineEffectSwitch.Off,
      click_target: EValentineClickTarget.Button,
      remaining_time: this.timeLabel.string,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
    });
    this.goto();
  }
  @mj.traitEvent("VltnActVw_goto")
  goto() {
    var t = this;
    if (TravelGameModel.getInstance().isSessionActive()) {
      ControllerManager.getInstance().pushViewByController("TravelGameController", {}, function () {
        var e;
        null === (e = t.delegate) || void 0 === e || e.close();
      });
    } else {
      ControllerManager.getInstance().pushViewByController("MainGameController", {}, function () {
        var e;
        null === (e = t.delegate) || void 0 === e || e.close();
      });
    }
  }
  onSwitchClick() {
    var t = this;
    if (this._isGaming) this.delegate.close();else if (!this._isAnimating) {
      this._isAnimating = true;
      var e = this.switchSpineNode.getComponent(sp.Skeleton);
      this._isSwitchOn = !this._isSwitchOn;
      GameUtils.playSpine(e, this._isSwitchOn ? "off_on" : "on_off", false, function () {
        GameUtils.playSpine(e, t._isSwitchOn ? "on_init" : "off_init", true);
        t._isAnimating = false;
      });
      var n = ValentineModel.getInstance().getActivityState();
      if (ValentineActState.Activated == n) {
        ValentineModel.getInstance().setEffectEnabled(this._isSwitchOn);
        this.dispatchEvent(EVT_MSG_HALL_FORCE_UPDATE);
      }
      var o = ValentineModel.getInstance().getEffectEnabled();
      DotGameValentine.dotValentineClickPopup({
        stage_progress: EValentineStage.Stage2,
        effect_switch: o ? EValentineEffectSwitch.On : EValentineEffectSwitch.Off,
        click_target: EValentineClickTarget.Switch,
        remaining_time: this.timeLabel.string,
        main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
      });
    }
  }
  onDestroy() {
    if (this._autoCloseTimer > 0) {
      clearTimeout(this._autoCloseTimer);
      this._autoCloseTimer = -1;
    }
    super.onDestroy.call(this);
  }
}