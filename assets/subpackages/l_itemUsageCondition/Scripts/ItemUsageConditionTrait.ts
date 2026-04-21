import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { EItemType } from '../../../Scripts/user/IUserData';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ItemUsageConditionTrait")
export default class ItemUsageConditionTrait extends Trait {
  static traitKey = "ItemUsageCondition";
  onItemWarning_check(e, t) {
    var r = mj.getClassByName("PropInitTrait");
    if (r && r.getInstance().eventEnabled) {
      if (UserModel.getInstance().getMainGameType() !== MjGameType.Tile2Normal) t();else {
        var n = UserModel.getInstance().getCurrentGameType(),
          o = r.getInstance().isUnlocked(n, EItemType.Shuffle);
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: o
        });
      }
    } else t();
  }
}