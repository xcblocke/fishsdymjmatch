import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RankSortTrait")
export default class RankSortTrait extends Trait {
  static traitKey = "RankSort";
  onRankRbtLgc_getTargetIdx(t, r) {
    var e = __read(t.args, 4),
      n = (e[0], e[1], e[2]);
    e[3];
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: n
    });
  }
}