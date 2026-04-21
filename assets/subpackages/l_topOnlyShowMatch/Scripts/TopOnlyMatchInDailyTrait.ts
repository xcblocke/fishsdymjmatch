import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("TopOnlyMatchInDailyTrait")
export default class TopOnlyMatchInDailyTrait extends Trait {
  static traitKey = "TopOnlyMatchInDaily";
  isMatchGameType(t) {
    var e,
      i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [],
      a = MjGameType[t];
    return i.includes(a);
  }
  onLoad() {
    var e;
    super.onLoad.call(this);
    null === (e = this.traitData) || void 0 === e || e.gameTypes;
  }
  onTOSMatch_isMatchGType(t, e) {
    var i,
      a = null === (i = t.args) || void 0 === i ? void 0 : i[0];
    if (this.isMatchGameType(a)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
}