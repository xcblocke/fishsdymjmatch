import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("TopOnlyScoreInNormalTrait")
export default class TopOnlyScoreInNormalTrait extends Trait {
  static traitKey = "TopOnlyScoreInNormal";
  isMatchGameType(t) {
    var e,
      r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [],
      o = MjGameType[t];
    return r.includes(o);
  }
  onLoad() {
    var e;
    super.onLoad.call(this);
    null === (e = this.traitData) || void 0 === e || e.gameTypes;
  }
  onTOSScore_isMatchGType(t, e) {
    var r,
      o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
    if (this.isMatchGameType(o)) {
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