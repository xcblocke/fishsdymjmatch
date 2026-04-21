import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("PropUsedForceInterAdTrait")
export default class PropUsedForceInterAdTrait extends Trait {
  static traitKey = "PropUsedForceInterAd";
  onLoad() {
    super.onLoad.call(this);
  }
  onAdMgr_chkInterAd(e, t) {
    var r;
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if ("result_show" === (null === (r = e.args) || void 0 === r ? void 0 : r[2])) {
        if (UserModel.getInstance().getCurrentGameType() === MjGameType.Normal) {
          var n = mj.getClassByName("InterAdStartLevelTrait");
          if (n && n.getInstance()) {
            var o = n.getInstance();
            if (true === o.eventEnabled) {
              var a = o.getStartLevel();
              if (UserModel.getInstance().normalData.getLevelId() <= a) {
                var i = UserModel.getInstance().normalData,
                  u = i.localData.usedShuffle || 0,
                  p = i.localData.usedHitTips || 0;
                if (u > 0 || p > 0) {
                  t({
                    returnVal: true,
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                  });
                } else {
                  t();
                }
              } else t();
            } else t();
          } else t();
        } else t();
      } else t();
    } else t();
  }
}