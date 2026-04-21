import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RankFilterListTrait")
export default class RankFilterListTrait extends Trait {
  static traitKey = "RankFilterList";
  onRankModel_filterList(t, r) {
    var e,
      n = t.ins;
    r({
      returnVal: ((null === (e = n.localData.rankGameData) || void 0 === e ? void 0 : e.rankList) || []).filter(function (t) {
        return t.score > 0 || n.isMySelf(t.id);
      }),
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onRankItem_updRank(t, r) {
    var e = t.ins;
    if (e.isZeroScore() && e.isMySelf()) {
      e.setRankString("-");
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else r();
  }
}