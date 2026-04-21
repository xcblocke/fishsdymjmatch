import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ChangeOpenTipsTrait")
export default class ChangeOpenTipsTrait extends Trait {
  static traitKey = "ChangeOpenTips";
  onLoad() {
    super.onLoad.call(this);
  }
  onHallRankBLockTt_getLv(t, r) {
    var e = t.args[0];
    r({
      returnType: TraitCallbackReturnType.jump,
      returnVal: e + 1
    });
  }
  onHallRankBLockTt_getOTips(t, r) {
    var e = t.args[0],
      n = I18NStrings.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(e + 1));
    r({
      returnType: TraitCallbackReturnType.jump,
      returnVal: n
    });
  }
  onTaskTt_getLv(t, r) {
    var e = t.args[0];
    r({
      returnType: TraitCallbackReturnType.jump,
      returnVal: e + 1
    });
  }
  onTaskTt_getOTips(t, r) {
    var e = t.args[0],
      n = I18NStrings.get("MahjongTiles_ProHint_2", "Unlock at Level {0}").replace("{0}", String(e + 1));
    r({
      returnType: TraitCallbackReturnType.jump,
      returnVal: n
    });
  }
}