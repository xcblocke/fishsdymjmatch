import { MjGameType } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import UIView from '../../../../Scripts/framework/ui/UIView';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../../Scripts/base/event/EventDefine';
import { DotGameValentine, EValentineStage, EValentineEffectSwitch, EValentineClickTarget } from '../../../../Scripts/DGameValentine';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import { ValentineEvents } from '../model/ValentineModel';
@mj.class
export default class ValentineEndView extends UIView {
  @mj.node("content/btn_close")
  closeBtn: "content/btn_close" = null;
  @mj.node("content/btn_bye")
  byeBtn: "content/btn_bye" = null;
  @mj.component("content/title", cc.Label)
  titleLabel: "content/title" = null;
  @mj.component("content/cnt", cc.Label)
  cntLabel: "content/cnt" = null;
  @mj.component("content/btn_bye/lbl_bye", cc.Label)
  byeBtnLabel: "content/btn_bye/lbl_bye" = null;
  static prefabUrl = "prefabs/ValentineEndView";
  @mj.traitEvent("VltnEndVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.byeBtn, this.onByeBtnClick.bind(this));
    this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
    this.initUI();
    DotGameValentine.dotValentineViewPopup({
      stage_progress: EValentineStage.Stage3,
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId(),
      remaining_time: "0d0h"
    });
    this.dispatchEvent(EVT_MSG_HALL_FORCE_UPDATE);
    this.dispatchEvent(ValentineEvents.VALENTINE_CLOSE_INTRO_POPUP);
    this.dispatchEvent(ValentineEvents.VALENTINE_CLOSE_ACTIVATE_POPUP);
  }
  getMessageListeners() {
    var _t = {};
    _t[ValentineEvents.VALENTINE_CLOSE_END_POPUP] = this.onMsgValentineCloseEndPopup.bind(this);
    return _t;
  }
  onMsgValentineCloseEndPopup() {
    this.delegate.close();
  }
  initUI() {}
  @mj.traitEvent("VltnEndVw_onConfirmClk")
  onByeBtnClick() {
    DotGameValentine.dotValentineClickPopup({
      stage_progress: EValentineStage.Stage3,
      effect_switch: EValentineEffectSwitch.Off,
      click_target: EValentineClickTarget.Button,
      remaining_time: "0d0h",
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
    });
    this.delegate.close();
  }
  onCloseBtnClick() {
    DotGameValentine.dotValentineClickPopup({
      stage_progress: EValentineStage.Stage3,
      effect_switch: EValentineEffectSwitch.Off,
      click_target: EValentineClickTarget.Close,
      remaining_time: "0d0h",
      main_level: UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId()
    });
    this.delegate.close();
  }
  show() {}
}