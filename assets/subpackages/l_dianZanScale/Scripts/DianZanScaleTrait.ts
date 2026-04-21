import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("DianZanScaleTrait")
export default class DianZanScaleTrait extends Trait {
  static traitKey = "DianZanScale";
  onDianZanBhv_getScale(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Tile2Normal) {
      var r = (t.args && t.args.length > 0 ? t.args[0] : 1) * this.traitData.scale;
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: r
      });
    } else e();
  }
}