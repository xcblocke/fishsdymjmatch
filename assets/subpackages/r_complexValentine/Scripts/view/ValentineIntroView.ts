import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import UIView from '../../../../Scripts/framework/ui/UIView';
import TravelGameModel from '../../../../Scripts/gamePlay/travel/model/TravelGameModel';
import ValentineModel, { ValentineEvents } from '../model/ValentineModel';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import { DotGameValentine, EValentineStage, EValentineEffectSwitch, EValentineClickTarget } from '../../../../Scripts/DGameValentine';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class
export default class ValentineIntroView extends UIView {
  @mj.node("content/btn_close")
  closeBtn: "content/btn_close" = null;
  @mj.node("content/btn_go")
  goBtn: "content/btn_go" = null;
  @mj.component("content/title", cc.Label)
  titleLabel: "content/title" = null;
  @mj.component("content/time_node/time", cc.Label)
  timeLabel: "content/time_node/time" = null;
  @mj.component("content/cnt", cc.Label)
  cntLabel: "content/cnt" = null;
  @mj.component("content/btn_go/lbl_go", cc.Label)
  goBtnLabel: "content/btn_go/lbl_go" = null;
  @mj.node("content/bg/love_spine")
  loveSpineNode: "content/bg/love_spine" = null;
  static prefabUrl = "prefabs/ValentineIntroView";
  @mj.traitEvent("VltnIntroVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
    this.OnButtonClick(this.goBtn, this.onGoBtnClick.bind(this));
    this.updateUI();
    DotGameValentine.dotValentineViewPopup({
      stage_progress: EValentineStage.Stage1,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId(),
      remaining_time: this.timeLabel.string
    });
    this.dispatchEvent(ValentineEvents.VALENTINE_CLOSE_END_POPUP);
    this.dispatchEvent(ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP);
  }
  getMessageListeners() {
    var _t = {};
    _t[ValentineEvents.UPDATE_ACTIVITY_REMAIN_TIME] = this.onMsgUpdateActivityRemainTime.bind(this);
    _t[ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP] = this.onMsgValentineCloseIntroPopup.bind(this);
    return _t;
  }
  onMsgValentineCloseIntroPopup() {
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
  @mj.traitEvent("VltnIntroVw_onCloseClk")
  onCloseBtnClick() {
    DotGameValentine.dotValentineClickPopup({
      stage_progress: EValentineStage.Stage1,
      effect_switch: EValentineEffectSwitch.Off,
      click_target: EValentineClickTarget.Close,
      remaining_time: this.timeLabel.string,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
    });
    this.delegate.close();
  }
  @mj.traitEvent("VltnIntroVw_onGoClk")
  onGoBtnClick() {
    DotGameValentine.dotValentineClickPopup({
      stage_progress: EValentineStage.Stage1,
      effect_switch: EValentineEffectSwitch.Off,
      click_target: EValentineClickTarget.Button,
      remaining_time: this.timeLabel.string,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
    });
    this.goto();
  }
  @mj.traitEvent("VltnIntroVw_goto")
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
  show() {
    this.playAni();
  }
  playAni() {
    var t = this.loveSpineNode.getComponent(sp.Skeleton);
    GameUtils.playSpine(t, "in", false, function () {
      GameUtils.playSpine(t, "init", true);
    });
  }
}