import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("NormalShowBackSwitchTrait")
export default class NormalShowBackSwitchTrait extends Trait {
  static traitKey = "NormalShowBackSwitch";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptSetLv_setData(t, e) {
    var r = t.ins;
    this.switchNormalShowBack(r);
    e();
  }
  onIptT2SetLv_setData(t, e) {
    var r = t.ins;
    this.switchNormalShowBack(r);
    e();
  }
  isCurLevelCanGainBoxReward(t) {
    if (t.gameContext.gameType != MjGameType.Normal && t.gameContext.gameType != MjGameType.Tile2Normal) return false;
    var e = mj.getClassByName("NormalBoxTrait");
    if (e && true === e.getInstance().eventEnabled) return 1 === e.getInstance().getRemainingProgress();
    var r = mj.getClassByName("LevelBoxTrait");
    return !(!r || true !== r.getInstance().eventEnabled) && 1 === r.getInstance().getRemainingProgress();
  }
  switchNormalShowBack(t) {
    var e = this.isCurLevelCanGainBoxReward(t),
      r = mj.getClassByName("NormalShowBackTrait");
    r && (r.getInstance().eventEnabled = e);
    var o = mj.getClassByName("Tile2NormalShowBackTrait");
    o && (o.getInstance().eventEnabled = e);
  }
}