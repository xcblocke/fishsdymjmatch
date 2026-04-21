import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RollCardNotShowNormalTrait")
export default class RollCardNotShowNormalTrait extends Trait {
  static traitKey = "RollCardNotShowNormal";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGameCtrl_getTile(t, r) {
    var e,
      o = t.ins;
    if ((null !== (e = null == o ? void 0 : o.gameType) && void 0 !== e ? e : MjGameType.None) === MjGameType.Normal) {
      var n = "string" == typeof t.beforReturnVal ? t.beforReturnVal : "";
      if (n) {
        var i = this.removeOneType(n, ETileType.RollCard);
        if (i !== n) {
          r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: i
          });
        } else {
          r();
        }
      } else r();
    } else r();
  }
  removeOneType(t, r) {
    if (!t || t.indexOf(r) < 0) return t;
    var e = t.split(","),
      o = e.indexOf(r);
    if (o < 0) return t;
    e.splice(o, 1);
    return e.join(",");
  }
}