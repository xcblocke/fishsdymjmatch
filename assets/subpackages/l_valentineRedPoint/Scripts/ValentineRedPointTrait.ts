import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { ERedDotType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ValentineRedPointTrait")
export default class ValentineRedPointTrait extends Trait {
  static traitKey = "ValentineRedPoint";
  onInitViewBhv_crtTls(t, e) {
    e();
    var n = this.isCurrentGuide(),
      r = this.isShouldOpen(),
      i = this.isActualOpen();
    if (n) {
      this.dispatchEvent(EGameEvent.RedDot_clearNotify, ERedDotType.Valentine);
    } else {
      if (r && !i) {
        this.dispatchEvent(EGameEvent.RedDot_addNotify, ERedDotType.Valentine);
      } else {
        this.dispatchEvent(EGameEvent.RedDot_clearNotify, ERedDotType.Valentine);
      }
    }
  }
  isCurrentGuide() {
    var t = UserModel.getInstance().normalData.getLevelId(),
      e = UserModel.getInstance().isGuideFinished();
    return 1 === t && !e;
  }
  isShouldOpen() {
    var t,
      e = mj.getClassByName("ValentineModel");
    return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.isActivityOpen();
  }
  isActualOpen() {
    var t,
      e = mj.getClassByName("ValentineModel");
    return null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.isActualActivityOpen();
  }
}