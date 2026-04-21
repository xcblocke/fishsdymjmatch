import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { WatchAdGetPropType } from './WatchAdGetPropView';
@mj.trait
@mj.class("WatchAdGetPropNumTrait")
export default class WatchAdGetPropNumTrait extends Trait {
  static traitKey = "WatchAdGetPropNum";
  onWatchAdCtrl_itemNum(t, e) {
    var r, o, i, n, s;
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal) {
      var u,
        d = t.ins.getPropType(),
        h = null !== (o = null === (r = this.traitData) || void 0 === r ? void 0 : r.nums) && void 0 !== o ? o : {};
      u = d === WatchAdGetPropType.shuffle ? null !== (i = h.shuffle) && void 0 !== i ? i : 1 : d === WatchAdGetPropType.hitTips ? null !== (n = h.hitTips) && void 0 !== n ? n : 1 : null !== (s = h.revert) && void 0 !== s ? s : 1;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: u
      });
    } else e();
  }
}