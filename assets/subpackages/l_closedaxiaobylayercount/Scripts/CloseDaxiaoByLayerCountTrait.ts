import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("CloseDaxiaoByLayerCountTrait")
export default class CloseDaxiaoByLayerCountTrait extends Trait {
  static traitKey = "CloseDaxiaoByLayerCount";
  onLoad() {
    super.onLoad.call(this);
  }
  onDaxiaoCardType_isGen(t, e) {
    var r;
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Tile2Normal) {
      var o = t.args[0],
        n = this._traitData.maxLayerIndex || 999;
      if (((null === (r = null == o ? void 0 : o.getTileMapObject()) || void 0 === r ? void 0 : r.maxLayerIndex) + 1 || 0) >= n) {
        e({
          returnVal: false,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        e();
      }
    } else e();
  }
}