import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import { DotGamePageShow, EPageShowType } from '../../../Scripts/dot/DGamePageShow';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MainGameBtnBackTrait")
export default class MainGameBtnBackTrait extends Trait {
  static traitKey = "MainGameBtnBack";
  onLoad() {
    super.onLoad.call(this);
  }
  onGameUI_onLoad(e, t) {
    var a,
      o = e.ins,
      n = null === (a = null == o ? void 0 : o.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop"),
      r = null == n ? void 0 : n.getChildByName("btnBack");
    if (r) {
      // Hall is removed from the startup flow, so keep back-to-hall button disabled.
      r.active = false;
    }
    t();
  }
  onGuideBhv_finish(e, t) {
    this.localData.isGuidedFinished = true;
    // Keep hidden even after guide completion.
    t();
  }
  addBtnBackClickEvent(e) {
    if (e) {
      var t = e.getComponent(BaseUI);
      t || (t = e.addComponent(BaseUI)) && t.OnButtonClick(e, this.onBtnBackClick.bind(this));
    }
  }
  @mj.traitEvent("MainGameBtnBack_onClick")
  onBtnBackClick() {
    var e = ControllerManager.getInstance().getTopSceneController();
    if (e && e.gameType === MjGameType.Travel) ControllerManager.getInstance().pushViewByController("TravelMapController", {
      isReplace: true
    });else if (e && e.gameType === MjGameType.DailyChallenge) ControllerManager.getInstance().pushViewByController("DailyController", {
      isReplace: true,
      isShowAction: false,
      isReuse: false
    });else {
      JumpManager.getInstance().jumpToHall();
      e && e.gameType === MjGameType.Normal && DotGamePageShow.dot(EPageShowType.LevelToMainPage);
    }
  }
}