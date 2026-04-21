import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("InterAdStartLevelNewTrait")
export default class InterAdStartLevelNewTrait extends Trait {
  _isReadyToMainGame = false;
  static traitKey = "InterAdStartLevelNew";
  onLoad() {
    super.onLoad.call(this);
  }
  onHallNmlBtn_onBtnClk(e, t) {
    UserModel.getInstance().getCurrentGameType(), MjGameType.Classic, t();
  }
  onAdMgr_chkInterAd(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var r = mj.getClassByName("InterAdStartLevelTrait");
      if (r && r.getInstance()) {
        var n = r.getInstance();
        if (true === n.eventEnabled) {
          var a = n.getStartLevel();
          if (true !== this.getHasNotPlayedFirstInter()) {
            if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Normal) {
              if (UserModel.getInstance().getMainGameData().getLevelId() <= a) {
                t({
                  returnVal: false,
                  isBreak: true,
                  returnType: TraitCallbackReturnType.return
                });
                return;
              }
            }
            t();
          } else t();
        } else t();
      } else t();
    } else t();
  }
  getHasNotPlayedFirstInter() {
    var e = mj.getClassByName("FirstInterstitialTimingTrait");
    return !(!e || !e.getInstance() || true !== e.getInstance().eventEnabled || false !== e.getInstance().getHasPlayedFirstInter());
  }
}