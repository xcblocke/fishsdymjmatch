import BaseUI from './framework/ui/BaseUI';
import ControllerManager from './framework/manager/ControllerManager';
import I18NStrings from './framework/data/I18NStrings';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
import GameUtils from './core/simulator/util/GameUtils';
import { TRAVEL_GAME_SESSION_END } from './config/TravelConfig';
import { DotGamePageShow, EPageShowType } from './dot/DGamePageShow';
import { DotGameBtnClick, EHomePageClickType } from './dot/DGameBtnClick';
@mj.class
export default class HallJourneyBtn extends BaseUI {
  @mj.component("Timer/Time", cc.Label)
  timerLabel: "Timer/Time" = null;
  @mj.node("Timer")
  timerNode: "Timer" = null;
  @mj.node("ComeSoon")
  ComeSoonNode: "ComeSoon" = null;
  static prefabUrl = "prefabs/journey/HallBtn/HallJourneyBtn";
  getMessageListeners() {
    return {
      Hall_updateUI: this.updateUI.bind(this)
    };
  }
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
  }
  updateUI() {
    var e = this,
      t = TravelGameModel.getInstance();
    this.node.active = t.isUnlocked();
    if (this.node.active) if (t.isSessionActive()) {
      this.timerNode.active = true;
      var o = t.getRemainTime();
      this.ComeSoonNode.active = false;
      var n = __read(GameUtils.getRemainTimeParts(o), 4),
        i = n[0],
        r = n[1],
        l = n[2],
        s = (n[3], function (e) {
          return e.toString().padStart(2, "0");
        });
      I18NStrings.setText(this.timerLabel.node, s(i) + "d" + s(r) + "h" + s(l) + "m", "Common_CountDown_Minute", [i, r, l]);
      this.scheduleOnce(function () {
        e.updateUI();
      }, 1);
    } else {
      this.ComeSoonNode.active = true;
      this.timerNode.active = false;
      this.dispatchEvent(TRAVEL_GAME_SESSION_END);
      this.node.destroy();
    }
  }
  @mj.traitEvent("HallJourBtn_onClk")
  onBtnClick() {
    if (TravelGameModel.getInstance().isSessionActive()) {
      ControllerManager.getInstance().pushViewByController("TravelMapController");
      DotGameBtnClick.dotHall(EHomePageClickType.Travel);
      DotGamePageShow.dot(EPageShowType.TravelPage);
    }
  }
}