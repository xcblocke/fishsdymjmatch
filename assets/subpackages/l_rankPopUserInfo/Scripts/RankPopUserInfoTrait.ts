import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RankPopUserInfoTrait")
export default class RankPopUserInfoTrait extends Trait {
  static traitKey = "RankPopUserInfo";
  onRankIntroVw_collect(e, t) {
    if ("yes" == this.localData.isRankPopUserInfo) t();else {
      this.localData.isRankPopUserInfo = "yes";
      ControllerManager.getInstance().pushViewByController("UserInfoController", {
        isFromRankIntro: true
      });
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onRankIntroVw_closeClk(e, t) {
    t();
    this.localData.isRankPopUserInfo = "yes";
  }
  onUserInfoVw_destroy(e, t) {
    var r;
    t();
    if (null === (r = e.ins.delegate.args) || void 0 === r ? void 0 : r.isFromRankIntro) {
      this.dispatchEvent("RankModel_updTime");
      if (UserModel.getInstance().getMainGameType() === MjGameType.Tile2Normal) {
        ControllerManager.getInstance().pushViewByController("Tile2GameController");
      } else {
        ControllerManager.getInstance().pushViewByController("MainGameController");
      }
    }
  }
}