import Trait from '../../../Scripts/framework/trait/Trait';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("RollOnceOpenHardTrait")
export default class RollOnceOpenHardTrait extends Trait {
  static traitKey = "RollOnceOpenHard";
  onRollOnceOpen_isOpened(e, t) {
    var r,
      o,
      i,
      n,
      a,
      l,
      p,
      d,
      f,
      v = null === (r = e.args) || void 0 === r ? void 0 : r[0],
      y = null === (o = e.args) || void 0 === o ? void 0 : o[1];
    if (void 0 !== v && void 0 !== y) {
      if ((null !== (p = null === (l = null === (a = null === (n = null === (i = UserModel.getInstance()) || void 0 === i ? void 0 : i.getGameDataByGameType) || void 0 === n ? void 0 : n.call(i, MjGameType.Normal)) || void 0 === a ? void 0 : a.getLevelId) || void 0 === l ? void 0 : l.call(a)) && void 0 !== p ? p : 0) >= (Number(null !== (f = null === (d = this._traitData) || void 0 === d ? void 0 : d.level) && void 0 !== f ? f : 20) || 20) && this.isTypeHardLevel(v, y)) {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
        return;
      }
      t();
    } else t();
  }
  isTypeHardLevel(e, t) {
    return e === MjGameType.Travel ? TravelGameModel.getInstance().isHardLevel(t) : ExtractTool.getInstance().isHardLevel(t);
  }
}