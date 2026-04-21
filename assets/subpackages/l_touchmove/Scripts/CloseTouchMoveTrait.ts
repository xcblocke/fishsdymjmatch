import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("CloseTouchMoveTrait")
export default class CloseTouchMoveTrait extends Trait {
  static traitKey = "CloseTouchMove";
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("Cltm_IsIgnoreTile2")
  isIgnoreTile2() {
    return false;
  }
  onGtc_isOpenTouchMove(t, e) {
    if (t.ins.getGameType() == MjGameType.Tile2Normal && this.isIgnoreTile2()) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: false
      });
    }
  }
  onIptBTchEnd_checkIsSame(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: true
    });
  }
}