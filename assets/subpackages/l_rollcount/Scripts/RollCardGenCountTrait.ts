import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RollCardGenCountTrait")
export default class RollCardGenCountTrait extends Trait {
  static traitKey = "RollCardGenCount";
  onLoad() {
    super.onLoad.call(this);
  }
  onRollCardType_getPCount(t, r) {
    var e = t.args[0].gameType;
    if (e === MjGameType.Normal || e === MjGameType.Tile2Normal) {
      var o = t.beforReturnVal + this._traitData.addCount;
      r({
        returnVal: o = Math.max(1, o)
      });
    } else r();
  }
}