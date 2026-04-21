import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("PropShowTrait")
export default class PropShowTrait extends Trait {
  static traitKey = "PropShow";
  onLoad() {
    super.onLoad.call(this);
  }
  onGameUI_onLoad(t, e) {
    if (this.isGuideActive()) e();else {
      var r = UserModel.getInstance().getCurrentGameType(),
        o = UserModel.getInstance().getGameDataByGameType(r);
      if (o) {
        if (cc.isValid(t.ins)) {
          t.ins.updateHitTipsProp(o.getHitTipsNums());
          t.ins.updateShuffleProp(o.getShuffleNums());
        }
        e();
      } else e();
    }
  }
  isGuideActive() {
    var t = mj.getClassByName("GuideTrait");
    return !(!t || !t.getInstance() || true !== t.getInstance().eventEnabled || UserModel.getInstance().isGuideFinished());
  }
}