import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
@mj.trait
@mj.class("ClassicBaseInterAdTrait")
export default class ClassicBaseInterAdTrait extends Trait {
  static traitKey = "ClassicBaseInterAd";
  static nextTimeOut = 900;
  onLoad() {
    super.onLoad.call(this);
  }
  onClcFailBhv_start(e, t) {
    var r;
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Classic) {
      var a = e.args[0];
      if (null !== (r = null == a ? void 0 : a.data) && void 0 !== r && r.skipInterAd) t();else {
        var o = AdManager.getInstance().checkInterAdIsReady(),
          n = isNetworkAvailable();
        if (o || n) {
          DotGameAdShowStage.dot(true, "endlessGameOver");
          AdManager.getInstance().playInterAd(EAdPosition.InGameInsertScreen_PauseContinue, {
            onSuccess: function () {
              t();
            },
            onFailed: function () {
              t();
            }
          }, "endless_game_over", {
            adTimeType: "endlessGameOverAd"
          });
        } else t();
      }
    } else t();
  }
}